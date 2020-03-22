(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["qrCode-qrCode-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/qrCode/qrCode.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/qrCode/qrCode.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-text-center\">\r\n       QR Code\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button *ngIf=\"showCamera\" (click)=\"closeCamera()\" color=\"warning\">\r\n        <ion-icon name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n        \r\n<ion-content >\r\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button>\r\n      <ion-icon name=\"share\"></ion-icon>\r\n    </ion-fab-button>\r\n    <ion-fab-list side=\"top\">\r\n      <ion-fab-button><ion-icon name=\"log-out\" color=\"danger\" (click)=\"logout()\" [routerLink]=\"['/tabs/login']\"></ion-icon></ion-fab-button>\r\n    </ion-fab-list>\r\n    <ion-fab-list side=\"bottom\">\r\n      <ion-fab-button><ion-icon name=\"qr-scanner\" color=\"tertiary\" [routerLink]=\"['/tabs/qrCode']\" routerLinkActive=\"router-link-active\" ></ion-icon></ion-fab-button>\r\n    </ion-fab-list>\r\n    <ion-fab-list side=\"start\">\r\n      <ion-fab-button><ion-icon name=\"logo-instagram\"></ion-icon></ion-fab-button>\r\n    </ion-fab-list>\r\n    <ion-fab-list side=\"end\">\r\n      <ion-fab-button><ion-icon name=\"logo-twitter\"></ion-icon></ion-fab-button>\r\n    </ion-fab-list>\r\n  </ion-fab>\r\n\r\n <ion-icon *ngIf=\"showCamera\" class=\"frame\" name=\"qr-scanner\"  color=\"primary\"></ion-icon>\r\n\r\n  <div *ngIf=\"!showCamera\" >\r\n    <ion-item *ngIf=\"textScanned\" lines=\"none\">\r\n        <ion-label>\r\n          <p>Texte du QR Code</p> \r\n          <h2><b>{{ textScanned }}</b></h2>\r\n        </ion-label> \r\n          <ion-icon *ngIf=\"!showCamera\" class=\"frame\" name=\"qr-scanner\"></ion-icon>\r\n        <ion-icon slot=\"end\" name=\"open\"></ion-icon>\r\n    </ion-item>\r\n    \r\n    <ion-button expand=\"block\" (click)=\"scanCode()\">\r\n            <ion-icon slot=\"start\" name=\"qr-scanner\"></ion-icon>\r\n            Scanner un QR Code\r\n    </ion-button>\r\n  </div>\r\n\r\n  <div *ngIf=\"!showCamera\" >\r\n    <ion-item lines=\"none\">\r\n      <ion-label><b>Texte à encoder:</b></ion-label>\r\n      <ion-input [(ngModel)]=\"textToCode\" placeholder=\"Entrez votre URL\"></ion-input>\r\n    </ion-item>\r\n  \r\n    <ion-button color=\"tertiary\" expand=\"block\" (click)=\"createQRCode()\" *ngIf=\"!showCamera\">\r\n      <ion-icon slot=\"start\" name=\"create\"></ion-icon>\r\n      Créer un QR Code\r\n    </ion-button>\r\n\r\n    <div class=\"center\" *ngIf=\"myAngularQrCode\">\r\n      <qrcode [qrdata]=\"myAngularQrCode\" [size]=\"250\" [level]=\"'M'\"></qrcode>\r\n    </div>\r\n  </div>  \r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/qrCode/qrCode.module.ts":
/*!*****************************************!*\
  !*** ./src/app/qrCode/qrCode.module.ts ***!
  \*****************************************/
/*! exports provided: QrCodePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrCodePageModule", function() { return QrCodePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularx-qrcode */ "./node_modules/angularx-qrcode/fesm5/angularx-qrcode.js");
/* harmony import */ var _qrCode_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./qrCode.page */ "./src/app/qrCode/qrCode.page.ts");








var QrCodePageModule = /** @class */ (function () {
    // tslint:disable-next-line: align
    function QrCodePageModule() {
    }
    QrCodePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                angularx_qrcode__WEBPACK_IMPORTED_MODULE_6__["QRCodeModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _qrCode_page__WEBPACK_IMPORTED_MODULE_7__["QrCodePage"] }])
            ],
            declarations: [_qrCode_page__WEBPACK_IMPORTED_MODULE_7__["QrCodePage"]]
        })
        // tslint:disable-next-line: align
    ], QrCodePageModule);
    return QrCodePageModule;
}());



/***/ }),

