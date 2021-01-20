import { BehaviorSubject } from 'rxjs';
import { Injectable, ɵɵdefineInjectable, NgModule } from '@angular/core';
import { DaffAuthorizeNetFacade } from '@daffodil/authorizenet/state';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MockDaffAuthorizeNetFacade {
    constructor() {
        this.isAcceptJsLoaded$ = new BehaviorSubject(false);
        this.loading$ = new BehaviorSubject(false);
        this.paymentError$ = new BehaviorSubject(null);
        this.acceptJsLoadError$ = new BehaviorSubject(null);
    }
    /**
     * @param {?} action
     * @return {?}
     */
    dispatch(action) { }
    ;
}
MockDaffAuthorizeNetFacade.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ MockDaffAuthorizeNetFacade.ngInjectableDef = ɵɵdefineInjectable({ factory: function MockDaffAuthorizeNetFacade_Factory() { return new MockDaffAuthorizeNetFacade(); }, token: MockDaffAuthorizeNetFacade, providedIn: "root" });
if (false) {
    /** @type {?} */
    MockDaffAuthorizeNetFacade.prototype.isAcceptJsLoaded$;
    /** @type {?} */
    MockDaffAuthorizeNetFacade.prototype.loading$;
    /** @type {?} */
    MockDaffAuthorizeNetFacade.prototype.paymentError$;
    /** @type {?} */
    MockDaffAuthorizeNetFacade.prototype.acceptJsLoadError$;
    /* Skipping unhandled member: ;*/
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffAuthorizeNetTestingModule {
}
DaffAuthorizeNetTestingModule.decorators = [
    { type: NgModule, args: [{
                providers: [
                    { provide: DaffAuthorizeNetFacade, useExisting: MockDaffAuthorizeNetFacade }
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

export { DaffAuthorizeNetTestingModule, MockDaffAuthorizeNetFacade };
//# sourceMappingURL=daffodil-authorizenet-state-testing.js.map
