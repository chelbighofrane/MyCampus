import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController, Modal, ModalController, DateTime } from 'ionic-angular';
import { Panier } from '../../../../models/panier.model';
import { Product} from '../../../../models/product.model';
import {  PanierListService} from '../../../../servicesCafeteria/product-list/panier-list-service';
import {  ToastService} from '../../../../servicesCafeteria/toast.service';
import {  ProductListService} from '../../../../servicesCafeteria/product-list/product-list.service';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the ModalCommentaireCafeteriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-commentaire-cafeteria',
  templateUrl: 'modal-commentaire-cafeteria.html',
})
export class ModalCommentaireCafeteriaPage {

  length: number;
  productList$ : Observable <Product[]>;
  products: Product[] = [];
  data:any;
  currentDate;
  paniers: Panier[]=[];
  listPaniers:any=[];
  

  p: Panier = {
    userID:undefined,
    productID:undefined,
    supplements:undefined,
    time:undefined,
    quantity:undefined,
    note:undefined,
    status:undefined,
    date:undefined,
    price:undefined,
    
    
  };
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private view : ViewController,private modal: ModalController,
    private panier:PanierListService, private toast:ToastService,
    private product:ProductListService,) {
      this.length = 0;
      
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
                  if (this.products[i].category !=="fastfood" || this.products[i].type !== "supplements") {
                      this.products.splice(i, 1);
                      i--;
                  } 
              }
             /* console.log(this.listPaniers);
              for (let i = 0; i < this.products.length; i++) {
                
                for (let j = 0; j < this.listPaniers.length; j++) {
                  console.log('amaaan');
                  if (this.products[i].name==this.listPaniers[j])
                      this.listPaniers.splice(i, 1);
                      console.log('amaaan');
                      j--;
                }
              }
              this.length = this.products.length;
              console.log(this.products);
              console.log("woh");
              console.log(this.listPaniers);*/
              
          },
          error => {
              console.log('error');
          });
         
          this.getFormattedDate();
          
  }
  ionViewWillLoad()
  {
    this.data =this.navParams.get('data');
    console.log(this.data.name);
  } 
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalCommentaireCafeteriaPage');
   
  }

  closeModal(){
    this.view.dismiss();
  }

  getFormattedDate(){
    var ob= new Date()
    var year = ob.getFullYear().toString()
    var month = ob.getMonth().toString()
    var day = ob.getDay().toString()
    this.currentDate= year + '-'+ month + '-' + day;
    }
  
  onAdd(p){
 /*   var prices:any =[];
    var names: any=[];
    var j=0
    for (let i = 0; i < this.keys.length; i++) {
      for (let k = 0; k < this.products.length; k++){
      if (this.products[k].key == this.keys[i]) {
          console.log('1');
          prices[j]=this.products[k].price;
          console.log('2');
          console.log(this.products[k].price)
          j++;
      } 
    }
  }
  for (let i = 0; i < this.keys.length; i++) {
    for (let k = 0; k < this.products.length; k++){
    if (this.products[k].key == this.keys[i]) {
        console.log('1');
        names[j]=this.products[k].name;
        console.log('2');
        console.log(this.products[k].name)
        j++;
    } 
  }
  }*/
   p.userID="chelbi.ghofrane@gmail.com";
   p.status="En attente";
   p.productID=this.data.name;
   p.date=this.currentDate;

   if(this.data.onSale){
     p.price=this.data.priceOnSale;
   }
   else{
     p.price= this.data.price;
   }
   this.panier.addItem(p).then(ref=>{
   this.toast.show(`Article ajoute avec succes!`)
   this.navCtrl.setRoot('PanierPage',{key : ref.key})
 });
  }

/*ContinnuerShop(o){
  o.userID="chelbi.ghofrane@gmail.com";
   o.status="En attente";
   o.productID=this.data.s;
   o.date=this.currentDate;
   if(this.data.onSale){
    o.price=this.data.priceOnSale;
  }
  else{
    o.price= this.data.price;
  }
   this.panier.addItem(o).then(ref=>{
   this.toast.show(`Article ajoute avec succes!`)
   this.navCtrl.pop()
 });
}*/

ContinnuerShop(p){
  /*   var prices:any =[];
     var names: any=[];
     var j=0
     for (let i = 0; i < this.keys.length; i++) {
       for (let k = 0; k < this.products.length; k++){
       if (this.products[k].key == this.keys[i]) {
           console.log('1');
           prices[j]=this.products[k].price;
           console.log('2');
           console.log(this.products[k].price)
           j++;
       } 
     }
   }
   for (let i = 0; i < this.keys.length; i++) {
     for (let k = 0; k < this.products.length; k++){
     if (this.products[k].key == this.keys[i]) {
         console.log('1');
         names[j]=this.products[k].name;
         console.log('2');
         console.log(this.products[k].name)
         j++;
     } 
   }
   }*/
    p.userID="chelbi.ghofrane@gmail.com";
    p.status="En attente";
    p.productID=this.data.name;
    p.date=this.currentDate;
 
    if(this.data.onSale){
      p.price=this.data.priceOnSale;
    }
    else{
      p.price= this.data.price;
    }
    this.panier.addItem(p).then(ref=>{
    this.toast.show(`Article ajoute avec succes!`);
    this.closeModal();
  });
   }

}
