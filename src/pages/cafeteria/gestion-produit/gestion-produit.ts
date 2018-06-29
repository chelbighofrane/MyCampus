import { Component , ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams , Slides} from 'ionic-angular';

/**
 * Generated class for the GestionProduitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gestion-produit',
  templateUrl: 'gestion-produit.html',
})
export class GestionProduitPage {
  @ViewChild('slider') slider: Slides;
  page="0";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  selectedTab(index){
    this.slider.slideTo(index);
  }

  moveButton($event){
    this.page= $event._snapIndex.toString();
  }

  goTo(){
    this.navCtrl.push("NosPizzasPage");
  }

  goToSandwitch(){
   
    this.navCtrl.push("NosSandwichsPage");
  }

  goToSupplements(){
    this.navCtrl.push("NosSupplementsPage");
  }

  goToHotDrinks(){
    this.navCtrl.push("HotDrinksPage");
  }

  goToColdDrinks(){
    this.navCtrl.push("ColdDrinksPage");
  }
  goToWater(){
    this.navCtrl.push("WaterPage");
  }

  goToSnacks(){
    this.navCtrl.push("SnacksPage");
  }

  goToViennoiseries(){
    this.navCtrl.push("ViennoiseriePage");
  }
}
