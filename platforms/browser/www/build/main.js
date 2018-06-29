webpackJsonp([15],{

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(244);
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

/***/ 148:
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
webpackEmptyAsyncContext.id = 148;

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		458,
		14
	],
	"../pages/account/account.module": [
		459,
		13
	],
	"../pages/cafeteria/cafeteria-home/cafeteria-home.module": [
		460,
		12
	],
	"../pages/canteen/canteen-home/canteen-home.module": [
		461,
		11
	],
	"../pages/club/club-profile/club-profile.module": [
		462,
		3
	],
	"../pages/club/coming-events/coming-events.module": [
		463,
		10
	],
	"../pages/club/events/events.module": [
		464,
		9
	],
	"../pages/club/membership-applications/membership-applications.module": [
		465,
		8
	],
	"../pages/club/past-events/past-events.module": [
		466,
		0
	],
	"../pages/help/help.module": [
		467,
		7
	],
	"../pages/landing/landing.module": [
		468,
		6
	],
	"../pages/login/login.module": [
		469,
		2
	],
	"../pages/settings/settings.module": [
		470,
		5
	],
	"../pages/signup/signup.module": [
		471,
		1
	],
	"../pages/student/student-home/student-home.module": [
		472,
		4
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
webpackAsyncContext.id = 191;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(239);
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
    function PhotoService(camera) {
        this.camera = camera;
    }
    PhotoService.prototype.takePhoto = function (sourceType, width, height) {
        var options = {
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
        return this.camera.getPicture(options);
    };
    PhotoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */]])
    ], PhotoService);
    return PhotoService;
}());

//# sourceMappingURL=photo.service.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_address_model__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(243);
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
        this.selectedPlace = new __WEBPACK_IMPORTED_MODULE_0__models_address_model__["a" /* Address */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ElementRef */])
    ], MapModalComponent.prototype, "mapRef", void 0);
    MapModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\NADER\IonicProjects\MyCampus\src\components\map-modal\map-modal.component.html"*/'<ion-header class="map-modal-header">\n\n    <div class="map-modal-header-content">\n\n        <ion-icon class="close-icon" ios="md-close" md="md-close" (click)="dismissModal()"></ion-icon>\n\n        <p class="title">Localisation de l\'Événement</p>\n\n    </div>\n\n    <ion-searchbar (ionInput)="searchPlace($event)" (ionClear)="clearSearch()" placeholder="Recherche" debounce="500"></ion-searchbar>\n\n    <div class="results-container">\n\n        <div class="results-list">\n\n            <ion-list>\n\n                <ion-item *ngFor="let result of results; let i = index;" (click)="selectResult(i)">{{result.name}}</ion-item>\n\n            </ion-list>\n\n        </div>\n\n    </div>\n\n</ion-header>\n\n\n\n<ion-content class="map-modal-content">\n\n    <div #map class="map-container"></div>\n\n</ion-content>\n\n\n\n<ion-footer class="map-modal-footer">\n\n    <button class="validation-btn" ion-button color="secondary" round large block (click)="choosePlace()">Choisir la Localisation</button>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\NADER\IonicProjects\MyCampus\src\components\map-modal\map-modal.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]])
    ], MapModalComponent);
    return MapModalComponent;
}());

//# sourceMappingURL=map-modal.component.js.map

/***/ }),

/***/ 242:
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

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenuControllerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
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
    SideMenuControllerService.prototype.enableSideMenu = function (isEnabled) {
        this.menuCtrl.enable(isEnabled);
    };
    SideMenuControllerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], SideMenuControllerService);
    return SideMenuControllerService;
}());

//# sourceMappingURL=side-menu-controller.service.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(104);
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
    function ClubService(angularFireDatabase) {
        this.angularFireDatabase = angularFireDatabase;
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
    ClubService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ClubService);
    return ClubService;
}());

