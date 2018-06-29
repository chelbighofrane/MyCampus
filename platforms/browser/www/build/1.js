webpackJsonp([1],{

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(673);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
            ],
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

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

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Credentials; });
var Credentials = (function () {
    function Credentials() {
    }
    return Credentials;
}());

//# sourceMappingURL=credentials.model.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return STUDENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CLUB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CANTEEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CAFETERIA; });
var STUDENT = 'STUDENT';
var CLUB = 'CLUB';
var CANTEEN = 'CANTEEN';
var CAFETERIA = 'CAFETERIA';
//# sourceMappingURL=users-types.constant.js.map

/***/ }),

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_side_menu_controller_service__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_club_service__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_club_model__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_user_model__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_credentials_model__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__consts_universities_constant__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__consts_users_types_constant__ = __webpack_require__(483);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, sideMenuControllerService, authenticationService, userService, clubService, storage, splashScreen, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sideMenuControllerService = sideMenuControllerService;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.clubService = clubService;
        this.storage = storage;
        this.splashScreen = splashScreen;
        this.toastCtrl = toastCtrl;
        this.user = new __WEBPACK_IMPORTED_MODULE_10__models_user_model__["a" /* User */]();
        this.club = new __WEBPACK_IMPORTED_MODULE_9__models_club_model__["a" /* Club */]();
        this.credentials = new __WEBPACK_IMPORTED_MODULE_11__models_credentials_model__["a" /* Credentials */]();
        this.universities = __WEBPACK_IMPORTED_MODULE_12__consts_universities_constant__["a" /* UNIVERSITIES */].slice(0);
        this.institutions = [];
        this.degrees = [];
        this.grades = [];
        this.isSignedUp = false;
        this.sideMenuControllerService.enableSideMenu(false);
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        this.signupSlider.lockSwipes(true);
    };
    SignupPage.prototype.selectUserType = function (n) {
        this.user = new __WEBPACK_IMPORTED_MODULE_10__models_user_model__["a" /* User */]();
        this.club = new __WEBPACK_IMPORTED_MODULE_9__models_club_model__["a" /* Club */]();
        switch (n) {
            case 1: {
                this.user.userType = __WEBPACK_IMPORTED_MODULE_13__consts_users_types_constant__["d" /* STUDENT */];
                break;
            }
            case 2: {
                this.user.userType = __WEBPACK_IMPORTED_MODULE_13__consts_users_types_constant__["c" /* CLUB */];
                break;
            }
            case 3: {
                this.user.userType = __WEBPACK_IMPORTED_MODULE_13__consts_users_types_constant__["a" /* CAFETERIA */];
                break;
            }
            case 4: {
                this.user.userType = __WEBPACK_IMPORTED_MODULE_13__consts_users_types_constant__["b" /* CANTEEN */];
                break;
            }
        }
        this.nextSlide();
    };
    SignupPage.prototype.slideChanged = function () {
    };
    SignupPage.prototype.nextSlide = function () {
        this.signupSlider.lockSwipes(false);
        this.signupSlider.slideNext();
        this.signupSlider.lockSwipes(true);
    };
    SignupPage.prototype.nextSignupStep = function () {
        var emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.user.firstName && this.user.firstName.trim().length > 0 &&
            this.user.lastName && this.user.lastName.trim().length > 0 &&
            this.user.icn && this.user.icn.trim().length > 0 &&
            this.credentials.email && this.credentials.email.trim().length > 0 && emailRegEx.test(String(this.credentials.email).toLocaleLowerCase()) &&
            this.credentials.password && this.credentials.password.trim().length > 0 &&
            this.passwordConfirmation && this.passwordConfirmation.trim().length > 0 &&
            this.credentials.password === this.passwordConfirmation) {
            if (this.credentials.password.trim().length >= 6) {
                this.nextSlide();
            }
            else {
                var toast = this.toastCtrl.create({
                    message: 'Votre mot de passe doit contenir 6 caractéres au minimum!',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
                return;
            }
        }
        else {
            return;
        }
    };
    SignupPage.prototype.universitySelectChange = function () {
        this.user.institution = null;
        if (this.user.university && this.user.university !== undefined) {
            this.institutions = this.user.university.institutions;
        }
        else {
            this.institutions = [];
        }
    };
    SignupPage.prototype.institutionSelectChange = function () {
        this.user.degree = null;
        this.grades = [];
        this.user.grade = null;
        if (this.user.institution && this.user.institution !== undefined) {
            this.degrees = this.user.institution.degrees;
        }
        else {
            this.degrees = [];
        }
    };
    SignupPage.prototype.degreeSelectChange = function () {
        this.grades = [];
        this.user.grade = null;
        if (this.user.degree && this.user.degree !== undefined) {
            for (var i = 0; i < this.user.degree.grades; i++) {
                if (i === 0) {
                    this.grades.push((i + 1) + 'ère Année');
                }
                else {
                    this.grades.push((i + 1) + 'ème Année');
                }
            }
        }
        else {
            this.grades = [];
        }
    };
    SignupPage.prototype.goToHomePage = function (homePage) {
        var _this = this;
        this.isSignedUp = true;
        this.splashScreen.hide();
        Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer__["timer"])(3000).subscribe(function () {
            _this.navCtrl.setRoot(homePage);
        });
    };
    SignupPage.prototype.signup = function () {
        var _this = this;
        var validation = false;
        var phoneRegEx = /^[24579]{1}[0-9]{7}$/;
        switch (this.user.userType) {
            case __WEBPACK_IMPORTED_MODULE_13__consts_users_types_constant__["d" /* STUDENT */]: {
                if (this.user.phoneNumber && phoneRegEx.test(String(this.user.phoneNumber)) &&
                    this.user.university && this.user.institution && this.user.degree && this.user.grade > 0) {
                    validation = true;
                }
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_13__consts_users_types_constant__["c" /* CLUB */]: {
                if (this.user.phoneNumber && phoneRegEx.test(String(this.user.phoneNumber)) &&
                    this.club.name && this.club.name.trim().length > 0 &&
                    this.user.university && this.user.institution) {
                    validation = true;
                }
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_13__consts_users_types_constant__["b" /* CANTEEN */]: {
                if (this.user.university) {
                    validation = true;
                }
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_13__consts_users_types_constant__["a" /* CAFETERIA */]: {
                if (this.user.university && this.user.institution) {
                    validation = true;
                }
                break;
            }
        }
        if (validation) {
            this.splashScreen.show();
            this.authenticationService.signUpWithEmailAndPassword(this.credentials).then(function (result) {
                _this.user.uid = result.uid;
                _this.user.email = _this.credentials.email;
                _this.userService.createUserProfile(_this.user).then(function (result) {
                    _this.storage.set('currentUser', _this.user);
                    switch (_this.user.userType) {
                        case __WEBPACK_IMPORTED_MODULE_13__consts_users_types_constant__["d" /* STUDENT */]: {
                            _this.goToHomePage('StudentHomePage');
                            break;
                        }
                        case __WEBPACK_IMPORTED_MODULE_13__consts_users_types_constant__["c" /* CLUB */]: {
                            _this.club.admin = _this.user;
                            _this.clubService.createClub(_this.club).then(function (result) {
                                _this.storage.set('currentClub', _this.club);
                                _this.goToHomePage('ClubProfilePage');
                            }, function (error) {
                                _this.splashScreen.hide();
                                console.log(error);
                            });
                            break;
                        }
                        case __WEBPACK_IMPORTED_MODULE_13__consts_users_types_constant__["b" /* CANTEEN */]: {
                            _this.goToHomePage('CanteenHomePage');
                            break;
                        }
                        case __WEBPACK_IMPORTED_MODULE_13__consts_users_types_constant__["a" /* CAFETERIA */]: {
                            _this.goToHomePage('CafeteriaHomePage');
                            break;
                        }
                    }
                }, function (error) {
                    _this.splashScreen.hide();
                    console.log(error);
                });
            }, function (error) {
                _this.splashScreen.hide();
                console.log(error);
                if (error.code === 'auth/email-already-in-use') {
                    var toast = _this.toastCtrl.create({
                        message: 'Un compte avec l\'email ' + _this.credentials.email + ' existe déja!',
                        duration: 3000,
                        position: 'top'
                    });
                    toast.present();
                }
            });
        }
        else {
            return;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */]) === "function" && _a || Object)
    ], SignupPage.prototype, "signupSlider", void 0);
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\NADER\IonicProjects\MyCampus\src\pages\signup\signup.html"*/'<ion-content class="signup-page">\n\n    <div class="logo-container" *ngIf="!isSignedUp">\n        <img src="assets/imgs/myCampus-logo-v1.png">\n    </div>\n\n    <div class="slides-container" *ngIf="!isSignedUp">\n        <ion-slides (ionSlideDidChange)="slideChanged()">\n            <ion-slide class="slide">\n                <div class="list-container">\n                    <p>Vous êtes..?</p>\n\n                    <ion-list no-lines>\n                        <button ion-item class="option" (click)="selectUserType(1)">\n                            Étudiant\n                        </button>\n                        <button ion-item class="option" (click)="selectUserType(2)">\n                            Résponsable Club\n                        </button>\n                        <button ion-item class="option" (click)="selectUserType(3)">\n                            Résponsable Buvette\n                        </button>\n                        <button ion-item class="option" (click)="selectUserType(4)">\n                            Résponsable Réstaurant\n                        </button>\n                    </ion-list>\n                </div>\n            </ion-slide>\n            <ion-slide class="slide">\n                <div class="form-container">\n                    <p>Saisissez vos données...</p>\n\n                    <ion-item class="float-lbl-input">\n                        <ion-label floating>Votre Prénom</ion-label>\n                        <ion-input type="text" [(ngModel)]="user.firstName"></ion-input>\n                    </ion-item>\n\n                    <ion-item class="float-lbl-input">\n                        <ion-label floating>Votre Nom</ion-label>\n                        <ion-input type="text" [(ngModel)]="user.lastName"></ion-input>\n                    </ion-item>\n\n                    <ion-item class="float-lbl-input">\n                        <ion-label floating>Votre CIN</ion-label>\n                        <ion-input type="text" [(ngModel)]="user.icn"></ion-input>\n                    </ion-item>\n\n                    <ion-item class="float-lbl-input">\n                        <ion-label floating>Votre Email</ion-label>\n                        <ion-input type="text" [(ngModel)]="credentials.email"></ion-input>\n                    </ion-item>\n\n                    <ion-item class="float-lbl-input">\n                        <ion-label floating>Votre Mot de Passe</ion-label>\n                        <ion-input type="password" [(ngModel)]="credentials.password"></ion-input>\n                    </ion-item>\n\n                    <ion-item class="float-lbl-input">\n                        <ion-label floating>Confirmez votre Mot de Passe</ion-label>\n                        <ion-input type="password" [(ngModel)]="passwordConfirmation"></ion-input>\n                    </ion-item>\n                </div>\n\n                <div class="action-container">\n                    <button ion-button color="secondary" round block large (click)="nextSignupStep()">Suivant</button>\n                </div>\n            </ion-slide>\n            <ion-slide class="slide">\n                <div class="form-container">\n                    <p>Une dernière étape!</p>\n\n                    <ion-item class="float-lbl-input" *ngIf="user.userType===\'CLUB\'">\n                        <ion-label floating>Nom de votre Club</ion-label>\n                        <ion-input type="text" [(ngModel)]="club.name"></ion-input>\n                    </ion-item>\n\n                    <ion-item class="float-lbl-input" *ngIf="user.userType===\'STUDENT\' || user.userType===\'CLUB\'">\n                        <ion-label floating>Votre Numéro de Tél</ion-label>\n                        <ion-input type="number" [(ngModel)]="user.phoneNumber"></ion-input>\n                    </ion-item>\n\n                    <ion-item class="float-lbl-select">\n                        <ion-label floating>Votre Université</ion-label>\n                        <ion-select [(ngModel)]="user.university" (ionChange)="universitySelectChange()">\n                            <ion-option *ngFor="let university of universities" [value]="university">{{university.universityName}}</ion-option>\n                        </ion-select>\n                    </ion-item>\n\n                    <ion-item class="float-lbl-select" *ngIf="user.userType!==\'CANTEEN\' && institutions && institutions.length>0">\n                        <ion-label floating>Votre Établissement</ion-label>\n                        <ion-select [(ngModel)]="user.institution" (ionChange)="institutionSelectChange()">\n                            <ion-option *ngFor="let institution of institutions" [value]="institution">{{institution.institutionName}}</ion-option>\n                        </ion-select>\n                    </ion-item>\n\n                    <ion-item class="float-lbl-select" *ngIf="user.userType===\'STUDENT\' && degrees && degrees.length>0">\n                        <ion-label floating>Votre Formation</ion-label>\n                        <ion-select [(ngModel)]="user.degree" (ionChange)="degreeSelectChange()">\n                            <ion-option *ngFor="let degree of degrees" [value]="degree">{{degree.degreeName}}</ion-option>\n                        </ion-select>\n                    </ion-item>\n\n                    <ion-item class="float-lbl-select" *ngIf="user.userType===\'STUDENT\' && grades && grades.length>0">\n                        <ion-label floating>Votre Niveau d\'Étude</ion-label>\n                        <ion-select [(ngModel)]="user.grade">\n                            <ion-option *ngFor="let grade of grades; let i = index;" [value]="i+1">{{grade}}</ion-option>\n                        </ion-select>\n                    </ion-item>\n                </div>\n\n                <div class="action-container">\n                    <button ion-button color="secondary" round block large (click)="signup()">Créez votre Compte</button>\n                </div>\n            </ion-slide>\n        </ion-slides>\n    </div>\n\n    <div class="confirmation-container" *ngIf="isSignedUp">\n        <img src="assets/imgs/myCampus-logo-v1.png">\n        <p>Bienvenue {{user.firstName}}!</p>\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\NADER\IonicProjects\MyCampus\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_side_menu_controller_service__["a" /* SideMenuControllerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_side_menu_controller_service__["a" /* SideMenuControllerService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__services_club_service__["a" /* ClubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_club_service__["a" /* ClubService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]) === "function" && _k || Object])
    ], SignupPage);
    return SignupPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UNIVERSITIES; });
