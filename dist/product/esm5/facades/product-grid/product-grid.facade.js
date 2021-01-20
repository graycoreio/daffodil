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
 * A facade for accessing state for a list of products from an application component.
 * @template T
 */
var DaffProductGridFacade = /** @class */ (function () {
    function DaffProductGridFacade(store) {
        this.store = store;
        var _a = getDaffProductSelectors(), selectProductGridLoadingState = _a.selectProductGridLoadingState, selectAllProducts = _a.selectAllProducts;
        this.loading$ = this.store.pipe(select(selectProductGridLoadingState));
        this.products$ = this.store.pipe(select(selectAllProducts));
    }
    /**
     * Dispatches an action to the rxjs action stream.
     */
    /**
     * Dispatches an action to the rxjs action stream.
     * @param {?} action
     * @return {?}
     */
    DaffProductGridFacade.prototype.dispatch = /**
     * Dispatches an action to the rxjs action stream.
     * @param {?} action
     * @return {?}
     */
    function (action) {
        this.store.dispatch(action);
    };
    DaffProductGridFacade.decorators = [
        { type: Injectable, args: [{
                    providedIn: DaffProductModule
                },] }
    ];
    /** @nocollapse */
    DaffProductGridFacade.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ DaffProductGridFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffProductGridFacade_Factory() { return new DaffProductGridFacade(i0.ɵɵinject(i1.Store)); }, token: DaffProductGridFacade, providedIn: i2.DaffProductModule });
    return DaffProductGridFacade;
}());
export { DaffProductGridFacade };
if (false) {
    /**
     * The loading state for retrieving a list of products.
     * @type {?}
     */
    DaffProductGridFacade.prototype.loading$;
    /**
     * The state for a list of products.
     * @type {?}
     */
    DaffProductGridFacade.prototype.products$;
    /**
     * @type {?}
     * @private
     */
    DaffProductGridFacade.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1ncmlkLmZhY2FkZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9wcm9kdWN0LyIsInNvdXJjZXMiOlsiZmFjYWRlcy9wcm9kdWN0LWdyaWQvcHJvZHVjdC1ncmlkLmZhY2FkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBVSxNQUFNLGFBQWEsQ0FBQztBQUVwRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUd6RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7Ozs7QUFNckU7SUFhRSwrQkFBb0IsS0FBeUM7UUFBekMsVUFBSyxHQUFMLEtBQUssQ0FBb0M7UUFDdkQsSUFBQSw4QkFHMEIsRUFGL0IsZ0VBQTZCLEVBQzdCLHdDQUMrQjtRQUU5QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0gsd0NBQVE7Ozs7O0lBQVIsVUFBUyxNQUFjO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQTVCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLGlCQUFpQjtpQkFDOUI7Ozs7Z0JBYlEsS0FBSzs7O2dDQUZkO0NBMENDLEFBN0JELElBNkJDO1NBMUJZLHFCQUFxQjs7Ozs7O0lBSWhDLHlDQUE4Qjs7Ozs7SUFJOUIsMENBQTJCOzs7OztJQUVmLHNDQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFN0b3JlLCBzZWxlY3QsIEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgRGFmZlByb2R1Y3RNb2R1bGUgfSBmcm9tICcuLi8uLi9wcm9kdWN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBEYWZmUHJvZHVjdFJlZHVjZXJzU3RhdGUgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9wcm9kdWN0LXJlZHVjZXJzLXN0YXRlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBEYWZmUHJvZHVjdCB9IGZyb20gJy4uLy4uL21vZGVscy9wcm9kdWN0JztcbmltcG9ydCB7IGdldERhZmZQcm9kdWN0U2VsZWN0b3JzIH0gZnJvbSAnLi4vLi4vc2VsZWN0b3JzL3B1YmxpY19hcGknO1xuaW1wb3J0IHsgRGFmZlByb2R1Y3RHcmlkRmFjYWRlSW50ZXJmYWNlIH0gZnJvbSAnLi9wcm9kdWN0LWdyaWQtZmFjYWRlLmludGVyZmFjZSc7XG5cbi8qKlxuICogQSBmYWNhZGUgZm9yIGFjY2Vzc2luZyBzdGF0ZSBmb3IgYSBsaXN0IG9mIHByb2R1Y3RzIGZyb20gYW4gYXBwbGljYXRpb24gY29tcG9uZW50LlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IERhZmZQcm9kdWN0TW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIERhZmZQcm9kdWN0R3JpZEZhY2FkZTxUIGV4dGVuZHMgRGFmZlByb2R1Y3QgPSBEYWZmUHJvZHVjdD4gaW1wbGVtZW50cyBEYWZmUHJvZHVjdEdyaWRGYWNhZGVJbnRlcmZhY2U8VD4ge1xuICAvKipcbiAgICogVGhlIGxvYWRpbmcgc3RhdGUgZm9yIHJldHJpZXZpbmcgYSBsaXN0IG9mIHByb2R1Y3RzLlxuICAgKi9cbiAgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIC8qKlxuICAgKiBUaGUgc3RhdGUgZm9yIGEgbGlzdCBvZiBwcm9kdWN0cy5cbiAgICovXG4gIHByb2R1Y3RzJDogT2JzZXJ2YWJsZTxUW10+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPERhZmZQcm9kdWN0UmVkdWNlcnNTdGF0ZTxUPj4pIHtcblx0XHRjb25zdCB7XG5cdFx0XHRzZWxlY3RQcm9kdWN0R3JpZExvYWRpbmdTdGF0ZSxcblx0XHRcdHNlbGVjdEFsbFByb2R1Y3RzXG5cdFx0fSA9IGdldERhZmZQcm9kdWN0U2VsZWN0b3JzPFQ+KCk7XG5cbiAgICB0aGlzLmxvYWRpbmckID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RQcm9kdWN0R3JpZExvYWRpbmdTdGF0ZSkpO1xuICAgIHRoaXMucHJvZHVjdHMkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RBbGxQcm9kdWN0cykpO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoZXMgYW4gYWN0aW9uIHRvIHRoZSByeGpzIGFjdGlvbiBzdHJlYW0uXG4gICAqL1xuICBkaXNwYXRjaChhY3Rpb246IEFjdGlvbikge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcbiAgfVxufVxuIl19