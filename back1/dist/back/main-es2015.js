(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _verification_verification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./verification/verification.component */ "./src/app/verification/verification.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _sellform_sellform_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sellform/sellform.component */ "./src/app/sellform/sellform.component.ts");
/* harmony import */ var _gift_gift_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gift/gift.component */ "./src/app/gift/gift.component.ts");
/* harmony import */ var _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forgotpassword/forgotpassword.component */ "./src/app/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var _cardcreation_cardcreation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cardcreation/cardcreation.component */ "./src/app/cardcreation/cardcreation.component.ts");












const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"] },
    { path: 'signup', component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'verify1', component: _verification_verification_component__WEBPACK_IMPORTED_MODULE_4__["VerificationComponent"] },
    { path: 'sell', component: _sellform_sellform_component__WEBPACK_IMPORTED_MODULE_6__["SellformComponent"] },
    { path: 'gift', component: _gift_gift_component__WEBPACK_IMPORTED_MODULE_7__["GiftComponent"] },
    { path: 'forgotpassword', component: _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_8__["ForgotpasswordComponent"] },
    { path: 'cardcreated', component: _cardcreation_cardcreation_component__WEBPACK_IMPORTED_MODULE_9__["CardcreationComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'back';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _directives_gsap_bounce_in_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/gsap/bounce-in-animations */ "./src/app/directives/gsap/bounce-in-animations.ts");
/* harmony import */ var _directives_gsap_fade_in_animation_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/gsap/fade-in-animation.directive */ "./src/app/directives/gsap/fade-in-animation.directive.ts");
/* harmony import */ var _directives_gsap_rotations_in_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/gsap/rotations-in-animations */ "./src/app/directives/gsap/rotations-in-animations.ts");
/* harmony import */ var _directives_gsap_moving_in_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/gsap/moving-in-animations */ "./src/app/directives/gsap/moving-in-animations.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _verification_verification_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./verification/verification.component */ "./src/app/verification/verification.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _sellform_sellform_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./sellform/sellform.component */ "./src/app/sellform/sellform.component.ts");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _gift_gift_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./gift/gift.component */ "./src/app/gift/gift.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _men_men_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./men/men.component */ "./src/app/men/men.component.ts");
/* harmony import */ var _women_women_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./women/women.component */ "./src/app/women/women.component.ts");
/* harmony import */ var _kids_kids_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./kids/kids.component */ "./src/app/kids/kids.component.ts");
/* harmony import */ var _liked_liked_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./liked/liked.component */ "./src/app/liked/liked.component.ts");
/* harmony import */ var _bag_bag_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./bag/bag.component */ "./src/app/bag/bag.component.ts");
/* harmony import */ var _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./forgotpassword/forgotpassword.component */ "./src/app/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _cardcreation_cardcreation_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./cardcreation/cardcreation.component */ "./src/app/cardcreation/cardcreation.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");














// import {MatCardModule} from '@angular/material/card';
// MAT FIELDS







// import { HttpModule } from '@angular/http';
// import { HttpClientModule, HttpClient } from '@angular/common/http';
















// import {StorageBucket} from "@angular/fire/storage";

// import { environment } from "../environments/environment";




class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
            // HttpClient,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_35__["AngularFireStorageModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_34__["AngularFireModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_38__["MatProgressSpinnerModule"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_36__["AngularFireDatabaseModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_34__["AngularFireModule"].initializeApp({
                apiKey: "AIzaSyD4TA6k34GEBF60o8Kg51Km8uNAYvz0IYw",
                authDomain: "commerce-277810.firebaseapp.com",
                projectId: "commerce-277810",
                storageBucket: "commerce-277810.appspot.com",
            }),
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_35__["AngularFireStorageModule"]
            // AngularFireModule.initializeApp(environment.firebaseConfig, "cloud")
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _directives_gsap_bounce_in_animations__WEBPACK_IMPORTED_MODULE_9__["BounceInAnimationDirective"],
        _directives_gsap_fade_in_animation_directive__WEBPACK_IMPORTED_MODULE_10__["FadeInAnimationDirective"],
        _directives_gsap_rotations_in_animations__WEBPACK_IMPORTED_MODULE_11__["ContinousrotationInAnimationDirective"],
        _directives_gsap_moving_in_animations__WEBPACK_IMPORTED_MODULE_12__["MovingInAnimationDirective"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
        _verification_verification_component__WEBPACK_IMPORTED_MODULE_21__["VerificationComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_22__["NavbarComponent"],
        _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_23__["HomepageComponent"],
        _sellform_sellform_component__WEBPACK_IMPORTED_MODULE_24__["SellformComponent"],
        _gift_gift_component__WEBPACK_IMPORTED_MODULE_26__["GiftComponent"],
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_27__["SidebarComponent"],
        _men_men_component__WEBPACK_IMPORTED_MODULE_28__["MenComponent"],
        _women_women_component__WEBPACK_IMPORTED_MODULE_29__["WomenComponent"],
        _kids_kids_component__WEBPACK_IMPORTED_MODULE_30__["KidsComponent"],
        _liked_liked_component__WEBPACK_IMPORTED_MODULE_31__["LikedComponent"],
        _bag_bag_component__WEBPACK_IMPORTED_MODULE_32__["BagComponent"],
        _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_33__["ForgotpasswordComponent"],
        _cardcreation_cardcreation_component__WEBPACK_IMPORTED_MODULE_37__["CardcreationComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
        // HttpClient,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_35__["AngularFireStorageModule"],
        _angular_fire__WEBPACK_IMPORTED_MODULE_34__["AngularFireModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_38__["MatProgressSpinnerModule"],
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_36__["AngularFireDatabaseModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_34__["AngularFireModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_35__["AngularFireStorageModule"]
        // AngularFireModule.initializeApp(environment.firebaseConfig, "cloud")
    ] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _directives_gsap_bounce_in_animations__WEBPACK_IMPORTED_MODULE_9__["BounceInAnimationDirective"],
                    _directives_gsap_fade_in_animation_directive__WEBPACK_IMPORTED_MODULE_10__["FadeInAnimationDirective"],
                    _directives_gsap_rotations_in_animations__WEBPACK_IMPORTED_MODULE_11__["ContinousrotationInAnimationDirective"],
                    _directives_gsap_moving_in_animations__WEBPACK_IMPORTED_MODULE_12__["MovingInAnimationDirective"],
                    _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                    _verification_verification_component__WEBPACK_IMPORTED_MODULE_21__["VerificationComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_22__["NavbarComponent"],
                    _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_23__["HomepageComponent"],
                    _sellform_sellform_component__WEBPACK_IMPORTED_MODULE_24__["SellformComponent"],
                    _gift_gift_component__WEBPACK_IMPORTED_MODULE_26__["GiftComponent"],
                    _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_27__["SidebarComponent"],
                    _men_men_component__WEBPACK_IMPORTED_MODULE_28__["MenComponent"],
                    _women_women_component__WEBPACK_IMPORTED_MODULE_29__["WomenComponent"],
                    _kids_kids_component__WEBPACK_IMPORTED_MODULE_30__["KidsComponent"],
                    _liked_liked_component__WEBPACK_IMPORTED_MODULE_31__["LikedComponent"],
                    _bag_bag_component__WEBPACK_IMPORTED_MODULE_32__["BagComponent"],
                    _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_33__["ForgotpasswordComponent"],
                    _cardcreation_cardcreation_component__WEBPACK_IMPORTED_MODULE_37__["CardcreationComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
                    // HttpClient,
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"],
                    _angular_fire_storage__WEBPACK_IMPORTED_MODULE_35__["AngularFireStorageModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_34__["AngularFireModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_38__["MatProgressSpinnerModule"],
                    _angular_fire_database__WEBPACK_IMPORTED_MODULE_36__["AngularFireDatabaseModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_34__["AngularFireModule"].initializeApp({
                        apiKey: "AIzaSyD4TA6k34GEBF60o8Kg51Km8uNAYvz0IYw",
                        authDomain: "commerce-277810.firebaseapp.com",
                        projectId: "commerce-277810",
                        storageBucket: "commerce-277810.appspot.com",
                    }),
                    _angular_fire_storage__WEBPACK_IMPORTED_MODULE_35__["AngularFireStorageModule"]
                    // AngularFireModule.initializeApp(environment.firebaseConfig, "cloud")
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/bag/bag.component.ts":
/*!**************************************!*\
  !*** ./src/app/bag/bag.component.ts ***!
  \**************************************/
/*! exports provided: BagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BagComponent", function() { return BagComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BagComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
BagComponent.ɵfac = function BagComponent_Factory(t) { return new (t || BagComponent)(); };
BagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BagComponent, selectors: [["app-bag"]], decls: 2, vars: 0, template: function BagComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "bag works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhZy9iYWcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BagComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bag',
                templateUrl: './bag.component.html',
                styleUrls: ['./bag.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/cardcreation/cardcreation.component.ts":
/*!********************************************************!*\
  !*** ./src/app/cardcreation/cardcreation.component.ts ***!
  \********************************************************/
/*! exports provided: CardcreationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardcreationComponent", function() { return CardcreationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_sellservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/sellservice.service */ "./src/services/sellservice.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");







class CardcreationComponent {
    constructor(router, sell, snackbar) {
        this.router = router;
        this.sell = sell;
        this.snackbar = snackbar;
    }
    ngOnInit() {
        this.finalcarddetails = this.sell.carddetails;
        console.log("finalcarddetails", this.finalcarddetails);
    }
}
CardcreationComponent.ɵfac = function CardcreationComponent_Factory(t) { return new (t || CardcreationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sellservice_service__WEBPACK_IMPORTED_MODULE_2__["SellserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
CardcreationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardcreationComponent, selectors: [["app-cardcreation"]], decls: 26, vars: 4, consts: [[1, "main"], [1, "matter"], [1, "card"], [1, "card1"], [3, "src"], [1, "example-card"], ["mat-card-avatar", "", 1, "example-header-image"], ["mat-card-image", "", "alt", "Photo of a Shiba Inu", 3, "src"], [1, "butt"], ["mat-raised-button", "", "color", "primary"]], template: function CardcreationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Succesfully added to our list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " {{!-- ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " --}} ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Go to Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.finalcarddetails.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.finalcarddetails.productname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.finalcarddetails.companyname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.finalcarddetails.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: [".main[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23ffffff' stroke-width='0.7' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='scale(45.15) translate(-977.85 -733.39)'%3E%3Cuse fill='%23fafafa' href='%23s' y='2'/%3E%3Cuse fill='%23fafafa' href='%23s' x='1' y='2'/%3E%3Cuse fill='%23f5f5f5' href='%23s' x='2' y='2'/%3E%3Cuse fill='%23f5f5f5' href='%23s'/%3E%3Cuse fill='%23f0f0f0' href='%23s' x='2'/%3E%3Cuse fill='%23f0f0f0' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='scale(45.15) translate(-977.85 -733.39)'%3E%3Cg fill='%23ebebeb'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(45.15) translate(-977.85 -733.39)'%3E%3Cg fill='%23ebebeb'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(45.15) translate(-977.85 -733.39)'%3E%3Cg fill='%23e5e5e5'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='scale(45.15) translate(-977.85 -733.39)'%3E%3Cg fill='%23ffffff'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%23e0e0e0'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='scale(45.15) translate(-977.85 -733.39)'%3E%3Cg fill='%23F60'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='scale(45.15) translate(-977.85 -733.39)'%3E%3Cg fill='%23F60'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='scale(45.15) translate(-977.85 -733.39)'%3E%3Cg fill='%23F60'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E\");\n}\n.main[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  display: flex;\n}\n.main[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card1[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  width: 20%;\n  height: 30%;\n}\n.main[_ngcontent-%COMP%]   .matter[_ngcontent-%COMP%] {\n  text-align: center;\n  color: green;\n  margin-top: 40px;\n}\n.main[_ngcontent-%COMP%]   .butt[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZGNyZWF0aW9uL0M6XFxVc2Vyc1xcVHVsYXNpXFxEZXNrdG9wXFxiYWNrZW5kXFxmcm9udGVuZC9zcmNcXGFwcFxcY2FyZGNyZWF0aW9uXFxjYXJkY3JlYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhcmRjcmVhdGlvbi9jYXJkY3JlYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSw4Z0lBQUE7QUNBSjtBRENJO0VBQ0ksYUFBQTtBQ0NSO0FEQ1E7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDQ1o7QURJSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDRlI7QURJSTtFQUNJLGdCQUFBO0VBRUEsa0JBQUE7QUNIUiIsImZpbGUiOiJzcmMvYXBwL2NhcmRjcmVhdGlvbi9jYXJkY3JlYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm1haW4ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyMDAwIDE1MDAnJTNFJTNDZGVmcyUzRSUzQ3JlY3Qgc3Ryb2tlPSclMjNmZmZmZmYnIHN0cm9rZS13aWR0aD0nMC43JyB3aWR0aD0nMScgaGVpZ2h0PScxJyBpZD0ncycvJTNFJTNDcGF0dGVybiBpZD0nYScgd2lkdGg9JzMnIGhlaWdodD0nMycgcGF0dGVyblVuaXRzPSd1c2VyU3BhY2VPblVzZScgcGF0dGVyblRyYW5zZm9ybT0nc2NhbGUoNDUuMTUpIHRyYW5zbGF0ZSgtOTc3Ljg1IC03MzMuMzkpJyUzRSUzQ3VzZSBmaWxsPSclMjNmYWZhZmEnIGhyZWY9JyUyM3MnIHk9JzInLyUzRSUzQ3VzZSBmaWxsPSclMjNmYWZhZmEnIGhyZWY9JyUyM3MnIHg9JzEnIHk9JzInLyUzRSUzQ3VzZSBmaWxsPSclMjNmNWY1ZjUnIGhyZWY9JyUyM3MnIHg9JzInIHk9JzInLyUzRSUzQ3VzZSBmaWxsPSclMjNmNWY1ZjUnIGhyZWY9JyUyM3MnLyUzRSUzQ3VzZSBmaWxsPSclMjNmMGYwZjAnIGhyZWY9JyUyM3MnIHg9JzInLyUzRSUzQ3VzZSBmaWxsPSclMjNmMGYwZjAnIGhyZWY9JyUyM3MnIHg9JzEnIHk9JzEnLyUzRSUzQy9wYXR0ZXJuJTNFJTNDcGF0dGVybiBpZD0nYicgd2lkdGg9JzcnIGhlaWdodD0nMTEnIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnIHBhdHRlcm5UcmFuc2Zvcm09J3NjYWxlKDQ1LjE1KSB0cmFuc2xhdGUoLTk3Ny44NSAtNzMzLjM5KSclM0UlM0NnIGZpbGw9JyUyM2ViZWJlYiclM0UlM0N1c2UgaHJlZj0nJTIzcycvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHk9JzUnIC8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMScgeT0nMTAnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScyJyB5PScxJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMicgeT0nNCcvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzMnIHk9JzgnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc0JyB5PSczJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nNCcgeT0nNycvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzUnIHk9JzInLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc1JyB5PSc2Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nNicgeT0nOScvJTNFJTNDL2clM0UlM0MvcGF0dGVybiUzRSUzQ3BhdHRlcm4gaWQ9J2gnIHdpZHRoPSc1JyBoZWlnaHQ9JzEzJyBwYXR0ZXJuVW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBwYXR0ZXJuVHJhbnNmb3JtPSdzY2FsZSg0NS4xNSkgdHJhbnNsYXRlKC05NzcuODUgLTczMy4zOSknJTNFJTNDZyBmaWxsPSclMjNlYmViZWInJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHk9JzUnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB5PSc4Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMScgeT0nMScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzEnIHk9JzknLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxJyB5PScxMicvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzInLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScyJyB5PSc0Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMycgeT0nMicvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzMnIHk9JzYnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSczJyB5PScxMScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzQnIHk9JzMnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc0JyB5PSc3Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nNCcgeT0nMTAnLyUzRSUzQy9nJTNFJTNDL3BhdHRlcm4lM0UlM0NwYXR0ZXJuIGlkPSdjJyB3aWR0aD0nMTcnIGhlaWdodD0nMTMnIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnIHBhdHRlcm5UcmFuc2Zvcm09J3NjYWxlKDQ1LjE1KSB0cmFuc2xhdGUoLTk3Ny44NSAtNzMzLjM5KSclM0UlM0NnIGZpbGw9JyUyM2U1ZTVlNSclM0UlM0N1c2UgaHJlZj0nJTIzcycgeT0nMTEnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScyJyB5PSc5Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nNScgeT0nMTInLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc5JyB5PSc0Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMTInIHk9JzEnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxNicgeT0nNicvJTNFJTNDL2clM0UlM0MvcGF0dGVybiUzRSUzQ3BhdHRlcm4gaWQ9J2QnIHdpZHRoPScxOScgaGVpZ2h0PScxNycgcGF0dGVyblVuaXRzPSd1c2VyU3BhY2VPblVzZScgcGF0dGVyblRyYW5zZm9ybT0nc2NhbGUoNDUuMTUpIHRyYW5zbGF0ZSgtOTc3Ljg1IC03MzMuMzkpJyUzRSUzQ2cgZmlsbD0nJTIzZmZmZmZmJyUzRSUzQ3VzZSBocmVmPSclMjNzJyB5PSc5Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMTYnIHk9JzUnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxNCcgeT0nMicvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzExJyB5PScxMScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzYnIHk9JzE0Jy8lM0UlM0MvZyUzRSUzQ2cgZmlsbD0nJTIzZTBlMGUwJyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSczJyB5PScxMycvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzknIHk9JzcnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxMycgeT0nMTAnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxNScgeT0nNCcvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzE4JyB5PScxJy8lM0UlM0MvZyUzRSUzQy9wYXR0ZXJuJTNFJTNDcGF0dGVybiBpZD0nZScgd2lkdGg9JzQ3JyBoZWlnaHQ9JzUzJyBwYXR0ZXJuVW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBwYXR0ZXJuVHJhbnNmb3JtPSdzY2FsZSg0NS4xNSkgdHJhbnNsYXRlKC05NzcuODUgLTczMy4zOSknJTNFJTNDZyBmaWxsPSclMjNGNjAnJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzInIHk9JzUnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxNicgeT0nMzgnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc0NicgeT0nNDInLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScyOScgeT0nMjAnLyUzRSUzQy9nJTNFJTNDL3BhdHRlcm4lM0UlM0NwYXR0ZXJuIGlkPSdmJyB3aWR0aD0nNTknIGhlaWdodD0nNzEnIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnIHBhdHRlcm5UcmFuc2Zvcm09J3NjYWxlKDQ1LjE1KSB0cmFuc2xhdGUoLTk3Ny44NSAtNzMzLjM5KSclM0UlM0NnIGZpbGw9JyUyM0Y2MCclM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMzMnIHk9JzEzJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMjcnIHk9JzU0Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nNTUnIHk9JzU1Jy8lM0UlM0MvZyUzRSUzQy9wYXR0ZXJuJTNFJTNDcGF0dGVybiBpZD0nZycgd2lkdGg9JzEzOScgaGVpZ2h0PSc5NycgcGF0dGVyblVuaXRzPSd1c2VyU3BhY2VPblVzZScgcGF0dGVyblRyYW5zZm9ybT0nc2NhbGUoNDUuMTUpIHRyYW5zbGF0ZSgtOTc3Ljg1IC03MzMuMzkpJyUzRSUzQ2cgZmlsbD0nJTIzRjYwJyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxMScgeT0nOCcvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzUxJyB5PScxMycvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzE3JyB5PSc3MycvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9Jzk5JyB5PSc1NycvJTNFJTNDL2clM0UlM0MvcGF0dGVybiUzRSUzQy9kZWZzJTNFJTNDcmVjdCBmaWxsPSd1cmwoJTIzYSknIHdpZHRoPScxMDAlMjUnIGhlaWdodD0nMTAwJTI1Jy8lM0UlM0NyZWN0IGZpbGw9J3VybCglMjNiKScgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnLyUzRSUzQ3JlY3QgZmlsbD0ndXJsKCUyM2gpJyB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScvJTNFJTNDcmVjdCBmaWxsPSd1cmwoJTIzYyknIHdpZHRoPScxMDAlMjUnIGhlaWdodD0nMTAwJTI1Jy8lM0UlM0NyZWN0IGZpbGw9J3VybCglMjNkKScgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnLyUzRSUzQ3JlY3QgZmlsbD0ndXJsKCUyM2UpJyB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScvJTNFJTNDcmVjdCBmaWxsPSd1cmwoJTIzZiknIHdpZHRoPScxMDAlMjUnIGhlaWdodD0nMTAwJTI1Jy8lM0UlM0NyZWN0IGZpbGw9J3VybCglMjNnKScgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnLyUzRSUzQy9zdmclM0VcIik7XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBcclxuICAgICAgICAuY2FyZDF7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzAlO1xyXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5tYXR0ZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIH1cclxuICAgIC5idXR0IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgIC8vIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuIiwiLm1haW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDIwMDAgMTUwMCclM0UlM0NkZWZzJTNFJTNDcmVjdCBzdHJva2U9JyUyM2ZmZmZmZicgc3Ryb2tlLXdpZHRoPScwLjcnIHdpZHRoPScxJyBoZWlnaHQ9JzEnIGlkPSdzJy8lM0UlM0NwYXR0ZXJuIGlkPSdhJyB3aWR0aD0nMycgaGVpZ2h0PSczJyBwYXR0ZXJuVW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBwYXR0ZXJuVHJhbnNmb3JtPSdzY2FsZSg0NS4xNSkgdHJhbnNsYXRlKC05NzcuODUgLTczMy4zOSknJTNFJTNDdXNlIGZpbGw9JyUyM2ZhZmFmYScgaHJlZj0nJTIzcycgeT0nMicvJTNFJTNDdXNlIGZpbGw9JyUyM2ZhZmFmYScgaHJlZj0nJTIzcycgeD0nMScgeT0nMicvJTNFJTNDdXNlIGZpbGw9JyUyM2Y1ZjVmNScgaHJlZj0nJTIzcycgeD0nMicgeT0nMicvJTNFJTNDdXNlIGZpbGw9JyUyM2Y1ZjVmNScgaHJlZj0nJTIzcycvJTNFJTNDdXNlIGZpbGw9JyUyM2YwZjBmMCcgaHJlZj0nJTIzcycgeD0nMicvJTNFJTNDdXNlIGZpbGw9JyUyM2YwZjBmMCcgaHJlZj0nJTIzcycgeD0nMScgeT0nMScvJTNFJTNDL3BhdHRlcm4lM0UlM0NwYXR0ZXJuIGlkPSdiJyB3aWR0aD0nNycgaGVpZ2h0PScxMScgcGF0dGVyblVuaXRzPSd1c2VyU3BhY2VPblVzZScgcGF0dGVyblRyYW5zZm9ybT0nc2NhbGUoNDUuMTUpIHRyYW5zbGF0ZSgtOTc3Ljg1IC03MzMuMzkpJyUzRSUzQ2cgZmlsbD0nJTIzZWJlYmViJyUzRSUzQ3VzZSBocmVmPSclMjNzJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeT0nNScgLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxJyB5PScxMCcvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzInIHk9JzEnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScyJyB5PSc0Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMycgeT0nOCcvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzQnIHk9JzMnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc0JyB5PSc3Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nNScgeT0nMicvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzUnIHk9JzYnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc2JyB5PSc5Jy8lM0UlM0MvZyUzRSUzQy9wYXR0ZXJuJTNFJTNDcGF0dGVybiBpZD0naCcgd2lkdGg9JzUnIGhlaWdodD0nMTMnIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnIHBhdHRlcm5UcmFuc2Zvcm09J3NjYWxlKDQ1LjE1KSB0cmFuc2xhdGUoLTk3Ny44NSAtNzMzLjM5KSclM0UlM0NnIGZpbGw9JyUyM2ViZWJlYiclM0UlM0N1c2UgaHJlZj0nJTIzcycgeT0nNScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHk9JzgnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxJyB5PScxJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMScgeT0nOScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzEnIHk9JzEyJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMicvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzInIHk9JzQnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSczJyB5PScyJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMycgeT0nNicvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzMnIHk9JzExJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nNCcgeT0nMycvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzQnIHk9JzcnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc0JyB5PScxMCcvJTNFJTNDL2clM0UlM0MvcGF0dGVybiUzRSUzQ3BhdHRlcm4gaWQ9J2MnIHdpZHRoPScxNycgaGVpZ2h0PScxMycgcGF0dGVyblVuaXRzPSd1c2VyU3BhY2VPblVzZScgcGF0dGVyblRyYW5zZm9ybT0nc2NhbGUoNDUuMTUpIHRyYW5zbGF0ZSgtOTc3Ljg1IC03MzMuMzkpJyUzRSUzQ2cgZmlsbD0nJTIzZTVlNWU1JyUzRSUzQ3VzZSBocmVmPSclMjNzJyB5PScxMScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzInIHk9JzknLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc1JyB5PScxMicvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzknIHk9JzQnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxMicgeT0nMScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzE2JyB5PSc2Jy8lM0UlM0MvZyUzRSUzQy9wYXR0ZXJuJTNFJTNDcGF0dGVybiBpZD0nZCcgd2lkdGg9JzE5JyBoZWlnaHQ9JzE3JyBwYXR0ZXJuVW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBwYXR0ZXJuVHJhbnNmb3JtPSdzY2FsZSg0NS4xNSkgdHJhbnNsYXRlKC05NzcuODUgLTczMy4zOSknJTNFJTNDZyBmaWxsPSclMjNmZmZmZmYnJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHk9JzknLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxNicgeT0nNScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzE0JyB5PScyJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMTEnIHk9JzExJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nNicgeT0nMTQnLyUzRSUzQy9nJTNFJTNDZyBmaWxsPSclMjNlMGUwZTAnJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzMnIHk9JzEzJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nOScgeT0nNycvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzEzJyB5PScxMCcvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzE1JyB5PSc0Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMTgnIHk9JzEnLyUzRSUzQy9nJTNFJTNDL3BhdHRlcm4lM0UlM0NwYXR0ZXJuIGlkPSdlJyB3aWR0aD0nNDcnIGhlaWdodD0nNTMnIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnIHBhdHRlcm5UcmFuc2Zvcm09J3NjYWxlKDQ1LjE1KSB0cmFuc2xhdGUoLTk3Ny44NSAtNzMzLjM5KSclM0UlM0NnIGZpbGw9JyUyM0Y2MCclM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMicgeT0nNScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzE2JyB5PSczOCcvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzQ2JyB5PSc0MicvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzI5JyB5PScyMCcvJTNFJTNDL2clM0UlM0MvcGF0dGVybiUzRSUzQ3BhdHRlcm4gaWQ9J2YnIHdpZHRoPSc1OScgaGVpZ2h0PSc3MScgcGF0dGVyblVuaXRzPSd1c2VyU3BhY2VPblVzZScgcGF0dGVyblRyYW5zZm9ybT0nc2NhbGUoNDUuMTUpIHRyYW5zbGF0ZSgtOTc3Ljg1IC03MzMuMzkpJyUzRSUzQ2cgZmlsbD0nJTIzRjYwJyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSczMycgeT0nMTMnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScyNycgeT0nNTQnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc1NScgeT0nNTUnLyUzRSUzQy9nJTNFJTNDL3BhdHRlcm4lM0UlM0NwYXR0ZXJuIGlkPSdnJyB3aWR0aD0nMTM5JyBoZWlnaHQ9Jzk3JyBwYXR0ZXJuVW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBwYXR0ZXJuVHJhbnNmb3JtPSdzY2FsZSg0NS4xNSkgdHJhbnNsYXRlKC05NzcuODUgLTczMy4zOSknJTNFJTNDZyBmaWxsPSclMjNGNjAnJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzExJyB5PSc4Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nNTEnIHk9JzEzJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMTcnIHk9JzczJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nOTknIHk9JzU3Jy8lM0UlM0MvZyUzRSUzQy9wYXR0ZXJuJTNFJTNDL2RlZnMlM0UlM0NyZWN0IGZpbGw9J3VybCglMjNhKScgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnLyUzRSUzQ3JlY3QgZmlsbD0ndXJsKCUyM2IpJyB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScvJTNFJTNDcmVjdCBmaWxsPSd1cmwoJTIzaCknIHdpZHRoPScxMDAlMjUnIGhlaWdodD0nMTAwJTI1Jy8lM0UlM0NyZWN0IGZpbGw9J3VybCglMjNjKScgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnLyUzRSUzQ3JlY3QgZmlsbD0ndXJsKCUyM2QpJyB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScvJTNFJTNDcmVjdCBmaWxsPSd1cmwoJTIzZSknIHdpZHRoPScxMDAlMjUnIGhlaWdodD0nMTAwJTI1Jy8lM0UlM0NyZWN0IGZpbGw9J3VybCglMjNmKScgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnLyUzRSUzQ3JlY3QgZmlsbD0ndXJsKCUyM2cpJyB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScvJTNFJTNDL3N2ZyUzRVwiKTtcbn1cbi5tYWluIC5jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5tYWluIC5jYXJkIC5jYXJkMSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogMzAlO1xufVxuLm1haW4gLm1hdHRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGdyZWVuO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuLm1haW4gLmJ1dHQge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardcreationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cardcreation',
                templateUrl: './cardcreation.component.html',
                styleUrls: ['./cardcreation.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_sellservice_service__WEBPACK_IMPORTED_MODULE_2__["SellserviceService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/directives/gsap/bounce-in-animations.ts":
/*!*********************************************************!*\
  !*** ./src/app/directives/gsap/bounce-in-animations.ts ***!
  \*********************************************************/
/*! exports provided: BounceInAnimationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BounceInAnimationDirective", function() { return BounceInAnimationDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_animation_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-animation.directive */ "./src/app/directives/gsap/core-animation.directive.ts");



class BounceInAnimationDirective extends _core_animation_directive__WEBPACK_IMPORTED_MODULE_1__["CoreAnimationDirective"] {
    constructor(element) {
        super(element);
        this.element = element;
    }
    ngOnInit() {
        // perform animation
        this.animateIn();
    }
    animateIn() {
        this.timeline.from(this.element.nativeElement, this.duration, { opacity: '0', y: 160, x: 180, ease: "back" }, this.delay);
        // TweenMax.to(this.element.nativeElement, this.duration, {css:{top:"100px", left:"50px", backgroundColor:"#ff0000", fontSize:"12px"}, this.delay});
        // TweenMax.to(this.element.nativeElement, this.duration, {backgroundColor:"#ff0000", width:"50%", top:"100px", ease:Power2.easeInOut},this.delay);
        super.animateIn();
    }
}
BounceInAnimationDirective.ɵfac = function BounceInAnimationDirective_Factory(t) { return new (t || BounceInAnimationDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
BounceInAnimationDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: BounceInAnimationDirective, selectors: [["", "bounceInAnimation", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BounceInAnimationDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[bounceInAnimation]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/directives/gsap/core-animation.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/directives/gsap/core-animation.directive.ts ***!
  \*************************************************************/
/*! exports provided: CoreAnimationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreAnimationDirective", function() { return CoreAnimationDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");



class CoreAnimationDirective {
    constructor(element) {
        this.element = element;
        // @Input() class = "a"
        this.duration = 1;
        this.delay = 0;
        this.complete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.reverseComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.timeline = new gsap__WEBPACK_IMPORTED_MODULE_1__["TimelineMax"]({
            onComplete: _ => this.complete.emit(),
            onReverseComplete: _ => this.reverseComplete.emit(),
            paused: true,
            reversed: true
        });
    }
    animateIn() {
        if (this.timeline.isActive()) {
            this.timeline.kill();
        }
        this.timeline.play();
    }
}
CoreAnimationDirective.ɵfac = function CoreAnimationDirective_Factory(t) { return new (t || CoreAnimationDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
CoreAnimationDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CoreAnimationDirective, inputs: { duration: "duration", delay: "delay" }, outputs: { complete: "complete", reverseComplete: "reverseComplete" } });


/***/ }),

/***/ "./src/app/directives/gsap/fade-in-animation.directive.ts":
/*!****************************************************************!*\
  !*** ./src/app/directives/gsap/fade-in-animation.directive.ts ***!
  \****************************************************************/
/*! exports provided: FadeInAnimationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FadeInAnimationDirective", function() { return FadeInAnimationDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_animation_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-animation.directive */ "./src/app/directives/gsap/core-animation.directive.ts");



class FadeInAnimationDirective extends _core_animation_directive__WEBPACK_IMPORTED_MODULE_1__["CoreAnimationDirective"] {
    constructor(element) {
        super(element);
        this.element = element;
    }
    ngOnInit() {
        // perform animation
        this.animateIn();
    }
    animateIn() {
        // console.log('.................',this.element.nativeElement.className)
        // if(this.element.nativeElement.className=='anim') {
        this.timeline.from(this.element.nativeElement, this.duration, { opacity: '0', y: 100, rotation: 45, ease: "Expo.easeInOut" }, this.delay);
        // TweenMax.from(this.element.nativeElement, 1.5, {opacity:0, delay:1});
        super.animateIn();
    }
}
FadeInAnimationDirective.ɵfac = function FadeInAnimationDirective_Factory(t) { return new (t || FadeInAnimationDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
FadeInAnimationDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: FadeInAnimationDirective, selectors: [["", "fadeInAnimation", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FadeInAnimationDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[fadeInAnimation]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/directives/gsap/moving-in-animations.ts":
/*!*********************************************************!*\
  !*** ./src/app/directives/gsap/moving-in-animations.ts ***!
  \*********************************************************/
/*! exports provided: MovingInAnimationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovingInAnimationDirective", function() { return MovingInAnimationDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _core_animation_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core-animation.directive */ "./src/app/directives/gsap/core-animation.directive.ts");





class MovingInAnimationDirective extends _core_animation_directive__WEBPACK_IMPORTED_MODULE_2__["CoreAnimationDirective"] {
    constructor(element) {
        super(element);
        this.element = element;
    }
    ngOnInit() {
        // perform animation
        this.animateIn();
    }
    animateIn() {
        var tl = new gsap__WEBPACK_IMPORTED_MODULE_1__["TimelineMax"]({ repeat: -1 });
        tl.to(this.element.nativeElement, 30, {
            backgroundPosition: "-2247px 0px",
            backgroundColor: 'red',
            //autoRound:false,
            ease: gsap__WEBPACK_IMPORTED_MODULE_1__["Linear"].easeNone
        });
        super.animateIn();
    }
}
MovingInAnimationDirective.ɵfac = function MovingInAnimationDirective_Factory(t) { return new (t || MovingInAnimationDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
MovingInAnimationDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MovingInAnimationDirective, selectors: [["", "movingInAnimation", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovingInAnimationDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[movingInAnimation]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/directives/gsap/rotations-in-animations.ts":
/*!************************************************************!*\
  !*** ./src/app/directives/gsap/rotations-in-animations.ts ***!
  \************************************************************/
/*! exports provided: ContinousrotationInAnimationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContinousrotationInAnimationDirective", function() { return ContinousrotationInAnimationDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_animation_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-animation.directive */ "./src/app/directives/gsap/core-animation.directive.ts");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");





class ContinousrotationInAnimationDirective extends _core_animation_directive__WEBPACK_IMPORTED_MODULE_1__["CoreAnimationDirective"] {
    constructor(element) {
        super(element);
        this.element = element;
    }
    ngOnInit() {
        // perform animation
        this.animateIn();
    }
    animateIn() {
        gsap__WEBPACK_IMPORTED_MODULE_2__["TweenLite"].to(this.element.nativeElement, 5, { x: '1000px', ease: gsap__WEBPACK_IMPORTED_MODULE_2__["SteppedEase"].config(10) });
        var t1 = this.timeline.from(this.element.nativeElement, this.duration, { opacity: '0', rotate: 270, repeat: -1, ease: "back" }, this.delay);
        // TweenLite.to(this.element.nativeElement, 5, {x:'-100px', ease:SteppedEase.config(10)});
        // t1.to(this.element.nativeElement, 30, {
        //     backgroundImage:("https://s3-us-west-2.amazonaws.com/s.cdpn.io/56901/bg-clouds.png"),
        //     backgroundPosition: "-2247px 0px",
        //     // backgroundColor:"red",
        //     //autoRound:false,
        //     ease: Linear.easeNone
        // });
        // for (var i = 0; i < 4; i++){ 
        // this.timeline.set(this.element.nativeElement,{x:"+=100"},"+=" + 0.2)
        // }
        // TweenMax.to(this.element.nativeElement, this.duration, {css:{top:"100px", left:"50px", backgroundColor:"#ff0000", fontSize:"12px"}, this.delay});
        // TweenMax.to(this.element.nativeElement, this.duration, {backgroundColor:"#ff0000", width:"50%", top:"100px", ease:Power2.easeInOut},this.delay);
        super.animateIn();
    }
}
ContinousrotationInAnimationDirective.ɵfac = function ContinousrotationInAnimationDirective_Factory(t) { return new (t || ContinousrotationInAnimationDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ContinousrotationInAnimationDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ContinousrotationInAnimationDirective, selectors: [["", "continousrotateInAnimation", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContinousrotationInAnimationDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[continousrotateInAnimation]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.component.ts":
/*!************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.component.ts ***!
  \************************************************************/
/*! exports provided: ForgotpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordComponent", function() { return ForgotpasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");










class ForgotpasswordComponent {
    constructor(fb, auth, snackbar, router) {
        this.fb = fb;
        this.auth = auth;
        this.snackbar = snackbar;
        this.router = router;
        this.passwordapproval = false;
        this.forgetpasswordform = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]],
        });
    }
    ngOnInit() {
    }
    showSnackbar(message) {
        console.log('snckbar');
        this.snackbar.open(message, "ok", { duration: 15000 });
    }
    Onsubmit() {
        console.log('loginForm', this.forgetpasswordform.value);
        this.auth.genneralpasswordchange(this.forgetpasswordform.value).subscribe(data => {
            console.log(data, 'datta');
            if (data === 'doesnot exist') {
                this.showSnackbar('signupfirst');
            }
            else if (data === 'exists') {
                // this.passwordapproval = true;
                this.router.navigate(['/login']);
            }
            else {
                this.showSnackbar('check your mail');
            }
        });
    }
}
ForgotpasswordComponent.ɵfac = function ForgotpasswordComponent_Factory(t) { return new (t || ForgotpasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ForgotpasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgotpasswordComponent, selectors: [["app-forgotpassword"]], decls: 15, vars: 2, consts: [[1, "cloud"], [1, "form", "example-form"], [3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "example-full-width"], [1, "label"], ["matInput", "", "formControlName", "email", 1, "textbox"], ["matInput", "", "formControlName", "password", 1, "textbox"], [1, "signbuttons"], ["mat-button", "", "type", "submit", 1, "mainbtn", 3, "disabled"]], template: function ForgotpasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ForgotpasswordComponent_Template_form_ngSubmit_2_listener() { return ctx.Onsubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.forgetpasswordform);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.forgetpasswordform.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], styles: ["body[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  background-attachment: fixed;\n  background-size: cover;\n  width: 100%;\n  height: 90%;\n}\nbody[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  flex-basis: 55%;\n  text-align: center;\n}\nbody[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .example-full-width[_ngcontent-%COMP%] {\n  width: 400px;\n  font-family: Poppins;\n}\nbody[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .example-full-width[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: #707070;\n  font-weight: bold;\n}\nbody[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .example-full-width[_ngcontent-%COMP%]   .text-danger[_ngcontent-%COMP%] {\n  color: red;\n  font-family: Roboto;\n}\nbody[_ngcontent-%COMP%]   .signbuttons[_ngcontent-%COMP%] {\n  flex-basis: 20%;\n  margin-top: 30px;\n  margin-left: -200px;\n  font-family: Poppins;\n}\nbody[_ngcontent-%COMP%]   .signbuttons[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\nbody[_ngcontent-%COMP%]   .signbuttons[_ngcontent-%COMP%]   .mainbtn[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  margin-right: 35px;\n  color: white;\n  background-color: black;\n  font-weight: bold;\n}\nbody[_ngcontent-%COMP%]   .signbuttons[_ngcontent-%COMP%]   .togglebtn[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-weight: bold;\n}\n.cloud[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23ffffff' stroke-width='0.7' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='scale(45.15) translate(-977.85 -733.39)'%3E%3Cuse fill='%23fafafa' href='%23s' y='2'/%3E%3Cuse fill='%23fafafa' href='%23s' x='1' y='2'/%3E%3Cuse fill='%23f5f5f5' href='%23s' x='2' y='2'/%3E%3Cuse fill='%23f5f5f5' href='%23s'/%3E%3Cuse fill='%23f0f0f0' href='%23s' x='2'/%3E%3Cuse fill='%23f0f0f0' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='scale(45.15) translate(-977.85 -733.39)'%3E%3Cg fill='%23ebebeb'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(45.15) translate(-977.85 -733.39)'%3E%3Cg fill='%23ebebeb'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(45.15) translate(-977.85 -733.39)'%3E%3Cg fill='%23e5e5e5'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='scale(45.15) translate(-977.85 -733.39)'%3E%3Cg fill='%23ffffff'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%23e0e0e0'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='scale(45.15) translate(-977.85 -733.39)'%3E%3Cg fill='%23F60'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='scale(45.15) translate(-977.85 -733.39)'%3E%3Cg fill='%23F60'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='scale(45.15) translate(-977.85 -733.39)'%3E%3Cg fill='%23F60'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290cGFzc3dvcmQvQzpcXFVzZXJzXFxUdWxhc2lcXERlc2t0b3BcXGJhY2tlbmRcXGZyb250ZW5kL3NyY1xcYXBwXFxmb3Jnb3RwYXNzd29yZFxcZm9yZ290cGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZvcmdvdHBhc3N3b3JkL2ZvcmdvdHBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNDSjtBRENJO0VBRUksZUFBQTtFQUNBLGtCQUFBO0FDQVI7QURDUTtFQUVJLFlBQUE7RUFDQSxvQkFBQTtBQ0FaO0FEQ1k7RUFFSSxjQUFBO0VBQ0EsaUJBQUE7QUNBaEI7QURFWTtFQUVJLFVBQUE7RUFDQSxtQkFBQTtBQ0RoQjtBRE9JO0VBR0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQ1BSO0FEUVE7RUFFSSxlQUFBO0FDUFo7QURTUTtFQUVJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQ1JaO0FEVVE7RUFHSSxvQkFBQTtFQUNBLGlCQUFBO0FDVlo7QURpQkE7RUFFSSw4Z0lBQUE7QUNmSiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdHBhc3N3b3JkL2ZvcmdvdHBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gIFxyXG4gICAgLmZvcm17XHJcbiAgICAgICAgXHJcbiAgICAgICAgZmxleC1iYXNpczo1NSU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIC5leGFtcGxlLWZ1bGwtd2lkdGhcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHdpZHRoOjQwMHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgICAgICAgICAgLmxhYmVsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiM3MDcwNzA7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDpib2xkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRleHQtZGFuZ2VyXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOnJlZDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLnNpZ25idXR0b25zXHJcbiAgICB7XHJcbiAgICBcclxuICAgICAgICBmbGV4LWJhc2lzOjIwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOjMwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6LTIwMHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgIDpob3ZlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWFpbmJ0blxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDozNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRvZ2dsZWJ0blxyXG4gICAgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG4uY2xvdWQge1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby81NjkwMS9iZy1jbG91ZHMucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDIwMDAgMTUwMCclM0UlM0NkZWZzJTNFJTNDcmVjdCBzdHJva2U9JyUyM2ZmZmZmZicgc3Ryb2tlLXdpZHRoPScwLjcnIHdpZHRoPScxJyBoZWlnaHQ9JzEnIGlkPSdzJy8lM0UlM0NwYXR0ZXJuIGlkPSdhJyB3aWR0aD0nMycgaGVpZ2h0PSczJyBwYXR0ZXJuVW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBwYXR0ZXJuVHJhbnNmb3JtPSdzY2FsZSg0NS4xNSkgdHJhbnNsYXRlKC05NzcuODUgLTczMy4zOSknJTNFJTNDdXNlIGZpbGw9JyUyM2ZhZmFmYScgaHJlZj0nJTIzcycgeT0nMicvJTNFJTNDdXNlIGZpbGw9JyUyM2ZhZmFmYScgaHJlZj0nJTIzcycgeD0nMScgeT0nMicvJTNFJTNDdXNlIGZpbGw9JyUyM2Y1ZjVmNScgaHJlZj0nJTIzcycgeD0nMicgeT0nMicvJTNFJTNDdXNlIGZpbGw9JyUyM2Y1ZjVmNScgaHJlZj0nJTIzcycvJTNFJTNDdXNlIGZpbGw9JyUyM2YwZjBmMCcgaHJlZj0nJTIzcycgeD0nMicvJTNFJTNDdXNlIGZpbGw9JyUyM2YwZjBmMCcgaHJlZj0nJTIzcycgeD0nMScgeT0nMScvJTNFJTNDL3BhdHRlcm4lM0UlM0NwYXR0ZXJuIGlkPSdiJyB3aWR0aD0nNycgaGVpZ2h0PScxMScgcGF0dGVyblVuaXRzPSd1c2VyU3BhY2VPblVzZScgcGF0dGVyblRyYW5zZm9ybT0nc2NhbGUoNDUuMTUpIHRyYW5zbGF0ZSgtOTc3Ljg1IC03MzMuMzkpJyUzRSUzQ2cgZmlsbD0nJTIzZWJlYmViJyUzRSUzQ3VzZSBocmVmPSclMjNzJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeT0nNScgLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxJyB5PScxMCcvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzInIHk9JzEnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScyJyB5PSc0Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMycgeT0nOCcvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzQnIHk9JzMnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc0JyB5PSc3Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nNScgeT0nMicvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzUnIHk9JzYnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc2JyB5PSc5Jy8lM0UlM0MvZyUzRSUzQy9wYXR0ZXJuJTNFJTNDcGF0dGVybiBpZD0naCcgd2lkdGg9JzUnIGhlaWdodD0nMTMnIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnIHBhdHRlcm5UcmFuc2Zvcm09J3NjYWxlKDQ1LjE1KSB0cmFuc2xhdGUoLTk3Ny44NSAtNzMzLjM5KSclM0UlM0NnIGZpbGw9JyUyM2ViZWJlYiclM0UlM0N1c2UgaHJlZj0nJTIzcycgeT0nNScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHk9JzgnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxJyB5PScxJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMScgeT0nOScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzEnIHk9JzEyJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMicvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzInIHk9JzQnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSczJyB5PScyJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMycgeT0nNicvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzMnIHk9JzExJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nNCcgeT0nMycvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzQnIHk9JzcnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc0JyB5PScxMCcvJTNFJTNDL2clM0UlM0MvcGF0dGVybiUzRSUzQ3BhdHRlcm4gaWQ9J2MnIHdpZHRoPScxNycgaGVpZ2h0PScxMycgcGF0dGVyblVuaXRzPSd1c2VyU3BhY2VPblVzZScgcGF0dGVyblRyYW5zZm9ybT0nc2NhbGUoNDUuMTUpIHRyYW5zbGF0ZSgtOTc3Ljg1IC03MzMuMzkpJyUzRSUzQ2cgZmlsbD0nJTIzZTVlNWU1JyUzRSUzQ3VzZSBocmVmPSclMjNzJyB5PScxMScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzInIHk9JzknLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc1JyB5PScxMicvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzknIHk9JzQnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxMicgeT0nMScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzE2JyB5PSc2Jy8lM0UlM0MvZyUzRSUzQy9wYXR0ZXJuJTNFJTNDcGF0dGVybiBpZD0nZCcgd2lkdGg9JzE5JyBoZWlnaHQ9JzE3JyBwYXR0ZXJuVW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBwYXR0ZXJuVHJhbnNmb3JtPSdzY2FsZSg0NS4xNSkgdHJhbnNsYXRlKC05NzcuODUgLTczMy4zOSknJTNFJTNDZyBmaWxsPSclMjNmZmZmZmYnJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHk9JzknLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxNicgeT0nNScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzE0JyB5PScyJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMTEnIHk9JzExJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nNicgeT0nMTQnLyUzRSUzQy9nJTNFJTNDZyBmaWxsPSclMjNlMGUwZTAnJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzMnIHk9JzEzJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nOScgeT0nNycvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzEzJyB5PScxMCcvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzE1JyB5PSc0Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMTgnIHk9JzEnLyUzRSUzQy9nJTNFJTNDL3BhdHRlcm4lM0UlM0NwYXR0ZXJuIGlkPSdlJyB3aWR0aD0nNDcnIGhlaWdodD0nNTMnIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnIHBhdHRlcm5UcmFuc2Zvcm09J3NjYWxlKDQ1LjE1KSB0cmFuc2xhdGUoLTk3Ny44NSAtNzMzLjM5KSclM0UlM0NnIGZpbGw9JyUyM0Y2MCclM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMicgeT0nNScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzE2JyB5PSczOCcvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzQ2JyB5PSc0MicvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzI5JyB5PScyMCcvJTNFJTNDL2clM0UlM0MvcGF0dGVybiUzRSUzQ3BhdHRlcm4gaWQ9J2YnIHdpZHRoPSc1OScgaGVpZ2h0PSc3MScgcGF0dGVyblVuaXRzPSd1c2VyU3BhY2VPblVzZScgcGF0dGVyblRyYW5zZm9ybT0nc2NhbGUoNDUuMTUpIHRyYW5zbGF0ZSgtOTc3Ljg1IC03MzMuMzkpJyUzRSUzQ2cgZmlsbD0nJTIzRjYwJyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSczMycgeT0nMTMnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScyNycgeT0nNTQnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc1NScgeT0nNTUnLyUzRSUzQy9nJTNFJTNDL3BhdHRlcm4lM0UlM0NwYXR0ZXJuIGlkPSdnJyB3aWR0aD0nMTM5JyBoZWlnaHQ9Jzk3JyBwYXR0ZXJuVW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBwYXR0ZXJuVHJhbnNmb3JtPSdzY2FsZSg0NS4xNSkgdHJhbnNsYXRlKC05NzcuODUgLTczMy4zOSknJTNFJTNDZyBmaWxsPSclMjNGNjAnJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzExJyB5PSc4Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nNTEnIHk9JzEzJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMTcnIHk9JzczJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nOTknIHk9JzU3Jy8lM0UlM0MvZyUzRSUzQy9wYXR0ZXJuJTNFJTNDL2RlZnMlM0UlM0NyZWN0IGZpbGw9J3VybCglMjNhKScgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnLyUzRSUzQ3JlY3QgZmlsbD0ndXJsKCUyM2IpJyB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScvJTNFJTNDcmVjdCBmaWxsPSd1cmwoJTIzaCknIHdpZHRoPScxMDAlMjUnIGhlaWdodD0nMTAwJTI1Jy8lM0UlM0NyZWN0IGZpbGw9J3VybCglMjNjKScgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnLyUzRSUzQ3JlY3QgZmlsbD0ndXJsKCUyM2QpJyB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScvJTNFJTNDcmVjdCBmaWxsPSd1cmwoJTIzZSknIHdpZHRoPScxMDAlMjUnIGhlaWdodD0nMTAwJTI1Jy8lM0UlM0NyZWN0IGZpbGw9J3VybCglMjNmKScgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnLyUzRSUzQ3JlY3QgZmlsbD0ndXJsKCUyM2cpJyB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScvJTNFJTNDL3N2ZyUzRVwiKTtcclxuICAgIH1cclxuIiwiYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwJTtcbn1cbmJvZHkgLmZvcm0ge1xuICBmbGV4LWJhc2lzOiA1NSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmJvZHkgLmZvcm0gLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiA0MDBweDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG59XG5ib2R5IC5mb3JtIC5leGFtcGxlLWZ1bGwtd2lkdGggLmxhYmVsIHtcbiAgY29sb3I6ICM3MDcwNzA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuYm9keSAuZm9ybSAuZXhhbXBsZS1mdWxsLXdpZHRoIC50ZXh0LWRhbmdlciB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG59XG5ib2R5IC5zaWduYnV0dG9ucyB7XG4gIGZsZXgtYmFzaXM6IDIwJTtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IC0yMDBweDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG59XG5ib2R5IC5zaWduYnV0dG9ucyA6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5ib2R5IC5zaWduYnV0dG9ucyAubWFpbmJ0biB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBtYXJnaW4tcmlnaHQ6IDM1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuYm9keSAuc2lnbmJ1dHRvbnMgLnRvZ2dsZWJ0biB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNsb3VkIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyMDAwIDE1MDAnJTNFJTNDZGVmcyUzRSUzQ3JlY3Qgc3Ryb2tlPSclMjNmZmZmZmYnIHN0cm9rZS13aWR0aD0nMC43JyB3aWR0aD0nMScgaGVpZ2h0PScxJyBpZD0ncycvJTNFJTNDcGF0dGVybiBpZD0nYScgd2lkdGg9JzMnIGhlaWdodD0nMycgcGF0dGVyblVuaXRzPSd1c2VyU3BhY2VPblVzZScgcGF0dGVyblRyYW5zZm9ybT0nc2NhbGUoNDUuMTUpIHRyYW5zbGF0ZSgtOTc3Ljg1IC03MzMuMzkpJyUzRSUzQ3VzZSBmaWxsPSclMjNmYWZhZmEnIGhyZWY9JyUyM3MnIHk9JzInLyUzRSUzQ3VzZSBmaWxsPSclMjNmYWZhZmEnIGhyZWY9JyUyM3MnIHg9JzEnIHk9JzInLyUzRSUzQ3VzZSBmaWxsPSclMjNmNWY1ZjUnIGhyZWY9JyUyM3MnIHg9JzInIHk9JzInLyUzRSUzQ3VzZSBmaWxsPSclMjNmNWY1ZjUnIGhyZWY9JyUyM3MnLyUzRSUzQ3VzZSBmaWxsPSclMjNmMGYwZjAnIGhyZWY9JyUyM3MnIHg9JzInLyUzRSUzQ3VzZSBmaWxsPSclMjNmMGYwZjAnIGhyZWY9JyUyM3MnIHg9JzEnIHk9JzEnLyUzRSUzQy9wYXR0ZXJuJTNFJTNDcGF0dGVybiBpZD0nYicgd2lkdGg9JzcnIGhlaWdodD0nMTEnIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnIHBhdHRlcm5UcmFuc2Zvcm09J3NjYWxlKDQ1LjE1KSB0cmFuc2xhdGUoLTk3Ny44NSAtNzMzLjM5KSclM0UlM0NnIGZpbGw9JyUyM2ViZWJlYiclM0UlM0N1c2UgaHJlZj0nJTIzcycvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHk9JzUnIC8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMScgeT0nMTAnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScyJyB5PScxJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMicgeT0nNCcvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzMnIHk9JzgnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc0JyB5PSczJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nNCcgeT0nNycvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzUnIHk9JzInLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc1JyB5PSc2Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nNicgeT0nOScvJTNFJTNDL2clM0UlM0MvcGF0dGVybiUzRSUzQ3BhdHRlcm4gaWQ9J2gnIHdpZHRoPSc1JyBoZWlnaHQ9JzEzJyBwYXR0ZXJuVW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBwYXR0ZXJuVHJhbnNmb3JtPSdzY2FsZSg0NS4xNSkgdHJhbnNsYXRlKC05NzcuODUgLTczMy4zOSknJTNFJTNDZyBmaWxsPSclMjNlYmViZWInJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHk9JzUnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB5PSc4Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMScgeT0nMScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzEnIHk9JzknLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxJyB5PScxMicvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzInLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScyJyB5PSc0Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMycgeT0nMicvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzMnIHk9JzYnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSczJyB5PScxMScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzQnIHk9JzMnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc0JyB5PSc3Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nNCcgeT0nMTAnLyUzRSUzQy9nJTNFJTNDL3BhdHRlcm4lM0UlM0NwYXR0ZXJuIGlkPSdjJyB3aWR0aD0nMTcnIGhlaWdodD0nMTMnIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnIHBhdHRlcm5UcmFuc2Zvcm09J3NjYWxlKDQ1LjE1KSB0cmFuc2xhdGUoLTk3Ny44NSAtNzMzLjM5KSclM0UlM0NnIGZpbGw9JyUyM2U1ZTVlNSclM0UlM0N1c2UgaHJlZj0nJTIzcycgeT0nMTEnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScyJyB5PSc5Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nNScgeT0nMTInLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc5JyB5PSc0Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMTInIHk9JzEnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxNicgeT0nNicvJTNFJTNDL2clM0UlM0MvcGF0dGVybiUzRSUzQ3BhdHRlcm4gaWQ9J2QnIHdpZHRoPScxOScgaGVpZ2h0PScxNycgcGF0dGVyblVuaXRzPSd1c2VyU3BhY2VPblVzZScgcGF0dGVyblRyYW5zZm9ybT0nc2NhbGUoNDUuMTUpIHRyYW5zbGF0ZSgtOTc3Ljg1IC03MzMuMzkpJyUzRSUzQ2cgZmlsbD0nJTIzZmZmZmZmJyUzRSUzQ3VzZSBocmVmPSclMjNzJyB5PSc5Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMTYnIHk9JzUnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxNCcgeT0nMicvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzExJyB5PScxMScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzYnIHk9JzE0Jy8lM0UlM0MvZyUzRSUzQ2cgZmlsbD0nJTIzZTBlMGUwJyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSczJyB5PScxMycvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzknIHk9JzcnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxMycgeT0nMTAnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxNScgeT0nNCcvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzE4JyB5PScxJy8lM0UlM0MvZyUzRSUzQy9wYXR0ZXJuJTNFJTNDcGF0dGVybiBpZD0nZScgd2lkdGg9JzQ3JyBoZWlnaHQ9JzUzJyBwYXR0ZXJuVW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBwYXR0ZXJuVHJhbnNmb3JtPSdzY2FsZSg0NS4xNSkgdHJhbnNsYXRlKC05NzcuODUgLTczMy4zOSknJTNFJTNDZyBmaWxsPSclMjNGNjAnJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzInIHk9JzUnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxNicgeT0nMzgnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc0NicgeT0nNDInLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScyOScgeT0nMjAnLyUzRSUzQy9nJTNFJTNDL3BhdHRlcm4lM0UlM0NwYXR0ZXJuIGlkPSdmJyB3aWR0aD0nNTknIGhlaWdodD0nNzEnIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnIHBhdHRlcm5UcmFuc2Zvcm09J3NjYWxlKDQ1LjE1KSB0cmFuc2xhdGUoLTk3Ny44NSAtNzMzLjM5KSclM0UlM0NnIGZpbGw9JyUyM0Y2MCclM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMzMnIHk9JzEzJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMjcnIHk9JzU0Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nNTUnIHk9JzU1Jy8lM0UlM0MvZyUzRSUzQy9wYXR0ZXJuJTNFJTNDcGF0dGVybiBpZD0nZycgd2lkdGg9JzEzOScgaGVpZ2h0PSc5NycgcGF0dGVyblVuaXRzPSd1c2VyU3BhY2VPblVzZScgcGF0dGVyblRyYW5zZm9ybT0nc2NhbGUoNDUuMTUpIHRyYW5zbGF0ZSgtOTc3Ljg1IC03MzMuMzkpJyUzRSUzQ2cgZmlsbD0nJTIzRjYwJyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxMScgeT0nOCcvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzUxJyB5PScxMycvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzE3JyB5PSc3MycvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9Jzk5JyB5PSc1NycvJTNFJTNDL2clM0UlM0MvcGF0dGVybiUzRSUzQy9kZWZzJTNFJTNDcmVjdCBmaWxsPSd1cmwoJTIzYSknIHdpZHRoPScxMDAlMjUnIGhlaWdodD0nMTAwJTI1Jy8lM0UlM0NyZWN0IGZpbGw9J3VybCglMjNiKScgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnLyUzRSUzQ3JlY3QgZmlsbD0ndXJsKCUyM2gpJyB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScvJTNFJTNDcmVjdCBmaWxsPSd1cmwoJTIzYyknIHdpZHRoPScxMDAlMjUnIGhlaWdodD0nMTAwJTI1Jy8lM0UlM0NyZWN0IGZpbGw9J3VybCglMjNkKScgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnLyUzRSUzQ3JlY3QgZmlsbD0ndXJsKCUyM2UpJyB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScvJTNFJTNDcmVjdCBmaWxsPSd1cmwoJTIzZiknIHdpZHRoPScxMDAlMjUnIGhlaWdodD0nMTAwJTI1Jy8lM0UlM0NyZWN0IGZpbGw9J3VybCglMjNnKScgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnLyUzRSUzQy9zdmclM0VcIik7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotpasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forgotpassword',
                templateUrl: './forgotpassword.component.html',
                styleUrls: ['./forgotpassword.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/gift/gift.component.ts":
/*!****************************************!*\
  !*** ./src/app/gift/gift.component.ts ***!
  \****************************************/
/*! exports provided: GiftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiftComponent", function() { return GiftComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class GiftComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
GiftComponent.ɵfac = function GiftComponent_Factory(t) { return new (t || GiftComponent)(); };
GiftComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GiftComponent, selectors: [["app-gift"]], decls: 2, vars: 0, consts: [[1, "giftmain"]], template: function GiftComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dpZnQvZ2lmdC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GiftComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gift',
                templateUrl: './gift.component.html',
                styleUrls: ['./gift.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/all.js");
/* harmony import */ var _directives_gsap_fade_in_animation_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../directives/gsap/fade-in-animation.directive */ "./src/app/directives/gsap/fade-in-animation.directive.ts");
/* harmony import */ var _directives_gsap_bounce_in_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../directives/gsap/bounce-in-animations */ "./src/app/directives/gsap/bounce-in-animations.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");


// import ScrollToPlugin from 'gsap/ScrollToPlugin';
// import "./install-gsap.js";






// import ScrollMagic from "scrollmagic";
// import { gsap, Power2, Elastic } from 'gsap/all';
class HomepageComponent {
    // showP = true;
    constructor() {
    }
    ngOnInit() {
        // console.log(document.querySelector(".selling"))
        if (document.querySelector(".selling")) {
            gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_2__["ScrollTrigger"]);
            console.log(gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_2__["ScrollTrigger"]));
            var tl = gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].timeline({
                scrollTrigger: {
                    trigger: ".selling",
                    toggleActions: "play pause none none"
                }
            });
            tl.to(".selling", {
                duration: 3,
                rotation: 360
                // opacity: 0.1
            });
        }
        else {
            console.log('doesnt exit');
        }
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 89, vars: 4, consts: [[1, "main-content"], [1, "container"], [1, "matter"], [1, "main-heading"], [1, "discount", 2, "text-align", "center"], [1, "image", 2, "display", "flex", "flex-direction", "row"], ["fadeInAnimation", "", "src", "../../assets/undraw_Designer_girl_s028.svg", "width", "400px", "height", "400px"], ["fadeInAnimation", "", 2, "text-align", "center", 3, "duration", "delay"], ["bounceInAnimation", "", 1, "cards", 3, "duration", "delay"], ["mat-card-image", "", "src", "../../assets/fashion.jpg", 1, "image"], [2, "text-align", "center"], ["mat-card-image", "", "src", "../../assets/laptop.jpg", 1, "image"], ["mat-card-image", "", "src", "../../assets/sofa.jpg", 1, "image"], ["mat-card-image", "", "src", "../../assets/bed.jpg", 1, "image"], [1, "cards-top"], ["mat-card-image", "", "src", "../../assets/model2.jpg", 1, "image"], ["mat-card-image", "", "src", "../../assets/model1.jpg", 1, "image"], ["mat-card-image", "", "src", "../../assets/model44.jpg", 1, "image"], ["mat-card-image", "", "src", "../../assets/model66.jpg", 1, "image"], ["mat-card-image", "", "src", "../../assets/model55.jpg", 1, "image"], ["mat-card-image", "", "src", "../../assets/model33.jpg", 1, "image"], [1, "selling"], ["src", "../../assets/sell.jpg", "width", "100%", "height", "500px"], ["routerLink", "/sell"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Make Your");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Shopping Easy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "save time shop easy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "UPTO 70% OFF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Catch the best deals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Flat 50% off");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Flat 50% off");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Flat 50% off");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Flat 50% off");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Top Categeroes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Flat 50% off");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Flat 50% off");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Flat 50% off");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Flat 50% off");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Flat 50% off");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Flat 50% off");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Sell your product easily");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Sell");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("duration", 1)("delay", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("duration", 2)("delay", 2);
    } }, directives: [_directives_gsap_fade_in_animation_directive__WEBPACK_IMPORTED_MODULE_3__["FadeInAnimationDirective"], _directives_gsap_bounce_in_animations__WEBPACK_IMPORTED_MODULE_4__["BounceInAnimationDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\nbody[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' %3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23afc2ff'/%3E%3Cstop offset='1' stop-color='%23caffb5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpattern id='b' width='24' height='24' patternUnits='userSpaceOnUse'%3E%3Ccircle fill='%23ffffff' cx='12' cy='12' r='12'/%3E%3C/pattern%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3Crect width='100%25' height='100%25' fill='url(%23b)' fill-opacity='0.1'/%3E%3C/svg%3E\");\n  background-attachment: fixed;\n  background-size: cover;\n  background-attachment: fixed;\n  background-size: cover;\n  width: 100%;\n  height: auto;\n}\n\nbody[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\nbody[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .matter[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px 20px 20px 20px;\n}\n\nbody[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .matter[_ngcontent-%COMP%]   .main-heading[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\nbody[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .matter[_ngcontent-%COMP%]   .main-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 50px;\n  padding: 20px 0px 20px 0px;\n}\n\nbody[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .matter[_ngcontent-%COMP%]   .main-heading[_ngcontent-%COMP%]   .discount[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n\nbody[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .matter[_ngcontent-%COMP%]   .main-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\nbody[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  margin: 20px 0px 20px 0px;\n}\n\nbody[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  width: 20%;\n  height: auto;\n  margin: 0px 20px 0px 20px;\n}\n\nbody[_ngcontent-%COMP%]   .cards-top[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  margin: 20px 0px 20px 0px;\n}\n\nbody[_ngcontent-%COMP%]   .cards-top[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  width: 12%;\n  height: auto;\n  margin: 0px 20px 0px 20px;\n  background-color: white;\n}\n\nbody[_ngcontent-%COMP%]   .cards-top[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  height: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvQzpcXFVzZXJzXFxUdWxhc2lcXERlc2t0b3BcXGJhY2tlbmRcXGZyb250ZW5kL3NyY1xcYXBwXFxob21lcGFnZVxcaG9tZXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURDQTtFQUNBLHlCQUFBO0VBQ0Esa2xCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0VBOztBRERBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDR0o7O0FERkk7RUFDSSxXQUFBO0VBRUEsNEJBQUE7QUNHUjs7QURGUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDSVo7O0FERFk7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7QUNHaEI7O0FERFk7RUFDSSxlQUFBO0FDR2hCOztBRERZO0VBQ0ksZUFBQTtBQ0doQjs7QURrREE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNoREo7O0FEaURJO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQy9DUjs7QUR1REE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNyREo7O0FEc0RJO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0FDcERSOztBRHFEUTtFQUNJLFdBQUE7QUNuRFoiLCJmaWxlIjoic3JjL2FwcC9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBtYXJnaW46MHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcbmJvZHkge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnICUzRSUzQ2RlZnMlM0UlM0NsaW5lYXJHcmFkaWVudCBpZD0nYScgeDE9JzAnIHgyPScwJyB5MT0nMCcgeTI9JzEnJTNFJTNDc3RvcCBvZmZzZXQ9JzAnIHN0b3AtY29sb3I9JyUyM2FmYzJmZicvJTNFJTNDc3RvcCBvZmZzZXQ9JzEnIHN0b3AtY29sb3I9JyUyM2NhZmZiNScvJTNFJTNDL2xpbmVhckdyYWRpZW50JTNFJTNDL2RlZnMlM0UlM0NwYXR0ZXJuIGlkPSdiJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnJTNFJTNDY2lyY2xlIGZpbGw9JyUyM2ZmZmZmZicgY3g9JzEyJyBjeT0nMTInIHI9JzEyJy8lM0UlM0MvcGF0dGVybiUzRSUzQ3JlY3Qgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnIGZpbGw9J3VybCglMjNhKScvJTNFJTNDcmVjdCB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScgZmlsbD0ndXJsKCUyM2IpJyBmaWxsLW9wYWNpdHk9JzAuMScvJTNFJTNDL3N2ZyUzRVwiKTtcclxuYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcclxud2lkdGg6IDEwMCU7XHJcbmhlaWdodDogYXV0bztcclxuLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIC5tYXR0ZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGNoYXJ0cmV1c2U7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAyMHB4IDIwcHggMjBweDtcclxuICAgICAgICAubWFpbi1oZWFkaW5nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcclxuICAgICAgICAgICAgLy8gcGFkZDogMjBweCAwcHggMHB4IDBweDtcclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAwcHggMjBweCAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRpc2NvdW50IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICAuaW1hZ2Uge1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICB9XHJcbiAgIFxyXG59XHJcbi8vIC5jYXJkcyB7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogeWVsbG93Z3JlZW47XHJcbi8vICAgICAubWF0Y2FyZCB7XHJcbi8vICAgICAgICAgd2lkdGg6IDMwJTtcclxuLy8gICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4vLyAgICAgICAgIG1hcmdpbjogMHB4IDIwcHggMHB4IDIwcHg7XHJcbi8vICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbi8vICAgICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4vLyAgICAgICAgIC5jb250YWluZXIge1xyXG4vLyAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4vLyAgICAgICAgICAgICAuaW5mbyB7XHJcbi8vICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgICAgICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9IFxyXG4vLyAgICAgICAgIC5pbWFnZSB7XHJcbi8vICAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbi8vICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MHB4KTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbiBcclxuLy8gfVxyXG4vLyAucmVjdGFuZ2xlIHtcclxuLy8gICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogNjBweDtcclxuLy8gICAgIHdpZHRoOiA5NjBweDtcclxuLy8gICAgIGhlaWdodDogNDAwcHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDhFNUY2O1xyXG4vLyAgICAgb3BhY2l0eTogNzAlO1xyXG4vLyAgICAgLy8gYmFja2dyb3VuZDogYmx1ciA1MCU7XHJcbi8vICAgICBmaWx0ZXI6IGJsdXIoNTAlKTtcclxuXHJcbi8vIH1cclxuLmNhcmRzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDIwcHggMHB4IDIwcHggMHB4O1xyXG4gICAgbWF0LWNhcmQge1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDIwcHggMHB4IDIwcHg7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG4gICAgICAgIC5pbWFnZSB7XHJcbiAgICAgICAgICAgIC8vIGhlaWdodDogODAlO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmNhcmRzLXRvcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAyMHB4IDBweCAyMHB4IDBweDtcclxuICAgIG1hdC1jYXJkIHtcclxuICAgICAgICB3aWR0aDogMTIlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBtYXJnaW46IDBweCAyMHB4IDBweCAyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICAgICAgLmltYWdlIHtcclxuICAgICAgICAgICAgaGVpZ2h0OjkwJTtcclxuICAgICAgICB9XHJcbiBcclxuICAgIH1cclxufVxyXG5cclxufSIsIioge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAlMjUnIGhlaWdodD0nMTAwJTI1JyAlM0UlM0NkZWZzJTNFJTNDbGluZWFyR3JhZGllbnQgaWQ9J2EnIHgxPScwJyB4Mj0nMCcgeTE9JzAnIHkyPScxJyUzRSUzQ3N0b3Agb2Zmc2V0PScwJyBzdG9wLWNvbG9yPSclMjNhZmMyZmYnLyUzRSUzQ3N0b3Agb2Zmc2V0PScxJyBzdG9wLWNvbG9yPSclMjNjYWZmYjUnLyUzRSUzQy9saW5lYXJHcmFkaWVudCUzRSUzQy9kZWZzJTNFJTNDcGF0dGVybiBpZD0nYicgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyBwYXR0ZXJuVW5pdHM9J3VzZXJTcGFjZU9uVXNlJyUzRSUzQ2NpcmNsZSBmaWxsPSclMjNmZmZmZmYnIGN4PScxMicgY3k9JzEyJyByPScxMicvJTNFJTNDL3BhdHRlcm4lM0UlM0NyZWN0IHdpZHRoPScxMDAlMjUnIGhlaWdodD0nMTAwJTI1JyBmaWxsPSd1cmwoJTIzYSknLyUzRSUzQ3JlY3Qgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnIGZpbGw9J3VybCglMjNiKScgZmlsbC1vcGFjaXR5PScwLjEnLyUzRSUzQy9zdmclM0VcIik7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5ib2R5IC5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuYm9keSAuY29udGFpbmVyIC5tYXR0ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweCAyMHB4IDIwcHggMjBweDtcbn1cbmJvZHkgLmNvbnRhaW5lciAubWF0dGVyIC5tYWluLWhlYWRpbmcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuYm9keSAuY29udGFpbmVyIC5tYXR0ZXIgLm1haW4taGVhZGluZyBoMSB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgcGFkZGluZzogMjBweCAwcHggMjBweCAwcHg7XG59XG5ib2R5IC5jb250YWluZXIgLm1hdHRlciAubWFpbi1oZWFkaW5nIC5kaXNjb3VudCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbmJvZHkgLmNvbnRhaW5lciAubWF0dGVyIC5tYWluLWhlYWRpbmcgcCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbmJvZHkgLmNhcmRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMjBweCAwcHggMjBweCAwcHg7XG59XG5ib2R5IC5jYXJkcyBtYXQtY2FyZCB7XG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwcHggMjBweCAwcHggMjBweDtcbn1cbmJvZHkgLmNhcmRzLXRvcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDIwcHggMHB4IDIwcHggMHB4O1xufVxuYm9keSAuY2FyZHMtdG9wIG1hdC1jYXJkIHtcbiAgd2lkdGg6IDEyJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDBweCAyMHB4IDBweCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbmJvZHkgLmNhcmRzLXRvcCBtYXQtY2FyZCAuaW1hZ2Uge1xuICBoZWlnaHQ6IDkwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-homepage',
                templateUrl: './homepage.component.html',
                styleUrls: ['./homepage.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/kids/kids.component.ts":
/*!****************************************!*\
  !*** ./src/app/kids/kids.component.ts ***!
  \****************************************/
/*! exports provided: KidsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KidsComponent", function() { return KidsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class KidsComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
KidsComponent.ɵfac = function KidsComponent_Factory(t) { return new (t || KidsComponent)(); };
KidsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KidsComponent, selectors: [["app-kids"]], decls: 2, vars: 0, template: function KidsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "kids works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2tpZHMva2lkcy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KidsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-kids',
                templateUrl: './kids.component.html',
                styleUrls: ['./kids.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/liked/liked.component.ts":
/*!******************************************!*\
  !*** ./src/app/liked/liked.component.ts ***!
  \******************************************/
/*! exports provided: LikedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikedComponent", function() { return LikedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LikedComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
LikedComponent.ɵfac = function LikedComponent_Factory(t) { return new (t || LikedComponent)(); };
LikedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LikedComponent, selectors: [["app-liked"]], decls: 2, vars: 0, template: function LikedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "liked works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpa2VkL2xpa2VkLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LikedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-liked',
                templateUrl: './liked.component.html',
                styleUrls: ['./liked.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");










// import { Route } from '@angular/compiler/src/core';
class LoginComponent {
    constructor(fb, auth, snackbar, router) {
        this.fb = fb;
        this.auth = auth;
        this.snackbar = snackbar;
        this.router = router;
        this.matter = false;
        this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]],
        });
    }
    ngOnInit() {
    }
    showSnackbar(message) {
        console.log('snckbar');
        this.snackbar.open(message, "ok", { duration: 15000 });
    }
    Onsubmit() {
        console.log('loginForm', this.loginForm.value);
        this.auth.generallogin(this.loginForm.value).subscribe(data => {
            console.log(data, 'datta');
            if (data === 'password is incorrect') {
                // this.matter = data;
                this.showSnackbar('password is incorrect');
            }
            else if (data === 'account does not exit') {
                this.showSnackbar('signup first');
            }
            else {
                console.log('%c T', 'color:red', data);
                this.auth.username = data;
                this.router.navigate(['/home']);
                // this.showSnackbar(data);
                // this.matter = true;
            }
        });
    }
    forgetpassword() {
        this.router.navigate(['/forgotpassword']);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 18, vars: 2, consts: [[1, "cloud"], [1, "form", "example-form"], [3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "example-full-width"], [1, "label"], ["matInput", "", "formControlName", "email", 1, "textbox"], ["matInput", "", "formControlName", "password", 1, "textbox"], [1, "signbuttons"], ["mat-button", "", "type", "submit", 1, "mainbtn", 3, "disabled"], ["mat-button", "", 1, "mainbtn", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_2_listener() { return ctx.Onsubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_16_listener() { return ctx.forgetpassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Forget password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], styles: ["body[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  background-attachment: fixed;\n  background-size: cover;\n  width: 100%;\n  height: 90%;\n}\nbody[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  flex-basis: 55%;\n  text-align: center;\n}\nbody[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .example-full-width[_ngcontent-%COMP%] {\n  width: 400px;\n  font-family: Poppins;\n}\nbody[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .example-full-width[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: #707070;\n  font-weight: bold;\n}\nbody[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .example-full-width[_ngcontent-%COMP%]   .text-danger[_ngcontent-%COMP%] {\n  color: red;\n  font-family: Roboto;\n}\nbody[_ngcontent-%COMP%]   .signbuttons[_ngcontent-%COMP%] {\n  flex-basis: 20%;\n  margin-top: 30px;\n  margin-left: -200px;\n  font-family: Poppins;\n}\nbody[_ngcontent-%COMP%]   .signbuttons[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\nbody[_ngcontent-%COMP%]   .signbuttons[_ngcontent-%COMP%]   .mainbtn[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  margin-right: 35px;\n  color: white;\n  background-color: black;\n  font-weight: bold;\n}\nbody[_ngcontent-%COMP%]   .signbuttons[_ngcontent-%COMP%]   .togglebtn[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-weight: bold;\n}\n.cloud[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' %3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23afc2ff'/%3E%3Cstop offset='1' stop-color='%23caffb5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpattern id='b' width='24' height='24' patternUnits='userSpaceOnUse'%3E%3Ccircle fill='%23ffffff' cx='12' cy='12' r='12'/%3E%3C/pattern%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3Crect width='100%25' height='100%25' fill='url(%23b)' fill-opacity='0.1'/%3E%3C/svg%3E\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxUdWxhc2lcXERlc2t0b3BcXGJhY2tlbmRcXGZyb250ZW5kL3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNDSjtBRENJO0VBRUksZUFBQTtFQUNBLGtCQUFBO0FDQVI7QURDUTtFQUVJLFlBQUE7RUFDQSxvQkFBQTtBQ0FaO0FEQ1k7RUFFSSxjQUFBO0VBQ0EsaUJBQUE7QUNBaEI7QURFWTtFQUVJLFVBQUE7RUFDQSxtQkFBQTtBQ0RoQjtBRE9JO0VBR0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQ1BSO0FEUVE7RUFFSSxlQUFBO0FDUFo7QURTUTtFQUVJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQ1JaO0FEVVE7RUFHSSxvQkFBQTtFQUNBLGlCQUFBO0FDVlo7QURpQkE7RUFHSSxrbEJBQUE7QUNoQkoiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICBcclxuICAgIC5mb3Jte1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZsZXgtYmFzaXM6NTUlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAuZXhhbXBsZS1mdWxsLXdpZHRoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3aWR0aDo0MDBweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICAgICAgICAgIC5sYWJlbFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjojNzA3MDcwO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50ZXh0LWRhbmdlclxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjpyZWQ7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC5zaWduYnV0dG9uc1xyXG4gICAge1xyXG4gICAgXHJcbiAgICAgICAgZmxleC1iYXNpczoyMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDozMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0Oi0yMDBweDtcclxuICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgICAgICA6aG92ZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1haW5idG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6MzVweDtcclxuICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b2dnbGVidG5cclxuICAgIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuLmNsb3VkIHtcclxuICAgIFxyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby81NjkwMS9iZy1jbG91ZHMucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnICUzRSUzQ2RlZnMlM0UlM0NsaW5lYXJHcmFkaWVudCBpZD0nYScgeDE9JzAnIHgyPScwJyB5MT0nMCcgeTI9JzEnJTNFJTNDc3RvcCBvZmZzZXQ9JzAnIHN0b3AtY29sb3I9JyUyM2FmYzJmZicvJTNFJTNDc3RvcCBvZmZzZXQ9JzEnIHN0b3AtY29sb3I9JyUyM2NhZmZiNScvJTNFJTNDL2xpbmVhckdyYWRpZW50JTNFJTNDL2RlZnMlM0UlM0NwYXR0ZXJuIGlkPSdiJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnJTNFJTNDY2lyY2xlIGZpbGw9JyUyM2ZmZmZmZicgY3g9JzEyJyBjeT0nMTInIHI9JzEyJy8lM0UlM0MvcGF0dGVybiUzRSUzQ3JlY3Qgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnIGZpbGw9J3VybCglMjNhKScvJTNFJTNDcmVjdCB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScgZmlsbD0ndXJsKCUyM2IpJyBmaWxsLW9wYWNpdHk9JzAuMScvJTNFJTNDL3N2ZyUzRVwiKTtcclxuXHJcblxyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyMDAwIDE1MDAnJTNFJTNDZGVmcyUzRSUzQ3JlY3Qgc3Ryb2tlPSclMjNmZmZmZmYnIHN0cm9rZS13aWR0aD0nMC43JyB3aWR0aD0nMScgaGVpZ2h0PScxJyBpZD0ncycvJTNFJTNDcGF0dGVybiBpZD0nYScgd2lkdGg9JzMnIGhlaWdodD0nMycgcGF0dGVyblVuaXRzPSd1c2VyU3BhY2VPblVzZScgcGF0dGVyblRyYW5zZm9ybT0nc2NhbGUoNDUuMTUpIHRyYW5zbGF0ZSgtOTc3Ljg1IC03MzMuMzkpJyUzRSUzQ3VzZSBmaWxsPSclMjNmYWZhZmEnIGhyZWY9JyUyM3MnIHk9JzInLyUzRSUzQ3VzZSBmaWxsPSclMjNmYWZhZmEnIGhyZWY9JyUyM3MnIHg9JzEnIHk9JzInLyUzRSUzQ3VzZSBmaWxsPSclMjNmNWY1ZjUnIGhyZWY9JyUyM3MnIHg9JzInIHk9JzInLyUzRSUzQ3VzZSBmaWxsPSclMjNmNWY1ZjUnIGhyZWY9JyUyM3MnLyUzRSUzQ3VzZSBmaWxsPSclMjNmMGYwZjAnIGhyZWY9JyUyM3MnIHg9JzInLyUzRSUzQ3VzZSBmaWxsPSclMjNmMGYwZjAnIGhyZWY9JyUyM3MnIHg9JzEnIHk9JzEnLyUzRSUzQy9wYXR0ZXJuJTNFJTNDcGF0dGVybiBpZD0nYicgd2lkdGg9JzcnIGhlaWdodD0nMTEnIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnIHBhdHRlcm5UcmFuc2Zvcm09J3NjYWxlKDQ1LjE1KSB0cmFuc2xhdGUoLTk3Ny44NSAtNzMzLjM5KSclM0UlM0NnIGZpbGw9JyUyM2ViZWJlYiclM0UlM0N1c2UgaHJlZj0nJTIzcycvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHk9JzUnIC8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMScgeT0nMTAnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScyJyB5PScxJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMicgeT0nNCcvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzMnIHk9JzgnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc0JyB5PSczJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nNCcgeT0nNycvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzUnIHk9JzInLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc1JyB5PSc2Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nNicgeT0nOScvJTNFJTNDL2clM0UlM0MvcGF0dGVybiUzRSUzQ3BhdHRlcm4gaWQ9J2gnIHdpZHRoPSc1JyBoZWlnaHQ9JzEzJyBwYXR0ZXJuVW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBwYXR0ZXJuVHJhbnNmb3JtPSdzY2FsZSg0NS4xNSkgdHJhbnNsYXRlKC05NzcuODUgLTczMy4zOSknJTNFJTNDZyBmaWxsPSclMjNlYmViZWInJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHk9JzUnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB5PSc4Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMScgeT0nMScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzEnIHk9JzknLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxJyB5PScxMicvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzInLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScyJyB5PSc0Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMycgeT0nMicvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzMnIHk9JzYnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSczJyB5PScxMScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzQnIHk9JzMnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc0JyB5PSc3Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nNCcgeT0nMTAnLyUzRSUzQy9nJTNFJTNDL3BhdHRlcm4lM0UlM0NwYXR0ZXJuIGlkPSdjJyB3aWR0aD0nMTcnIGhlaWdodD0nMTMnIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnIHBhdHRlcm5UcmFuc2Zvcm09J3NjYWxlKDQ1LjE1KSB0cmFuc2xhdGUoLTk3Ny44NSAtNzMzLjM5KSclM0UlM0NnIGZpbGw9JyUyM2U1ZTVlNSclM0UlM0N1c2UgaHJlZj0nJTIzcycgeT0nMTEnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScyJyB5PSc5Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nNScgeT0nMTInLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc5JyB5PSc0Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMTInIHk9JzEnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxNicgeT0nNicvJTNFJTNDL2clM0UlM0MvcGF0dGVybiUzRSUzQ3BhdHRlcm4gaWQ9J2QnIHdpZHRoPScxOScgaGVpZ2h0PScxNycgcGF0dGVyblVuaXRzPSd1c2VyU3BhY2VPblVzZScgcGF0dGVyblRyYW5zZm9ybT0nc2NhbGUoNDUuMTUpIHRyYW5zbGF0ZSgtOTc3Ljg1IC03MzMuMzkpJyUzRSUzQ2cgZmlsbD0nJTIzZmZmZmZmJyUzRSUzQ3VzZSBocmVmPSclMjNzJyB5PSc5Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMTYnIHk9JzUnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxNCcgeT0nMicvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzExJyB5PScxMScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzYnIHk9JzE0Jy8lM0UlM0MvZyUzRSUzQ2cgZmlsbD0nJTIzZTBlMGUwJyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSczJyB5PScxMycvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzknIHk9JzcnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxMycgeT0nMTAnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxNScgeT0nNCcvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzE4JyB5PScxJy8lM0UlM0MvZyUzRSUzQy9wYXR0ZXJuJTNFJTNDcGF0dGVybiBpZD0nZScgd2lkdGg9JzQ3JyBoZWlnaHQ9JzUzJyBwYXR0ZXJuVW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBwYXR0ZXJuVHJhbnNmb3JtPSdzY2FsZSg0NS4xNSkgdHJhbnNsYXRlKC05NzcuODUgLTczMy4zOSknJTNFJTNDZyBmaWxsPSclMjNGNjAnJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzInIHk9JzUnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxNicgeT0nMzgnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc0NicgeT0nNDInLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScyOScgeT0nMjAnLyUzRSUzQy9nJTNFJTNDL3BhdHRlcm4lM0UlM0NwYXR0ZXJuIGlkPSdmJyB3aWR0aD0nNTknIGhlaWdodD0nNzEnIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnIHBhdHRlcm5UcmFuc2Zvcm09J3NjYWxlKDQ1LjE1KSB0cmFuc2xhdGUoLTk3Ny44NSAtNzMzLjM5KSclM0UlM0NnIGZpbGw9JyUyM0Y2MCclM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMzMnIHk9JzEzJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMjcnIHk9JzU0Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nNTUnIHk9JzU1Jy8lM0UlM0MvZyUzRSUzQy9wYXR0ZXJuJTNFJTNDcGF0dGVybiBpZD0nZycgd2lkdGg9JzEzOScgaGVpZ2h0PSc5NycgcGF0dGVyblVuaXRzPSd1c2VyU3BhY2VPblVzZScgcGF0dGVyblRyYW5zZm9ybT0nc2NhbGUoNDUuMTUpIHRyYW5zbGF0ZSgtOTc3Ljg1IC03MzMuMzkpJyUzRSUzQ2cgZmlsbD0nJTIzRjYwJyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxMScgeT0nOCcvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzUxJyB5PScxMycvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzE3JyB5PSc3MycvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9Jzk5JyB5PSc1NycvJTNFJTNDL2clM0UlM0MvcGF0dGVybiUzRSUzQy9kZWZzJTNFJTNDcmVjdCBmaWxsPSd1cmwoJTIzYSknIHdpZHRoPScxMDAlMjUnIGhlaWdodD0nMTAwJTI1Jy8lM0UlM0NyZWN0IGZpbGw9J3VybCglMjNiKScgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnLyUzRSUzQ3JlY3QgZmlsbD0ndXJsKCUyM2gpJyB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScvJTNFJTNDcmVjdCBmaWxsPSd1cmwoJTIzYyknIHdpZHRoPScxMDAlMjUnIGhlaWdodD0nMTAwJTI1Jy8lM0UlM0NyZWN0IGZpbGw9J3VybCglMjNkKScgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnLyUzRSUzQ3JlY3QgZmlsbD0ndXJsKCUyM2UpJyB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScvJTNFJTNDcmVjdCBmaWxsPSd1cmwoJTIzZiknIHdpZHRoPScxMDAlMjUnIGhlaWdodD0nMTAwJTI1Jy8lM0UlM0NyZWN0IGZpbGw9J3VybCglMjNnKScgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnLyUzRSUzQy9zdmclM0VcIik7XHJcbiAgICB9XHJcbiIsImJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MCU7XG59XG5ib2R5IC5mb3JtIHtcbiAgZmxleC1iYXNpczogNTUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5ib2R5IC5mb3JtIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogNDAwcHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xufVxuYm9keSAuZm9ybSAuZXhhbXBsZS1mdWxsLXdpZHRoIC5sYWJlbCB7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmJvZHkgLmZvcm0gLmV4YW1wbGUtZnVsbC13aWR0aCAudGV4dC1kYW5nZXIge1xuICBjb2xvcjogcmVkO1xuICBmb250LWZhbWlseTogUm9ib3RvO1xufVxuYm9keSAuc2lnbmJ1dHRvbnMge1xuICBmbGV4LWJhc2lzOiAyMCU7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMjAwcHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xufVxuYm9keSAuc2lnbmJ1dHRvbnMgOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuYm9keSAuc2lnbmJ1dHRvbnMgLm1haW5idG4ge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgbWFyZ2luLXJpZ2h0OiAzNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmJvZHkgLnNpZ25idXR0b25zIC50b2dnbGVidG4ge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jbG91ZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScgJTNFJTNDZGVmcyUzRSUzQ2xpbmVhckdyYWRpZW50IGlkPSdhJyB4MT0nMCcgeDI9JzAnIHkxPScwJyB5Mj0nMSclM0UlM0NzdG9wIG9mZnNldD0nMCcgc3RvcC1jb2xvcj0nJTIzYWZjMmZmJy8lM0UlM0NzdG9wIG9mZnNldD0nMScgc3RvcC1jb2xvcj0nJTIzY2FmZmI1Jy8lM0UlM0MvbGluZWFyR3JhZGllbnQlM0UlM0MvZGVmcyUzRSUzQ3BhdHRlcm4gaWQ9J2InIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgcGF0dGVyblVuaXRzPSd1c2VyU3BhY2VPblVzZSclM0UlM0NjaXJjbGUgZmlsbD0nJTIzZmZmZmZmJyBjeD0nMTInIGN5PScxMicgcj0nMTInLyUzRSUzQy9wYXR0ZXJuJTNFJTNDcmVjdCB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScgZmlsbD0ndXJsKCUyM2EpJy8lM0UlM0NyZWN0IHdpZHRoPScxMDAlMjUnIGhlaWdodD0nMTAwJTI1JyBmaWxsPSd1cmwoJTIzYiknIGZpbGwtb3BhY2l0eT0nMC4xJy8lM0UlM0Mvc3ZnJTNFXCIpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/men/men.component.ts":
/*!**************************************!*\
  !*** ./src/app/men/men.component.ts ***!
  \**************************************/
/*! exports provided: MenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenComponent", function() { return MenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MenComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
MenComponent.ɵfac = function MenComponent_Factory(t) { return new (t || MenComponent)(); };
MenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenComponent, selectors: [["app-men"]], decls: 2, vars: 0, template: function MenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "men works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbi9tZW4uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-men',
                templateUrl: './men.component.html',
                styleUrls: ['./men.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function NavbarComponent_button_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login/signup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_ng_template_27_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
// import {Router} from '@angular/router';
class NavbarComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        console.log('navbar');
    }
    ngOnInit() {
        if (this.auth.username.length === 0 && !(this.router.url.includes('login'))) {
            this.auth.generaluserdetails().subscribe(data => {
                this.auth.username = data;
                this.userdetails = data;
            });
        }
    }
    logout() {
        // this.auth.username = null;
        // this.userdetails = null;
        this.auth.logoutthedetails().subscribe(data => {
            console.log('dataaaa', data);
            this.auth.username = data;
            this.userdetails = data;
        });
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 29, vars: 3, consts: [[1, "horizantal", "left", "primaryLightBg", "navbar"], [1, "nav-bar"], [1, "main-names"], ["routerLink", "/home", 1, "web-name"], ["routerLink", "/gift"], ["type", "text", "placeholder", "search.."], [1, "group-icons"], ["mat-icon-button", "", "aria-label", "Example icon-button with heart icon", 1, "example-icon", "favorite-icon"], ["mat-icon-button", "", "aria-label", "Example icon-button with share icon", 1, "example-icon"], ["matTooltip", "auth.username", 3, "matMenuTriggerFor"], [1, "menu-overflow-hidden"], ["appMenu", "matMenu"], ["mat-raised-button", "", "routerLink", "/signup", 4, "ngIf", "ngIfElse"], ["userinfo", ""], ["mat-raised-button", "", "routerLink", "/signup"], ["mat-raised-button", "", "routerLink", "/signup", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Niva");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Men");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Women");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Kids");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Gifts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "favorite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "shopping_bag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-menu", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, NavbarComponent_button_26_Template, 2, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, NavbarComponent_ng_template_27_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.username == null || ctx.auth.username.length == 0)("ngIfElse", _r7);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["_MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  width: 100%;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' %3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23afc2ff'/%3E%3Cstop offset='1' stop-color='%23caffb5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpattern id='b' width='24' height='24' patternUnits='userSpaceOnUse'%3E%3Ccircle fill='%23ffffff' cx='12' cy='12' r='12'/%3E%3C/pattern%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3Crect width='100%25' height='100%25' fill='url(%23b)' fill-opacity='0.1'/%3E%3C/svg%3E\");\n}\n\n.nav-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin: 0px 10px 0px 10px;\n  width: 100%;\n}\n\n.nav-bar[_ngcontent-%COMP%]   .main-names[_ngcontent-%COMP%] {\n  width: 70%;\n  display: flex;\n  align-items: center;\n}\n\n.nav-bar[_ngcontent-%COMP%]   .main-names[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 20%;\n  margin: 0px 15px 0px 15px;\n  cursor: pointer;\n}\n\n.nav-bar[_ngcontent-%COMP%]   .main-names[_ngcontent-%COMP%]   .web-name[_ngcontent-%COMP%] {\n  width: 40%;\n  cursor: pointer;\n}\n\n.nav-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin: 0px 15px 0px 40px;\n  padding: 0px 5px 0px 5px;\n  width: 70%;\n}\n\n.nav-bar[_ngcontent-%COMP%]   .group-icons[_ngcontent-%COMP%] {\n  width: 10%;\n  align-items: center;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL0M6XFxVc2Vyc1xcVHVsYXNpXFxEZXNrdG9wXFxiYWNrZW5kXFxmcm9udGVuZC9zcmNcXGFwcFxcbmF2YmFyXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtFQUdKLGtsQkFBQTtBQ0FBOztBREdBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDQUo7O0FER0k7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDRFI7O0FESVE7RUFDSSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDRlo7O0FES1E7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQ0haOztBRE9JO0VBQ0kseUJBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7QUNMUjs7QURRSTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtFQUVBLGFBQUE7QUNQUiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxubWF0LXRvb2xiYXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiA7XHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScgJTNFJTNDZGVmcyUzRSUzQ2xpbmVhckdyYWRpZW50IGlkPSdhJyB4MT0nMCcgeDI9JzAnIHkxPScwJyB5Mj0nMSclM0UlM0NzdG9wIG9mZnNldD0nMCcgc3RvcC1jb2xvcj0nJTIzYWZjMmZmJy8lM0UlM0NzdG9wIG9mZnNldD0nMScgc3RvcC1jb2xvcj0nJTIzY2FmZmI1Jy8lM0UlM0MvbGluZWFyR3JhZGllbnQlM0UlM0MvZGVmcyUzRSUzQ3BhdHRlcm4gaWQ9J2InIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgcGF0dGVyblVuaXRzPSd1c2VyU3BhY2VPblVzZSclM0UlM0NjaXJjbGUgZmlsbD0nJTIzZmZmZmZmJyBjeD0nMTInIGN5PScxMicgcj0nMTInLyUzRSUzQy9wYXR0ZXJuJTNFJTNDcmVjdCB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScgZmlsbD0ndXJsKCUyM2EpJy8lM0UlM0NyZWN0IHdpZHRoPScxMDAlMjUnIGhlaWdodD0nMTAwJTI1JyBmaWxsPSd1cmwoJTIzYiknIGZpbGwtb3BhY2l0eT0nMC4xJy8lM0UlM0Mvc3ZnJTNFXCIpO1xyXG5cclxufVxyXG4ubmF2LWJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIG1hcmdpbjogMHB4IDEwcHggMHB4IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vIGJhY2tncm91bmQ6IGZpeGVkO1xyXG4gICAgXHJcbiAgICAubWFpbi1uYW1lc3tcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgICAgIC8vIC53ZWItbmFtZSBcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggMTVweCAwcHggMTVweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xyXG4gICAgICAgIH1cclxuICAgICAgICAud2ViLW5hbWUge1xyXG4gICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmVlbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMTVweCAwcHggNDBweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHggNXB4IDBweCA1cHg7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcclxuICAgIH1cclxuICAgIC5ncm91cC1pY29ucyB7XHJcbiAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGRhcmtvcmFuZ2U7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG4iLCIqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5tYXQtdG9vbGJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnICUzRSUzQ2RlZnMlM0UlM0NsaW5lYXJHcmFkaWVudCBpZD0nYScgeDE9JzAnIHgyPScwJyB5MT0nMCcgeTI9JzEnJTNFJTNDc3RvcCBvZmZzZXQ9JzAnIHN0b3AtY29sb3I9JyUyM2FmYzJmZicvJTNFJTNDc3RvcCBvZmZzZXQ9JzEnIHN0b3AtY29sb3I9JyUyM2NhZmZiNScvJTNFJTNDL2xpbmVhckdyYWRpZW50JTNFJTNDL2RlZnMlM0UlM0NwYXR0ZXJuIGlkPSdiJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnJTNFJTNDY2lyY2xlIGZpbGw9JyUyM2ZmZmZmZicgY3g9JzEyJyBjeT0nMTInIHI9JzEyJy8lM0UlM0MvcGF0dGVybiUzRSUzQ3JlY3Qgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnIGZpbGw9J3VybCglMjNhKScvJTNFJTNDcmVjdCB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScgZmlsbD0ndXJsKCUyM2IpJyBmaWxsLW9wYWNpdHk9JzAuMScvJTNFJTNDL3N2ZyUzRVwiKTtcbn1cblxuLm5hdi1iYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW46IDBweCAxMHB4IDBweCAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5uYXYtYmFyIC5tYWluLW5hbWVzIHtcbiAgd2lkdGg6IDcwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5uYXYtYmFyIC5tYWluLW5hbWVzIHNwYW4ge1xuICB3aWR0aDogMjAlO1xuICBtYXJnaW46IDBweCAxNXB4IDBweCAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubmF2LWJhciAubWFpbi1uYW1lcyAud2ViLW5hbWUge1xuICB3aWR0aDogNDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubmF2LWJhciBpbnB1dCB7XG4gIG1hcmdpbjogMHB4IDE1cHggMHB4IDQwcHg7XG4gIHBhZGRpbmc6IDBweCA1cHggMHB4IDVweDtcbiAgd2lkdGg6IDcwJTtcbn1cbi5uYXYtYmFyIC5ncm91cC1pY29ucyB7XG4gIHdpZHRoOiAxMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");










class RegisterComponent {
    constructor(fb, auth, router, snackbar) {
        this.fb = fb;
        this.auth = auth;
        this.router = router;
        this.snackbar = snackbar;
        this.matter = '';
        this.signupForm = this.fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]],
            repeatpassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    ngOnInit() {
    }
    routelogin(path) {
        this.router.navigate([path]);
    }
    Onsubmit() {
        this.auth.generalsignup(this.signupForm.value).subscribe(data => {
            console.log(data, 'datta');
            // this.matter = data;
            this.snackbar.open(data, "ok", { duration: 15000 });
            // this.signupLoader = false;
            // if(data.status){
            // // localStorage.setItem('forward',''); 
            // this.snackbar.open("An account verification mail is sent. Please check.","ok",{duration:20000});
            // this.router.navigate(['/login']);
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 27, vars: 4, consts: [[1, "form", "example-form"], [3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "example-full-width"], [1, "label"], ["matInput", "", "formControlName", "username", 1, "textbox"], ["matInput", "", "formControlName", "email", 1, "textbox"], ["matInput", "", "formControlName", "password", 1, "textbox"], ["matInput", "", "formControlName", "repeatpassword", 1, "textbox"], [1, "signbuttons"], ["mat-raised-button", "", "type", "submit", 1, "mainbtn", 3, "disabled"], ["mat-stroked-button", "", 1, "togglebtn", 3, "click"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_2_listener() { return ctx.Onsubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Repeat Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_25_listener() { return ctx.routelogin("login"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signupForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.signupForm.get("username").touched && ctx.signupForm.get("username").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.signupForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], styles: ["body[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' %3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23afc2ff'/%3E%3Cstop offset='1' stop-color='%23caffb5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpattern id='b' width='24' height='24' patternUnits='userSpaceOnUse'%3E%3Ccircle fill='%23ffffff' cx='12' cy='12' r='12'/%3E%3C/pattern%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3Crect width='100%25' height='100%25' fill='url(%23b)' fill-opacity='0.1'/%3E%3C/svg%3E\");\n  background-attachment: fixed;\n  background-size: cover;\n  width: 100%;\n  height: 90%;\n}\nbody[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  flex-basis: 55%;\n  text-align: center;\n}\nbody[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .example-full-width[_ngcontent-%COMP%] {\n  width: 400px;\n  font-family: Poppins;\n}\nbody[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .example-full-width[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: #707070;\n  font-weight: bold;\n}\nbody[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .example-full-width[_ngcontent-%COMP%]   .text-danger[_ngcontent-%COMP%] {\n  color: red;\n  font-family: Roboto;\n}\nbody[_ngcontent-%COMP%]   .signbuttons[_ngcontent-%COMP%] {\n  flex-basis: 20%;\n  margin-top: 30px;\n  margin-left: -200px;\n  font-family: Poppins;\n}\nbody[_ngcontent-%COMP%]   .signbuttons[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\nbody[_ngcontent-%COMP%]   .signbuttons[_ngcontent-%COMP%]   .mainbtn[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  margin-right: 35px;\n  color: white;\n  background-color: black;\n  font-weight: bold;\n}\nbody[_ngcontent-%COMP%]   .signbuttons[_ngcontent-%COMP%]   .togglebtn[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvQzpcXFVzZXJzXFxUdWxhc2lcXERlc2t0b3BcXGJhY2tlbmRcXGZyb250ZW5kL3NyY1xcYXBwXFxyZWdpc3RlclxccmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDSixrbEJBQUE7RUFHSSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNESjtBREVJO0VBRUksZUFBQTtFQUNBLGtCQUFBO0FDRFI7QURFUTtFQUVJLFlBQUE7RUFDQSxvQkFBQTtBQ0RaO0FERVk7RUFFSSxjQUFBO0VBQ0EsaUJBQUE7QUNEaEI7QURHWTtFQUVJLFVBQUE7RUFDQSxtQkFBQTtBQ0ZoQjtBRFFJO0VBR0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQ1JSO0FEU1E7RUFFSSxlQUFBO0FDUlo7QURVUTtFQUVJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQ1RaO0FEV1E7RUFHSSxvQkFBQTtFQUNBLGlCQUFBO0FDWFoiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAlMjUnIGhlaWdodD0nMTAwJTI1JyAlM0UlM0NkZWZzJTNFJTNDbGluZWFyR3JhZGllbnQgaWQ9J2EnIHgxPScwJyB4Mj0nMCcgeTE9JzAnIHkyPScxJyUzRSUzQ3N0b3Agb2Zmc2V0PScwJyBzdG9wLWNvbG9yPSclMjNhZmMyZmYnLyUzRSUzQ3N0b3Agb2Zmc2V0PScxJyBzdG9wLWNvbG9yPSclMjNjYWZmYjUnLyUzRSUzQy9saW5lYXJHcmFkaWVudCUzRSUzQy9kZWZzJTNFJTNDcGF0dGVybiBpZD0nYicgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyBwYXR0ZXJuVW5pdHM9J3VzZXJTcGFjZU9uVXNlJyUzRSUzQ2NpcmNsZSBmaWxsPSclMjNmZmZmZmYnIGN4PScxMicgY3k9JzEyJyByPScxMicvJTNFJTNDL3BhdHRlcm4lM0UlM0NyZWN0IHdpZHRoPScxMDAlMjUnIGhlaWdodD0nMTAwJTI1JyBmaWxsPSd1cmwoJTIzYSknLyUzRSUzQ3JlY3Qgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnIGZpbGw9J3VybCglMjNiKScgZmlsbC1vcGFjaXR5PScwLjEnLyUzRSUzQy9zdmclM0VcIik7XHJcblxyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyMDAwIDE1MDAnJTNFJTNDZGVmcyUzRSUzQ3JlY3Qgc3Ryb2tlPSclMjNmZmZmZmYnIHN0cm9rZS13aWR0aD0nMC43JyB3aWR0aD0nMScgaGVpZ2h0PScxJyBpZD0ncycvJTNFJTNDcGF0dGVybiBpZD0nYScgd2lkdGg9JzMnIGhlaWdodD0nMycgcGF0dGVyblVuaXRzPSd1c2VyU3BhY2VPblVzZScgcGF0dGVyblRyYW5zZm9ybT0nc2NhbGUoNDUuMTUpIHRyYW5zbGF0ZSgtOTc3Ljg1IC03MzMuMzkpJyUzRSUzQ3VzZSBmaWxsPSclMjNmYWZhZmEnIGhyZWY9JyUyM3MnIHk9JzInLyUzRSUzQ3VzZSBmaWxsPSclMjNmYWZhZmEnIGhyZWY9JyUyM3MnIHg9JzEnIHk9JzInLyUzRSUzQ3VzZSBmaWxsPSclMjNmNWY1ZjUnIGhyZWY9JyUyM3MnIHg9JzInIHk9JzInLyUzRSUzQ3VzZSBmaWxsPSclMjNmNWY1ZjUnIGhyZWY9JyUyM3MnLyUzRSUzQ3VzZSBmaWxsPSclMjNmMGYwZjAnIGhyZWY9JyUyM3MnIHg9JzInLyUzRSUzQ3VzZSBmaWxsPSclMjNmMGYwZjAnIGhyZWY9JyUyM3MnIHg9JzEnIHk9JzEnLyUzRSUzQy9wYXR0ZXJuJTNFJTNDcGF0dGVybiBpZD0nYicgd2lkdGg9JzcnIGhlaWdodD0nMTEnIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnIHBhdHRlcm5UcmFuc2Zvcm09J3NjYWxlKDQ1LjE1KSB0cmFuc2xhdGUoLTk3Ny44NSAtNzMzLjM5KSclM0UlM0NnIGZpbGw9JyUyM2ViZWJlYiclM0UlM0N1c2UgaHJlZj0nJTIzcycvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHk9JzUnIC8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMScgeT0nMTAnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScyJyB5PScxJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMicgeT0nNCcvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzMnIHk9JzgnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc0JyB5PSczJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nNCcgeT0nNycvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzUnIHk9JzInLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc1JyB5PSc2Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nNicgeT0nOScvJTNFJTNDL2clM0UlM0MvcGF0dGVybiUzRSUzQ3BhdHRlcm4gaWQ9J2gnIHdpZHRoPSc1JyBoZWlnaHQ9JzEzJyBwYXR0ZXJuVW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBwYXR0ZXJuVHJhbnNmb3JtPSdzY2FsZSg0NS4xNSkgdHJhbnNsYXRlKC05NzcuODUgLTczMy4zOSknJTNFJTNDZyBmaWxsPSclMjNlYmViZWInJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHk9JzUnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB5PSc4Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMScgeT0nMScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzEnIHk9JzknLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxJyB5PScxMicvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzInLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScyJyB5PSc0Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMycgeT0nMicvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzMnIHk9JzYnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSczJyB5PScxMScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzQnIHk9JzMnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc0JyB5PSc3Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nNCcgeT0nMTAnLyUzRSUzQy9nJTNFJTNDL3BhdHRlcm4lM0UlM0NwYXR0ZXJuIGlkPSdjJyB3aWR0aD0nMTcnIGhlaWdodD0nMTMnIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnIHBhdHRlcm5UcmFuc2Zvcm09J3NjYWxlKDQ1LjE1KSB0cmFuc2xhdGUoLTk3Ny44NSAtNzMzLjM5KSclM0UlM0NnIGZpbGw9JyUyM2U1ZTVlNSclM0UlM0N1c2UgaHJlZj0nJTIzcycgeT0nMTEnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScyJyB5PSc5Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nNScgeT0nMTInLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc5JyB5PSc0Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMTInIHk9JzEnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxNicgeT0nNicvJTNFJTNDL2clM0UlM0MvcGF0dGVybiUzRSUzQ3BhdHRlcm4gaWQ9J2QnIHdpZHRoPScxOScgaGVpZ2h0PScxNycgcGF0dGVyblVuaXRzPSd1c2VyU3BhY2VPblVzZScgcGF0dGVyblRyYW5zZm9ybT0nc2NhbGUoNDUuMTUpIHRyYW5zbGF0ZSgtOTc3Ljg1IC03MzMuMzkpJyUzRSUzQ2cgZmlsbD0nJTIzZmZmZmZmJyUzRSUzQ3VzZSBocmVmPSclMjNzJyB5PSc5Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMTYnIHk9JzUnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxNCcgeT0nMicvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzExJyB5PScxMScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzYnIHk9JzE0Jy8lM0UlM0MvZyUzRSUzQ2cgZmlsbD0nJTIzZTBlMGUwJyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSczJyB5PScxMycvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzknIHk9JzcnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxMycgeT0nMTAnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxNScgeT0nNCcvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzE4JyB5PScxJy8lM0UlM0MvZyUzRSUzQy9wYXR0ZXJuJTNFJTNDcGF0dGVybiBpZD0nZScgd2lkdGg9JzQ3JyBoZWlnaHQ9JzUzJyBwYXR0ZXJuVW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBwYXR0ZXJuVHJhbnNmb3JtPSdzY2FsZSg0NS4xNSkgdHJhbnNsYXRlKC05NzcuODUgLTczMy4zOSknJTNFJTNDZyBmaWxsPSclMjNGNjAnJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzInIHk9JzUnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxNicgeT0nMzgnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc0NicgeT0nNDInLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScyOScgeT0nMjAnLyUzRSUzQy9nJTNFJTNDL3BhdHRlcm4lM0UlM0NwYXR0ZXJuIGlkPSdmJyB3aWR0aD0nNTknIGhlaWdodD0nNzEnIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnIHBhdHRlcm5UcmFuc2Zvcm09J3NjYWxlKDQ1LjE1KSB0cmFuc2xhdGUoLTk3Ny44NSAtNzMzLjM5KSclM0UlM0NnIGZpbGw9JyUyM0Y2MCclM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMzMnIHk9JzEzJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMjcnIHk9JzU0Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nNTUnIHk9JzU1Jy8lM0UlM0MvZyUzRSUzQy9wYXR0ZXJuJTNFJTNDcGF0dGVybiBpZD0nZycgd2lkdGg9JzEzOScgaGVpZ2h0PSc5NycgcGF0dGVyblVuaXRzPSd1c2VyU3BhY2VPblVzZScgcGF0dGVyblRyYW5zZm9ybT0nc2NhbGUoNDUuMTUpIHRyYW5zbGF0ZSgtOTc3Ljg1IC03MzMuMzkpJyUzRSUzQ2cgZmlsbD0nJTIzRjYwJyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxMScgeT0nOCcvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzUxJyB5PScxMycvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzE3JyB5PSc3MycvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9Jzk5JyB5PSc1NycvJTNFJTNDL2clM0UlM0MvcGF0dGVybiUzRSUzQy9kZWZzJTNFJTNDcmVjdCBmaWxsPSd1cmwoJTIzYSknIHdpZHRoPScxMDAlMjUnIGhlaWdodD0nMTAwJTI1Jy8lM0UlM0NyZWN0IGZpbGw9J3VybCglMjNiKScgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnLyUzRSUzQ3JlY3QgZmlsbD0ndXJsKCUyM2gpJyB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScvJTNFJTNDcmVjdCBmaWxsPSd1cmwoJTIzYyknIHdpZHRoPScxMDAlMjUnIGhlaWdodD0nMTAwJTI1Jy8lM0UlM0NyZWN0IGZpbGw9J3VybCglMjNkKScgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnLyUzRSUzQ3JlY3QgZmlsbD0ndXJsKCUyM2UpJyB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScvJTNFJTNDcmVjdCBmaWxsPSd1cmwoJTIzZiknIHdpZHRoPScxMDAlMjUnIGhlaWdodD0nMTAwJTI1Jy8lM0UlM0NyZWN0IGZpbGw9J3VybCglMjNnKScgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnLyUzRSUzQy9zdmclM0VcIik7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAuZm9ybXtcclxuICAgICAgICBcclxuICAgICAgICBmbGV4LWJhc2lzOjU1JTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLmV4YW1wbGUtZnVsbC13aWR0aFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd2lkdGg6NDAwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgICAgICAubGFiZWxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IzcwNzA3MDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGV4dC1kYW5nZXJcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6cmVkO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAuc2lnbmJ1dHRvbnNcclxuICAgIHtcclxuICAgIFxyXG4gICAgICAgIGZsZXgtYmFzaXM6MjAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6MzBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDotMjAwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICAgICAgOmhvdmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYWluYnRuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjM1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9nZ2xlYnRuXHJcbiAgICBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59IiwiYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScgJTNFJTNDZGVmcyUzRSUzQ2xpbmVhckdyYWRpZW50IGlkPSdhJyB4MT0nMCcgeDI9JzAnIHkxPScwJyB5Mj0nMSclM0UlM0NzdG9wIG9mZnNldD0nMCcgc3RvcC1jb2xvcj0nJTIzYWZjMmZmJy8lM0UlM0NzdG9wIG9mZnNldD0nMScgc3RvcC1jb2xvcj0nJTIzY2FmZmI1Jy8lM0UlM0MvbGluZWFyR3JhZGllbnQlM0UlM0MvZGVmcyUzRSUzQ3BhdHRlcm4gaWQ9J2InIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgcGF0dGVyblVuaXRzPSd1c2VyU3BhY2VPblVzZSclM0UlM0NjaXJjbGUgZmlsbD0nJTIzZmZmZmZmJyBjeD0nMTInIGN5PScxMicgcj0nMTInLyUzRSUzQy9wYXR0ZXJuJTNFJTNDcmVjdCB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScgZmlsbD0ndXJsKCUyM2EpJy8lM0UlM0NyZWN0IHdpZHRoPScxMDAlMjUnIGhlaWdodD0nMTAwJTI1JyBmaWxsPSd1cmwoJTIzYiknIGZpbGwtb3BhY2l0eT0nMC4xJy8lM0UlM0Mvc3ZnJTNFXCIpO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MCU7XG59XG5ib2R5IC5mb3JtIHtcbiAgZmxleC1iYXNpczogNTUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5ib2R5IC5mb3JtIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogNDAwcHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xufVxuYm9keSAuZm9ybSAuZXhhbXBsZS1mdWxsLXdpZHRoIC5sYWJlbCB7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmJvZHkgLmZvcm0gLmV4YW1wbGUtZnVsbC13aWR0aCAudGV4dC1kYW5nZXIge1xuICBjb2xvcjogcmVkO1xuICBmb250LWZhbWlseTogUm9ib3RvO1xufVxuYm9keSAuc2lnbmJ1dHRvbnMge1xuICBmbGV4LWJhc2lzOiAyMCU7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMjAwcHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xufVxuYm9keSAuc2lnbmJ1dHRvbnMgOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuYm9keSAuc2lnbmJ1dHRvbnMgLm1haW5idG4ge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgbWFyZ2luLXJpZ2h0OiAzNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmJvZHkgLnNpZ25idXR0b25zIC50b2dnbGVidG4ge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sellform/sellform.component.ts":
/*!************************************************!*\
  !*** ./src/app/sellform/sellform.component.ts ***!
  \************************************************/
/*! exports provided: SellformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellformComponent", function() { return SellformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_sellservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/sellservice.service */ "./src/services/sellservice.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
















function SellformComponent_mat_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r4, " ");
} }
function SellformComponent_mat_spinner_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
} }
function SellformComponent_img_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 28);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r3.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
// import {AngularFireStorageModule} from '@angular/fire/storage'
// import {AngularFireModule} from '@angular/fire'
class SellformComponent {
    constructor(fb, router, sell, snackbar, afStorage) {
        this.fb = fb;
        this.router = router;
        this.sell = sell;
        this.snackbar = snackbar;
        this.afStorage = afStorage;
        this.categories = ['Men', 'Women', 'Kids', 'Gift'];
        this.colors = ['pink', 'yellow', 'red', 'green', 'blue', 'orange', 'white', 'black', 'brown', 'grey'];
        this.imagechoosentoupload = false;
        this.sellproductform = this.fb.group({
            companyname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            productname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            brand: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            color: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            realprize: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            discount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            size: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            noofproducts: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            image: [''],
            place: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            videolink: [''],
        });
        this.spinnerstart = false;
        this.imageloader = false;
    }
    ngOnInit() {
    }
    upload($event) {
        this.spinnerstart = true;
        this.filePath = $event.target.files[0];
        if ($event.target.files.length > 0) {
            const file = $event.target.files[0];
            this.selectedimage = $event.target.files[0];
            var reader = new FileReader();
            reader.onload = (event) => {
                this.spinnerstart = false;
                this.imageloader = true;
                this.url = event.target.result;
            };
            reader.readAsDataURL(file);
            // this.imageloader=true;
            // reader.readAsDataURL(file);
        }
    }
    Onsubmit() {
        console.log("********");
        var n = Date.now();
        // const file = event.target.files[0];
        // const filePath = `/images`;
        // this.filePath = $event.target.files[0]
        const file = `RoomsImages/${n}`;
        const fileRef = this.afStorage.ref(file);
        const task = this.afStorage.upload(`RoomsImages/${n}`, this.filePath);
        task.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
            this.downloadURL = fileRef.getDownloadURL();
            this.downloadURL.subscribe(url => {
                if (url) {
                    this.fb1 = url;
                }
                this.sellproductform.value.image = this.fb1;
                console.log('url2', this.fb1);
            });
        }))
            .subscribe(url => {
            if (url) {
                console.log('url1', url);
            }
        });
        console.log("form values", this.sellproductform.value);
        this.sell.carddetails = this.sellproductform.value;
        this.sell.generalsellform(this.sellproductform.value).subscribe(data => {
            if (data === 'succesful') {
                this.showSnackbar('added successfully');
            }
            else {
                this.showSnackbar('something wrong try again');
            }
        });
        this.router.navigate(['/cardcreated']);
    }
    showSnackbar(message) {
        console.log('snckbar');
        this.snackbar.open(message, "ok", { duration: 15000 });
    }
}
SellformComponent.ɵfac = function SellformComponent_Factory(t) { return new (t || SellformComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sellservice_service__WEBPACK_IMPORTED_MODULE_4__["SellserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"])); };
SellformComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SellformComponent, selectors: [["app-sellform"]], decls: 76, vars: 27, consts: [[1, "sellpage"], [1, "header"], ["src", "../../assets/undraw_web_shopping_dd4l.svg", "width", "200px", "height", "200px", 1, "animate__animated", "animate__flash"], [1, "matter", "animate__animated", "animate__flash"], [1, "form", "example-form"], [3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "example-full-width"], [1, "label"], ["matInput", "", "formControlName", "companyname", 1, "textbox"], ["matInput", "", "formControlName", "productname", 1, "textbox"], ["formControlName", "category", "multiple", ""], [4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "type", 1, "textbox"], ["matInput", "", "formControlName", "brand", 1, "textbox"], ["type", "number", "matInput", "", "formControlName", "noofproducts", 1, "textbox"], ["matInput", "", "formControlName", "color", 1, "textbox"], ["matInput", "", "formControlName", "realprize", 1, "textbox"], ["matInput", "", "formControlName", "discount", 1, "textbox"], ["matInput", "", "formControlName", "age", 1, "textbox"], ["matInput", "", "formControlName", "size", 1, "textbox"], ["matInput", "", "formControlName", "place", 1, "textbox"], [1, "image-section", 2, "display", "flex"], [4, "ngIf"], [2, "display", "flex", "margin-left", "23.5%"], ["width", "100px", "height", "100px", 3, "src", 4, "ngIf"], ["type", "file", "accept", ".png,.jpg", 3, "change"], [1, "signbuttons"], ["mat-button", "", "type", "submit", 1, "mainbtn", 3, "disabled"], ["width", "100px", "height", "100px", 3, "src"]], template: function SellformComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sell with peace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SellformComponent_Template_form_ngSubmit_6_listener() { return ctx.Onsubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Companyname");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Productname");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SellformComponent_mat_option_20_Template, 2, 1, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "No of products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Availablecolor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Realprize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Discount on realprize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Famous at which place");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, SellformComponent_mat_spinner_63_Template, 1, 0, "mat-spinner", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, SellformComponent_img_65_Template, 1, 1, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Upload ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SellformComponent_Template_input_change_68_listener($event) { return ctx.upload($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.sellproductform);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.sellproductform.get("companyname").touched && ctx.sellproductform.get("companyname").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.sellproductform.get("productname").touched && ctx.sellproductform.get("productname").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.sellproductform.get("type").touched && ctx.sellproductform.get("type").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.sellproductform.get("brand").touched && ctx.sellproductform.get("brand").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.sellproductform.get("noofproducts").touched && ctx.sellproductform.get("noofproducts").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.sellproductform.get("color").touched && ctx.sellproductform.get("color").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.sellproductform.get("realprize").touched && ctx.sellproductform.get("realprize").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.sellproductform.get("discount").touched && ctx.sellproductform.get("discount").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.sellproductform.get("age").touched && ctx.sellproductform.get("age").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.sellproductform.get("size").touched && ctx.sellproductform.get("size").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.sellproductform.get("place").touched && ctx.sellproductform.get("place").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.imageloader && ctx.spinnerstart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imageloader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.sellproductform.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatSpinner"]], styles: [".sellpage[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23ffffff' stroke-width='0.7' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='scale(45.15) translate(-977.85 -733.39)'%3E%3Cuse fill='%23fafafa' href='%23s' y='2'/%3E%3Cuse fill='%23fafafa' href='%23s' x='1' y='2'/%3E%3Cuse fill='%23f5f5f5' href='%23s' x='2' y='2'/%3E%3Cuse fill='%23f5f5f5' href='%23s'/%3E%3Cuse fill='%23f0f0f0' href='%23s' x='2'/%3E%3Cuse fill='%23f0f0f0' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='scale(45.15) translate(-977.85 -733.39)'%3E%3Cg fill='%23ebebeb'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(45.15) translate(-977.85 -733.39)'%3E%3Cg fill='%23ebebeb'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(45.15) translate(-977.85 -733.39)'%3E%3Cg fill='%23e5e5e5'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='scale(45.15) translate(-977.85 -733.39)'%3E%3Cg fill='%23ffffff'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%23e0e0e0'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='scale(45.15) translate(-977.85 -733.39)'%3E%3Cg fill='%23F60'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='scale(45.15) translate(-977.85 -733.39)'%3E%3Cg fill='%23F60'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='scale(45.15) translate(-977.85 -733.39)'%3E%3Cg fill='%23F60'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E\");\n}\n.sellpage[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.sellpage[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .matter[_ngcontent-%COMP%] {\n  font-size: 50px;\n  margin-left: 20px;\n  font-family: Poppins;\n}\n.sellpage[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  flex-basis: 55%;\n  text-align: center;\n}\n.sellpage[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .example-full-width[_ngcontent-%COMP%] {\n  width: 400px;\n  font-family: Poppins;\n  margin-left: 5px;\n}\n.sellpage[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .example-full-width[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: #707070;\n  font-weight: bold;\n}\n.sellpage[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .example-full-width[_ngcontent-%COMP%]   .text-danger[_ngcontent-%COMP%] {\n  color: red;\n  font-family: Roboto;\n}\n.signbuttons[_ngcontent-%COMP%] {\n  flex-basis: 20%;\n  margin-top: 30px;\n  margin-left: -725px;\n  font-family: Poppins;\n}\n.signbuttons[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.signbuttons[_ngcontent-%COMP%]   .mainbtn[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  color: white;\n  background-color: black;\n  font-weight: bold;\n}\n.signbuttons[_ngcontent-%COMP%]   .togglebtn[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-weight: bold;\n}\ninput[type=file][_ngcontent-%COMP%] {\n  opacity: 0;\n  display: none;\n}\nlabel[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-weight: 600;\n  font-size: 14px;\n  margin-left: 10px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #000000;\n  height: 70px;\n  width: 120px;\n  background-color: #E3E5E7;\n  border-radius: none;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.imagesection[_ngcontent-%COMP%] {\n  margin-left: 37%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsbGZvcm0vQzpcXFVzZXJzXFxUdWxhc2lcXERlc2t0b3BcXGJhY2tlbmRcXGZyb250ZW5kL3NyY1xcYXBwXFxzZWxsZm9ybVxcc2VsbGZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlbGxmb3JtL3NlbGxmb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksOGdJQUFBO0FDQUo7QURFSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQVI7QURDUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDQ1o7QURJSTtFQUVJLGVBQUE7RUFDQSxrQkFBQTtBQ0hSO0FES1E7RUFFSSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQ0paO0FES1k7RUFFSSxjQUFBO0VBQ0EsaUJBQUE7QUNKaEI7QURNWTtFQUVJLFVBQUE7RUFDQSxtQkFBQTtBQ0xoQjtBRGFBO0VBR0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQ1pKO0FEYUk7RUFFSSxlQUFBO0FDWlI7QURjSTtFQUVJLG9CQUFBO0VBRUEsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUNkUjtBRGdCSTtFQUdJLG9CQUFBO0VBQ0EsaUJBQUE7QUNoQlI7QURzQkE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtBQ25CSjtBRHVCRTtFQUNFLG9CQUFBO0VBQ00sZ0JBQUE7RUFDQSxlQUFBO0VBRUEsaUJBQUE7RUFHQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUN2QlY7QUQwQkU7RUFDSSxnQkFBQTtBQ3ZCTiIsImZpbGUiOiJzcmMvYXBwL3NlbGxmb3JtL3NlbGxmb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5zZWxscGFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDIwMDAgMTUwMCclM0UlM0NkZWZzJTNFJTNDcmVjdCBzdHJva2U9JyUyM2ZmZmZmZicgc3Ryb2tlLXdpZHRoPScwLjcnIHdpZHRoPScxJyBoZWlnaHQ9JzEnIGlkPSdzJy8lM0UlM0NwYXR0ZXJuIGlkPSdhJyB3aWR0aD0nMycgaGVpZ2h0PSczJyBwYXR0ZXJuVW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBwYXR0ZXJuVHJhbnNmb3JtPSdzY2FsZSg0NS4xNSkgdHJhbnNsYXRlKC05NzcuODUgLTczMy4zOSknJTNFJTNDdXNlIGZpbGw9JyUyM2ZhZmFmYScgaHJlZj0nJTIzcycgeT0nMicvJTNFJTNDdXNlIGZpbGw9JyUyM2ZhZmFmYScgaHJlZj0nJTIzcycgeD0nMScgeT0nMicvJTNFJTNDdXNlIGZpbGw9JyUyM2Y1ZjVmNScgaHJlZj0nJTIzcycgeD0nMicgeT0nMicvJTNFJTNDdXNlIGZpbGw9JyUyM2Y1ZjVmNScgaHJlZj0nJTIzcycvJTNFJTNDdXNlIGZpbGw9JyUyM2YwZjBmMCcgaHJlZj0nJTIzcycgeD0nMicvJTNFJTNDdXNlIGZpbGw9JyUyM2YwZjBmMCcgaHJlZj0nJTIzcycgeD0nMScgeT0nMScvJTNFJTNDL3BhdHRlcm4lM0UlM0NwYXR0ZXJuIGlkPSdiJyB3aWR0aD0nNycgaGVpZ2h0PScxMScgcGF0dGVyblVuaXRzPSd1c2VyU3BhY2VPblVzZScgcGF0dGVyblRyYW5zZm9ybT0nc2NhbGUoNDUuMTUpIHRyYW5zbGF0ZSgtOTc3Ljg1IC03MzMuMzkpJyUzRSUzQ2cgZmlsbD0nJTIzZWJlYmViJyUzRSUzQ3VzZSBocmVmPSclMjNzJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeT0nNScgLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxJyB5PScxMCcvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzInIHk9JzEnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScyJyB5PSc0Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMycgeT0nOCcvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzQnIHk9JzMnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc0JyB5PSc3Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nNScgeT0nMicvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzUnIHk9JzYnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc2JyB5PSc5Jy8lM0UlM0MvZyUzRSUzQy9wYXR0ZXJuJTNFJTNDcGF0dGVybiBpZD0naCcgd2lkdGg9JzUnIGhlaWdodD0nMTMnIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnIHBhdHRlcm5UcmFuc2Zvcm09J3NjYWxlKDQ1LjE1KSB0cmFuc2xhdGUoLTk3Ny44NSAtNzMzLjM5KSclM0UlM0NnIGZpbGw9JyUyM2ViZWJlYiclM0UlM0N1c2UgaHJlZj0nJTIzcycgeT0nNScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHk9JzgnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxJyB5PScxJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMScgeT0nOScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzEnIHk9JzEyJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMicvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzInIHk9JzQnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSczJyB5PScyJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMycgeT0nNicvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzMnIHk9JzExJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nNCcgeT0nMycvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzQnIHk9JzcnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc0JyB5PScxMCcvJTNFJTNDL2clM0UlM0MvcGF0dGVybiUzRSUzQ3BhdHRlcm4gaWQ9J2MnIHdpZHRoPScxNycgaGVpZ2h0PScxMycgcGF0dGVyblVuaXRzPSd1c2VyU3BhY2VPblVzZScgcGF0dGVyblRyYW5zZm9ybT0nc2NhbGUoNDUuMTUpIHRyYW5zbGF0ZSgtOTc3Ljg1IC03MzMuMzkpJyUzRSUzQ2cgZmlsbD0nJTIzZTVlNWU1JyUzRSUzQ3VzZSBocmVmPSclMjNzJyB5PScxMScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzInIHk9JzknLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc1JyB5PScxMicvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzknIHk9JzQnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxMicgeT0nMScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzE2JyB5PSc2Jy8lM0UlM0MvZyUzRSUzQy9wYXR0ZXJuJTNFJTNDcGF0dGVybiBpZD0nZCcgd2lkdGg9JzE5JyBoZWlnaHQ9JzE3JyBwYXR0ZXJuVW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBwYXR0ZXJuVHJhbnNmb3JtPSdzY2FsZSg0NS4xNSkgdHJhbnNsYXRlKC05NzcuODUgLTczMy4zOSknJTNFJTNDZyBmaWxsPSclMjNmZmZmZmYnJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHk9JzknLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxNicgeT0nNScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzE0JyB5PScyJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMTEnIHk9JzExJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nNicgeT0nMTQnLyUzRSUzQy9nJTNFJTNDZyBmaWxsPSclMjNlMGUwZTAnJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzMnIHk9JzEzJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nOScgeT0nNycvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzEzJyB5PScxMCcvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzE1JyB5PSc0Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMTgnIHk9JzEnLyUzRSUzQy9nJTNFJTNDL3BhdHRlcm4lM0UlM0NwYXR0ZXJuIGlkPSdlJyB3aWR0aD0nNDcnIGhlaWdodD0nNTMnIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnIHBhdHRlcm5UcmFuc2Zvcm09J3NjYWxlKDQ1LjE1KSB0cmFuc2xhdGUoLTk3Ny44NSAtNzMzLjM5KSclM0UlM0NnIGZpbGw9JyUyM0Y2MCclM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMicgeT0nNScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzE2JyB5PSczOCcvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzQ2JyB5PSc0MicvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzI5JyB5PScyMCcvJTNFJTNDL2clM0UlM0MvcGF0dGVybiUzRSUzQ3BhdHRlcm4gaWQ9J2YnIHdpZHRoPSc1OScgaGVpZ2h0PSc3MScgcGF0dGVyblVuaXRzPSd1c2VyU3BhY2VPblVzZScgcGF0dGVyblRyYW5zZm9ybT0nc2NhbGUoNDUuMTUpIHRyYW5zbGF0ZSgtOTc3Ljg1IC03MzMuMzkpJyUzRSUzQ2cgZmlsbD0nJTIzRjYwJyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSczMycgeT0nMTMnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScyNycgeT0nNTQnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc1NScgeT0nNTUnLyUzRSUzQy9nJTNFJTNDL3BhdHRlcm4lM0UlM0NwYXR0ZXJuIGlkPSdnJyB3aWR0aD0nMTM5JyBoZWlnaHQ9Jzk3JyBwYXR0ZXJuVW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBwYXR0ZXJuVHJhbnNmb3JtPSdzY2FsZSg0NS4xNSkgdHJhbnNsYXRlKC05NzcuODUgLTczMy4zOSknJTNFJTNDZyBmaWxsPSclMjNGNjAnJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzExJyB5PSc4Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nNTEnIHk9JzEzJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMTcnIHk9JzczJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nOTknIHk9JzU3Jy8lM0UlM0MvZyUzRSUzQy9wYXR0ZXJuJTNFJTNDL2RlZnMlM0UlM0NyZWN0IGZpbGw9J3VybCglMjNhKScgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnLyUzRSUzQ3JlY3QgZmlsbD0ndXJsKCUyM2IpJyB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScvJTNFJTNDcmVjdCBmaWxsPSd1cmwoJTIzaCknIHdpZHRoPScxMDAlMjUnIGhlaWdodD0nMTAwJTI1Jy8lM0UlM0NyZWN0IGZpbGw9J3VybCglMjNjKScgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnLyUzRSUzQ3JlY3QgZmlsbD0ndXJsKCUyM2QpJyB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScvJTNFJTNDcmVjdCBmaWxsPSd1cmwoJTIzZSknIHdpZHRoPScxMDAlMjUnIGhlaWdodD0nMTAwJTI1Jy8lM0UlM0NyZWN0IGZpbGw9J3VybCglMjNmKScgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnLyUzRSUzQ3JlY3QgZmlsbD0ndXJsKCUyM2cpJyB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScvJTNFJTNDL3N2ZyUzRVwiKTtcclxuXHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgLm1hdHRlciB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgLmZvcm17XHJcbiAgICAgICAgXHJcbiAgICAgICAgZmxleC1iYXNpczo1NSU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5leGFtcGxlLWZ1bGwtd2lkdGhcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHdpZHRoOjQwMHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgLmxhYmVsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiM3MDcwNzA7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDpib2xkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRleHQtZGFuZ2VyXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOnJlZDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG4uc2lnbmJ1dHRvbnNcclxue1xyXG5cclxuICAgIGZsZXgtYmFzaXM6MjAlO1xyXG4gICAgbWFyZ2luLXRvcDozMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6LTcyNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICA6aG92ZXJcclxuICAgIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAubWFpbmJ0blxyXG4gICAge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgIC8vIG1hcmdpbi1yaWdodDozNXB4O1xyXG4gICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIH1cclxuICAgIC50b2dnbGVidG5cclxuXHJcbiAgICB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG59XHJcbmlucHV0W3R5cGU9J2ZpbGUnXSB7XHJcbiAgICBvcGFjaXR5OjA7XHJcbiAgICBkaXNwbGF5OiBub25lOyBcclxuICAgLy8gZGlzcGxheTpmbGV4O1xyXG4vLyAgICBhbGlnbi1pdGVtczpjZW50ZXI7ICBcclxuICB9XHJcbiAgbGFiZWx7XHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgLy8gICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgIC8vIHBhZGRpbmctbGVmdDogNTBweDtcclxuICAgICAgICAgIC8vIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgY29sb3I6IzAwMDAwMDtcclxuICAgICAgICAgIGhlaWdodDo3MHB4O1xyXG4gICAgICAgICAgd2lkdGg6MTIwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNFM0U1RTc7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiBub25lO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAvLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmltYWdlc2VjdGlvbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAzNyU7XHJcbiAgfSIsIi5zZWxscGFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjAwMCAxNTAwJyUzRSUzQ2RlZnMlM0UlM0NyZWN0IHN0cm9rZT0nJTIzZmZmZmZmJyBzdHJva2Utd2lkdGg9JzAuNycgd2lkdGg9JzEnIGhlaWdodD0nMScgaWQ9J3MnLyUzRSUzQ3BhdHRlcm4gaWQ9J2EnIHdpZHRoPSczJyBoZWlnaHQ9JzMnIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnIHBhdHRlcm5UcmFuc2Zvcm09J3NjYWxlKDQ1LjE1KSB0cmFuc2xhdGUoLTk3Ny44NSAtNzMzLjM5KSclM0UlM0N1c2UgZmlsbD0nJTIzZmFmYWZhJyBocmVmPSclMjNzJyB5PScyJy8lM0UlM0N1c2UgZmlsbD0nJTIzZmFmYWZhJyBocmVmPSclMjNzJyB4PScxJyB5PScyJy8lM0UlM0N1c2UgZmlsbD0nJTIzZjVmNWY1JyBocmVmPSclMjNzJyB4PScyJyB5PScyJy8lM0UlM0N1c2UgZmlsbD0nJTIzZjVmNWY1JyBocmVmPSclMjNzJy8lM0UlM0N1c2UgZmlsbD0nJTIzZjBmMGYwJyBocmVmPSclMjNzJyB4PScyJy8lM0UlM0N1c2UgZmlsbD0nJTIzZjBmMGYwJyBocmVmPSclMjNzJyB4PScxJyB5PScxJy8lM0UlM0MvcGF0dGVybiUzRSUzQ3BhdHRlcm4gaWQ9J2InIHdpZHRoPSc3JyBoZWlnaHQ9JzExJyBwYXR0ZXJuVW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBwYXR0ZXJuVHJhbnNmb3JtPSdzY2FsZSg0NS4xNSkgdHJhbnNsYXRlKC05NzcuODUgLTczMy4zOSknJTNFJTNDZyBmaWxsPSclMjNlYmViZWInJTNFJTNDdXNlIGhyZWY9JyUyM3MnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB5PSc1JyAvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzEnIHk9JzEwJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMicgeT0nMScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzInIHk9JzQnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSczJyB5PSc4Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nNCcgeT0nMycvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzQnIHk9JzcnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc1JyB5PScyJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nNScgeT0nNicvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzYnIHk9JzknLyUzRSUzQy9nJTNFJTNDL3BhdHRlcm4lM0UlM0NwYXR0ZXJuIGlkPSdoJyB3aWR0aD0nNScgaGVpZ2h0PScxMycgcGF0dGVyblVuaXRzPSd1c2VyU3BhY2VPblVzZScgcGF0dGVyblRyYW5zZm9ybT0nc2NhbGUoNDUuMTUpIHRyYW5zbGF0ZSgtOTc3Ljg1IC03MzMuMzkpJyUzRSUzQ2cgZmlsbD0nJTIzZWJlYmViJyUzRSUzQ3VzZSBocmVmPSclMjNzJyB5PSc1Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeT0nOCcvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzEnIHk9JzEnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxJyB5PSc5Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMScgeT0nMTInLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScyJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMicgeT0nNCcvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzMnIHk9JzInLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSczJyB5PSc2Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMycgeT0nMTEnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc0JyB5PSczJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nNCcgeT0nNycvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzQnIHk9JzEwJy8lM0UlM0MvZyUzRSUzQy9wYXR0ZXJuJTNFJTNDcGF0dGVybiBpZD0nYycgd2lkdGg9JzE3JyBoZWlnaHQ9JzEzJyBwYXR0ZXJuVW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBwYXR0ZXJuVHJhbnNmb3JtPSdzY2FsZSg0NS4xNSkgdHJhbnNsYXRlKC05NzcuODUgLTczMy4zOSknJTNFJTNDZyBmaWxsPSclMjNlNWU1ZTUnJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHk9JzExJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMicgeT0nOScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzUnIHk9JzEyJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nOScgeT0nNCcvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzEyJyB5PScxJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMTYnIHk9JzYnLyUzRSUzQy9nJTNFJTNDL3BhdHRlcm4lM0UlM0NwYXR0ZXJuIGlkPSdkJyB3aWR0aD0nMTknIGhlaWdodD0nMTcnIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnIHBhdHRlcm5UcmFuc2Zvcm09J3NjYWxlKDQ1LjE1KSB0cmFuc2xhdGUoLTk3Ny44NSAtNzMzLjM5KSclM0UlM0NnIGZpbGw9JyUyM2ZmZmZmZiclM0UlM0N1c2UgaHJlZj0nJTIzcycgeT0nOScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzE2JyB5PSc1Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMTQnIHk9JzInLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxMScgeT0nMTEnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc2JyB5PScxNCcvJTNFJTNDL2clM0UlM0NnIGZpbGw9JyUyM2UwZTBlMCclM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMycgeT0nMTMnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc5JyB5PSc3Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMTMnIHk9JzEwJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMTUnIHk9JzQnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxOCcgeT0nMScvJTNFJTNDL2clM0UlM0MvcGF0dGVybiUzRSUzQ3BhdHRlcm4gaWQ9J2UnIHdpZHRoPSc0NycgaGVpZ2h0PSc1MycgcGF0dGVyblVuaXRzPSd1c2VyU3BhY2VPblVzZScgcGF0dGVyblRyYW5zZm9ybT0nc2NhbGUoNDUuMTUpIHRyYW5zbGF0ZSgtOTc3Ljg1IC03MzMuMzkpJyUzRSUzQ2cgZmlsbD0nJTIzRjYwJyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScyJyB5PSc1Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMTYnIHk9JzM4Jy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nNDYnIHk9JzQyJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMjknIHk9JzIwJy8lM0UlM0MvZyUzRSUzQy9wYXR0ZXJuJTNFJTNDcGF0dGVybiBpZD0nZicgd2lkdGg9JzU5JyBoZWlnaHQ9JzcxJyBwYXR0ZXJuVW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBwYXR0ZXJuVHJhbnNmb3JtPSdzY2FsZSg0NS4xNSkgdHJhbnNsYXRlKC05NzcuODUgLTczMy4zOSknJTNFJTNDZyBmaWxsPSclMjNGNjAnJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzMzJyB5PScxMycvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzI3JyB5PSc1NCcvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHg9JzU1JyB5PSc1NScvJTNFJTNDL2clM0UlM0MvcGF0dGVybiUzRSUzQ3BhdHRlcm4gaWQ9J2cnIHdpZHRoPScxMzknIGhlaWdodD0nOTcnIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnIHBhdHRlcm5UcmFuc2Zvcm09J3NjYWxlKDQ1LjE1KSB0cmFuc2xhdGUoLTk3Ny44NSAtNzMzLjM5KSclM0UlM0NnIGZpbGw9JyUyM0Y2MCclM0UlM0N1c2UgaHJlZj0nJTIzcycgeD0nMTEnIHk9JzgnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc1MScgeT0nMTMnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PScxNycgeT0nNzMnLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB4PSc5OScgeT0nNTcnLyUzRSUzQy9nJTNFJTNDL3BhdHRlcm4lM0UlM0MvZGVmcyUzRSUzQ3JlY3QgZmlsbD0ndXJsKCUyM2EpJyB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScvJTNFJTNDcmVjdCBmaWxsPSd1cmwoJTIzYiknIHdpZHRoPScxMDAlMjUnIGhlaWdodD0nMTAwJTI1Jy8lM0UlM0NyZWN0IGZpbGw9J3VybCglMjNoKScgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnLyUzRSUzQ3JlY3QgZmlsbD0ndXJsKCUyM2MpJyB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScvJTNFJTNDcmVjdCBmaWxsPSd1cmwoJTIzZCknIHdpZHRoPScxMDAlMjUnIGhlaWdodD0nMTAwJTI1Jy8lM0UlM0NyZWN0IGZpbGw9J3VybCglMjNlKScgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnLyUzRSUzQ3JlY3QgZmlsbD0ndXJsKCUyM2YpJyB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScvJTNFJTNDcmVjdCBmaWxsPSd1cmwoJTIzZyknIHdpZHRoPScxMDAlMjUnIGhlaWdodD0nMTAwJTI1Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xufVxuLnNlbGxwYWdlIC5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5zZWxscGFnZSAuaGVhZGVyIC5tYXR0ZXIge1xuICBmb250LXNpemU6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBmb250LWZhbWlseTogUG9wcGlucztcbn1cbi5zZWxscGFnZSAuZm9ybSB7XG4gIGZsZXgtYmFzaXM6IDU1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNlbGxwYWdlIC5mb3JtIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogNDAwcHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLnNlbGxwYWdlIC5mb3JtIC5leGFtcGxlLWZ1bGwtd2lkdGggLmxhYmVsIHtcbiAgY29sb3I6ICM3MDcwNzA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNlbGxwYWdlIC5mb3JtIC5leGFtcGxlLWZ1bGwtd2lkdGggLnRleHQtZGFuZ2VyIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbn1cblxuLnNpZ25idXR0b25zIHtcbiAgZmxleC1iYXNpczogMjAlO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogLTcyNXB4O1xuICBmb250LWZhbWlseTogUG9wcGlucztcbn1cbi5zaWduYnV0dG9ucyA6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2lnbmJ1dHRvbnMgLm1haW5idG4ge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2lnbmJ1dHRvbnMgLnRvZ2dsZWJ0biB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW5wdXRbdHlwZT1maWxlXSB7XG4gIG9wYWNpdHk6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IDEyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTNFNUU3O1xuICBib3JkZXItcmFkaXVzOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW1hZ2VzZWN0aW9uIHtcbiAgbWFyZ2luLWxlZnQ6IDM3JTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SellformComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sellform',
                templateUrl: './sellform.component.html',
                styleUrls: ['./sellform.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_sellservice_service__WEBPACK_IMPORTED_MODULE_4__["SellserviceService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SidebarComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 2, vars: 0, template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sidebar works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/verification/verification.component.ts":
/*!********************************************************!*\
  !*** ./src/app/verification/verification.component.ts ***!
  \********************************************************/
/*! exports provided: VerificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationComponent", function() { return VerificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");







function VerificationComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class VerificationComponent {
    constructor(fb, auth, snackbar) {
        this.fb = fb;
        this.auth = auth;
        this.snackbar = snackbar;
        this.verify = false;
        this.Onsubmit();
    }
    ngOnInit() {
    }
    Onsubmit() {
        this.auth.generalverification().subscribe(data => {
            // console.log(data,'datta');
            this.snackbar.open(data, "ok", { duration: 15000 });
            if (data == "your mail is already  verified" || data == "email is verified") {
                this.verify = true;
                console.log('veified', this.verify);
            }
        });
    }
}
VerificationComponent.ɵfac = function VerificationComponent_Factory(t) { return new (t || VerificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
VerificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VerificationComponent, selectors: [["app-verification"]], decls: 2, vars: 1, consts: [[4, "ngIf"]], template: function VerificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\nscdxcfdddddddddddddddddddddd\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VerificationComponent_div_1_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.verify);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlcmlmaWNhdGlvbi92ZXJpZmljYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VerificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-verification',
                templateUrl: './verification.component.html',
                styleUrls: ['./verification.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/women/women.component.ts":
/*!******************************************!*\
  !*** ./src/app/women/women.component.ts ***!
  \******************************************/
/*! exports provided: WomenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WomenComponent", function() { return WomenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class WomenComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
WomenComponent.ɵfac = function WomenComponent_Factory(t) { return new (t || WomenComponent)(); };
WomenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WomenComponent, selectors: [["app-women"]], decls: 2, vars: 0, template: function WomenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "women works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dvbWVuL3dvbWVuLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WomenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-women',
                templateUrl: './women.component.html',
                styleUrls: ['./women.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyD4TA6k34GEBF60o8Kg51Km8uNAYvz0IYw",
        authDomain: "commerce-277810.firebaseapp.com",
        projectId: "commerce-277810",
        storageBucket: "commerce-277810.appspot.com",
        messagingSenderId: "957388543487",
        appId: "1:957388543487:web:a324c242453b7f7f1643ca",
        measurementId: "G-5NG4ES20BL"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/services/auth.service.ts":
/*!**************************************!*\
  !*** ./src/services/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class AuthService {
    // public change='/auth/changinpassword';
    constructor(http) {
        this.http = http;
        this.username = '';
        this.url = '/auth/signup';
        this.loginurl = '/auth/login';
        this.verification = '/auth/verify';
        this.userdertails = '/auth/details';
        this.userlogout = '/auth/logout';
        this.passwordchange = '/auth/forgetpasword';
        console.log('ddddddddddddd');
    }
    generalsignup(details) {
        console.log('details', details);
        return this.http.post(this.url, details);
    }
    generallogin(details) {
        console.log('details', details);
        return this.http.post(this.loginurl, details);
    }
    generalverification() {
        // console.log(id_va)
        console.log('hello..............');
        return this.http.get(this.verification);
    }
    generaluserdetails() {
        return this.http.get(this.userdertails);
    }
    logoutthedetails() {
        return this.http.get(this.userlogout);
    }
    genneralpasswordchange(details) {
        return this.http.post(this.passwordchange, details);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/services/sellservice.service.ts":
/*!*********************************************!*\
  !*** ./src/services/sellservice.service.ts ***!
  \*********************************************/
/*! exports provided: SellserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellserviceService", function() { return SellserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class SellserviceService {
    constructor(http) {
        this.http = http;
        this.url = '/sell/sellformdetails';
    }
    generalsellform(details) {
        // console.log('details',details);
        return this.http.post(this.url, details);
    }
}
SellserviceService.ɵfac = function SellserviceService_Factory(t) { return new (t || SellserviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SellserviceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SellserviceService, factory: SellserviceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SellserviceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Tulasi\Desktop\backend\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map