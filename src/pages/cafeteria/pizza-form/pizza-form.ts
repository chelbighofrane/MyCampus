import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { Product } from '../../../models/product.model';
import { Sale } from '../../../models/sale.model';
import { Feedback} from '../../../models/feedback.model';
import {  ProductListService} from '../../../servicesCafeteria/product-list/product-list.service';
import {  ToastService} from '../../../servicesCafeteria/toast.service';
import { Camera, CameraOptions } from '@ionic-native/camera';
import firebase from 'firebase';

/**
 * Generated class for the PizzaFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pizza-form',
  templateUrl: 'pizza-form.html',
})
export class PizzaFormPage {

  captureDataUrl: string;
  photo:string;
  mineStat:boolean;
  mine:any;
  promotion:boolean;
   
  
  promo: Sale={
    priceOnSale: undefined,
    startDate: undefined,
    endDate: undefined
  }

  // feed : Feedback={
  //   userID: undefined,
  //   content: undefined,
  //   rate: undefined,
  //   date: new Date()
  // }

  feeds:any={feed:[]};
  p: Product = {
    creatorID: undefined,
    category: undefined,
    type:undefined,
    name: undefined,
    price:undefined,
    onSale:undefined,
    description:undefined,
    photo: undefined,
    sales: this.promo,
    feedbacks: this.feeds
  };
  
  sale:boolean;
  id:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private product:ProductListService, 
    private toast:ToastService,public camera:Camera,
    public alertCtrl:AlertController) {
    this.sale=false;
    this.mineStat=false;
    this.id=this.navParams.data.id;
    console.log(this.id);
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PizzaFormPage');
    console.log(this.mineStat);
  }

  onSale()
{
    this.sale=!this.sale;
    console.log('Cucumbers new state:' + this.promotion);
}

onAddItem(p){
    if(p.onSale==null){
       p.onSale=false;
    }
    p.creatorID="chelbi.ghofrane@gmail.com";
    p.type="pizza";
    p.category="fastfood";
    if(this.mine !=null)
    {
      p.photo=this.mine;
      console.log("g une photo");
    }
    else{
      p.photo="assets/imgs/vide.png";
      console.log("g pas une photo");
    }
    this.product.addItem(p).then(ref=>{
    this.toast.show(`${p.name} ajoute avec succes!`)
    this.navCtrl.setRoot('NosPizzasPage',{key : ref.key})
  });
}

onAddSandwich(p){
  if(p.onSale==null){
     p.onSale=false;
  }
  p.type="sandwich";
  p.category="fastfood";
  if(this.mine !=null)
  {
    p.photo=this.mine;
    console.log("g une photo");
  }
  else{
    p.photo="assets/imgs/assets/imgs/vide.pnge.png";
    console.log("g pas une photo");
  }
  this.product.addItem(p).then(ref=>{
  this.toast.show(`${p.name} ajoute avec succes!`)
  this.navCtrl.setRoot('NosSandwichsPage',{key : ref.key})
});
}

onAddSupplement(p){
  if(p.onSale==null){
     p.onSale=false;
  }
  p.type="supplements";
  p.category="fastfood";
  if(this.mine !=null)
  {
    p.photo=this.mine;
    console.log("g une photo");
  }
  else{
    p.photo="assets/imgs/vide.png";
    console.log("g pas une photo");
  }
  this.product.addItem(p).then(ref=>{
  this.toast.show(`${p.name} ajoute avec succes!`)
  this.navCtrl.setRoot('NosSupplementsPage',{key : ref.key})
});
}

takePic()
{
 this.mineStat=true;
  const options1: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    sourceType: this.camera.PictureSourceType.CAMERA,
    allowEdit:true,
    targetWidth:320,
    targetHeight:200
  };
  
  this.camera.getPicture(options1)
    .then(data=>{
      this.photo='data:image/jpeg;base64,'+data;
      const storageRef = firebase.storage().ref();
      const filename = Math.floor(Date.now()/1000);
      if(this.id==1){
      firebase.storage().ref(`product/fastfood/Pizzas/${filename}.jpg`).putString(this.photo,'data_url').then(img=>{this.mine=img.downloadURL})  
      }
      else if(this.id==2){
        firebase.storage().ref(`product/fastfood/Sandwitchs/${filename}.jpg`).putString(this.photo,'data_url').then(img=>{this.mine=img.downloadURL})  
        }
      else{
        firebase.storage().ref(`product/fastfood/Supplements/${filename}.jpg`).putString(this.photo,'data_url').then(img=>{this.mine=img.downloadURL})  
        }
    })
 
}
}
