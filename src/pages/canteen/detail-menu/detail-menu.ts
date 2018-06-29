import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, AlertController, LoadingController } from 'ionic-angular';
import { Meal } from '../../../models/meal.model';
import { MealService } from '../../../services_canteen/meal.service';
import { ToastService } from '../../../servicesCafeteria/toast.service';

import { Camera, CameraOptions } from '@ionic-native/camera';

import firebase from 'firebase';
import { FIREBASE_CONFIG } from './../../../environments/firebase.credentials';


/**
 * Generated class for the DetailMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-menu',
  templateUrl: 'detail-menu.html',
})
export class DetailMenuPage {

  sideMenuContent: {name: string, path: string}[] = [
    {name: 'Home', path: 'CanteenHomePage'},
    {name: 'Mon compte', path: 'AccountPage'}
];

test : number;
cmt="test";
startrepat=true;
startdinner=true;
dessertrepas=true;
dessertdinner=true;
mainrepas=true;
maindinner=true;
addrepas=false;
adddinner=false;
defaultMsgEntre="entrer le plat d'entrée";
defaultMsgDessert="entrer dessert";
defaultMsgMainCourse="entrer plat principale";
photosRepat : any;
photosDinner : any;
testmeal :Meal;

photo:string;

datemeal:Date;
meals:any;
meal:Meal;
mealList$ : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  private events:Events,private mealserv:MealService,public toast: ToastService
  ,public camera:Camera,
  public alertCtrl:AlertController,public loadingCtrl:LoadingController) {
    this.setupSideMenuContent();

    //loading 
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();


    if (!firebase.apps.length) {
      firebase.initializeApp(FIREBASE_CONFIG);
      
  }
  

    this.datemeal=this.navParams.get('meal');
    this.mealList$ = this.mealserv.getAllmeal()
    .snapshotChanges().map( changes=>{
      return changes.map( c=>({
        key: c.payload.key, ...c.payload.val(),
      }));
    });

    this.mealList$.subscribe((value)=>{
      this.meals=value;
      //console.log(this.meals);
      for(let element of this.meals)
      {
        //console.log(this.datemeal.getFullYear());
        //console.log(new Date(element.date).getFullYear());
        if((new Date(element.date).getFullYear()==this.datemeal.getFullYear())
      &&(new Date(element.date).getMonth()==this.datemeal.getMonth())
      &&(new Date(element.date).getDate()==this.datemeal.getDate()))
      {
        //console.log("if");
        this.meal=element;
      }
      
      }
      if(this.meal.photoGalleryRepat != null)
      {
        let i=0;
        this.photosRepat=[];
        for(let pic of this.meal.photoGalleryRepat)
        {console.log(pic);
          firebase.storage().ref('repat/'+pic+'.jpg')
          .getDownloadURL().then((url)=>{
            console.log(pic+" campos");
              this.photosRepat.push({URLI : url, PIC : pic});
              
          })
          i++;

        }
      }
      if(this.meal.photoGalleryDinner != null)
      {
        let j=0;
        this.photosDinner=[];
        for(let pic of this.meal.photoGalleryDinner)
        {console.log(pic);
          firebase.storage().ref('dinner/'+pic+'.jpg')
          .getDownloadURL().then((url)=>{
            console.log(pic+" campos");
              this.photosDinner.push({URLI : url, PIC : pic});
              
          })
          j++;

        }
      }
    })
    console.log(this.meal);
    
    if(this.meal==null)
    {
      console.log("null");
      this.meal=new Meal();
      this.meal.dessertDinner= this.defaultMsgDessert;
      this.meal.dessertRepat= this.defaultMsgDessert;

      this.meal.mainCourseDinner= this.defaultMsgMainCourse;
      this.meal.mainCourseRepat= this.defaultMsgMainCourse;

      this.meal.starterDinner= this.defaultMsgEntre;
      this.meal.starterRepat= this.defaultMsgEntre;
    }
    
    loading.dismiss();

    

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailMenuPage');
    this.setupSideMenuContent();

  }

  setupSideMenuContent() {
    this.events.publish('sideMenu:changeContent', this.sideMenuContent);
}

deleteImgRepat(img : any)
{


  let prompt = this.alertCtrl.create({
    title: 'Suppression photo',
    message: "Voulez-vous vraiment supprimer cette photo",
    
    buttons: [
      {
        text: 'Annuler',
        cssClass: 'buttoncss',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Confirmer',
        cssClass: 'buttoncss',
        handler: data => {
          console.log('Saved clicked');
          console.log(img);
          let indexmeal= this.meal.photoGalleryRepat.indexOf(img.PIC);
          this.meal.photoGalleryRepat.splice(indexmeal,1);
          this.mealserv.editmeal(this.meal).then(()=>{
                
            this.toast.show(`photo Supprimer avec succes!`);
        
          });
        
          let indextof= this.photosRepat.indexOf(img);
          this.photosRepat.splice(indextof,1);
        
        }
      }
    ]
  });
  prompt.present();


 
}

deleteImgDinner(imd : any)
{

  let prompt = this.alertCtrl.create({
    title: 'Suppression photo',
    message: "Voulez-vous vraiment supprimer cette photo",
    
    buttons: [
      {
        text: 'Annuler',
        cssClass: 'buttoncss',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Confirmer',
        cssClass: 'buttoncss',
        handler: data => {
          console.log('Saved clicked');
          console.log(imd)
          let indexmeal = this.meal.photoGalleryDinner.indexOf(imd.PIC);
          console.log(indexmeal)
          this.meal.photoGalleryDinner.splice(indexmeal,1);
          this.mealserv.editmeal(this.meal).then(()=>{
        
          this.toast.show(`photo Supprimer avec succes!`);

        });
        let indextof = this.photosDinner.indexOf(imd);
        this.photosDinner.splice(indextof,1);
        console.log(indextof);
      }
    }
  ]
});
prompt.present();

  
}

ngOnInit() {
  let acc = document.getElementsByClassName('accordion');
  let i;

  for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener('click', function() {
          this.classList.toggle('active');
          let panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
          } else {
              panel.style.maxHeight = panel.scrollHeight + 'px';
          }
      });
    }
}


onPrendrephotoRepas()
{
  //this.addrepas=true;
  const options1: CameraOptions = {
    quality: 50,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    //taswira bech ye5edh'ha bel camera
    sourceType: this.camera.PictureSourceType.CAMERA,
    //utilisateur inajem ya3mel resize ll foto
    allowEdit:false,
    //height wel width elli bech te5edh'hom
    targetWidth:292,
    targetHeight:150.5
  };
  
  this.camera.getPicture(options1)
    .then(data=>{

      //loading 
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();

      this.photo='data:image/jpeg;base64,'+data;
      
      const storageRef = firebase.storage().ref();
      
      const filename = Math.floor(Date.now()/1000);
      
      
      const imageRef = storageRef.child(`repat/${filename}.jpg`);
      
      //this.test=filename;
      imageRef.putString(this.photo,'data_url').then((snapshot)=>{
        
        this.cmt=filename.toString();
        if(this.meal.photoGalleryRepat== null)
         {
          this.meal.photoGalleryRepat= [];
         }
         
        this.meal.photoGalleryRepat.push(filename);
        

        this.meal.date=this.datemeal.toDateString();
        
        //ajout d'un meal quelque soit repas ou dinner
    if(this.meal.key==null)
    {
      
      this.mealserv.addmeal(this.meal).then(ref=>{
        loading.dismiss();
        this.toast.show(`photo Ajouter avec succes!`);
        
      })
      
    }
    else
    {
      
      this.mealserv.editmeal(this.meal).then(()=>{
        loading.dismiss();
        this.toast.show(`photo ajouter avec succes!`);
        
      })
      
    }
    if(this.photosRepat==null)
    {
       this.photosRepat = [];
    }
    firebase.storage().ref('repat/'+filename+'.jpg')
    .getDownloadURL().then((url)=>{
      /*let testrep:boolean =false;
      for(let elem of this.photosRepat)
      {
        if(elem.PIC==filename)
        {
          testrep=true;
          break;
        }
      }
      if(testrep==false)
      {
        this.photosRepat.push({URLI : url,PIC : filename});
      }*/
    });

    

      });

    })
    .catch(err=>{
      console.log(err);

    })
}



onPrendrephotoDinner()
{
  //this.adddinner=true;

  const options1: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    //taswira bech ye5edh'ha bel camera
    sourceType: this.camera.PictureSourceType.CAMERA,
    //utilisateur inajem ya3mel resize ll foto
    allowEdit:false,
    //height wel width elli bech te5edh'hom
    targetWidth:292,
    targetHeight:150.5
  };
  this.camera.getPicture(options1)
    .then(data=>{

      //loading 
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();


      this.photo='data:image/jpeg;base64,'+data;
      const storageDinnerRef = firebase.storage().ref();
      const filenameDinner = Math.floor(Date.now()/1000);
      const imageDinnerRef = storageDinnerRef.child(`dinner/${filenameDinner}.jpg`);
      imageDinnerRef.putString(this.photo,'data_url').then((snapshot)=>{
        if(this.meal.photoGalleryDinner== null)
         {
          this.meal.photoGalleryDinner= [];
         }
         
        this.meal.photoGalleryDinner.push(filenameDinner);
        

        this.meal.date=this.datemeal.toDateString();
        if(this.meal.key==null)
    {
      
      this.mealserv.addmeal(this.meal).then(ref=>{
        
        loading.dismiss();

        this.toast.show(`photo Ajouter avec succes!`);
        
      })
      
    }
    else
    {
      
      this.mealserv.editmeal(this.meal).then(()=>{
        
        loading.dismiss();
        this.toast.show(`photo ajouter avec succes!`);
        
        
      })
      
    }
    if(this.photosDinner==null)
    {
        this.photosDinner = [];
    }
    firebase.storage().ref('dinner/'+filenameDinner+'.jpg')
    .getDownloadURL().then((url)=>{
/*
      let testdin:boolean =false;
      for(let elem of this.photosDinner)
      {
        if(elem.PIC==filenameDinner)
        {
          testdin=true;
          break;
        }
      }
      if(!testdin)
      {
        this.photosDinner.push({URLI : url,PIC : filenameDinner});
      }
      */
    });

      });

      
    })
    .catch(err=>{
      console.log(err);

    })
}

