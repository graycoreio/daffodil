/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { DaffUpdateShippingAddress, DaffSelectShippingOption } from '../actions/shipping.actions';
import { selectShippingAddress, selectShippingOptionId, selectIsShippingAddressValid } from '../selectors/shipping.selectors';
export class ShippingContainer {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.shippingAddress$ = this.store.pipe(select(selectShippingAddress));
        this.selectedShippingOptionId$ = this.store.pipe(select(selectShippingOptionId));
        this.isShippingAddressValid$ = this.store.pipe(select(selectIsShippingAddressValid));
    }
    /**
     * @param {?} address
     * @return {?}
     */
    updateShippingAddress(address) {
        this.store.dispatch(new DaffUpdateShippingAddress(address));
    }
    /**
     * @param {?} optionId
     * @return {?}
     */
    selectShippingOption(optionId) {
        this.store.dispatch(new DaffSelectShippingOption(optionId));
    }
}
ShippingContainer.decorators = [
    { type: Component, args: [{
                selector: '[shipping-container]',
                template: '<ng-content></ng-content>',
                exportAs: 'ShippingContainer'
            }] }
];
/** @nocollapse */
ShippingContainer.ctorParameters = () => [
    { type: Store }
];
if (false) {
    /** @type {?} */
    ShippingContainer.prototype.shippingAddress$;
    /** @type {?} */
    ShippingContainer.prototype.selectedShippingOptionId$;
    /** @type {?} */
    ShippingContainer.prototype.isShippingAddressValid$;
    /** @type {?} */
    ShippingContainer.prototype.isShippingOptionSelected$;
    /**
     * @type {?}
     * @private
     */
    ShippingContainer.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NoZWNrb3V0LyIsInNvdXJjZXMiOlsic2hpcHBpbmcvY29udGFpbmVycy9zaGlwcGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFJNUMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLHdCQUF3QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFbEcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLHNCQUFzQixFQUFFLDRCQUE0QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFPOUgsTUFBTSxPQUFPLGlCQUFpQjs7OztJQU81QixZQUNVLEtBQXVDO1FBQXZDLFVBQUssR0FBTCxLQUFLLENBQWtDO0lBQzdDLENBQUM7Ozs7SUFFTCxRQUFRO1FBQ04sSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7SUFDdkYsQ0FBQzs7Ozs7SUFFRCxxQkFBcUIsQ0FBQyxPQUFvQjtRQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLHlCQUF5QixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7SUFFRCxvQkFBb0IsQ0FBQyxRQUFnQjtRQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLHdCQUF3QixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7O1lBNUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxRQUFRLEVBQUUsbUJBQW1CO2FBQzlCOzs7O1lBWlEsS0FBSzs7OztJQWVaLDZDQUEwQzs7SUFDMUMsc0RBQThDOztJQUM5QyxvREFBNkM7O0lBQzdDLHNEQUErQzs7Ozs7SUFHN0Msa0NBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFN0b3JlLCBzZWxlY3QgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IERhZmZBZGRyZXNzIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUnO1xuXG5pbXBvcnQgeyBEYWZmVXBkYXRlU2hpcHBpbmdBZGRyZXNzLCBEYWZmU2VsZWN0U2hpcHBpbmdPcHRpb24gfSBmcm9tICcuLi9hY3Rpb25zL3NoaXBwaW5nLmFjdGlvbnMnO1xuaW1wb3J0IHsgRGFmZlNoaXBwaW5nUmVkdWNlcnNTdGF0ZSB9IGZyb20gJy4uL3JlZHVjZXJzL3NoaXBwaW5nLXJlZHVjZXJzLmludGVyZmFjZSc7XG5pbXBvcnQgeyBzZWxlY3RTaGlwcGluZ0FkZHJlc3MsIHNlbGVjdFNoaXBwaW5nT3B0aW9uSWQsIHNlbGVjdElzU2hpcHBpbmdBZGRyZXNzVmFsaWQgfSBmcm9tICcuLi9zZWxlY3RvcnMvc2hpcHBpbmcuc2VsZWN0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW3NoaXBwaW5nLWNvbnRhaW5lcl0nLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBleHBvcnRBczogJ1NoaXBwaW5nQ29udGFpbmVyJ1xufSlcbmV4cG9ydCBjbGFzcyBTaGlwcGluZ0NvbnRhaW5lciBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIFxuICBzaGlwcGluZ0FkZHJlc3MkOiBPYnNlcnZhYmxlPERhZmZBZGRyZXNzPjtcbiAgc2VsZWN0ZWRTaGlwcGluZ09wdGlvbklkJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICBpc1NoaXBwaW5nQWRkcmVzc1ZhbGlkJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgaXNTaGlwcGluZ09wdGlvblNlbGVjdGVkJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxEYWZmU2hpcHBpbmdSZWR1Y2Vyc1N0YXRlPlxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2hpcHBpbmdBZGRyZXNzJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0U2hpcHBpbmdBZGRyZXNzKSk7XG4gICAgdGhpcy5zZWxlY3RlZFNoaXBwaW5nT3B0aW9uSWQkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RTaGlwcGluZ09wdGlvbklkKSk7XG4gICAgdGhpcy5pc1NoaXBwaW5nQWRkcmVzc1ZhbGlkJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0SXNTaGlwcGluZ0FkZHJlc3NWYWxpZCkpO1xuICB9XG5cbiAgdXBkYXRlU2hpcHBpbmdBZGRyZXNzKGFkZHJlc3M6IERhZmZBZGRyZXNzKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRGFmZlVwZGF0ZVNoaXBwaW5nQWRkcmVzcyhhZGRyZXNzKSk7XG4gIH1cblxuICBzZWxlY3RTaGlwcGluZ09wdGlvbihvcHRpb25JZDogc3RyaW5nKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRGFmZlNlbGVjdFNoaXBwaW5nT3B0aW9uKG9wdGlvbklkKSk7XG4gIH1cbn1cbiJdfQ==