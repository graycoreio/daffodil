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
export class DaffBestSellersFacade {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        const { selectBestSellersProducts, selectBestSellersLoadingState } = getDaffProductSelectors();
        this.loading$ = this.store.pipe(select(selectBestSellersLoadingState));
        this.bestSellers$ = this.store.pipe(select(selectBestSellersProducts));
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
DaffBestSellersFacade.decorators = [
    { type: Injectable, args: [{
                providedIn: DaffProductModule
            },] }
];
/** @nocollapse */
DaffBestSellersFacade.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ DaffBestSellersFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffBestSellersFacade_Factory() { return new DaffBestSellersFacade(i0.ɵɵinject(i1.Store)); }, token: DaffBestSellersFacade, providedIn: i2.DaffProductModule });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVzdC1zZWxsZXJzLmZhY2FkZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9wcm9kdWN0LyIsInNvdXJjZXMiOlsiZmFjYWRlcy9iZXN0LXNlbGxlcnMvYmVzdC1zZWxsZXJzLmZhY2FkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBVSxNQUFNLGFBQWEsQ0FBQztBQU1wRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7Ozs7QUFRckUsTUFBTSxPQUFPLHFCQUFxQjs7OztJQVVoQyxZQUFvQixLQUF5QztRQUF6QyxVQUFLLEdBQUwsS0FBSyxDQUFvQztjQUN2RCxFQUNMLHlCQUF5QixFQUN6Qiw2QkFBNkIsRUFDN0IsR0FBRyx1QkFBdUIsRUFBSztRQUU5QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Ozs7OztJQU1ELFFBQVEsQ0FBQyxNQUFjO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQTdCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLGlCQUFpQjthQUM5Qjs7OztZQWZRLEtBQUs7Ozs7Ozs7O0lBb0JaLHlDQUE4Qjs7Ozs7SUFJOUIsNkNBQXdDOzs7OztJQUU1QixzQ0FBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZSwgc2VsZWN0LCBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERhZmZTdG9yZUZhY2FkZSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3N0YXRlJztcblxuaW1wb3J0IHsgRGFmZlByb2R1Y3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvcHJvZHVjdCc7XG5pbXBvcnQgeyBEYWZmUHJvZHVjdE1vZHVsZSB9IGZyb20gJy4uLy4uL3Byb2R1Y3QubW9kdWxlJztcbmltcG9ydCB7IERhZmZQcm9kdWN0UmVkdWNlcnNTdGF0ZSB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3Byb2R1Y3QtcmVkdWNlcnMtc3RhdGUuaW50ZXJmYWNlJztcbmltcG9ydCB7IGdldERhZmZQcm9kdWN0U2VsZWN0b3JzIH0gZnJvbSAnLi4vLi4vc2VsZWN0b3JzL3B1YmxpY19hcGknO1xuXG4vKipcbiAqIEEgZmFjYWRlIGZvciBhY2Nlc3NpbmcgYmVzdCBzZWxsZXJzIHN0YXRlIGZyb20gYW4gYXBwbGljYXRpb24gY29tcG9uZW50LlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IERhZmZQcm9kdWN0TW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIERhZmZCZXN0U2VsbGVyc0ZhY2FkZTxUIGV4dGVuZHMgRGFmZlByb2R1Y3QgPSBEYWZmUHJvZHVjdD4gaW1wbGVtZW50cyBEYWZmU3RvcmVGYWNhZGU8QWN0aW9uPiB7XG4gIC8qKlxuICAgKiBUaGUgbG9hZGluZyBzdGF0ZSBmb3IgZ2V0dGluZyBiZXN0IHNlbGxpbmcgcHJvZHVjdHMuXG4gICAqL1xuICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgLyoqXG4gICAqIEJlc3Qgc2VsbGluZyBwcm9kdWN0cy5cbiAgICovXG4gIGJlc3RTZWxsZXJzJDogT2JzZXJ2YWJsZTxEYWZmUHJvZHVjdFtdPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxEYWZmUHJvZHVjdFJlZHVjZXJzU3RhdGU8VD4+KSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0c2VsZWN0QmVzdFNlbGxlcnNQcm9kdWN0cyxcblx0XHRcdHNlbGVjdEJlc3RTZWxsZXJzTG9hZGluZ1N0YXRlXG5cdFx0fSA9IGdldERhZmZQcm9kdWN0U2VsZWN0b3JzPFQ+KCk7XG5cbiAgICB0aGlzLmxvYWRpbmckID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RCZXN0U2VsbGVyc0xvYWRpbmdTdGF0ZSkpO1xuICAgIHRoaXMuYmVzdFNlbGxlcnMkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RCZXN0U2VsbGVyc1Byb2R1Y3RzKSk7XG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2hlcyBhbiBhY3Rpb24gdG8gdGhlIHJ4anMgYWN0aW9uIHN0cmVhbS5cbiAgICogQHBhcmFtIGFjdGlvblxuICAgKi9cbiAgZGlzcGF0Y2goYWN0aW9uOiBBY3Rpb24pIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XG4gIH1cbn1cbiJdfQ==