"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HelloWorldComponent = (function () {
    function HelloWorldComponent() {
        this.onVoted = new core_1.EventEmitter();
        this.voted = false;
        this.ujjwal = "ujjwal";
    }
    HelloWorldComponent.prototype.vote = function (agreed) {
        this.onVoted.emit(agreed);
        this.voted = agreed;
    };
    return HelloWorldComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], HelloWorldComponent.prototype, "name", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], HelloWorldComponent.prototype, "onVoted", void 0);
HelloWorldComponent = __decorate([
    core_1.Component({
        selector: 'hello',
        template: "\n    <h4>{{voted}}</h4>\n    <button (click)=\"vote(true)\" [name]=\"ujjwal\" [disabled]=\"voted\">Agree</button>\n    <button (click)=\"vote(false)\" [disabled]=\"voted\">Disagree</button>\n  "
    })
], HelloWorldComponent);
exports.HelloWorldComponent = HelloWorldComponent;
//# sourceMappingURL=helloworld.component.js.map