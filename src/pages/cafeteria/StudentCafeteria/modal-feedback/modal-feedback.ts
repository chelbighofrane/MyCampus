import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import {  ProductListService} from '../../../../servicesCafeteria/product-list/product-list.service';
import { ToastService } from '../../../../servicesCafeteria/toast.service';
import { Product } from '../../../../models/product.model';

/**
 * Generated class for the ModalFeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-feedback',
  templateUrl: 'modal-feedback.html',
})
export class ModalFeedbackPage {

  data : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private view : ViewController,
  private modal: ModalController,
  private product:ProductListService,
  public toast: ToastService) {

    

  }

  ionViewDidLoad() {
    
  }

  ionViewWillLoad()
  {
    this.data =this.navParams.get('data');
    console.log(this.data.commentProduct);
  }

  dismiss()
  {
    
    this.view.dismiss();
  }

  repondrecomment(commentaire : any)
  {
    console.log(commentaire.comment);

    const myData= {
      commentProduct: this.data.commentProduct,
      commentuser: this.data.commentuser,
      commentaires: commentaire
    };

    if(myData.commentuser=='cafeteria')
    {
      console.log('cafeteria');
      let p :Product= myData.commentProduct;
      if(p.feedbacks==null)
      {
       p.feedbacks=[];

      }
      let dt= new Date().toString();
    
      p.feedbacks.push({userID:myData.commentuser , content:commentaire.comment, rate: 7, date: dt });
      console.log(p.feedbacks);

      this.product.editItem(p);
    
    }
    else
    {
      const mymodal = this.modal.create('PopCommentPage', {data: myData},
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
