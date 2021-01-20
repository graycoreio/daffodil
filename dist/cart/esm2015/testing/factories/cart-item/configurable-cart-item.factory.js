/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DaffCartItemInputType } from '@daffodil/cart';
import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffMockCartItem } from './cart-item.factory';
import * as i0 from "@angular/core";
export class DaffMockConfigurableCartItem extends DaffMockCartItem {
    constructor() {
        super(...arguments);
        this.type = DaffCartItemInputType.Configurable;
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
    DaffMockConfigurableCartItem.prototype.type;
    /** @type {?} */
    DaffMockConfigurableCartItem.prototype.attributes;
}
export class DaffConfigurableCartItemFactory extends DaffModelFactory {
    constructor() {
        super(DaffMockConfigurableCartItem);
    }
}
DaffConfigurableCartItemFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffConfigurableCartItemFactory.ctorParameters = () => [];
/** @nocollapse */ DaffConfigurableCartItemFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffConfigurableCartItemFactory_Factory() { return new DaffConfigurableCartItemFactory(); }, token: DaffConfigurableCartItemFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLWNhcnQtaXRlbS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvdGVzdGluZy8iLCJzb3VyY2VzIjpbImZhY3Rvcmllcy9jYXJ0LWl0ZW0vY29uZmlndXJhYmxlLWNhcnQtaXRlbS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBNEIscUJBQXFCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUUxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFdkQsTUFBTSxPQUFPLDRCQUE2QixTQUFRLGdCQUFnQjtJQUFsRTs7UUFDQyxTQUFJLEdBQUcscUJBQXFCLENBQUMsWUFBWSxDQUFDO1FBQzFDLGVBQVUsR0FBRztZQUNaO2dCQUNDLGVBQWUsRUFBRSxPQUFPO2dCQUN4QixXQUFXLEVBQUUsS0FBSzthQUNsQjtZQUNEO2dCQUNDLGVBQWUsRUFBRSxNQUFNO2dCQUN2QixXQUFXLEVBQUUsR0FBRzthQUNoQjtTQUNELENBQUM7SUFDSCxDQUFDO0NBQUE7OztJQVhBLDRDQUEwQzs7SUFDMUMsa0RBU0U7O0FBTUgsTUFBTSxPQUFPLCtCQUFnQyxTQUFRLGdCQUEwQztJQUU3RjtRQUNFLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7OztZQVBGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGZha2VyIGZyb20gJ2Zha2VyL2xvY2FsZS9lbl9VUyc7XG5cbmltcG9ydCB7IERhZmZDb25maWd1cmFibGVDYXJ0SXRlbSwgRGFmZkNhcnRJdGVtSW5wdXRUeXBlIH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuaW1wb3J0IHsgRGFmZk1vZGVsRmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuXG5pbXBvcnQgeyBEYWZmTW9ja0NhcnRJdGVtIH0gZnJvbSAnLi9jYXJ0LWl0ZW0uZmFjdG9yeSc7XG5cbmV4cG9ydCBjbGFzcyBEYWZmTW9ja0NvbmZpZ3VyYWJsZUNhcnRJdGVtIGV4dGVuZHMgRGFmZk1vY2tDYXJ0SXRlbSBpbXBsZW1lbnRzIERhZmZDb25maWd1cmFibGVDYXJ0SXRlbSB7XG5cdHR5cGUgPSBEYWZmQ2FydEl0ZW1JbnB1dFR5cGUuQ29uZmlndXJhYmxlO1xuXHRhdHRyaWJ1dGVzID0gW1xuXHRcdHtcblx0XHRcdGF0dHJpYnV0ZV9sYWJlbDogJ0NvbG9yJyxcblx0XHRcdHZhbHVlX2xhYmVsOiAnUmVkJ1xuXHRcdH0sXG5cdFx0e1xuXHRcdFx0YXR0cmlidXRlX2xhYmVsOiAnU2l6ZScsXG5cdFx0XHR2YWx1ZV9sYWJlbDogJ00nXG5cdFx0fVxuXHRdO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmQ29uZmlndXJhYmxlQ2FydEl0ZW1GYWN0b3J5IGV4dGVuZHMgRGFmZk1vZGVsRmFjdG9yeTxEYWZmQ29uZmlndXJhYmxlQ2FydEl0ZW0+IHtcblxuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHN1cGVyKERhZmZNb2NrQ29uZmlndXJhYmxlQ2FydEl0ZW0pO1xuICB9XG59XG4iXX0=