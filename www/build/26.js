webpackJsonp([26],{

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembershipApplicationsPageModule", function() { return MembershipApplicationsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__membership_applications__ = __webpack_require__(931);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MembershipApplicationsPageModule = (function () {
    function MembershipApplicationsPageModule() {
    }
    MembershipApplicationsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__membership_applications__["a" /* MembershipApplicationsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__membership_applications__["a" /* MembershipApplicationsPage */]),
            ],
        })
    ], MembershipApplicationsPageModule);
    return MembershipApplicationsPageModule;
}());

//# sourceMappingURL=membership-applications.module.js.map

/***/ }),

/***/ 931:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembershipApplicationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_side_menu_controller_service__ = __webpack_require__(370);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MembershipApplicationsPage = (function () {
    function MembershipApplicationsPage(navCtrl, navParams, sideMenuControllerService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sideMenuControllerService = sideMenuControllerService;
        this.newMembershipApplicationsPageRoot = 'NewMembershipApplicationsPage';
        this.acceptedMembershipApplicationsPageRoot = 'AcceptedMembershipApplicationsPage';
        this.rejectedMembershipApplicationsPageRoot = 'RejectedMembershipApplicationsPage';
        this.sideMenuControllerService.setupClubSideMenuContent();
    }
    MembershipApplicationsPage.prototype.ngOnInit = function () {
    };
    MembershipApplicationsPage.prototype.ionViewDidLoad = function () {
    };
    MembershipApplicationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-membership-applications',template:/*ion-inline-start:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\pages\club\membership-applications\membership-applications.html"*/'<ion-tabs>\n    <ion-tab [root]="newMembershipApplicationsPageRoot" tabTitle="Nouvelles Demandes"></ion-tab>\n    <ion-tab [root]="acceptedMembershipApplicationsPageRoot" tabTitle="Demandes Acceptées"></ion-tab>\n    <ion-tab [root]="rejectedMembershipApplicationsPageRoot" tabTitle="Demandes Rejetées"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\pages\club\membership-applications\membership-applications.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_side_menu_controller_service__["a" /* SideMenuControllerService */]])
    ], MembershipApplicationsPage);
    return MembershipApplicationsPage;
}());

//# sourceMappingURL=membership-applications.js.map

/***/ })

});
//# sourceMappingURL=26.js.map