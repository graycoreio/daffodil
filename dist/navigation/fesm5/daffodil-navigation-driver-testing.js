import { Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { of } from 'rxjs';
import { DaffNavigationTreeFactory } from '@daffodil/navigation/testing';
import { CommonModule } from '@angular/common';
import { DaffNavigationDriver } from '@daffodil/navigation/driver';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffTestingNavigationService = /** @class */ (function () {
    function DaffTestingNavigationService(navigationTreeFactory) {
        this.navigationTreeFactory = navigationTreeFactory;
    }
    /**
     * @param {?} navigationTreeId
     * @return {?}
     */
    DaffTestingNavigationService.prototype.get = /**
     * @param {?} navigationTreeId
     * @return {?}
     */
    function (navigationTreeId) {
        return of(this.navigationTreeFactory.create());
    };
    DaffTestingNavigationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffTestingNavigationService.ctorParameters = function () { return [
        { type: DaffNavigationTreeFactory }
    ]; };
    /** @nocollapse */ DaffTestingNavigationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffTestingNavigationService_Factory() { return new DaffTestingNavigationService(ɵɵinject(DaffNavigationTreeFactory)); }, token: DaffTestingNavigationService, providedIn: "root" });
    return DaffTestingNavigationService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffTestingNavigationService.prototype.navigationTreeFactory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffNavigationTestingDriverModule = /** @class */ (function () {
    function DaffNavigationTestingDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffNavigationTestingDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DaffNavigationTestingDriverModule,
            providers: [
                {
                    provide: DaffNavigationDriver,
                    useExisting: DaffTestingNavigationService
                }
            ]
        };
    };
    DaffNavigationTestingDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return DaffNavigationTestingDriverModule;
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

export { DaffNavigationTestingDriverModule, DaffTestingNavigationService };
//# sourceMappingURL=daffodil-navigation-driver-testing.js.map
