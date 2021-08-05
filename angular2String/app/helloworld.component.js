"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HelloWorldComponent = (function () {
    function HelloWorldComponent() {
    }
    HelloWorldComponent.prototype.display = function () {
        var str = new String("whatsmysuggestion");
        console.log("str.constructor is:" + str.length);
        console.log("str.constructor is:" + str.toUpperCase());
        console.log("str.constructor is:" + str.toLowerCase());
        console.log("str.constructor is:" + str.concat("Hi"));
        console.log("str.constructor is:" + str.charCodeAt(1));
        console.log("str.constructor is:" + str.indexOf("s"));
        console.log("str.constructor is:" + str.lastIndexOf("s"));
        console.log("str.constructor is:" + str.substring(1, 4));
        console.log("str.constructor is:" + str.substr(1, 4));
    };
    return HelloWorldComponent;
}());
HelloWorldComponent = __decorate([
    core_1.Component({
        selector: 'hello',
        template: " <button (click)=\"display()\">Click Me</button>"
    })
], HelloWorldComponent);
exports.HelloWorldComponent = HelloWorldComponent;
//# sourceMappingURL=helloworld.component.js.map