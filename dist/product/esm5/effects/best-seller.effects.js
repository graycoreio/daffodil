/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { DaffBestSellersActionTypes, DaffBestSellersLoadSuccess, DaffBestSellersLoadFailure } from '../actions/best-sellers.actions';
import { DaffProductDriver } from '../drivers/injection-tokens/product-driver.token';
/**
 * Effects for handling best seller actions and best seller service requests.
 *
 * @param action$ - Redux action object
 * @param driver - A product service driver
 * @template T
 */
var DaffBestSellersEffects = /** @class */ (function () {
    function DaffBestSellersEffects(actions$, driver) {
        var _this = this;
        this.actions$ = actions$;
        this.driver = driver;
        /**
         * Handles BestSellersLoadAction by making a service call for best selling products and returning a success or failure action
         * to the action stream.
         *
         * @return An Observable of a BestSellersLoad action
         */
        this.loadBestSellers$ = this.actions$.pipe(ofType(DaffBestSellersActionTypes.BestSellersLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.getBestSellers()
                .pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) {
                return new DaffBestSellersLoadSuccess(resp);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new DaffBestSellersLoadFailure('Failed to load best selling products'));
            })));
        })));
    }
    DaffBestSellersEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffBestSellersEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: undefined, decorators: [{ type: Inject, args: [DaffProductDriver,] }] }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], DaffBestSellersEffects.prototype, "loadBestSellers$", void 0);
    return DaffBestSellersEffects;
}());
export { DaffBestSellersEffects };
if (false) {
    /**
     * Handles BestSellersLoadAction by making a service call for best selling products and returning a success or failure action
     * to the action stream.
     *
     * \@return An Observable of a BestSellersLoad action
     * @type {?}
     */
    DaffBestSellersEffects.prototype.loadBestSellers$;
    /**
     * @type {?}
     * @private
     */
    DaffBestSellersEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffBestSellersEffects.prototype.driver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVzdC1zZWxsZXIuZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9wcm9kdWN0LyIsInNvdXJjZXMiOlsiZWZmZWN0cy9iZXN0LXNlbGxlci5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBSSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDeEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVELE9BQU8sRUFDTCwwQkFBMEIsRUFFMUIsMEJBQTBCLEVBQzFCLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0RBQWtELENBQUM7Ozs7Ozs7O0FBVXJGO0lBR0UsZ0NBQ1UsUUFBaUIsRUFDVSxNQUFzQztRQUYzRSxpQkFFOEU7UUFEcEUsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNVLFdBQU0sR0FBTixNQUFNLENBQWdDOzs7Ozs7O1FBUzNFLHFCQUFnQixHQUFxQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDckQsTUFBTSxDQUFDLDBCQUEwQixDQUFDLHFCQUFxQixDQUFDLEVBQ3hELFNBQVM7Ozs7UUFBQyxVQUFDLE1BQTJCO1lBQ3BDLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUU7aUJBQ3pCLElBQUksQ0FDSCxHQUFHOzs7O1lBQUMsVUFBQyxJQUFJO2dCQUNQLE9BQU8sSUFBSSwwQkFBMEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5QyxDQUFDLEVBQUMsRUFDRixVQUFVOzs7O1lBQUMsVUFBQSxLQUFLO2dCQUNkLE9BQU8sRUFBRSxDQUFDLElBQUksMEJBQTBCLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxDQUFDO1lBQ3BGLENBQUMsRUFBQyxDQUNIO1FBUkgsQ0FRRyxFQUNKLENBQ0YsQ0FBQTtJQXRCNEUsQ0FBQzs7Z0JBTC9FLFVBQVU7Ozs7Z0JBbEJGLE9BQU87Z0RBdUJYLE1BQU0sU0FBQyxpQkFBaUI7O0lBUzNCO1FBREMsTUFBTSxFQUFFOzBDQUNVLFVBQVU7b0VBYTVCO0lBQ0gsNkJBQUM7Q0FBQSxBQTVCRCxJQTRCQztTQTNCWSxzQkFBc0I7Ozs7Ozs7OztJQVlqQyxrREFjQzs7Ozs7SUF2QkMsMENBQXlCOzs7OztJQUN6Qix3Q0FBeUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgLCAgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAsIG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgXG4gIERhZmZCZXN0U2VsbGVyc0FjdGlvblR5cGVzLCBcbiAgRGFmZkJlc3RTZWxsZXJzTG9hZCwgXG4gIERhZmZCZXN0U2VsbGVyc0xvYWRTdWNjZXNzLCBcbiAgRGFmZkJlc3RTZWxsZXJzTG9hZEZhaWx1cmUgfSBmcm9tICcuLi9hY3Rpb25zL2Jlc3Qtc2VsbGVycy5hY3Rpb25zJztcbmltcG9ydCB7IERhZmZQcm9kdWN0RHJpdmVyIH0gZnJvbSAnLi4vZHJpdmVycy9pbmplY3Rpb24tdG9rZW5zL3Byb2R1Y3QtZHJpdmVyLnRva2VuJztcbmltcG9ydCB7IERhZmZQcm9kdWN0U2VydmljZUludGVyZmFjZSB9IGZyb20gJy4uL2RyaXZlcnMvaW50ZXJmYWNlcy9wcm9kdWN0LXNlcnZpY2UuaW50ZXJmYWNlJztcbmltcG9ydCB7IERhZmZQcm9kdWN0IH0gZnJvbSAnLi4vbW9kZWxzL3Byb2R1Y3QnO1xuXG4vKipcbiAqIEVmZmVjdHMgZm9yIGhhbmRsaW5nIGJlc3Qgc2VsbGVyIGFjdGlvbnMgYW5kIGJlc3Qgc2VsbGVyIHNlcnZpY2UgcmVxdWVzdHMuXG4gKiBcbiAqIEBwYXJhbSBhY3Rpb24kIC0gUmVkdXggYWN0aW9uIG9iamVjdFxuICogQHBhcmFtIGRyaXZlciAtIEEgcHJvZHVjdCBzZXJ2aWNlIGRyaXZlclxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGFmZkJlc3RTZWxsZXJzRWZmZWN0czxUIGV4dGVuZHMgRGFmZlByb2R1Y3Q+IHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIEBJbmplY3QoRGFmZlByb2R1Y3REcml2ZXIpIHByaXZhdGUgZHJpdmVyOiBEYWZmUHJvZHVjdFNlcnZpY2VJbnRlcmZhY2U8VD4pe31cblxuICAvKipcbiAgICogSGFuZGxlcyBCZXN0U2VsbGVyc0xvYWRBY3Rpb24gYnkgbWFraW5nIGEgc2VydmljZSBjYWxsIGZvciBiZXN0IHNlbGxpbmcgcHJvZHVjdHMgYW5kIHJldHVybmluZyBhIHN1Y2Nlc3Mgb3IgZmFpbHVyZSBhY3Rpb25cbiAgICogdG8gdGhlIGFjdGlvbiBzdHJlYW0uXG4gICAqIFxuICAgKiBAcmV0dXJucyBBbiBPYnNlcnZhYmxlIG9mIGEgQmVzdFNlbGxlcnNMb2FkIGFjdGlvblxuICAgKi9cbiAgQEVmZmVjdCgpXG4gIGxvYWRCZXN0U2VsbGVycyQgOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERhZmZCZXN0U2VsbGVyc0FjdGlvblR5cGVzLkJlc3RTZWxsZXJzTG9hZEFjdGlvbiksXG4gICAgc3dpdGNoTWFwKChhY3Rpb246IERhZmZCZXN0U2VsbGVyc0xvYWQpID0+XG4gICAgICB0aGlzLmRyaXZlci5nZXRCZXN0U2VsbGVycygpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgocmVzcCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYWZmQmVzdFNlbGxlcnNMb2FkU3VjY2VzcyhyZXNwKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvZihuZXcgRGFmZkJlc3RTZWxsZXJzTG9hZEZhaWx1cmUoJ0ZhaWxlZCB0byBsb2FkIGJlc3Qgc2VsbGluZyBwcm9kdWN0cycpKTtcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgKVxuICApXG59XG4iXX0=