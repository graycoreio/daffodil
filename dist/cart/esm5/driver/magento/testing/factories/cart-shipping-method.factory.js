/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { MagentoMoneyFactory } from '@daffodil/driver/magento/testing';
import { DaffModelFactory, } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
var MockCartShippingMethod = /** @class */ (function () {
    function MockCartShippingMethod() {
        this.carrier_code = faker.random.word();
        this.carrier_title = faker.random.words(2);
        this.method_title = faker.random.words(2);
        this.method_code = faker.random.word();
        this.amount = this.money();
    }
    /**
     * @private
     * @return {?}
     */
    MockCartShippingMethod.prototype.money = /**
     * @private
     * @return {?}
     */
    function () {
        return (new MagentoMoneyFactory()).create();
    };
    return MockCartShippingMethod;
}());
export { MockCartShippingMethod };
if (false) {
    /** @type {?} */
    MockCartShippingMethod.prototype.carrier_code;
    /** @type {?} */
    MockCartShippingMethod.prototype.carrier_title;
    /** @type {?} */
    MockCartShippingMethod.prototype.method_title;
    /** @type {?} */
    MockCartShippingMethod.prototype.method_code;
    /** @type {?} */
    MockCartShippingMethod.prototype.amount;
}
var MagentoCartShippingMethodFactory = /** @class */ (function (_super) {
    tslib_1.__extends(MagentoCartShippingMethodFactory, _super);
    function MagentoCartShippingMethodFactory() {
        return _super.call(this, MockCartShippingMethod) || this;
    }
    MagentoCartShippingMethodFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MagentoCartShippingMethodFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ MagentoCartShippingMethodFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MagentoCartShippingMethodFactory_Factory() { return new MagentoCartShippingMethodFactory(); }, token: MagentoCartShippingMethodFactory, providedIn: "root" });
    return MagentoCartShippingMethodFactory;
}(DaffModelFactory));
export { MagentoCartShippingMethodFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zaGlwcGluZy1tZXRob2QuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci9tYWdlbnRvL3Rlc3RpbmcvIiwic291cmNlcyI6WyJmYWN0b3JpZXMvY2FydC1zaGlwcGluZy1tZXRob2QuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxvQkFBb0IsQ0FBQztBQUc1QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQ0wsZ0JBQWdCLEdBQ2pCLE1BQU0sd0JBQXdCLENBQUM7O0FBR2hDO0lBQUE7UUFDRSxpQkFBWSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkMsa0JBQWEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QyxpQkFBWSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLGdCQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsQyxXQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBS3hCLENBQUM7Ozs7O0lBSFMsc0NBQUs7Ozs7SUFBYjtRQUNFLE9BQU8sQ0FBQyxJQUFJLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQTtJQUM3QyxDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQzs7OztJQVRDLDhDQUFtQzs7SUFDbkMsK0NBQXNDOztJQUN0Qyw4Q0FBcUM7O0lBQ3JDLDZDQUFrQzs7SUFDbEMsd0NBQXNCOztBQU94QjtJQUdzRCw0REFBMkM7SUFDL0Y7ZUFDRSxrQkFBTSxzQkFBc0IsQ0FBQztJQUMvQixDQUFDOztnQkFORixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OzsyQ0F4QkQ7Q0E2QkMsQUFQRCxDQUdzRCxnQkFBZ0IsR0FJckU7U0FKWSxnQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBmYWtlciBmcm9tICdmYWtlci9sb2NhbGUvZW5fVVMnO1xuXG5pbXBvcnQgeyBNYWdlbnRvTW9uZXkgfSBmcm9tICdAZGFmZm9kaWwvZHJpdmVyL21hZ2VudG8nO1xuaW1wb3J0IHsgTWFnZW50b01vbmV5RmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9kcml2ZXIvbWFnZW50by90ZXN0aW5nJztcbmltcG9ydCB7XG4gIERhZmZNb2RlbEZhY3RvcnksXG59IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHsgTWFnZW50b0NhcnRTaGlwcGluZ01ldGhvZCB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L2RyaXZlci9tYWdlbnRvJztcblxuZXhwb3J0IGNsYXNzIE1vY2tDYXJ0U2hpcHBpbmdNZXRob2QgaW1wbGVtZW50cyBNYWdlbnRvQ2FydFNoaXBwaW5nTWV0aG9kIHtcbiAgY2Fycmllcl9jb2RlID0gZmFrZXIucmFuZG9tLndvcmQoKTtcbiAgY2Fycmllcl90aXRsZSA9IGZha2VyLnJhbmRvbS53b3JkcygyKTtcbiAgbWV0aG9kX3RpdGxlID0gZmFrZXIucmFuZG9tLndvcmRzKDIpO1xuICBtZXRob2RfY29kZSA9IGZha2VyLnJhbmRvbS53b3JkKCk7XG4gIGFtb3VudCA9IHRoaXMubW9uZXkoKTtcblxuICBwcml2YXRlIG1vbmV5KCk6IE1hZ2VudG9Nb25leSB7XG4gICAgcmV0dXJuIChuZXcgTWFnZW50b01vbmV5RmFjdG9yeSgpKS5jcmVhdGUoKVxuICB9XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1hZ2VudG9DYXJ0U2hpcHBpbmdNZXRob2RGYWN0b3J5IGV4dGVuZHMgRGFmZk1vZGVsRmFjdG9yeTxNYWdlbnRvQ2FydFNoaXBwaW5nTWV0aG9kPiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKE1vY2tDYXJ0U2hpcHBpbmdNZXRob2QpO1xuICB9XG59XG4iXX0=