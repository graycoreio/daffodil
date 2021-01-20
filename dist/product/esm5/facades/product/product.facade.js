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
 * A facade for getting state about a particular product.
 *
 * See the <a href="docs/api/product/DaffProductFacadeInterface">DaffProductFacadeInterface docs</a> for more details.
 * @template T
 */
var DaffProductFacade = /** @class */ (function () {
    function DaffProductFacade(store) {
        this.store = store;
        this.selectors = getDaffProductSelectors();
        this.loading$ = this.store.pipe(select(this.selectors.selectSelectedProductLoadingState));
        this.product$ = this.store.pipe(select(this.selectors.selectSelectedProduct));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    DaffProductFacade.prototype.getProduct = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.store.pipe(select(this.selectors.selectProduct, { id: id }));
    };
    /**
     * @param {?} id
     * @return {?}
     */
    DaffProductFacade.prototype.getPrice = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.store.pipe(select(this.selectors.selectProductPrice, { id: id }));
    };
    /**
     * @param {?} id
     * @return {?}
     */
    DaffProductFacade.prototype.hasDiscount = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.store.pipe(select(this.selectors.selectProductHasDiscount, { id: id }));
    };
    /**
     * @param {?} id
     * @return {?}
     */
    DaffProductFacade.prototype.getDiscountAmount = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.store.pipe(select(this.selectors.selectProductDiscountAmount, { id: id }));
    };
    /**
     * @param {?} id
     * @return {?}
     */
    DaffProductFacade.prototype.getDiscountedPrice = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.store.pipe(select(this.selectors.selectProductDiscountedPrice, { id: id }));
    };
    /**
     * @param {?} id
     * @return {?}
     */
    DaffProductFacade.prototype.getDiscountPercent = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.store.pipe(select(this.selectors.selectProductDiscountPercent, { id: id }));
    };
    /**
     * @param {?} id
     * @return {?}
     */
    DaffProductFacade.prototype.isOutOfStock = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.store.pipe(select(this.selectors.selectIsProductOutOfStock, { id: id }));
    };
    /**
     * Dispatches an action to the rxjs action stream.
     */
    /**
     * Dispatches an action to the rxjs action stream.
     * @param {?} action
     * @return {?}
     */
    DaffProductFacade.prototype.dispatch = /**
     * Dispatches an action to the rxjs action stream.
     * @param {?} action
     * @return {?}
     */
    function (action) {
        this.store.dispatch(action);
    };
    DaffProductFacade.decorators = [
        { type: Injectable, args: [{
                    providedIn: DaffProductModule
                },] }
    ];
    /** @nocollapse */
    DaffProductFacade.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ DaffProductFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffProductFacade_Factory() { return new DaffProductFacade(i0.ɵɵinject(i1.Store)); }, token: DaffProductFacade, providedIn: i2.DaffProductModule });
    return DaffProductFacade;
}());
export { DaffProductFacade };
if (false) {
    /** @type {?} */
    DaffProductFacade.prototype.loading$;
    /** @type {?} */
    DaffProductFacade.prototype.product$;
    /**
     * @type {?}
     * @private
     */
    DaffProductFacade.prototype.selectors;
    /**
     * @type {?}
     * @private
     */
    DaffProductFacade.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5mYWNhZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvcHJvZHVjdC8iLCJzb3VyY2VzIjpbImZhY2FkZXMvcHJvZHVjdC9wcm9kdWN0LmZhY2FkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBVSxNQUFNLGFBQWEsQ0FBQztBQUVwRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUd6RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7Ozs7OztBQVFyRTtJQVNFLDJCQUFvQixLQUF5QztRQUF6QyxVQUFLLEdBQUwsS0FBSyxDQUFvQztRQUZ0RCxjQUFTLEdBQUcsdUJBQXVCLEVBQUssQ0FBQztRQUc5QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQztRQUM1RixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztJQUMvRSxDQUFDOzs7OztJQUVELHNDQUFVOzs7O0lBQVYsVUFBVyxFQUFVO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLEVBQUUsRUFBRSxJQUFBLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7Ozs7SUFFRCxvQ0FBUTs7OztJQUFSLFVBQVMsRUFBVTtRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFrQixFQUFFLEVBQUUsRUFBRSxJQUFBLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDM0UsQ0FBQzs7Ozs7SUFFRCx1Q0FBVzs7OztJQUFYLFVBQVksRUFBVTtRQUNyQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLHdCQUF3QixFQUFFLEVBQUUsRUFBRSxJQUFBLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDakYsQ0FBQzs7Ozs7SUFFRCw2Q0FBaUI7Ozs7SUFBakIsVUFBa0IsRUFBVTtRQUMzQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLDJCQUEyQixFQUFFLEVBQUUsRUFBRSxJQUFBLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDcEYsQ0FBQzs7Ozs7SUFFRCw4Q0FBa0I7Ozs7SUFBbEIsVUFBbUIsRUFBVTtRQUM1QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLDRCQUE0QixFQUFFLEVBQUUsRUFBRSxJQUFBLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckYsQ0FBQzs7Ozs7SUFFRCw4Q0FBa0I7Ozs7SUFBbEIsVUFBbUIsRUFBVTtRQUM1QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLDRCQUE0QixFQUFFLEVBQUUsRUFBRSxJQUFBLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckYsQ0FBQzs7Ozs7SUFFRCx3Q0FBWTs7OztJQUFaLFVBQWEsRUFBVTtRQUN0QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLHlCQUF5QixFQUFFLEVBQUUsRUFBRSxJQUFBLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUVBOztPQUVHOzs7Ozs7SUFDSCxvQ0FBUTs7Ozs7SUFBUixVQUFTLE1BQWM7UUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Z0JBL0NGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsaUJBQWlCO2lCQUM5Qjs7OztnQkFmUSxLQUFLOzs7NEJBSGQ7Q0FnRUMsQUFoREQsSUFnREM7U0E3Q1ksaUJBQWlCOzs7SUFDNUIscUNBQThCOztJQUM5QixxQ0FBd0I7Ozs7O0lBRXpCLHNDQUFpRDs7Ozs7SUFFcEMsa0NBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBTdG9yZSwgc2VsZWN0LCBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IERhZmZQcm9kdWN0TW9kdWxlIH0gZnJvbSAnLi4vLi4vcHJvZHVjdC5tb2R1bGUnO1xuaW1wb3J0IHsgRGFmZlByb2R1Y3RSZWR1Y2Vyc1N0YXRlIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvcHJvZHVjdC1yZWR1Y2Vycy1zdGF0ZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGFmZlByb2R1Y3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvcHJvZHVjdCc7XG5pbXBvcnQgeyBnZXREYWZmUHJvZHVjdFNlbGVjdG9ycyB9IGZyb20gJy4uLy4uL3NlbGVjdG9ycy9wdWJsaWNfYXBpJztcbmltcG9ydCB7IERhZmZQcm9kdWN0RmFjYWRlSW50ZXJmYWNlIH0gZnJvbSAnLi9wcm9kdWN0LWZhY2FkZS5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIEEgZmFjYWRlIGZvciBnZXR0aW5nIHN0YXRlIGFib3V0IGEgcGFydGljdWxhciBwcm9kdWN0LlxuICogXG4gKiBTZWUgdGhlIDxhIGhyZWY9XCJkb2NzL2FwaS9wcm9kdWN0L0RhZmZQcm9kdWN0RmFjYWRlSW50ZXJmYWNlXCI+RGFmZlByb2R1Y3RGYWNhZGVJbnRlcmZhY2UgZG9jczwvYT4gZm9yIG1vcmUgZGV0YWlscy5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBEYWZmUHJvZHVjdE1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBEYWZmUHJvZHVjdEZhY2FkZTxUIGV4dGVuZHMgRGFmZlByb2R1Y3QgPSBEYWZmUHJvZHVjdD4gaW1wbGVtZW50cyBEYWZmUHJvZHVjdEZhY2FkZUludGVyZmFjZTxUPiB7XG4gIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBwcm9kdWN0JDogT2JzZXJ2YWJsZTxUPjtcblxuXHRwcml2YXRlIHNlbGVjdG9ycyA9IGdldERhZmZQcm9kdWN0U2VsZWN0b3JzPFQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8RGFmZlByb2R1Y3RSZWR1Y2Vyc1N0YXRlPFQ+Pikge1xuICAgIHRoaXMubG9hZGluZyQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuc2VsZWN0b3JzLnNlbGVjdFNlbGVjdGVkUHJvZHVjdExvYWRpbmdTdGF0ZSkpO1xuXHRcdHRoaXMucHJvZHVjdCQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuc2VsZWN0b3JzLnNlbGVjdFNlbGVjdGVkUHJvZHVjdCkpO1xuXHR9XG5cblx0Z2V0UHJvZHVjdChpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxUPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QodGhpcy5zZWxlY3RvcnMuc2VsZWN0UHJvZHVjdCwgeyBpZCB9KSk7XG5cdH1cblxuXHRnZXRQcmljZShpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdCh0aGlzLnNlbGVjdG9ycy5zZWxlY3RQcm9kdWN0UHJpY2UsIHsgaWQgfSkpO1xuXHR9XG5cblx0aGFzRGlzY291bnQoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuc2VsZWN0b3JzLnNlbGVjdFByb2R1Y3RIYXNEaXNjb3VudCwgeyBpZCB9KSk7XG5cdH1cblxuXHRnZXREaXNjb3VudEFtb3VudChpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdCh0aGlzLnNlbGVjdG9ycy5zZWxlY3RQcm9kdWN0RGlzY291bnRBbW91bnQsIHsgaWQgfSkpO1xuXHR9XG5cblx0Z2V0RGlzY291bnRlZFByaWNlKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuc2VsZWN0b3JzLnNlbGVjdFByb2R1Y3REaXNjb3VudGVkUHJpY2UsIHsgaWQgfSkpO1xuXHR9XG5cblx0Z2V0RGlzY291bnRQZXJjZW50KGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuc2VsZWN0b3JzLnNlbGVjdFByb2R1Y3REaXNjb3VudFBlcmNlbnQsIHsgaWQgfSkpO1xuXHR9XG5cblx0aXNPdXRPZlN0b2NrKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdCh0aGlzLnNlbGVjdG9ycy5zZWxlY3RJc1Byb2R1Y3RPdXRPZlN0b2NrLCB7IGlkIH0pKTtcblx0fVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaGVzIGFuIGFjdGlvbiB0byB0aGUgcnhqcyBhY3Rpb24gc3RyZWFtLlxuICAgKi9cbiAgZGlzcGF0Y2goYWN0aW9uOiBBY3Rpb24pIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XG4gIH1cbn1cbiJdfQ==