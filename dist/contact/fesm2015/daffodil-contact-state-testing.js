import { BehaviorSubject } from 'rxjs';
import { Injectable, ɵɵdefineInjectable, NgModule } from '@angular/core';
import { DaffContactFacade } from '@daffodil/contact/state';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MockDaffContactFacade {
    constructor() {
        this.success$ = new BehaviorSubject(false);
        this.error$ = new BehaviorSubject([]);
        this.loading$ = new BehaviorSubject(false);
    }
    /**
     * @param {?} action
     * @return {?}
     */
    dispatch(action) { }
    ;
}
MockDaffContactFacade.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ MockDaffContactFacade.ngInjectableDef = ɵɵdefineInjectable({ factory: function MockDaffContactFacade_Factory() { return new MockDaffContactFacade(); }, token: MockDaffContactFacade, providedIn: "root" });
if (false) {
    /** @type {?} */
    MockDaffContactFacade.prototype.success$;
    /** @type {?} */
    MockDaffContactFacade.prototype.error$;
    /** @type {?} */
    MockDaffContactFacade.prototype.loading$;
    /* Skipping unhandled member: ;*/
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffContactStateTestingModule {
}
DaffContactStateTestingModule.decorators = [
    { type: NgModule, args: [{
                providers: [{ provide: DaffContactFacade, useClass: MockDaffContactFacade }],
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

export { DaffContactStateTestingModule, MockDaffContactFacade };
//# sourceMappingURL=daffodil-contact-state-testing.js.map
