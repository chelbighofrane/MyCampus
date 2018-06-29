import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Observable } from '@firebase/util';
import { Product } from '../../../models/product.model';
import {  ProductListService} from '../../../servicesCafeteria/product-list/product-list.service';


/**
 * Generated class for the FeedbacksCafeteriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedbacks-cafeteria',
  templateUrl: 'feedbacks-cafeteria.html',
})
export class FeedbacksCafeteriaPage {
  fab:boolean;
  sale:boolean;
  length: number;
  productList$ : Observable <Product[]>;
  products: Product[] = [];
 

  constructor(public navCtrl: NavController, public navParams: NavParams
  , private product:ProductListService,private modal: ModalController) {
    
  }

  ngOnInit() {
    this.length = 0;
    this.fab = false;
    this.sale = false;
    this.product
        .getProductList()//db list
        .snapshotChanges()//key and value
        //foreach changes return an object 
        .map(changes => {
            return changes.map(c => ({
                key: c.payload.key, ...c.payload.val()
            }))
        }).subscribe(
        res => {
            this.products = res;
            console.log(this.length);
            for (let i = 0; i < this.products.length; i++) {
                if ( this.products[i].feedbacks ==null) {
                    this.products.splice(i, 1);
                    i--;
                } 
            }
            let sum : number;
      let i : number;
      for(let element of this.products)
      {
        sum=0;
        i=0;
        
        if(element.feedbacks != null)
        {
          for(let feed of element.feedbacks)
          {
            if(feed.userID!='cafeteria')
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
            this.length = this.products.length;
            console.log(this.products);
           
        },
        error => {
            console.log('error');
        });
  
   
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbacksCafeteriaPage');
  }

  openMenu(p ,iduser: string)
{

  const myData= {
    commentProduct: p,
    commentuser: iduser
  };

  const mymodal = this.modal.create('ModalFeedbackPage', {data: myData},
  {
    cssClass: "my-modal",
    
   
  });

  mymodal.present();

  mymodal.onDidDismiss((data)=> {
    console.log(data);
  })
}

}
