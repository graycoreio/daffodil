/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class MockDaffGeographyFacade {
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
/** @nocollapse */ MockDaffGeographyFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MockDaffGeographyFacade_Factory() { return new MockDaffGeographyFacade(); }, token: MockDaffGeographyFacade, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay1nZW9ncmFwaHktZmFjYWRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2dlb2dyYXBoeS9zdGF0ZS90ZXN0aW5nLyIsInNvdXJjZXMiOlsibW9jay1nZW9ncmFwaHktZmFjYWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR3ZDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTTNDLE1BQU0sT0FBTyx1QkFBdUI7SUFEcEM7UUFFRSxhQUFRLEdBQTZCLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9ELFlBQU8sR0FBOEIsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDN0QsZUFBVSxHQUFtQyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyRSxnQkFBVyxHQUF5QyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1RSxrQkFBYSxHQUE0QixJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRSxxQkFBZ0IsR0FBNkMsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7S0FleEY7Ozs7O0lBYkMsVUFBVSxDQUFDLEVBQUU7UUFDWCxPQUFPLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUQsc0JBQXNCLENBQUMsRUFBRTtRQUN2QixPQUFPLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRUQsb0JBQW9CLENBQUMsRUFBRTtRQUNyQixPQUFPLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ25DLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLE1BQWMsSUFBRyxDQUFDO0lBQUEsQ0FBQzs7O1lBckI3QixVQUFVLFNBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDOzs7OztJQUU5QiwyQ0FBK0Q7O0lBQy9ELDBDQUE2RDs7SUFDN0QsNkNBQXFFOztJQUNyRSw4Q0FBNEU7O0lBQzVFLGdEQUFtRTs7SUFDbkUsbURBQXVGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBEaWN0aW9uYXJ5IH0gZnJvbSAnQG5ncngvZW50aXR5JztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGFmZkNvdW50cnkgfSBmcm9tICdAZGFmZm9kaWwvZ2VvZ3JhcGh5JztcbmltcG9ydCB7IERhZmZHZW9ncmFwaHlGYWNhZGVJbnRlcmZhY2UgfSBmcm9tICdAZGFmZm9kaWwvZ2VvZ3JhcGh5L3N0YXRlJztcblxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgTW9ja0RhZmZHZW9ncmFwaHlGYWNhZGUgaW1wbGVtZW50cyBEYWZmR2VvZ3JhcGh5RmFjYWRlSW50ZXJmYWNlIHtcbiAgbG9hZGluZyQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG4gIGVycm9ycyQ6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmdbXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcbiAgY291bnRyaWVzJDogQmVoYXZpb3JTdWJqZWN0PERhZmZDb3VudHJ5W10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG4gIGNvdW50cnlJZHMkOiBCZWhhdmlvclN1YmplY3Q8KHN0cmluZyB8IG51bWJlcilbXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcbiAgY291bnRyeUNvdW50JDogQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuICBjb3VudHJ5RW50aXRpZXMkOiBCZWhhdmlvclN1YmplY3Q8RGljdGlvbmFyeTxEYWZmQ291bnRyeT4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcblxuICBnZXRDb3VudHJ5KGlkKSB7XG4gICAgcmV0dXJuIG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG4gIH1cblxuICBnZXRDb3VudHJ5U3ViZGl2aXNpb25zKGlkKSB7XG4gICAgcmV0dXJuIG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuICB9XG5cbiAgaXNDb3VudHJ5RnVsbHlMb2FkZWQoaWQpIHtcbiAgICByZXR1cm4gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSlcbiAgfVxuXG4gIGRpc3BhdGNoKGFjdGlvbjogQWN0aW9uKSB7fTtcbn1cbiJdfQ==