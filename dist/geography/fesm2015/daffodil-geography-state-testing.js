import { Injectable, ɵɵdefineInjectable, NgModule } from '@angular/core';
import { DaffGeographyFacade } from '@daffodil/geography/state';
import { BehaviorSubject } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MockDaffGeographyFacade {
    constructor() {
        this.loading$ = new BehaviorSubject(null);
        this.errors$ = new BehaviorSubject([]);
        this.countries$ = new BehaviorSubject([]);
        this.countryIds$ = new BehaviorSubject([]);
        this.countryCount$ = new BehaviorSubject(null);
        this.countryEntities$ = new BehaviorSubject(null);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getCountry(id) {
        return new BehaviorSubject(null);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getCountrySubdivisions(id) {
        return new BehaviorSubject([]);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    isCountryFullyLoaded(id) {
        return new BehaviorSubject(false);
    }
    /**
     * @param {?} action
     * @return {?}
     */
    dispatch(action) { }
    ;
}
MockDaffGeographyFacade.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ MockDaffGeographyFacade.ngInjectableDef = ɵɵdefineInjectable({ factory: function MockDaffGeographyFacade_Factory() { return new MockDaffGeographyFacade(); }, token: MockDaffGeographyFacade, providedIn: "root" });
if (false) {
    /** @type {?} */
    MockDaffGeographyFacade.prototype.loading$;
    /** @type {?} */
    MockDaffGeographyFacade.prototype.errors$;
    /** @type {?} */
    MockDaffGeographyFacade.prototype.countries$;
    /** @type {?} */
    MockDaffGeographyFacade.prototype.countryIds$;
    /** @type {?} */
    MockDaffGeographyFacade.prototype.countryCount$;
    /** @type {?} */
    MockDaffGeographyFacade.prototype.countryEntities$;
    /* Skipping unhandled member: ;*/
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffGeographyTestingModule {
}
DaffGeographyTestingModule.decorators = [
    { type: NgModule, args: [{
                providers: [
                    { provide: DaffGeographyFacade, useExisting: MockDaffGeographyFacade }
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

export { DaffGeographyTestingModule, MockDaffGeographyFacade };
//# sourceMappingURL=daffodil-geography-state-testing.js.map
