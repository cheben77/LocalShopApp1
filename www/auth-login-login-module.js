(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/auth/login/login.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/auth/login/login.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title class=\"ion-text-center\">login</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"ion-padding\">\r\n    <ion-button shape=\"round\" (click)=\"FacebookLogin()\">\r\n      <ion-icon slot=\"start\" name=\"logo-facebook\"></ion-icon>\r\n        Connexion avec Facebook\r\n    </ion-button>\r\n  </div>\r\n\r\n\r\n  <!-- with name set -->\r\n<ion-item>\r\n  <ion-label>Todo</ion-label>\r\n  <ion-input type=\"text\" [(ngModel)]=\"todo.title\" name=\"title\"></ion-input>\r\n</ion-item>\r\n\r\n<!-- or with standalone set to true -->\r\n<ion-item>\r\n  <ion-label>Todo</ion-label>\r\n  <ion-input type=\"text\" [(ngModel)]=\"todo.title\" [ngModelOptions]=\"{standalone: true}\"></ion-input>\r\n</ion-item>\r\n  \r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/page/auth/login/login.module.ts":
/*!*************************************************!*\
  !*** ./src/app/page/auth/login/login.module.ts ***!
  \*************************************************/
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
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.page */ "./src/app/page/auth/login/login.page.ts");
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

