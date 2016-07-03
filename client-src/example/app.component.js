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
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var triangle_1 = require('triangle');
var AppComponent = (function () {
    function AppComponent(formBuilder) {
        var _this = this;
        this.formBuilder = formBuilder;
        // Custom validator based on validator function in triangle lib
        function validateTriangleSide(c) {
            if (!c.value)
                return;
            return !triangle_1.validation.validTriangleSide(+c.value) ? null : {
                validateTriangleSide: triangle_1.errors.numsFitForTriangle
            };
        }
        this.triForm = this.formBuilder.group({
            sideA: ['', [forms_1.Validators.required, validateTriangleSide]],
            sideB: ['', [forms_1.Validators.required, validateTriangleSide]],
            sideC: ['', [forms_1.Validators.required, validateTriangleSide]]
        });
        this.triForm.valueChanges.subscribe(function (res) {
            console.log(res);
            console.log(_this.triForm);
            if (_this.triForm.valid) {
                try {
                    _this.triangleResult = triangle_1.typeOfTriangle(+_this.triForm.controls.sideA.value, +_this.triForm.controls.sideB.value, +_this.triForm.controls.sideC.value);
                }
                catch (err) {
                    _this.triangleResult = err.message;
                }
            }
            else {
                _this.triangleResult = '';
            }
        });
    }
    AppComponent.prototype.getErrorMessage = function (side) {
        var errorType = Object.keys(side.errors)[0];
        if (errorType === 'required') {
            return 'Required field';
        }
        else {
            return side.errors[errorType];
        }
    };
    AppComponent.prototype.logit = function (item) {
        console.log(item);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES],
            template: "\n    <div class=\"container\">\n      <h2>Triangle UI</h2>\n      <form [formGroup]=\"triForm\">\n        <div class=\"row\">\n          <div class=\"col-xs-4\">\n            <label>Side A</label>\n            <input class=\"form-control\" formControlName=\"sideA\">\n            <div class=\"alert alert-danger\"\n              *ngIf=\"!triForm.controls.sideA.pristine && triForm.controls.sideA.errors\">\n              {{getErrorMessage(triForm.controls.sideA)}}\n            </div>\n          </div>\n          <div class=\"col-xs-4\">\n            <label>Side B</label>\n            <input class=\"form-control\" #sideB formControlName=\"sideB\">\n            <div class=\"alert alert-danger\"\n              *ngIf=\"!triForm.controls.sideB.pristine && triForm.controls.sideB.errors\">\n              {{getErrorMessage(triForm.controls.sideB)}}\n            </div>\n          </div>\n          <div class=\"col-xs-4\">\n            <label>Side C</label>\n            <input class=\"form-control\" #sideC formControlName=\"sideC\">\n            <div class=\"alert alert-danger\"\n              *ngIf=\"!triForm.controls.sideC.pristine && triForm.controls.sideC.errors\">\n              {{getErrorMessage(triForm.controls.sideC)}}\n            </div>\n          </div>\n          <div class=\"col-xs-12\">Result: {{triangleResult | json}}</div>\n        </div>\n      </form>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map