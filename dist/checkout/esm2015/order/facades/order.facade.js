/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { DaffOrderModule } from '../order.module';
import { selectOrder, selectLoading, selectErrors } from '../selectors/order.selector';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../order.module";
/**
 * A facade for accessing state for the currently selected category.
 */
/**
 * @deprecated
 */
export class DaffOrderFacade {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this.order$ = this.store.pipe(select(selectOrder));
        this.loading$ = this.store.pipe(select(selectLoading));
        this.errors$ = this.store.pipe(select(selectErrors));
    }
    /**
     * Dispatches the given action.
     * @param {?} action action to dispatch.
     * @return {?}
     */
    dispatch(action) {
        this.store.dispatch(action);
    }
}
DaffOrderFacade.decorators = [
    { type: Injectable, args: [{
                providedIn: DaffOrderModule
            },] }
];
/** @nocollapse */
DaffOrderFacade.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ DaffOrderFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffOrderFacade_Factory() { return new DaffOrderFacade(i0.ɵɵinject(i1.Store)); }, token: DaffOrderFacade, providedIn: i2.DaffOrderModule });
if (false) {
    /**
     * The current order.
     * @type {?}
     */
    DaffOrderFacade.prototype.order$;
    /**
     * The loading state for the current order.
     * @type {?}
     */
    DaffOrderFacade.prototype.loading$;
    /**
     * Any errors involved in loading the order.
     * @type {?}
     */
    DaffOrderFacade.prototype.errors$;
    /**
     * @type {?}
     * @private
     */
    DaffOrderFacade.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuZmFjYWRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NoZWNrb3V0LyIsInNvdXJjZXMiOlsib3JkZXIvZmFjYWRlcy9vcmRlci5mYWNhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQVUsTUFBTSxhQUFhLENBQUM7QUFHcEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR2xELE9BQU8sRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7Ozs7Ozs7O0FBV3ZGLE1BQU0sT0FBTyxlQUFlOzs7O0lBYzFCLFlBQW9CLEtBQW9DO1FBQXBDLFVBQUssR0FBTCxLQUFLLENBQStCO1FBQ3RELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7OztJQU1ELFFBQVEsQ0FBQyxNQUFjO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQTdCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLGVBQWU7YUFDNUI7Ozs7WUFoQlEsS0FBSzs7Ozs7Ozs7SUFxQlosaUNBQThCOzs7OztJQUk5QixtQ0FBOEI7Ozs7O0lBSTlCLGtDQUE4Qjs7Ozs7SUFFbEIsZ0NBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU3RvcmUsIHNlbGVjdCwgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBEYWZmU3RvcmVGYWNhZGUgfSBmcm9tICdAZGFmZm9kaWwvY29yZS9zdGF0ZSc7XG5pbXBvcnQgeyBEYWZmT3JkZXJNb2R1bGUgfSBmcm9tICcuLi9vcmRlci5tb2R1bGUnO1xuaW1wb3J0IHsgRGFmZk9yZGVyIH0gZnJvbSAnLi4vLi4vbW9kZWxzL29yZGVyL29yZGVyJztcbmltcG9ydCB7IERhZmZPcmRlclJlZHVjZXJzU3RhdGUgfSBmcm9tICcuLi9yZWR1Y2Vycy9vcmRlci1yZWR1Y2Vycy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgc2VsZWN0T3JkZXIsIHNlbGVjdExvYWRpbmcsIHNlbGVjdEVycm9ycyB9IGZyb20gJy4uL3NlbGVjdG9ycy9vcmRlci5zZWxlY3Rvcic7XG5cbi8qKlxuICogQSBmYWNhZGUgZm9yIGFjY2Vzc2luZyBzdGF0ZSBmb3IgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBjYXRlZ29yeS5cbiAqL1xuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IERhZmZPcmRlck1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBEYWZmT3JkZXJGYWNhZGUgaW1wbGVtZW50cyBEYWZmU3RvcmVGYWNhZGU8QWN0aW9uPiB7XG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCBvcmRlci5cbiAgICovXG4gIG9yZGVyJDogT2JzZXJ2YWJsZTxEYWZmT3JkZXI+O1xuICAvKipcbiAgICogVGhlIGxvYWRpbmcgc3RhdGUgZm9yIHRoZSBjdXJyZW50IG9yZGVyLlxuICAgKi9cbiAgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIC8qKlxuICAgKiBBbnkgZXJyb3JzIGludm9sdmVkIGluIGxvYWRpbmcgdGhlIG9yZGVyLlxuICAgKi9cbiAgZXJyb3JzJDogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8RGFmZk9yZGVyUmVkdWNlcnNTdGF0ZT4pIHtcbiAgICB0aGlzLm9yZGVyJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0T3JkZXIpKTtcbiAgICB0aGlzLmxvYWRpbmckID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RMb2FkaW5nKSk7XG4gICAgdGhpcy5lcnJvcnMkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RFcnJvcnMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaGVzIHRoZSBnaXZlbiBhY3Rpb24uXG4gICAqIEBwYXJhbSBhY3Rpb24gYWN0aW9uIHRvIGRpc3BhdGNoLlxuICAgKi9cbiAgZGlzcGF0Y2goYWN0aW9uOiBBY3Rpb24pIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XG4gIH1cbn1cbiJdfQ==