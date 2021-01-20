/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
export class MockOrderShipmentItem {
    constructor() {
        this.item = null;
        this.qty = faker.random.number({ min: 1, max: 100 });
    }
}
if (false) {
    /** @type {?} */
    MockOrderShipmentItem.prototype.item;
    /** @type {?} */
    MockOrderShipmentItem.prototype.qty;
}
;
export class DaffOrderShipmentItemFactory extends DaffModelFactory {
    constructor() {
        super(MockOrderShipmentItem);
    }
}
DaffOrderShipmentItemFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffOrderShipmentItemFactory.ctorParameters = () => [];
/** @nocollapse */ DaffOrderShipmentItemFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffOrderShipmentItemFactory_Factory() { return new DaffOrderShipmentItemFactory(); }, token: DaffOrderShipmentItemFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItc2hpcG1lbnQtaXRlbS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL29yZGVyL3Rlc3RpbmcvIiwic291cmNlcyI6WyJmYWN0b3JpZXMvb3JkZXItc2hpcG1lbnQtaXRlbS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sb0JBQW9CLENBQUM7QUFHNUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRTFELE1BQU0sT0FBTyxxQkFBcUI7SUFBbEM7UUFDRSxTQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ1osUUFBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0NBQUE7OztJQUZDLHFDQUFZOztJQUNaLG9DQUE4Qzs7QUFDL0MsQ0FBQztBQUtGLE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxnQkFBdUM7SUFDdkY7UUFDRSxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7WUFORixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBmYWtlciBmcm9tICdmYWtlci9sb2NhbGUvZW5fVVMnO1xuXG5pbXBvcnQgeyBEYWZmT3JkZXJTaGlwbWVudEl0ZW0gfSBmcm9tICdAZGFmZm9kaWwvb3JkZXInO1xuaW1wb3J0IHsgRGFmZk1vZGVsRmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuXG5leHBvcnQgY2xhc3MgTW9ja09yZGVyU2hpcG1lbnRJdGVtIGltcGxlbWVudHMgRGFmZk9yZGVyU2hpcG1lbnRJdGVtIHtcbiAgaXRlbSA9IG51bGw7XG4gIHF0eSA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDB9KTtcbn07XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZPcmRlclNoaXBtZW50SXRlbUZhY3RvcnkgZXh0ZW5kcyBEYWZmTW9kZWxGYWN0b3J5PERhZmZPcmRlclNoaXBtZW50SXRlbT4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihNb2NrT3JkZXJTaGlwbWVudEl0ZW0pO1xuICB9XG59XG4iXX0=