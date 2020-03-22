(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["geo-aventure-geo-aventure-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/geo-aventure/geo-aventure.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/geo-aventure/geo-aventure.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>geoAventure</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/geo-aventure/geo-aventure-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/geo-aventure/geo-aventure-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: GeoAventurePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoAventurePageRoutingModule", function() { return GeoAventurePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _geo_aventure_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./geo-aventure.page */ "./src/app/geo-aventure/geo-aventure.page.ts");




var routes = [
    {
        path: '',
        component: _geo_aventure_page__WEBPACK_IMPORTED_MODULE_3__["GeoAventurePage"]
    }
];
var GeoAventurePageRoutingModule = /** @class */ (function () {
    function GeoAventurePageRoutingModule() {
    }
    GeoAventurePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], GeoAventurePageRoutingModule);
    return GeoAventurePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/geo-aventure/geo-aventure.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/geo-aventure/geo-aventure.module.ts ***!
  \*****************************************************/
/*! exports provided: GeoAventurePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoAventurePageModule", function() { return GeoAventurePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _geo_aventure_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./geo-aventure-routing.module */ "./src/app/geo-aventure/geo-aventure-routing.module.ts");
/* harmony import */ var _geo_aventure_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./geo-aventure.page */ "./src/app/geo-aventure/geo-aventure.page.ts");







var GeoAventurePageModule = /** @class */ (function () {
    function GeoAventurePageModule() {
    }
    GeoAventurePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _geo_aventure_routing_module__WEBPACK_IMPORTED_MODULE_5__["GeoAventurePageRoutingModule"]
            ],
            declarations: [_geo_aventure_page__WEBPACK_IMPORTED_MODULE_6__["GeoAventurePage"]]
        })
    ], GeoAventurePageModule);
    return GeoAventurePageModule;
}());



/***/ }),

/***/ "./src/app/geo-aventure/geo-aventure.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/geo-aventure/geo-aventure.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlby1hdmVudHVyZS9nZW8tYXZlbnR1cmUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/geo-aventure/geo-aventure.page.ts":
/*!***************************************************!*\
  !*** ./src/app/geo-aventure/geo-aventure.page.ts ***!
  \***************************************************/
/*! exports provided: GeoAventurePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoAventurePage", function() { return GeoAventurePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GeoAventurePage = /** @class */ (function () {
    function GeoAventurePage() {
    }
    GeoAventurePage.prototype.ngOnInit = function () {
    };
    GeoAventurePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-geo-aventure',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./geo-aventure.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/geo-aventure/geo-aventure.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./geo-aventure.page.scss */ "./src/app/geo-aventure/geo-aventure.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GeoAventurePage);
    return GeoAventurePage;
}());



/***/ })

}]);
//# sourceMappingURL=geo-aventure-geo-aventure-module.js.map