var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DaffGeographyDriver } from '@daffodil/geography/driver';
import { DaffGeographyActionTypes, DaffCountryLoadSuccess, DaffCountryLoadFailure, DaffCountryListSuccess, DaffCountryListFailure, } from '../actions/public_api';
/**
 * @template T
 */
var DaffGeographyEffects = /** @class */ (function () {
    function DaffGeographyEffects(actions$, driver) {
        var _this = this;
        this.actions$ = actions$;
        this.driver = driver;
        this.get$ = this.actions$.pipe(ofType(DaffGeographyActionTypes.CountryLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return _this.driver.get(action.payload).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) { return new DaffCountryLoadSuccess(resp); })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return of(new DaffCountryLoadFailure('Failed to load country')); }))); })));
        this.list$ = this.actions$.pipe(ofType(DaffGeographyActionTypes.CountryListAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return _this.driver.list().pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) { return new DaffCountryListSuccess(resp); })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return of(new DaffCountryListFailure('Failed to list the countries')); }))); })));
    }
    DaffGeographyEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffGeographyEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: undefined, decorators: [{ type: Inject, args: [DaffGeographyDriver,] }] }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], DaffGeographyEffects.prototype, "get$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], DaffGeographyEffects.prototype, "list$", void 0);
    return DaffGeographyEffects;
}());
export { DaffGeographyEffects };
if (false) {
    /** @type {?} */
    DaffGeographyEffects.prototype.get$;
    /** @type {?} */
    DaffGeographyEffects.prototype.list$;
    /**
     * @type {?}
     * @private
     */
    DaffGeographyEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffGeographyEffects.prototype.driver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvZ3JhcGh5LmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvZ2VvZ3JhcGh5L3N0YXRlLyIsInNvdXJjZXMiOlsiZWZmZWN0cy9nZW9ncmFwaHkuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHeEQsT0FBTyxFQUFpQyxtQkFBbUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRWhHLE9BQU8sRUFDTCx3QkFBd0IsRUFFeEIsc0JBQXNCLEVBQ3RCLHNCQUFzQixFQUV0QixzQkFBc0IsRUFDdEIsc0JBQXNCLEdBQ3ZCLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFFL0I7SUFFRSw4QkFDVSxRQUFpQixFQUNZLE1BQXdDO1FBRi9FLGlCQUdJO1FBRk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNZLFdBQU0sR0FBTixNQUFNLENBQWtDO1FBSS9FLFNBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDdkIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLGlCQUFpQixDQUFDLEVBQ2xELFNBQVM7Ozs7UUFBQyxVQUFDLE1BQTBCLElBQUssT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUM1RSxHQUFHOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLHNCQUFzQixDQUFDLElBQUksQ0FBQyxFQUFoQyxDQUFnQyxFQUFDLEVBQzdDLFVBQVU7Ozs7UUFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEVBQUUsQ0FBQyxJQUFJLHNCQUFzQixDQUFDLHdCQUF3QixDQUFDLENBQUMsRUFBeEQsQ0FBd0QsRUFBQyxDQUM5RSxFQUh5QyxDQUd6QyxFQUFDLENBQ0gsQ0FBQTtRQUdELFVBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDeEIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLGlCQUFpQixDQUFDLEVBQ2xELFNBQVM7Ozs7UUFBQyxVQUFDLE1BQXVCLElBQUssT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FDNUQsR0FBRzs7OztRQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsRUFBaEMsQ0FBZ0MsRUFBQyxFQUM3QyxVQUFVOzs7O1FBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxFQUFFLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLEVBQTlELENBQThELEVBQUMsQ0FDcEYsRUFIc0MsQ0FHdEMsRUFBQyxDQUNILENBQUE7SUFsQkUsQ0FBQzs7Z0JBTEwsVUFBVTs7OztnQkFmRixPQUFPO2dEQW1CWCxNQUFNLFNBQUMsbUJBQW1COztJQUk3QjtRQURDLE1BQU0sRUFBRTs7c0RBT1I7SUFHRDtRQURDLE1BQU0sRUFBRTs7dURBT1I7SUFDSCwyQkFBQztDQUFBLEFBeEJELElBd0JDO1NBdkJZLG9CQUFvQjs7O0lBTS9CLG9DQU9DOztJQUVELHFDQU9DOzs7OztJQXBCQyx3Q0FBeUI7Ozs7O0lBQ3pCLHNDQUE2RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc3dpdGNoTWFwLCBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcblxuaW1wb3J0IHsgRGFmZkNvdW50cnkgfSBmcm9tICdAZGFmZm9kaWwvZ2VvZ3JhcGh5JztcbmltcG9ydCB7IERhZmZHZW9ncmFwaHlTZXJ2aWNlSW50ZXJmYWNlLCBEYWZmR2VvZ3JhcGh5RHJpdmVyIH0gZnJvbSAnQGRhZmZvZGlsL2dlb2dyYXBoeS9kcml2ZXInO1xuXG5pbXBvcnQge1xuICBEYWZmR2VvZ3JhcGh5QWN0aW9uVHlwZXMsXG4gIERhZmZDb3VudHJ5TG9hZCxcbiAgRGFmZkNvdW50cnlMb2FkU3VjY2VzcyxcbiAgRGFmZkNvdW50cnlMb2FkRmFpbHVyZSxcbiAgRGFmZkNvdW50cnlMaXN0LFxuICBEYWZmQ291bnRyeUxpc3RTdWNjZXNzLFxuICBEYWZmQ291bnRyeUxpc3RGYWlsdXJlLFxufSBmcm9tICcuLi9hY3Rpb25zL3B1YmxpY19hcGknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGFmZkdlb2dyYXBoeUVmZmVjdHM8VCBleHRlbmRzIERhZmZDb3VudHJ5PiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgQEluamVjdChEYWZmR2VvZ3JhcGh5RHJpdmVyKSBwcml2YXRlIGRyaXZlcjogRGFmZkdlb2dyYXBoeVNlcnZpY2VJbnRlcmZhY2U8VD4sXG4gICkge31cblxuICBARWZmZWN0KClcbiAgZ2V0JCA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGFmZkdlb2dyYXBoeUFjdGlvblR5cGVzLkNvdW50cnlMb2FkQWN0aW9uKSxcbiAgICBzd2l0Y2hNYXAoKGFjdGlvbjogRGFmZkNvdW50cnlMb2FkPFQ+KSA9PiB0aGlzLmRyaXZlci5nZXQoYWN0aW9uLnBheWxvYWQpLnBpcGUoXG4gICAgICBtYXAocmVzcCA9PiBuZXcgRGFmZkNvdW50cnlMb2FkU3VjY2VzcyhyZXNwKSksXG4gICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBEYWZmQ291bnRyeUxvYWRGYWlsdXJlKCdGYWlsZWQgdG8gbG9hZCBjb3VudHJ5JykpKVxuICAgICkpLFxuICApXG5cbiAgQEVmZmVjdCgpXG4gIGxpc3QkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEYWZmR2VvZ3JhcGh5QWN0aW9uVHlwZXMuQ291bnRyeUxpc3RBY3Rpb24pLFxuICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBEYWZmQ291bnRyeUxpc3QpID0+IHRoaXMuZHJpdmVyLmxpc3QoKS5waXBlKFxuICAgICAgbWFwKHJlc3AgPT4gbmV3IERhZmZDb3VudHJ5TGlzdFN1Y2Nlc3MocmVzcCkpLFxuICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgRGFmZkNvdW50cnlMaXN0RmFpbHVyZSgnRmFpbGVkIHRvIGxpc3QgdGhlIGNvdW50cmllcycpKSlcbiAgICApKVxuICApXG59XG4iXX0=