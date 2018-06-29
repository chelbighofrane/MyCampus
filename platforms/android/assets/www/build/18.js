webpackJsonp([18],{

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackCanteenPageModule", function() { return FeedbackCanteenPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feedback_canteen__ = __webpack_require__(915);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_canteen_scale_up_leave_transition__ = __webpack_require__(916);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_canteen_ModalScaleUpEnterTransition__ = __webpack_require__(917);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FeedbackCanteenPageModule = (function () {
    function FeedbackCanteenPageModule(config) {
        this.config = config;
        this.setCustomTransitions();
    }
    FeedbackCanteenPageModule.prototype.setCustomTransitions = function () {
        this.config.setTransition('modal-scale-up-leave', __WEBPACK_IMPORTED_MODULE_3__services_canteen_scale_up_leave_transition__["a" /* ModalScaleUpLeaveTransition */]);
        this.config.setTransition('modal-scale-up-enter', __WEBPACK_IMPORTED_MODULE_4__services_canteen_ModalScaleUpEnterTransition__["a" /* ModalScaleUpEnterTransition */]);
    };
    FeedbackCanteenPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__feedback_canteen__["a" /* FeedbackCanteenPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__feedback_canteen__["a" /* FeedbackCanteenPage */]),
            ],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Config */]])
    ], FeedbackCanteenPageModule);
    return FeedbackCanteenPageModule;
}());

//# sourceMappingURL=feedback-canteen.module.js.map

/***/ }),

/***/ 915:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackCanteenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_canteen_meal_service__ = __webpack_require__(371);
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
 * Generated class for the FeedbackCanteenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FeedbackCanteenPage = (function () {
    function FeedbackCanteenPage(navCtrl, navParams, events, mealservice, modal, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.mealservice = mealservice;
        this.modal = modal;
        this.loadingCtrl = loadingCtrl;
        this.sideMenuContent = [
            { name: 'Home', path: 'CanteenHomePage' },
            { name: 'Menu', path: 'MenuCanteenPage' },
            { name: 'Mon compte', path: 'AccountPage' },
            { name: 'test', path: 'TestmodalPage' }
        ];
        this.setupSideMenuContent();
        //loading 
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.mealList$ = this.mealservice.getAllmeal()
            .snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        console.log(this.mealList$);
        this.mealList$.subscribe(function (value) {
            _this.meals = value;
            console.log(_this.meals);
            _this.meal = _this.meals.reverse();
            console.log(_this.meal);
            var sum;
            var i;
            for (var _i = 0, _a = _this.meals; _i < _a.length; _i++) {
                var element = _a[_i];
                sum = 0;
                i = 0;
                if (element.feedbacks != null) {
                    for (var _b = 0, _c = element.feedbacks; _b < _c.length; _b++) {
                        var feed = _c[_b];
                        if (feed.userID != 'canteen') {
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
            console.log(_this.meals);
        });
        loading.dismiss();
    }
    FeedbackCanteenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FeedbackCanteenPage');
    };
    FeedbackCanteenPage.prototype.setupSideMenuContent = function () {
        this.events.publish('sideMenu:changeContent', this.sideMenuContent);
    };
    /*
    openMenu() {
      let actionSheet = this.actionSheetCtrl.create({
        title: 'Modify your album',
        
        buttons: [
          {
            text: 'Destructive',
            role: 'html',
            handler: () => {
              console.log('Destructive clicked');
            }
          },{
            text: '<ion-list><ion-list-header>Recent Conversations</ion-list-header><ion-item><ion-avatar item-start><img src="assets/img/avatar-finn.png"></ion-avatar><h2>Finn</h2><h3>I\'m a big deal</h3><p>Listen, I\'ve had a pretty messed up day...</p></ion-item>',
            role: 'component',
            handler: () => {
              console.log('Archive clicked');
            }
          },{
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      actionSheet.present();
    }
    */
    FeedbackCanteenPage.prototype.openMenu = function (meal, iduser) {
        var myData = {
            commentmeal: meal,
            commentuser: iduser
        };
        var mymodal = this.modal.create('ModalPageCommentaireConteenPage', { data: myData }, {
            cssClass: "my-modal",
        });
        mymodal.present();
        mymodal.onDidDismiss(function (data) {
            console.log(data);
        });
    };
    FeedbackCanteenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feedback-canteen',template:/*ion-inline-start:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\pages\canteen\feedback-canteen\feedback-canteen.html"*/'<!--\n  Generated template for the FeedbackCanteenPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton color="primary">\n    <ion-title>Feedback</ion-title>\n    <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="arriere">\n  \n        <ion-card class="mycard" *ngFor="let meal of meals">\n          \n            <ion-card-header class="myCardHeader" >\n                {{meal.date | date:\'EEEE dd/MM/yyyy\'}}\n            </ion-card-header>\n        \n            <ion-card-content class="mycontent" >\n\n                    <ion-row justify-content-center>\n                  \n                        <img src="assets/imgs/star-jaune.png" alt="star" class="star" *ngIf="meal.moyennefeed>=0.75">\n                        <img src="assets/imgs/star-jaune.png" alt="star" class="star" *ngIf="meal.moyennefeed>=1.75">\n                        <img src="assets/imgs/star-jaune.png" alt="star" class="star" *ngIf="meal.moyennefeed>=2.75">\n                        <img src="assets/imgs/star-jaune.png" alt="star" class="star" *ngIf="meal.moyennefeed>=3.75">\n                        <img src="assets/imgs/star-jaune.png" alt="star" class="starend" *ngIf="meal.moyennefeed>=4.75">\n\n                        <img src="assets/imgs/star-jaune-moy.png" alt="star" class="star" *ngIf="meal.moyennefeed>=0.25 && meal.moyennefeed<0.75">\n                        <img src="assets/imgs/star-jaune-moy.png" alt="star" class="star" *ngIf="meal.moyennefeed>=1.25 && meal.moyennefeed<1.75">\n                        <img src="assets/imgs/star-jaune-moy.png" alt="star" class="star" *ngIf="meal.moyennefeed>=2.25 && meal.moyennefeed<2.75">\n                        <img src="assets/imgs/star-jaune-moy.png" alt="star" class="star" *ngIf="meal.moyennefeed>=3.25 && meal.moyennefeed<3.75">\n                        <img src="assets/imgs/star-jaune-moy.png" alt="star" class="starend" *ngIf="meal.moyennefeed>=4.25 && meal.moyennefeed<4.75">\n\n\n                        <img src="assets/imgs/star-gris.png" alt="star" class="star" *ngIf="meal.moyennefeed<0.25">\n                        <img src="assets/imgs/star-gris.png" alt="star" class="star" *ngIf="meal.moyennefeed<1.25">\n                        <img src="assets/imgs/star-gris.png" alt="star" class="star" *ngIf="meal.moyennefeed<2.25">\n                        <img src="assets/imgs/star-gris.png" alt="star" class="star"  *ngIf="meal.moyennefeed<3.25">\n                        <img src="assets/imgs/star-gris.png" alt="star" class="starend" *ngIf="meal.moyennefeed<4.25">\n                        \n                    </ion-row> \n                    <br>\n\n              <p class="sizetext"><span  class="jaune"><b>Repas : </b></span><br>\n\n                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="gris"><b class="char-entre">Entrée:</b>{{meal.starterRepat}}</span><br>\n                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="gris"><b class="char-plat">Principal: </b> {{meal.mainCourseRepat}}</span><br>\n                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="gris"><b class="char-dessert">Dessert: </b>{{meal.dessertRepat}}</span><br>\n                  \n             </p>\n            <br>\n              <p class="sizetext"><span class="jaune"><b>Dinner : </b></span><br>\n                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="gris"><b class="char-entre">Entrée:</b>{{meal.starterDinner}}</span><br>\n                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="gris"><b class="char-plat">Principal: </b> {{meal.mainCourseDinner}}</span><br>\n                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="gris"><b class="char-dessert">Dessert:</b> {{meal.dessertDinner}}</span><br>                  \n              </p>\n\n              <ion-row justify-content-center class="centr action-sheets-basic-page " >\n                    <button ion-button icon-left clear small class="butt" (click)="openMenu(meal,\'canteen\')">\n                            <ion-icon name="text"></ion-icon>\n                            <div ><span *ngIf="meal.feedbacks">{{meal.feedbacks.length}}</span><span *ngIf="meal.feedbacks== null">0</span> COMMENTAIRE</div>\n                          </button>\n                    <!button (click)="openMenu()" class="butt" block><!/button>\n                \n              </ion-row>\n            \n            </ion-card-content>\n          \n        \n          \n          </ion-card>\n    \n          \n    </ion-content>'/*ion-inline-end:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\pages\canteen\feedback-canteen\feedback-canteen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__services_canteen_meal_service__["a" /* MealService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */]])
    ], FeedbackCanteenPage);
    return FeedbackCanteenPage;
}());

