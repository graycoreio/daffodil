/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { STATUS } from 'angular-in-memory-web-api';
import { DaffProductImageFactory } from '@daffodil/product/testing';
import { DaffOrderFactory } from '../order/factories/order.factory';
import { DaffOrderItemFactory } from '../order/factories/order-item.factory';
import * as i0 from "@angular/core";
import * as i1 from "../order/factories/order.factory";
import * as i2 from "../order/factories/order-item.factory";
import * as i3 from "@daffodil/product/testing";
var DaffInMemoryBackendCheckoutService = /** @class */ (function () {
    function DaffInMemoryBackendCheckoutService(orderFactory, orderItemFactory, productImageFactory) {
        this.orderFactory = orderFactory;
        this.orderItemFactory = orderItemFactory;
        this.productImageFactory = productImageFactory;
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCheckoutService.prototype.post = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () {
            if (reqInfo.id === 'placeOrder') {
                //should make a service call to clear cart here.
                // this.driver.cartService.clear(reqInfo.req.body.orderId).subscribe();
                _this.populateOrder();
            }
            return {
                body: _this.order,
                status: STATUS.OK
            };
        }));
    };
    /**
     * @return {?}
     */
    DaffInMemoryBackendCheckoutService.prototype.createDb = /**
     * @return {?}
     */
    function () {
        return {
            order: null
        };
    };
    /**
     * @private
     * @return {?}
     */
    DaffInMemoryBackendCheckoutService.prototype.populateOrder = /**
     * @private
     * @return {?}
     */
    function () {
        this.order = this.orderFactory.create({
            items: this.orderItemFactory.createMany(2, {
                image: this.productImageFactory.create()
            })
        });
    };
    DaffInMemoryBackendCheckoutService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryBackendCheckoutService.ctorParameters = function () { return [
        { type: DaffOrderFactory },
        { type: DaffOrderItemFactory },
        { type: DaffProductImageFactory }
    ]; };
    /** @nocollapse */ DaffInMemoryBackendCheckoutService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCheckoutService_Factory() { return new DaffInMemoryBackendCheckoutService(i0.ɵɵinject(i1.DaffOrderFactory), i0.ɵɵinject(i2.DaffOrderItemFactory), i0.ɵɵinject(i3.DaffProductImageFactory)); }, token: DaffInMemoryBackendCheckoutService, providedIn: "root" });
    return DaffInMemoryBackendCheckoutService;
}());
export { DaffInMemoryBackendCheckoutService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryBackendCheckoutService.prototype.order;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryBackendCheckoutService.prototype.orderFactory;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryBackendCheckoutService.prototype.orderItemFactory;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryBackendCheckoutService.prototype.productImageFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jaGVja291dC90ZXN0aW5nLyIsInNvdXJjZXMiOlsiaW5tZW1vcnktYmFja2VuZC9jaGVja291dC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBcUIsTUFBTSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFdEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDcEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7Ozs7O0FBRTdFO0lBTUUsNENBQ1UsWUFBOEIsRUFDOUIsZ0JBQXNDLEVBQ3RDLG1CQUE0QztRQUY1QyxpQkFBWSxHQUFaLFlBQVksQ0FBa0I7UUFDOUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFzQjtRQUN0Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXlCO0lBQ25ELENBQUM7Ozs7O0lBRUosaURBQUk7Ozs7SUFBSixVQUFLLE9BQVk7UUFBakIsaUJBYUM7UUFaQyxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZTs7O1FBQUM7WUFDbkMsSUFBSSxPQUFPLENBQUMsRUFBRSxLQUFLLFlBQVksRUFBRTtnQkFDL0IsZ0RBQWdEO2dCQUNoRCx1RUFBdUU7Z0JBQ3ZFLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUN0QjtZQUVELE9BQU87Z0JBQ0wsSUFBSSxFQUFFLEtBQUksQ0FBQyxLQUFLO2dCQUNoQixNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUU7YUFDbEIsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELHFEQUFROzs7SUFBUjtRQUNFLE9BQU87WUFDTCxLQUFLLEVBQUUsSUFBSTtTQUNaLENBQUM7SUFDSixDQUFDOzs7OztJQUVPLDBEQUFhOzs7O0lBQXJCO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztZQUNwQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3pDLEtBQUssRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFO2FBQ3pDLENBQUM7U0FDSCxDQUFDLENBQUM7SUFDTCxDQUFDOztnQkF2Q0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFMUSxnQkFBZ0I7Z0JBQ2hCLG9CQUFvQjtnQkFIcEIsdUJBQXVCOzs7NkNBSGhDO0NBZ0RDLEFBeENELElBd0NDO1NBckNZLGtDQUFrQzs7Ozs7O0lBQzdDLG1EQUFjOzs7OztJQUdaLDBEQUFzQzs7Ozs7SUFDdEMsOERBQThDOzs7OztJQUM5QyxpRUFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbk1lbW9yeURiU2VydmljZSwgU1RBVFVTIH0gZnJvbSAnYW5ndWxhci1pbi1tZW1vcnktd2ViLWFwaSc7XG5cbmltcG9ydCB7IERhZmZQcm9kdWN0SW1hZ2VGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL3Byb2R1Y3QvdGVzdGluZyc7XG5cbmltcG9ydCB7IERhZmZPcmRlckZhY3RvcnkgfSBmcm9tICcuLi9vcmRlci9mYWN0b3JpZXMvb3JkZXIuZmFjdG9yeSc7XG5pbXBvcnQgeyBEYWZmT3JkZXJJdGVtRmFjdG9yeSB9IGZyb20gJy4uL29yZGVyL2ZhY3Rvcmllcy9vcmRlci1pdGVtLmZhY3RvcnknO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmSW5NZW1vcnlCYWNrZW5kQ2hlY2tvdXRTZXJ2aWNlIGltcGxlbWVudHMgSW5NZW1vcnlEYlNlcnZpY2Uge1xuICBwcml2YXRlIG9yZGVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgb3JkZXJGYWN0b3J5OiBEYWZmT3JkZXJGYWN0b3J5LFxuICAgIHByaXZhdGUgb3JkZXJJdGVtRmFjdG9yeTogRGFmZk9yZGVySXRlbUZhY3RvcnksXG4gICAgcHJpdmF0ZSBwcm9kdWN0SW1hZ2VGYWN0b3J5OiBEYWZmUHJvZHVjdEltYWdlRmFjdG9yeVxuICApIHt9XG5cbiAgcG9zdChyZXFJbmZvOiBhbnkpIHtcbiAgICByZXR1cm4gcmVxSW5mby51dGlscy5jcmVhdGVSZXNwb25zZSQoKCkgPT4ge1xuICAgICAgaWYgKHJlcUluZm8uaWQgPT09ICdwbGFjZU9yZGVyJykge1xuICAgICAgICAvL3Nob3VsZCBtYWtlIGEgc2VydmljZSBjYWxsIHRvIGNsZWFyIGNhcnQgaGVyZS5cbiAgICAgICAgLy8gdGhpcy5kcml2ZXIuY2FydFNlcnZpY2UuY2xlYXIocmVxSW5mby5yZXEuYm9keS5vcmRlcklkKS5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5wb3B1bGF0ZU9yZGVyKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGJvZHk6IHRoaXMub3JkZXIsXG4gICAgICAgIHN0YXR1czogU1RBVFVTLk9LXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlRGIoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9yZGVyOiBudWxsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgcG9wdWxhdGVPcmRlcigpIHtcbiAgICB0aGlzLm9yZGVyID0gdGhpcy5vcmRlckZhY3RvcnkuY3JlYXRlKHsgXG4gICAgICBpdGVtczogdGhpcy5vcmRlckl0ZW1GYWN0b3J5LmNyZWF0ZU1hbnkoMiwge1xuICAgICAgICBpbWFnZTogdGhpcy5wcm9kdWN0SW1hZ2VGYWN0b3J5LmNyZWF0ZSgpXG4gICAgICB9KSBcbiAgICB9KTtcbiAgfVxufVxuIl19