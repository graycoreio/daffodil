/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DaffOrderItemType } from '@daffodil/order';
import { DaffModelFactory } from '@daffodil/core/testing';
import { MockOrderItem } from './order-item.factory';
import * as i0 from "@angular/core";
export class MockConfigurableOrderItem extends MockOrderItem {
    constructor() {
        super(...arguments);
        this.type = DaffOrderItemType.Configurable;
        this.attributes = [
            {
                attribute_label: 'Color',
                value_label: 'Red'
            },
            {
                attribute_label: 'Size',
                value_label: 'M'
            }
        ];
    }
}
if (false) {
    /** @type {?} */
    MockConfigurableOrderItem.prototype.type;
    /** @type {?} */
    MockConfigurableOrderItem.prototype.attributes;
}
export class DaffConfigurableOrderItemFactory extends DaffModelFactory {
    constructor() {
        super(MockConfigurableOrderItem);
    }
}
DaffConfigurableOrderItemFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffConfigurableOrderItemFactory.ctorParameters = () => [];
/** @nocollapse */ DaffConfigurableOrderItemFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffConfigurableOrderItemFactory_Factory() { return new DaffConfigurableOrderItemFactory(); }, token: DaffConfigurableOrderItemFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLW9yZGVyLWl0ZW0uZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9vcmRlci90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZmFjdG9yaWVzL2NvbmZpZ3VyYWJsZS1vcmRlci1pdGVtLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUE2QixpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFFckQsTUFBTSxPQUFPLHlCQUEwQixTQUFRLGFBQWE7SUFBNUQ7O1FBQ0MsU0FBSSxHQUFHLGlCQUFpQixDQUFDLFlBQVksQ0FBQztRQUN0QyxlQUFVLEdBQUc7WUFDWjtnQkFDQyxlQUFlLEVBQUUsT0FBTztnQkFDeEIsV0FBVyxFQUFFLEtBQUs7YUFDbEI7WUFDRDtnQkFDQyxlQUFlLEVBQUUsTUFBTTtnQkFDdkIsV0FBVyxFQUFFLEdBQUc7YUFDaEI7U0FDRCxDQUFDO0lBQ0gsQ0FBQztDQUFBOzs7SUFYQSx5Q0FBc0M7O0lBQ3RDLCtDQVNFOztBQU1ILE1BQU0sT0FBTyxnQ0FBaUMsU0FBUSxnQkFBMkM7SUFDL0Y7UUFDRSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7WUFORixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBmYWtlciBmcm9tICdmYWtlci9sb2NhbGUvZW5fVVMnO1xuXG5pbXBvcnQgeyBEYWZmQ29uZmlndXJhYmxlT3JkZXJJdGVtLCBEYWZmT3JkZXJJdGVtVHlwZSB9IGZyb20gJ0BkYWZmb2RpbC9vcmRlcic7XG5pbXBvcnQgeyBEYWZmTW9kZWxGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5cbmltcG9ydCB7IE1vY2tPcmRlckl0ZW0gfSBmcm9tICcuL29yZGVyLWl0ZW0uZmFjdG9yeSc7XG5cbmV4cG9ydCBjbGFzcyBNb2NrQ29uZmlndXJhYmxlT3JkZXJJdGVtIGV4dGVuZHMgTW9ja09yZGVySXRlbSBpbXBsZW1lbnRzIERhZmZDb25maWd1cmFibGVPcmRlckl0ZW0ge1xuXHR0eXBlID0gRGFmZk9yZGVySXRlbVR5cGUuQ29uZmlndXJhYmxlO1xuXHRhdHRyaWJ1dGVzID0gW1xuXHRcdHtcblx0XHRcdGF0dHJpYnV0ZV9sYWJlbDogJ0NvbG9yJyxcblx0XHRcdHZhbHVlX2xhYmVsOiAnUmVkJ1xuXHRcdH0sXG5cdFx0e1xuXHRcdFx0YXR0cmlidXRlX2xhYmVsOiAnU2l6ZScsXG5cdFx0XHR2YWx1ZV9sYWJlbDogJ00nXG5cdFx0fVxuXHRdO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmQ29uZmlndXJhYmxlT3JkZXJJdGVtRmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8RGFmZkNvbmZpZ3VyYWJsZU9yZGVySXRlbT4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihNb2NrQ29uZmlndXJhYmxlT3JkZXJJdGVtKTtcbiAgfVxufVxuIl19