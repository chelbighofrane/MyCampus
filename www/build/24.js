webpackJsonp([24],{

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectedMembershipApplicationsPageModule", function() { return RejectedMembershipApplicationsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rejected_membership_applications__ = __webpack_require__(934);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RejectedMembershipApplicationsPageModule = (function () {
    function RejectedMembershipApplicationsPageModule() {
    }
    RejectedMembershipApplicationsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__rejected_membership_applications__["a" /* RejectedMembershipApplicationsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__rejected_membership_applications__["a" /* RejectedMembershipApplicationsPage */]),
            ],
        })
    ], RejectedMembershipApplicationsPageModule);
    return RejectedMembershipApplicationsPageModule;
}());

//# sourceMappingURL=rejected-membership-applications.module.js.map

/***/ }),

/***/ 934:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RejectedMembershipApplicationsPage; });
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


var RejectedMembershipApplicationsPage = (function () {
    function RejectedMembershipApplicationsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RejectedMembershipApplicationsPage.prototype.ngOnInit = function () {
    };
    RejectedMembershipApplicationsPage.prototype.ionViewDidLoad = function () {
    };
    RejectedMembershipApplicationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rejected-membership-applications',template:/*ion-inline-start:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\pages\club\rejected-membership-applications\rejected-membership-applications.html"*/'<ion-header>\n\n    <ion-navbar hideBackButton color="primary">\n\n        <button ion-button icon-only menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n\n        <ion-title>Demandes d\'Adhésion</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>'/*ion-inline-end:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\pages\club\rejected-membership-applications\rejected-membership-applications.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], RejectedMembershipApplicationsPage);
    return RejectedMembershipApplicationsPage;
}());

//# sourceMappingURL=rejected-membership-applications.js.map

/***/ })

});
//# sourceMappingURL=24.js.map