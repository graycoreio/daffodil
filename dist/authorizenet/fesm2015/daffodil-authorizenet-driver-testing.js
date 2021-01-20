import { Injectable, ɵɵdefineInjectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffAuthorizeNetDriver } from '@daffodil/authorizenet/driver';
import { of } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffTestingAuthorizeNetService {
    /**
     * @param {?} tokenRequest
     * @return {?}
     */
    generateToken(tokenRequest) {
        return of({ paymentInfo: 'paymentInfo' });
    }
}
DaffTestingAuthorizeNetService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffTestingAuthorizeNetService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffTestingAuthorizeNetService_Factory() { return new DaffTestingAuthorizeNetService(); }, token: DaffTestingAuthorizeNetService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffTestingAuthorizeNetDriverModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DaffTestingAuthorizeNetDriverModule,
            providers: [
                {
                    provide: DaffAuthorizeNetDriver,
                    useExisting: DaffTestingAuthorizeNetService
                }
            ]
        };
    }
}
DaffTestingAuthorizeNetDriverModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DaffTestingAuthorizeNetDriverModule, DaffTestingAuthorizeNetService };
//# sourceMappingURL=daffodil-authorizenet-driver-testing.js.map
