import { Component , ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams , Slides, Events} from 'ionic-angular';

/**
 * Generated class for the StudentProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student-product',
  templateUrl: 'student-product.html',
})
export class StudentProductPage {

  sideMenuContent: {name: string, path: string}[] = [
    {name: 'Gestion Produits', path: 'GestionProduitPage'},
    {name: 'Accueil', path: 'CafeteriaHomePage'},
    {name: 'Panier', path: 'PanierPage'},
    {name: 'Mes Commandes', path: 'OrdersPage'},

];

  @ViewChild('slider') slider: Slides;
  page="0";
  constructor(public navCtrl: NavController, public navParams: NavParams,public events: Events) {
    this.setupSideMenuContent();
  }

  setupSideMenuContent() {
    this.events.publish('sideMenu:changeContent', this.sideMenuContent);
 }

  selectedTab(index){
    this.slider.slideTo(index);
  }

  moveButton($event){
    this.page= $event._snapIndex.toString();
  }

  goTo(category,type){
    this.navCtrl.push("ProductsPage",{category:category,type:type});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentProductPage');
  }

}
