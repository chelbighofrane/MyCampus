webpackJsonp([34],{

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EtudiantMenuPageModule", function() { return EtudiantMenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__etudiant_menu__ = __webpack_require__(914);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EtudiantMenuPageModule = (function () {
    function EtudiantMenuPageModule() {
    }
    EtudiantMenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__etudiant_menu__["a" /* EtudiantMenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__etudiant_menu__["a" /* EtudiantMenuPage */]),
            ],
        })
    ], EtudiantMenuPageModule);
    return EtudiantMenuPageModule;
}());

//# sourceMappingURL=etudiant-menu.module.js.map

/***/ }),

/***/ 914:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EtudiantMenuPage; });
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
 * Generated class for the EtudiantMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var fromMonday = [], i = 0;
for (i; i < 7; i++) {
    fromMonday.push(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + i));
}
var EtudiantMenuPage = (function () {
    function EtudiantMenuPage(navCtrl, navParams, events, mealservice, loadingCtrl) {
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
        this.defaultMsgEntre = "entrer le plat d'entrée";
        this.defaultMsgDessert = "entrer dessert";
        this.defaultMsgMainCourse = "entrer plat principale";
        this.demo = fromMonday;
        this.setupSideMenuContent();
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
            console.log(value);
        });
        loading.dismiss();
    }
    EtudiantMenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuCanteenPage');
    };
    EtudiantMenuPage.prototype.setupSideMenuContent = function () {
        this.events.publish('sideMenu:changeContent', this.sideMenuContent);
    };
    EtudiantMenuPage.prototype.onDetailMenu = function (d) {
        this.navCtrl.push('EtudiantMenuDetailPage', { meal: d });
    };
    EtudiantMenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-etudiant-menu',template:/*ion-inline-start:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\pages\canteen\etudiant-menu\etudiant-menu.html"*/'<!--\n  Generated template for the EtudiantMenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar hideBackButton color="primary">\n      <ion-title>Menu</ion-title>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n  \n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding class="arriere">\n    <span *ngFor="let meal of mealList$ | async ">\n      <span *ngFor="let d of demo ">\n          <ion-card class="mycard" (click)="onDetailMenu(d)" *ngIf="((d| date:\'EEEE dd/MM/yyyy\')==(meal.date| date:\'EEEE dd/MM/yyyy\'))">\n            <ion-card-header class="myCardHeader" >\n                {{d | date:\'EEEE dd/MM/yyyy\'}}\n            </ion-card-header>\n\n            <ion-card-content class="mycontent" >\n                <span *ngIf="!((meal.starterRepat==defaultMsgEntre) && (meal.mainCourseRepat==defaultMsgMainCourse) && (meal.dessertRepat==defaultMsgDessert) );">\n     \n                <p class="sizetext"><span  class="jaune"><b>Repas : </b></span><br>\n                  \n                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="gris"><b class="char-entre">Entrée:</b><span *ngIf="meal.starterRepat != defaultMsgEntre">{{meal.starterRepat}}</span></span><br>\n                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="gris"><b class="char-plat">Principal: </b> <span *ngIf="meal.mainCourseRepat != defaultMsgMainCourse">{{meal.mainCourseRepat}}</span></span><br>\n                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="gris"><b class="char-dessert">Dessert: </b><span *ngIf="meal.dessertRepat != defaultMsgDessert">{{meal.dessertRepat}}</span></span><br>\n                    \n              </p>\n          \n\n              <br>\n\n            </span>\n\n            \n              <span *ngIf="!((meal.starterDinner==defaultMsgEntre) && (meal.mainCourseDinner==defaultMsgMainCourse) && (meal.dessertDinner==defaultMsgDessert) );">\n  \n              <p class="sizetext"><span class="jaune"><b>Dinner : </b></span><br>\n                \n                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="gris"><b class="char-entre">Entrée:</b>{{meal.starterDinner}}</span><br>\n                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="gris"><b class="char-plat">Principal: </b> {{meal.mainCourseDinner}}</span><br>\n                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="gris"><b class="char-dessert">Dessert:</b> {{meal.dessertDinner}}</span><br>\n                \n            </p>\n            </span>\n          \n          </ion-card-content>\n            \n          </ion-card>\n      </span>\n    </span>\n    \n        \n  </ion-content>'/*ion-inline-end:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\pages\canteen\etudiant-menu\etudiant-menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */], __WEBPACK_IMPORTED_MODULE_2__services_canteen_meal_service__["a" /* MealService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */]])
    ], EtudiantMenuPage);
    return EtudiantMenuPage;
}());

//# sourceMappingURL=etudiant-menu.js.map

/***/ })

});
//# sourceMappingURL=34.js.map