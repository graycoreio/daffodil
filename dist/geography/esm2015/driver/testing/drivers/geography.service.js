/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DaffCountryFactory, DaffSubdivisionFactory } from '@daffodil/geography/testing';
import * as i0 from "@angular/core";
import * as i1 from "@daffodil/geography/testing";
export class DaffTestingGeographyService {
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
/** @nocollapse */ DaffTestingGeographyService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffTestingGeographyService_Factory() { return new DaffTestingGeographyService(i0.ɵɵinject(i1.DaffCountryFactory), i0.ɵɵinject(i1.DaffSubdivisionFactory)); }, token: DaffTestingGeographyService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvZ3JhcGh5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvZ2VvZ3JhcGh5L2RyaXZlci90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZHJpdmVycy9nZW9ncmFwaHkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBUXRDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7QUFLekYsTUFBTSxPQUFPLDJCQUEyQjs7Ozs7SUFFdEMsWUFDVSxjQUFrQyxFQUNsQyxrQkFBMEM7UUFEMUMsbUJBQWMsR0FBZCxjQUFjLENBQW9CO1FBQ2xDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBd0I7SUFDakQsQ0FBQzs7Ozs7SUFFSixHQUFHLENBQUMsU0FBNEI7UUFDOUIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7WUFDbkMsRUFBRSxFQUFFLFNBQVM7WUFDYixZQUFZLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7U0FDcEQsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDOzs7O0lBRUQsSUFBSTtRQUNGLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7O1lBbkJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUpRLGtCQUFrQjtZQUFFLHNCQUFzQjs7Ozs7Ozs7SUFRL0MscURBQTBDOzs7OztJQUMxQyx5REFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1xuICBEYWZmQ291bnRyeVxufSBmcm9tICdAZGFmZm9kaWwvZ2VvZ3JhcGh5JztcbmltcG9ydCB7XG4gIERhZmZHZW9ncmFwaHlTZXJ2aWNlSW50ZXJmYWNlLFxufSBmcm9tICdAZGFmZm9kaWwvZ2VvZ3JhcGh5L2RyaXZlcic7XG5pbXBvcnQgeyBEYWZmQ291bnRyeUZhY3RvcnksIERhZmZTdWJkaXZpc2lvbkZhY3RvcnkgfSBmcm9tICdAZGFmZm9kaWwvZ2VvZ3JhcGh5L3Rlc3RpbmcnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmVGVzdGluZ0dlb2dyYXBoeVNlcnZpY2UgaW1wbGVtZW50cyBEYWZmR2VvZ3JhcGh5U2VydmljZUludGVyZmFjZTxEYWZmQ291bnRyeT4ge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY291bnRyeUZhY3Rvcnk6IERhZmZDb3VudHJ5RmFjdG9yeSxcbiAgICBwcml2YXRlIHN1YmRpdmlzaW9uRmFjdG9yeTogRGFmZlN1YmRpdmlzaW9uRmFjdG9yeSxcbiAgKSB7fVxuXG4gIGdldChjb3VudHJ5SWQ6IERhZmZDb3VudHJ5WydpZCddKTogT2JzZXJ2YWJsZTxEYWZmQ291bnRyeT4ge1xuICAgIHJldHVybiBvZih0aGlzLmNvdW50cnlGYWN0b3J5LmNyZWF0ZSh7XG4gICAgICBpZDogY291bnRyeUlkLFxuICAgICAgc3ViZGl2aXNpb25zOiB0aGlzLnN1YmRpdmlzaW9uRmFjdG9yeS5jcmVhdGVNYW55KDMpXG4gICAgfSkpO1xuICB9XG5cbiAgbGlzdCgpOiBPYnNlcnZhYmxlPERhZmZDb3VudHJ5W10+IHtcbiAgICByZXR1cm4gb2YodGhpcy5jb3VudHJ5RmFjdG9yeS5jcmVhdGVNYW55KDUpKTtcbiAgfVxufVxuIl19