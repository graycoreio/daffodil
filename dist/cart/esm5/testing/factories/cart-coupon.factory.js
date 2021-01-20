/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
var MockDaffCartCoupon = /** @class */ (function () {
    function MockDaffCartCoupon() {
        this.coupon_id = faker.random.number({ min: 1, max: 1000 });
        this.code = faker.random.alphaNumeric(20);
        this.description = faker.random.words(5);
    }
    return MockDaffCartCoupon;
}());
export { MockDaffCartCoupon };
if (false) {
    /** @type {?} */
    MockDaffCartCoupon.prototype.coupon_id;
    /** @type {?} */
    MockDaffCartCoupon.prototype.code;
    /** @type {?} */
    MockDaffCartCoupon.prototype.description;
}
;
var DaffCartCouponFactory = /** @class */ (function (_super) {
    tslib_1.__extends(DaffCartCouponFactory, _super);
    function DaffCartCouponFactory() {
        return _super.call(this, MockDaffCartCoupon) || this;
    }
    DaffCartCouponFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffCartCouponFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffCartCouponFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffCartCouponFactory_Factory() { return new DaffCartCouponFactory(); }, token: DaffCartCouponFactory, providedIn: "root" });
    return DaffCartCouponFactory;
}(DaffModelFactory));
export { DaffCartCouponFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1jb3Vwb24uZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L3Rlc3RpbmcvIiwic291cmNlcyI6WyJmYWN0b3JpZXMvY2FydC1jb3Vwb24uZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxvQkFBb0IsQ0FBQztBQUc1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFFMUQ7SUFBQTtRQUNFLGNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDckQsU0FBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLGdCQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUFELHlCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7SUFIQyx1Q0FBcUQ7O0lBQ3JELGtDQUFxQzs7SUFDckMseUNBQW9DOztBQUNyQyxDQUFDO0FBRUY7SUFHMkMsaURBQWdDO0lBQ3pFO2VBQ0Usa0JBQU0sa0JBQWtCLENBQUM7SUFDM0IsQ0FBQzs7Z0JBTkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7Z0NBZEQ7Q0FtQkMsQUFQRCxDQUcyQyxnQkFBZ0IsR0FJMUQ7U0FKWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBmYWtlciBmcm9tICdmYWtlci9sb2NhbGUvZW5fVVMnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydENvdXBvbiB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcbmltcG9ydCB7IERhZmZNb2RlbEZhY3RvcnkgfSBmcm9tICdAZGFmZm9kaWwvY29yZS90ZXN0aW5nJztcblxuZXhwb3J0IGNsYXNzIE1vY2tEYWZmQ2FydENvdXBvbiBpbXBsZW1lbnRzIERhZmZDYXJ0Q291cG9uIHtcbiAgY291cG9uX2lkID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMDB9KTtcbiAgY29kZSA9IGZha2VyLnJhbmRvbS5hbHBoYU51bWVyaWMoMjApO1xuICBkZXNjcmlwdGlvbiA9IGZha2VyLnJhbmRvbS53b3Jkcyg1KTtcbn07XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0Q291cG9uRmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8RGFmZkNhcnRDb3Vwb24+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoTW9ja0RhZmZDYXJ0Q291cG9uKTtcbiAgfVxufVxuIl19