import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { MealService } from '../../../services_canteen/meal.service';
import { ToastService } from '../../../servicesCafeteria/toast.service';
import { Meal } from '../../../models/meal.model';

/**
 * Generated class for the PopupCommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popup-comment',
  templateUrl: 'popup-comment.html',
})
export class PopupCommentPage {

  nbretoile : number = 0;
  data : any;
  note : string="";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private view : ViewController,private mealserv:MealService,public toast: ToastService
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopupCommentPage');
    
  }

  ionViewWillLoad()
  {
    this.data =this.navParams.get('data');
    console.log(this.data.commentmeal);
  }

  dismiss()
  {
    
    this.view.dismiss(this.data.commentmeal);
  }

  etoile1()
  {
    this.nbretoile=1;
    this.note="Mauvais";
  }

  etoile2()
  {
    this.nbretoile=2;
    this.note="Acceptable";
  }

  etoile3()
  {
    this.nbretoile=3;
    this.note="Bien";
  }

  etoile4()
  {
    this.nbretoile=4;
    this.note="Très bien";
  }

  etoile5()
  {
    this.nbretoile=5;
    this.note="Excellent";
  }


  savecomment(etoile : number)
  {
    console.log(this.nbretoile);

    let mealo :Meal = this.data.commentmeal;
    let comments : string = this.data.commentaires.comment;
    let userid : string = this.data.commentuser;
    console.log(this.nbretoile);
    console.log(mealo.starterRepat);
    console.log(comments);
    console.log(userid);

    if(mealo.feedbacks==null)
    { 
      mealo.feedbacks=[];

    }
    let dt= new Date().toString();
    
    mealo.feedbacks.push({userID:userid , content:comments, rate: this.nbretoile, date: dt });
    //console.log(mealo);
    //console.log(mealo.feedbacks.length);

    this.mealserv.editmeal(mealo).then(()=>{
      console.log(`Commentaire ajouter avec succes!`);
      
      this.view.dismiss(mealo);
    });
  }

}
