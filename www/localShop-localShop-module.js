(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["localShop-localShop-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/localShop/localShop.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/localShop/localShop.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    \r\n    <ion-title size=\"large\" class=\"ion-text-center\">\r\n      Local Shop\r\n    </ion-title>\r\n      \r\n      <!-- <ion-menu side=\"start\" menuId=\"first\">\r\n      <ion-header>\r\n      <ion-toolbar color=\"primary\">\r\n          <ion-title>Start Menu</ion-title>\r\n        </ion-toolbar>\r\n      </ion-header>\r\n      <ion-content>\r\n        <ion-list>\r\n          <ion-item>Menu Item</ion-item>\r\n          <ion-item>Menu Item</ion-item>\r\n          <ion-item>Menu Item</ion-item>\r\n          <ion-item>Menu Item</ion-item>\r\n          <ion-item>Menu Item</ion-item>\r\n        </ion-list>\r\n      </ion-content>\r\n    </ion-menu> -->\r\n      <ion-toolbar>\r\n        <ion-searchbar></ion-searchbar>\r\n        <ion-button slot=\"end\">\r\n        <ion-icon slot=\"icon-only\" name=\"create\">\r\n        </ion-icon>\r\n    </ion-button>\r\n      </ion-toolbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n \r\n\r\n  <ion-header> \r\n    <ion-toolbar color=\"success\"> \r\n    <ion-title class=\"ion-text-center\">\r\n    Acceuil  & Tuto\r\n    </ion-title> \r\n    </ion-toolbar> \r\n   </ion-header> \r\n\r\n \r\n\r\n\r\n   <ion-content class=\"ion-padding\" scroll-y=\"false\" color=\"dark\"> \r\n    <ion-slides> \r\n    <ion-slide> \r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-item>\r\n            <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\r\n            <ion-label>Aller à la découverte de votre environement</ion-label>\r\n            <ion-button fill=\"outline\" slot=\"end\" routerLink=\"/tabs/geoCatching\">Maps</ion-button>\r\n          </ion-item>\r\n          <ion-img width=\"90\" height=\"90\" src=\"./assets/img/h.jfif\"></ion-img>\r\n        </ion-card-header>\r\n      \r\n        <ion-card-content>\r\n          Maintenant c'est possible d'apprendre en jouant Bonus gagnez des points pour accéder à différentes offres de votre secteur\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-slide> \r\n\r\n\r\n    <ion-slide> \r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-item>\r\n            <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\r\n            <ion-label>Scanner directement chez le partenaire pour votre offre </ion-label>\r\n            <ion-button fill=\"outline\" slot=\"end\">View</ion-button>\r\n          </ion-item>\r\n          <ion-img width=\"90\" height=\"90\" src=\"./assets/img/htdx.jfif\"></ion-img>\r\n        </ion-card-header>\r\n      \r\n        <ion-card-content>\r\n          Une fois un certain nombre de QRCode collecter, sur votre profil ce trouverons des badges auquel seront associer à des points, il y aura plus qu'a choisir les commerces Partenaires de l'application\r\n        </ion-card-content>\r\n      </ion-card>\r\n     </ion-slide>\r\n     \r\n     \r\n     <ion-slide>\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-item>\r\n            <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\r\n            <ion-label>Aller à la découverte de votre environement</ion-label>\r\n            <ion-button fill=\"outline\" slot=\"end\" routerLink=\"/tabs/geoCatching\">Maps</ion-button>\r\n          </ion-item>\r\n          <ion-img width=\"80\" height=\"80\" src=\"./assets/img/undraw_a_day_off_w9ex.png\"></ion-img>\r\n        </ion-card-header>\r\n      </ion-card> \r\n\r\n     </ion-slide> \r\n\r\n\r\n     <ion-slide> \r\n     <img src=\"1280px-Ionic_Logo.svg.png\"> \r\n     <h2>Ready to Start?</h2> \r\n     <ion-button fill=\"clear\" [routerLink]=\"['/tabs/profile']\" routerLinkActive=\"router-link-active\" >Continue <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon></ion-button> \r\n     </ion-slide> \r\n    </ion-slides> \r\n    </ion-content>  \r\n\r\n  <ion-slides>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-item>\r\n        <ion-icon name=\"card\" slot=\"start\"></ion-icon>\r\n      </ion-item>\r\n      <ion-img width=\"90\" height=\"90\" src=\"./assets/img/htdx.jfif\"></ion-img>\r\n    </ion-card-header>\r\n  \r\n    <ion-card-content>\r\n     Transformer vos efforts en points, on dit que l'effort paye et bien c'est presque le cas,\r\n      ici la recherche de QRCode vous permet de faire de cette activité ludique\r\n       un moyen de gagner des offres à utilisé chez les partenaires associés\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-subtitle class=\"ion-text-center\">Card Subtitle</ion-card-subtitle>\r\n      <ion-card-title class=\"padding\">Card Title</ion-card-title>\r\n       <ion-card-content>\r\n           Bienvenue à Local Shop, L'application dans lequel vous pourrez faire du Géocatching en s'amusant, le but est de trouver les QRCodes afin de remporter des points. Ces points te donnerons acces à des Badges qui eux te donnerons accé à des offres à utilisé chez nos partenaires locaux ou autres surprises cadeaux.\r\n           Alors qu'est-ce qu'ont attends ?!!\r\n       </ion-card-content>\r\n  </ion-card>\r\n</ion-slides> \r\n\r\n\r\n <ion-card *ngFor=\"let image of images\">\r\n    <ion-img [src]=\"image.url\"></ion-img>\r\n    <ion-card-header>\r\n      <ion-card-subtitle>{{ image.name }}</ion-card-subtitle>\r\n    </ion-card-header>\r\n  </ion-card>\r\n\r\n\r\n  <ion-card>\r\n    <ion-item href=\"#\" class=\"activated\">\r\n      <ion-icon name=\"wifi\" slot=\"start\"></ion-icon>\r\n      <ion-label>Tuto</ion-label>\r\n    </ion-item>\r\n  \r\n    <ion-item href=\"#\">\r\n      <ion-icon name=\"walk\" slot=\"start\"></ion-icon>\r\n      <ion-label>Géocatching</ion-label>\r\n    </ion-item>\r\n  \r\n    <ion-item class=\"activated\">\r\n      <ion-icon name=\"qr-scanner\" slot=\"start\"></ion-icon>\r\n      <ion-label>QR Code</ion-label>\r\n    </ion-item>\r\n  \r\n    <ion-item>\r\n      <ion-icon slot=\"start\" name=\"card\"></ion-icon>\r\n      <ion-label>Echange avec partenaires</ion-label>\r\n    </ion-item>\r\n  </ion-card>\r\n\r\n \r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/localShop/localShop.module.ts":
/*!***********************************************!*\
  !*** ./src/app/localShop/localShop.module.ts ***!
  \***********************************************/
/*! exports provided: LocalShopPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalShopPageModule", function() { return LocalShopPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _localShop_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./localShop.page */ "./src/app/localShop/localShop.page.ts");







var LocalShopPageModule = /** @class */ (function () {
    function LocalShopPageModule() {
    }
    LocalShopPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _localShop_page__WEBPACK_IMPORTED_MODULE_6__["LocalShopPage"] }])
            ],
            declarations: [_localShop_page__WEBPACK_IMPORTED_MODULE_6__["LocalShopPage"]]
        })
    ], LocalShopPageModule);
    return LocalShopPageModule;
}());



