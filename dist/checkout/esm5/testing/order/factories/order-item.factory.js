/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
/**
 * @deprecated
 */
var /**
 * @deprecated
 */
MockOrderItem = /** @class */ (function () {
    function MockOrderItem() {
        this.item_id = faker.random.number({ min: 1, max: 1000 });
        this.image = null;
        this.quote_id = faker.random.number({ min: 1, max: 1000 });
        this.created_at = new Date();
        this.updated_at = new Date();
        this.product_id = faker.random.number({ min: 1, max: 1000 });
        this.parent_item_id = faker.random.number({ min: 1, max: 1000 });
        this.sku = 'sku';
        this.name = 'Product Name';
        this.description = 'description';
        this.weight = faker.random.number({ min: 1, max: 1000 });
        this.qty = faker.random.number({ min: 1, max: 100 });
        this.price = faker.random.number({ min: 1, max: 1000 });
        this.discount_percent = faker.random.number({ min: 1, max: 10 });
        this.discount_amount = faker.random.number({ min: 1, max: 100 });
        this.tax_percent = faker.random.number({ min: 1, max: 10 });
        this.tax_amount = faker.random.number({ min: 1, max: 10 });
        this.row_total = faker.random.number({ min: 1, max: 1000 });
        this.row_total_with_discount = faker.random.number({ min: 1, max: 1000 });
        this.row_weight = faker.random.number({ min: 1, max: 100 });
        this.tax_before_discount = faker.random.number({ min: 1, max: 100 });
    }
    return MockOrderItem;
}());
/**
 * @deprecated
 */
export { MockOrderItem };
if (false) {
    /** @type {?} */
    MockOrderItem.prototype.item_id;
    /** @type {?} */
    MockOrderItem.prototype.image;
    /** @type {?} */
    MockOrderItem.prototype.quote_id;
    /** @type {?} */
    MockOrderItem.prototype.created_at;
    /** @type {?} */
    MockOrderItem.prototype.updated_at;
    /** @type {?} */
    MockOrderItem.prototype.product_id;
    /** @type {?} */
    MockOrderItem.prototype.parent_item_id;
    /** @type {?} */
    MockOrderItem.prototype.sku;
    /** @type {?} */
    MockOrderItem.prototype.name;
    /** @type {?} */
    MockOrderItem.prototype.description;
    /** @type {?} */
    MockOrderItem.prototype.weight;
    /** @type {?} */
    MockOrderItem.prototype.qty;
    /** @type {?} */
    MockOrderItem.prototype.price;
    /** @type {?} */
    MockOrderItem.prototype.discount_percent;
    /** @type {?} */
    MockOrderItem.prototype.discount_amount;
    /** @type {?} */
    MockOrderItem.prototype.tax_percent;
    /** @type {?} */
    MockOrderItem.prototype.tax_amount;
    /** @type {?} */
    MockOrderItem.prototype.row_total;
    /** @type {?} */
    MockOrderItem.prototype.row_total_with_discount;
    /** @type {?} */
    MockOrderItem.prototype.row_weight;
    /** @type {?} */
    MockOrderItem.prototype.tax_before_discount;
}
/**
 * @deprecated
 */
