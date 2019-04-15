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
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");






var appRoutes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'chat', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"], pathMatch: 'full', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], pathMatch: 'full' },
    { path: '**', redirectTo: '/chat' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
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

module.exports = "<router-outlet></router-outlet>\r\n"

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
        this.title = 'cloud-chat';
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_7__["ChatComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            providers: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"chat-component-wrapper\" [style.background-color]=\"ConservationMood\">\n  <div id=\"chat-rooms-selector\">\n    <div *ngFor=\"let room of chatrooms | keyvalue\" class=\"chat-room-selector\" (click)=\"selected = room.key\">\n      <div class=\"centered-text\" [ngClass]=\"room.key==selected?'selected-room':''\">{{room.value.name}}</div>\n    </div>\n    <button id=\"add-group\" (click)=\"onClickCreateGroup()\">\n      +\n    </button>\n  </div>\n  <div id=\"chat-room\">\n    <div id=\"header\">\n      <p>\n        <span *ngIf=\"chatrooms[selected].isMember\">You</span>\n        <span *ngFor=\"let user of chatrooms[selected].users\" (click)=\"onClickPrivateMessage(user)\" class=\"clickable\">, {{user.name}}</span>\n      </p>\n    </div>\n    <div id=\"messages\">\n      <div [ngClass]=\"{'positive':positive, 'negative': !positive, 'active': alertMessage}\" class=\"alert\" ><span>{{alertMessage}}</span></div>\n      <div class=\"message-wrapper\" *ngFor=\"let msg of chatrooms[selected].messages\">\n        <div *ngIf=\"msg.sender\" class=\"message-sender\">{{chatrooms['global'].findUserById(msg.sender).name}}:</div>\n        <div [ngClass]=\"msg.sender?'message':'message-personal'\" class=\"message-personal\">\n          <div class=\"message-text\">{{msg.message}}</div>\n          <div *ngIf=\"msg.media\">\n            <img *ngIf=\"msg.media.split(':')[1].split('/')[0] == 'image'\" [src]=\"msg.media\" width=\"500px\" alt=\"\">\n            <video *ngIf=\"msg.media.split(':')[1].split('/')[0] == 'video'\" [src]=\"msg.media\" width=\"500px\"></video>\n            <audio *ngIf=\"msg.media.split(':')[1].split('/')[0] == 'audio'\" [src]=\"msg.media\" width=\"500px\"></audio>\n          </div>\n          <div class=\"message-mood\">{{msg.mood}}</div>\n          <div class=\"message-timestamp\">{{msg.timeStampString}}</div>\n        </div>\n      </div>\n    </div>\n    <button *ngIf=\"!chatrooms[selected].isMember\" id=\"join-chat\" (click)=\"onClickJoinGroup()\">JOIN CHAT</button>\n    <form *ngIf=\"chatrooms[selected].isMember\" (ngSubmit)=\"onClickSend()\">\n      <input *ngIf=\"typeFile\" type=\"file\" single (change)=\"onFileSelect($event)\">\n      <input *ngIf=\"!typeFile\" name=\"message\" id=\"m\" autocomplete=\"off\" [(ngModel)]=\"message\"/>\n      <button class=\"button\">Send</button>\n      <button class=\"button\" (click)=\"switchMode($event)\">Modus</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/chat/chat.component.scss":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\nbody {\n  font: 13px Helvetica, Arial; }\n\nform {\n  position: relative;\n  width: 100%; }\n\nform input {\n  margin-left: 0.5%;\n  border: 0;\n  padding: 10px;\n  width: 80%;\n  border-radius: 15px; }\n\n.button {\n  margin-left: 0.5%;\n  border: 0;\n  padding: 10px;\n  width: 9%;\n  background: #82e0ff;\n  border-radius: 15px; }\n\n#messages {\n  width: 100%;\n  height: calc(100% - 93px);\n  margin: 0;\n  overflow-y: scroll; }\n\n#chat-component-wrapper {\n  width: 100%;\n  height: 100%; }\n\n.clickable {\n  cursor: pointer; }\n\n.clickable:hover {\n  background: #eee; }\n\n.selected-room {\n  background: aquamarine; }\n\n.alert {\n  z-index: 1000;\n  width: 100%;\n  height: 0;\n  box-sizing: border-box;\n  color: white;\n  text-align: center;\n  overflow: hidden;\n  box-sizing: border-box;\n  transition: height .2s;\n  display: inline-block; }\n\n.positive {\n  background: #00c800; }\n\n.negative {\n  background: #c80000; }\n\n#chat-rooms-selector {\n  position: relative;\n  float: left;\n  width: 20%;\n  height: 100%;\n  background: #fff; }\n\n.chat-room-selector {\n  display: inline-block;\n  cursor: pointer;\n  position: relative;\n  float: left;\n  width: 100%;\n  height: 50px;\n  background: #eee;\n  border-bottom: 2px solid #ccc;\n  text-align: center;\n  font-size: 30px;\n  padding-top: 10px; }\n\n#add-group {\n  width: 100%;\n  height: 50px;\n  font-size: 30px;\n  padding-top: 10px; }\n\n#join-chat {\n  padding: 3px;\n  position: fixed;\n  bottom: 0;\n  width: 80%; }\n\n#chat-room {\n  position: relative;\n  float: left;\n  width: 80%;\n  height: 100%;\n  box-sizing: padding-box; }\n\n#header {\n  position: relative;\n  width: 100%;\n  text-wrap: normal;\n  height: 50px;\n  background: #fff; }\n\n.message-wrapper {\n  position: relative;\n  float: left;\n  width: 100%; }\n\n.message-personal {\n  float: right;\n  padding: 10px;\n  margin: 5px;\n  width: 70%;\n  border-radius: 10px;\n  background: #fff; }\n\n.message {\n  float: left;\n  padding: 10px;\n  margin: 5px;\n  width: 70%;\n  border-radius: 10px;\n  background: #ddd; }\n\n.message-sender {\n  float: left;\n  padding: 10px;\n  margin: 5px;\n  border-radius: 10px;\n  background: #00f;\n  color: #fff; }\n\n.message-text {\n  width: 100%; }\n\n.message-timestamp {\n  position: relative;\n  float: right;\n  font-size: 0.7em;\n  text-align: right;\n  color: lightslategrey; }\n\n.message-mood {\n  position: relative;\n  float: left;\n  font-size: 0.7em;\n  text-align: left;\n  color: lightslategrey; }\n\n.active {\n  height: 50px;\n  line-height: 49px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9DOlxcVXNlcnNcXEVyaWNQcnl0dWxsYVxcRGVza3RvcFxcVW5pXFxDbG91ZCBDb21wdXRpbmdcXENsb3VkQ29tcHV0aW5nXFxjbG91ZC1jaGF0L3NyY1xcYXBwXFxjaGF0XFxjaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUksU0FBUztFQUFFLFVBQVU7RUFBRSxzQkFBc0IsRUFBQTs7QUFDakQ7RUFBTywyQkFBMkIsRUFBQTs7QUFDbEM7RUFBTyxrQkFBa0I7RUFBRSxXQUFXLEVBQUE7O0FBQ3RDO0VBQWEsaUJBQWlCO0VBQUUsU0FBUztFQUFFLGFBQWE7RUFBRSxVQUFVO0VBQUUsbUJBQW1CLEVBQUE7O0FBQ3pGO0VBQVUsaUJBQWlCO0VBQUUsU0FBUztFQUFFLGFBQWE7RUFBRSxTQUFTO0VBQUUsbUJBQThCO0VBQUUsbUJBQW1CLEVBQUE7O0FBQ3JIO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1Qsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxhQUFhO0VBQ2IsV0FBVTtFQUNWLFNBQVE7RUFDUixzQkFBcUI7RUFDckIsWUFBVztFQUNYLGtCQUFpQjtFQUNqQixnQkFBZTtFQUNmLHNCQUFxQjtFQUNyQixzQkFBcUI7RUFDckIscUJBQXFCLEVBQUE7O0FBRXZCO0VBQ0UsbUJBQTBCLEVBQUE7O0FBRTVCO0VBQ0UsbUJBQTBCLEVBQUE7O0FBRzVCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLFNBQVM7RUFDVCxVQUFVLEVBQUE7O0FBR1o7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZO0VBQ1osdUJBQXVCLEVBQUE7O0FBR3pCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVyxFQUFBOztBQUdiO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXO0VBQ1gsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFdBQVc7RUFDWCxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxZQUFXO0VBQ1gsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jaGF0L2NoYXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwOyBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XHJcbmJvZHkgeyBmb250OiAxM3B4IEhlbHZldGljYSwgQXJpYWw7IH1cclxuZm9ybSB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgd2lkdGg6IDEwMCU7IH1cclxuZm9ybSBpbnB1dCB7IG1hcmdpbi1sZWZ0OiAwLjUlOyBib3JkZXI6IDA7IHBhZGRpbmc6IDEwcHg7IHdpZHRoOiA4MCU7IGJvcmRlci1yYWRpdXM6IDE1cHg7fVxyXG4uYnV0dG9uIHsgbWFyZ2luLWxlZnQ6IDAuNSU7IGJvcmRlcjogMDsgcGFkZGluZzogMTBweDsgd2lkdGg6IDklOyBiYWNrZ3JvdW5kOiByZ2IoMTMwLCAyMjQsIDI1NSk7IGJvcmRlci1yYWRpdXM6IDE1cHh9XHJcbiNtZXNzYWdlcyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA5M3B4KTtcclxuICBtYXJnaW46IDA7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4jY2hhdC1jb21wb25lbnQtd3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY2xpY2thYmxlIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmNsaWNrYWJsZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2VlZTtcclxufVxyXG4uc2VsZWN0ZWQtcm9vbSB7XHJcbiAgYmFja2dyb3VuZDogYXF1YW1hcmluZTtcclxufVxyXG5cclxuLmFsZXJ0IHtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OjA7XHJcbiAgYm94LXNpemluZzpib3JkZXItYm94O1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIG92ZXJmbG93OmhpZGRlbjtcclxuICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbiAgdHJhbnNpdGlvbjpoZWlnaHQgLjJzO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4ucG9zaXRpdmUge1xyXG4gIGJhY2tncm91bmQ6cmdiYSgwLDIwMCwwLDEpO1xyXG59XHJcbi5uZWdhdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDpyZ2JhKDIwMCwwLDAsMSk7XHJcbn1cclxuXHJcbiNjaGF0LXJvb21zLXNlbGVjdG9yIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLmNoYXQtcm9vbS1zZWxlY3RvciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjY2M7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuI2FkZC1ncm91cCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuI2pvaW4tY2hhdCB7XHJcbiAgcGFkZGluZzogM3B4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuI2NoYXQtcm9vbSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IHBhZGRpbmctYm94O1xyXG59XHJcblxyXG4jaGVhZGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC13cmFwOiBub3JtYWw7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbi5tZXNzYWdlLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1lc3NhZ2UtcGVyc29uYWwge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG4ubWVzc2FnZSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDVweDtcclxuICB3aWR0aDogNzAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI2RkZDtcclxufVxyXG4ubWVzc2FnZS1zZW5kZXIge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjMDBmO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubWVzc2FnZS10ZXh0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1lc3NhZ2UtdGltZXN0YW1wIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgY29sb3I6IGxpZ2h0c2xhdGVncmV5O1xyXG59XHJcblxyXG4ubWVzc2FnZS1tb29kIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgZm9udC1zaXplOiAwLjdlbTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGNvbG9yOiBsaWdodHNsYXRlZ3JleTtcclxufVxyXG5cclxuLmFjdGl2ZXtcclxuICBoZWlnaHQ6NTBweDtcclxuICBsaW5lLWhlaWdodDogNDlweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: Message, Chatroom, User, ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chatroom", function() { return Chatroom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var _services_tone_analyzer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/tone-analyzer.service */ "./src/app/services/tone-analyzer.service.ts");




var Message = /** @class */ (function () {
    function Message(message, media, to, timeStamp, type, mood, sender) {
        this.message = message;
        this.sender = sender;
        this.to = to;
        this.timeStamp = timeStamp;
        this.type = type;
        this.media = media;
        this.mood = mood;
    }
    Object.defineProperty(Message.prototype, "timeStampString", {
        get: function () {
            return this.timeStamp.toLocaleString();
        },
        enumerable: true,
        configurable: true
    });
    return Message;
}());

var Chatroom = /** @class */ (function () {
    function Chatroom(name, id, type, isMember) {
        this.messages = [];
        this.users = [];
        this.id = id;
        this.name = name;
        this.type = type;
        this.isMember = isMember;
    }
    Chatroom.prototype.pushMessage = function (message) {
        this.messages.push(message);
        this.last_msg = message.timeStamp;
    };
    Chatroom.prototype.pushUser = function (user) {
        this.users.push(user);
    };
    Chatroom.prototype.popUser = function (user) {
        this.users.splice(this.users.findIndex(function (u) { return user.equals(u); }), 1);
    };
    Chatroom.prototype.findUserById = function (id) {
        var index = this.users.findIndex(function (u) { return u.id == id; });
        return this.users[index];
    };
    return Chatroom;
}());

var User = /** @class */ (function () {
    function User(name, id) {
        this.name = name;
        this.id = id;
    }
    User.prototype.equals = function (user) {
        return user.id == this.id;
    };
    return User;
}());

var ChatComponent = /** @class */ (function () {
    function ChatComponent(socketService, toneAnalyzer) {
        var _this = this;
        this.socketService = socketService;
        this.toneAnalyzer = toneAnalyzer;
        this.selected = 'global';
        this.alertMessage = "";
        this.typeFile = false;
        this.moods = ['Red', 'OrangeRed', 'Coral', 'Orange', 'Gold', 'Yellow', 'GreenYellow', 'Lawngreen', 'YellowGreen', 'LimeGreen', 'Green'];
        this.chatrooms = { 'global': new Chatroom('global', 'global', 'group', true) };
        this.socketService._socket.on('connected users', function (users) {
            users.map(function (user) { _this.chatrooms.global.pushUser(user); });
        });
        this.socketService._socket.on('existing groups', function (groups) {
            groups.map(function (group) {
                _this.chatrooms[group.id] = new Chatroom(group.id, group.id, 'group', false);
                group.users.map(function (user) { return _this.chatrooms[group.id].pushUser(_this.chatrooms['global'].findUserById(user)); });
            });
        });
        this.socketService._socket.on('group message', function (msg) {
            _this.toneAnalyzer.moodify(msg.mood.mood);
            _this.chatrooms[msg.to].pushMessage(new Message(msg.message, msg.media, msg.to, new Date(msg.timeStamp), msg.type, msg.mood.mood, msg.sender));
        });
        this.socketService._socket.on('personal message', function (msg) {
            var message = new Message(msg.message, msg.file, msg.to, new Date(msg.timeStamp), msg.type, msg.mood.mood, msg.sender);
            _this.toneAnalyzer.moodify(msg.mood.mood);
            if (!_this.chatrooms[msg.sender]) {
                _this.chatrooms[msg.sender] = new Chatroom(_this.chatrooms['global'].findUserById(msg.sender).name, msg.sender, 'personal', true);
                _this.chatrooms[msg.sender].pushUser(_this.chatrooms['global'].findUserById(msg.sender));
            }
            _this.chatrooms[msg.sender].pushMessage(message);
        });
        this.socketService._socket.on('user connected', function (user, id) {
            _this.chatrooms.global.pushUser(new User(user, id));
            _this.sendAlert('user ' + user + ' connected', true);
        });
        this.socketService._socket.on('group created', function (name, userId) {
            _this.chatrooms[name] = new Chatroom(name, name, 'group', false);
            _this.chatrooms[name].pushUser(_this.chatrooms['global'].findUserById(userId));
        });
        this.socketService._socket.on('user joined', function (name, userId) {
            _this.chatrooms[name].pushUser(_this.chatrooms['global'].findUserById(userId));
        });
        this.socketService._socket.on('user disconnected', function (user, id) {
            _this.chatrooms.global.popUser(new User(user, id));
            _this.sendAlert('user ' + user + ' disconnected', false);
        });
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent.prototype.onClickSend = function () {
        var messageObj = new Message(this.message, this.file, this.selected, new Date(), this.chatrooms[this.selected].type);
        this.chatrooms[this.selected].messages.push(messageObj);
        this.socketService.sendMessage(messageObj);
        this.message = '';
        this.file == null;
    };
    ChatComponent.prototype.onClickCreateGroup = function () {
        var name = prompt('Please enter the chatroom name', 'Blob');
        if (name != null && name != "" && this.chatrooms[name]) {
            alert("Chatroom " + name + " existiert bereits!");
        }
        this.chatrooms[name] = new Chatroom(name, name, 'group', true);
        this.selected = name;
        this.socketService.createRoom(name);
    };
    ChatComponent.prototype.onClickJoinGroup = function () {
        this.chatrooms[this.selected].isMember = true;
        this.socketService.joinRoom(this.selected);
    };
    ChatComponent.prototype.onClickPrivateMessage = function (to) {
        this.chatrooms[to.id] = new Chatroom(to.name, to.id, 'personal', true);
        this.selected = to.id;
        this.chatrooms[to.id].pushUser(to);
    };
    ChatComponent.prototype.onFileSelect = function (event) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            _this.file = reader.result;
        }, false);
        if (event.target.files[0]) {
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    ChatComponent.prototype.sendAlert = function (msg, positive) {
        var _this = this;
        this.positive = positive;
        this.alertMessage = msg;
        setTimeout(function () {
            _this.alertMessage = null;
        }, 2000);
    };
    ChatComponent.prototype.switchMode = function (event) {
        event.preventDefault();
        this.typeFile = !this.typeFile;
    };
    Object.defineProperty(ChatComponent.prototype, "ConservationMood", {
        get: function () {
            return this.moods[this.toneAnalyzer.ConversationMood];
        },
        enumerable: true,
        configurable: true
    });
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/chat/chat.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"], _services_tone_analyzer_service__WEBPACK_IMPORTED_MODULE_3__["ToneAnalyzerService"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/socket.service */ "./src/app/services/socket.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(_socketService, _router) {
        this._socketService = _socketService;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this._socketService.isConnected()) {
            console.log("Authenticated");
            return true;
        }
        else {
            this._router.navigate(['/login']);
            console.log("Not authenticated");
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"login\" (ngSubmit)=\"onClickLogin()\">\n  <input [ngClass]=\"required?'required':''\" name=\"username\" type=\"text\" placeholder=\"Username\" [(ngModel)]=\"username\">\n  <button>Login</button>\n</form>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login {\n  overflow: hidden;\n  background-color: white;\n  padding: 40px 30px 30px 30px;\n  border-radius: 10px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 400px;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  transition: box-shadow 300ms, -webkit-transform 300ms;\n  transition: transform 300ms, box-shadow 300ms;\n  transition: transform 300ms, box-shadow 300ms, -webkit-transform 300ms;\n  box-shadow: 5px 10px 10px rgba(2, 128, 144, 0.2); }\n  .login::before, .login::after {\n    content: '';\n    position: absolute;\n    width: 600px;\n    height: 600px;\n    border-top-left-radius: 40%;\n    border-top-right-radius: 45%;\n    border-bottom-left-radius: 35%;\n    border-bottom-right-radius: 40%;\n    z-index: -1; }\n  .login::before {\n    left: 40%;\n    bottom: -130%;\n    background-color: rgba(69, 105, 144, 0.15);\n    -webkit-animation: wawes 6s infinite linear;\n            animation: wawes 6s infinite linear; }\n  .login::after {\n    left: 35%;\n    bottom: -125%;\n    background-color: rgba(2, 128, 144, 0.2);\n    -webkit-animation: wawes 7s infinite;\n            animation: wawes 7s infinite; }\n  .login > input {\n    font-family: \"Asap\", sans-serif;\n    display: block;\n    border-radius: 5px;\n    font-size: 16px;\n    background: white;\n    width: 100%;\n    border: 0;\n    padding: 10px 10px;\n    margin: 15px -10px; }\n  .login .required {\n    border: 1px solid #c00 !important; }\n  .login > button {\n    font-family: \"Asap\", sans-serif;\n    cursor: pointer;\n    color: #fff;\n    font-size: 16px;\n    text-transform: uppercase;\n    width: 80px;\n    border: 0;\n    padding: 10px 0;\n    margin-top: 10px;\n    margin-left: -5px;\n    border-radius: 5px;\n    background-color: #f45b69;\n    transition: background-color 300ms; }\n  .login > button:hover {\n      background-color: #f24353; }\n  @-webkit-keyframes wawes {\n  from {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n  @keyframes wawes {\n  from {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxFcmljUHJ5dHVsbGFcXERlc2t0b3BcXFVuaVxcQ2xvdWQgQ29tcHV0aW5nXFxDbG91ZENvbXB1dGluZ1xcY2xvdWQtY2hhdC9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2Qiw0QkFBNEI7RUFDNUIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFlBQVk7RUFDWix3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0VBQ2hDLHFEQUE2QztFQUE3Qyw2Q0FBNkM7RUFBN0Msc0VBQTZDO0VBQzdDLGdEQXBCaUMsRUFBQTtFQVNuQztJQWNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLDhCQUE4QjtJQUM5QiwrQkFBK0I7SUFDL0IsV0FBVyxFQUFBO0VBdEJmO0lBMEJJLFNBQVM7SUFDVCxhQUFhO0lBQ2IsMENBcEM2QjtJQXFDN0IsMkNBQW1DO1lBQW5DLG1DQUFtQyxFQUFBO0VBN0J2QztJQWlDSSxTQUFTO0lBQ1QsYUFBYTtJQUNiLHdDQTVDK0I7SUE2Qy9CLG9DQUE0QjtZQUE1Qiw0QkFBNEIsRUFBQTtFQXBDaEM7SUF3Q0ksK0JBNUN5QjtJQTZDekIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGtCQUFrQixFQUFBO0VBaER0QjtJQW1ESSxpQ0FBaUMsRUFBQTtFQW5EckM7SUF5REksK0JBN0R5QjtJQThEekIsZUFBZTtJQUNmLFdBQVc7SUFDWCxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHlCQTNFMkI7SUE0RTNCLGtDQUFrQyxFQUFBO0VBckV0QztNQXdFTSx5QkFBc0MsRUFBQTtFQUs1QztFQUNFO0lBQU8sNEJBQW9CO1lBQXBCLG9CQUFvQixFQUFBO0VBQzNCO0lBQUssaUNBQXlCO1lBQXpCLHlCQUF5QixFQUFBLEVBQUE7RUFGaEM7RUFDRTtJQUFPLDRCQUFvQjtZQUFwQixvQkFBb0IsRUFBQTtFQUMzQjtJQUFLLGlDQUF5QjtZQUF6Qix5QkFBeUIsRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb2xvcnNcclxuJGdyZWVuU2Vhd2VlZDogcmdiYSgyLCAxMjgsIDE0NCwgMSk7XHJcbiRibHVlUXVlZW46IHJnYmEoNjksIDEwNSwgMTQ0LCAxKTtcclxuJHJlZEZpcmU6IHJnYmEoMjQ0LCA5MSwgMTA1LCAxKTtcclxuXHJcbi8vIEZvbnRzXHJcbiRmb250QXNhcDogJ0FzYXAnLCBzYW5zLXNlcmlmO1xyXG5cclxuXHJcblxyXG4ubG9naW4ge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogNDBweCAzMHB4IDMwcHggMzBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcywgYm94LXNoYWRvdyAzMDBtcztcclxuICBib3gtc2hhZG93OiA1cHggMTBweCAxMHB4IHJnYmEoJGdyZWVuU2Vhd2VlZCwgMC4yKTtcclxuXHJcbiAgJjo6YmVmb3JlLCAmOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0MCU7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNDUlO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMzUlO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDQwJTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuXHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGxlZnQ6IDQwJTtcclxuICAgIGJvdHRvbTogLTEzMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRibHVlUXVlZW4sIDAuMTUpO1xyXG4gICAgYW5pbWF0aW9uOiB3YXdlcyA2cyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgfVxyXG5cclxuICAmOjphZnRlciB7XHJcbiAgICBsZWZ0OiAzNSU7XHJcbiAgICBib3R0b206IC0xMjUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkZ3JlZW5TZWF3ZWVkLCAwLjIpO1xyXG4gICAgYW5pbWF0aW9uOiB3YXdlcyA3cyBpbmZpbml0ZTtcclxuICB9XHJcblxyXG4gID4gaW5wdXQge1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250QXNhcDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgIG1hcmdpbjogMTVweCAtMTBweDtcclxuICB9XHJcbiAgLnJlcXVpcmVkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgPiBidXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250QXNhcDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZEZpcmU7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJHJlZEZpcmUsIDUlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgd2F3ZXMge1xyXG4gIGZyb20geyB0cmFuc2Zvcm06IHJvdGF0ZSgwKTsgfVxyXG4gIHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG59XHJcblxyXG4iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/socket.service */ "./src/app/services/socket.service.ts");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(socketService) {
        this.socketService = socketService;
        this.username = null;
        this.required = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onClickLogin = function () {
        if (this.username && this.username.length > 1 && this.username.length < 10) {
            this.socketService.login(this.username);
        }
        else {
            this.required = true;
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/services/socket.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/socket.service.ts ***!
  \********************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SocketService = /** @class */ (function () {
    function SocketService(router) {
        this.router = router;
    }
    SocketService.prototype.isConnected = function () {
        return this.connected;
    };
    SocketService.prototype.login = function (username) {
        this.connect(username);
        this.router.navigate(["/chat"]);
    };
    SocketService.prototype.sendMessage = function (message) {
        this.socket.emit('chat message', message);
    };
    SocketService.prototype.createRoom = function (name) {
        this.socket.emit('create group', name);
    };
    SocketService.prototype.joinRoom = function (id) {
        this.socket.emit('join group', id);
    };
    Object.defineProperty(SocketService.prototype, "_socket", {
        get: function () {
            return this.socket;
        },
        enumerable: true,
        configurable: true
    });
    SocketService.prototype.connect = function (username) {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__({ query: { username: username } });
        this.socket.connect();
        this.connected = true;
    };
    SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/services/tone-analyzer.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/tone-analyzer.service.ts ***!
  \***************************************************/
/*! exports provided: ToneAnalyzerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToneAnalyzerService", function() { return ToneAnalyzerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ToneAnalyzerService = /** @class */ (function () {
    function ToneAnalyzerService(http) {
        this.http = http;
        this.apiUrl = "/tone";
        this.mood = 10;
        this.max = 10;
        this.min = 0;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
    }
    ToneAnalyzerService.prototype.moodify = function (mood) {
        console.log(mood);
        switch (mood) {
            case 'happy':
                if (this.mood < this.max) {
                    this.mood++;
                }
                break;
            case 'unhappy':
                if (this.mood > this.min) {
                    this.mood--;
                }
                break;
        }
    };
    Object.defineProperty(ToneAnalyzerService.prototype, "ConversationMood", {
        get: function () {
            return this.mood;
        },
        enumerable: true,
        configurable: true
    });
    ToneAnalyzerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ToneAnalyzerService);
    return ToneAnalyzerService;
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

module.exports = __webpack_require__(/*! C:\Users\EricPrytulla\Desktop\Uni\Cloud Computing\CloudComputing\cloud-chat\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map