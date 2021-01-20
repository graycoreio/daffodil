import { Component, NgModule, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffCopyrightComponent = /** @class */ (function () {
    function DaffCopyrightComponent() {
        this.today = Date.now();
    }
    DaffCopyrightComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-branding-copyright',
                    template: "<span>Graycore, LLC &copy; 2018 - {{today | date:'y'}}. Code licensed under an <a href=\"https://github.com/graycoreio/daffodil/blob/develop/LICENSE\">MIT-style License</a>. Documentation licensed under <a href=\"http://creativecommons.org/licenses/by/4.0/\">CC BY 4.0.</a></span>"
                }] }
    ];
    return DaffCopyrightComponent;
}());
if (false) {
    /** @type {?} */
    DaffCopyrightComponent.prototype.today;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffCopyrightModule = /** @class */ (function () {
    function DaffCopyrightModule() {
    }
    DaffCopyrightModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ],
                    declarations: [
                        DaffCopyrightComponent
                    ],
                    exports: [
                        DaffCopyrightComponent
                    ]
                },] }
    ];
    return DaffCopyrightModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DaffLogoTypeEnum = {
    ICON: 'icon',
    FULL: 'full',
};
/** @enum {string} */
var DaffLogoColorEnum = {
    BLACK: 'dark',
    WHITE: 'light',
    BASE: 'base',
    BASECONTRAST: 'baseContrast',
};
var DaffLogoComponent = /** @class */ (function () {
    function DaffLogoComponent() {
        /**
         * \@docs
         *
         * Rendering property for showing the "full" logo
         * with test, or only the flower.
         */
        this.type = DaffLogoTypeEnum.FULL;
        /**
         * \@docs
         *
         * Determines the color of the logo. The logo supports a
         * smaller subset of DaffColorable, so it
         * has its own custom types.
         */
        this.color = DaffLogoColorEnum.BASECONTRAST;
        /**
         * \@docs
         *
         * Path to the flower in a project, defaults
         * to what is handle by the branding schematics.
         */
        this.flowerPath = '/assets/daff-branding/daff-flower.svg';
    }
    /**
     * Helper function to determine if the logo type is "full"
     */
    /**
     * Helper function to determine if the logo type is "full"
     * @return {?}
     */
    DaffLogoComponent.prototype.isFull = /**
     * Helper function to determine if the logo type is "full"
     * @return {?}
     */
    function () {
        return this.type === DaffLogoTypeEnum.FULL;
    };
    DaffLogoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-branding-logo',
                    template: "<div class=\"daff-logo daff-logo--full\" *ngIf=\"isFull()\">\n    <svg class=\"daff\" viewBox=\"0 0 239.55 50.61\"><path d=\"M44.08,24.64A29.4,29.4,0,0,1,41.22,38a20.69,20.69,0,0,1-8.14,8.77,24.19,24.19,0,0,1-12.4,3.08H0V0H20.83A24.3,24.3,0,0,1,33.56,3.15a20,20,0,0,1,7.88,8.7A29.37,29.37,0,0,1,44.08,24.64Zm-11.88,0q0-7.11-2.93-11.22t-8.59-4.1H11.44V40.63h8.73a10.74,10.74,0,0,0,8.8-4Q32.2,32.71,32.2,24.64Z\"/><path d=\"M69.17,49.88,88.24,0H99l18.92,49.29-11.29,1.32-4-11.52H84.49L80.61,49.88ZM87.72,30H99.24L93.37,14.52Z\"/><path d=\"M158.13,20.9h15.48l1.32,9h-16.8v20H146.69V.07h30.37l1.32,9H158.13Z\"/><path d=\"M219.31,20.9h15.47l1.32,9H219.31v20H207.86V.07h30.37l1.32,9H219.31Z\"/></svg>\n    <div class=\"spacer\"></div>\n    <img class=\"flower\" [src]=\"flowerPath\" alt=\"Daffodil Logo\"/>\n    <div class=\"spacer\"></div>\n    <svg class=\"dil\" viewBox=\"0 0 154.39 50.61\"><path d=\"M44.08,25A29.4,29.4,0,0,1,41.22,38.4a20.61,20.61,0,0,1-8.14,8.76,24.09,24.09,0,0,1-12.4,3.08H0V.37H20.83A24.3,24.3,0,0,1,33.56,3.52a20,20,0,0,1,7.88,8.69A29.42,29.42,0,0,1,44.08,25ZM32.2,25q0-7.11-2.94-11.22a9.86,9.86,0,0,0-8.58-4.11H11.44V41h8.73A10.74,10.74,0,0,0,29,37Q32.2,33.08,32.2,25Z\"/><path d=\"M85.89.37V50.24H74.45V.37Z\"/><path d=\"M131.44,41.29h21.63l1.32,9H120V.37h11.45Z\"/></svg>\n</div>\n\n<img [src]=\"flowerPath\" alt=\"Daffodil Logo\" *ngIf=\"!isFull()\"/>  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{display:block;width:100%}.daff-logo--full{display:flex;align-items:center}.daff-logo--full .spacer{flex:1 0 3.5%}.daff-logo--full .daff{flex:1 0 47%}.daff-logo--full .flower{display:block;max-width:100%;min-width:0;flex:1 0 16%}.daff-logo--full .dil{flex:1 0 30%}.daff-logo--full .daff,.daff-logo--full .dil{width:100%}"]
                }] }
    ];
    DaffLogoComponent.propDecorators = {
        type: [{ type: Input }],
        color: [{ type: Input }],
        flowerPath: [{ type: Input }]
    };
    return DaffLogoComponent;
}());
if (false) {
    /**
     * \@docs
     *
     * Rendering property for showing the "full" logo
     * with test, or only the flower.
     * @type {?}
     */
    DaffLogoComponent.prototype.type;
    /**
     * \@docs
     *
     * Determines the color of the logo. The logo supports a
     * smaller subset of DaffColorable, so it
     * has its own custom types.
     * @type {?}
     */
    DaffLogoComponent.prototype.color;
    /**
     * \@docs
     *
     * Path to the flower in a project, defaults
     * to what is handle by the branding schematics.
     * @type {?}
     */
    DaffLogoComponent.prototype.flowerPath;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffLogoModule = /** @class */ (function () {
    function DaffLogoModule() {
    }
    DaffLogoModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ],
                    declarations: [DaffLogoComponent],
                    exports: [DaffLogoComponent]
                },] }
    ];
    return DaffLogoModule;
}());

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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DaffCopyrightComponent, DaffCopyrightModule, DaffLogoComponent, DaffLogoModule };
//# sourceMappingURL=daffodil-branding.js.map