var DaffOrderItemFactory = /** @class */ (function (_super) {
    tslib_1.__extends(DaffOrderItemFactory, _super);
    function DaffOrderItemFactory() {
        return _super.call(this, MockOrderItem) || this;
    }
    DaffOrderItemFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffOrderItemFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffOrderItemFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffOrderItemFactory_Factory() { return new DaffOrderItemFactory(); }, token: DaffOrderItemFactory, providedIn: "root" });
    return DaffOrderItemFactory;
}(DaffModelFactory));
export { DaffOrderItemFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItaXRlbS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NoZWNrb3V0L3Rlc3RpbmcvIiwic291cmNlcyI6WyJvcmRlci9mYWN0b3JpZXMvb3JkZXItaXRlbS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssS0FBSyxNQUFNLG9CQUFvQixDQUFDO0FBSTVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7OztBQUsxRDs7OztJQUFBO1FBQ0UsWUFBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUNuRCxVQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2IsYUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUNwRCxlQUFVLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN4QixlQUFVLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN4QixlQUFVLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ3RELG1CQUFjLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQzFELFFBQUcsR0FBRyxLQUFLLENBQUM7UUFDWixTQUFJLEdBQUcsY0FBYyxDQUFDO1FBQ3RCLGdCQUFXLEdBQUcsYUFBYSxDQUFDO1FBQzVCLFdBQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDbEQsUUFBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBRSxHQUFHLEVBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQztRQUM1QyxVQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ2pELHFCQUFnQixHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQztRQUMxRCxvQkFBZSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFDLENBQUMsQ0FBQztRQUMxRCxnQkFBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQztRQUNyRCxlQUFVLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDO1FBQ3BELGNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDckQsNEJBQXVCLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ25FLGVBQVUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUM7UUFDckQsd0JBQW1CLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFBRCxvQkFBQztBQUFELENBQUMsQUF0QkQsSUFzQkM7Ozs7Ozs7SUFyQkMsZ0NBQW1EOztJQUNuRCw4QkFBYTs7SUFDYixpQ0FBb0Q7O0lBQ3BELG1DQUF3Qjs7SUFDeEIsbUNBQXdCOztJQUN4QixtQ0FBc0Q7O0lBQ3RELHVDQUEwRDs7SUFDMUQsNEJBQVk7O0lBQ1osNkJBQXNCOztJQUN0QixvQ0FBNEI7O0lBQzVCLCtCQUFrRDs7SUFDbEQsNEJBQTRDOztJQUM1Qyw4QkFBaUQ7O0lBQ2pELHlDQUEwRDs7SUFDMUQsd0NBQTBEOztJQUMxRCxvQ0FBcUQ7O0lBQ3JELG1DQUFvRDs7SUFDcEQsa0NBQXFEOztJQUNyRCxnREFBbUU7O0lBQ25FLG1DQUFxRDs7SUFDckQsNENBQThEOzs7OztBQU1oRTtJQUcwQyxnREFBK0I7SUFFdkU7ZUFDRSxrQkFBTSxhQUFhLENBQUM7SUFDdEIsQ0FBQzs7Z0JBUEYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7K0JBdkNEO0NBNkNDLEFBUkQsQ0FHMEMsZ0JBQWdCLEdBS3pEO1NBTFksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZmFrZXIgZnJvbSAnZmFrZXIvbG9jYWxlL2VuX1VTJztcblxuaW1wb3J0IHsgRGFmZk9yZGVySXRlbSB9IGZyb20gJ0BkYWZmb2RpbC9jaGVja291dCc7XG5cbmltcG9ydCB7IERhZmZNb2RlbEZhY3RvcnkgfSBmcm9tICdAZGFmZm9kaWwvY29yZS90ZXN0aW5nJztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY2xhc3MgTW9ja09yZGVySXRlbSBpbXBsZW1lbnRzIERhZmZPcmRlckl0ZW0ge1xuICBpdGVtX2lkID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMDB9KTtcbiAgaW1hZ2UgPSBudWxsO1xuICBxdW90ZV9pZCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwfSk7XG4gIGNyZWF0ZWRfYXQgPSBuZXcgRGF0ZSgpO1xuICB1cGRhdGVkX2F0ID0gbmV3IERhdGUoKTtcbiAgcHJvZHVjdF9pZCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwfSk7XG4gIHBhcmVudF9pdGVtX2lkID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMDB9KTtcbiAgc2t1ID0gJ3NrdSc7XG4gIG5hbWUgPSAnUHJvZHVjdCBOYW1lJztcbiAgZGVzY3JpcHRpb24gPSAnZGVzY3JpcHRpb24nO1xuICB3ZWlnaHQgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pO1xuICBxdHkgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46MSwgbWF4OjEwMH0pO1xuICBwcmljZSA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwfSk7XG4gIGRpc2NvdW50X3BlcmNlbnQgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTB9KTtcbiAgZGlzY291bnRfYW1vdW50ID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMH0pO1xuICB0YXhfcGVyY2VudCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMH0pO1xuICB0YXhfYW1vdW50ID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwfSk7XG4gIHJvd190b3RhbCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwfSk7XG4gIHJvd190b3RhbF93aXRoX2Rpc2NvdW50ID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMDB9KTtcbiAgcm93X3dlaWdodCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDB9KTtcbiAgdGF4X2JlZm9yZV9kaXNjb3VudCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDB9KTtcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmT3JkZXJJdGVtRmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8RGFmZk9yZGVySXRlbT4ge1xuXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc3VwZXIoTW9ja09yZGVySXRlbSk7XG4gIH1cbn1cbiJdfQ==