//# sourceMappingURL=club.service.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(104);
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
    function UserService(angularFireDatabase) {
        this.angularFireDatabase = angularFireDatabase;
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
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateEventModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_photo_service__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_modal_map_modal_component__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_address_model__ = __webpack_require__(242);
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
    function CreateEventModalComponent(platform, params, viewCtrl, modalCtrl, actionSheetCtrl, photoService) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.photoService = photoService;
        this.activeSlideIndex = 0;
        this.tags = [];
        this.place = new __WEBPACK_IMPORTED_MODULE_4__models_address_model__["a" /* Address */]();
        this.coverPicture = '';
    }
    CreateEventModalComponent.prototype.ngOnInit = function () {
        this.tags = [];
        var date = new Date();
        var month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) + '' : (date.getMonth() + 1);
        this.currentDate = [date.getFullYear(), month, date.getDate()].join('-');
        this.maxDate = [date.getFullYear() + 1, 12, 31].join('-');
    };
    CreateEventModalComponent.prototype.dismissModal = function () {
        this.viewCtrl.dismiss();
    };
    CreateEventModalComponent.prototype.dateChange = function () {
        console.log(this.startDate);
    };
    CreateEventModalComponent.prototype.timeChange = function () {
        console.log(this.startTime);
    };
    CreateEventModalComponent.prototype.slideChanged = function () {
        this.activeSlideIndex = this.slides.getActiveIndex();
    };
    CreateEventModalComponent.prototype.addTag = function () {
        this.tags.push(this.tag.trim());
        this.tag = null;
    };
    CreateEventModalComponent.prototype.deleteTag = function (i) {
        this.tags.splice(i, 1);
    };
    CreateEventModalComponent.prototype.presentMapModal = function () {
        var _this = this;
        var mapModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__map_modal_map_modal_component__["a" /* MapModalComponent */], { location: this.place });
        mapModal.onDidDismiss(function (selectedPlace) {
            if (selectedPlace === null) {
                console.log('place stays the same');
            }
            else {
                console.log('place has been chosen');
                _this.place = JSON.parse(JSON.stringify(selectedPlace));
            }
            console.log('returned location', _this.place);
        });
        mapModal.present();
    };
    CreateEventModalComponent.prototype.presentPhotoActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Ajouter une photo de couverture',
            buttons: [
                {
                    text: 'Choisir à partir du Gallery',
                    icon: 'md-images',
                    role: 'destructive',
                    handler: function () {
                        _this.photoService.takePhoto(0, 600, 500).then(function (imageData) {
                            _this.coverPicture = 'data:image/jpeg;base64,' + imageData;
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
                            _this.coverPicture = 'data:image/jpeg;base64,' + imageData;
                        }, function (error) {
                            console.log('something wrong', error);
                        });
                    }
                }
            ]
        });
        actionSheet.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */])
    ], CreateEventModalComponent.prototype, "slides", void 0);
    CreateEventModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\NADER\IonicProjects\MyCampus\src\components\create-event-modal\create-event-modal.component.html"*/'<ion-content class="create-event-modal">\n\n    \n\n    <div class="create-event-modal-main-container">\n\n\n\n        <ion-icon class="close-icon" ios="md-close" md="md-close" (click)="dismissModal()"></ion-icon>\n\n        <p class="create-event-modal-header">Créez votre<br>prochain événement!</p>\n\n\n\n        <div class="slides-container">\n\n            <ion-slides spaceBetween="50" (ionSlideDidChange)="slideChanged()">\n\n                <ion-slide class="slide">\n\n                    <ion-item class="float-lbl-input">\n\n                        <ion-label floating>Titre de l\'Événement</ion-label>\n\n                        <ion-input type="text"></ion-input>\n\n                    </ion-item>\n\n\n\n                    <ion-item class="float-lbl-input" *ngIf="tags.length < 5">\n\n                        <ion-label floating>Quelques Mots Clés</ion-label>\n\n                        <ion-input type="text" [(ngModel)]="tag"></ion-input>\n\n                        <button clear ion-button item-end color="secondary" icon-only class="input-btn" *ngIf="tag && tag.trim().length>0" (click)="addTag()">\n\n                            <ion-icon ios="md-add" md="md-add"></ion-icon>\n\n                        </button>\n\n                    </ion-item>\n\n\n\n                    <div class="tags-container" *ngIf="tags && tags.length > 0">\n\n                        <div class="tag" *ngFor="let tag of tags; let i = index;">\n\n                            <span class="tag-label">{{tag}}</span>\n\n                            <span class="delete" (click)="deleteTag(i)">&times;</span>\n\n                        </div>\n\n                    </div>\n\n\n\n                    <ion-item class="float-lbl-input">\n\n                        <ion-label floating>Plus d\'Informations</ion-label>\n\n                        <ion-textarea autosize autocomplete="on" autocorrect="on"></ion-textarea>\n\n                    </ion-item>\n\n                </ion-slide>\n\n\n\n                <ion-slide class="slide">\n\n                    <p class="datetime-separator">L\'Événement commence à</p>\n\n\n\n                    <div class="date-time">\n\n                        <div class="date">\n\n                            <ion-item class="float-lbl-input">\n\n                                <ion-label floating>Date</ion-label>\n\n                                <ion-datetime displayFormat="DDDD DD MMM, YYYY" pickerFormat="MMMM/DD/YYYY" cancelText="Annuler" doneText="Ok" min="{{currentDate}}" max="{{maxDate}}" [(ngModel)]="startDate" (ionChange)="dateChange()"></ion-datetime>\n\n                            </ion-item>\n\n                        </div>\n\n                        <div class="time">\n\n                            <ion-item class="float-lbl-input">\n\n                                <ion-label floating>Heure</ion-label>\n\n                                <ion-datetime displayFormat="HH:mm" cancelText="Annuler" doneText="Ok" [(ngModel)]="startTime" (ionChange)="timeChange()"></ion-datetime>\n\n                            </ion-item>\n\n                        </div>\n\n                    </div>\n\n                    \n\n                    <p class="datetime-separator" style="margin-top:40px;">L\'Événement se termine à</p>\n\n\n\n                    <div class="date-time">\n\n                        <div class="date">\n\n                            <ion-item class="float-lbl-input">\n\n                                <ion-label floating>Date</ion-label>\n\n                                <ion-datetime displayFormat="DDDD DD MMM, YYYY" pickerFormat="MMMM/DD/YYYY" cancelText="Annuler" doneText="Ok" min="{{currentDate}}" max="{{maxDate}}"></ion-datetime>\n\n                            </ion-item>\n\n                        </div>\n\n                        <div class="time">\n\n                            <ion-item class="float-lbl-input">\n\n                                <ion-label floating>Heure</ion-label>\n\n                                <ion-datetime displayFormat="HH:mm" cancelText="Annuler" doneText="Ok"></ion-datetime>\n\n                            </ion-item>\n\n                        </div>\n\n                    </div>\n\n\n\n                    <ion-item class="float-lbl-input" style="margin-top:20px;">\n\n                        <ion-label floating>Localisation de l\'Événement</ion-label>\n\n                        <ion-input type="text"></ion-input>\n\n                        <button clear ion-button item-end color="secondary" icon-only class="input-btn" (click)="presentMapModal()">\n\n                            <ion-icon ios="md-map" md="md-map"></ion-icon>\n\n                        </button>\n\n                    </ion-item>\n\n                </ion-slide>\n\n\n\n                <ion-slide class="slide">\n\n                    <div class="cover-photo-container" (click)="presentPhotoActionSheet()" [style.background]="(coverPicture && coverPicture.length > 0) ? \'url(\'+coverPicture+\')\' : \'transparent\'">\n\n                        <div class="placeholder" *ngIf="!coverPicture || coverPicture.length === 0">\n\n                            <i class="fas fa-camera"></i>\n\n                            <p>Ajouter une photo de couverture pour votre événement</p>\n\n                        </div>\n\n                    </div>\n\n                </ion-slide>\n\n            </ion-slides>\n\n        </div>\n\n\n\n    </div>\n\n\n\n</ion-content>\n\n\n\n<ion-footer class="create-event-modal-footer">\n\n    <div class="dots-container" *ngIf="activeSlideIndex < 2">\n\n        <span class="dot" [ngClass]="{\'full\': activeSlideIndex === 0}"></span>\n\n        <span class="dot" [ngClass]="{\'full\': activeSlideIndex === 1}"></span>\n\n        <span class="dot"></span>\n\n    </div>\n\n\n\n    <button class="validation-btn" *ngIf="activeSlideIndex >= 2" ion-button color="secondary" round large block>Créez votre Événement</button>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\NADER\IonicProjects\MyCampus\src\components\create-event-modal\create-event-modal.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2__services_photo_service__["a" /* PhotoService */]])
    ], CreateEventModalComponent);
    return CreateEventModalComponent;
}());

