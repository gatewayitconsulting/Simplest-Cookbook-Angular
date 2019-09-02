(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/welcome/welcome.component */ "./src/app/components/welcome/welcome.component.ts");
/* harmony import */ var _components_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/recipe-list/recipe-list.component */ "./src/app/components/recipe-list/recipe-list.component.ts");
/* harmony import */ var _components_cooking_tools_cooking_tools_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/cooking-tools/cooking-tools.component */ "./src/app/components/cooking-tools/cooking-tools.component.ts");
/* harmony import */ var _components_recipe_detail_recipe_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/recipe-detail/recipe.component */ "./src/app/components/recipe-detail/recipe.component.ts");
/* harmony import */ var _components_recipes_recipes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/recipes/recipes.component */ "./src/app/components/recipes/recipes.component.ts");








var routes = [
    {
        path: '',
        redirectTo: '/home/1',
        pathMatch: 'full',
        data: {
            title: 'Home',
            breadcrumb: [
                {
                    label: 'Home',
                    url: ''
                }
            ]
        },
    },
    {
        path: 'home/1',
        component: _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"],
        data: {
            title: 'Home',
            breadcrumb: [
                {
                    label: 'Home',
                    url: ''
                }
            ]
        },
    },
    {
        path: 'home/1/recipe-list/2',
        component: _components_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_4__["RecipeListComponent"],
        data: {
            title: 'Recipe List',
            breadcrumb: [
                {
                    label: 'Home',
                    url: '/home/1'
                },
                {
                    label: 'Recipes',
                    url: ''
                }
            ]
        },
    },
    {
        path: 'cooking-tools',
        component: _components_cooking_tools_cooking_tools_component__WEBPACK_IMPORTED_MODULE_5__["CookingToolsComponent"]
    },
    {
        path: 'home/1/recipe-list/2/recipe/3/recipe/:id',
        component: _components_recipe_detail_recipe_component__WEBPACK_IMPORTED_MODULE_6__["RecipeComponent"],
        data: {
            title: '{{dynamicText}}',
            breadcrumb: [
                {
                    label: 'Home',
                    url: '/home/1'
                },
                {
                    label: 'Recipes',
                    url: '/home/1/recipe-list/2'
                },
                {
                    label: '{{dynamicText}}',
                    url: ''
                }
            ]
        },
    },
    {
        path: 'recipes',
        component: _components_recipes_recipes_component__WEBPACK_IMPORTED_MODULE_7__["RecipesComponent"],
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    enableTracing: true,
                    useHash: true
                })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header class=\"row\"></app-header>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<app-footer class=\"row\"></app-footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'simplest-cookbook';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng7_bootstrap_breadcrumb__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng7-bootstrap-breadcrumb */ "./node_modules/ng7-bootstrap-breadcrumb/fesm5/ng7-bootstrap-breadcrumb.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/fesm5/jw-bootstrap-switch-ng2.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "./node_modules/angular2-multiselect-dropdown/fesm5/angular2-multiselect-dropdown.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_common_image_upload_image_upload_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/common/image-upload/image-upload.module */ "./src/app/components/common/image-upload/image-upload.module.ts");
/* harmony import */ var _components_sections_sections_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/sections/sections.module */ "./src/app/components/sections/sections.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_welcome_banner_banner_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/welcome/banner/banner.component */ "./src/app/components/welcome/banner/banner.component.ts");
/* harmony import */ var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/welcome/welcome.component */ "./src/app/components/welcome/welcome.component.ts");
/* harmony import */ var _components_common_header_header_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/common/header/header.component */ "./src/app/components/common/header/header.component.ts");
/* harmony import */ var _components_recipe_detail_recipe_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/recipe-detail/recipe.component */ "./src/app/components/recipe-detail/recipe.component.ts");
/* harmony import */ var _components_recipes_recipes_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/recipes/recipes.component */ "./src/app/components/recipes/recipes.component.ts");
/* harmony import */ var _components_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/common/footer/footer.component */ "./src/app/components/common/footer/footer.component.ts");
/* harmony import */ var _components_cooking_tools_cooking_tools_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/cooking-tools/cooking-tools.component */ "./src/app/components/cooking-tools/cooking-tools.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_about_mission_statement_mission_statement_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/about/mission-statement/mission-statement.component */ "./src/app/components/about/mission-statement/mission-statement.component.ts");
/* harmony import */ var _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/messages/messages.component */ "./src/app/components/messages/messages.component.ts");
/* harmony import */ var _components_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/recipe-list/recipe-list.component */ "./src/app/components/recipe-list/recipe-list.component.ts");
/* harmony import */ var _components_common_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/common/breadcrumb/breadcrumb.component */ "./src/app/components/common/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _components_cook_time_cook_time_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/cook-time/cook-time.component */ "./src/app/components/cook-time/cook-time.component.ts");
/* harmony import */ var _components_description_description_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/description/description.component */ "./src/app/components/description/description.component.ts");
/* harmony import */ var _components_ingredients_ingredients_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/ingredients/ingredients.component */ "./src/app/components/ingredients/ingredients.component.ts");
/* harmony import */ var _components_instructions_instructions_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/instructions/instructions.component */ "./src/app/components/instructions/instructions.component.ts");
/* harmony import */ var _components_cooking_tools_toddy_ratio_helper_toddy_ratio_helper_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/cooking-tools/toddy-ratio-helper/toddy-ratio-helper.component */ "./src/app/components/cooking-tools/toddy-ratio-helper/toddy-ratio-helper.component.ts");
/* harmony import */ var _services_recipe_recipe_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./services/recipe/recipe.service */ "./src/app/services/recipe/recipe.service.ts");






































var AppModule = /** @class */ (function () {
    function AppModule() {
        // Add an icon to the library for convenient access in other components
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_7__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faCopyright"]);
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"],
                _components_welcome_banner_banner_component__WEBPACK_IMPORTED_MODULE_20__["BannerComponent"],
                _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_21__["WelcomeComponent"],
                _components_common_header_header_component__WEBPACK_IMPORTED_MODULE_22__["HeaderComponent"],
                _components_recipe_detail_recipe_component__WEBPACK_IMPORTED_MODULE_23__["RecipeComponent"],
                _components_recipes_recipes_component__WEBPACK_IMPORTED_MODULE_24__["RecipesComponent"],
                _components_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_25__["FooterComponent"],
                _components_cooking_tools_cooking_tools_component__WEBPACK_IMPORTED_MODULE_26__["CookingToolsComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_27__["AboutComponent"],
                _components_about_mission_statement_mission_statement_component__WEBPACK_IMPORTED_MODULE_28__["MissionStatementComponent"],
                _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_29__["MessagesComponent"],
                _components_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_30__["RecipeListComponent"],
                _components_common_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_31__["BreadcrumbComponent"],
                _components_cook_time_cook_time_component__WEBPACK_IMPORTED_MODULE_32__["CookTimeComponent"],
                _components_description_description_component__WEBPACK_IMPORTED_MODULE_33__["DescriptionComponent"],
                _components_ingredients_ingredients_component__WEBPACK_IMPORTED_MODULE_34__["IngredientsComponent"],
                _components_instructions_instructions_component__WEBPACK_IMPORTED_MODULE_35__["InstructionsComponent"],
                _components_cooking_tools_toddy_ratio_helper_toddy_ratio_helper_component__WEBPACK_IMPORTED_MODULE_36__["ToddyRatioHelperComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                ng7_bootstrap_breadcrumb__WEBPACK_IMPORTED_MODULE_10__["Ng7BootstrapBreadcrumbModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_11__["NouisliderModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_12__["JwBootstrapSwitchNg2Module"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_13__["TagInputModule"],
                angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_14__["AngularMultiSelectModule"],
                ngx_gallery__WEBPACK_IMPORTED_MODULE_15__["NgxGalleryModule"],
                _components_common_image_upload_image_upload_module__WEBPACK_IMPORTED_MODULE_16__["ImageUploadModule"],
                _components_sections_sections_module__WEBPACK_IMPORTED_MODULE_17__["SectionsModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_18__["ComponentsModule"]
            ],
            providers: [_services_recipe_recipe_service__WEBPACK_IMPORTED_MODULE_37__["RecipeService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-mission-statement class=\"row\"></app-mission-statement>"

/***/ }),

/***/ "./src/app/components/about/about.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/components/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/about/mission-statement/mission-statement.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/about/mission-statement/mission-statement.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"mission-statement\" class=\" text-center\">\r\n  <h4 class=\"col-md-12\">The goal of Simplest Cookbook is to provide an easy to use interface that allows you to get cooking sooner and get more information about what you're eating.</h4>\r\n</section>"

/***/ }),

/***/ "./src/app/components/about/mission-statement/mission-statement.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/about/mission-statement/mission-statement.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#mission-statement {\n  margin-top: 5em;\n  margin-left: 15%;\n  margin-right: 15%;\n  margin-bottom: 5em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9taXNzaW9uLXN0YXRlbWVudC9DOlxcVXNlcnNcXGpvaG5tXFxEb2N1bWVudHNcXEdpdEh1YlxcU2ltcGxlc3QtQ29va2Jvb2stQW5ndWxhclxcc2ltcGxlc3QtY29va2Jvb2svc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFib3V0XFxtaXNzaW9uLXN0YXRlbWVudFxcbWlzc2lvbi1zdGF0ZW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvbWlzc2lvbi1zdGF0ZW1lbnQvbWlzc2lvbi1zdGF0ZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWlzc2lvbi1zdGF0ZW1lbnQge1xyXG4gICAgbWFyZ2luLXRvcDogNWVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICAgIG1hcmdpbi1yaWdodDogMTUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNWVtO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/about/mission-statement/mission-statement.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/about/mission-statement/mission-statement.component.ts ***!
  \***********************************************************************************/
/*! exports provided: MissionStatementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissionStatementComponent", function() { return MissionStatementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MissionStatementComponent = /** @class */ (function () {
    function MissionStatementComponent() {
    }
    MissionStatementComponent.prototype.ngOnInit = function () {
    };
    MissionStatementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mission-statement',
            template: __webpack_require__(/*! ./mission-statement.component.html */ "./src/app/components/about/mission-statement/mission-statement.component.html"),
            styles: [__webpack_require__(/*! ./mission-statement.component.scss */ "./src/app/components/about/mission-statement/mission-statement.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MissionStatementComponent);
    return MissionStatementComponent;
}());



/***/ }),

/***/ "./src/app/components/basicelements/basicelements.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/basicelements/basicelements.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section section-basic\">\n    <div class=\"container\">\n      <h3 class=\"title\">Basic Elements</h3>\n      <h4>Buttons</h4>\n      <p class=\"category\">Pick your style</p>\n      <div class=\"row\">\n          <div class=\"col-md-10\">\n              <button class=\"btn btn-primary\" type=\"button\">Default</button>\n              <button class=\"btn btn-primary btn-round\" type=\"button\">Round</button>\n              <button class=\"btn btn-primary btn-round\" type=\"button\">\n                  <i class=\"now-ui-icons ui-2_favourite-28\"></i> With Icon\n              </button>\n              <button class=\"btn btn-primary btn-icon btn-round\" type=\"button\">\n                  <i class=\"now-ui-icons ui-2_favourite-28\"></i>\n              </button>\n              <button class=\"btn btn-primary btn-simple btn-round\" type=\"button\">Simple</button>\n          </div>\n      </div>\n      <p class=\"category\">Pick your size</p>\n      <div class=\"row\">\n          <div class=\"col-md-10\">\n              <button class=\"btn btn-primary btn-sm\">Small</button>\n              <button class=\"btn btn-primary\">Regular</button>\n              <button class=\"btn btn-primary btn-lg\">Large</button>\n          </div>\n      </div>\n      <p class=\"category\">Pick your color</p>\n      <div class=\"row\">\n          <div class=\"col-md-10\">\n              <button class=\"btn\">Default</button>\n              <button class=\"btn btn-primary\">Primary</button>\n              <button class=\"btn btn-info\">Info</button>\n              <button class=\"btn btn-success\">Success</button>\n              <button class=\"btn btn-warning\">Warning</button>\n              <button class=\"btn btn-danger\">Danger</button>\n              <button class=\"btn btn-neutral\">Neutral</button>\n          </div>\n      </div>\n      <h4>Links</h4>\n      <div class=\"row\">\n          <div class=\"col-md-8\">\n              <button class=\"btn btn-link\">Default</button>\n              <button class=\"btn btn-link btn-primary \">Primary</button>\n              <button class=\"btn btn-link btn-info\">Info</button>\n              <button class=\"btn btn-link btn-success\">Success</button>\n              <button class=\"btn btn-link btn-warning\">Warning</button>\n              <button class=\"btn btn-link btn-danger\">Danger</button>\n          </div>\n      </div>\n      <!--                 social buttons\t\t         -->\n      <div id=\"social-buttons\">\n          <h4>Social Buttons</h4>\n          <div class=\"row\">\n              <div class=\"col-md-4 col-sm-5\">\n                  <p class=\"category\">Default</p>\n                  <button class=\"btn btn-twitter\">\n                      <i class=\"fa fa-twitter\"></i> Connect with Twitter\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <p class=\"category\">&nbsp;</p>\n                  <button class=\"btn btn-icon btn-twitter\">\n                      <i class=\"fa fa-twitter\"></i>\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <p class=\"category\">&nbsp;</p>\n                  <button class=\"btn btn-icon btn-round btn-twitter\">\n                      <i class=\"fa fa-twitter\"></i>\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <p class=\"category\">Neutral</p>\n                  <button class=\"btn btn-icon btn-neutral btn-twitter\">\n                      <i class=\"fa fa-twitter\"></i>\n                  </button>\n              </div>\n              <div class=\"col-md-3 col-sm-4\">\n                  <p class=\"category\">&nbsp;</p>\n                  <button class=\"btn btn-neutral btn-twitter\">\n                      <i class=\"fa fa-twitter\"></i> Connect with Twitter\n                  </button>\n              </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-md-4 col-sm-5\">\n                  <button class=\"btn btn-facebook\">\n                      <i class=\"fa fa-facebook-square\"></i> Share · 2.2k\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-facebook\">\n                      <i class=\"fa fa-facebook\"> </i>\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-round btn-facebook\">\n                      <i class=\"fa fa-facebook\"> </i>\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-neutral btn-facebook\">\n                      <i class=\"fa fa-facebook-square\"> </i>\n                  </button>\n              </div>\n              <div class=\"col-md-3 col-sm-4\">\n                  <button class=\"btn btn-neutral btn-facebook\">\n                      <i class=\"fa fa-facebook-square\"></i> Share · 2.2k\n                  </button>\n              </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-md-4 col-sm-5\">\n                  <button class=\"btn btn-google\">\n                      <i class=\"fa fa-google\"></i> Share on Google+\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon  btn-google\">\n                      <i class=\"fa fa-google\"> </i>\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-round btn-google\">\n                      <i class=\"fa fa-google\"> </i>\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-neutral btn-google\">\n                      <i class=\"fa fa-google\"> </i>\n                  </button>\n              </div>\n              <div class=\"col-md-3 col-sm-4\">\n                  <button class=\"btn btn-neutral btn-google\">\n                      <i class=\"fa fa-google\"></i> Share on Google+\n                  </button>\n              </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-md-4 col-sm-5\">\n                  <button class=\"btn btn-linkedin\">\n                      <i class=\"fa fa-linkedin-square\"></i> Connect with Linkedin\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon  btn-linkedin\">\n                      <i class=\"fa fa-linkedin\"></i>\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-round btn-linkedin\">\n                      <i class=\"fa fa-linkedin\"></i>\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-neutral btn-linkedin\">\n                      <i class=\"fa fa-linkedin-square\"></i>\n                  </button>\n              </div>\n              <div class=\"col-md-3 col-sm-4\">\n                  <button class=\"btn btn-neutral btn-linkedin\">\n                      <i class=\"fa fa-linkedin-square\"></i> Connect with Linkedin\n                  </button>\n              </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-md-4 col-sm-5\">\n                  <button class=\"btn btn-pinterest\">\n                      <i class=\"fa fa-pinterest\"></i> Pint it · 212\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-pinterest\">\n                      <i class=\"fa fa-pinterest\"></i>\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-round btn-pinterest\">\n                      <i class=\"fa fa-pinterest\"></i>\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-neutral btn-pinterest\">\n                      <i class=\"fa fa-pinterest\"></i>\n                  </button>\n              </div>\n              <div class=\"col-md-3 col-sm-4\">\n                  <button class=\"btn btn-neutral btn-pinterest\">\n                      <i class=\"fa fa-pinterest\"></i> Pint it · 212\n                  </button>\n              </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-md-4 col-sm-5\">\n                  <button class=\"btn btn-youtube\">\n                      <i class=\"fa fa-youtube-play\"></i> View on Youtube\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-youtube\">\n                      <i class=\"fa fa-youtube\"> </i>\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-round btn-youtube\">\n                      <i class=\"fa fa-youtube\"> </i>\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-neutral btn-youtube\">\n                      <i class=\"fa fa-youtube\"> </i>\n                  </button>\n              </div>\n              <div class=\"col-md-3 col-sm-4\">\n                  <button class=\"btn btn-neutral btn-youtube\">\n                      <i class=\"fa fa-youtube-play\"></i> View on Youtube\n                  </button>\n              </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-md-4 col-sm-5\">\n                  <button class=\"btn btn-tumblr\">\n                      <i class=\"fa fa-tumblr-square\"></i> Repost\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon  btn-tumblr\">\n                      <i class=\"fa fa-tumblr\"> </i>\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-round btn-tumblr\">\n                      <i class=\"fa fa-tumblr\"> </i>\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-neutral btn-tumblr\">\n                      <i class=\"fa fa-tumblr-square\"> </i>\n                  </button>\n              </div>\n              <div class=\"col-md-3 col-sm-4\">\n                  <button class=\"btn btn-neutral btn-tumblr\">\n                      <i class=\"fa fa-tumblr-square\"></i> Repost\n                  </button>\n              </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-md-4 col-sm-5\">\n                  <button class=\"btn btn-github\">\n                      <i class=\"fa fa-github\"></i> Connect with Github\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon  btn-github\">\n                      <i class=\"fa fa-github\"></i>\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-round btn-github\">\n                      <i class=\"fa fa-github\"></i>\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-neutral btn-github\">\n                      <i class=\"fa fa-github\"></i>\n                  </button>\n              </div>\n              <div class=\"col-md-3 col-sm-4\">\n                  <button class=\"btn btn-neutral btn-github\">\n                      <i class=\"fa fa-github\"></i> Connect with Github\n                  </button>\n              </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-md-4 col-sm-5\">\n                  <button class=\"btn btn-behance\">\n                      <i class=\"fa fa-behance-square\"></i> Follow us\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon  btn-behance\">\n                      <i class=\"fa fa-behance\"></i>\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-round btn-behance\">\n                      <i class=\"fa fa-behance\"></i>\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-neutral btn-behance\">\n                      <i class=\"fa fa-behance\"></i>\n                  </button>\n              </div>\n              <div class=\"col-md-3 col-sm-4\">\n                  <button class=\"btn btn-neutral btn-behance\">\n                      <i class=\"fa fa-behance-square\"></i> Follow us\n                  </button>\n              </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-md-4 col-sm-5\">\n                  <button class=\"btn btn-dribbble\">\n                      <i class=\"fa fa-dribbble\"></i> Find us on Dribble\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon  btn-dribbble\">\n                      <i class=\"fa fa-dribbble\"></i>\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-round btn-dribbble\">\n                      <i class=\"fa fa-dribbble\"></i>\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-neutral btn-dribbble\">\n                      <i class=\"fa fa-dribbble\"></i>\n                  </button>\n              </div>\n              <div class=\"col-md-3 col-sm-4\">\n                  <button class=\"btn btn-neutral btn-dribbble\">\n                      <i class=\"fa fa-dribbble\"></i> Find us on Dribble\n                  </button>\n              </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-md-4 col-sm-5\">\n                  <button class=\"btn btn-reddit\">\n                      <i class=\"fa fa-reddit\"></i> Repost · 232\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon  btn-reddit\">\n                      <i class=\"fa fa-reddit\"></i>\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-round btn-reddit\">\n                      <i class=\"fa fa-reddit\"></i>\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-neutral btn-reddit\">\n                      <i class=\"fa fa-reddit\"></i>\n                  </button>\n              </div>\n              <div class=\"col-md-3 col-sm-4\">\n                  <button class=\"btn btn-neutral btn-reddit\">\n                      <i class=\"fa fa-reddit\"></i> Repost · 232\n                  </button>\n              </div>\n          </div>\n      </div>\n      <!--                 end social buttons -->\n      <div class=\"space-70\"></div>\n      <div id=\"inputs\">\n          <h4>Inputs</h4>\n          <p class=\"category\">Form Controls</p>\n          <div class=\"row\">\n              <div class=\"col-sm-6 col-lg-3\">\n                  <div class=\"form-group\">\n                      <input type=\"text\" value=\"\" placeholder=\"Regular\" class=\"form-control\" />\n                  </div>\n              </div>\n              <div class=\"col-sm-6 col-lg-3\">\n                  <div class=\"form-group has-success\">\n                      <input type=\"text\" value=\"Success\" class=\"form-control form-control-success\" />\n                  </div>\n              </div>\n              <div class=\"col-sm-6 col-lg-3\">\n                  <div class=\"form-group has-danger\">\n                      <input type=\"email\" value=\"Error Input\" class=\"form-control form-control-danger\" />\n                  </div>\n              </div>\n              <div class=\"col-sm-6 col-lg-3\">\n                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                    <div class=\"input-group-prepend\" >\n                        <span class=\"input-group-text\"><i class=\"fa fa-user-circle\"></i></span>\n                    </div>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Left Font Awesome Icon\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\n                  </div>\n              </div>\n              <div class=\"col-sm-6 col-lg-3\">\n                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Right Nucleo Icon\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\n                    <div class=\"input-group-append\">\n                        <span class=\"input-group-text\"><i class=\"now-ui-icons users_single-02\"></i></span>\n                    </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"space-70\"></div>\n      <div class=\"select\">\n          <div class=\"row\">\n              <div class=\"col-md-6\">\n                  <div class=\"title\">\n                      <h4>Customizable Select</h4>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"col-lg-6 col-md-8 col-sm-5\">\n                        <angular2-multiselect [data]=\"dropdownList1\" [(ngModel)]=\"selectedItems1\"\n                            [settings]=\"dropdownSettings1\"\n                            (onSelect)=\"onItemSelect($event)\"\n                            (onDeSelect)=\"OnItemDeSelect($event)\"\n                            (onSelectAll)=\"onSelectAll($event)\"\n                            (onDeSelectAll)=\"onDeSelectAll($event)\">\n                        </angular2-multiselect>\n                      </div>\n                      <div class=\"col-lg-6 col-md-8 col-sm-5\">\n                        <angular2-multiselect [data]=\"dropdownList\" [(ngModel)]=\"selectedItems\"\n                            [settings]=\"dropdownSettings\"\n                            (onSelect)=\"onItemSelect($event)\"\n                            (onDeSelect)=\"OnItemDeSelect($event)\"\n                            (onSelectAll)=\"onSelectAll($event)\"\n                            (onDeSelectAll)=\"onDeSelectAll($event)\">\n                        </angular2-multiselect>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"col-md-4\">\n                  <div class=\"title\">\n                      <h4>Dropdown & Dropup</h4>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"col-lg-5 col-md-8\">\n                        <div ngbDropdown class=\"dropdown\">\n                            <button class=\"btn btn-primary btn-round dropdown-toggle\" ngbDropdownToggle>Dropdown</button>\n                            <div ngbDropdownMenu>\n                              <a class=\"dropdown-item\" href=\"#\">Action</a>\n                              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                            </div>\n                        </div>\n                      </div>\n                      <div class=\"col-lg-5 col-md-8\">\n                          <div ngbDropdown placement=\"top-right\" class=\"d-inline-block\">\n                            <button class=\"btn btn-primary btn-round dropdown-toggle\" id=\"dropdownBasic2\" ngbDropdownToggle>Toggle dropup</button>\n                            <div ngbDropdownMenu aria-labelledby=\"dropdownBasic2\">\n                              <a class=\"dropdown-item\" href=\"#\">Action</a>\n                              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                            </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <!--                 end select -->\n      <div class=\"space-70\"></div>\n      <div id=\"textareaTags\">\n          <div class=\"row\">\n              <div class=\"col-md-6\">\n                  <div class=\"title\">\n                      <h4>Textarea</h4>\n                  </div>\n                  <textarea class=\"form-control\" name=\"name\" rows=\"4\" cols=\"80\" placeholder=\"You can write your text here...\"></textarea>\n              </div>\n              <div class=\"col-md-6\">\n                  <div class=\"title\">\n                      <h4>Tags</h4>\n                  </div>\n                  <tag-input [(ngModel)]='tagItems' theme='regular-theme'></tag-input>\n                  <!-- You can change data-color=\"rose\" with one of our colors primary | warning | info | danger | success -->\n              </div>\n          </div>\n      </div>\n      <div class=\"space-70\"></div>\n      <div class=\"row\" id=\"checkRadios\">\n          <div class=\"col-sm-6 col-lg-3\">\n              <p class=\"category\">Checkboxes</p>\n              <div class=\"form-check\">\n                  <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\">\n                      <span class=\"form-check-sign\"></span>\n                      Unchecked\n                  </label>\n              </div>\n              <div class=\"form-check\">\n                  <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" checked>\n                      <span class=\"form-check-sign\"></span>\n                      Checked\n                  </label>\n              </div>\n              <div class=\"form-check disabled\">\n                  <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" disabled>\n                      <span class=\"form-check-sign\"></span>\n                      Disabled Unchecked\n                  </label>\n              </div>\n              <div class=\"form-check disabled\">\n                  <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" checked disabled>\n                      <span class=\"form-check-sign\"></span>\n                      Disabled Checked\n                  </label>\n              </div>\n          </div>\n          <div class=\"col-sm-6 col-lg-3\">\n              <p class=\"category\">Radios</p>\n              <div class=\"form-check form-check-radio\">\n                  <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\">\n                      <span class=\"form-check-sign\"></span>\n                      Radio is off\n                  </label>\n              </div>\n              <div class=\"form-check form-check-radio\">\n                  <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option2\" checked>\n                      <span class=\"form-check-sign\"></span>\n                      Radio is on\n                  </label>\n              </div>\n              <div class=\"form-check form-check-radio disabled\">\n                  <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios2\" value=\"option3\" disabled>\n                      <span class=\"form-check-sign\"></span>\n                      Disabled radio is off\n                  </label>\n              </div>\n              <div class=\"form-check form-check-radio disabled\">\n                  <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios2\" value=\"option4\" disabled checked>\n                      <span class=\"form-check-sign\"></span>\n                      Disabled radio is on\n                  </label>\n              </div>\n          </div>\n          <div class=\"col-sm-6 col-lg-3\">\n              <p class=\"category\">Toggle Buttons</p>\n              <bSwitch\n                  [(ngModel)]=\"state\">\n              </bSwitch>\n              <bSwitch> Toggle is off\n              </bSwitch>\n          </div>\n          <div class=\"col-sm-6 col-lg-3\">\n              <p class=\"category\">Sliders</p>\n              <nouislider class=\"slider\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"simpleSlider\" [tooltips]=\"true\"></nouislider>\n              <br>\n              <nouislider class=\"slider slider-primary\" [connect]=\"true\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"doubleSlider\" [tooltips]=\"true\"></nouislider>\n          </div>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/basicelements/basicelements.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/basicelements/basicelements.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFzaWNlbGVtZW50cy9iYXNpY2VsZW1lbnRzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/basicelements/basicelements.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/basicelements/basicelements.component.ts ***!
  \*********************************************************************/
/*! exports provided: BasicelementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicelementsComponent", function() { return BasicelementsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BasicelementsComponent = /** @class */ (function () {
    function BasicelementsComponent() {
        this.simpleSlider = 40;
        this.doubleSlider = [20, 60];
        this.state = true;
        this.tagItems = ['Minimal', 'Light', 'New', 'Friends'];
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.dropdownList1 = [];
        this.selectedItems1 = [];
        this.dropdownSettings1 = {};
    }
    BasicelementsComponent.prototype.ngOnInit = function () {
        this.dropdownList = [
            { "id": 1, "itemName": "Roman" },
            { "id": 2, "itemName": "Paris" },
            { "id": 3, "itemName": "Bucharest" },
            { "id": 4, "itemName": "Rome" },
            { "id": 5, "itemName": "New York" },
            { "id": 6, "itemName": "Miami" },
            { "id": 7, "itemName": "Piatra Neamt" },
            { "id": 8, "itemName": "Paris" },
            { "id": 9, "itemName": "Bucharest" },
            { "id": 10, "itemName": "Rome" },
            { "id": 11, "itemName": "New York" },
            { "id": 12, "itemName": "Miami" },
            { "id": 13, "itemName": "Piatra Neamt" }
        ];
        this.selectedItems = [];
        this.dropdownSettings = {
            singleSelection: false,
            text: "Multiple Select",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: ""
        };
        this.dropdownList1 = [
            { "id": 1, "itemName": "Roman" },
            { "id": 2, "itemName": "Paris" },
            { "id": 3, "itemName": "Bucharest" },
            { "id": 4, "itemName": "Rome" },
            { "id": 5, "itemName": "New York" },
            { "id": 6, "itemName": "Miami" },
            { "id": 7, "itemName": "Piatra Neamt" },
            { "id": 8, "itemName": "Paris" },
            { "id": 9, "itemName": "Bucharest" },
            { "id": 10, "itemName": "Rome" },
            { "id": 11, "itemName": "New York" },
            { "id": 12, "itemName": "Miami" },
            { "id": 13, "itemName": "Piatra Neamt" }
        ];
        this.selectedItems1 = [];
        this.dropdownSettings1 = {
            singleSelection: true,
            text: "Single Select",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: ""
        };
    };
    BasicelementsComponent.prototype.onItemSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    BasicelementsComponent.prototype.OnItemDeSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    BasicelementsComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    BasicelementsComponent.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    BasicelementsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basicelements',
            template: __webpack_require__(/*! ./basicelements.component.html */ "./src/app/components/basicelements/basicelements.component.html"),
            styles: [__webpack_require__(/*! ./basicelements.component.scss */ "./src/app/components/basicelements/basicelements.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BasicelementsComponent);
    return BasicelementsComponent;
}());



/***/ }),

/***/ "./src/app/components/cards-areas/cards-areas.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/cards-areas/cards-areas.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"cards\" class=\"section section-cards\" data-background-color=\"gray\">\n    <!--     *********    BLOG CARDS     *********      -->\n    <div class=\"cards\">\n        <div class=\"container\">\n            <div class=\"title\">\n                <h3 class=\"title\">Cards</h3>\n                <h3>\n                    <small>Blog Cards</small>\n                </h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 col-lg-4\">\n                    <div class=\"card\" data-background-color=\"red\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category-social\">\n                                <i class=\"fa fa-fire\"></i> Trending\n                            </h6>\n                            <p class=\"card-description\">\n                                \"The supreme art of war is to subdue the enemy without fighting.\"\n                            </p>\n                            <div class=\"card-footer\">\n                                <div class=\"author\">\n                                    <img src=\"assets/img/julie.jpg\" alt=\"...\" class=\"avatar img-raised\">\n                                    <span>Susan B. Anthony</span>\n                                </div>\n                                <div class=\"stats stats-right\">\n                                    <i class=\"now-ui-icons ui-2_favourite-28\"></i> 10.4K ·\n                                    <i class=\"now-ui-icons files_single-copy-04\"></i> 425\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card card-blog\">\n                        <div class=\"card-image\">\n                            <img class=\"img rounded\" src=\"assets/img/project13.jpg\">\n                        </div>\n                        <div class=\"card-body\">\n                            <h6 class=\"category text-warning\">\n                                <i class=\"now-ui-icons business_bulb-63\"></i> Focus\n                            </h6>\n                            <h5 class=\"card-title\">\n                                <a href=\"#nuk\">Stay Focused: Train Your Brain</a>\n                            </h5>\n                            <p class=\"card-description\">\n                                Our brains are finely attuned to distraction, so today's digital environment makes it especially hard to focus...\n                            </p>\n                        </div>\n                    </div>\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category text-danger\">\n                                <i class=\"now-ui-icons media-2_sound-wave\"></i> Trending\n                            </h6>\n                            <h5 class=\"card-title\">\n                                <a href=\"#pablo\">Here Be Dragons</a>\n                            </h5>\n                            <p class=\"card-description\">\n                                An immersive production studio focused on virtual reality content, has closed a $10 million Series A round led by Discovery Communications\n                            </p>\n                            <div class=\"card-footer\">\n                                <div class=\"author\">\n                                    <img src=\"assets/img/olivia.jpg\" alt=\"...\" class=\"avatar img-raised\">\n                                    <span>Lord Alex</span>\n                                </div>\n                                <div class=\"stats stats-right\">\n                                    <i class=\"now-ui-icons ui-2_favourite-28\"></i> 342 ·\n                                    <i class=\"now-ui-icons files_single-copy-04\"></i> 45\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6 col-lg-4\">\n                    <div class=\"card\" data-background-color=\"black\">\n                        <div class=\"card-body content-danger\">\n                            <h6 class=\"category-social\">\n                                <i class=\"fa fa-apple\"></i> New Apps\n                            </h6>\n                            <h4 class=\"card-title\">\n                                <a href=\"#nuk\">FiftyThree Files For Paper</a>\n                            </h4>\n                            <p class=\"card-description\">\n                                Yesterday, as Facebook launched its news reader app Paper, design-focused startup FiftyThree called out Facebook publicly for using their brand name...\n                            </p>\n                            <div class=\"card-footer text-center\">\n                                <a href=\"#pablo\" class=\"btn btn-default btn-round\">Read Article</a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card card-blog\">\n                        <div class=\"card-image\">\n                            <a href=\"#pablo\">\n                                <img class=\"img rounded\" src=\"assets/img/card-blog2.jpg\">\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h6 class=\"category text-primary\">Features</h6>\n                            <h5 class=\"card-title\">\n                                That’s One Way To Ditch Your Passenger\n                            </h5>\n                            <p class=\"card-description\">\n                                As near as we can tell, this guy must have thought he was going over backwards and tapped the rear break to bring the nose down...\n                            </p>\n                            <div class=\"card-footer\">\n                                <div class=\"author\">\n                                    <img src=\"assets/img/julie.jpg\" alt=\"...\" class=\"avatar img-raised\">\n                                    <span>Mike John</span>\n                                </div>\n                                <div class=\"stats stats-right\">\n                                    <i class=\"now-ui-icons tech_watch-time\"></i> 5 min read\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card\" data-background-color=\"blue\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category-social\">\n                                <i class=\"fa fa-twitter\"></i> Twitter\n                            </h6>\n                            <p>\n                                \"You Don't Have to Sacrifice Joy to Build a Fabulous Business and Life\"\n                            </p>\n                            <div class=\"card-footer\">\n                                <div class=\"author\">\n                                    <img src=\"assets/img/james.jpg\" alt=\"...\" class=\"avatar img-raised\">\n                                    <span>Tania Andrew</span>\n                                </div>\n                                <div class=\"stats stats-right\">\n                                    <i class=\"now-ui-icons ui-2_favourite-28\"></i> 2.4K ·\n                                    <i class=\"now-ui-icons files_single-copy-04\"></i> 45\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-8 offset-md-2 col-lg-4 offset-lg-0\">\n                    <div class=\"card card-blog\">\n                        <div class=\"card-image\">\n                            <a href=\"#pablo\">\n                                <img class=\"img rounded\" src=\"assets/img/examples/card-blog6.jpg\">\n                            </a>\n                        </div>\n                        <div class=\"card-body text-center\">\n                            <h6 class=\"category text-danger\">\n                                <i class=\"now-ui-icons media-2_sound-wave\"></i> Business\n                            </h6>\n                            <h5 class=\"card-title\">\n                                Axel Springer Spends $343M To Buy Business Insider\n                            </h5>\n                            <p class=\"card-description\">\n                                German media giant Axel Springer has announced it’s acquiring online business news publication Business Inside...\n                            </p>\n                            <div class=\"card-footer\">\n                                <a href=\"#nuk\" class=\"btn btn-primary\">Read Article</a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card card-blog\">\n                        <div class=\"card-image\">\n                            <img class=\"img rounded\" src=\"assets/img/card-blog3.jpg\">\n                        </div>\n                        <div class=\"card-body\">\n                            <h6 class=\"category text-warning\">\n                                <i class=\"now-ui-icons media-1_camera-compact\"></i> Photo\n                            </h6>\n                            <h5 class=\"card-title\">\n                                <a href=\"#pablo\">Indispensible to nature photography: the hide</a>\n                            </h5>\n                            <div class=\"card-footer\">\n                                <div class=\"stats stats-right\">\n                                    <i class=\"now-ui-icons ui-2_favourite-28\"></i> 342 ·\n                                    <i class=\"now-ui-icons files_single-copy-04\"></i> 45\n                                </div>\n                                <div class=\"author\">\n                                    <img src=\"assets/img/james.jpg\" alt=\"...\" class=\"avatar img-raised\">\n                                    <span>Devin Coldewey</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-6 px-0\">\n                <div class=\"card card-fashion card-background\" style=\"background-image: url('assets/img/bg26.jpg')\">\n                    <div class=\"card-body\">\n                        <div class=\"card-title text-left\">\n                            <h2>\n                                <a href=\"#pablo\">\n                                    Walk of shame - Latest Urban Trend\n                                </a>\n                            </h2>\n                        </div>\n                        <div class=\"card-footer text-left\">\n                            <div class=\"stats\">\n                                <span>\n                                    <i class=\"now-ui-icons users_circle-08\"></i>Author\n                                </span>\n                                <span>\n                                    <i class=\"now-ui-icons tech_watch-time\"></i> June 2, 2017\n                                </span>\n                            </div>\n                            <div class=\"stats-link pull-right\">\n                                <a href=\"#pablo\" class=\"footer-link\">People</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6 px-0\">\n                <div class=\"card-container\">\n                    <div class=\"card card-fashion\">\n                        <h4 class=\"card-title\">\n                            <a href=\"#pablo\">\n                                The view from south Texas in one Picture\n                            </a>\n                        </h4>\n                        <div class=\"card-body\">\n                            <div class=\"card-footer\">\n                                <div class=\"stats\">\n                                    <span>\n                                        <i class=\"now-ui-icons users_circle-08\"></i>Author\n                                    </span>\n                                    <span>\n                                        <i class=\"now-ui-icons tech_watch-time\"></i> June 2, 2017\n                                    </span>\n                                </div>\n                                <div class=\"stats-link pull-right\">\n                                    <a href=\"#pablo\">Mountains</a>&sbquo;\n                                    <a href=\"#pablo\">Outdoor</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card card-fashion card-background\" style=\"background-image: url('http://mvpwp.com/demo/nowwp/wp-content/uploads/sites/6/2017/06/a-james-donovan-180375.jpg')\">\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END BLOG CARDS      *********      -->\n    <!--     *********    PROFILE CARDS     *********      -->\n    <div class=\"cards\">\n        <div class=\"container\">\n            <div class=\"title\">\n                <h3>\n                    <small>Profile Cards</small>\n                </h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 col-lg-3\">\n                    <div class=\"card card-profile\">\n                        <div class=\"card-image\">\n                            <img class=\"img rounded\" src=\"assets/img/julie.jpg\">\n                        </div>\n                        <div class=\"card-body\">\n                            <a href=\"pablo\">\n                                <h4 class=\"card-title\">Julie Andrew</h4>\n                            </a>\n                            <h6 class=\"card-category text-info\">\n                                Web Designer\n                            </h6>\n                            <div class=\"card-footer\">\n                                <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-lg btn-twitter\"><i class=\"fa fa-twitter\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-lg btn-dribbble\"><i class=\"fa fa-dribbble\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-lg btn-instagram\"><i class=\"fa fa-instagram\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6 col-lg-3\">\n                    <div class=\"card card-profile\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#pablo\">\n                                <img class=\"img img-raised\" src=\"assets/img/mike.jpg\">\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\">Alec Mike</h4>\n                            <h6 class=\"category text-gray\">\n                                Designer\n                            </h6>\n                            <p class=\"card-description\">\n                                One of the co-founders. Alec drives the technical strategy of the platform, customer support and brand.\n                            </p>\n                            <div class=\"card-footer\">\n                                <a href=\"#pablo\" class=\"btn btn-icon btn-twitter btn-round\"><i class=\"fa fa-twitter\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-icon btn-facebook btn-round\"><i class=\"fa fa-facebook-square\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-icon btn-google btn-round\"><i class=\"fa fa-google\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6 col-lg-3\">\n                    <div class=\"card card-profile\" data-background-color=\"black\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#pablo\">\n                                <img class=\"img img-raised\" src=\"assets/img/james.jpg\">\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category\">CEO / Co-Founder</h6>\n                            <h4 class=\"card-title\">James Thompson</h4>\n                            <p class=\"card-description\">\n                                Don't be scared of the truth because we need to restart the human foundation in truth.\n                            </p>\n                            <a href=\"#pablo\" class=\"btn btn-primary btn-round\">Follow</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6 col-lg-3\">\n                    <div class=\"card card-profile\">\n                        <div class=\"card-body\">\n                            <div class=\"card-avatar\">\n                                <a href=\"#pablo\">\n                                    <img class=\"img img-raised\" src=\"assets/img/olivia.jpg\">\n                                </a>\n                            </div>\n                            <h6 class=\"category text-gray\">Growth Hacker</h6>\n                            <h4 class=\"card-title\">Olivia Thompson</h4>\n                            <p class=\"card-description\">\n                                \"Work hard play harder.\"\n                            </p>\n                            <div class=\"card-footer\">\n                                <a href=\"#pablo\" class=\"btn btn-icon btn-primary btn-simple btn-round\"><i class=\"fa fa-twitter\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-icon  btn-primary btn-simple btn-round\"><i class=\"fa fa-facebook-square\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-icon  btn-primary btn-simple btn-round\"><i class=\"fa fa-google\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END PROFILE CARDS      *********      -->\n    <!--     *********    PRODUCT CARDS     *********      -->\n    <div class=\"cards\">\n        <div class=\"container\">\n            <div class=\"title\">\n                <h3>\n                    <small>Full Background Cards</small>\n                </h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"card card-background\" style=\"background-image: url('assets/img/bg1.jpg')\">\n                        <div class=\"card-body\">\n                            <div class=\"card-title text-left\">\n                                <h3>How wild Animals live in the National Forest</h3>\n                            </div>\n                            <div class=\"card-footer text-left\">\n                                <div class=\"stats\">\n                                    <span>\n                                        <i class=\"now-ui-icons media-2_sound-wave\"></i>SPACE.com\n                                    </span>\n                                    <span>\n                                        <i class=\"now-ui-icons tech_watch-time\"></i> 20min ago\n                                    </span>\n                                </div>\n                                <div class=\"stats-link pull-right\">\n                                    <a href=\"#pablo\" class=\"footer-link\">Environment</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"card card-background\" style=\"background-image: url('assets/img/bg3.jpg')\">\n                        <div class=\"card-body\">\n                            <div class=\"card-title text-left\">\n                                <h3>How wild Animals live in the National Forest</h3>\n                            </div>\n                            <div class=\"card-footer text-left\">\n                                <div class=\"stats-link\">\n                                    <a href=\"#pablo\" class=\"footer-link\">Environment</a>\n                                </div>\n                                <div class=\"stats stats-right\">\n                                    <span>\n                                        <i class=\"now-ui-icons media-2_sound-wave\"></i>SPACE.com\n                                    </span>\n                                    <span>\n                                        <i class=\"now-ui-icons tech_watch-time\"></i> 20min ago\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END PRODUCT CARDS      *********      -->\n    <!--     *********    PRICING CARDS     *********      -->\n    <div class=\"cards\">\n        <div class=\"container\">\n            <div class=\"title\">\n                <h3>\n                    <small>Pricing Cards</small>\n                </h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 col-lg-3\">\n                    <div class=\"card card-pricing\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category\">Alpha Pack</h6>\n                            <div class=\"icon icon-primary\">\n                                <i class=\"now-ui-icons objects_diamond\"></i>\n                            </div>\n                            <h3 class=\"card-title\">$67</h3>\n                            <p class=\"card-description\">\n                                This is good if your company size is between 100 and 299 employees.</p>\n                            <a href=\"#pablo\" class=\"btn btn-primary btn-round\">Add to Cart</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6 col-lg-3\">\n                    <div class=\"card card-pricing\" data-background-color=\"orange\">\n                        <div class=\"card-body\">\n                            <h1 class=\"card-title\">$40</h1>\n                            <ul>\n                                <li><i class=\"now-ui-icons ui-1_check text-primary\"></i> Unlimited MB</li>\n                                <li><i class=\"now-ui-icons ui-1_check text-primary\"></i> Unlimited emails</li>\n                                <li><i class=\"now-ui-icons ui-1_check text-primary\"></i> Unlimited Databases</li>\n                                <li><i class=\"now-ui-icons ui-1_check text-primary\"></i> Full Support</li>\n                            </ul>\n                            <a href=\"#pablo\" class=\"btn btn-neutral btn-default disabled btn-round\">\n                                Current Plan\n                            </a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6 col-lg-3\">\n                    <div class=\"card card-pricing card-background\" style=\"background-image: url('assets/img/project12.jpg')\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category\">Professional</h6>\n                            <div class=\"icon icon-primary\">\n                                <i class=\"now-ui-icons objects_spaceship\"></i>\n                            </div>\n                            <h2 class=\"card-title\">$67</h2>\n                            <p class=\"card-description\">\n                                This is good if you are a freelancer of photographer.</p>\n                            <a href=\"#pablo\" class=\"btn btn-primary btn-round\">\n                                Sign Up\n                            </a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6 col-lg-3\">\n                    <div class=\"card card-pricing\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category\">Starter</h6>\n                            <h1 class=\"card-title\">\n                                <small>$</small>10</h1>\n                            <ul>\n                                <li><i class=\"now-ui-icons ui-1_check text-success\"></i> 1000 MB</li>\n                                <li><i class=\"now-ui-icons ui-1_simple-remove text-danger\"></i> 3 email</li>\n                                <li><i class=\"now-ui-icons ui-1_simple-remove text-danger\"></i> 5 Databases</li>\n                                <li><i class=\"now-ui-icons ui-1_simple-remove text-danger\"></i> No Support</li>\n                            </ul>\n                            <a href=\"#pablo\" class=\"btn btn-primary btn-round\">\n                                Register\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END PRICING CARDS      *********      -->\n</div>\n<div class=\"section section-plain-cards\">\n    <div class=\"container\">\n        <div class=\"title\">\n            <h3>Plain Cards</h3>\n            <h3>\n                <small>Blog Cards</small>\n            </h3>\n        </div>\n        <!--     *********    PLAIN BLOG CARDS      *********      -->\n        <div class=\"row\">\n            <div class=\"col-md-6 col-lg-4\">\n                <div class=\"card card-blog card-plain\">\n                    <div class=\"card-image\">\n                        <img class=\"img rounded img-raised\" src=\"assets/img/project13.jpg\">\n                    </div>\n                    <div class=\"card-body\">\n                        <h6 class=\"category text-warning\">\n                            <i class=\"now-ui-icons business_bulb-63\"></i> Focus\n                        </h6>\n                        <h5 class=\"card-title\">\n                            <a href=\"#nuk\">Stay Focused: Train Your Brain</a>\n                        </h5>\n                        <p class=\"card-description\">\n                            Our brains are finely attuned to distraction, so today's digital environment makes it especially hard to focus...\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6 col-lg-4\">\n                <div class=\"card card-blog card-plain\">\n                    <div class=\"card-image\">\n                        <a href=\"#pablo\">\n                            <img class=\"img rounded img-raised\" src=\"assets/img/card-blog2.jpg\">\n                        </a>\n                    </div>\n                    <div class=\"card-body\">\n                        <h6 class=\"category text-primary\">Features</h6>\n                        <h5 class=\"card-title\">\n                            <a href=\"#nuk\">That’s One Way To Ditch Your Passenger</a>\n                        </h5>\n                        <p class=\"card-description\">\n                            As near as we can tell, this guy must have thought he was going over backwards and tapped the rear break to bring the nose down...\n                        </p>\n                        <div class=\"card-footer\">\n                            <div class=\"author\">\n                                <img src=\"assets/img/julie.jpg\" alt=\"...\" class=\"avatar img-raised\">\n                                <span>Mike John</span>\n                            </div>\n                            <div class=\"stats stats-right\">\n                                <i class=\"now-ui-icons tech_watch-time\"></i> 5 min read\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6 col-lg-4\">\n                <div class=\"card card-blog card-plain\">\n                    <div class=\"card-image\">\n                        <a href=\"#pablo\">\n                            <img class=\"img img-raised rounded\" src=\"assets/img/examples/card-blog6.jpg\">\n                        </a>\n                    </div>\n                    <div class=\"card-body text-center\">\n                        <h6 class=\"category text-danger\">\n                            <i class=\"now-ui-icons media-2_sound-wave\"></i> Business\n                        </h6>\n                        <h5 class=\"card-title\">\n                            <a href=\"#nuk\">Axel Springer Spends $343M To Buy Business Insider</a>\n                        </h5>\n                        <p class=\"card-description\">\n                            German media giant Axel Springer has announced it’s acquiring online business news publication Business Inside...\n                        </p>\n                        <div class=\"card-footer\">\n                            <a href=\"#nuk\" class=\"btn btn-primary\">Read Article</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END PLAIN BLOG CARDS      *********      -->\n    <!--     *********   PLAIN PROFILE CARDS     *********      -->\n    <div class=\"container\">\n        <div class=\"title\">\n            <h3>\n                <small>Profile Cards</small>\n            </h3>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6 col-lg-3\">\n                <div class=\"card card-profile card-plain\">\n                    <div class=\"card-image\">\n                        <img class=\"img rounded\" src=\"assets/img/julie.jpg\">\n                    </div>\n                    <div class=\"card-body\">\n                        <a href=\"pablo\">\n                            <h4 class=\"card-title\">Julie Andrew</h4>\n                        </a>\n                        <h6 class=\"card-category text-info\">\n                            Web Designer\n                        </h6>\n                        <div class=\"card-footer\">\n                            <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-lg btn-twitter\"><i class=\"fa fa-twitter\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-lg btn-dribbble\"><i class=\"fa fa-dribbble\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-lg btn-instagram\"><i class=\"fa fa-instagram\"></i></a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6 col-lg-3\">\n                <div class=\"card card-profile card-plain\">\n                    <div class=\"card-avatar\">\n                        <a href=\"#pablo\">\n                            <img class=\"img img-raised\" src=\"assets/img/mike.jpg\">\n                        </a>\n                    </div>\n                    <div class=\"card-body\">\n                        <h4 class=\"card-title\">Alec Mike</h4>\n                        <h6 class=\"category text-gray\">\n                            Designer\n                        </h6>\n                        <p class=\"card-description\">\n                            One of the co-founders. Alec drives the technical strategy of the platform, customer support and brand.\n                        </p>\n                        <div class=\"card-footer\">\n                            <a href=\"#pablo\" class=\"btn btn-icon btn-twitter btn-round\"><i class=\"fa fa-twitter\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-icon btn-facebook btn-round\"><i class=\"fa fa-facebook-square\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-icon btn-google btn-round\"><i class=\"fa fa-google\"></i></a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6 col-lg-3\">\n                <div class=\"card card-profile card-plain\">\n                    <div class=\"card-avatar\">\n                        <a href=\"#pablo\">\n                            <img class=\"img img-raised\" src=\"assets/img/james.jpg\">\n                        </a>\n                    </div>\n                    <div class=\"card-body\">\n                        <h6 class=\"card-category\">CEO / Co-Founder</h6>\n                        <h4 class=\"card-title\">James Thompson</h4>\n                        <p class=\"card-description\">\n                            Don't be scared of the truth because we need to restart the human foundation in truth.\n                        </p>\n                        <a href=\"#pablo\" class=\"btn btn-primary btn-round\">Follow</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6 col-lg-3\">\n                <div class=\"card card-profile card-plain\">\n                    <div class=\"card-body\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#pablo\">\n                                <img class=\"img img-raised\" src=\"assets/img/olivia.jpg\">\n                            </a>\n                        </div>\n                        <h6 class=\"category text-gray\">Growth Hacker</h6>\n                        <h4 class=\"card-title\">Olivia Thompson</h4>\n                        <p class=\"card-description\">\n                            \"Work hard play harder.\"\n                        </p>\n                        <div class=\"card-footer\">\n                            <a href=\"#pablo\" class=\"btn btn-icon btn-primary btn-simple btn-round\"><i class=\"fa fa-twitter\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-icon  btn-primary btn-simple btn-round\"><i class=\"fa fa-facebook-square\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-icon  btn-primary btn-simple btn-round\"><i class=\"fa fa-google\"></i></a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END PROFILE CARDS      *********      -->\n</div>\n"

/***/ }),

/***/ "./src/app/components/cards-areas/cards-areas.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/cards-areas/cards-areas.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZHMtYXJlYXMvY2FyZHMtYXJlYXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/cards-areas/cards-areas.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/cards-areas/cards-areas.component.ts ***!
  \*****************************************************************/
/*! exports provided: CardsAreasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsAreasComponent", function() { return CardsAreasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardsAreasComponent = /** @class */ (function () {
    function CardsAreasComponent() {
    }
    CardsAreasComponent.prototype.ngOnInit = function () {
    };
    CardsAreasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cards-areas',
            template: __webpack_require__(/*! ./cards-areas.component.html */ "./src/app/components/cards-areas/cards-areas.component.html"),
            styles: [__webpack_require__(/*! ./cards-areas.component.scss */ "./src/app/components/cards-areas/cards-areas.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardsAreasComponent);
    return CardsAreasComponent;
}());



/***/ }),

/***/ "./src/app/components/comments-areas/comments-areas.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/comments-areas/comments-areas.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section section-nude-gray\">\n    <div class=\"container container-tim\">\n      <div id=\"comments\">\n          <div class=\"title\">\n              <h3>\n                  <small>Comments</small>\n              </h3>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-md-8 ml-auto mr-auto\">\n                  <div class=\"media-area\">\n                      <h3 class=\"title text-center\">\n                          <small>10 Comments</small>\n                      </h3>\n                      <div class=\"media\">\n                          <a class=\"pull-left\" href=\"#pablo\">\n                              <div class=\"avatar\">\n                                  <img class=\"media-object img-raised\" src=\"assets/img/marie.jpg\" alt=\"...\" />\n                              </div>\n                          </a>\n                          <div class=\"media-body\">\n                              <h5 class=\"media-heading\">Tina Andrew\n                                  <small class=\"text-muted\">&middot; 7 minutes ago</small>\n                              </h5>\n                              <p>Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!</p>\n                              <p>All praises and blessings to the families of people who never gave up on dreams. Don't forget, You're Awesome!</p>\n                              <div class=\"media-footer\">\n                                  <a href=\"#pablo\" class=\"btn btn-primary btn-neutral pull-right\" placement=\"top\" ngbTooltip=\"Reply to Comment\">\n                                      <i class=\"now-ui-icons ui-1_send\"></i> Reply\n                                  </a>\n                                  <a href=\"#pablo\" class=\"btn btn-danger btn-neutral pull-right\">\n                                      <i class=\"now-ui-icons ui-2_favourite-28\"></i> 243\n                                  </a>\n                              </div>\n                              <div class=\"media media-post\">\n                                  <a class=\"pull-left author\" href=\"#pablo\">\n                                      <div class=\"avatar\">\n                                          <img class=\"media-object img-raised\" alt=\"64x64\" src=\"assets/img/michael.jpg\">\n                                      </div>\n                                  </a>\n                                  <div class=\"media-body\">\n                                      <textarea class=\"form-control\" placeholder=\"Write a nice reply or go home...\" rows=\"4\"></textarea>\n                                      <div class=\"media-footer\">\n                                          <a href=\"#pablo\" class=\"btn btn-primary pull-right\">\n                                              <i class=\"now-ui-icons ui-1_send\"></i> Reply\n                                          </a>\n                                      </div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                      <div class=\"media\">\n                          <a class=\"pull-left\" href=\"#pablo\">\n                              <div class=\"avatar\">\n                                  <img class=\"media-object img-raised\" alt=\"Tim Picture\" src=\"assets/img/olivia.jpg\">\n                              </div>\n                          </a>\n                          <div class=\"media-body\">\n                              <h5 class=\"media-heading\">John Camber\n                                  <small class=\"text-muted\">&middot; Yesterday</small>\n                              </h5>\n                              <p>Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.</p>\n                              <p> Don't forget, You're Awesome!</p>\n                              <div class=\"media-footer\">\n                                  <a href=\"#pablo\" class=\"btn btn-primary btn-neutral pull-right\" placement=\"top\" ngbTooltip=\"Reply to Comment\">\n                                      <i class=\"now-ui-icons ui-1_send\"></i> Reply\n                                  </a>\n                                  <a href=\"#pablo\" class=\"btn btn-default btn-neutral pull-right\">\n                                      <i class=\"now-ui-icons ui-2_favourite-28\"></i> 25\n                                  </a>\n                              </div>\n                              <div class=\"media\">\n                                  <a class=\"pull-left\" href=\"#pablo\">\n                                      <div class=\"avatar\">\n                                          <img class=\"media-object img-raised\" alt=\"64x64\" src=\"assets/img/emily.jpg\">\n                                      </div>\n                                  </a>\n                                  <div class=\"media-body\">\n                                      <h5 class=\"media-heading\">Tina Andrew\n                                          <small class=\"text-muted\">&middot; 2 Days Ago</small>\n                                      </h5>\n                                      <p>Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.</p>\n                                      <p> Don't forget, You're Awesome!</p>\n                                      <div class=\"media-footer\">\n                                          <a href=\"#pablo\" class=\"btn btn-primary btn-neutral pull-right\" placement=\"top\" ngbTooltip=\"Reply to Comment\">\n                                              <i class=\"now-ui-icons ui-1_send\"></i> Reply\n                                          </a>\n                                          <a href=\"#pablo\" class=\"btn btn-danger btn-neutral pull-right\">\n                                              <i class=\"now-ui-icons ui-2_favourite-28\"></i> 243\n                                          </a>\n                                      </div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                      <div class=\"media\">\n                          <a class=\"pull-left\" href=\"#pablo\">\n                              <div class=\"avatar\">\n                                  <img class=\"media-object img-raised\" alt=\"64x64\" src=\"assets/img/james.jpg\">\n                              </div>\n                          </a>\n                          <div class=\"media-body\">\n                              <h5 class=\"media-heading\">Rosa Thompson\n                                  <small class=\"text-muted\">&middot; 2 Days Ago</small>\n                              </h5>\n                              <p>Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.</p>\n                              <p> Don't forget, You're Awesome!</p>\n                              <div class=\"media-footer\">\n                                  <a href=\"#pablo\" class=\"btn btn-primary btn-neutral pull-right\" placement=\"top\" ngbTooltip=\"Reply to Comment\">\n                                      <i class=\"now-ui-icons ui-1_send\"></i> Reply\n                                  </a>\n                                  <a href=\"#pablo\" class=\"btn btn-danger btn-neutral pull-right\">\n                                      <i class=\"now-ui-icons ui-2_favourite-28\"></i> 243\n                                  </a>\n                              </div>\n                          </div>\n                      </div>\n                      <div class=\"pagination pagination-primary justify-content-center\">\n                        <ngb-pagination [collectionSize]=\"60\" [(page)]=\"page1\" [maxSize]=\"5\" [rotate]=\"true\" class=\"pagination-primary\"></ngb-pagination>\n                      </div>\n                  </div>\n                  <h4 class=\"text-center\">Post your comment\n                      <br>\n                      <small class=\"text-muted\">- Logged In User -</small>\n                  </h4>\n                  <div class=\"media media-post\">\n                      <a class=\"pull-left author\" href=\"#pablo\">\n                          <div class=\"avatar\">\n                              <img class=\"media-object img-raised\" alt=\"64x64\" src=\"assets/img/james.jpg\">\n                          </div>\n                      </a>\n                      <div class=\"media-body\">\n                          <textarea class=\"form-control\" placeholder=\"Write some nice stuff or nothing...\" rows=\"6\"></textarea>\n                          <div class=\"media-footer\">\n                              <a href=\"#pablo\" class=\"btn btn-primary btn-wd pull-right\">Post Comment</a>\n                          </div>\n                      </div>\n                  </div>\n                  <!-- end media-post -->\n                  <h4 class=\"text-center\">Post your comment\n                      <br>\n                      <small class=\"text-muted\">- Not Logged In User -</small>\n                  </h4>\n                  <div class=\"media media-post\">\n                      <a class=\"pull-left author\" href=\"#pablo\">\n                          <div class=\"avatar\">\n                              <img class=\"media-object img-raised\" alt=\"64x64\" src=\"assets/img/placeholder.jpg\" />\n                          </div>\n                      </a>\n                      <div class=\"media-body\">\n                          <form class=\"form\">\n                              <div class=\"row\">\n                                  <div class=\"col-md-6\">\n                                      <div class=\"form-group\">\n                                          <input type=\"text\" class=\"form-control\" placeholder=\"Your Name\" />\n                                      </div>\n                                  </div>\n                                  <div class=\"col-md-6\">\n                                      <div class=\"form-group\">\n                                          <input type=\"email\" class=\"form-control\" placeholder=\"Your email\" />\n                                      </div>\n                                  </div>\n                              </div>\n                              <textarea class=\"form-control\" placeholder=\"Write some nice stuff or nothing...\" rows=\"6\"></textarea>\n                              <div class=\"media-footer\">\n                                  <h6 class=\"text-muted\">Sign in with</h6>\n                                  <a href=\"\" class=\"btn btn-icon btn-round btn-twitter\">\n                                      <i class=\"fa fa-twitter\"></i>\n                                  </a>\n                                  <a href=\"\" class=\"btn btn-icon btn-round btn-facebook\">\n                                      <i class=\"fa fa-facebook-square\"></i>\n                                  </a>\n                                  <a href=\"\" class=\"btn btn-icon btn-round btn-google\">\n                                      <i class=\"fa fa-google-plus-square\"></i>\n                                  </a>\n                                  <a href=\"#pablo\" class=\"btn btn-primary pull-right\">Post Comment</a>\n                              </div>\n                          </form>\n                      </div>\n                      <!-- end media-body -->\n                  </div>\n                  <!-- end media-post -->\n              </div>\n          </div>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/comments-areas/comments-areas.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/comments-areas/comments-areas.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbWVudHMtYXJlYXMvY29tbWVudHMtYXJlYXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/comments-areas/comments-areas.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/comments-areas/comments-areas.component.ts ***!
  \***********************************************************************/
/*! exports provided: CommentsAreasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsAreasComponent", function() { return CommentsAreasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CommentsAreasComponent = /** @class */ (function () {
    function CommentsAreasComponent() {
        this.page = 1;
        this.page1 = 3;
    }
    CommentsAreasComponent.prototype.ngOnInit = function () {
    };
    CommentsAreasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comments-areas',
            template: __webpack_require__(/*! ./comments-areas.component.html */ "./src/app/components/comments-areas/comments-areas.component.html"),
            styles: [__webpack_require__(/*! ./comments-areas.component.scss */ "./src/app/components/comments-areas/comments-areas.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CommentsAreasComponent);
    return CommentsAreasComponent;
}());



/***/ }),

/***/ "./src/app/components/common/breadcrumb/breadcrumb.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/common/breadcrumb/breadcrumb.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"col-md-12\" id=\"breadcrumb\">\r\n  <app-ng7-bootstrap-breadcrumb></app-ng7-bootstrap-breadcrumb>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/common/breadcrumb/breadcrumb.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/common/breadcrumb/breadcrumb.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 550px) {\n  #breadcrumb {\n    margin-top: 6em; } }\n\n@media (min-width: 550px) {\n  #breadcrumb {\n    margin-top: 6em; } }\n\n@media (min-width: 750px) {\n  #breadcrumb {\n    margin-top: 6em; } }\n\n@media (min-width: 1000px) {\n  #breadcrumb {\n    margin-top: 7em; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vYnJlYWRjcnVtYi9DOlxcVXNlcnNcXGpvaG5tXFxEb2N1bWVudHNcXEdpdEh1YlxcU2ltcGxlc3QtQ29va2Jvb2stQW5ndWxhclxcc2ltcGxlc3QtY29va2Jvb2svc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNvbW1vblxcYnJlYWRjcnVtYlxcYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQURKO0lBRVEsZUFBZSxFQUFBLEVBV3RCOztBQVRHO0VBSko7SUFLUSxlQUFlLEVBQUEsRUFRdEI7O0FBTkc7RUFQSjtJQVFRLGVBQWUsRUFBQSxFQUt0Qjs7QUFIRztFQVZKO0lBV1EsZUFBZSxFQUFBLEVBRXRCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JyZWFkY3J1bWIge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNmVtO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNmVtO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc1MHB4KSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNmVtO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDdlbTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/common/breadcrumb/breadcrumb.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/common/breadcrumb/breadcrumb.component.ts ***!
  \**********************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng7_bootstrap_breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng7-bootstrap-breadcrumb */ "./node_modules/ng7-bootstrap-breadcrumb/fesm5/ng7-bootstrap-breadcrumb.js");



var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(ng7BootstrapBreadcrumbService) {
        this.ng7BootstrapBreadcrumbService = ng7BootstrapBreadcrumbService;
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
        var breadcrumb = { customText: 'This is Custom Text', dynamicText: 'Current Recipe' };
        this.ng7BootstrapBreadcrumbService.updateBreadcrumbLabels(breadcrumb);
    };
    BreadcrumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! ./breadcrumb.component.html */ "./src/app/components/common/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumb.component.scss */ "./src/app/components/common/breadcrumb/breadcrumb.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng7_bootstrap_breadcrumb__WEBPACK_IMPORTED_MODULE_2__["Ng7BootstrapBreadcrumbService"]])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/components/common/footer/footer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/common/footer/footer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer footer-big col-md-12\" data-background-color=\"black\">\r\n    <div class=\"container\">\r\n        <div class=\"copyright\">\r\n          <fa-icon [icon]=\"['fas', 'copyright']\"></fa-icon> \r\n          Copyright {{ year | date:'yyyy' }} by <a href=\"https://www.gatewayitconsulting.com\" target=\"_blank\">Gateway IT Consulting</a>\r\n        </div>\r\n    </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/components/common/footer/footer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/common/footer/footer.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/common/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/common/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.year = Date.now();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/common/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/common/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/common/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/common/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"col-md-12\">\r\n  <nav class=\"site-nav\">\r\n    <h1 class=\"logo col-md-12\"><a routerLink=\"/\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact: true}\">Simplest Cookbook</a></h1>\r\n    <div class=\"menu-toggle\">\r\n      <div class=\"hamburger\"></div>\r\n    </div>\r\n    <ul class=\"open desktop col-md-12 col-lg-8\">\r\n      <li class=\"dropDown col-md-12 col-lg-2\">\r\n        <a routerLink=\"/home/1/recipe-list/2\" routerLinkActive=\"active-link\">\r\n          <i class=\" site-nav--icon\"></i>Recipes\r\n        </a>\r\n      </li>\r\n      <li class=\"col-md-12 col-lg-2\">\r\n        <a routerLink=\"/cooking-tools\" routerLinkActive=\"active-link\">\r\n          <i class=\"site-nav--icon\"></i>Tools\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n</header>"

/***/ }),

/***/ "./src/app/components/common/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/common/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n.noLine {\n  text-decoration: none; }\n/*     brand Colors              */\n/*      light colors         */\n.menu-open {\n  -webkit-transform: translate(-230px, 0);\n          transform: translate(-230px, 0); }\n/* Links\r\n******************************************** */\na {\n  color: #FFF; }\nnav {\n  background-color: #2c2c2c; }\nnav .active-link {\n    color: #1EAEDB; }\n* {\n  box-sizing: border-box; }\n.logo {\n  font-size: 1.25em;\n  margin: 0;\n  font-weight: 700;\n  letter-spacing: 3px; }\n.menu-toggle {\n  position: absolute;\n  padding-top: 1.5em;\n  padding-right: 2em;\n  top: 1em;\n  right: .5em;\n  cursor: pointer; }\n.hamburger,\n.hamburger::before,\n.hamburger::after {\n  content: '';\n  display: block;\n  background: #FFF;\n  height: 3px;\n  width: 2em;\n  border-radius: 3px;\n  transition: all ease-in-out 350ms; }\n.hamburger::before {\n  -webkit-transform: translateY(-7px);\n  transform: translateY(-7px); }\n.hamburger::after {\n  -webkit-transform: translateY(4px);\n  transform: translateY(4px); }\n.open .hamburger {\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg); }\n.open .hamburger::before {\n  display: none; }\n.open .hamburger::after {\n  -webkit-transform: translateY(-1px) rotate(-90deg);\n  transform: translateY(-1px) rotate(-90deg); }\n.site-nav .col-md-12 {\n  padding-left: 0 !important;\n  padding-right: 0 !important; }\n.site-nav--open {\n  -webkit-clip-path: circle(150% at top right);\n  clip-path: circle(150% at top right); }\nnav {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index: 5; }\nnav ul {\n    display: none;\n    flex-direction: column;\n    list-style-type: none;\n    padding: 0;\n    margin: 0; }\nnav li {\n    border-bottom: none;\n    margin-bottom: 0; }\nnav li:last-child {\n      border-bottom: none; }\nnav a {\n    display: block;\n    padding: 1.5em 4em 1.5em 3em;\n    text-decoration: none; }\nnav .desktop a {\n    font-size: 1.25em;\n    line-height: 1.4em; }\nnav .dropDown-content {\n    display: none; }\nnav .dropDown-content-mobile {\n    display: block; }\nnav .dropDown-content-mobile-subMenu {\n    display: none; }\nnav ul.opening {\n  display: block; }\n.site-nav--icon {\n  font-size: 1.4em;\n  margin-right: 1em;\n  width: 1.1em;\n  text-align: right;\n  color: rgba(255, 255, 255, 0.4); }\n/* Header Styling\r\n  ******************************************** */\n@media (min-width: 550px) {\n  .header {\n    padding: 9rem 0 8rem;\n    text-align: left;\n    background-color: lightgray; } }\n@media (min-width: 1000px) {\n  /* Navigation Styling\r\n  ******************************************** */\n  nav {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    text-align: center; }\n    nav ul {\n      display: flex;\n      flex-direction: row;\n      justify-content: flex-end; }\n    nav li {\n      flex: 1 1 auto;\n      border: none; }\n    nav a {\n      padding: 1.5em 1.3em 1.5em 1.3em;\n      margin: 0;\n      border: none; }\n      nav a:hover {\n        color: #1EAEDB; }\n    nav .logo {\n      flex: 1 0 200px;\n      padding-left: 0; }\n    nav .desktop {\n      line-height: 1em;\n      padding-bottom: .25em; }\n    nav li.dropDown {\n      display: inline-block; }\n    nav .dropDown-content {\n      display: none;\n      position: absolute;\n      min-width: 250px;\n      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n      z-index: 1; }\n      nav .dropDown-content a {\n        color: #FFF;\n        padding: 12px 16px;\n        text-decoration: none;\n        display: block;\n        text-align: center; }\n    nav .dropDown-content a:hover {\n      color: #0FA0CE; }\n    nav .dropDown:hover .dropDown-content {\n      display: block; }\n    nav .dropDown-content-mobile {\n      display: none; }\n  .menu-toggle {\n    display: none; }\n  nav ul ul li {\n    display: none;\n    position: absolute;\n    min-width: 160px;\n    z-index: 1; }\n  /* First Tier Dropdown */\n  nav ul ul li a {\n    min-width: 175px;\n    float: none;\n    display: list-item;\n    position: relative;\n    margin: 0 auto;\n    padding-left: 5em; }\n  nav a:active,\n  nav a:focus {\n    color: #1EAEDB; }\n  .logo {\n    flex: 0 0 200px;\n    margin: 0;\n    padding-left: 20px; }\n  .site-nav a:hover,\n  .site-nav a:focus {\n    background: transparent; }\n  .site-nav--icon {\n    display: none; } }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vaGVhZGVyL0M6XFxVc2Vyc1xcam9obm1cXERvY3VtZW50c1xcR2l0SHViXFxTaW1wbGVzdC1Db29rYm9vay1Bbmd1bGFyXFxzaW1wbGVzdC1jb29rYm9vay9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbW1vbi9oZWFkZXIvQzpcXFVzZXJzXFxqb2hubVxcRG9jdW1lbnRzXFxHaXRIdWJcXFNpbXBsZXN0LUNvb2tib29rLUFuZ3VsYXJcXHNpbXBsZXN0LWNvb2tib29rL3NyY1xcYXNzZXRzXFxzYXNzXFxub3ctdWkta2l0XFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL2hlYWRlci9DOlxcVXNlcnNcXGpvaG5tXFxEb2N1bWVudHNcXEdpdEh1YlxcU2ltcGxlc3QtQ29va2Jvb2stQW5ndWxhclxcc2ltcGxlc3QtY29va2Jvb2svc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNvbW1vblxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUE0QkE7RUFDRSxxQkFBcUIsRUFBQTtBQzRDdkIsa0NBQUE7QUFVQSw4QkFBQTtBQ2hGQTtFQUNFLHVDQUErQjtVQUEvQiwrQkFBK0IsRUFBQTtBQUdqQzs4Q0NHOEM7QUREOUM7RUFDRSxXRktlLEVBQUE7QUVGakI7RUFDRSx5QkRrQ2tDLEVBQUE7QUNuQ3BDO0lBR0ksY0FBYyxFQUFBO0FBSWxCO0VBQ0Usc0JBQXNCLEVBQUE7QUFHeEI7RUFDRSxpQkFBaUI7RUFDakIsU0FBUztFQUNULGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTtBQUVyQjtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0VBQ1gsZUFBZSxFQUFBO0FBRWpCOzs7RUFHRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGdCRjVCZTtFRTZCZixXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjtFQUVsQixpQ0FBaUMsRUFBQTtBQUVuQztFQUNFLG1DQUFtQztFQUNuQywyQkFBMkIsRUFBQTtBQUU3QjtFQUNFLGtDQUFrQztFQUNsQywwQkFBMEIsRUFBQTtBQUU1QjtFQUNFLGdDQUFnQztFQUNoQyx3QkFBd0IsRUFBQTtBQUUxQjtFQUNFLGFBQWEsRUFBQTtBQUVmO0VBQ0Usa0RBQWtEO0VBQ2xELDBDQUEwQyxFQUFBO0FBRTVDO0VBRUksMEJBQTBCO0VBQzFCLDJCQUEyQixFQUFBO0FBRy9CO0VBQ0UsNENBQTRDO0VBQzVDLG9DQUFvQyxFQUFBO0FBRXRDO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxNQUFNO0VBQ04sT0FBTztFQUNQLFVBQVUsRUFBQTtBQUxaO0lBT0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLFNBQVMsRUFBQTtBQVhiO0lBY0ksbUJBQW1CO0lBQ25CLGdCQUFnQixFQUFBO0FBZnBCO01BaUJNLG1CQUFtQixFQUFBO0FBakJ6QjtJQXFCSSxjQUFjO0lBQ2QsNEJBQTRCO0lBQzVCLHFCQUFxQixFQUFBO0FBdkJ6QjtJQTJCTSxpQkFBaUI7SUFDakIsa0JBQWtCLEVBQUE7QUE1QnhCO0lBZ0NJLGFBQWEsRUFBQTtBQWhDakI7SUFtQ0ksY0FBYyxFQUFBO0FBbkNsQjtJQXNDSSxhQUFhLEVBQUE7QUFJakI7RUFDRSxjQUFjLEVBQUE7QUFHaEI7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsK0JBQTJCLEVBQUE7QUFHN0I7Z0RDaEJnRDtBRG1COUM7RUFERjtJQUVJLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsMkJBQTJCLEVBQUEsRUFFOUI7QUFFRDtFQUNFO2dEQ2xCOEM7RURvQjlDO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsa0JBQWtCLEVBQUE7SUFKcEI7TUFNSSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHlCQUF5QixFQUFBO0lBUjdCO01BV0ksY0FBYztNQUNkLFlBQVksRUFBQTtJQVpoQjtNQWVJLGdDQUFnQztNQUNoQyxTQUFTO01BQ1QsWUFBWSxFQUFBO01BakJoQjtRQW1CTSxjQUFjLEVBQUE7SUFuQnBCO01BdUJJLGVBQWU7TUFDZixlQUFlLEVBQUE7SUF4Qm5CO01BMkJJLGdCQUFnQjtNQUNoQixxQkFBcUIsRUFBQTtJQTVCekI7TUErQkkscUJBQXFCLEVBQUE7SUEvQnpCO01Ba0NJLGFBQWE7TUFDYixrQkFBa0I7TUFDbEIsZ0JBQWdCO01BQ2hCLCtDQUE0QztNQUM1QyxVQUFVLEVBQUE7TUF0Q2Q7UUF3Q00sV0YzS1M7UUU0S1Qsa0JBQWtCO1FBQ2xCLHFCQUFxQjtRQUNyQixjQUFjO1FBQ2Qsa0JBQWtCLEVBQUE7SUE1Q3hCO01BaURJLGNBQWMsRUFBQTtJQWpEbEI7TUFxREksY0FBYyxFQUFBO0lBckRsQjtNQXdESSxhQUFhLEVBQUE7RUFJakI7SUFDRSxhQUFhLEVBQUE7RUFHZjtJQUNFLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFVBQVUsRUFBQTtFQUdaLHdCQUFBO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGlCQUFpQixFQUFBO0VBR25COztJQUVFLGNBQWMsRUFBQTtFQUdoQjtJQUNFLGVBQWU7SUFDZixTQUFTO0lBQ1Qsa0JBQWtCLEVBQUE7RUFHcEI7O0lBRUUsdUJBQXVCLEVBQUE7RUFFekI7SUFDRSxhQUFhLEVBQUEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcblxyXG4vLyBSZXNwb25zaXZlIERlc2lnbnNcclxuJG1lZGlhLXF1ZXJ5LXBob25lOiA0MDBweDtcclxuJG1lZGlhLXF1ZXJ5LXNtYWxsLXRhYmxldDogNTUwcHg7XHJcbiRtZWRpYS1xdWVyeS10YWJsZXQ6IDc1MHB4O1xyXG4kbWVkaWEtcXVlcnktZGVza3RvcDogMTAwMHB4O1xyXG4kbWVkaWEtcXVlcnktZGVza3RvcC1oZDogMTIwMHB4O1xyXG5cclxuLy8gRm9udHNcclxuJGZvbnQtc3RhY2s6IFwiUmFsZXdheVwiLCBcIkhlbHZldGljYU5ldWVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG5cclxuLy8gQ29sb3JzXHJcbiRkZWZhdWx0LWJvZHktdGV4dDogIzIyMjtcclxuJGJsYWNrOiAjMDAwO1xyXG4kYm9uZS13aGl0ZTogI0ZGRjtcclxuJGJvcmRlci13aGl0ZTogI0UxRTFFMTtcclxuJGNvZGU6ICNGMUYxRjE7XHJcbiRsaW5rOiAjMUVBRURCO1xyXG4kbGluay1ob3ZlcjogIzBGQTBDRTtcclxuJHByaW1hcnktYmx1ZTogIzMzQzNGMDtcclxuJGRhdGEtYmx1ZTogIzExREZDNztcclxuXHJcbi8vIEJvcmRlcnNcclxuJGRlZmF1bHQtYm9yZGVyOiAxcHggc29saWQgJGJsYWNrO1xyXG4kd2hpdGUtYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci13aGl0ZTtcclxuJHByaW1hcnktYmx1ZS1ib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeS1ibHVlO1xyXG5cclxuLm5vTGluZSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59IiwiLy89PSBCdXR0b25zXG4vL1xuLy8jIyBGb3IgZWFjaCBvZiBCb290c3RyYXAncyBidXR0b25zLCBkZWZpbmUgdGV4dCwgYmFja2dyb3VuZCBhbmQgYm9yZGVyIGNvbG9yLlxuXG4kc2Fucy1zZXJpZi1mYW1pbHk6ICAgICAgICAgICdNb250c2VycmF0JywgJ0hlbHZldGljYSBOZXVlJywgIEFyaWFsLCBzYW5zLXNlcmlmO1xuXG4kbm9uZTogICAgICAgICAgICAgICAgICAgICAgIDAgICAhZGVmYXVsdDtcbiRib3JkZXItdGhpbjogICAgICAgICAgICAgICAgMXB4ICFkZWZhdWx0O1xuJGJvcmRlci10aGljazogICAgICAgICAgICAgICAycHggIWRlZmF1bHQ7XG5cbiR3aGl0ZS1jb2xvcjogICAgICAgICAgICAgICAgI0ZGRkZGRiAhZGVmYXVsdDtcbiR3aGl0ZS1iZzogICAgICAgICAgICAgICAgICAgI0ZGRkZGRiAhZGVmYXVsdDtcbiRvcmFuZ2UtYmc6ICAgICAgICAgICAgICAgICAgI2U5NWUzOCAhZGVmYXVsdDtcblxuJHNtb2tlLWJnOiAgICAgICAgICAgICAgICAgICAjRjVGNUY1ICFkZWZhdWx0O1xuJGxpZ2h0LWJsYWNrOiAgICAgICAgICAgICAgICAjNDQ0ICAgICFkZWZhdWx0O1xuXG4kYmxhY2stYmc6ICAgICAgICAgICAgICAgICAgIHJnYmEoMzAsMzAsMzAsLjk3KSAhZGVmYXVsdDtcblxuJGJsYWNrLWNvbG9yOiAgICAgICAgICAgICAgICAjMmMyYzJjICFkZWZhdWx0O1xuJGJsYWNrLWhyOiAgICAgICAgICAgICAgICAgICAjNDQ0NDQ0ICFkZWZhdWx0O1xuXG4kbGlnaHQtZ3JheTogICAgICAgICAgICAgICAgICNFM0UzRTMgIWRlZmF1bHQ7XG4kbWVkaXVtLWdyYXk6ICAgICAgICAgICAgICAgICNEREREREQgIWRlZmF1bHQ7XG4kZGFyay1ncmF5OiAgICAgICAgICAgICAgICAgICM5QTlBOUEgIWRlZmF1bHQ7XG5cbiRvcGFjaXR5LWdyYXktMzogICAgICAgICAgICAgcmdiYSgyMjIsMjIyLDIyMiwgLjMpICFkZWZhdWx0O1xuJG9wYWNpdHktZ3JheS01OiAgICAgICAgICAgICByZ2JhKDIyMiwyMjIsMjIyLCAuNSkgIWRlZmF1bHQ7XG4kb3BhY2l0eS1ncmF5LTg6ICAgICAgICAgICAgIHJnYmEoMjIyLDIyMiwyMjIsIC44KSAhZGVmYXVsdDtcblxuXG4kb3BhY2l0eS01OiAgICAgICAgICAgICAgICAgIHJnYmEoMjU1LDI1NSwyNTUsIC41KSAhZGVmYXVsdDtcbiRvcGFjaXR5LTg6ICAgICAgICAgICAgICAgICAgcmdiYSgyNTUsMjU1LDI1NSwgLjgpICFkZWZhdWx0O1xuXG4kZGF0ZXBpY2tlci1jb2xvci1kYXlzOiAgICAgICAgICAgICByZ2JhKDI1NSwyNTUsMjU1LCAuOCkgICFkZWZhdWx0O1xuJGRhdGVwaWNrZXItY29sb3Itb2xkLW5ldy1kYXlzOiAgICAgcmdiYSgyNTUsMjU1LDI1NSwgLjQpICAhZGVmYXVsdDtcblxuXG4kb3BhY2l0eS0xOiAgICAgICAgICAgICAgICAgIHJnYmEoMjU1LDI1NSwyNTUsIC4xKSAhZGVmYXVsdDtcbiRvcGFjaXR5LTI6ICAgICAgICAgICAgICAgICAgcmdiYSgyNTUsMjU1LDI1NSwgLjIpICFkZWZhdWx0O1xuXG4kdHJhbnNwYXJlbnQtYmc6ICAgICAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuJGRhcmstYmFja2dyb3VuZDogICAgICAgICAgICAjNTU1NTU1ICFkZWZhdWx0O1xuXG4kZGVmYXVsdC1jb2xvcjogICAgICAgICAgICAgICM4ODg4ODggIWRlZmF1bHQ7XG4kZGVmYXVsdC1zdGF0ZXMtY29sb3I6ICAgICAgIGxpZ2h0ZW4oJGRlZmF1bHQtY29sb3IsIDYlKSAhZGVmYXVsdDtcbiRkZWZhdWx0LWNvbG9yLW9wYWNpdHk6ICAgICAgcmdiYSgxODIsIDE4MiwgMTgyLCAuNikgIWRlZmF1bHQ7XG5cbiRwcmltYXJ5LWNvbG9yOiAgICAgICAgICAgICAgIzJjMmMyYyAhZGVmYXVsdDtcbiRwcmltYXJ5LXN0YXRlcy1jb2xvcjogICAgICAgbGlnaHRlbigkcHJpbWFyeS1jb2xvciwgNiUpICFkZWZhdWx0O1xuJHByaW1hcnktY29sb3Itb3BhY2l0eTogICAgICByZ2JhKDI0OSwgOTksIDUwLCAuMykgIWRlZmF1bHQ7XG4kcHJpbWFyeS1jb2xvci1hbGVydDogICAgICAgIHJnYmEoMjQ5LCA5OSwgNTAsIC44KSAhZGVmYXVsdDtcblxuJHN1Y2Nlc3MtY29sb3I6ICAgICAgICAgICAgICAjMThjZTBmICFkZWZhdWx0O1xuJHN1Y2Nlc3Mtc3RhdGVzLWNvbG9yOiAgICAgICBsaWdodGVuKCRzdWNjZXNzLWNvbG9yLCA2JSkgIWRlZmF1bHQ7XG4kc3VjY2Vzcy1jb2xvci1vcGFjaXR5OiAgICAgIHJnYmEoMjQsIDIwNiwgMTUsIC4zKSAhZGVmYXVsdDtcbiRzdWNjZXNzLWNvbG9yLWFsZXJ0OiAgICAgICAgcmdiYSgyNCwgMjA2LCAxNSwgLjgpICFkZWZhdWx0O1xuXG4kaW5mby1jb2xvcjogICAgICAgICAgICAgICAgICMyQ0E4RkYgIWRlZmF1bHQ7XG4kaW5mby1zdGF0ZXMtY29sb3I6ICAgICAgICAgIGxpZ2h0ZW4oJGluZm8tY29sb3IsIDYlKSAhZGVmYXVsdDtcbiRpbmZvLWNvbG9yLW9wYWNpdHk6ICAgICAgICAgcmdiYSg0NCwgMTY4LCAyNTUsIC4zKSAhZGVmYXVsdDtcbiRpbmZvLWNvbG9yLWFsZXJ0OiAgICAgICAgICAgcmdiYSg0NCwgMTY4LCAyNTUsIC44KSAhZGVmYXVsdDtcblxuJHdhcm5pbmctY29sb3I6ICAgICAgICAgICAgICAjRkZCMjM2ICFkZWZhdWx0O1xuJHdhcm5pbmctc3RhdGVzLWNvbG9yOiAgICAgICBsaWdodGVuKCR3YXJuaW5nLWNvbG9yLCA2JSkgIWRlZmF1bHQ7XG4kd2FybmluZy1jb2xvci1vcGFjaXR5OiAgICAgIHJnYmEoMjU1LCAxNzgsIDU0LCAuMykgIWRlZmF1bHQ7XG4kd2FybmluZy1jb2xvci1hbGVydDogICAgICAgIHJnYmEoMjU1LCAxNzgsIDU0LCAuOCkgIWRlZmF1bHQ7XG5cbiRkYW5nZXItY29sb3I6ICAgICAgICAgICAgICAgI0ZGMzYzNiAhZGVmYXVsdDtcbiRkYW5nZXItc3RhdGVzLWNvbG9yOiAgICAgICAgbGlnaHRlbigkZGFuZ2VyLWNvbG9yLCA2JSkgIWRlZmF1bHQ7XG4kZGFuZ2VyLWNvbG9yLW9wYWNpdHk6ICAgICAgIHJnYmEoMjU1LCA1NCwgNTQsIC4zKSAhZGVmYXVsdDtcbiRkYW5nZXItY29sb3ItYWxlcnQ6ICAgICAgICAgcmdiYSgyNTUsIDU0LCA1NCwgLjgpICFkZWZhdWx0O1xuXG4vKiAgICAgYnJhbmQgQ29sb3JzICAgICAgICAgICAgICAqL1xuJGJyYW5kLXByaW1hcnk6ICAgICAgICAgICAgICAkcHJpbWFyeS1jb2xvciAhZGVmYXVsdDtcbiRicmFuZC1pbmZvOiAgICAgICAgICAgICAgICAgJGluZm8tY29sb3IgIWRlZmF1bHQ7XG4kYnJhbmQtc3VjY2VzczogICAgICAgICAgICAgICRzdWNjZXNzLWNvbG9yICFkZWZhdWx0O1xuJGJyYW5kLXdhcm5pbmc6ICAgICAgICAgICAgICAkd2FybmluZy1jb2xvciAhZGVmYXVsdDtcbiRicmFuZC1kYW5nZXI6ICAgICAgICAgICAgICAgJGRhbmdlci1jb2xvciAhZGVmYXVsdDtcbiRicmFuZC1pbnZlcnNlOiAgICAgICAgICAgICAgJGJsYWNrLWNvbG9yICFkZWZhdWx0O1xuXG4kbGluay1kaXNhYmxlZC1jb2xvcjogICAgICAgICM2NjY2NjYgIWRlZmF1bHQ7XG5cbi8qICAgICAgbGlnaHQgY29sb3JzICAgICAgICAgKi9cbiRsaWdodC1ibHVlOiAgICAgICAgICAgICAgICAgcmdiYSgkcHJpbWFyeS1jb2xvciwgLjIpO1xuJGxpZ2h0LWF6dXJlOiAgICAgICAgICAgICAgICByZ2JhKCRpbmZvLWNvbG9yLCAuMik7XG4kbGlnaHQtZ3JlZW46ICAgICAgICAgICAgICAgIHJnYmEoJHN1Y2Nlc3MtY29sb3IsIC4yKTtcbiRsaWdodC1vcmFuZ2U6ICAgICAgICAgICAgICAgcmdiYSgkd2FybmluZy1jb2xvciwgLjIpO1xuJGxpZ2h0LXJlZDogICAgICAgICAgICAgICAgICByZ2JhKCRkYW5nZXItY29sb3IsIC4yKTtcblxuLy89PSBDb21wb25lbnRzXG4vL1xuXG4kcGFkZGluZy1pbnB1dC12ZXJ0aWNhbDogICAgICAgIDExcHggIWRlZmF1bHQ7XG4kcGFkZGluZy1pbnB1dC1ob3Jpem9udGFsOiAgICAgIDE5cHggIWRlZmF1bHQ7XG5cbiRwYWRkaW5nLWJ0bi12ZXJ0aWNhbDogICAgICAgICAxMXB4ICFkZWZhdWx0O1xuJHBhZGRpbmctYnRuLWhvcml6b250YWw6ICAgICAgIDIycHggIWRlZmF1bHQ7XG5cbiRwYWRkaW5nLWJhc2UtdmVydGljYWw6ICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRwYWRkaW5nLWJhc2UtaG9yaXpvbnRhbDogICAgICAuN3JlbSAhZGVmYXVsdDtcblxuJHBhZGRpbmctcm91bmQtaG9yaXpvbnRhbDogICAgIDIzcHggIWRlZmF1bHQ7XG5cbiRwYWRkaW5nLXNpbXBsZS12ZXJ0aWNhbDogICAgICAxMHB4ICFkZWZhdWx0O1xuJHBhZGRpbmctc2ltcGxlLWhvcml6b250YWw6ICAgIDE3cHggIWRlZmF1bHQ7XG5cbiRwYWRkaW5nLWxhcmdlLXZlcnRpY2FsOiAgICAgICAxNXB4ICFkZWZhdWx0O1xuJHBhZGRpbmctbGFyZ2UtaG9yaXpvbnRhbDogICAgIDQ4cHggIWRlZmF1bHQ7XG5cbiRwYWRkaW5nLXNtYWxsLXZlcnRpY2FsOiAgICAgICAgNXB4ICFkZWZhdWx0O1xuJHBhZGRpbmctc21hbGwtaG9yaXpvbnRhbDogICAgIDE1cHggIWRlZmF1bHQ7XG5cbi8vICRwYWRkaW5nLXhzLXZlcnRpY2FsOiAgICAgICAgICAgMXB4ICFkZWZhdWx0O1xuLy8gJHBhZGRpbmcteHMtaG9yaXpvbnRhbDogICAgICAgICA1cHggIWRlZmF1bHQ7XG5cbiRwYWRkaW5nLWxhYmVsLXZlcnRpY2FsOiAgICAgICAgMnB4ICFkZWZhdWx0O1xuJHBhZGRpbmctbGFiZWwtaG9yaXpvbnRhbDogICAgIDEycHggIWRlZmF1bHQ7XG5cbiRtYXJnaW4tbGFyZ2UtdmVydGljYWw6ICAgICAgICAzMHB4ICFkZWZhdWx0O1xuJG1hcmdpbi1iYXNlLXZlcnRpY2FsOiAgICAgICAgIDE1cHggIWRlZmF1bHQ7XG5cbiRtYXJnaW4tYmFzZS1ob3Jpem9udGFsOiAgICAgICAxNXB4ICFkZWZhdWx0O1xuXG4kbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAgIDEwcHggICAgICAgICFkZWZhdWx0O1xuJGJvcmRlcjogICAgICAgICAgICAgICAgICAgICAgICAxcHggc29saWQgICAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWV4dHJhLXNtYWxsOiAgICAgMC4xMjVyZW0gICAgIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1zbWFsbDogICAgICAgICAgIDAuMTg3NXJlbSAgICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtbGFyZ2U6ICAgICAgICAgICAwLjI1cmVtICAgICAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWV4dHJlbWU6ICAgICAgICAgMC44NzVyZW0gICAgIWRlZmF1bHQ7XG5cbiRib3JkZXItcmFkaXVzLWxhcmdlLXRvcDogICAgICAkYm9yZGVyLXJhZGl1cy1sYXJnZSAkYm9yZGVyLXJhZGl1cy1sYXJnZSAwIDAgIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1sYXJnZS1ib3R0b206ICAgMCAwICRib3JkZXItcmFkaXVzLWxhcmdlICRib3JkZXItcmFkaXVzLWxhcmdlICFkZWZhdWx0O1xuXG4kYnRuLXJvdW5kLXJhZGl1czogICAgICAgICAgICAgMzBweCAgICAgICAgICFkZWZhdWx0O1xuXG4kaGVpZ2h0LWJhc2U6ICAgICAgICAgICAgICAgICAgNTVweCAgICAgICAgICFkZWZhdWx0O1xuXG4kYnRuLWljb24tc2l6ZTogICAgICAgICAgICAgICAgIDMuNXJlbSAgICAgICAhZGVmYXVsdDtcbiRidG4taWNvbi1zaXplLXJlZ3VsYXI6ICAgICAgICAgMi4zNzVyZW0gICAgICAhZGVmYXVsdDtcbiRidG4taWNvbi1mb250LXNpemUtcmVndWxhcjogICAgMC45Mzc1cmVtICAgICAhZGVmYXVsdDtcbiRidG4taWNvbi1mb250LXNpemUtc21hbGw6ICAgICAgMC42ODc1cmVtICAgICAgIWRlZmF1bHQ7XG4kYnRuLWljb24tc2l6ZS1zbWFsbDogICAgICAgICAgIDEuODc1cmVtICAgICAhZGVmYXVsdDtcbiRidG4taWNvbi1mb250LXNpemUtbGc6ICAgICAgICAgMS4zMjVyZW0gICAgICFkZWZhdWx0O1xuJGJ0bi1pY29uLXNpemUtbGc6ICAgICAgICAgICAgICAzLjZyZW0gICAgICAgICAhZGVmYXVsdDtcblxuJGZvbnQtc2l6ZS1oMTogICAgICAgICAgICAgICAgIDMuNWVtICAgICAgICAhZGVmYXVsdDsgLy8gfiA0OXB4XG4kZm9udC1zaXplLWgyOiAgICAgICAgICAgICAgICAgMi41ZW0gICAgICAgICFkZWZhdWx0OyAvLyB+IDM1cHhcbiRmb250LXNpemUtaDM6ICAgICAgICAgICAgICAgICAxLjgyNWVtICAgICAgIWRlZmF1bHQ7IC8vIH4gMjhweFxuJGZvbnQtc2l6ZS1oNDogICAgICAgICAgICAgICAgIDEuNWVtICAgICAgICAhZGVmYXVsdDsgLy8gfiAyNHB4XG4kZm9udC1zaXplLWg1OiAgICAgICAgICAgICAgICAgMS4zZW0gICAgICAgICFkZWZhdWx0OyAvLyB+IDIycHhcbiRmb250LXNpemUtaDY6ICAgICAgICAgICAgICAgICAuOWVtICAgICAgICAgIWRlZmF1bHQ7IC8vIH4gMTJweFxuXG4kZm9udC1wYXJhZ3JhcGg6ICAgICAgICAgICAgICAgMS4yZW0gICAgICAgICAgIWRlZmF1bHQ7XG4kZm9udC1zaXplLW5hdmJhcjogICAgICAgICAgICAgMWVtICAgICAgICAgICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1taW5pOiAgICAgICAgICAgICAgIDAuNzE0MmVtICAgICAhZGVmYXVsdDtcbiRmb250LXNpemUtc21hbGw6ICAgICAgICAgICAgICAwLjg1NzFlbSAgICAgIWRlZmF1bHQ7XG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgICAgICAgMTRweCAgICAgICAgICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1sYXJnZTogICAgICAgICAgICAgIDFlbSAgICAgICAgICAhZGVmYXVsdDtcbiRmb250LXNpemUtbGFyZ2UtbmF2YmFyOiAgICAgICAyMHB4ICAgICAgICAgIWRlZmF1bHQ7XG4kZm9udC1zaXplLWJsb2NrcXVvdGU6ICAgICAgICAgMS4xZW0gICAgICAgICFkZWZhdWx0OyAvLyB+IDE1cHhcblxuJGZvbnQtd2VpZ2h0LWxpZ2h0OiAgICAgICAgICAgICAzMDAgICAgICAgICAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ub3JtYWw6ICAgICAgICAgICAgNDAwICAgICAgICAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtc2VtaTogICAgICAgICAgICAgIDYwMCAgICAgICAgICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LWJvbGQ6ICAgICAgICAgICAgICA3MDAgICAgICAgICAhZGVmYXVsdDtcblxuJGxpbmUtaGVpZ2h0LWdlbmVyYWw6ICAgICAgICAxLjUgICAgICAgICAgICAhZGVmYXVsdDtcbiRsaW5lLWhlaWdodC1uYXYtbGluazogICAgICAgMS42MjVyZW0gICAgICAgIWRlZmF1bHQ7XG4kYnRuLWljb24tbGluZS1oZWlnaHQ6ICAgICAgIDIuNGVtICAgICAgICAgICFkZWZhdWx0O1xuJGxpbmUtaGVpZ2h0OiAgICAgICAgICAgICAgICAxLjM1ZW0gICAgICAgICAhZGVmYXVsdDtcbiRsaW5lLWhlaWdodC1sZzogICAgICAgICAgICAgNTRweCAgICAgICAgICAgIWRlZmF1bHQ7XG5cblxuJGJvcmRlci1yYWRpdXMtdG9wOiAgICAgICAgMTBweCAxMHB4IDAgMCAgICAgIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1ib3R0b206ICAgICAwIDAgMTBweCAxMHB4ICAgICAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLXNoYWRvdzogICAgICAgICAgMXB4IDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4kYm94LXNoYWRvdy1yYWlzZWQ6ICAgICAgICAwcHggMTBweCAyNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG5cbiRnZW5lcmFsLXRyYW5zaXRpb24tdGltZTogIDMwMG1zICAgICAgICAgICAgICFkZWZhdWx0O1xuXG4kc2xvdy10cmFuc2l0aW9uLXRpbWU6ICAgICAgICAgICAzNzBtcyAgICAgICAhZGVmYXVsdDtcbiRkcm9wZG93bi1jb29yZGluYXRlczogICAgICAyOXB4IC01MHB4ICAgICAgICFkZWZhdWx0O1xuXG4kZmFzdC10cmFuc2l0aW9uLXRpbWU6ICAgICAgICAgICAxNTBtcyAgICAgICAhZGVmYXVsdDtcbiRzZWxlY3QtY29vcmRpbmF0ZXM6ICAgICAgICAgNTAlIC00MHB4ICAgICAgICFkZWZhdWx0O1xuXG4kdHJhbnNpdGlvbi1saW5lYXI6ICAgICAgICAgbGluZWFyICAgICAgICAgICAhZGVmYXVsdDtcbiR0cmFuc2l0aW9uLWJlemllcjogICAgICAgICBjdWJpYy1iZXppZXIoMC4zNCwgMS42MSwgMC43LCAxKSAhZGVmYXVsdDtcbiR0cmFuc2l0aW9uLWVhc2U6ICAgICAgICAgICBlYXNlIDBzO1xuXG5cbi8vJG5hdmJhci1wYWRkaW5nLWE6ICAgICAgICAgICAgICAgOXB4IDEzcHg7XG4kbmF2YmFyLW1hcmdpbi1hOiAgICAgICAgICAgICAgICAxNXB4IDBweDtcblxuJHBhZGRpbmctc29jaWFsLWE6ICAgICAgICAgICAgICAgMTBweCA1cHg7XG5cbiRuYXZiYXItbWFyZ2luLWEtYnRuOiAgICAgICAgICAgIDE1cHggMHB4O1xuJG5hdmJhci1tYXJnaW4tYS1idG4tcm91bmQ6ICAgICAgMTZweCAwcHg7XG5cbiRuYXZiYXItcGFkZGluZy1hLWljb25zOiAgICAgICAgIDZweCAxNXB4O1xuJG5hdmJhci1tYXJnaW4tYS1pY29uczogICAgICAgICAgNnB4ICAzcHg7XG5cbiRuYXZiYXItcGFkZGluZy1iYXNlOiAgICAgICAgICAgIDAuNjI1cmVtO1xuLy8kbmF2YmFyLW1hcmdpbi1icmFuZDogICAgICAgICAgICAgNXB4ICAwcHg7XG5cbiRuYXZiYXItbWFyZ2luLWJyYW5kLWljb25zOiAgICAgIDEycHggYXV0bztcbiRuYXZiYXItbWFyZ2luLWJ0bjogICAgICAgICAgICAgIDE1cHggIDNweDtcblxuJGhlaWdodC1pY29uLXNtOlx0XHRcdFx0IDMycHg7XG4kd2lkdGgtaWNvbi1zbTpcdFx0XHRcdFx0IDMycHg7XG4kcGFkZGluZy1pY29uLXNtOlx0XHRcdCAgICAgNHB4O1xuJGJvcmRlci1yYWRpdXMtaWNvbi1zbTpcdFx0XHQgN3B4O1xuXG4kaGVpZ2h0LWljb24tbWVzc2FnZTpcdFx0XHQgNDBweDtcbiR3aWR0aC1pY29uLW1lc3NhZ2U6XHRcdFx0IDQwcHg7XG5cbiRoZWlnaHQtaWNvbi1tZXNzYWdlLXNtOiBcdFx0IDIwcHg7XG4kd2lkdGgtaWNvbi1tZXNzYWdlLXNtOlx0XHRcdCAyMHB4O1xuXG4kd2hpdGUtbmF2YmFyOiAgICAgICAgICAgICAgICAgIHJnYmEoI0ZGRkZGRiwgLjk2KTtcbiRwcmltYXJ5LW5hdmJhcjogICAgICAgICAgICAgICAgcmdiYSgjMzRBQ0RDLCAuOTgpO1xuJGluZm8tbmF2YmFyOiAgICAgICAgICAgICAgICAgICByZ2JhKCM1QkNBRkYsIC45OCk7XG4kc3VjY2Vzcy1uYXZiYXI6ICAgICAgICAgICAgICAgIHJnYmEoIzRDRDk2NCwgLjk4KTtcbiR3YXJuaW5nLW5hdmJhcjogICAgICAgICAgICAgICAgcmdiYSgjRkY5NTAwLCAuOTgpO1xuJGRhbmdlci1uYXZiYXI6ICAgICAgICAgICAgICAgICByZ2JhKCNGRjRDNDAsIC45OCk7XG5cbiR0b3BiYXIteDogICAgICAgICAgICAgdG9wYmFyLXggIWRlZmF1bHQ7XG4kdG9wYmFyLWJhY2s6ICAgICAgICAgIHRvcGJhci1iYWNrICFkZWZhdWx0O1xuJGJvdHRvbWJhci14OiAgICAgICAgICBib3R0b21iYXIteCAhZGVmYXVsdDtcbiRib3R0b21iYXItYmFjazogICAgICAgYm90dG9tYmFyLWJhY2sgIWRlZmF1bHQ7XG5cbi8vTnVjbGVvIEljb25zXG5cbiRuYy1mb250LXBhdGg6ICAgICAgICAnLi4vZm9udHMnICFkZWZhdWx0O1xuJG5jLWZvbnQtc2l6ZS1iYXNlOiAgIDE0cHggIWRlZmF1bHQ7XG4kbmMtY3NzLXByZWZpeDogICAgICAgbm93LXVpICFkZWZhdWx0O1xuJG5jLWJhY2tncm91bmQtY29sb3I6ICAgICAjZWVlICFkZWZhdWx0O1xuJG5jLWxpLXdpZHRoOiAgICAgICAgICgzMGVtIC8gMTQpICFkZWZhdWx0O1xuJG5jLXBhZGRpbmctd2lkdGg6ICAgICgxZW0vMykgIWRlZmF1bHQ7XG5cbi8vIFNvY2lhbCBpY29ucyBjb2xvclxuJHNvY2lhbC10d2l0dGVyOiAgICAgICAgICAgICAgICAgICAjNTVhY2VlICFkZWZhdWx0O1xuJHNvY2lhbC10d2l0dGVyLXN0YXRlLWNvbG9yOiAgICAgICBsaWdodGVuKCM1NWFjZWUsIDYlKSAhZGVmYXVsdDtcblxuJHNvY2lhbC1mYWNlYm9vazogXHRcdFx0ICAgICAgICMzYjU5OTggIWRlZmF1bHQ7XG4kc29jaWFsLWZhY2Vib29rLXN0YXRlLWNvbG9yOiAgICAgIGxpZ2h0ZW4oIzNiNTk5OCwgNiUpICFkZWZhdWx0O1xuXG4kc29jaWFsLWdvb2dsZTogXHRcdFx0ICAgICAgICNkZDRiMzkgIWRlZmF1bHQ7XG4kc29jaWFsLWdvb2dsZS1zdGF0ZS1jb2xvcjogICAgICAgIGxpZ2h0ZW4oI2RkNGIzOSwgNiUpICFkZWZhdWx0O1xuXG4kc29jaWFsLWxpbmtlZGluOiBcdFx0XHQgICAgICAgIzAwNzdCNSAhZGVmYXVsdDtcbiRzb2NpYWwtbGlua2VkaW4tc3RhdGUtY29sb3I6ICAgICAgbGlnaHRlbigjMDA3N0I1LCA2JSkgIWRlZmF1bHQ7XG5cbiRzb2NpYWwtcGludGVyZXN0OiBcdFx0XHQgICAgICAgI2NjMjEyNyAhZGVmYXVsdDtcbiRzb2NpYWwtcGludGVyZXN0LXN0YXRlLWNvbG9yOiAgICAgbGlnaHRlbigjY2MyMTI3LCA2JSkgIWRlZmF1bHQ7XG5cbiRzb2NpYWwtZHJpYmJibGU6IFx0XHQgICAgICAgICAgICNlYTRjODkgIWRlZmF1bHQ7XG4kc29jaWFsLWRyaWJiYmxlLXN0YXRlLWNvbG9yOiAgICAgIGxpZ2h0ZW4oI2VhNGM4OSwgNiUpICFkZWZhdWx0O1xuXG4kc29jaWFsLWdpdGh1YjogXHRcdCAgICAgIFx0ICAgIzMzMzMzMyAhZGVmYXVsdDtcbiRzb2NpYWwtZ2l0aHViLXN0YXRlLWNvbG9yOiAgICAgICAgbGlnaHRlbigjMzMzMzMzLCA2JSkgIWRlZmF1bHQ7XG5cbiRzb2NpYWwteW91dHViZTogXHRcdCAgICBcdCAgICNlNTJkMjcgIWRlZmF1bHQ7XG4kc29jaWFsLXlvdXR1YmUtc3RhdGUtY29sb3I6ICAgICAgIGxpZ2h0ZW4oI2U1MmQyNywgNiUpICFkZWZhdWx0O1xuXG4kc29jaWFsLWluc3RhZ3JhbTogXHRcdCAgICAgICAgICAgIzEyNTY4OCAhZGVmYXVsdDtcbiRzb2NpYWwtaW5zdGFncmFtLXN0YXRlLWNvbG9yOiAgICAgbGlnaHRlbigjMTI1Njg4LCA2JSkgIWRlZmF1bHQ7XG5cbiRzb2NpYWwtcmVkZGl0OiBcdFx0ICBcdCAgICAgICAjZmY0NTAwICFkZWZhdWx0O1xuJHNvY2lhbC1yZWRkaXQtc3RhdGUtY29sb3I6ICAgICAgICBsaWdodGVuKCNmZjQ1MDAsIDYlKSAhZGVmYXVsdDtcblxuJHNvY2lhbC10dW1ibHI6IFx0XHRcdCAgICAgICAjMzU0NjVjICFkZWZhdWx0O1xuJHNvY2lhbC10dW1ibHItc3RhdGUtY29sb3I6ICAgICAgICBsaWdodGVuKCMzNTQ2NWMsIDYlKSAhZGVmYXVsdDtcblxuJHNvY2lhbC1iZWhhbmNlOiBcdFx0XHQgICAgICAgIzE3NjlmZiAhZGVmYXVsdDtcbiRzb2NpYWwtYmVoYW5jZS1zdGF0ZS1jb2xvcjogICAgICAgbGlnaHRlbigjMTc2OWZmLCA2JSkgIWRlZmF1bHQ7XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGVzXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9hc3NldHMvc2Fzcy9ub3ctdWkta2l0L3ZhcmlhYmxlc1wiO1xyXG5cclxuLm1lbnUtb3BlbiB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIzMHB4LCAwKTtcclxufVxyXG5cclxuLyogTGlua3NcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuYSB7XHJcbiAgY29sb3I6ICRib25lLXdoaXRlO1xyXG59XHJcblxyXG5uYXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gIC5hY3RpdmUtbGluayB7XHJcbiAgICBjb2xvcjogIzFFQUVEQjtcclxuICB9XHJcbn1cclxuXHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBmb250LXNpemU6IDEuMjVlbTtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG59XHJcbi5tZW51LXRvZ2dsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHBhZGRpbmctdG9wOiAxLjVlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAyZW07XHJcbiAgdG9wOiAxZW07XHJcbiAgcmlnaHQ6IC41ZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5oYW1idXJnZXIsXHJcbi5oYW1idXJnZXI6OmJlZm9yZSxcclxuLmhhbWJ1cmdlcjo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQ6ICRib25lLXdoaXRlO1xyXG4gIGhlaWdodDogM3B4O1xyXG4gIHdpZHRoOiAyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDM1MG1zO1xyXG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAzNTBtcztcclxufVxyXG4uaGFtYnVyZ2VyOjpiZWZvcmUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03cHgpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtN3B4KTtcclxufVxyXG4uaGFtYnVyZ2VyOjphZnRlciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcclxufVxyXG4ub3BlbiAuaGFtYnVyZ2VyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuLm9wZW4gLmhhbWJ1cmdlcjo6YmVmb3JlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5vcGVuIC5oYW1idXJnZXI6OmFmdGVyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KSByb3RhdGUoLTkwZGVnKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCkgcm90YXRlKC05MGRlZyk7XHJcbn1cclxuLnNpdGUtbmF2IHtcclxuICAuY29sLW1kLTEyIHtcclxuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4uc2l0ZS1uYXYtLW9wZW4ge1xyXG4gIC13ZWJraXQtY2xpcC1wYXRoOiBjaXJjbGUoMTUwJSBhdCB0b3AgcmlnaHQpO1xyXG4gIGNsaXAtcGF0aDogY2lyY2xlKDE1MCUgYXQgdG9wIHJpZ2h0KTtcclxufVxyXG5uYXYge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAwJTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiA1O1xyXG4gIHVsIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgbGkge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICBhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMS41ZW0gNGVtIDEuNWVtIDNlbTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgLmRlc2t0b3Age1xyXG4gICAgYSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS40ZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5kcm9wRG93bi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5kcm9wRG93bi1jb250ZW50LW1vYmlsZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLmRyb3BEb3duLWNvbnRlbnQtbW9iaWxlLXN1Yk1lbnUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbm5hdiB1bC5vcGVuaW5nIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnNpdGUtbmF2LS1pY29uIHtcclxuICBmb250LXNpemU6IDEuNGVtO1xyXG4gIG1hcmdpbi1yaWdodDogMWVtO1xyXG4gIHdpZHRoOiAxLjFlbTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNCk7XHJcbn1cclxuXHJcbi8qIEhlYWRlciBTdHlsaW5nXHJcbiAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLmhlYWRlciB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KSB7XHJcbiAgICBwYWRkaW5nOiA5cmVtIDAgOHJlbTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XHJcbiAgLyogTmF2aWdhdGlvbiBTdHlsaW5nXHJcbiAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuICBuYXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB1bCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICB9XHJcbiAgICBsaSB7XHJcbiAgICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBhIHtcclxuICAgICAgcGFkZGluZzogMS41ZW0gMS4zZW0gMS41ZW0gMS4zZW07XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogIzFFQUVEQjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxvZ28ge1xyXG4gICAgICBmbGV4OiAxIDAgMjAwcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxuICAgIC5kZXNrdG9wIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IC4yNWVtO1xyXG4gICAgfVxyXG4gICAgbGkuZHJvcERvd24ge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuZHJvcERvd24tY29udGVudCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbWluLXdpZHRoOiAyNTBweDtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAkYm9uZS13aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kcm9wRG93bi1jb250ZW50IGE6aG92ZXIge1xyXG4gICAgICBjb2xvcjogIzBGQTBDRTtcclxuICAgIH1cclxuXHJcbiAgICAuZHJvcERvd246aG92ZXIgLmRyb3BEb3duLWNvbnRlbnQge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5kcm9wRG93bi1jb250ZW50LW1vYmlsZSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWVudS10b2dnbGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIG5hdiB1bCB1bCBsaSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWluLXdpZHRoOiAxNjBweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG5cclxuICAvKiBGaXJzdCBUaWVyIERyb3Bkb3duICovXHJcbiAgbmF2IHVsIHVsIGxpIGEge1xyXG4gICAgbWluLXdpZHRoOiAxNzVweDtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVlbTtcclxuICB9XHJcblxyXG4gIG5hdiBhOmFjdGl2ZSxcclxuICBuYXYgYTpmb2N1cyB7XHJcbiAgICBjb2xvcjogIzFFQUVEQjtcclxuICB9XHJcblxyXG4gIC5sb2dvIHtcclxuICAgIGZsZXg6IDAgMCAyMDBweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICB9XHJcblxyXG4gIC5zaXRlLW5hdiBhOmhvdmVyLFxyXG4gIC5zaXRlLW5hdiBhOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAuc2l0ZS1uYXYtLWljb24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn0iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4ubm9MaW5lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG5cbi8qICAgICBicmFuZCBDb2xvcnMgICAgICAgICAgICAgICovXG4vKiAgICAgIGxpZ2h0IGNvbG9ycyAgICAgICAgICovXG4ubWVudS1vcGVuIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIzMHB4LCAwKTsgfVxuXG4vKiBMaW5rc1xyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuYSB7XG4gIGNvbG9yOiAjRkZGOyB9XG5cbm5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzJjMmM7IH1cbiAgbmF2IC5hY3RpdmUtbGluayB7XG4gICAgY29sb3I6ICMxRUFFREI7IH1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cblxuLmxvZ28ge1xuICBmb250LXNpemU6IDEuMjVlbTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogM3B4OyB9XG5cbi5tZW51LXRvZ2dsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZy10b3A6IDEuNWVtO1xuICBwYWRkaW5nLXJpZ2h0OiAyZW07XG4gIHRvcDogMWVtO1xuICByaWdodDogLjVlbTtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5oYW1idXJnZXIsXG4uaGFtYnVyZ2VyOjpiZWZvcmUsXG4uaGFtYnVyZ2VyOjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgaGVpZ2h0OiAzcHg7XG4gIHdpZHRoOiAyZW07XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMzUwbXM7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAzNTBtczsgfVxuXG4uaGFtYnVyZ2VyOjpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtN3B4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03cHgpOyB9XG5cbi5oYW1idXJnZXI6OmFmdGVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7IH1cblxuLm9wZW4gLmhhbWJ1cmdlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7IH1cblxuLm9wZW4gLmhhbWJ1cmdlcjo6YmVmb3JlIHtcbiAgZGlzcGxheTogbm9uZTsgfVxuXG4ub3BlbiAuaGFtYnVyZ2VyOjphZnRlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpIHJvdGF0ZSgtOTBkZWcpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCkgcm90YXRlKC05MGRlZyk7IH1cblxuLnNpdGUtbmF2IC5jb2wtbWQtMTIge1xuICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50OyB9XG5cbi5zaXRlLW5hdi0tb3BlbiB7XG4gIC13ZWJraXQtY2xpcC1wYXRoOiBjaXJjbGUoMTUwJSBhdCB0b3AgcmlnaHQpO1xuICBjbGlwLXBhdGg6IGNpcmNsZSgxNTAlIGF0IHRvcCByaWdodCk7IH1cblxubmF2IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA1OyB9XG4gIG5hdiB1bCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDsgfVxuICBuYXYgbGkge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMDsgfVxuICAgIG5hdiBsaTpsYXN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7IH1cbiAgbmF2IGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDEuNWVtIDRlbSAxLjVlbSAzZW07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG4gIG5hdiAuZGVza3RvcCBhIHtcbiAgICBmb250LXNpemU6IDEuMjVlbTtcbiAgICBsaW5lLWhlaWdodDogMS40ZW07IH1cbiAgbmF2IC5kcm9wRG93bi1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBub25lOyB9XG4gIG5hdiAuZHJvcERvd24tY29udGVudC1tb2JpbGUge1xuICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gIG5hdiAuZHJvcERvd24tY29udGVudC1tb2JpbGUtc3ViTWVudSB7XG4gICAgZGlzcGxheTogbm9uZTsgfVxuXG5uYXYgdWwub3BlbmluZyB7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG5cbi5zaXRlLW5hdi0taWNvbiB7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIG1hcmdpbi1yaWdodDogMWVtO1xuICB3aWR0aDogMS4xZW07XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpOyB9XG5cbi8qIEhlYWRlciBTdHlsaW5nXHJcbiAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbkBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge1xuICAuaGVhZGVyIHtcbiAgICBwYWRkaW5nOiA5cmVtIDAgOHJlbTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTsgfSB9XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgLyogTmF2aWdhdGlvbiBTdHlsaW5nXHJcbiAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbiAgbmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAgIG5hdiB1bCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IH1cbiAgICBuYXYgbGkge1xuICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICBib3JkZXI6IG5vbmU7IH1cbiAgICBuYXYgYSB7XG4gICAgICBwYWRkaW5nOiAxLjVlbSAxLjNlbSAxLjVlbSAxLjNlbTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGJvcmRlcjogbm9uZTsgfVxuICAgICAgbmF2IGE6aG92ZXIge1xuICAgICAgICBjb2xvcjogIzFFQUVEQjsgfVxuICAgIG5hdiAubG9nbyB7XG4gICAgICBmbGV4OiAxIDAgMjAwcHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7IH1cbiAgICBuYXYgLmRlc2t0b3Age1xuICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAuMjVlbTsgfVxuICAgIG5hdiBsaS5kcm9wRG93biB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgICBuYXYgLmRyb3BEb3duLWNvbnRlbnQge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIG1pbi13aWR0aDogMjUwcHg7XG4gICAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgIHotaW5kZXg6IDE7IH1cbiAgICAgIG5hdiAuZHJvcERvd24tY29udGVudCBhIHtcbiAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gICAgbmF2IC5kcm9wRG93bi1jb250ZW50IGE6aG92ZXIge1xuICAgICAgY29sb3I6ICMwRkEwQ0U7IH1cbiAgICBuYXYgLmRyb3BEb3duOmhvdmVyIC5kcm9wRG93bi1jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gICAgbmF2IC5kcm9wRG93bi1jb250ZW50LW1vYmlsZSB7XG4gICAgICBkaXNwbGF5OiBub25lOyB9XG4gIC5tZW51LXRvZ2dsZSB7XG4gICAgZGlzcGxheTogbm9uZTsgfVxuICBuYXYgdWwgdWwgbGkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1pbi13aWR0aDogMTYwcHg7XG4gICAgei1pbmRleDogMTsgfVxuICAvKiBGaXJzdCBUaWVyIERyb3Bkb3duICovXG4gIG5hdiB1bCB1bCBsaSBhIHtcbiAgICBtaW4td2lkdGg6IDE3NXB4O1xuICAgIGZsb2F0OiBub25lO1xuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZy1sZWZ0OiA1ZW07IH1cbiAgbmF2IGE6YWN0aXZlLFxuICBuYXYgYTpmb2N1cyB7XG4gICAgY29sb3I6ICMxRUFFREI7IH1cbiAgLmxvZ28ge1xuICAgIGZsZXg6IDAgMCAyMDBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4OyB9XG4gIC5zaXRlLW5hdiBhOmhvdmVyLFxuICAuc2l0ZS1uYXYgYTpmb2N1cyB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cbiAgLnNpdGUtbmF2LS1pY29uIHtcbiAgICBkaXNwbGF5OiBub25lOyB9IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/common/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/common/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
        // Navigation
        jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__('.menu-toggle').click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_2__('ul').toggleClass('opening');
                jquery__WEBPACK_IMPORTED_MODULE_2__(this).toggleClass('open');
            });
        });
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/common/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/common/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/common/image-upload/image-upload.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/common/image-upload/image-upload.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fileinput text-center\" #input>\n    <div [ngClass]=\"{'img-circle':isRound}\" class=\"thumbnail img-raised\">\n        <img src={{state.imagePreviewUrl}} alt=\"...\" />\n    </div>\n    <div>\n        <button class=\"btn btn-raised btn-round btn-default btn-file\" (click)=\"handleClick()\" *ngIf=\"!this.state.file\">Select image</button>\n        <button class=\"btn btn-raised btn-round btn-default btn-file\" (click)=\"handleClick()\" *ngIf=\"this.state.file\">Change</button>\n        <button class=\"btn btn-danger btn-round fileinput-exists\" (click)=\"handleRemove()\" *ngIf=\"this.state.file\"><i class=\"now-ui-icons ui-1_simple-remove\"></i> Remove</button>\n    </div>\n    <input type=\"file\"/>\n</div>\n"

/***/ }),

/***/ "./src/app/components/common/image-upload/image-upload.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/components/common/image-upload/image-upload.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fileinput input {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vaW1hZ2UtdXBsb2FkL0M6XFxVc2Vyc1xcam9obm1cXERvY3VtZW50c1xcR2l0SHViXFxTaW1wbGVzdC1Db29rYm9vay1Bbmd1bGFyXFxzaW1wbGVzdC1jb29rYm9vay9zcmNcXGFwcFxcY29tcG9uZW50c1xcY29tbW9uXFxpbWFnZS11cGxvYWRcXGltYWdlLXVwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL2ltYWdlLXVwbG9hZC9pbWFnZS11cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsZWlucHV0IGlucHV0e1xuICBkaXNwbGF5OiBub25lO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/common/image-upload/image-upload.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/common/image-upload/image-upload.component.ts ***!
  \**************************************************************************/
/*! exports provided: ImageUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUploadComponent", function() { return ImageUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ImageUploadComponent = /** @class */ (function () {
    function ImageUploadComponent() {
        this.isRound = false;
        this.state = {};
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }
    ImageUploadComponent.prototype.ngOnInit = function () {
        this.state = {
            file: null,
            imagePreviewUrl: this.image !== undefined ? this.image : (this.isRound ? 'assets/img/placeholder.jpg' : 'assets/img/image_placeholder.jpg')
        };
    };
    ImageUploadComponent.prototype.ngAfterViewInit = function () {
        this.input.nativeElement.children[2].onchange = this.handleImageChange;
        ;
    };
    ImageUploadComponent.prototype.handleImageChange = function (e) {
        var _this = this;
        e.preventDefault();
        var reader = new FileReader();
        var file = e.target.files[0];
        reader.onloadend = function () {
            _this.state.file = file;
            _this.state.imagePreviewUrl = reader.result;
            // this.state.imagePreviewUrl1 = reader.result;
        };
        reader.readAsDataURL(file);
    };
    ImageUploadComponent.prototype.handleSubmit = function (e) {
        e.preventDefault();
        // this.state.file is the file/image uploaded
        // in this function you can save the image (this.state.file) on form submit
        // you have to call it yourself
    };
    ImageUploadComponent.prototype.handleClick = function () {
        this.input.nativeElement.children[2].click();
    };
    ImageUploadComponent.prototype.handleRemove = function () {
        this.state.file = null;
        this.state.imagePreviewUrl = this.image !== undefined ? this.image : (this.isRound ? 'assets/img/placeholder.jpg' : 'assets/img/image_placeholder.jpg');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ImageUploadComponent.prototype, "isRound", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ImageUploadComponent.prototype, "image", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ImageUploadComponent.prototype, "input", void 0);
    ImageUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image-upload',
            template: __webpack_require__(/*! ./image-upload.component.html */ "./src/app/components/common/image-upload/image-upload.component.html"),
            styles: [__webpack_require__(/*! ./image-upload.component.scss */ "./src/app/components/common/image-upload/image-upload.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ImageUploadComponent);
    return ImageUploadComponent;
}());



/***/ }),

/***/ "./src/app/components/common/image-upload/image-upload.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/common/image-upload/image-upload.module.ts ***!
  \***********************************************************************/
/*! exports provided: ImageUploadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUploadModule", function() { return ImageUploadModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _image_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image-upload.component */ "./src/app/components/common/image-upload/image-upload.component.ts");




var ImageUploadModule = /** @class */ (function () {
    function ImageUploadModule() {
    }
    ImageUploadModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            declarations: [_image_upload_component__WEBPACK_IMPORTED_MODULE_3__["ImageUploadComponent"]],
            exports: [_image_upload_component__WEBPACK_IMPORTED_MODULE_3__["ImageUploadComponent"]]
        })
    ], ImageUploadModule);
    return ImageUploadModule;
}());



/***/ }),

/***/ "./src/app/components/components.component.html":
/*!******************************************************!*\
  !*** ./src/app/components/components.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"wrapper\">\n  <div class=\"page-header clear-filter\" filter-color=\"orange\">\n      <div class=\"page-header-image\" data-parallax=\"true\" style=\"background-image: ;\">\n      </div>\n      <div class=\"rellax-header rellax-header-sky\" data-rellax-speed=\"-8\">\n          <div class=\"page-header-image\" style=\"background-image: url('assets/img/presentation-page/nuk-pro-back-sky.jpg')\">\n          </div>\n      </div>\n      <div class=\"rellax-header rellax-header-buildings\" data-rellax-speed=\"0\">\n          <div class=\"page-header-image page-header-city\" style=\"background-image: url('assets/img/presentation-page/nuk-pro-buildings.png')\">\n          </div>\n      </div>\n      <div class=\"rellax-text-container\">\n          <h1 class=\"h1-seo rellax-text\" data-rellax-speed=\"-2\">Components</h1>\n      </div>\n      <h3 class=\"h3-description rellax-text\" data-rellax-speed=\"-1\">A beautiful premium Bootstrap 4 UI Kit.</h3>\n      <h6 class=\"category category-absolute rellax-text\" data-rellax-speed=\"-2\">Designed by\n          <a href=\"https://invisionapp.com/\" target=\"_blank\">\n              <img src=\"assets/img/invision-white-slim.png\" class=\"invision-logo\" />\n          </a>. Coded by\n          <a href=\"https://www.creative-tim.com\" target=\"_blank\">\n              <img src=\"assets/img/creative-tim-white-slim2.png\" class=\"creative-tim-logo\" />\n          </a>.\n      </h6>\n  </div>\n  <div class=\"main\">\n    <div class=\"section section-images\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"hero-images-container\">\n                        <img src=\"assets/img/hero-image-1.png\" alt=\"\">\n                    </div>\n                    <div class=\"hero-images-container-1\">\n                        <img src=\"assets/img/hero-image-2.png\" alt=\"\">\n                    </div>\n                    <div class=\"hero-images-container-2\">\n                        <img src=\"assets/img/hero-image-3.png\" alt=\"\">\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n      <app-basicelements></app-basicelements>\n      <app-navigation></app-navigation>\n      <div class=\"section section-tabs\">\n          <div class=\"container\">\n              <div class=\"title\">\n                  <h4>Navigation Tabs</h4>\n              </div>\n              <div class=\"row\">\n                  <div class=\"col-md-10 ml-auto col-xl-6 mr-auto\">\n                      <p class=\"category\">Tabs with Icons on Card</p>\n                       Nav tabs -->\n                      <!-- <div class=\"card\">\n                        <div class=\"nav-tabs-navigation\">\n                            <div class=\"nav-tabs-wrapper\">\n                                <ngb-tabset [justify]=\"'center'\" class=\"text-center\">\n                                    <ngb-tab>\n                                      <ng-template ngbTabTitle>\n                                        <i class=\"now-ui-icons objects_umbrella-13\"></i> Home\n                                      </ng-template>\n                                        <ng-template ngbTabContent>\n                                          <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\n                                        </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab>\n                                      <ng-template ngbTabTitle>\n                                        <i class=\"now-ui-icons shopping_cart-simple\"></i> Profile\n                                      </ng-template>\n                                        <ng-template ngbTabContent>\n                                            <p> I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. </p>\n                                        </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab>\n                                      <ng-template ngbTabTitle>\n                                          <i class=\"now-ui-icons shopping_shop\"></i> Messages\n                                      </ng-template>\n                                        <ng-template ngbTabContent>\n                                            <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\n                                        </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab>\n                                      <ng-template ngbTabTitle>\n                                        <i class=\"now-ui-icons ui-2_settings-90\"></i> Settings\n                                      </ng-template>\n                                        <ng-template ngbTabContent>\n                                          <p>\n                                              \"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\"\n                                          </p>\n                                        </ng-template>\n                                    </ngb-tab>\n                                </ngb-tabset>\n                            </div>\n                        </div>\n                      </div>\n                  </div>\n                  <div class=\"col-md-10 ml-auto col-xl-6 mr-auto\">\n                      <p class=\"category\">Tabs with Background on Card</p>\n                      Tabs with Background on Card\n                       <div class=\"card\">\n                        <div class=\"nav-tabs-navigation\" data-tabs-color=\"orange\">\n                            <div class=\"nav-tabs-wrapper\">\n                                <ngb-tabset [justify]=\"'center'\" class=\"text-center\" >\n                                    <ngb-tab title=\"Home\">\n                                      <ng-template ngbTabContent>\n                                        <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\n                                      </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab title=\"Profile\">\n                                      <ng-template ngbTabContent>\n                                          <p> I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. </p>\n                                      </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab title=\"Messages\">\n                                      <ng-template ngbTabContent>\n                                          <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\n                                      </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab title=\"Settings\">\n                                        <ng-template ngbTabContent>\n                                          <p>\n                                              \"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\"\n                                          </p>\n                                        </ng-template>\n                                    </ngb-tab>\n                                </ngb-tabset>\n                            </div>\n                        </div>\n                      </div> -->\n                      <!-- End Tabs on plain Card -->\n                  <!-- </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"section section-pills\">\n          <div class=\"container\">\n              <div id=\"navigation-pills\">\n                  <div class=\"title\">\n                      <h4>Navigation Pills</h4>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"col-md-6\">\n                          <p class=\"category\">Horizontal tabs</p>\n                          <ngb-tabset type=\"pills\" class=\"nav nav-pills nav-pills-primary justify-content-start tab-space\">\n                              <ngb-tab title=\"Profile\">\n                                  <ng-template ngbTabContent>\n                                    Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n                                    <br />\n                                    <br /> Dramatically visualize customer directed convergence without revolutionary ROI.\n                                  </ng-template>\n                              </ngb-tab>\n                              <ngb-tab title=\"Settings\">\n                                  <ng-template ngbTabContent>\n                                    Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.\n                                    <br />\n                                    <br />Dramatically maintain clicks-and-mortar solutions without functional solutions.\n                                  </ng-template>\n                              </ngb-tab>\n                              <ngb-tab title=\"Options\">\n                                  <ng-template ngbTabContent>\n                                    Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.\n                                    <br />\n                                    <br />Dynamically innovate resource-leveling customer service for state of the art customer service.\n                                  </ng-template>\n                              </ngb-tab>\n                          </ngb-tabset>\n                      </div>\n                      <div class=\"col-md-6\">\n                          <p class=\"category\">Vertical tabs</p>\n                          <div class=\"nav-pills-navigation\">\n                              <div class=\"nav-pills-wrapper\">\n                                <ngb-tabset type=\"pills\" class=\"nav nav-pills nav-pills-primary vertical-pills\" [orientation]=\"'vertical'\">\n                                    <ngb-tab title=\"Profile\">\n                                        <ng-template ngbTabContent class=\"tab-space\">\n                                          Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n                                          <br />\n                                          <br /> Dramatically visualize customer directed convergence without revolutionary ROI.\n                                        </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab title=\"Settings\">\n                                        <ng-template ngbTabContent>\n                                          Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.\n                                          <br />\n                                          <br />Dramatically maintain clicks-and-mortar solutions without functional solutions.\n                                        </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab title=\"Options\">\n                                        <ng-template ngbTabContent>\n                                          Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.\n                                          <br />\n                                          <br />Dynamically innovate resource-leveling customer service for state of the art customer service.\n                                        </ng-template>\n                                    </ngb-tab>\n                                </ngb-tabset>\n                              </div>\n                            </div>\n                      </div>\n                  </div>\n                  <div class=\"title\">\n                      <p class=\"category\">With Icons</p>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"col-md-6\"> -->\n                          <!--\n          color-classes: \"nav-pills-primary\", \"nav-pills-info\", \"nav-pills-success\", \"nav-pills-warning\",\"nav-pills-danger\"\n        -->\n                        <!-- <ngb-tabset type=\"pills\" class=\"nav nav-pills nav-pills-primary justify-content-start tab-space nav-pills-icons\">\n                            <ngb-tab>\n                              <ng-template ngbTabTitle>\n                                <i class=\"now-ui-icons objects_umbrella-13\"></i> Home\n                              </ng-template>\n                                <ng-template ngbTabContent>\n                                  Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n                                  <br />\n                                  <br /> Dramatically visualize customer directed convergence without revolutionary ROI.\n                                </ng-template>\n                            </ngb-tab>\n                            <ngb-tab>\n                              <ng-template ngbTabTitle>\n                                <i class=\"now-ui-icons shopping_shop\"></i> Messages\n                              </ng-template>\n                                <ng-template ngbTabContent>\n                                  Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.\n                                  <br />\n                                  <br />Dramatically maintain clicks-and-mortar solutions without functional solutions.\n                                </ng-template>\n                            </ngb-tab>\n                            <ngb-tab>\n                              <ng-template ngbTabTitle>\n                                <i class=\"now-ui-icons ui-2_settings-90\"></i> Settings\n                              </ng-template>\n                                <ng-template ngbTabContent>\n                                  Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.\n                                  <br />\n                                  <br />Dynamically innovate resource-leveling customer service for state of the art customer service.\n                                </ng-template>\n                            </ngb-tab>\n                        </ngb-tabset>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <div class=\"nav-pills-navigation\">\n                            <div class=\"nav-pills-wrapper\">\n                              <ngb-tabset type=\"pills\" class=\"nav nav-pills nav-pills-primary vertical-pills nav-pills-icons\" [orientation]=\"'vertical'\">\n                                <ngb-tab>\n                                  <ng-template ngbTabTitle>\n                                    <i class=\"now-ui-icons objects_umbrella-13\"></i> Home\n                                  </ng-template>\n                                    <ng-template ngbTabContent>\n                                      Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n                                      <br />\n                                      <br /> Dramatically visualize customer directed convergence without revolutionary ROI.\n                                    </ng-template>\n                                </ngb-tab>\n                                <ngb-tab>\n                                  <ng-template ngbTabTitle>\n                                    <i class=\"now-ui-icons ui-2_settings-90\"></i> Settings\n                                  </ng-template>\n                                  <ng-template ngbTabContent>\n                                    Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.\n                                    <br />\n                                    <br />Dramatically maintain clicks-and-mortar solutions without functional solutions.\n                                  </ng-template>\n                                </ngb-tab>\n                              </ngb-tabset>\n                            </div>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"title\">\n                      <p class=\"category\">Just Icons</p>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <div class=\"nav-pills-navigation\">\n                            <div class=\"nav-pills-wrapper\">\n                              <ngb-tabset type=\"pills\" class=\"nav nav-pills nav-pills-info vertical-pills nav-pills-just-icons\" [orientation]=\"'vertical'\">\n                                <ngb-tab>\n                                  <ng-template ngbTabTitle>\n                                    <i class=\"now-ui-icons objects_umbrella-13\"></i>\n                                  </ng-template>\n                                    <ng-template ngbTabContent>\n                                      Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n                                      <br />\n                                      <br /> Dramatically visualize customer directed convergence without revolutionary ROI.\n                                    </ng-template>\n                                </ngb-tab>\n                                <ngb-tab>\n                                  <ng-template ngbTabTitle>\n                                    <i class=\"now-ui-icons ui-2_settings-90\"></i>\n                                  </ng-template>\n                                  <ng-template ngbTabContent>\n                                    Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.\n                                    <br />\n                                    <br />Dramatically maintain clicks-and-mortar solutions without functional solutions.\n                                  </ng-template>\n                                </ngb-tab>\n                              </ngb-tabset>\n                            </div>\n                          </div>\n                      </div>\n                      <div class=\"col-md-6\"> -->\n                          <!--\n          color-classes: \"nav-pills-primary\", \"nav-pills-info\", \"nav-pills-success\", \"nav-pills-warning\",\"nav-pills-danger\"\n        -->\n                      <!-- <ngb-tabset type=\"pills\" class=\"nav nav-pills nav-pills-info justify-content-start tab-space nav-pills-just-icons\">\n                          <ngb-tab>\n                            <ng-template ngbTabTitle>\n                              <i class=\"now-ui-icons objects_umbrella-13\"></i>\n                            </ng-template>\n                              <ng-template ngbTabContent>\n                                Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n                                <br />\n                                <br /> Dramatically visualize customer directed convergence without revolutionary ROI.\n                              </ng-template>\n                          </ngb-tab>\n                          <ngb-tab>\n                            <ng-template ngbTabTitle>\n                              <i class=\"now-ui-icons shopping_shop\"></i>\n                            </ng-template>\n                              <ng-template ngbTabContent>\n                                Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.\n                                <br />\n                                <br />Dramatically maintain clicks-and-mortar solutions without functional solutions.\n                              </ng-template>\n                          </ngb-tab>\n                          <ngb-tab>\n                            <ng-template ngbTabTitle>\n                              <i class=\"now-ui-icons ui-2_settings-90\"></i>\n                            </ng-template>\n                              <ng-template ngbTabContent>\n                                Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.\n                                <br />\n                                <br />Dynamically innovate resource-leveling customer service for state of the art customer service.\n                              </ng-template>\n                          </ngb-tab>\n                      </ngb-tabset>\n                      </div>\n                  </div> -->\n                  <!--                 end nav pills -->\n              <!-- </div>\n          </div>\n      </div>\n      <div class=\"section section-pagination\">\n          <div class=\"container\">\n              <div class=\"row\">\n                  <div class=\"col-md-6\">\n                      <h4>Progress Bars</h4>\n                      <div class=\"progress-container\">\n                        <span class=\"progress-badge\">Default</span>\n\n                        <ngb-progressbar [value]=\"25\"><span class=\"progress-value\">25%</span></ngb-progressbar><br>\n                      </div>\n                      <div class=\"progress-container progress-primary\">\n                          <span class=\"progress-badge\">Primary</span>\n                          <ngb-progressbar [value]=\"60\"><span class=\"progress-value\">60%</span></ngb-progressbar><br>\n                      </div>\n                      <div class=\"progress-container progress-danger\">\n                          <span class=\"progress-badge\">Danger</span>\n                            <ngb-progressbar [value]=\"60\"><span class=\"progress-value\">60%</span></ngb-progressbar><br>\n                      </div>\n                      <div class=\"progress-container progress-warning\">\n                          <span class=\"progress-badge\">Warning</span>\n                            <ngb-progressbar [value]=\"60\"><span class=\"progress-value\">60%</span></ngb-progressbar><br>\n                      </div>\n                      <div class=\"progress-container progress-success\">\n                          <span class=\"progress-badge\">Success</span>\n                          <ngb-progressbar [value]=\"60\"><span class=\"progress-value\">60%</span></ngb-progressbar><br>\n                      </div>\n                      <div class=\"progress-container progress-info\">\n                          <span class=\"progress-badge\">Info</span>\n                            <ngb-progressbar [value]=\"60\"><span class=\"progress-value\">60%</span></ngb-progressbar><br>\n                      </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                      <h4>Pagination</h4>\n                      <ngb-pagination [collectionSize]=\"50\" [(page)]=\"page\" aria-label=\"Default pagination\" class=\"pagination-primary\"></ngb-pagination>\n                      <br/>\n                      <ngb-pagination [collectionSize]=\"50\" [(page)]=\"page2\" aria-label=\"Default pagination\"></ngb-pagination>\n                      <br/>\n                      <div class=\"pagination-container justify-content-center\">\n                        <ngb-pagination [collectionSize]=\"60\" [(page)]=\"page1\" [maxSize]=\"5\" [rotate]=\"true\" class=\"pagination-info\"></ngb-pagination>\n                      </div>\n                      <br>\n                      <h4>Labels</h4>\n                      <span class=\"badge badge-default\">Default</span>\n                      <span class=\"badge badge-primary\">Primary</span>\n                      <span class=\"badge badge-success\">Success</span>\n                      <span class=\"badge badge-info\">Info</span>\n                      <span class=\"badge badge-warning\">Warning</span>\n                      <span class=\"badge badge-danger\">Danger</span>\n                      <span class=\"badge badge-neutral\">Neutral</span>\n                  </div>\n              </div>\n              <div class=\"space\"></div>\n          </div>\n      </div>\n      <div class=\"section\" id=\"notifications\">\n          <div class=\"container\">\n            <h4>Notifications</h4>\n          </div>\n          <app-notification></app-notification>\n      </div>\n      <app-prefooter-areas></app-prefooter-areas>\n      <app-footers-areas></app-footers-areas>\n      <app-typography></app-typography>\n      <app-tables-areas></app-tables-areas>\n      <app-comments-areas></app-comments-areas>\n      <app-cards-areas></app-cards-areas>\n\n      <div class=\"section section-javascript\" id=\"javascriptComponents\">\n          <div class=\"container\">\n              <h3 class=\"title\">Angular Native Components</h3>\n              <div class=\"row\" id=\"modals\">\n                  <div class=\"col-md-6\">\n                      <h4>Modal</h4>\n                      <ngbd-modal-component></ngbd-modal-component>\n                  </div>\n                  <div class=\"col-md-6\">\n                      <h4>Popovers</h4>\n                      <button type=\"button\" class=\"btn btn-default text-margin\" placement=\"right\"\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on right\" popoverClass=\"popover-primary\">\n                          On right\n                      </button>\n\n                      <button type=\"button\" class=\"btn btn-default text-margin\" placement=\"top\"\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on top\">\n                          On top\n                      </button>\n\n                      <button type=\"button\" class=\"btn btn-default text-margin\" placement=\"left\"\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on left\">\n                          On left\n                      </button>\n\n                      <button type=\"button\" class=\"btn btn-default\" placement=\"bottom\"\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on bottom\">\n                          On bottom\n                      </button>\n                  </div>\n                  <br />\n                  <br />\n                  <div class=\"col-md-6\">\n                      <h4>Datetimepicker</h4>\n                      <div class=\"row\">\n                          <div class=\"col-md-6\">\n                              <div class=\"datepicker-container\">\n                                  <div class=\"form-group\">\n                                    <input class=\"form-control datetimepicker\" placeholder=\"06/07/2017\"\n                                         name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\" data-color=\"orange\">\n                \t\t\t            </div>\n                              </div>\n                          </div>\n                      </div> -->\n                      <!--                 collapse -->\n                      <!-- <div id=\"collapse\">\n                          <div class=\"title\">\n                              <h4>Collapse</h4>\n                          </div>\n                          <div class=\"row\">\n                              <div class=\"col-md-12\">\n                                <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"config-panel-one\" class=\"card-plain\">\n                                    <ngb-panel id=\"config-panel-one\">\n                                        <ng-template ngbPanelTitle>\n                                            <a class=\"collapsed\">\n                                                  Collapsible Group Item #1\n                                              <i class=\"now-ui-icons arrows-1_minimal-down\"></i>\n                                            </a>\n                                        </ng-template>\n                                        <ng-template ngbPanelContent>\n                                              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n                                              aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n                                              sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n                                              craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n                                              occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n                                              labore sustainable VHS.\n                                        </ng-template>\n                                    </ngb-panel>\n                                    <ngb-panel>\n                                        <ng-template ngbPanelTitle>\n                                          <a class=\"collapsed\">\n                                                Collapsible Group Item #2\n                                              <i class=\"now-ui-icons arrows-1_minimal-down\"></i>\n                                          </a>\n                                        </ng-template>\n                                        <ng-template ngbPanelContent>\n                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n                                            aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n                                            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n                                            craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n                                            occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n                                            labore sustainable VHS.\n                                        </ng-template>\n                                    </ngb-panel>\n                                    <ngb-panel>\n                                        <ng-template ngbPanelTitle>\n                                          <a class=\"collapsed\">\n                                                Collapsible Group Item #3\n                                            <i class=\"now-ui-icons arrows-1_minimal-down\"></i>\n                                          </a>\n                                        </ng-template>\n                                        <ng-template ngbPanelContent>\n                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n                                            aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n                                            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n                                            craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n                                            occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n                                            labore sustainable VHS.\n                                        </ng-template>\n                                    </ngb-panel>\n                                </ngb-accordion>\n                              </div>\n                          </div>\n                      </div> -->\n                      <!--                 end collapse -->\n                  <!-- </div>\n                  <div class=\"col-md-6\">\n                      <h4>Tooltips</h4>\n                      <button type=\"button\" class=\"btn btn-default btn-tooltip text-margin\" placement=\"right\" ngbTooltip=\"Tooltip on right\">\n                         On right\n                     </button>\n                     <button type=\"button\" class=\"btn btn-default btn-tooltip text-margin\" placement=\"left\" ngbTooltip=\"Tooltip on left\">\n                       On left\n                     </button>\n                      <button type=\"button\" class=\"btn btn-default btn-tooltip text-margin\" placement=\"top\" ngbTooltip=\"Tooltip on top\">\n                         On top\n                      </button>\n                      <button type=\"button\" class=\"btn btn-default btn-tooltip text-margin\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">\n                          On bottom\n                      </button>\n                      <div class=\"clearfix\"></div>\n                      <br>\n                      <br>\n                  </div> -->\n              <!-- </div>\n            </div> -->\n          <!-- </div>\n          <div id=\"file-uploader\">\n              <div class=\"container\">\n                  <div class=\"title\">\n                      <h4>File Uploader</h4>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-5 col-sm-8\">\n                        <h4><small>Regular Image</small></h4>\n                        <app-image-upload></app-image-upload>\n                    </div>\n                    <div class=\"col-md-3 col-sm-4\">\n                        <h4><small>Avatar</small></h4>\n                        <app-image-upload [isRound]=\"true\"></app-image-upload>\n                    </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"section\" id=\"carousel\">\n              <div class=\"container\">\n                  <div class=\"title\">\n                      <h4>Carousel</h4>\n                  </div>\n                  <div class=\"row justify-content-center\">\n                      <div class=\"col-8\">\n                        <ngb-carousel>\n                            <ng-template ngbSlide>\n                              <img class=\"d-block\" src=\"assets/img/bg1.jpg\" alt=\"First slide\">\n                              <div class=\"carousel-caption d-none d-md-block\">\n                                  <h5>Nature, United States</h5>\n                              </div>\n                            </ng-template>\n                            <ng-template ngbSlide>\n                              <img class=\"d-block\" src=\"assets/img/bg3.jpg\" alt=\"Second slide\">\n                              <div class=\"carousel-caption d-none d-md-block\">\n                                  <h5>Somewhere Beyond, United States</h5>\n                              </div>\n                            </ng-template>\n                            <ng-template ngbSlide>\n                              <img class=\"d-block\" src=\"assets/img/bg4.jpg\" alt=\"Third slide\">\n                              <div class=\"carousel-caption d-none d-md-block\">\n                                  <h5>Yellowstone National Park, United States</h5>\n                              </div>\n                            </ng-template>\n                        </ngb-carousel>\n                      </div>\n                  </div>\n              </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"section section-nucleo-icons\">\n          <div class=\"container\">\n              <div class=\"row\">\n                  <div class=\"col-lg-6 col-md-12\">\n                      <h2 class=\"title\">Nucleo Icons</h2>\n                      <h5 class=\"description\">\n                          Now UI Kit comes with 100 custom icons made by our friends from NucleoApp. The official package contains over 2.100 thin icons which are looking great in combination with Now UI Kit Make sure you check all of them and use those that you like the most.\n                      </h5>\n                      <a [routerLink]=\"['/nucleoicons']\" class=\"btn btn-primary btn-round btn-lg\">View Demo Icons</a>\n                      <a href=\"https://nucleoapp.com/?ref=1712\" class=\"btn btn-primary btn-simple btn-round btn-lg\" target=\"_blank\">View All Icons</a>\n                  </div>\n                  <div class=\"col-lg-6 col-md-12\">\n                      <div class=\"icons-container\">\n                          <i class=\"now-ui-icons ui-1_send\"></i>\n                          <i class=\"now-ui-icons ui-2_like\"></i>\n                          <i class=\"now-ui-icons transportation_air-baloon\"></i>\n                          <i class=\"now-ui-icons text_bold\"></i>\n                          <i class=\"now-ui-icons tech_headphones\"></i>\n                          <i class=\"now-ui-icons emoticons_satisfied\"></i>\n                          <i class=\"now-ui-icons shopping_cart-simple\"></i>\n                          <i class=\"now-ui-icons objects_spaceship\"></i>\n                          <i class=\"now-ui-icons media-2_note-03\"></i>\n                          <i class=\"now-ui-icons ui-2_favourite-28\"></i>\n                          <i class=\"now-ui-icons design_palette\"></i>\n                          <i class=\"now-ui-icons clothes_tie-bow\"></i>\n                          <i class=\"now-ui-icons location_pin\"></i>\n                          <i class=\"now-ui-icons objects_key-25\"></i>\n                          <i class=\"now-ui-icons travel_istanbul\"></i>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n  <footer class=\"footer section-dark\">\n      <div class=\"container\">\n          <div class=\"row\">\n              <nav class=\"footer-nav\">\n                  <ul>\n                      <li><a href=\"https://www.creative-tim.com\">Creative Tim</a></li>\n                      <li><a href=\"http://blog.creative-tim.com\">Blog</a></li>\n                      <li><a href=\"https://www.creative-tim.com/license\">Licenses</a></li>\n                  </ul>\n              </nav>\n              <div class=\"credits ml-auto\">\n                  <span class=\"copyright\">\n                      © {{data | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Creative Tim\n                  </span>\n              </div>\n          </div>\n      </div>\n  </footer>\n\n</div> -->\n"

/***/ }),

/***/ "./src/app/components/components.component.ts":
/*!****************************************************!*\
  !*** ./src/app/components/components.component.ts ***!
  \****************************************************/
/*! exports provided: ComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsComponent", function() { return ComponentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var ComponentsComponent = /** @class */ (function () {
    function ComponentsComponent(renderer, config) {
        this.renderer = renderer;
        this.data = new Date();
        this.page = 4;
        this.page1 = 5;
        this.page2 = 3;
        this.isCollapsed = true;
        this.isCollapsed1 = true;
        this.isCollapsed2 = true;
        this.state_icon_primary = true;
        config.closeOthers = true;
    }
    ComponentsComponent.prototype.isWeekend = function (date) {
        var d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    };
    ComponentsComponent.prototype.isDisabled = function (date, current) {
        return date.month !== current.month;
    };
    ComponentsComponent.prototype.ngOnInit = function () {
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('index-page');
    };
    ComponentsComponent.prototype.ngOnDestroy = function () {
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('index-page');
    };
    ComponentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-components',
            template: __webpack_require__(/*! ./components.component.html */ "./src/app/components/components.component.html"),
            styles: ["\n    ngb-progressbar {\n        margin-top: 5rem;\n    }\n    "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAccordionConfig"]])
    ], ComponentsComponent);
    return ComponentsComponent;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/fesm5/jw-bootstrap-switch-ng2.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "./node_modules/angular2-multiselect-dropdown/fesm5/angular2-multiselect-dropdown.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_common_image_upload_image_upload_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/common/image-upload/image-upload.module */ "./src/app/components/common/image-upload/image-upload.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _basicelements_basicelements_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./basicelements/basicelements.component */ "./src/app/components/basicelements/basicelements.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/components/typography/typography.component.ts");
/* harmony import */ var _nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./nucleoicons/nucleoicons.component */ "./src/app/components/nucleoicons/nucleoicons.component.ts");
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components.component */ "./src/app/components/components.component.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/components/notification/notification.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/components/modal/modal.component.ts");
/* harmony import */ var _tables_areas_tables_areas_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tables-areas/tables-areas.component */ "./src/app/components/tables-areas/tables-areas.component.ts");
/* harmony import */ var _comments_areas_comments_areas_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./comments-areas/comments-areas.component */ "./src/app/components/comments-areas/comments-areas.component.ts");
/* harmony import */ var _cards_areas_cards_areas_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./cards-areas/cards-areas.component */ "./src/app/components/cards-areas/cards-areas.component.ts");





















var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__["NouisliderModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_7__["TagInputModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_6__["JwBootstrapSwitchNg2Module"],
                angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__["AngularMultiSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ngx_gallery__WEBPACK_IMPORTED_MODULE_9__["NgxGalleryModule"],
                _components_common_image_upload_image_upload_module__WEBPACK_IMPORTED_MODULE_10__["ImageUploadModule"]
            ],
            declarations: [
                _components_component__WEBPACK_IMPORTED_MODULE_15__["ComponentsComponent"],
                _basicelements_basicelements_component__WEBPACK_IMPORTED_MODULE_12__["BasicelementsComponent"],
                _typography_typography_component__WEBPACK_IMPORTED_MODULE_13__["TypographyComponent"],
                _nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_14__["NucleoiconsComponent"],
                _notification_notification_component__WEBPACK_IMPORTED_MODULE_16__["NotificationComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_17__["NgbdModalBasic"],
                _tables_areas_tables_areas_component__WEBPACK_IMPORTED_MODULE_18__["TablesAreasComponent"],
                _comments_areas_comments_areas_component__WEBPACK_IMPORTED_MODULE_19__["CommentsAreasComponent"],
                _cards_areas_cards_areas_component__WEBPACK_IMPORTED_MODULE_20__["CardsAreasComponent"],
            ],
            exports: [_components_component__WEBPACK_IMPORTED_MODULE_15__["ComponentsComponent"]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/cook-time/cook-time.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/cook-time/cook-time.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"cook-time\" class=\"text-center\">\r\n  <p>\r\n    Total Time: \r\n    <span *ngIf=\"recipe.minutes > 0\">{{recipe.minutes}} minutes </span>\r\n    <span *ngIf=\"recipe.hours > 0\">{{recipe.hours}} hours </span>\r\n    <span *ngIf=\"recipe.days > 0\">{{recipe.days}} days </span>\r\n  </p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/cook-time/cook-time.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/cook-time/cook-time.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n.noLine {\n  text-decoration: none; }\n#cook-time {\n  margin-top: 2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb29rLXRpbWUvQzpcXFVzZXJzXFxqb2hubVxcRG9jdW1lbnRzXFxHaXRIdWJcXFNpbXBsZXN0LUNvb2tib29rLUFuZ3VsYXJcXHNpbXBsZXN0LWNvb2tib29rL3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29vay10aW1lL0M6XFxVc2Vyc1xcam9obm1cXERvY3VtZW50c1xcR2l0SHViXFxTaW1wbGVzdC1Db29rYm9vay1Bbmd1bGFyXFxzaW1wbGVzdC1jb29rYm9vay9zcmNcXGFwcFxcY29tcG9uZW50c1xcY29vay10aW1lXFxjb29rLXRpbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUE0QkE7RUFDRSxxQkFBcUIsRUFBQTtBQzNCdkI7RUFDSSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Nvb2stdGltZS9jb29rLXRpbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcblxyXG4vLyBSZXNwb25zaXZlIERlc2lnbnNcclxuJG1lZGlhLXF1ZXJ5LXBob25lOiA0MDBweDtcclxuJG1lZGlhLXF1ZXJ5LXNtYWxsLXRhYmxldDogNTUwcHg7XHJcbiRtZWRpYS1xdWVyeS10YWJsZXQ6IDc1MHB4O1xyXG4kbWVkaWEtcXVlcnktZGVza3RvcDogMTAwMHB4O1xyXG4kbWVkaWEtcXVlcnktZGVza3RvcC1oZDogMTIwMHB4O1xyXG5cclxuLy8gRm9udHNcclxuJGZvbnQtc3RhY2s6IFwiUmFsZXdheVwiLCBcIkhlbHZldGljYU5ldWVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG5cclxuLy8gQ29sb3JzXHJcbiRkZWZhdWx0LWJvZHktdGV4dDogIzIyMjtcclxuJGJsYWNrOiAjMDAwO1xyXG4kYm9uZS13aGl0ZTogI0ZGRjtcclxuJGJvcmRlci13aGl0ZTogI0UxRTFFMTtcclxuJGNvZGU6ICNGMUYxRjE7XHJcbiRsaW5rOiAjMUVBRURCO1xyXG4kbGluay1ob3ZlcjogIzBGQTBDRTtcclxuJHByaW1hcnktYmx1ZTogIzMzQzNGMDtcclxuJGRhdGEtYmx1ZTogIzExREZDNztcclxuXHJcbi8vIEJvcmRlcnNcclxuJGRlZmF1bHQtYm9yZGVyOiAxcHggc29saWQgJGJsYWNrO1xyXG4kd2hpdGUtYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci13aGl0ZTtcclxuJHByaW1hcnktYmx1ZS1ib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeS1ibHVlO1xyXG5cclxuLm5vTGluZSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlc1wiO1xyXG5cclxuI2Nvb2stdGltZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/cook-time/cook-time.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/cook-time/cook-time.component.ts ***!
  \*************************************************************/
/*! exports provided: CookTimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookTimeComponent", function() { return CookTimeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_recipe_recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/recipe/recipe.service */ "./src/app/services/recipe/recipe.service.ts");



var CookTimeComponent = /** @class */ (function () {
    function CookTimeComponent(bs) {
        this.bs = bs;
    }
    CookTimeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bs
            .getRecipes()
            .subscribe(function (data) {
            _this.recipes = data;
        });
    };
    CookTimeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cook-time',
            template: __webpack_require__(/*! ./cook-time.component.html */ "./src/app/components/cook-time/cook-time.component.html"),
            styles: [__webpack_require__(/*! ./cook-time.component.scss */ "./src/app/components/cook-time/cook-time.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_recipe_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"]])
    ], CookTimeComponent);
    return CookTimeComponent;
}());



/***/ }),

/***/ "./src/app/components/cooking-tools/cooking-tools.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/cooking-tools/cooking-tools.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"cooking-tools\" class=\"col-md-12\">\r\n  <section class=\"row\">\r\n    <h1 class=\"col-md-12\">Cooking Tools</h1>\r\n  </section>\r\n  <section ngbDropdown class=\"dropdown col-md-5 offset-md-5 col-sm-12\">\r\n    <button class=\"btn btn-primary btn-round dropdown-toggle btn-simple\" ngbDropdownToggle>Select Cooking Tool</button>\r\n    <div ngbDropdownMenu>\r\n      <a class=\"dropdown-item\">Toddy Ratio Helper</a>\r\n    </div>\r\n  </section>\r\n  <section class=\"row\">\r\n    <app-toddy-ratio-helper></app-toddy-ratio-helper>\r\n  </section>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/cooking-tools/cooking-tools.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/cooking-tools/cooking-tools.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#cooking-tools .dropdown {\n  margin-bottom: 2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb29raW5nLXRvb2xzL0M6XFxVc2Vyc1xcam9obm1cXERvY3VtZW50c1xcR2l0SHViXFxTaW1wbGVzdC1Db29rYm9vay1Bbmd1bGFyXFxzaW1wbGVzdC1jb29rYm9vay9zcmNcXGFwcFxcY29tcG9uZW50c1xcY29va2luZy10b29sc1xcY29va2luZy10b29scy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb29raW5nLXRvb2xzL2Nvb2tpbmctdG9vbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29va2luZy10b29scyB7XHJcbiAgICAuZHJvcGRvd24ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJlbTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/cooking-tools/cooking-tools.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/cooking-tools/cooking-tools.component.ts ***!
  \*********************************************************************/
/*! exports provided: CookingToolsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookingToolsComponent", function() { return CookingToolsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CookingToolsComponent = /** @class */ (function () {
    function CookingToolsComponent() {
    }
    CookingToolsComponent.prototype.ngOnInit = function () {
    };
    CookingToolsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cooking-tools',
            template: __webpack_require__(/*! ./cooking-tools.component.html */ "./src/app/components/cooking-tools/cooking-tools.component.html"),
            styles: [__webpack_require__(/*! ./cooking-tools.component.scss */ "./src/app/components/cooking-tools/cooking-tools.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CookingToolsComponent);
    return CookingToolsComponent;
}());



/***/ }),

/***/ "./src/app/components/cooking-tools/toddy-ratio-helper/toddy-ratio-helper.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/cooking-tools/toddy-ratio-helper/toddy-ratio-helper.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"toddy-ratio-helper\" class=\"col-md-12 text-center\">\n  <div class=\"row\">\n    <h2>Toddy Ratio Helper</h2>\n  </div>\n  <div class=\"row\">\n    \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/cooking-tools/toddy-ratio-helper/toddy-ratio-helper.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/cooking-tools/toddy-ratio-helper/toddy-ratio-helper.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29va2luZy10b29scy90b2RkeS1yYXRpby1oZWxwZXIvdG9kZHktcmF0aW8taGVscGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/cooking-tools/toddy-ratio-helper/toddy-ratio-helper.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/cooking-tools/toddy-ratio-helper/toddy-ratio-helper.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ToddyRatioHelperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToddyRatioHelperComponent", function() { return ToddyRatioHelperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ToddyRatioHelperComponent = /** @class */ (function () {
    function ToddyRatioHelperComponent() {
    }
    ToddyRatioHelperComponent.prototype.ngOnInit = function () {
    };
    ToddyRatioHelperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toddy-ratio-helper',
            template: __webpack_require__(/*! ./toddy-ratio-helper.component.html */ "./src/app/components/cooking-tools/toddy-ratio-helper/toddy-ratio-helper.component.html"),
            styles: [__webpack_require__(/*! ./toddy-ratio-helper.component.scss */ "./src/app/components/cooking-tools/toddy-ratio-helper/toddy-ratio-helper.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ToddyRatioHelperComponent);
    return ToddyRatioHelperComponent;
}());



/***/ }),

/***/ "./src/app/components/description/description.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/description/description.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\r\n  <p>\r\n    {{recipe.description}}\r\n  </p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/description/description.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/description/description.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGVzY3JpcHRpb24vZGVzY3JpcHRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/description/description.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/description/description.component.ts ***!
  \*****************************************************************/
/*! exports provided: DescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionComponent", function() { return DescriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_recipe_recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/recipe/recipe.service */ "./src/app/services/recipe/recipe.service.ts");



var DescriptionComponent = /** @class */ (function () {
    function DescriptionComponent(bs) {
        this.bs = bs;
    }
    DescriptionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bs
            .getRecipes()
            .subscribe(function (data) {
            _this.recipes = data;
        });
    };
    DescriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-description',
            template: __webpack_require__(/*! ./description.component.html */ "./src/app/components/description/description.component.html"),
            styles: [__webpack_require__(/*! ./description.component.scss */ "./src/app/components/description/description.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_recipe_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"]])
    ], DescriptionComponent);
    return DescriptionComponent;
}());



/***/ }),

/***/ "./src/app/components/ingredients/ingredients.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/ingredients/ingredients.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Ingredients</h4>\r\n"

/***/ }),

/***/ "./src/app/components/ingredients/ingredients.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/ingredients/ingredients.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5ncmVkaWVudHMvaW5ncmVkaWVudHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/ingredients/ingredients.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/ingredients/ingredients.component.ts ***!
  \*****************************************************************/
/*! exports provided: IngredientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientsComponent", function() { return IngredientsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IngredientsComponent = /** @class */ (function () {
    function IngredientsComponent() {
    }
    IngredientsComponent.prototype.ngOnInit = function () {
    };
    IngredientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ingredients',
            template: __webpack_require__(/*! ./ingredients.component.html */ "./src/app/components/ingredients/ingredients.component.html"),
            styles: [__webpack_require__(/*! ./ingredients.component.scss */ "./src/app/components/ingredients/ingredients.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IngredientsComponent);
    return IngredientsComponent;
}());



/***/ }),

/***/ "./src/app/components/instructions/instructions.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/instructions/instructions.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Instructions</h4>\r\n"

/***/ }),

/***/ "./src/app/components/instructions/instructions.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/instructions/instructions.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb25zL2luc3RydWN0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/instructions/instructions.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/instructions/instructions.component.ts ***!
  \*******************************************************************/
/*! exports provided: InstructionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionsComponent", function() { return InstructionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InstructionsComponent = /** @class */ (function () {
    function InstructionsComponent() {
    }
    InstructionsComponent.prototype.ngOnInit = function () {
    };
    InstructionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-instructions',
            template: __webpack_require__(/*! ./instructions.component.html */ "./src/app/components/instructions/instructions.component.html"),
            styles: [__webpack_require__(/*! ./instructions.component.scss */ "./src/app/components/instructions/instructions.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InstructionsComponent);
    return InstructionsComponent;
}());



/***/ }),

/***/ "./src/app/components/messages/messages.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/messages/messages.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\">\r\n\r\n  <h2>Messages</h2>\r\n  <button class=\"clear\"\r\n          (click)=\"messageService.clear()\">clear</button>\r\n  <div *ngFor=\"let message of messageService.messages\"> {{message}} </div>\r\n\r\n</div>\r\n\r\n\r\n<!-- \r\nCopyright Google LLC. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n-->"

/***/ }),

/***/ "./src/app/components/messages/messages.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/messages/messages.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* MessagesComponent's private CSS styles */\nh2 {\n  color: red;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: lighter; }\nbody {\n  margin: 2em; }\nbody, input[text], button {\n  color: crimson;\n  font-family: Cambria, Georgia; }\nbutton.clear {\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand; }\nbutton:hover {\n  background-color: #cfd8dc; }\nbutton:disabled {\n  background-color: #eee;\n  color: #aaa;\n  cursor: auto; }\nbutton.clear {\n  color: #333;\n  margin-bottom: 12px; }\n/*\r\n  Copyright Google LLC. All Rights Reserved.\r\n  Use of this source code is governed by an MIT-style license that\r\n  can be found in the LICENSE file at http://angular.io/license\r\n  */\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZXNzYWdlcy9DOlxcVXNlcnNcXGpvaG5tXFxEb2N1bWVudHNcXEdpdEh1YlxcU2ltcGxlc3QtQ29va2Jvb2stQW5ndWxhclxcc2ltcGxlc3QtY29va2Jvb2svc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1lc3NhZ2VzXFxtZXNzYWdlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBQTtBQUNBO0VBQ0ksVUFBVTtFQUNWLHlDQUF5QztFQUN6QyxvQkFBb0IsRUFBQTtBQUV0QjtFQUNFLFdBQVcsRUFBQTtBQUViO0VBQ0UsY0FBYztFQUNkLDZCQUE2QixFQUFBO0FBRy9CO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWSxFQUFBO0FBRWQ7RUFDRSx5QkFBeUIsRUFBQTtBQUUzQjtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWSxFQUFBO0FBRWQ7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CLEVBQUE7QUFJckI7Ozs7R0NDQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNZXNzYWdlc0NvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xyXG5oMiB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICB9XHJcbiAgYm9keSB7XHJcbiAgICBtYXJnaW46IDJlbTtcclxuICB9XHJcbiAgYm9keSwgaW5wdXRbdGV4dF0sIGJ1dHRvbiB7XHJcbiAgICBjb2xvcjogY3JpbXNvbjtcclxuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBHZW9yZ2lhO1xyXG4gIH1cclxuICBcclxuICBidXR0b24uY2xlYXIge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY3Vyc29yOiBoYW5kO1xyXG4gIH1cclxuICBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcclxuICB9XHJcbiAgYnV0dG9uOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICBjb2xvcjogI2FhYTtcclxuICAgIGN1cnNvcjogYXV0bztcclxuICB9XHJcbiAgYnV0dG9uLmNsZWFyIHtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLypcclxuICBDb3B5cmlnaHQgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0XHJcbiAgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cDovL2FuZ3VsYXIuaW8vbGljZW5zZVxyXG4gICovIiwiLyogTWVzc2FnZXNDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cbmgyIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyOyB9XG5cbmJvZHkge1xuICBtYXJnaW46IDJlbTsgfVxuXG5ib2R5LCBpbnB1dFt0ZXh0XSwgYnV0dG9uIHtcbiAgY29sb3I6IGNyaW1zb247XG4gIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBHZW9yZ2lhOyB9XG5cbmJ1dHRvbi5jbGVhciB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGN1cnNvcjogaGFuZDsgfVxuXG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjOyB9XG5cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGNvbG9yOiAjYWFhO1xuICBjdXJzb3I6IGF1dG87IH1cblxuYnV0dG9uLmNsZWFyIHtcbiAgY29sb3I6ICMzMzM7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7IH1cblxuLypcclxuICBDb3B5cmlnaHQgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0XHJcbiAgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cDovL2FuZ3VsYXIuaW8vbGljZW5zZVxyXG4gICovXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/messages/messages.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/messages/messages.component.ts ***!
  \***********************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_messages_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/messages/message.service */ "./src/app/services/messages/message.service.ts");



var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/components/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.scss */ "./src/app/components/messages/messages.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_messages_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/components/modal/modal.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/modal/modal.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-primary text-margin\" (click)=\"open(classic,'' , '')\">\n    <i class=\"now-ui-icons files_single-copy-04\"></i> Classic\n</button>\n<ng-template #classic let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header justify-content-center\">\n        <button type=\"button\" class=\"close\" (click)=\"d('Cross click')\">\n            <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n        </button>\n        <h4 class=\"title title-up\">Modal title</h4>\n    </div>\n    <div class=\"modal-body\">\n        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.\n        </p>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\">Nice Button</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"c('Close click')\">Close</button>\n    </div>\n</ng-template>\n\n<button class=\"btn btn-primary text-margin\" (click)=\"open(modal_mini, 'modal_mini', 'sm')\">\n    <i class=\"now-ui-icons media-1_button-power\"></i> Launch Modal Mini\n</button>\n<ng-template #modal_mini let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header justify-content-center\">\n      <div class=\"modal-profile\">\n          <i class=\"now-ui-icons users_circle-08\"></i>\n      </div>\n  </div>\n  <div class=\"modal-body\">\n      <p>Always have an access to your profile</p>\n  </div>\n  <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-link btn-neutral\">Back</button>\n      <button type=\"button\" class=\"btn btn-link btn-neutral\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n\n\n<button class=\"btn btn-primary text-margin\" (click)=\"open(Notice, '', '')\">\n    <i class=\"now-ui-icons travel_info\"></i> Notice\n</button>\n<ng-template #Notice let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n      <button type=\"button\" class=\"close\" (click)=\"d('Cross click')\">\n          <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n      </button>\n      <h5 class=\"modal-title\" id=\"myModalLabel\">How Do You Become an Affiliate?</h5>\n  </div>\n  <div class=\"modal-body\">\n      <div class=\"instruction\">\n          <div class=\"row\">\n              <div class=\"col-md-8\">\n                  <strong>1. Register</strong>\n                  <p class=\"description\">The first step is to create an account at\n                      <a href=\"https://www.creative-tim.com/\">Creative Tim</a>. You can choose a social network or go for the classic version, whatever works best for you.</p>\n              </div>\n              <div class=\"col-md-4\">\n                  <div class=\"picture\">\n                      <img src=\"assets/img/pricing1.jpg\" alt=\"Thumbnail Image\" class=\"rounded img-raised\">\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"instruction\">\n          <div class=\"row\">\n              <div class=\"col-md-8\">\n                  <strong>2. Apply</strong>\n                  <p class=\"description\">The first step is to create an account at\n                      <a href=\"https://www.creative-tim.com/\">Creative Tim</a>. You can choose a social network or go for the classic version, whatever works best for you.</p>\n              </div>\n              <div class=\"col-md-4\">\n                  <div class=\"picture\">\n                      <img src=\"assets/img/project9.jpg\" alt=\"Thumbnail Image\" class=\"rounded img-raised\">\n                  </div>\n              </div>\n          </div>\n      </div>\n      <p>If you have more questions, don't hesitate to contact us or send us a tweet @creativetim. We're here to help!</p>\n  </div>\n  <div class=\"modal-footer justify-content-center\">\n      <button type=\"button\" class=\"btn btn-info btn-round\"(click)=\"c('Close click')\">Sounds good!</button>\n  </div>\n</ng-template>\n\n\n<button class=\"btn btn-primary text-margin\" (click)=\"open(Login, 'Login', 'md')\">\n    <i class=\"now-ui-icons users_single-02\"></i> Login Modal\n</button>\n<ng-template #Login let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"card card-login card-plain\">\n      <div class=\"modal-header justify-content-center\">\n          <button type=\"button\" class=\"close\" (click)=\"d('Cross click')\">\n              <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n          </button>\n          <div class=\"header header-primary text-center\">\n              <div class=\"logo-container\">\n                  <img src=\"assets/img/now-logo.png\" alt=\"\">\n              </div>\n          </div>\n      </div>\n      <div class=\"modal-body\">\n          <form class=\"form\" method=\"\" action=\"\">\n              <div class=\"card-content\">\n                  <div class=\"input-group form-group-no-border input-lg\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"><i class=\"now-ui-icons users_circle-08\"></i></span>\n                    </div>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\">\n                  </div>\n                  <div class=\"input-group form-group-no-border input-lg\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">  <i class=\"now-ui-icons ui-1_lock-circle-open\"></i></span>\n                    </div>\n                      <input type=\"password\" placeholder=\"Password...\" class=\"form-control\">\n                  </div>\n              </div>\n          </form>\n      </div>\n      <div class=\"modal-footer text-center\">\n          <a href=\"#getstart\" class=\"btn btn-neutral btn-round btn-lg btn-block\">Get Started</a>\n      </div>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: NgbdModalBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalBasic", function() { return NgbdModalBasic; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var NgbdModalBasic = /** @class */ (function () {
    function NgbdModalBasic(modalService) {
        this.modalService = modalService;
    }
    NgbdModalBasic.prototype.open = function (content, type, modalDimension) {
        var _this = this;
        if (modalDimension === 'sm' && type === 'modal_mini') {
            this.modalService.open(content, { windowClass: 'modal-mini modal-primary', size: 'sm' }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
        else if (modalDimension === 'md' && type === 'Login') {
            this.modalService.open(content, { windowClass: 'modal-login modal-primary' }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
        else {
            this.modalService.open(content).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
    };
    NgbdModalBasic.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NgbdModalBasic = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngbd-modal-component',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/components/modal/modal.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], NgbdModalBasic);
    return NgbdModalBasic;
}());



/***/ }),

/***/ "./src/app/components/notification/notification.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/notification/notification.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let alert of alerts\">\n    <ngb-alert [type]=\"alert.type\"  [dismissible]=\"false\" >\n        <div class=\"container\">\n            <div class=\"alert-wrapper\">\n                <button type=\"button\" name=\"button\" class=\"close\" (click)=\"closeAlert(alert)\">\n                  <span aria-hidden=\"true\">\n                      <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n                  </span>\n                </button>\n                <div class=\"message\">\n                    <ng-container *ngIf=\"alert.icon\">\n                      <div class=\"alert-icon\">\n                          <i class=\"now-ui-icons {{alert.icon}}\"></i>\n                      </div>\n                    </ng-container>\n                    <strong>{{alert.strong}} </strong>{{ alert.message }}\n                </div>\n            </div>\n        </div>\n    </ngb-alert>\n</div>\n"

/***/ }),

/***/ "./src/app/components/notification/notification.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/notification/notification.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/notification/notification.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/notification/notification.component.ts ***!
  \*******************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotificationComponent = /** @class */ (function () {
    function NotificationComponent() {
        this.alerts = [];
        this.alerts.push({
            id: 1,
            type: 'success',
            strong: 'Well done!',
            message: 'You successfully read this important alert message.',
            icon: 'ui-2_like'
        }, {
            id: 2,
            strong: 'Heads up!',
            type: 'info',
            message: 'This is an info alert',
            icon: 'travel_info'
        }, {
            id: 3,
            type: 'warning',
            strong: 'Warning!',
            message: 'This is a warning alert',
            icon: 'ui-1_bell-53'
        }, {
            id: 4,
            type: 'danger',
            strong: 'Oh snap!',
            message: 'This is a danger alert',
            icon: 'objects_support-17'
        });
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    NotificationComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], NotificationComponent.prototype, "alerts", void 0);
    NotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/components/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.scss */ "./src/app/components/notification/notification.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/components/nucleoicons/nucleoicons.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/nucleoicons/nucleoicons.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nucleo-icons-style\">\n  <header>\n      <h1>Nucleo Outline Web Font v2.9</h1>\n      <p>\n          <a href=\"https://nucleoapp.com/?ref=1712\">nucleoapp.com</a>\n      </p>\n  </header>\n  <div id=\"cd-nav\">\n      <nav>\n          <ul id=\"cd-main-nav\">\n              <li>\n                  <a href=\"#arrows\">Arrows</a>\n              </li>\n              <li>\n                  <a href=\"#business\">Business &amp; Finance</a>\n              </li>\n              <li>\n                  <a href=\"#clothes\">Clothes &amp; Accessories</a>\n              </li>\n              <li>\n                  <a href=\"#design\">Design &amp; Development</a>\n              </li>\n              <li>\n                  <a href=\"#emoticons\">Emoticons</a>\n              </li>\n              <li>\n                  <a href=\"#files\">Files &amp; Folders</a>\n              </li>\n              <li>\n                  <a href=\"#medical\">Healthcare &amp; Medical</a>\n              </li>\n              <li>\n                  <a href=\"#loaders\">Loaders</a>\n              </li>\n              <li>\n                  <a href=\"#maps\">Maps &amp; Location</a>\n              </li>\n              <li>\n                  <a href=\"#media\">Media</a>\n              </li>\n              <li>\n                  <a href=\"#objects\">Objects</a>\n              </li>\n              <li>\n                  <a href=\"#school\">School &amp; Education</a>\n              </li>\n              <li>\n                  <a href=\"#shopping\">Shopping</a>\n              </li>\n              <li>\n                  <a href=\"#sport\">Sport</a>\n              </li>\n              <li>\n                  <a href=\"#technology\">Technology</a>\n              </li>\n              <li>\n                  <a href=\"#text\">Text Editing</a>\n              </li>\n              <li>\n                  <a href=\"#gestures\">Touch Gestures</a>\n              </li>\n              <li>\n                  <a href=\"#transportation\">Transportation</a>\n              </li>\n              <li>\n                  <a href=\"#travel\">Travel</a>\n              </li>\n              <li>\n                  <a href=\"#interface\">User Interface</a>\n              </li>\n              <li>\n                  <a href=\"#users\">Users</a>\n              </li>\n          </ul>\n      </nav>\n  </div>\n  <div id=\"icons-wrapper\">\n      <section id=\"arrows\">\n          <h2>Arrows</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_cloud-download-93\"></i>\n                  <p>arrows-1_cloud-download-93</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_cloud-upload-94\"></i>\n                  <p>arrows-1_cloud-upload-94</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_minimal-down\"></i>\n                  <p>arrows-1_minimal-down</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_minimal-left\"></i>\n                  <p>arrows-1_minimal-left</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_minimal-right\"></i>\n                  <p>arrows-1_minimal-right</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_minimal-up\"></i>\n                  <p>arrows-1_minimal-up</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_refresh-69\"></i>\n                  <p>arrows-1_refresh-69</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_share-66\"></i>\n                  <p>arrows-1_share-66</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"business\">\n          <h2>Business &amp; Finance</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons business_badge\"></i>\n                  <p>business_badge</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_bank\"></i>\n                  <p>business_bank</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_briefcase-24\"></i>\n                  <p>business_briefcase-24</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_bulb-63\"></i>\n                  <p>business_bulb-63</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_chart-bar-32\"></i>\n                  <p>business_chart-bar-32</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_chart-pie-36\"></i>\n                  <p>business_chart-pie-36</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_globe\"></i>\n                  <p>business_globe</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_money-coins\"></i>\n                  <p>business_money-coins</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"clothes\">\n          <h2>Clothes &amp; Accessories</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons clothes_tie-bow\"></i>\n                  <p>clothes_tie-bow</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"design\">\n          <h2>Design &amp; Development</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons design_app\"></i>\n                  <p>design_app</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design_bullet-list-67\"></i>\n                  <p>design_bullet-list-67</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design_image\"></i>\n                  <p>design_image</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design_palette\"></i>\n                  <p>design_palette</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design_scissors\"></i>\n                  <p>design_scissors</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design_vector\"></i>\n                  <p>design_vector</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design-2_html5\"></i>\n                  <p>design-2_html5</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design-2_ruler-pencil\"></i>\n                  <p>design-2_ruler-pencil</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"emoticons\">\n          <h2>Emoticons</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons emoticons_satisfied\"></i>\n                  <p>emoticons_satisfied</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"files\">\n          <h2>Files &amp; Folders</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons files_box\"></i>\n                  <p>files_box</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons files_paper\"></i>\n                  <p>files_paper</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons files_single-copy-04\"></i>\n                  <p>files_single-copy-04</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"medical\">\n          <h2>Healthcare &amp; Medical</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons health_ambulance\"></i>\n                  <p>health_ambulance</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"loaders\">\n          <h2>Loaders</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons loader_gear spin\"></i>\n                  <p>loader_gear</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons loader_refresh spin\"></i>\n                  <p>loader_refresh</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"maps\">\n          <h2>Maps &amp; Location</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons location_bookmark\"></i>\n                  <p>location_bookmark</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons location_compass-05\"></i>\n                  <p>location_compass-05</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons location_map-big\"></i>\n                  <p>location_map-big</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons location_pin\"></i>\n                  <p>location_pin</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons location_world\"></i>\n                  <p>location_world</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"media\">\n          <h2>Media</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons media-1_album\"></i>\n                  <p>media-1_album</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons media-1_button-pause\"></i>\n                  <p>media-1_button-pause</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons media-1_button-play\"></i>\n                  <p>media-1_button-play</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons media-1_button-power\"></i>\n                  <p>media-1_button-power</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons media-1_camera-compact\"></i>\n                  <p>media-1_camera-compact</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons media-2_note-03\"></i>\n                  <p>media-2_note-03</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons media-2_sound-wave\"></i>\n                  <p>media-2_sound-wave</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"objects\">\n          <h2>Objects</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons objects_diamond\"></i>\n                  <p>objects_diamond</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons objects_globe\"></i>\n                  <p>objects_globe</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons objects_key-25\"></i>\n                  <p>objects_key-25</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons objects_planet\"></i>\n                  <p>objects_planet</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons objects_spaceship\"></i>\n                  <p>objects_spaceship</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons objects_support-17\"></i>\n                  <p>objects_support-17</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons objects_umbrella-13\"></i>\n                  <p>objects_umbrella-13</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"school\">\n          <h2>School &amp; Education</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons education_agenda-bookmark\"></i>\n                  <p>education_agenda-bookmark</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons education_atom\"></i>\n                  <p>education_atom</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons education_glasses\"></i>\n                  <p>education_glasses</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons education_hat\"></i>\n                  <p>education_hat</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons education_paper\"></i>\n                  <p>education_paper</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"shopping\">\n          <h2>Shopping</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons shopping_bag-16\"></i>\n                  <p>shopping_bag-16</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_basket\"></i>\n                  <p>shopping_basket</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_box\"></i>\n                  <p>shopping_box</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_cart-simple\"></i>\n                  <p>shopping_cart-simple</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_credit-card\"></i>\n                  <p>shopping_credit-card</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_delivery-fast\"></i>\n                  <p>shopping_delivery-fast</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_shop\"></i>\n                  <p>shopping_shop</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_tag-content\"></i>\n                  <p>shopping_tag-content</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"sport\">\n          <h2>Sport</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons sport_trophy\"></i>\n                  <p>sport_trophy</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons sport_user-run\"></i>\n                  <p>sport_user-run</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"technology\">\n          <h2>Technology</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons tech_controller-modern\"></i>\n                  <p>tech_controller-modern</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons tech_headphones\"></i>\n                  <p>tech_headphones</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons tech_laptop\"></i>\n                  <p>tech_laptop</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons tech_mobile\"></i>\n                  <p>tech_mobile</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons tech_tablet\"></i>\n                  <p>tech_tablet</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons tech_tv\"></i>\n                  <p>tech_tv</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons tech_watch-time\"></i>\n                  <p>tech_watch-time</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"text\">\n          <h2>Text Editing</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons text_align-center\"></i>\n                  <p>text_align-center</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons text_align-left\"></i>\n                  <p>text_align-left</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons text_bold\"></i>\n                  <p>text_bold</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons text_caps-small\"></i>\n                  <p>text_caps-small</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"gestures\">\n          <h2>Touch Gestures</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons gestures_tap-01\"></i>\n                  <p>gestures_tap-01</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"transportation\">\n          <h2>Transportation</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons transportation_air-baloon\"></i>\n                  <p>transportation_air-baloon</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons transportation_bus-front-12\"></i>\n                  <p>transportation_bus-front-12</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"travel\">\n          <h2>Travel</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons travel_info\"></i>\n                  <p>travel_info</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons travel_istanbul\"></i>\n                  <p>travel_istanbul</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"interface\">\n          <h2>User Interface</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons ui-1_bell-53\"></i>\n                  <p>ui-1_bell-53</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_calendar-60\"></i>\n                  <p>ui-1_calendar-60</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_check\"></i>\n                  <p>ui-1_check</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_lock-circle-open\"></i>\n                  <p>ui-1_lock-circle-open</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_send\"></i>\n                  <p>ui-1_send</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\n                  <p>ui-1_settings-gear-63</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_simple-add\"></i>\n                  <p>ui-1_simple-add</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_simple-delete\"></i>\n                  <p>ui-1_simple-delete</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n                  <p>ui-1_simple-remove</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_zoom-bold\"></i>\n                  <p>ui-1_zoom-bold</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-2_chat-round\"></i>\n                  <p>ui-2_chat-round</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-2_favourite-28\"></i>\n                  <p>ui-2_favourite-28</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-2_like\"></i>\n                  <p>ui-2_like</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-2_settings-90\"></i>\n                  <p>ui-2_settings-90</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-2_time-alarm\"></i>\n                  <p>ui-2_time-alarm</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_email-85\"></i>\n                  <p>ui-1_email-85</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"users\">\n          <h2>Users</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons users_circle-08\"></i>\n                  <p>users_circle-08</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons users_single-02\"></i>\n                  <p>users_single-02</p>\n              </li>\n          </ul>\n      </section>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/nucleoicons/nucleoicons.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/nucleoicons/nucleoicons.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nucleo-icons-style,\n.nucleo-icons-style,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* .nucleo-icons-style5 display-role reset for older browsers */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection,\nmain {\n  display: block; }\n\n.nucleo-icons-style {\n  line-height: 1; }\n\nol,\nul {\n  list-style: none; }\n\nblockquote,\nq {\n  quotes: none; }\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n/* --------------------------------\n\nNucleo Outline Web Font - nucleoapp.com/\nLicense - nucleoapp.com/license/\nCreated using IcoMoon - icomoon.io\n\n-------------------------------- */\n\n/* --------------------------------\n\nPrimary style\n\n-------------------------------- */\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box; }\n\n.nucleo-icons-style {\n  font-size: 62.5%; }\n\n.nucleo-icons-style {\n  font-size: 1.6rem;\n  font-family: sans-serif;\n  color: #333333;\n  background: #efefef; }\n\na {\n  color: #766acf;\n  text-decoration: none; }\n\n/* --------------------------------\n\nMain components\n\n-------------------------------- */\n\nheader {\n  text-align: center;\n  padding: 120px 0 0; }\n\nheader h1 {\n  font-size: 1.2rem; }\n\nheader p {\n  font-size: .9rem;\n  margin-top: .6em; }\n\nheader a:hover {\n  text-decoration: underline; }\n\nsection {\n  width: 90%;\n  max-width: 1200px;\n  margin: 50px auto; }\n\nsection h2 {\n  border-bottom: 1px solid #e2e2e2;\n  padding: 0 0 1em .2em;\n  margin-bottom: 1em;\n  font-size: 1rem; }\n\nul::after {\n  clear: both;\n  content: \"\";\n  display: table; }\n\nul li {\n  width: 25%;\n  float: left;\n  padding: 16px 0;\n  text-align: center;\n  border-radius: .25em;\n  transition: background 0.2s;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  overflow: hidden; }\n\nul li:hover {\n  background: #dbdbdb; }\n\nul p,\nul em,\nul input {\n  display: inline-block;\n  font-size: 0.7rem;\n  color: #999999;\n  -webkit-user-select: auto;\n  -moz-user-select: auto;\n  -ms-user-select: auto;\n  user-select: auto;\n  white-space: nowrap;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: pointer; }\n\nul p {\n  padding: 10px;\n  margin-top: 10px; }\n\nul p::-moz-selection,\nul em::-moz-selection {\n  background: #766acf;\n  color: #efefef; }\n\nul p::selection,\nul em::selection {\n  background: #766acf;\n  color: #efefef; }\n\nul em {\n  margin-bottom: 8px; }\n\nul em::before {\n  content: '['; }\n\nul em::after {\n  content: ']'; }\n\nul input {\n  text-align: center;\n  background: transparent;\n  border: none;\n  box-shadow: none;\n  outline: none; }\n\n@media only screen and (min-width: 768px) {\n  ul li {\n    width: 20%;\n    float: left; } }\n\n@media only screen and (min-width: 1024px) {\n  ul li {\n    width: 12.5%;\n    float: left;\n    padding: 32px 0; } }\n\n/* --------------------------------\n\nSmart fixed navigation\n\n-------------------------------- */\n\n#cd-nav ul {\n  /* mobile first */\n  position: fixed;\n  width: 90%;\n  max-width: 400px;\n  max-height: 90%;\n  right: 5%;\n  bottom: 5%;\n  border-radius: 0.25em;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  background: white;\n  visibility: hidden;\n  /* remove overflow:hidden if you want to create a drop-down menu - but then remember to fix/eliminate the list items animation */\n  overflow: hidden;\n  overflow-y: auto;\n  z-index: 1;\n  /* Force Hardware Acceleration in WebKit */\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n  -webkit-transform-origin: 100% 100%;\n  transform-origin: 100% 100%;\n  transition: visibility 0s 0.3s, -webkit-transform 0.3s;\n  transition: transform 0.3s, visibility 0s 0.3s;\n  transition: transform 0.3s, visibility 0s 0.3s, -webkit-transform 0.3s; }\n\n#cd-nav ul li {\n  /* Force Hardware Acceleration in WebKit */\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  display: block;\n  width: 100%;\n  padding: 0;\n  text-align: left; }\n\n#cd-nav ul li:hover {\n  background-color: #FFF; }\n\n#cd-nav ul.is-visible {\n  visibility: visible;\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  transition: visibility 0s 0s, -webkit-transform 0.3s;\n  transition: transform 0.3s, visibility 0s 0s;\n  transition: transform 0.3s, visibility 0s 0s, -webkit-transform 0.3s; }\n\n#cd-nav li a {\n  display: block;\n  padding: 1em;\n  font-size: 1.2rem;\n  border-bottom: 1px solid #eff2f6; }\n\n#cd-nav li a:hover {\n  color: #333333; }\n\n#cd-nav li:last-child a {\n  border-bottom: none; }\n\n.cd-nav-trigger {\n  position: fixed;\n  bottom: 5%;\n  right: 5%;\n  width: 44px;\n  height: 44px;\n  background: white;\n  border-radius: 0.25em;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  /* image replacement */\n  overflow: hidden;\n  text-indent: 100%;\n  white-space: nowrap;\n  z-index: 2; }\n\n.cd-nav-trigger span {\n  /* the span element is used to create the menu icon */\n  position: absolute;\n  display: block;\n  width: 20px;\n  height: 2px;\n  background: #333333;\n  top: 50%;\n  margin-top: -1px;\n  left: 50%;\n  margin-left: -10px;\n  transition: background 0.3s; }\n\n.cd-nav-trigger span::before,\n.cd-nav-trigger span::after {\n  content: '';\n  position: absolute;\n  left: 0;\n  background: inherit;\n  width: 100%;\n  height: 100%;\n  /* Force Hardware Acceleration in WebKit */\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transition: background 0s, -webkit-transform 0.3s;\n  transition: transform 0.3s, background 0s;\n  transition: transform 0.3s, background 0s, -webkit-transform 0.3s; }\n\n.cd-nav-trigger span::before {\n  top: -6px;\n  -webkit-transform: rotate(0);\n  transform: rotate(0); }\n\n.cd-nav-trigger span::after {\n  bottom: -6px;\n  -webkit-transform: rotate(0);\n  transform: rotate(0); }\n\n.cd-nav-trigger.menu-is-open {\n  box-shadow: none; }\n\n.cd-nav-trigger.menu-is-open span {\n  background: rgba(232, 74, 100, 0); }\n\n.cd-nav-trigger.menu-is-open span::before,\n.cd-nav-trigger.menu-is-open span::after {\n  background: #333333; }\n\n.cd-nav-trigger.menu-is-open span::before {\n  top: 0;\n  -webkit-transform: rotate(135deg);\n  transform: rotate(135deg); }\n\n.cd-nav-trigger.menu-is-open span::after {\n  bottom: 0;\n  -webkit-transform: rotate(225deg);\n  transform: rotate(225deg); }\n\n.now-ui-icons {\n  display: inline-block;\n  font: normal normal normal 32px/1 'Nucleo Outline';\n  speak: none;\n  text-transform: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9udWNsZW9pY29ucy9DOlxcVXNlcnNcXGpvaG5tXFxEb2N1bWVudHNcXEdpdEh1YlxcU2ltcGxlc3QtQ29va2Jvb2stQW5ndWxhclxcc2ltcGxlc3QtY29va2Jvb2svc3JjXFxhcHBcXGNvbXBvbmVudHNcXG51Y2xlb2ljb25zXFxudWNsZW9pY29ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9udWNsZW9pY29ucy9udWNsZW9pY29ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaUZJLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7RUFDZixhQUFhO0VBQ2Isd0JBQXdCLEVBQUE7O0FBRzVCLCtEQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7RUFZSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjs7RUFFSSxnQkFBZ0IsRUFBQTs7QUFHcEI7O0VBRUksWUFBWSxFQUFBOztBQUdoQjs7OztFQUlJLFdBQVc7RUFDWCxhQUFhLEVBQUE7O0FBR2pCO0VBQ0kseUJBQXlCO0VBQ3pCLGlCQUFpQixFQUFBOztBQUtyQjs7Ozs7O2tDQ0prQzs7QURZbEM7Ozs7a0NDUGtDOztBRGFsQzs7O0VBR0ksc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksY0FBYztFQUNkLHFCQUFxQixFQUFBOztBQUd6Qjs7OztrQ0Naa0M7O0FEa0JsQztFQUNJLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksMEJBQTBCLEVBQUE7O0FBRzlCO0VBQ0ksVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxnQ0FBZ0M7RUFDaEMscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksVUFBVTtFQUNWLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUdwQiwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLG1CQUFtQixFQUFBOztBQUd2Qjs7O0VBR0kscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksYUFBYTtFQUNiLGdCQUFnQixFQUFBOztBQUdwQjs7RUFFSSxtQkFBbUI7RUFDbkIsY0FBYyxFQUFBOztBQUhsQjs7RUFFSSxtQkFBbUI7RUFDbkIsY0FBYyxFQUFBOztBQUdsQjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWEsRUFBQTs7QUFHakI7RUFDSTtJQUNJLFVBQVU7SUFDVixXQUFXLEVBQUEsRUFDZDs7QUFHTDtFQUNJO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlLEVBQUEsRUFDbEI7O0FBR0w7Ozs7a0NDakNrQzs7QUR1Q2xDO0VBQ0ksaUJBQUE7RUFDQSxlQUFlO0VBQ2YsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsU0FBUztFQUNULFVBQVU7RUFDVixxQkFBcUI7RUFDckIsdUNBQXVDO0VBQ3ZDLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0lBQUE7RUFDQSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDViwwQ0FBQTtFQUNBLG1DQUFtQztFQUNuQywyQkFBMkI7RUFDM0IsMkJBQTJCO0VBSTNCLG1CQUFtQjtFQUNuQixtQ0FBbUM7RUFJbkMsMkJBQTJCO0VBRzNCLHNEQUE4QztFQUE5Qyw4Q0FBOEM7RUFBOUMsc0VBQThDLEVBQUE7O0FBR2xEO0VBQ0ksMENBQUE7RUFDQSxtQ0FBbUM7RUFDbkMsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsVUFBVTtFQUNWLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFJM0IsbUJBQW1CO0VBR25CLG9EQUE0QztFQUE1Qyw0Q0FBNEM7RUFBNUMsb0VBQTRDLEVBQUE7O0FBR2hEO0VBQ0ksY0FBYztFQUNkLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0NBQWdDLEVBQUE7O0FBR3BDO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGVBQWU7RUFDZixVQUFVO0VBQ1YsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQix1Q0FBdUM7RUFDdkMsc0JBQUE7RUFDQSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixVQUFVLEVBQUE7O0FBR2Q7RUFDSSxxREFBQTtFQUNBLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1Qsa0JBQWtCO0VBR2xCLDJCQUEyQixFQUFBOztBQUcvQjs7RUFFSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWiwwQ0FBQTtFQUNBLGdDQUFnQztFQUloQyx3QkFBd0I7RUFDeEIsbUNBQW1DO0VBQ25DLDJCQUEyQjtFQUczQixpREFBeUM7RUFBekMseUNBQXlDO0VBQXpDLGlFQUF5QyxFQUFBOztBQUc3QztFQUNJLFNBQVM7RUFDVCw0QkFBNEI7RUFJNUIsb0JBQW9CLEVBQUE7O0FBR3hCO0VBQ0ksWUFBWTtFQUNaLDRCQUE0QjtFQUk1QixvQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxpQ0FBaUMsRUFBQTs7QUFHckM7O0VBRUksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksTUFBTTtFQUNOLGlDQUFpQztFQUlqQyx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxTQUFTO0VBQ1QsaUNBQWlDO0VBSWpDLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLHFCQUFxQjtFQUNyQixrREFBa0Q7RUFDbEQsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixtQ0FBbUM7RUFDbkMsa0NBQWtDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL251Y2xlb2ljb25zL251Y2xlb2ljb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm51Y2xlby1pY29ucy1zdHlsZSxcbi5udWNsZW8taWNvbnMtc3R5bGUsXG5kaXYsXG5zcGFuLFxuYXBwbGV0LFxub2JqZWN0LFxuaWZyYW1lLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxucCxcbmJsb2NrcXVvdGUsXG5wcmUsXG5hLFxuYWJicixcbmFjcm9ueW0sXG5hZGRyZXNzLFxuYmlnLFxuY2l0ZSxcbmNvZGUsXG5kZWwsXG5kZm4sXG5lbSxcbmltZyxcbmlucyxcbmtiZCxcbnEsXG5zLFxuc2FtcCxcbnNtYWxsLFxuc3RyaWtlLFxuc3Ryb25nLFxuc3ViLFxuc3VwLFxudHQsXG52YXIsXG5iLFxudSxcbmksXG5jZW50ZXIsXG5kbCxcbmR0LFxuZGQsXG5vbCxcbnVsLFxubGksXG5maWVsZHNldCxcbmZvcm0sXG5sYWJlbCxcbmxlZ2VuZCxcbnRhYmxlLFxuY2FwdGlvbixcbnRib2R5LFxudGZvb3QsXG50aGVhZCxcbnRyLFxudGgsXG50ZCxcbmFydGljbGUsXG5hc2lkZSxcbmNhbnZhcyxcbmRldGFpbHMsXG5lbWJlZCxcbmZpZ3VyZSxcbmZpZ2NhcHRpb24sXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxub3V0cHV0LFxucnVieSxcbnNlY3Rpb24sXG5zdW1tYXJ5LFxudGltZSxcbm1hcmssXG5hdWRpbyxcbnZpZGVvIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKiAubnVjbGVvLWljb25zLXN0eWxlNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbnNlY3Rpb24sXG5tYWluIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm51Y2xlby1pY29ucy1zdHlsZSB7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbm9sLFxudWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGUsXG5xIHtcbiAgICBxdW90ZXM6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGU6YmVmb3JlLFxuYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLFxucTphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgY29udGVudDogbm9uZTtcbn1cblxudGFibGUge1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cblxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5OdWNsZW8gT3V0bGluZSBXZWIgRm9udCAtIG51Y2xlb2FwcC5jb20vXG5MaWNlbnNlIC0gbnVjbGVvYXBwLmNvbS9saWNlbnNlL1xuQ3JlYXRlZCB1c2luZyBJY29Nb29uIC0gaWNvbW9vbi5pb1xuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5QcmltYXJ5IHN0eWxlXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiosXG4qOjphZnRlcixcbio6OmJlZm9yZSB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLm51Y2xlby1pY29ucy1zdHlsZSB7XG4gICAgZm9udC1zaXplOiA2Mi41JTtcbn1cblxuLm51Y2xlby1pY29ucy1zdHlsZSB7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgYmFja2dyb3VuZDogI2VmZWZlZjtcbn1cblxuYSB7XG4gICAgY29sb3I6ICM3NjZhY2Y7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5NYWluIGNvbXBvbmVudHNcblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuaGVhZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTIwcHggMCAwO1xufVxuXG5oZWFkZXIgaDEge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG5oZWFkZXIgcCB7XG4gICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICBtYXJnaW4tdG9wOiAuNmVtO1xufVxuXG5oZWFkZXIgYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbnNlY3Rpb24ge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XG59XG5cbnNlY3Rpb24gaDIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTJlMmUyO1xuICAgIHBhZGRpbmc6IDAgMCAxZW0gLjJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG51bDo6YWZ0ZXIge1xuICAgIGNsZWFyOiBib3RoO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogdGFibGU7XG59XG5cbnVsIGxpIHtcbiAgICB3aWR0aDogMjUlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDE2cHggMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogLjI1ZW07XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG4gICAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxudWwgbGk6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNkYmRiZGI7XG59XG5cbnVsIHAsXG51bCBlbSxcbnVsIGlucHV0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgY29sb3I6ICM5OTk5OTk7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogYXV0bztcbiAgICAtbW96LXVzZXItc2VsZWN0OiBhdXRvO1xuICAgIC1tcy11c2VyLXNlbGVjdDogYXV0bztcbiAgICB1c2VyLXNlbGVjdDogYXV0bztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG51bCBwIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbnVsIHA6OnNlbGVjdGlvbixcbnVsIGVtOjpzZWxlY3Rpb24ge1xuICAgIGJhY2tncm91bmQ6ICM3NjZhY2Y7XG4gICAgY29sb3I6ICNlZmVmZWY7XG59XG5cbnVsIGVtIHtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbnVsIGVtOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICdbJztcbn1cblxudWwgZW06OmFmdGVyIHtcbiAgICBjb250ZW50OiAnXSc7XG59XG5cbnVsIGlucHV0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIHVsIGxpIHtcbiAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIHVsIGxpIHtcbiAgICAgICAgd2lkdGg6IDEyLjUlO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgcGFkZGluZzogMzJweCAwO1xuICAgIH1cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuU21hcnQgZml4ZWQgbmF2aWdhdGlvblxuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4jY2QtbmF2IHVsIHtcbiAgICAvKiBtb2JpbGUgZmlyc3QgKi9cbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDkwJTtcbiAgICByaWdodDogNSU7XG4gICAgYm90dG9tOiA1JTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAvKiByZW1vdmUgb3ZlcmZsb3c6aGlkZGVuIGlmIHlvdSB3YW50IHRvIGNyZWF0ZSBhIGRyb3AtZG93biBtZW51IC0gYnV0IHRoZW4gcmVtZW1iZXIgdG8gZml4L2VsaW1pbmF0ZSB0aGUgbGlzdCBpdGVtcyBhbmltYXRpb24gKi9cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgei1pbmRleDogMTtcbiAgICAvKiBGb3JjZSBIYXJkd2FyZSBBY2NlbGVyYXRpb24gaW4gV2ViS2l0ICovXG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xuICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XG4gICAgLW8tdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3MsIHZpc2liaWxpdHkgMHMgMC4zcztcbiAgICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuM3MsIHZpc2liaWxpdHkgMHMgMC4zcztcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgdmlzaWJpbGl0eSAwcyAwLjNzO1xufVxuXG4jY2QtbmF2IHVsIGxpIHtcbiAgICAvKiBGb3JjZSBIYXJkd2FyZSBBY2NlbGVyYXRpb24gaW4gV2ViS2l0ICovXG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuI2NkLW5hdiB1bCBsaTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbn1cblxuI2NkLW5hdiB1bC5pcy12aXNpYmxlIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zcywgdmlzaWJpbGl0eSAwcyAwcztcbiAgICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuM3MsIHZpc2liaWxpdHkgMHMgMHM7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIHZpc2liaWxpdHkgMHMgMHM7XG59XG5cbiNjZC1uYXYgbGkgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZmMmY2O1xufVxuXG4jY2QtbmF2IGxpIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMzMzMzMzO1xufVxuXG4jY2QtbmF2IGxpOmxhc3QtY2hpbGQgYSB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmNkLW5hdi10cmlnZ2VyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiA1JTtcbiAgICByaWdodDogNSU7XG4gICAgd2lkdGg6IDQ0cHg7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgLyogaW1hZ2UgcmVwbGFjZW1lbnQgKi9cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtaW5kZW50OiAxMDAlO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgei1pbmRleDogMjtcbn1cblxuLmNkLW5hdi10cmlnZ2VyIHNwYW4ge1xuICAgIC8qIHRoZSBzcGFuIGVsZW1lbnQgaXMgdXNlZCB0byBjcmVhdGUgdGhlIG1lbnUgaWNvbiAqL1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xuICAgIHRvcDogNTAlO1xuICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcztcbiAgICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcztcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3M7XG59XG5cbi5jZC1uYXYtdHJpZ2dlciBzcGFuOjpiZWZvcmUsXG4uY2QtbmF2LXRyaWdnZXIgc3Bhbjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC8qIEZvcmNlIEhhcmR3YXJlIEFjY2VsZXJhdGlvbiBpbiBXZWJLaXQgKi9cbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zcywgYmFja2dyb3VuZCAwcztcbiAgICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuM3MsIGJhY2tncm91bmQgMHM7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIGJhY2tncm91bmQgMHM7XG59XG5cbi5jZC1uYXYtdHJpZ2dlciBzcGFuOjpiZWZvcmUge1xuICAgIHRvcDogLTZweDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xufVxuXG4uY2QtbmF2LXRyaWdnZXIgc3Bhbjo6YWZ0ZXIge1xuICAgIGJvdHRvbTogLTZweDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xufVxuXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHNwYW4ge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjMyLCA3NCwgMTAwLCAwKTtcbn1cblxuLmNkLW5hdi10cmlnZ2VyLm1lbnUtaXMtb3BlbiBzcGFuOjpiZWZvcmUsXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHNwYW46OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xufVxuXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHNwYW46OmJlZm9yZSB7XG4gICAgdG9wOiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xufVxuXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHNwYW46OmFmdGVyIHtcbiAgICBib3R0b206IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XG59XG5cbi5ub3ctdWktaWNvbnMge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAzMnB4LzEgJ051Y2xlbyBPdXRsaW5lJztcbiAgICBzcGVhazogbm9uZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuIiwiLm51Y2xlby1pY29ucy1zdHlsZSxcbi5udWNsZW8taWNvbnMtc3R5bGUsXG5kaXYsXG5zcGFuLFxuYXBwbGV0LFxub2JqZWN0LFxuaWZyYW1lLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxucCxcbmJsb2NrcXVvdGUsXG5wcmUsXG5hLFxuYWJicixcbmFjcm9ueW0sXG5hZGRyZXNzLFxuYmlnLFxuY2l0ZSxcbmNvZGUsXG5kZWwsXG5kZm4sXG5lbSxcbmltZyxcbmlucyxcbmtiZCxcbnEsXG5zLFxuc2FtcCxcbnNtYWxsLFxuc3RyaWtlLFxuc3Ryb25nLFxuc3ViLFxuc3VwLFxudHQsXG52YXIsXG5iLFxudSxcbmksXG5jZW50ZXIsXG5kbCxcbmR0LFxuZGQsXG5vbCxcbnVsLFxubGksXG5maWVsZHNldCxcbmZvcm0sXG5sYWJlbCxcbmxlZ2VuZCxcbnRhYmxlLFxuY2FwdGlvbixcbnRib2R5LFxudGZvb3QsXG50aGVhZCxcbnRyLFxudGgsXG50ZCxcbmFydGljbGUsXG5hc2lkZSxcbmNhbnZhcyxcbmRldGFpbHMsXG5lbWJlZCxcbmZpZ3VyZSxcbmZpZ2NhcHRpb24sXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxub3V0cHV0LFxucnVieSxcbnNlY3Rpb24sXG5zdW1tYXJ5LFxudGltZSxcbm1hcmssXG5hdWRpbyxcbnZpZGVvIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udDogaW5oZXJpdDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XG5cbi8qIC5udWNsZW8taWNvbnMtc3R5bGU1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbnNlY3Rpb24sXG5tYWluIHtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLm51Y2xlby1pY29ucy1zdHlsZSB7XG4gIGxpbmUtaGVpZ2h0OiAxOyB9XG5cbm9sLFxudWwge1xuICBsaXN0LXN0eWxlOiBub25lOyB9XG5cbmJsb2NrcXVvdGUsXG5xIHtcbiAgcXVvdGVzOiBub25lOyB9XG5cbmJsb2NrcXVvdGU6YmVmb3JlLFxuYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLFxucTphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBjb250ZW50OiBub25lOyB9XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7IH1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuTnVjbGVvIE91dGxpbmUgV2ViIEZvbnQgLSBudWNsZW9hcHAuY29tL1xuTGljZW5zZSAtIG51Y2xlb2FwcC5jb20vbGljZW5zZS9cbkNyZWF0ZWQgdXNpbmcgSWNvTW9vbiAtIGljb21vb24uaW9cblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblByaW1hcnkgc3R5bGVcblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiosXG4qOjphZnRlcixcbio6OmJlZm9yZSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cblxuLm51Y2xlby1pY29ucy1zdHlsZSB7XG4gIGZvbnQtc2l6ZTogNjIuNSU7IH1cblxuLm51Y2xlby1pY29ucy1zdHlsZSB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7IH1cblxuYSB7XG4gIGNvbG9yOiAjNzY2YWNmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuTWFpbiBjb21wb25lbnRzXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEyMHB4IDAgMDsgfVxuXG5oZWFkZXIgaDEge1xuICBmb250LXNpemU6IDEuMnJlbTsgfVxuXG5oZWFkZXIgcCB7XG4gIGZvbnQtc2l6ZTogLjlyZW07XG4gIG1hcmdpbi10b3A6IC42ZW07IH1cblxuaGVhZGVyIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxuXG5zZWN0aW9uIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogNTBweCBhdXRvOyB9XG5cbnNlY3Rpb24gaDIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyZTJlMjtcbiAgcGFkZGluZzogMCAwIDFlbSAuMmVtO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIGZvbnQtc2l6ZTogMXJlbTsgfVxuXG51bDo6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7IH1cblxudWwgbGkge1xuICB3aWR0aDogMjUlO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMTZweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IC4yNWVtO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcbiAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuXG51bCBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNkYmRiZGI7IH1cblxudWwgcCxcbnVsIGVtLFxudWwgaW5wdXQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBjb2xvcjogIzk5OTk5OTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogYXV0bztcbiAgLW1vei11c2VyLXNlbGVjdDogYXV0bztcbiAgLW1zLXVzZXItc2VsZWN0OiBhdXRvO1xuICB1c2VyLXNlbGVjdDogYXV0bztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxudWwgcCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7IH1cblxudWwgcDo6c2VsZWN0aW9uLFxudWwgZW06OnNlbGVjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICM3NjZhY2Y7XG4gIGNvbG9yOiAjZWZlZmVmOyB9XG5cbnVsIGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4OyB9XG5cbnVsIGVtOjpiZWZvcmUge1xuICBjb250ZW50OiAnWyc7IH1cblxudWwgZW06OmFmdGVyIHtcbiAgY29udGVudDogJ10nOyB9XG5cbnVsIGlucHV0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBvdXRsaW5lOiBub25lOyB9XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgdWwgbGkge1xuICAgIHdpZHRoOiAyMCU7XG4gICAgZmxvYXQ6IGxlZnQ7IH0gfVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICB1bCBsaSB7XG4gICAgd2lkdGg6IDEyLjUlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDMycHggMDsgfSB9XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblNtYXJ0IGZpeGVkIG5hdmlnYXRpb25cblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiNjZC1uYXYgdWwge1xuICAvKiBtb2JpbGUgZmlyc3QgKi9cbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBtYXgtaGVpZ2h0OiA5MCU7XG4gIHJpZ2h0OiA1JTtcbiAgYm90dG9tOiA1JTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIC8qIHJlbW92ZSBvdmVyZmxvdzpoaWRkZW4gaWYgeW91IHdhbnQgdG8gY3JlYXRlIGEgZHJvcC1kb3duIG1lbnUgLSBidXQgdGhlbiByZW1lbWJlciB0byBmaXgvZWxpbWluYXRlIHRoZSBsaXN0IGl0ZW1zIGFuaW1hdGlvbiAqL1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICB6LWluZGV4OiAxO1xuICAvKiBGb3JjZSBIYXJkd2FyZSBBY2NlbGVyYXRpb24gaW4gV2ViS2l0ICovXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XG4gIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xuICAtby10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzLCB2aXNpYmlsaXR5IDBzIDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogLW1vei10cmFuc2Zvcm0gMC4zcywgdmlzaWJpbGl0eSAwcyAwLjNzO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgdmlzaWJpbGl0eSAwcyAwLjNzOyB9XG5cbiNjZC1uYXYgdWwgbGkge1xuICAvKiBGb3JjZSBIYXJkd2FyZSBBY2NlbGVyYXRpb24gaW4gV2ViS2l0ICovXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxuXG4jY2QtbmF2IHVsIGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjsgfVxuXG4jY2QtbmF2IHVsLmlzLXZpc2libGUge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zcywgdmlzaWJpbGl0eSAwcyAwcztcbiAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAwLjNzLCB2aXNpYmlsaXR5IDBzIDBzO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgdmlzaWJpbGl0eSAwcyAwczsgfVxuXG4jY2QtbmF2IGxpIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMWVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZmYyZjY7IH1cblxuI2NkLW5hdiBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICMzMzMzMzM7IH1cblxuI2NkLW5hdiBsaTpsYXN0LWNoaWxkIGEge1xuICBib3JkZXItYm90dG9tOiBub25lOyB9XG5cbi5jZC1uYXYtdHJpZ2dlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA1JTtcbiAgcmlnaHQ6IDUlO1xuICB3aWR0aDogNDRweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC8qIGltYWdlIHJlcGxhY2VtZW50ICovXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtaW5kZW50OiAxMDAlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB6LWluZGV4OiAyOyB9XG5cbi5jZC1uYXYtdHJpZ2dlciBzcGFuIHtcbiAgLyogdGhlIHNwYW4gZWxlbWVudCBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgbWVudSBpY29uICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogIzMzMzMzMztcbiAgdG9wOiA1MCU7XG4gIG1hcmdpbi10b3A6IC0xcHg7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3M7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zczsgfVxuXG4uY2QtbmF2LXRyaWdnZXIgc3Bhbjo6YmVmb3JlLFxuLmNkLW5hdi10cmlnZ2VyIHNwYW46OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLyogRm9yY2UgSGFyZHdhcmUgQWNjZWxlcmF0aW9uIGluIFdlYktpdCAqL1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3MsIGJhY2tncm91bmQgMHM7XG4gIC1tb3otdHJhbnNpdGlvbjogLW1vei10cmFuc2Zvcm0gMC4zcywgYmFja2dyb3VuZCAwcztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIGJhY2tncm91bmQgMHM7IH1cblxuLmNkLW5hdi10cmlnZ2VyIHNwYW46OmJlZm9yZSB7XG4gIHRvcDogLTZweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMCk7IH1cblxuLmNkLW5hdi10cmlnZ2VyIHNwYW46OmFmdGVyIHtcbiAgYm90dG9tOiAtNnB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDApO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTsgfVxuXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHtcbiAgYm94LXNoYWRvdzogbm9uZTsgfVxuXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHNwYW4ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzMiwgNzQsIDEwMCwgMCk7IH1cblxuLmNkLW5hdi10cmlnZ2VyLm1lbnUtaXMtb3BlbiBzcGFuOjpiZWZvcmUsXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHNwYW46OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogIzMzMzMzMzsgfVxuXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHNwYW46OmJlZm9yZSB7XG4gIHRvcDogMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpOyB9XG5cbi5jZC1uYXYtdHJpZ2dlci5tZW51LWlzLW9wZW4gc3Bhbjo6YWZ0ZXIge1xuICBib3R0b206IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTsgfVxuXG4ubm93LXVpLWljb25zIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAzMnB4LzEgJ051Y2xlbyBPdXRsaW5lJztcbiAgc3BlYWs6IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/components/nucleoicons/nucleoicons.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/nucleoicons/nucleoicons.component.ts ***!
  \*****************************************************************/
/*! exports provided: NucleoiconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NucleoiconsComponent", function() { return NucleoiconsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NucleoiconsComponent = /** @class */ (function () {
    function NucleoiconsComponent(element) {
        this.element = element;
    }
    NucleoiconsComponent.prototype.ngOnInit = function () {
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
        navbar.classList.remove('navbar-transparent');
    };
    NucleoiconsComponent.prototype.ngOnDestroy = function () {
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
    };
    NucleoiconsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nucleoicons',
            template: __webpack_require__(/*! ./nucleoicons.component.html */ "./src/app/components/nucleoicons/nucleoicons.component.html"),
            styles: [__webpack_require__(/*! ./nucleoicons.component.scss */ "./src/app/components/nucleoicons/nucleoicons.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], NucleoiconsComponent);
    return NucleoiconsComponent;
}());



/***/ }),

/***/ "./src/app/components/recipe-detail/recipe.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/recipe-detail/recipe.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb class=\"row\"></app-breadcrumb>\r\n<div id=\"recipe-detail\" *ngIf=\"recipe\" class=\"col-md-12\">\r\n  <div class=\"row\">\r\n    <h2>{{recipe.name}}</h2>\r\n  </div>\r\n  <div class=\"row\">\r\n    <section class=\"col-md-8\">\r\n      <h4>Overview</h4>\r\n      <app-cook-time></app-cook-time>\r\n      <app-description></app-description>\r\n    </section>\r\n    <figure class=\"col-md-4\">\r\n      <img src=\"{{recipe.image}}\" width=\"100%\" height=\"100%\" />\r\n    </figure>\r\n  </div>\r\n  <div class=\"row\">\r\n    <section class=\"col-md-12\">\r\n        <app-ingredients></app-ingredients>\r\n    </section>\r\n    <section class=\"col-md-12\">\r\n        <app-instructions></app-instructions>\r\n    </section>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/recipe-detail/recipe.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/recipe-detail/recipe.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVjaXBlLWRldGFpbC9yZWNpcGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/recipe-detail/recipe.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/recipe-detail/recipe.component.ts ***!
  \**************************************************************/
/*! exports provided: RecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeComponent", function() { return RecipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_recipe_recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/recipe/recipe.service */ "./src/app/services/recipe/recipe.service.ts");



var RecipeComponent = /** @class */ (function () {
    function RecipeComponent(bs) {
        this.bs = bs;
    }
    RecipeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bs
            .getRecipes()
            .subscribe(function (data) {
            _this.recipes = data;
        });
    };
    RecipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe',
            template: __webpack_require__(/*! ./recipe.component.html */ "./src/app/components/recipe-detail/recipe.component.html"),
            styles: [__webpack_require__(/*! ./recipe.component.scss */ "./src/app/components/recipe-detail/recipe.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_recipe_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"]])
    ], RecipeComponent);
    return RecipeComponent;
}());



/***/ }),

/***/ "./src/app/components/recipe-list/recipe-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/recipe-list/recipe-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb class=\"row\"></app-breadcrumb>\r\n<section class=\"row\">\r\n  <h1 class=\"col-md-12\">Recipes</h1>\r\n</section>\r\n<app-recipes class=\"row\"></app-recipes>"

/***/ }),

/***/ "./src/app/components/recipe-list/recipe-list.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/recipe-list/recipe-list.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVjaXBlLWxpc3QvcmVjaXBlLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/recipe-list/recipe-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/recipe-list/recipe-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: RecipeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeListComponent", function() { return RecipeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RecipeListComponent = /** @class */ (function () {
    function RecipeListComponent() {
    }
    RecipeListComponent.prototype.ngOnInit = function () {
    };
    RecipeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-list',
            template: __webpack_require__(/*! ./recipe-list.component.html */ "./src/app/components/recipe-list/recipe-list.component.html"),
            styles: [__webpack_require__(/*! ./recipe-list.component.scss */ "./src/app/components/recipe-list/recipe-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RecipeListComponent);
    return RecipeListComponent;
}());



/***/ }),

/***/ "./src/app/components/recipes/recipes.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/recipes/recipes.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"recipes\" class=\"col-md-12\">\r\n  <div class=\"row\">\r\n    <div *ngFor=\"let recipe of recipes\" \r\n    class=\"col-md-3 col-sm-6 card-deck mx-auto\">\r\n      <a routerLink=\"/home/1/recipe-list/2/recipe/3/recipe/{{recipe._id}}\" class=\"card\">\r\n        <div>\r\n          <img src=\"{{recipe.image}}\" class=\"card-img-top\" />\r\n        </div>\r\n        <div class=\"card-body row\">\r\n          <section class=\"col-md-12\">\r\n              <h4 class=\"card-title\">{{ recipe.name }}</h4>\r\n          </section>\r\n        </div>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/components/recipes/recipes.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/recipes/recipes.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n.noLine {\n  text-decoration: none; }\n#recipes .card-deck {\n  align-items: stretch; }\n@media (min-width: 550px) {\n  #recipes ul {\n    list-style: none; }\n  #recipes a {\n    color: #000;\n    text-decoration: none;\n    margin-left: 0;\n    margin-right: 0; }\n    #recipes a:hover {\n      color: #0FA0CE; }\n  #recipes .card {\n    width: 18rem;\n    margin-top: 10px;\n    margin-bottom: 10px; }\n  #recipes .card-img-top {\n    width: 100%;\n    height: 15vw;\n    -o-object-fit: cover;\n       object-fit: cover; }\n  #recipes .painless {\n    background-color: lightblue; }\n  #recipes .quick {\n    background-color: lightgreen; }\n  #recipes .medium {\n    background-color: orange; }\n  #recipes .slow {\n    background-color: red; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWNpcGVzL0M6XFxVc2Vyc1xcam9obm1cXERvY3VtZW50c1xcR2l0SHViXFxTaW1wbGVzdC1Db29rYm9vay1Bbmd1bGFyXFxzaW1wbGVzdC1jb29rYm9vay9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3JlY2lwZXMvQzpcXFVzZXJzXFxqb2hubVxcRG9jdW1lbnRzXFxHaXRIdWJcXFNpbXBsZXN0LUNvb2tib29rLUFuZ3VsYXJcXHNpbXBsZXN0LWNvb2tib29rL3NyY1xcYXBwXFxjb21wb25lbnRzXFxyZWNpcGVzXFxyZWNpcGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBNEJBO0VBQ0UscUJBQXFCLEVBQUE7QUMzQnZCO0VBR1Esb0JBQW9CLEVBQUE7QUFHeEI7RUFOSjtJQVFZLGdCQUFnQixFQUFBO0VBUjVCO0lBV1ksV0RDQTtJQ0FBLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsZUFBZSxFQUFBO0lBZDNCO01BZ0JnQixjRENJLEVBQUE7RUNqQnBCO0lBb0JZLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CLEVBQUE7RUF0Qi9CO0lBeUJZLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0JBQWlCO09BQWpCLGlCQUFpQixFQUFBO0VBM0I3QjtJQThCWSwyQkFBMkIsRUFBQTtFQTlCdkM7SUFpQ1ksNEJBQTRCLEVBQUE7RUFqQ3hDO0lBb0NZLHdCQUF3QixFQUFBO0VBcENwQztJQXVDWSxxQkFBcUIsRUFBQSxFQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVjaXBlcy9yZWNpcGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5cclxuLy8gUmVzcG9uc2l2ZSBEZXNpZ25zXHJcbiRtZWRpYS1xdWVyeS1waG9uZTogNDAwcHg7XHJcbiRtZWRpYS1xdWVyeS1zbWFsbC10YWJsZXQ6IDU1MHB4O1xyXG4kbWVkaWEtcXVlcnktdGFibGV0OiA3NTBweDtcclxuJG1lZGlhLXF1ZXJ5LWRlc2t0b3A6IDEwMDBweDtcclxuJG1lZGlhLXF1ZXJ5LWRlc2t0b3AtaGQ6IDEyMDBweDtcclxuXHJcbi8vIEZvbnRzXHJcbiRmb250LXN0YWNrOiBcIlJhbGV3YXlcIiwgXCJIZWx2ZXRpY2FOZXVlXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuXHJcbi8vIENvbG9yc1xyXG4kZGVmYXVsdC1ib2R5LXRleHQ6ICMyMjI7XHJcbiRibGFjazogIzAwMDtcclxuJGJvbmUtd2hpdGU6ICNGRkY7XHJcbiRib3JkZXItd2hpdGU6ICNFMUUxRTE7XHJcbiRjb2RlOiAjRjFGMUYxO1xyXG4kbGluazogIzFFQUVEQjtcclxuJGxpbmstaG92ZXI6ICMwRkEwQ0U7XHJcbiRwcmltYXJ5LWJsdWU6ICMzM0MzRjA7XHJcbiRkYXRhLWJsdWU6ICMxMURGQzc7XHJcblxyXG4vLyBCb3JkZXJzXHJcbiRkZWZhdWx0LWJvcmRlcjogMXB4IHNvbGlkICRibGFjaztcclxuJHdoaXRlLWJvcmRlcjogMXB4IHNvbGlkICRib3JkZXItd2hpdGU7XHJcbiRwcmltYXJ5LWJsdWUtYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnktYmx1ZTtcclxuXHJcbi5ub0xpbmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXNcIjtcclxuXHJcbiNyZWNpcGVzIHtcclxuICAgIFxyXG4gICAgLmNhcmQtZGVjayB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KSB7XHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICRibGFjaztcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkbGluay1ob3ZlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxOHJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQtaW1nLXRvcCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1dnc7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucGFpbmxlc3Mge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5xdWljayB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZWRpdW0ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zbG93IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/recipes/recipes.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/recipes/recipes.component.ts ***!
  \*********************************************************/
/*! exports provided: RecipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesComponent", function() { return RecipesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_recipe_recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/recipe/recipe.service */ "./src/app/services/recipe/recipe.service.ts");



var RecipesComponent = /** @class */ (function () {
    function RecipesComponent(rs) {
        this.rs = rs;
    }
    RecipesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rs
            .getRecipes()
            .subscribe(function (data) {
            _this.recipes = data;
        });
    };
    RecipesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipes',
            template: __webpack_require__(/*! ./recipes.component.html */ "./src/app/components/recipes/recipes.component.html"),
            styles: [__webpack_require__(/*! ./recipes.component.scss */ "./src/app/components/recipes/recipes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_recipe_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"]])
    ], RecipesComponent);
    return RecipesComponent;
}());



/***/ }),

/***/ "./src/app/components/sections/blogs/blogs.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/sections/blogs/blogs.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cd-section\" id=\"blogs\">\n    <!--     *********     BLOGS 1      *********      -->\n    <div class=\"blogs-1\" id=\"blogs-1\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-10 ml-auto mr-auto\">\n                    <h2 class=\"title\">Latest Blogposts</h2>\n                    <br />\n                    <div class=\"card card-plain card-blog\">\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <div class=\"card-image\">\n                                    <img class=\"img img-raised rounded\" src=\"assets/img/examples/card-blog4.jpg\" />\n                                </div>\n                            </div>\n                            <div class=\"col-md-7\">\n                                <h6 class=\"category text-info\">Enterprise</h6>\n                                <h3 class=\"card-title\">\n                                    <a href=\"#pablo\">Warner Music Group buys concert discovery service Songkick</a>\n                                </h3>\n                                <p class=\"card-description\">\n                                    Warner Music Group announced today it’s acquiring the selected assets of the music platform Songkick, including its app for finding concerts and the company’s trademark. Songkick has been involved in a lawsuit against the major…\n                                    <a href=\"#pablo\"> Read More </a>\n                                </p>\n                                <p class=\"author\">\n                                    by\n                                    <a href=\"#pablo\">\n                                        <b>Sarah Perez</b>\n                                    </a>, 2 days ago\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card card-plain card-blog\">\n                        <div class=\"row\">\n                            <div class=\"col-md-7\">\n                                <h6 class=\"category text-danger\">\n                                    <i class=\"now-ui-icons now-ui-icons media-2_sound-wave\"></i> Startup\n                                </h6>\n                                <h3 class=\"card-title\">\n                                    <a href=\"#pablo\">Insticator raises $5.2M to help publishers</a>\n                                </h3>\n                                <p class=\"card-description\">\n                                    Insticator is announcing that it has raised $5.2 million in Series A funding. The startup allows online publishers to add quizzes, polls and other interactive elements (either created by Insticator or by the publisher themselves) to their stories.\n                                    <a href=\"#pablo\"> Read More </a>\n                                </p>\n                                <p class=\"author\">\n                                    by\n                                    <a href=\"#pablo\">\n                                        <b>Anthony Ha</b>\n                                    </a>, 5 days ago\n                                </p>\n                            </div>\n                            <div class=\"col-md-5\">\n                                <div class=\"card-image\">\n                                    <img class=\"img img-raised rounded\n                        \" src=\"assets/img/examples/card-blog6.jpg\" />\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END BLOGS 1      *********      -->\n    <!--     *********     BLOGS 2      *********      -->\n    <div class=\"blogs-2\" id=\"blogs-2\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-10 ml-auto mr-auto\">\n                    <h2 class=\"title\">Latest Blogposts 2</h2>\n                    <br />\n                    <div class=\"row justify-content-center\">\n                        <div class=\"col-md-5\">\n                            <div class=\"card card-plain card-blog\">\n                                <div class=\"card-image\">\n                                    <a href=\"#pablo\">\n                                        <img class=\"img img-raised rounded\" src=\"assets/img/examples/card-blog7.jpg\" />\n                                    </a>\n                                </div>\n                                <div class=\"card-body\">\n                                    <h6 class=\"category text-info\">Enterprise</h6>\n                                    <h5 class=\"card-title\">\n                                        <a href=\"#pablo\">Alexa brings hands-free TV to more devices</a>\n                                    </h5>\n                                    <p class=\"card-description\">\n                                        Alexa’s latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward, rewind and more, without having to first invoke a specific skill, or even press a button on their remote.\n                                        <a href=\"#pablo\">Read More </a>\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-5\">\n                            <div class=\"card card-plain card-blog\">\n                                <div class=\"card-image\">\n                                    <a href=\"#pablo\">\n                                        <img class=\"img img-raised rounded\" src=\"assets/img/examples/card-blog9.jpg\" />\n                                    </a>\n                                </div>\n                                <div class=\"card-body\">\n                                    <h6 class=\"category text-success\">\n                                        M&A\n                                    </h6>\n                                    <h5 class=\"card-title\">\n                                        <a href=\"#pablo\">Uber, Yandex combine ridesharing and UberEATS in $3.72B. JV</a>\n                                    </h5>\n                                    <p class=\"card-description\">\n                                        As Uber works through a huge amount of internal management turmoil, the company is also consolidating and rationalizing more of its international business. Today, the company announced it will be combining its rides-on-demand business and UberEATS.\n                                        <a href=\"#pablo\">Read More</a>\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row justify-content-center\">\n                        <div class=\"col-md-5\">\n                            <div class=\"card card-plain card-blog\">\n                                <div class=\"card-image\">\n                                    <a href=\"#pablo\">\n                                        <img class=\"img img-raised rounded\" src=\"assets/img/examples/card-blog16.jpg\" />\n                                    </a>\n                                </div>\n                                <div class=\"card-body\">\n                                    <h6 class=\"category text-info\">Music</h6>\n                                    <h5 class=\"card-title\">\n                                        <a href=\"#pablo\">The Affect Music Has On Different Teens</a>\n                                    </h5>\n                                    <p class=\"card-description\">\n                                        Music is something that every person has his or her own specific opinion about. Different people have different taste, and various types of music have many ways of leaving an impact on someone.\n                                        <a href=\"#pablo\">Read More </a>\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-5\">\n                            <div class=\"card card-plain card-blog\">\n                                <div class=\"card-image\">\n                                    <a href=\"#pablo\">\n                                        <img class=\"img img-raised rounded\" src=\"assets/img/examples/card-blog15.jpg\" />\n                                    </a>\n                                </div>\n                                <div class=\"card-body\">\n                                    <h6 class=\"category text-success\">\n                                        Broadcasting\n                                    </h6>\n                                    <h5 class=\"card-title\">\n                                        <a href=\"#pablo\">Radio networks to broadcast a common radio format</a>\n                                    </h5>\n                                    <p class=\"card-description\">\n                                        Radio broadcasting is a unidirectional wireless transmission over radio waves intended to reach a wide audience. Stations can be linked in radio networks to broadcast a common radio format.\n                                        <a href=\"#pablo\"> Read More </a>\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END BLOGS 2      *********      -->\n    <!--     *********     BLOGS 3      *********      -->\n    <div class=\"blogs-3\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-10 ml-auto mr-auto\">\n                    <h2 class=\"title\">Latest Blogposts 3</h2>\n                    <br />\n                    <div class=\"card card-plain card-blog\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4\">\n                                <div class=\"card-image\">\n                                    <img class=\"img img-raised rounded\" src=\"assets/img/examples/card-blog10.jpg\" />\n                                </div>\n                            </div>\n                            <div class=\"col-md-8\">\n                                <h3 class=\"card-title\">\n                                    <a href=\"#pablo\">Rover raised $65 million for pet sitting</a>\n                                </h3>\n                                <p class=\"card-description\">\n                                    Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover, which raised $65 million to expand its pet sitting and dog-walking businesses..\n                                    <a href=\"#pablo\"> Read More </a>\n                                </p>\n                                <div class=\"author\">\n                                    <img src=\"assets/img/olivia.jpg\" alt=\"...\" class=\"avatar img-raised\">\n                                    <span>Katie Roof</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card card-plain card-blog\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4\">\n                                <div class=\"card-image\">\n                                    <a href=\"#pablo\">\n                                        <img class=\"img img-raised rounded\" src=\"assets/img/examples/card-blog11.jpg\" />\n                                    </a>\n                                </div>\n                            </div>\n                            <div class=\"col-md-8\">\n                                <h3 class=\"card-title\">\n                                    <a href=\"#pablo\">MateLabs mixes machine learning with IFTTT</a>\n                                </h3>\n                                <p class=\"card-description\">\n                                    If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with a new offering from MateLabs. MateVerse, a platform where novices can spin out machine...\n                                    <a href=\"#pablo\"> Read More </a>\n                                </p>\n                                <div class=\"author\">\n                                    <img src=\"assets/img/james.jpg\" alt=\"...\" class=\"avatar img-raised\">\n                                    <span>John Mannes</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card card-plain card-blog\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4\">\n                                <div class=\"card-image\">\n                                    <a href=\"#pablo\">\n                                        <img class=\"img img-raised rounded\" src=\"assets/img/examples/card-blog12.jpg\" />\n                                    </a>\n                                </div>\n                            </div>\n                            <div class=\"col-md-8\">\n                                <h3 class=\"card-title\">\n                                    <a href=\"#pablo\">US venture investment ticks up in Q2 2017</a>\n                                </h3>\n                                <p class=\"card-description\">\n                                    Venture investment in U.S. startups rose sequentially in the second quarter of 2017, boosted by large, late-stage financings and a few outsized early-stage rounds in tech and healthcare..\n                                    <a href=\"#pablo\"> Read More </a>\n                                </p>\n                                <div class=\"author\">\n                                    <img src=\"assets/img/michael.jpg\" alt=\"...\" class=\"avatar img-raised\">\n                                    <span>Devin Coldewey</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END BLOGS 4      *********      -->\n    <div class=\"blogs-4\" id=\"blogs-4\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto\">\n                    <h2 class=\"title\">Latest Blogposts 4</h2>\n                    <br />\n                    <div class=\"card card-plain card-blog\">\n                        <div class=\"card-image\">\n                            <a href=\"#pablo\">\n                                <img class=\"img img-raised rounded\" src=\"assets/img/examples/card-blog13.jpg\" />\n                            </a>\n                        </div>\n                        <h6 class=\"category text-info\">Fashion</h6>\n                        <h3 class=\"card-title\">\n                            <a href=\"#pablo\">Groupon Moves Into Flash Fashion</a>\n                        </h3>\n                        <h5 class=\"card-description\">\n                            More acquisitions for Groupon to widen the net of consumers using its platform for more than daily deals. Today it is announcing the acquisition of ideeli, a flash fashion retailer, for $43 million in...\n                        </h5>\n                        <a href=\"#pablo\" class=\"btn btn-primary btn-round\">Read More</a>\n                    </div>\n                    <div class=\"card card-plain card-blog\">\n                        <div class=\"card-image\">\n                            <a href=\"#pablo\">\n                                <img class=\"img img-raised rounded\" src=\"assets/img/examples/card-blog14.jpg\" />\n                            </a>\n                        </div>\n                        <h6 class=\"category text-success\">Entertainment</h6>\n                        <h3 class=\"card-title\">\n                            <a href=\"#pablo\">When music and technology collide</a>\n                        </h3>\n                        <h5 class=\"card-description\">\n                            Some might say that technology is killing the music industry. But if you look around, there’s a beautiful marriage there — the music industry is evolving every day, and artists are embracing technology in new and innovative ways...\n                        </h5>\n                        <a href=\"#pablo\" class=\"btn btn-primary btn-round\"> Read More</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END BLOGS 4      *********      -->\n    <!--     *********    END BLOGS 5      *********      -->\n    <div class=\"blogs-5\" data-background-color=\"gray\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-10 ml-auto mr-auto\">\n                    <h2 class=\"title\">Latest Blogposts 5</h2>\n                    <div class=\"row\">\n                        <div class=\"col-md-4\">\n                            <div class=\"card card-blog\">\n                                <div class=\"card-image\">\n                                    <a href=\"#pablo\">\n                                        <img class=\"img rounded\" src=\"assets/img/card-blog2.jpg\">\n                                    </a>\n                                </div>\n                                <div class=\"card-body\">\n                                    <h6 class=\"category text-primary\">Features</h6>\n                                    <h5 class=\"card-title\">\n                                        That’s One Way To Ditch Your Passenger\n                                    </h5>\n                                    <p class=\"card-description\">\n                                        As near as we can tell, this guy must have thought he was going over backwards and tapped the rear...\n                                    </p>\n                                    <div class=\"card-footer\">\n                                        <div class=\"author\">\n                                            <img src=\"assets/img/julie.jpg\" alt=\"...\" class=\"avatar img-raised\">\n                                            <span>Mike John</span>\n                                        </div>\n                                        <div class=\"stats stats-right\">\n                                            <i class=\"now-ui-icons tech_watch-time\"></i> 5 min read\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <div class=\"card card-blog\">\n                                <div class=\"card-image\">\n                                    <a href=\"#pablo\">\n                                        <img class=\"img rounded\" src=\"assets/img/examples/card-blog18.jpg\">\n                                    </a>\n                                </div>\n                                <div class=\"card-body\">\n                                    <h6 class=\"category text-danger\">Animals</h6>\n                                    <h5 class=\"card-title\">\n                                        Shark Week: How to Watch It Like a Scientist\n                                    </h5>\n                                    <p class=\"card-description\">\n                                        Just when you thought it was safe to turn on your television, the Discovery Channel's \"Shark Week\"...\n                                    </p>\n                                    <div class=\"card-footer\">\n                                        <div class=\"author\">\n                                            <img src=\"assets/img/julie.jpg\" alt=\"...\" class=\"avatar img-raised\">\n                                            <span>Mike John</span>\n                                        </div>\n                                        <div class=\"stats stats-right\">\n                                            <i class=\"now-ui-icons tech_watch-time\"></i> 5 min read\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <div class=\"card card-blog\">\n                                <div class=\"card-image\">\n                                    <a href=\"#pablo\">\n                                        <img class=\"img rounded\" src=\"assets/img/examples/card-blog17.jpg\">\n                                    </a>\n                                </div>\n                                <div class=\"card-body\">\n                                    <h6 class=\"category text-primary\">Cars</h6>\n                                    <h5 class=\"card-title\">\n                                        Who's Afraid of the Self-Driving Car?\n                                    </h5>\n                                    <p class=\"card-description\">\n                                        It's been 60 years since the cover of Popular Mechanics magazine gave us the promise of flying cars...\n                                    </p>\n                                    <div class=\"card-footer\">\n                                        <div class=\"author\">\n                                            <img src=\"assets/img/olivia.jpg\" alt=\"...\" class=\"avatar img-raised\">\n                                            <span>Johanna Zmud</span>\n                                        </div>\n                                        <div class=\"stats stats-right\">\n                                            <i class=\"now-ui-icons ui-2_favourite-28\"></i> 2.4K\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END BLOGS 5      *********      -->\n</div>\n"

/***/ }),

/***/ "./src/app/components/sections/blogs/blogs.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/sections/blogs/blogs.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VjdGlvbnMvYmxvZ3MvYmxvZ3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/sections/blogs/blogs.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/sections/blogs/blogs.component.ts ***!
  \**************************************************************/
/*! exports provided: BlogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsComponent", function() { return BlogsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlogsComponent = /** @class */ (function () {
    function BlogsComponent() {
    }
    BlogsComponent.prototype.ngOnInit = function () {
    };
    BlogsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blogs',
            template: __webpack_require__(/*! ./blogs.component.html */ "./src/app/components/sections/blogs/blogs.component.html"),
            styles: [__webpack_require__(/*! ./blogs.component.scss */ "./src/app/components/sections/blogs/blogs.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlogsComponent);
    return BlogsComponent;
}());



/***/ }),

/***/ "./src/app/components/sections/contacts/contacts.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/sections/contacts/contacts.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"cd-section\" id=\"contact-us\">\n    <!--     *********    CONTACT US 1     *********      -->\n    <div class=\"contactus-1 section-image\" style=\"background-image: url('assets/img/contact1.jpg')\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-5\">\n                    <h2 class=\"title\">Get in Touch</h2>\n                    <h4 class=\"description\">You need more information? Check what other persons are saying about our product. They are very happy with their purchase.</h4>\n                    <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-primary\">\n                            <i class=\"now-ui-icons location_pin\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">Find us at the office</h4>\n                            <p class=\"description\"> Bld Mihail Kogalniceanu, nr. 8,\n                                <br> 7652 Bucharest,\n                                <br> Romania\n                            </p>\n                        </div>\n                    </div>\n                    <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-primary\">\n                            <i class=\"now-ui-icons tech_mobile\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">Give us a ring</h4>\n                            <p class=\"description\"> Michael Jordan\n                                <br> +40 762 321 762\n                                <br> Mon - Fri, 8:00-22:00\n                            </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-5 ml-auto mr-auto\">\n                    <div class=\"card card-contact card-raised\">\n                        <form role=\"form\" id=\"contact-form\" method=\"post\">\n                            <div class=\"card-header text-center\">\n                                <h4 class=\"card-title\">Contact Us</h4>\n                            </div>\n                            <div class=\"card-body\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-6 pr-2\">\n                                        <label>First name</label>\n                                        <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                          <div class=\"input-group-prepend\">\n                                              <span class=\"input-group-text\"><i class=\"now-ui-icons users_circle-08\"></i></span>\n                                          </div>\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\" (focus)=\"focus=true\" (blur)=\"focus=false\">\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-6 pl-2\">\n                                        <div class=\"form-group\">\n                                            <label>Last name</label>\n                                            <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                                              <div class=\"input-group-prepend\">\n                                                  <span class=\"input-group-text\"><i class=\"now-ui-icons text_caps-small\"></i></span>\n                                              </div>\n                                                <input type=\"text\" placeholder=\"Last Name...\" class=\"form-control\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label>Email address</label>\n                                    <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus2===true}\">\n                                      <div class=\"input-group-prepend\">\n                                          <span class=\"input-group-text\"><i class=\"now-ui-icons ui-1_email-85\"></i></span>\n                                      </div>\n                                        <input type=\"email\" placeholder=\"Email Here...\" class=\"form-control\" (focus)=\"focus2=true\" (blur)=\"focus2=false\">\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label>Your message</label>\n                                    <textarea name=\"message\" class=\"form-control\" id=\"message\" rows=\"6\"></textarea>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-md-6\">\n                                      <div class=\"form-check\">\n                                          <label class=\"form-check-label\">\n                                              <input class=\"form-check-input\" type=\"checkbox\">\n                                              <span class=\"form-check-sign\"></span>\n                                              I'm not a robot\n                                          </label>\n                                      </div>\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                        <button type=\"submit\" class=\"btn btn-primary btn-round pull-right\">Send Message</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END CONTACT US 1      *********      -->\n    <!--     *********    CONTACT US 2     *********      -->\n    <div class=\"contactus-2\">\n        <div id=\"contactUsMap\" class=\"map\">\n            <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [styles]=\"styles\">\n                <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n            </agm-map>\n        </div>\n        <div class=\"col-lg-6 col-md-10\">\n            <div class=\"card card-contact card-raised\">\n                <form role=\"form\" id=\"contact-form1\" method=\"post\">\n                    <div class=\"card-header text-center\">\n                        <h4 class=\"card-title\">Contact Us</h4>\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <div class=\"info info-horizontal\">\n                                    <div class=\"icon icon-primary\">\n                                        <i class=\"now-ui-icons tech_mobile\"></i>\n                                    </div>\n                                    <div class=\"description\">\n                                        <h5 class=\"info-title\">Give us a ring</h5>\n                                        <p> Michael Jordan\n                                            <br> +40 762 321 762\n                                            <br> Mon - Fri, 8:00-22:00\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div class=\"info info-horizontal\">\n                                    <div class=\"icon icon-primary\">\n                                        <i class=\"now-ui-icons location_pin\"></i>\n                                    </div>\n                                    <div class=\"description\">\n                                        <h5 class=\"info-title\">Find us at the office</h5>\n                                        <p> Bld Mihail Kogalniceanu, nr. 8,\n                                            <br> 7652 Bucharest,\n                                            <br> Romania\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6 pr-2\">\n                                <label>Full name</label>\n                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus3===true}\">\n                                  <div class=\"input-group-prepend\">\n                                      <span class=\"input-group-text\"><i class=\"now-ui-icons users_circle-08\"></i></span>\n                                  </div>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\"   (focus)=\"focus3=true\" (blur)=\"focus3=false\">\n                                </div>\n                            </div>\n                            <div class=\"col-md-6 pl-2\">\n                                <label>Email address</label>\n                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus4===true}\">\n                                  <div class=\"input-group-prepend\">\n                                      <span class=\"input-group-text\"><i class=\"now-ui-icons ui-1_email-85\"></i></span>\n                                  </div>\n                                    <input type=\"email\" placeholder=\"Email Here...\" class=\"form-control\"   (focus)=\"focus4=true\" (blur)=\"focus4=false\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                              <div class=\"form-check\">\n                                  <label class=\"form-check-label\">\n                                      <input class=\"form-check-input\" type=\"checkbox\">\n                                      <span class=\"form-check-sign\"></span>\n                                      I'm not a robot\n                                  </label>\n                              </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <button type=\"submit\" class=\"btn btn-primary btn-round pull-right\">Send Message</button>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END CONTACT US 2      *********      -->\n</div>\n"

/***/ }),

/***/ "./src/app/components/sections/contacts/contacts.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/sections/contacts/contacts.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VjdGlvbnMvY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/sections/contacts/contacts.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/sections/contacts/contacts.component.ts ***!
  \********************************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// declare const google: any;
var ContactsComponent = /** @class */ (function () {
    function ContactsComponent() {
        this.zoom = 14;
        this.lat = 44.445248;
        this.lng = 26.099672;
        this.styles = [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }];
    }
    // clickedMarker(label: string, index: number) {
    //     console.log(`clicked the marker: ${label || index}`)
    // }
    //
    // mapClicked($event: MouseEvent) {
    //     this.markers.push({
    //         lat: $event.coords.lat,
    //         lng: $event.coords.lng
    //     });
    // }
    //
    // markerDragEnd(m: marker, $event: MouseEvent) {
    //     console.log('dragEnd', m, $event);
    // }
    ContactsComponent.prototype.ngOnInit = function () {
        //   var myLatlng = new google.maps.LatLng(44.445248, 26.099672);
        //   var mapOptions = {
        //     // zoom: 14,
        //     center: myLatlng,
        //     styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}],
        //     scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
        //   }
        //
        //   var map = new google.maps.Map(document.getElementById("contactUsMap2"), mapOptions);
        //
        //   var marker = new google.maps.Marker({
        //       position: myLatlng,
        //       title:"Creative Tim Office"
        //   });
        //
        //   // To add the marker to the map, call setMap();
        //   marker.setMap(map);
    };
    ContactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! ./contacts.component.html */ "./src/app/components/sections/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.scss */ "./src/app/components/sections/contacts/contacts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/components/sections/features/features.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/sections/features/features.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cd-section\" id=\"features\">\n    <!--     *********     FEATURES 1      *********      -->\n    <div class=\"features-1\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto\">\n                    <h2 class=\"title\">Full-Funnel Social Analytics</h2>\n                    <h4 class=\"description\">Insight to help you create, connect, and convert. Understand Your Audience's Interests, Influence, Interactions, and Intent. Discover emerging topics and influencers to reach new audiences.</h4>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"info info-hover\">\n                        <div class=\"icon icon-primary\">\n                            <i class=\"now-ui-icons ui-2_chat-round\"></i>\n                        </div>\n                        <h4 class=\"info-title\">Social Conversations</h4>\n                        <p class=\"description\">Gain access to the demographics, psychographics, and location of unique people.</p>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"info info-hover\">\n                        <div class=\"icon icon-success\">\n                            <i class=\"now-ui-icons business_chart-pie-36\"></i>\n                        </div>\n                        <h4 class=\"info-title\">Analyze Performance</h4>\n                        <p class=\"description\">Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights.</p>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"info info-hover\">\n                        <div class=\"icon icon-warning\">\n                            <i class=\"now-ui-icons design-2_ruler-pencil\"></i>\n                        </div>\n                        <h4 class=\"info-title\">Measure Conversions</h4>\n                        <p class=\"description\">Track actions taken on your website, understand the impact on your bottom line.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END FEATURES 1      *********      -->\n    <!--     *********     FEATURES 2      *********      -->\n    <div class=\"features-2 section-image\" style=\"background-image: url('assets/img/bg22.jpg')\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-md-8 mr-auto ml-auto\">\n                    <h2 class=\"title\">Trello lets you work more.</h2>\n                    <h4 class=\"description\">Trello’s boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible and rewarding way.</h4>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"info\">\n                        <div class=\"icon icon-primary icon-circle\">\n                            <i class=\"now-ui-icons users_single-02\"></i>\n                        </div>\n                        <h4 class=\"info-title\">Work With Any Team</h4>\n                        <p class=\"description\">Whether it’s for work or even the next family vacation, Trello helps your team.</p>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"info\">\n                        <div class=\"icon icon-danger icon-circle\">\n                            <i class=\"now-ui-icons business_chart-bar-32\"></i>\n                        </div>\n                        <h4 class=\"info-title\">A Productivity Platform</h4>\n                        <p class=\"description\">Integrate the apps your team already uses directly into your workflow.</p>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"info\">\n                        <div class=\"icon icon-warning icon-circle\">\n                            <i class=\"now-ui-icons arrows-1_refresh-69\"></i>\n                        </div>\n                        <h4 class=\"info-title\">Always In Sync</h4>\n                        <p class=\"description\">No matter where you are, Trello stays in sync across all of your devices.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END FEATURES 2      *********      -->\n    <!--     *********     FEATURES 3      *********      -->\n    <div class=\"features-3\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto\">\n                    <h2 class=\"title\">Simpler. Smarter. Faster.</h2>\n                    <h4 class=\"description\">The CloudCheckr Cloud Management Platform (CMP) provides full visibility and control to reduce costs, improve cybersecurity posture, and automate critical tasks.</h4>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"info info-hover\">\n                        <div class=\"icon icon-success icon-circle\">\n                            <i class=\"now-ui-icons objects_globe\"></i>\n                        </div>\n                        <h4 class=\"info-title\">Asset Management</h4>\n                        <p class=\"description\">Cross-account dashboards provide sophisticated reporting for enterprise.</p>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"info info-hover\">\n                        <div class=\"icon icon-info icon-circle\">\n                            <i class=\"now-ui-icons education_atom\"></i>\n                        </div>\n                        <h4 class=\"info-title\">Resource Utilization</h4>\n                        <p class=\"description\">CloudCheckr provides summary and detailed usage statistics for resources.</p>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"info info-hover\">\n                        <div class=\"icon icon-primary icon-circle\">\n                            <i class=\"now-ui-icons tech_watch-time\"></i>\n                        </div>\n                        <h4 class=\"info-title\">Self-Healing</h4>\n                        <p class=\"description\">CloudCheckr enables users to save money, time, and effort.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END FEATURES 3      *********      -->\n    <!--     *********     FEATURES 4      *********      -->\n    <div class=\"features-4\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">Coming home, a pleasure!</h2>\n                    <h4 class=\"description\">Havenly is a convenient, personal and affordable way to redecorate your home room by room. Collaborate with our professional interior designers on our online platform. </h4>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"card card-background card-raised\" data-background-color style=\"background-image: url('assets/img/bg24.jpg')\">\n                        <div class=\"info\">\n                            <div class=\"icon icon-white\">\n                                <i class=\"now-ui-icons business_bulb-63\"></i>\n                            </div>\n                            <div class=\"description\">\n                                <h4 class=\"info-title\">Collaborate on ideas</h4>\n                                <p>Your designer will come back to you with an initial set of ideas.</p>\n                                <a href=\"#pablo\" class=\"ml-3\">Find more...</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-background card-raised\" data-background-color style=\"background-image: url('assets/img/bg23.jpg')\">\n                        <div class=\"info\">\n                            <div class=\"icon icon-white\">\n                                <i class=\"now-ui-icons business_badge\"></i>\n                            </div>\n                            <div class=\"description\">\n                                <h4 class=\"info-title\">Pick your designer</h4>\n                                <p>Havenly interior designers are vetted professionals and real people.</p>\n                                <a href=\"#pablo\">Find more...</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-background card-raised\" data-background-color style=\"background-image: url('assets/img/bg25.jpg')\">\n                        <div class=\"info\">\n                            <div class=\"icon icon-white\">\n                                <i class=\"now-ui-icons location_map-big\"></i>\n                            </div>\n                            <div class=\"description\">\n                                <h4 class=\"info-title\">Visualize your room</h4>\n                                <p>Share a floor plan, and we'll create a visualization of your room.</p>\n                                <a href=\"#pablo\" class=\"ml-3\">Find more...</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END FEATURES 4      *********      -->\n    <!--     *********     FEATURES 5      *********      -->\n    <div class=\"features-5\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-5\">\n                    <h2 class=\"title\">Working is a pleasure</h2>\n                    <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-primary icon-circle\">\n                            <i class=\"now-ui-icons location_world\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">Hundreds of Components</h4>\n                            <p>The moment you use Now UI Kit, you know you’ve never felt anything like it. With a single use lets you do more than ever before. </p>\n                        </div>\n                    </div>\n                    <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-primary icon-circle\">\n                            <i class=\"now-ui-icons sport_user-run\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">Easy to Use</h4>\n                            <p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature.</p>\n                        </div>\n                    </div>\n                    <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-primary icon-circle\">\n                            <i class=\"now-ui-icons ui-2_time-alarm\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">Fast Prototyping</h4>\n                            <p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature.</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-7\">\n                    <div class=\"tablet-container\">\n                        <img src=\"assets/img/ipad2-inverted.png\" />\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END FEATURES 5      *********      -->\n    <!--     *********     FEATURES 6      *********      -->\n    <div class=\"features-6\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">Working is a pleasure</h2>\n                    <h4 class=\"description\">This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information.</h4>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-info\">\n                            <i class=\"now-ui-icons design-2_html5\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h5 class=\"info-title\">For Developers</h5>\n                            <p>The moment you use Now UI Kit, you know you’ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before. </p>\n                        </div>\n                    </div>\n                    <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-danger\">\n                            <i class=\"now-ui-icons design_palette\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">For Designers</h4>\n                            <p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"phone-container\">\n                        <img src=\"assets/img/iphone2.png\" />\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-primary\">\n                            <i class=\"now-ui-icons design-2_ruler-pencil\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h5 class=\"info-title\">Bootstrap Grid</h5>\n                            <p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>\n                        </div>\n                    </div>\n                    <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-success\">\n                            <i class=\"now-ui-icons files_single-copy-04\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">Example Pages Included</h4>\n                            <p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END FEATURES 6      *********      -->\n    <!--     *********     FEATURES 7      *********      -->\n    <div class=\"features-7 section-image\" style=\"background-image: url('assets/img/bg11.jpg')\">\n        <div class=\"col-md-8 mr-auto ml-auto text-center\">\n            <h2 class=\"title\">Working is a pleasure</h2>\n            <h4 class=\"description\">This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information.</h4>\n        </div>\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-md-6 px-0\">\n                    <div class=\"col-sm-12\">\n                        <div class=\"info info-horizontal\">\n                            <div class=\"icon\">\n                                <i class=\"now-ui-icons design-2_html5\"></i>\n                            </div>\n                            <div class=\"description\">\n                                <h5 class=\"info-title\">For Developers</h5>\n                                <p class=\"description\">The moment you use Now UI Kit, you know you’ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before. </p>\n                            </div>\n                        </div>\n                        <div class=\"info info-horizontal\">\n                            <div class=\"icon\">\n                                <i class=\"now-ui-icons design_palette\"></i>\n                            </div>\n                            <div class=\"description\">\n                                <h5 class=\"info-title\">For Designers</h5>\n                                <p class=\"description\">The moment you use Now UI Kit, you know you’ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before. </p>\n                            </div>\n                        </div>\n                        <div class=\"info info-horizontal\">\n                            <div class=\"icon\">\n                                <i class=\"now-ui-icons design-2_ruler-pencil\"></i>\n                            </div>\n                            <div class=\"description\">\n                                <h5 class=\"info-title\">For Artists</h5>\n                                <p class=\"description\">The moment you use Now UI Kit, you know you’ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before. </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"image-container\">\n                        <img src=\"assets/img/ipad3.png\" alt=\"\">\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END FEATURES 7      *********      -->\n    <!--     *********     FEATURES 8      *********      -->\n    <div class=\"features-8 section-image\" style=\"background-image: url('assets/img/bg30.jpg')\">\n        <div class=\"col-md-8 ml-auto mr-auto text-center\">\n            <h2 class=\"title\">Working is a pleasure</h2>\n            <h4 class=\"description\">Woodpecker.co is a follow-up automation SaaS founded in 2015. We’re an international team of 17, speaking 4 languages. Our mission is to enable all B2B companies to connect with their Ideal Customers.</h4>\n        </div>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"card-image\">\n                            <img src=\"assets/img/bg28.jpg\" class=\"rounded\" alt=\"\">\n                        </div>\n                        <div class=\"info text-center\">\n                            <div class=\"icon\">\n                                <i class=\"now-ui-icons ui-1_email-85\"></i>\n                            </div>\n                            <h4 class=\"info-title\">Reply detection</h4>\n                            <p class=\"description\">If you get a reply, further follow-ups are automatically stopped.</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"card-image\">\n                            <img src=\"assets/img/bg26.jpg\" class=\"rounded\" alt=\"\">\n                        </div>\n                        <div class=\"info text-center\">\n                            <div class=\"icon\">\n                                <i class=\"now-ui-icons ui-1_calendar-60\"></i>\n                            </div>\n                            <h4 class=\"info-title\">Follow-up</h4>\n                            <p class=\"description\">Just set a number of days that you want send a follow-up. </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"card-image\">\n                            <img src=\"assets/img/bg27.jpg\" class=\"rounded\" alt=\"\">\n                        </div>\n                        <div class=\"info text-center\">\n                            <div class=\"icon\">\n                                <i class=\"now-ui-icons ui-1_send\"></i>\n                            </div>\n                            <h4 class=\"info-title\">Cold email</h4>\n                            <p class=\"description\">Unlimited number of prospects daily with personalized emails.</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"card-image\">\n                            <img src=\"assets/img/bg29.jpg\" class=\"rounded\" alt=\"\">\n                        </div>\n                        <div class=\"info text-center\">\n                            <div class=\"icon\">\n                                <i class=\"now-ui-icons ui-2_like\"></i>\n                            </div>\n                            <h4 class=\"info-title\">Teamwork</h4>\n                            <p class=\"description\">You and your teammates won’t address the same person twice. </p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END FEATURES 8      *********      -->\n</div>\n"

/***/ }),

/***/ "./src/app/components/sections/features/features.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/sections/features/features.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VjdGlvbnMvZmVhdHVyZXMvZmVhdHVyZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/sections/features/features.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/sections/features/features.component.ts ***!
  \********************************************************************/
/*! exports provided: FeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesComponent", function() { return FeaturesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FeaturesComponent = /** @class */ (function () {
    function FeaturesComponent() {
    }
    FeaturesComponent.prototype.ngOnInit = function () {
    };
    FeaturesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-features',
            template: __webpack_require__(/*! ./features.component.html */ "./src/app/components/sections/features/features.component.html"),
            styles: [__webpack_require__(/*! ./features.component.scss */ "./src/app/components/sections/features/features.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FeaturesComponent);
    return FeaturesComponent;
}());



/***/ }),

/***/ "./src/app/components/sections/headers/headers.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/sections/headers/headers.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cd-section\" id=\"headers\">\n    <!--     *********     HEADER 1      *********      -->\n    <div class=\"header-1\">\n        <nav class=\"navbar navbar-expand-lg navbar-transparent bg-primary navbar-absolute\">\n            <div class=\"container\">\n                <div class=\"navbar-translate\">\n                    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-primary\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar bar1\"></span>\n                        <span class=\"navbar-toggler-bar bar2\"></span>\n                        <span class=\"navbar-toggler-bar bar3\"></span>\n                    </button>\n                    <a class=\"navbar-brand\" href=\"#pablo\">Creative Tim</a>\n                </div>\n                <div class=\"collapse navbar-collapse\" id=\"example-navbar-primary\">\n                    <ul class=\"navbar-nav mx-auto\">\n                        <li class=\"nav-item active\">\n                            <a class=\"nav-link\" href=\"#pablo\">\n                                Home\n                            </a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#pablo\">\n                                About Us\n                            </a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#pablo\">\n                                Contact Us\n                            </a>\n                        </li>\n                    </ul>\n                    <ul class=\"nav navbar-nav\">\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"https://twitter.com/CreativeTim\">\n                                <i class=\"fa fa-twitter\"></i>\n                            </a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"https://www.facebook.com/CreativeTim\">\n                                <i class=\"fa fa-facebook-square\"></i>\n                            </a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"https://www.instagram.com/CreativeTimOfficial\">\n                                <i class=\"fa fa-instagram\"></i>\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </nav>\n        <div class=\"page-header header-filter\">\n            <div class=\"page-header-image\" style=\"background-image: url('assets/img/bg16.jpg');\"></div>\n            <div class=\"content-center\">\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-md-7 ml-auto text-right\">\n                            <h1 class=\"title\">History of surfing</h1>\n                            <h4 class=\"description\">The riding of waves has likely existed since humans began swimming in the ocean. In this sense, bodysurfing is the oldest type of wave-catching. Standing up on what is now called a surfboard is a relatively recent innovation developed by the Polynesians.</h4>\n                            <br />\n                            <div class=\"buttons\">\n                                <a href=\"#pablo\" class=\"btn btn-icon btn-link btn-neutral btn-lg\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                </a>\n                                <a href=\"#pablo\" class=\"btn btn-icon btn-link btn-neutral btn-lg\">\n                                    <i class=\"fa fa-facebook-square\"></i>\n                                </a>\n                                <a href=\"#pablo\" class=\"btn btn-icon btn-link btn-neutral btn-lg\">\n                                    <i class=\"fa fa-get-pocket\"></i>\n                                </a>\n                                <a href=\"#pablo\" class=\"btn btn-info btn-lg mr-3\">\n                                    Read More\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END HEADER 1      *********      -->\n    <!--     *********     HEADER 2      *********      -->\n    <div class=\"header-2\">\n        <nav class=\"navbar navbar-expand-lg navbar-transparent bg-primary navbar-absolute\">\n            <div class=\"container\">\n                <div class=\"navbar-translate\">\n                    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-primary\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar bar1\"></span>\n                        <span class=\"navbar-toggler-bar bar2\"></span>\n                        <span class=\"navbar-toggler-bar bar3\"></span>\n                    </button>\n                    <a class=\"navbar-brand\" href=\"#pablo\">Creative Tim</a>\n                </div>\n                <div class=\"collapse navbar-collapse\" id=\"example-navbar-primary1\">\n                    <ul class=\"navbar-nav mx-auto\">\n                        <li class=\"nav-item active\">\n                            <a class=\"nav-link\" href=\"#pablo\">\n                                Home\n                            </a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#pablo\">\n                                About Us\n                            </a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#pablo\">\n                                Products\n                            </a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#pablo\">\n                                Contact Us\n                            </a>\n                        </li>\n                    </ul>\n                    <ul class=\"nav navbar-nav navbar-right\">\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"https://twitter.com/CreativeTim\">\n                                <i class=\"fa fa-twitter\"></i>\n                            </a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"https://www.facebook.com/CreativeTim\">\n                                <i class=\"fa fa-facebook-square\"></i>\n                            </a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"https://www.instagram.com/CreativeTimOfficial\">\n                                <i class=\"fa fa-instagram\"></i>\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </nav>\n        <div class=\"page-header header-filter\">\n            <div class=\"page-header-image\" style=\"background-image: url('assets/img/bg14.jpg');\"></div>\n            <div class=\"content-center\">\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                            <h1 class=\"title\"> You should be here!</h1>\n                            <h5 class=\"description\">5,000 capacity venue, holding some of the latest technology lighting with a 24 colour laser system Amnesia is one of the islands most legendary clubs.</h5>\n                        </div>\n                        <div class=\"col-md-10 ml-auto mr-auto\">\n                            <div class=\"card card-raised card-form-horizontal card-plain\" data-background-color>\n                                <div class=\"card-body\">\n                                    <form method=\"\" action=\"\">\n                                        <div class=\"row\">\n                                            <div class=\"col-md-3\">\n                                                <div class=\"form-group\">\n                                                    <input type=\"text\" value=\"\" placeholder=\"Full Name\" class=\"form-control\" />\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-3\">\n                                                <div class=\"form-group\">\n                                                    <input type=\"email\" value=\"\" placeholder=\"Your Email\" class=\"form-control\" />\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-3\">\n                                                <div class=\"form-group\">\n                                                    <input type=\"password\" value=\"\" placeholder=\"Password\" class=\"form-control\" />\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-3\">\n                                                <button type=\"button\" class=\"btn btn-primary btn-round btn-block\">Join Us</button>\n                                            </div>\n                                        </div>\n                                    </form>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END HEADER 2      *********      -->\n    <!--     *********     HEADER 3      *********      -->\n    <div class=\"header-3\">\n        <nav class=\"navbar navbar-expand-lg navbar-transparent bg-primary navbar-absolute\">\n            <div class=\"container\">\n                <div class=\"navbar-translate\">\n                    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-primary\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar bar1\"></span>\n                        <span class=\"navbar-toggler-bar bar2\"></span>\n                        <span class=\"navbar-toggler-bar bar3\"></span>\n                    </button>\n                    <a class=\"navbar-brand\" href=\"#pablo\">Creative Tim</a>\n                </div>\n                <div class=\"collapse navbar-collapse\" id=\"example-navbar-primary2\">\n                    <ul class=\"navbar-nav ml-auto\">\n                        <li class=\"nav-item active\">\n                            <a class=\"nav-link\" href=\"#pablo\">\n                                Home\n                            </a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#pablo\">\n                                About Us\n                            </a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#pablo\">\n                                Contact Us\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </nav>\n        <ngb-carousel>\n            <ng-template ngbSlide>\n              <div class=\"page-header header-filter\">\n                  <div class=\"page-header-image\" style=\"background-image: url('assets/img/bg20.jpg');\"></div>\n                  <div class=\"content-center\">\n                      <div class=\"container text-left\">\n                          <div class=\"content-center\">\n                              <div class=\"row\">\n                                  <div class=\"col-md-5\">\n                                      <div class=\"iframe-container\">\n                                          <iframe height=\"250\" src=\"https://www.youtube.com/embed/rmfmdKOLzVI?rel=0&amp;controls=0&amp;showinfo=0\" frameborder=\"0\" allowfullscreen></iframe>\n                                      </div>\n                                  </div>\n                                  <div class=\"col-md-6 ml-auto mr-auto text-right\">\n                                      <h1 class=\"title\">On the run tour.</h1>\n                                      <h4 class=\"description \">On the Run Tour: Beyoncé and Jay Z is a 2014 concert special which documents the September 12 and 13, 2014, shows of American singers' Beyoncé and Jay-Z joint co-headlining venture On the Run Tour.</h4>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n            </ng-template>\n            <ng-template ngbSlide>\n              <div class=\"page-header header-filter\">\n                  <div class=\"page-header-image\" style=\"background-image: url('assets/img/bg15.jpg');\"></div>\n                  <div class=\"content-center\">\n                      <div class=\"container\">\n                          <div class=\"content-center\">\n                              <div class=\"row\">\n                                  <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                                      <h1 class=\"title\">Island of legends.</h1>\n                                      <h4 class=\"description \">The islands of Malta and Gozo are brilliant for a family holiday, packed with fun places to visit whatever your children’s ages. The islands’ small size means everywhere is within easy reach.</h4>\n                                      <br />\n                                      <h5>Connect with us on:</h5>\n                                      <div class=\"buttons\">\n                                          <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-danger btn-round mt-2\">\n                                              <i class=\"fa fa-twitter\"></i>\n                                          </a>\n                                          <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-danger btn-round mt-2\">\n                                              <i class=\"fa fa-facebook-square\"></i>\n                                          </a>\n                                          <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-danger btn-round mt-2\">\n                                              <i class=\"fa fa-google-plus\"></i>\n                                          </a>\n                                          <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-danger btn-round  mt-2\">\n                                              <i class=\"fa fa-instagram\"></i>\n                                          </a>\n                                      </div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n            </ng-template>\n            <ng-template ngbSlide>\n              <div class=\"page-header header-filter\">\n                  <div class=\"page-header-image\" style=\"background-image: url('assets/img/bg17.jpg');\"></div>\n                  <div class=\"content-center\">\n                      <div class=\"container\">\n                          <div class=\"content-center\">\n                              <div class=\"row\">\n                                  <div class=\"col-md-6 text-left\">\n                                      <h1 class=\"title\">Arctic Sea ice.</h1>\n                                      <h4 class=\"description \">According to the National Oceanic and Atmospheric Administration, Ted Scambos, NSIDC lead scientist, puts the potentially record low maximum sea ice extent this year down to low ice extent in the Pacific and a late drop in ice extent in the Barents Sea.</h4>\n                                      <br />\n                                      <div class=\"buttons\">\n                                          <a href=\"#pablo\" class=\"btn btn-neutral btn-primary btn-lg mr-1\">\n                                              <i class=\"now-ui-icons files_single-copy-04\"></i> Read More..\n                                          </a>\n                                          <a href=\"#pablo\" class=\"btn btn-primary btn-lg\">\n                                              <i class=\"now-ui-icons arrows-1_share-66\"></i> Subscribe\n                                          </a>\n                                      </div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n            </ng-template>\n        </ngb-carousel>\n    </div>\n    <!--     *********    END HEADER 3      *********      -->\n</div>\n"

/***/ }),

/***/ "./src/app/components/sections/headers/headers.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/sections/headers/headers.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VjdGlvbnMvaGVhZGVycy9oZWFkZXJzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/sections/headers/headers.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/sections/headers/headers.component.ts ***!
  \******************************************************************/
/*! exports provided: HeadersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadersComponent", function() { return HeadersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeadersComponent = /** @class */ (function () {
    function HeadersComponent() {
        this.icon_video_button_class = 'fa-play';
        this.text_video_button = 'Play Video';
    }
    HeadersComponent.prototype.ngOnInit = function () {
        //   $('[data-toggle="video"]').click(function(){
        //       id_video = $(this).data('video');
        //       video = $('#' + id_video).get(0);
        //
        //       parent = $(this).parent('div').parent('div');
        //
        //       if(video.paused){
        //           video.play();
        //           $(this).html('<i class="fa fa-pause"></i> Pause Video');
        //           parent.addClass('state-play');
        //       } else {
        //           video.pause();
        //           $(this).html('<i class="fa fa-play"></i> Play Video');
        //           parent.removeClass('state-play');
        //       }
        //   });
    };
    HeadersComponent.prototype.playBackgroundVideo = function (event) {
        var id_video = document.getElementById('video-source');
        var parent = event.target.parentElement.parentElement;
        if (id_video.paused) {
            id_video.play();
            this.text_video_button = 'Pause Video';
            this.icon_video_button_class = 'fa-pause';
        }
        else {
            id_video.pause();
            this.text_video_button = 'Play Video';
            this.icon_video_button_class = 'fa-play';
        }
    };
    HeadersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-headers',
            template: __webpack_require__(/*! ./headers.component.html */ "./src/app/components/sections/headers/headers.component.html"),
            styles: [__webpack_require__(/*! ./headers.component.scss */ "./src/app/components/sections/headers/headers.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeadersComponent);
    return HeadersComponent;
}());



/***/ }),

/***/ "./src/app/components/sections/pricing/pricing.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/sections/pricing/pricing.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cd-section\" id=\"pricing\">\n    <!--     *********    PRICING 1     *********      -->\n    <div class=\"pricing-1 section-image\" id=\"pricing-1\" style=\"background-image: url('assets/img/pricing1.jpg')\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">Pick the best plan for you</h2>\n                    <h4 class=\"description \">You have Free Unlimited Updates and Premium Support on each package.</h4>\n                    <div class=\"section-space\"></div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <div class=\"card card-pricing card-plain\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category \">Bravo Pack</h6>\n                            <div class=\"icon icon-warning\">\n                                <i class=\"now-ui-icons media-1_button-power\"></i>\n                            </div>\n                            <h3 class=\"card-title\">$10</h3>\n                            <ul>\n                                <li>Complete documentation</li>\n                                <li>Working materials in Sketch</li>\n                            </ul>\n                            <a href=\"#pablo\" class=\"btn btn-neutral btn-warning btn-round\">Add to Cart</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"card card-pricing\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category\">Alpha Pack</h6>\n                            <div class=\"icon icon-primary\">\n                                <i class=\"now-ui-icons objects_diamond\"></i>\n                            </div>\n                            <h3 class=\"card-title\">$67</h3>\n                            <ul>\n                                <li>Working materials in EPS</li>\n                                <li>6 months access to the library</li>\n                            </ul>\n                            <a href=\"#pablo\" class=\"btn btn-primary btn-round\">Add to Cart</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"card card-pricing card-plain\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category \">Charlie Pack</h6>\n                            <div class=\"icon icon-success\">\n                                <i class=\"now-ui-icons media-2_sound-wave\"></i>\n                            </div>\n                            <h3 class=\"card-title\">$69</h3>\n                            <ul>\n                                <li>Working materials in PSD</li>\n                                <li>1 year access to the library</li>\n                            </ul>\n                            <a href=\"#pablo\" class=\"btn btn-neutral btn-success btn-round\">Add to Cart</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"card card-pricing card-plain\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category \">Extra Pack</h6>\n                            <div class=\"icon icon-danger\">\n                                <i class=\"now-ui-icons education_atom\"></i>\n                            </div>\n                            <h3 class=\"card-title\">$159</h3>\n                            <ul>\n                                <li>Complete documentation</li>\n                                <li>2GB cloud storage</li>\n                            </ul>\n                            <a href=\"#pablo\" class=\"btn btn-neutral btn-danger btn-round\">Add to Cart</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END PRICING 1      *********      -->\n    <!--     *********    PRICING 2     *********      -->\n    <div class=\"pricing-2\" id=\"pricing-2\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">Pick the best plan for you</h2>\n                    <ngb-tabset type=\"pills\" class=\"nav nav-pills nav-pills-primary justify-content-center\">\n                        <ngb-tab title=\"Legal Entity\">\n                            <ng-template ngbTabContent>\n\n                            </ng-template>\n                        </ngb-tab>\n                        <ngb-tab title=\"Individual\">\n                            <ng-template ngbTabContent>\n\n                            </ng-template>\n                        </ngb-tab>\n                    </ngb-tabset>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"card card-pricing card-plain\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category\">Enterprise</h6>\n                            <h1 class=\"card-title\">\n                                <small>$</small>59</h1>\n                            <ul>\n                                <li>\n                                    <b>10GB</b> Disk Space</li>\n                                <li>\n                                    <b>100GB</b> Monthly Bandwidth</li>\n                                <li>\n                                    <b>20</b> Email Accounts</li>\n                                <li>\n                                    <b>Unlimited</b> subdomains</li>\n                            </ul>\n                            <a href=\"#pablo\" class=\"btn btn-primary btn-round\">\n                                Sign Up\n                            </a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-pricing card-background card-raised\" style=\"background-image: url('assets/img/pricing2.jpg')\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category text-info\">Professional</h6>\n                            <h1 class=\"card-title\">\n                                <small>$</small>29</h1>\n                            <ul>\n                                <li>\n                                    <b>5GB</b> Disk Space</li>\n                                <li>\n                                    <b>50GB</b> Monthly Bandwidth</li>\n                                <li>\n                                    <b>10</b> Email Accounts</li>\n                                <li>\n                                    <b>Unlimited</b> subdomains</li>\n                            </ul>\n                            <a href=\"#pablo\" class=\"btn btn-neutral btn-round\">\n                                Sign Up\n                            </a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-pricing card-plain\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category\">Standard</h6>\n                            <h1 class=\"card-title\">\n                                <small>$</small>17</h1>\n                            <ul>\n                                <li>\n                                    <b>2GB</b> Disk Space</li>\n                                <li>\n                                    <b>25GB</b> Monthly Bandwidth</li>\n                                <li>\n                                    <b>5</b> Email Accounts</li>\n                                <li>\n                                    <b>Unlimited</b> subdomains</li>\n                            </ul>\n                            <a href=\"#pablo\" class=\"btn btn-primary btn-round\">\n                                Get Started\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END PRICING 2      *********      -->\n    <!--     *********    PRICING 3     *********      -->\n    <div class=\"pricing-3 section-image\" style=\"background-image: url('assets/img/pricing3.jpg')\" id=\"pricing-3\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">Pick the best plan for you</h2>\n                    <h4 class=\"description\">You have Free Unlimited Updates on each package.</h4>\n                    <div class=\"section-space\"></div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4 ml-auto\">\n                    <div class=\"card card-pricing\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category\">Freelance</h6>\n                            <h1 class=\"card-title\">\n                                <small>$</small>29\n                                <small>/mo</small>\n                            </h1>\n                            <ul>\n                                <li>1 GB of space</li>\n                                <li>Limited Support</li>\n                                <li>Support at $25/hour</li>\n                                <li>Limited cloud access</li>\n                            </ul>\n                            <a href=\"#pablo\" class=\"btn btn-primary btn-round\">\n                                Get Started\n                            </a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4 mr-auto\">\n                    <div class=\"card card-pricing card-raised\" data-background-color=\"orange\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category\">Business</h6>\n                            <h1 class=\"card-title\">\n                                <small>$</small>59\n                                <small>/mo</small>\n                            </h1>\n                            <ul>\n                                <li>5 GB of space</li>\n                                <li>UnLimited Support</li>\n                                <li>Unlimited Downloads</li>\n                                <li>Full cloud access</li>\n                            </ul>\n                            <a href=\"#pablo\" class=\"btn btn-neutral btn-round\">\n                                Get Started\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END PRICING 3      *********      -->\n    <!--     *********    PRICING 4     *********      -->\n    <div class=\"pricing-4\" id=\"pricing-4\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">Pick the best plan for you</h2>\n                    <h4 class=\"description\">You have Free Unlimited Updates and Premium Support on each package.</h4>\n                    <div class=\"section-space\"></div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"card card-pricing card-plain\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category\">Starter</h6>\n                            <div class=\"icon icon-danger\">\n                                <i class=\"now-ui-icons tech_headphones\"></i>\n                            </div>\n                            <h3 class=\"card-title\">\n                                <small>$</small>10</h3>\n                            <ul>\n                                <li>1000 MB</li>\n                                <li>3 email</li>\n                                <li>5 Databases</li>\n                            </ul>\n                            <a href=\"#pablo\" class=\"btn btn-danger btn-round\">\n                                Get it Now\n                            </a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-pricing\" data-background-color=\"orange\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category\">Professional</h6>\n                            <div class=\"icon icon-primary\">\n                                <i class=\"now-ui-icons tech_headphones\"></i>\n                            </div>\n                            <h3 class=\"card-title\">\n                                <small>$</small>40</h3>\n                            <ul>\n                                <li>Unlimited MB</li>\n                                <li>Unlimited emails</li>\n                                <li>Full Support</li>\n                            </ul>\n                            <a href=\"#pablo\" class=\"btn btn-neutral disabled btn-round\">\n                                Current Plan\n                            </a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-pricing card-plain\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category\">Basic</h6>\n                            <div class=\"icon icon-warning\">\n                                <i class=\"now-ui-icons tech_headphones\"></i>\n                            </div>\n                            <h3 class=\"card-title\">\n                                <small>$</small>20</h3>\n                            <ul>\n                                <li>1000 MB</li>\n                                <li>3 email</li>\n                                <li>No Support</li>\n                            </ul>\n                            <a href=\"#pablo\" class=\"btn btn-warning btn-round\">\n                                Upgrade Plan\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END PRICING 4      *********      -->\n    <!--     *********    PRICING 5     *********      -->\n    <div class=\"pricing-5 section-pricing-5 section-image\" id=\"pricing-5\" style=\"background-image: url('assets/img/bg31.jpg')\">\n        <div class=\"container\">\n\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n              <h2 class=\"title\">Choose a plan for your next project</h2>\n              <p class=\"description\">You have Free Unlimited Updates and Premium Support on each package. You also have 20 days to request a refund if you're not happy with your purchase.</p>\n            </div>\n            <div class=\"col-md-8\">\n                <ngb-tabset type=\"pills\" class=\"nav nav-pills nav-pills-primary justify-content-center tab-space\">\n                  <ngb-tab title=\"Expensive\">\n                      <ng-template ngbTabContent>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <div class=\"card card-pricing card-raised\">\n                                    <div class=\"card-body\">\n                                        <h6 class=\"category\">Plus</h6>\n                                        <h1 class=\"card-title\">\n                                            <small>$</small>100</h1>\n                                        <ul>\n                                            <li>\n                                                <b>15</b> Projects</li>\n                                            <li>\n                                                <b>5GB</b> Storage</li>\n                                            <li>\n                                                <b>Unlimited</b> users</li>\n                                            <li>\n                                                <b>No time</b> tracking</li>\n                                        </ul>\n                                        <a href=\"#pablo\" class=\"btn btn-primary btn-round\">\n                                            Buy Now!\n                                        </a>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div class=\"card card-pricing card-plain\">\n                                    <div class=\"card-body\">\n                                        <h6 class=\"category\">Maximum</h6>\n                                        <h1 class=\"card-title\">\n                                            <small>$</small>120</h1>\n                                        <ul>\n                                            <li>\n                                                <b>25</b> Projects</li>\n                                            <li>\n                                                <b>15GB</b> Storage</li>\n                                            <li>\n                                                <b>Unlimited</b> users</li>\n                                            <li>\n                                                <b>No time</b> tracking</li>\n                                        </ul>\n                                        <a href=\"#pablo\" class=\"btn btn-primary btn-round\">\n                                            Buy Now!\n                                        </a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                      </ng-template>\n                  </ngb-tab>\n                  <ngb-tab title=\"Cheaper\">\n                      <ng-template ngbTabContent>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <div class=\"card card-pricing card-raised\">\n                                    <div class=\"card-body\">\n                                        <h6 class=\"category\">Standard</h6>\n                                        <h1 class=\"card-title\">\n                                            <small>$</small>20</h1>\n                                        <ul>\n                                            <li>\n                                                <b>5</b> Projects</li>\n                                            <li>\n                                                <b>2GB</b> Storage</li>\n                                            <li>\n                                                <b>Unlimited</b> users</li>\n                                            <li>\n                                                <b>No time</b> tracking</li>\n                                        </ul>\n                                        <a href=\"#pablo\" class=\"btn btn-primary btn-round\">\n                                            Buy Now!\n                                        </a>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div class=\"card card-pricing card-plain\">\n                                    <div class=\"card-body\">\n                                        <h6 class=\"category\">Premium</h6>\n                                        <h1 class=\"card-title\">\n                                            <small>$</small>60</h1>\n                                        <ul>\n                                            <li>\n                                                <b>7</b> Projects</li>\n                                            <li>\n                                                <b>3GB</b> Storage</li>\n                                            <li>\n                                                <b>Unlimited</b> users</li>\n                                            <li>\n                                                <b>No time</b> tracking</li>\n                                        </ul>\n                                        <a href=\"#pablo\" class=\"btn btn-primary btn-round\">\n                                            Buy Now!\n                                        </a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                      </ng-template>\n                  </ngb-tab>\n                </ngb-tabset>\n            </div>\n          </div>\n        </div>\n    </div>\n    <!--     *********    END PRICING 5      *********      -->\n</div>\n"

/***/ }),

/***/ "./src/app/components/sections/pricing/pricing.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/sections/pricing/pricing.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VjdGlvbnMvcHJpY2luZy9wcmljaW5nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/sections/pricing/pricing.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/sections/pricing/pricing.component.ts ***!
  \******************************************************************/
/*! exports provided: PricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingComponent", function() { return PricingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PricingComponent = /** @class */ (function () {
    function PricingComponent() {
    }
    PricingComponent.prototype.ngOnInit = function () {
    };
    PricingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pricing',
            template: __webpack_require__(/*! ./pricing.component.html */ "./src/app/components/sections/pricing/pricing.component.html"),
            styles: [__webpack_require__(/*! ./pricing.component.scss */ "./src/app/components/sections/pricing/pricing.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PricingComponent);
    return PricingComponent;
}());



/***/ }),

/***/ "./src/app/components/sections/projects/projects.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/sections/projects/projects.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cd-section\" id=\"projects\">\n    <!--     *********    PROJECTS 1     *********      -->\n    <div class=\"projects-1\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">Some of Our Awesome Products - 1</h2>\n                    <ngb-tabset type=\"pills\" class=\"nav nav-pills nav-pills-danger justify-content-center tab-space\">\n                        <ngb-tab title=\"All\">\n                            <ng-template ngbTabContent>\n\n                            </ng-template>\n                        </ngb-tab>\n                        <ngb-tab title=\"History\">\n                            <ng-template ngbTabContent>\n\n                            </ng-template>\n                        </ngb-tab>\n                        <ngb-tab title=\"Satire\">\n                            <ng-template ngbTabContent>\n\n                            </ng-template>\n                        </ngb-tab>\n                        <ngb-tab title=\"Fiction\">\n                            <ng-template ngbTabContent>\n\n                            </ng-template>\n                        </ngb-tab>\n                    </ngb-tabset>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 px-0\">\n                    <div class=\"card card-background card-background-product card-no-shadow\" style=\"background-image: url('assets/img/project1.jpg')\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category\">History</h6>\n                            <h3 class=\"card-title\">\n                                The City Lost & Found\n                            </h3>\n                            <p class=\"card-description\">\n                                Developed on the occasion of an exhibition of the same name, The City Lost & Found: Capturing New York...\n                            </p>\n                            <a href=\"#pablo\" class=\"btn btn-danger btn-round\">\n                                <i class=\"now-ui-icons ui-1_send\"></i> View Book\n                            </a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6 px-0\">\n                    <div class=\"card card-raised card-background card-background-product card-no-shadow\" style=\"background-image: url('assets/img/project18.jpg')\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category\">Satire</h6>\n                            <h3 class=\"card-title\">A Confederacy of Dunces</h3>\n                            <p class=\"card-description\">\n                                Satires, in the most basic definition, are works making fun of some sort of person or institution...\n                            </p>\n                            <a href=\"#pablo\" class=\"btn btn-neutral btn-round\">\n                                <i class=\"now-ui-icons ui-1_send\"></i> View more\n                            </a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6 px-0\">\n                    <div class=\"card card-background card-background-product card-no-shadow\" style=\"background-image: url('assets/img/project20.jpg')\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category\">Fiction</h6>\n                            <h3 class=\"card-title\">The Sun Also Rises</h3>\n                            <p class=\"card-description\">\n                                The most commonly read works are works of fiction. Fiction books are ones that have been made up...\n                            </p>\n                            <a href=\"#pablo\" class=\"btn btn-neutral btn-round\">\n                                <i class=\"now-ui-icons ui-1_send\"></i> Read Now\n                            </a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6 px-0\">\n                    <div class=\"card card-background card-background-product card-no-shadow\" style=\"background-image: url('assets/img/project19.jpg')\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category\">Basic Civitas</h6>\n                            <h3 class=\"card-title\">The Right Mistake</h3>\n                            <p class=\"card-description\">\n                                Living in South Central L.A., Socrates Fortlow is a sixty-year-old ex-convict, still strong enough to kill men with...\n                            </p>\n                            <a href=\"#pablo\" class=\"btn btn-danger btn-round\">\n                                <i class=\"now-ui-icons ui-1_send\"></i> Read Now\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END PROJECTS 1      *********      -->\n    <!--     *********    PROJECTS 2     *********      -->\n    <div class=\"projects-2\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h6 class=\"text-muted\">Our work</h6>\n                    <h2 class=\"title\">Some of Our Awesome Products - 2</h2>\n                    <h5 class=\"description\">This is the paragraph where you can write more details about your projects. Keep you user engaged by providing meaningful information.</h5>\n                    <div class=\"section-space\"></div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"card card-plain\">\n                        <a href=\"https://www.creative-tim.com/product/now-ui-kit\" target=\"_blank\">\n                            <div class=\"card-image\">\n                                <img class=\"img-raised rounded\" src=\"http://s3.amazonaws.com/creativetim_bucket/products/38/original/opt_mk_thumbnail.jpg?1458052306\" />\n                            </div>\n                        </a>\n                        <div class=\"card-body\">\n                            <a href=\"https://www.creative-tim.com/product/now-ui-kit\" target=\"_blank\">\n                                <h4 class=\"card-title\">Now UI Kit Free</h4>\n                            </a>\n                            <h6 class=\"category text-primary\">Free UI Kit</h6>\n                            <p class=\"card-description\">\n                                Now UI Kit is a Free Bootstrap UI Kit with a fresh, new design inspired by Google's material design. It's a great pleasure to introduce to you the material concepts in an easy to use and beautiful set of components.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-plain\">\n                        <a href=\"https://www.creative-tim.com/product/light-bootstrap-dashboard-pro\" target=\"_blank\">\n                            <div class=\"card-image\">\n                                <img class=\"img-raised rounded\" src=\"http://s3.amazonaws.com/creativetim_bucket/products/34/original/opt_lbd_pro_thumbnail.jpg?1449352503\" />\n                            </div>\n                        </a>\n                        <div class=\"card-body\">\n                            <a href=\"https://www.creative-tim.com/product/light-bootstrap-dashboard-pro\" target=\"_blank\">\n                                <h4 class=\"card-title\">Light Bootstrap Dashboard</h4>\n                            </a>\n                            <h6 class=\"category text-primary\">Premium Template</h6>\n                            <p class=\"card-description\">\n                                Light Bootstrap Dashboard PRO is a Bootstrap Admin Theme designed to look simple and beautiful. Forget about boring dashboards and grab yourself a copy to kickstart new project!\n                            </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-plain\">\n                        <a href=\"https://www.creative-tim.com/product/get-shit-done-pro\" target=\"_blank\">\n                            <div class=\"card-image\">\n                                <img class=\"img-raised rounded\" src=\"http://s3.amazonaws.com/creativetim_bucket/products/26/original/opt_gsdk_new_thumbnail.jpg\" />\n                            </div>\n                        </a>\n                        <div class=\"card-body\">\n                            <a href=\"https://www.creative-tim.com/product/get-shit-done-pro\" target=\"_blank\">\n                                <h4 class=\"card-title\">Get Shit Done Kit PRO</h4>\n                            </a>\n                            <h6 class=\"category text-primary\">Premium UI Kit</h6>\n                            <p class=\"card-description\">\n                                Get Shit Done Kit Pro it's a Bootstrap Kit that comes with a huge number of customisable components. They are pixel perfect, light and easy to use and combine with other elements.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END PROJECTS 2      *********      -->\n    <!--     *********    PROJECTS 3     *********      -->\n    <div class=\"projects-3\" data-background-color=\"black\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h6 class=\"category text-muted\">Our work</h6>\n                    <h2 class=\"title\">Some of Our Awesome Projects - 3</h2>\n                </div>\n            </div>\n            <div class=\"section-story-overview\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <div class=\"image-container image-left\" style=\"background-image: url('assets/img/project4.jpg')\">\n                            <!-- First image on the left side -->\n                            <p class=\"blockquote blockquote-primary\">\"Amber Interiors is available to assist in all aspects of a project from start to finish including consulting with Architects and Builders\"\n                            </p>\n                        </div>\n                    </div>\n                    <div class=\"col-md-5\">\n                        <!-- First image on the right side, above the article -->\n                        <div class=\"image-container image-right\" style=\"background-image: url('assets/img/project21.jpg')\">\n                        </div>\n                        <h6 class=\"category text-primary\">Design</h6>\n                        <h4 class=\"card-title\">Coco Kelley</h4>\n                        <p>\n                            Amber Lewis’s interior design blog takes you inside the creative workings of her Los Angeles–based studio. Keep an eye on this website for an industry insider’s point of view.\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"section-story-overview\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <!-- First image on the left side -->\n                        <div class=\"image-container image-left\" style=\"background-image: url('assets/img/project24.jpg')\">\n                            <p class=\"blockquote blockquote-primary\">\"We provide a simple, approachable way to decorate your desired space with ease. Each e-décor is completely individualized\"\n                            </p>\n                        </div>\n                    </div>\n                    <div class=\"col-md-5\">\n                        <!-- First image on the right side, above the article -->\n                        <div class=\"image-container image-right\" style=\"background-image: url('assets/img/project23.jpg')\">\n                        </div>\n                        <h6 class=\"category text-primary\">E-Decor</h6>\n                        <h4 class=\"card-title\">Red Trad</h4>\n                        <p>\n                            We designed this new build family home located in Santa Monica with a mission to make the large size of the property, feel cozy, collected, and unique.\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END PROJECTS 3      *********      -->\n    <!--     *********    PROJECTS 4     *********      -->\n    <div class=\"projects-4\" data-background-color=\"gray\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-md-8 mr-auto ml-auto text-center\">\n                    <h6 class=\"category text-muted\">Our work</h6>\n                    <h2 class=\"title\">Some of Our Awesome Projects - 4</h2>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 px-0\">\n                    <div class=\"card card-fashion card-background\" style=\"background-image: url('assets/img/project14.jpg')\">\n                        <div class=\"card-body\">\n                            <div class=\"card-title text-left\">\n                                <h2>\n                                    <a href=\"#pablo\">\n                                        The “crazy idea that could lead to a big future commission” project.\n                                    </a>\n                                </h2>\n                            </div>\n                            <div class=\"card-footer text-left\">\n                                <div class=\"stats\">\n                                    <span>\n                                        <i class=\"now-ui-icons objects_globe\"></i>The “Crazy idea” project\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6 px-0\">\n                    <div class=\"card-container\">\n                        <div class=\"card card-fashion\">\n                            <div class=\"card-title\">\n                                <a href=\"#pablo\">\n                                    <h4>\n                                        <a href=\"#pablo\">\n                                            The next time you’re on vacation, take advantage of all the work you can get done...\n                                        </a>\n                                    </h4>\n                                </a>\n                            </div>\n                            <div class=\"card-body\">\n                                <div class=\"card-footer\">\n                                    <div class=\"stats\">\n                                        <span>\n                                            <i class=\"now-ui-icons education_paper\"></i> The “I’m on vacation” project\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"card card-fashion card-background\" style=\"background-image: url('assets/img/project15.jpg')\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 px-0\">\n                    <div class=\"card-container\">\n                        <div class=\"card card-fashion card-background\" style=\"background-image: url('assets/img/project17.jpg')\">\n                        </div>\n                        <div class=\"card card-fashion arrow-left\">\n                            <div class=\"card-title\">\n                                <h4>\n                                    <a href=\"#pablo\">\n                                        The elements of Agile Project Management have been around for decades...\n                                    </a>\n                                </h4>\n                            </div>\n                            <div class=\"card-body\">\n                                <div class=\"card-footer\">\n                                    <div class=\"stats\">\n                                        <span>\n                                            <i class=\"now-ui-icons design_app\"></i>The \"Agile Project\" project\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6 px-0\">\n                    <div class=\"card card-fashion card-background\" style=\"background-image: url('assets/img/project16.jpg')\">\n                        <div class=\"card-body\">\n                            <div class=\"card-title text-left\">\n                                <h2>\n                                    <a href=\"#pablo\">Performing a Project Premortem</a>\n                                </h2>\n                            </div>\n                            <div class=\"card-footer text-left\">\n                                <div class=\"stats\">\n                                    <span>\n                                        <i class=\"now-ui-icons media-2_sound-wave\"></i>The \"Premortem\" project\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END PROJECTS 4      *********      -->\n    <!--     *********    PROJECTS 5     *********      -->\n    <div class=\"projects-5\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">Some of Our Awesome Projects - 5</h2>\n                    <h4 class=\"description\">This is the paragraph where you can write more details about your projects. Keep you user engaged by providing meaningful information.</h4>\n                    <div class=\"section-space\"></div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-5 ml-auto\">\n                    <div class=\"card card-background card-background-product card-raised\" style=\"background-image: url('assets/img/project8.jpg')\">\n                        <div class=\"card-body\">\n                            <h2 class=\"card-title\">Social Analytics</h2>\n                            <p class=\"card-description\">\n                                Insight to help you create, connect, and convert. Understand Your Audience's Interests, Influence, Interactions, and Intent. Discover emerging topics and influencers to reach new audiences.\n                            </p>\n                            <label class=\"badge badge-neutral\">Analytics</label>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-5 mr-auto\">\n                    <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-danger\">\n                            <i class=\"now-ui-icons ui-2_chat-round\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">Listen to Social Conversations</h4>\n                            <p class=\"description\">\n                                Gain access to the demographics, psychographics, and location of unique people who talk about your brand.\n                            </p>\n                        </div>\n                    </div>\n                    <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-danger\">\n                            <i class=\"now-ui-icons business_chart-pie-36\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">Performance Analyze</h4>\n                            <p class=\"description\">\n                                Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports.\n                            </p>\n                        </div>\n                    </div>\n                    <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-danger\">\n                            <i class=\"now-ui-icons design-2_ruler-pencil\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">Social Conversions</h4>\n                            <p class=\"description\">\n                                Track actions taken on your website that originated from social, and understand the impact on your bottom line.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <hr />\n            <div class=\"row\">\n                <div class=\"col-md-5 ml-auto mt-5\">\n                    <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-warning\">\n                            <i class=\"now-ui-icons users_single-02\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">Work With Any Team</h4>\n                            <p class=\"description\">\n                                Whether it’s for work or even the next family vacation, Trello helps your team.\n                            </p>\n                        </div>\n                    </div>\n                    <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-warning\">\n                            <i class=\"now-ui-icons business_chart-bar-32\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">A Productivity Platform</h4>\n                            <p class=\"description\">\n                                Integrate the apps your team already uses directly into your workflow.\n                            </p>\n                        </div>\n                    </div>\n                    <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-warning\">\n                            <i class=\"now-ui-icons arrows-1_refresh-69\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">Always In Sync</h4>\n                            <p class=\"description\">\n                                No matter where you are, Trello stays in sync across all of your devices.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-5 mr-auto\">\n                    <div class=\"card card-background card-background-product card-raised\" style=\"background-image: url('assets/img/project9.jpg')\">\n                        <div class=\"card-body\">\n                            <h2 class=\"card-title\">Trello lets you work.</h2>\n                            <p class=\"card-description \">\n                                Trello’s boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible and rewarding way.\n                            </p>\n                            <label class=\"badge badge-neutral\">Trello</label>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END PROJECTS 5      *********      -->\n</div>\n"

/***/ }),

/***/ "./src/app/components/sections/projects/projects.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/sections/projects/projects.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VjdGlvbnMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/sections/projects/projects.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/sections/projects/projects.component.ts ***!
  \********************************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/components/sections/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/components/sections/projects/projects.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/components/sections/sections.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/sections/sections.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"section-space\"></div>\n    <app-headers></app-headers>\n    <app-features></app-features>\n    <app-blogs></app-blogs>\n    <app-teams></app-teams>\n    <app-projects></app-projects>\n    <app-pricing></app-pricing>\n    <app-testimonials></app-testimonials>\n    <app-contacts></app-contacts>\n</div>\n"

/***/ }),

/***/ "./src/app/components/sections/sections.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/sections/sections.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VjdGlvbnMvc2VjdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/sections/sections.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/sections/sections.component.ts ***!
  \***********************************************************/
/*! exports provided: SectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsComponent", function() { return SectionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SectionsComponent = /** @class */ (function () {
    function SectionsComponent(router) {
        router.events.subscribe(function (s) {
            if (s instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                var tree = router.parseUrl(router.url);
                if (tree.fragment) {
                    var element = document.querySelector("#" + tree.fragment);
                    if (element) {
                        element.scrollIntoView();
                    }
                }
            }
        });
    }
    SectionsComponent.prototype.ngOnInit = function () {
        var navbar = document.getElementsByTagName('app-navbar')[0];
        navbar.children[0].classList.remove('navbar-transparent');
    };
    SectionsComponent.prototype.ngOnDestroy = function () {
        var navbar = document.getElementsByTagName('app-navbar')[0];
        navbar.children[0].classList.add('navbar-transparent');
    };
    SectionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sections',
            template: __webpack_require__(/*! ./sections.component.html */ "./src/app/components/sections/sections.component.html"),
            styles: [__webpack_require__(/*! ./sections.component.scss */ "./src/app/components/sections/sections.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SectionsComponent);
    return SectionsComponent;
}());



/***/ }),

/***/ "./src/app/components/sections/sections.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/sections/sections.module.ts ***!
  \********************************************************/
/*! exports provided: SectionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsModule", function() { return SectionsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _sections_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections.component */ "./src/app/components/sections/sections.component.ts");
/* harmony import */ var _headers_headers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./headers/headers.component */ "./src/app/components/sections/headers/headers.component.ts");
/* harmony import */ var _features_features_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/features.component */ "./src/app/components/sections/features/features.component.ts");
/* harmony import */ var _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blogs/blogs.component */ "./src/app/components/sections/blogs/blogs.component.ts");
/* harmony import */ var _teams_teams_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./teams/teams.component */ "./src/app/components/sections/teams/teams.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/components/sections/projects/projects.component.ts");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pricing/pricing.component */ "./src/app/components/sections/pricing/pricing.component.ts");
/* harmony import */ var _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./testimonials/testimonials.component */ "./src/app/components/sections/testimonials/testimonials.component.ts");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/components/sections/contacts/contacts.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");















var SectionsModule = /** @class */ (function () {
    function SectionsModule() {
    }
    SectionsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_14__["AgmCoreModule"].forRoot({
                    apiKey: 'YOUR_KEY_HERE'
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"]
            ],
            declarations: [
                _sections_component__WEBPACK_IMPORTED_MODULE_3__["SectionsComponent"],
                _headers_headers_component__WEBPACK_IMPORTED_MODULE_4__["HeadersComponent"],
                _features_features_component__WEBPACK_IMPORTED_MODULE_5__["FeaturesComponent"],
                _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_6__["BlogsComponent"],
                _teams_teams_component__WEBPACK_IMPORTED_MODULE_7__["TeamsComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"],
                _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_9__["PricingComponent"],
                _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_10__["TestimonialsComponent"],
                _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_11__["ContactsComponent"]
            ],
            exports: [
                _sections_component__WEBPACK_IMPORTED_MODULE_3__["SectionsComponent"]
            ]
        })
    ], SectionsModule);
    return SectionsModule;
}());



/***/ }),

/***/ "./src/app/components/sections/teams/teams.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/sections/teams/teams.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cd-section\" id=\"teams\">\n    <!--     *********    TEAM 1     *********      -->\n    <div class=\"team-1\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">Our Awesome Team 1</h2>\n                    <h4 class=\"description\">This is the paragraph where you can write more details about your team. Keep you user engaged by providing meaningful information.</h4>\n                </div>\n            </div>\n            <div class=\"row justify-content-center\">\n                <div class=\"col-md-4 ml-1\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#pablo\">\n                                <img class=\"img img-raised\" src=\"assets/img/james.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h3 class=\"card-title\">Oliver Atticus</h3>\n                            <h6 class=\"category text-primary\">Web Developer</h6>\n                            <p class=\"card-description\">\n                                If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.\n                            </p>\n                            <div class=\"card-footer\">\n                                <a href=\"#pablo\" class=\"btn btn-icon btn-primary btn-round\"><i class=\"fa fa-facebook-square\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-icon btn-primary btn-round\"><i class=\"fa fa-dribbble\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4 mr-1\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#pablo\">\n                                <img class=\"img img-raised\" src=\"assets/img/michael.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h3 class=\"card-title\">Smith College</h3>\n                            <h6 class=\"category text-primary\">CEO / Co-Founder</h6>\n                            <p class=\"card-description\">\n                                Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.\n                            </p>\n                            <div class=\"card-footer\">\n                                <a href=\"#pablo\" class=\"btn btn-icon btn-primary btn-round\"><i class=\"fa fa-twitter\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-icon btn-primary btn-round\"><i class=\"fa fa-facebook-square\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-icon btn-primary btn-round\"><i class=\"fa fa-google\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4 ml-1 mt-4\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#pablo\">\n                                <img class=\"img img-raised\" src=\"assets/img/emily.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h3 class=\"card-title\">Sophia Madison</h3>\n                            <h6 class=\"category text-primary\">Entrepreneur</h6>\n                            <p class=\"card-description\">\n                                Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.\n                            </p>\n                            <div class=\"card-footer\">\n                                <a href=\"#pablo\" class=\"btn btn-icon btn-primary btn-round\"><i class=\"fa fa-twitter\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-icon btn-primary btn-round\"><i class=\"fa fa-dribbble\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-icon btn-primary btn-round\"><i class=\"fa fa-linkedin\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4 mr-1 mt-4\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#pablo\">\n                                <img class=\"img img-raised\" src=\"assets/img/olivia.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h3 class=\"card-title\">Emily Chloe</h3>\n                            <h6 class=\"category text-primary\">Entrepreneur</h6>\n                            <p class=\"card-description\">\n                                You know you're in love when you can't fall asleep because reality is finally better than your dreams.\n                            </p>\n                            <div class=\"card-footer\">\n                                <a href=\"#pablo\" class=\"btn btn-icon btn-primary btn-round\"><i class=\"fa fa-google\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-icon btn-primary btn-round\"><i class=\"fa fa-dribbble\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END TEAM 1      *********      -->\n    <!--     *********    TEAM 2     *********      -->\n    <div class=\"team-2\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">The Executive Team 2</h2>\n                    <h4 class=\"description\">This is the paragraph where you can write more details about your team. Keep you user engaged by providing meaningful information.</h4>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-image\">\n                            <a href=\"#pablo\">\n                                <img class=\"img img-raised rounded\" src=\"assets/img/examples/card-profile1.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\">Sofia Scarlett</h4>\n                            <h6 class=\"category\">Account Manager</h6>\n                            <div class=\"card-footer\">\n                                <a href=\"#pablo\" class=\"btn btn-icon btn-twitter btn-round\"><i class=\"fa fa-twitter\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-icon btn-facebook btn-round\"><i class=\"fa fa-facebook-square\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-icon btn-dribbble btn-round\"><i class=\"fa fa-dribbble\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-image\">\n                            <a href=\"#pablo\">\n                                <img class=\"img img-raised rounded\" src=\"assets/img/examples/card-profile2.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\">Lucas Jacob</h4>\n                            <h6 class=\"category\">Aerospace Engineer</h6>\n                            <div class=\"card-footer\">\n                                <a href=\"#pablo\" class=\"btn btn-icon btn-dribbble btn-round\"><i class=\"fa fa-dribbble\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-icon btn-facebook btn-round\"><i class=\"fa fa-facebook-square\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-image\">\n                            <a href=\"#pablo\">\n                                <img class=\"img img-raised rounded\" src=\"assets/img/examples/card-profile3.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\">Amelia Charlotte</h4>\n                            <h6 class=\"category\">Photographer</h6>\n                            <div class=\"card-footer\">\n                                <a href=\"#pablo\" class=\"btn btn-icon btn-linkedin btn-round\"><i class=\"fa fa-linkedin\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-icon btn-twitter btn-round\"><i class=\"fa fa-twitter\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-icon btn-dribbble btn-round\"><i class=\"fa fa-dribbble\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END TEAM 2      *********      -->\n    <!--     *********    TEAM 3     *********      -->\n    <div class=\"team-3 section-image\" style=\"background-image: url('assets/img/bg21.jpg')\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">The Executive Team 3</h2>\n                    <h4 class=\"description\">This is the paragraph where you can write more details about your team. Keep you user engaged by providing meaningful information.</h4>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xl-6 col-lg-7 ml-auto mr-auto\">\n                    <div class=\"card card-profile\">\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <div class=\"card-image\">\n                                    <a href=\"#pablo\">\n                                        <img class=\"img\" src=\"assets/img/olivia.jpg\" />\n                                    </a>\n                                </div>\n                            </div>\n                            <div class=\"col-md-7\">\n                                <div class=\"card-body\">\n                                    <h3 class=\"card-title\">Ariana Hazel</h3>\n                                    <h6 class=\"category text-primary\"> Fashion Designer</h6>\n                                    <p class=\"card-description\">\n                                        Happiness resides not in possessions, and not in gold, happiness dwells in the soul...\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-xl-6 col-lg-7 ml-auto mr-auto\">\n                    <div class=\"card card-profile\">\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <div class=\"card-image\">\n                                    <a href=\"#pablo\">\n                                        <img class=\"img\" src=\"assets/img/james.jpg\" />\n                                    </a>\n                                </div>\n                            </div>\n                            <div class=\"col-md-7\">\n                                <div class=\"card-body\">\n                                    <h3 class=\"card-title\">Ryan Samuel</h3>\n                                    <h6 class=\"category text-primary\">Financial Examiner</h6>\n                                    <p class=\"card-description\">\n                                        Today you are you! That is truer than true! There is no one alive who is you-er than you!..\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-xl-6 col-lg-7 ml-auto mr-auto\">\n                    <div class=\"card card-profile\">\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <div class=\"card-image\">\n                                    <a href=\"#pablo\">\n                                        <img class=\"img\" src=\"assets/img/michael.jpg\" />\n                                    </a>\n                                </div>\n                            </div>\n                            <div class=\"col-md-7\">\n                                <div class=\"card-body\">\n                                    <h3 class=\"card-title\">Joshua Jackson</h3>\n                                    <h6 class=\"category text-primary\">Landscape Architect</h6>\n                                    <p class=\"card-description\">\n                                        Success is not final, failure is not fatal: it is the courage to continue that counts...\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-xl-6 col-lg-7 ml-auto mr-auto\">\n                    <div class=\"card card-profile\">\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <div class=\"card-image\">\n                                    <a href=\"#pablo\">\n                                        <img class=\"img\" src=\"assets/img/emily.jpg\" />\n                                    </a>\n                                </div>\n                            </div>\n                            <div class=\"col-md-7\">\n                                <div class=\"card-body\">\n                                    <h3 class=\"card-title\">Nora Hazel</h3>\n                                    <h6 class=\"category text-primary\">Legal Secretary</h6>\n                                    <p class=\"card-description\">\n                                        Do not dwell in the past, do not dream of the future, concentrate the mind...\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END TEAM 3      *********      -->\n    <!--     *********    TEAM 4     *********      -->\n    <div class=\"team-4\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">The Executive Team 4</h2>\n                    <h4 class=\"description\">This is the paragraph where you can write more details about your team. Keep you user engaged by providing meaningful information.</h4>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <div class=\"card-image\">\n                                    <a href=\"#pablo\">\n                                        <img class=\"img img-raised rounded\" src=\"assets/img/olivia.jpg\" />\n                                    </a>\n                                </div>\n                            </div>\n                            <div class=\"col-md-7\">\n                                <div class=\"card-body\">\n                                    <h4 class=\"card-title\">Ella Evelyn</h4>\n                                    <h6 class=\"category\">Air Crew Member</h6>\n                                    <p class=\"card-description\">\n                                        Think in the morning. Act in the noon. Eat in the evening. Sleep in the night......\n                                    </p>\n                                    <div class=\"card-footer\">\n                                        <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-twitter\"><i class=\"fa fa-twitter\"></i></a>\n                                        <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-facebook\"><i class=\"fa fa-facebook-square\"></i></a>\n                                        <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-google\"><i class=\"fa fa-google\"></i></a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <div class=\"card-image\">\n                                    <a href=\"#pablo\">\n                                        <img class=\"img img-raised rounded\" src=\"assets/img/emily.jpg\" />\n                                    </a>\n                                </div>\n                            </div>\n                            <div class=\"col-md-7\">\n                                <div class=\"card-body\">\n                                    <h4 class=\"card-title\">Mila Skylar</h4>\n                                    <h6 class=\"category\">Architect</h6>\n                                    <p class=\"card-description\">\n                                        Love cures people - both the ones who give it and the ones who receive it...\n                                    </p>\n                                    <div class=\"card-footer\">\n                                        <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-linkedin\"><i class=\"fa fa-linkedin\"></i></a>\n                                        <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-facebook\"><i class=\"fa fa-facebook-square\"></i></a>\n                                        <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-dribbble\"><i class=\"fa fa-dribbble\"></i></a>\n                                        <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-google\"><i class=\"fa fa-google\"></i></a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <div class=\"card-image\">\n                                    <a href=\"#pablo\">\n                                        <img class=\"img img-raised rounded\" src=\"assets/img/james.jpg\" />\n                                    </a>\n                                </div>\n                            </div>\n                            <div class=\"col-md-7\">\n                                <div class=\"card-body\">\n                                    <h4 class=\"card-title\">Daniel Carter</h4>\n                                    <h6 class=\"category\">Aviation Inspector</h6>\n                                    <p class=\"card-description\">\n                                        Keep your face always toward the sunshine - and shadows will fall behind you...\n                                    </p>\n                                    <div class=\"card-footer\">\n                                        <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-youtube\"><i class=\"fa fa-youtube-play\"></i></a>\n                                        <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-twitter\"><i class=\"fa fa-twitter\"></i></a>\n                                        <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-instagram\"><i class=\"fa fa-instagram\"></i></a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <div class=\"card-image\">\n                                    <a href=\"#pablo\">\n                                        <img class=\"img img-raised rounded\" src=\"assets/img/michael.jpg\" />\n                                    </a>\n                                </div>\n                            </div>\n                            <div class=\"col-md-7\">\n                                <div class=\"card-body\">\n                                    <h4 class=\"card-title\">Dylan Wyatt</h4>\n                                    <h6 class=\"category\">Conservation Scientist</h6>\n                                    <p class=\"card-description\">\n                                        There is only one corner of the universe you can be certain of improving, and that's your own self...\n                                    </p>\n                                    <div class=\"card-footer\">\n                                        <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-linkedin\"><i class=\"fa fa-linkedin\"></i></a>\n                                        <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-facebook\"><i class=\"fa fa-facebook-square\"></i></a>\n                                        <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-google\"><i class=\"fa fa-google\"></i></a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END TEAM 4      *********      -->\n    <!--     *********    TEAM 5     *********      -->\n    <div class=\"team-5 section-image\" style=\"background-image: url('assets/img/bg9.jpg')\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">The Executive Team 5</h2>\n                    <h4 class=\"description\">This is the paragraph where you can write more details about your team. Keep you user engaged by providing meaningful information.</h4>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"card card-profile\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#pablo\">\n                                <img class=\"img img-raised\" src=\"assets/img/olivia.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h3 class=\"card-title\">Natalie Paisley</h3>\n                            <h6 class=\"category text-primary\">Credit Analyst</h6>\n                            <p class=\"card-description\">\n                                Very little is needed to make a happy life; it is all within yourself, in your way of thinking...\n                            </p>\n                            <div class=\"card-footer\">\n                                <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-round\"><i class=\"fa fa-linkedin\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-round\"><i class=\"fa fa-twitter\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-round\"><i class=\"fa fa-dribbble\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-profile\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#pablo\">\n                                <img class=\"img img-raised\" src=\"assets/img/james.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\">Anthony Jackson</h4>\n                            <h6 class=\"category text-primary\">Desktop Publisher</h6>\n                            <p class=\"card-description\">\n                                Let us be grateful to people who make us happy, they are the charming gardeners who make our souls blossom...\n                            </p>\n                            <div class=\"card-footer\">\n                                <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-round\"><i class=\"fa fa-dribbble\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-round\"><i class=\"fa fa-twitter\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-profile\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#pablo\">\n                                <img class=\"img img-raised\" src=\"assets/img/emily.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\">Bella Audrey</h4>\n                            <h6 class=\"category text-primary\">Economist</h6>\n                            <p class=\"card-description\">\n                                For it was not into my ear you whispered, but into my heart. It was not my lips you kissed, but my soul...\n                            </p>\n                            <div class=\"card-footer\">\n                                <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-round\"><i class=\"fa fa-dribbble\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-round\"><i class=\"fa fa-twitter\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-icon btn-neutral btn-round\"><i class=\"fa fa-pinterest\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END TEAM 5      *********      -->\n</div>\n"

/***/ }),

/***/ "./src/app/components/sections/teams/teams.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/sections/teams/teams.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VjdGlvbnMvdGVhbXMvdGVhbXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/sections/teams/teams.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/sections/teams/teams.component.ts ***!
  \**************************************************************/
/*! exports provided: TeamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsComponent", function() { return TeamsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TeamsComponent = /** @class */ (function () {
    function TeamsComponent() {
    }
    TeamsComponent.prototype.ngOnInit = function () {
    };
    TeamsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-teams',
            template: __webpack_require__(/*! ./teams.component.html */ "./src/app/components/sections/teams/teams.component.html"),
            styles: [__webpack_require__(/*! ./teams.component.scss */ "./src/app/components/sections/teams/teams.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TeamsComponent);
    return TeamsComponent;
}());



/***/ }),

/***/ "./src/app/components/sections/testimonials/testimonials.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/sections/testimonials/testimonials.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cd-section\" id=\"testimonials\">\n    <!--     *********    TESTIMONIALS 1     *********      -->\n    <div class=\"testimonials-1 section-image\" style=\"background-image: url('assets/img/bg19.jpg')\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">What is ALPHA?</h2>\n                    <h4 class=\"description \">If you’re selected for ALPHA you’ll also get 3 tickets, opportunity to access Investor Office Hours and Mentor Hours and much more all for €850.</h4>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"card card-testimonial\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#pablo\">\n                                <img class=\"img img-raised\" src=\"assets/img/michael.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <p class=\"card-description\">\n                                The networking at Web Summit is like no other European tech conference.\n                            </p>\n                        </div>\n                        <div class=\"icon icon-primary\">\n                            <i class=\"fa fa-quote-right\"></i>\n                        </div>\n                        <div class=\"card-footer\">\n                            <h4 class=\"card-title\">Michael Elijah</h4>\n                            <p class=\"category\">@michaelelijah</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-testimonial\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#pablo\">\n                                <img class=\"img img-raised\" src=\"assets/img/olivia.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <p class=\"card-description\">\n                                The connections you make at Web Summit are unparalleled, we met users all over the world.\n                            </p>\n                        </div>\n                        <div class=\"icon icon-primary\">\n                            <i class=\"fa fa-quote-right\"></i>\n                        </div>\n                        <div class=\"card-footer\">\n                            <h4 class=\"card-title\">Olivia Harper</h4>\n                            <p class=\"category\">@oliviaharper</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-testimonial\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#pablo\">\n                                <img class=\"img img-raised\" src=\"assets/img/james.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <p class=\"card-description\">\n                                Web Summit will increase your appetite, your inspiration, and your network.\n                            </p>\n                        </div>\n                        <div class=\"icon icon-primary\">\n                            <i class=\"fa fa-quote-right\"></i>\n                        </div>\n                        <div class=\"card-footer\">\n                            <h4 class=\"card-title\">James Logan</h4>\n                            <p class=\"category\">@jameslogan</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END TESTIMONIALS 1      *********      -->\n    <!--     *********    TESTIMONIALS 2     *********      -->\n    <div class=\"testimonials-2\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <ngb-carousel>\n                      <ng-template ngbSlide>\n                        <div class=\"card card-testimonial card-plain\">\n                            <div class=\"card-avatar\">\n                                <a href=\"#pablo\">\n                                    <img class=\"img img-raised rounded\" src=\"assets/img/james.jpg\" />\n                                </a>\n                            </div>\n                            <div class=\"card-body\">\n                                <h5 class=\"card-description\">\"Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success. A single rose can be my garden... a single friend, my world.\"\n                                </h5>\n                                <h3 class=\"card-title\">Isaac Hunter</h3>\n                                <div class=\"card-footer\">\n                                    <h6 class=\"category text-primary\">Human Resource Director</h6>\n                                </div>\n                            </div>\n                        </div>\n                      </ng-template>\n                      <ng-template ngbSlide>\n                        <div class=\"card card-testimonial card-plain\">\n                            <div class=\"card-avatar\">\n                                <a href=\"#pablo\">\n                                    <img class=\"img img-raised rounded\" src=\"assets/img/olivia.jpg\" />\n                                </a>\n                            </div>\n                            <div class=\"card-body\">\n                                <h5 class=\"card-description\">\"When we are no longer able to change a situation - we are challenged to change ourselves. Spread love everywhere you go. Let no one ever come to you without leaving happier. Problems are not stop signs, they are guidelines.\"\n                                </h5>\n                                <h3 class=\"card-title\">Alexa Hailey</h3>\n                                <div class=\"card-footer\">\n                                    <h6 class=\"category text-primary\">Human Resource Director</h6>\n                                </div>\n                            </div>\n                        </div>\n                      </ng-template>\n                  </ngb-carousel>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END TESTIMONIALS 2      *********      -->\n    <!--     *********    TESTIMONIALS 3     *********      -->\n    <div class=\"testimonials-3\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">What Clients Say</h2>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"card card-testimonial card-plain\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#pablo\">\n                                <img class=\"img img-raised rounded\" src=\"assets/img/michael.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h3 class=\"card-title\">Andrew John</h3>\n                            <h6 class=\"category text-primary\">Loan Counselor</h6>\n                            <p class=\"card-description\">\"Do not go where the path may lead, go instead where there is no path and leave a trail.\"\n                            </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-testimonial card-plain\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#pablo\">\n                                <img class=\"img img-raised rounded\" src=\"assets/img/olivia.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\">Zoe Gabriella</h4>\n                            <h6 class=\"category text-primary\">Interpreter OR Translator</h6>\n                            <p class=\"card-description\">\"Don't walk behind me; I may not lead. Don't walk in front of me; I may not follow. Just walk beside me and be my friend.\"\n                            </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-testimonial card-plain\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#pablo\">\n                                <img class=\"img img-raised rounded\" src=\"assets/img/james.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\">Joshiah Luke</h4>\n                            <h6 class=\"category text-primary\">HR Specialist</h6>\n                            <p class=\"card-description\">\"The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.\"\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END TESTIMONIALS 3      *********      -->\n</div>\n"

/***/ }),

/***/ "./src/app/components/sections/testimonials/testimonials.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/components/sections/testimonials/testimonials.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VjdGlvbnMvdGVzdGltb25pYWxzL3Rlc3RpbW9uaWFscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/sections/testimonials/testimonials.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/sections/testimonials/testimonials.component.ts ***!
  \****************************************************************************/
/*! exports provided: TestimonialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsComponent", function() { return TestimonialsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestimonialsComponent = /** @class */ (function () {
    function TestimonialsComponent() {
    }
    TestimonialsComponent.prototype.ngOnInit = function () {
    };
    TestimonialsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-testimonials',
            template: __webpack_require__(/*! ./testimonials.component.html */ "./src/app/components/sections/testimonials/testimonials.component.html"),
            styles: [__webpack_require__(/*! ./testimonials.component.scss */ "./src/app/components/sections/testimonials/testimonials.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestimonialsComponent);
    return TestimonialsComponent;
}());



/***/ }),

/***/ "./src/app/components/tables-areas/tables-areas.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/tables-areas/tables-areas.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n    <div class=\"container\">\n      <h3 class=\"title\">Content Areas</h3>\n\n      <div class=\"title\">\n          <h3>\n              <small>Tables</small>\n          </h3>\n      </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n              <h4>\n                  <small>Simple Table</small>\n              </h4>\n          </div>\n            <div class=\"col-md-8 ml-auto mr-auto\">\n                <h6>Simple With Actions</h6>\n                <div class=\"card card-plain\">\n                    <div class=\"card-body\">\n                    <div class=\"table-responsive\">\n                        <table class=\"table\">\n                            <thead>\n                                <tr>\n                                  <th class=\"text-center\">{{ tableData1.headerRow[0] }}</th>\n                                  <th>{{ tableData1.headerRow[1] }}</th>\n                                  <th>{{ tableData1.headerRow[2] }}</th>\n                                  <th class=\"text-center\">{{ tableData1.headerRow[3] }}</th>\n                                  <th class=\"text-right\">{{ tableData1.headerRow[4] }}</th>\n                                  <th class=\"text-right\">{{ tableData1.headerRow[5] }}</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let row of tableData1.dataRows\">\n                                    <td class=\"text-center\">{{row[0]}}</td>\n                                    <td>{{row[1]}}</td>\n                                    <td>{{row[2]}}</td>\n                                    <td class=\"text-center\">{{row[3]}}</td>\n                                    <td class=\"text-right\">&euro; {{row[4]}}</td>\n                                    <td class=\"td-actions text-right\">\n                                      <button type=\"button\" ngbTooltip=\"View Profile\" class=\"btn btn-info btn-icon btn-sm {{row[5]}}\">\n                                          <i class=\"now-ui-icons users_single-02\"></i>\n                                      </button>\n                                      <button type=\"button\" ngbTooltip=\"Edit Profile\" class=\"btn btn-success btn-icon btn-sm {{row[5]}}\">\n                                          <i class=\"now-ui-icons ui-2_settings-90\"></i>\n                                      </button>\n                                      <button type=\"button\" ngbTooltip=\"Remove\" class=\"btn btn-danger btn-icon btn-sm {{row[5]}}\">\n                                          <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n                                      </button>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                  </div>\n                </div>\n                <h6>Striped With Checkboxes</h6>\n                <div class=\"card card-plain\">\n                    <div class=\"card-body\">\n                    <div class=\"table-responsive\">\n                        <table class=\"table table-striped\">\n                            <thead>\n                                <tr>\n                                    <th class=\"text-center\">{{ tableData2.headerRow[0] }}</th>\n                                    <th></th>\n                                    <th>{{ tableData2.headerRow[1] }}</th>\n                                    <th>{{ tableData2.headerRow[2] }}</th>\n                                    <th>{{ tableData2.headerRow[3] }}</th>\n                                    <th class=\"text-right\">{{ tableData2.headerRow[4] }}</th>\n                                    <th class=\"text-right\">{{ tableData2.headerRow[5] }}</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let row of tableData2.dataRows\">\n                                    <td class=\"text-center\">{{row.id}}</td>\n                                    <td>\n                                        <div [ngSwitch]=\"row.check\">\n                                            <div *ngSwitchCase=\"true\">\n                                                <div class=\"form-check\">\n                                                    <label class=\"form-check-label\">\n                                                        <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                                        <span class=\"form-check-sign\"></span>\n                                                    </label>\n                                                </div>\n                                            </div>\n                                            <div *ngSwitchDefault>\n                                                <div class=\"form-check\">\n                                                    <label class=\"form-check-label\">\n                                                        <input class=\"form-check-input\" type=\"checkbox\" value=\"\" >\n                                                        <span class=\"form-check-sign\"></span>\n                                                    </label>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </td>\n                                    <td>{{row.product_name}}</td>\n                                    <td>{{row.type}}</td>\n                                    <td>{{row.qty}}</td>\n                                    <td class=\"text-right\">&euro; {{row.price}}</td>\n                                    <td class=\"text-right\">&euro; {{row.amount}}</td>\n                                </tr>\n                                <tr>\n                                    <td colspan=\"5\"></td>\n                                    <td class=\"td-total\">\n                                        Total\n                                    </td>\n                                    <td class=\"td-price\">\n                                        {{getTotal1() | currency:'EUR':'symbol':'1.2-2'}}\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                  </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n              <h4>\n                  <small>Shopping Cart Table</small>\n              </h4>\n          </div>\n            <div class=\"col-md-12\">\n              <div class=\"card card-plain\">\n                  <div class=\"card-body\">\n                    <div class=\"table-responsive\">\n                        <table class=\"table table-shopping\">\n                            <thead>\n                                <tr>\n                                    <th class=\"text-center\"></th>\n                                    <th>{{ tableData3.headerRow[2] }}</th>\n                                    <th>{{ tableData3.headerRow[3] }}</th>\n                                    <th>{{ tableData3.headerRow[4] }}</th>\n                                    <th class=\"text-right\">{{ tableData3.headerRow[5] }}</th>\n                                    <th class=\"text-right\">{{ tableData3.headerRow[6] }}</th>\n                                    <th class=\"text-right\">{{ tableData3.headerRow[7] }}</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let row of tableData3.dataRows\">\n                                    <td>\n                                        <div class=\"img-container\">\n                                            <img src=\"assets/img/{{row[0]}}\" alt=\"...\">\n                                        </div>\n                                    </td>\n                                    <td class=\"td-name\">\n                                        <a>{{row[1]}}</a>\n                                        <br />\n                                        <small>{{row[2]}}</small>\n                                    </td>\n                                    <td>{{row[3]}}</td>\n                                    <td>{{row[4]}}</td>\n                                    <td class=\"td-number\"><small>€</small>{{row[5]}}</td>\n                                    <td class=\"td-number\">\n                                        {{row[6]}}\n                                        <div class=\"btn-group\">\n                                            <button class=\"btn btn-info btn-sm\"> <i class=\"now-ui-icons ui-1_simple-delete\"></i> </button>\n                                            <button class=\"btn btn-info btn-sm\"> <i class=\"now-ui-icons ui-1_simple-add\"></i> </button>\n                                        </div>\n                                    </td>\n                                    <td class=\"td-number\">\n                                        <small>€</small>{{row[7]}}\n                                    </td>\n                                    <td class=\"td-actions\">\n                                        <button type=\"button\" placement=\"top\" ngbTooltip=\"Remove item\" class=\"btn btn-neutral\">\n                                            <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n                                        </button>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td colspan=\"3\">\n                                    </td>\n                                    <td class=\"td-total\">\n                                        Total\n                                    </td>\n                                    <td class=\"td-price\">\n                                        {{getTotal2() | currency:'EUR':'symbol':'1.2-2'}}\n                                    </td>\n                                    <td colspan=\"3\" class=\"text-right\">\n                                      <button type=\"button\" class=\"btn btn-info btn-round \" (click)=\"showElements()\">Complete Purchase <i class=\"now-ui-icons arrows-1_minimal-right\"></i>\n                                        </button>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                  </div>\n              </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/tables-areas/tables-areas.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/tables-areas/tables-areas.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFibGVzLWFyZWFzL3RhYmxlcy1hcmVhcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/tables-areas/tables-areas.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/tables-areas/tables-areas.component.ts ***!
  \*******************************************************************/
/*! exports provided: TablesAreasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesAreasComponent", function() { return TablesAreasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TablesAreasComponent = /** @class */ (function () {
    function TablesAreasComponent() {
    }
    TablesAreasComponent.prototype.ngOnInit = function () {
        this.tableData1 = {
            headerRow: ['#', 'Name', 'Job Position', 'Since', 'Salary', 'Actions'],
            dataRows: [
                ['1', 'Andrew Mike', 'Develop', '2013', '99,225', ''],
                ['2', 'John Doe', 'Design', '2012', '89,241', ''],
                ['3', 'Alex Mike', 'Design', '2010', '92,144', 'btn-neutral'],
                ['4', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-neutral'],
                ['5', 'Paul Dickens', 'Communication', '2015', '69,201', 'btn-round'],
                ['6', 'Manuel Rico', 'Manager', '2012', '99,201', 'btn-round']
            ]
        };
        this.tableData2 = {
            headerRow: ['#', 'Product Name', 'Type', 'Qty', 'Price', 'Amount'],
            dataRows: [
                { id: 1, product_name: 'Moleskine Agenda', type: 'Office', qty: 25, price: '49', amount: '1225', check: false },
                { id: 2, product_name: 'Stabilo Pen', type: 'Office', qty: 30, price: '10', amount: '300', check: true },
                { id: 3, product_name: 'A4 Paper Pack', type: 'Office', qty: 50, price: '10.99', amount: '109', check: true },
                { id: 4, product_name: 'Apple iPad', type: 'Meeting', qty: 10, price: '499.00', amount: '4990', check: false },
                { id: 5, product_name: 'Apple iPhone', type: 'Communication', qty: 10, price: '599.00', amount: '5990', check: false }
            ]
        };
        this.tableData3 = {
            headerRow: ['', '', 'Product', 'Color', 'Size', 'Price', 'QTY', 'Amount'],
            dataRows: [
                ['saint-laurent.jpg', '	Suede Biker Jacket', 'by Saint Laurent', 'Black', 'M', '3390', '1', '3390'],
                ['balmain.jpg', '	Jersey T-Shirt', 'by Balmain', 'Black', 'M', '499', '2', '998'],
                ['prada.jpg', 'Slim-Fit Swim Short', 'by Prada', 'Red', 'M', '200', '1', '200']
            ]
        };
    };
    TablesAreasComponent.prototype.getTotal1 = function () {
        var total = 0;
        for (var i = 0; i < this.tableData2.dataRows.length; i++) {
            var integer = parseInt(this.tableData2.dataRows[i].amount);
            total += integer;
        }
        return total;
    };
    ;
    TablesAreasComponent.prototype.getTotal2 = function () {
        var total = 0;
        for (var i = 0; i < this.tableData3.dataRows.length; i++) {
            var integer = parseInt(this.tableData3.dataRows[i][7]);
            total += integer;
        }
        return total;
    };
    ;
    TablesAreasComponent.prototype.showElements = function () {
        for (var i = 0; i < this.tableData3.dataRows.length; i++) {
            console.log(this.tableData3.dataRows[i][1]);
        }
    };
    TablesAreasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tables-areas',
            template: __webpack_require__(/*! ./tables-areas.component.html */ "./src/app/components/tables-areas/tables-areas.component.html"),
            styles: [__webpack_require__(/*! ./tables-areas.component.scss */ "./src/app/components/tables-areas/tables-areas.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TablesAreasComponent);
    return TablesAreasComponent;
}());



/***/ }),

/***/ "./src/app/components/typography/typography.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/typography/typography.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n    <div class=\"container\">\n        <h3 class=\"title\">Typography</h3>\n        <div id=\"typography\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"typography-line\">\n                        <h1>\n                            <span>Header 1</span>The Life of Now UI Kit </h1>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h2>\n                            <span>Header 2</span>The Life of Now UI Kit</h2>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h3>\n                            <span>Header 3</span>The Life of Now UI Kit</h3>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h4>\n                            <span>Header 4</span>The Life of Now UI Kit</h4>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h5>\n                            <span>Header 5</span>The Life of Now UI Kit</h5>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h6>\n                            <span>Header 6</span>The Life of Now UI Kit</h6>\n                    </div>\n                    <div class=\"typography-line\">\n                        <p>\n                            <span>Paragraph</span>\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\n                        </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Quote</span>\n                        <blockquote>\n                            <p class=\"blockquote blockquote-primary\">\n                                \"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\"\n                                <br>\n                                <br>\n                                <small>\n                                    - Noaa\n                                </small>\n                            </p>\n                        </blockquote>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Muted Text</span>\n                        <p class=\"text-muted\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n                        </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Primary Text</span>\n                        <p class=\"text-primary\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Info Text</span>\n                        <p class=\"text-info\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Success Text</span>\n                        <p class=\"text-success\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Warning Text</span>\n                        <p class=\"text-warning\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n                        </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Danger Text</span>\n                        <p class=\"text-danger\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h2>\n                            <span>Small Tag</span>\n                            Header with small subtitle\n                            <br>\n                            <small>Use \"small\" tag for the headers</small>\n                        </h2>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"space-50\"></div>\n        <div id=\"images\">\n            <h4>Images</h4>\n            <div class=\"row\">\n                <div class=\"col-sm-2\">\n                    <p class=\"category\">Image</p>\n                    <img src=\"assets/img/julie.jpg\" alt=\"Rounded Image\" class=\"rounded\">\n                </div>\n                <div class=\"col-sm-2\">\n                    <p class=\"category\">Circle Image</p>\n                    <img src=\"assets/img/julie.jpg\" alt=\"Circle Image\" class=\"rounded-circle\">\n                </div>\n                <div class=\"col-sm-2\">\n                    <p class=\"category\">Raised</p>\n                    <img src=\"assets/img/julie.jpg\" alt=\"Raised Image\" class=\"rounded img-raised\">\n                </div>\n                <div class=\"col-sm-2\">\n                    <p class=\"category\">Circle Raised</p>\n                    <img src=\"assets/img/julie.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-raised\">\n                </div>\n            </div>\n        </div>\n      </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/components/typography/typography.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/typography/typography.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/typography/typography.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/typography/typography.component.ts ***!
  \***************************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () { };
    TypographyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-typography',
            template: __webpack_require__(/*! ./typography.component.html */ "./src/app/components/typography/typography.component.html"),
            styles: [__webpack_require__(/*! ./typography.component.scss */ "./src/app/components/typography/typography.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "./src/app/components/welcome/banner/banner.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/welcome/banner/banner.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"banner\">\r\n  <h1 class=\"col-md-12 introStatement\">Start cooking sooner</h1>\r\n</div>"

/***/ }),

/***/ "./src/app/components/welcome/banner/banner.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/welcome/banner/banner.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n.noLine {\n  text-decoration: none; }\n.banner {\n  background-size: cover;\n  background-position: center;\n  background-image: url('shutterstockPeopleShareFood.jpg');\n  height: 400px;\n  width: 100%;\n  z-index: 1;\n  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */\n  /* Firefox 3.5 - 3.6 */\n  box-shadow: inset 5px 50px 100px 100px #000;\n  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */\n  align-items: center;\n  justify-content: center; }\n.introStatement {\n  position: absolute;\n  top: 25%;\n  width: 100%;\n  text-align: center;\n  color: #FFF; }\n@media (min-width: 550px) {\n  .banner {\n    background-size: cover;\n    background-position: center;\n    background-image: url('shutterstockPeopleShareFood.jpg');\n    height: 500px;\n    width: 100%;\n    z-index: 1;\n    /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */\n    /* Firefox 3.5 - 3.6 */\n    box-shadow: inset 5px 50px 100px 100px #000;\n    /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */ }\n  .introStatement {\n    position: absolute;\n    top: 20%;\n    width: 100%;\n    text-align: center;\n    color: #FFF; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWxjb21lL2Jhbm5lci9DOlxcVXNlcnNcXGpvaG5tXFxEb2N1bWVudHNcXEdpdEh1YlxcU2ltcGxlc3QtQ29va2Jvb2stQW5ndWxhclxcc2ltcGxlc3QtY29va2Jvb2svc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy93ZWxjb21lL2Jhbm5lci9DOlxcVXNlcnNcXGpvaG5tXFxEb2N1bWVudHNcXEdpdEh1YlxcU2ltcGxlc3QtQ29va2Jvb2stQW5ndWxhclxcc2ltcGxlc3QtY29va2Jvb2svc3JjXFxhcHBcXGNvbXBvbmVudHNcXHdlbGNvbWVcXGJhbm5lclxcYmFubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBNEJBO0VBQ0UscUJBQXFCLEVBQUE7QUMzQnZCO0VBQ0Usc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQix3REFBa0Y7RUFDbEYsYUFBYTtFQUNiLFdBQVc7RUFDWCxVQUFVO0VBQzhDLDhDQUFBO0VBQ0Esc0JBQUE7RUFDeEQsMkNER1U7RUNIOEMsbURBQUE7RUFDeEQsbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBO0FBR3pCO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdETmUsRUFBQTtBQ1NqQjtFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQix3REFBa0Y7SUFDbEYsYUFBYTtJQUNiLFdBQVc7SUFDWCxVQUFVO0lBQzhDLDhDQUFBO0lBQ0Esc0JBQUE7SUFDeEQsMkNEcEJRO0lDb0JnRCxtREFBQSxFQUFvRDtFQUc5RztJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXRDNCYSxFQUFBLEVDNEJkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy93ZWxjb21lL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcblxyXG4vLyBSZXNwb25zaXZlIERlc2lnbnNcclxuJG1lZGlhLXF1ZXJ5LXBob25lOiA0MDBweDtcclxuJG1lZGlhLXF1ZXJ5LXNtYWxsLXRhYmxldDogNTUwcHg7XHJcbiRtZWRpYS1xdWVyeS10YWJsZXQ6IDc1MHB4O1xyXG4kbWVkaWEtcXVlcnktZGVza3RvcDogMTAwMHB4O1xyXG4kbWVkaWEtcXVlcnktZGVza3RvcC1oZDogMTIwMHB4O1xyXG5cclxuLy8gRm9udHNcclxuJGZvbnQtc3RhY2s6IFwiUmFsZXdheVwiLCBcIkhlbHZldGljYU5ldWVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG5cclxuLy8gQ29sb3JzXHJcbiRkZWZhdWx0LWJvZHktdGV4dDogIzIyMjtcclxuJGJsYWNrOiAjMDAwO1xyXG4kYm9uZS13aGl0ZTogI0ZGRjtcclxuJGJvcmRlci13aGl0ZTogI0UxRTFFMTtcclxuJGNvZGU6ICNGMUYxRjE7XHJcbiRsaW5rOiAjMUVBRURCO1xyXG4kbGluay1ob3ZlcjogIzBGQTBDRTtcclxuJHByaW1hcnktYmx1ZTogIzMzQzNGMDtcclxuJGRhdGEtYmx1ZTogIzExREZDNztcclxuXHJcbi8vIEJvcmRlcnNcclxuJGRlZmF1bHQtYm9yZGVyOiAxcHggc29saWQgJGJsYWNrO1xyXG4kd2hpdGUtYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci13aGl0ZTtcclxuJHByaW1hcnktYmx1ZS1ib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeS1ibHVlO1xyXG5cclxuLm5vTGluZSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59IiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxlc1wiO1xyXG5cclxuLmJhbm5lciB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NodXR0ZXJzdG9ja1Blb3BsZVNoYXJlRm9vZC5qcGcnKTtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAzcHggNTBweCAxMDBweCAxMDBweCAkYmxhY2s7ICAvKiBTYWZhcmkgMy00LCBpT1MgNC4wLjIgLSA0LjIsIEFuZHJvaWQgMi4zKyAqL1xyXG4gIC1tb3otYm94LXNoYWRvdzogICAgaW5zZXQgM3B4IDUwcHggMTAwcHggMTAwcHggJGJsYWNrOyAgLyogRmlyZWZveCAzLjUgLSAzLjYgKi9cclxuICBib3gtc2hhZG93OiAgICAgICAgIGluc2V0IDVweCA1MHB4IDEwMHB4IDEwMHB4ICRibGFjazsgIC8qIE9wZXJhIDEwLjUsIElFIDksIEZpcmVmb3ggNCssIENocm9tZSA2KywgaU9TIDUgKi9cclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaW50cm9TdGF0ZW1lbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDI1JTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICRib25lLXdoaXRlO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogJG1lZGlhLXF1ZXJ5LXNtYWxsLXRhYmxldCkge1xyXG4gIC5iYW5uZXIge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zaHV0dGVyc3RvY2tQZW9wbGVTaGFyZUZvb2QuanBnJyk7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAzcHggNTBweCAxMDBweCAxMDBweCAkYmxhY2s7ICAvKiBTYWZhcmkgMy00LCBpT1MgNC4wLjIgLSA0LjIsIEFuZHJvaWQgMi4zKyAqL1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAgICBpbnNldCAzcHggNTBweCAxMDBweCAxMDBweCAkYmxhY2s7ICAvKiBGaXJlZm94IDMuNSAtIDMuNiAqL1xyXG4gICAgYm94LXNoYWRvdzogICAgICAgICBpbnNldCA1cHggNTBweCAxMDBweCAxMDBweCAkYmxhY2s7ICAvKiBPcGVyYSAxMC41LCBJRSA5LCBGaXJlZm94IDQrLCBDaHJvbWUgNissIGlPUyA1ICovXHJcbiAgfVxyXG4gIFxyXG4gIC5pbnRyb1N0YXRlbWVudCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICRib25lLXdoaXRlO1xyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/welcome/banner/banner.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/welcome/banner/banner.component.ts ***!
  \***************************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
    }
    BannerComponent.prototype.ngOnInit = function () {
    };
    BannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-banner',
            template: __webpack_require__(/*! ./banner.component.html */ "./src/app/components/welcome/banner/banner.component.html"),
            styles: [__webpack_require__(/*! ./banner.component.scss */ "./src/app/components/welcome/banner/banner.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/components/welcome/welcome.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/welcome/welcome.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-banner class=\"row\"></app-banner>\r\n<app-mission-statement class=\"row\"></app-mission-statement>\r\n<section class=\"row\">\r\n    <h1 class=\"col-md-12 text-center\">Featured Recipes</h1>\r\n</section>\r\n<app-recipes class=\"row\"></app-recipes>"

/***/ }),

/***/ "./src/app/components/welcome/welcome.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/welcome/welcome.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/welcome/welcome.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/welcome/welcome.component.ts ***!
  \*********************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/components/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.scss */ "./src/app/components/welcome/welcome.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/services/messages/message.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/messages/message.service.ts ***!
  \******************************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], MessageService);
    return MessageService;
}());

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/services/recipe/recipe.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/recipe/recipe.service.ts ***!
  \***************************************************/
/*! exports provided: RecipeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeService", function() { return RecipeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var RecipeService = /** @class */ (function () {
    function RecipeService(http) {
        this.http = http;
        // constructor(private messageService: MessageService) { }
        // getRecipes(): Observable<Recipe[]> {
        //   // TODO: send the message _after_ fetching the recipes
        //   this.messageService.add('RecipeService: fetched recipes');
        //   return of(RECIPES);
        // }
        // getRecipe(id: number): Observable<Recipe> {
        //   // TODO: send the message _after_ fetching the recipe
        //   this.messageService.add(`RecipeService: fetched recipe id=${id}`);
        //   return of(RECIPES.find(recipe => recipe.id === id));
        // }
        this.uri = 'http://localhost:4000/recipe';
    }
    RecipeService.prototype.addRecipe = function (name, description) {
        var obj = {
            name: name,
            description: description
        };
        console.log(obj);
        this.http.post(this.uri + "/add", obj)
            .subscribe(function (res) { return console.log('Done'); });
    };
    RecipeService.prototype.getRecipes = function () {
        return this
            .http
            .get("" + this.uri);
    };
    RecipeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RecipeService);
    return RecipeService;
}());



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
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\johnm\Documents\GitHub\Simplest-Cookbook-Angular\simplest-cookbook\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map