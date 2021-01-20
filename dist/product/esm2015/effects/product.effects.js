/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { DaffProductActionTypes, DaffProductLoadSuccess, DaffProductLoadFailure } from '../actions/product.actions';
import { DaffProductDriver } from '../drivers/injection-tokens/product-driver.token';
/**
 * Effects for handling product actions and for triggering corresponding service requests.
 *
 * @param action$ - Redux action object
 * @param driver - A product service driver
 * @template T
 */
export class DaffProductEffects {
    /**
     * @param {?} actions$
     * @param {?} driver
     */
    constructor(actions$, driver) {
        this.actions$ = actions$;
        this.driver = driver;
        /**
         * Handles ProductLoadAction by making a service call for a product and returning a success or
         * failure action to the action stream.
         *
         * @return An Observable of a ProductLoadAction
         */
        this.load$ = this.actions$.pipe(ofType(DaffProductActionTypes.ProductLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.get(action.payload)
            .pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => {
            return new DaffProductLoadSuccess(resp);
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => {
            return of(new DaffProductLoadFailure('Failed to load product'));
        }))))));
    }
}
DaffProductEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffProductEffects.ctorParameters = () => [
    { type: Actions },
    { type: undefined, decorators: [{ type: Inject, args: [DaffProductDriver,] }] }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], DaffProductEffects.prototype, "load$", void 0);
if (false) {
    /**
     * Handles ProductLoadAction by making a service call for a product and returning a success or
     * failure action to the action stream.
     *
     * \@return An Observable of a ProductLoadAction
     * @type {?}
     */
    DaffProductEffects.prototype.load$;
    /**
     * @type {?}
     * @private
     */
    DaffProductEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffProductEffects.prototype.driver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3Byb2R1Y3QvIiwic291cmNlcyI6WyJlZmZlY3RzL3Byb2R1Y3QuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RCxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsRUFBRSxFQUFJLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV4QyxPQUFPLEVBQ0wsc0JBQXNCLEVBRXRCLHNCQUFzQixFQUN0QixzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDOzs7Ozs7OztBQVdyRixNQUFNLE9BQU8sa0JBQWtCOzs7OztJQUU3QixZQUNVLFFBQWlCLEVBQ1UsTUFBc0M7UUFEakUsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNVLFdBQU0sR0FBTixNQUFNLENBQWdDOzs7Ozs7O1FBUzNFLFVBQUssR0FBcUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxpQkFBaUIsQ0FBQyxFQUNoRCxTQUFTOzs7O1FBQUMsQ0FBQyxNQUF1QixFQUFFLEVBQUUsQ0FDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQzthQUM1QixJQUFJLENBQ0gsR0FBRzs7OztRQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDWCxPQUFPLElBQUksc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxFQUFDLEVBQ0YsVUFBVTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pCLE9BQU8sRUFBRSxDQUFDLElBQUksc0JBQXNCLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLENBQUMsRUFBQyxDQUNILEVBQ0osQ0FDRixDQUFBO0lBdEI0RSxDQUFDOzs7WUFML0UsVUFBVTs7OztZQXBCRixPQUFPOzRDQXlCWCxNQUFNLFNBQUMsaUJBQWlCOztBQVMzQjtJQURDLE1BQU0sRUFBRTtzQ0FDRCxVQUFVO2lEQWFqQjs7Ozs7Ozs7O0lBZEQsbUNBY0M7Ozs7O0lBdkJDLHNDQUF5Qjs7Ozs7SUFDekIsb0NBQXlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5cbmltcG9ydCB7IHN3aXRjaE1hcCwgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgb2YgLCAgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBcbiAgRGFmZlByb2R1Y3RBY3Rpb25UeXBlcywgXG4gIERhZmZQcm9kdWN0TG9hZCwgXG4gIERhZmZQcm9kdWN0TG9hZFN1Y2Nlc3MsIFxuICBEYWZmUHJvZHVjdExvYWRGYWlsdXJlIH0gZnJvbSAnLi4vYWN0aW9ucy9wcm9kdWN0LmFjdGlvbnMnO1xuaW1wb3J0IHsgRGFmZlByb2R1Y3REcml2ZXIgfSBmcm9tICcuLi9kcml2ZXJzL2luamVjdGlvbi10b2tlbnMvcHJvZHVjdC1kcml2ZXIudG9rZW4nO1xuaW1wb3J0IHsgRGFmZlByb2R1Y3RTZXJ2aWNlSW50ZXJmYWNlIH0gZnJvbSAnLi4vZHJpdmVycy9pbnRlcmZhY2VzL3Byb2R1Y3Qtc2VydmljZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGFmZlByb2R1Y3QgfSBmcm9tICcuLi9tb2RlbHMvcHJvZHVjdCc7XG5cbi8qKlxuICogRWZmZWN0cyBmb3IgaGFuZGxpbmcgcHJvZHVjdCBhY3Rpb25zIGFuZCBmb3IgdHJpZ2dlcmluZyBjb3JyZXNwb25kaW5nIHNlcnZpY2UgcmVxdWVzdHMuXG4gKiBcbiAqIEBwYXJhbSBhY3Rpb24kIC0gUmVkdXggYWN0aW9uIG9iamVjdFxuICogQHBhcmFtIGRyaXZlciAtIEEgcHJvZHVjdCBzZXJ2aWNlIGRyaXZlclxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGFmZlByb2R1Y3RFZmZlY3RzPFQgZXh0ZW5kcyBEYWZmUHJvZHVjdD4ge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgQEluamVjdChEYWZmUHJvZHVjdERyaXZlcikgcHJpdmF0ZSBkcml2ZXI6IERhZmZQcm9kdWN0U2VydmljZUludGVyZmFjZTxUPil7fVxuXG4gIC8qKlxuICAqIEhhbmRsZXMgUHJvZHVjdExvYWRBY3Rpb24gYnkgbWFraW5nIGEgc2VydmljZSBjYWxsIGZvciBhIHByb2R1Y3QgYW5kIHJldHVybmluZyBhIHN1Y2Nlc3Mgb3IgXG4gICogZmFpbHVyZSBhY3Rpb24gdG8gdGhlIGFjdGlvbiBzdHJlYW0uXG4gICogXG4gICogQHJldHVybnMgQW4gT2JzZXJ2YWJsZSBvZiBhIFByb2R1Y3RMb2FkQWN0aW9uXG4gICovXG4gIEBFZmZlY3QoKVxuICBsb2FkJCA6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGFmZlByb2R1Y3RBY3Rpb25UeXBlcy5Qcm9kdWN0TG9hZEFjdGlvbiksXG4gICAgc3dpdGNoTWFwKChhY3Rpb246IERhZmZQcm9kdWN0TG9hZCkgPT5cbiAgICAgIHRoaXMuZHJpdmVyLmdldChhY3Rpb24ucGF5bG9hZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChyZXNwKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERhZmZQcm9kdWN0TG9hZFN1Y2Nlc3MocmVzcCk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgICByZXR1cm4gb2YobmV3IERhZmZQcm9kdWN0TG9hZEZhaWx1cmUoJ0ZhaWxlZCB0byBsb2FkIHByb2R1Y3QnKSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgIClcbiAgKVxufVxuIl19