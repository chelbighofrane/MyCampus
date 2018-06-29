import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events,  ModalController , AlertController} from 'ionic-angular';
import {  ProductListService} from '../../../../servicesCafeteria/product-list/product-list.service';
import {  ToastService} from '../../../../servicesCafeteria/toast.service';
import { Observable } from 'rxjs/Observable';
import { Product } from '../../../../models/product.model';
import firebase from 'firebase';
/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

  sideMenuContent: {name: string, path: string}[] = [
    {name: 'Gestion Produits', path: 'GestionProduitPage'},
    {name: 'Accueil', path: 'CafeteriaHomePage'},
    {name: 'Panier', path: 'PanierPage'},
    {name: 'Mes Commandes', path: 'OrdersPage'},
];

sale:boolean;
length: number;
productList$ : Observable <Product[]>;
products: Product[] = [];
category:string;
type:string;



constructor(
public navCtrl: NavController,
public navParams: NavParams,
private product:ProductListService,
private toast:ToastService,
public events: Events,
private modal: ModalController,
private alertCtrl: AlertController,) {
    
        this.setupSideMenuContent();
        this.category=this.navParams.data.category;
        this.type=this.navParams.data.type;
    
}
setupSideMenuContent() {
this.events.publish('sideMenu:changeContent', this.sideMenuContent);
}



ngOnInit() {
    this.length = 0;
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
                if (this.products[i].category !==this.category || this.products[i].type !== this.type) {
                    this.products.splice(i, 1);
                    i--;
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

}

promotion:boolean;

onSale()
{
this.sale=!this.sale;
console.log('Cucumbers new state:' + this.promotion);
}



Commenter(p,user)
{
    console.log(p);
    const myData= {
        commentProduct:p,
        commentuser: user
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

Reserver(p){
    const myData= {
        name: p.name,
        price: p.price,
        onSale: p.onSale,
        priceOnSale: p.priceOnSale
      };
     
 const myModal= this.modal.create('ModalCommentaireCafeteriaPage'
 , {data: myData}, { cssClass: 'alertcss' });
  myModal.present();

}

}
