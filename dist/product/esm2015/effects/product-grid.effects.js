/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DaffProductGridActionTypes, DaffProductGridLoadSuccess, DaffProductGridLoadFailure } from '../actions/product-grid.actions';
import { DaffProductDriver } from '../drivers/injection-tokens/product-driver.token';
/**
 * Effects for handling product grid actions and for triggering corresponding service requests.
 *
 * @param action$ - Redux action object
 * @param driver - A product service driver
 * @template T
 */
export class DaffProductGridEffects {
    /**
     * @param {?} actions$
     * @param {?} driver
     */
    constructor(actions$, driver) {
        this.actions$ = actions$;
        this.driver = driver;
        /**
         * Handles ProductGridLoadAction by making a service call for products and returning a success or failure action
         * to the action stream.
         *
         * @return An Observable of a DaffProductGridAction
         */
        this.loadAll$ = this.actions$.pipe(ofType(DaffProductGridActionTypes.ProductGridLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.getAll()
            .pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => {
            return new DaffProductGridLoadSuccess(resp);
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => {
            return of(new DaffProductGridLoadFailure('Failed to load product grid'));
        }))))));
    }
}
DaffProductGridEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffProductGridEffects.ctorParameters = () => [
    { type: Actions },
    { type: undefined, decorators: [{ type: Inject, args: [DaffProductDriver,] }] }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], DaffProductGridEffects.prototype, "loadAll$", void 0);
