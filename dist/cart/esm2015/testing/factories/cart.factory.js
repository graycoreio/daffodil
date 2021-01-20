/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffCartTotalTypeEnum } from '@daffodil/cart';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
export class MockCart {
    constructor() {
        this.id = faker.random.number({ min: 1, max: 1000 });
        this.subtotal = 10000;
        this.grand_total = 15000;
        this.coupons = [];
        this.items = [];
        this.billing_address = null;
        this.shipping_address = null;
        this.shipping_information = null;
        this.totals = [
            {
                name: DaffCartTotalTypeEnum.grandTotal,
                value: 1050,
                label: 'Grand Total'
            },
            {
                name: DaffCartTotalTypeEnum.subtotalExcludingTax,
                value: 900,
                label: 'Subtotal Excluding Tax'
            },
            {
                name: DaffCartTotalTypeEnum.subtotalIncludingTax,
                value: 950,
                label: 'Subtotal Including Tax'
            },
            {
                name: DaffCartTotalTypeEnum.subtotalWithDiscountExcludingTax,
                value: 850,
                label: ''
            },
            {
                name: DaffCartTotalTypeEnum.subtotalWithDiscountIncludingTax,
                value: 900,
                label: ''
            },
            {
                name: DaffCartTotalTypeEnum.tax,
                value: 50,
                label: ''
            },
            {
                name: DaffCartTotalTypeEnum.discount,
                value: 50,
                label: ''
            },
            {
                name: DaffCartTotalTypeEnum.shipping,
                value: 50,
                label: 'Shipping'
            }
        ];
        this.payment = null;
        this.available_shipping_methods = [];
        this.available_payment_methods = [];
        this.extra_attributes = {};
    }
}
if (false) {
    /** @type {?} */
    MockCart.prototype.id;
    /** @type {?} */
    MockCart.prototype.subtotal;
    /** @type {?} */
    MockCart.prototype.grand_total;
    /** @type {?} */
    MockCart.prototype.coupons;
    /** @type {?} */
    MockCart.prototype.items;
    /** @type {?} */
    MockCart.prototype.billing_address;
    /** @type {?} */
    MockCart.prototype.shipping_address;
    /** @type {?} */
    MockCart.prototype.shipping_information;
    /** @type {?} */
    MockCart.prototype.totals;
    /** @type {?} */
    MockCart.prototype.payment;
    /** @type {?} */
    MockCart.prototype.available_shipping_methods;
    /** @type {?} */
    MockCart.prototype.available_payment_methods;
    /** @type {?} */
    MockCart.prototype.extra_attributes;
}
;
export class DaffCartFactory extends DaffModelFactory {
    constructor() {
        super(MockCart);
    }
}
DaffCartFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffCartFactory.ctorParameters = () => [];
/** @nocollapse */ DaffCartFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffCartFactory_Factory() { return new DaffCartFactory(); }, token: DaffCartFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvdGVzdGluZy8iLCJzb3VyY2VzIjpbImZhY3Rvcmllcy9jYXJ0LmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxvQkFBb0IsQ0FBQztBQUU1QyxPQUFPLEVBQVkscUJBQXFCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFFMUQsTUFBTSxPQUFPLFFBQVE7SUFBckI7UUFDRSxPQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQzlDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxvQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2QixxQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDeEIseUJBQW9CLEdBQUcsSUFBSSxDQUFDO1FBQzVCLFdBQU0sR0FBRztZQUNUO2dCQUNDLElBQUksRUFBRSxxQkFBcUIsQ0FBQyxVQUFVO2dCQUN0QyxLQUFLLEVBQUUsSUFBSTtnQkFDWCxLQUFLLEVBQUUsYUFBYTthQUNwQjtZQUNEO2dCQUNDLElBQUksRUFBRSxxQkFBcUIsQ0FBQyxvQkFBb0I7Z0JBQ2hELEtBQUssRUFBRSxHQUFHO2dCQUNWLEtBQUssRUFBRSx3QkFBd0I7YUFDL0I7WUFDRDtnQkFDQyxJQUFJLEVBQUUscUJBQXFCLENBQUMsb0JBQW9CO2dCQUNoRCxLQUFLLEVBQUUsR0FBRztnQkFDVixLQUFLLEVBQUUsd0JBQXdCO2FBQy9CO1lBQ0Q7Z0JBQ0MsSUFBSSxFQUFFLHFCQUFxQixDQUFDLGdDQUFnQztnQkFDNUQsS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsS0FBSyxFQUFFLEVBQUU7YUFDVDtZQUNEO2dCQUNDLElBQUksRUFBRSxxQkFBcUIsQ0FBQyxnQ0FBZ0M7Z0JBQzVELEtBQUssRUFBRSxHQUFHO2dCQUNWLEtBQUssRUFBRSxFQUFFO2FBQ1Q7WUFDRDtnQkFDQyxJQUFJLEVBQUUscUJBQXFCLENBQUMsR0FBRztnQkFDL0IsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsS0FBSyxFQUFFLEVBQUU7YUFDVDtZQUNEO2dCQUNDLElBQUksRUFBRSxxQkFBcUIsQ0FBQyxRQUFRO2dCQUNwQyxLQUFLLEVBQUUsRUFBRTtnQkFDVCxLQUFLLEVBQUUsRUFBRTthQUNUO1lBQ0Q7Z0JBQ0MsSUFBSSxFQUFFLHFCQUFxQixDQUFDLFFBQVE7Z0JBQ3BDLEtBQUssRUFBRSxFQUFFO2dCQUNULEtBQUssRUFBRSxVQUFVO2FBQ2pCO1NBQ0QsQ0FBQztRQUNELFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDZiwrQkFBMEIsR0FBRyxFQUFFLENBQUM7UUFDaEMsOEJBQXlCLEdBQUcsRUFBRSxDQUFDO1FBQy9CLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztJQUN4QixDQUFDO0NBQUE7OztJQXREQyxzQkFBOEM7O0lBQzlDLDRCQUFpQjs7SUFDakIsK0JBQW9COztJQUNwQiwyQkFBYTs7SUFDYix5QkFBVzs7SUFDWCxtQ0FBdUI7O0lBQ3ZCLG9DQUF3Qjs7SUFDeEIsd0NBQTRCOztJQUM1QiwwQkF5Q0M7O0lBQ0QsMkJBQWU7O0lBQ2YsOENBQWdDOztJQUNoQyw2Q0FBK0I7O0lBQy9CLG9DQUFzQjs7QUFDdkIsQ0FBQztBQUtGLE1BQU0sT0FBTyxlQUFnQixTQUFRLGdCQUEwQjtJQUM3RDtRQUNFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQixDQUFDOzs7WUFORixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBmYWtlciBmcm9tICdmYWtlci9sb2NhbGUvZW5fVVMnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydCwgRGFmZkNhcnRUb3RhbFR5cGVFbnVtIH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuaW1wb3J0IHsgRGFmZk1vZGVsRmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuXG5leHBvcnQgY2xhc3MgTW9ja0NhcnQgaW1wbGVtZW50cyBEYWZmQ2FydCB7XG4gIGlkID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMDB9KTtcbiAgc3VidG90YWwgPSAxMDAwMDtcbiAgZ3JhbmRfdG90YWwgPSAxNTAwMDtcbiAgY291cG9ucyA9IFtdO1xuICBpdGVtcyA9IFtdO1xuICBiaWxsaW5nX2FkZHJlc3MgPSBudWxsO1xuICBzaGlwcGluZ19hZGRyZXNzID0gbnVsbDtcbiAgc2hpcHBpbmdfaW5mb3JtYXRpb24gPSBudWxsO1xuICB0b3RhbHMgPSBbXG5cdFx0e1xuXHRcdFx0bmFtZTogRGFmZkNhcnRUb3RhbFR5cGVFbnVtLmdyYW5kVG90YWwsXG5cdFx0XHR2YWx1ZTogMTA1MCxcblx0XHRcdGxhYmVsOiAnR3JhbmQgVG90YWwnXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRuYW1lOiBEYWZmQ2FydFRvdGFsVHlwZUVudW0uc3VidG90YWxFeGNsdWRpbmdUYXgsXG5cdFx0XHR2YWx1ZTogOTAwLFxuXHRcdFx0bGFiZWw6ICdTdWJ0b3RhbCBFeGNsdWRpbmcgVGF4J1xuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogRGFmZkNhcnRUb3RhbFR5cGVFbnVtLnN1YnRvdGFsSW5jbHVkaW5nVGF4LFxuXHRcdFx0dmFsdWU6IDk1MCxcblx0XHRcdGxhYmVsOiAnU3VidG90YWwgSW5jbHVkaW5nIFRheCdcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6IERhZmZDYXJ0VG90YWxUeXBlRW51bS5zdWJ0b3RhbFdpdGhEaXNjb3VudEV4Y2x1ZGluZ1RheCxcblx0XHRcdHZhbHVlOiA4NTAsXG5cdFx0XHRsYWJlbDogJydcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6IERhZmZDYXJ0VG90YWxUeXBlRW51bS5zdWJ0b3RhbFdpdGhEaXNjb3VudEluY2x1ZGluZ1RheCxcblx0XHRcdHZhbHVlOiA5MDAsXG5cdFx0XHRsYWJlbDogJydcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6IERhZmZDYXJ0VG90YWxUeXBlRW51bS50YXgsXG5cdFx0XHR2YWx1ZTogNTAsXG5cdFx0XHRsYWJlbDogJydcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6IERhZmZDYXJ0VG90YWxUeXBlRW51bS5kaXNjb3VudCxcblx0XHRcdHZhbHVlOiA1MCxcblx0XHRcdGxhYmVsOiAnJ1xuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogRGFmZkNhcnRUb3RhbFR5cGVFbnVtLnNoaXBwaW5nLFxuXHRcdFx0dmFsdWU6IDUwLFxuXHRcdFx0bGFiZWw6ICdTaGlwcGluZydcblx0XHR9XG5cdF07XG4gIHBheW1lbnQgPSBudWxsO1xuICBhdmFpbGFibGVfc2hpcHBpbmdfbWV0aG9kcyA9IFtdO1xuICBhdmFpbGFibGVfcGF5bWVudF9tZXRob2RzID0gW107XG4gIGV4dHJhX2F0dHJpYnV0ZXMgPSB7fTtcbn07XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0RmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8RGFmZkNhcnQ+e1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihNb2NrQ2FydCk7XG4gIH1cbn1cbiJdfQ==