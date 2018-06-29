webpackJsonp([47],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(44);
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



var UserService = (function () {
    function UserService(angularFireDatabase, storage) {
        this.angularFireDatabase = angularFireDatabase;
        this.storage = storage;
        this.usersListRef = null;
        this.usersListRef = this.angularFireDatabase.list('/user');
    }
    UserService.prototype.getUsers = function () {
        return this.usersListRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    UserService.prototype.getUserByUid = function (uid) {
        return this.angularFireDatabase.object('/user/' + uid).snapshotChanges().map(function (changes) {
            return __assign({ key: changes.payload.key }, changes.payload.val());
        });
    };
    UserService.prototype.createUserProfile = function (user) {
        return this.angularFireDatabase.object('/user/' + user.uid).set(user);
    };
    UserService.prototype.updateUserProfile = function (user) {
        return this.angularFireDatabase.object('/user/' + user.uid).update(user);
    };
    UserService.prototype.updateClubInLocalStorage = function (user) {
        var _this = this;
        this.updateUserProfile(user).then(function (response) {
            _this.storage.set('currentUser', user);
        }, function (error) {
            console.log(error);
        });
    };
    UserService.prototype.getUserFromLocalStorage = function () {
        return this.storage.get('currentUser');
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PhotoService = (function () {
    function PhotoService(camera, angularFireStorage) {
        this.camera = camera;
        this.angularFireStorage = angularFireStorage;
    }
    PhotoService.prototype.takePhoto = function (sourceType, width, height) {
        var optionsWithSize = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: sourceType,
            allowEdit: true,
            correctOrientation: true,
            targetWidth: width,
            targetHeight: height
        };
        var optionsWithoutSize = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: sourceType,
            allowEdit: true,
            correctOrientation: true,
        };
        if (width === null || height === null) {
            return this.camera.getPicture(optionsWithoutSize);
        }
        else {
            return this.camera.getPicture(optionsWithSize);
        }
    };
    PhotoService.prototype.uploadPhoto = function (photo, path) {
        return this.angularFireStorage.ref(path).putString(photo, 'data_url');
    };
    PhotoService.prototype.deletePhoto = function (path) {
        return this.angularFireStorage.ref(path).delete();
    };
    PhotoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__["a" /* AngularFireStorage */]])
    ], PhotoService);
    return PhotoService;
}());

//# sourceMappingURL=photo.service.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_address_model__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapModalComponent = (function () {
    function MapModalComponent(platform, params, viewCtrl, geolocation) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.geolocation = geolocation;
        this.selectedPlace = new __WEBPACK_IMPORTED_MODULE_3__models_address_model__["a" /* Address */]();
        this.results = [];
        console.log('initial location', params.get('location'));
    }
    MapModalComponent.prototype.ngOnInit = function () {
        this.initMap();
    };
    MapModalComponent.prototype.initMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.currentLocation = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            var options = {
                center: _this.currentLocation,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(_this.mapRef.nativeElement, options);
            _this.map.addListener('click', function (e) { return _this.selectPlace(e.latLng, e.placeId); });
            if (JSON.stringify(_this.params.get('location')) === '{}') {
                _this.placeMarker(_this.currentLocation);
                console.log('OK');
            }
            else {
                _this.selectedPlace = JSON.parse(JSON.stringify(_this.params.get('location')));
                _this.placeMarker(_this.selectedPlace.latLang);
                console.log('KO');
                console.log(_this.selectedPlace);
            }
        }).catch(function (error) {
            console.log('Error getting current location', error);
        });
    };
    MapModalComponent.prototype.placeMarker = function (latLng) {
        if (this.marker) {
            this.marker.setMap(null);
        }
        this.marker = new google.maps.Marker({
            position: latLng,
            visible: true,
            map: this.map
        });
        this.map.panTo(latLng);
    };
    MapModalComponent.prototype.selectPlace = function (latLng, placeId) {
        var _this = this;
        this.placeMarker(latLng);
        var service = new google.maps.places.PlacesService(this.map);
        if (placeId) {
            var request_1 = {
                placeId: placeId
            };
            service.getDetails(request_1, function (place, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    _this.selectedPlace.name = place.name;
                    _this.selectedPlace.adress = place.formatted_address;
                    _this.selectedPlace.placeId = place.place_id;
                    _this.selectedPlace.latLang = place.geometry.location;
                }
                else {
                    console.log('get place details request failed');
                }
            });
        }
        else {
            console.log('unknown location, getting the nearest known place details');
            var request = {
                location: latLng,
                radius: 200,
            };
            service.nearbySearch(request, function (results, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    _this.selectedPlace.name = results[0].name;
                    _this.selectedPlace.adress = results[0].formatted_address;
                    _this.selectedPlace.placeId = results[0].place_id;
                    _this.selectedPlace.latLang = results[0].geometry.location;
                    _this.placeMarker(_this.selectedPlace.latLang);
                }
                else {
                    console.log('get nearby place request failed');
                }
            });
        }
    };
    MapModalComponent.prototype.searchPlace = function (event) {
        var _this = this;
        if (event.target.value && event.target.value.trim().length > 0) {
            var request = {
                location: this.currentLocation,
                radius: '5000',
                query: event.target.value
            };
            var service = new google.maps.places.PlacesService(this.map);
            service.textSearch(request, function (results, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    _this.results = results.slice(0);
                }
                else {
                    console.log('search places request failed');
                }
            });
        }
        else {
            this.clearSearch();
        }
    };
    MapModalComponent.prototype.clearSearch = function () {
        this.results = [];
    };
    MapModalComponent.prototype.selectResult = function (index) {
        var place = this.results[index];
        this.clearSearch();
        this.placeMarker(place.geometry.location);
        this.selectedPlace.name = place.name;
        this.selectedPlace.adress = place.formatted_address;
        this.selectedPlace.placeId = place.place_id;
        this.selectedPlace.latLang = place.geometry.location;
    };
    MapModalComponent.prototype.dismissModal = function () {
        this.viewCtrl.dismiss(null);
    };
    MapModalComponent.prototype.choosePlace = function () {
        this.viewCtrl.dismiss(this.selectedPlace);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapModalComponent.prototype, "mapRef", void 0);
    MapModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\components\map-modal\map-modal.component.html"*/'<ion-header class="map-modal-header">\n    <div class="map-modal-header-content">\n        <ion-icon class="close-icon" ios="md-close" md="md-close" (click)="dismissModal()"></ion-icon>\n        <p class="title">Localisation de l\'Événement</p>\n    </div>\n    <ion-searchbar (ionInput)="searchPlace($event)" (ionClear)="clearSearch()" placeholder="Recherche" debounce="500"></ion-searchbar>\n    <div class="results-container">\n        <div class="results-list">\n            <ion-list>\n                <ion-item *ngFor="let result of results; let i = index;" (click)="selectResult(i)">{{result.name}}</ion-item>\n            </ion-list>\n        </div>\n    </div>\n</ion-header>\n\n<ion-content class="map-modal-content">\n    <div #map class="map-container"></div>\n</ion-content>\n\n<ion-footer class="map-modal-footer">\n    <button class="validation-btn" ion-button color="secondary" round large block (click)="choosePlace()">Choisir la Localisation</button>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\components\map-modal\map-modal.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], MapModalComponent);
    return MapModalComponent;
}());

//# sourceMappingURL=map-modal.component.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Event; });
var Event = (function () {
    function Event() {
    }
    return Event;
}());

//# sourceMappingURL=event.model.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(322);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationService = (function () {
    function AuthenticationService(angularFireAuth) {
        this.angularFireAuth = angularFireAuth;
    }
    AuthenticationService.prototype.signUpWithEmailAndPassword = function (credantials) {
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(credantials.email, credantials.password);
    };
    AuthenticationService.prototype.signInWithEmailAndPassword = function (credantials) {
        return this.angularFireAuth.auth.signInWithEmailAndPassword(credantials.email, credantials.password);
    };
    AuthenticationService.prototype.signOut = function () {
        return this.angularFireAuth.auth.signOut();
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthenticationService);
    return AuthenticationService;
}());

//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ 187:
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