/***/ "./src/app/page/auth/login/login.page.scss":
/*!*************************************************!*\
  !*** ./src/app/page/auth/login/login.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/** Ionic CSS Variables **/\n:root {\n  /** facebook **/\n  --ion-color-facebook: #3b5999;\n  --ion-color-facebook-rgb: 59, 89, 153;\n  --ion-color-facebook-contrast: #ffffff;\n  --ion-color-facebook-contrast-rgb: 255, 255, 255;\n  --ion-color-facebook-shade: #324b81;\n  --ion-color-facebook-tint: #476bb8;\n  /** google **/\n  --ion-color-google: #cd201f;\n  --ion-color-google-rgb: 245, 61, 61;\n  --ion-color-google-contrast: #ffffff;\n  --ion-color-google-contrast-rgb: 255, 255, 255;\n  --ion-color-google-shade: #cd201f;\n  --ion-color-google-tint: #cd201f;\n}\n.ion-color-facebook {\n  --ion-color-base: var(--ion-color-facebook) !important;\n  --ion-color-base-rgb: var(--ion-color-facebook-rgb) !important;\n  --ion-color-contrast: var(--ion-color-facebook-contrast) !important;\n  --ion-color-contrast-rgb: var(--ion-color-facebook-contrast-rgb) !important;\n  --ion-color-shade: var(--ion-color-facebook-shade) !important;\n  --ion-color-tint: var(--ion-color-facebook-tint) !important;\n}\n.ion-color-google {\n  --ion-color-base: var(--ion-color-google) !important;\n  --ion-color-base-rgb: var(--ion-color-google-rgb) !important;\n  --ion-color-contrast: var(--ion-color-google-contrast) !important;\n  --ion-color-contrast-rgb: var(--ion-color-google-contrast-rgb) !important;\n  --ion-color-shade: var(--ion-color-google-shade) !important;\n  --ion-color-tint: var(--ion-color-google-tint) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9hdXRoL2xvZ2luL0M6XFxVc2Vyc1xcQ2hlQmVuXFxPbmVEcml2ZVxcQnVyZWF1XFxQcm9qZXQgTnVtw6lyaXF1ZXNcXFByb2pldCBJT05JQ1xcUHJvamV0IEFwcFNcXExvY2FsU2hvcFxcRW4gY291clxcTG9jYWxTaG9wQXBwMVxcTG9jYWxTaG9wQXBwMVxcQXBwMS9zcmNcXGFwcFxccGFnZVxcYXV0aFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZS9hdXRoL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwQkFBQTtBQUNBO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0VBQ0EscUNBQUE7RUFDQSxzQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7QUNBSjtBREVBO0VBQ0ksc0RBQUE7RUFDQSw4REFBQTtFQUNBLG1FQUFBO0VBQ0EsMkVBQUE7RUFDQSw2REFBQTtFQUNBLDJEQUFBO0FDQ0o7QURDRTtFQUNFLG9EQUFBO0VBQ0EsNERBQUE7RUFDQSxpRUFBQTtFQUNBLHlFQUFBO0VBQ0EsMkRBQUE7RUFDQSx5REFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9hdXRoL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBJb25pYyBDU1MgVmFyaWFibGVzICoqL1xyXG46cm9vdCB7XHJcbiAgICAvKiogZmFjZWJvb2sgKiovXHJcbiAgICAtLWlvbi1jb2xvci1mYWNlYm9vazogIzNiNTk5OTtcclxuICAgIC0taW9uLWNvbG9yLWZhY2Vib29rLXJnYjogNTksIDg5LCAxNTM7XHJcbiAgICAtLWlvbi1jb2xvci1mYWNlYm9vay1jb250cmFzdDogI2ZmZmZmZjtcclxuICAgIC0taW9uLWNvbG9yLWZhY2Vib29rLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcclxuICAgIC0taW9uLWNvbG9yLWZhY2Vib29rLXNoYWRlOiAjMzI0YjgxO1xyXG4gICAgLS1pb24tY29sb3ItZmFjZWJvb2stdGludDogIzQ3NmJiODtcclxuICBcclxuICAgIC8qKiBnb29nbGUgKiovXHJcbiAgICAtLWlvbi1jb2xvci1nb29nbGU6ICNjZDIwMWY7XHJcbiAgICAtLWlvbi1jb2xvci1nb29nbGUtcmdiOiAyNDUsIDYxLCA2MTtcclxuICAgIC0taW9uLWNvbG9yLWdvb2dsZS1jb250cmFzdDogI2ZmZmZmZjtcclxuICAgIC0taW9uLWNvbG9yLWdvb2dsZS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XHJcbiAgICAtLWlvbi1jb2xvci1nb29nbGUtc2hhZGU6ICNjZDIwMWY7XHJcbiAgICAtLWlvbi1jb2xvci1nb29nbGUtdGludDogI2NkMjAxZjtcclxufSBcclxuLmlvbi1jb2xvci1mYWNlYm9vayB7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItZmFjZWJvb2spICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWZhY2Vib29rLXJnYikgIWltcG9ydGFudDtcclxuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItZmFjZWJvb2stY29udHJhc3QpICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1mYWNlYm9vay1jb250cmFzdC1yZ2IpICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWZhY2Vib29rLXNoYWRlKSAhaW1wb3J0YW50O1xyXG4gICAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLWZhY2Vib29rLXRpbnQpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5pb24tY29sb3ItZ29vZ2xlIHtcclxuICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1nb29nbGUpICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWdvb2dsZS1yZ2IpICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLWdvb2dsZS1jb250cmFzdCkgIWltcG9ydGFudDtcclxuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLWdvb2dsZS1jb250cmFzdC1yZ2IpICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWdvb2dsZS1zaGFkZSkgIWltcG9ydGFudDtcclxuICAgIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1nb29nbGUtdGludCkgIWltcG9ydGFudDtcclxuICB9XHJcbiAgIiwiLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXG46cm9vdCB7XG4gIC8qKiBmYWNlYm9vayAqKi9cbiAgLS1pb24tY29sb3ItZmFjZWJvb2s6ICMzYjU5OTk7XG4gIC0taW9uLWNvbG9yLWZhY2Vib29rLXJnYjogNTksIDg5LCAxNTM7XG4gIC0taW9uLWNvbG9yLWZhY2Vib29rLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1mYWNlYm9vay1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWZhY2Vib29rLXNoYWRlOiAjMzI0YjgxO1xuICAtLWlvbi1jb2xvci1mYWNlYm9vay10aW50OiAjNDc2YmI4O1xuICAvKiogZ29vZ2xlICoqL1xuICAtLWlvbi1jb2xvci1nb29nbGU6ICNjZDIwMWY7XG4gIC0taW9uLWNvbG9yLWdvb2dsZS1yZ2I6IDI0NSwgNjEsIDYxO1xuICAtLWlvbi1jb2xvci1nb29nbGUtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWdvb2dsZS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWdvb2dsZS1zaGFkZTogI2NkMjAxZjtcbiAgLS1pb24tY29sb3ItZ29vZ2xlLXRpbnQ6ICNjZDIwMWY7XG59XG5cbi5pb24tY29sb3ItZmFjZWJvb2sge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItZmFjZWJvb2spICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItZmFjZWJvb2stcmdiKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLWZhY2Vib29rLWNvbnRyYXN0KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1mYWNlYm9vay1jb250cmFzdC1yZ2IpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItZmFjZWJvb2stc2hhZGUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1mYWNlYm9vay10aW50KSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWNvbG9yLWdvb2dsZSB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1nb29nbGUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItZ29vZ2xlLXJnYikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1nb29nbGUtY29udHJhc3QpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLWdvb2dsZS1jb250cmFzdC1yZ2IpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItZ29vZ2xlLXNoYWRlKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItZ29vZ2xlLXRpbnQpICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/page/auth/login/login.page.ts":
/*!***********************************************!*\
  !*** ./src/app/page/auth/login/login.page.ts ***!
  \***********************************************/
/*! exports provided: FormsPage, LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsPage", function() { return FormsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_skill_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/skill.service */ "./src/app/services/skill.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");






