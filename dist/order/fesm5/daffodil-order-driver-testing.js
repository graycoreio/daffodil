import { Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffOrderDriver } from '@daffodil/order/driver';
import { of } from 'rxjs';
import { DaffOrderFactory } from '@daffodil/order/testing';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffTestingOrderService = /** @class */ (function () {
    function DaffTestingOrderService(orderFactory) {
        this.orderFactory = orderFactory;
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    DaffTestingOrderService.prototype.get = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return of(this.orderFactory.create({ id: orderId }));
    };
    /**
     * @return {?}
     */
    DaffTestingOrderService.prototype.list = /**
     * @return {?}
     */
    function () {
        return of(this.orderFactory.createMany(5));
    };
    DaffTestingOrderService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffTestingOrderService.ctorParameters = function () { return [
        { type: DaffOrderFactory }
    ]; };
    /** @nocollapse */ DaffTestingOrderService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffTestingOrderService_Factory() { return new DaffTestingOrderService(ɵɵinject(DaffOrderFactory)); }, token: DaffTestingOrderService, providedIn: "root" });
    return DaffTestingOrderService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffTestingOrderService.prototype.orderFactory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffOrderTestingDriverModule = /** @class */ (function () {
    function DaffOrderTestingDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffOrderTestingDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DaffOrderTestingDriverModule,
            providers: [
                {
                    provide: DaffOrderDriver,
                    useExisting: DaffTestingOrderService
                }
            ]
        };
    };
    DaffOrderTestingDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return DaffOrderTestingDriverModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DaffOrderTestingDriverModule, DaffTestingOrderService };
//# sourceMappingURL=daffodil-order-driver-testing.js.map
