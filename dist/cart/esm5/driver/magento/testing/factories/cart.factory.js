/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoMoneyFactory } from '@daffodil/driver/magento/testing';
import * as i0 from "@angular/core";
var MockMagentoCart = /** @class */ (function () {
    function MockMagentoCart() {
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
    MockMagentoCart.prototype.money = /**
     * @private
     * @return {?}
     */
    function () {
        return (new MagentoMoneyFactory()).create();
    };
    return MockMagentoCart;
}());
export { MockMagentoCart };
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
var MagentoCartFactory = /** @class */ (function (_super) {
    tslib_1.__extends(MagentoCartFactory, _super);
    function MagentoCartFactory() {
        return _super.call(this, MockMagentoCart) || this;
    }
    MagentoCartFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MagentoCartFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ MagentoCartFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MagentoCartFactory_Factory() { return new MagentoCartFactory(); }, token: MagentoCartFactory, providedIn: "root" });
    return MagentoCartFactory;
}(DaffModelFactory));
export { MagentoCartFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL21hZ2VudG8vdGVzdGluZy8iLCJzb3VyY2VzIjpbImZhY3Rvcmllcy9jYXJ0LmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sb0JBQW9CLENBQUM7QUFHNUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7O0FBRXZFO0lBQUE7UUFDQyxlQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ25CLE9BQUUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDOUMsV0FBTSxHQUFHO1lBQ1QsVUFBVSxFQUFFLFlBQVk7WUFDdEIsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNwQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUN6QixzQkFBc0IsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3BDLG9DQUFvQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDbEQsYUFBYSxFQUFFLENBQUM7b0JBQ2pCLFVBQVUsRUFBRSxZQUFZO29CQUN4QixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFDcEIsS0FBSyxFQUFFLEtBQUs7aUJBQ1osQ0FBQztZQUNGLFNBQVMsRUFBRSxDQUFDO29CQUNYLFVBQVUsRUFBRSxVQUFVO29CQUN0QixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFDcEIsS0FBSyxFQUFFLFVBQVU7aUJBQ2pCLENBQUM7U0FDRCxDQUFDO1FBQ0Ysb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDckIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLHVCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUN4Qiw4QkFBeUIsR0FBRyxFQUFFLENBQUM7UUFDL0IsNEJBQXVCLEdBQUcsSUFBSSxDQUFDO1FBQy9CLFVBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBS2pDLENBQUM7Ozs7O0lBSFMsK0JBQUs7Ozs7SUFBYjtRQUNFLE9BQU8sQ0FBQyxJQUFJLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQTtJQUM3QyxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBL0JELElBK0JDOzs7O0lBOUJBLHFDQUFvQjs7SUFDbkIsNkJBQThDOztJQUM5QyxpQ0FnQkU7O0lBQ0YsMENBQXFCOztJQUNyQixnQ0FBVzs7SUFDWCwwQ0FBdUI7O0lBQ3ZCLDZDQUF3Qjs7SUFDeEIsb0RBQStCOztJQUMvQixrREFBK0I7O0lBQy9CLGdDQUErQjs7QUFLaEMsQ0FBQztBQUdGO0lBR3dDLDhDQUE2QjtJQUNuRTtlQUNFLGtCQUFNLGVBQWUsQ0FBQztJQUN4QixDQUFDOztnQkFORixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozs2QkE1Q0Q7Q0FpREMsQUFQRCxDQUd3QyxnQkFBZ0IsR0FJdkQ7U0FKWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBmYWtlciBmcm9tICdmYWtlci9sb2NhbGUvZW5fVVMnO1xuXG5pbXBvcnQgeyBNYWdlbnRvQ2FydCB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L2RyaXZlci9tYWdlbnRvJztcbmltcG9ydCB7IERhZmZNb2RlbEZhY3RvcnkgfSBmcm9tICdAZGFmZm9kaWwvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7IE1hZ2VudG9Nb25leSB9IGZyb20gJ0BkYWZmb2RpbC9kcml2ZXIvbWFnZW50byc7XG5pbXBvcnQgeyBNYWdlbnRvTW9uZXlGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2RyaXZlci9tYWdlbnRvL3Rlc3RpbmcnO1xuXG5leHBvcnQgY2xhc3MgTW9ja01hZ2VudG9DYXJ0IGltcGxlbWVudHMgTWFnZW50b0NhcnQge1xuXHRfX3R5cGVuYW1lID0gJ0NhcnQnO1xuICBpZCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwfSk7XG4gIHByaWNlcyA9IHtcblx0XHRfX3R5cGVuYW1lOiAnQ2FydFByaWNlcycsXG4gICAgc3VidG90YWxfZXhjbHVkaW5nX3RheDogdGhpcy5tb25leSgpLFxuICAgIGdyYW5kX3RvdGFsOiB0aGlzLm1vbmV5KCksXG4gICAgc3VidG90YWxfaW5jbHVkaW5nX3RheDogdGhpcy5tb25leSgpLFxuICAgIHN1YnRvdGFsX3dpdGhfZGlzY291bnRfZXhjbHVkaW5nX3RheDogdGhpcy5tb25leSgpLFxuICAgIGFwcGxpZWRfdGF4ZXM6IFt7XG5cdFx0XHRfX3R5cGVuYW1lOiAnQXBwbGllZFRheCcsXG5cdFx0XHRhbW91bnQ6IHRoaXMubW9uZXkoKSxcblx0XHRcdGxhYmVsOiAndGF4J1xuXHRcdH1dLFxuXHRcdGRpc2NvdW50czogW3tcblx0XHRcdF9fdHlwZW5hbWU6ICdEaXNjb3VudCcsXG5cdFx0XHRhbW91bnQ6IHRoaXMubW9uZXkoKSxcblx0XHRcdGxhYmVsOiAnZGlzY291bnQnXG5cdFx0fV1cbiAgfTtcbiAgYXBwbGllZF9jb3Vwb25zID0gW107XG4gIGl0ZW1zID0gW107XG4gIGJpbGxpbmdfYWRkcmVzcyA9IG51bGw7XG4gIHNoaXBwaW5nX2FkZHJlc3NlcyA9IFtdO1xuICBhdmFpbGFibGVfcGF5bWVudF9tZXRob2RzID0gW107XG4gIHNlbGVjdGVkX3BheW1lbnRfbWV0aG9kID0gbnVsbDtcbiAgZW1haWwgPSBmYWtlci5pbnRlcm5ldC5lbWFpbCgpO1xuXG4gIHByaXZhdGUgbW9uZXkoKTogTWFnZW50b01vbmV5IHtcbiAgICByZXR1cm4gKG5ldyBNYWdlbnRvTW9uZXlGYWN0b3J5KCkpLmNyZWF0ZSgpXG4gIH1cbn07XG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTWFnZW50b0NhcnRGYWN0b3J5IGV4dGVuZHMgRGFmZk1vZGVsRmFjdG9yeTxNYWdlbnRvQ2FydD4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihNb2NrTWFnZW50b0NhcnQpO1xuICB9XG59XG4iXX0=