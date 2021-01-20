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
var MockOrderShippingMethod = /** @class */ (function () {
    function MockOrderShippingMethod() {
        this.rate_id = faker.random.number({ min: 1, max: 1000 });
        this.address_id = faker.random.number({ min: 1, max: 1000 });
        this.order_id = faker.random.number({ min: 1, max: 1000 });
        this.created_at = faker.date.past().toString();
        this.updated_at = faker.date.past().toString();
        this.carrier = faker.random.word();
        this.carrier_title = faker.random.word();
        this.code = faker.random.word();
        this.method = faker.random.word();
        this.method_description = faker.random.word();
        this.price = faker.random.number({ min: 1, max: 1000 });
        this.error_message = faker.random.word();
        this.method_title = faker.random.word();
    }
    return MockOrderShippingMethod;
}());
export { MockOrderShippingMethod };
if (false) {
    /** @type {?} */
    MockOrderShippingMethod.prototype.rate_id;
    /** @type {?} */
    MockOrderShippingMethod.prototype.address_id;
    /** @type {?} */
    MockOrderShippingMethod.prototype.order_id;
    /** @type {?} */
    MockOrderShippingMethod.prototype.created_at;
    /** @type {?} */
    MockOrderShippingMethod.prototype.updated_at;
    /** @type {?} */
    MockOrderShippingMethod.prototype.carrier;
    /** @type {?} */
    MockOrderShippingMethod.prototype.carrier_title;
    /** @type {?} */
    MockOrderShippingMethod.prototype.code;
    /** @type {?} */
    MockOrderShippingMethod.prototype.method;
    /** @type {?} */
    MockOrderShippingMethod.prototype.method_description;
    /** @type {?} */
    MockOrderShippingMethod.prototype.price;
    /** @type {?} */
    MockOrderShippingMethod.prototype.error_message;
    /** @type {?} */
    MockOrderShippingMethod.prototype.method_title;
}
var DaffOrderShippingMethodFactory = /** @class */ (function (_super) {
    __extends(DaffOrderShippingMethodFactory, _super);
    function DaffOrderShippingMethodFactory() {
        return _super.call(this, MockOrderShippingMethod) || this;
    }
    DaffOrderShippingMethodFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffOrderShippingMethodFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffOrderShippingMethodFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffOrderShippingMethodFactory_Factory() { return new DaffOrderShippingMethodFactory(); }, token: DaffOrderShippingMethodFactory, providedIn: "root" });
    return DaffOrderShippingMethodFactory;
}(DaffModelFactory));
export { DaffOrderShippingMethodFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItc2hpcHBpbmctcmF0ZS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL29yZGVyL3Rlc3RpbmcvIiwic291cmNlcyI6WyJmYWN0b3JpZXMvb3JkZXItc2hpcHBpbmctcmF0ZS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssS0FBSyxNQUFNLG9CQUFvQixDQUFDO0FBRzVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUUxRDtJQUFBO1FBQ0UsWUFBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUNuRCxlQUFVLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ3RELGFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDcEQsZUFBVSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDMUMsZUFBVSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDMUMsWUFBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDOUIsa0JBQWEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BDLFNBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzNCLFdBQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzdCLHVCQUFrQixHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekMsVUFBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUNqRCxrQkFBYSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEMsaUJBQVksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFBRCw4QkFBQztBQUFELENBQUMsQUFkRCxJQWNDOzs7O0lBYkMsMENBQW1EOztJQUNuRCw2Q0FBc0Q7O0lBQ3RELDJDQUFvRDs7SUFDcEQsNkNBQTBDOztJQUMxQyw2Q0FBMEM7O0lBQzFDLDBDQUE4Qjs7SUFDOUIsZ0RBQW9DOztJQUNwQyx1Q0FBMkI7O0lBQzNCLHlDQUE2Qjs7SUFDN0IscURBQXlDOztJQUN6Qyx3Q0FBaUQ7O0lBQ2pELGdEQUFvQzs7SUFDcEMsK0NBQW1DOztBQUdyQztJQUdvRCxrREFBeUM7SUFDM0Y7ZUFDRSxrQkFBTSx1QkFBdUIsQ0FBQztJQUNoQyxDQUFDOztnQkFORixVQUFVLFNBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCOzs7Ozt5Q0F4QkQ7Q0E2QkMsQUFQRCxDQUdvRCxnQkFBZ0IsR0FJbkU7U0FKWSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBmYWtlciBmcm9tICdmYWtlci9sb2NhbGUvZW5fVVMnO1xuXG5pbXBvcnQgeyBEYWZmT3JkZXJTaGlwcGluZ01ldGhvZCB9IGZyb20gJ0BkYWZmb2RpbC9vcmRlcic7XG5pbXBvcnQgeyBEYWZmTW9kZWxGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5cbmV4cG9ydCBjbGFzcyBNb2NrT3JkZXJTaGlwcGluZ01ldGhvZCBpbXBsZW1lbnRzIERhZmZPcmRlclNoaXBwaW5nTWV0aG9kIHtcbiAgcmF0ZV9pZCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwfSk7XG4gIGFkZHJlc3NfaWQgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pO1xuICBvcmRlcl9pZCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwfSk7XG4gIGNyZWF0ZWRfYXQgPSBmYWtlci5kYXRlLnBhc3QoKS50b1N0cmluZygpO1xuICB1cGRhdGVkX2F0ID0gZmFrZXIuZGF0ZS5wYXN0KCkudG9TdHJpbmcoKTtcbiAgY2FycmllciA9IGZha2VyLnJhbmRvbS53b3JkKCk7XG4gIGNhcnJpZXJfdGl0bGUgPSBmYWtlci5yYW5kb20ud29yZCgpO1xuICBjb2RlID0gZmFrZXIucmFuZG9tLndvcmQoKTtcbiAgbWV0aG9kID0gZmFrZXIucmFuZG9tLndvcmQoKTtcbiAgbWV0aG9kX2Rlc2NyaXB0aW9uID0gZmFrZXIucmFuZG9tLndvcmQoKTtcbiAgcHJpY2UgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pO1xuICBlcnJvcl9tZXNzYWdlID0gZmFrZXIucmFuZG9tLndvcmQoKTtcbiAgbWV0aG9kX3RpdGxlID0gZmFrZXIucmFuZG9tLndvcmQoKTtcbn1cblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmT3JkZXJTaGlwcGluZ01ldGhvZEZhY3RvcnkgZXh0ZW5kcyBEYWZmTW9kZWxGYWN0b3J5PERhZmZPcmRlclNoaXBwaW5nTWV0aG9kPntcbiAgY29uc3RydWN0b3IoKXtcbiAgICBzdXBlcihNb2NrT3JkZXJTaGlwcGluZ01ldGhvZCk7XG4gIH1cbn1cbiJdfQ==