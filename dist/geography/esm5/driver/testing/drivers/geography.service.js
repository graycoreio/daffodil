/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DaffCountryFactory, DaffSubdivisionFactory } from '@daffodil/geography/testing';
import * as i0 from "@angular/core";
import * as i1 from "@daffodil/geography/testing";
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
    /** @nocollapse */ DaffTestingGeographyService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffTestingGeographyService_Factory() { return new DaffTestingGeographyService(i0.ɵɵinject(i1.DaffCountryFactory), i0.ɵɵinject(i1.DaffSubdivisionFactory)); }, token: DaffTestingGeographyService, providedIn: "root" });
    return DaffTestingGeographyService;
}());
export { DaffTestingGeographyService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvZ3JhcGh5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvZ2VvZ3JhcGh5L2RyaXZlci90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZHJpdmVycy9nZW9ncmFwaHkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBUXRDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7QUFFekY7SUFLRSxxQ0FDVSxjQUFrQyxFQUNsQyxrQkFBMEM7UUFEMUMsbUJBQWMsR0FBZCxjQUFjLENBQW9CO1FBQ2xDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBd0I7SUFDakQsQ0FBQzs7Ozs7SUFFSix5Q0FBRzs7OztJQUFILFVBQUksU0FBNEI7UUFDOUIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7WUFDbkMsRUFBRSxFQUFFLFNBQVM7WUFDYixZQUFZLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7U0FDcEQsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDOzs7O0lBRUQsMENBQUk7OztJQUFKO1FBQ0UsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDOztnQkFuQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFKUSxrQkFBa0I7Z0JBQUUsc0JBQXNCOzs7c0NBVG5EO0NBK0JDLEFBcEJELElBb0JDO1NBakJZLDJCQUEyQjs7Ozs7O0lBR3BDLHFEQUEwQzs7Ozs7SUFDMUMseURBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtcbiAgRGFmZkNvdW50cnlcbn0gZnJvbSAnQGRhZmZvZGlsL2dlb2dyYXBoeSc7XG5pbXBvcnQge1xuICBEYWZmR2VvZ3JhcGh5U2VydmljZUludGVyZmFjZSxcbn0gZnJvbSAnQGRhZmZvZGlsL2dlb2dyYXBoeS9kcml2ZXInO1xuaW1wb3J0IHsgRGFmZkNvdW50cnlGYWN0b3J5LCBEYWZmU3ViZGl2aXNpb25GYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2dlb2dyYXBoeS90ZXN0aW5nJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZlRlc3RpbmdHZW9ncmFwaHlTZXJ2aWNlIGltcGxlbWVudHMgRGFmZkdlb2dyYXBoeVNlcnZpY2VJbnRlcmZhY2U8RGFmZkNvdW50cnk+IHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvdW50cnlGYWN0b3J5OiBEYWZmQ291bnRyeUZhY3RvcnksXG4gICAgcHJpdmF0ZSBzdWJkaXZpc2lvbkZhY3Rvcnk6IERhZmZTdWJkaXZpc2lvbkZhY3RvcnksXG4gICkge31cblxuICBnZXQoY291bnRyeUlkOiBEYWZmQ291bnRyeVsnaWQnXSk6IE9ic2VydmFibGU8RGFmZkNvdW50cnk+IHtcbiAgICByZXR1cm4gb2YodGhpcy5jb3VudHJ5RmFjdG9yeS5jcmVhdGUoe1xuICAgICAgaWQ6IGNvdW50cnlJZCxcbiAgICAgIHN1YmRpdmlzaW9uczogdGhpcy5zdWJkaXZpc2lvbkZhY3RvcnkuY3JlYXRlTWFueSgzKVxuICAgIH0pKTtcbiAgfVxuXG4gIGxpc3QoKTogT2JzZXJ2YWJsZTxEYWZmQ291bnRyeVtdPiB7XG4gICAgcmV0dXJuIG9mKHRoaXMuY291bnRyeUZhY3RvcnkuY3JlYXRlTWFueSg1KSk7XG4gIH1cbn1cbiJdfQ==