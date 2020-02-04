(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.page.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/login/login.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label><b>Email</b></ion-label>\n    <ion-input [(ngModel)]=\"loginData.email\" placeholder=\"Entrez votre email\"></ion-input>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label><b>Mot de passe</b></ion-label>\n    <ion-input [(ngModel)]=\"loginData.password\" type=\"password\" placeholder=\"Entrez votre mot de passe\"></ion-input>\n  </ion-item>\n  \n  <div class=\"ion-padding\">\n    <ion-button (click)=\"login()\" expand=\"block\" color=\"primary\">Connexion</ion-button>\n  \n    <p style=\"text-align: center;\">ou</p>\n  \n    <ion-button (click)=\"signup()\" expand=\"block\" color=\"tertiary\">Inscription</ion-button>\n  </div>\n  <ion-button (click)=\"add()\">Ajouter</ion-button>\n</ion-content>\n"

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
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");










var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forChild([{ path: '', component: _login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"] }]),
                _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(src_app_app_module__WEBPACK_IMPORTED_MODULE_8__["firebaseConfig"]),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
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
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4ucGFnZS5zY3NzIn0= */"

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
            password: ''
        };
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.add = function () {
        this.afDG.list('User/').push({
            pseudo: 'drissas'
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
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/auth/login/login.page.scss")]
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