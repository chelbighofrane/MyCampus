webpackJsonp([31],{

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupCommentPageModule", function() { return PopupCommentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popup_comment__ = __webpack_require__(920);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PopupCommentPageModule = (function () {
    function PopupCommentPageModule() {
    }
    PopupCommentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__popup_comment__["a" /* PopupCommentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__popup_comment__["a" /* PopupCommentPage */]),
            ],
        })
    ], PopupCommentPageModule);
    return PopupCommentPageModule;
}());

//# sourceMappingURL=popup-comment.module.js.map

/***/ }),

/***/ 920:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupCommentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_canteen_meal_service__ = __webpack_require__(371);
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
 * Generated class for the PopupCommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PopupCommentPage = (function () {
    function PopupCommentPage(navCtrl, navParams, view, mealserv, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.mealserv = mealserv;
        this.toast = toast;
        this.nbretoile = 0;
        this.note = "";
    }
    PopupCommentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PopupCommentPage');
    };
    PopupCommentPage.prototype.ionViewWillLoad = function () {
        this.data = this.navParams.get('data');
        console.log(this.data.commentmeal);
    };
    PopupCommentPage.prototype.dismiss = function () {
        this.view.dismiss(this.data.commentmeal);
    };
    PopupCommentPage.prototype.etoile1 = function () {
        this.nbretoile = 1;
        this.note = "Mauvais";
    };
    PopupCommentPage.prototype.etoile2 = function () {
        this.nbretoile = 2;
        this.note = "Acceptable";
    };
    PopupCommentPage.prototype.etoile3 = function () {
        this.nbretoile = 3;
        this.note = "Bien";
    };
    PopupCommentPage.prototype.etoile4 = function () {
        this.nbretoile = 4;
        this.note = "Très bien";
    };
    PopupCommentPage.prototype.etoile5 = function () {
        this.nbretoile = 5;
        this.note = "Excellent";
    };
    PopupCommentPage.prototype.savecomment = function (etoile) {
        var _this = this;
        console.log(this.nbretoile);
        var mealo = this.data.commentmeal;
        var comments = this.data.commentaires.comment;
        var userid = this.data.commentuser;
        console.log(this.nbretoile);
        console.log(mealo.starterRepat);
        console.log(comments);
        console.log(userid);
        if (mealo.feedbacks == null) {
            mealo.feedbacks = [];
        }
        var dt = new Date().toString();
        mealo.feedbacks.push({ userID: userid, content: comments, rate: this.nbretoile, date: dt });
        //console.log(mealo);
        //console.log(mealo.feedbacks.length);
        this.mealserv.editmeal(mealo).then(function () {
            console.log("Commentaire ajouter avec succes!");
            _this.view.dismiss(mealo);
        });
    };
    PopupCommentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-popup-comment',template:/*ion-inline-start:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\pages\canteen\popup-comment\popup-comment.html"*/'<!--\n  Generated template for the PopupCommentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding class="back">\n\n  <h4 class="titre">Degrée de satisfaction</h4>\n  <hr>\n  <br>\n\n  <ion-row justify-content-center>\n                  \n      <img src="assets/imgs/star-jaune.png" alt="star" class="star" *ngIf="nbretoile>0" (click)="etoile1()">\n      <img src="assets/imgs/star-jaune.png" alt="star" class="star" *ngIf="nbretoile>1" (click)="etoile2()">\n      <img src="assets/imgs/star-jaune.png" alt="star" class="star" *ngIf="nbretoile>2" (click)="etoile3()">\n      <img src="assets/imgs/star-jaune.png" alt="star" class="star" *ngIf="nbretoile>3" (click)="etoile4()">\n      <img src="assets/imgs/star-jaune.png" alt="star" class="starend" *ngIf="nbretoile>4" (click)="etoile5()">\n      <img src="assets/imgs/star-gris.png" alt="star" class="star" *ngIf="nbretoile<1" (click)="etoile1()">\n      <img src="assets/imgs/star-gris.png" alt="star" class="star" *ngIf="nbretoile<2" (click)="etoile2()">\n      <img src="assets/imgs/star-gris.png" alt="star" class="star" *ngIf="nbretoile<3" (click)="etoile3()">\n      <img src="assets/imgs/star-gris.png" alt="star" class="star"  *ngIf="nbretoile<4" (click)="etoile4()">\n      <img src="assets/imgs/star-gris.png" alt="star" class="starend" *ngIf="nbretoile<5" (click)="etoile5()">\n      \n</ion-row> \n<p class="parag">{{note}}</p>\n<br>\n<hr>\n<span class="buttons">\n<div class="butt-left">\n    <button ion-button icon-left clear small class="butt" (click)="dismiss()">\n       \n        <div>Annuler</div>\n      </button>\n      <hr>\n</div>\n<span>\n  <button ion-button icon-left clear small class="butt" (click)="savecomment()">\n     \n      <div>Confirmer </div>\n    </button>\n    <hr>\n  </span>\n  </span>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\pages\canteen\popup-comment\popup-comment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__services_canteen_meal_service__["a" /* MealService */], __WEBPACK_IMPORTED_MODULE_3__servicesCafeteria_toast_service__["a" /* ToastService */]])
    ], PopupCommentPage);
    return PopupCommentPage;
}());

//# sourceMappingURL=popup-comment.js.map

/***/ })

});
//# sourceMappingURL=31.js.map