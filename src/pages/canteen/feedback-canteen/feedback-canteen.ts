import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events,  ModalController, Modal, LoadingController} from 'ionic-angular';
import { MealService } from '../../../services_canteen/meal.service';
import { Meal } from '../../../models/meal.model';

/**
 * Generated class for the FeedbackCanteenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@IonicPage()
@Component({
  selector: 'page-feedback-canteen',
  templateUrl: 'feedback-canteen.html',
})





export class FeedbackCanteenPage {

  sideMenuContent: {name: string, path: string}[] = [
    {name: 'Home', path: 'CanteenHomePage'},
    {name: 'Menu', path: 'MenuCanteenPage'},
    {name: 'Mon compte', path: 'AccountPage'},
    {name: 'test', path: 'TestmodalPage'}
];


mealList$:any;
meals: any;
meal:any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public events:Events
    ,private mealservice:MealService
  ,private modal: ModalController,public loadingCtrl:LoadingController) {
    this.setupSideMenuContent();

    //loading 
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();


    this.mealList$ = this.mealservice.getAllmeal()
    .snapshotChanges().map( changes=>{
      return changes.map( c=>({
        key: c.payload.key, ...c.payload.val(),
      }));
    });
    console.log(this.mealList$);
    
    this.mealList$.subscribe((value)=>{
      this.meals=value;
      console.log(this.meals);
      this.meal=this.meals.reverse();
      console.log(this.meal);
      let sum : number;
      let i : number;
      for(let element of this.meals)
      {
        sum=0;
        i=0;
        
        if(element.feedbacks != null)
        {
          for(let feed of element.feedbacks)
          {
            if(feed.userID!='canteen')
            {
              sum+= feed.rate;
              i++;
            }
          }

          if(i!=0)
          {
            element.moyennefeed= sum/i ;
          }
          else
          {
            element.moyennefeed=0;
          }
          
        
        }
        else
        {
          element.moyennefeed=0;
        }
      }
        
      
      console.log(this.meals);
      
    })

    loading.dismiss();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackCanteenPage');
  }

  setupSideMenuContent() {
    this.events.publish('sideMenu:changeContent', this.sideMenuContent);
}

/*
openMenu() {
  let actionSheet = this.actionSheetCtrl.create({
    title: 'Modify your album',
    
    buttons: [
      {
        text: 'Destructive',
        role: 'html',
        handler: () => {
          console.log('Destructive clicked');
        }
      },{
        text: '<ion-list><ion-list-header>Recent Conversations</ion-list-header><ion-item><ion-avatar item-start><img src="assets/img/avatar-finn.png"></ion-avatar><h2>Finn</h2><h3>I\'m a big deal</h3><p>Listen, I\'ve had a pretty messed up day...</p></ion-item>',
        role: 'component',
        handler: () => {
          console.log('Archive clicked');
        }
      },{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  actionSheet.present();
}
*/
openMenu(meal : Meal,iduser: string)
{

 
  

  const myData= {
    commentmeal: meal,
    commentuser: iduser
  };

  const mymodal :Modal= this.modal.create('ModalPageCommentaireConteenPage', {data: myData},
  {
    cssClass: "my-modal",
    
   
  });

  mymodal.present();

  mymodal.onDidDismiss((data)=> {
    console.log(data);
  })
}

}