if (false) {
    /**
     * Handles ProductGridLoadAction by making a service call for products and returning a success or failure action
     * to the action stream.
     *
     * \@return An Observable of a DaffProductGridAction
     * @type {?}
     */
    DaffProductGridEffects.prototype.loadAll$;
    /**
     * @type {?}
     * @private
     */
    DaffProductGridEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffProductGridEffects.prototype.driver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1ncmlkLmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvcHJvZHVjdC8iLCJzb3VyY2VzIjpbImVmZmVjdHMvcHJvZHVjdC1ncmlkLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsRUFBRSxFQUFJLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN4QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxFQUNMLDBCQUEwQixFQUUxQiwwQkFBMEIsRUFDMUIsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUV0RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQzs7Ozs7Ozs7QUFXckYsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7SUFFakMsWUFDVSxRQUFpQixFQUNVLE1BQXNDO1FBRGpFLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDVSxXQUFNLEdBQU4sTUFBTSxDQUFnQzs7Ozs7OztRQVMzRSxhQUFRLEdBQXFCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUM3QyxNQUFNLENBQUMsMEJBQTBCLENBQUMscUJBQXFCLENBQUMsRUFDeEQsU0FBUzs7OztRQUFDLENBQUMsTUFBMkIsRUFBRSxFQUFFLENBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO2FBQ2pCLElBQUksQ0FDSCxHQUFHOzs7O1FBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNYLE9BQU8sSUFBSSwwQkFBMEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxDQUFDLEVBQUMsRUFDRixVQUFVOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUU7WUFDakIsT0FBTyxFQUFFLENBQUMsSUFBSSwwQkFBMEIsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7UUFDM0UsQ0FBQyxFQUFDLENBQ0gsRUFDSixDQUNGLENBQUE7SUF0QjRFLENBQUM7OztZQUwvRSxVQUFVOzs7O1lBbEJGLE9BQU87NENBdUJYLE1BQU0sU0FBQyxpQkFBaUI7O0FBUzNCO0lBREMsTUFBTSxFQUFFO3NDQUNFLFVBQVU7d0RBYXBCOzs7Ozs7Ozs7SUFkRCwwQ0FjQzs7Ozs7SUF2QkMsMENBQXlCOzs7OztJQUN6Qix3Q0FBeUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHN3aXRjaE1hcCwgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgb2YgLCAgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcblxuaW1wb3J0IHsgXG4gIERhZmZQcm9kdWN0R3JpZEFjdGlvblR5cGVzLCBcbiAgRGFmZlByb2R1Y3RHcmlkTG9hZCwgXG4gIERhZmZQcm9kdWN0R3JpZExvYWRTdWNjZXNzLCBcbiAgRGFmZlByb2R1Y3RHcmlkTG9hZEZhaWx1cmUgfSBmcm9tICcuLi9hY3Rpb25zL3Byb2R1Y3QtZ3JpZC5hY3Rpb25zJztcbmltcG9ydCB7IERhZmZQcm9kdWN0U2VydmljZUludGVyZmFjZSB9IGZyb20gJy4uL2RyaXZlcnMvaW50ZXJmYWNlcy9wcm9kdWN0LXNlcnZpY2UuaW50ZXJmYWNlJztcbmltcG9ydCB7IERhZmZQcm9kdWN0RHJpdmVyIH0gZnJvbSAnLi4vZHJpdmVycy9pbmplY3Rpb24tdG9rZW5zL3Byb2R1Y3QtZHJpdmVyLnRva2VuJztcblxuaW1wb3J0IHsgRGFmZlByb2R1Y3QgfSBmcm9tICcuLi9tb2RlbHMvcHJvZHVjdCc7XG5cbi8qKlxuICogRWZmZWN0cyBmb3IgaGFuZGxpbmcgcHJvZHVjdCBncmlkIGFjdGlvbnMgYW5kIGZvciB0cmlnZ2VyaW5nIGNvcnJlc3BvbmRpbmcgc2VydmljZSByZXF1ZXN0cy5cbiAqIFxuICogQHBhcmFtIGFjdGlvbiQgLSBSZWR1eCBhY3Rpb24gb2JqZWN0XG4gKiBAcGFyYW0gZHJpdmVyIC0gQSBwcm9kdWN0IHNlcnZpY2UgZHJpdmVyXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYWZmUHJvZHVjdEdyaWRFZmZlY3RzPFQgZXh0ZW5kcyBEYWZmUHJvZHVjdD4ge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgQEluamVjdChEYWZmUHJvZHVjdERyaXZlcikgcHJpdmF0ZSBkcml2ZXI6IERhZmZQcm9kdWN0U2VydmljZUludGVyZmFjZTxUPil7fVxuICBcbiAgLyoqXG4gICAqIEhhbmRsZXMgUHJvZHVjdEdyaWRMb2FkQWN0aW9uIGJ5IG1ha2luZyBhIHNlcnZpY2UgY2FsbCBmb3IgcHJvZHVjdHMgYW5kIHJldHVybmluZyBhIHN1Y2Nlc3Mgb3IgZmFpbHVyZSBhY3Rpb25cbiAgICogdG8gdGhlIGFjdGlvbiBzdHJlYW0uXG4gICAqIFxuICAgKiBAcmV0dXJucyBBbiBPYnNlcnZhYmxlIG9mIGEgRGFmZlByb2R1Y3RHcmlkQWN0aW9uXG4gICAqL1xuICBARWZmZWN0KClcbiAgbG9hZEFsbCQgOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERhZmZQcm9kdWN0R3JpZEFjdGlvblR5cGVzLlByb2R1Y3RHcmlkTG9hZEFjdGlvbiksXG4gICAgc3dpdGNoTWFwKChhY3Rpb246IERhZmZQcm9kdWN0R3JpZExvYWQpID0+XG4gICAgICB0aGlzLmRyaXZlci5nZXRBbGwoKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKHJlc3ApID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGFmZlByb2R1Y3RHcmlkTG9hZFN1Y2Nlc3MocmVzcCk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgICByZXR1cm4gb2YobmV3IERhZmZQcm9kdWN0R3JpZExvYWRGYWlsdXJlKCdGYWlsZWQgdG8gbG9hZCBwcm9kdWN0IGdyaWQnKSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgIClcbiAgKVxufVxuIl19