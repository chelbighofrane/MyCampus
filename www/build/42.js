webpackJsonp([42],{

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function() { return OrdersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orders__ = __webpack_require__(902);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrdersPageModule = (function () {
    function OrdersPageModule() {
    }
    OrdersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__orders__["a" /* OrdersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__orders__["a" /* OrdersPage */]),
            ],
        })
    ], OrdersPageModule);
    return OrdersPageModule;
}());

//# sourceMappingURL=orders.module.js.map

/***/ }),

/***/ 902:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicesCafeteria_toast_service__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicesCafeteria_product_list_product_list_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servicesCafeteria_product_list_order_list_service__ = __webpack_require__(373);
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
 * Generated class for the OrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrdersPage = (function () {
    function OrdersPage(navCtrl, navParams, product, order, toast, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
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
        this.ordersProduct = [];
        this.products = [];
        this.colors = ['gray', 'brown', 'danger', 'blue'];
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
    OrdersPage.prototype.setupSideMenuContent = function () {
        this.events.publish('sideMenu:changeContent', this.sideMenuContent);
    };
    OrdersPage.prototype.getFormattedDate = function () {
        var ob = new Date();
        var year = ob.getFullYear().toString();
        var month = ob.getMonth().toString();
        var day = ob.getDay().toString();
        this.currentDate = year + '-' + month + '-' + day;
    };
    OrdersPage.prototype.ngOnInit = function () {
        var _this = this;
        this.length = 0;
        this.totalPrice = 0;
        var prices = 0;
        this.order
            .getOrderList() //db list
            .snapshotChanges() //key and value
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }).subscribe(function (res) {
            _this.orders = res;
            for (var _i = 0, _a = _this.orders; _i < _a.length; _i++) {
                var ord = _a[_i];
                console.log(ord);
                for (var _b = 0, _c = ord.panier; _b < _c.length; _b++) {
                    var o = _c[_b];
                    _this.ordersProduct.push(o);
                }
            }
            console.log('trah');
            console.log(_this.colors);
            console.log(_this.ordersProduct);
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
    OrdersPage.prototype.accordionClick = function (event, index, o) {
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
    OrdersPage.prototype.ionViewDidLoad = function () {
    };
    OrdersPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    ;
    OrdersPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    ;
    OrdersPage.prototype.onRemove = function (o) {
        var _this = this;
        this.order.remove(o).then(function () {
            _this.toast.show("Commande supprime avec succes!");
            _this.navCtrl.setRoot('PanierPage');
        });
    };
    OrdersPage.prototype.onEditItem = function (o) {
        this.order.editItem(o);
        this.toast.show("Commande modifie avec succes!");
        this.navCtrl.setRoot('PanierPage');
    };
    OrdersPage.prototype.productDetails = function (p, o) {
        this.navCtrl.setRoot('ProductDetailsPage', { panier: p, order: o });
    };
    OrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-orders',template:/*ion-inline-start:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\pages\cafeteria\StudentCafeteria\orders\orders.html"*/'<ion-header>\n  <ion-navbar hideBackButton color="primary">\n    <ion-title>Mes Commandes</ion-title>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="arriere">\n  <ion-list>\n    <div *ngFor="let o of orders; let i = index;">\n     \n        <ion-item-sliding #slidingItem class="k">\n          <ion-item class="k">\n            Commande {{i+1}}\n          </ion-item>\n          <ion-item-options side="right" class="item-inner">\n            <button ion-button color="danger" (click)="onRemove(o)" class="btnEsp">\n              <ion-icon name="trash"></ion-icon>\n            </button>\n          </ion-item-options>\n        </ion-item-sliding>\n      \n\n      <div class="panel">\n        <form #f="ngForm" class="login-box">\n          <br>\n\n          <p class="article-content ">\n            <span class="margeChar2">Etat :</span>\n            <span class="input">{{o.status}}</span>\n          </p>\n          <p class="article-content ">\n            <span class="margeChar2">Date :</span>\n            <span class="input">{{o.dateOrder}}</span>\n          </p>\n        \n          <p class="article-content ">\n            <span class="margeChar"> Produits : </span>\n           \n            <button ion-button *ngFor="let p of ordersProduct;let i=index;"  (click)="productDetails(p,o)" color={{colors[i]}}  >{{p.productID}}</button>\n          \n          </p>\n          <br>\n          <button class="btnt" ion-button="" type="submit" block="" [disabled]="!f.valid" (click)="onEditItem(o)">Sauvegarder</button>\n          <br>\n\n        </form>\n      </div>\n    </div>\n    <br>\n\n\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\pages\cafeteria\StudentCafeteria\orders\orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__servicesCafeteria_product_list_product_list_service__["a" /* ProductListService */],
            __WEBPACK_IMPORTED_MODULE_4__servicesCafeteria_product_list_order_list_service__["a" /* OrderListService */],
            __WEBPACK_IMPORTED_MODULE_2__servicesCafeteria_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */]])
    ], OrdersPage);
    return OrdersPage;
}());

//# sourceMappingURL=orders.js.map

/***/ })

});
//# sourceMappingURL=42.js.map