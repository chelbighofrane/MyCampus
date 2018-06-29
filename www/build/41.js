webpackJsonp([41],{

/***/ 640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanierPageModule", function() { return PanierPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__panier__ = __webpack_require__(903);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PanierPageModule = (function () {
    function PanierPageModule() {
    }
    PanierPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__panier__["a" /* PanierPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__panier__["a" /* PanierPage */]),
            ],
        })
    ], PanierPageModule);
    return PanierPageModule;
}());

//# sourceMappingURL=panier.module.js.map

/***/ }),

/***/ 903:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanierPage; });
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
 * Generated class for the PanierPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PanierPage = (function () {
    function PanierPage(navCtrl, navParams, panier, product, order, toast, events) {
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
        this.paniers = [];
        this.products = [];
        this.supplements = [];
        this.SuppPanier = [];
        this.SuppProduct = [];
        this.o = {
            userID: undefined,
            panier: undefined,
            dateOrder: undefined,
            status: undefined
        };
        this.shownGroup = null;
        this.setupSideMenuContent();
        this.getFormattedDate();
    }
    PanierPage.prototype.setupSideMenuContent = function () {
        this.events.publish('sideMenu:changeContent', this.sideMenuContent);
    };
    PanierPage.prototype.getFormattedDate = function () {
        var ob = new Date();
        var year = ob.getFullYear().toString();
        var month = ob.getMonth().toString();
        var day = ob.getDay().toString();
        this.currentDate = year + '-' + month + '-' + day;
    };
    PanierPage.prototype.ngOnInit = function () {
        var _this = this;
        this.length = 0;
        this.totalPrice = 0;
        var prices = 0;
        this.panier
            .getPanierList() //db list
            .snapshotChanges() //key and value
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }).subscribe(function (res) {
            _this.paniers = res;
            for (var _i = 0, _a = _this.paniers; _i < _a.length; _i++) {
                var pan = _a[_i];
                console.log(pan);
                for (var _b = 0, _c = pan.supplements; _b < _c.length; _b++) {
                    var price = _c[_b];
                    _this.totalPrice = _this.totalPrice * 1 + price.priceSupp * pan.quantity;
                }
                _this.totalPrice = _this.totalPrice * 1 + pan.price * pan.quantity;
            }
        }, function (error) {
            console.log('error');
        });
        this.product
            .getProductList() //db list
            .snapshotChanges() //key and value
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }).subscribe(function (res) {
            _this.products = res;
            console.log(_this.length);
            for (var i = 0; i < _this.products.length; i++) {
                if (_this.products[i].category !== "fastfood" || _this.products[i].type !== "supplements") {
                    _this.products.splice(i, 1);
                    i--;
                }
            }
        }, function (error) {
            console.log('error');
        });
    };
    PanierPage.prototype.accordionClick = function (event, index, p) {
        console.log(p.supplements.length);
        /*for(let pan of p.supplements){
            for (let i = 0; i < this.products.length; i++) {
                if (this.products[i].name==pan.nameSupp){
                    this.products.splice(i, 1);
                    i--;
                    console.log(this.products);
                }
                else {
                    this.names.push(pan);
                    console.log('names');
                    console.log(this.names);
                }
        }
    
    }*/
        var test;
        this.SuppPanier = [];
        this.SuppProduct = [];
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var pro = _a[_i];
            test = false;
            for (var _b = 0, _c = p.supplements; _b < _c.length; _b++) {
                var pan = _c[_b];
                if (pro.name == pan.nameSupp) {
                    test = true;
                    break;
                }
            }
            if (test) {
                this.SuppPanier.push(pro);
            }
            else {
                this.SuppProduct.push(pro);
            }
        }
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
    PanierPage.prototype.ionViewDidLoad = function () {
    };
    PanierPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    ;
    PanierPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    ;
    PanierPage.prototype.onRemove = function (p) {
        var _this = this;
        this.panier.remove(p).then(function () {
            _this.toast.show("Commande supprime avec succes!");
            _this.navCtrl.setRoot('PanierPage');
        });
    };
    PanierPage.prototype.onEditItem = function (p) {
        this.panier.editItem(p);
        this.toast.show("Commande modifie avec succes!");
        this.navCtrl.setRoot('PanierPage');
    };
    PanierPage.prototype.Order = function () {
        this.o.userID = "chelbi.ghofrane@gmail.com";
        this.o.status = "en attente";
        this.o.panier = this.paniers;
        this.o.dateOrder = this.currentDate;
        this.order.addItem(this.o);
        for (var _i = 0, _a = this.paniers; _i < _a.length; _i++) {
            var pan = _a[_i];
            this.panier.remove(pan);
        }
        this.toast.show('commande envoye avec succes');
        this.navCtrl.setRoot('OrdersPage');
    };
    PanierPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-panier',template:/*ion-inline-start:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\pages\cafeteria\StudentCafeteria\panier\panier.html"*/'<ion-header>\n    <ion-navbar hideBackButton color="primary">\n        <ion-title>Mon panier</ion-title>\n        <button ion-button icon-only menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="arriere">\n    <ion-list>\n        <div *ngFor="let p of paniers; let i = index;">\n            <button class="accordion" (click)="accordionClick($event,i,p)">\n                <ion-item-sliding #slidingItem class="k">\n                    <ion-item class="k">\n                        {{p.productID}}\n                    </ion-item>\n                    <ion-item-options side="right" class="item-inner">\n                        <button ion-button color="danger" (click)="onRemove(p)" class="btnEsp">\n                            <ion-icon name="trash"></ion-icon>\n                        </button>\n                    </ion-item-options>\n                </ion-item-sliding>\n            </button>\n\n            <div class="panel">\n                <form #f="ngForm" class="login-box" (ngSubmit)="onEditItem(p)">\n                    <br>\n\n                    <p class="article-content ">\n                        <span class="margeChar"> Note : </span>\n                        <input class="input" type="text" name="note" [(ngModel)]="p.note" placeholder={{p.quantity}} required="">\n                    </p>\n                    <p class="article-content ">\n                        <span class="titre"> Quantite : </span>\n                        <input class="input" type="text" name="quantity" [(ngModel)]="p.quantity" placeholder={{p.quantity}} required="">\n                    </p>\n                    <p class="article-content ">\n                        <span class="margeChar2"> Heure: </span>\n                        <input class="input" onfocus="(this.type=\'DateTime\')" type="text" name="time" [(ngModel)]="p.time" placeholder={{p.time}}\n                            required="">\n                    </p>\n                    <p class="article-content ">\n                            <span class="margeChar2"> Supplements: </span>\n                            <select  multiple name="supplements" [(ngModel)]="p.supplements" >\n                                <option *ngFor="let o of SuppPanier;" [value]="{priceSupp:o.price,nameSupp:o.name}"  selected="selected" >{{o.name}}</option>\n                                <option *ngFor="let o of SuppProduct;" [value]="{priceSupp:o.price,nameSupp:o.name}"  >{{o.name}}</option>\n                            \n                                   </select>\n                    </p>\n\n\n                    <br>\n                    <button class="btnt" ion-button="" type="submit" block="" [disabled]="!f.valid">Sauvegarder</button>\n                    <br>\n                    \n                </form>\n            </div>\n        </div>\n        <br>\n\n\n    </ion-list>\n\n\n    <ion-footer>\n        <ion-toolbar>\n            <ion-row>\n                <ion-title>Prix total: {{totalPrice}}</ion-title>\n                <button ion-button icon-only icon-end small class="btnt" (click)="Order()">\n                    <ion-icon name=\'md-checkmark\'></ion-icon>\n                </button>\n            </ion-row>\n        </ion-toolbar>\n    </ion-footer>\n</ion-content>'/*ion-inline-end:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\pages\cafeteria\StudentCafeteria\panier\panier.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__servicesCafeteria_product_list_panier_list_service__["a" /* PanierListService */],
            __WEBPACK_IMPORTED_MODULE_4__servicesCafeteria_product_list_product_list_service__["a" /* ProductListService */],
            __WEBPACK_IMPORTED_MODULE_5__servicesCafeteria_product_list_order_list_service__["a" /* OrderListService */],
            __WEBPACK_IMPORTED_MODULE_3__servicesCafeteria_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */]])
    ], PanierPage);
    return PanierPage;
}());

//# sourceMappingURL=panier.js.map

/***/ })

});
//# sourceMappingURL=41.js.map