//# sourceMappingURL=create-event-modal.component.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
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
    function FeedbackModalComponent(platform, params, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        console.log('UserId', params.get('userId'));
    }
    FeedbackModalComponent.prototype.dismissModal = function () {
        this.viewCtrl.dismiss();
    };
    FeedbackModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\NADER\IonicProjects\MyCampus\src\components\feedback-modal\feedback-modal.component.html"*/'<ion-content>\n\n    \n\n    <section id="header-section">\n\n\n\n        <div class="header-wrapper">\n\n            <ion-icon ios="md-close" md="md-close" (click)="dismissModal()"></ion-icon>\n\n            <div class="average-rate-container">\n\n                <div class="average-rate">\n\n                    <p>4.6</p>\n\n                </div>\n\n                <div class="average-rate-details">\n\n                    <div class="container">\n\n                        <div class="star-rating" style="margin-bottom: 5px;">\n\n                            <div class="back-stars">\n\n                                <i class="fa fa-star" aria-hidden="true"></i>\n\n                                <i class="fa fa-star" aria-hidden="true"></i>\n\n                                <i class="fa fa-star" aria-hidden="true"></i>\n\n                                <i class="fa fa-star" aria-hidden="true"></i>\n\n                                <i class="fa fa-star" aria-hidden="true"></i>\n\n\n\n                                <div class="front-stars" style="width: 90%">\n\n                                    <i class="fa fa-star" aria-hidden="true"></i>\n\n                                    <i class="fa fa-star" aria-hidden="true"></i>\n\n                                    <i class="fa fa-star" aria-hidden="true"></i>\n\n                                    <i class="fa fa-star" aria-hidden="true"></i>\n\n                                    <i class="fa fa-star" aria-hidden="true"></i>\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                        <p>53<i class="fas fa-users"></i></p>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n            <p class="event-title">ISAMM Movie Premiere</p>\n\n        </div>\n\n\n\n    </section>\n\n\n\n    <section id="feedback-section" padding>\n\n\n\n        <div class="feedback-card">\n\n            <div class="feedback-header">\n\n                <div class="avatar-container">\n\n                    <div class="avatar-green-bg">\n\n                        <img src="assets/imgs/default-avatar.png">\n\n                    </div>\n\n                </div>\n\n                <div class="user-details-container">\n\n                    <p class="user-full-name">John Doe</p>\n\n                    <p class="date">05/03/2017</p>\n\n                    <div class="star-rating" style="font-size:10px;">\n\n                        <div class="back-stars">\n\n                            <i class="fa fa-star" aria-hidden="true"></i>\n\n                            <i class="fa fa-star" aria-hidden="true"></i>\n\n                            <i class="fa fa-star" aria-hidden="true"></i>\n\n                            <i class="fa fa-star" aria-hidden="true"></i>\n\n                            <i class="fa fa-star" aria-hidden="true"></i>\n\n                                \n\n                            <div class="front-stars" style="width: 80%">\n\n                                <i class="fa fa-star" aria-hidden="true"></i>\n\n                                <i class="fa fa-star" aria-hidden="true"></i>\n\n                                <i class="fa fa-star" aria-hidden="true"></i>\n\n                                <i class="fa fa-star" aria-hidden="true"></i>\n\n                                <i class="fa fa-star" aria-hidden="true"></i>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n            <div class="feedback-body">\n\n                <p>Qui cupidatat nulla reprehenderit esse ad minim est in ipsum eiusmod. Do sit fugiat elit dolor officia aute enim nostrud esse. Incididunt officia consectetur nulla dolor labore Lorem ipsum officia eu exercitation.</p>\n\n            </div>\n\n        </div>\n\n\n\n        <div class="feedback-card">\n\n            <div class="feedback-header">\n\n                <div class="avatar-container">\n\n                    <div class="avatar-green-bg">\n\n                        <img src="assets/imgs/default-avatar.png">\n\n                    </div>\n\n                </div>\n\n                <div class="user-details-container">\n\n                    <p class="user-full-name">John Doe</p>\n\n                    <p class="date">05/03/2017</p>\n\n                    <div class="star-rating" style="font-size:10px;">\n\n                        <div class="back-stars">\n\n                            <i class="fa fa-star" aria-hidden="true"></i>\n\n                            <i class="fa fa-star" aria-hidden="true"></i>\n\n                            <i class="fa fa-star" aria-hidden="true"></i>\n\n                            <i class="fa fa-star" aria-hidden="true"></i>\n\n                            <i class="fa fa-star" aria-hidden="true"></i>\n\n\n\n                            <div class="front-stars" style="width: 80%">\n\n                                <i class="fa fa-star" aria-hidden="true"></i>\n\n                                <i class="fa fa-star" aria-hidden="true"></i>\n\n                                <i class="fa fa-star" aria-hidden="true"></i>\n\n                                <i class="fa fa-star" aria-hidden="true"></i>\n\n                                <i class="fa fa-star" aria-hidden="true"></i>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n            <div class="feedback-body">\n\n                <p>Qui cupidatat nulla reprehenderit esse ad minim est in ipsum eiusmod. Do sit fugiat elit dolor officia aute enim nostrud esse. Incididunt officia consectetur nulla dolor labore Lorem ipsum officia eu exercitation.</p>\n\n            </div>\n\n        </div>\n\n\n\n        <div class="feedback-card">\n\n            <div class="feedback-header">\n\n                <div class="avatar-container">\n\n                    <div class="avatar-green-bg">\n\n                        <img src="assets/imgs/default-avatar.png">\n\n                    </div>\n\n                </div>\n\n                <div class="user-details-container">\n\n                    <p class="user-full-name">John Doe</p>\n\n                    <p class="date">05/03/2017</p>\n\n                    <div class="star-rating" style="font-size:10px;">\n\n                        <div class="back-stars">\n\n                            <i class="fa fa-star" aria-hidden="true"></i>\n\n                            <i class="fa fa-star" aria-hidden="true"></i>\n\n                            <i class="fa fa-star" aria-hidden="true"></i>\n\n                            <i class="fa fa-star" aria-hidden="true"></i>\n\n                            <i class="fa fa-star" aria-hidden="true"></i>\n\n                                \n\n                            <div class="front-stars" style="width: 80%">\n\n                                <i class="fa fa-star" aria-hidden="true"></i>\n\n                                <i class="fa fa-star" aria-hidden="true"></i>\n\n                                <i class="fa fa-star" aria-hidden="true"></i>\n\n                                <i class="fa fa-star" aria-hidden="true"></i>\n\n                                <i class="fa fa-star" aria-hidden="true"></i>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n            <div class="feedback-body">\n\n                <p>Qui cupidatat nulla reprehenderit esse ad minim est in ipsum eiusmod. Do sit fugiat elit dolor officia aute enim nostrud esse. Incididunt officia consectetur nulla dolor labore Lorem ipsum officia eu exercitation.</p>\n\n            </div>\n\n        </div>\n\n\n\n    </section>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\NADER\IonicProjects\MyCampus\src\components\feedback-modal\feedback-modal.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], FeedbackModalComponent);
    return FeedbackModalComponent;
}());

