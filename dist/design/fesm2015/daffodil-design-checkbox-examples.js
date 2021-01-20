import { Component, ViewChild, NgModule } from '@angular/core';
import { FormControl, FormArray, ReactiveFormsModule } from '@angular/forms';
import { DaffCheckboxSetComponent, DaffCheckboxModule, DaffButtonModule } from '@daffodil/design';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BasicCheckboxComponent {
    constructor() {
        this.checkboxExample = new FormControl();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.checkboxExample.setValue(true);
    }
    /**
     * @return {?}
     */
    setFalse() {
        this.checkboxExample.setValue(false);
    }
    /**
     * @return {?}
     */
    setTrue() {
        this.checkboxExample.setValue(true);
    }
}
BasicCheckboxComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'basic-checkbox',
                template: "<daff-checkbox [formControl]=\"checkboxExample\" value=\"checkboxExample\">Checkbox</daff-checkbox>\n<div>\n  {{checkboxExample.value}}\n</div>\n<button daff-button color=\"primary\" (click)=\"setFalse()\">Set to false</button>\n<button daff-button (click)=\"setTrue()\">Set to true</button>"
            }] }
];
if (false) {
    /** @type {?} */
    BasicCheckboxComponent.prototype.checkboxExample;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckboxSetComponent {
    constructor() {
        this.checkboxArray = new FormArray([new FormControl(), new FormControl(), new FormControl()]);
        this.selectedValues = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.checkboxArray.setValue([false, false, false]);
    }
    /**
     * @return {?}
     */
    displayList() {
        this.selectedValues = this.checkboxSet.getValues();
    }
}
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
class BasicCheckboxModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckboxSetModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
let CHECKBOX_EXAMPLES = [
    CheckboxSetComponent,
    BasicCheckboxComponent
];
/** @type {?} */
const CHECKBOX_EXAMPLES_MODULES = [
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