/***/ "./src/app/qrCode/qrCode.page.scss":
/*!*****************************************!*\
  !*** ./src/app/qrCode/qrCode.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony default export */ __webpack_exports__["default"] = (".center {\n  margin-left: auto;\n  margin-right: auto;\n  width: 250px;\n}\n\nion-content {\n  --ion-background-color: transparent;\n}\n\n.frame {\n  color: #d5d5d5;\n  height: 350px;\n  width: 350px;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXJDb2RlL0M6XFxVc2Vyc1xcQ2hlQmVuXFxPbmVEcml2ZVxcQnVyZWF1XFxQcm9qZXQgTnVtw6lyaXF1ZXNcXFByb2pldCBJT05JQ1xcUHJvamV0IEFwcFNcXExvY2FsU2hvcFxcRW4gY291clxcTG9jYWxTaG9wQXBwMVxcTG9jYWxTaG9wQXBwMVxcQXBwMS9zcmNcXGFwcFxccXJDb2RlXFxxckNvZGUucGFnZS5zY3NzIiwic3JjL2FwcC9xckNvZGUvcXJDb2RlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQUo7O0FERUE7RUFDSSxtQ0FBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcXJDb2RlL3FyQ29kZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNlbnRlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAyNTBweDtcclxufVxyXG5pb24tY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uZnJhbWUge1xyXG4gICAgY29sb3I6ICNkNWQ1ZDU7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59IiwiLmNlbnRlciB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiAyNTBweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZyYW1lIHtcbiAgY29sb3I6ICNkNWQ1ZDU7XG4gIGhlaWdodDogMzUwcHg7XG4gIHdpZHRoOiAzNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogYXV0bztcbn0iXX0= */");
=======
/* harmony default export */ __webpack_exports__["default"] = (".center {\n  margin-left: auto;\n  margin-right: auto;\n  width: 250px;\n}\n\nion-content {\n  --ion-background-color: transparent;\n}\n\n.frame {\n  color: #d5d5d5;\n  height: 350px;\n  width: 350px;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXJDb2RlL0M6XFxVc2Vyc1xcQ2hlQmVuXFxPbmVEcml2ZVxcQnVyZWF1XFxQcm9qZXQgTnVtw6lyaXF1ZXNcXFByb2pldCBJT05JQ1xcUHJvamV0IEFwcFNcXExvY2FsU2hvcFxcRW4gY291clxcTG9jYWxTaG9wQXBwMVxcTG9jYWxTaG9wQXBwMVxcQXBwMS9zcmNcXGFwcFxccXJDb2RlXFxxckNvZGUucGFnZS5zY3NzIiwic3JjL2FwcC9xckNvZGUvcXJDb2RlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQUo7O0FERUE7RUFDSSxtQ0FBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcXJDb2RlL3FyQ29kZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jZW50ZXIge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogMjUwcHg7XG59XG5pb24tY29udGVudHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZyYW1lIHtcbiAgICBjb2xvcjogI2Q1ZDVkNTtcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIG1hcmdpbjogYXV0bztcbn0iLCIuY2VudGVyIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZnJhbWUge1xuICBjb2xvcjogI2Q1ZDVkNTtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgd2lkdGg6IDM1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiBhdXRvO1xufSJdfQ== */");
>>>>>>> GeoYann

/***/ }),

/***/ "./src/app/qrCode/qrCode.page.ts":
/*!***************************************!*\
  !*** ./src/app/qrCode/qrCode.page.ts ***!
  \***************************************/
/*! exports provided: QrCodePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrCodePage", function() { return QrCodePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ "./node_modules/@ionic-native/qr-scanner/ngx/index.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var QrCodePage = /** @class */ (function () {
    function QrCodePage(iab, qrScanner, alertController) {
        this.iab = iab;
        this.qrScanner = qrScanner;
        this.alertController = alertController;
        this.myAngularQrCode = null;
        this.showCamera = false;
        this.textScanned = '';
        this.scanCode();
    }
    QrCodePage.prototype.createQRCode = function () {
        this.myAngularQrCode = this.textToCode;
        this.textToCode = '';
    };
    QrCodePage.prototype.scanCode = function () {
        var _this = this;
        this.showCamera = true;
        // Optionally request the permission early
        this.qrScanner.prepare()
            .then(function (status) {
            if (status.authorized) {
                // start scanning
                console.log('Scan en cours...' + JSON.stringify(status));
                var scanSub_1 = _this.qrScanner.scan().subscribe(function (text) {
                    console.log('Scanned something', text.result);
                    _this.textScanned = text.result;
                    _this.qrScanner.hide(); // hide camera preview
                    scanSub_1.unsubscribe(); // stop scanning
                    _this.showCamera = false;
                });
            }
            else if (status.denied) {
                // camera permission was permanently denied
            }
            else {
                // permission was denied, but not permanently. You can ask for permission again at a later time.
            }
        })
            .catch(function (e) { return console.log('Error is', e); });
    };
    QrCodePage.prototype.closeCamera = function () {
        this.showCamera = false;
        this.qrScanner.hide(); // hide camera preview
        this.qrScanner.destroy();
    };
    QrCodePage.prototype.openLink = function (link) {
        var browser = this.iab.create(link, '_system', 'location=yes');
    };
    QrCodePage.ctorParameters = function () { return [
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"] },
        { type: _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["QRScanner"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
    ]; };
    QrCodePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-qrCode',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./qrCode.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/qrCode/qrCode.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./qrCode.page.scss */ "./src/app/qrCode/qrCode.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"],
            _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["QRScanner"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], QrCodePage);
    return QrCodePage;
}());



/***/ })

}]);
//# sourceMappingURL=qrCode-qrCode-module.js.map