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
var MockOrderShipment = /** @class */ (function () {
    function MockOrderShipment() {
        this.tracking = [];
        this.items = [];
        this.carrier = faker.random.word();
        this.carrier_title = faker.random.word();
        this.code = faker.random.word();
        this.method = faker.random.word();
        this.method_description = faker.random.word();
    }
    return MockOrderShipment;
}());
export { MockOrderShipment };
if (false) {
    /** @type {?} */
    MockOrderShipment.prototype.tracking;
    /** @type {?} */
    MockOrderShipment.prototype.items;
    /** @type {?} */
    MockOrderShipment.prototype.carrier;
    /** @type {?} */
    MockOrderShipment.prototype.carrier_title;
    /** @type {?} */
    MockOrderShipment.prototype.code;
    /** @type {?} */
    MockOrderShipment.prototype.method;
    /** @type {?} */
    MockOrderShipment.prototype.method_description;
}
;
var DaffOrderShipmentFactory = /** @class */ (function (_super) {
    __extends(DaffOrderShipmentFactory, _super);
    function DaffOrderShipmentFactory() {
        return _super.call(this, MockOrderShipment) || this;
    }
    DaffOrderShipmentFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffOrderShipmentFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffOrderShipmentFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffOrderShipmentFactory_Factory() { return new DaffOrderShipmentFactory(); }, token: DaffOrderShipmentFactory, providedIn: "root" });
    return DaffOrderShipmentFactory;
}(DaffModelFactory));
export { DaffOrderShipmentFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItc2hpcG1lbnQuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9vcmRlci90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZmFjdG9yaWVzL29yZGVyLXNoaXBtZW50LmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sb0JBQW9CLENBQUM7QUFHNUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRTFEO0lBQUE7UUFDRSxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFlBQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzlCLGtCQUFhLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQyxTQUFJLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMzQixXQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM3Qix1QkFBa0IsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFBRCx3QkFBQztBQUFELENBQUMsQUFSRCxJQVFDOzs7O0lBUEMscUNBQWM7O0lBQ2Qsa0NBQVc7O0lBQ1gsb0NBQThCOztJQUM5QiwwQ0FBb0M7O0lBQ3BDLGlDQUEyQjs7SUFDM0IsbUNBQTZCOztJQUM3QiwrQ0FBeUM7O0FBQzFDLENBQUM7QUFFRjtJQUc4Qyw0Q0FBbUM7SUFDL0U7ZUFDRSxrQkFBTSxpQkFBaUIsQ0FBQztJQUMxQixDQUFDOztnQkFORixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OzttQ0FsQkQ7Q0F1QkMsQUFQRCxDQUc4QyxnQkFBZ0IsR0FJN0Q7U0FKWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBmYWtlciBmcm9tICdmYWtlci9sb2NhbGUvZW5fVVMnO1xuXG5pbXBvcnQgeyBEYWZmT3JkZXJTaGlwbWVudCB9IGZyb20gJ0BkYWZmb2RpbC9vcmRlcic7XG5pbXBvcnQgeyBEYWZmTW9kZWxGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5cbmV4cG9ydCBjbGFzcyBNb2NrT3JkZXJTaGlwbWVudCBpbXBsZW1lbnRzIERhZmZPcmRlclNoaXBtZW50IHtcbiAgdHJhY2tpbmcgPSBbXTtcbiAgaXRlbXMgPSBbXTtcbiAgY2FycmllciA9IGZha2VyLnJhbmRvbS53b3JkKCk7XG4gIGNhcnJpZXJfdGl0bGUgPSBmYWtlci5yYW5kb20ud29yZCgpO1xuICBjb2RlID0gZmFrZXIucmFuZG9tLndvcmQoKTtcbiAgbWV0aG9kID0gZmFrZXIucmFuZG9tLndvcmQoKTtcbiAgbWV0aG9kX2Rlc2NyaXB0aW9uID0gZmFrZXIucmFuZG9tLndvcmQoKTtcbn07XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZPcmRlclNoaXBtZW50RmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8RGFmZk9yZGVyU2hpcG1lbnQ+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoTW9ja09yZGVyU2hpcG1lbnQpO1xuICB9XG59XG4iXX0=