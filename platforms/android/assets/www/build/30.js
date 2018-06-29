webpackJsonp([30],{

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationPageModule", function() { return ReservationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reservation__ = __webpack_require__(921);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReservationPageModule = (function () {
    function ReservationPageModule() {
    }
    ReservationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reservation__["a" /* ReservationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reservation__["a" /* ReservationPage */]),
            ],
        })
    ], ReservationPageModule);
    return ReservationPageModule;
}());

//# sourceMappingURL=reservation.module.js.map

/***/ }),

/***/ 921:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_canteen_reserver_service__ = __webpack_require__(374);
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
 * Generated class for the ReservationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var fromMonday = [], i = 0;
for (i; i < 7; i++) {
    fromMonday.push(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + i));
}
var ReservationPage = (function () {
    function ReservationPage(navCtrl, navParams, events, reservationservice, toast, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.reservationservice = reservationservice;
        this.toast = toast;
        this.loadingCtrl = loadingCtrl;
        this.sideMenuContent = [
            { name: 'Menu', path: 'MenuCanteenPage' },
            { name: 'Feedback', path: 'FeedbackCanteenPage' },
            { name: 'Mon compte', path: 'AccountPage' },
            { name: 'MenuEtudiant', path: 'EtudiantMenuPage' }
        ];
        this.demo = fromMonday;
        this.lastDate = this.demo[0];
        this.setupSideMenuContent();
        console.log(this.demo);
        //loading 
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.reserveliste$ = this.reservationservice.getAllreservation()
            .snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        console.log(this.reserveliste$);
        this.reserveliste$.subscribe(function (value) {
            _this.reservations = value;
            //console.log(this.reservations);
            for (var _i = 0, _a = _this.reservations; _i < _a.length; _i++) {
                var element = _a[_i];
                //console.log(this.demo[0].getDate());
                //console.log(new Date(element.meal).getDate());
                if ((new Date(element.meal).getFullYear() == _this.demo[0].getFullYear())
                    && (new Date(element.meal).getMonth() == _this.demo[0].getMonth())
                    && (new Date(element.meal).getDate() == _this.demo[0].getDate())) {
                    //console.log("if");
                    if (_this.reserveDate == null) {
                        _this.reserveDate = [];
                    }
                    _this.reserveDate.push(element);
                }
            }
            if (_this.reservefiltre == null) {
                _this.reservefiltre = [];
            }
            _this.reservefiltre = _this.reserveDate;
            //console.log(this.reservefiltre);
            //console.log(this.reserveDate);
        });
        loading.dismiss();
    }
    ReservationPage.prototype.setupSideMenuContent = function () {
        this.events.publish('sideMenu:changeContent', this.sideMenuContent);
    };
    ReservationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReservationPage');
    };
    ReservationPage.prototype.onSearchChange = function (searchValue) {
        var test;
        if (searchValue != null) {
            this.reservefiltre = [];
            for (var _i = 0, _a = this.reserveDate; _i < _a.length; _i++) {
                var element = _a[_i];
                test = true;
                for (i = 0; i < searchValue.length; i++) {
                    if (searchValue.charAt(i).toLowerCase() != element.userID.charAt(i).toLowerCase()) {
                        test = false;
                        break;
                    }
                }
                if (test == true) {
                    this.reservefiltre.push(element);
                }
            }
        }
        else {
            this.reservefiltre = this.reserveDate;
        }
        console.log(searchValue);
    };
    ReservationPage.prototype.changeDate = function (value) {
        this.reserveDate = [];
        for (var _i = 0, _a = this.reservations; _i < _a.length; _i++) {
            var element = _a[_i];
            //console.log(value.getDate());
            //console.log(new Date(element.meal).getDate());
            if ((new Date(element.meal).getFullYear() == new Date(value).getFullYear())
                && (new Date(element.meal).getMonth() == new Date(value).getMonth())
                && (new Date(element.meal).getDate() == new Date(value).getDate())) {
                this.reserveDate.push(element);
            }
        }
        this.reservefiltre = [];
        this.reservefiltre = this.reserveDate;
        this.lastDate = value;
        console.log(this.reserveDate);
        console.log(new Date(value).getDate());
    };
    ReservationPage.prototype.onRemove = function (res) {
        var _this = this;
        this.reservefiltre.splice(this.reservefiltre.indexOf(res), 0);
        this.reserveDate.splice(this.reserveDate.indexOf(res), 0);
        this.reservations.splice(this.reservations.indexOf(res), 0);
        res.datechack = new Date().toString();
        res.checked = 'true';
        this.reservationservice.editreservation(res).then(function () {
            _this.toast.show(res.userID + " servi !");
            _this.changeDate(_this.lastDate);
            _this.ionViewDidLoad();
        });
    };
    ReservationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reservation',template:/*ion-inline-start:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\pages\canteen\reservation\reservation.html"*/'<!--\n  Generated template for the ReservationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar hideBackButton color="primary">\n\n        <ion-title>Reservation</ion-title>\n        <button ion-button icon-only menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="back">\n<br>\n\n<ion-grid>\n    <ion-row>\n      <ion-col col-4 >\n          <span class="custom-select" >\n          <select #t (change)="changeDate(t.value)">\n\n          \n              <option *ngIf="(demo[0]| date:\'EEEE\')!=\'Sunday\'"  [value]="demo[0]">{{demo[0]| date:\'dd/MM/yyyy\'}}</option>\n              <option *ngIf="(demo[1]| date:\'EEEE\')!=\'Sunday\'"  [value]="demo[1]">{{demo[1] | date:\'dd/MM/yyyy\'}}</option>\n              <option *ngIf="(demo[2]| date:\'EEEE\')!=\'Sunday\'" [value]="demo[2]">{{demo[2]| date:\'dd/MM/yyyy\'}}</option>\n              <option *ngIf="(demo[3]| date:\'EEEE\')!=\'Sunday\'"  [value]="demo[3]">{{demo[3] | date:\'dd/MM/yyyy\'}}</option>\n              <option *ngIf="(demo[4]| date:\'EEEE\')!=\'Sunday\'" [value]="demo[4]">{{demo[4]| date:\'dd/MM/yyyy\'}}</option>\n              <option *ngIf="(demo[5]| date:\'EEEE\')!=\'Sunday\'"  [value]="demo[5]">{{demo[5] | date:\'dd/MM/yyyy\'}}</option>\n              <option *ngIf="(demo[6]| date:\'EEEE\')!=\'Sunday\'" [value]="demo[6]">{{demo[6]| date:\'dd/MM/yyyy\'}}</option>\n              \n              \n            </select>\n            </span>\n      </ion-col>\n      <ion-col col-8 >\n          <div class="search-container">\n          <input type="text" placeholder="Recherche.." name="search" (input)="onSearchChange($event.target.value)">\n      </div>\n        </ion-col>\n        \n         \n    </ion-row>\n  </ion-grid>\n\n  \n    <br>\n    \n    <ion-list>\n \n        <ion-item-sliding #slidingItem *ngFor="let res of reservefiltre" >\n        \n            <ion-item class="item" [hidden]="res.checked!=\'false\'"> \n                <div class="feedback-header">\n                    <div class="avatar-container">\n                        <div class="avatar-green-bg">\n                            <img src="assets/imgs/user_comment.png">\n                        </div>\n                    </div>\n                    <div class="user-details-container">\n                        <p class="user-full-name">{{res.userID}}</p>\n                        <p class="date">{{res.date| date:\'dd/MM/yyyy : HH:mm\'}}</p>\n                    </div>\n                    <p end="" class="plat"><b>{{res.quantity}}</b></p>\n                </div>\n                \n          \n            </ion-item>\n           \n            <ion-item-options class="wid" [hidden]="res.checked!=\'false\'">\n             \n                 <button ion-button color="danger"  (click)="onRemove(res)">\n            \n                      <ion-icon name="md-trash"></ion-icon>\n                      <span class="txtdel"><b>Supprimer</b></span>\n                 </button>\n           \n            </ion-item-options>\n        \n        </ion-item-sliding>\n     </ion-list>\n    \n     \n      \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\pages\canteen\reservation\reservation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */], __WEBPACK_IMPORTED_MODULE_2__services_canteen_reserver_service__["a" /* ReserverService */],
            __WEBPACK_IMPORTED_MODULE_3__servicesCafeteria_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */]])
    ], ReservationPage);
    return ReservationPage;
}());

//# sourceMappingURL=reservation.js.map

/***/ })

});
//# sourceMappingURL=30.js.map