/***/ }),

/***/ "./src/app/localShop/localShop.page.scss":
/*!***********************************************!*\
  !*** ./src/app/localShop/localShop.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n:root {\n  --ion-safe-area-top: 25px;\n  --ion-safe-area-bottom: 27px;\n}\n\n.swiper-slide {\n  display: block;\n}\n\nion-slide > h2 {\n  margin-top: 3rem;\n}\n\nion-slide > img {\n  max-height: 60%;\n  max-width: 75%;\n  margin: 42px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYWxTaG9wL0M6XFxVc2Vyc1xcQ2hlQmVuXFxPbmVEcml2ZVxcQnVyZWF1XFxQcm9qZXQgTnVtw6lyaXF1ZXNcXFByb2pldCBJT05JQ1xcUHJvamV0IEFwcFNcXExvY2FsU2hvcFxcRW4gY291clxcTG9jYWxTaG9wQXBwMVxcTG9jYWxTaG9wQXBwMVxcQXBwMS9zcmNcXGFwcFxcbG9jYWxTaG9wXFxsb2NhbFNob3AucGFnZS5zY3NzIiwic3JjL2FwcC9sb2NhbFNob3AvbG9jYWxTaG9wLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7QUNDRjs7QURDRTtFQUNBLGNBQUE7QUNFRjs7QURBRTtFQUNBLGdCQUFBO0FDR0Y7O0FEREU7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNJRiIsImZpbGUiOiJzcmMvYXBwL2xvY2FsU2hvcC9sb2NhbFNob3AucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuOnJvb3QgeyBcclxuICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyNXB4OyBcclxuICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiAyN3B4OyBcclxuICB9IFxyXG4gIC5zd2lwZXItc2xpZGUgeyBcclxuICBkaXNwbGF5OiBibG9jazsgXHJcbiAgfSBcclxuICBpb24tc2xpZGUgPiBoMiB7IFxyXG4gIG1hcmdpbi10b3A6IDMuMHJlbTsgXHJcbiAgfSBcclxuICBpb24tc2xpZGUgPiBpbWcgeyBcclxuICBtYXgtaGVpZ2h0OiA2MCU7IFxyXG4gIG1heC13aWR0aDogNzUlOyBcclxuICBtYXJnaW46IDQycHggMDsgXHJcbiAgfSIsIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuOnJvb3Qge1xuICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyNXB4O1xuICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiAyN3B4O1xufVxuXG4uc3dpcGVyLXNsaWRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmlvbi1zbGlkZSA+IGgyIHtcbiAgbWFyZ2luLXRvcDogM3JlbTtcbn1cblxuaW9uLXNsaWRlID4gaW1nIHtcbiAgbWF4LWhlaWdodDogNjAlO1xuICBtYXgtd2lkdGg6IDc1JTtcbiAgbWFyZ2luOiA0MnB4IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/localShop/localShop.page.ts":
/*!*********************************************!*\
  !*** ./src/app/localShop/localShop.page.ts ***!
  \*********************************************/
