/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { DaffProductModule } from '../../product.module';
import { getDaffProductSelectors } from '../../selectors/public_api';
import { productPriceRangeHasDiscount, productPriceRangeHasPriceRange } from '../helpers';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../product.module";
/**
 * A facade for interacting with the composite product state.
 * Exposes many parts of the state for easy access and allows dispatching of actions.
 *
 * See the <a href="docs/api/product/DaffCompositeProductFacadeInterface">DaffCompositeProductFacadeInterface docs</a> for more details.
 * @template T
 */
export class DaffCompositeProductFacade {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this.selectors = getDaffProductSelectors();
        /**
         * Returns whether a DaffPriceRange has a discount.
         * @param priceRange a DaffPriceRange
         */
        this.hasDiscount = productPriceRangeHasDiscount;
        /**
         * Returns whether the min and max prices of a DaffPriceRange are different.
         * @param priceRange a DaffPriceRange
         */
        this.hasPriceRange = productPriceRangeHasPriceRange;
    }
    /**
     * @param {?} id
     * @param {?=} configuration
     * @return {?}
     */
    getRequiredItemPricesForConfiguration(id, configuration) {
        return this.store.pipe(select(this.selectors.selectCompositeProductRequiredItemPricesForConfiguration, { id, configuration }));
    }
    /**
     * @param {?} id
     * @param {?=} configuration
     * @return {?}
     */
    getOptionalItemPricesForConfiguration(id, configuration) {
        return this.store.pipe(select(this.selectors.selectCompositeProductOptionalItemPricesForConfiguration, { id, configuration }));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getPricesAsCurrentlyConfigured(id) {
        return this.store.pipe(select(this.selectors.selectCompositeProductPricesAsCurrentlyConfigured, { id }));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getAppliedOptions(id) {
        return this.store.pipe(select(this.selectors.selectCompositeProductAppliedOptions, { id }));
    }
    /**
     * @param {?} id
     * @param {?} item_id
     * @return {?}
     */
    isItemRequired(id, item_id) {
        return this.store.pipe(select(this.selectors.selectIsCompositeProductItemRequired, { id, item_id }));
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
DaffCompositeProductFacade.decorators = [
    { type: Injectable, args: [{
                providedIn: DaffProductModule
            },] }
];
/** @nocollapse */
DaffCompositeProductFacade.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ DaffCompositeProductFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffCompositeProductFacade_Factory() { return new DaffCompositeProductFacade(i0.ɵɵinject(i1.Store)); }, token: DaffCompositeProductFacade, providedIn: i2.DaffProductModule });
if (false) {
    /** @type {?} */
    DaffCompositeProductFacade.prototype.selectors;
    /**
     * Returns whether a DaffPriceRange has a discount.
     * \@param priceRange a DaffPriceRange
     * @type {?}
     */
    DaffCompositeProductFacade.prototype.hasDiscount;
    /**
     * Returns whether the min and max prices of a DaffPriceRange are different.
     * \@param priceRange a DaffPriceRange
     * @type {?}
     */
    DaffCompositeProductFacade.prototype.hasPriceRange;
    /**
     * @type {?}
     * @private
     */
    DaffCompositeProductFacade.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRlLXByb2R1Y3QuZmFjYWRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3Byb2R1Y3QvIiwic291cmNlcyI6WyJmYWNhZGVzL2NvbXBvc2l0ZS1wcm9kdWN0L2NvbXBvc2l0ZS1wcm9kdWN0LmZhY2FkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBVSxNQUFNLGFBQWEsQ0FBQztBQUdwRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUd6RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQU1yRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxZQUFZLENBQUM7Ozs7Ozs7Ozs7O0FBVzFGLE1BQU0sT0FBTywwQkFBMEI7Ozs7SUFFdEMsWUFBb0IsS0FBeUM7UUFBekMsVUFBSyxHQUFMLEtBQUssQ0FBb0M7UUFFN0QsY0FBUyxHQUFHLHVCQUF1QixFQUFLLENBQUM7Ozs7O1FBTXpDLGdCQUFXLEdBQUcsNEJBQTRCLENBQUM7Ozs7O1FBTTNDLGtCQUFhLEdBQUcsOEJBQThCLENBQUM7SUFkaUIsQ0FBQzs7Ozs7O0lBZ0JqRSxxQ0FBcUMsQ0FBQyxFQUFVLEVBQUUsYUFBMEQ7UUFDM0csT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyx3REFBd0QsRUFBRSxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEksQ0FBQzs7Ozs7O0lBRUQscUNBQXFDLENBQUMsRUFBVSxFQUFFLGFBQTBEO1FBQzNHLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsd0RBQXdELEVBQUUsRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hJLENBQUM7Ozs7O0lBRUQsOEJBQThCLENBQUMsRUFBVTtRQUN4QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGlEQUFpRCxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFHLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsRUFBVTtRQUMzQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLG9DQUFvQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdGLENBQUM7Ozs7OztJQUVELGNBQWMsQ0FBQyxFQUE4QixFQUFFLE9BQXVDO1FBQ3JGLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsb0NBQW9DLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RHLENBQUM7Ozs7OztJQUtBLFFBQVEsQ0FBQyxNQUFjO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQTlDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLGlCQUFpQjthQUM5Qjs7OztZQXRCUSxLQUFLOzs7OztJQTJCYiwrQ0FBeUM7Ozs7OztJQU16QyxpREFBMkM7Ozs7OztJQU0zQyxtREFBK0M7Ozs7O0lBZG5DLDJDQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFN0b3JlLCBzZWxlY3QsIEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IERpY3Rpb25hcnkgfSBmcm9tICdAbmdyeC9lbnRpdHknO1xuXG5pbXBvcnQgeyBEYWZmUHJvZHVjdE1vZHVsZSB9IGZyb20gJy4uLy4uL3Byb2R1Y3QubW9kdWxlJztcbmltcG9ydCB7IERhZmZQcm9kdWN0UmVkdWNlcnNTdGF0ZSB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3Byb2R1Y3QtcmVkdWNlcnMtc3RhdGUuaW50ZXJmYWNlJztcbmltcG9ydCB7IERhZmZQcm9kdWN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Byb2R1Y3QnO1xuaW1wb3J0IHsgZ2V0RGFmZlByb2R1Y3RTZWxlY3RvcnMgfSBmcm9tICcuLi8uLi9zZWxlY3RvcnMvcHVibGljX2FwaSc7XG5pbXBvcnQgeyBEYWZmQ29tcG9zaXRlUHJvZHVjdEZhY2FkZUludGVyZmFjZSB9IGZyb20gJy4vY29tcG9zaXRlLXByb2R1Y3QtZmFjYWRlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBEYWZmQ29tcG9zaXRlUHJvZHVjdEl0ZW1PcHRpb24sIERhZmZDb21wb3NpdGVQcm9kdWN0SXRlbSB9IGZyb20gJy4uLy4uL21vZGVscy9jb21wb3NpdGUtcHJvZHVjdC1pdGVtJztcbmltcG9ydCB7IERhZmZDb21wb3NpdGVQcm9kdWN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbXBvc2l0ZS1wcm9kdWN0JztcbmltcG9ydCB7IERhZmZQcmljZVJhbmdlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3ByaWNlcyc7XG5pbXBvcnQgeyBEYWZmQ29tcG9zaXRlQ29uZmlndXJhdGlvbkl0ZW0gfSBmcm9tICcuLi8uLi9tb2RlbHMvY29tcG9zaXRlLWNvbmZpZ3VyYXRpb24taXRlbSc7XG5pbXBvcnQgeyBwcm9kdWN0UHJpY2VSYW5nZUhhc0Rpc2NvdW50LCBwcm9kdWN0UHJpY2VSYW5nZUhhc1ByaWNlUmFuZ2UgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuLyoqXG4gKiBBIGZhY2FkZSBmb3IgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgY29tcG9zaXRlIHByb2R1Y3Qgc3RhdGUuXG4gKiBFeHBvc2VzIG1hbnkgcGFydHMgb2YgdGhlIHN0YXRlIGZvciBlYXN5IGFjY2VzcyBhbmQgYWxsb3dzIGRpc3BhdGNoaW5nIG9mIGFjdGlvbnMuXG4gKiBcbiAqIFNlZSB0aGUgPGEgaHJlZj1cImRvY3MvYXBpL3Byb2R1Y3QvRGFmZkNvbXBvc2l0ZVByb2R1Y3RGYWNhZGVJbnRlcmZhY2VcIj5EYWZmQ29tcG9zaXRlUHJvZHVjdEZhY2FkZUludGVyZmFjZSBkb2NzPC9hPiBmb3IgbW9yZSBkZXRhaWxzLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IERhZmZQcm9kdWN0TW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIERhZmZDb21wb3NpdGVQcm9kdWN0RmFjYWRlPFQgZXh0ZW5kcyBEYWZmUHJvZHVjdCA9IERhZmZQcm9kdWN0PiBpbXBsZW1lbnRzIERhZmZDb21wb3NpdGVQcm9kdWN0RmFjYWRlSW50ZXJmYWNlIHtcblx0XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPERhZmZQcm9kdWN0UmVkdWNlcnNTdGF0ZTxUPj4pIHt9XG5cblx0c2VsZWN0b3JzID0gZ2V0RGFmZlByb2R1Y3RTZWxlY3RvcnM8VD4oKTtcblxuXHQvKipcblx0ICogUmV0dXJucyB3aGV0aGVyIGEgRGFmZlByaWNlUmFuZ2UgaGFzIGEgZGlzY291bnQuXG5cdCAqIEBwYXJhbSBwcmljZVJhbmdlIGEgRGFmZlByaWNlUmFuZ2Vcblx0ICovXG5cdGhhc0Rpc2NvdW50ID0gcHJvZHVjdFByaWNlUmFuZ2VIYXNEaXNjb3VudDtcblxuXHQvKipcblx0ICogUmV0dXJucyB3aGV0aGVyIHRoZSBtaW4gYW5kIG1heCBwcmljZXMgb2YgYSBEYWZmUHJpY2VSYW5nZSBhcmUgZGlmZmVyZW50LlxuXHQgKiBAcGFyYW0gcHJpY2VSYW5nZSBhIERhZmZQcmljZVJhbmdlXG5cdCAqL1xuXHRoYXNQcmljZVJhbmdlID0gcHJvZHVjdFByaWNlUmFuZ2VIYXNQcmljZVJhbmdlO1xuXG5cdGdldFJlcXVpcmVkSXRlbVByaWNlc0ZvckNvbmZpZ3VyYXRpb24oaWQ6IHN0cmluZywgY29uZmlndXJhdGlvbj86IERpY3Rpb25hcnk8RGFmZkNvbXBvc2l0ZUNvbmZpZ3VyYXRpb25JdGVtPik6IE9ic2VydmFibGU8RGFmZlByaWNlUmFuZ2U+IHtcblx0XHRyZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdCh0aGlzLnNlbGVjdG9ycy5zZWxlY3RDb21wb3NpdGVQcm9kdWN0UmVxdWlyZWRJdGVtUHJpY2VzRm9yQ29uZmlndXJhdGlvbiwgeyBpZCwgY29uZmlndXJhdGlvbiB9KSk7XG5cdH1cblxuXHRnZXRPcHRpb25hbEl0ZW1QcmljZXNGb3JDb25maWd1cmF0aW9uKGlkOiBzdHJpbmcsIGNvbmZpZ3VyYXRpb24/OiBEaWN0aW9uYXJ5PERhZmZDb21wb3NpdGVDb25maWd1cmF0aW9uSXRlbT4pOiBPYnNlcnZhYmxlPERhZmZQcmljZVJhbmdlPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QodGhpcy5zZWxlY3RvcnMuc2VsZWN0Q29tcG9zaXRlUHJvZHVjdE9wdGlvbmFsSXRlbVByaWNlc0ZvckNvbmZpZ3VyYXRpb24sIHsgaWQsIGNvbmZpZ3VyYXRpb24gfSkpO1xuXHR9XG5cblx0Z2V0UHJpY2VzQXNDdXJyZW50bHlDb25maWd1cmVkKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPERhZmZQcmljZVJhbmdlPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QodGhpcy5zZWxlY3RvcnMuc2VsZWN0Q29tcG9zaXRlUHJvZHVjdFByaWNlc0FzQ3VycmVudGx5Q29uZmlndXJlZCwgeyBpZCB9KSk7XG5cdH1cblxuXHRnZXRBcHBsaWVkT3B0aW9ucyhpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxEaWN0aW9uYXJ5PERhZmZDb21wb3NpdGVQcm9kdWN0SXRlbU9wdGlvbj4+IHtcblx0XHRyZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdCh0aGlzLnNlbGVjdG9ycy5zZWxlY3RDb21wb3NpdGVQcm9kdWN0QXBwbGllZE9wdGlvbnMsIHsgaWQgfSkpO1xuXHR9XG5cblx0aXNJdGVtUmVxdWlyZWQoaWQ6IERhZmZDb21wb3NpdGVQcm9kdWN0WydpZCddLCBpdGVtX2lkOiBEYWZmQ29tcG9zaXRlUHJvZHVjdEl0ZW1bJ2lkJ10pIHtcblx0XHRyZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdCh0aGlzLnNlbGVjdG9ycy5zZWxlY3RJc0NvbXBvc2l0ZVByb2R1Y3RJdGVtUmVxdWlyZWQsIHsgaWQsIGl0ZW1faWQgfSkpO1xuXHR9XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoZXMgYW4gYWN0aW9uIHRvIHRoZSByeGpzIGFjdGlvbiBzdHJlYW0uXG4gICAqL1xuICBkaXNwYXRjaChhY3Rpb246IEFjdGlvbikge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcbiAgfVxufVxuIl19