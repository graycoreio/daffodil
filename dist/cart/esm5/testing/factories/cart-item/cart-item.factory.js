/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffCartItemInputType } from '@daffodil/cart';
import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffProductImageFactory } from '@daffodil/product/testing';
import * as i0 from "@angular/core";
var DaffMockCartItem = /** @class */ (function () {
    function DaffMockCartItem() {
        this.item_id = faker.random.number({ min: 1, max: 1000 });
        this.type = DaffCartItemInputType.Simple;
        this.product_id = String(faker.random.number({ min: 1, max: 1000 }));
        this.parent_item_id = faker.random.number({ min: 1, max: 1000 });
        this.image = (/** @type {?} */ (new DaffProductImageFactory().create()));
        this.sku = 'sku';
        this.name = 'Product Name';
        this.qty = faker.random.number({ min: 1, max: 100 });
        this.price = faker.random.number({ min: 1, max: 1500 });
        this.row_total = this.qty * this.price;
        this.total_discount = faker.random.number({ min: 0, max: this.price - 1 });
        this.in_stock = true;
    }
    return DaffMockCartItem;
}());
export { DaffMockCartItem };
if (false) {
    /** @type {?} */
    DaffMockCartItem.prototype.item_id;
    /** @type {?} */
    DaffMockCartItem.prototype.type;
    /** @type {?} */
    DaffMockCartItem.prototype.product_id;
    /** @type {?} */
    DaffMockCartItem.prototype.parent_item_id;
    /** @type {?} */
    DaffMockCartItem.prototype.image;
    /** @type {?} */
    DaffMockCartItem.prototype.sku;
    /** @type {?} */
    DaffMockCartItem.prototype.name;
    /** @type {?} */
    DaffMockCartItem.prototype.qty;
    /** @type {?} */
    DaffMockCartItem.prototype.price;
    /** @type {?} */
    DaffMockCartItem.prototype.row_total;
    /** @type {?} */
    DaffMockCartItem.prototype.total_discount;
    /** @type {?} */
    DaffMockCartItem.prototype.in_stock;
}
var DaffCartItemFactory = /** @class */ (function (_super) {
    tslib_1.__extends(DaffCartItemFactory, _super);
    function DaffCartItemFactory() {
        return _super.call(this, DaffMockCartItem) || this;
    }
    DaffCartItemFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffCartItemFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffCartItemFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffCartItemFactory_Factory() { return new DaffCartItemFactory(); }, token: DaffCartItemFactory, providedIn: "root" });
    return DaffCartItemFactory;
}(DaffModelFactory));
export { DaffCartItemFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZmFjdG9yaWVzL2NhcnQtaXRlbS9jYXJ0LWl0ZW0uZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxvQkFBb0IsQ0FBQztBQUU1QyxPQUFPLEVBQWdCLHFCQUFxQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0FBR3BFO0lBQUE7UUFDQyxZQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ25ELFNBQUksR0FBRyxxQkFBcUIsQ0FBQyxNQUFNLENBQUM7UUFDbkMsZUFBVSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQztRQUMvRCxtQkFBYyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUMxRCxVQUFLLEdBQUcsbUJBQWtCLElBQUksdUJBQXVCLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBQSxDQUFDO1FBQ2hFLFFBQUcsR0FBRyxLQUFLLENBQUM7UUFDWixTQUFJLEdBQUcsY0FBYyxDQUFDO1FBQ3RCLFFBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUUsR0FBRyxFQUFDLEdBQUcsRUFBQyxDQUFDLENBQUM7UUFDNUMsVUFBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUNqRCxjQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFBO1FBQ2xDLG1CQUFjLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBQyxDQUFDLENBQUM7UUFDcEUsYUFBUSxHQUFHLElBQUksQ0FBQztJQUNqQixDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBYkQsSUFhQzs7OztJQVpBLG1DQUFtRDs7SUFDbkQsZ0NBQW9DOztJQUNuQyxzQ0FBOEQ7O0lBQy9ELDBDQUEwRDs7SUFDMUQsaUNBQWlFOztJQUNoRSwrQkFBWTs7SUFDWixnQ0FBc0I7O0lBQ3RCLCtCQUE0Qzs7SUFDNUMsaUNBQWlEOztJQUNqRCxxQ0FBaUM7O0lBQ2xDLDBDQUFvRTs7SUFDcEUsb0NBQWdCOztBQUdqQjtJQUd5QywrQ0FBOEI7SUFFckU7ZUFDRSxrQkFBTSxnQkFBZ0IsQ0FBQztJQUN6QixDQUFDOztnQkFQRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozs4QkF6QkQ7Q0ErQkMsQUFSRCxDQUd5QyxnQkFBZ0IsR0FLeEQ7U0FMWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBmYWtlciBmcm9tICdmYWtlci9sb2NhbGUvZW5fVVMnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydEl0ZW0sIERhZmZDYXJ0SXRlbUlucHV0VHlwZSB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcbmltcG9ydCB7IERhZmZNb2RlbEZhY3RvcnkgfSBmcm9tICdAZGFmZm9kaWwvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7IERhZmZQcm9kdWN0SW1hZ2VGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL3Byb2R1Y3QvdGVzdGluZyc7XG5pbXBvcnQgeyBEYWZmUHJvZHVjdEltYWdlIH0gZnJvbSAnQGRhZmZvZGlsL3Byb2R1Y3QnO1xuXG5leHBvcnQgY2xhc3MgRGFmZk1vY2tDYXJ0SXRlbSBpbXBsZW1lbnRzIERhZmZDYXJ0SXRlbSB7XG5cdGl0ZW1faWQgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pO1xuXHR0eXBlID0gRGFmZkNhcnRJdGVtSW5wdXRUeXBlLlNpbXBsZTtcbiAgcHJvZHVjdF9pZCA9IFN0cmluZyhmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pKTtcblx0cGFyZW50X2l0ZW1faWQgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pO1xuXHRpbWFnZSA9IDxEYWZmUHJvZHVjdEltYWdlPm5ldyBEYWZmUHJvZHVjdEltYWdlRmFjdG9yeSgpLmNyZWF0ZSgpO1xuICBza3UgPSAnc2t1JztcbiAgbmFtZSA9ICdQcm9kdWN0IE5hbWUnO1xuICBxdHkgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46MSwgbWF4OjEwMH0pO1xuICBwcmljZSA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxNTAwfSk7XG4gIHJvd190b3RhbCA9IHRoaXMucXR5ICogdGhpcy5wcmljZVxuXHR0b3RhbF9kaXNjb3VudCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMCwgbWF4OiB0aGlzLnByaWNlIC0gMX0pO1xuXHRpbl9zdG9jayA9IHRydWU7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0SXRlbUZhY3RvcnkgZXh0ZW5kcyBEYWZmTW9kZWxGYWN0b3J5PERhZmZDYXJ0SXRlbT4ge1xuXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc3VwZXIoRGFmZk1vY2tDYXJ0SXRlbSk7XG4gIH1cbn1cbiJdfQ==