/***/ 199:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 199;

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		624,
		46
	],
	"../pages/account/account.module": [
		625,
		45
	],
	"../pages/cafeteria/StudentCafeteria/modal-commentaire-cafeteria/modal-commentaire-cafeteria.module": [
		637,
		44
	],
	"../pages/cafeteria/StudentCafeteria/modal-feedback/modal-feedback.module": [
		638,
		43
	],
	"../pages/cafeteria/StudentCafeteria/orders/orders.module": [
		639,
		42
	],
	"../pages/cafeteria/StudentCafeteria/panier/panier.module": [
		640,
		41
	],
	"../pages/cafeteria/StudentCafeteria/pop-comment/pop-comment.module": [
		641,
		40
	],
	"../pages/cafeteria/StudentCafeteria/product-details/product-details.module": [
		642,
		39
	],
	"../pages/cafeteria/StudentCafeteria/products/products.module": [
		643,
		38
	],
	"../pages/cafeteria/StudentCafeteria/student-product/student-product.module": [
		644,
		37
	],
	"../pages/cafeteria/cafeteria-home/cafeteria-home.module": [
		626,
		2
	],
	"../pages/cafeteria/cold-drinks/cold-drinks.module": [
		627,
		15
	],
	"../pages/cafeteria/feedbacks-cafeteria/feedbacks-cafeteria.module": [
		628,
		36
	],
	"../pages/cafeteria/form-drinks/form-drinks.module": [
		629,
		14
	],
	"../pages/cafeteria/gestion-produit/gestion-produit.module": [
		630,
		35
	],
	"../pages/cafeteria/hot-drinks/hot-drinks.module": [
		631,
		13
	],
	"../pages/cafeteria/nos-pizzas/nos-pizzas.module": [
		632,
		12
	],
	"../pages/cafeteria/nos-sandwichs/nos-sandwichs.module": [
		633,
		11
	],
	"../pages/cafeteria/nos-supplements/nos-supplements.module": [
		634,
		10
	],
	"../pages/cafeteria/pizza-form/pizza-form.module": [
		635,
		9
	],
	"../pages/cafeteria/snacks/snacks.module": [
		636,
		8
	],
	"../pages/cafeteria/viennoiserie/viennoiserie.module": [
		645,
		7
	],
	"../pages/cafeteria/water/water.module": [
		646,
		6
	],
	"../pages/canteen/canteen-home/canteen-home.module": [
		647,
		1
	],
	"../pages/canteen/detail-menu/detail-menu.module": [
		648,
		5
	],
	"../pages/canteen/etudiant-menu-detail/etudiant-menu-detail.module": [
		649,
		4
	],
	"../pages/canteen/etudiant-menu/etudiant-menu.module": [
		650,
		34
	],
	"../pages/canteen/feedback-canteen/feedback-canteen.module": [
		651,
		18
	],
	"../pages/canteen/menu-canteen/menu-canteen.module": [
		652,
		33
	],
	"../pages/canteen/modal-page-commentaire-conteen/modal-page-commentaire-conteen.module": [
		653,
		32
	],
	"../pages/canteen/popup-comment/popup-comment.module": [
		654,
		31
	],
	"../pages/canteen/reservation/reservation.module": [
		655,
		30
	],
	"../pages/canteen/testmodal/testmodal.module": [
		656,
		29
	],
	"../pages/club/accepted-membership-applications/accepted-membership-applications.module": [
		657,
		28
	],
	"../pages/club/club-profile/club-profile.module": [
		658,
		16
	],
	"../pages/club/coming-events/coming-events.module": [
		659,
		3
	],
	"../pages/club/events/events.module": [
		660,
		27
	],
	"../pages/club/membership-applications/membership-applications.module": [
		661,
		26
	],
	"../pages/club/new-membership-applications/new-membership-applications.module": [
		662,
		25
	],
	"../pages/club/past-events/past-events.module": [
		663,
		0
	],
	"../pages/club/rejected-membership-applications/rejected-membership-applications.module": [
		664,
		24
	],
	"../pages/help/help.module": [
		665,
		23
	],
	"../pages/landing/landing.module": [
		666,
		22
	],
	"../pages/login/login.module": [
		668,
		19
	],
	"../pages/settings/settings.module": [
		667,
		21
	],
	"../pages/signup/signup.module": [
		669,
		17
	],
	"../pages/student/student-home/student-home.module": [
		670,
		20
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 243;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Address; });
var Address = (function () {
    function Address() {
    }
    return Address;
}());

//# sourceMappingURL=address.model.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
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


var ToastService = (function () {
    function ToastService(toastcntr) {
        this.toastcntr = toastcntr;
    }
    ToastService.prototype.show = function (message, duration) {
        if (duration === void 0) { duration = 3000; }
        return this.toastcntr.create({
            message: message,
            duration: duration,
        })
            .present();
    };
    ToastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */]])
    ], ToastService);
    return ToastService;
}());

//# sourceMappingURL=toast.service.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductListService = (function () {
    function ProductListService(db) {
        this.db = db;
        this.productListRef = this.db.list('product');
    }
    ProductListService.prototype.getProductList = function () {
        return this.productListRef;
    };
    ProductListService.prototype.addItem = function (p) {
        return this.productListRef.push(p);
    };
    ProductListService.prototype.editItem = function (p) {
        this.productListRef.update(p.key, p);
    };
    ProductListService.prototype.remove = function (p) {
        return this.productListRef.remove(p.key);
    };
    ProductListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ProductListService);
    return ProductListService;
}());

//# sourceMappingURL=product-list.service.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenuControllerService; });
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


var SideMenuControllerService = (function () {
    function SideMenuControllerService(events, menuCtrl) {
        this.events = events;
        this.menuCtrl = menuCtrl;
    }
    SideMenuControllerService.prototype.setupClubSideMenuContent = function () {
        var clubSideMenuContents = [
            { name: 'Votre vitrine', path: 'ClubProfilePage' },
            { name: 'Vos événements', path: 'EventsPage' },
            { name: 'Demandes d\'Adhésion', path: 'MembershipApplicationsPage' }
        ];
        this.enableSideMenu(true);
        this.events.publish('sideMenu:changeContent', clubSideMenuContents);
    };
    SideMenuControllerService.prototype.setupCafeteriaSideMenuContent = function () {
        var clubSideMenuContents = [
            { name: 'Gestion Produits', path: 'GestionProduitPage' },
            { name: 'Espace Etudiant', path: 'StudentProductPage' },
            { name: 'Feedback', path: 'FeedbacksCafeteriaPage' },
        ];
        this.enableSideMenu(true);
        this.events.publish('sideMenu:changeContent', clubSideMenuContents);
    };
    SideMenuControllerService.prototype.enableSideMenu = function (isEnabled) {
        this.menuCtrl.enable(isEnabled);
    };
    SideMenuControllerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* MenuController */]])
    ], SideMenuControllerService);
    return SideMenuControllerService;
}());

//# sourceMappingURL=side-menu-controller.service.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MealService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MealService = (function () {
    function MealService(db) {
        this.db = db;
        this.mealListRef = this.db.list('meal');
    }
    MealService.prototype.getAllmeal = function () {
        return this.mealListRef;
    };
    MealService.prototype.addmeal = function (meal) {
        return this.mealListRef.push(meal);
    };
    MealService.prototype.editmeal = function (meal) {
        return this.mealListRef.update(meal.key, meal);
    };
    MealService.prototype.removemeal = function (meal) {
        return this.mealListRef.remove(meal.key);
    };
    MealService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], MealService);
    return MealService;
}());

//# sourceMappingURL=meal.service.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanierListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PanierListService = (function () {
    function PanierListService(db) {
        this.db = db;
        this.panierListRef = this.db.list('panier');
    }
    PanierListService.prototype.getPanierList = function () {
        return this.panierListRef;
    };
    PanierListService.prototype.addItem = function (p) {
        return this.panierListRef.push(p);
    };
    PanierListService.prototype.editItem = function (p) {
        this.panierListRef.update(p.key, p);
    };
    PanierListService.prototype.remove = function (p) {
        return this.panierListRef.remove(p.key);
    };
    PanierListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], PanierListService);
    return PanierListService;
}());

//# sourceMappingURL=panier-list-service.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderListService = (function () {
    function OrderListService(db) {
        this.db = db;
        this.orderListRef = this.db.list('order');
    }
    OrderListService.prototype.getOrderList = function () {
        return this.orderListRef;
    };
    OrderListService.prototype.addItem = function (p) {
        return this.orderListRef.push(p);
    };
    OrderListService.prototype.editItem = function (p) {
        this.orderListRef.update(p.key, p);
    };
    OrderListService.prototype.remove = function (p) {
        return this.orderListRef.remove(p.key);
    };
    OrderListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], OrderListService);
    return OrderListService;
}());

//# sourceMappingURL=order-list-service.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReserverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReserverService = (function () {
    function ReserverService(db) {
        this.db = db;
        this.reserveListRef = this.db.list('reservation');
    }
    ReserverService.prototype.getAllreservation = function () {
        return this.reserveListRef;
    };
    ReserverService.prototype.addreservation = function (reserve) {
        return this.reserveListRef.push(reserve);
    };
    ReserverService.prototype.editreservation = function (reserve) {
        return this.reserveListRef.update(reserve.key, reserve);
    };
    ReserverService.prototype.removereservation = function (reserve) {
        return this.reserveListRef.remove(reserve.key);
    };
    ReserverService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ReserverService);
    return ReserverService;
}());

//# sourceMappingURL=reserver.service.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
// export const FIREBASE_CONFIG = {
//     apiKey: "AIzaSyDnXXQfGyG8j5tDNx8o--MmFjHBg2d2G88",
//     authDomain: "mycampus-a7db4.firebaseapp.com",
//     databaseURL: "https://mycampus-a7db4.firebaseio.com",
//     projectId: "mycampus-a7db4",
//     storageBucket: "mycampus-a7db4.appspot.com",
//     messagingSenderId: "152609683417"
// };
// export const FIREBASE_CONFIG = {
//     apiKey: "AIzaSyCPe0-6z4uXv44Fpw2lG4Vp2K-BXs9tnME",
//     authDomain: "mycampustmp.firebaseapp.com",
//     databaseURL: "https://mycampustmp.firebaseio.com",
//     projectId: "mycampustmp",
//     storageBucket: "mycampustmp.appspot.com",
//     messagingSenderId: "35110800283"
// };
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyDnXXQfGyG8j5tDNx8o--MmFjHBg2d2G88",
    authDomain: "mycampus-a7db4.firebaseapp.com",
    databaseURL: "https://mycampus-a7db4.firebaseio.com",
    projectId: "mycampus-a7db4",
    storageBucket: "mycampus-a7db4.appspot.com",
    messagingSenderId: "152609683417"
};
//# sourceMappingURL=firebase.credentials.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailsModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_club_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_photo_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__map_modal_map_modal_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_event_model__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_club_model__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_photo_model__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_user_model__ = __webpack_require__(187);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











var EventDetailsModalComponent = (function () {
    function EventDetailsModalComponent(platform, params, viewCtrl, modalCtrl, actionSheetCtrl, clubService, userService, alertCtrl, photoService, geolocation) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.clubService = clubService;
        this.userService = userService;
        this.alertCtrl = alertCtrl;
        this.photoService = photoService;
        this.geolocation = geolocation;
        this.isAdmin = false;
        this.isInterested = false;
        this.club = new __WEBPACK_IMPORTED_MODULE_8__models_club_model__["a" /* Club */]();
        this.event = new __WEBPACK_IMPORTED_MODULE_7__models_event_model__["a" /* Event */]();
        this.eventUpdate = new __WEBPACK_IMPORTED_MODULE_7__models_event_model__["a" /* Event */]();
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_10__models_user_model__["a" /* User */]();
        this.updateEventDetails = false;
        this.spin = false;
        this.showMap = false;
    }
    EventDetailsModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isAdmin = this.params.get('isAdmin');
        this.clubService.getClubById(this.params.get('clubKey')).subscribe(function (club) {
            _this.club = club;
            _this.club.events.forEach(function (event) {
                if (event.key === _this.params.get('eventKey')) {
                    _this.event = JSON.parse(JSON.stringify(event));
                    _this.mainPhoto = _this.event.mainPhoto;
                }
            });
            if (!_this.isAdmin) {
                _this.userService.getUserFromLocalStorage().then(function (user) {
                    _this.currentUser = user;
                    _this.event.interested = (_this.event.interested && _this.event.interested.length > 0) ? _this.event.interested : [];
                    for (var i = 0; i < _this.event.interested.length; i++) {
                        if (_this.event.interested[i] === _this.currentUser.uid) {
                            _this.isInterested = true;
                            break;
                        }
                    }
                }, function (error) {
                    console.log(error);
                });
            }
        }, function (error) {
            console.log(error);
        });
    };
    EventDetailsModalComponent.prototype.onUpdateEventDetails = function () {
        this.eventUpdate = JSON.parse(JSON.stringify(this.event));
        this.eventUpdate.tags = (this.eventUpdate.tags && this.eventUpdate.tags.length > 0) ? this.eventUpdate.tags : [];
        this.eventUpdate.photoGallery = (this.eventUpdate.photoGallery && this.eventUpdate.photoGallery.length > 0) ? this.eventUpdate.photoGallery : [];
        var date = new Date();
        var month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) + '' : (date.getMonth() + 1);
        var day = date.getDate() < 10 ? '0' + date.getDate() + '' : date.getDate();
        this.currentDate = [date.getFullYear(), month, day].join('-');
        this.maxDate = [date.getFullYear() + 1, 12, 31].join('-');
        this.updateEventDetails = true;
    };
    EventDetailsModalComponent.prototype.presentMainPhotoActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Ajouter une photo de couverture à votre événement',
            buttons: [
                {
                    text: 'Choisir à partir du Gallery',
                    icon: 'md-images',
                    role: 'destructive',
                    handler: function () {
                        _this.photoService.takePhoto(0, 600, 500).then(function (imageData) {
                            _this.mainPhoto = 'data:image/jpeg;base64,' + imageData;
                        }, function (error) {
                            console.log('something wrong', error);
                        });
                    }
                },
                {
                    text: 'Prendre une photo',
                    icon: 'md-camera',
                    role: 'destructive',
                    handler: function () {
                        _this.photoService.takePhoto(1, 600, 500).then(function (imageData) {
                            _this.mainPhoto = 'data:image/jpeg;base64,' + imageData;
                        }, function (error) {
                            console.log('something wrong', error);
                        });
                    }
                }
            ]
        });
        actionSheet.present();
    };
    EventDetailsModalComponent.prototype.addTag = function () {
        this.eventUpdate.tags.push(this.tag.trim());
        this.tag = null;
    };
    EventDetailsModalComponent.prototype.deleteTag = function (i) {
        this.eventUpdate.tags.splice(i, 1);
    };
    EventDetailsModalComponent.prototype.onShowMap = function () {
        var _this = this;
        if (!this.showMap) {
            this.showMap = true;
            this.geolocation.getCurrentPosition().then(function (resp) {
                var currentLocation = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
                var options = {
                    center: currentLocation,
                    zoom: 15,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                var map = new google.maps.Map(_this.mapRef.nativeElement, options);
                var directionsService = new google.maps.DirectionsService();
                var directionsRenderer = new google.maps.DirectionsRenderer();
                directionsRenderer.setMap(map);
                var directionsOptions = {
                    origin: currentLocation,
                    destination: _this.event.location.latLang,
                    travelMode: 'DRIVING'
                };
                directionsService.route(directionsOptions, function (result, status) {
                    if (status == 'OK') {
                        directionsRenderer.setDirections(result);
                    }
                });
            }).catch(function (error) {
                console.log('Error getting current location', error);
            });
        }
        else {
            this.showMap = false;
        }
    };
    EventDetailsModalComponent.prototype.presentMapModal = function () {
        var _this = this;
        var mapModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__map_modal_map_modal_component__["a" /* MapModalComponent */], { location: this.eventUpdate.location });
        mapModal.onDidDismiss(function (selectedPlace) {
            if (selectedPlace === null) {
                console.log('place stays the same');
            }
            else {
                console.log('place has been chosen');
                _this.eventUpdate.location = JSON.parse(JSON.stringify(selectedPlace));
            }
            console.log('returned location', _this.eventUpdate.location);
        });
        mapModal.present();
    };
    EventDetailsModalComponent.prototype.presentEventGalleryPhotoActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Ajouter une photo au galerie de l\'événement',
            buttons: [
                {
                    text: 'Choisir à partir du Gallery',
                    icon: 'md-images',
                    role: 'destructive',
                    handler: function () {
                        _this.photoService.takePhoto(0, null, null).then(function (response) {
                            _this.addPhotoToEventGallery("data:image/jpeg;base64," + response);
                        }, function (error) {
                            console.log(error);
                        });
                    }
                },
                {
                    text: 'Prendre une photo',
                    icon: 'md-camera',
                    role: 'destructive',
                    handler: function () {
                        _this.photoService.takePhoto(1, null, null).then(function (response) {
                            _this.addPhotoToEventGallery("data:image/jpeg;base64," + response);
                        }, function (error) {
                            console.log(error);
                        });
                    }
                }
            ]
        });
        actionSheet.present();
    };
    EventDetailsModalComponent.prototype.addPhotoToEventGallery = function (image) {
        var newPhoto = new __WEBPACK_IMPORTED_MODULE_9__models_photo_model__["a" /* Photo */]();
        newPhoto.storagePath = '';
        newPhoto.downloadUrl = image;
        this.eventUpdate.photoGallery.push(newPhoto);
        if (this.gallerySlides) {
            this.gallerySlides.update();
        }
    };
    EventDetailsModalComponent.prototype.deleteEventGalleryPhoto = function (index) {
        this.eventUpdate.photoGallery.splice(index, 1);
        if (this.gallerySlides) {
            this.gallerySlides.update();
        }
    };
    EventDetailsModalComponent.prototype.verifyDeletedEventGalleryPhoto = function () {
        var found = false;
        if (this.event.photoGallery && this.event.photoGallery.length > 0) {
            for (var i = 0; i < this.event.photoGallery.length; i++) {
                found = false;
                for (var j = 0; j < this.eventUpdate.photoGallery.length; j++) {
                    if (this.event.photoGallery[i].storagePath === this.eventUpdate.photoGallery[j].storagePath) {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    this.photoService.deletePhoto(this.event.photoGallery[i].storagePath);
                }
            }
        }
    };
    EventDetailsModalComponent.prototype.cancelEventDetailsUpdate = function () {
        this.mainPhoto = this.event.mainPhoto;
        this.eventUpdate = new __WEBPACK_IMPORTED_MODULE_7__models_event_model__["a" /* Event */]();
        this.updateEventDetails = false;
    };
    EventDetailsModalComponent.prototype.saveEventDetailsUpdate = function () {
        var _this = this;
        if (this.event.mainPhoto !== this.mainPhoto) {
            var eventMainPhotoStoragePath = "club/" + this.club.key + "/events/" + this.event.key + "/cover";
            this.photoService.uploadPhoto(this.mainPhoto, eventMainPhotoStoragePath).then(function (res) {
                _this.mainPhoto = res.downloadURL;
                _this.eventUpdate.mainPhoto = _this.mainPhoto;
                _this.updateClubEvents();
                _this.updateEventDetails = false;
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.updateClubEvents();
            this.updateEventDetails = false;
        }
    };
    EventDetailsModalComponent.prototype.asyncForEach = function (array, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var index;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        index = 0;
                        _a.label = 1;
                    case 1:
                        if (!(index < array.length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, callback(array[index], index, array)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        index++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    EventDetailsModalComponent.prototype.updateClubEvents = function () {
        var _this = this;
        var verifyAddedEventGalleryPhoto = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.asyncForEach(this.eventUpdate.photoGallery, function (photo, index) { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(photo.storagePath.length === 0)) return [3 /*break*/, 2];
                                        this.spin = true;
                                        photo.storagePath = "club/" + this.club.key + "/events/" + this.event.key + "/gallery/" + (new Date().getTime() + index);
                                        return [4 /*yield*/, this.photoService.uploadPhoto(photo.downloadUrl, photo.storagePath).then(function (res) {
                                                _this.eventUpdate.photoGallery[index].downloadUrl = res.downloadURL;
                                            }, function (err) {
                                                console.log(err);
                                                _this.eventUpdate.photoGallery.splice(index, 1);
                                            })];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        verifyAddedEventGalleryPhoto().then(function (res) {
            _this.verifyDeletedEventGalleryPhoto();
            _this.spin = false;
            _this.event = new __WEBPACK_IMPORTED_MODULE_7__models_event_model__["a" /* Event */]();
            _this.event = JSON.parse(JSON.stringify(_this.eventUpdate));
            for (var i = 0; i < _this.club.events.length; i++) {
                if (_this.club.events[i].key === _this.event.key) {
                    _this.club.events[i] = JSON.parse(JSON.stringify(_this.event));
                }
            }
            _this.clubService.updateClubInLocalStorage(_this.club);
        }, function (err) {
            console.log(err);
        });
    };
    EventDetailsModalComponent.prototype.deleteEvent = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Vous venez de supprimer un événement!',
            message: 'Êtes-vous sûr?',
            buttons: [
                {
                    text: 'Annuler',
                    handler: function () { }
                },
                {
                    text: 'Supprimer',
                    handler: function () {
                        if (_this.event.photoGallery && _this.event.photoGallery.length > 0) {
                            _this.event.photoGallery.forEach(function (photo) {
                                _this.photoService.deletePhoto(photo.storagePath);
                            });
                        }
                        _this.photoService.deletePhoto("club/" + _this.club.key + "/events/" + _this.event.key + "/cover");
                        for (var i = 0; i < _this.club.events.length; i++) {
                            if (_this.club.events[i].key === _this.event.key) {
                                _this.club.events.splice(i, 1);
                                break;
                            }
                        }
                        _this.clubService.updateClubInLocalStorage(_this.club);
                        _this.dismissModal();
                    }
                }
            ]
        });
        alert.present();
    };
    EventDetailsModalComponent.prototype.dismissModal = function () {
        this.viewCtrl.dismiss();
    };
    EventDetailsModalComponent.prototype.getContactIconUrl = function (contactName) {
        return "assets/imgs/" + contactName + "-logo-yellow.png";
    };
    EventDetailsModalComponent.prototype.addInterested = function () {
        this.event.interested.push(this.currentUser.uid);
        for (var i = 0; i < this.club.events.length; i++) {
            if (this.club.events[i].key === this.event.key) {
                this.club.events[i] = JSON.parse(JSON.stringify(this.event));
                break;
            }
        }
        this.clubService.updateClub(this.club);
        this.isInterested = true;
    };
    EventDetailsModalComponent.prototype.removeInterested = function () {
        for (var i = 0; i < this.event.interested.length; i++) {
            if (this.event.interested[i] === this.currentUser.uid) {
                this.event.interested.splice(i, 1);
                break;
            }
        }
        for (var i = 0; i < this.club.events.length; i++) {
            if (this.club.events[i].key === this.event.key) {
                this.club.events[i] = JSON.parse(JSON.stringify(this.event));
                break;
            }
        }
        this.clubService.updateClub(this.club);
        this.isInterested = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], EventDetailsModalComponent.prototype, "mapRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('gallerySlides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Slides */])
    ], EventDetailsModalComponent.prototype, "gallerySlides", void 0);
    EventDetailsModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\components\event-details-modal\event-details-modal.component.html"*/'<ion-content>\n\n    <section class="event-details-header" [ngStyle]="{\'background\':\'url(\'+mainPhoto+\')\'}">\n\n        <div class="header-wrapper">\n            <img src="assets/imgs/transparent.png" [imageViewer]="mainPhoto">\n\n            <ion-icon *ngIf="!updateEventDetails" ios="md-close" md="md-close" (click)="dismissModal()"></ion-icon>\n            <ion-icon *ngIf="updateEventDetails" ios="md-image" md="md-image" (click)="presentMainPhotoActionSheet()"></ion-icon>\n            \n            <div class="header-bottom">\n                <p *ngIf="!updateEventDetails" class="event-title">{{event.name}}</p>\n                <ion-item *ngIf="updateEventDetails" class="float-lbl-input">\n                    <ion-label floating>Titre de l\'Événement</ion-label>\n                    <ion-input type="text" [(ngModel)]="eventUpdate.name"></ion-input>\n                </ion-item>\n                <p *ngIf="!updateEventDetails" class="club-name">Organisé par <span>{{club.name}}</span></p>\n            </div>\n        </div>\n\n    </section>\n\n    <section *ngIf="!updateEventDetails" class="event-details-body">\n\n        <div *ngIf="event.tags && event.tags.length > 0" class="tags-container wrapper">\n            <div *ngFor="let tag of event.tags" class="tag">\n                <span class="tag-label">{{tag}}</span>\n            </div>\n        </div>\n\n        <div class="date-container wrapper">\n            <div class="calandar-logo-container">\n                <span><i class="far fa-calendar-alt"></i></span>\n            </div>\n            <div class="date-info-container">\n                <p>{{event.startDate}}  {{event.startTime}}</p>\n                <p>{{event.endDate}}  {{event.endTime}}</p>\n            </div>\n        </div>\n\n        <div class="location-container wrapper">\n            <div class="pin-logo-container">\n                <span><i class="fas fa-map-marker-alt"></i></span>\n            </div>\n            <div class="location-info-container">\n                <p>{{event.location?.name}}</p>\n            </div>\n            <ion-icon class="map-btn" ios="md-map" md="md-map" (click)="onShowMap()"></ion-icon>\n        </div>\n\n        <div *ngIf="showMap">\n            <div #map class="map-container wrapper"></div>\n        </div>\n\n        <div *ngIf="event.photoGallery && event.photoGallery.length > 0 && !spin" class="gallery-container">\n            <div class="header">\n                <p>Galerie de l\'événement</p>\n            </div>\n\n            <ion-slides #gallerySlides class="gallery-slides-container" loop="true" slidesPerView="2">\n                <ion-slide *ngFor="let photo of event.photoGallery; let i = index;">\n                    <img [src]="photo.downloadUrl" class="thumb-img" imageViewer>\n                </ion-slide>\n            </ion-slides>\n        </div>\n\n        <div *ngIf="(!event.photoGallery || event.photoGallery.length <= 0) && !spin" class="gallery-placeholder wrapper">\n            <ion-icon ios="md-images" md="md-images"></ion-icon>\n            <p>Pas d\'images disponibles pour cet événement</p>\n        </div>\n\n        <div *ngIf="spin" class="spinner-container">\n            <div class="lds-rolling">\n                <div>\n\n                </div>\n            </div>\n        </div>\n\n        <div *ngIf="event.description && event.description.length > 0" class="description-container wrapper">\n            <div class="header">\n                <p>A propos cet événement</p>\n            </div>\n            <p class="description">{{event.description}}</p>\n        </div>\n\n        <div *ngIf="!event.description || event.description.length <= 0" class="description-placeholder wrapper">\n            <ion-icon ios="md-information-circle" md="md-information-circle"></ion-icon>\n            <p>Pas de d\'autres informations disponibles pour cet événement</p>\n        </div>\n\n        <div *ngIf="club.contacts && club.contacts.length > 0" class="contact-container" padding [style.padding-bottom]="(!isAdmin) ? \'20px\' : \'16px\'">\n            <div class="header">\n                <p>Pour plus d\'informations</p>\n            </div>\n\n            <div class="contact" *ngFor="let contact of club.contacts">\n                <img [src]="getContactIconUrl(contact.name)">\n                <p>{{contact.value}}</p>\n            </div>\n        </div>\n\n    </section>\n\n    <section *ngIf="updateEventDetails" class="event-details-body">\n\n        <div class="wrapper">\n            <ion-item class="float-lbl-input" *ngIf="eventUpdate.tags && eventUpdate.tags.length < 5">\n                <ion-label floating>Quelques Mots Clés</ion-label>\n                <ion-input type="text" [(ngModel)]="tag"></ion-input>\n                <button clear ion-button item-end color="secondary" icon-only class="input-btn" *ngIf="tag && tag.trim().length > 0" (click)="addTag()">\n                    <ion-icon ios="md-add" md="md-add"></ion-icon>\n                </button>\n            </ion-item>\n        </div>\n\n        <div class="tags-container wrapper" *ngIf="eventUpdate.tags && eventUpdate.tags.length > 0">\n            <div class="tag" *ngFor="let tag of eventUpdate.tags; let i = index;">\n                <span class="tag-label">{{tag}}</span>\n                <span class="delete" (click)="deleteTag(i)">&times;</span>\n            </div>\n        </div>\n\n        <div class="wrapper">\n            <p class="datetime-separator">L\'Événement commence à</p>\n        </div>\n\n        <div class="date-time wrapper">\n            <div class="date">\n                <ion-item class="float-lbl-input">\n                    <ion-label floating>Date</ion-label>\n                    <ion-datetime displayFormat="DDDD DD MMM, YYYY" pickerFormat="MMMM/DD/YYYY" cancelText="Annuler" doneText="Ok" min="{{currentDate}}" max="{{maxDate}}" [(ngModel)]="eventUpdate.startDate"></ion-datetime>\n                </ion-item>\n            </div>\n            <div class="time">\n                <ion-item class="float-lbl-input">\n                    <ion-label floating>Heure</ion-label>\n                    <ion-datetime displayFormat="HH:mm" cancelText="Annuler" doneText="Ok" [(ngModel)]="eventUpdate.startTime"></ion-datetime>\n                </ion-item>\n            </div>\n        </div>\n        \n        <div class="wrapper">\n            <p class="datetime-separator">L\'Événement se termine à</p>\n        </div>\n\n        <div class="date-time wrapper">\n            <div class="date">\n                <ion-item class="float-lbl-input">\n                    <ion-label floating>Date</ion-label>\n                    <ion-datetime displayFormat="DDDD DD MMM, YYYY" pickerFormat="MMMM/DD/YYYY" cancelText="Annuler" doneText="Ok" min="{{currentDate}}" max="{{maxDate}}" [(ngModel)]="eventUpdate.endDate"></ion-datetime>\n                </ion-item>\n            </div>\n            <div class="time">\n                <ion-item class="float-lbl-input">\n                    <ion-label floating>Heure</ion-label>\n                    <ion-datetime displayFormat="HH:mm" cancelText="Annuler" doneText="Ok" [(ngModel)]="eventUpdate.endTime"></ion-datetime>\n                </ion-item>\n            </div>\n        </div>\n\n        <div class="wrapper">\n            <div class="event-location-container">\n                <ion-icon class="map-btn" ios="md-map" md="md-map" (click)="presentMapModal()"></ion-icon>\n                <p *ngIf="!eventUpdate.location || !eventUpdate.location.name || eventUpdate.location.name.length <= 0">Localisation de l\'Événement</p>\n                <p *ngIf="eventUpdate.location && eventUpdate.location.name && eventUpdate.location.name.length > 0">{{eventUpdate.location.name}}</p>\n            </div>\n        </div>\n\n        <div class="gallery-header-container wrapper">\n            <p>Galerie de l\'événement</p>\n            <ion-icon class="add-photo-btn" ios="md-add-circle" md="md-add-circle" (click)="presentEventGalleryPhotoActionSheet()"></ion-icon>\n        </div>\n        \n        <div *ngIf="eventUpdate.photoGallery && eventUpdate.photoGallery.length > 0" class="gallery-container" style="margin: 0px 0px 10px 0px">\n            <ion-slides #gallerySlides class="gallery-slides-container" loop="true" slidesPerView="2">\n                <ion-slide *ngFor="let photo of eventUpdate.photoGallery; let i = index;">\n                        <ion-icon class="delete-photo-btn" ios="md-trash" md="md-trash" (click)="deleteEventGalleryPhoto(i)"></ion-icon>\n                    <img [src]="photo.downloadUrl" class="thumb-img" imageViewer>\n                </ion-slide>\n            </ion-slides>\n        </div>\n        \n        <div class="wrapper">\n            <ion-item class="float-lbl-input">\n                <ion-label floating>Plus d\'Informations</ion-label>\n                <ion-textarea autosize autocomplete="on" autocorrect="on" rows="5" [(ngModel)]="eventUpdate.description"></ion-textarea>\n            </ion-item>\n        </div>\n\n        <div class="bottom-placeholder"></div>\n\n    </section>\n\n    <ion-fab *ngIf="isAdmin && !updateEventDetails" right bottom>\n        <button ion-fab color="secondary" (click)="onUpdateEventDetails()"><ion-icon name="create"></ion-icon></button>\n    </ion-fab>\n\n</ion-content>\n\n<ion-footer *ngIf="updateEventDetails" class="event-details-footer">\n    <button ion-button color="secondary" round outline (click)="cancelEventDetailsUpdate()">Annuler</button>\n    <button ion-button color="secondary" round (click)="saveEventDetailsUpdate()">Enregistrer</button>\n    <button ion-button color="secondary" round (click)="deleteEvent()">Supprimer</button>\n</ion-footer>\n\n<ion-footer *ngIf="!isAdmin" class="event-details-footer">\n    <button *ngIf="!isInterested" ion-button color="secondary" round full (click)="addInterested()">Je suis intéressé</button>\n    <button *ngIf="isInterested" ion-button color="secondary" round full (click)="removeInterested()">Je ne suis pas intéressé</button>\n</ion-footer>'/*ion-inline-end:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\components\event-details-modal\event-details-modal.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_3__services_club_service__["a" /* ClubService */],
            __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__services_photo_service__["a" /* PhotoService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], EventDetailsModalComponent);
    return EventDetailsModalComponent;
}());

//# sourceMappingURL=event-details-modal.component.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_club_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_feedback_model__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_user_model__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_event_model__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_club_model__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FeedbackModalComponent = (function () {
    function FeedbackModalComponent(platform, params, viewCtrl, clubService, userService) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.clubService = clubService;
        this.userService = userService;
        this.isAdmin = false;
        this.club = new __WEBPACK_IMPORTED_MODULE_7__models_club_model__["a" /* Club */]();
        this.event = new __WEBPACK_IMPORTED_MODULE_6__models_event_model__["a" /* Event */]();
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_5__models_user_model__["a" /* User */]();
        this.feedBack = new __WEBPACK_IMPORTED_MODULE_4__models_feedback_model__["a" /* Feedback */]();
        this.averageRate = 0;
        this.averageRatePercentage = '';
    }
    FeedbackModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isAdmin = this.params.get('isAdmin');
        this.clubService.getClubById(this.params.get('clubKey')).subscribe(function (club) {
            _this.club = club;
            _this.club.events.forEach(function (event) {
                if (event.key === _this.params.get('eventKey')) {
                    _this.event = JSON.parse(JSON.stringify(event));
                }
            });
            _this.calculateAverageRate();
            if (!_this.isAdmin) {
                _this.userService.getUserFromLocalStorage().then(function (user) {
                    _this.currentUser = user;
                }, function (error) {
                    console.log(error);
                });
            }
        }, function (error) {
            console.log(error);
        });
    };
    FeedbackModalComponent.prototype.calculateAverageRate = function () {
        this.averageRate = 0;
        this.event.feedbacks = (this.event.feedbacks && this.event.feedbacks.length > 0) ? this.event.feedbacks : [];
        for (var i = 0; i < this.event.feedbacks.length; i++) {
            this.averageRate = this.averageRate + this.event.feedbacks[i].rate;
        }
        this.averageRate = this.averageRate / this.event.feedbacks.length;
        this.averageRatePercentage = this.averageRate * 20 + "%";
    };
    FeedbackModalComponent.prototype.getRatePercentage = function (rate) {
        return rate * 20 + "%";
    };
    FeedbackModalComponent.prototype.onAddFeedback = function () {
    };
    FeedbackModalComponent.prototype.addFeedback = function () {
    };
    FeedbackModalComponent.prototype.deleteFeedback = function () {
    };
    FeedbackModalComponent.prototype.dismissModal = function () {
        this.viewCtrl.dismiss();
    };
    FeedbackModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\components\feedback-modal\feedback-modal.component.html"*/'<ion-content>\n    \n    <section id="header-section" [ngStyle]="{\'background\':\'url(\'+event.mainPhoto+\')\'}">\n\n        <div class="header-wrapper">\n            <ion-icon ios="md-close" md="md-close" (click)="dismissModal()"></ion-icon>\n            <div *ngIf="event.feedbacks && event.feedbacks.length > 0" class="average-rate-container">\n                <div class="average-rate">\n                    <p>{{averageRate}}</p>\n                </div>\n                <div class="average-rate-details">\n                    <div class="container">\n                        <div class="star-rating" style="margin-bottom: 5px;">\n                            <div class="back-stars">\n                                <i class="fa fa-star" aria-hidden="true"></i>\n                                <i class="fa fa-star" aria-hidden="true"></i>\n                                <i class="fa fa-star" aria-hidden="true"></i>\n                                <i class="fa fa-star" aria-hidden="true"></i>\n                                <i class="fa fa-star" aria-hidden="true"></i>\n\n                                <div class="front-stars" [ngStyle]="{\'width\': averageRatePercentage}">\n                                    <i class="fa fa-star" aria-hidden="true"></i>\n                                    <i class="fa fa-star" aria-hidden="true"></i>\n                                    <i class="fa fa-star" aria-hidden="true"></i>\n                                    <i class="fa fa-star" aria-hidden="true"></i>\n                                    <i class="fa fa-star" aria-hidden="true"></i>\n                                </div>\n                            </div>\n                        </div>\n                        <p>{{event.feedbacks.length}}<i class="fas fa-users"></i></p>\n                    </div>\n                </div>\n            </div>\n            <p class="event-title">{{event.name}}</p>\n        </div>\n\n    </section>\n\n    <section *ngIf="event.feedbacks && event.feedbacks.length > 0" id="feedback-section" padding>\n\n        <div class="feedback-card" *ngFor="let feedback of event.feedbacks; let i = index;">\n            <div class="feedback-header">\n                <div class="avatar-container">\n                    <div class="avatar-green-bg">\n                        <img [src]="assets/imgs/default-avatar.png">\n                    </div>\n                </div>\n                <div class="user-details-container">\n                    <p class="user-full-name">John Doe</p>\n                    <p class="date">{{feedback.date}}</p>\n                    <div class="star-rating" style="font-size:10px;">\n                        <div class="back-stars">\n                            <i class="fa fa-star" aria-hidden="true"></i>\n                            <i class="fa fa-star" aria-hidden="true"></i>\n                            <i class="fa fa-star" aria-hidden="true"></i>\n                            <i class="fa fa-star" aria-hidden="true"></i>\n                            <i class="fa fa-star" aria-hidden="true"></i>\n                                \n                            <div class="front-stars" [ngStyle]="{\'width\': getRatePercentage(feedback.rate)}">\n                                <i class="fa fa-star" aria-hidden="true"></i>\n                                <i class="fa fa-star" aria-hidden="true"></i>\n                                <i class="fa fa-star" aria-hidden="true"></i>\n                                <i class="fa fa-star" aria-hidden="true"></i>\n                                <i class="fa fa-star" aria-hidden="true"></i>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="feedback-body">\n                <p>{{feedback.content}}</p>\n            </div>\n        </div>\n\n    </section>\n\n    <section *ngIf="!event.feedbacks || event.feedbacks.length <= 0" id="feedback-placeholder-section" padding>\n\n        <div class="placeholder">\n            <ion-icon ios="md-chatbubbles" md="md-chatbubbles"></ion-icon>\n            <p>Pas de feedbacks encore</p>\n        </div>\n\n    </section>\n\n</ion-content>'/*ion-inline-end:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\components\feedback-modal\feedback-modal.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__services_club_service__["a" /* ClubService */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], FeedbackModalComponent);
    return FeedbackModalComponent;
}());

