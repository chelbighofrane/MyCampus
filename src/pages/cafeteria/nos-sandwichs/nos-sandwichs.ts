import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import {  ProductListService} from '../../../servicesCafeteria/product-list/product-list.service';
import {  ToastService} from '../../../servicesCafeteria/toast.service';
import { Observable } from 'rxjs/Observable';
import { Product } from '../../../models/product.model';
import { AfterViewInit } from '@angular/core';
import { Camera,CameraOptions } from '@ionic-native/camera';
import firebase from 'firebase';

/**
 * Generated class for the NosSandwichsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nos-sandwichs',
  templateUrl: 'nos-sandwichs.html',
})
export class NosSandwichsPage {

    sideMenuContent: {name: string, path: string}[] = [
        {name: 'Gestion Produits', path: 'GestionProduitPage'},
        {name: 'Accueil', path: 'CafeteriaHomePage'},
        {name: 'Mon compte', path: 'AccountPage'}
    ];

  fab:boolean;
    sale:boolean;
    length: number;
    productList$ : Observable <Product[]>;
    products: Product[] = [];
    photo:any;
    mine:any;
    
 
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private product:ProductListService,
    private toast:ToastService,
    public camera:Camera,
    public events: Events) {
        
        this.setupSideMenuContent();   
  }
  setupSideMenuContent() {
    this.events.publish('sideMenu:changeContent', this.sideMenuContent);
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
                for (let i = 0; i < this.products.length; i++) {
                    if (this.products[i].category !== 'fastfood' || this.products[i].type !== 'sandwich') {
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

    accordionClick(event: any, index: number, p:Product) {
        console.log(event);
        console.log(index);
        this.photo=p.photo;
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

  addForm(){
    this.navCtrl.push("PizzaFormPage");
  }

  buttonClick(){
    this.navCtrl.push("PizzaDetailPage");
  }

  onNewItem(id){
    this.navCtrl.push("PizzaFormPage",{id:id});
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





onRemove(p:Product){
      this.product.remove(p).then(()=>{
      this.toast.show(`${p.name} supprime avec succes!`);
      this.navCtrl.setRoot('NosSandwichsPage');
    });
  
  }
  promotion:boolean;

onSale()
{
    this.sale=!this.sale;
    console.log('Cucumbers new state:' + this.promotion);
}

takePic()
{
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
      firebase.storage().ref(`product/${filename}.jpg`).putString(this.photo,'data_url').then(img=>{this.mine=img.downloadURL})  
      })
      this.photo=this.mine;
 
}



onEditItem(p: Product){
    if (this.photo!=null){
        p.photo=this.photo;
      }
    
    this.photo=this.mine;
    this.product.editItem(p);
    this.toast.show(`${p.name} modifie avec succes!`);
    this.navCtrl.setRoot('NosSandwichsPage');
}


}
