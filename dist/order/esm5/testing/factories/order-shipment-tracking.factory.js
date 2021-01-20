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
var MockOrderShipmentTracking = /** @class */ (function () {
    function MockOrderShipmentTracking() {
        this.tracking_number = faker.random.alphaNumeric(16);
        this.tracking_url = faker.internet.url();
        this.carrier = faker.random.word();
        this.carrier_logo = faker.internet.url();
        this.title = faker.random.word();
    }
    return MockOrderShipmentTracking;
}());
export { MockOrderShipmentTracking };
if (false) {
    /** @type {?} */
    MockOrderShipmentTracking.prototype.tracking_number;
    /** @type {?} */
    MockOrderShipmentTracking.prototype.tracking_url;
    /** @type {?} */
    MockOrderShipmentTracking.prototype.carrier;
    /** @type {?} */
    MockOrderShipmentTracking.prototype.carrier_logo;
    /** @type {?} */
    MockOrderShipmentTracking.prototype.title;
}
;
var DaffOrderShipmentTrackingFactory = /** @class */ (function (_super) {
    __extends(DaffOrderShipmentTrackingFactory, _super);
    function DaffOrderShipmentTrackingFactory() {
        return _super.call(this, MockOrderShipmentTracking) || this;
    }
    DaffOrderShipmentTrackingFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffOrderShipmentTrackingFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffOrderShipmentTrackingFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffOrderShipmentTrackingFactory_Factory() { return new DaffOrderShipmentTrackingFactory(); }, token: DaffOrderShipmentTrackingFactory, providedIn: "root" });
    return DaffOrderShipmentTrackingFactory;
}(DaffModelFactory));
export { DaffOrderShipmentTrackingFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItc2hpcG1lbnQtdHJhY2tpbmcuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9vcmRlci90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZmFjdG9yaWVzL29yZGVyLXNoaXBtZW50LXRyYWNraW5nLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sb0JBQW9CLENBQUM7QUFHNUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRTFEO0lBQUE7UUFDRSxvQkFBZSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELGlCQUFZLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNwQyxZQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM5QixpQkFBWSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDcEMsVUFBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUFELGdDQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7Ozs7SUFMQyxvREFBZ0Q7O0lBQ2hELGlEQUFvQzs7SUFDcEMsNENBQThCOztJQUM5QixpREFBb0M7O0lBQ3BDLDBDQUE0Qjs7QUFDN0IsQ0FBQztBQUVGO0lBR3NELG9EQUEyQztJQUMvRjtlQUNFLGtCQUFNLHlCQUF5QixDQUFDO0lBQ2xDLENBQUM7O2dCQU5GLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7OzJDQWhCRDtDQXFCQyxBQVBELENBR3NELGdCQUFnQixHQUlyRTtTQUpZLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGZha2VyIGZyb20gJ2Zha2VyL2xvY2FsZS9lbl9VUyc7XG5cbmltcG9ydCB7IERhZmZPcmRlclNoaXBtZW50VHJhY2tpbmcgfSBmcm9tICdAZGFmZm9kaWwvb3JkZXInO1xuaW1wb3J0IHsgRGFmZk1vZGVsRmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuXG5leHBvcnQgY2xhc3MgTW9ja09yZGVyU2hpcG1lbnRUcmFja2luZyBpbXBsZW1lbnRzIERhZmZPcmRlclNoaXBtZW50VHJhY2tpbmcge1xuICB0cmFja2luZ19udW1iZXIgPSBmYWtlci5yYW5kb20uYWxwaGFOdW1lcmljKDE2KTtcbiAgdHJhY2tpbmdfdXJsID0gZmFrZXIuaW50ZXJuZXQudXJsKCk7XG4gIGNhcnJpZXIgPSBmYWtlci5yYW5kb20ud29yZCgpO1xuICBjYXJyaWVyX2xvZ28gPSBmYWtlci5pbnRlcm5ldC51cmwoKTtcbiAgdGl0bGUgPSBmYWtlci5yYW5kb20ud29yZCgpO1xufTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZk9yZGVyU2hpcG1lbnRUcmFja2luZ0ZhY3RvcnkgZXh0ZW5kcyBEYWZmTW9kZWxGYWN0b3J5PERhZmZPcmRlclNoaXBtZW50VHJhY2tpbmc+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoTW9ja09yZGVyU2hpcG1lbnRUcmFja2luZyk7XG4gIH1cbn1cbiJdfQ==