//# sourceMappingURL=feedback-modal.component.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Photo; });
var Photo = (function () {
    function Photo() {
    }
    return Photo;
}());

//# sourceMappingURL=photo.model.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateEventModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_photo_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_club_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_modal_map_modal_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_club_model__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_address_model__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_event_model__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CreateEventModalComponent = (function () {
    function CreateEventModalComponent(platform, params, viewCtrl, modalCtrl, actionSheetCtrl, photoService, clubService) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.photoService = photoService;
        this.clubService = clubService;
        this.showModalHeader = true;
        this.activeSlideIndex = 0;
        this.event = new __WEBPACK_IMPORTED_MODULE_7__models_event_model__["a" /* Event */]();
        this.club = new __WEBPACK_IMPORTED_MODULE_5__models_club_model__["a" /* Club */]();
    }
    CreateEventModalComponent.prototype.ngOnInit = function () {
        this.event = new __WEBPACK_IMPORTED_MODULE_7__models_event_model__["a" /* Event */]();
        this.event.tags = [];
        this.event.location = new __WEBPACK_IMPORTED_MODULE_6__models_address_model__["a" /* Address */]();
        var date = new Date();
        var month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) + '' : (date.getMonth() + 1);
        var day = date.getDate() < 10 ? '0' + date.getDate() + '' : date.getDate();
        this.currentDate = [date.getFullYear(), month, day].join('-');
        this.maxDate = [date.getFullYear() + 1, 12, 31].join('-');
    };
    CreateEventModalComponent.prototype.dismissModal = function () {
        this.viewCtrl.dismiss();
    };
    CreateEventModalComponent.prototype.onShowModalHeader = function () {
        this.showModalHeader = true;
    };
    CreateEventModalComponent.prototype.onHideModalHeader = function () {
        this.showModalHeader = false;
    };
    CreateEventModalComponent.prototype.slideChanged = function () {
        this.activeSlideIndex = this.slides.getActiveIndex();
    };
    CreateEventModalComponent.prototype.addTag = function () {
        this.event.tags.push(this.tag.trim());
        this.tag = null;
    };
    CreateEventModalComponent.prototype.deleteTag = function (i) {
        this.event.tags.splice(i, 1);
    };
    CreateEventModalComponent.prototype.presentMapModal = function () {
        var _this = this;
        var mapModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__map_modal_map_modal_component__["a" /* MapModalComponent */], { location: this.event.location });
        mapModal.onDidDismiss(function (selectedPlace) {
            if (selectedPlace === null) {
                console.log('place stays the same');
            }
            else {
                console.log('place has been chosen');
                _this.event.location = JSON.parse(JSON.stringify(selectedPlace));
            }
            console.log('returned location', _this.event.location);
        });
        mapModal.present();
    };
    CreateEventModalComponent.prototype.presentPhotoActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Ajouter une photo de couverture à votre événement',
            buttons: [
                {
                    text: 'Choisir à partir du Gallery',
                    icon: 'md-images',
                    role: 'destructive',
                    handler: function () {
                        _this.photoService.takePhoto(0, 600, 500).then(function (imageData) {
                            _this.event.mainPhoto = 'data:image/jpeg;base64,' + imageData;
                        }, function (error) {
                            console.log('something wrong', error);
                        });
                    }
                },
                {
                    text: 'Prendre une photo',
                    icon: 'md-camera',
                    role: 'destructive',
                    handler: function () {
                        _this.photoService.takePhoto(1, 600, 500).then(function (imageData) {
                            _this.event.mainPhoto = 'data:image/jpeg;base64,' + imageData;
                        }, function (error) {
                            console.log('something wrong', error);
                        });
                    }
                }
            ]
        });
        actionSheet.present();
    };
    CreateEventModalComponent.prototype.createEvent = function () {
        var _this = this;
        var location = new __WEBPACK_IMPORTED_MODULE_6__models_address_model__["a" /* Address */]();
        location.name = 'Campus Universitaire de La Manouba';
        location.adress = 'Campus Universitaire de La, Manouba 2010, Tunisie';
        location.placeId = 'ChIJHVh6LZct_RIRIjXaJi2nJxw';
        location.latLang = {
            lat: 36.8160304,
            lng: 10.061551099999974
        };
        this.event.location = location;
        if (this.event.name && this.event.name.trim().length > 0 &&
            this.event.startDate && this.event.startDate.length > 0 &&
            this.event.startTime && this.event.startTime.length > 0 &&
            this.event.endDate && this.event.endDate.length > 0 &&
            this.event.endTime && this.event.endTime.length > 0 &&
            this.event.mainPhoto && this.event.mainPhoto.length > 0 &&
            JSON.stringify(this.event.location) !== '{}') {
            this.clubService.getClubFromLocalStorage().then(function (club) {
                _this.club = club;
                _this.event.key = new Date().getTime();
                _this.event.organizator = _this.club.key;
                var eventMainPhotoStoragePath = "club/" + _this.club.key + "/events/" + _this.event.key + "/cover";
                _this.photoService.uploadPhoto(_this.event.mainPhoto, eventMainPhotoStoragePath).then(function (res) {
                    _this.event.mainPhoto = res.downloadURL;
                    _this.club.events = (_this.club.events && _this.club.events.length > 0) ? _this.club.events : [];
                    _this.club.events.push(_this.event);
                    _this.clubService.updateClubInLocalStorage(_this.club);
                    _this.dismissModal();
                }, function (err) {
                    console.log(err);
                });
            }, function (error) {
                console.log(error);
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Slides */])
    ], CreateEventModalComponent.prototype, "slides", void 0);
    CreateEventModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\components\create-event-modal\create-event-modal.component.html"*/'<ion-content class="create-event-modal">\n    \n    <div class="create-event-modal-main-container">\n\n        <ion-icon *ngIf="showModalHeader" class="close-icon" ios="md-close" md="md-close" (click)="dismissModal()"></ion-icon>\n        <p *ngIf="showModalHeader" class="create-event-modal-header">Créez votre<br>prochain événement!</p>\n\n        <div class="slides-container" [style.height]="(showModalHeader) ? \'80%\' : \'fit-content\'">\n            <ion-slides spaceBetween="50" (ionSlideDidChange)="slideChanged()">\n                <ion-slide class="slide">\n                    <ion-item class="float-lbl-input">\n                        <ion-label floating>Titre de l\'Événement</ion-label>\n                        <ion-input type="text" [(ngModel)]="event.name" (ionFocus)="onHideModalHeader()" (ionBlur)="onShowModalHeader()"></ion-input>\n                    </ion-item>\n\n                    <ion-item class="float-lbl-input" *ngIf="event.tags && event.tags.length < 5">\n                        <ion-label floating>Quelques Mots Clés</ion-label>\n                        <ion-input type="text" [(ngModel)]="tag" (ionFocus)="onHideModalHeader()" (ionBlur)="onShowModalHeader()"></ion-input>\n                        <button clear ion-button item-end color="secondary" icon-only class="input-btn" *ngIf="tag && tag.trim().length > 0" (click)="addTag()">\n                            <ion-icon ios="md-add" md="md-add"></ion-icon>\n                        </button>\n                    </ion-item>\n\n                    <div class="tags-container" *ngIf="event.tags && event.tags.length > 0">\n                        <div class="tag" *ngFor="let tag of event.tags; let i = index;">\n                            <span class="tag-label">{{tag}}</span>\n                            <span class="delete" (click)="deleteTag(i)">&times;</span>\n                        </div>\n                    </div>\n\n                    <ion-item class="float-lbl-input">\n                        <ion-label floating>Plus d\'Informations</ion-label>\n                        <ion-textarea autosize autocomplete="on" autocorrect="on" rows="5" [(ngModel)]="event.description" (ionFocus)="onHideModalHeader()" (ionBlur)="onShowModalHeader()"></ion-textarea>\n                    </ion-item>\n                </ion-slide>\n\n                <ion-slide class="slide">\n                    <p class="datetime-separator">L\'Événement commence à</p>\n\n                    <div class="date-time">\n                        <div class="date">\n                            <ion-item class="float-lbl-input">\n                                <ion-label floating>Date</ion-label>\n                                <ion-datetime displayFormat="DDDD DD MMM, YYYY" pickerFormat="MMMM/DD/YYYY" cancelText="Annuler" doneText="Ok" min="{{currentDate}}" max="{{maxDate}}" [(ngModel)]="event.startDate"></ion-datetime>\n                            </ion-item>\n                        </div>\n                        <div class="time">\n                            <ion-item class="float-lbl-input">\n                                <ion-label floating>Heure</ion-label>\n                                <ion-datetime displayFormat="HH:mm" cancelText="Annuler" doneText="Ok" [(ngModel)]="event.startTime"></ion-datetime>\n                            </ion-item>\n                        </div>\n                    </div>\n                    \n                    <p class="datetime-separator" style="margin-top:40px;">L\'Événement se termine à</p>\n\n                    <div class="date-time">\n                        <div class="date">\n                            <ion-item class="float-lbl-input">\n                                <ion-label floating>Date</ion-label>\n                                <ion-datetime displayFormat="DDDD DD MMM, YYYY" pickerFormat="MMMM/DD/YYYY" cancelText="Annuler" doneText="Ok" min="{{currentDate}}" max="{{maxDate}}" [(ngModel)]="event.endDate"></ion-datetime>\n                            </ion-item>\n                        </div>\n                        <div class="time">\n                            <ion-item class="float-lbl-input">\n                                <ion-label floating>Heure</ion-label>\n                                <ion-datetime displayFormat="HH:mm" cancelText="Annuler" doneText="Ok" [(ngModel)]="event.endTime"></ion-datetime>\n                            </ion-item>\n                        </div>\n                    </div>\n\n                    <div class="event-location-container">\n                        <ion-icon class="map-btn" ios="md-map" md="md-map" (click)="presentMapModal()"></ion-icon>\n                        <p *ngIf="!event.location || !event.location.name || event.location.name.length <= 0">Localisation de l\'Événement</p>\n                        <p *ngIf="event.location && event.location.name && event.location.name.length > 0">{{event.location.name}}</p>\n                    </div>\n\n                </ion-slide>\n\n                <ion-slide class="slide">\n                    <div class="cover-photo-container" (click)="presentPhotoActionSheet()" [style.background]="(event.mainPhoto && event.mainPhoto.length > 0) ? \'url(\'+event.mainPhoto+\')\' : \'transparent\'">\n                        <div class="placeholder" *ngIf="!event.mainPhoto || event.mainPhoto.length === 0">\n                            <i class="fas fa-camera"></i>\n                            <p>Ajouter une photo de couverture pour votre événement</p>\n                        </div>\n                    </div>\n                </ion-slide>\n            </ion-slides>\n        </div>\n\n    </div>\n\n</ion-content>\n\n<ion-footer *ngIf="showModalHeader" class="create-event-modal-footer">\n    <div class="dots-container" *ngIf="activeSlideIndex < 2">\n        <span class="dot" [ngClass]="{\'full\': activeSlideIndex === 0}"></span>\n        <span class="dot" [ngClass]="{\'full\': activeSlideIndex === 1}"></span>\n        <span class="dot"></span>\n    </div>\n\n    <button class="validation-btn" *ngIf="activeSlideIndex >= 2" ion-button color="secondary" round large block (click)="createEvent()">Créez votre Événement</button>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\components\create-event-modal\create-event-modal.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2__services_photo_service__["a" /* PhotoService */],
            __WEBPACK_IMPORTED_MODULE_3__services_club_service__["a" /* ClubService */]])
    ], CreateEventModalComponent);
    return CreateEventModalComponent;
}());

