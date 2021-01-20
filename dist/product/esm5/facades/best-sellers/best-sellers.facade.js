/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { DaffProductModule } from '../../product.module';
import { getDaffProductSelectors } from '../../selectors/public_api';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../product.module";
/**
 * A facade for accessing best sellers state from an application component.
 * @template T
 */
var DaffBestSellersFacade = /** @class */ (function () {
    function DaffBestSellersFacade(store) {
        this.store = store;
        var _a = getDaffProductSelectors(), selectBestSellersProducts = _a.selectBestSellersProducts, selectBestSellersLoadingState = _a.selectBestSellersLoadingState;
        this.loading$ = this.store.pipe(select(selectBestSellersLoadingState));
        this.bestSellers$ = this.store.pipe(select(selectBestSellersProducts));
    }
    /**
     * Dispatches an action to the rxjs action stream.
     * @param action
     */
    /**
     * Dispatches an action to the rxjs action stream.
     * @param {?} action
     * @return {?}
     */
    DaffBestSellersFacade.prototype.dispatch = /**
     * Dispatches an action to the rxjs action stream.
     * @param {?} action
     * @return {?}
     */
    function (action) {
        this.store.dispatch(action);
    };
    DaffBestSellersFacade.decorators = [
        { type: Injectable, args: [{
                    providedIn: DaffProductModule
                },] }
    ];
    /** @nocollapse */
    DaffBestSellersFacade.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ DaffBestSellersFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffBestSellersFacade_Factory() { return new DaffBestSellersFacade(i0.ɵɵinject(i1.Store)); }, token: DaffBestSellersFacade, providedIn: i2.DaffProductModule });
    return DaffBestSellersFacade;
}());
export { DaffBestSellersFacade };
if (false) {
    /**
     * The loading state for getting best selling products.
     * @type {?}
     */
    DaffBestSellersFacade.prototype.loading$;
    /**
     * Best selling products.
     * @type {?}
     */
    DaffBestSellersFacade.prototype.bestSellers$;
    /**
     * @type {?}
     * @private
     */
    DaffBestSellersFacade.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVzdC1zZWxsZXJzLmZhY2FkZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9wcm9kdWN0LyIsInNvdXJjZXMiOlsiZmFjYWRlcy9iZXN0LXNlbGxlcnMvYmVzdC1zZWxsZXJzLmZhY2FkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBVSxNQUFNLGFBQWEsQ0FBQztBQU1wRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7Ozs7QUFLckU7SUFhRSwrQkFBb0IsS0FBeUM7UUFBekMsVUFBSyxHQUFMLEtBQUssQ0FBb0M7UUFDdkQsSUFBQSw4QkFHMEIsRUFGL0Isd0RBQXlCLEVBQ3pCLGdFQUMrQjtRQUU5QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILHdDQUFROzs7OztJQUFSLFVBQVMsTUFBYztRQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDOztnQkE3QkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxpQkFBaUI7aUJBQzlCOzs7O2dCQWZRLEtBQUs7OztnQ0FEZDtDQTRDQyxBQTlCRCxJQThCQztTQTNCWSxxQkFBcUI7Ozs7OztJQUloQyx5Q0FBOEI7Ozs7O0lBSTlCLDZDQUF3Qzs7Ozs7SUFFNUIsc0NBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmUsIHNlbGVjdCwgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEYWZmU3RvcmVGYWNhZGUgfSBmcm9tICdAZGFmZm9kaWwvY29yZS9zdGF0ZSc7XG5cbmltcG9ydCB7IERhZmZQcm9kdWN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Byb2R1Y3QnO1xuaW1wb3J0IHsgRGFmZlByb2R1Y3RNb2R1bGUgfSBmcm9tICcuLi8uLi9wcm9kdWN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBEYWZmUHJvZHVjdFJlZHVjZXJzU3RhdGUgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9wcm9kdWN0LXJlZHVjZXJzLXN0YXRlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBnZXREYWZmUHJvZHVjdFNlbGVjdG9ycyB9IGZyb20gJy4uLy4uL3NlbGVjdG9ycy9wdWJsaWNfYXBpJztcblxuLyoqXG4gKiBBIGZhY2FkZSBmb3IgYWNjZXNzaW5nIGJlc3Qgc2VsbGVycyBzdGF0ZSBmcm9tIGFuIGFwcGxpY2F0aW9uIGNvbXBvbmVudC5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBEYWZmUHJvZHVjdE1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBEYWZmQmVzdFNlbGxlcnNGYWNhZGU8VCBleHRlbmRzIERhZmZQcm9kdWN0ID0gRGFmZlByb2R1Y3Q+IGltcGxlbWVudHMgRGFmZlN0b3JlRmFjYWRlPEFjdGlvbj4ge1xuICAvKipcbiAgICogVGhlIGxvYWRpbmcgc3RhdGUgZm9yIGdldHRpbmcgYmVzdCBzZWxsaW5nIHByb2R1Y3RzLlxuICAgKi9cbiAgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIC8qKlxuICAgKiBCZXN0IHNlbGxpbmcgcHJvZHVjdHMuXG4gICAqL1xuICBiZXN0U2VsbGVycyQ6IE9ic2VydmFibGU8RGFmZlByb2R1Y3RbXT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8RGFmZlByb2R1Y3RSZWR1Y2Vyc1N0YXRlPFQ+Pikge1xuXHRcdGNvbnN0IHtcblx0XHRcdHNlbGVjdEJlc3RTZWxsZXJzUHJvZHVjdHMsXG5cdFx0XHRzZWxlY3RCZXN0U2VsbGVyc0xvYWRpbmdTdGF0ZVxuXHRcdH0gPSBnZXREYWZmUHJvZHVjdFNlbGVjdG9yczxUPigpO1xuXG4gICAgdGhpcy5sb2FkaW5nJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0QmVzdFNlbGxlcnNMb2FkaW5nU3RhdGUpKTtcbiAgICB0aGlzLmJlc3RTZWxsZXJzJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0QmVzdFNlbGxlcnNQcm9kdWN0cykpO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoZXMgYW4gYWN0aW9uIHRvIHRoZSByeGpzIGFjdGlvbiBzdHJlYW0uXG4gICAqIEBwYXJhbSBhY3Rpb25cbiAgICovXG4gIGRpc3BhdGNoKGFjdGlvbjogQWN0aW9uKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuICB9XG59XG4iXX0=