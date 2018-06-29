webpackJsonp([37],{

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentProductPageModule", function() { return StudentProductPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__student_product__ = __webpack_require__(907);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StudentProductPageModule = (function () {
    function StudentProductPageModule() {
    }
    StudentProductPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__student_product__["a" /* StudentProductPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__student_product__["a" /* StudentProductPage */]),
            ],
        })
    ], StudentProductPageModule);
    return StudentProductPageModule;
}());

//# sourceMappingURL=student-product.module.js.map

/***/ }),

/***/ 907:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
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
 * Generated class for the StudentProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudentProductPage = (function () {
    function StudentProductPage(navCtrl, navParams, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.sideMenuContent = [
            { name: 'Gestion Produits', path: 'GestionProduitPage' },
            { name: 'Accueil', path: 'CafeteriaHomePage' },
            { name: 'Panier', path: 'PanierPage' },
            { name: 'Mes Commandes', path: 'OrdersPage' },
        ];
        this.page = "0";
        this.setupSideMenuContent();
    }
    StudentProductPage.prototype.setupSideMenuContent = function () {
        this.events.publish('sideMenu:changeContent', this.sideMenuContent);
    };
    StudentProductPage.prototype.selectedTab = function (index) {
        this.slider.slideTo(index);
    };
    StudentProductPage.prototype.moveButton = function ($event) {
        this.page = $event._snapIndex.toString();
    };
    StudentProductPage.prototype.goTo = function (category, type) {
        this.navCtrl.push("ProductsPage", { category: category, type: type });
    };
    StudentProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StudentProductPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Slides */])
    ], StudentProductPage.prototype, "slider", void 0);
    StudentProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-student-product',template:/*ion-inline-start:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\pages\cafeteria\StudentCafeteria\student-product\student-product.html"*/'<!--\n  Generated template for the GestionProduitPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar hideBackButton color="primary">\n      <ion-title>Produits</ion-title>\n      <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-slides #slider (ionSlideWillChange)="moveButton($event)">\n    <ion-slide>\n      <ion-card-content class="card-background-page">\n\n        <ion-card>\n          <div Class="fancybutton" (click)="goTo(\'fastfood\',\'pizza\')">\n            <img width="100%" height="100%" src="assets/imgs/nospizzas.png" />\n            <div class="card-title">Nos Pizzas</div>\n          </div>\n        </ion-card>\n\n        <ion-card>\n          <div Class="fancybutton" (click)="goTo(\'fastfood\',\'sandwich\')">\n            <img src="assets/imgs/sandwich1.png" />\n            <div class="card-title">Nos Sandwichs</div>\n          </div>\n        </ion-card>\n\n        <ion-card>\n          <div Class="fancybutton" (click)="goTo(\'fastfood\',supplements)">\n            <img src="assets/imgs/supplements.png" />\n            <div class="card-title">Nos Supplements</div>\n          </div>\n        </ion-card>\n\n      </ion-card-content>\n\n    </ion-slide>\n\n    <ion-slide>\n      <ion-card-content class="card-background-page">\n\n        <ion-card>\n          <div Class="fancybutton" (click)="goTo(\'boissons\',\'chaude\')">\n            <img src="assets/imgs/bc.png" />\n            <div class="card-title">Boissons Chaudes\n            </div>\n          </div>\n        </ion-card>\n\n        <ion-card>\n          <div Class="fancybutton" (click)="goTo(\'boissons\',\'froide\')">\n            <img src="assets/imgs/bf.png" />\n            <div class="card-title">Boissons Froides</div>\n          </div>\n        </ion-card>\n\n\n        <ion-card>\n          <div Class="fancybutton" (click)="goTo(\'boissons\',\'water\')">\n            <img src="assets/imgs/water.png" />\n            <div class="card-title">Eau</div>\n          </div>\n        </ion-card>\n\n      </ion-card-content>\n    </ion-slide>\n\n\n\n    <ion-slide>\n      <ion-card-content class="card-background-page">\n\n        <div Class="fancybutton" (click)="goTo(\'autre\',\'viennoiserie\')">\n          <ion-card>\n            <img src="assets/imgs/viennoiserie.png" />\n            <div class="card-title">Nos Viennoiserie</div>\n          </ion-card>\n        </div>\n        <div Class="fancybutton" (click)="goTo(\'autre\',\'snack\')">\n          <ion-card>\n            <img src="assets/imgs/divers1.jpg" id="divers" />\n            <div class="card-title">Divers</div>\n          </ion-card>\n        </div>\n\n      </ion-card-content>\n\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-segment color="secondary" [(ngModel)]="page">\n      <ion-segment-button value="0" (click)="selectedTab(0)">\n        <ion-icon>\n          <img src="assets/imgs/pizza.png">\n        </ion-icon>\n      </ion-segment-button>\n\n      <ion-segment-button value="1" (click)="selectedTab(1)">\n        <ion-icon>\n          <ion-icon>\n            <img src="assets/imgs/soda.png">\n          </ion-icon>\n        </ion-icon>\n      </ion-segment-button>\n\n      <ion-segment-button value="2" (click)="selectedTab(2)">\n        <ion-icon>\n          <ion-icon>\n            <img src="assets/imgs/cupcake.png">\n          </ion-icon>\n        </ion-icon>\n      </ion-segment-button>\n\n    </ion-segment>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\pages\cafeteria\StudentCafeteria\student-product\student-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */]])
    ], StudentProductPage);
    return StudentProductPage;
}());

//# sourceMappingURL=student-product.js.map

/***/ })

});
//# sourceMappingURL=37.js.map