//# sourceMappingURL=create-event-modal.component.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditRecruitmentQuestionsModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_club_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_club_model__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_recruitment_question_model__ = __webpack_require__(601);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditRecruitmentQuestionsModal = (function () {
    function EditRecruitmentQuestionsModal(platform, params, viewCtrl, modalCtrl, clubService) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.clubService = clubService;
        this.club = new __WEBPACK_IMPORTED_MODULE_3__models_club_model__["a" /* Club */]();
        this.addQuestion = false;
        this.recruitmentQuestion = new __WEBPACK_IMPORTED_MODULE_4__models_recruitment_question_model__["a" /* RecruitmentQuestion */]();
        this.possibleAnswer = '';
    }
    EditRecruitmentQuestionsModal.prototype.ngOnInit = function () {
        var _this = this;
        this.clubService.getClubFromLocalStorage().then(function (club) {
            _this.club = club;
        }, function (error) {
            console.log(error);
        });
    };
    EditRecruitmentQuestionsModal.prototype.onAddQuestion = function () {
        this.recruitmentQuestion = new __WEBPACK_IMPORTED_MODULE_4__models_recruitment_question_model__["a" /* RecruitmentQuestion */]();
        this.recruitmentQuestion.possibleAnswers = [];
        this.possibleAnswer = '';
        this.addQuestion = true;
    };
    EditRecruitmentQuestionsModal.prototype.addPossibleAnswer = function () {
        this.recruitmentQuestion.possibleAnswers.push(this.possibleAnswer);
        this.possibleAnswer = '';
    };
    EditRecruitmentQuestionsModal.prototype.deletePossibleAnswer = function (index) {
        this.recruitmentQuestion.possibleAnswers.splice(index, 1);
    };
    EditRecruitmentQuestionsModal.prototype.dismissModal = function () {
        this.viewCtrl.dismiss();
    };
    EditRecruitmentQuestionsModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\components\edit-recruitment-quetions-modal\edit-recruitment-quetions-modal.component.html"*/'<ion-content class="edit-recruitment-quetions-modal">\n    \n    <div class="edit-recruitment-quetions-modal-header-container">\n        <ion-icon class="close-icon" ios="md-close" md="md-close" (click)="dismissModal()"></ion-icon>\n        <p class="edit-recruitment-quetions-modal-header">Préparez les questions<br>de l\'entretien</p>\n    </div>\n\n    <div class="edit-recruitment-quetions-modal-main-container">\n        <div class="question-container">\n            <ion-item class="float-lbl-input">\n                <ion-label floating>Ajouter une question</ion-label>\n                <ion-input type="text" [(ngModel)]="recruitmentQuestion.question"></ion-input>\n            </ion-item>\n\n            <ion-item class="float-lbl-input">\n                <ion-label floating>Ajouter les réponses possibles</ion-label>\n                <ion-input type="text" [(ngModel)]="possibleAnswer"></ion-input>\n                <button clear ion-button item-end color="secondary" icon-only class="input-btn" *ngIf="possibleAnswer && possibleAnswer.trim().length > 0" (click)="addPossibleAnswer()">\n                    <ion-icon ios="md-add" md="md-add"></ion-icon>\n                </button>\n            </ion-item>\n\n            <ion-list *ngIf="recruitmentQuestion.possibleAnswers && recruitmentQuestion.possibleAnswers.length > 0" radio-group [(ngModel)]="recruitmentQuestion.idealAnswer" class="possible-answers-list">\n                <ion-item *ngFor="let possibleAnswer of recruitmentQuestion.possibleAnswers; let i = index;">\n                    <span class="delete" (click)="deletePossibleAnswer(i)">&times;</span>\n                    <ion-label>{{possibleAnswer}}</ion-label>\n                    <ion-radio [value]="i"></ion-radio>\n                    \n                    \n                    <!-- <ion-icon class="delete" ios="md-close" md="md-close" (click)="deletePossibleAnswer(i)"></ion-icon> -->\n                </ion-item>\n            </ion-list>\n\n            <div class="recruitment-quetion-action-conatiner">\n                <button ion-button color="secondary" round outline (click)="cancel()">Annuler</button>\n                <button ion-button color="secondary" round (click)="save()">Enregistrer</button>\n            </div>\n        </div>\n\n        <ion-fab right bottom>\n            <button ion-fab color="secondary" (click)="onAddQuestion()"><ion-icon name="add"></ion-icon></button>\n        </ion-fab>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\components\edit-recruitment-quetions-modal\edit-recruitment-quetions-modal.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__services_club_service__["a" /* ClubService */]])
    ], EditRecruitmentQuestionsModal);
    return EditRecruitmentQuestionsModal;
}());

