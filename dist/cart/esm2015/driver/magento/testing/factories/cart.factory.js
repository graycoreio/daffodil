/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoMoneyFactory } from '@daffodil/driver/magento/testing';
import * as i0 from "@angular/core";
export class MockMagentoCart {
    constructor() {
        this.__typename = 'Cart';
        this.id = faker.random.number({ min: 1, max: 1000 });
        this.prices = {
            __typename: 'CartPrices',
            subtotal_excluding_tax: this.money(),
            grand_total: this.money(),
            subtotal_including_tax: this.money(),
            subtotal_with_discount_excluding_tax: this.money(),
            applied_taxes: [{
                    __typename: 'AppliedTax',
                    amount: this.money(),
                    label: 'tax'
                }],
            discounts: [{
                    __typename: 'Discount',
                    amount: this.money(),
                    label: 'discount'
                }]
        };
        this.applied_coupons = [];
        this.items = [];
        this.billing_address = null;
        this.shipping_addresses = [];
        this.available_payment_methods = [];
        this.selected_payment_method = null;
        this.email = faker.internet.email();
    }
    /**
     * @private
     * @return {?}
     */
    money() {
        return (new MagentoMoneyFactory()).create();
    }
}
if (false) {
    /** @type {?} */
    MockMagentoCart.prototype.__typename;
    /** @type {?} */
    MockMagentoCart.prototype.id;
    /** @type {?} */
    MockMagentoCart.prototype.prices;
    /** @type {?} */
    MockMagentoCart.prototype.applied_coupons;
    /** @type {?} */
    MockMagentoCart.prototype.items;
    /** @type {?} */
    MockMagentoCart.prototype.billing_address;
    /** @type {?} */
    MockMagentoCart.prototype.shipping_addresses;
    /** @type {?} */
    MockMagentoCart.prototype.available_payment_methods;
    /** @type {?} */
    MockMagentoCart.prototype.selected_payment_method;
    /** @type {?} */
    MockMagentoCart.prototype.email;
}
;
export class MagentoCartFactory extends DaffModelFactory {
    constructor() {
        super(MockMagentoCart);
    }
}
MagentoCartFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MagentoCartFactory.ctorParameters = () => [];
/** @nocollapse */ MagentoCartFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MagentoCartFactory_Factory() { return new MagentoCartFactory(); }, token: MagentoCartFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL21hZ2VudG8vdGVzdGluZy8iLCJzb3VyY2VzIjpbImZhY3Rvcmllcy9jYXJ0LmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxvQkFBb0IsQ0FBQztBQUc1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUUxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7QUFFdkUsTUFBTSxPQUFPLGVBQWU7SUFBNUI7UUFDQyxlQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ25CLE9BQUUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDOUMsV0FBTSxHQUFHO1lBQ1QsVUFBVSxFQUFFLFlBQVk7WUFDdEIsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNwQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUN6QixzQkFBc0IsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3BDLG9DQUFvQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDbEQsYUFBYSxFQUFFLENBQUM7b0JBQ2pCLFVBQVUsRUFBRSxZQUFZO29CQUN4QixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFDcEIsS0FBSyxFQUFFLEtBQUs7aUJBQ1osQ0FBQztZQUNGLFNBQVMsRUFBRSxDQUFDO29CQUNYLFVBQVUsRUFBRSxVQUFVO29CQUN0QixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFDcEIsS0FBSyxFQUFFLFVBQVU7aUJBQ2pCLENBQUM7U0FDRCxDQUFDO1FBQ0Ysb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDckIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLHVCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUN4Qiw4QkFBeUIsR0FBRyxFQUFFLENBQUM7UUFDL0IsNEJBQXVCLEdBQUcsSUFBSSxDQUFDO1FBQy9CLFVBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBS2pDLENBQUM7Ozs7O0lBSFMsS0FBSztRQUNYLE9BQU8sQ0FBQyxJQUFJLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQTtJQUM3QyxDQUFDO0NBQ0Y7OztJQTlCQSxxQ0FBb0I7O0lBQ25CLDZCQUE4Qzs7SUFDOUMsaUNBZ0JFOztJQUNGLDBDQUFxQjs7SUFDckIsZ0NBQVc7O0lBQ1gsMENBQXVCOztJQUN2Qiw2Q0FBd0I7O0lBQ3hCLG9EQUErQjs7SUFDL0Isa0RBQStCOztJQUMvQixnQ0FBK0I7O0FBS2hDLENBQUM7QUFNRixNQUFNLE9BQU8sa0JBQW1CLFNBQVEsZ0JBQTZCO0lBQ25FO1FBQ0UsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7OztZQU5GLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGZha2VyIGZyb20gJ2Zha2VyL2xvY2FsZS9lbl9VUyc7XG5cbmltcG9ydCB7IE1hZ2VudG9DYXJ0IH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQvZHJpdmVyL21hZ2VudG8nO1xuaW1wb3J0IHsgRGFmZk1vZGVsRmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHsgTWFnZW50b01vbmV5IH0gZnJvbSAnQGRhZmZvZGlsL2RyaXZlci9tYWdlbnRvJztcbmltcG9ydCB7IE1hZ2VudG9Nb25leUZhY3RvcnkgfSBmcm9tICdAZGFmZm9kaWwvZHJpdmVyL21hZ2VudG8vdGVzdGluZyc7XG5cbmV4cG9ydCBjbGFzcyBNb2NrTWFnZW50b0NhcnQgaW1wbGVtZW50cyBNYWdlbnRvQ2FydCB7XG5cdF9fdHlwZW5hbWUgPSAnQ2FydCc7XG4gIGlkID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMDB9KTtcbiAgcHJpY2VzID0ge1xuXHRcdF9fdHlwZW5hbWU6ICdDYXJ0UHJpY2VzJyxcbiAgICBzdWJ0b3RhbF9leGNsdWRpbmdfdGF4OiB0aGlzLm1vbmV5KCksXG4gICAgZ3JhbmRfdG90YWw6IHRoaXMubW9uZXkoKSxcbiAgICBzdWJ0b3RhbF9pbmNsdWRpbmdfdGF4OiB0aGlzLm1vbmV5KCksXG4gICAgc3VidG90YWxfd2l0aF9kaXNjb3VudF9leGNsdWRpbmdfdGF4OiB0aGlzLm1vbmV5KCksXG4gICAgYXBwbGllZF90YXhlczogW3tcblx0XHRcdF9fdHlwZW5hbWU6ICdBcHBsaWVkVGF4Jyxcblx0XHRcdGFtb3VudDogdGhpcy5tb25leSgpLFxuXHRcdFx0bGFiZWw6ICd0YXgnXG5cdFx0fV0sXG5cdFx0ZGlzY291bnRzOiBbe1xuXHRcdFx0X190eXBlbmFtZTogJ0Rpc2NvdW50Jyxcblx0XHRcdGFtb3VudDogdGhpcy5tb25leSgpLFxuXHRcdFx0bGFiZWw6ICdkaXNjb3VudCdcblx0XHR9XVxuICB9O1xuICBhcHBsaWVkX2NvdXBvbnMgPSBbXTtcbiAgaXRlbXMgPSBbXTtcbiAgYmlsbGluZ19hZGRyZXNzID0gbnVsbDtcbiAgc2hpcHBpbmdfYWRkcmVzc2VzID0gW107XG4gIGF2YWlsYWJsZV9wYXltZW50X21ldGhvZHMgPSBbXTtcbiAgc2VsZWN0ZWRfcGF5bWVudF9tZXRob2QgPSBudWxsO1xuICBlbWFpbCA9IGZha2VyLmludGVybmV0LmVtYWlsKCk7XG5cbiAgcHJpdmF0ZSBtb25leSgpOiBNYWdlbnRvTW9uZXkge1xuICAgIHJldHVybiAobmV3IE1hZ2VudG9Nb25leUZhY3RvcnkoKSkuY3JlYXRlKClcbiAgfVxufTtcblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNYWdlbnRvQ2FydEZhY3RvcnkgZXh0ZW5kcyBEYWZmTW9kZWxGYWN0b3J5PE1hZ2VudG9DYXJ0PiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKE1vY2tNYWdlbnRvQ2FydCk7XG4gIH1cbn1cbiJdfQ==