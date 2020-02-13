(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n <ion-toolbar>\r\n   <ion-title class=\"ion-text-center\">\r\n            Profil\r\n    </ion-title>\r\n\r\n      <ion-toggle checked slot=\"end\">\r\n      <ion-icon name=\"moon\" slot=\"end\"></ion-icon>\r\n    </ion-toggle>\r\n</ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  \r\n  <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\">\r\n    <ion-fab-button>\r\n      <ion-icon name=\"share\"></ion-icon>\r\n    </ion-fab-button>\r\n    <ion-fab-list side=\"top\">\r\n      <ion-fab-button><ion-icon name=\"log-out\" color=\"danger\" (click)=\"logout()\" [routerLink]=\"['/tabs/login']\"></ion-icon></ion-fab-button>\r\n    </ion-fab-list>\r\n    <ion-fab-list side=\"bottom\">\r\n      <ion-fab-button (click)=\"addPhoto('camera')\" color=\"primary\"><ion-icon name=\"camera\">Camera</ion-icon></ion-fab-button>\r\n    </ion-fab-list>\r\n    <ion-fab-list side=\"end\">\r\n      <ion-fab-button (click)=\"addPhoto('library')\" color=\"tertiary\"><ion-icon name=\"image\">Bibliothèque</ion-icon></ion-fab-button>\r\n    </ion-fab-list>\r\n  </ion-fab>\r\n  <!-- <ion-item>\r\n    <ion-label>\r\n      <p>Méthode de connexion</p>\r\n      <h2><b>{{ method }}</b></h2>\r\n    </ion-label>\r\n  </ion-item>\r\n  \r\n  <ion-item>\r\n    <ion-label>\r\n      <p>Identifiant</p>\r\n      <h2><b>{{ userId }}</b></h2>\r\n    </ion-label>\r\n  </ion-item>\r\n  \r\n  <ion-item>\r\n    <ion-label>\r\n      <p>Adresse email</p>\r\n      <h2><b>{{ mail }}</b></h2>\r\n    </ion-label>\r\n  </ion-item>\r\n  \r\n  <div class=\"ion-padding\">\r\n    \r\n  </div> -->\r\n  <div class=\"header\">\r\n    <h2>Elon Musk</h2>\r\n    <div class=\"space-between\">\r\n      <div class=\"followings\">\r\n        <ion-badge color=\"primary\" mode=\"ios\">42</ion-badge>\r\n        <p>Badges</p>\r\n      </div>\r\n      <div class=\"followings\">\r\n        <ion-avatar>\r\n          <img src=\"./assets/img/a4cdbb2e20df441931275b8acaebd5d0.jpg\">\r\n        </ion-avatar>\r\n      </div>\r\n      <div class=\"followings\">\r\n        <ion-badge color=\"primary\" mode=\"ios\">42</ion-badge>\r\n        <p>QR Codes\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n<ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\r\n  \r\n<div>\r\n    <div>\r\n      <img [src]=\"image\" alt=\"image\">\r\n    </div>\r\n    <ion-button expand=\"block\" color=\"warning\" (click)=\"uploadFirebase()\">\r\n      <ion-icon slot=\"start\" name=\"cloud-upload\">Envoyer</ion-icon>\r\n    </ion-button>\r\n  </div>\r\n\r\n\r\n  <ion-card>\r\n    <ion-item lines=\"none\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"../assets/img/a4cdbb2e20df441931275b8acaebd5d0.jpg\" />\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2><b>Elon Musk</b></h2>\r\n        <p>Il y a 14 heures</p>\r\n      </ion-label>\r\n    </ion-item>\r\n    \r\n \r\n    <ion-item lines=\"none\" class=\"tweet\">\r\n      <ion-label text-wrap>Production version will be a lot more polished than this prototype, but still fun to see</ion-label>\r\n    </ion-item>\r\n </ion-card>\r\n \r\n \r\n <ion-card>\r\n  <img class=\"tweet-img\" src=\"../assets/img/n.jfif\">\r\n </ion-card>\r\n <ion-card>\r\n  <img class=\"tweet-img\" src=\"../assets/img/htdx.jfif\">\r\n </ion-card>\r\n <ion-item lines=\"none\">\r\n  <ion-avatar slot=\"start\">\r\n    <img src=\"../assets/img/a4cdbb2e20df441931275b8acaebd5d0.jpg\" />\r\n  </ion-avatar>\r\n  <ion-label>\r\n    <h2><b>Elon Musk</b></h2>\r\n    <p>Il y a 5 minutes</p>\r\n  </ion-label>\r\n</ion-item>\r\n    <ion-item lines=\"none\" class=\"tweet\">\r\n      <ion-label text-wrap>Le temps est venu, alors changeons le !</ion-label>\r\n    </ion-item>\r\n</ion-content>\r\n");

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  --ion-background-color: black;\n}\n\nion-header {\n  --ion-background-color: var(--ion-color-dark);\n}\n\nion-header {\n  --ion-background-color: linear-gradient(#76b852, #8DC26F);\n}\n\n.header {\n  height: 180px;\n  background-color: #03A9F4;\n  width: 100%;\n  padding-top: 1px;\n}\n\n.header h2 {\n  color: white;\n  text-align: center;\n  font-weight: bold;\n}\n\n.space-between {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 10px 10px 0px 10px;\n}\n\n.followings {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.followings p {\n  color: white;\n  margin: 8px 0px 0px 0px;\n}\n\n.img-box {\n  border-radius: 50%;\n  overflow: hidden;\n  height: 130px;\n  width: 130px;\n}\n\n.border-white {\n  border: white solid 4px;\n  border-radius: 50%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.border-blue {\n  border: 7px solid #006bbf;\n  border-radius: 50%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.flex {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-top: -76px;\n}\n\n.tweet ion-label {\n  line-height: 1 !important;\n  font-size: 15px;\n  margin: 6px 0px 6px 0px !important;\n  min-height: 34px;\n}\n\n.tweet {\n  margin-top: -10px !important;\n}\n\n.tweet-img {\n  border-radius: 10px;\n  width: 95%;\n  margin-left: 2.5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9DOlxcVXNlcnNcXFRob21hc1xcZGV2XFxMb2NhbFNob3BBcHAxL3NyY1xcYXBwXFxwcm9maWxlXFxwcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLDZCQUFBO0FDQUo7O0FER0E7RUFDQyw2Q0FBQTtBQ0FEOztBRElBO0VBQ0kseURBQUE7QUNESjs7QURHQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSwyQkFBQTtBQ0VKOztBREFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0dKOztBRERBO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0FDSUo7O0FERkE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNLSjs7QURIQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUNNSjs7QURIQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUNNSjs7QURKQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxpQkFBQTtBQ09KOztBRExBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtBQ1FKOztBRE5BO0VBQ0ksNEJBQUE7QUNTSjs7QURQQTtFQUNJLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FDVUoiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1oZWFkZXIge1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXJ7XHJcblx0LS1pb24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG59XHJcblxyXG5cclxuaW9uLWhlYWRlciB7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoIzc2Yjg1MiwgIzhEQzI2Rik7XHJcbn1cclxuLmhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAzQTlGNDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDFweDtcclxufVxyXG4uaGVhZGVyIGgyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5zcGFjZS1iZXR3ZWVuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMHB4IDEwcHg7XHJcbn1cclxuLmZvbGxvd2luZ3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5mb2xsb3dpbmdzIHAge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiA4cHggMHB4IDBweCAwcHg7XHJcbn1cclxuLmltZy1ib3gge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbn1cclxuLmJvcmRlci13aGl0ZSB7XHJcbiAgICBib3JkZXI6IHdoaXRlIHNvbGlkIDRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLmJvcmRlci1ibHVlIHtcclxuICAgIGJvcmRlcjogN3B4IHNvbGlkICMwMDZiYmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuLmZsZXgge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogLTc2cHg7XHJcbn1cclxuLnR3ZWV0IGlvbi1sYWJlbCB7XHJcbiAgICBsaW5lLWhlaWdodDogMSFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW46IDZweCAwcHggNnB4IDBweCFpbXBvcnRhbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiAzNHB4O1xyXG59XHJcbi50d2VldCB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweCFpbXBvcnRhbnQ7XHJcbn1cclxuLnR3ZWV0LWltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyLjUlO1xyXG59XHJcblxyXG4vLyAgIC5pbWctYm94IHtcclxuLy8gICAgIGhlaWdodDogMjAwcHg7XHJcbi8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4vLyAgIH1cclxuLy8gICBpbWcge1xyXG4vLyAgICAgaGVpZ2h0OiAyMDBweDtcclxuLy8gICB9XHJcblxyXG4iLCJpb24taGVhZGVyIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoIzc2Yjg1MiwgIzhEQzI2Rik7XG59XG5cbi5oZWFkZXIge1xuICBoZWlnaHQ6IDE4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDNBOUY0O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDFweDtcbn1cblxuLmhlYWRlciBoMiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNwYWNlLWJldHdlZW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEwcHggMTBweCAwcHggMTBweDtcbn1cblxuLmZvbGxvd2luZ3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZm9sbG93aW5ncyBwIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDhweCAwcHggMHB4IDBweDtcbn1cblxuLmltZy1ib3gge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMTMwcHg7XG4gIHdpZHRoOiAxMzBweDtcbn1cblxuLmJvcmRlci13aGl0ZSB7XG4gIGJvcmRlcjogd2hpdGUgc29saWQgNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuLmJvcmRlci1ibHVlIHtcbiAgYm9yZGVyOiA3cHggc29saWQgIzAwNmJiZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IC03NnB4O1xufVxuXG4udHdlZXQgaW9uLWxhYmVsIHtcbiAgbGluZS1oZWlnaHQ6IDEgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW46IDZweCAwcHggNnB4IDBweCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAzNHB4O1xufVxuXG4udHdlZXQge1xuICBtYXJnaW4tdG9wOiAtMTBweCAhaW1wb3J0YW50O1xufVxuXG4udHdlZXQtaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDk1JTtcbiAgbWFyZ2luLWxlZnQ6IDIuNSU7XG59Il19 */");

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
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");







var ProfilePage = /** @class */ (function () {
    function ProfilePage(loadingController, alertController, 
    // badge: Badge,
    afDB, afAuth, afSG, camera) {
        var _this = this;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.afDB = afDB;
        this.afAuth = afAuth;
        this.afSG = afSG;
        this.camera = camera;
        this.image = 'https://www.kasterencultuur.nl/editor/placeholder.jpg';
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
        });
    }
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
    ProfilePage.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
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
                        this.imagePath = // 'User/'
                            new Date().getTime() + '.jpg';
                        this.upload = this.afSG.ref(this.imagePath).putString(this.image, 'data_url');
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
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"] }
    ]; };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map