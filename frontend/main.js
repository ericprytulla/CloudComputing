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

module.exports = "<div id=\"chat-component-wrapper\" [style.background-color]=\"ConservationMood\">\n  <div id=\"chat-rooms-selector\">\n    <div *ngFor=\"let room of chatrooms | keyvalue\" class=\"chat-room-selector\" (click)=\"selected = room.key\">\n      <div class=\"centered-text\" [ngClass]=\"room.key==selected?'selected-room':''\">{{room.value.name}}</div>\n    </div>\n    <button id=\"add-group\" (click)=\"onClickCreateGroup()\">\n      +\n    </button>\n  </div>\n  <div id=\"chat-room\">\n    <div id=\"header\">\n      <p>\n        <span *ngIf=\"chatrooms[selected].isMember\">You</span>\n        <span *ngFor=\"let user of chatrooms[selected].users\" (click)=\"onClickPrivateMessage(user)\" class=\"clickable\">, {{user.name}}</span>\n      </p>\n    </div>\n    <div id=\"messages\">\n      <div [ngClass]=\"{'positive':positive, 'negative': !positive, 'active': alertMessage}\" class=\"alert\" ><span>{{alertMessage}}</span></div>\n      <div class=\"message-wrapper\" *ngFor=\"let msg of chatrooms[selected].messages\">\n        <div *ngIf=\"msg.senderId\" class=\"message-sender\">{{msg.senderName}}:</div>\n        <div [ngClass]=\"msg.senderId?'message':'message-personal'\" class=\"message-personal\">\n          <div class=\"message-text\">{{msg.message}}</div>\n          <div *ngIf=\"msg.media\">\n            <img *ngIf=\"msg.media.split(':')[1].split('/')[0] == 'image'\" [src]=\"msg.media\" width=\"500px\" alt=\"\">\n            <video *ngIf=\"msg.media.split(':')[1].split('/')[0] == 'video'\" [src]=\"msg.media\" width=\"500px\"></video>\n            <audio *ngIf=\"msg.media.split(':')[1].split('/')[0] == 'audio'\" [src]=\"msg.media\" width=\"500px\"></audio>\n          </div>\n          <div class=\"message-mood\">{{msg.mood}}</div>\n          <div class=\"message-timestamp\">{{msg.timeStampString}}</div>\n        </div>\n      </div>\n    </div>\n    <button *ngIf=\"!chatrooms[selected].isMember\" id=\"join-chat\" (click)=\"onClickJoinGroup()\">JOIN CHAT</button>\n    <form *ngIf=\"chatrooms[selected].isMember\" (ngSubmit)=\"onClickSend()\">\n      <input *ngIf=\"typeFile\" type=\"file\" single (change)=\"onFileSelect($event)\">\n      <input *ngIf=\"!typeFile\" name=\"message\" id=\"m\" autocomplete=\"off\" [(ngModel)]=\"message\"/>\n      <button class=\"button\">Send</button>\n      <button class=\"button\" (click)=\"switchMode($event)\">Modus</button>\n    </form>\n  </div>\n</div>\n"

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
    function Message(message, media, to, timeStamp, type, mood, senderId, senderName) {
        this.message = message;
        this.senderId = senderId;
        this.senderName = senderName;
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
        this.users.splice(this.users.findIndex(function (u) {
            if (u) {
                return u.equals(user);
            }
        }), 1);
    };
    Chatroom.prototype.findUserById = function (id) {
        var index = this.users.findIndex(function (u) { return u.id == id; });
        return this.users[index];
    };
    return Chatroom;
}());

