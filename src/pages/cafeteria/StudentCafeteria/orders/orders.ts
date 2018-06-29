import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import {  ToastService} from '../../../../servicesCafeteria/toast.service';
import { Observable } from 'rxjs/Observable';
import { AfterViewInit } from '@angular/core';
import {  ProductListService} from '../../../../servicesCafeteria/product-list/product-list.service';
import { Product } from '../../../../models/product.model';
import { Order } from '../../../../models/order.model';
import {  OrderListService} from '../../../../servicesCafeteria/product-list/order-list-service';

/**
 * Generated class for the OrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
})
export class OrdersPage {
sideMenuContent: {name: string, path: string}[] = [
    {name: 'Gestion Produits', path: 'GestionProduitPage'},
    {name: 'Espace Etudiant', path: 'StudentProductPage'},
    {name: 'Accueil', path: 'CafeteriaHomePage'},
    {name: 'Panier', path: 'PanierPage'},
    {name: 'Mes Commandes', path: 'OrdersPage'},

];


length: number;

orders: any = [];
ordersProduct:any []=[]
products: Product[] = [];
totalPrice:number;
colors:string[]=['gray','brown','danger','blue'];
currentDate;

o: Order = {
    userID: undefined,
    panier: undefined,
    dateOrder: undefined,
    status:undefined
};
constructor(
public navCtrl: NavController,
public navParams: NavParams,
private product:ProductListService,
private order:OrderListService,
private toast:ToastService,
public events: Events) {
    
    this.setupSideMenuContent();   
    this.getFormattedDate();
    
    
}
setupSideMenuContent() {
this.events.publish('sideMenu:changeContent', this.sideMenuContent);
}

getFormattedDate(){
    var ob= new Date()
    var year = ob.getFullYear().toString()
    var month = ob.getMonth().toString()
    var day = ob.getDay().toString()
    this.currentDate= year + '-'+ month + '-' + day;
    }

ngOnInit() {
    this.length = 0;
    this.totalPrice=0;
    var prices=0;
    this.order
        .getOrderList()//db list
        .snapshotChanges()//key and value
        //foreach changes return an object 
        .map(changes => {
            return changes.map(c => ({
                key: c.payload.key, ...c.payload.val()
            }))
        }).subscribe(
        res => {
            this.orders = res;   
            for (let ord of this.orders) {
              console.log(ord);
              for(let o of ord.panier){
                  this.ordersProduct.push(o);           
              }    
          }      
          console.log('trah');
          console.log(this.colors);
          console.log(this.ordersProduct)
          
        },
        error => {
            console.log('error');
        });

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
       
        },
        error => {
            console.log('error');
        });
       
       
      
}

accordionClick(event: any, index: number,o:Order) {
    let panel = <HTMLElement>document.getElementsByClassName('panel')[index];
    console.log(panel);
    event.target.classList.toggle('active');
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
    }
}


ionViewDidLoad() {

}


shownGroup = null;
toggleGroup(group) {
if (this.isGroupShown(group)) {
    this.shownGroup = null;
} else {
    this.shownGroup = group;
}
};
isGroupShown(group) {
return this.shownGroup === group;
};





onRemove(o:Order){
  this.order.remove(o).then(()=>{
  this.toast.show(`Commande supprime avec succes!`);
  this.navCtrl.setRoot('PanierPage');
});
}


onEditItem(o: Order){
this.order.editItem(o);
this.toast.show(`Commande modifie avec succes!`);
this.navCtrl.setRoot('PanierPage');
}

productDetails(p,o){
 
  this.navCtrl.setRoot('ProductDetailsPage',{panier:p ,order:o});
}

}
