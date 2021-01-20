import { Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffOrderDriver } from '@daffodil/order/driver';
import { of } from 'rxjs';
import { DaffOrderFactory } from '@daffodil/order/testing';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffTestingOrderService {
    /**
     * @param {?} orderFactory
     */
    constructor(orderFactory) {
        this.orderFactory = orderFactory;
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    get(orderId) {
        return of(this.orderFactory.create({ id: orderId }));
    }
    /**
     * @return {?}
     */
    list() {
        return of(this.orderFactory.createMany(5));
    }
}
DaffTestingOrderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffTestingOrderService.ctorParameters = () => [
    { type: DaffOrderFactory }
];
/** @nocollapse */ DaffTestingOrderService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffTestingOrderService_Factory() { return new DaffTestingOrderService(ɵɵinject(DaffOrderFactory)); }, token: DaffTestingOrderService, providedIn: "root" });
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
class DaffOrderTestingDriverModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DaffOrderTestingDriverModule,
            providers: [
                {
                    provide: DaffOrderDriver,
                    useExisting: DaffTestingOrderService
                }
            ]
        };
    }
}
DaffOrderTestingDriverModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ]
            },] }
];

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
