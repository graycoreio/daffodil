/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { DaffShippingModule } from '../shipping.module';
import { selectShippingAddress, selectShippingOptionId, selectIsShippingAddressValid } from '../selectors/shipping.selectors';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../shipping.module";
/**
 * A facade for accessing state for shipping information.
 */
export class DaffShippingFacade {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this.shippingAddress$ = this.store.pipe(select(selectShippingAddress));
        this.selectedShippingOptionId$ = this.store.pipe(select(selectShippingOptionId));
        this.isShippingAddressValid$ = this.store.pipe(select(selectIsShippingAddressValid));
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
DaffShippingFacade.decorators = [
    { type: Injectable, args: [{
                providedIn: DaffShippingModule
            },] }
];
/** @nocollapse */
DaffShippingFacade.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ DaffShippingFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffShippingFacade_Factory() { return new DaffShippingFacade(i0.ɵɵinject(i1.Store)); }, token: DaffShippingFacade, providedIn: i2.DaffShippingModule });
if (false) {
    /**
     * The shipping address for the customer.
     * @type {?}
     */
    DaffShippingFacade.prototype.shippingAddress$;
    /**
     * The selected shipping option id.
     * @type {?}
     */
    DaffShippingFacade.prototype.selectedShippingOptionId$;
    /**
     * Is the shipping address valid.
     * @type {?}
     */
    DaffShippingFacade.prototype.isShippingAddressValid$;
    /**
     * @type {?}
     * @private
     */
    DaffShippingFacade.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmcuZmFjYWRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NoZWNrb3V0LyIsInNvdXJjZXMiOlsic2hpcHBpbmcvZmFjYWRlcy9zaGlwcGluZy5mYWNhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQVUsTUFBTSxhQUFhLENBQUM7QUFLcEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFeEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLHNCQUFzQixFQUFFLDRCQUE0QixFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7Ozs7QUFROUgsTUFBTSxPQUFPLGtCQUFrQjs7OztJQWM3QixZQUFvQixLQUF1QztRQUF2QyxVQUFLLEdBQUwsS0FBSyxDQUFrQztRQUN6RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztJQUN2RixDQUFDOzs7Ozs7SUFNRCxRQUFRLENBQUMsTUFBYztRQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUE3QkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxrQkFBa0I7YUFDL0I7Ozs7WUFkUSxLQUFLOzs7Ozs7OztJQW1CWiw4Q0FBMEM7Ozs7O0lBSTFDLHVEQUE4Qzs7Ozs7SUFJOUMscURBQTZDOzs7OztJQUVqQyxtQ0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdG9yZSwgc2VsZWN0LCBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IERhZmZBZGRyZXNzIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUnO1xuaW1wb3J0IHsgRGFmZlN0b3JlRmFjYWRlIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvc3RhdGUnO1xuXG5pbXBvcnQgeyBEYWZmU2hpcHBpbmdNb2R1bGUgfSBmcm9tICcuLi9zaGlwcGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgRGFmZlNoaXBwaW5nUmVkdWNlcnNTdGF0ZSB9IGZyb20gJy4uL3JlZHVjZXJzL3NoaXBwaW5nLXJlZHVjZXJzLmludGVyZmFjZSc7XG5pbXBvcnQgeyBzZWxlY3RTaGlwcGluZ0FkZHJlc3MsIHNlbGVjdFNoaXBwaW5nT3B0aW9uSWQsIHNlbGVjdElzU2hpcHBpbmdBZGRyZXNzVmFsaWQgfSBmcm9tICcuLi9zZWxlY3RvcnMvc2hpcHBpbmcuc2VsZWN0b3JzJztcblxuLyoqXG4gKiBBIGZhY2FkZSBmb3IgYWNjZXNzaW5nIHN0YXRlIGZvciBzaGlwcGluZyBpbmZvcm1hdGlvbi5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBEYWZmU2hpcHBpbmdNb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgRGFmZlNoaXBwaW5nRmFjYWRlIGltcGxlbWVudHMgRGFmZlN0b3JlRmFjYWRlPEFjdGlvbj4ge1xuICAvKipcbiAgICogVGhlIHNoaXBwaW5nIGFkZHJlc3MgZm9yIHRoZSBjdXN0b21lci5cbiAgICovXG4gIHNoaXBwaW5nQWRkcmVzcyQ6IE9ic2VydmFibGU8RGFmZkFkZHJlc3M+O1xuICAvKipcbiAgICogVGhlIHNlbGVjdGVkIHNoaXBwaW5nIG9wdGlvbiBpZC5cbiAgICovXG4gIHNlbGVjdGVkU2hpcHBpbmdPcHRpb25JZCQ6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgLyoqXG4gICAqIElzIHRoZSBzaGlwcGluZyBhZGRyZXNzIHZhbGlkLlxuICAgKi9cbiAgaXNTaGlwcGluZ0FkZHJlc3NWYWxpZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8RGFmZlNoaXBwaW5nUmVkdWNlcnNTdGF0ZT4pIHtcbiAgICB0aGlzLnNoaXBwaW5nQWRkcmVzcyQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdFNoaXBwaW5nQWRkcmVzcykpO1xuICAgIHRoaXMuc2VsZWN0ZWRTaGlwcGluZ09wdGlvbklkJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0U2hpcHBpbmdPcHRpb25JZCkpO1xuICAgIHRoaXMuaXNTaGlwcGluZ0FkZHJlc3NWYWxpZCQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdElzU2hpcHBpbmdBZGRyZXNzVmFsaWQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaGVzIHRoZSBnaXZlbiBhY3Rpb24uXG4gICAqIEBwYXJhbSBhY3Rpb24gYWN0aW9uIHRvIGRpc3BhdGNoLlxuICAgKi9cbiAgZGlzcGF0Y2goYWN0aW9uOiBBY3Rpb24pIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XG4gIH1cbn1cbiJdfQ==