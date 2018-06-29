webpackJsonp([36],{

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbacksCafeteriaPageModule", function() { return FeedbacksCafeteriaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feedbacks_cafeteria__ = __webpack_require__(891);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FeedbacksCafeteriaPageModule = (function () {
    function FeedbacksCafeteriaPageModule() {
    }
    FeedbacksCafeteriaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__feedbacks_cafeteria__["a" /* FeedbacksCafeteriaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__feedbacks_cafeteria__["a" /* FeedbacksCafeteriaPage */]),
            ],
        })
    ], FeedbacksCafeteriaPageModule);
    return FeedbacksCafeteriaPageModule;
}());

//# sourceMappingURL=feedbacks-cafeteria.module.js.map

/***/ }),

/***/ 891:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbacksCafeteriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicesCafeteria_product_list_product_list_service__ = __webpack_require__(365);
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
 * Generated class for the FeedbacksCafeteriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FeedbacksCafeteriaPage = (function () {
    function FeedbacksCafeteriaPage(navCtrl, navParams, product, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.product = product;
        this.modal = modal;
        this.products = [];
    }
    FeedbacksCafeteriaPage.prototype.ngOnInit = function () {
        var _this = this;
        this.length = 0;
        this.fab = false;
        this.sale = false;
        this.product
            .getProductList() //db list
            .snapshotChanges() //key and value
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }).subscribe(function (res) {
            _this.products = res;
            console.log(_this.length);
            for (var i_1 = 0; i_1 < _this.products.length; i_1++) {
                if (_this.products[i_1].feedbacks == null) {
                    _this.products.splice(i_1, 1);
                    i_1--;
                }
            }
            var sum;
            var i;
            for (var _i = 0, _a = _this.products; _i < _a.length; _i++) {
                var element = _a[_i];
                sum = 0;
                i = 0;
                if (element.feedbacks != null) {
                    for (var _b = 0, _c = element.feedbacks; _b < _c.length; _b++) {
                        var feed = _c[_b];
                        if (feed.userID != 'cafeteria') {
                            sum += feed.rate;
                            i++;
                        }
                    }
                    if (i != 0) {
                        element.moyennefeed = sum / i;
                    }
                    else {
                        element.moyennefeed = 0;
                    }
                }
                else {
                    element.moyennefeed = 0;
                }
            }
            _this.length = _this.products.length;
            console.log(_this.products);
        }, function (error) {
            console.log('error');
        });
    };
    FeedbacksCafeteriaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FeedbacksCafeteriaPage');
    };
    FeedbacksCafeteriaPage.prototype.openMenu = function (p, iduser) {
        var myData = {
            commentProduct: p,
            commentuser: iduser
        };
        var mymodal = this.modal.create('ModalFeedbackPage', { data: myData }, {
            cssClass: "my-modal",
        });
        mymodal.present();
        mymodal.onDidDismiss(function (data) {
            console.log(data);
        });
    };
    FeedbacksCafeteriaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feedbacks-cafeteria',template:/*ion-inline-start:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\pages\cafeteria\feedbacks-cafeteria\feedbacks-cafeteria.html"*/'<!--\n  Generated template for the FeedbackCanteenPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton color="primary">\n    <ion-title>Feedback</ion-title>\n    <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="arriere">\n  \n        <ion-card class="mycard" *ngFor="let p of products">\n          \n            <ion-card-header class="myCardHeader">\n                {{p.name}}\n            </ion-card-header>\n        \n            <ion-card-content class="mycontent" >\n              <ion-row justify-content-center>\n                  \n                <img src="assets/imgs/star-jaune.png" alt="star" class="star" *ngIf="p.moyennefeed>=0.75">\n                <img src="assets/imgs/star-jaune.png" alt="star" class="star" *ngIf="p.moyennefeed>=1.75">\n                <img src="assets/imgs/star-jaune.png" alt="star" class="star" *ngIf="p.moyennefeed>=2.75">\n                <img src="assets/imgs/star-jaune.png" alt="star" class="star" *ngIf="p.moyennefeed>=3.75">\n                <img src="assets/imgs/star-jaune.png" alt="star" class="starend" *ngIf="p.moyennefeed>=4.75">\n\n                <img src="assets/imgs/star-jaune-moy.png" alt="star" class="star" *ngIf="p.moyennefeed>=0.25 && p.moyennefeed<0.75">\n                <img src="assets/imgs/star-jaune-moy.png" alt="star" class="star" *ngIf="p.moyennefeed>=1.25 && p.moyennefeed<1.75">\n                <img src="assets/imgs/star-jaune-moy.png" alt="star" class="star" *ngIf="p.moyennefeed>=2.25 && p.moyennefeed<2.75">\n                <img src="assets/imgs/star-jaune-moy.png" alt="star" class="star" *ngIf="p.moyennefeed>=3.25 && p.moyennefeed<3.75">\n                <img src="assets/imgs/star-jaune-moy.png" alt="star" class="starend" *ngIf="p.moyennefeed>=4.25 && p.moyennefeed<4.75">\n\n\n                <img src="assets/imgs/star-gris.png" alt="star" class="star" *ngIf="p.moyennefeed<0.25">\n                <img src="assets/imgs/star-gris.png" alt="star" class="star" *ngIf="p.moyennefeed<1.25">\n                <img src="assets/imgs/star-gris.png" alt="star" class="star" *ngIf="p.moyennefeed<2.25">\n                <img src="assets/imgs/star-gris.png" alt="star" class="star"  *ngIf="p.moyennefeed<3.25">\n                <img src="assets/imgs/star-gris.png" alt="star" class="starend" *ngIf="p.moyennefeed<4.25">\n                \n            </ion-row> \n                   \n              <ion-row justify-content-center class="centr action-sheets-basic-page " >\n                    <button ion-button icon-left clear small class="butt" (click)="openMenu(p,\'cafeteria\')">\n                            <ion-icon name="text"></ion-icon>\n                            <div ><span *ngIf="p.feedbacks">{{p.feedbacks.length}}</span><span *ngIf="p.feedbacks== null">0</span> COMMENTAIRE</div>\n                          </button>\n                    <!button (click)="openMenu()" class="butt" block><!/button>\n                \n              </ion-row>\n            \n            </ion-card-content>\n          \n        \n          \n          </ion-card>\n    \n          \n    </ion-content>'/*ion-inline-end:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\pages\cafeteria\feedbacks-cafeteria\feedbacks-cafeteria.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__servicesCafeteria_product_list_product_list_service__["a" /* ProductListService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ModalController */]])
    ], FeedbacksCafeteriaPage);
    return FeedbacksCafeteriaPage;
}());

//# sourceMappingURL=feedbacks-cafeteria.js.map

/***/ })

});
//# sourceMappingURL=36.js.map