var User = /** @class */ (function () {
    function User(name, id, image) {
        this.name = name;
        this.id = id;
        this.image = image;
    }
    User.prototype.equals = function (id) {
        return id == this.id;
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
        this.socketService._socket.on('user connected', function (user, id, image) {
            _this.chatrooms.global.pushUser(new User(user, id, image));
            _this.sendAlert('user ' + user + ' connected', true);
        });
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
            _this.chatrooms[msg.to].pushMessage(new Message(msg.message, msg.media, msg.to, new Date(msg.timeStamp), msg.type, msg.mood.mood, msg.senderId, msg.senderName));
        });
        this.socketService._socket.on('personal message', function (msg) {
            var message = new Message(msg.message, msg.file, msg.to, new Date(msg.timeStamp), msg.type, msg.mood.mood, msg.senderId, msg.senderName);
            _this.toneAnalyzer.moodify(msg.mood.mood);
            if (!_this.chatrooms[msg.senderId]) {
                _this.chatrooms[msg.senderId] = new Chatroom(msg.senderName, msg.senderId, 'personal', true);
                _this.chatrooms[msg.senderId].pushUser(_this.chatrooms['global'].findUserById(msg.senderId));
            }
            _this.chatrooms[msg.senderId].pushMessage(message);
        });
        this.socketService._socket.on('group created', function (name, userId) {
            _this.chatrooms[name] = new Chatroom(name, name, 'group', false);
            _this.chatrooms[name].pushUser(_this.chatrooms['global'].findUserById(userId));
        });
        this.socketService._socket.on('user joined', function (name, userId) {
            _this.chatrooms[name].pushUser(_this.chatrooms['global'].findUserById(userId));
        });
        this.socketService._socket.on('user disconnected', function (user, id) {
            _this.sendAlert('user ' + user + ' disconnected', false);
            for (var chatroom in _this.chatrooms) {
                _this.chatrooms[chatroom].popUser(id);
            }
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

module.exports = "<form *ngIf=\"login\" class=\"login\" (ngSubmit)=\"onClickLogin()\">\n  <input [ngClass]=\"required?'required':''\" name=\"username\" type=\"text\" placeholder=\"Username\" [(ngModel)]=\"username\">\n  <input [ngClass]=\"required?'required':''\" name=\"password\" type=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\">\n  <button class=\"button\">Login</button>\n</form>\n<form *ngIf=\"!login\" class=\"login\" (ngSubmit)=\"onClickRegister()\">\n  <div id=\"image-selector-wrapper\">\n    <div id=\"default-text\">Bild auswählen</div>\n    <img id=\"image-selector-image\" [src]=\"image\" alt=\"\">\n    <input id=\"image-selector-input\" type=\"file\" single (change)=\"onFileSelect($event)\" accept=\"image/png, image/jpeg\">\n  </div>\n  <div id=\"language-selector\">\n    <select name=\"lang\" id=\"lang\" [ngModel]=\"preferred_language\">\n      <option value=\"de\">Deutsch</option>\n      <option value=\"en\">English</option>\n    </select>\n  </div>\n  <input [ngClass]=\"required?'required':''\" name=\"username\" type=\"text\" placeholder=\"Username\" [(ngModel)]=\"username\">\n  <input [ngClass]=\"required?'required':''\" name=\"password\" type=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\">\n  <input [ngClass]=\"required?'required':''\" name=\"repeat_password\" type=\"password\" placeholder=\"Repeat Password\" [(ngModel)]=\"repeat_password\">\n  <button class=\"button\">Register</button>\n</form>\n<div *ngIf=\"login\" class=\"registered_wrapper\">\n  <label for=\"not_registered\">Not registered yet?</label>\n  <button class=\"button\" id=\"not_registered\" (click)=\"login=false\">Register now!</button>\n</div>\n<div *ngIf=\"!login\" class=\"registered_wrapper\">\n  <label for=\"registered\">Already registered?</label>\n  <button class=\"button\" id=\"registered\" (click)=\"login=true\">Login now!</button>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#image-selector-wrapper {\n  cursor: pointer !important;\n  position: relative;\n  margin: 0;\n  margin-bottom: 20px !important;\n  float: left;\n  overflow: hidden;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background-color: rgba(69, 105, 144, 0.5); }\n\n#default-text {\n  postion: absolute;\n  margin-top: 50%;\n  margin-left: 50%;\n  width: auto;\n  height: auto;\n  text-align: center;\n  font-size: small;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n#image-selector-image {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n\n#image-selector-input {\n  position: absolute;\n  top: -40px;\n  left: 0;\n  height: calc(100% + 40px);\n  width: 100%; }\n\n#language-selector {\n  position: relative;\n  float: left;\n  margin-left: 50px;\n  margin-top: 35px; }\n\n#lang {\n  min-width: 200px;\n  border: 1px solid #456990;\n  height: 30px;\n  border-radius: 15px; }\n\n.login {\n  overflow: hidden;\n  background-color: white;\n  padding: 30px;\n  border-radius: 10px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 400px;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  transition: box-shadow 300ms, -webkit-transform 300ms;\n  transition: transform 300ms, box-shadow 300ms;\n  transition: transform 300ms, box-shadow 300ms, -webkit-transform 300ms;\n  box-shadow: 5px 10px 10px rgba(2, 128, 144, 0.2); }\n\n.login::before, .login::after {\n    content: '';\n    position: absolute;\n    width: 600px;\n    height: 600px;\n    border-top-left-radius: 40%;\n    border-top-right-radius: 45%;\n    border-bottom-left-radius: 35%;\n    border-bottom-right-radius: 40%;\n    z-index: -1; }\n\n.login::before {\n    background-color: rgba(69, 105, 144, 0.15);\n    -webkit-animation: wawes 6s infinite linear;\n            animation: wawes 6s infinite linear; }\n\n.login::after {\n    top: -50px;\n    background-color: rgba(2, 128, 144, 0.2);\n    -webkit-animation: wawes 7s infinite;\n            animation: wawes 7s infinite; }\n\n.login > input {\n    font-family: \"Asap\", sans-serif;\n    display: block;\n    border-radius: 5px;\n    font-size: 16px;\n    background: white;\n    width: 100%;\n    border: 0;\n    padding: 10px 10px;\n    margin: 15px -10px; }\n\n.login .required {\n    border: 1px solid #c00 !important; }\n\n.button {\n  font-family: \"Asap\", sans-serif;\n  cursor: pointer;\n  color: #fff;\n  font-size: 16px;\n  text-transform: uppercase;\n  width: auto;\n  border: 0;\n  padding: 10px;\n  border-radius: 5px;\n  background-color: #f45b69;\n  transition: background-color 300ms; }\n\n.button:hover {\n    background-color: #f24353; }\n\n@-webkit-keyframes wawes {\n  from {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes wawes {\n  from {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.registered_wrapper {\n  background: #fff;\n  border-radius: 5px;\n  padding: 10px;\n  position: absolute;\n  top: 70%;\n  left: 50%;\n  width: 400px;\n  -webkit-transform: translate(-50%, 0);\n          transform: translate(-50%, 0); }\n\n.registered_wrapper > label {\n    margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxFcmljUHJ5dHVsbGFcXERlc2t0b3BcXFVuaVxcQ2xvdWQgQ29tcHV0aW5nXFxDbG91ZENvbXB1dGluZ1xcY2xvdWQtY2hhdC9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0VBQ0UsMEJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsOEJBQTZCO0VBQzdCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIseUNBakIrQixFQUFBOztBQW9CakM7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsd0NBQWdDO1VBQWhDLGdDQUFnQyxFQUFBOztBQUdsQztFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2I7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLE9BQU87RUFDUCx5QkFBeUI7RUFDekIsV0FBVyxFQUFBOztBQUdiO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQXhEK0I7RUF5RC9CLFlBQVk7RUFDWixtQkFBbUIsRUFBQTs7QUFJckI7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsWUFBWTtFQUNaLHdDQUFnQztVQUFoQyxnQ0FBZ0M7RUFDaEMscURBQTZDO0VBQTdDLDZDQUE2QztFQUE3QyxzRUFBNkM7RUFDN0MsZ0RBMUVpQyxFQUFBOztBQStEbkM7SUFjSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1Qiw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLFdBQVcsRUFBQTs7QUF0QmY7SUEyQkksMENBekY2QjtJQTBGN0IsMkNBQW1DO1lBQW5DLG1DQUFtQyxFQUFBOztBQTVCdkM7SUFnQ0ksVUFBVTtJQUNWLHdDQWhHK0I7SUFpRy9CLG9DQUE0QjtZQUE1Qiw0QkFBNEIsRUFBQTs7QUFsQ2hDO0lBc0NJLCtCQWhHeUI7SUFpR3pCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsU0FBUztJQUNULGtCQUFrQjtJQUNsQixrQkFBa0IsRUFBQTs7QUE5Q3RCO0lBaURJLGlDQUFpQyxFQUFBOztBQUtyQztFQUNFLCtCQWpIMkI7RUFrSDNCLGVBQWU7RUFDZixXQUFXO0VBQ1gsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsU0FBUztFQUNULGFBQWE7RUFDYixrQkFBa0I7RUFDbEIseUJBN0g2QjtFQThIN0Isa0NBQWtDLEVBQUE7O0FBWHBDO0lBY0kseUJBQXNDLEVBQUE7O0FBSTFDO0VBQ0U7SUFBTyw0QkFBb0I7WUFBcEIsb0JBQW9CLEVBQUE7RUFDM0I7SUFBSyxpQ0FBeUI7WUFBekIseUJBQXlCLEVBQUEsRUFBQTs7QUFGaEM7RUFDRTtJQUFPLDRCQUFvQjtZQUFwQixvQkFBb0IsRUFBQTtFQUMzQjtJQUFLLGlDQUF5QjtZQUF6Qix5QkFBeUIsRUFBQSxFQUFBOztBQUdoQztFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixRQUFPO0VBQ1AsU0FBUztFQUNULFlBQVk7RUFDWixxQ0FBNkI7VUFBN0IsNkJBQTZCLEVBQUE7O0FBUi9CO0lBV0ksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvbG9yc1xyXG4kZ3JlZW5TZWF3ZWVkOiByZ2JhKDIsIDEyOCwgMTQ0LCAxKTtcclxuJGJsdWVRdWVlbjogcmdiYSg2OSwgMTA1LCAxNDQsIDEpO1xyXG4kcmVkRmlyZTogcmdiYSgyNDQsIDkxLCAxMDUsIDEpO1xyXG5cclxuLy8gRm9udHNcclxuJGZvbnRBc2FwOiAnQXNhcCcsIHNhbnMtc2VyaWY7XHJcblxyXG5cclxuI2ltYWdlLXNlbGVjdG9yLXdyYXBwZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlciFpbXBvcnRhbnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4IWltcG9ydGFudDtcclxuICBmbG9hdDogbGVmdDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRibHVlUXVlZW4sIDAuNSk7XHJcbn1cclxuXHJcbiNkZWZhdWx0LXRleHQge1xyXG4gIHBvc3Rpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogNTAlO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuI2ltYWdlLXNlbGVjdG9yLWltYWdlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jaW1hZ2Utc2VsZWN0b3ItaW5wdXQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC00MHB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgKyA0MHB4KTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI2xhbmd1YWdlLXNlbGVjdG9yIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgbWFyZ2luLXRvcDogMzVweDtcclxufVxyXG5cclxuI2xhbmcge1xyXG4gIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgkYmx1ZVF1ZWVuLCAxKTtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuXHJcbi5sb2dpbiB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zLCBib3gtc2hhZG93IDMwMG1zO1xyXG4gIGJveC1zaGFkb3c6IDVweCAxMHB4IDEwcHggcmdiYSgkZ3JlZW5TZWF3ZWVkLCAwLjIpO1xyXG5cclxuICAmOjpiZWZvcmUsICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDQwJTtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0NSU7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzNSU7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNDAlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgfVxyXG5cclxuICAmOjpiZWZvcmUge1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGJsdWVRdWVlbiwgMC4xNSk7XHJcbiAgICBhbmltYXRpb246IHdhd2VzIDZzIGluZmluaXRlIGxpbmVhcjtcclxuICB9XHJcblxyXG4gICY6OmFmdGVyIHtcclxuICAgIHRvcDogLTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRncmVlblNlYXdlZWQsIDAuMik7XHJcbiAgICBhbmltYXRpb246IHdhd2VzIDdzIGluZmluaXRlO1xyXG4gIH1cclxuXHJcbiAgPiBpbnB1dCB7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnRBc2FwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgbWFyZ2luOiAxNXB4IC0xMHB4O1xyXG4gIH1cclxuICAucmVxdWlyZWQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2MwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udEFzYXA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGJvcmRlcjogMDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkRmlyZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkcmVkRmlyZSwgNSUpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyB3YXdlcyB7XHJcbiAgZnJvbSB7IHRyYW5zZm9ybTogcm90YXRlKDApOyB9XHJcbiAgdG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuXHJcbi5yZWdpc3RlcmVkX3dyYXBwZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDo3MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcclxuXHJcbiAgPiBsYWJlbCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"

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
        this.password = null;
        this.repeat_password = null;
        this.preferred_language = 'de';
        this.image = null;
        this.required = false;
        this.login = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onFileSelect = function (event) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            _this.image = reader.result;
        }, false);
        if (event.target.files[0]) {
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    LoginComponent.prototype.onClickLogin = function () {
        if (this.username && this.username.length > 1 && this.username.length < 80) {
            this.socketService.login(this.username, this.password);
        }
        this.required = true;
    };
    LoginComponent.prototype.onClickRegister = function () {
        if (this.username && this.username.length > 1 && this.username.length < 80 && this.password === this.repeat_password) {
            this.socketService.register(this.username, this.password, this.image, this.preferred_language);
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var SocketService = /** @class */ (function () {
    function SocketService(router, http) {
        this.router = router;
        this.http = http;
        //private proxy_url: string = 'http://localhost:3000';
        this.proxy_url = '';
    }
    SocketService.prototype.isConnected = function () {
        return this.connected;
    };
    SocketService.prototype.login = function (username, password) {
        var _this = this;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(this.proxy_url, { query: { username: username, password: password } });
        this.socket.connect();
        this.connected = true;
        this.router.navigate(["/chat"]);
        this._socket.on('disconnect', function () {
            _this.connected = false;
            _this.router.navigateByUrl('/');
        });
    };
    SocketService.prototype.register = function (username, password, image, preferred_language) {
        var _this = this;
        this.http.post(this.proxy_url + '/user', { user: username, password: password, image: image, preferred_language: preferred_language }).subscribe(function (res) {
            _this.login(res.id, password);
        });
        this.connected = true;
        // this.router.navigate(["/chat"]);
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
    SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
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