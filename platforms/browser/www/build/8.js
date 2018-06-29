webpackJsonp([8],{

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembershipApplicationsPageModule", function() { return MembershipApplicationsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__membership_applications__ = __webpack_require__(620);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__membership_applications__["a" /* MembershipApplicationsPage */]),
            ],
        })
    ], MembershipApplicationsPageModule);
    return MembershipApplicationsPageModule;
}());

//# sourceMappingURL=membership-applications.module.js.map

/***/ }),

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembershipApplicationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_side_menu_controller_service__ = __webpack_require__(287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Component, OnInit } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { SideMenuControllerService } from './../../../services/side-menu-controller.service';
// import { Observable } from 'rxjs/Observable';
// import { ProductListService } from './../../../services/product-list.service';
// import { Product } from './../../../models/product.model';
var MembershipApplicationsPage = (function () {
    function MembershipApplicationsPage(navCtrl, navParams, sideMenuControllerService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sideMenuControllerService = sideMenuControllerService;
        this.sideMenuControllerService.setupClubSideMenuContent();
    }
    MembershipApplicationsPage.prototype.ngOnInit = function () {
    };
    MembershipApplicationsPage.prototype.ionViewDidLoad = function () {
    };
    MembershipApplicationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-membership-applications',template:/*ion-inline-start:"C:\Users\NADER\IonicProjects\MyCampus\src\pages\club\membership-applications\membership-applications.html"*/'<ion-header>\n\n    <ion-navbar hideBackButton color="primary">\n\n        <button ion-button icon-only menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n\n        <ion-title>Demandes d\'Adhésion</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="arriere">\n\n    <!-- <ion-list>\n        <div *ngFor="let p of products; let i = index;">\n            <button class="accordion" (click)="accordionClick($event,i)">\n                <ion-item-sliding #slidingItem>\n                    <ion-item class="k">\n                        {{p.name}}\n                    </ion-item>\n                    <ion-item-options>\n                        <button ion-button color="danger" (click)="onRemove(p)">\n                            <ion-icon name="md-trash"></ion-icon>\n                        </button>\n                    </ion-item-options>\n                </ion-item-sliding>\n            </button>\n\n            <div class="panel">\n                <form #f="ngForm">\n                    <span>\n                        <ion-buttons end="">\n                            <button ion-button type="submit" [disabled]="!f.valid" icon-only class="borded">\n                                <ion-icon name="checkmark"></ion-icon>\n                            </button>\n                        </ion-buttons>\n                    </span>\n\n                    <p class="article-content ">\n                        <b>Description:</b>\n                        <br>\n                        <span>\n                            &nbsp;&nbsp;&nbsp;&nbsp;\n                            <textarea class="input" cols="50" name="startrp" ngModel placeholder="sauce tomate, fromage, thon, olives, persillade, origan..."\n                                required="">{{p.description}}</textarea>\n                        </span>\n                    </p>\n\n                    <p class="article-content ">\n                        <b>Prix:</b>\n                    </p>\n                    <p class="article-content ">\n                        <span class="margeChar">Mini:</span>\n                        <span>\n                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                            <input class="input" type="text" name="startrp" ngModel placeholder=prix required="">\n                        </span>\n                        <br>\n                        <span class="margeChar2">Moy:</span>\n                        <span>\n                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                            <input class="input" type="number" name="startrp" ngModel placeholder=prix required="">\n                        </span>\n                        <br>\n                        <span class="marge">Maxi:</span>\n                        <span>\n                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                            <input class="input" type="number" name="startrp" ngModel placeholder=prix required="">\n                        </span>\n                    </p>\n\n                    <p class="article-content ">\n                        <b>Photo:</b>\n                        <div class="divPhoto">\n                        </div>\n                        <ion-fab center middle bottom *ngIf="fab==true;" class="marg">\n                            <button class="btnt" mini ion-fab>\n                                <ion-icon name="add"></ion-icon>\n                            </button>\n                        </ion-fab>\n\n                        <p class="article-content ">\n                            <ion-checkbox checked="false" (click)="onSale()"></ion-checkbox>\n                            &nbsp;\n                            <b>Promotion</b>\n                        </p>\n                        <p class="article-content" *ngIf="sale==true;">\n                            <span class="margeChar1">Pourcentage:</span>\n                            &nbsp;&nbsp;\n                            <input class="input" type="number" name="startrp" ngModel placeholder=10 required="">\n                            <span class="marge">Debut promo:</span>\n                            &nbsp;&nbsp;\n                            <input class="input" type="date" name="startrp" ngModel required="">\n                            <span class="margeChar">Fin promo:&nbsp;</span>\n                            &nbsp;&nbsp;&nbsp;&nbsp;\n                            <input class="input" type="date" name="startrp" ngModel required="">\n                        </p>\n\n                </form>\n            </div>\n        </div>\n        <br>\n\n        <ion-fab bottom right>\n            <button class="btnt" ion-fab (click)="onNewItem()">\n                <ion-icon name="add"></ion-icon>\n            </button>\n        </ion-fab>\n\n\n    </ion-list> -->\n</ion-content>'/*ion-inline-end:"C:\Users\NADER\IonicProjects\MyCampus\src\pages\club\membership-applications\membership-applications.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_side_menu_controller_service__["a" /* SideMenuControllerService */]])
    ], MembershipApplicationsPage);
    return MembershipApplicationsPage;
}());

//# sourceMappingURL=membership-applications.js.map

/***/ })

});
//# sourceMappingURL=8.js.map