//# sourceMappingURL=edit-recruitment-quetions-modal.component.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(390);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_storage__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__environments_firebase_credentials__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic_img_viewer__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_side_menu_controller_service__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_photo_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_authentication_service__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_user_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_club_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_canteen_meal_service__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__servicesCafeteria_toast_service__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_canteen_reserver_service__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__servicesCafeteria_product_list_product_list_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__servicesCafeteria_product_list_order_list_service__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__servicesCafeteria_product_list_panier_list_service__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__app_component__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_feedback_modal_feedback_modal_component__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_create_event_modal_create_event_modal_component__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_event_details_modal_event_details_modal_component__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_map_modal_map_modal_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_edit_recruitment_quetions_modal_edit_recruitment_quetions_modal_component__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pipes_side_menu_icons_matcher_pipe__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__directives_textarea_autosize_directive__ = __webpack_require__(623);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















//



//











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_25__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_26__components_feedback_modal_feedback_modal_component__["a" /* FeedbackModalComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_create_event_modal_create_event_modal_component__["a" /* CreateEventModalComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_event_details_modal_event_details_modal_component__["a" /* EventDetailsModalComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_map_modal_map_modal_component__["a" /* MapModalComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_edit_recruitment_quetions_modal_edit_recruitment_quetions_modal_component__["a" /* EditRecruitmentQuestionsModal */],
                __WEBPACK_IMPORTED_MODULE_31__pipes_side_menu_icons_matcher_pipe__["a" /* SideMenuIconsMatcherPipe */],
                __WEBPACK_IMPORTED_MODULE_32__directives_textarea_autosize_directive__["a" /* TextAreaAutosizeDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_25__app_component__["a" /* MyApp */], {
                    backButtonText: '',
                    menuType: 'overlay',
                    monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
                    monthShortNames: ['JAN', 'FÉV', 'MAR', 'AVR', 'MAI', 'JUN', 'JUL', 'AOÛ', 'SEP', 'OCT', 'NOV', 'DÉC'],
                    dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
                    dayShortNames: ['DIM', 'LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM']
                }, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account/account.module#AccountPageModule', name: 'AccountPage', segment: 'account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cafeteria/cafeteria-home/cafeteria-home.module#CafeteriaHomePageModule', name: 'CafeteriaHomePage', segment: 'cafeteria-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cafeteria/cold-drinks/cold-drinks.module#ColdDrinksPageModule', name: 'ColdDrinksPage', segment: 'cold-drinks', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cafeteria/feedbacks-cafeteria/feedbacks-cafeteria.module#FeedbacksCafeteriaPageModule', name: 'FeedbacksCafeteriaPage', segment: 'feedbacks-cafeteria', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cafeteria/form-drinks/form-drinks.module#FormDrinksPageModule', name: 'FormDrinksPage', segment: 'form-drinks', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cafeteria/gestion-produit/gestion-produit.module#GestionProduitPageModule', name: 'GestionProduitPage', segment: 'gestion-produit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cafeteria/hot-drinks/hot-drinks.module#HotDrinksPageModule', name: 'HotDrinksPage', segment: 'hot-drinks', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cafeteria/nos-pizzas/nos-pizzas.module#NosPizzasPageModule', name: 'NosPizzasPage', segment: 'nos-pizzas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cafeteria/nos-sandwichs/nos-sandwichs.module#NosSandwichsPageModule', name: 'NosSandwichsPage', segment: 'nos-sandwichs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cafeteria/nos-supplements/nos-supplements.module#NosSupplementsPageModule', name: 'NosSupplementsPage', segment: 'nos-supplements', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cafeteria/pizza-form/pizza-form.module#PizzaFormPageModule', name: 'PizzaFormPage', segment: 'pizza-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cafeteria/snacks/snacks.module#SnacksPageModule', name: 'SnacksPage', segment: 'snacks', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cafeteria/StudentCafeteria/modal-commentaire-cafeteria/modal-commentaire-cafeteria.module#ModalCommentaireCafeteriaPageModule', name: 'ModalCommentaireCafeteriaPage', segment: 'modal-commentaire-cafeteria', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cafeteria/StudentCafeteria/modal-feedback/modal-feedback.module#ModalFeedbackPageModule', name: 'ModalFeedbackPage', segment: 'modal-feedback', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cafeteria/StudentCafeteria/orders/orders.module#OrdersPageModule', name: 'OrdersPage', segment: 'orders', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cafeteria/StudentCafeteria/panier/panier.module#PanierPageModule', name: 'PanierPage', segment: 'panier', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cafeteria/StudentCafeteria/pop-comment/pop-comment.module#PopCommentPageModule', name: 'PopCommentPage', segment: 'pop-comment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cafeteria/StudentCafeteria/product-details/product-details.module#ProductDetailsPageModule', name: 'ProductDetailsPage', segment: 'product-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cafeteria/StudentCafeteria/products/products.module#ProductsPageModule', name: 'ProductsPage', segment: 'products', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cafeteria/StudentCafeteria/student-product/student-product.module#StudentProductPageModule', name: 'StudentProductPage', segment: 'student-product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cafeteria/viennoiserie/viennoiserie.module#ViennoiseriePageModule', name: 'ViennoiseriePage', segment: 'viennoiserie', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cafeteria/water/water.module#WaterPageModule', name: 'WaterPage', segment: 'water', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/canteen/canteen-home/canteen-home.module#CanteenHomePageModule', name: 'CanteenHomePage', segment: 'canteen-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/canteen/detail-menu/detail-menu.module#DetailMenuPageModule', name: 'DetailMenuPage', segment: 'detail-menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/canteen/etudiant-menu-detail/etudiant-menu-detail.module#EtudiantMenuDetailPageModule', name: 'EtudiantMenuDetailPage', segment: 'etudiant-menu-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/canteen/etudiant-menu/etudiant-menu.module#EtudiantMenuPageModule', name: 'EtudiantMenuPage', segment: 'etudiant-menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/canteen/feedback-canteen/feedback-canteen.module#FeedbackCanteenPageModule', name: 'FeedbackCanteenPage', segment: 'feedback-canteen', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/canteen/menu-canteen/menu-canteen.module#MenuCanteenPageModule', name: 'MenuCanteenPage', segment: 'menu-canteen', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/canteen/modal-page-commentaire-conteen/modal-page-commentaire-conteen.module#ModalPageCommentaireConteenPageModule', name: 'ModalPageCommentaireConteenPage', segment: 'modal-page-commentaire-conteen', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/canteen/popup-comment/popup-comment.module#PopupCommentPageModule', name: 'PopupCommentPage', segment: 'popup-comment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/canteen/reservation/reservation.module#ReservationPageModule', name: 'ReservationPage', segment: 'reservation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/canteen/testmodal/testmodal.module#TestmodalPageModule', name: 'TestmodalPage', segment: 'testmodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/club/accepted-membership-applications/accepted-membership-applications.module#AcceptedMembershipApplicationsPageModule', name: 'AcceptedMembershipApplicationsPage', segment: 'accepted-membership-applications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/club/club-profile/club-profile.module#ClubProfilePageModule', name: 'ClubProfilePage', segment: 'club-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/club/coming-events/coming-events.module#ComingEventsPageModule', name: 'ComingEventsPage', segment: 'coming-events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/club/events/events.module#EventsPageModule', name: 'EventsPage', segment: 'events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/club/membership-applications/membership-applications.module#MembershipApplicationsPageModule', name: 'MembershipApplicationsPage', segment: 'membership-applications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/club/new-membership-applications/new-membership-applications.module#NewMembershipApplicationsPageModule', name: 'NewMembershipApplicationsPage', segment: 'new-membership-applications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/club/past-events/past-events.module#PastEventsPageModule', name: 'PastEventsPage', segment: 'past-events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/club/rejected-membership-applications/rejected-membership-applications.module#RejectedMembershipApplicationsPageModule', name: 'RejectedMembershipApplicationsPage', segment: 'rejected-membership-applications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/landing/landing.module#LandingPageModule', name: 'LandingPage', segment: 'landing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student/student-home/student-home.module#StudentHomePageModule', name: 'StudentHomePage', segment: 'student-home', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_12__environments_firebase_credentials__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_storage__["b" /* AngularFireStorageModule */],
                __WEBPACK_IMPORTED_MODULE_13_ionic_img_viewer__["a" /* IonicImageViewerModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_25__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_26__components_feedback_modal_feedback_modal_component__["a" /* FeedbackModalComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_create_event_modal_create_event_modal_component__["a" /* CreateEventModalComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_event_details_modal_event_details_modal_component__["a" /* EventDetailsModalComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_map_modal_map_modal_component__["a" /* MapModalComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_edit_recruitment_quetions_modal_edit_recruitment_quetions_modal_component__["a" /* EditRecruitmentQuestionsModal */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_15__services_photo_service__["a" /* PhotoService */],
                __WEBPACK_IMPORTED_MODULE_14__services_side_menu_controller_service__["a" /* SideMenuControllerService */],
                __WEBPACK_IMPORTED_MODULE_16__services_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_17__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_18__services_club_service__["a" /* ClubService */],
                __WEBPACK_IMPORTED_MODULE_19__services_canteen_meal_service__["a" /* MealService */],
                __WEBPACK_IMPORTED_MODULE_20__servicesCafeteria_toast_service__["a" /* ToastService */],
                __WEBPACK_IMPORTED_MODULE_21__services_canteen_reserver_service__["a" /* ReserverService */],
                __WEBPACK_IMPORTED_MODULE_22__servicesCafeteria_product_list_product_list_service__["a" /* ProductListService */],
                __WEBPACK_IMPORTED_MODULE_24__servicesCafeteria_product_list_panier_list_service__["a" /* PanierListService */],
                __WEBPACK_IMPORTED_MODULE_23__servicesCafeteria_product_list_order_list_service__["a" /* OrderListService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(44);
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



var ClubService = (function () {
    function ClubService(angularFireDatabase, storage) {
        this.angularFireDatabase = angularFireDatabase;
        this.storage = storage;
        this.clubListRef = null;
        this.clubListRef = this.angularFireDatabase.list('/club');
    }
    ClubService.prototype.getClubs = function () {
        return this.clubListRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    ClubService.prototype.getClubById = function (key) {
        return this.angularFireDatabase.object('/club/' + key).snapshotChanges().map(function (changes) {
            return __assign({ key: changes.payload.key }, changes.payload.val());
        });
    };
    ClubService.prototype.getClubByAdminUid = function (uid) {
        return this.angularFireDatabase.list('/club', function (ref) { return ref.orderByChild('admin/uid').equalTo(uid); }).snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    ClubService.prototype.createClub = function (club) {
        return this.clubListRef.push(club);
    };
    ClubService.prototype.updateClub = function (club) {
        return this.clubListRef.update(club.key, club);
    };
    ClubService.prototype.updateClubInLocalStorage = function (club) {
        var _this = this;
        this.updateClub(club).then(function (response) {
            _this.storage.set('currentClub', club);
        }, function (error) {
            console.log(error);
        });
    };
    ClubService.prototype.getClubFromLocalStorage = function () {
        return this.storage.get('currentClub');
    };
    ClubService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], ClubService);
    return ClubService;
}());

//# sourceMappingURL=club.service.js.map

/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Feedback; });
var Feedback = (function () {
    function Feedback() {
    }
    return Feedback;
}());

//# sourceMappingURL=feedback.model.js.map

/***/ }),

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecruitmentQuestion; });
var RecruitmentQuestion = (function () {
    function RecruitmentQuestion() {
    }
    return RecruitmentQuestion;
}());

