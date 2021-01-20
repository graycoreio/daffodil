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
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
var MockOrder = /** @class */ (function () {
    function MockOrder() {
        this.id = faker.random.number({ min: 1, max: 1000 });
        this.customer_id = faker.random.number({ min: 1, max: 1000 });
        this.created_at = faker.date.past().toString();
        this.updated_at = faker.date.past().toString();
        this.status = faker.random.word();
        this.totals = [];
        this.applied_codes = [];
        this.items = [];
        this.billing_addresses = [];
        this.shipping_addresses = [];
        this.shipments = [];
        this.payment = null;
        this.invoices = [];
        this.credits = [];
    }
    return MockOrder;
}());
export { MockOrder };
if (false) {
    /** @type {?} */
    MockOrder.prototype.id;
    /** @type {?} */
    MockOrder.prototype.customer_id;
    /** @type {?} */
    MockOrder.prototype.created_at;
    /** @type {?} */
    MockOrder.prototype.updated_at;
    /** @type {?} */
    MockOrder.prototype.status;
    /** @type {?} */
    MockOrder.prototype.totals;
    /** @type {?} */
    MockOrder.prototype.applied_codes;
    /** @type {?} */
    MockOrder.prototype.items;
    /** @type {?} */
    MockOrder.prototype.billing_addresses;
    /** @type {?} */
    MockOrder.prototype.shipping_addresses;
    /** @type {?} */
    MockOrder.prototype.shipments;
    /** @type {?} */
    MockOrder.prototype.payment;
    /** @type {?} */
    MockOrder.prototype.invoices;
    /** @type {?} */
    MockOrder.prototype.credits;
}
;
var DaffOrderFactory = /** @class */ (function (_super) {
    __extends(DaffOrderFactory, _super);
    function DaffOrderFactory() {
        return _super.call(this, MockOrder) || this;
    }
    DaffOrderFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffOrderFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffOrderFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffOrderFactory_Factory() { return new DaffOrderFactory(); }, token: DaffOrderFactory, providedIn: "root" });
    return DaffOrderFactory;
}(DaffModelFactory));
export { DaffOrderFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9vcmRlci90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZmFjdG9yaWVzL29yZGVyLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sb0JBQW9CLENBQUM7QUFHNUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRTFEO0lBQUE7UUFDRSxPQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQzlDLGdCQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ3ZELGVBQVUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzFDLGVBQVUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzFDLFdBQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzdCLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLHVCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUN4QixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxZQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQWZELElBZUM7Ozs7SUFkQyx1QkFBOEM7O0lBQzlDLGdDQUF1RDs7SUFDdkQsK0JBQTBDOztJQUMxQywrQkFBMEM7O0lBQzFDLDJCQUE2Qjs7SUFDN0IsMkJBQVk7O0lBQ1osa0NBQW1COztJQUNuQiwwQkFBVzs7SUFDWCxzQ0FBdUI7O0lBQ3ZCLHVDQUF3Qjs7SUFDeEIsOEJBQWU7O0lBQ2YsNEJBQWU7O0lBQ2YsNkJBQWM7O0lBQ2QsNEJBQWE7O0FBQ2QsQ0FBQztBQUdGO0lBR3NDLG9DQUEyQjtJQUMvRDtlQUNFLGtCQUFNLFNBQVMsQ0FBQztJQUNsQixDQUFDOztnQkFORixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OzsyQkExQkQ7Q0ErQkMsQUFQRCxDQUdzQyxnQkFBZ0IsR0FJckQ7U0FKWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBmYWtlciBmcm9tICdmYWtlci9sb2NhbGUvZW5fVVMnO1xuXG5pbXBvcnQgeyBEYWZmT3JkZXIgfSBmcm9tICdAZGFmZm9kaWwvb3JkZXInO1xuaW1wb3J0IHsgRGFmZk1vZGVsRmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuXG5leHBvcnQgY2xhc3MgTW9ja09yZGVyIGltcGxlbWVudHMgRGFmZk9yZGVyIHtcbiAgaWQgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pO1xuICBjdXN0b21lcl9pZCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwfSk7XG4gIGNyZWF0ZWRfYXQgPSBmYWtlci5kYXRlLnBhc3QoKS50b1N0cmluZygpO1xuICB1cGRhdGVkX2F0ID0gZmFrZXIuZGF0ZS5wYXN0KCkudG9TdHJpbmcoKTtcbiAgc3RhdHVzID0gZmFrZXIucmFuZG9tLndvcmQoKTtcbiAgdG90YWxzID0gW107XG4gIGFwcGxpZWRfY29kZXMgPSBbXTtcbiAgaXRlbXMgPSBbXTtcbiAgYmlsbGluZ19hZGRyZXNzZXMgPSBbXTtcbiAgc2hpcHBpbmdfYWRkcmVzc2VzID0gW107XG4gIHNoaXBtZW50cyA9IFtdO1xuICBwYXltZW50ID0gbnVsbDtcbiAgaW52b2ljZXMgPSBbXTtcbiAgY3JlZGl0cyA9IFtdO1xufTtcblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmT3JkZXJGYWN0b3J5IGV4dGVuZHMgRGFmZk1vZGVsRmFjdG9yeTxEYWZmT3JkZXI+e1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihNb2NrT3JkZXIpO1xuICB9XG59XG4iXX0=