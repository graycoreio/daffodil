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
import { MockDaffPersonalAddress } from '@daffodil/geography/testing';
import * as i0 from "@angular/core";
var MockOrderAddress = /** @class */ (function (_super) {
    __extends(MockOrderAddress, _super);
    function MockOrderAddress() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.order_id = faker.random.number({ min: 1, max: 1000 });
        return _this;
    }
    return MockOrderAddress;
}(MockDaffPersonalAddress));
export { MockOrderAddress };
if (false) {
    /** @type {?} */
    MockOrderAddress.prototype.order_id;
}
var DaffOrderAddressFactory = /** @class */ (function (_super) {
    __extends(DaffOrderAddressFactory, _super);
    function DaffOrderAddressFactory() {
        return _super.call(this, MockOrderAddress) || this;
    }
    DaffOrderAddressFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffOrderAddressFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffOrderAddressFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffOrderAddressFactory_Factory() { return new DaffOrderAddressFactory(); }, token: DaffOrderAddressFactory, providedIn: "root" });
    return DaffOrderAddressFactory;
}(DaffModelFactory));
export { DaffOrderAddressFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItYWRkcmVzcy5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL29yZGVyL3Rlc3RpbmcvIiwic291cmNlcyI6WyJmYWN0b3JpZXMvb3JkZXItYWRkcmVzcy5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssS0FBSyxNQUFNLG9CQUFvQixDQUFDO0FBRzVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztBQUV0RTtJQUFzQyxvQ0FBdUI7SUFBN0Q7UUFBQSxxRUFFQztRQURDLGNBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7O0lBQ3RELENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUFGRCxDQUFzQyx1QkFBdUIsR0FFNUQ7Ozs7SUFEQyxvQ0FBb0Q7O0FBR3REO0lBRzZDLDJDQUFrQztJQUM3RTtlQUNFLGtCQUFNLGdCQUFnQixDQUFDO0lBQ3pCLENBQUM7O2dCQU5GLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O2tDQWJEO0NBa0JDLEFBUEQsQ0FHNkMsZ0JBQWdCLEdBSTVEO1NBSlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZmFrZXIgZnJvbSAnZmFrZXIvbG9jYWxlL2VuX1VTJztcblxuaW1wb3J0IHsgRGFmZk9yZGVyQWRkcmVzcyB9IGZyb20gJ0BkYWZmb2RpbC9vcmRlcic7XG5pbXBvcnQgeyBEYWZmTW9kZWxGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQgeyBNb2NrRGFmZlBlcnNvbmFsQWRkcmVzcyB9IGZyb20gJ0BkYWZmb2RpbC9nZW9ncmFwaHkvdGVzdGluZyc7XG5cbmV4cG9ydCBjbGFzcyBNb2NrT3JkZXJBZGRyZXNzIGV4dGVuZHMgTW9ja0RhZmZQZXJzb25hbEFkZHJlc3MgaW1wbGVtZW50cyBEYWZmT3JkZXJBZGRyZXNzIHtcbiAgb3JkZXJfaWQgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmT3JkZXJBZGRyZXNzRmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8RGFmZk9yZGVyQWRkcmVzcz4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihNb2NrT3JkZXJBZGRyZXNzKTtcbiAgfVxufVxuIl19