/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectDaffContactLoading, selectDaffContactError, selectDaffContactSuccess, } from '../selectors/contact.selector';
import { DaffContactStateModule } from '../contact.module';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../contact.module";
export class DaffContactFacade {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this.success$ = this.store.select(selectDaffContactSuccess);
        this.error$ = this.store.select(selectDaffContactError);
        this.loading$ = this.store.select(selectDaffContactLoading);
    }
    /**
     * @param {?} action
     * @return {?}
     */
    dispatch(action) {
        this.store.dispatch(action);
    }
}
DaffContactFacade.decorators = [
    { type: Injectable, args: [{ providedIn: DaffContactStateModule },] }
];
/** @nocollapse */
DaffContactFacade.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ DaffContactFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffContactFacade_Factory() { return new DaffContactFacade(i0.ɵɵinject(i1.Store)); }, token: DaffContactFacade, providedIn: i2.DaffContactStateModule });
if (false) {
    /** @type {?} */
    DaffContactFacade.prototype.success$;
    /** @type {?} */
    DaffContactFacade.prototype.error$;
    /** @type {?} */
    DaffContactFacade.prototype.loading$;
    /**
     * @type {?}
     * @private
     */
    DaffContactFacade.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5mYWNhZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY29udGFjdC9zdGF0ZS8iLCJzb3VyY2VzIjpbImZhY2FkZXMvY29udGFjdC5mYWNhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFVLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUc1QyxPQUFPLEVBRU4sd0JBQXdCLEVBQ3hCLHNCQUFzQixFQUN0Qix3QkFBd0IsR0FDeEIsTUFBTSwrQkFBK0IsQ0FBQztBQUN2QyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUkzRCxNQUFNLE9BQU8saUJBQWlCOzs7O0lBSzdCLFlBQW9CLEtBQXFDO1FBQXJDLFVBQUssR0FBTCxLQUFLLENBQWdDO1FBSnpELGFBQVEsR0FBd0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUM1RSxXQUFNLEdBQXlCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDekUsYUFBUSxHQUF3QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBRWYsQ0FBQzs7Ozs7SUFDOUQsUUFBUSxDQUFDLE1BQWM7UUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7O1lBVEQsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLHNCQUFzQixFQUFFOzs7O1lBWmpDLEtBQUs7Ozs7O0lBY3JCLHFDQUE0RTs7SUFDNUUsbUNBQXlFOztJQUN6RSxxQ0FBNEU7Ozs7O0lBRWhFLGtDQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbiwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7XG5cdERhZmZDb250YWN0RmVhdHVyZVN0YXRlLFxuXHRzZWxlY3REYWZmQ29udGFjdExvYWRpbmcsXG5cdHNlbGVjdERhZmZDb250YWN0RXJyb3IsXG5cdHNlbGVjdERhZmZDb250YWN0U3VjY2Vzcyxcbn0gZnJvbSAnLi4vc2VsZWN0b3JzL2NvbnRhY3Quc2VsZWN0b3InO1xuaW1wb3J0IHsgRGFmZkNvbnRhY3RTdGF0ZU1vZHVsZSB9IGZyb20gJy4uL2NvbnRhY3QubW9kdWxlJztcbmltcG9ydCB7IERhZmZDb250YWN0RmFjYWRlSW50ZXJmYWNlIH0gZnJvbSAnLi9jb250YWN0LWZhY2FkZS5pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46IERhZmZDb250YWN0U3RhdGVNb2R1bGUgfSlcbmV4cG9ydCBjbGFzcyBEYWZmQ29udGFjdEZhY2FkZSBpbXBsZW1lbnRzIERhZmZDb250YWN0RmFjYWRlSW50ZXJmYWNlIHtcblx0c3VjY2VzcyQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLnN0b3JlLnNlbGVjdChzZWxlY3REYWZmQ29udGFjdFN1Y2Nlc3MpO1xuXHRlcnJvciQ6IE9ic2VydmFibGU8c3RyaW5nW10+ID0gdGhpcy5zdG9yZS5zZWxlY3Qoc2VsZWN0RGFmZkNvbnRhY3RFcnJvcik7XG5cdGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5zdG9yZS5zZWxlY3Qoc2VsZWN0RGFmZkNvbnRhY3RMb2FkaW5nKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxEYWZmQ29udGFjdEZlYXR1cmVTdGF0ZT4pIHsgfVxuXHRkaXNwYXRjaChhY3Rpb246IEFjdGlvbikge1xuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcblx0fVxufVxuIl19