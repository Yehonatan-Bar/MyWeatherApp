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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./favorites/favorites.component */ "./src/app/favorites/favorites.component.ts");
/* harmony import */ var _page404_page404_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page404/page404.component */ "./src/app/page404/page404.component.ts");






var routes = [
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "favorites", component: _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_4__["FavoritesComponent"] },
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "**", component: _page404_page404_component__WEBPACK_IMPORTED_MODULE_5__["Page404Component"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div{\r\n    height: 100vh;\r\n    box-sizing: border-box;\r\n    display:grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 1fr 15fr;\r\n\r\n    /* height: 100%;\r\n    width: 100%; */\r\n    /* display: flex !important; */\r\n}\r\nheader{\r\n    /* height: 20%; */\r\n    background-color: lightgrey !important;\r\n    grid-row: 1/2;\r\n}\r\nmain{\r\n    max-width: 100%;\r\n    /* height:900px; */\r\n    background: lightblue;\r\n    grid-row: 2/-1;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsNEJBQTRCOztJQUU1QjtrQkFDYztJQUNkLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLHNDQUFzQztJQUN0QyxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZ7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTVmcjtcclxuXHJcbiAgICAvKiBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTsgKi9cclxuICAgIC8qIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDsgKi9cclxufVxyXG5oZWFkZXJ7XHJcbiAgICAvKiBoZWlnaHQ6IDIwJTsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleSAhaW1wb3J0YW50O1xyXG4gICAgZ3JpZC1yb3c6IDEvMjtcclxufVxyXG5tYWlue1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgLyogaGVpZ2h0OjkwMHB4OyAqL1xyXG4gICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xyXG4gICAgZ3JpZC1yb3c6IDIvLTE7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div>\r\n    <header>\r\n        <app-header></app-header>\r\n    </header>\r\n    <main>\r\n        <router-outlet></router-outlet>\r\n    </main>\r\n\r\n</div>"

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
        this.title = 'TheWeatherProject2';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./favorites/favorites.component */ "./src/app/favorites/favorites.component.ts");
/* harmony import */ var _page404_page404_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page404/page404.component */ "./src/app/page404/page404.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_7__["FavoritesComponent"],
                _page404_page404_component__WEBPACK_IMPORTED_MODULE_8__["Page404Component"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/favorites/favorites.component.css":
/*!***************************************************!*\
  !*** ./src/app/favorites/favorites.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhdm9yaXRlcy9mYXZvcml0ZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/favorites/favorites.component.html":
/*!****************************************************!*\
  !*** ./src/app/favorites/favorites.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Favorite Locations</h2>\n\n<div  *ngFor=\"let a of allFavorite\">\n  <div  *ngFor=\"let f of a\">\n      \n      <p>{{f.Temperature.Imperial.Value}}</p>\n      <p>{{f.LocalSource.Name}}</p>\n    <p>{{f.Temperature.Imperial.Value}}</p>\n    <p>{{f.LocalSource.Name}}</p>\n    <!-- <p>Minimum: {{f.Temperature.Minimum.Value}}{{f.Temperature.Minimum.Unit}} </p>\n    <p>Maximum: {{f.Temperature.Maximum.Value}}{{f.Temperature.Maximum.Unit}} </p> -->\n\n  </div>\n  </div>\n  <!-- [\"\"0\"\"][\"\"0\"\"].Temperature.Imperial.Value -->"

/***/ }),

/***/ "./src/app/favorites/favorites.component.ts":
/*!**************************************************!*\
  !*** ./src/app/favorites/favorites.component.ts ***!
  \**************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_get_forecasts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/get-forecasts.service */ "./src/app/services/get-forecasts.service.ts");



var FavoritesComponent = /** @class */ (function () {
    function FavoritesComponent(forecastsService) {
        this.forecastsService = forecastsService;
        this.allFavorite = [];
    }
    FavoritesComponent.prototype.ngOnInit = function () {
        console.log("console.log(localStorage.getItem('allFavorites')) = ", localStorage.getItem('allFavorites'));
        if (localStorage.getItem('allFavorites')) {
            this.myFavorites = JSON.parse(localStorage.getItem('allFavorites'));
        }
        this.setFavortesArray();
    };
    FavoritesComponent.prototype.setFavortesArray = function () {
        var _this = this;
        if (localStorage.getItem('allFavorites')) {
            for (var _i = 0, _a = this.myFavorites; _i < _a.length; _i++) {
                var f = _a[_i];
                console.log("console.log(f) = ", f);
                this.forecastsService.getcurrentconditions(f).subscribe(function (results) {
                    _this.favorite = results;
                    _this.allFavorite.push(results);
                    console.log("console.log(this.favorite) = ", _this.favorite);
                    console.log("console.log(this.allFavorite) = ", _this.allFavorite);
                });
            }
        }
    };
    FavoritesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favorites',
            template: __webpack_require__(/*! ./favorites.component.html */ "./src/app/favorites/favorites.component.html"),
            styles: [__webpack_require__(/*! ./favorites.component.css */ "./src/app/favorites/favorites.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_get_forecasts_service__WEBPACK_IMPORTED_MODULE_2__["GetForecastsService"]])
    ], FavoritesComponent);
    return FavoritesComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <a routerLink=\"home\">Home</a>\n  <a routerLink=\"favorites\">Favorites</a>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .country-content-main{\r\n    max-width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n\r\n} */\r\n.country-content{\r\n    min-width: 150px;\r\n    max-width: 150px;\r\n    height: 150px;\r\n    overflow:auto;\r\n    display: inline-block;\r\n    background: lightgreen;\r\n    color: blue;\r\n    padding: 15px;\r\n    margin-left: 15px;\r\n    margin-top: 10px;\r\n    border: 3px solid lightgray;\r\n    border-radius: 100px;\r\n    text-align: center;\r\n\r\n\r\n}\r\n.search{\r\n    width: 200px;\r\n    margin: auto;\r\n    }\r\n.my-list{\r\n        position: fixed;\r\n    }\r\n.my-item{\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0dBS0c7QUFDSDtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0Isb0JBQW9CO0lBQ3BCLGtCQUFrQjs7O0FBR3RCO0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaO0FBRUE7UUFDSSxlQUFlO0lBQ25CO0FBRUo7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuY291bnRyeS1jb250ZW50LW1haW57XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbn0gKi9cclxuLmNvdW50cnktY29udGVudHtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIG92ZXJmbG93OmF1dG87XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZWVuO1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG5cclxufVxyXG5cclxuLnNlYXJjaHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAubXktbGlzdHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB9XHJcbiAgICBcclxuLm15LWl0ZW17XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"country-content-main\">\n  <div class=\"\"w-50 m-5>\n      <div class=\"search\">\n    <input #searchCityName type=\"text\" class=\"form-control\" placeholder=\"Enter city name\" \n    (keyup)=\"searchForecasts(searchCityName.value)\">\n\n  <ul class=\"list-group my-list\">\n      <li  *ngFor=\"let city of citiesFromSearch\"\n       (click)=\"getFiveDayForecasts(city)\">{{city.LocalizedName}}</li>\n    </ul> \n  </div>\n<h2>{{cityName}}</h2>\n<!-- DailyForecasts[\"\"0\"\"].Temperature.Maximum.Value -->\n  <div class=\"country-content\" *ngFor=\"let f of forcast.DailyForecasts\">\n    <p>{{f.Day.IconPhrase}}</p>\n    <p>Minimum: {{f.Temperature.Minimum.Value}}{{f.Temperature.Minimum.Unit}} </p>\n    <p>Maximum: {{f.Temperature.Maximum.Value}}{{f.Temperature.Maximum.Unit}} </p>\n\n  </div>\n\n<button type=\"button\" (click)=\"favoriteMe()\" class=\"btn btn-primary\">add to favorite</button>\n\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_get_forecasts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/get-forecasts.service */ "./src/app/services/get-forecasts.service.ts");


// import { Country } from '../models/country';

// import { FiveDayWeatherModel } from '../models/five-days-model';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(forecastsService) {
        this.forecastsService = forecastsService;
        this.citiesFromSearch = [];
        this.locationKey = "215854";
        this.cityName = "Tel Aviv";
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getFiveDayForecastsForNg();
    };
    HomeComponent.prototype.searchForecasts = function (cityName) {
        var _this = this;
        this.forecastsService.getCityAutocomplete(cityName).subscribe(function (results) {
            _this.citiesFromSearch = results;
        });
    };
    HomeComponent.prototype.getFiveDayForecasts = function (cityName) {
        var _this = this;
        this.cityName = cityName.LocalizedName;
        this.locationKey = cityName.Key;
        this.citiesFromSearch = [];
        this.forecastsService.getFiveDayWeather(this.locationKey).subscribe(function (res) {
            _this.forcast = res;
            console.log("console.log(this.forcast) = ", _this.forcast);
            console.log("console.log(this.cityName) = ", _this.cityName);
        }, function (error) {
            alert("forecast not found");
        });
    };
    HomeComponent.prototype.getFiveDayForecastsForNg = function () {
        var _this = this;
        this.forecastsService.getFiveDayWeather(this.locationKey).subscribe(function (res) {
            _this.forcast = res;
            console.log("console.log(this.forcast) = ", _this.forcast);
        }, function (error) {
            alert("forecast not found");
        });
    };
    HomeComponent.prototype.favoriteMe = function () {
        if (!localStorage.getItem('allFavorites')) {
            this.allFavorites = [];
            this.allFavorites.push(this.locationKey);
            localStorage.setItem('allFavorites', JSON.stringify(this.allFavorites));
        }
        else {
            this.allFavorites = JSON.parse(localStorage.getItem('allFavorites'));
            this.allFavorites.push(this.locationKey);
            localStorage.setItem('allFavorites', JSON.stringify(this.allFavorites));
        }
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_get_forecasts_service__WEBPACK_IMPORTED_MODULE_2__["GetForecastsService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/page404/page404.component.css":
/*!***********************************************!*\
  !*** ./src/app/page404/page404.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2U0MDQvcGFnZTQwNC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/page404/page404.component.html":
/*!************************************************!*\
  !*** ./src/app/page404/page404.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page404 works!\n</p>\n"

/***/ }),

/***/ "./src/app/page404/page404.component.ts":
/*!**********************************************!*\
  !*** ./src/app/page404/page404.component.ts ***!
  \**********************************************/
/*! exports provided: Page404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404Component", function() { return Page404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Page404Component = /** @class */ (function () {
    function Page404Component() {
    }
    Page404Component.prototype.ngOnInit = function () {
    };
    Page404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page404',
            template: __webpack_require__(/*! ./page404.component.html */ "./src/app/page404/page404.component.html"),
            styles: [__webpack_require__(/*! ./page404.component.css */ "./src/app/page404/page404.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Page404Component);
    return Page404Component;
}());



/***/ }),

/***/ "./src/app/services/get-forecasts.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/get-forecasts.service.ts ***!
  \***************************************************/
/*! exports provided: GetForecastsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetForecastsService", function() { return GetForecastsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var GetForecastsService = /** @class */ (function () {
    // yonzbar "vcmhLBfAVywAiMZecakjulylOo4CHPAp";
    //yonzb.ar "AFgcDyBc9UbUOq8DlkGnywLCG8JGu1ZM";
    function GetForecastsService(http) {
        this.http = http;
        //y.onzbar: "dpR4W7jXGWtNAQDEQ91UfJAt0QJ9alQ8"
        this.apiKey = "dpR4W7jXGWtNAQDEQ91UfJAt0QJ9alQ8";
    }
    GetForecastsService.prototype.getFiveDayWeather = function (locationKey) {
        return this.http.get("http://dataservice.accuweather.com/forecasts/v1/daily/5day/" + locationKey + "?apikey=" + this.apiKey);
    };
    //   public getFiveDayWeather2(locationKey:string):Observable<any> {
    //   return this.http.get<Object>
    //   (`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${this.apiKey2}`);
    // }
    GetForecastsService.prototype.getCityAutocomplete = function (searchValue) {
        return this.http.get("http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=" + this.apiKey + "&language=en-us" + '&q=' + searchValue);
    };
    // http://dataservice.accuweather.com/locations/v1/cities/autocomplete
    GetForecastsService.prototype.getcurrentconditions = function (locationKey) {
        return this.http.get("http://dataservice.accuweather.com/currentconditions/v1/" + locationKey + "?apikey=" + this.apiKey);
    };
    GetForecastsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GetForecastsService);
    return GetForecastsService;
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

module.exports = __webpack_require__(/*! C:\Users\User\Documents\Job Finding\Herolo\Angular herolo project\TheWeatherProject2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map