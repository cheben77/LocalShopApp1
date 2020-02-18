(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.page.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>login</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item>\r\n    <ion-label><b>Email</b></ion-label>\r\n    <ion-input [(ngModel)]=\"loginData.email\" placeholder=\"Entrez votre email\"></ion-input>\r\n  </ion-item>\r\n  \r\n  <ion-item>\r\n    <ion-label><b>Mot de passe</b></ion-label>\r\n    <ion-input [(ngModel)]=\"loginData.password\" type=\"password\" placeholder=\"Entrez votre mot de passe\"></ion-input>\r\n  </ion-item>\r\n  \r\n  <div class=\"ion-padding\">\r\n    <ion-button (click)=\"login()\" expand=\"block\" color=\"primary\">Connexion</ion-button>\r\n  </div>\r\n\r\n \r\n<!-- Input with value\r\n<ion-input value=\"custom\"></ion-input>\r\n -->\r\n<!-- Input with placeholder \r\n<ion-input placeholder=\"Enter Input\"></ion-input>\r\n-->\r\n<!-- Input with clear button when there is a value\r\n<ion-input clearInput value=\"clear me\"></ion-input>\r\n -->\r\n<!-- Number type input\r\n<ion-input type=\"number\" value=\"333\"></ion-input>\r\n -->\r\n<!-- Disabled input\r\n<ion-input value=\"Disabled\" disabled></ion-input>\r\n -->\r\n<!-- Readonly input\r\n<ion-input value=\"Readonly\" readonly></ion-input>\r\n -->\r\n \r\n <!-- <form  *ngIf=\"!connected\">\r\n  <ion-item  color=\"success\">\r\n    <ion-label position=\"floating\" class=\"ion-text-center\">Création du compte</ion-label>\r\n    <ion-input placeholder=\"Pseudo\" color=\"dark\"></ion-input>\r\n  </ion-item>\r\n  \r\n  <ion-item>\r\n    <ion-label position=\"floating\" >Prénom</ion-label>\r\n    <ion-input aria-required=\"name\" [(ngModel)]=\"text\"></ion-input>\r\n  </ion-item>\r\n  \r\n  <ion-item>\r\n    <ion-label position=\"floating\">Age</ion-label>\r\n    <ion-input aria-required=\"name\" [(ngModel)]=\"number\"></ion-input>\r\n  </ion-item>\r\n  \r\n  <ion-item>\r\n    <ion-label position=\"floating\">email</ion-label>\r\n    <ion-input aria-required=\"email\" [(ngModel)]=\"email\"></ion-input>\r\n  </ion-item>\r\n  \r\n  <ion-item>\r\n    <ion-label position=\"floating\">Mot de passe</ion-label>\r\n    <ion-input required=\"password\" type=\"password\" [(ngModel)]=\"password\"></ion-input>\r\n  </ion-item>\r\n  \r\n  <ion-item>\r\n    <ion-label position=\"floating\" >confirmer votre mot de passe</ion-label>\r\n    <ion-input aria-required=\"password\" type=\"password\" ></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-button (click)=\"signup()\" expand=\"block\" color=\"dark\">Inscription</ion-button>\r\n   \r\n  </form> -->\r\n\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/auth/login/login.module.ts":
/*!********************************************!*\
  !*** ./src/app/auth/login/login.module.ts ***!
  \********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.page */ "./src/app/auth/login/login.page.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







// import { firebaseConfig } from 'src/app/app.module';

var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild([{ path: '', component: _login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"] }]),
                // AngularFireModule.initializeApp(firebaseConfig),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"],
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.page.scss":
/*!********************************************!*\
  !*** ./src/app/auth/login/login.page.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/** Ionic CSS Variables **/\n:root {\n  /** facebook **/\n  --ion-color-facebook: #3b5999;\n  --ion-color-facebook-rgb: 59, 89, 153;\n  --ion-color-facebook-contrast: #ffffff;\n  --ion-color-facebook-contrast-rgb: 255, 255, 255;\n  --ion-color-facebook-shade: #324b81;\n  --ion-color-facebook-tint: #476bb8;\n  /** google **/\n  --ion-color-google: #cd201f;\n  --ion-color-google-rgb: 245, 61, 61;\n  --ion-color-google-contrast: #ffffff;\n  --ion-color-google-contrast-rgb: 255, 255, 255;\n  --ion-color-google-shade: #cd201f;\n  --ion-color-google-tint: #cd201f;\n}\n.ion-color-facebook {\n  --ion-color-base: var(--ion-color-facebook) !important;\n  --ion-color-base-rgb: var(--ion-color-facebook-rgb) !important;\n  --ion-color-contrast: var(--ion-color-facebook-contrast) !important;\n  --ion-color-contrast-rgb: var(--ion-color-facebook-contrast-rgb) !important;\n  --ion-color-shade: var(--ion-color-facebook-shade) !important;\n  --ion-color-tint: var(--ion-color-facebook-tint) !important;\n}\n.ion-color-google {\n  --ion-color-base: var(--ion-color-google) !important;\n  --ion-color-base-rgb: var(--ion-color-google-rgb) !important;\n  --ion-color-contrast: var(--ion-color-google-contrast) !important;\n  --ion-color-contrast-rgb: var(--ion-color-google-contrast-rgb) !important;\n  --ion-color-shade: var(--ion-color-google-shade) !important;\n  --ion-color-tint: var(--ion-color-google-tint) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9DOlxcVXNlcnNcXFRob21hc1xcZGV2XFxMb2NhbFNob3BBcHAxL3NyY1xcYXBwXFxhdXRoXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwQkFBQTtBQUNBO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0VBQ0EscUNBQUE7RUFDQSxzQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7QUNBSjtBREVBO0VBQ0ksc0RBQUE7RUFDQSw4REFBQTtFQUNBLG1FQUFBO0VBQ0EsMkVBQUE7RUFDQSw2REFBQTtFQUNBLDJEQUFBO0FDQ0o7QURDRTtFQUNFLG9EQUFBO0VBQ0EsNERBQUE7RUFDQSxpRUFBQTtFQUNBLHlFQUFBO0VBQ0EsMkRBQUE7RUFDQSx5REFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cclxuOnJvb3Qge1xyXG4gICAgLyoqIGZhY2Vib29rICoqL1xyXG4gICAgLS1pb24tY29sb3ItZmFjZWJvb2s6ICMzYjU5OTk7XHJcbiAgICAtLWlvbi1jb2xvci1mYWNlYm9vay1yZ2I6IDU5LCA4OSwgMTUzO1xyXG4gICAgLS1pb24tY29sb3ItZmFjZWJvb2stY29udHJhc3Q6ICNmZmZmZmY7XHJcbiAgICAtLWlvbi1jb2xvci1mYWNlYm9vay1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XHJcbiAgICAtLWlvbi1jb2xvci1mYWNlYm9vay1zaGFkZTogIzMyNGI4MTtcclxuICAgIC0taW9uLWNvbG9yLWZhY2Vib29rLXRpbnQ6ICM0NzZiYjg7XHJcbiAgXHJcbiAgICAvKiogZ29vZ2xlICoqL1xyXG4gICAgLS1pb24tY29sb3ItZ29vZ2xlOiAjY2QyMDFmO1xyXG4gICAgLS1pb24tY29sb3ItZ29vZ2xlLXJnYjogMjQ1LCA2MSwgNjE7XHJcbiAgICAtLWlvbi1jb2xvci1nb29nbGUtY29udHJhc3Q6ICNmZmZmZmY7XHJcbiAgICAtLWlvbi1jb2xvci1nb29nbGUtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xyXG4gICAgLS1pb24tY29sb3ItZ29vZ2xlLXNoYWRlOiAjY2QyMDFmO1xyXG4gICAgLS1pb24tY29sb3ItZ29vZ2xlLXRpbnQ6ICNjZDIwMWY7XHJcbn0gXHJcbi5pb24tY29sb3ItZmFjZWJvb2sge1xyXG4gICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLWZhY2Vib29rKSAhaW1wb3J0YW50O1xyXG4gICAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1mYWNlYm9vay1yZ2IpICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLWZhY2Vib29rLWNvbnRyYXN0KSAhaW1wb3J0YW50O1xyXG4gICAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItZmFjZWJvb2stY29udHJhc3QtcmdiKSAhaW1wb3J0YW50O1xyXG4gICAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1mYWNlYm9vay1zaGFkZSkgIWltcG9ydGFudDtcclxuICAgIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1mYWNlYm9vay10aW50KSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuaW9uLWNvbG9yLWdvb2dsZSB7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItZ29vZ2xlKSAhaW1wb3J0YW50O1xyXG4gICAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1nb29nbGUtcmdiKSAhaW1wb3J0YW50O1xyXG4gICAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1nb29nbGUtY29udHJhc3QpICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1nb29nbGUtY29udHJhc3QtcmdiKSAhaW1wb3J0YW50O1xyXG4gICAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1nb29nbGUtc2hhZGUpICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItZ29vZ2xlLXRpbnQpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICIsIi8qKiBJb25pYyBDU1MgVmFyaWFibGVzICoqL1xuOnJvb3Qge1xuICAvKiogZmFjZWJvb2sgKiovXG4gIC0taW9uLWNvbG9yLWZhY2Vib29rOiAjM2I1OTk5O1xuICAtLWlvbi1jb2xvci1mYWNlYm9vay1yZ2I6IDU5LCA4OSwgMTUzO1xuICAtLWlvbi1jb2xvci1mYWNlYm9vay1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZmFjZWJvb2stY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1mYWNlYm9vay1zaGFkZTogIzMyNGI4MTtcbiAgLS1pb24tY29sb3ItZmFjZWJvb2stdGludDogIzQ3NmJiODtcbiAgLyoqIGdvb2dsZSAqKi9cbiAgLS1pb24tY29sb3ItZ29vZ2xlOiAjY2QyMDFmO1xuICAtLWlvbi1jb2xvci1nb29nbGUtcmdiOiAyNDUsIDYxLCA2MTtcbiAgLS1pb24tY29sb3ItZ29vZ2xlLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1nb29nbGUtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1nb29nbGUtc2hhZGU6ICNjZDIwMWY7XG4gIC0taW9uLWNvbG9yLWdvb2dsZS10aW50OiAjY2QyMDFmO1xufVxuXG4uaW9uLWNvbG9yLWZhY2Vib29rIHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLWZhY2Vib29rKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWZhY2Vib29rLXJnYikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1mYWNlYm9vay1jb250cmFzdCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItZmFjZWJvb2stY29udHJhc3QtcmdiKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWZhY2Vib29rLXNoYWRlKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItZmFjZWJvb2stdGludCkgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1nb29nbGUge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItZ29vZ2xlKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWdvb2dsZS1yZ2IpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItZ29vZ2xlLWNvbnRyYXN0KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1nb29nbGUtY29udHJhc3QtcmdiKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWdvb2dsZS1zaGFkZSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLWdvb2dsZS10aW50KSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/auth/login/login.page.ts":
/*!******************************************!*\
  !*** ./src/app/auth/login/login.page.ts ***!
  \******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var LoginPage = /** @class */ (function () {
    function LoginPage(afDB, toastController, afAuth) {
        this.afDB = afDB;
        this.toastController = toastController;
        this.afAuth = afAuth;
        this.loginData = {
            email: '',
            password: '',
            pseudo: '',
            Age: '',
        };
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.add = function () {
        this.afDG.list('User/').push({
            pseudo: '',
            Age: '',
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.afAuth.auth.signInWithEmailAndPassword(this.loginData.email, this.loginData.password)
            .then(function (auth) {
            console.log('utilisateur connecté');
        })
            .catch(function (err) {
            console.log('Erreur: ' + err);
            _this.errorMail();
        });
    };
    LoginPage.prototype.errorMail = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Email ou mot de passe incorrect',
                            duration: 2000,
                            position: 'top'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.signUp = function () {
        var _this = this;
        this.afAuth.auth.createUserWithEmailAndPassword(this.loginData.email, this.loginData.password)
            .then(function (auth) {
            console.log('utilisateur connecté');
        })
            .catch(function (err) {
            console.log('Erreur: ' + err);
            _this.errorMail();
        });
    };
    LoginPage.ctorParameters = function () { return [
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/auth/login/login.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=auth-login-login-module.js.map