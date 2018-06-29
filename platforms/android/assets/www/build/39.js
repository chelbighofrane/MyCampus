webpackJsonp([39],{

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPageModule", function() { return ProductDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_details__ = __webpack_require__(905);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductDetailsPageModule = (function () {
    function ProductDetailsPageModule() {
    }
    ProductDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__product_details__["a" /* ProductDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product_details__["a" /* ProductDetailsPage */]),
            ],
        })
    ], ProductDetailsPageModule);
    return ProductDetailsPageModule;
}());

//# sourceMappingURL=product-details.module.js.map

/***/ }),

/***/ 905:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicesCafeteria_product_list_panier_list_service__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicesCafeteria_toast_service__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servicesCafeteria_product_list_product_list_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servicesCafeteria_product_list_order_list_service__ = __webpack_require__(373);
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
 * Generated class for the ProductDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductDetailsPage = (function () {
    function ProductDetailsPage(navCtrl, navParams, panier, product, order, toast, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.panier = panier;
        this.product = product;
        this.order = order;
        this.toast = toast;
        this.events = events;
        this.sideMenuContent = [
            { name: 'Gestion Produits', path: 'GestionProduitPage' },
            { name: 'Espace Etudiant', path: 'StudentProductPage' },
            { name: 'Accueil', path: 'CafeteriaHomePage' },
            { name: 'Panier', path: 'PanierPage' },
            { name: 'Mes Commandes', path: 'OrdersPage' },
        ];
        this.orders = [];
        this.paniers = [];
        this.o = {
            userID: undefined,
            panier: undefined,
            dateOrder: undefined,
            status: undefined
        };
        this.shownGroup = null;
        this.p = this.navParams.data.panier;
        this.ord = this.navParams.data.order;
        console.log('hedhi l panier');
        console.log(this.p);
        console.log('hedhi l order');
        console.log(this.ord);
        this.setupSideMenuContent();
        this.getFormattedDate();
    }
    ProductDetailsPage.prototype.setupSideMenuContent = function () {
        this.events.publish('sideMenu:changeContent', this.sideMenuContent);
    };
    ProductDetailsPage.prototype.getFormattedDate = function () {
        var ob = new Date();
        var year = ob.getFullYear().toString();
        var month = ob.getMonth().toString();
        var day = ob.getDay().toString();
        this.currentDate = year + '-' + month + '-' + day;
    };
    ProductDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.order
            .getOrderList() //db list
            .snapshotChanges() //key and value
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }).subscribe(function (res) {
            _this.orders = res;
        }, function (error) {
            console.log('error');
        });
    };
    ProductDetailsPage.prototype.accordionClick = function (event, index, p) {
        var panel = document.getElementsByClassName('panel')[index];
        console.log(panel);
        event.target.classList.toggle('active');
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        }
        else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    };
    ProductDetailsPage.prototype.ionViewDidLoad = function () {
    };
    ProductDetailsPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    ;
    ProductDetailsPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    ;
    ProductDetailsPage.prototype.onRemove = function (p) {
        var j = 0;
        var i = 0;
        for (var _i = 0, _a = this.orders; _i < _a.length; _i++) {
            var order = _a[_i];
            if (this.ord.key == order.key) {
                for (var _b = 0, _c = this.ord.panier; _b < _c.length; _b++) {
                    var pan = _c[_b];
                    this.paniers.push(pan);
                }
                for (var _d = 0, _e = this.ord.panier; _d < _e.length; _d++) {
                    var pan = _e[_d];
                    if (pan.key == p.key) {
                        this.paniers.splice(j, 1);
                        if (this.paniers.length == 0) {
                            this.order.remove(this.ord);
                        }
                        else {
                            this.ord.panier = this.paniers;
                            this.order.editItem(this.ord);
                        }
                        break;
                    }
                    j++;
                }
            }
        }
        /* for (let pan of this.orders[i].panier) {
           if(pan==o){
             console.log(pan);
           }
           
        
         }
     }*/
        //this.toast.show('commande supprimer avec succes');
        //this.navCtrl.setRoot('OrdersPage');
    };
    ProductDetailsPage.prototype.onEditItem = function (p) {
        this.panier.editItem(p);
        this.toast.show("Commande modifie avec succes!");
        this.navCtrl.setRoot('PanierPage');
    };
    ProductDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product-details',template:/*ion-inline-start:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\pages\cafeteria\StudentCafeteria\product-details\product-details.html"*/'<ion-header>\n    <ion-navbar hideBackButton color="primary">\n        <ion-title>Details Produit</ion-title>\n        <button ion-button icon-only menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="arriere">\n    <ion-list>\n        \n            <button class="accordion" >\n                <ion-item-sliding #slidingItem class="k">\n                    <ion-item class="k">\n                        {{p.productID}}\n                    </ion-item>\n                    <ion-item-options side="right" class="item-inner">\n                        <button ion-button color="danger" (click)="onRemove(p)" class="btnEsp">\n                            <ion-icon name="trash"></ion-icon>\n                        </button>\n                    </ion-item-options>\n                </ion-item-sliding>\n            </button>\n\n            <div class="panel">\n                <form #f="ngForm" class="login-box" (ngSubmit)="onEditItem(p)">\n                    <br>\n\n                    <p class="article-content ">\n                        <span class="margeChar"> Note : </span>\n                        <input class="input" type="text" name="note" [(ngModel)]="p.note" placeholder={{p.note}} required="">\n                    </p>\n                    <p class="article-content ">\n                        <span class="titre"> Quantite : </span>\n                        <input class="input" type="text" name="quantity" [(ngModel)]="p.quantity" placeholder={{p.quantity}} required="">\n                    </p>\n                    <p class="article-content ">\n                        <span class="margeChar2"> Heure: </span>\n                        <input class="input" onfocus="(this.type=\'DateTime\')" type="text" name="time" [(ngModel)]="p.time" placeholder={{p.time}}\n                            required="">\n                    </p>\n                   \n\n\n                    <br>\n                    <button class="btnt" ion-button="" type="submit" block="" [disabled]="!f.valid">Sauvegarder</button>\n                    <br>\n                    \n                </form>\n            </div>\n      \n        <br>\n\n\n    </ion-list>\n\n\n  \n</ion-content>'/*ion-inline-end:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\pages\cafeteria\StudentCafeteria\product-details\product-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__servicesCafeteria_product_list_panier_list_service__["a" /* PanierListService */],
            __WEBPACK_IMPORTED_MODULE_4__servicesCafeteria_product_list_product_list_service__["a" /* ProductListService */],
            __WEBPACK_IMPORTED_MODULE_5__servicesCafeteria_product_list_order_list_service__["a" /* OrderListService */],
            __WEBPACK_IMPORTED_MODULE_3__servicesCafeteria_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */]])
    ], ProductDetailsPage);
    return ProductDetailsPage;
}());

//# sourceMappingURL=product-details.js.map

/***/ })

});
//# sourceMappingURL=39.js.map