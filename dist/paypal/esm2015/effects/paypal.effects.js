/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { DaffPaypalActionTypes, DaffGeneratePaypalExpressTokenSuccess, DaffGeneratePaypalExpressTokenFailure } from '../actions/paypal.actions';
import { DaffPaypalDriver } from '../drivers/injection-tokens/paypal-driver.token';
/**
 * @template T, V
 */
export class DaffPaypalEffects {
    /**
     * @param {?} actions$
     * @param {?} driver
     */
    constructor(actions$, driver) {
        this.actions$ = actions$;
        this.driver = driver;
        this.generatePaypalExpressToken$ = createEffect((/**
         * @return {?}
         */
        () => this.actions$.pipe(ofType(DaffPaypalActionTypes.GeneratePaypalExpressTokenAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => {
            return this.driver.generateToken(action.payload).pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            (resp) => {
                return new DaffGeneratePaypalExpressTokenSuccess(resp);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => {
                return of(new DaffGeneratePaypalExpressTokenFailure('Failed to retrieve token'));
            })));
        })))));
    }
}
DaffPaypalEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffPaypalEffects.ctorParameters = () => [
    { type: Actions },
    { type: undefined, decorators: [{ type: Inject, args: [DaffPaypalDriver,] }] }
];
if (false) {
    /** @type {?} */
    DaffPaypalEffects.prototype.generatePaypalExpressToken$;
    /**
     * @type {?}
     * @private
     */
    DaffPaypalEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffPaypalEffects.prototype.driver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvcGF5cGFsLyIsInNvdXJjZXMiOlsiZWZmZWN0cy9wYXlwYWwuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLEVBQUUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHNUQsT0FBTyxFQUNOLHFCQUFxQixFQUVyQixxQ0FBcUMsRUFDckMscUNBQXFDLEVBQ3JDLE1BQU0sMkJBQTJCLENBQUM7QUFFbkMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saURBQWlELENBQUM7Ozs7QUFLbkYsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7SUFFNUIsWUFDVSxRQUFpQixFQUNTLE1BQXdDO1FBRGxFLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDUyxXQUFNLEdBQU4sTUFBTSxDQUFrQztRQUU1RSxnQ0FBMkIsR0FBdUIsWUFBWTs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3JGLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxnQ0FBZ0MsQ0FBQyxFQUM5RCxTQUFTOzs7O1FBQUMsQ0FBQyxNQUF5QyxFQUFFLEVBQUU7WUFDekQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUNwRCxHQUFHOzs7O1lBQUMsQ0FBQyxJQUFPLEVBQUUsRUFBRTtnQkFDZixPQUFPLElBQUkscUNBQXFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEQsQ0FBQyxFQUFDLEVBQ0YsVUFBVTs7OztZQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNsQixPQUFPLEVBQUUsQ0FBQyxJQUFJLHFDQUFxQyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQztZQUNsRixDQUFDLEVBQUMsQ0FDRixDQUFBO1FBQ0YsQ0FBQyxFQUFDLENBQ0YsRUFBQyxDQUFDO0lBZDhFLENBQUM7OztZQUxsRixVQUFVOzs7O1lBZkYsT0FBTzs0Q0FvQlgsTUFBTSxTQUFDLGdCQUFnQjs7OztJQUUxQix3REFZRTs7Ozs7SUFmQSxxQ0FBeUI7Ozs7O0lBQ3pCLG1DQUEwRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgb2YsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFjdGlvbnMsIG9mVHlwZSwgY3JlYXRlRWZmZWN0IH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAsIG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgXG5cdERhZmZQYXlwYWxBY3Rpb25UeXBlcywgXG5cdERhZmZHZW5lcmF0ZVBheXBhbEV4cHJlc3NUb2tlbiwgXG5cdERhZmZHZW5lcmF0ZVBheXBhbEV4cHJlc3NUb2tlblN1Y2Nlc3MsXG5cdERhZmZHZW5lcmF0ZVBheXBhbEV4cHJlc3NUb2tlbkZhaWx1cmUgXG59IGZyb20gJy4uL2FjdGlvbnMvcGF5cGFsLmFjdGlvbnMnO1xuaW1wb3J0IHsgRGFmZlBheXBhbFNlcnZpY2VJbnRlcmZhY2UgfSBmcm9tICcuLi9kcml2ZXJzL2ludGVyZmFjZXMvcGF5cGFsLXNlcnZpY2UuaW50ZXJmYWNlJztcbmltcG9ydCB7IERhZmZQYXlwYWxEcml2ZXIgfSBmcm9tICcuLi9kcml2ZXJzL2luamVjdGlvbi10b2tlbnMvcGF5cGFsLWRyaXZlci50b2tlbic7XG5pbXBvcnQgeyBEYWZmUGF5cGFsVG9rZW5SZXF1ZXN0IH0gZnJvbSAnLi4vbW9kZWxzL3BheXBhbC10b2tlbi1yZXF1ZXN0JztcbmltcG9ydCB7IERhZmZQYXlwYWxUb2tlblJlc3BvbnNlIH0gZnJvbSAnLi4vbW9kZWxzL3BheXBhbC10b2tlbi1yZXNwb25zZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYWZmUGF5cGFsRWZmZWN0czxUIGV4dGVuZHMgRGFmZlBheXBhbFRva2VuUmVxdWVzdCwgViBleHRlbmRzIERhZmZQYXlwYWxUb2tlblJlc3BvbnNlPntcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIEBJbmplY3QoRGFmZlBheXBhbERyaXZlcikgcHJpdmF0ZSBkcml2ZXI6IERhZmZQYXlwYWxTZXJ2aWNlSW50ZXJmYWNlPFQsIFY+KSB7IH1cblxuICBnZW5lcmF0ZVBheXBhbEV4cHJlc3NUb2tlbiQ6IE9ic2VydmFibGU8QWN0aW9uPiA9IGNyZWF0ZUVmZmVjdCgoKSA9PiB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERhZmZQYXlwYWxBY3Rpb25UeXBlcy5HZW5lcmF0ZVBheXBhbEV4cHJlc3NUb2tlbkFjdGlvbiksXG4gICAgc3dpdGNoTWFwKChhY3Rpb246IERhZmZHZW5lcmF0ZVBheXBhbEV4cHJlc3NUb2tlbjxUPikgPT4ge1xuXHRcdFx0cmV0dXJuIHRoaXMuZHJpdmVyLmdlbmVyYXRlVG9rZW4oYWN0aW9uLnBheWxvYWQpLnBpcGUoXG5cdFx0XHRcdG1hcCgocmVzcDogVikgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBuZXcgRGFmZkdlbmVyYXRlUGF5cGFsRXhwcmVzc1Rva2VuU3VjY2VzcyhyZXNwKTtcblx0XHRcdFx0fSksXG5cdFx0XHRcdGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBvZihuZXcgRGFmZkdlbmVyYXRlUGF5cGFsRXhwcmVzc1Rva2VuRmFpbHVyZSgnRmFpbGVkIHRvIHJldHJpZXZlIHRva2VuJykpO1xuXHRcdFx0XHR9KVxuXHRcdFx0KVxuXHRcdH0pXG5cdCkpO1xufSJdfQ==