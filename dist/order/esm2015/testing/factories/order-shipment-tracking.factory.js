/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
export class MockOrderShipmentTracking {
    constructor() {
        this.tracking_number = faker.random.alphaNumeric(16);
        this.tracking_url = faker.internet.url();
        this.carrier = faker.random.word();
        this.carrier_logo = faker.internet.url();
        this.title = faker.random.word();
    }
}
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
export class DaffOrderShipmentTrackingFactory extends DaffModelFactory {
    constructor() {
        super(MockOrderShipmentTracking);
    }
}
DaffOrderShipmentTrackingFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffOrderShipmentTrackingFactory.ctorParameters = () => [];
/** @nocollapse */ DaffOrderShipmentTrackingFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffOrderShipmentTrackingFactory_Factory() { return new DaffOrderShipmentTrackingFactory(); }, token: DaffOrderShipmentTrackingFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItc2hpcG1lbnQtdHJhY2tpbmcuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9vcmRlci90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZmFjdG9yaWVzL29yZGVyLXNoaXBtZW50LXRyYWNraW5nLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxvQkFBb0IsQ0FBQztBQUc1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFFMUQsTUFBTSxPQUFPLHlCQUF5QjtJQUF0QztRQUNFLG9CQUFlLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEQsaUJBQVksR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3BDLFlBQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzlCLGlCQUFZLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNwQyxVQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM5QixDQUFDO0NBQUE7OztJQUxDLG9EQUFnRDs7SUFDaEQsaURBQW9DOztJQUNwQyw0Q0FBOEI7O0lBQzlCLGlEQUFvQzs7SUFDcEMsMENBQTRCOztBQUM3QixDQUFDO0FBS0YsTUFBTSxPQUFPLGdDQUFpQyxTQUFRLGdCQUEyQztJQUMvRjtRQUNFLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ25DLENBQUM7OztZQU5GLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGZha2VyIGZyb20gJ2Zha2VyL2xvY2FsZS9lbl9VUyc7XG5cbmltcG9ydCB7IERhZmZPcmRlclNoaXBtZW50VHJhY2tpbmcgfSBmcm9tICdAZGFmZm9kaWwvb3JkZXInO1xuaW1wb3J0IHsgRGFmZk1vZGVsRmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuXG5leHBvcnQgY2xhc3MgTW9ja09yZGVyU2hpcG1lbnRUcmFja2luZyBpbXBsZW1lbnRzIERhZmZPcmRlclNoaXBtZW50VHJhY2tpbmcge1xuICB0cmFja2luZ19udW1iZXIgPSBmYWtlci5yYW5kb20uYWxwaGFOdW1lcmljKDE2KTtcbiAgdHJhY2tpbmdfdXJsID0gZmFrZXIuaW50ZXJuZXQudXJsKCk7XG4gIGNhcnJpZXIgPSBmYWtlci5yYW5kb20ud29yZCgpO1xuICBjYXJyaWVyX2xvZ28gPSBmYWtlci5pbnRlcm5ldC51cmwoKTtcbiAgdGl0bGUgPSBmYWtlci5yYW5kb20ud29yZCgpO1xufTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZk9yZGVyU2hpcG1lbnRUcmFja2luZ0ZhY3RvcnkgZXh0ZW5kcyBEYWZmTW9kZWxGYWN0b3J5PERhZmZPcmRlclNoaXBtZW50VHJhY2tpbmc+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoTW9ja09yZGVyU2hpcG1lbnRUcmFja2luZyk7XG4gIH1cbn1cbiJdfQ==