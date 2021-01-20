import { Injectable, ɵɵdefineInjectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffAuthorizeNetDriver } from '@daffodil/authorizenet/driver';
import { of } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffTestingAuthorizeNetService = /** @class */ (function () {
    function DaffTestingAuthorizeNetService() {
    }
    /**
     * @param {?} tokenRequest
     * @return {?}
     */
    DaffTestingAuthorizeNetService.prototype.generateToken = /**
     * @param {?} tokenRequest
     * @return {?}
     */
    function (tokenRequest) {
        return of({ paymentInfo: 'paymentInfo' });
    };
    DaffTestingAuthorizeNetService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffTestingAuthorizeNetService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffTestingAuthorizeNetService_Factory() { return new DaffTestingAuthorizeNetService(); }, token: DaffTestingAuthorizeNetService, providedIn: "root" });
    return DaffTestingAuthorizeNetService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffTestingAuthorizeNetDriverModule = /** @class */ (function () {
    function DaffTestingAuthorizeNetDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffTestingAuthorizeNetDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DaffTestingAuthorizeNetDriverModule,
            providers: [
                {
                    provide: DaffAuthorizeNetDriver,
                    useExisting: DaffTestingAuthorizeNetService
                }
            ]
        };
    };
    DaffTestingAuthorizeNetDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return DaffTestingAuthorizeNetDriverModule;
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

export { DaffTestingAuthorizeNetDriverModule, DaffTestingAuthorizeNetService };
//# sourceMappingURL=daffodil-authorizenet-driver-testing.js.map
