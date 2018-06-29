import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { PanierListService } from '../../../../servicesCafeteria/product-list/panier-list-service';
import { ToastService } from '../../../../servicesCafeteria/toast.service';
import { Observable } from 'rxjs/Observable';
import { AfterViewInit } from '@angular/core';
import { Panier } from '../../../../models/panier.model';
import { ProductListService } from '../../../../servicesCafeteria/product-list/product-list.service';
import { Product } from '../../../../models/product.model';
import { Order } from '../../../../models/order.model';
import { OrderListService } from '../../../../servicesCafeteria/product-list/order-list-service';

/**
 * Generated class for the ProductDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})

export class ProductDetailsPage {
  p: any;
  ord: any;

  sideMenuContent: {name: string, path: string}[] = [
    {name: 'Gestion Produits', path: 'GestionProduitPage'},
    {name: 'Espace Etudiant', path: 'StudentProductPage'},
    {name: 'Accueil', path: 'CafeteriaHomePage'},
    {name: 'Panier', path: 'PanierPage'},
    {name: 'Mes Commandes', path: 'OrdersPage'},

];


  orders: any[] = [];
  totalPrice: number;
  currentDate;
  paniers: any[] = [];

  o: Order = {
    userID: undefined,
    panier: undefined,
    dateOrder: undefined,
    status: undefined
  };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private panier: PanierListService,
    private product: ProductListService,
    private order: OrderListService,
    private toast: ToastService,
    public events: Events) {
    this.p = this.navParams.data.panier;
    this.ord = this.navParams.data.order;
    console.log('hedhi l panier');
    console.log(this.p);
    console.log('hedhi l order');
    console.log(this.ord);

    this.setupSideMenuContent();
    this.getFormattedDate();


  }
  setupSideMenuContent() {
    this.events.publish('sideMenu:changeContent', this.sideMenuContent);
  }

  getFormattedDate() {
    var ob = new Date()
    var year = ob.getFullYear().toString()
    var month = ob.getMonth().toString()
    var day = ob.getDay().toString()
    this.currentDate = year + '-' + month + '-' + day;
  }

  ngOnInit() {
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

        },
        error => {
          console.log('error');
        });



  }

  accordionClick(event: any, index: number, p: Panier) {

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





  onRemove(p) {
    var j = 0;
    var i = 0;
    for (let order of this.orders) {
      if (this.ord.key == order.key) {
        for (let pan of this.ord.panier) {
          this.paniers.push(pan);
        }
        for (let pan of this.ord.panier) {
          if (pan.key == p.key) {
            this.paniers.splice(j, 1);
            
            if(this.paniers.length==0){
              this.order.remove(this.ord);
            }
            else{
            this.ord.panier=this.paniers;
            this.order.editItem(this.ord);}
            break;
          }
          j++;
        }
      }
    }
    /* for (let pan of this.orders[i].panier) {
       if(pan==o){
         console.log(pan);
       }
       
    
     }
 }*/
    //this.toast.show('commande supprimer avec succes');
    //this.navCtrl.setRoot('OrdersPage');


  }


  onEditItem(p: Panier) {
    this.panier.editItem(p);
    this.toast.show(`Commande modifie avec succes!`);
    this.navCtrl.setRoot('PanierPage');
  }


}
