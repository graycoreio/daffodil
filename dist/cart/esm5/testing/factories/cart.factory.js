/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffCartTotalTypeEnum } from '@daffodil/cart';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
var MockCart = /** @class */ (function () {
    function MockCart() {
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
    return MockCart;
}());
export { MockCart };
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
var DaffCartFactory = /** @class */ (function (_super) {
    tslib_1.__extends(DaffCartFactory, _super);
    function DaffCartFactory() {
        return _super.call(this, MockCart) || this;
    }
    DaffCartFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffCartFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffCartFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffCartFactory_Factory() { return new DaffCartFactory(); }, token: DaffCartFactory, providedIn: "root" });
    return DaffCartFactory;
}(DaffModelFactory));
export { DaffCartFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvdGVzdGluZy8iLCJzb3VyY2VzIjpbImZhY3Rvcmllcy9jYXJ0LmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sb0JBQW9CLENBQUM7QUFFNUMsT0FBTyxFQUFZLHFCQUFxQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRTFEO0lBQUE7UUFDRSxPQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQzlDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxvQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2QixxQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDeEIseUJBQW9CLEdBQUcsSUFBSSxDQUFDO1FBQzVCLFdBQU0sR0FBRztZQUNUO2dCQUNDLElBQUksRUFBRSxxQkFBcUIsQ0FBQyxVQUFVO2dCQUN0QyxLQUFLLEVBQUUsSUFBSTtnQkFDWCxLQUFLLEVBQUUsYUFBYTthQUNwQjtZQUNEO2dCQUNDLElBQUksRUFBRSxxQkFBcUIsQ0FBQyxvQkFBb0I7Z0JBQ2hELEtBQUssRUFBRSxHQUFHO2dCQUNWLEtBQUssRUFBRSx3QkFBd0I7YUFDL0I7WUFDRDtnQkFDQyxJQUFJLEVBQUUscUJBQXFCLENBQUMsb0JBQW9CO2dCQUNoRCxLQUFLLEVBQUUsR0FBRztnQkFDVixLQUFLLEVBQUUsd0JBQXdCO2FBQy9CO1lBQ0Q7Z0JBQ0MsSUFBSSxFQUFFLHFCQUFxQixDQUFDLGdDQUFnQztnQkFDNUQsS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsS0FBSyxFQUFFLEVBQUU7YUFDVDtZQUNEO2dCQUNDLElBQUksRUFBRSxxQkFBcUIsQ0FBQyxnQ0FBZ0M7Z0JBQzVELEtBQUssRUFBRSxHQUFHO2dCQUNWLEtBQUssRUFBRSxFQUFFO2FBQ1Q7WUFDRDtnQkFDQyxJQUFJLEVBQUUscUJBQXFCLENBQUMsR0FBRztnQkFDL0IsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsS0FBSyxFQUFFLEVBQUU7YUFDVDtZQUNEO2dCQUNDLElBQUksRUFBRSxxQkFBcUIsQ0FBQyxRQUFRO2dCQUNwQyxLQUFLLEVBQUUsRUFBRTtnQkFDVCxLQUFLLEVBQUUsRUFBRTthQUNUO1lBQ0Q7Z0JBQ0MsSUFBSSxFQUFFLHFCQUFxQixDQUFDLFFBQVE7Z0JBQ3BDLEtBQUssRUFBRSxFQUFFO2dCQUNULEtBQUssRUFBRSxVQUFVO2FBQ2pCO1NBQ0QsQ0FBQztRQUNELFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDZiwrQkFBMEIsR0FBRyxFQUFFLENBQUM7UUFDaEMsOEJBQXlCLEdBQUcsRUFBRSxDQUFDO1FBQy9CLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBQUQsZUFBQztBQUFELENBQUMsQUF2REQsSUF1REM7Ozs7SUF0REMsc0JBQThDOztJQUM5Qyw0QkFBaUI7O0lBQ2pCLCtCQUFvQjs7SUFDcEIsMkJBQWE7O0lBQ2IseUJBQVc7O0lBQ1gsbUNBQXVCOztJQUN2QixvQ0FBd0I7O0lBQ3hCLHdDQUE0Qjs7SUFDNUIsMEJBeUNDOztJQUNELDJCQUFlOztJQUNmLDhDQUFnQzs7SUFDaEMsNkNBQStCOztJQUMvQixvQ0FBc0I7O0FBQ3ZCLENBQUM7QUFFRjtJQUdxQywyQ0FBMEI7SUFDN0Q7ZUFDRSxrQkFBTSxRQUFRLENBQUM7SUFDakIsQ0FBQzs7Z0JBTkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7MEJBakVEO0NBc0VDLEFBUEQsQ0FHcUMsZ0JBQWdCLEdBSXBEO1NBSlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGZha2VyIGZyb20gJ2Zha2VyL2xvY2FsZS9lbl9VUyc7XG5cbmltcG9ydCB7IERhZmZDYXJ0LCBEYWZmQ2FydFRvdGFsVHlwZUVudW0gfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQgeyBEYWZmTW9kZWxGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5cbmV4cG9ydCBjbGFzcyBNb2NrQ2FydCBpbXBsZW1lbnRzIERhZmZDYXJ0IHtcbiAgaWQgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pO1xuICBzdWJ0b3RhbCA9IDEwMDAwO1xuICBncmFuZF90b3RhbCA9IDE1MDAwO1xuICBjb3Vwb25zID0gW107XG4gIGl0ZW1zID0gW107XG4gIGJpbGxpbmdfYWRkcmVzcyA9IG51bGw7XG4gIHNoaXBwaW5nX2FkZHJlc3MgPSBudWxsO1xuICBzaGlwcGluZ19pbmZvcm1hdGlvbiA9IG51bGw7XG4gIHRvdGFscyA9IFtcblx0XHR7XG5cdFx0XHRuYW1lOiBEYWZmQ2FydFRvdGFsVHlwZUVudW0uZ3JhbmRUb3RhbCxcblx0XHRcdHZhbHVlOiAxMDUwLFxuXHRcdFx0bGFiZWw6ICdHcmFuZCBUb3RhbCdcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6IERhZmZDYXJ0VG90YWxUeXBlRW51bS5zdWJ0b3RhbEV4Y2x1ZGluZ1RheCxcblx0XHRcdHZhbHVlOiA5MDAsXG5cdFx0XHRsYWJlbDogJ1N1YnRvdGFsIEV4Y2x1ZGluZyBUYXgnXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRuYW1lOiBEYWZmQ2FydFRvdGFsVHlwZUVudW0uc3VidG90YWxJbmNsdWRpbmdUYXgsXG5cdFx0XHR2YWx1ZTogOTUwLFxuXHRcdFx0bGFiZWw6ICdTdWJ0b3RhbCBJbmNsdWRpbmcgVGF4J1xuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogRGFmZkNhcnRUb3RhbFR5cGVFbnVtLnN1YnRvdGFsV2l0aERpc2NvdW50RXhjbHVkaW5nVGF4LFxuXHRcdFx0dmFsdWU6IDg1MCxcblx0XHRcdGxhYmVsOiAnJ1xuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogRGFmZkNhcnRUb3RhbFR5cGVFbnVtLnN1YnRvdGFsV2l0aERpc2NvdW50SW5jbHVkaW5nVGF4LFxuXHRcdFx0dmFsdWU6IDkwMCxcblx0XHRcdGxhYmVsOiAnJ1xuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogRGFmZkNhcnRUb3RhbFR5cGVFbnVtLnRheCxcblx0XHRcdHZhbHVlOiA1MCxcblx0XHRcdGxhYmVsOiAnJ1xuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogRGFmZkNhcnRUb3RhbFR5cGVFbnVtLmRpc2NvdW50LFxuXHRcdFx0dmFsdWU6IDUwLFxuXHRcdFx0bGFiZWw6ICcnXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRuYW1lOiBEYWZmQ2FydFRvdGFsVHlwZUVudW0uc2hpcHBpbmcsXG5cdFx0XHR2YWx1ZTogNTAsXG5cdFx0XHRsYWJlbDogJ1NoaXBwaW5nJ1xuXHRcdH1cblx0XTtcbiAgcGF5bWVudCA9IG51bGw7XG4gIGF2YWlsYWJsZV9zaGlwcGluZ19tZXRob2RzID0gW107XG4gIGF2YWlsYWJsZV9wYXltZW50X21ldGhvZHMgPSBbXTtcbiAgZXh0cmFfYXR0cmlidXRlcyA9IHt9O1xufTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRGYWN0b3J5IGV4dGVuZHMgRGFmZk1vZGVsRmFjdG9yeTxEYWZmQ2FydD57XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKE1vY2tDYXJ0KTtcbiAgfVxufVxuIl19