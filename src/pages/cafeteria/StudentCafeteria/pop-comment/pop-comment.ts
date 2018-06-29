import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {  ProductListService} from '../../../../servicesCafeteria/product-list/product-list.service';
import { ToastService } from '../../../../servicesCafeteria/toast.service';

/**
 * Generated class for the PopCommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pop-comment',
  templateUrl: 'pop-comment.html',
})
export class PopCommentPage {

  nbretoile : number = 0;
  data : any;
  note : string="";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private view : ViewController,
     private product:ProductListService
    ,public toast: ToastService
  ) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PopCommentPage');
  }

  ionViewWillLoad()
  {
    this.data =this.navParams.get('data');
    console.log(this.data.commentProduct);
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

    let p = this.data.commentProduct;
    let comments : string = this.data.commentaires.comment;
    let userid : string = this.data.commentuser;
    console.log(this.nbretoile);
    console.log(comments);
    console.log(userid);

    if(p.feedbacks==null)
    { 
      p.feedbacks=[];

    }
    let dt= new Date().toString();
    
    p.feedbacks.push({userID:userid , content:comments, rate: this.nbretoile, date: dt });
    //console.log(mealo);
    //console.log(mealo.feedbacks.length);

    this.product.editItem(p);
    this.view.dismiss(p);
    
  }


}
