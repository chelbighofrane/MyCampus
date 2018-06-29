import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Product } from '../../../models/product.model';
import { Sale } from '../../../models/sale.model';
import { Feedback } from '../../../models/feedback.model';
import { ProductListService } from '../../../servicesCafeteria/product-list/product-list.service';
import { ToastService } from '../../../servicesCafeteria/toast.service';
import { Camera, CameraOptions } from '@ionic-native/camera';
import firebase from 'firebase';
/**
 * Generated class for the FormDrinksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form-drinks',
  templateUrl: 'form-drinks.html',
})
export class FormDrinksPage {

  captureDataUrl: string;
  photo: string;
  mineStat: boolean;
  mine: any;
  promotion: boolean;


  promo: Sale = {
    priceOnSale: undefined,
    startDate: undefined,
    endDate: undefined
  }

  feed: Feedback = {
    userID: undefined,
    content: undefined,
    rate: undefined,
    date: new Date().toDateString()
  }

  feeds: any = { feed: [] };

  p: Product = {
    creatorID: undefined,
    category: undefined,
    type: undefined,
    name: undefined,
    price: undefined,
    onSale: undefined,
    description: undefined,
    photo: undefined,
    sales: this.promo,
    feedbacks: this.feeds
  };
  sale: boolean;
  id: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private product: ProductListService,
    private toast: ToastService, public camera: Camera,
    public alertCtrl: AlertController) {
    this.sale = false;
    this.mineStat = false;
    this.id = this.navParams.data.id;
    console.log(this.id);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PizzaFormPage');
    console.log(this.mineStat);
  }

  onSale() {
    this.sale = !this.sale;
    console.log('Cucumbers new state:' + this.promotion);
  }

  onAddItem(p) {
    if (p.onSale == null) {
      p.onSale = false;
    }
    p.type = "chaude";
    p.category = "boissons";

    if (this.mine != null) {
      p.photo = this.mine;
      console.log("g une photo");
    }
    else {
      p.photo = "assets/imgs/vide.png";
      console.log("g pas une photo");
    }
    this.product.addItem(p).then(ref => {
      this.toast.show(`${p.name} ajoute avec succes!`)
      this.navCtrl.setRoot('HotDrinksPage', { key: ref.key })
    });
  }

  onAddCold(p) {
    if (p.onSale == null) {
      p.onSale = false;
    }
    p.type = "froide";
    p.category = "boissons";
    if (this.mine != null) {
      p.photo = this.mine;
      console.log("g une photo");
    }
    else {
      p.photo = "assets/imgs/vide.png";
      console.log("g pas une photo");
    }
    this.product.addItem(p).then(ref => {
      this.toast.show(`${p.name} ajoute avec succes!`)
      this.navCtrl.setRoot('ColdDrinksPage', { key: ref.key })
    });
  }

  onAddWater(p) {
    if (p.onSale == null) {
      p.onSale = false;
    }
    p.creatorID="chelbi.ghofrane@gmail.com";
    p.type = "water";
    p.category = "boissons";
    if (this.mine != null) {
      p.photo = this.mine;
      console.log("g une photo");
    }
    else {
      p.photo = "assets/imgs/vide.png";
      console.log("g pas une photo");
    }
    this.product.addItem(p).then(ref => {
      this.toast.show(`${p.name} ajoute avec succes!`)
      this.navCtrl.setRoot('WaterPage', { key: ref.key })
    });
  }

  onAddSnack(p) {
    if (p.onSale == null) {
      p.onSale = false;
    }
    p.type = "snack";
    p.category = "autre";
    if (this.mine != null) {
      p.photo = this.mine;
      console.log("g une photo");
    }
    else {
      p.photo = "assets/imgs/vide.png";
      console.log("g pas une photo");
    }
    this.product.addItem(p).then(ref => {
      this.toast.show(`${p.name} ajoute avec succes!`)
      this.navCtrl.setRoot('SnacksPage', { key: ref.key })
    });
  }

  onAddViennoiserie(p) {
    if (p.onSale == null) {
      p.onSale = false;
    }
    p.type = "viennoiserie";
    p.category = "autre";
    if (this.mine != null) {
      p.photo = this.mine;
      console.log("g une photo");
    }
    else {
      p.photo = "assets/imgs/vide.png";
      console.log("g pas une photo");
    }
    this.product.addItem(p).then(ref => {
      this.toast.show(`${p.name} ajoute avec succes!`)
      this.navCtrl.setRoot('ViennoiseriePage', { key: ref.key })
    });
  }

  takePic() {
    this.mineStat = true;
    const options1: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
      allowEdit: true,
      targetWidth: 320,
      targetHeight: 200
    };

    this.camera.getPicture(options1)
      .then(data => {
        this.photo = 'data:image/jpeg;base64,' + data;
        const storageRef = firebase.storage().ref();
        const filename = Math.floor(Date.now() / 1000);
        if (this.id == 1) {
          firebase.storage().ref(`product/boissons/chaudes/${filename}.jpg`).putString(this.photo, 'data_url').then(img => { this.mine = img.downloadURL })
        }
        else if (this.id == 2) {
          firebase.storage().ref(`product/boissons/froides/${filename}.jpg`).putString(this.photo, 'data_url').then(img => { this.mine = img.downloadURL })
        }
        else if (this.id == 3) {
          firebase.storage().ref(`product/boissons/eau/${filename}.jpg`).putString(this.photo, 'data_url').then(img => { this.mine = img.downloadURL })
        }
        else if (this.id == 4) {
          firebase.storage().ref(`product/autre/snacks/${filename}.jpg`).putString(this.photo,'data_url').then(img=>{this.mine=img.downloadURL})  
        }
        else{
          firebase.storage().ref(`product/autre/viennoiseries/${filename}.jpg`).putString(this.photo,'data_url').then(img=>{this.mine=img.downloadURL})  
        }
      })

  }

}
