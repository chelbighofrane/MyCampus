webpackJsonp([16],{

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubProfilePageModule", function() { return ClubProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__club_profile__ = __webpack_require__(924);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__ = __webpack_require__(379);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__club_profile__["a" /* ClubProfilePage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__["a" /* IonicImageViewerModule */]
            ],
        })
    ], ClubProfilePageModule);
    return ClubProfilePageModule;
}());

//# sourceMappingURL=club-profile.module.js.map

/***/ }),

/***/ 924:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_side_menu_controller_service__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_club_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_photo_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_club_model__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_photo_model__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_staff_model__ = __webpack_require__(925);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_alert_input_model__ = __webpack_require__(926);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_contact_model__ = __webpack_require__(927);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__consts_available_contacts_constant__ = __webpack_require__(928);
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
    function ClubProfilePage(navCtrl, navParams, sideMenuControllerService, clubService, storage, actionSheetCtrl, photoService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sideMenuControllerService = sideMenuControllerService;
        this.clubService = clubService;
        this.storage = storage;
        this.actionSheetCtrl = actionSheetCtrl;
        this.photoService = photoService;
        this.alertCtrl = alertCtrl;
        this.club = new __WEBPACK_IMPORTED_MODULE_6__models_club_model__["a" /* Club */]();
        this.isAdmin = false;
        this.updateClubDetails = false;
        this.tags = [];
        this.staffIndex = -1;
        this.staff = new __WEBPACK_IMPORTED_MODULE_8__models_staff_model__["a" /* Staff */]();
        this.isNewStaff = false;
        this.availableContacts = __WEBPACK_IMPORTED_MODULE_11__consts_available_contacts_constant__["a" /* AVAILABLE_CONTACTS */].slice(0);
        this.sideMenuControllerService.setupClubSideMenuContent();
        this.clubKey = this.navParams.get('clubKey');
    }
    ClubProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.clubKey || this.clubKey === undefined) {
            this.isAdmin = true;
            this.storage.get('currentClub').then(function (response) {
                _this.club = response;
                if (_this.club.foundationDate) {
                    var date = new Date(_this.club.foundationDate);
                    _this.foundationYear = date.getFullYear();
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.isAdmin = false;
            this.clubService.getClubById(this.clubKey).subscribe(function (response) {
                _this.club = response;
                if (_this.club.foundationDate) {
                    var date = new Date(_this.club.foundationDate);
                    _this.foundationYear = date.getFullYear();
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    ClubProfilePage.prototype.ionViewDidLoad = function () {
    };
    ClubProfilePage.prototype.presentCoverPhotoActionSheet = function () {
        var _this = this;
        var clubCoverPhotoPath = "club/" + this.club.key + "/cover";
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Choisir une photo de couverture',
            buttons: [
                {
                    text: 'Choisir à partir du Gallery',
                    icon: 'md-images',
                    role: 'destructive',
                    handler: function () {
                        _this.photoService.takePhoto(0, 600, 400).then(function (response) {
                            var image = "data:image/jpeg;base64," + response;
                            _this.photoService.uploadPhoto(image, clubCoverPhotoPath).then(function (res) {
                                _this.club.coverPhoto = res.downloadURL;
                                _this.updateClub();
                            }, function (err) {
                                console.log(err);
                            });
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
                        _this.photoService.takePhoto(1, 600, 400).then(function (response) {
                            var image = "data:image/jpeg;base64," + response;
                            _this.photoService.uploadPhoto(image, clubCoverPhotoPath).then(function (res) {
                                _this.club.coverPhoto = res.downloadURL;
                                _this.updateClub();
                            }, function (err) {
                                console.log(err);
                            });
                        }, function (error) {
                            console.log(error);
                        });
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ClubProfilePage.prototype.presentLogoActionSheet = function () {
        var _this = this;
        var clubLogoPath = "club/" + this.club.key + "/logo";
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Choisir un logo',
            buttons: [
                {
                    text: 'Choisir à partir du Gallery',
                    icon: 'md-images',
                    role: 'destructive',
                    handler: function () {
                        _this.photoService.takePhoto(0, 500, 500).then(function (response) {
                            var image = "data:image/jpeg;base64," + response;
                            _this.photoService.uploadPhoto(image, clubLogoPath).then(function (res) {
                                _this.club.logo = res.downloadURL;
                                _this.updateClub();
                            }, function (err) {
                                console.log(err);
                            });
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
                        _this.photoService.takePhoto(1, 500, 500).then(function (response) {
                            var image = "data:image/jpeg;base64," + response;
                            _this.photoService.uploadPhoto(image, clubLogoPath).then(function (res) {
                                _this.club.logo = res.downloadURL;
                                _this.updateClub();
                            }, function (err) {
                                console.log(err);
                            });
                        }, function (error) {
                            console.log(error);
                        });
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ClubProfilePage.prototype.onUpdateClubDetails = function () {
        this.name = this.club.name;
        this.foundationDate = this.club.foundationDate;
        var date = new Date();
        var month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) + '' : (date.getMonth() + 1);
        var day = date.getDate() < 10 ? '0' + date.getDate() + '' : date.getDate();
        this.currentDate = [date.getFullYear(), month, day].join('-');
        this.tags = (this.club.tags && this.club.tags.length > 0) ? this.club.tags.slice(0) : [];
        this.description = this.club.description;
        this.membersNumber = this.club.membersNumber;
        this.eventsNumber = this.club.eventsNumber;
        this.updateClubDetails = true;
    };
    ClubProfilePage.prototype.addTag = function () {
        this.tags.push(this.tag.trim());
        this.tag = null;
    };
    ClubProfilePage.prototype.deleteTag = function (index) {
        this.tags.splice(index, 1);
    };
    ClubProfilePage.prototype.saveClubDetailsUpdate = function () {
        if (this.name && this.name.length > 0) {
            this.club.name = this.name;
            this.club.foundationDate = this.foundationDate;
            if (this.club.foundationDate) {
                var date = new Date(this.club.foundationDate);
                this.foundationYear = date.getFullYear();
            }
            this.club.tags = this.tags.slice(0);
            this.club.description = this.description;
            this.club.membersNumber = this.membersNumber;
            this.club.eventsNumber = this.eventsNumber;
            this.updateClub();
            this.updateClubDetails = false;
        }
    };
    ClubProfilePage.prototype.cancelClubDetailsUpdate = function () {
        this.name = this.club.name;
        this.foundationDate = this.club.foundationDate;
        this.tags = (this.club.tags && this.club.tags.length > 0) ? this.club.tags.slice(0) : [];
        this.description = this.club.description;
        this.membersNumber = this.club.membersNumber;
        this.eventsNumber = this.club.eventsNumber;
        this.updateClubDetails = false;
    };
    ClubProfilePage.prototype.addStaff = function () {
        this.isNewStaff = true;
        this.staff = new __WEBPACK_IMPORTED_MODULE_8__models_staff_model__["a" /* Staff */]();
        this.staff.key = new Date().getTime();
        this.club.staff = (this.club.staff && this.club.staff.length > 0) ? this.club.staff : [];
        this.club.staff.push(new __WEBPACK_IMPORTED_MODULE_8__models_staff_model__["a" /* Staff */]());
        this.staffIndex = this.club.staff.length - 1;
        if (this.staffSlides) {
            this.staffSlides.update();
            this.staffSlides.slideTo(this.staffIndex);
        }
    };
    ClubProfilePage.prototype.updateStaff = function (index) {
        this.staff = JSON.parse(JSON.stringify(this.club.staff[index]));
        this.staffIndex = index;
    };
    ClubProfilePage.prototype.presentStaffPhotoActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: "Choisir une image pour " + ((this.staff.staffName && this.staff.staffName.length > 0) ? this.staff.staffName : 'un nouveau Staff'),
            buttons: [
                {
                    text: 'Choisir à partir du Gallery',
                    icon: 'md-images',
                    role: 'destructive',
                    handler: function () {
                        _this.photoService.takePhoto(0, 500, 500).then(function (response) {
                            _this.staff.photo = "data:image/jpeg;base64," + response;
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
                        _this.photoService.takePhoto(1, 500, 500).then(function (response) {
                            _this.staff.photo = "data:image/jpeg;base64," + response;
                        }, function (error) {
                            console.log(error);
                        });
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ClubProfilePage.prototype.cancelStaffUpdate = function () {
        if (this.isNewStaff) {
            this.club.staff.pop();
            this.staffSlides.update();
        }
        this.staffIndex = -1;
        this.isNewStaff = false;
        this.staff = new __WEBPACK_IMPORTED_MODULE_8__models_staff_model__["a" /* Staff */]();
    };
    ClubProfilePage.prototype.saveStaffUpdate = function () {
        var _this = this;
        if (this.staff.staffName && this.staff.staffName.length > 0 && this.staff.responsability && this.staff.responsability.length > 0) {
            if (this.staff.photo && this.staff.photo.length > 0 && this.staff.photo !== this.club.staff[this.staffIndex].photo) {
                var clubStaffPhotoPath = "club/" + this.club.key + "/staff/" + this.staff.key;
                this.photoService.uploadPhoto(this.staff.photo, clubStaffPhotoPath).then(function (res) {
                    _this.staff.photo = res.downloadURL;
                    _this.club.staff[_this.staffIndex] = JSON.parse(JSON.stringify(_this.staff));
                    _this.updateClub();
                    _this.isNewStaff = false;
                    _this.staff = new __WEBPACK_IMPORTED_MODULE_8__models_staff_model__["a" /* Staff */]();
                    _this.staffIndex = -1;
                }, function (err) {
                    console.log(err);
                });
            }
            else {
                this.club.staff[this.staffIndex] = JSON.parse(JSON.stringify(this.staff));
                this.updateClub();
                this.isNewStaff = false;
                this.staff = new __WEBPACK_IMPORTED_MODULE_8__models_staff_model__["a" /* Staff */]();
                this.staffIndex = -1;
            }
        }
    };
    ClubProfilePage.prototype.deleteStaff = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Vous venez de supprimer un Staff!',
            message: 'Êtes-vous sûr?',
            buttons: [
                {
                    text: 'Annuler',
                    handler: function () { }
                },
                {
                    text: 'Supprimer',
                    handler: function () {
                        if (_this.club.staff[_this.staffIndex].photo && _this.club.staff[_this.staffIndex].photo.length > 0) {
                            var clubStaffPhotoPath = "club/" + _this.club.key + "/staff/" + _this.staff.key;
                            _this.photoService.deletePhoto(clubStaffPhotoPath);
                        }
                        _this.club.staff.splice(_this.staffIndex, 1);
                        _this.staff = new __WEBPACK_IMPORTED_MODULE_8__models_staff_model__["a" /* Staff */]();
                        _this.staffIndex = -1;
                        _this.staffSlides.update();
                        _this.updateClub();
                    }
                }
            ]
        });
        alert.present();
    };
    ClubProfilePage.prototype.updateClub = function () {
        var _this = this;
        this.clubService.updateClub(this.club).then(function (response) {
            _this.storage.set('currentClub', _this.club);
        }, function (error) {
            console.log(error);
        });
    };
    ClubProfilePage.prototype.presentGalleryPhotoActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Ajouter une photo au galerie',
            buttons: [
                {
                    text: 'Choisir à partir du Gallery',
                    icon: 'md-images',
                    role: 'destructive',
                    handler: function () {
                        _this.photoService.takePhoto(0, null, null).then(function (response) {
                            var newPhoto = new __WEBPACK_IMPORTED_MODULE_7__models_photo_model__["a" /* Photo */]();
                            newPhoto.storagePath = "club/" + _this.club.key + "/gallery/" + new Date().getTime();
                            newPhoto.downloadUrl = "data:image/jpeg;base64," + response;
                            _this.photoService.uploadPhoto(newPhoto.downloadUrl, newPhoto.storagePath).then(function (res) {
                                newPhoto.downloadUrl = res.downloadURL;
                                _this.club.photoGallery = (_this.club.photoGallery && _this.club.photoGallery.length > 0) ? _this.club.photoGallery : [];
                                _this.club.photoGallery.push(newPhoto);
                                if (_this.gallerySlides) {
                                    _this.gallerySlides.update();
                                }
                                _this.updateClub();
                            }, function (err) {
                                console.log(err);
                            });
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
                            var newPhoto = new __WEBPACK_IMPORTED_MODULE_7__models_photo_model__["a" /* Photo */]();
                            newPhoto.storagePath = "club/" + _this.club.key + "/gallery/" + new Date().getTime();
                            newPhoto.downloadUrl = "data:image/jpeg;base64," + response;
                            _this.photoService.uploadPhoto(newPhoto.downloadUrl, newPhoto.storagePath).then(function (res) {
                                newPhoto.downloadUrl = res.downloadURL;
                                _this.club.photoGallery.push(newPhoto);
                                _this.gallerySlides.update();
                                _this.updateClub();
                            }, function (err) {
                                console.log(err);
                            });
                        }, function (error) {
                            console.log(error);
                        });
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ClubProfilePage.prototype.deleteGalleryPhoto = function (index) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Vous venez de supprimer une photo!',
            message: 'Êtes-vous sûr?',
            buttons: [
                {
                    text: 'Annuler',
                    handler: function () { }
                },
                {
                    text: 'Supprimer',
                    handler: function () {
                        _this.photoService.deletePhoto(_this.club.photoGallery[index].storagePath);
                        _this.club.photoGallery.splice(index, 1);
                        _this.gallerySlides.update();
                        _this.updateClub();
                    }
                }
            ]
        });
        alert.present();
    };
    ClubProfilePage.prototype.addContact = function () {
        var _this = this;
        this.club.contacts = (this.club.contacts && this.club.contacts.length > 0) ? this.club.contacts.slice(0) : [];
        this.availableContacts = __WEBPACK_IMPORTED_MODULE_11__consts_available_contacts_constant__["a" /* AVAILABLE_CONTACTS */].slice(0);
        for (var i = 0; i < this.club.contacts.length; i++) {
            for (var j = 0; j < this.availableContacts.length; j++) {
                if (this.club.contacts[i].name === this.getContactName(this.availableContacts[j])) {
                    this.availableContacts.splice(j, 1);
                    break;
                }
            }
        }
        var contactAlertRadioInputs = [];
        this.availableContacts.forEach(function (availableContact) {
            var alertInput = new __WEBPACK_IMPORTED_MODULE_9__models_alert_input_model__["a" /* AlertInput */]();
            alertInput.type = 'radio';
            alertInput.checked = false;
            alertInput.label = availableContact;
            alertInput.value = _this.getContactName(availableContact);
            contactAlertRadioInputs.push(alertInput);
        });
        var alert = this.alertCtrl.create({
            title: 'Choisissez le type du contact à ajouter',
            inputs: contactAlertRadioInputs,
            buttons: [
                {
                    text: 'Annuler',
                    handler: function () { }
                },
                {
                    text: 'Confirmer',
                    handler: function (data) {
                        if (data && data !== undefined) {
                            _this.presentContactValuePrompt(data);
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    ClubProfilePage.prototype.presentContactValuePrompt = function (contactName) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Ajoutez " + this.getContactPlaceholder(contactName),
            inputs: [
                {
                    name: 'value',
                    placeholder: this.getContactPlaceholder(contactName)
                },
            ],
            buttons: [
                {
                    text: 'Annuler',
                    handler: function () { }
                },
                {
                    text: 'Enregistrer',
                    handler: function (data) {
                        if (data.value && data.value !== undefined) {
                            var contact = new __WEBPACK_IMPORTED_MODULE_10__models_contact_model__["a" /* Contact */]();
                            contact.name = contactName;
                            contact.value = data.value;
                            _this.club.contacts.push(contact);
                            _this.updateClub();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    ClubProfilePage.prototype.getContactName = function (contactName) {
        switch (contactName) {
            case 'Telephone': {
                return 'phone';
            }
            default: {
                return contactName.toLowerCase();
            }
        }
    };
    ClubProfilePage.prototype.getContactPlaceholder = function (contactName) {
        switch (contactName) {
            case 'phone': {
                return 'numéro du téléphone';
            }
            case 'email': {
                return 'adresse email';
            }
            default: {
                return "lien " + contactName;
            }
        }
    };
    ClubProfilePage.prototype.getContactIconUrl = function (contactName) {
        return "assets/imgs/" + contactName + "-logo-green.png";
    };
    ClubProfilePage.prototype.updateContact = function (index) {
        var _this = this;
        var contact = new __WEBPACK_IMPORTED_MODULE_10__models_contact_model__["a" /* Contact */]();
        contact = this.club.contacts[index];
        var alert = this.alertCtrl.create({
            title: "Modifier " + this.getContactPlaceholder(contact.name),
            inputs: [
                {
                    name: 'value',
                    value: contact.value,
                    placeholder: this.getContactPlaceholder(contact.name)
                },
            ],
            buttons: [
                {
                    text: 'Annuler',
                    handler: function () { }
                },
                {
                    text: 'Enregistrer',
                    handler: function (data) {
                        if (data.value && data.value !== undefined) {
                            _this.club.contacts[index].value = data.value;
                            _this.updateClub();
                        }
                    }
                },
                {
                    text: 'Supprimer',
                    handler: function (data) {
                        _this.presentContactDeleteAlert(index);
                    }
                }
            ]
        });
        alert.present();
    };
    ClubProfilePage.prototype.presentContactDeleteAlert = function (index) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Vous venez de supprimer un contact!',
            message: 'Êtes-vous sûr?',
            buttons: [
                {
                    text: 'Annuler',
                    handler: function () { }
                },
                {
                    text: 'Supprimer',
                    handler: function () {
                        _this.club.contacts.splice(index, 1);
                        _this.updateClub();
                    }
                }
            ]
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('staffSlides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Slides */])
    ], ClubProfilePage.prototype, "staffSlides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('gallerySlides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Slides */])
    ], ClubProfilePage.prototype, "gallerySlides", void 0);
    ClubProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-club-profile',template:/*ion-inline-start:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\pages\club\club-profile\club-profile.html"*/'<ion-header>\n\n    <ion-navbar hideBackButton color="primary">\n\n        <button ion-button icon-only menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n\n        <ion-title>Vitrine club</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <section id="banner">\n\n        <div class="cover-container" [style.background]="(club.coverPhoto && club.coverPhoto.length > 0) ? \'url(\'+club.coverPhoto+\')\' : \'#00BF9A\'">\n            <img *ngIf="club.coverPhoto && club.coverPhoto.length > 0" src="assets/imgs/transparent.png" [imageViewer]="club.coverPhoto">\n        </div>\n\n        <button ion-button icon-only small clear class="cover-btn" (click)="presentCoverPhotoActionSheet()">\n            <ion-icon ios="md-image" md="md-image"></ion-icon>\n        </button>\n\n        <div class="logo-container" *ngIf="!club.logo || club.logo.length === 0">\n            <img *ngIf="!isAdmin" src="assets/imgs/default-avatar-club.png">\n            <img *ngIf="isAdmin" src="assets/imgs/default-avatar-club.png" (click)="presentLogoActionSheet()">\n        </div>\n\n        <div class="logo-container" *ngIf="club.logo && club.logo.length > 0">\n            <img *ngIf="!isAdmin" [src]="club.logo" imageViewer>\n            <img *ngIf="isAdmin" [src]="club.logo" (click)="presentLogoActionSheet()">\n        </div>\n\n    </section>\n\n    <section id="club-details">\n\n        <div *ngIf="!updateClubDetails" class="wrapper">\n\n            <ion-icon *ngIf="isAdmin" class="update-club-details-btn" ios="md-create" md="md-create" (click)="onUpdateClubDetails()"></ion-icon>\n\n            <div id="club-name">\n                <p>{{club.name}}</p>\n            </div>\n\n            <div *ngIf="foundationYear" id="foundation-year">\n                <p>Fondé en {{foundationYear}}</p>\n            </div>\n\n            <div id="institut">\n                <p>{{club.admin?.institution.institutionName}}</p>\n            </div>\n\n            <div *ngIf="club.tags && club.tags.length > 0" class="tags-container">\n                <div *ngFor="let tag of club.tags" class="tag">\n                    <span class="tag-label">{{tag}}</span>\n                </div>\n            </div>\n\n            <div id="club-presentation">\n                <p>{{club.description}}</p>\n            </div>\n\n        </div>\n\n        <div *ngIf="updateClubDetails" class="wrapper">\n\n            <ion-item class="float-lbl-input">\n                <ion-label floating>Nom du club</ion-label>\n                <ion-input type="text" [(ngModel)]="name"></ion-input>\n            </ion-item>\n\n            <div class="date">\n                <ion-item class="float-lbl-input">\n                    <ion-label floating>Date de fondation du club</ion-label>\n                    <ion-datetime displayFormat="DD MMMM YYYY" pickerFormat="MMMM/DD/YYYY" cancelText="Annuler" doneText="Ok" max="{{currentDate}}" [(ngModel)]="foundationDate"></ion-datetime>\n                </ion-item>\n            </div>\n\n            <ion-item class="float-lbl-input" *ngIf="tags.length < 5">\n                <ion-label floating>Quelques Mots Clés</ion-label>\n                <ion-input type="text" [(ngModel)]="tag"></ion-input>\n                <button clear ion-button item-end color="secondary" icon-only class="input-btn" *ngIf="tag && tag.trim().length>0" (click)="addTag()">\n                    <ion-icon ios="md-add" md="md-add"></ion-icon>\n                </button>\n            </ion-item>\n\n            <div class="tag-update-container" *ngIf="tags && tags.length > 0">\n                <div class="tag" *ngFor="let tag of tags; let i = index;">\n                    <span class="tag-label">{{tag}}</span>\n                    <span class="delete" (click)="deleteTag(i)">&times;</span>\n                </div>\n            </div>\n\n            <ion-item class="float-lbl-input">\n                <ion-label floating>A propos de votre club</ion-label>\n                <ion-textarea autosize autocomplete="on" autocorrect="on" rows="5" [(ngModel)]="description"></ion-textarea>\n            </ion-item>\n\n            <ion-item class="float-lbl-input">\n                <ion-label floating>Combien de membre dans votre club?</ion-label>\n                <ion-input type="number" [(ngModel)]="membersNumber"></ion-input>\n            </ion-item>\n\n            <ion-item class="float-lbl-input">\n                <ion-label floating>Nombre d\'événements</ion-label>\n                <ion-input type="number" [(ngModel)]="eventsNumber"></ion-input>\n            </ion-item>\n\n            <div class="club-details-action-conatiner">\n                <button ion-button color="secondary" round outline (click)="cancelClubDetailsUpdate()">Annuler</button>\n                <button ion-button color="secondary" round (click)="saveClubDetailsUpdate()">Enregistrer</button>\n            </div>\n        </div>\n\n    </section>\n\n    <section id="club-staff">\n\n        <div id="club-numbers">\n\n            <div class="wrapper" [style.padding-bottom]="updateClubDetails ? \'0px\' : \'20px\'">\n\n                <div *ngIf="!updateClubDetails" class="container">\n\n                    <div class="one-third">\n                        <p class="number">\n                            <i class="fas fa-user"></i>\n                            <span *ngIf="club.staff && club.staff.length > 0">{{club.staff?.length}}</span>\n                        </p>\n                        <p class="label">Staff</p>\n                    </div>\n\n                    <div class="one-third separator">\n                        <p class="number">\n                            <i class="fas fa-users"></i>\n                            <span *ngIf="club.membersNumber && club.membersNumber > 0">{{club.membersNumber}}</span>\n                        </p>\n                        <p class="label">Membres</p>\n                    </div>\n\n                    <div class="one-third">\n                        <p class="number">\n                            <i class="far fa-calendar-alt"></i>\n                            <span *ngIf="club.eventsNumber && club.eventsNumber > 0">{{club.eventsNumber}}</span>\n                        </p>\n                        <p class="label">Evénements</p>\n                    </div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n        <div class="wrapper">\n\n            <div *ngIf="club.staff && club.staff.length > 0" class="header">\n                <p *ngIf="isAdmin">Votre Equipe</p>\n                <p *ngIf="!isAdmin">Notre Equipe</p>\n                <ion-icon class="add-staff-btn" *ngIf="isAdmin && staffIndex === -1 && club.staff && club.staff.length > 0" ios="md-add-circle"\n                    md="md-add-circle" (click)="addStaff()"></ion-icon>\n            </div>\n\n            <div *ngIf="(!club.staff || club.staff.length <= 0) && isAdmin" class="club-staff-placeholder" (click)="addStaff()">\n                <ion-icon ios="md-person-add" md="md-person-add"></ion-icon>\n                <p>Ajoutez votre équipe</p>\n            </div>\n\n            <ion-slides #staffSlides *ngIf="club.staff && club.staff.length > 0" class="staff-slides-container" loop="true" slidesPerView="1.5">\n                <ion-slide *ngFor="let clubStaff of club.staff; let i = index;">\n                    <div class="staff-card">\n                        <ion-icon *ngIf="isAdmin && staffIndex !== i" class="update-staff-btn" ios="md-create" md="md-create" (click)="updateStaff(i)"></ion-icon>\n                        <ion-icon *ngIf="isAdmin && staffIndex === i && !isNewStaff" class="delete-staff-btn" ios="md-trash" md="md-trash" (click)="deleteStaff()"></ion-icon>\n                        <div class="card-wrapper">\n                            <div class="staff-photo-container">\n                                <img *ngIf="staffIndex !== i" [src]="(clubStaff.photo && clubStaff.photo.length > 0) ? clubStaff.photo : \'assets/imgs/default-avatar.png\'">\n                                <img *ngIf="staffIndex === i" [src]="(staff.photo && staff.photo.length > 0) ? staff.photo : \'assets/imgs/default-avatar.png\'"\n                                    (click)="presentStaffPhotoActionSheet()">\n                            </div>\n\n                            <div class="staff-details-container" *ngIf="staffIndex !== i">\n                                <div class="staff-details">\n                                    <p class="staff-name">{{clubStaff.staffName}}</p>\n                                    <p class="staff-position">{{clubStaff.responsability}}</p>\n                                </div>\n                            </div>\n\n                            <div class="staff-details-update-form-container" *ngIf="staffIndex === i">\n                                <ion-item class="placeholder-input">\n                                    <ion-input placeholder="Nom du Staff" type="text" [(ngModel)]="staff.staffName"></ion-input>\n                                </ion-item>\n\n                                <ion-item class="placeholder-input">\n                                    <ion-input placeholder="Résponsabilité" type="text" [(ngModel)]="staff.responsability"></ion-input>\n                                </ion-item>\n                            </div>\n                        </div>\n                    </div>\n                </ion-slide>\n            </ion-slides>\n\n            <div class="staff-action-conatiner" *ngIf="staffIndex !== -1">\n                <button ion-button color="secondary" round small outline (click)="cancelStaffUpdate()">Annuler</button>\n                <button ion-button color="secondary" round small (click)="saveStaffUpdate()">Enregistrer</button>\n            </div>\n\n        </div>\n\n    </section>\n\n    <section id="club-gallery">\n\n        <div *ngIf="club.photoGallery && club.photoGallery.length > 0" class="header">\n            <p>Galerie</p>\n            <ion-icon class="add-photo-btn" *ngIf="isAdmin && club.photoGallery && club.photoGallery.length > 0" ios="md-add-circle"\n                md="md-add-circle" (click)="presentGalleryPhotoActionSheet()"></ion-icon>\n        </div>\n\n        <div *ngIf="(!club.photoGallery || club.photoGallery.length <= 0) && isAdmin" class="photo-gallery-placeholder" (click)="presentGalleryPhotoActionSheet()">\n            <ion-icon ios="md-images" md="md-images"></ion-icon>\n            <p>Ajoutez des photos à votre galerie</p>\n        </div>\n\n        <ion-slides *ngIf="club.photoGallery && club.photoGallery.length > 0" #gallerySlides class="gallery-slides-container" loop="true"\n            slidesPerView="2">\n            <ion-slide *ngFor="let photo of club.photoGallery; let i = index;">\n                <ion-icon *ngIf="isAdmin" class="delete-photo-btn" ios="md-trash" md="md-trash" (click)="deleteGalleryPhoto(i)"></ion-icon>\n                <img [src]="photo.downloadUrl" class="thumb-img" imageViewer>\n            </ion-slide>\n        </ion-slides>\n\n    </section>\n\n    <section id="club-contact">\n\n        <div class="wrapper">\n\n            <ion-icon class="add-contact-btn" *ngIf="isAdmin && club.contacts && club.contacts.length > 0 && club.contacts.length < 5" ios="md-add-circle" md="md-add-circle" (click)="addContact()"></ion-icon>\n\n            <div class="header" *ngIf="club.contacts && club.contacts.length > 0">\n                <p *ngIf="isAdmin">Vos Contacts</p>\n                <p *ngIf="!isAdmin">Nous Contacter</p>\n            </div>\n\n            <div class="contact-list" *ngIf="club.contacts && club.contacts.length > 0">\n                <ul>\n                    <li *ngFor="let contact of club.contacts; let i = index;">\n                        <img *ngIf="!isAdmin" [src]="getContactIconUrl(contact.name)">\n                        <img *ngIf="isAdmin" [src]="getContactIconUrl(contact.name)" (click)="updateContact(i)">\n                    </li>\n                </ul>\n            </div>\n\n            <div *ngIf="isAdmin && (!club.contacts || club.contacts.length <= 0)" class="contact-placeholder" (click)="addContact()">\n                <ion-icon ios="md-chatbubbles" md="md-chatbubbles"></ion-icon>\n                <p>Ajoutez vos contacts</p>\n            </div>\n        </div>\n\n    </section>\n\n</ion-content>'/*ion-inline-end:"C:\Users\ghofrane\Desktop\ionicTest\MyCampus-master\MyCampus-master\src\pages\club\club-profile\club-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_side_menu_controller_service__["a" /* SideMenuControllerService */],
            __WEBPACK_IMPORTED_MODULE_4__services_club_service__["a" /* ClubService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_5__services_photo_service__["a" /* PhotoService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ClubProfilePage);
    return ClubProfilePage;
}());

//# sourceMappingURL=club-profile.js.map

/***/ }),

/***/ 925:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Staff; });
var Staff = (function () {
    function Staff() {
    }
    return Staff;
}());

//# sourceMappingURL=staff.model.js.map

/***/ }),

/***/ 926:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertInput; });
var AlertInput = (function () {
    function AlertInput() {
    }
    return AlertInput;
}());

//# sourceMappingURL=alert-input.model.js.map

/***/ }),

/***/ 927:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contact; });
var Contact = (function () {
    function Contact() {
    }
    return Contact;
}());

//# sourceMappingURL=contact.model.js.map

/***/ }),

/***/ 928:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AVAILABLE_CONTACTS; });
var AVAILABLE_CONTACTS = [
    'Facebook',
    'Linkedin',
    'Twitter',
    'Telephone',
    'Email'
];
//# sourceMappingURL=available-contacts.constant.js.map

/***/ })

});
//# sourceMappingURL=16.js.map