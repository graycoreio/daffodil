import { Component, ViewChild, NgModule } from '@angular/core';
import { FormControl, FormArray, ReactiveFormsModule } from '@angular/forms';
import { DaffCheckboxSetComponent, DaffCheckboxModule, DaffButtonModule } from '@daffodil/design';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BasicCheckboxComponent = /** @class */ (function () {
    function BasicCheckboxComponent() {
        this.checkboxExample = new FormControl();
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
        { type: Component, args: [{
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
        this.checkboxArray = new FormArray([new FormControl(), new FormControl(), new FormControl()]);
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
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'checkbox-set',
                    template: "<daff-checkbox-set [formArray]=\"checkboxArray\">\n  <daff-checkbox [formControl]=\"checkboxArray.at(0)\" value=\"option1\">Option 1 </daff-checkbox>\n  <daff-checkbox [formControl]=\"checkboxArray.at(1)\" value=\"option2\">Option 2 </daff-checkbox>\n  <daff-checkbox [formControl]=\"checkboxArray.at(2)\" value=\"option3\">Option 3 </daff-checkbox>\n</daff-checkbox-set>\n\n<div>\n  {{checkboxArray.value}}\n</div>\n<button daff-button color=\"secondary\" (click)=\"displayList()\">Get List of Values</button>\n<div>\n  List of selected values: {{selectedValues}}\n</div>"
                }] }
    ];
    CheckboxSetComponent.propDecorators = {
        checkboxSet: [{ type: ViewChild, args: [DaffCheckboxSetComponent, { static: false },] }]
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
        { type: NgModule, args: [{
                    declarations: [
                        BasicCheckboxComponent
                    ],
                    exports: [
                        BasicCheckboxComponent
                    ],
                    imports: [
                        DaffCheckboxModule,
                        DaffButtonModule,
                        ReactiveFormsModule
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
        { type: NgModule, args: [{
                    declarations: [
                        CheckboxSetComponent
                    ],
                    exports: [
                        CheckboxSetComponent
                    ],
                    imports: [
                        DaffCheckboxModule,
                        DaffButtonModule,
                        ReactiveFormsModule
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CHECKBOX_EXAMPLES, CHECKBOX_EXAMPLES_MODULES, CheckboxSetComponent as ɵa, BasicCheckboxComponent as ɵb, BasicCheckboxModule as ɵc, CheckboxSetModule as ɵd };
//# sourceMappingURL=daffodil-design-checkbox-examples.js.map
