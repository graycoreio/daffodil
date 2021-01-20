/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
export class MockOrderShipment {
    constructor() {
        this.tracking = [];
        this.items = [];
        this.carrier = faker.random.word();
        this.carrier_title = faker.random.word();
        this.code = faker.random.word();
        this.method = faker.random.word();
        this.method_description = faker.random.word();
    }
}
if (false) {
    /** @type {?} */
    MockOrderShipment.prototype.tracking;
    /** @type {?} */
    MockOrderShipment.prototype.items;
    /** @type {?} */
    MockOrderShipment.prototype.carrier;
    /** @type {?} */
    MockOrderShipment.prototype.carrier_title;
    /** @type {?} */
    MockOrderShipment.prototype.code;
    /** @type {?} */
    MockOrderShipment.prototype.method;
    /** @type {?} */
    MockOrderShipment.prototype.method_description;
}
;
export class DaffOrderShipmentFactory extends DaffModelFactory {
    constructor() {
        super(MockOrderShipment);
    }
}
DaffOrderShipmentFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffOrderShipmentFactory.ctorParameters = () => [];
/** @nocollapse */ DaffOrderShipmentFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffOrderShipmentFactory_Factory() { return new DaffOrderShipmentFactory(); }, token: DaffOrderShipmentFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItc2hpcG1lbnQuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9vcmRlci90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZmFjdG9yaWVzL29yZGVyLXNoaXBtZW50LmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxvQkFBb0IsQ0FBQztBQUc1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFFMUQsTUFBTSxPQUFPLGlCQUFpQjtJQUE5QjtRQUNFLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsWUFBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDOUIsa0JBQWEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BDLFNBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzNCLFdBQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzdCLHVCQUFrQixHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0MsQ0FBQztDQUFBOzs7SUFQQyxxQ0FBYzs7SUFDZCxrQ0FBVzs7SUFDWCxvQ0FBOEI7O0lBQzlCLDBDQUFvQzs7SUFDcEMsaUNBQTJCOztJQUMzQixtQ0FBNkI7O0lBQzdCLCtDQUF5Qzs7QUFDMUMsQ0FBQztBQUtGLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxnQkFBbUM7SUFDL0U7UUFDRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7WUFORixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBmYWtlciBmcm9tICdmYWtlci9sb2NhbGUvZW5fVVMnO1xuXG5pbXBvcnQgeyBEYWZmT3JkZXJTaGlwbWVudCB9IGZyb20gJ0BkYWZmb2RpbC9vcmRlcic7XG5pbXBvcnQgeyBEYWZmTW9kZWxGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5cbmV4cG9ydCBjbGFzcyBNb2NrT3JkZXJTaGlwbWVudCBpbXBsZW1lbnRzIERhZmZPcmRlclNoaXBtZW50IHtcbiAgdHJhY2tpbmcgPSBbXTtcbiAgaXRlbXMgPSBbXTtcbiAgY2FycmllciA9IGZha2VyLnJhbmRvbS53b3JkKCk7XG4gIGNhcnJpZXJfdGl0bGUgPSBmYWtlci5yYW5kb20ud29yZCgpO1xuICBjb2RlID0gZmFrZXIucmFuZG9tLndvcmQoKTtcbiAgbWV0aG9kID0gZmFrZXIucmFuZG9tLndvcmQoKTtcbiAgbWV0aG9kX2Rlc2NyaXB0aW9uID0gZmFrZXIucmFuZG9tLndvcmQoKTtcbn07XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZPcmRlclNoaXBtZW50RmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8RGFmZk9yZGVyU2hpcG1lbnQ+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoTW9ja09yZGVyU2hpcG1lbnQpO1xuICB9XG59XG4iXX0=