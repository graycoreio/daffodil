import { Injectable, ɵɵdefineInjectable, NgModule } from '@angular/core';
import { DaffGeographyFacade } from '@daffodil/geography/state';
import { BehaviorSubject } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MockDaffGeographyFacade = /** @class */ (function () {
    function MockDaffGeographyFacade() {
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
    MockDaffGeographyFacade.prototype.getCountry = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return new BehaviorSubject(null);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    MockDaffGeographyFacade.prototype.getCountrySubdivisions = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return new BehaviorSubject([]);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    MockDaffGeographyFacade.prototype.isCountryFullyLoaded = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return new BehaviorSubject(false);
    };
    /**
     * @param {?} action
     * @return {?}
     */
    MockDaffGeographyFacade.prototype.dispatch = /**
     * @param {?} action
     * @return {?}
     */
    function (action) { };
    ;
    MockDaffGeographyFacade.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ MockDaffGeographyFacade.ngInjectableDef = ɵɵdefineInjectable({ factory: function MockDaffGeographyFacade_Factory() { return new MockDaffGeographyFacade(); }, token: MockDaffGeographyFacade, providedIn: "root" });
    return MockDaffGeographyFacade;
}());
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
var DaffGeographyTestingModule = /** @class */ (function () {
    function DaffGeographyTestingModule() {
    }
    DaffGeographyTestingModule.decorators = [
        { type: NgModule, args: [{
                    providers: [
                        { provide: DaffGeographyFacade, useExisting: MockDaffGeographyFacade }
                    ]
                },] }
    ];
    return DaffGeographyTestingModule;
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

export { DaffGeographyTestingModule, MockDaffGeographyFacade };
//# sourceMappingURL=daffodil-geography-state-testing.js.map