//# sourceMappingURL=recruitment-question.model.js.map

/***/ }),

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, events, alertCtrl, authenticationService, storage) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.authenticationService = authenticationService;
        this.storage = storage;
        this.rootPage = 'LandingPage';
        this.sideMenuContent = [];
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.setupSideMenuContent();
        });
    }
    MyApp.prototype.setupSideMenuContent = function () {
        var _this = this;
        this.events.subscribe('sideMenu:changeContent', function (content) {
            _this.sideMenuContent = content;
        });
    };
    MyApp.prototype.navigate = function (path) {
        this.nav.push(path);
    };
    MyApp.prototype.showLogoutAlert = function () {
        var _this = this;
        var logoutAlert = this.alertCtrl.create({
            title: 'Vous venez de se deconnecter!',
            message: 'Êtes-vous sûr?',
            buttons: [
                {
                    text: 'Annuler',
                    handler: function () { }
                },
                {
                    text: 'Se deconnecter',
                    handler: function () {
                        _this.splashScreen.show();
                        _this.authenticationService.signOut().then(function (result) {
                            _this.storage.clear();
                            _this.nav.setRoot('LoginPage');
                            _this.nav.popToRoot();
                            Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__["timer"])(3000).subscribe(function () {
                                _this.splashScreen.hide();
                            });
                        }, function (error) {
                            console.log(error);
                        });
                    }
                }
            ]
        });
        logoutAlert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\app\app.html"*/'<!-- <div *ngIf="showSplash" class="splash">\n    <div class="spinner">\n    </div>\n</div> -->\n\n<ion-menu id="sideMenu" [content]="content" persistent="true">\n\n    <ion-content class="side-menu">\n\n        <div class="side-menu-header">\n\n            <div class="avatar-container">\n                <div class="avatar-green-bg">\n                    <img src="assets/imgs/default-avatar.png">\n                </div>\n            </div>\n\n            <div class="general-info-container">\n                <p class="username">Buvette</p>\n                <p class="detail">@ISAMM</p>\n            </div>\n\n        </div>\n\n        <div class="side-menu-options" padding>\n            <ion-list no-lines>\n                <button ion-item detail-none menuClose *ngFor="let content of sideMenuContent" (click)="navigate(content.path)" class="side-menu-option ripple">\n                    <span class="option-icon-container"><i class="{{content.name | sideMenuIconsMatcher}}"></i></span>{{content.name}}\n                </button>\n                <button ion-item detail-none menuClose class="side-menu-option ripple" (click)="navigate(\'AccountPage\')">\n                    <span class="option-icon-container"><i class="fas fa-lock"></i></span>Votre compte\n                </button>\n                <button ion-item detail-none menuClose class="side-menu-option ripple" (click)="navigate(\'SettingsPage\')">\n                    <span class="option-icon-container"><i class="fas fa-cog"></i></span>Paramètres\n                </button>\n                <button ion-item detail-none menuClose class="side-menu-option ripple" (click)="navigate(\'HelpPage\')">\n                    <span class="option-icon-container"><i class="fas fa-question-circle"></i></span>Aide\n                </button>\n                <button ion-item detail-none menuClose class="side-menu-option ripple" (click)="navigate(\'AboutPage\')">\n                    <span class="option-icon-container"><i class="fas fa-info-circle"></i></span>A propos\n                </button>\n                <button ion-item detail-none menuClose class="side-menu-option ripple" (click)="showLogoutAlert()">\n                    <span class="option-icon-container"><i class="fas fa-sign-out-alt"></i></span>Se deconnecter\n                </button>\n            </ion-list>\n        </div>\n\n    </ion-content>\n\n</ion-menu>\n\n<ion-nav #content [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenuIconsMatcherPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SideMenuIconsMatcherPipe = (function () {
    function SideMenuIconsMatcherPipe() {
    }
    SideMenuIconsMatcherPipe.prototype.transform = function (value) {
        switch (value) {
            case 'Votre vitrine': {
                return 'fas fa-id-card';
            }
            case 'Vos événements': {
                return 'far fa-calendar-alt';
            }
            case 'Demandes d\'Adhésion': {
                return 'fas fa-user-plus';
            }
        }
    };
    SideMenuIconsMatcherPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'sideMenuIconsMatcher'
        })
    ], SideMenuIconsMatcherPipe);
    return SideMenuIconsMatcherPipe;
}());

