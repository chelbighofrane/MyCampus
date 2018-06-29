webpackJsonp([38],{

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageModule", function() { return ProductsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products__ = __webpack_require__(906);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductsPageModule = (function () {
    function ProductsPageModule() {
    }
    ProductsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__products__["a" /* ProductsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__products__["a" /* ProductsPage */]),
            ],
        })
    ], ProductsPageModule);
    return ProductsPageModule;
}());

//# sourceMappingURL=products.module.js.map

/***/ }),

/***/ 906:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicesCafeteria_product_list_product_list_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicesCafeteria_toast_service__ = __webpack_require__(364);
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
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductsPage = (function () {
    function ProductsPage(navCtrl, navParams, product, toast, events, modal, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.product = product;
        this.toast = toast;
        this.events = events;
        this.modal = modal;
        this.alertCtrl = alertCtrl;
        this.sideMenuContent = [
            { name: 'Gestion Produits', path: 'GestionProduitPage' },
            { name: 'Accueil', path: 'CafeteriaHomePage' },
            { name: 'Panier', path: 'PanierPage' },
            { name: 'Mes Commandes', path: 'OrdersPage' },
        ];
        this.products = [];
        this.setupSideMenuContent();
        this.category = this.navParams.data.category;
        this.type = this.navParams.data.type;
    }
    ProductsPage.prototype.setupSideMenuContent = function () {
        this.events.publish('sideMenu:changeContent', this.sideMenuContent);
    };
    ProductsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.length = 0;
        this.sale = false;
        this.product
            .getProductList() //db list
            .snapshotChanges() //key and value
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }).subscribe(function (res) {
            _this.products = res;
            console.log(_this.length);
            for (var i = 0; i < _this.products.length; i++) {
                if (_this.products[i].category !== _this.category || _this.products[i].type !== _this.type) {
                    _this.products.splice(i, 1);
                    i--;
                }
            }
            _this.length = _this.products.length;
            console.log(_this.products);
        }, function (error) {
            console.log('error');
        });
    };
    ProductsPage.prototype.ionViewDidLoad = function () {
    };
    ProductsPage.prototype.onSale = function () {
        this.sale = !this.sale;
        console.log('Cucumbers new state:' + this.promotion);
    };
    ProductsPage.prototype.Commenter = function (p, user) {
        console.log(p);
        var myData = {
            commentProduct: p,
            commentuser: user
        };
        var mymodal = this.modal.create('ModalFeedbackPage', { data: myData }, {
            cssClass: "my-modal",
        });
        mymodal.present();
        mymodal.onDidDismiss(function (data) {
            console.log(data);
        });
    };
    ProductsPage.prototype.Reserver = function (p) {
        var myData = {
            name: p.name,
            price: p.price,
            onSale: p.onSale,
            priceOnSale: p.priceOnSale
        };
        var myModal = this.modal.create('ModalCommentaireCafeteriaPage', { data: myData }, { cssClass: 'alertcss' });
        myModal.present();
    };
    ProductsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-products',template:/*ion-inline-start:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\pages\cafeteria\StudentCafeteria\products\products.html"*/'<!--\n  Generated template for the NosPizzasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar hideBackButton color="primary">\n        <ion-title>Produits</ion-title>\n        <button ion-button icon-only menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n    </ion-navbar>\n</ion-header>\n\n\n\n\n<ion-content padding class="arriere">\n    <ion-card-content class="card-background-page" *ngFor="let p of products; let i = index;">\n        <ion-card >\n            <img *ngIf="p.onSale==false" src="{{p.photo}}">\n            <img *ngIf="p.onSale" src="assets/imgs/PROMO.png" [ngStyle]="{\'background\': \' url(\' + p.photo + \') no-repeat 0 0 \'} " />\n            <ion-card-content>\n                <ion-card-title>\n                    {{p.name}}\n                </ion-card-title>\n                <p>\n                    Description: {{p.description}}\n                <p>\n                    Prix: {{p.price}} \n                </p>\n                <p class="article-content" *ngIf="p.onSale">\n                        <span class="marge">Nouveau Prix: {{p.priceOnSale}}</span>\n                        \n                    </p>\n                    <p class="article-content" *ngIf="p.onSale">\n                        <span class="margeChar2">Debut: {{p.startDate}}</span>\n                        \n                    </p>\n                    <p class="article-content" *ngIf="p.onSale">\n                        <span class="margeChar1">Fin: {{p.endDate}}</span>\n                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                        \n                    </p>\n            </ion-card-content>\n\n            <ion-row no-padding>\n                <ion-col>\n                    <button ion-button clear small color="secondary"  (click)="Reserver(p)">\n                        Commender\n                    </button>\n                </ion-col>\n                <ion-col text-center>\n                    <button ion-button clear small color="secondary" (click)="Commenter(p,\'Ghofrane\')">\n                        Commenter\n                    </button>\n                </ion-col>\n            </ion-row>\n\n        </ion-card>\n    </ion-card-content>\n</ion-content>'/*ion-inline-end:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\pages\cafeteria\StudentCafeteria\products\products.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__servicesCafeteria_product_list_product_list_service__["a" /* ProductListService */],
            __WEBPACK_IMPORTED_MODULE_3__servicesCafeteria_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ProductsPage);
    return ProductsPage;
}());

//# sourceMappingURL=products.js.map

/***/ })

});
//# sourceMappingURL=38.js.map