var FormsPage = /** @class */ (function () {
    function FormsPage(formBuilder) {
        this.formBuilder = formBuilder;
        this.todo = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: [''],
        });
    }
    FormsPage.prototype.logForm = function () {
        console.log(this.todo.value);
    };
    FormsPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
    FormsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            template: "\n    <form (ngSubmit)=\"logForm()\">\n      <ion-item>\n        <ion-label>Todo</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"todo.title\" name=\"title\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Description</ion-label>\n        <ion-textarea [(ngModel)]=\"todo.description\" name=\"description\"></ion-textarea>\n      </ion-item>\n      <button ion-button type=\"submit\" block>Add Todo</button>\n    </form>\n  ",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], FormsPage);
    return FormsPage;
}());

var LoginPage = /** @class */ (function () {
    function LoginPage(
    // authService: AuthService, 
    router, skillService, modalController, formBuilder) {
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.alert = null;
        this.validationMessages = {
            // tslint:disable-next-line: object-literal-key-quotes
            // Email types and messages error
            email: [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Please enter a valid email.' }
            ],
            // tslint:disable-next-line: object-literal-key-quotes
            // Password types and messages error
            password: [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 5 characters long.' },
                { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
            ],
        };
        //  this.skillService = skillService;
        //  this.authService = AuthService;
        //  this.user = AuthService.user;
        //  this.userCredential = new UserCredential();
        //  this.router = this.router;
        // this.university = null;
    }
    LoginPage.prototype.ngOnInit = function () {
        this.validationsForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                // validators deactivate for this first phase of projet
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
            ]))
        });
    };
    // tslint:disable-next-line:align
    // add() {
    //     this.afDG.list('User/').push({
    //       pseudo: '',
    //       Age: '',
    //     });
    //   }
    LoginPage.prototype.login = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toastLog;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Ravi de terevoir !!',
                            duration: 2000,
                            position: 'top'
                        })];
                    case 1:
                        toastLog = _a.sent();
                        toastLog.present();
                        this.afAuth.auth.signInWithEmailAndPassword(this.loginData.email, this.loginData.password)
                            .then(function (auth) {
                            console.log('utilisateur connecté');
                        })
                            .catch(function (err) {
                            console.log('Erreur: ' + err);
                            _this.errorMail();
                        });
                        return [2 /*return*/];
                }
            });
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.afAuth.auth.createUserWithEmailAndPassword(this.loginData.email, this.loginData.password)
                    .then(function (auth) {
                    console.log('utilisateur créer');
                })
                    .catch(function (err) {
                    console.log('Erreur: ' + err);
                    _this.errorMail();
                });
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    LoginPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_skill_service__WEBPACK_IMPORTED_MODULE_4__["SkillService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-login',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/auth/login/login.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/page/auth/login/login.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_skill_service__WEBPACK_IMPORTED_MODULE_4__["SkillService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ }),

/***/ "./src/app/services/skill.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/skill.service.ts ***!
  \*******************************************/
/*! exports provided: SkillService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillService", function() { return SkillService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SkillService = /** @class */ (function () {
    function SkillService() {
    }
    SkillService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SkillService);
    return SkillService;
}());



/***/ })

}]);
//# sourceMappingURL=auth-login-login-module.js.map