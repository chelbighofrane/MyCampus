webpackJsonp([3],{

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubProfilePageModule", function() { return ClubProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__club_profile__ = __webpack_require__(617);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ClubProfilePageModule = (function () {
    function ClubProfilePageModule() {
    }
    ClubProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__club_profile__["a" /* ClubProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__club_profile__["a" /* ClubProfilePage */]),
            ],
        })
    ], ClubProfilePageModule);
    return ClubProfilePageModule;
}());

//# sourceMappingURL=club-profile.module.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Club; });
var Club = (function () {
    function Club() {
    }
    return Club;
}());

//# sourceMappingURL=club.model.js.map

/***/ }),

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_side_menu_controller_service__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_club_service__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_club_model__ = __webpack_require__(481);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClubProfilePage = (function () {
    function ClubProfilePage(navCtrl, navParams, sideMenuControllerService, clubService, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sideMenuControllerService = sideMenuControllerService;
        this.clubService = clubService;
        this.storage = storage;
        this.isBeginning = true;
        this.isEnd = false;
        this.club = new __WEBPACK_IMPORTED_MODULE_5__models_club_model__["a" /* Club */]();
        this.sideMenuControllerService.setupClubSideMenuContent();
        this.clubKey = this.navParams.get('clubKey');
    }
    ClubProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.clubKey || this.clubKey === undefined) {
            console.log('its the club admin data exit in locale storage');
            this.storage.get('currentClub').then(function (response) {
                _this.club = response;
                console.log(_this.club);
            }, function (error) {
                console.log(error);
            });
        }
        else {
            console.log('its a public visitor, club id must be passed with nav params');
            this.clubService.getClubById(this.clubKey).subscribe(function (response) {
                _this.club = response;
                console.log(_this.club);
            }, function (error) {
                console.log(error);
            });
        }
    };
    ClubProfilePage.prototype.ionViewDidLoad = function () {
    };
    ClubProfilePage.prototype.slideChanged = function () {
        this.isBeginning = this.gallery.isBeginning();
        this.isEnd = this.gallery.isEnd();
    };
    ClubProfilePage.prototype.nextSlide = function () {
        this.gallery.slideNext();
    };
    ClubProfilePage.prototype.prevSlide = function () {
        this.gallery.slidePrev();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */])
    ], ClubProfilePage.prototype, "gallery", void 0);
    ClubProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-club-profile',template:/*ion-inline-start:"C:\Users\NADER\IonicProjects\MyCampus\src\pages\club\club-profile\club-profile.html"*/'<ion-header>\n\n    <ion-navbar hideBackButton color="primary">\n\n        <button ion-button icon-only menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n\n        <ion-title>Vitrine club</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <section id="banner">\n\n        <div class="cover-container">\n            \n        </div>\n\n        <div class="logo-container">\n            <img src="assets/imgs/club-logo.jpg">\n        </div>\n\n    </section>\n\n    <section id="club-details">\n\n        <div class="wrapper">\n\n            <div id="club-name">\n                <p>Film Club</p>\n            </div>\n\n            <div id="institut">\n                <p>Institut Supérieur des Arts Multimédia</p>\n            </div>\n\n            <div id="foundation-year">\n                <p>Fondé en 2013</p>\n            </div>\n\n            <div id="club-presentation">\n                <p>Velit fugiat labore incididunt amet. Id aute duis deserunt ad sunt est. Ea in sunt esse aute ut labore anim\n                    cillum. Veniam veniam ullamco nulla consequat dolore non ex veniam velit voluptate cupidatat do sit aliqua.\n                    Do ullamco voluptate enim ullamco cupidatat amet proident nostrud fugiat aute enim occaecat deserunt.</p>\n            </div>\n\n        </div>\n\n    </section>\n\n    <section id="club-staff">\n\n        <div id="club-numbers">\n\n            <div class="wrapper">\n\n                <div class="container">\n\n                    <div class="one-third">\n                        <p class="number">\n                            <i class="fas fa-user"></i>16</p>\n                        <p class="label">Staff</p>\n                    </div>\n\n                    <div class="one-third separator">\n                        <p class="number">\n                            <i class="fas fa-users"></i>43</p>\n                        <p class="label">Membres</p>\n                    </div>\n\n                    <div class="one-third">\n                        <p class="number">\n                            <i class="far fa-calendar-alt"></i>21</p>\n                        <p class="label">Evénements</p>\n                    </div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n        <div class="wrapper">\n\n            <div class="header">\n                <p>Notre Equipe</p>\n            </div>\n\n            <div class="staff-card">\n\n                <div class="card-wrapper">\n\n                    <div class="staff-photo-container">\n                        <img src="assets/imgs/staff-profile-picture-1.jpg">\n                    </div>\n\n                    <div class="staff-details">\n\n                        <p class="staff-name">Alex Butler</p>\n                        <p class="staff-position">Président du club</p>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n            <div class="staff-card">\n\n                <div class="card-wrapper">\n\n                    <div class="staff-photo-container">\n                        <img src="assets/imgs/staff-profile-picture-2.jpg">\n                    </div>\n\n                    <div class="staff-details">\n\n                        <p class="staff-name">Nicholas Miller</p>\n                        <p class="staff-position">Vice-Président</p>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n            <div class="staff-card">\n\n                <div class="card-wrapper">\n\n                    <div class="staff-photo-container">\n                        <img src="assets/imgs/staff-profile-picture-3.jpg">\n                    </div>\n\n                    <div class="staff-details">\n\n                        <p class="staff-name">Evelyn Jenkins</p>\n                        <p class="staff-position">Responsable Communication</p>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n            <div class="staff-card">\n\n                <div class="card-wrapper">\n\n                    <div class="staff-photo-container">\n                        <img src="assets/imgs/staff-profile-picture-4.jpg">\n                    </div>\n\n                    <div class="staff-details">\n\n                        <p class="staff-name">Karen Simmons</p>\n                        <p class="staff-position">Responsable Sponsoring</p>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n            <div class="staff-card">\n\n                <div class="card-wrapper">\n\n                    <div class="staff-photo-container">\n                        <img src="assets/imgs/staff-profile-picture-5.jpg">\n                    </div>\n\n                    <div class="staff-details">\n\n                        <p class="staff-name">Alan Garner</p>\n                        <p class="staff-position">Trésaurier</p>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </section>\n\n    <section id="club-gallery">\n\n        <div class="header">\n            <p>Gelerie</p>\n        </div>\n\n        <ion-slides class="slides-container" (ionSlideDidChange)="slideChanged()">\n            <ion-slide class="slide">\n                <img src="assets/imgs/club-gallery-img1.jpg">\n            </ion-slide>\n            <ion-slide class="slide">\n                <img src="assets/imgs/club-gallery-img2.jpg">\n            </ion-slide>\n            <ion-slide class="slide">\n                <img src="assets/imgs/club-gallery-img3.jpg">\n            </ion-slide>\n            <ion-slide class="slide">\n                <img src="assets/imgs/club-gallery-img4.jpg">\n            </ion-slide>\n        </ion-slides>\n\n        <div class="arrow left-arrow" *ngIf="!isBeginning">\n            <i class="fas fa-chevron-circle-left" (click)="prevSlide()"></i>\n        </div>\n\n        <div class="arrow right-arrow" *ngIf="!isEnd">\n            <i class="fas fa-chevron-circle-right" (click)="nextSlide()"></i>\n        </div>\n\n    </section>\n\n    <section id="club-contact">\n\n        <div class="wrapper">\n\n            <div class="header">\n                <p>Nous Contacter</p>\n            </div>\n\n            <div class="contact-list">\n\n                <ul>\n                    <li>\n                        <a>\n                            <i class="fab fa-facebook-f"></i>\n                        </a>\n                    </li>\n                    <li>\n                        <a>\n                            <i class="fab fa-linkedin-in"></i>\n                        </a>\n                    </li>\n                    <li>\n                        <a>\n                            <i class="fab fa-twitter"></i>\n                        </a>\n                    </li>\n                    <li>\n                        <a style="margin-top:10px;">\n                            <i class="fas fa-phone"></i>\n                        </a>\n                    </li>\n                    <li>\n                        <a style="margin-top:10px;">\n                            <i class="fas fa-at"></i>\n                        </a>\n                    </li>\n                </ul>\n\n            </div>\n        </div>\n\n    </section>\n\n</ion-content>'/*ion-inline-end:"C:\Users\NADER\IonicProjects\MyCampus\src\pages\club\club-profile\club-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_side_menu_controller_service__["a" /* SideMenuControllerService */],
            __WEBPACK_IMPORTED_MODULE_4__services_club_service__["a" /* ClubService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ClubProfilePage);
    return ClubProfilePage;
}());

//# sourceMappingURL=club-profile.js.map

/***/ })

});
//# sourceMappingURL=3.js.map