var UNIVERSITIES = [
    {
        universityName: 'Université de la Manouba',
        universityAbbreviation: 'UMA',
        universityLocation: 'Manouba',
        institutions: [
            {
                institutionName: 'Ecole Nationale des Sciences de l\'Informatique',
                institutionAbbreviation: 'ENSI',
                institutionLocation: 'Manouba',
                degrees: [
                    {
                        degreeName: 'Cycle Ingénieur',
                        degreeAbbreviation: 'CI',
                        grades: 3
                    },
                    {
                        degreeName: 'Masters de Recherche',
                        degreeAbbreviation: 'MR',
                        grades: 2
                    }
                ]
            },
            {
                institutionName: 'Institut Supérieur de Comptabilité et d\'Administration des Entreprises',
                institutionAbbreviation: 'ISCAE',
                institutionLocation: 'Manouba',
                degrees: [
                    {
                        degreeName: 'Licence Fondamentale en Gestion',
                        degreeAbbreviation: 'LFG',
                        grades: 3
                    },
                    {
                        degreeName: 'Mastère de Recherche en Management',
                        degreeAbbreviation: 'MRM',
                        grades: 2
                    },
                    {
                        degreeName: 'Mastère de Recherche en Comptabilité',
                        degreeAbbreviation: 'MRC',
                        grades: 2
                    },
                    {
                        degreeName: 'Mastère Professionnel en Finance',
                        degreeAbbreviation: 'MPF',
                        grades: 2
                    }
                ]
            },
            {
                institutionName: 'Ecole Supérieure de Commerce',
                institutionAbbreviation: 'ESC',
                institutionLocation: 'Manouba',
                degrees: [
                    {
                        degreeName: 'Licence Fondamentale en Gestion Finance',
                        degreeAbbreviation: 'LFGF',
                        grades: 3
                    },
                    {
                        degreeName: 'Licence Appliquée en Gestion Marketing',
                        degreeAbbreviation: 'LAGM',
                        grades: 3
                    },
                    {
                        degreeName: 'Mastère de Recherche en Finance',
                        degreeAbbreviation: 'MRF',
                        grades: 2
                    }
                ]
            },
            {
                institutionName: 'Institut Supérieur des Arts Multimédia de la Manouba',
                institutionAbbreviation: 'ISAMM',
                institutionLocation: 'Manouba',
                degrees: [
                    {
                        degreeName: 'Licence Fondamentale en Informatique Multimédia',
                        degreeAbbreviation: 'LFIM',
                        grades: 3
                    },
                    {
                        degreeName: 'Cycle Ingénieur',
                        degreeAbbreviation: 'CI',
                        grades: 3
                    },
                    {
                        degreeName: 'Mastère de Recherche',
                        degreeAbbreviation: 'MR',
                        grades: 2
                    }
                ]
            }
        ]
    },
    {
        universityName: 'Université de Tunis El Manar',
        universityAbbreviation: 'UTM',
        universityLocation: 'Tunis',
        institutions: [
            {
                institutionName: 'Institut Préparatoire aux Eudes d\'Ingénieurs el Manar',
                institutionAbbreviation: 'IPEIEM',
                institutionLocation: 'Tunis',
                degrees: [
                    {
                        degreeName: 'EUPC Maths Physique',
                        degreeAbbreviation: 'EUPCMP',
                        grades: 2
                    },
                    {
                        degreeName: 'EUPC Physique Chimie',
                        degreeAbbreviation: 'EUPCPC',
                        grades: 2
                    },
                    {
                        degreeName: 'EUPC Technologie',
                        degreeAbbreviation: 'EUPCT',
                        grades: 2
                    }
                ]
            },
            {
                institutionName: 'Institut Supérieur des Sciences Biologiques Appliquées de Tunis',
                institutionAbbreviation: 'ISSBAT',
                institutionLocation: 'Tunis',
                degrees: [
                    {
                        degreeName: 'Licence Appliquée en Biotechnologie',
                        degreeAbbreviation: 'LAB',
                        grades: 3
                    },
                    {
                        degreeName: 'Licence Appliquée en Protection de l\'Environnement',
                        degreeAbbreviation: 'LAPE',
                        grades: 3
                    },
                    {
                        degreeName: 'Mastere Professionnel en Management du Risque et Cindyniques',
                        degreeAbbreviation: 'MPMRC',
                        grades: 2
                    }
                ]
            },
            {
                institutionName: 'Faculté de Droit et des Sciences Politiques de Tunis',
                institutionAbbreviation: 'FDSPT',
                institutionLocation: 'Tunis',
                degrees: [
                    {
                        degreeName: 'Licence Appliquée en Contentieux Fiscal et Administratif',
                        degreeAbbreviation: 'LACFA',
                        grades: 3
                    },
                    {
                        degreeName: 'Mastère Professionnel en Droit des Affaires',
                        degreeAbbreviation: 'MPDA',
                        grades: 2
                    },
                    {
                        degreeName: 'Mastère de Recherche en Droit Privé',
                        degreeAbbreviation: 'MRDP',
                        grades: 2
                    }
                ]
            }
        ]
    }
];
//# sourceMappingURL=universities.constant.js.map

/***/ })

});
//# sourceMappingURL=1.js.map