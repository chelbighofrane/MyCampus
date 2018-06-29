webpackJsonp([44],{

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCommentaireCafeteriaPageModule", function() { return ModalCommentaireCafeteriaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_commentaire_cafeteria__ = __webpack_require__(900);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalCommentaireCafeteriaPageModule = (function () {
    function ModalCommentaireCafeteriaPageModule() {
    }
    ModalCommentaireCafeteriaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_commentaire_cafeteria__["a" /* ModalCommentaireCafeteriaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_commentaire_cafeteria__["a" /* ModalCommentaireCafeteriaPage */]),
            ],
        })
    ], ModalCommentaireCafeteriaPageModule);
    return ModalCommentaireCafeteriaPageModule;
}());

//# sourceMappingURL=modal-commentaire-cafeteria.module.js.map

/***/ }),

/***/ 900:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalCommentaireCafeteriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicesCafeteria_product_list_panier_list_service__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicesCafeteria_toast_service__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servicesCafeteria_product_list_product_list_service__ = __webpack_require__(365);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ModalCommentaireCafeteriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalCommentaireCafeteriaPage = (function () {
    function ModalCommentaireCafeteriaPage(navCtrl, navParams, view, modal, panier, toast, product) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.modal = modal;
        this.panier = panier;
        this.toast = toast;
        this.product = product;
        this.products = [];
        this.paniers = [];
        this.listPaniers = [];
        this.p = {
            userID: undefined,
            productID: undefined,
            supplements: undefined,
            time: undefined,
            quantity: undefined,
            note: undefined,
            status: undefined,
            date: undefined,
            price: undefined,
        };
        this.length = 0;
        this.product
            .getProductList() //db list
            .snapshotChanges() //key and value
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }).subscribe(function (res) {
            _this.products = res;
            console.log(_this.length);
            for (var i = 0; i < _this.products.length; i++) {
                if (_this.products[i].category !== "fastfood" || _this.products[i].type !== "supplements") {
                    _this.products.splice(i, 1);
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
        }, function (error) {
            console.log('error');
        });
        this.getFormattedDate();
    }
    ModalCommentaireCafeteriaPage.prototype.ionViewWillLoad = function () {
        this.data = this.navParams.get('data');
        console.log(this.data.name);
    };
    ModalCommentaireCafeteriaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalCommentaireCafeteriaPage');
    };
    ModalCommentaireCafeteriaPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    ModalCommentaireCafeteriaPage.prototype.getFormattedDate = function () {
        var ob = new Date();
        var year = ob.getFullYear().toString();
        var month = ob.getMonth().toString();
        var day = ob.getDay().toString();
        this.currentDate = year + '-' + month + '-' + day;
    };
    ModalCommentaireCafeteriaPage.prototype.onAdd = function (p) {
        var _this = this;
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
        p.userID = "chelbi.ghofrane@gmail.com";
        p.status = "En attente";
        p.productID = this.data.name;
        p.date = this.currentDate;
        if (this.data.onSale) {
            p.price = this.data.priceOnSale;
        }
        else {
            p.price = this.data.price;
        }
        this.panier.addItem(p).then(function (ref) {
            _this.toast.show("Article ajoute avec succes!");
            _this.navCtrl.setRoot('PanierPage', { key: ref.key });
        });
    };
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
    ModalCommentaireCafeteriaPage.prototype.ContinnuerShop = function (p) {
        var _this = this;
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
        p.userID = "chelbi.ghofrane@gmail.com";
        p.status = "En attente";
        p.productID = this.data.name;
        p.date = this.currentDate;
        if (this.data.onSale) {
            p.price = this.data.priceOnSale;
        }
        else {
            p.price = this.data.price;
        }
        this.panier.addItem(p).then(function (ref) {
            _this.toast.show("Article ajoute avec succes!");
            _this.closeModal();
        });
    };
    ModalCommentaireCafeteriaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-commentaire-cafeteria',template:/*ion-inline-start:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\pages\cafeteria\StudentCafeteria\modal-commentaire-cafeteria\modal-commentaire-cafeteria.html"*/'<!--\n  Generated template for the ModalCommentaireCafeteriaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar color="primary">\n    <ion-title>\n      Commender\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="closeModal()">\n        <span ion-text showWhen="ios">Fermer</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n    <form #f="ngForm" class="login-box">\n        <ion-item>\n            <ion-label floating>Note:</ion-label>\n            <ion-textarea  name="note"  rows="3" [(ngModel)]="p.note" required="" ></ion-textarea >\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Quantite</ion-label>\n            <ion-input  type="number" name="quantity" min="1" max="10" [(ngModel)]="p.quantity"  required="" ></ion-input>\n        </ion-item>\n        \n        <ion-item>\n            <ion-label>Heure</ion-label>\n            <ion-datetime displayFormat="HH:mm " name="time" [(ngModel)]="p.time"  minuteValues="0,15,30,45" hourValues="07,08,09,10,11,12,13,14,15,16,17" required=""></ion-datetime>\n          </ion-item>\n          <ion-item>\n              <ion-label>Supplements</ion-label>\n              <ion-select  multiple="true" name="supplements" [(ngModel)]="p.supplements" >\n                <ion-option *ngFor="let s of products;" [value]="{priceSupp:s.price,nameSupp:s.name}" >{{s.name}}</ion-option>\n              </ion-select>\n              \n            </ion-item>\n    \n            \n            \n            <br><br>\n         \n            <ion-footer no-border>\n                <ion-toolbar>\n                   \n                      <ion-row no-padding>\n                          <ion-col>\n                              <button ion-button clear small color="secondary"   (click)="onAdd(p)"  block="" [disabled]="!f.valid" icon-start>\n                                  <ion-icon name=\'cart\'></ion-icon>\n                                  Aller panier\n                              </button>\n                          </ion-col>\n                          <ion-col text-center>\n                              <button ion-button clear small color="secondary"  [disabled]="!f.valid" (click)="ContinnuerShop(p)" icon-start>\n                                <ion-icon name=\'arrow-round-forward\'></ion-icon>\n                                Continuer \n                              </button>\n                          </ion-col>\n                      </ion-row>\n                  \n                </ion-toolbar>\n              </ion-footer>\n            </form>\n      \n\n</ion-content>'/*ion-inline-end:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\pages\cafeteria\StudentCafeteria\modal-commentaire-cafeteria\modal-commentaire-cafeteria.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__servicesCafeteria_product_list_panier_list_service__["a" /* PanierListService */], __WEBPACK_IMPORTED_MODULE_3__servicesCafeteria_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_4__servicesCafeteria_product_list_product_list_service__["a" /* ProductListService */]])
    ], ModalCommentaireCafeteriaPage);
    return ModalCommentaireCafeteriaPage;
}());

//# sourceMappingURL=modal-commentaire-cafeteria.js.map

/***/ })

});
//# sourceMappingURL=44.js.map