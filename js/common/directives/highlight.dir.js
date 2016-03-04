System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var HighlightDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HighlightDirective = (function () {
                function HighlightDirective(elementRef) {
                    this.elementRef = elementRef;
                    this._activeColor = "red";
                    this.originalBackground = elementRef.nativeElement.style.backgroundColor;
                }
                Object.defineProperty(HighlightDirective.prototype, "activeColor", {
                    set: function (color) {
                        this._activeColor = color || this._activeColor;
                    },
                    enumerable: true,
                    configurable: true
                });
                HighlightDirective.prototype.onMouseEnter = function () {
                    this.setElementColor(this.hoverColor);
                };
                HighlightDirective.prototype.onMouseLeave = function () {
                    this.setElementColor(this.originalBackground);
                };
                HighlightDirective.prototype.onMouseDown = function () {
                    this.setElementColor(this._activeColor);
                };
                HighlightDirective.prototype.onMouseUp = function () {
                    this.setElementColor(this.originalBackground);
                };
                HighlightDirective.prototype.setElementColor = function (color) {
                    this.elementRef.nativeElement.style.backgroundColor = color;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], HighlightDirective.prototype, "hoverColor", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String), 
                    __metadata('design:paramtypes', [String])
                ], HighlightDirective.prototype, "activeColor", null);
                HighlightDirective = __decorate([
                    core_1.Directive({
                        selector: '[highlight]',
                        host: {
                            '(mouseenter)': 'onMouseEnter()',
                            '(mouseleave)': 'onMouseLeave()',
                            '(mousedown)': 'onMouseDown()',
                            '(mouseup)': 'onMouseUp()'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], HighlightDirective);
                return HighlightDirective;
            }());
            exports_1("HighlightDirective", HighlightDirective);
        }
    }
});
//# sourceMappingURL=highlight.dir.js.map