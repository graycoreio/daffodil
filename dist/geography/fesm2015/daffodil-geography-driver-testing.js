import { Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffGeographyDriver } from '@daffodil/geography/driver';
import { of } from 'rxjs';
import { DaffCountryFactory, DaffSubdivisionFactory } from '@daffodil/geography/testing';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffTestingGeographyService {
    /**
     * @param {?} countryFactory
     * @param {?} subdivisionFactory
     */
    constructor(countryFactory, subdivisionFactory) {
        this.countryFactory = countryFactory;
        this.subdivisionFactory = subdivisionFactory;
    }
    /**
     * @param {?} countryId
     * @return {?}
     */
    get(countryId) {
        return of(this.countryFactory.create({
            id: countryId,
            subdivisions: this.subdivisionFactory.createMany(3)
        }));
    }
    /**
     * @return {?}
     */
    list() {
        return of(this.countryFactory.createMany(5));
    }
}
DaffTestingGeographyService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffTestingGeographyService.ctorParameters = () => [
    { type: DaffCountryFactory },
    { type: DaffSubdivisionFactory }
];
/** @nocollapse */ DaffTestingGeographyService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffTestingGeographyService_Factory() { return new DaffTestingGeographyService(ɵɵinject(DaffCountryFactory), ɵɵinject(DaffSubdivisionFactory)); }, token: DaffTestingGeographyService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffTestingGeographyService.prototype.countryFactory;
    /**
     * @type {?}
     * @private
     */
    DaffTestingGeographyService.prototype.subdivisionFactory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffGeographyTestingDriverModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DaffGeographyTestingDriverModule,
            providers: [
                {
                    provide: DaffGeographyDriver,
                    useExisting: DaffTestingGeographyService
                }
            ]
        };
    }
}
DaffGeographyTestingDriverModule.decorators = [
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

export { DaffGeographyTestingDriverModule, DaffTestingGeographyService };
//# sourceMappingURL=daffodil-geography-driver-testing.js.map
