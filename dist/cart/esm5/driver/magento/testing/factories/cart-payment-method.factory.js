/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
var MockMagentoCartPaymentMethod = /** @class */ (function () {
    function MockMagentoCartPaymentMethod() {
        this.code = faker.random.word();
        this.title = faker.random.word();
        this.purchase_order_number = faker.random.word();
    }
    return MockMagentoCartPaymentMethod;
}());
export { MockMagentoCartPaymentMethod };
if (false) {
    /** @type {?} */
    MockMagentoCartPaymentMethod.prototype.code;
    /** @type {?} */
    MockMagentoCartPaymentMethod.prototype.title;
    /** @type {?} */
    MockMagentoCartPaymentMethod.prototype.purchase_order_number;
}
var MagentoCartPaymentMethodFactory = /** @class */ (function (_super) {
    tslib_1.__extends(MagentoCartPaymentMethodFactory, _super);
    function MagentoCartPaymentMethodFactory() {
        return _super.call(this, MockMagentoCartPaymentMethod) || this;
    }
    MagentoCartPaymentMethodFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    MagentoCartPaymentMethodFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ MagentoCartPaymentMethodFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MagentoCartPaymentMethodFactory_Factory() { return new MagentoCartPaymentMethodFactory(); }, token: MagentoCartPaymentMethodFactory, providedIn: "root" });
    return MagentoCartPaymentMethodFactory;
}(DaffModelFactory));
export { MagentoCartPaymentMethodFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYXltZW50LW1ldGhvZC5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL21hZ2VudG8vdGVzdGluZy8iLCJzb3VyY2VzIjpbImZhY3Rvcmllcy9jYXJ0LXBheW1lbnQtbWV0aG9kLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sb0JBQW9CLENBQUM7QUFJNUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRTFEO0lBQUE7UUFDQyxTQUFJLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMzQixVQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM1QiwwQkFBcUIsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFBRCxtQ0FBQztBQUFELENBQUMsQUFKRCxJQUlDOzs7O0lBSEEsNENBQTJCOztJQUMzQiw2Q0FBNEI7O0lBQzVCLDZEQUE0Qzs7QUFHN0M7SUFHcUQsMkRBQTBDO0lBQzlGO2VBQ0Msa0JBQU0sNEJBQTRCLENBQUM7SUFDcEMsQ0FBQzs7Z0JBTkQsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7Ozs7MENBZkQ7Q0FvQkMsQUFQRCxDQUdxRCxnQkFBZ0IsR0FJcEU7U0FKWSwrQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBmYWtlciBmcm9tICdmYWtlci9sb2NhbGUvZW5fVVMnO1xuXG5pbXBvcnQgeyBNYWdlbnRvQ2FydFBheW1lbnRNZXRob2QgfSBmcm9tICdAZGFmZm9kaWwvY2FydC9kcml2ZXIvbWFnZW50byc7XG5cbmltcG9ydCB7IERhZmZNb2RlbEZhY3RvcnkgfSBmcm9tICdAZGFmZm9kaWwvY29yZS90ZXN0aW5nJztcblxuZXhwb3J0IGNsYXNzIE1vY2tNYWdlbnRvQ2FydFBheW1lbnRNZXRob2QgaW1wbGVtZW50cyBNYWdlbnRvQ2FydFBheW1lbnRNZXRob2Qge1xuXHRjb2RlID0gZmFrZXIucmFuZG9tLndvcmQoKTtcblx0dGl0bGUgPSBmYWtlci5yYW5kb20ud29yZCgpO1xuXHRwdXJjaGFzZV9vcmRlcl9udW1iZXIgPSBmYWtlci5yYW5kb20ud29yZCgpO1xufVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTWFnZW50b0NhcnRQYXltZW50TWV0aG9kRmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8TWFnZW50b0NhcnRQYXltZW50TWV0aG9kPiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKE1vY2tNYWdlbnRvQ2FydFBheW1lbnRNZXRob2QpO1xuXHR9XG59XG4iXX0=