import { Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffGeographyDriver } from '@daffodil/geography/driver';
import { of } from 'rxjs';
import { DaffCountryFactory, DaffSubdivisionFactory } from '@daffodil/geography/testing';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffTestingGeographyService = /** @class */ (function () {
    function DaffTestingGeographyService(countryFactory, subdivisionFactory) {
        this.countryFactory = countryFactory;
        this.subdivisionFactory = subdivisionFactory;
    }
    /**
     * @param {?} countryId
     * @return {?}
     */
    DaffTestingGeographyService.prototype.get = /**
     * @param {?} countryId
     * @return {?}
     */
    function (countryId) {
        return of(this.countryFactory.create({
            id: countryId,
            subdivisions: this.subdivisionFactory.createMany(3)
        }));
    };
    /**
     * @return {?}
     */
    DaffTestingGeographyService.prototype.list = /**
     * @return {?}
     */
    function () {
        return of(this.countryFactory.createMany(5));
    };
    DaffTestingGeographyService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffTestingGeographyService.ctorParameters = function () { return [
        { type: DaffCountryFactory },
        { type: DaffSubdivisionFactory }
    ]; };
    /** @nocollapse */ DaffTestingGeographyService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffTestingGeographyService_Factory() { return new DaffTestingGeographyService(ɵɵinject(DaffCountryFactory), ɵɵinject(DaffSubdivisionFactory)); }, token: DaffTestingGeographyService, providedIn: "root" });
    return DaffTestingGeographyService;
}());
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
var DaffGeographyTestingDriverModule = /** @class */ (function () {
    function DaffGeographyTestingDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffGeographyTestingDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DaffGeographyTestingDriverModule,
            providers: [
                {
                    provide: DaffGeographyDriver,
                    useExisting: DaffTestingGeographyService
                }
            ]
        };
    };
    DaffGeographyTestingDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return DaffGeographyTestingDriverModule;
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

export { DaffGeographyTestingDriverModule, DaffTestingGeographyService };
//# sourceMappingURL=daffodil-geography-driver-testing.js.map
