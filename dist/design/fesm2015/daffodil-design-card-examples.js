import { Component, NgModule } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DaffCardModule, DaffImageModule } from '@daffodil/design';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardWithImageComponent {
}
CardWithImageComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'card-with-image',
                template: "<daff-card>\n  <img daffCardImage src=\"/assets/card/uber-logo-dark.svg\" />\n  <h4 daffCardTitle>Title</h4>\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n  Some other content\n</daff-card>",
                styles: [`
    daff-card {
      max-width: 400px;
    } 
  `]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardWithColorComponent {
    constructor() {
        this.color = 'primary';
        this.colorControl = new FormControl('primary');
    }
}
CardWithColorComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'card-with-color',
                template: "<daff-card [color]=\"colorControl.value\">\n  <img daffCardImage src=\"/assets/card/uber-logo-dark.svg\" />\n  <h4 daffCardTitle>Title</h4>\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n  Some other content\n</daff-card>\n\n<select [formControl]=\"colorControl\">\n    <option value=\"primary\">Primary</option>\n    <option value=\"secondary\">Secondary</option>\n    <option value=\"tertiary\">Tertiary</option>\n    <option value=\"white\">White</option>\n    <option value=\"black\">Black</option>\n    <option value=\"theme\">Theme</option>\n    <option value=\"theme-contrast\">Theme Contrast</option>\n</select>",
                styles: [`
    daff-card {
      max-width: 400px;
    } 
  `]
            }] }
];
if (false) {
    /** @type {?} */
    CardWithColorComponent.prototype.color;
    /** @type {?} */
    CardWithColorComponent.prototype.colorControl;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardWithImageModule {
}
CardWithImageModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    CardWithImageComponent
                ],
                imports: [
                    CommonModule,
                    DaffCardModule,
                    DaffImageModule
                ],
                exports: [
                    CardWithImageComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardWithColorModule {
}
CardWithColorModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    CardWithColorComponent
                ],
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    DaffCardModule,
                    DaffImageModule
                ],
                exports: [
                    CardWithColorComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CARD_EXAMPLES = [
    CardWithImageComponent,
    CardWithColorComponent
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardExamplesModule {
}
CardExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    CardWithImageModule,
                    CardWithColorModule
                ],
                entryComponents: [
                    ...CARD_EXAMPLES
                ]
            },] }
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

export { CARD_EXAMPLES, CardExamplesModule, CardWithColorComponent, CardWithImageComponent, CardWithImageModule as ɵa, CardWithColorModule as ɵb };
//# sourceMappingURL=daffodil-design-card-examples.js.map
