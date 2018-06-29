webpackJsonp([33],{

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuCanteenPageModule", function() { return MenuCanteenPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_canteen__ = __webpack_require__(918);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuCanteenPageModule = (function () {
    function MenuCanteenPageModule() {
    }
    MenuCanteenPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menu_canteen__["a" /* MenuCanteenPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu_canteen__["a" /* MenuCanteenPage */]),
            ],
        })
    ], MenuCanteenPageModule);
    return MenuCanteenPageModule;
}());

//# sourceMappingURL=menu-canteen.module.js.map

/***/ }),

/***/ 918:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuCanteenPage; });
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
 * Generated class for the MenuCanteenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var fromMonday = [], i = 0;
for (i; i < 7; i++) {
    fromMonday.push(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + i));
}
var MenuCanteenPage = (function () {
    function MenuCanteenPage(navCtrl, navParams, events, mealservice, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.mealservice = mealservice;
        this.loadingCtrl = loadingCtrl;
        this.sideMenuContent = [
            { name: 'Home', path: 'CanteenHomePage' },
            { name: 'Feedback', path: 'FeedbackCanteenPage' },
            { name: 'Mon compte', path: 'AccountPage' },
            { name: 'MenuEtudiant', path: 'EtudiantMenuPage' }
        ];
        this.demo = fromMonday;
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
        console.log(this.demo);
        console.log(this.mealList$);
        this.mealList$.subscribe(function (value) {
            console.log(value);
        });
        loading.dismiss();
    }
    MenuCanteenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuCanteenPage');
    };
    MenuCanteenPage.prototype.setupSideMenuContent = function () {
        this.events.publish('sideMenu:changeContent', this.sideMenuContent);
    };
    MenuCanteenPage.prototype.onDetailMenu = function (d) {
        this.navCtrl.push('DetailMenuPage', { meal: d });
    };
    MenuCanteenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu-canteen',template:/*ion-inline-start:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\pages\canteen\menu-canteen\menu-canteen.html"*/'<!--\n  Generated template for the MenuCanteenPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton color="primary">\n    <ion-title>Menu</ion-title>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n  </button> \n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="arriere">\n  \n    <ion-card class="mycard" (click)="onDetailMenu(d)" *ngFor="let d of demo ">\n      <span *ngIf="(d| date:\'EEEE\')!=\'Sunday\'">\n        <ion-card-header class="myCardHeader" >\n            {{d | date:\'EEEE dd/MM/yyyy\'}}\n        </ion-card-header>\n    \n        <ion-card-content class="mycontent" >\n            \n          <p class="sizetext"><span  class="jaune"><b>Repas : </b></span><br>\n            <span *ngFor="let meal of mealList$ | async ">\n            <span *ngIf="((d| date:\'EEEE dd/MM/yyyy\')==(meal.date| date:\'EEEE dd/MM/yyyy\'))">\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="gris"><b class="char-entre">Entrée:</b>{{meal.starterRepat}}</span><br>\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="gris"><b class="char-plat">Principal: </b> {{meal.mainCourseRepat}}</span><br>\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="gris"><b class="char-dessert">Dessert: </b>{{meal.dessertRepat}}</span><br>\n              \n            </span>\n          </span>\n        </p>\n        <br>\n          <p class="sizetext"><span class="jaune"><b>Dinner : </b></span><br>\n              <span *ngFor="let meal of mealList$ | async ">\n              <span *ngIf="((d| date:\'EEEE dd/MM/yyyy\')==(meal.date| date:\'EEEE dd/MM/yyyy\'))">\n                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="gris"><b class="char-entre">Entrée:</b>{{meal.starterDinner}}</span><br>\n                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="gris"><b class="char-plat">Principal: </b> {{meal.mainCourseDinner}}</span><br>\n                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="gris"><b class="char-dessert">Dessert:</b> {{meal.dessertDinner}}</span><br>\n              </span>\n              </span>\n          </p>\n        \n        </ion-card-content>\n      \n    \n      </span>\n      </ion-card>\n\n      \n</ion-content>\n'/*ion-inline-end:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\pages\canteen\menu-canteen\menu-canteen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */], __WEBPACK_IMPORTED_MODULE_2__services_canteen_meal_service__["a" /* MealService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */]])
    ], MenuCanteenPage);
    return MenuCanteenPage;
}());

//# sourceMappingURL=menu-canteen.js.map

/***/ })

});
//# sourceMappingURL=33.js.map