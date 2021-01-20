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
export class DaffGeographyEffects {
    /**
     * @param {?} actions$
     * @param {?} driver
     */
    constructor(actions$, driver) {
        this.actions$ = actions$;
        this.driver = driver;
        this.get$ = this.actions$.pipe(ofType(DaffGeographyActionTypes.CountryLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.get(action.payload).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        resp => new DaffCountryLoadSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffCountryLoadFailure('Failed to load country'))))))));
        this.list$ = this.actions$.pipe(ofType(DaffGeographyActionTypes.CountryListAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.list().pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        resp => new DaffCountryListSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffCountryListFailure('Failed to list the countries'))))))));
    }
}
DaffGeographyEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffGeographyEffects.ctorParameters = () => [
    { type: Actions },
    { type: undefined, decorators: [{ type: Inject, args: [DaffGeographyDriver,] }] }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], DaffGeographyEffects.prototype, "get$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], DaffGeographyEffects.prototype, "list$", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvZ3JhcGh5LmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvZ2VvZ3JhcGh5L3N0YXRlLyIsInNvdXJjZXMiOlsiZWZmZWN0cy9nZW9ncmFwaHkuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHeEQsT0FBTyxFQUFpQyxtQkFBbUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRWhHLE9BQU8sRUFDTCx3QkFBd0IsRUFFeEIsc0JBQXNCLEVBQ3RCLHNCQUFzQixFQUV0QixzQkFBc0IsRUFDdEIsc0JBQXNCLEdBQ3ZCLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFHL0IsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7SUFDL0IsWUFDVSxRQUFpQixFQUNZLE1BQXdDO1FBRHJFLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDWSxXQUFNLEdBQU4sTUFBTSxDQUFrQztRQUkvRSxTQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3ZCLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxpQkFBaUIsQ0FBQyxFQUNsRCxTQUFTOzs7O1FBQUMsQ0FBQyxNQUEwQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUM1RSxHQUFHOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLHNCQUFzQixDQUFDLElBQUksQ0FBQyxFQUFDLEVBQzdDLFVBQVU7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLHNCQUFzQixDQUFDLHdCQUF3QixDQUFDLENBQUMsRUFBQyxDQUM5RSxFQUFDLENBQ0gsQ0FBQTtRQUdELFVBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDeEIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLGlCQUFpQixDQUFDLEVBQ2xELFNBQVM7Ozs7UUFBQyxDQUFDLE1BQXVCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUM1RCxHQUFHOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLHNCQUFzQixDQUFDLElBQUksQ0FBQyxFQUFDLEVBQzdDLFVBQVU7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLHNCQUFzQixDQUFDLDhCQUE4QixDQUFDLENBQUMsRUFBQyxDQUNwRixFQUFDLENBQ0gsQ0FBQTtJQWxCRSxDQUFDOzs7WUFMTCxVQUFVOzs7O1lBZkYsT0FBTzs0Q0FtQlgsTUFBTSxTQUFDLG1CQUFtQjs7QUFJN0I7SUFEQyxNQUFNLEVBQUU7O2tEQU9SO0FBR0Q7SUFEQyxNQUFNLEVBQUU7O21EQU9SOzs7SUFoQkQsb0NBT0M7O0lBRUQscUNBT0M7Ozs7O0lBcEJDLHdDQUF5Qjs7Ozs7SUFDekIsc0NBQTZFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAsIG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBEYWZmQ291bnRyeSB9IGZyb20gJ0BkYWZmb2RpbC9nZW9ncmFwaHknO1xuaW1wb3J0IHsgRGFmZkdlb2dyYXBoeVNlcnZpY2VJbnRlcmZhY2UsIERhZmZHZW9ncmFwaHlEcml2ZXIgfSBmcm9tICdAZGFmZm9kaWwvZ2VvZ3JhcGh5L2RyaXZlcic7XG5cbmltcG9ydCB7XG4gIERhZmZHZW9ncmFwaHlBY3Rpb25UeXBlcyxcbiAgRGFmZkNvdW50cnlMb2FkLFxuICBEYWZmQ291bnRyeUxvYWRTdWNjZXNzLFxuICBEYWZmQ291bnRyeUxvYWRGYWlsdXJlLFxuICBEYWZmQ291bnRyeUxpc3QsXG4gIERhZmZDb3VudHJ5TGlzdFN1Y2Nlc3MsXG4gIERhZmZDb3VudHJ5TGlzdEZhaWx1cmUsXG59IGZyb20gJy4uL2FjdGlvbnMvcHVibGljX2FwaSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYWZmR2VvZ3JhcGh5RWZmZWN0czxUIGV4dGVuZHMgRGFmZkNvdW50cnk+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBASW5qZWN0KERhZmZHZW9ncmFwaHlEcml2ZXIpIHByaXZhdGUgZHJpdmVyOiBEYWZmR2VvZ3JhcGh5U2VydmljZUludGVyZmFjZTxUPixcbiAgKSB7fVxuXG4gIEBFZmZlY3QoKVxuICBnZXQkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEYWZmR2VvZ3JhcGh5QWN0aW9uVHlwZXMuQ291bnRyeUxvYWRBY3Rpb24pLFxuICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBEYWZmQ291bnRyeUxvYWQ8VD4pID0+IHRoaXMuZHJpdmVyLmdldChhY3Rpb24ucGF5bG9hZCkucGlwZShcbiAgICAgIG1hcChyZXNwID0+IG5ldyBEYWZmQ291bnRyeUxvYWRTdWNjZXNzKHJlc3ApKSxcbiAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IERhZmZDb3VudHJ5TG9hZEZhaWx1cmUoJ0ZhaWxlZCB0byBsb2FkIGNvdW50cnknKSkpXG4gICAgKSksXG4gIClcblxuICBARWZmZWN0KClcbiAgbGlzdCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERhZmZHZW9ncmFwaHlBY3Rpb25UeXBlcy5Db3VudHJ5TGlzdEFjdGlvbiksXG4gICAgc3dpdGNoTWFwKChhY3Rpb246IERhZmZDb3VudHJ5TGlzdCkgPT4gdGhpcy5kcml2ZXIubGlzdCgpLnBpcGUoXG4gICAgICBtYXAocmVzcCA9PiBuZXcgRGFmZkNvdW50cnlMaXN0U3VjY2VzcyhyZXNwKSksXG4gICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBEYWZmQ291bnRyeUxpc3RGYWlsdXJlKCdGYWlsZWQgdG8gbGlzdCB0aGUgY291bnRyaWVzJykpKVxuICAgICkpXG4gIClcbn1cbiJdfQ==