//# sourceMappingURL=feedback-canteen.js.map

/***/ }),

/***/ 916:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalScaleUpLeaveTransition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(17);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ModalScaleUpLeaveTransition = (function (_super) {
    __extends(ModalScaleUpLeaveTransition, _super);
    function ModalScaleUpLeaveTransition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalScaleUpLeaveTransition.prototype.init = function () {
        var ele = this.leavingView.pageRef().nativeElement;
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
        var contentWrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('.wrapper'));
        wrapper.beforeStyles({ 'transform': 'scale(0)', 'opacity': 1 });
        wrapper.fromTo('transform', 'scale(1)', 'scale(5.0)');
        wrapper.fromTo('opacity', 1, 1);
        contentWrapper.fromTo('opacity', 1, 0);
        this
            .element(this.leavingView.pageRef())
            .duration(100)
            .easing('cubic-bezier(.1, .7, .1, 1)')
            .add(contentWrapper)
            .add(wrapper);
    };
    return ModalScaleUpLeaveTransition;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["u" /* PageTransition */]));

//# sourceMappingURL=scale-up-leave.transition.js.map

/***/ }),

/***/ 917:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalScaleUpEnterTransition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(17);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ModalScaleUpEnterTransition = (function (_super) {
    __extends(ModalScaleUpEnterTransition, _super);
    function ModalScaleUpEnterTransition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalScaleUpEnterTransition.prototype.init = function () {
        var ele = this.enteringView.pageRef().nativeElement;
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
        wrapper.beforeStyles({ 'transform': 'scale(1)', 'opacity': 1 });
        wrapper.fromTo('transform', 'scale(0)', 'scale(5.0)');
        wrapper.fromTo('opacity', 1, 1);
        this
            .element(this.enteringView.pageRef())
            .duration(100)
            .easing('cubic-bezier(.1, .7, .1, 1)')
            .add(wrapper);
    };
    return ModalScaleUpEnterTransition;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["u" /* PageTransition */]));

//# sourceMappingURL=ModalScaleUpEnterTransition.js.map

/***/ })

});
//# sourceMappingURL=18.js.map