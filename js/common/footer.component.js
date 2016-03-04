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
    var FooterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FooterComponent = (function () {
                function FooterComponent() {
                    this.year = (new Date()).getFullYear();
                }
                FooterComponent = __decorate([
                    core_1.Component({
                        selector: 'footer-component',
                        template: "\n        <footer class=\"footer\">\n          <div class=\"container\">\n            <a class=\"text-muted\" href=\"/\">Alejandro Rangel, {{ year }}</a>\n            <a class=\"text-muted\" href=\"https://twitter.com/arangelp\" target=\"_blank\"><i class=\"fa fa-twitter\"></i> @arangelp</a>\n            <a class=\"text-muted\" href=\"https://www.linkedin.com/in/arangelp\" target=\"_blank\"><i class=\"fa fa-linkedin\"></i> Linkedin</a>\n            <a class=\"text-muted\" href=\"http://www.arangelp.com/\" target=\"_blank\"><i class=\"fa fa-wordpress\"></i> Website</a>\n          </div>\n        </footer>\n    ",
                        styles: ["\n        footer {\n            position: absolute;\n            bottom : 0;\n            width : 100%;\n            height : 60px;\n            background-color: whitesmoke;\n        }\n\n        .container {\n            height : 60px;\n        }\n\n        a {\n            height : 60px;\n            line-height : 60px;\n            margin-right : 5em;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], FooterComponent);
                return FooterComponent;
            }());
            exports_1("FooterComponent", FooterComponent);
        }
    }
});
//# sourceMappingURL=footer.component.js.map