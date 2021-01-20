/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as faker from 'faker/locale/en_US';
import * as i0 from "@angular/core";
var DaffTestingCartOrderService = /** @class */ (function () {
    function DaffTestingCartOrderService() {
    }
    /**
     * @param {?} cartId
     * @param {?=} payment
     * @return {?}
     */
    DaffTestingCartOrderService.prototype.placeOrder = /**
     * @param {?} cartId
     * @param {?=} payment
     * @return {?}
     */
    function (cartId, payment) {
        return of({
            id: faker.random.number(999999),
            orderId: faker.random.number(999999),
            cartId: cartId,
        });
    };
    DaffTestingCartOrderService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffTestingCartOrderService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffTestingCartOrderService_Factory() { return new DaffTestingCartOrderService(); }, token: DaffTestingCartOrderService, providedIn: "root" });
    return DaffTestingCartOrderService;
}());
export { DaffTestingCartOrderService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1vcmRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL3Rlc3RpbmcvIiwic291cmNlcyI6WyJkcml2ZXJzL2NhcnQtb3JkZXIvY2FydC1vcmRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxLQUFLLEtBQUssTUFBTSxvQkFBb0IsQ0FBQzs7QUFPNUM7SUFBQTtLQVdDOzs7Ozs7SUFQQyxnREFBVTs7Ozs7SUFBVixVQUFXLE1BQXNCLEVBQUUsT0FBK0I7UUFDaEUsT0FBTyxFQUFFLENBQUM7WUFDUixFQUFFLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQy9CLE9BQU8sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDcEMsTUFBTSxRQUFBO1NBQ1AsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBVkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7O3NDQVhEO0NBb0JDLEFBWEQsSUFXQztTQVJZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgKiBhcyBmYWtlciBmcm9tICdmYWtlci9sb2NhbGUvZW5fVVMnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydCwgRGFmZkNhcnRQYXltZW50TWV0aG9kLCBEYWZmQ2FydE9yZGVyUmVzdWx0IH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuaW1wb3J0IHtcbiAgRGFmZkNhcnRPcmRlclNlcnZpY2VJbnRlcmZhY2UsXG59IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L2RyaXZlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZUZXN0aW5nQ2FydE9yZGVyU2VydmljZSBpbXBsZW1lbnRzIERhZmZDYXJ0T3JkZXJTZXJ2aWNlSW50ZXJmYWNlIHtcbiAgcGxhY2VPcmRlcihjYXJ0SWQ6IERhZmZDYXJ0WydpZCddLCBwYXltZW50PzogRGFmZkNhcnRQYXltZW50TWV0aG9kKTogT2JzZXJ2YWJsZTxEYWZmQ2FydE9yZGVyUmVzdWx0PiB7XG4gICAgcmV0dXJuIG9mKHtcbiAgICAgIGlkOiBmYWtlci5yYW5kb20ubnVtYmVyKDk5OTk5OSksXG4gICAgICBvcmRlcklkOiBmYWtlci5yYW5kb20ubnVtYmVyKDk5OTk5OSksXG4gICAgICBjYXJ0SWQsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==