//# sourceMappingURL=feedback-modal.component.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailsModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventDetailsModalComponent = (function () {
    function EventDetailsModalComponent(platform, params, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
    }
    EventDetailsModalComponent.prototype.dismissModal = function () {
        this.viewCtrl.dismiss();
    };
    EventDetailsModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\NADER\IonicProjects\MyCampus\src\components\event-details-modal\event-details-modal.component.html"*/'<ion-content>\n\n    \n\n    <section id="event-details-header">\n\n\n\n        <div class="header-wrapper">\n\n            <ion-icon ios="md-close" md="md-close" (click)="dismissModal()"></ion-icon>\n\n            <div class="average-rate-container">\n\n                <div class="average-rate">\n\n                    <p>4.6</p>\n\n                </div>\n\n                <div class="average-rate-details">\n\n                    <div class="container">\n\n                        <div class="star-rating" style="margin-bottom: 5px;">\n\n                            <div class="back-stars">\n\n                                <i class="fa fa-star" aria-hidden="true"></i>\n\n                                <i class="fa fa-star" aria-hidden="true"></i>\n\n                                <i class="fa fa-star" aria-hidden="true"></i>\n\n                                <i class="fa fa-star" aria-hidden="true"></i>\n\n                                <i class="fa fa-star" aria-hidden="true"></i>\n\n\n\n                                <div class="front-stars" style="width: 90%">\n\n                                    <i class="fa fa-star" aria-hidden="true"></i>\n\n                                    <i class="fa fa-star" aria-hidden="true"></i>\n\n                                    <i class="fa fa-star" aria-hidden="true"></i>\n\n                                    <i class="fa fa-star" aria-hidden="true"></i>\n\n                                    <i class="fa fa-star" aria-hidden="true"></i>\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                        <p>53<i class="fas fa-users"></i></p>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n            <p class="event-title">ISAMM Movie Premiere</p>\n\n        </div>\n\n\n\n    </section>\n\n\n\n    <section id="event-details-body" padding>\n\n\n\n    </section>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\NADER\IonicProjects\MyCampus\src\components\event-details-modal\event-details-modal.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], EventDetailsModalComponent);
    return EventDetailsModalComponent;
}());

