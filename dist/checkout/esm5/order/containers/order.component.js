/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectOrder, selectLoading } from '../selectors/order.selector';
/**
 * @deprecated
 */
var OrderContainer = /** @class */ (function () {
    function OrderContainer(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    OrderContainer.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.order$ = this.store.pipe(select(selectOrder));
        this.loading$ = this.store.pipe(select(selectLoading));
    };
    OrderContainer.decorators = [
        { type: Component, args: [{
                    selector: '[order-container]',
                    template: '<ng-content></ng-content>',
                    exportAs: 'OrderContainer'
                }] }
    ];
    /** @nocollapse */
    OrderContainer.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return OrderContainer;
}());
export { OrderContainer };
if (false) {
    /** @type {?} */
    OrderContainer.prototype.order$;
    /** @type {?} */
    OrderContainer.prototype.loading$;
    /**
     * @type {?}
     * @private
     */
    OrderContainer.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NoZWNrb3V0LyIsInNvdXJjZXMiOlsib3JkZXIvY29udGFpbmVycy9vcmRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHNUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7OztBQU16RTtJQVVFLHdCQUNVLEtBQW9DO1FBQXBDLFVBQUssR0FBTCxLQUFLLENBQStCO0lBQzFDLENBQUM7Ozs7SUFFTCxpQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Z0JBakJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxRQUFRLEVBQUUsZ0JBQWdCO2lCQUMzQjs7OztnQkFiUSxLQUFLOztJQTJCZCxxQkFBQztDQUFBLEFBbEJELElBa0JDO1NBYlksY0FBYzs7O0lBRXpCLGdDQUE4Qjs7SUFDOUIsa0NBQThCOzs7OztJQUc1QiwrQkFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU3RvcmUsIHNlbGVjdCB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgRGFmZk9yZGVyUmVkdWNlcnNTdGF0ZSB9IGZyb20gJy4uL3JlZHVjZXJzL29yZGVyLXJlZHVjZXJzLmludGVyZmFjZSc7XG5pbXBvcnQgeyBzZWxlY3RPcmRlciwgc2VsZWN0TG9hZGluZyB9IGZyb20gJy4uL3NlbGVjdG9ycy9vcmRlci5zZWxlY3Rvcic7XG5pbXBvcnQgeyBEYWZmT3JkZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMvb3JkZXIvb3JkZXInO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tvcmRlci1jb250YWluZXJdJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgZXhwb3J0QXM6ICdPcmRlckNvbnRhaW5lcidcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJDb250YWluZXIgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIG9yZGVyJDogT2JzZXJ2YWJsZTxEYWZmT3JkZXI+O1xuICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxEYWZmT3JkZXJSZWR1Y2Vyc1N0YXRlPlxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMub3JkZXIkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RPcmRlcikpO1xuICAgIHRoaXMubG9hZGluZyQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdExvYWRpbmcpKTtcbiAgfVxufVxuIl19