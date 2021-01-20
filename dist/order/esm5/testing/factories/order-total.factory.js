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
import { DaffOrderTotalTypeEnum } from '@daffodil/order';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
var MockOrderTotal = /** @class */ (function () {
    function MockOrderTotal() {
        this.label = faker.random.word();
        this.value = faker.random.number({ min: 1, max: 100 });
        this.sort_order = faker.random.number({ min: 1, max: 100 });
        this.type = DaffOrderTotalTypeEnum.GrandTotal;
    }
    return MockOrderTotal;
}());
export { MockOrderTotal };
if (false) {
    /** @type {?} */
    MockOrderTotal.prototype.label;
    /** @type {?} */
    MockOrderTotal.prototype.value;
    /** @type {?} */
    MockOrderTotal.prototype.sort_order;
    /** @type {?} */
    MockOrderTotal.prototype.type;
}
;
var DaffOrderTotalFactory = /** @class */ (function (_super) {
    __extends(DaffOrderTotalFactory, _super);
    function DaffOrderTotalFactory() {
        return _super.call(this, MockOrderTotal) || this;
    }
    DaffOrderTotalFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffOrderTotalFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffOrderTotalFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffOrderTotalFactory_Factory() { return new DaffOrderTotalFactory(); }, token: DaffOrderTotalFactory, providedIn: "root" });
    return DaffOrderTotalFactory;
}(DaffModelFactory));
export { DaffOrderTotalFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItdG90YWwuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9vcmRlci90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZmFjdG9yaWVzL29yZGVyLXRvdGFsLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sb0JBQW9CLENBQUM7QUFFNUMsT0FBTyxFQUFrQixzQkFBc0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUUxRDtJQUFBO1FBQ0UsVUFBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUIsVUFBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFDLENBQUMsQ0FBQztRQUNoRCxlQUFVLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDO1FBQ3JELFNBQUksR0FBRyxzQkFBc0IsQ0FBQyxVQUFVLENBQUE7SUFDMUMsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7Ozs7SUFKQywrQkFBNEI7O0lBQzVCLCtCQUFnRDs7SUFDaEQsb0NBQXFEOztJQUNyRCw4QkFBd0M7O0FBQ3pDLENBQUM7QUFFRjtJQUcyQyx5Q0FBZ0M7SUFDekU7ZUFDRSxrQkFBTSxjQUFjLENBQUM7SUFDdkIsQ0FBQzs7Z0JBTkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7Z0NBZkQ7Q0FvQkMsQUFQRCxDQUcyQyxnQkFBZ0IsR0FJMUQ7U0FKWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBmYWtlciBmcm9tICdmYWtlci9sb2NhbGUvZW5fVVMnO1xuXG5pbXBvcnQgeyBEYWZmT3JkZXJUb3RhbCwgRGFmZk9yZGVyVG90YWxUeXBlRW51bSB9IGZyb20gJ0BkYWZmb2RpbC9vcmRlcic7XG5pbXBvcnQgeyBEYWZmTW9kZWxGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5cbmV4cG9ydCBjbGFzcyBNb2NrT3JkZXJUb3RhbCBpbXBsZW1lbnRzIERhZmZPcmRlclRvdGFsIHtcbiAgbGFiZWwgPSBmYWtlci5yYW5kb20ud29yZCgpO1xuICB2YWx1ZSA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDB9KTtcbiAgc29ydF9vcmRlciA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDB9KTtcbiAgdHlwZSA9IERhZmZPcmRlclRvdGFsVHlwZUVudW0uR3JhbmRUb3RhbFxufTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZk9yZGVyVG90YWxGYWN0b3J5IGV4dGVuZHMgRGFmZk1vZGVsRmFjdG9yeTxEYWZmT3JkZXJUb3RhbD4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihNb2NrT3JkZXJUb3RhbCk7XG4gIH1cbn1cbiJdfQ==