import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Modal, ModalController } from 'ionic-angular';
import { Meal } from '../../../models/meal.model';
import { MealService } from '../../../services_canteen/meal.service';
import { ToastService } from '../../../servicesCafeteria/toast.service';

/**
 * Generated class for the ModalPageCommentaireConteenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-page-commentaire-conteen',
  templateUrl: 'modal-page-commentaire-conteen.html',
})
export class ModalPageCommentaireConteenPage {

  data : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private view : ViewController,private modal: ModalController,
  private mealserv:MealService,public toast: ToastService) {

    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPageCommentaireConteenPage');
  }

  ionViewWillLoad()
  {
    this.data =this.navParams.get('data');
    console.log(this.data.commentmeal);
  }

  dismiss()
  {
    
    this.view.dismiss();
  }

  repondrecomment(commentaire : any)
  {
    console.log(commentaire.comment);

    const myData= {
      commentmeal: this.data.commentmeal,
      commentuser: this.data.commentuser,
      commentaires: commentaire
    };

    if(myData.commentuser=='canteen')
    {
      console.log('canteen');
      let mealo :Meal = myData.commentmeal;
      if(mealo.feedbacks==null)
      {
        mealo.feedbacks=[];

      }
      let dt= new Date().toString();
    
      mealo.feedbacks.push({userID:myData.commentuser , content:commentaire.comment, rate: 7, date: dt });
      console.log(mealo.feedbacks);

      this.mealserv.editmeal(mealo).then(()=>{
        console.log(`Commentaire ajouter avec succes!`);
      });

    }
    else
    {
      const mymodal :Modal= this.modal.create('PopupCommentPage', {data: myData},
      {
         cssClass: "my-popup-modal",
      
      });
  
      mymodal.present();
  
      mymodal.onDidDismiss((value)=> {
        this.data.commentmeal= value;
      })

    }
  
  }

}
