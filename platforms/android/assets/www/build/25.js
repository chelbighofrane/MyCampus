webpackJsonp([25],{

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewMembershipApplicationsPageModule", function() { return NewMembershipApplicationsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_membership_applications__ = __webpack_require__(932);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewMembershipApplicationsPageModule = (function () {
    function NewMembershipApplicationsPageModule() {
    }
    NewMembershipApplicationsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__new_membership_applications__["a" /* NewMembershipApplicationsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__new_membership_applications__["a" /* NewMembershipApplicationsPage */]),
            ],
        })
    ], NewMembershipApplicationsPageModule);
    return NewMembershipApplicationsPageModule;
}());

//# sourceMappingURL=new-membership-applications.module.js.map

/***/ }),

/***/ 932:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewMembershipApplicationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_edit_recruitment_quetions_modal_edit_recruitment_quetions_modal_component__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_club_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_club_model__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewMembershipApplicationsPage = (function () {
    function NewMembershipApplicationsPage(navCtrl, navParams, modalCtrl, clubService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.clubService = clubService;
        this.club = new __WEBPACK_IMPORTED_MODULE_4__models_club_model__["a" /* Club */]();
    }
    NewMembershipApplicationsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.clubService.getClubFromLocalStorage().then(function (club) {
            _this.club = club;
        }, function (error) {
            console.log(error);
        });
    };
    NewMembershipApplicationsPage.prototype.ionViewDidLoad = function () {
    };
    NewMembershipApplicationsPage.prototype.presentEditRecruitmentQuestionsModal = function () {
        var editRecruitmentQuestionsModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_edit_recruitment_quetions_modal_edit_recruitment_quetions_modal_component__["a" /* EditRecruitmentQuestionsModal */]);
        editRecruitmentQuestionsModal.present();
    };
    NewMembershipApplicationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-membership-applications',template:/*ion-inline-start:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\pages\club\new-membership-applications\new-membership-applications.html"*/'<ion-header>\n\n    <ion-navbar hideBackButton color="primary">\n\n        <button ion-button icon-only menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n\n        <ion-title>Demandes d\'Adhésion</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <ion-fab right bottom>\n        <button ion-fab color="secondary" (click)="presentEditRecruitmentQuestionsModal()"><ion-icon name="clipboard"></ion-icon></button>\n    </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\pages\club\new-membership-applications\new-membership-applications.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__services_club_service__["a" /* ClubService */]])
    ], NewMembershipApplicationsPage);
    return NewMembershipApplicationsPage;
}());

//# sourceMappingURL=new-membership-applications.js.map

/***/ })

});
//# sourceMappingURL=25.js.map