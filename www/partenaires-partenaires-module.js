(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["partenaires-partenaires-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/partenaires/partenaires.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/partenaires/partenaires.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-text-center\">Partenaires</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"Loading more data...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/page/partenaires/partenaires-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/page/partenaires/partenaires-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: PartenairesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartenairesPageRoutingModule", function() { return PartenairesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _partenaires_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./partenaires.page */ "./src/app/page/partenaires/partenaires.page.ts");




var routes = [
    {
        path: '',
        component: _partenaires_page__WEBPACK_IMPORTED_MODULE_3__["PartenairesPage"]
    }
];
var PartenairesPageRoutingModule = /** @class */ (function () {
    function PartenairesPageRoutingModule() {
    }
    PartenairesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PartenairesPageRoutingModule);
    return PartenairesPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/page/partenaires/partenaires.module.ts":
/*!********************************************************!*\
  !*** ./src/app/page/partenaires/partenaires.module.ts ***!
  \********************************************************/
/*! exports provided: PartenairesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartenairesPageModule", function() { return PartenairesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _partenaires_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./partenaires-routing.module */ "./src/app/page/partenaires/partenaires-routing.module.ts");
/* harmony import */ var _partenaires_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./partenaires.page */ "./src/app/page/partenaires/partenaires.page.ts");







var PartenairesPageModule = /** @class */ (function () {
    function PartenairesPageModule() {
    }
    PartenairesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _partenaires_routing_module__WEBPACK_IMPORTED_MODULE_5__["PartenairesPageRoutingModule"]
            ],
            declarations: [_partenaires_page__WEBPACK_IMPORTED_MODULE_6__["PartenairesPage"]]
        })
    ], PartenairesPageModule);
    return PartenairesPageModule;
}());



/***/ }),

/***/ "./src/app/page/partenaires/partenaires.page.scss":
/*!********************************************************!*\
  !*** ./src/app/page/partenaires/partenaires.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvcGFydGVuYWlyZXMvcGFydGVuYWlyZXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/page/partenaires/partenaires.page.ts":
/*!******************************************************!*\
  !*** ./src/app/page/partenaires/partenaires.page.ts ***!
  \******************************************************/
/*! exports provided: PartenairesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartenairesPage", function() { return PartenairesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PartenairesPage = /** @class */ (function () {
    function PartenairesPage() {
    }
    PartenairesPage.prototype.ngOnInit = function () {
    };
    PartenairesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-partenaires',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./partenaires.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/partenaires/partenaires.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./partenaires.page.scss */ "./src/app/page/partenaires/partenaires.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PartenairesPage);
    return PartenairesPage;
}());



/***/ })

}]);
//# sourceMappingURL=partenaires-partenaires-module.js.map