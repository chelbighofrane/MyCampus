webpackJsonp([43],{

/***/ 638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFeedbackPageModule", function() { return ModalFeedbackPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_feedback__ = __webpack_require__(901);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalFeedbackPageModule = (function () {
    function ModalFeedbackPageModule() {
    }
    ModalFeedbackPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_feedback__["a" /* ModalFeedbackPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_feedback__["a" /* ModalFeedbackPage */]),
            ],
        })
    ], ModalFeedbackPageModule);
    return ModalFeedbackPageModule;
}());

//# sourceMappingURL=modal-feedback.module.js.map

/***/ }),

/***/ 901:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalFeedbackPage; });
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
 * Generated class for the ModalFeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalFeedbackPage = (function () {
    function ModalFeedbackPage(navCtrl, navParams, view, modal, product, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.modal = modal;
        this.product = product;
        this.toast = toast;
    }
    ModalFeedbackPage.prototype.ionViewDidLoad = function () {
    };
    ModalFeedbackPage.prototype.ionViewWillLoad = function () {
        this.data = this.navParams.get('data');
        console.log(this.data.commentProduct);
    };
    ModalFeedbackPage.prototype.dismiss = function () {
        this.view.dismiss();
    };
    ModalFeedbackPage.prototype.repondrecomment = function (commentaire) {
        var _this = this;
        console.log(commentaire.comment);
        var myData = {
            commentProduct: this.data.commentProduct,
            commentuser: this.data.commentuser,
            commentaires: commentaire
        };
        if (myData.commentuser == 'cafeteria') {
            console.log('cafeteria');
            var p = myData.commentProduct;
            if (p.feedbacks == null) {
                p.feedbacks = [];
            }
            var dt = new Date().toString();
            p.feedbacks.push({ userID: myData.commentuser, content: commentaire.comment, rate: 7, date: dt });
            console.log(p.feedbacks);
            this.product.editItem(p);
        }
        else {
            var mymodal = this.modal.create('PopCommentPage', { data: myData }, {
                cssClass: "my-popup-modal",
            });
            mymodal.present();
            mymodal.onDidDismiss(function (value) {
                _this.data.commentmeal = value;
            });
        }
    };
    ModalFeedbackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-feedback',template:/*ion-inline-start:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\pages\cafeteria\StudentCafeteria\modal-feedback\modal-feedback.html"*/'<!--\n  Generated template for the ModalPageCommentaireConteenPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n\n\n\n\n\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Commenatires\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class="back">\n\n  <div class="feedback-card" *ngFor="let feed of data.commentProduct.feedbacks">\n    <div class="feedback-header">\n        <div class="avatar-container">\n            <div class="avatar-green-bg">\n                <img src="assets/imgs/user_comment.png">\n            </div>\n        </div>\n        <div class="user-details-container">\n            <p class="user-full-name">{{feed.userID}}</p>\n            <p class="date">{{feed.date | date:\'EEEE dd/MM/yyyy HH:mm\'}}</p>\n            <div class="star-rating" style="font-size:10px;">\n                <div class="back-stars" *ngIf="feed.userID != \'cafeteria\'">\n\n                      <img src="assets/imgs/star-jaune.png" alt="fa-star" class="star" *ngIf="feed.rate>0">\n                      <img src="assets/imgs/star-jaune.png" alt="star" class="fa-star" *ngIf="feed.rate>1">\n                      <img src="assets/imgs/star-jaune.png" alt="star" class="fa-star" *ngIf="feed.rate>2">\n                      <img src="assets/imgs/star-jaune.png" alt="star" class="fa-star" *ngIf="feed.rate>3">\n                      <img src="assets/imgs/star-jaune.png" alt="star" class="fa-star" *ngIf="feed.rate>4">\n    \n\n                    \n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="feedback-body">\n        <p>{{feed.content}}</p>\n    </div>\n</div>\n\n      <ion-list >\n              <form #frepas="ngForm" (ngSubmit)="repondrecomment(frepas.value)">\n              <ion-item class="color-item">\n                <ion-label floating>Repondre</ion-label>\n                <ion-textarea name="comment" ngModel required=""></ion-textarea>\n              </ion-item>\n              <br>\n              <button type="submit" [disabled]="!frepas.valid" ion-button round block class="btn-outline-primary">répondre</button>\n              </form>    \n          </ion-list>\n      \n      \n\n</ion-content>'/*ion-inline-end:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\pages\cafeteria\StudentCafeteria\modal-feedback\modal-feedback.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__servicesCafeteria_product_list_product_list_service__["a" /* ProductListService */],
            __WEBPACK_IMPORTED_MODULE_3__servicesCafeteria_toast_service__["a" /* ToastService */]])
    ], ModalFeedbackPage);
    return ModalFeedbackPage;
}());

//# sourceMappingURL=modal-feedback.js.map

/***/ })

});
//# sourceMappingURL=43.js.map