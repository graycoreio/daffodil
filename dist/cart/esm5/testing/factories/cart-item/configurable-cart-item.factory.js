/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DaffCartItemInputType } from '@daffodil/cart';
import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffMockCartItem } from './cart-item.factory';
import * as i0 from "@angular/core";
var DaffMockConfigurableCartItem = /** @class */ (function (_super) {
    tslib_1.__extends(DaffMockConfigurableCartItem, _super);
    function DaffMockConfigurableCartItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = DaffCartItemInputType.Configurable;
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
    return DaffMockConfigurableCartItem;
}(DaffMockCartItem));
export { DaffMockConfigurableCartItem };
if (false) {
    /** @type {?} */
    DaffMockConfigurableCartItem.prototype.type;
    /** @type {?} */
    DaffMockConfigurableCartItem.prototype.attributes;
}
var DaffConfigurableCartItemFactory = /** @class */ (function (_super) {
    tslib_1.__extends(DaffConfigurableCartItemFactory, _super);
    function DaffConfigurableCartItemFactory() {
        return _super.call(this, DaffMockConfigurableCartItem) || this;
    }
    DaffConfigurableCartItemFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffConfigurableCartItemFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffConfigurableCartItemFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffConfigurableCartItemFactory_Factory() { return new DaffConfigurableCartItemFactory(); }, token: DaffConfigurableCartItemFactory, providedIn: "root" });
    return DaffConfigurableCartItemFactory;
}(DaffModelFactory));
export { DaffConfigurableCartItemFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLWNhcnQtaXRlbS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvdGVzdGluZy8iLCJzb3VyY2VzIjpbImZhY3Rvcmllcy9jYXJ0LWl0ZW0vY29uZmlndXJhYmxlLWNhcnQtaXRlbS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQTRCLHFCQUFxQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBRXZEO0lBQWtELHdEQUFnQjtJQUFsRTtRQUFBLHFFQVlDO1FBWEEsVUFBSSxHQUFHLHFCQUFxQixDQUFDLFlBQVksQ0FBQztRQUMxQyxnQkFBVSxHQUFHO1lBQ1o7Z0JBQ0MsZUFBZSxFQUFFLE9BQU87Z0JBQ3hCLFdBQVcsRUFBRSxLQUFLO2FBQ2xCO1lBQ0Q7Z0JBQ0MsZUFBZSxFQUFFLE1BQU07Z0JBQ3ZCLFdBQVcsRUFBRSxHQUFHO2FBQ2hCO1NBQ0QsQ0FBQzs7SUFDSCxDQUFDO0lBQUQsbUNBQUM7QUFBRCxDQUFDLEFBWkQsQ0FBa0QsZ0JBQWdCLEdBWWpFOzs7O0lBWEEsNENBQTBDOztJQUMxQyxrREFTRTs7QUFHSDtJQUdxRCwyREFBMEM7SUFFN0Y7ZUFDRSxrQkFBTSw0QkFBNEIsQ0FBQztJQUNyQyxDQUFDOztnQkFQRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OzswQ0F4QkQ7Q0E4QkMsQUFSRCxDQUdxRCxnQkFBZ0IsR0FLcEU7U0FMWSwrQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBmYWtlciBmcm9tICdmYWtlci9sb2NhbGUvZW5fVVMnO1xuXG5pbXBvcnQgeyBEYWZmQ29uZmlndXJhYmxlQ2FydEl0ZW0sIERhZmZDYXJ0SXRlbUlucHV0VHlwZSB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcbmltcG9ydCB7IERhZmZNb2RlbEZhY3RvcnkgfSBmcm9tICdAZGFmZm9kaWwvY29yZS90ZXN0aW5nJztcblxuaW1wb3J0IHsgRGFmZk1vY2tDYXJ0SXRlbSB9IGZyb20gJy4vY2FydC1pdGVtLmZhY3RvcnknO1xuXG5leHBvcnQgY2xhc3MgRGFmZk1vY2tDb25maWd1cmFibGVDYXJ0SXRlbSBleHRlbmRzIERhZmZNb2NrQ2FydEl0ZW0gaW1wbGVtZW50cyBEYWZmQ29uZmlndXJhYmxlQ2FydEl0ZW0ge1xuXHR0eXBlID0gRGFmZkNhcnRJdGVtSW5wdXRUeXBlLkNvbmZpZ3VyYWJsZTtcblx0YXR0cmlidXRlcyA9IFtcblx0XHR7XG5cdFx0XHRhdHRyaWJ1dGVfbGFiZWw6ICdDb2xvcicsXG5cdFx0XHR2YWx1ZV9sYWJlbDogJ1JlZCdcblx0XHR9LFxuXHRcdHtcblx0XHRcdGF0dHJpYnV0ZV9sYWJlbDogJ1NpemUnLFxuXHRcdFx0dmFsdWVfbGFiZWw6ICdNJ1xuXHRcdH1cblx0XTtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZkNvbmZpZ3VyYWJsZUNhcnRJdGVtRmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8RGFmZkNvbmZpZ3VyYWJsZUNhcnRJdGVtPiB7XG5cbiAgY29uc3RydWN0b3IoKXtcbiAgICBzdXBlcihEYWZmTW9ja0NvbmZpZ3VyYWJsZUNhcnRJdGVtKTtcbiAgfVxufVxuIl19