onRepasStart()
{
  this.startrepat=false;
  this.addrepas=true;
  console.log(this.meal);
}

onDinnerStart()
{
  this.startdinner=false;
  this.adddinner=true;
}

onRepasMain()
{
  this.mainrepas=false;
  this.addrepas=true;
}

onDinnerMain()
{
  this.maindinner=false;
  this.adddinner=true;
}

onRepasDessert()
{
  this.dessertrepas=false;
  this.addrepas=true;
}

onDinnerDessert()
{
  this.dessertdinner=false;
  this.adddinner=true;
}


onAddRepas(mealan: any)
{
 
  //startrp est un input
    if(!mealan.startrp)
    {
      if(this.meal.starterRepat==this.defaultMsgEntre)
      {
        this.meal.starterRepat="";
      }
      console.log("startrp mahouch mawjoud mabadlouch");
    }
    else
    {
      this.meal.starterRepat=mealan.startrp;
      console.log(mealan.startrp);
    }


    //principalrp est un input

    if(!mealan.principalrp)
    {
      if(this.meal.mainCourseRepat==this.defaultMsgMainCourse)
      {
        this.meal.mainCourseRepat="";
      }
      console.log("principalrp mahouch mawjoud mabadlouch");
    }
    else
    {
      this.meal.mainCourseRepat=mealan.principalrp;
      console.log(mealan.principalrp);
    }


    //dessert est un input
    if(!mealan.dessertrp)
    {
      if(this.meal.dessertRepat==this.defaultMsgDessert)
      {
        this.meal.dessertRepat="";
      }
      console.log("dessertrp mahouch mawjoud mabadlouch");
    }
    else
    {
      this.meal.dessertRepat=mealan.dessertrp;
      console.log(mealan.dessertrp);
    }


    this.meal.date=this.datemeal.toDateString();
    console.log(this.meal.date);

    //ajout d'un meal quelque soit repas ou dinner
    if(this.meal.key==null)
    {
      
      this.mealserv.addmeal(this.meal).then(ref=>{
        this.toast.show(`Repat Ajouter avec succes!`);
        this.navCtrl.pop();
      })
      console.log("je suis vide");
    }
    else
    {
      this.mealserv.editmeal(this.meal).then(()=>{
        this.toast.show(`Repat à jour avec succes!`);
        this.navCtrl.pop();
      }) 
      console.log("je ne suis pas vide");
    }


  }

  onAddDinner(mealan: any)
  {
    //startdn est un input
    if(!mealan.startdn)
    {
      if(this.meal.starterDinner==this.defaultMsgEntre)
      {
        this.meal.starterRepat="";
      }
      console.log("startrp mahouch mawjoud mabadlouch");
    }
    else
    {
      this.meal.starterDinner=mealan.startdn;
      console.log(mealan.startdn);
    }


    //principaldn est un input

    if(!mealan.principaldn)
    {
      if(this.meal.mainCourseDinner==this.defaultMsgMainCourse)
      {
        this.meal.mainCourseDinner="";
      }
      console.log("principalrp mahouch mawjoud mabadlouch");
    }
    else
    {
      this.meal.mainCourseDinner=mealan.principaldn;
      console.log(mealan.principaldn);
    }


    //dessert est un input
    if(!mealan.dessertdn)
    {
      if(this.meal.dessertDinner==this.defaultMsgDessert)
      {
        this.meal.dessertDinner="";
      }
      console.log("dessertrp mahouch mawjoud mabadlouch");
    }
    else
    {
      this.meal.dessertDinner=mealan.dessertdn;
      console.log(mealan.dessertdn);
    }


    this.meal.date=this.datemeal.toDateString();
    console.log(this.meal.date);

    //ajout d'un meal quelque soit repas ou dinner
    if(this.meal.key==null)
    {
      
      this.mealserv.addmeal(this.meal).then(ref=>{
        this.toast.show(`Dinner Ajouter avec succes!`);
        this.navCtrl.pop();
      })
      console.log("je suis vide");
    }
    else
    {
      this.mealserv.editmeal(this.meal).then(()=>{
        this.toast.show(`Dinner à jour avec succes!`);
        this.navCtrl.pop();
      })
      console.log("je ne suis pas vide");
    }

  }

  
  
}


