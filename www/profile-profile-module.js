(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-text-center\">\r\n            Profil\r\n    </ion-title>\r\n      <ion-toggle checked slot=\"end\">\r\n      <ion-icon name=\"moon\" slot=\"end\"></ion-icon>\r\n    </ion-toggle> \r\n  </ion-toolbar>\r\n  <ion-item class=\"ion-text-center\">\r\n    <ion-item>\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"./assets/img/a4cdbb2e20df441931275b8acaebd5d0.jpg\">\r\n      </ion-avatar>\r\n      <ion-label>Photo profil</ion-label>\r\n    </ion-item>\r\n    <ion-label>Nb Badges</ion-label>\r\n    <ion-badge slot=\"end\">22</ion-badge>\r\n  </ion-item>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item>\r\n    <ion-label>\r\n      <p>Méthode de connexion</p>\r\n      <h2><b>{{ method }}</b></h2>\r\n    </ion-label>\r\n  </ion-item>\r\n  \r\n  <ion-item>\r\n    <ion-label>\r\n      <p>Identifiant</p>\r\n      <h2><b>{{ userId }}</b></h2>\r\n    </ion-label>\r\n  </ion-item>\r\n  \r\n  <ion-item>\r\n    <ion-label>\r\n      <p>Adresse email</p>\r\n      <h2><b>{{ mail }}</b></h2>\r\n    </ion-label>\r\n  </ion-item>\r\n  \r\n  <div class=\"ion-padding\">\r\n    <ion-button expand=\"block\" color=\"danger\" (click)=\"logout()\" [routerLink]=\"['/tabs/login']\" >Déconnexion</ion-button>\r\n  </div>\r\n\r\n  \r\n<!-- Input with value\r\n<ion-input value=\"custom\"></ion-input>\r\n -->\r\n<!-- Input with placeholder \r\n<ion-input placeholder=\"Enter Input\"></ion-input>\r\n-->\r\n<!-- Input with clear button when there is a value\r\n<ion-input clearInput value=\"clear me\"></ion-input>\r\n -->\r\n<!-- Number type input\r\n<ion-input type=\"number\" value=\"333\"></ion-input>\r\n -->\r\n<!-- Disabled input\r\n<ion-input value=\"Disabled\" disabled></ion-input>\r\n -->\r\n<!-- Readonly input\r\n<ion-input value=\"Readonly\" readonly></ion-input>\r\n -->\r\n<form  *ngIf=\"!connected\">\r\n<ion-item  color=\"success\">\r\n  <ion-label position=\"floating\" class=\"ion-text-center\">Création du compte</ion-label>\r\n  <ion-input placeholder=\"Pseudo\" color=\"dark\"></ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label position=\"floating\" >Prénom</ion-label>\r\n  <ion-input aria-required=\"name\"></ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label position=\"floating\">Age</ion-label>\r\n  <ion-input aria-required=\"name\"></ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label position=\"floating\">email</ion-label>\r\n  <ion-input aria-required=\"email\"></ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label position=\"floating\">Mot de passe</ion-label>\r\n  <ion-input required=\"password\"></ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label position=\"floating\">confirmer votre mot de passe</ion-label>\r\n  <ion-input aria-required=\"password\"></ion-input>\r\n</ion-item>\r\n  <ion-button (click)=\"connected\" aria-expanded=\"block\" slot=\"end\">\r\n    C'est parti !!\r\n  </ion-button>\r\n</form>\r\n\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");







var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"] }])
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");



var ProfilePage = /** @class */ (function () {
    //private badge: Badge;
    function ProfilePage(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        this.afAuth.authState.subscribe(function (auth) {
            if (!auth) {
                console.log('non connecté');
            }
            else {
                console.log('connecté: ' + auth.uid);
                _this.userId = auth.uid;
                _this.mail = auth.email;
                _this.method = auth.providerData[0].providerId;
                _this.badge.set();
                _this.badge.increase();
                _this.badge.clear();
            }
        });
    }
    ProfilePage.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    ProfilePage.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
    ]; };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map