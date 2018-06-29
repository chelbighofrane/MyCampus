import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import {  PanierListService} from '../../../../servicesCafeteria/product-list/panier-list-service';
import {  ToastService} from '../../../../servicesCafeteria/toast.service';
import { Observable } from 'rxjs/Observable';
import { AfterViewInit } from '@angular/core';
import { Panier } from '../../../../models/panier.model';
import {  ProductListService} from '../../../../servicesCafeteria/product-list/product-list.service';
import { Product } from '../../../../models/product.model';
import { Order } from '../../../../models/order.model';
import {  OrderListService} from '../../../../servicesCafeteria/product-list/order-list-service';
/**
 * Generated class for the PanierPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-panier',
  templateUrl: 'panier.html',
})
export class PanierPage {

    sideMenuContent: {name: string, path: string}[] = [
        {name: 'Gestion Produits', path: 'GestionProduitPage'},
        {name: 'Espace Etudiant', path: 'StudentProductPage'},
        {name: 'Accueil', path: 'CafeteriaHomePage'},
        {name: 'Panier', path: 'PanierPage'},
        {name: 'Mes Commandes', path: 'OrdersPage'},
    
    ];


length: number;
paniersList$ : Observable <Panier[]>;
paniers: Panier[] = [];
products: Product[] = [];
totalPrice:number;
supplements:any=[];
SuppPanier:any[]=[];
SuppProduct:any[]=[];
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
private panier:PanierListService,
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
    this.panier
        .getPanierList()//db list
        .snapshotChanges()//key and value
        //foreach changes return an object 
        .map(changes => {
            return changes.map(c => ({
                key: c.payload.key, ...c.payload.val()
            }))
        }).subscribe(
        res => {
            this.paniers = res;
            for (let pan of this.paniers) {
                console.log(pan);
                for(let price of pan.supplements){
                    this.totalPrice= this.totalPrice *1 + price.priceSupp *pan.quantity;           
                }    
               this.totalPrice= this.totalPrice *1 + pan.price * pan.quantity;
            }          
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

accordionClick(event: any, index: number,p:Panier) {
    console.log(p.supplements.length);
    
    /*for(let pan of p.supplements){
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].name==pan.nameSupp){
                this.products.splice(i, 1);
                i--;
                console.log(this.products);
            }
            else {
                this.names.push(pan);
                console.log('names');
                console.log(this.names);
            }
    }

}*/
let test : boolean;
this.SuppPanier=[];
this.SuppProduct=[];
for(let pro of this.products)
{
    test=false;
    for(let pan of p.supplements)
    {
        if (pro.name==pan.nameSupp)
        {
            test=true;
            break;
        }
    }
    if(test)
    {
        this.SuppPanier.push(pro);
    }
    else
    {
        this.SuppProduct.push(pro);
    }
}
    

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





onRemove(p:Panier){
  this.panier.remove(p).then(()=>{
  this.toast.show(`Commande supprime avec succes!`);
  this.navCtrl.setRoot('PanierPage');
});
}


onEditItem(p: Panier){
this.panier.editItem(p);
this.toast.show(`Commande modifie avec succes!`);
this.navCtrl.setRoot('PanierPage');
}

Order(){
 this.o.userID="chelbi.ghofrane@gmail.com";
 this.o.status="en attente";
 this.o.panier=this.paniers;
 this.o.dateOrder=this.currentDate;
 this.order.addItem(this.o);
 for (let pan of this.paniers) {
         this.panier.remove(pan);
    }
    this.toast.show('commande envoye avec succes');
    this.navCtrl.setRoot('OrdersPage');
}


}
