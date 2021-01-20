var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffOrderItemType } from '@daffodil/order';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
var MockOrderItem = /** @class */ (function () {
    function MockOrderItem() {
        this.item_id = faker.random.number({ min: 1, max: 1000 });
        this.image = {
            url: faker.image.imageUrl(),
            id: String(faker.random.number({ min: 1, max: 1000 })),
            label: faker.random.word()
        };
        this.order_id = faker.random.number({ min: 1, max: 1000 });
        this.qty_ordered = faker.random.number({ min: 1, max: 1000 });
        this.qty_canceled = faker.random.number({ min: 1, max: 1000 });
        this.qty_fulfilled = faker.random.number({ min: 1, max: 1000 });
        this.created_at = faker.date.past().toString();
        this.updated_at = faker.date.past().toString();
        this.product_id = faker.random.number({ min: 1, max: 1000 });
        this.parent_item_id = faker.random.number({ min: 1, max: 1000 });
        this.sku = faker.random.alphaNumeric(20);
        this.name = faker.random.word();
        this.weight = faker.random.number({ min: 1, max: 1000 });
        this.qty = faker.random.number({ min: 1, max: 10 });
        this.price = faker.random.number({ min: 1, max: 1000 });
        this.discount_amount = faker.random.number({ min: 1, max: this.price });
        this.discount_percent = Math.floor(this.discount_amount / this.price * 100);
        this.tax_percent = faker.random.number({ min: 1, max: 10 });
        this.tax_amount = faker.random.number({ min: 1, max: 10 });
        this.row_total = this.price * this.qty;
        this.row_total_with_discount = (this.price - this.discount_amount) * this.qty;
        this.row_weight = faker.random.number({ min: 1, max: 100 });
        this.tax_before_discount = faker.random.number({ min: 1, max: 100 });
        this.type = DaffOrderItemType.Simple;
    }
    return MockOrderItem;
}());
export { MockOrderItem };
if (false) {
    /** @type {?} */
    MockOrderItem.prototype.item_id;
    /** @type {?} */
    MockOrderItem.prototype.image;
    /** @type {?} */
    MockOrderItem.prototype.order_id;
    /** @type {?} */
    MockOrderItem.prototype.qty_ordered;
    /** @type {?} */
    MockOrderItem.prototype.qty_canceled;
    /** @type {?} */
    MockOrderItem.prototype.qty_fulfilled;
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
    MockOrderItem.prototype.weight;
    /** @type {?} */
    MockOrderItem.prototype.qty;
    /** @type {?} */
    MockOrderItem.prototype.price;
    /** @type {?} */
    MockOrderItem.prototype.discount_amount;
    /** @type {?} */
    MockOrderItem.prototype.discount_percent;
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
    /** @type {?} */
    MockOrderItem.prototype.type;
}
var DaffOrderItemFactory = /** @class */ (function (_super) {
    __extends(DaffOrderItemFactory, _super);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItaXRlbS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL29yZGVyL3Rlc3RpbmcvIiwic291cmNlcyI6WyJmYWN0b3JpZXMvb3JkZXItaXRlbS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssS0FBSyxNQUFNLG9CQUFvQixDQUFDO0FBRTVDLE9BQU8sRUFBaUIsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVuRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFFMUQ7SUFBQTtRQUNFLFlBQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDbkQsVUFBSyxHQUFHO1lBQ04sR0FBRyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQzNCLEVBQUUsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1lBQ3BELEtBQUssRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtTQUMzQixDQUFDO1FBQ0YsYUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUNwRCxnQkFBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUN2RCxpQkFBWSxH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RCw4QkFJRTs7SUFDRixpQ0FBb0Q7O0lBQ3BELG9DQUF1RDs7SUFDdkQscUNBQXdEOztJQUN4RCxzQ0FBeUQ7O0lBQ3pELG1DQUEwQzs7SUFDMUMsbUNBQTBDOztJQUMxQyxtQ0FBc0Q7O0lBQ3RELHVDQUEwRDs7SUFDMUQsNEJBQW9DOztJQUNwQyw2QkFBMkI7O0lBQzNCLCtCQUFrRDs7SUFDbEQsNEJBQTZDOztJQUM3Qyw4QkFBaUQ7O0lBQ2pELHdDQUFpRTs7SUFDakUseUNBQXVFOztJQUN2RSxvQ0FBcUQ7O0lBQ3JELG1DQUFvRDs7SUFDcEQsa0NBQWtDOztJQUNsQyxnREFBeUU7O0lBQ3pFLG1DQUFxRDs7SUFDckQsNENBQThEOztJQUM5RCw2QkFBZ0M7O0FBR2xDO0lBRzBDLHdDQUErQjtJQUV2RTtlQUNFLGtCQUFNLGFBQWEsQ0FBQztJQUN0QixDQUFDOztnQkFQRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OzsrQkF4Q0Q7Q0E4Q0MsQUFSRCxDQUcwQyxnQkFBZ0IsR0FLekQ7U0FMWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBmYWtlciBmcm9tICdmYWtlci9sb2NhbGUvZW5fVVMnO1xuXG5pbXBvcnQgeyBEYWZmT3JkZXJJdGVtLCBEYWZmT3JkZXJJdGVtVHlwZSB9IGZyb20gJ0BkYWZmb2RpbC9vcmRlcic7XG5cbmltcG9ydCB7IERhZmZNb2RlbEZhY3RvcnkgfSBmcm9tICdAZGFmZm9kaWwvY29yZS90ZXN0aW5nJztcblxuZXhwb3J0IGNsYXNzIE1vY2tPcmRlckl0ZW0gaW1wbGVtZW50cyBEYWZmT3JkZXJJdGVtIHtcbiAgaXRlbV9pZCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwfSk7XG4gIGltYWdlID0ge1xuICAgIHVybDogZmFrZXIuaW1hZ2UuaW1hZ2VVcmwoKSxcbiAgICBpZDogU3RyaW5nKGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwfSkpLFxuICAgIGxhYmVsOiBmYWtlci5yYW5kb20ud29yZCgpXG4gIH07XG4gIG9yZGVyX2lkID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMDB9KTtcbiAgcXR5X29yZGVyZWQgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pO1xuICBxdHlfY2FuY2VsZWQgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pO1xuICBxdHlfZnVsZmlsbGVkID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMDB9KTtcbiAgY3JlYXRlZF9hdCA9IGZha2VyLmRhdGUucGFzdCgpLnRvU3RyaW5nKCk7XG4gIHVwZGF0ZWRfYXQgPSBmYWtlci5kYXRlLnBhc3QoKS50b1N0cmluZygpO1xuICBwcm9kdWN0X2lkID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMDB9KTtcbiAgcGFyZW50X2l0ZW1faWQgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pO1xuICBza3UgPSBmYWtlci5yYW5kb20uYWxwaGFOdW1lcmljKDIwKTtcbiAgbmFtZSA9IGZha2VyLnJhbmRvbS53b3JkKCk7XG4gIHdlaWdodCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwfSk7XG4gIHF0eSA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMH0pO1xuICBwcmljZSA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwfSk7XG4gIGRpc2NvdW50X2Ftb3VudCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiB0aGlzLnByaWNlfSk7XG4gIGRpc2NvdW50X3BlcmNlbnQgPSBNYXRoLmZsb29yKHRoaXMuZGlzY291bnRfYW1vdW50IC8gdGhpcy5wcmljZSAqIDEwMCk7XG4gIHRheF9wZXJjZW50ID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwfSk7XG4gIHRheF9hbW91bnQgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTB9KTtcbiAgcm93X3RvdGFsID0gdGhpcy5wcmljZSAqIHRoaXMucXR5O1xuICByb3dfdG90YWxfd2l0aF9kaXNjb3VudCA9ICh0aGlzLnByaWNlIC0gdGhpcy5kaXNjb3VudF9hbW91bnQpICogdGhpcy5xdHk7XG4gIHJvd193ZWlnaHQgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwfSk7XG4gIHRheF9iZWZvcmVfZGlzY291bnQgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwfSk7XG4gIHR5cGUgPSBEYWZmT3JkZXJJdGVtVHlwZS5TaW1wbGU7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZPcmRlckl0ZW1GYWN0b3J5IGV4dGVuZHMgRGFmZk1vZGVsRmFjdG9yeTxEYWZmT3JkZXJJdGVtPiB7XG5cbiAgY29uc3RydWN0b3IoKXtcbiAgICBzdXBlcihNb2NrT3JkZXJJdGVtKTtcbiAgfVxufVxuIl19