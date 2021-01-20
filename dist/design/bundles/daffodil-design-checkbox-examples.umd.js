(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@daffodil/design')) :
    typeof define === 'function' && define.amd ? define('@daffodil/design/checkbox/examples', ['exports', '@angular/core', '@angular/forms', '@daffodil/design'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.design = global.daffodil.design || {}, global.daffodil.design.checkbox = global.daffodil.design.checkbox || {}, global.daffodil.design.checkbox.examples = {}), global.ng.core, global.ng.forms, global.daffodil.design));
}(this, function (exports, core, forms, design) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BasicCheckboxComponent = /** @class */ (function () {
        function BasicCheckboxComponent() {
            this.checkboxExample = new forms.FormControl();
        }
        /**
         * @return {?}
         */
        BasicCheckboxComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.checkboxExample.setValue(true);
        };
        /**
         * @return {?}
         */
        BasicCheckboxComponent.prototype.setFalse = /**
         * @return {?}
         */
        function () {
            this.checkboxExample.setValue(false);
        };
        /**
         * @return {?}
         */
        BasicCheckboxComponent.prototype.setTrue = /**
         * @return {?}
         */
        function () {
            this.checkboxExample.setValue(true);
        };
        BasicCheckboxComponent.decorators = [
            { type: core.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'basic-checkbox',
                        template: "<daff-checkbox [formControl]=\"checkboxExample\" value=\"checkboxExample\">Checkbox</daff-checkbox>\n<div>\n  {{checkboxExample.value}}\n</div>\n<button daff-button color=\"primary\" (click)=\"setFalse()\">Set to false</button>\n<button daff-button (click)=\"setTrue()\">Set to true</button>"
                    }] }
        ];
        return BasicCheckboxComponent;
    }());
    if (false) {
        /** @type {?} */
        BasicCheckboxComponent.prototype.checkboxExample;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CheckboxSetComponent = /** @class */ (function () {
        function CheckboxSetComponent() {
            this.checkboxArray = new forms.FormArray([new forms.FormControl(), new forms.FormControl(), new forms.FormControl()]);
            this.selectedValues = [];
        }
        /**
         * @return {?}
         */
        CheckboxSetComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.checkboxArray.setValue([false, false, false]);
        };
        /**
         * @return {?}
         */
        CheckboxSetComponent.prototype.displayList = /**
         * @return {?}
         */
        function () {
            this.selectedValues = this.checkboxSet.getValues();
        };
        CheckboxSetComponent.decorators = [
            { type: core.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'checkbox-set',
                        template: "<daff-checkbox-set [formArray]=\"checkboxArray\">\n  <daff-checkbox [formControl]=\"checkboxArray.at(0)\" value=\"option1\">Option 1 </daff-checkbox>\n  <daff-checkbox [formControl]=\"checkboxArray.at(1)\" value=\"option2\">Option 2 </daff-checkbox>\n  <daff-checkbox [formControl]=\"checkboxArray.at(2)\" value=\"option3\">Option 3 </daff-checkbox>\n</daff-checkbox-set>\n\n<div>\n  {{checkboxArray.value}}\n</div>\n<button daff-button color=\"secondary\" (click)=\"displayList()\">Get List of Values</button>\n<div>\n  List of selected values: {{selectedValues}}\n</div>"
                    }] }
        ];
        CheckboxSetComponent.propDecorators = {
            checkboxSet: [{ type: core.ViewChild, args: [design.DaffCheckboxSetComponent, { static: false },] }]
        };
        return CheckboxSetComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        CheckboxSetComponent.prototype.checkboxSet;
        /** @type {?} */
        CheckboxSetComponent.prototype.checkboxArray;
        /** @type {?} */
        CheckboxSetComponent.prototype.selectedValues;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BasicCheckboxModule = /** @class */ (function () {
        function BasicCheckboxModule() {
        }
        BasicCheckboxModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            BasicCheckboxComponent
                        ],
                        exports: [
                            BasicCheckboxComponent
                        ],
                        imports: [
                            design.DaffCheckboxModule,
                            design.DaffButtonModule,
                            forms.ReactiveFormsModule
                        ],
                        providers: []
                    },] }
        ];
        return BasicCheckboxModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CheckboxSetModule = /** @class */ (function () {
        function CheckboxSetModule() {
        }
        CheckboxSetModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            CheckboxSetComponent
                        ],
                        exports: [
                            CheckboxSetComponent
                        ],
                        imports: [
                            design.DaffCheckboxModule,
                            design.DaffButtonModule,
                            forms.ReactiveFormsModule
                        ],
                        providers: []
                    },] }
        ];
        return CheckboxSetModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var CHECKBOX_EXAMPLES = [
        CheckboxSetComponent,
        BasicCheckboxComponent
    ];
    /** @type {?} */
    var CHECKBOX_EXAMPLES_MODULES = [
        BasicCheckboxModule,
        CheckboxSetModule
    ];

    exports.CHECKBOX_EXAMPLES = CHECKBOX_EXAMPLES;
    exports.CHECKBOX_EXAMPLES_MODULES = CHECKBOX_EXAMPLES_MODULES;
    exports.ɵa = CheckboxSetComponent;
    exports.ɵb = BasicCheckboxComponent;
    exports.ɵc = BasicCheckboxModule;
    exports.ɵd = CheckboxSetModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-design-checkbox-examples.umd.js.map
