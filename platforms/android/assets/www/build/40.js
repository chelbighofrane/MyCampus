webpackJsonp([40],{

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopCommentPageModule", function() { return PopCommentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pop_comment__ = __webpack_require__(904);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PopCommentPageModule = (function () {
    function PopCommentPageModule() {
    }
    PopCommentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pop_comment__["a" /* PopCommentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pop_comment__["a" /* PopCommentPage */]),
            ],
        })
    ], PopCommentPageModule);
    return PopCommentPageModule;
}());

//# sourceMappingURL=pop-comment.module.js.map

/***/ }),

/***/ 904:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopCommentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicesCafeteria_product_list_product_list_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicesCafeteria_toast_service__ = __webpack_require__(364);
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
 * Generated class for the PopCommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PopCommentPage = (function () {
    function PopCommentPage(navCtrl, navParams, view, product, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.product = product;
        this.toast = toast;
        this.nbretoile = 0;
        this.note = "";
    }
    PopCommentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PopCommentPage');
    };
    PopCommentPage.prototype.ionViewWillLoad = function () {
        this.data = this.navParams.get('data');
        console.log(this.data.commentProduct);
    };
    PopCommentPage.prototype.dismiss = function () {
        this.view.dismiss(this.data.commentmeal);
    };
    PopCommentPage.prototype.etoile1 = function () {
        this.nbretoile = 1;
        this.note = "Mauvais";
    };
    PopCommentPage.prototype.etoile2 = function () {
        this.nbretoile = 2;
        this.note = "Acceptable";
    };
    PopCommentPage.prototype.etoile3 = function () {
        this.nbretoile = 3;
        this.note = "Bien";
    };
    PopCommentPage.prototype.etoile4 = function () {
        this.nbretoile = 4;
        this.note = "Très bien";
    };
    PopCommentPage.prototype.etoile5 = function () {
        this.nbretoile = 5;
        this.note = "Excellent";
    };
    PopCommentPage.prototype.savecomment = function (etoile) {
        console.log(this.nbretoile);
        var p = this.data.commentProduct;
        var comments = this.data.commentaires.comment;
        var userid = this.data.commentuser;
        console.log(this.nbretoile);
        console.log(comments);
        console.log(userid);
        if (p.feedbacks == null) {
            p.feedbacks = [];
        }
        var dt = new Date().toString();
        p.feedbacks.push({ userID: userid, content: comments, rate: this.nbretoile, date: dt });
        //console.log(mealo);
        //console.log(mealo.feedbacks.length);
        this.product.editItem(p);
        this.view.dismiss(p);
    };
    PopCommentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pop-comment',template:/*ion-inline-start:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\pages\cafeteria\StudentCafeteria\pop-comment\pop-comment.html"*/'<!--\n  Generated template for the PopupCommentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding class="back">\n\n  <h4 class="titre">Degrée de satisfaction</h4>\n  <hr>\n  <br>\n\n  <ion-row justify-content-center>\n                  \n      <img src="assets/imgs/star-jaune.png" alt="star" class="star" *ngIf="nbretoile>0" (click)="etoile1()">\n      <img src="assets/imgs/star-jaune.png" alt="star" class="star" *ngIf="nbretoile>1" (click)="etoile2()">\n      <img src="assets/imgs/star-jaune.png" alt="star" class="star" *ngIf="nbretoile>2" (click)="etoile3()">\n      <img src="assets/imgs/star-jaune.png" alt="star" class="star" *ngIf="nbretoile>3" (click)="etoile4()">\n      <img src="assets/imgs/star-jaune.png" alt="star" class="starend" *ngIf="nbretoile>4" (click)="etoile5()">\n      <img src="assets/imgs/star-gris.png" alt="star" class="star" *ngIf="nbretoile<1" (click)="etoile1()">\n      <img src="assets/imgs/star-gris.png" alt="star" class="star" *ngIf="nbretoile<2" (click)="etoile2()">\n      <img src="assets/imgs/star-gris.png" alt="star" class="star" *ngIf="nbretoile<3" (click)="etoile3()">\n      <img src="assets/imgs/star-gris.png" alt="star" class="star"  *ngIf="nbretoile<4" (click)="etoile4()">\n      <img src="assets/imgs/star-gris.png" alt="star" class="starend" *ngIf="nbretoile<5" (click)="etoile5()">\n      \n</ion-row> \n<p class="parag">{{note}}</p>\n<br>\n<hr>\n<span class="buttons">\n<div class="butt-left">\n    <button ion-button icon-left clear small class="butt" (click)="dismiss()">\n       \n        <div>Annuler</div>\n      </button>\n      <hr>\n</div>\n<span>\n  <button ion-button icon-left clear small class="butt" (click)="savecomment()">\n     \n      <div>Confirmer </div>\n    </button>\n    <hr>\n  </span>\n  </span>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\pages\cafeteria\StudentCafeteria\pop-comment\pop-comment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__servicesCafeteria_product_list_product_list_service__["a" /* ProductListService */],
            __WEBPACK_IMPORTED_MODULE_3__servicesCafeteria_toast_service__["a" /* ToastService */]])
    ], PopCommentPage);
    return PopCommentPage;
}());

//# sourceMappingURL=pop-comment.js.map

/***/ })

});
//# sourceMappingURL=40.js.map