import { Component, NgModule } from '@angular/core';
import { faChevronRight, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { DaffListModule } from '@daffodil/design';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BasicListComponent {
}
BasicListComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'basic-list',
                template: "<daff-list role=\"list\">\n\t<daff-list-item>Basic list item 1</daff-list-item>\n\t<daff-list-item>Basic list item 2</daff-list-item>\n\t<daff-list-item>Basic list item 3</daff-list-item>\n</daff-list>"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NavListComponent {
    constructor() {
        this.faChevronRight = faChevronRight;
    }
}
NavListComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'nav-list',
                template: "<daff-nav-list>\n\t<a href=\"#\" daff-list-item>\n\t\t\tNavigation list item 1\n\t\t\t<fa-icon [icon]=\"faChevronRight\" daffSuffix></fa-icon>\n\t</a>\n\t<a href=\"#\" daff-list-item>\n\t\t\tNavigation list item 2\n\t</a>\n\t<a href=\"#\" daff-list-item>\n\t\t\tNavigation list item 3\n\t</a>\n</daff-nav-list>"
            }] }
];
if (false) {
    /** @type {?} */
    NavListComponent.prototype.faChevronRight;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IconListComponent {
    constructor() {
        this.faInfoCircle = faInfoCircle;
    }
}
IconListComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'icon-list',
                template: "<daff-list>\n\t<daff-list-item>\n\t\t<fa-icon [icon]=\"faInfoCircle\" daffPrefix></fa-icon>\n\t\tList item with icon\n\t</daff-list-item>\n</daff-list>"
            }] }
];
if (false) {
    /** @type {?} */
    IconListComponent.prototype.faInfoCircle;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MultilineListComponent {
}
MultilineListComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'multiline-list',
                template: "<daff-list>\n\t<daff-list-item>\n\t\t<h5>List item heading</h5>\n\t\t<p>List item description<p>\n\t\t<p>List item description line 2</p>\n\t</daff-list-item>\n\t<daff-list-item>\n\t\t<h5>List item heading</h5>\n\t\t<p>List item description</p>\n\t</daff-list-item>\n</daff-list>"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BasicListModule {
}
BasicListModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    BasicListComponent
                ],
                imports: [
                    CommonModule,
                    DaffListModule
                ],
                exports: [
                    BasicListComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NavListModule {
}
NavListModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    NavListComponent
                ],
                imports: [
                    CommonModule,
                    DaffListModule,
                    FontAwesomeModule
                ],
                exports: [
                    NavListComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IconListModule {
}
IconListModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    IconListComponent
                ],
                imports: [
                    CommonModule,
                    DaffListModule,
                    FontAwesomeModule
                ],
                exports: [
                    IconListComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MultilineListModule {
}
MultilineListModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    MultilineListComponent
                ],
                imports: [
                    CommonModule,
                    DaffListModule,
                    FontAwesomeModule
                ],
                exports: [
                    MultilineListComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LIST_EXAMPLES = [
    BasicListComponent,
    NavListComponent,
    IconListComponent,
    MultilineListComponent
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ListExamplesModule {
}
ListExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    BasicListModule,
                    NavListModule,
                    IconListModule,
                    MultilineListModule
                ],
                entryComponents: [
                    ...LIST_EXAMPLES
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

export { BasicListComponent, IconListComponent, LIST_EXAMPLES, ListExamplesModule, MultilineListComponent, NavListComponent, BasicListModule as ɵa, NavListModule as ɵb, IconListModule as ɵc, MultilineListModule as ɵd };
//# sourceMappingURL=daffodil-design-list-examples.js.map
