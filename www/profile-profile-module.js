(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/@ionic-native/badge/ngx/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@ionic-native/badge/ngx/index.js ***!
  \*******************************************************/
/*! exports provided: Badge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Badge", function() { return Badge; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");



var Badge = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Badge, _super);
    function Badge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Badge.prototype.clear = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "clear", {}, arguments); };
    Badge.prototype.set = function (badgeNumber) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "set", {}, arguments); };
    Badge.prototype.get = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "get", {}, arguments); };
    Badge.prototype.increase = function (increaseBy) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "increase", {}, arguments); };
    Badge.prototype.decrease = function (decreaseBy) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "decrease", {}, arguments); };
    Badge.prototype.isSupported = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isSupported", {}, arguments); };
    Badge.prototype.hasPermission = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "hasPermission", {}, arguments); };
    Badge.prototype.requestPermission = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "requestPermission", {}, arguments); };
    Badge.pluginName = "Badge";
    Badge.plugin = "cordova-plugin-badge";
    Badge.pluginRef = "cordova.plugins.notification.badge";
    Badge.repo = "https://github.com/katzer/cordova-plugin-badge";
    Badge.platforms = ["Android", "Browser", "iOS", "Windows"];
    Badge = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Badge);
    return Badge;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JhZGdlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQThCN0MseUJBQWlCOzs7O0lBTTFDLHFCQUFLO0lBVUwsbUJBQUcsYUFBQyxXQUFtQjtJQVN2QixtQkFBRztJQVVILHdCQUFRLGFBQUMsVUFBa0I7SUFVM0Isd0JBQVEsYUFBQyxVQUFrQjtJQVMzQiwyQkFBVztJQVNYLDZCQUFhO0lBU2IsaUNBQWlCOzs7Ozs7SUF4RU4sS0FBSztRQURqQixVQUFVLEVBQUU7T0FDQSxLQUFLO2dCQS9CbEI7RUErQjJCLGlCQUFpQjtTQUEvQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgQmFkZ2VcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIGVzc2VudGlhbCBwdXJwb3NlIG9mIGJhZGdlIG51bWJlcnMgaXMgdG8gZW5hYmxlIGFuIGFwcGxpY2F0aW9uIHRvIGluZm9ybSBpdHMgdXNlcnMgdGhhdCBpdCBoYXMgc29tZXRoaW5nIGZvciB0aGVtIOKAlCBmb3IgZXhhbXBsZSwgdW5yZWFkIG1lc3NhZ2VzIOKAlCB3aGVuIHRoZSBhcHBsaWNhdGlvbiBpc27igJl0IHJ1bm5pbmcgaW4gdGhlIGZvcmVncm91bmQuXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGNvcmRvdmEtcGx1Z2luLWJhZGdlLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbQmFkZ2UgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9rYXR6ZXIvY29yZG92YS1wbHVnaW4tYmFkZ2UpLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQmFkZ2UgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2JhZGdlL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBiYWRnZTogQmFkZ2UpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuYmFkZ2Uuc2V0KDEwKTtcbiAqIHRoaXMuYmFkZ2UuaW5jcmVhc2UoMSk7XG4gKiB0aGlzLmJhZGdlLmNsZWFyKCk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdCYWRnZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWJhZGdlJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLm5vdGlmaWNhdGlvbi5iYWRnZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20va2F0emVyL2NvcmRvdmEtcGx1Z2luLWJhZGdlJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnV2luZG93cyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJhZGdlIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ2xlYXIgdGhlIGJhZGdlIG9mIHRoZSBhcHAgaWNvbi5cbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNsZWFyKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGJhZGdlIG9mIHRoZSBhcHAgaWNvbi5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGJhZGdlTnVtYmVyICBUaGUgbmV3IGJhZGdlIG51bWJlci5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0KGJhZGdlTnVtYmVyOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGJhZGdlIG9mIHRoZSBhcHAgaWNvbi5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEluY3JlYXNlIHRoZSBiYWRnZSBudW1iZXIuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmNyZWFzZUJ5ICBDb3VudCB0byBhZGQgdG8gdGhlIGN1cnJlbnQgYmFkZ2UgbnVtYmVyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGluY3JlYXNlKGluY3JlYXNlQnk6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERlY3JlYXNlIHRoZSBiYWRnZSBudW1iZXIuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkZWNyZWFzZUJ5ICBDb3VudCB0byBzdWJ0cmFjdCBmcm9tIHRoZSBjdXJyZW50IGJhZGdlIG51bWJlclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBkZWNyZWFzZShkZWNyZWFzZUJ5OiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBzdXBwb3J0IHRvIHNob3cgYmFkZ2VzLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc1N1cHBvcnRlZCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgdGhlIGFwcCBoYXMgcGVybWlzc2lvbiB0byBzaG93IGJhZGdlcy5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaGFzUGVybWlzc2lvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBwZXJtaXNzaW9uIHRvIHNldCBiYWRnZSBub3RpZmljYXRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlcXVlc3RQZXJtaXNzaW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/profile/profile.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/profile/profile.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-header class=\"ion-padding\" color=\"-ion-primary\">\r\n  <div class=\"followings\">\r\n    <ion-avatar>\r\n      <img src=\"./assets/icon/logo.jpg\" class=\"avatarProfile\">\r\n    </ion-avatar>\r\n  </div>\r\n    <ion-title class=\"ion-text-center\">\r\n            Profil\r\n    </ion-title>\r\n    <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" class=\"outils\">\r\n\r\n      <ion-toggle checked slot=\"end\">\r\n      <ion-icon name=\"moon\" slot=\"end\"></ion-icon>\r\n    </ion-toggle>\r\n    \r\n<ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\">\r\n      <ion-fab-button>\r\n        <img src=\"./assets/icon/logoProfile.ico\" alt=\"Profil\">\r\n      </ion-fab-button>\r\n      <ion-fab-list side=\"bottom\">\r\n        <ion-fab-button><ion-icon name=\"log-out\" color=\"danger\" (click)=\"logout()\" [routerLink]=\"['/tabs/login']\"></ion-icon></ion-fab-button>\r\n      </ion-fab-list>\r\n      <ion-fab-list side=\"end\">\r\n        <ion-fab-button (click)=\"addPhoto('library')\" color=\"tertiary\"><ion-icon name=\"image\">Bibliothèque</ion-icon></ion-fab-button>\r\n      </ion-fab-list>\r\n</ion-fab>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <!-- <ion-item>\r\n    <ion-label>\r\n      <p>Méthode de connexion</p>\r\n      <h2><b>{{ method }}</b></h2>\r\n    </ion-label>\r\n  </ion-item>\r\n  \r\n  <ion-item>\r\n    <ion-label>\r\n      <p>Identifiant</p>\r\n      <h2><b>{{ userId }}</b></h2>\r\n    </ion-label>\r\n  </ion-item>\r\n  \r\n  <ion-item>\r\n    <ion-label>\r\n      <p>Adresse email</p>\r\n      <h2><b>{{ mail }}</b></h2>\r\n    </ion-label>\r\n  </ion-item>\r\n  \r\n  <div class=\"ion-padding\">\r\n    \r\n  </div> -->\r\n  <ion-header>\r\n    <h2 class=\"ion-text-center\">Elon Musk</h2>\r\n    <div class=\"space-between\">\r\n      <div class=\"followings\">\r\n        <ion-badge color=\"primary\" mode=\"ios\">46</ion-badge>\r\n        <p>Badges</p>\r\n      </div>\r\n      <div class=\"followings\">\r\n        <ion-avatar>\r\n          <img src=\"./assets/img/a4cdbb2e20df441931275b8acaebd5d0.jpg\" class=\"avatarProfile\">\r\n        </ion-avatar>\r\n      </div>\r\n      <div class=\"followings\">\r\n        <ion-badge color=\"primary\" mode=\"ios\">102</ion-badge>\r\n        <p>QR Codes\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </ion-header>  \r\n  <div class=\"space-between\">\r\n    <ion-button class=\"space-between3\"><ion-icon name=\"scanner\"></ion-icon></ion-button>\r\n    <ion-button class=\"space-between2\"><ion-icon name=\"scanner\"></ion-icon></ion-button>\r\n    <ion-button class=\"space-between3\"><ion-icon name=\"scanner\"></ion-icon></ion-button>\r\n  </div>\r\n\r\n<ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\r\n\r\n<!--------------Envoi de l'image function upload---------------------------------------------->\r\n<div>\r\n    <div>\r\n      <img src=\"\" alt=\"image\">\r\n    </div>\r\n    <ion-button expand=\"block\" color=\"warning\" (click)=\"uploadFirebase()\">\r\n      <ion-icon slot=\"start\" name=\"cloud-upload\">Envoyer</ion-icon>\r\n    </ion-button>\r\n</div>\r\n<!--------------Envoi de l'image function upload---------------------------------------------->\r\n\r\n<ion-grid color=\"dark\" class=\"ion-align\">\r\n  <ion-row size=\"2\" offset=\"2\">\r\n    <ion-row>\r\n      <ion-button expand=\"flex\" (click)=\"scheduleNotification()\">Shedule</ion-button>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-button expand=\"flex\" (click)=\"recurringNotification()\">Every Minute</ion-button>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-button expand=\"flex\" (click)=\"repeatingDaily()\">Daily</ion-button>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-button expand=\"flex\" (click)=\"getAll()\">Shedule</ion-button>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-button expand=\"flex\" (click)=\"getAll()\">Journal de bord</ion-button>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-button expand=\"flex\" (click)=\"getAll()\">Evènements</ion-button>\r\n    </ion-row>\r\n  </ion-row>\r\n</ion-grid>\r\n\r\n<!-- <ion-list>\r\n  <ion-item *ngFor=\"let n of scheduled\">\r\n    <ion-label text-wrap>\r\n      {{ n.id }} -- {{ n.title }}\r\n      <p>Trigger: {{ n.trigger | json }} </p>\r\n    </ion-label>\r\n  </ion-item>\r\n</ion-list>-->\r\n\r\n\r\n  <ion-card>\r\n    <ion-item lines=\"none\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"../assets/img/a4cdbb2e20df441931275b8acaebd5d0.jpg\" />\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2><b>Elon Musk</b></h2>\r\n        <p>Il y a 14 heures</p>\r\n      </ion-label>\r\n    </ion-item>\r\n    \r\n \r\n    <ion-item lines=\"none\" class=\"tweet\">\r\n      <ion-label text-wrap>Production version will be a lot more polished than this prototype, but still fun to see</ion-label>\r\n    </ion-item>\r\n </ion-card>\r\n <ion-card>\r\n  <img class=\"tweet-img\" src=\"../assets/img/n.jfif\">\r\n </ion-card>\r\n <ion-card>\r\n  <img class=\"tweet-img\" src=\"../assets/img/htdx.jfif\">\r\n </ion-card>\r\n <ion-item lines=\"none\">\r\n  <ion-avatar slot=\"start\">\r\n    <img src=\"../assets/img/a4cdbb2e20df441931275b8acaebd5d0.jpg\" />\r\n  </ion-avatar>\r\n  <ion-label>\r\n    <h2><b>Elon Musk</b></h2>\r\n    <p>Il y a 5 minutes</p>\r\n  </ion-label>\r\n</ion-item>\r\n    <ion-item lines=\"none\" class=\"tweet\">\r\n      <ion-label text-wrap>Le temps est venu, alors changeons le !</ion-label>\r\n    </ion-item>\r\n\r\n<ion-card *ngFor=\"let image of images\">\r\n  <ion-img [src]=\"image.url\" ></ion-img>\r\n  <ion-card-header><h2>Hey</h2>\r\n    <ion-card-subtitle> {{ image.name }}</ion-card-subtitle>\r\n  </ion-card-header>\r\n</ion-card>\r\n\r\n\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/page/profile/profile.module.ts":
/*!************************************************!*\
  !*** ./src/app/page/profile/profile.module.ts ***!
  \************************************************/
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
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/page/profile/profile.page.ts");







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

/***/ "./src/app/page/profile/profile.page.scss":
/*!************************************************!*\
  !*** ./src/app/page/profile/profile.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  --ion-background-color: black;\n}\n\nion-header {\n  --ion-background-color: var(--ion-color-dark);\n}\n\nion-header {\n  --ion-background-color: linear-gradient(#76b852, #8DC26F);\n}\n\n.header {\n  height: 180px;\n  background-color: #03A9F4;\n  width: 100%;\n  padding-top: 1px;\n}\n\n.header h2 {\n  color: white;\n  text-align: center;\n  font-weight: bold;\n}\n\n.space-between {\n  display: flex;\n  justify-content: space-between;\n}\n\n.space-between2 {\n  width: 89px;\n  display: -ms-grid;\n}\n\n.followings {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.followings p {\n  color: white;\n  margin: 8px 0px 0px 0px;\n}\n\n.img-box {\n  border-radius: 50%;\n  overflow: hidden;\n  height: 233px;\n  width: 233px;\n}\n\n.border-white {\n  border: white solid 4px;\n  border-radius: 50%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.border-blue {\n  border: 7px solid #006bbf;\n  border-radius: 50%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.flex {\n  display: flex;\n  justify-content: center;\n  margin-top: -76px;\n}\n\n.tweet ion-label {\n  line-height: 1 !important;\n  font-size: 15px;\n  margin: 6px 0px 6px 0px !important;\n  min-height: 34px;\n}\n\n.tweet {\n  margin-top: -10px !important;\n}\n\n.tweet-img {\n  border-radius: 13px;\n  width: 95%;\n  margin-left: 2.5%;\n}\n\n.titleProfile {\n  margin-left: 55px;\n  margin-bottom: -34px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9wcm9maWxlL0M6XFxVc2Vyc1xcQ2hlQmVuXFxPbmVEcml2ZVxcQnVyZWF1XFxQcm9qZXQgTnVtw6lyaXF1ZXNcXFByb2pldCBJT05JQ1xcUHJvamV0IEFwcFNcXExvY2FsU2hvcFxcRW4gY291clxcTG9jYWxTaG9wQXBwMVxcTG9jYWxTaG9wQXBwMVxcQXBwMS9zcmNcXGFwcFxccGFnZVxccHJvZmlsZVxccHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2UvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLDZCQUFBO0FDQUo7O0FER0E7RUFDQyw2Q0FBQTtBQ0FEOztBRElBO0VBQ0kseURBQUE7QUNESjs7QURHQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQ0VKOztBREFBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FDR0o7O0FEQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0dKOztBRERBO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0FDSUo7O0FERkE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNLSjs7QURIQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUNNSjs7QURIQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUNNSjs7QURKQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FDT0o7O0FETEE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0FDUUo7O0FETkE7RUFDSSw0QkFBQTtBQ1NKOztBRFBBO0VBQ0ksbUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNVSjs7QURSQTtFQUNDLGlCQUFBO0VBQ0Esb0JBQUE7QUNXRCIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24taGVhZGVyIHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5pb24taGVhZGVye1xyXG5cdC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxufVxyXG5cclxuXHJcbmlvbi1oZWFkZXIge1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KCM3NmI4NTIsICM4REMyNkYpO1xyXG59XHJcbi5oZWFkZXIge1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwM0E5RjQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbn1cclxuLmhlYWRlciBoMiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uc3BhY2UtYmV0d2VlbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5zcGFjZS1iZXR3ZWVuMiB7XHJcbiAgICB3aWR0aDogODlweDtcclxuICAgIGRpc3BsYXk6IC1tcy1ncmlkO1xyXG59XHJcblxyXG4uZm9sbG93aW5ncyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmZvbGxvd2luZ3MgcCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDhweCAwcHggMHB4IDBweDtcclxufVxyXG4uaW1nLWJveCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiAyMzNweDtcclxuICAgIHdpZHRoOiAyMzNweDtcclxufVxyXG4uYm9yZGVyLXdoaXRlIHtcclxuICAgIGJvcmRlcjogd2hpdGUgc29saWQgNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG4uYm9yZGVyLWJsdWUge1xyXG4gICAgYm9yZGVyOiA3cHggc29saWQgIzAwNmJiZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxufVxyXG4uZmxleCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAtNzZweDtcclxufVxyXG4udHdlZXQgaW9uLWxhYmVsIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbjogNnB4IDBweCA2cHggMHB4IWltcG9ydGFudDtcclxuICAgIG1pbi1oZWlnaHQ6IDM0cHg7XHJcbn1cclxuLnR3ZWV0IHtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4IWltcG9ydGFudDtcclxufVxyXG4udHdlZXQtaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIuNSU7XHJcbn1cclxuLnRpdGxlUHJvZmlsZSB7XHJcbiBtYXJnaW4tbGVmdDogNTVweDtcclxuIG1hcmdpbi1ib3R0b206IC0zNHB4O1xyXG59XHJcblxyXG5cclxuLy8gICAuaW1nLWJveCB7XHJcbi8vICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4vLyAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuLy8gICB9XHJcbi8vICAgaW1nIHtcclxuLy8gICAgIGhlaWdodDogMjAwcHg7XHJcbi8vICAgfVxyXG4iLCJpb24taGVhZGVyIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoIzc2Yjg1MiwgIzhEQzI2Rik7XG59XG5cbi5oZWFkZXIge1xuICBoZWlnaHQ6IDE4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDNBOUY0O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDFweDtcbn1cblxuLmhlYWRlciBoMiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNwYWNlLWJldHdlZW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5zcGFjZS1iZXR3ZWVuMiB7XG4gIHdpZHRoOiA4OXB4O1xuICBkaXNwbGF5OiAtbXMtZ3JpZDtcbn1cblxuLmZvbGxvd2luZ3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZm9sbG93aW5ncyBwIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDhweCAwcHggMHB4IDBweDtcbn1cblxuLmltZy1ib3gge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMjMzcHg7XG4gIHdpZHRoOiAyMzNweDtcbn1cblxuLmJvcmRlci13aGl0ZSB7XG4gIGJvcmRlcjogd2hpdGUgc29saWQgNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuLmJvcmRlci1ibHVlIHtcbiAgYm9yZGVyOiA3cHggc29saWQgIzAwNmJiZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IC03NnB4O1xufVxuXG4udHdlZXQgaW9uLWxhYmVsIHtcbiAgbGluZS1oZWlnaHQ6IDEgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW46IDZweCAwcHggNnB4IDBweCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAzNHB4O1xufVxuXG4udHdlZXQge1xuICBtYXJnaW4tdG9wOiAtMTBweCAhaW1wb3J0YW50O1xufVxuXG4udHdlZXQtaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgd2lkdGg6IDk1JTtcbiAgbWFyZ2luLWxlZnQ6IDIuNSU7XG59XG5cbi50aXRsZVByb2ZpbGUge1xuICBtYXJnaW4tbGVmdDogNTVweDtcbiAgbWFyZ2luLWJvdHRvbTogLTM0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/page/profile/profile.page.ts":
/*!**********************************************!*\
  !*** ./src/app/page/profile/profile.page.ts ***!
  \**********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _ionic_native_badge_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/badge/ngx */ "./node_modules/@ionic-native/badge/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");