/*! exports provided: LocalShopPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalShopPage", function() { return LocalShopPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");




var LocalShopPage = /** @class */ (function () {
    function LocalShopPage(afDB, afSG) {
        this.afDB = afDB;
        this.afSG = afSG;
        this.images = [];
        this.getImagesDatabase();
    }
    LocalShopPage.prototype.getImagesDatabase = function () {
        var _this = this;
        this.afDB.list('Images/').snapshotChanges(['child_added']).subscribe(function (images) {
            console.log(images);
            images.forEach(function (image) {
                console.log('Référence Images: ' + image.payload.exportVal().ref);
                _this.getImagesStorage(image);
            });
        });
    };
    LocalShopPage.prototype.getImagesStorage = function (image) {
        var _this = this;
        var imgRef = image.payload.exportVal().ref;
        this.afSG.ref(imgRef).getDownloadURL().subscribe(function (imgUrl) {
            console.log(imgUrl);
            _this.images.push({
                name: image.payload.exportVal().name,
                url: imgUrl
            });
        });
    };
    LocalShopPage.ctorParameters = function () { return [
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] }
    ]; };
    LocalShopPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-localSop',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./localShop.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/localShop/localShop.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./localShop.page.scss */ "./src/app/localShop/localShop.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]])
    ], LocalShopPage);
    return LocalShopPage;
}());



/***/ })

}]);
//# sourceMappingURL=localShop-localShop-module.js.map