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
        this.appTitle = 'Welcome';
        this.appList = [{
                "ID": "1",
                "url": 'app/img/a.png'
            },
            {
                "ID": "2",
                "url": 'app/img/g.png'
            }];
    }
    return HelloWorldComponent;
}());
HelloWorldComponent = __decorate([
    core_1.Component({
        selector: 'hello',
        templateUrl: 'app/display.html'
    })
], HelloWorldComponent);
exports.HelloWorldComponent = HelloWorldComponent;
//# sourceMappingURL=helloworld.component.js.map