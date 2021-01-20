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
 * A facade for interacting with the configurable product state.
 * Exposes many parts of the state for easy access and allows dispatching of actions.
 *
 * See the <a href="docs/api/product/DaffConfigurableProductFacadeInterface">DaffConfigurableProductFacadeInterface docs</a> for more details.
 * @template T
 */
export class DaffConfigurableProductFacade {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this.selectors = getDaffProductSelectors();
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getAllAttributes(id) {
        return this.store.pipe(select(this.selectors.selectAllConfigurableProductAttributes, { id }));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getAllVariants(id) {
        return this.store.pipe(select(this.selectors.selectAllConfigurableProductVariants, { id }));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getAppliedAttributes(id) {
        return this.store.pipe(select(this.selectors.selectConfigurableProductAppliedAttributesAsDictionary, { id }));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getMinimumPrice(id) {
        return this.store.pipe(select(this.selectors.selectConfigurableProductMinimumPrice, { id }));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getMaximumPrice(id) {
        return this.store.pipe(select(this.selectors.selectConfigurableProductMaximumPrice, { id }));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getMinimumDiscountedPrice(id) {
        return this.store.pipe(select(this.selectors.selectConfigurableProductMinimumDiscountedPrice, { id }));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getMaximumDiscountedPrice(id) {
        return this.store.pipe(select(this.selectors.selectConfigurableProductMaximumDiscountedPrice, { id }));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getMinimumPercentDiscount(id) {
        return this.store.pipe(select(this.selectors.selectConfigurableProductMinimumPercentDiscount, { id }));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getMaximumPercentDiscount(id) {
        return this.store.pipe(select(this.selectors.selectConfigurableProductMaximumPercentDiscount, { id }));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    isPriceRanged(id) {
        return this.store.pipe(select(this.selectors.isConfigurablePriceRanged, { id }));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    hasDiscount(id) {
        return this.store.pipe(select(this.selectors.selectConfigurableProductHasDiscount, { id }));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getSelectableAttributes(id) {
        return this.store.pipe(select(this.selectors.selectSelectableConfigurableProductAttributes, { id }));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getMatchingVariants(id) {
        return this.store.pipe(select(this.selectors.selectMatchingConfigurableProductVariants, { id }));
    }
    /**
     * Dispatches an action to the rxjs action stream.
     * @param {?} action
     * @return {?}
     */
    dispatch(action) {
        this.store.dispatch(action);
    }
}
DaffConfigurableProductFacade.decorators = [
    { type: Injectable, args: [{
                providedIn: DaffProductModule
            },] }
];
/** @nocollapse */
DaffConfigurableProductFacade.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ DaffConfigurableProductFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffConfigurableProductFacade_Factory() { return new DaffConfigurableProductFacade(i0.ɵɵinject(i1.Store)); }, token: DaffConfigurableProductFacade, providedIn: i2.DaffProductModule });
if (false) {
    /** @type {?} */
    DaffConfigurableProductFacade.prototype.selectors;
    /**
     * @type {?}
     * @private
     */
    DaffConfigurableProductFacade.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXByb2R1Y3QuZmFjYWRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3Byb2R1Y3QvIiwic291cmNlcyI6WyJmYWNhZGVzL2NvbmZpZ3VyYWJsZS1wcm9kdWN0L2NvbmZpZ3VyYWJsZS1wcm9kdWN0LmZhY2FkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBVSxNQUFNLGFBQWEsQ0FBQztBQUdwRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUd6RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7Ozs7Ozs7QUFhckUsTUFBTSxPQUFPLDZCQUE2Qjs7OztJQUl6QyxZQUFvQixLQUF5QztRQUF6QyxVQUFLLEdBQUwsS0FBSyxDQUFvQztRQUY3RCxjQUFTLEdBQUcsdUJBQXVCLEVBQUssQ0FBQztJQUV1QixDQUFDOzs7OztJQUVqRSxnQkFBZ0IsQ0FBQyxFQUFVO1FBQzFCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsc0NBQXNDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0YsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsRUFBVTtRQUN4QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLG9DQUFvQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdGLENBQUM7Ozs7O0lBRUQsb0JBQW9CLENBQUMsRUFBVTtRQUM5QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLHNEQUFzRCxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9HLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLEVBQVU7UUFDekIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxxQ0FBcUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5RixDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxFQUFVO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMscUNBQXFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUYsQ0FBQzs7Ozs7SUFFRCx5QkFBeUIsQ0FBQyxFQUFVO1FBQ25DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsK0NBQStDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEcsQ0FBQzs7Ozs7SUFFRCx5QkFBeUIsQ0FBQyxFQUFVO1FBQ25DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsK0NBQStDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEcsQ0FBQzs7Ozs7SUFFRCx5QkFBeUIsQ0FBQyxFQUFVO1FBQ25DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsK0NBQStDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEcsQ0FBQzs7Ozs7SUFFRCx5QkFBeUIsQ0FBQyxFQUFVO1FBQ25DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsK0NBQStDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEcsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsRUFBVTtRQUN2QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLHlCQUF5QixFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLEVBQVU7UUFDckIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxvQ0FBb0MsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3RixDQUFDOzs7OztJQUVELHVCQUF1QixDQUFDLEVBQVU7UUFDakMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyw2Q0FBNkMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0RyxDQUFDOzs7OztJQUVELG1CQUFtQixDQUFDLEVBQVU7UUFDN0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyx5Q0FBeUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNsRyxDQUFDOzs7Ozs7SUFLQSxRQUFRLENBQUMsTUFBYztRQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUFsRUYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxpQkFBaUI7YUFDOUI7Ozs7WUFsQlEsS0FBSzs7Ozs7SUFxQmIsa0RBQXlDOzs7OztJQUU3Qiw4Q0FBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdG9yZSwgc2VsZWN0LCBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBEaWN0aW9uYXJ5IH0gZnJvbSAnQG5ncngvZW50aXR5JztcblxuaW1wb3J0IHsgRGFmZlByb2R1Y3RNb2R1bGUgfSBmcm9tICcuLi8uLi9wcm9kdWN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBEYWZmUHJvZHVjdFJlZHVjZXJzU3RhdGUgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9wcm9kdWN0LXJlZHVjZXJzLXN0YXRlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBEYWZmUHJvZHVjdCB9IGZyb20gJy4uLy4uL21vZGVscy9wcm9kdWN0JztcbmltcG9ydCB7IGdldERhZmZQcm9kdWN0U2VsZWN0b3JzIH0gZnJvbSAnLi4vLi4vc2VsZWN0b3JzL3B1YmxpY19hcGknO1xuaW1wb3J0IHsgRGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3RGYWNhZGVJbnRlcmZhY2UgfSBmcm9tICcuL2NvbmZpZ3VyYWJsZS1wcm9kdWN0LWZhY2FkZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3RWYXJpYW50IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbmZpZ3VyYWJsZS1wcm9kdWN0JztcblxuLyoqXG4gKiBBIGZhY2FkZSBmb3IgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgY29uZmlndXJhYmxlIHByb2R1Y3Qgc3RhdGUuXG4gKiBFeHBvc2VzIG1hbnkgcGFydHMgb2YgdGhlIHN0YXRlIGZvciBlYXN5IGFjY2VzcyBhbmQgYWxsb3dzIGRpc3BhdGNoaW5nIG9mIGFjdGlvbnMuXG4gKiBcbiAqIFNlZSB0aGUgPGEgaHJlZj1cImRvY3MvYXBpL3Byb2R1Y3QvRGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3RGYWNhZGVJbnRlcmZhY2VcIj5EYWZmQ29uZmlndXJhYmxlUHJvZHVjdEZhY2FkZUludGVyZmFjZSBkb2NzPC9hPiBmb3IgbW9yZSBkZXRhaWxzLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IERhZmZQcm9kdWN0TW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIERhZmZDb25maWd1cmFibGVQcm9kdWN0RmFjYWRlPFQgZXh0ZW5kcyBEYWZmUHJvZHVjdCA9IERhZmZQcm9kdWN0PiBpbXBsZW1lbnRzIERhZmZDb25maWd1cmFibGVQcm9kdWN0RmFjYWRlSW50ZXJmYWNlIHtcblxuXHRzZWxlY3RvcnMgPSBnZXREYWZmUHJvZHVjdFNlbGVjdG9yczxUPigpO1xuXHRcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8RGFmZlByb2R1Y3RSZWR1Y2Vyc1N0YXRlPFQ+Pikge31cblx0XG5cdGdldEFsbEF0dHJpYnV0ZXMoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8RGljdGlvbmFyeTxzdHJpbmdbXT4+IHtcblx0XHRyZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdCh0aGlzLnNlbGVjdG9ycy5zZWxlY3RBbGxDb25maWd1cmFibGVQcm9kdWN0QXR0cmlidXRlcywgeyBpZCB9KSk7XG5cdH1cblx0XG5cdGdldEFsbFZhcmlhbnRzKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPERhZmZDb25maWd1cmFibGVQcm9kdWN0VmFyaWFudFtdPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QodGhpcy5zZWxlY3RvcnMuc2VsZWN0QWxsQ29uZmlndXJhYmxlUHJvZHVjdFZhcmlhbnRzLCB7IGlkIH0pKTtcblx0fVxuXHRcblx0Z2V0QXBwbGllZEF0dHJpYnV0ZXMoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8RGljdGlvbmFyeTxzdHJpbmc+PiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QodGhpcy5zZWxlY3RvcnMuc2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdEFwcGxpZWRBdHRyaWJ1dGVzQXNEaWN0aW9uYXJ5LCB7IGlkIH0pKTtcblx0fVxuXG5cdGdldE1pbmltdW1QcmljZShpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdCh0aGlzLnNlbGVjdG9ycy5zZWxlY3RDb25maWd1cmFibGVQcm9kdWN0TWluaW11bVByaWNlLCB7IGlkIH0pKTtcblx0fVxuXG5cdGdldE1heGltdW1QcmljZShpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdCh0aGlzLnNlbGVjdG9ycy5zZWxlY3RDb25maWd1cmFibGVQcm9kdWN0TWF4aW11bVByaWNlLCB7IGlkIH0pKTtcblx0fVxuXG5cdGdldE1pbmltdW1EaXNjb3VudGVkUHJpY2UoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QodGhpcy5zZWxlY3RvcnMuc2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdE1pbmltdW1EaXNjb3VudGVkUHJpY2UsIHsgaWQgfSkpO1xuXHR9XG5cblx0Z2V0TWF4aW11bURpc2NvdW50ZWRQcmljZShpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdCh0aGlzLnNlbGVjdG9ycy5zZWxlY3RDb25maWd1cmFibGVQcm9kdWN0TWF4aW11bURpc2NvdW50ZWRQcmljZSwgeyBpZCB9KSk7XG5cdH1cblxuXHRnZXRNaW5pbXVtUGVyY2VudERpc2NvdW50KGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuc2VsZWN0b3JzLnNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RNaW5pbXVtUGVyY2VudERpc2NvdW50LCB7IGlkIH0pKTtcblx0fVxuXG5cdGdldE1heGltdW1QZXJjZW50RGlzY291bnQoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QodGhpcy5zZWxlY3RvcnMuc2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdE1heGltdW1QZXJjZW50RGlzY291bnQsIHsgaWQgfSkpO1xuXHR9XG5cblx0aXNQcmljZVJhbmdlZChpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QodGhpcy5zZWxlY3RvcnMuaXNDb25maWd1cmFibGVQcmljZVJhbmdlZCwgeyBpZCB9KSk7XG5cdH1cblxuXHRoYXNEaXNjb3VudChpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QodGhpcy5zZWxlY3RvcnMuc2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdEhhc0Rpc2NvdW50LCB7IGlkIH0pKTtcblx0fVxuXG5cdGdldFNlbGVjdGFibGVBdHRyaWJ1dGVzKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPERpY3Rpb25hcnk8c3RyaW5nW10+PiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QodGhpcy5zZWxlY3RvcnMuc2VsZWN0U2VsZWN0YWJsZUNvbmZpZ3VyYWJsZVByb2R1Y3RBdHRyaWJ1dGVzLCB7IGlkIH0pKTtcblx0fVxuXG5cdGdldE1hdGNoaW5nVmFyaWFudHMoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8RGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3RWYXJpYW50W10+IHtcblx0XHRyZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdCh0aGlzLnNlbGVjdG9ycy5zZWxlY3RNYXRjaGluZ0NvbmZpZ3VyYWJsZVByb2R1Y3RWYXJpYW50cywgeyBpZCB9KSk7XG5cdH1cblxuICAvKipcbiAgICogRGlzcGF0Y2hlcyBhbiBhY3Rpb24gdG8gdGhlIHJ4anMgYWN0aW9uIHN0cmVhbS5cbiAgICovXG4gIGRpc3BhdGNoKGFjdGlvbjogQWN0aW9uKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuICB9XG59XG4iXX0=