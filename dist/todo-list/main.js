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
/* harmony import */ var _list_manager_list_manager_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-manager/list-manager.component */ "./src/app/list-manager/list-manager.component.ts");



class AppComponent {
    constructor() {
        this.title = 'todo-list';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 1, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-list-manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, directives: [_list_manager_list_manager_component__WEBPACK_IMPORTED_MODULE_1__["ListManagerComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 1em auto;\n  background-color: #fff;\n  box-shadow: rgba(0, 0, 0, 0.2) 0 2px 10px;\n  padding: 1rem;\n}\n.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1em;\n  color: #39B;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUNBQUE7RUFDQSxhQUFBO0FBQ0Y7QUFBRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiAxZW0gYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogcmdiYSgwLDAsMCwuMikgMCAycHggMTBweDtcbiAgcGFkZGluZzogMXJlbTtcbiAgaDEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgY29sb3I6ICMzOUI7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                // template: `<h1>{{title}}</h1>`,
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _input_button_input_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input-button/input-button.component */ "./src/app/input-button/input-button.component.ts");
/* harmony import */ var _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-item/todo-item.component */ "./src/app/todo-item/todo-item.component.ts");
/* harmony import */ var _list_manager_list_manager_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-manager/list-manager.component */ "./src/app/list-manager/list-manager.component.ts");
/* harmony import */ var _services_todo_list_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/todo-list.service */ "./src/app/services/todo-list.service.ts");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_todo_list_service__WEBPACK_IMPORTED_MODULE_6__["TodoListService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _input_button_input_button_component__WEBPACK_IMPORTED_MODULE_3__["InputButtonComponent"],
        _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_4__["TodoItemComponent"],
        _list_manager_list_manager_component__WEBPACK_IMPORTED_MODULE_5__["ListManagerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _input_button_input_button_component__WEBPACK_IMPORTED_MODULE_3__["InputButtonComponent"],
                    _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_4__["TodoItemComponent"],
                    _list_manager_list_manager_component__WEBPACK_IMPORTED_MODULE_5__["ListManagerComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                providers: [_services_todo_list_service__WEBPACK_IMPORTED_MODULE_6__["TodoListService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/input-button/input-button.component.ts":
/*!********************************************************!*\
  !*** ./src/app/input-button/input-button.component.ts ***!
  \********************************************************/
/*! exports provided: InputButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputButtonComponent", function() { return InputButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class InputButtonComponent {
    constructor() {
        this.todoTitle = "";
        this.isError = true;
        this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    changeTodoTitle(newTitle) {
        this.todoTitle = newTitle;
        if (newTitle) {
            this.isError = false;
        }
        else {
            this.isError = true;
        }
    }
    submitTodoItem(newTitle) {
        if (newTitle) {
            this.todoTitle = '';
            this.submit.emit(newTitle);
            this.isError = false;
        }
        else {
            this.isError = true;
        }
    }
}
InputButtonComponent.ɵfac = function InputButtonComponent_Factory(t) { return new (t || InputButtonComponent)(); };
InputButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputButtonComponent, selectors: [["app-input-button"]], outputs: { submit: "submit" }, decls: 4, vars: 2, consts: [["type", "text", "placeholder", "New ToDo", 1, "todo-input", 3, "value", "keyup", "keyup.enter"], ["inputRef", ""], [1, "btn", 3, "disabled", "click"]], template: function InputButtonComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function InputButtonComponent_Template_input_keyup_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.changeTodoTitle(_r0.value); })("keyup.enter", function InputButtonComponent_Template_input_keyup_enter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.submitTodoItem(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputButtonComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.submitTodoItem(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " ADD\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.todoTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isError);
    } }, styles: [".btn[_ngcontent-%COMP%] {\n  background-color: #0e9938;\n  color: #ffffff;\n  border: none;\n  padding: 5px 15px;\n  border-radius: 5px;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: 300ms ease;\n  margin-left: 4px;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: #0ac041;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  background: #5f886b;\n  cursor: default;\n}\n.todo-input[_ngcontent-%COMP%] {\n  border: 1px solid #9eaaa1;\n  border-radius: 5px;\n  padding: 4px 15px;\n  font-size: 1rem;\n}\n.todo-input[_ngcontent-%COMP%]:focus {\n  border: 1px solid #246e36;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5wdXQtYnV0dG9uL2lucHV0LWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFBSTtFQUNJLHlCQUFBO0FBRVI7QUFBSTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBQUVSO0FBQ0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBRUo7QUFBQTtFQUNJLHlCQUFBO0FBR0oiLCJmaWxlIjoic3JjL2FwcC9pbnB1dC1idXR0b24vaW5wdXQtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBlOTkzODtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXI6bm9uZTtcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAzMDBtcyBlYXNlO1xuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwYWMwNDE7XG4gICAgfVxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNWY4ODZiO1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgfVxufVxuLnRvZG8taW5wdXQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5ZWFhYTE7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDRweCAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi50b2RvLWlucHV0OmZvY3VzIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjQ2ZTM2O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-input-button',
                templateUrl: './input-button.component.html',
                styleUrls: ['./input-button.component.scss']
            }]
    }], function () { return []; }, { submit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/list-manager/list-manager.component.ts":
/*!********************************************************!*\
  !*** ./src/app/list-manager/list-manager.component.ts ***!
  \********************************************************/
/*! exports provided: ListManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListManagerComponent", function() { return ListManagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_todo_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/todo-list.service */ "./src/app/services/todo-list.service.ts");
/* harmony import */ var _input_button_input_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input-button/input-button.component */ "./src/app/input-button/input-button.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../todo-item/todo-item.component */ "./src/app/todo-item/todo-item.component.ts");






function ListManagerComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-todo-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("remove", function ListManagerComponent_li_2_Template_app_todo_item_remove_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.removeTodoItem($event); })("update", function ListManagerComponent_li_2_Template_app_todo_item_update_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.updateTodoItem($event.item, $event.changedItem); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const listItem_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", listItem_r1)("index", i_r2);
} }
class ListManagerComponent {
    constructor(todoListService) {
        this.todoListService = todoListService;
    }
    ngOnInit() {
        this.todoList = this.todoListService.getTodoList();
    }
    addTodoItem(title) {
        //this.todoList.push({ title })
        this.todoListService.addItem({ title });
    }
    removeTodoItem(item) {
        this.todoListService.deleteItem(item);
    }
    updateTodoItem(item, changedItem) {
        this.todoListService.updateItem(item, changedItem);
    }
}
ListManagerComponent.ɵfac = function ListManagerComponent_Factory(t) { return new (t || ListManagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_todo_list_service__WEBPACK_IMPORTED_MODULE_1__["TodoListService"])); };
ListManagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListManagerComponent, selectors: [["app-list-manager"]], decls: 3, vars: 1, consts: [[3, "submit"], [1, "todo-list"], [4, "ngFor", "ngForOf"], [3, "item", "index", "remove", "update"]], template: function ListManagerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-input-button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ListManagerComponent_Template_app_input_button_submit_0_listener($event) { return ctx.addTodoItem($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListManagerComponent_li_2_Template, 2, 2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.todoList);
    } }, directives: [_input_button_input_button_component__WEBPACK_IMPORTED_MODULE_2__["InputButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_4__["TodoItemComponent"]], styles: [".todo-list[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n}\n.todo-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin-bottom: 4px;\n  border-radius: 3px;\n  border: 1px solid #ddd;\n  align-items: center;\n  line-height: 1em;\n  transition: 200ms ease;\n}\n.todo-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #ece8d9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC1tYW5hZ2VyL2xpc3QtbWFuYWdlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSjtBQUFJO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUVSO0FBRFE7RUFDSSx5QkFBQTtBQUdaIiwiZmlsZSI6InNyYy9hcHAvbGlzdC1tYW5hZ2VyL2xpc3QtbWFuYWdlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b2RvLWxpc3Qge1xuICAgIG1hcmdpbjogMXJlbSAwO1xuICAgIGxpIHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2U7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZThkOTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListManagerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-manager',
                templateUrl: './list-manager.component.html',
                styleUrls: ['./list-manager.component.scss']
            }]
    }], function () { return [{ type: _services_todo_list_service__WEBPACK_IMPORTED_MODULE_1__["TodoListService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/storage.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StorageService {
    constructor() { }
    getData(dataKey) {
        return JSON.parse(localStorage.getItem(dataKey));
    }
    setData(dataKey, data) {
        localStorage.setItem(dataKey, JSON.stringify(data));
    }
}
StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(); };
StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StorageService, factory: StorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/todo-list.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/todo-list.service.ts ***!
  \***********************************************/
/*! exports provided: TodoListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListService", function() { return TodoListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ "./src/app/services/storage.service.ts");



const todoListStorageKey = 'todo_list';
const defaultList = [
    { title: 'Install NodeJS/NPM' },
    { title: 'Install Angular CLI' },
    { title: 'Create a New App' },
    { title: 'Serve your App' },
    { title: 'Code' },
    { title: 'More Code' },
    { title: 'Fix Bugs' },
    { title: 'Enjoy' },
];
class TodoListService {
    constructor(storageService) {
        this.storageService = storageService;
        this.todoList = storageService.getData(todoListStorageKey) || defaultList;
    }
    getTodoList() {
        return this.todoList;
    }
    saveList() {
        this.storageService.setData(todoListStorageKey, this.todoList);
    }
    addItem(item) {
        this.todoList.push(item);
        this.saveList();
    }
    updateItem(item, changedItem) {
        const index = this.todoList.indexOf(item);
        this.todoList[index] = Object.assign(Object.assign({}, item), changedItem);
        this.saveList();
    }
    deleteItem(item) {
        const index = this.todoList.indexOf(item);
        this.todoList.splice(index, 1);
        this.saveList();
    }
}
TodoListService.ɵfac = function TodoListService_Factory(t) { return new (t || TodoListService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"])); };
TodoListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TodoListService, factory: TodoListService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoListService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/todo-item/todo-item.component.ts":
/*!**************************************************!*\
  !*** ./src/app/todo-item/todo-item.component.ts ***!
  \**************************************************/
/*! exports provided: TodoItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemComponent", function() { return TodoItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0) { return { "todo-item-completed": a0 }; };
class TodoItemComponent {
    constructor() {
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    removeItem() {
        this.remove.emit(this.item);
    }
    toggleCompleted() {
        this.update.emit({
            item: this.item,
            changedItem: { completed: !this.item.completed }
        });
    }
}
TodoItemComponent.ɵfac = function TodoItemComponent_Factory(t) { return new (t || TodoItemComponent)(); };
TodoItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoItemComponent, selectors: [["app-todo-item"]], inputs: { item: "item", index: "index" }, outputs: { remove: "remove", update: "update" }, decls: 7, vars: 7, consts: [[1, "todo-item", 3, "ngClass"], ["type", "checkbox", 1, "todo-check", 3, "id", "checked"], [3, "for", "click"], [1, "btn-remove", 3, "click"]], template: function TodoItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoItemComponent_Template_label_click_3_listener() { return ctx.toggleCompleted(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoItemComponent_Template_button_click_5_listener() { return ctx.removeItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u00D7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.item.completed));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "check-", ctx.index, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.item.completed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "check-", ctx.index, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.item.title, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".todo-item[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n}\n.todo-item-completed[_ngcontent-%COMP%] {\n  color: #124f88;\n  font-style: italic;\n}\n.btn-remove[_ngcontent-%COMP%] {\n  background-color: #b82113;\n  color: #ffffff;\n  border: none;\n  padding: 5px 15px;\n  border-radius: 5px;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: 300ms ease;\n  margin-left: 4px;\n}\n.btn-remove[_ngcontent-%COMP%]:hover {\n  background-color: #e74234;\n}\n.todo-check[_ngcontent-%COMP%] {\n  display: none;\n}\n.todo-check[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border-radius: 10px;\n  transform: translateY(4px);\n  margin-right: 4px;\n  background-color: #c5c9d1;\n  position: relative;\n}\n.todo-check[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]::after {\n  display: block;\n  content: \"\";\n  width: 10px;\n  height: 10px;\n  border-radius: 5px;\n  background-color: #fff;\n  transition: 200ms ease;\n  transform: translate(5px, 5px);\n}\n.todo-check[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]::after {\n  background-color: #2c4f7c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby1pdGVtL3RvZG8taXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQUk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUFFUjtBQUNBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFFSjtBQURJO0VBQ0kseUJBQUE7QUFHUjtBQUFBO0VBQ0ksYUFBQTtBQUdKO0FBRkk7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUlSO0FBSFE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFLWjtBQURRO0VBQ0kseUJBQUE7QUFHWiIsImZpbGUiOiJzcmMvYXBwL3RvZG8taXRlbS90b2RvLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9kby1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICYtY29tcGxldGVkIHtcbiAgICAgICAgY29sb3I6ICMxMjRmODg7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICB9XG59XG4uYnRuLXJlbW92ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I4MjExMztcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXI6bm9uZTtcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAzMDBtcyBlYXNlO1xuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNzQyMzQ7XG4gICAgfVxufVxuLnRvZG8tY2hlY2sge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgJitsYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzVjOWQxO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNXB4LCA1cHgpO1xuICAgICAgICB9XG4gICAgfVxuICAgICY6Y2hlY2tlZCtsYWJlbCB7XG4gICAgICAgICY6OmFmdGVye1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJjNGY3YztcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todo-item',
                templateUrl: './todo-item.component.html',
                styleUrls: ['./todo-item.component.scss']
            }]
    }], function () { return []; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], remove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], update: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


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

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/avetis/step/web192d/todo-list/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map