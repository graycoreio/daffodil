import { Component, NgModule } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { DaffRadioModule } from '@daffodil/design';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BasicRadioComponent = /** @class */ (function () {
    function BasicRadioComponent() {
        this.radioGroup = new FormGroup({
            race: new FormControl('Zerg')
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
                    declarations: [
                        BasicRadioComponent,
                    ],
                    exports: [
                        BasicRadioComponent
                    ],
                    imports: [
                        DaffRadioModule,
                        ReactiveFormsModule
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

export { RADIO_EXAMPLES, RADIO_EXAMPLES_MODULES, BasicRadioComponent as ɵa, BasicRadioModule as ɵb };
//# sourceMappingURL=daffodil-design-radio-examples.js.map
