(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@daffodil/design')) :
    typeof define === 'function' && define.amd ? define('@daffodil/design/radio/examples', ['exports', '@angular/core', '@angular/forms', '@daffodil/design'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.design = global.daffodil.design || {}, global.daffodil.design.radio = global.daffodil.design.radio || {}, global.daffodil.design.radio.examples = {}), global.ng.core, global.ng.forms, global.daffodil.design));
}(this, function (exports, core, forms, design) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BasicRadioComponent = /** @class */ (function () {
        function BasicRadioComponent() {
            this.radioGroup = new forms.FormGroup({
                race: new forms.FormControl('Zerg')
            });
        }
        /**
         * @return {?}
         */
        BasicRadioComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        BasicRadioComponent.decorators = [
            { type: core.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'basic-radio',
                        template: "<h2>Basic Radio</h2>\n<daff-radio-set [formGroup]=\"radioGroup\" name=\"race\">\n  <daff-radio formControlName=\"race\" value=\"Terran\">Terran</daff-radio>\n  <daff-radio formControlName=\"race\" value=\"Protoss\">Protoss</daff-radio>\n  <daff-radio formControlName=\"race\" value=\"Zerg\">Zerg</daff-radio>\n</daff-radio-set>\n<div>\n  The best race to play as is: {{this.radioGroup.get('race').value}}\n</div>"
                    }] }
        ];
        /** @nocollapse */
        BasicRadioComponent.ctorParameters = function () { return []; };
        return BasicRadioComponent;
    }());
    if (false) {
        /** @type {?} */
        BasicRadioComponent.prototype.radioGroup;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BasicRadioModule = /** @class */ (function () {
        function BasicRadioModule() {
        }
        BasicRadioModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            BasicRadioComponent,
                        ],
                        exports: [
                            BasicRadioComponent
                        ],
                        imports: [
                            design.DaffRadioModule,
                            forms.ReactiveFormsModule
                        ],
                        providers: []
                    },] }
        ];
        return BasicRadioModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var RADIO_EXAMPLES = [
        BasicRadioComponent
    ];
    /** @type {?} */
    var RADIO_EXAMPLES_MODULES = [
        BasicRadioModule
    ];

    exports.RADIO_EXAMPLES = RADIO_EXAMPLES;
    exports.RADIO_EXAMPLES_MODULES = RADIO_EXAMPLES_MODULES;
    exports.ɵa = BasicRadioComponent;
    exports.ɵb = BasicRadioModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-design-radio-examples.umd.js.map