//# sourceMappingURL=event-details-modal.component.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(314);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments_firebase_credentials__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_side_menu_controller_service__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_photo_service__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_authentication_service__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_user_service__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_club_service__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_component__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_feedback_modal_feedback_modal_component__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_create_event_modal_create_event_modal_component__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_event_details_modal_event_details_modal_component__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_map_modal_map_modal_component__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pipes_side_menu_icons_matcher_pipe__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__directives_textarea_autosize_directive__ = __webpack_require__(457);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_18__components_feedback_modal_feedback_modal_component__["a" /* FeedbackModalComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_create_event_modal_create_event_modal_component__["a" /* CreateEventModalComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_event_details_modal_event_details_modal_component__["a" /* EventDetailsModalComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_map_modal_map_modal_component__["a" /* MapModalComponent */],
                __WEBPACK_IMPORTED_MODULE_22__pipes_side_menu_icons_matcher_pipe__["a" /* SideMenuIconsMatcherPipe */],
                __WEBPACK_IMPORTED_MODULE_23__directives_textarea_autosize_directive__["a" /* TextAreaAutosizeDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */], {
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
                        { loadChildren: '../pages/canteen/canteen-home/canteen-home.module#CanteenHomePageModule', name: 'CanteenHomePage', segment: 'canteen-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/club/club-profile/club-profile.module#ClubProfilePageModule', name: 'ClubProfilePage', segment: 'club-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/club/coming-events/coming-events.module#ComingEventsPageModule', name: 'ComingEventsPage', segment: 'coming-events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/club/events/events.module#EventsPageModule', name: 'EventsPage', segment: 'events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/club/membership-applications/membership-applications.module#MembershipApplicationsPageModule', name: 'MembershipApplicationsPage', segment: 'membership-applications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/club/past-events/past-events.module#PastEventsPageModule', name: 'PastEventsPage', segment: 'past-events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/landing/landing.module#LandingPageModule', name: 'LandingPage', segment: 'landing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student/student-home/student-home.module#StudentHomePageModule', name: 'StudentHomePage', segment: 'student-home', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_11__environments_firebase_credentials__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_18__components_feedback_modal_feedback_modal_component__["a" /* FeedbackModalComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_create_event_modal_create_event_modal_component__["a" /* CreateEventModalComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_event_details_modal_event_details_modal_component__["a" /* EventDetailsModalComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_map_modal_map_modal_component__["a" /* MapModalComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_13__services_photo_service__["a" /* PhotoService */],
                __WEBPACK_IMPORTED_MODULE_12__services_side_menu_controller_service__["a" /* SideMenuControllerService */],
                __WEBPACK_IMPORTED_MODULE_14__services_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_15__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_16__services_club_service__["a" /* ClubService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 451:
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
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyCPe0-6z4uXv44Fpw2lG4Vp2K-BXs9tnME",
    authDomain: "mycampustmp.firebaseapp.com",
    databaseURL: "https://mycampustmp.firebaseio.com",
    projectId: "mycampustmp",
    storageBucket: "",
    messagingSenderId: "35110800283"
};
//# sourceMappingURL=firebase.credentials.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__ = __webpack_require__(138);
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
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\NADER\IonicProjects\MyCampus\src\app\app.html"*/'<!-- <div *ngIf="showSplash" class="splash">\n    <div class="spinner">\n    </div>\n</div> -->\n\n<ion-menu id="sideMenu" [content]="content" persistent="true">\n\n    <ion-content class="side-menu">\n\n        <div class="side-menu-header">\n\n            <div class="avatar-container">\n                <div class="avatar-green-bg">\n                    <img src="assets/imgs/default-avatar.png">\n                </div>\n            </div>\n\n            <div class="general-info-container">\n                <p class="username">Film Club</p>\n                <p class="detail">@ISAMM</p>\n            </div>\n\n        </div>\n\n        <div class="side-menu-options" padding>\n            <ion-list no-lines>\n                <button ion-item detail-none menuClose *ngFor="let content of sideMenuContent" (click)="navigate(content.path)" class="side-menu-option ripple">\n                    <span class="option-icon-container"><i class="{{content.name | sideMenuIconsMatcher}}"></i></span>{{content.name}}\n                </button>\n                <button ion-item detail-none menuClose class="side-menu-option ripple" (click)="navigate(\'AccountPage\')">\n                    <span class="option-icon-container"><i class="fas fa-lock"></i></span>Votre compte\n                </button>\n                <button ion-item detail-none menuClose class="side-menu-option ripple" (click)="navigate(\'SettingsPage\')">\n                    <span class="option-icon-container"><i class="fas fa-cog"></i></span>Paramètres\n                </button>\n                <button ion-item detail-none menuClose class="side-menu-option ripple" (click)="navigate(\'HelpPage\')">\n                    <span class="option-icon-container"><i class="fas fa-question-circle"></i></span>Aide\n                </button>\n                <button ion-item detail-none menuClose class="side-menu-option ripple" (click)="navigate(\'AboutPage\')">\n                    <span class="option-icon-container"><i class="fas fa-info-circle"></i></span>A propos\n                </button>\n                <button ion-item detail-none menuClose class="side-menu-option ripple" (click)="showLogoutAlert()">\n                    <span class="option-icon-container"><i class="fas fa-sign-out-alt"></i></span>Se deconnecter\n                </button>\n            </ion-list>\n        </div>\n\n    </ion-content>\n\n</ion-menu>\n\n<ion-nav #content [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\NADER\IonicProjects\MyCampus\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 456:
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

/***/ 457:
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

/***/ })

},[293]);
//# sourceMappingURL=main.js.map