// ========================================================//
// ========================================================//
var ProfilePage = /** @class */ (function () {
    // ========================================================//
    function ProfilePage(afAuth, badge, afDB, afSG, loadingController, alertController, camera) {
        var _this = this;
        this.afAuth = afAuth;
        this.afDB = afDB;
        this.afSG = afSG;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.camera = camera;
        this.image = 'https://www.kasterencultuur.nl/editor/placeholder.jpg';
        this.images = [];
        this.getImagesDatabase();
        this.afAuth.authState.subscribe(function (auth) {
            if (!auth) {
                console.log('non connecté');
            }
            else {
                console.log('connecté: ' + auth.uid);
                _this.userId = auth.uid;
                _this.mail = auth.email;
                _this.method = auth.providerData[0].providerId;
                // this.badge.set();
                // this.badge.increase();
                // this.badge.clear();
            }
            _this.plt.ready().then(function () {
                _this.localNotification.on('click').subscribe(function (res) {
                });
                _this.localNotification.on('trigger').subscribe(function (res) {
                });
            });
        });
    }
    //========================================================//
    ProfilePage.prototype.getImagesDatabase = function () {
        var _this = this;
        this.afDB.list('images').snapshotChanges(['child_added']).subscribe(function (images) {
            console.log(images);
            images.forEach(function (image) {
                // tslint:disable-next-line:comment-format
                //console.log('Reference image: ' + image.payload.exportVal().name);
                _this.getImagesStorage(image);
            });
        });
    };
    //========================================================//
    //========================================================//    
    ProfilePage.prototype.getImagesStorage = function (image) {
        var _this = this;
        var imgRef = image.payload.exportVal().ref;
        // pour récupérer l'URL des images
        this.afSG.ref(imgRef).getDownloadURL().subscribe(function (imgUrl) {
            console.log(imgUrl);
            _this.images.push({
                name: image.payload.exportVal().name,
                url: imgUrl
            });
        });
    };
    //========================================================//
    //========================================================//
    // tslint:disable-next-line:semicolon
    ProfilePage.prototype.addPhoto = function (source) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var libraryImage, cameraImage;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(source === 'library')) return [3 /*break*/, 2];
                        console.log('library');
                        return [4 /*yield*/, this.openLibrary()];
                    case 1:
                        libraryImage = _a.sent();
                        this.image = 'data:image/jpg;base64,' + libraryImage;
                        return [3 /*break*/, 4];
                    case 2:
                        console.log('camera');
                        return [4 /*yield*/, this.openCamera()];
                    case 3:
                        cameraImage = _a.sent();
                        this.image = 'data:image/jpg;base64,' + cameraImage;
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // ========================================================//
    // ========================================================//
    ProfilePage.prototype.openCamera = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var options;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            quality: 100,
                            destinationType: this.camera.DestinationType.DATA_URL,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE,
                            targetWidth: 1000,
                            targetHeight: 1000,
                            sourceType: this.camera.PictureSourceType.CAMERA
                        };
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // ========================================================//
    // ========================================================//
    ProfilePage.prototype.openLibrary = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var options;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            quality: 100,
                            destinationType: this.camera.DestinationType.DATA_URL,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE,
                            targetWidth: 1000,
                            targetHeight: 1000,
                            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
                        };
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // ========================================================//
    // ========================================================//
    ProfilePage.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    // ========================================================//
    // ================Function UpLoad_FireBase========================================//
    ProfilePage.prototype.uploadFirebase = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create()];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.imagePath = 'Images/User/img/' + new Date().getTime() + '.jpg';
                        this.upload = this.afSG.ref(this.imagePath).putString(this.image, 'data_url');
                        // ==========================================================//
                        // ===============Alert par message==========================================//
                        this.upload.then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var alert;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        this.image = 'https://www.kasterencultuur.nl/editor/placeholder.jpg';
                                        return [4 /*yield*/, loading.dismiss()];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, this.alertController.create({
                                                header: 'Bravo',
                                                message: 'Votre photo est bien enregistrer.',
                                                buttons: ['OK']
                                            })];
                                    case 2:
                                        alert = _a.sent();
                                        return [4 /*yield*/, alert.present()];
                                    case 3:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
        { type: _ionic_native_badge_ngx__WEBPACK_IMPORTED_MODULE_4__["Badge"] },
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] },
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"] }
    ]; };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/profile/profile.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.page.scss */ "./src/app/page/profile/profile.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _ionic_native_badge_ngx__WEBPACK_IMPORTED_MODULE_4__["Badge"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map