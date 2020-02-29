(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quetes-quetes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/quetes/quetes.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quetes/quetes.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>quetes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/quetes/quetes-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/quetes/quetes-routing.module.ts ***!
  \*************************************************/
/*! exports provided: QuetesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuetesPageRoutingModule", function() { return QuetesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _quetes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quetes.page */ "./src/app/quetes/quetes.page.ts");




var routes = [
    {
        path: '',
        component: _quetes_page__WEBPACK_IMPORTED_MODULE_3__["QuetesPage"]
    }
];
var QuetesPageRoutingModule = /** @class */ (function () {
    function QuetesPageRoutingModule() {
    }
    QuetesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], QuetesPageRoutingModule);
    return QuetesPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/quetes/quetes.module.ts":
/*!*****************************************!*\
  !*** ./src/app/quetes/quetes.module.ts ***!
  \*****************************************/
/*! exports provided: QuetesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuetesPageModule", function() { return QuetesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _quetes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quetes-routing.module */ "./src/app/quetes/quetes-routing.module.ts");
/* harmony import */ var _quetes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quetes.page */ "./src/app/quetes/quetes.page.ts");







var QuetesPageModule = /** @class */ (function () {
    function QuetesPageModule() {
    }
    QuetesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _quetes_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuetesPageRoutingModule"]
            ],
            declarations: [_quetes_page__WEBPACK_IMPORTED_MODULE_6__["QuetesPage"]]
        })
    ], QuetesPageModule);
    return QuetesPageModule;
}());



/***/ }),

/***/ "./src/app/quetes/quetes.page.scss":
/*!*****************************************!*\
  !*** ./src/app/quetes/quetes.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXRlcy9xdWV0ZXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/quetes/quetes.page.ts":
/*!***************************************!*\
  !*** ./src/app/quetes/quetes.page.ts ***!
  \***************************************/
/*! exports provided: QuetesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuetesPage", function() { return QuetesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QuetesPage = /** @class */ (function () {
    function QuetesPage() {
    }
    QuetesPage.prototype.ngOnInit = function () {
    };
    QuetesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quetes',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quetes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/quetes/quetes.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quetes.page.scss */ "./src/app/quetes/quetes.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuetesPage);
    return QuetesPage;
}());



/***/ })

}]);
//# sourceMappingURL=quetes-quetes-module.js.map