//# sourceMappingURL=side-menu-icons-matcher.pipe.js.map

/***/ }),

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextAreaAutosizeDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TextAreaAutosizeDirective = (function () {
    function TextAreaAutosizeDirective(element) {
        this.element = element;
    }
    TextAreaAutosizeDirective.prototype.onInput = function (textArea) {
        this.adjust();
    };
    TextAreaAutosizeDirective.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.adjust(); }, 0);
    };
    TextAreaAutosizeDirective.prototype.adjust = function () {
        var textArea = this.element.nativeElement.getElementsByTagName('textarea')[0];
        textArea.style.overflow = 'hidden';
        textArea.style.height = 'auto';
        textArea.style.height = textArea.scrollHeight + "px";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('input', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [HTMLTextAreaElement]),
        __metadata("design:returntype", void 0)
    ], TextAreaAutosizeDirective.prototype, "onInput", null);
    TextAreaAutosizeDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: 'ion-textarea[autosize]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], TextAreaAutosizeDirective);
    return TextAreaAutosizeDirective;
}());

//# sourceMappingURL=textarea-autosize.directive.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Club; });
var Club = (function () {
    function Club() {
    }
    return Club;
}());

//# sourceMappingURL=club.model.js.map

/***/ })

},[382]);
//# sourceMappingURL=main.js.map