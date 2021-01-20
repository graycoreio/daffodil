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
import { DaffOrderItemType } from '@daffodil/order';
import { DaffModelFactory } from '@daffodil/core/testing';
import { MockOrderItem } from './order-item.factory';
import * as i0 from "@angular/core";
var MockConfigurableOrderItem = /** @class */ (function (_super) {
    __extends(MockConfigurableOrderItem, _super);
    function MockConfigurableOrderItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = DaffOrderItemType.Configurable;
        _this.attributes = [
            {
                attribute_label: 'Color',
                value_label: 'Red'
            },
            {
                attribute_label: 'Size',
                value_label: 'M'
            }
        ];
        return _this;
    }
    return MockConfigurableOrderItem;
}(MockOrderItem));
export { MockConfigurableOrderItem };
if (false) {
    /** @type {?} */
    MockConfigurableOrderItem.prototype.type;
    /** @type {?} */
    MockConfigurableOrderItem.prototype.attributes;
}
var DaffConfigurableOrderItemFactory = /** @class */ (function (_super) {
    __extends(DaffConfigurableOrderItemFactory, _super);
    function DaffConfigurableOrderItemFactory() {
        return _super.call(this, MockConfigurableOrderItem) || this;
    }
    DaffConfigurableOrderItemFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffConfigurableOrderItemFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffConfigurableOrderItemFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffConfigurableOrderItemFactory_Factory() { return new DaffConfigurableOrderItemFactory(); }, token: DaffConfigurableOrderItemFactory, providedIn: "root" });
    return DaffConfigurableOrderItemFactory;
}(DaffModelFactory));
export { DaffConfigurableOrderItemFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLW9yZGVyLWl0ZW0uZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9vcmRlci90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZmFjdG9yaWVzL2NvbmZpZ3VyYWJsZS1vcmRlci1pdGVtLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBNkIsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUUxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBRXJEO0lBQStDLDZDQUFhO0lBQTVEO1FBQUEscUVBWUM7UUFYQSxVQUFJLEdBQUcsaUJBQWlCLENBQUMsWUFBWSxDQUFDO1FBQ3RDLGdCQUFVLEdBQUc7WUFDWjtnQkFDQyxlQUFlLEVBQUUsT0FBTztnQkFDeEIsV0FBVyxFQUFFLEtBQUs7YUFDbEI7WUFDRDtnQkFDQyxlQUFlLEVBQUUsTUFBTTtnQkFDdkIsV0FBVyxFQUFFLEdBQUc7YUFDaEI7U0FDRCxDQUFDOztJQUNILENBQUM7SUFBRCxnQ0FBQztBQUFELENBQUMsQUFaRCxDQUErQyxhQUFhLEdBWTNEOzs7O0lBWEEseUNBQXNDOztJQUN0QywrQ0FTRTs7QUFHSDtJQUdzRCxvREFBMkM7SUFDL0Y7ZUFDRSxrQkFBTSx5QkFBeUIsQ0FBQztJQUNsQyxDQUFDOztnQkFORixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OzsyQ0F4QkQ7Q0E2QkMsQUFQRCxDQUdzRCxnQkFBZ0IsR0FJckU7U0FKWSxnQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBmYWtlciBmcm9tICdmYWtlci9sb2NhbGUvZW5fVVMnO1xuXG5pbXBvcnQgeyBEYWZmQ29uZmlndXJhYmxlT3JkZXJJdGVtLCBEYWZmT3JkZXJJdGVtVHlwZSB9IGZyb20gJ0BkYWZmb2RpbC9vcmRlcic7XG5pbXBvcnQgeyBEYWZmTW9kZWxGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5cbmltcG9ydCB7IE1vY2tPcmRlckl0ZW0gfSBmcm9tICcuL29yZGVyLWl0ZW0uZmFjdG9yeSc7XG5cbmV4cG9ydCBjbGFzcyBNb2NrQ29uZmlndXJhYmxlT3JkZXJJdGVtIGV4dGVuZHMgTW9ja09yZGVySXRlbSBpbXBsZW1lbnRzIERhZmZDb25maWd1cmFibGVPcmRlckl0ZW0ge1xuXHR0eXBlID0gRGFmZk9yZGVySXRlbVR5cGUuQ29uZmlndXJhYmxlO1xuXHRhdHRyaWJ1dGVzID0gW1xuXHRcdHtcblx0XHRcdGF0dHJpYnV0ZV9sYWJlbDogJ0NvbG9yJyxcblx0XHRcdHZhbHVlX2xhYmVsOiAnUmVkJ1xuXHRcdH0sXG5cdFx0e1xuXHRcdFx0YXR0cmlidXRlX2xhYmVsOiAnU2l6ZScsXG5cdFx0XHR2YWx1ZV9sYWJlbDogJ00nXG5cdFx0fVxuXHRdO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmQ29uZmlndXJhYmxlT3JkZXJJdGVtRmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8RGFmZkNvbmZpZ3VyYWJsZU9yZGVySXRlbT4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihNb2NrQ29uZmlndXJhYmxlT3JkZXJJdGVtKTtcbiAgfVxufVxuIl19