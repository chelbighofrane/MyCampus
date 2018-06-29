import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, LoadingController } from 'ionic-angular';
import { ReserverService } from '../../../services_canteen/reserver.service';
import { ToastService } from '../../../servicesCafeteria/toast.service';

/**
 * Generated class for the ReservationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */




let fromMonday = [],
i = 0;
for (i; i < 7; i++) 
{
  fromMonday.push(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + i));
}

@IonicPage()
@Component({
  selector: 'page-reservation',
  templateUrl: 'reservation.html',
})
export class ReservationPage {

  

  sideMenuContent: {name: string, path: string}[] = [
    {name: 'Menu', path: 'MenuCanteenPage'},
    {name: 'Feedback', path: 'FeedbackCanteenPage'},
    {name: 'Mon compte', path: 'AccountPage'},
    {name: 'MenuEtudiant', path: 'EtudiantMenuPage'}
];


reserveliste$: any;
demo: Array < Date > = fromMonday;
reserveDate : any[];
reservefiltre : any[];
reservations : any;
lastDate : any=this.demo[0];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public events: Events,public reservationservice:ReserverService
  ,public toast: ToastService,public loadingCtrl:LoadingController) {
    this.setupSideMenuContent();
      console.log(this.demo);
      
      //loading 
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
    
      loading.present();

    this.reserveliste$ = this.reservationservice.getAllreservation()
    .snapshotChanges().map( changes=>{
      return changes.map( c=>({
        key: c.payload.key, ...c.payload.val(),
      }));
    });
    console.log(this.reserveliste$);
    this.reserveliste$.subscribe((value)=>{
      this.reservations=value;
        //console.log(this.reservations);
      for(let element of this.reservations)
      {
          //console.log(this.demo[0].getDate());
          //console.log(new Date(element.meal).getDate());
          if((new Date(element.meal).getFullYear()==this.demo[0].getFullYear())
        &&(new Date(element.meal).getMonth()==this.demo[0].getMonth())
        &&(new Date(element.meal).getDate()==this.demo[0].getDate()))
        {
          //console.log("if");
          if(this.reserveDate==null)
          {
            this.reserveDate =[];
          }
          this.reserveDate.push(element);
          
        }
        
      }
      if(this.reservefiltre==null)
        {
          this.reservefiltre= [];
        }
        this.reservefiltre=this.reserveDate;
        //console.log(this.reservefiltre);
        //console.log(this.reserveDate);
    })

    loading.dismiss();

  }

  setupSideMenuContent() {
    this.events.publish('sideMenu:changeContent', this.sideMenuContent);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservationPage');
  }

  onSearchChange(searchValue : string ) { 
    let test : boolean;
    if(searchValue!=null)
    {
      this.reservefiltre=[];
    
      for(let element of this.reserveDate)
      {
        test=true;
        for(i=0;i<searchValue.length;i++)
        {
          if(searchValue.charAt(i).toLowerCase()!=element.userID.charAt(i).toLowerCase())
          {
            test=false;
            break;
          }
  
        }
        if(test==true)
        {
          this.reservefiltre.push(element);
        }
      }
      
    }
    else
    {
      this.reservefiltre=this.reserveDate;
    }
    
   
    console.log(searchValue);
  }

  changeDate(value :any)
  {

    this.reserveDate =[];

    for(let element of this.reservations)
      {
          //console.log(value.getDate());
          //console.log(new Date(element.meal).getDate());
          if((new Date(element.meal).getFullYear()==new Date(value).getFullYear())
        &&(new Date(element.meal).getMonth()==new Date(value).getMonth())
        &&(new Date(element.meal).getDate()==new Date(value).getDate()))
        {

          this.reserveDate.push(element);
          
        }
        
      }

      this.reservefiltre= [];
      this.reservefiltre=this.reserveDate;
      this.lastDate=value;

    console.log(this.reserveDate);
    console.log(new Date(value).getDate());
  }

  onRemove(res:any)
  {
    this.reservefiltre.splice(this.reservefiltre.indexOf(res),0);
    this.reserveDate.splice(this.reserveDate.indexOf(res),0);
    this.reservations.splice(this.reservations.indexOf(res),0);
    res.datechack= new Date().toString();
    res.checked= 'true';
    this.reservationservice.editreservation(res).then(()=>{
      this.toast.show(`${res.userID} servi !`);
      this.changeDate(this.lastDate);
      this.ionViewDidLoad();
    })
  }

}
