/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DaffModelFactory, } from '@daffodil/core/testing';
import { MagentoCartItemTypeEnum } from '@daffodil/cart/driver/magento';
import { MockMagentoCartItem } from './cart-item.factory';
import * as i0 from "@angular/core";
export class MockMagentoConfigurableCartItem extends MockMagentoCartItem {
    constructor() {
        super(...arguments);
        this.__typename = MagentoCartItemTypeEnum.Configurable;
        this.configurable_options = [
            {
                option_label: 'Color',
                value_label: 'Red'
            },
            {
                option_label: 'Size',
                value_label: 'M'
            },
        ];
    }
}
if (false) {
    /** @type {?} */
    MockMagentoConfigurableCartItem.prototype.__typename;
    /** @type {?} */
    MockMagentoConfigurableCartItem.prototype.configurable_options;
}
export class MagentoConfigurableCartItemFactory extends DaffModelFactory {
    constructor() {
        super(MockMagentoConfigurableCartItem);
    }
}
MagentoConfigurableCartItemFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MagentoConfigurableCartItemFactory.ctorParameters = () => [];
/** @nocollapse */ MagentoConfigurableCartItemFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MagentoConfigurableCartItemFactory_Factory() { return new MagentoConfigurableCartItemFactory(); }, token: MagentoConfigurableCartItemFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLWNhcnQtaXRlbS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL21hZ2VudG8vdGVzdGluZy8iLCJzb3VyY2VzIjpbImZhY3Rvcmllcy9jYXJ0LWl0ZW0vY29uZmlndXJhYmxlLWNhcnQtaXRlbS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFDTCxnQkFBZ0IsR0FDakIsTUFBTSx3QkFBd0IsQ0FBQztBQUNoQyxPQUFPLEVBQUUsdUJBQXVCLEVBQStCLE1BQU0sK0JBQStCLENBQUM7QUFFckcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBRTFELE1BQU0sT0FBTywrQkFBZ0MsU0FBUSxtQkFBbUI7SUFBeEU7O1FBQ0UsZUFBVSxHQUFHLHVCQUF1QixDQUFDLFlBQVksQ0FBQztRQUNsRCx5QkFBb0IsR0FBRztZQUN2QjtnQkFDQyxZQUFZLEVBQUUsT0FBTztnQkFDckIsV0FBVyxFQUFFLEtBQUs7YUFDbEI7WUFDRDtnQkFDQyxZQUFZLEVBQUUsTUFBTTtnQkFDcEIsV0FBVyxFQUFFLEdBQUc7YUFDaEI7U0FDRCxDQUFBO0lBQ0YsQ0FBQztDQUFBOzs7SUFYQyxxREFBa0Q7O0lBQ2xELCtEQVNBOztBQU1GLE1BQU0sT0FBTyxrQ0FBbUMsU0FBUSxnQkFBNkM7SUFFbkc7UUFDRSxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7WUFQRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBmYWtlciBmcm9tICdmYWtlci9sb2NhbGUvZW5fVVMnO1xuXG5pbXBvcnQge1xuICBEYWZmTW9kZWxGYWN0b3J5LFxufSBmcm9tICdAZGFmZm9kaWwvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7IE1hZ2VudG9DYXJ0SXRlbVR5cGVFbnVtLCBNYWdlbnRvQ29uZmlndXJhYmxlQ2FydEl0ZW0gfSBmcm9tICdAZGFmZm9kaWwvY2FydC9kcml2ZXIvbWFnZW50byc7XG5cbmltcG9ydCB7IE1vY2tNYWdlbnRvQ2FydEl0ZW0gfSBmcm9tICcuL2NhcnQtaXRlbS5mYWN0b3J5JztcblxuZXhwb3J0IGNsYXNzIE1vY2tNYWdlbnRvQ29uZmlndXJhYmxlQ2FydEl0ZW0gZXh0ZW5kcyBNb2NrTWFnZW50b0NhcnRJdGVtIGltcGxlbWVudHMgTWFnZW50b0NvbmZpZ3VyYWJsZUNhcnRJdGVtIHtcbiAgX190eXBlbmFtZSA9IE1hZ2VudG9DYXJ0SXRlbVR5cGVFbnVtLkNvbmZpZ3VyYWJsZTtcbiAgY29uZmlndXJhYmxlX29wdGlvbnMgPSBbXG5cdFx0e1xuXHRcdFx0b3B0aW9uX2xhYmVsOiAnQ29sb3InLFxuXHRcdFx0dmFsdWVfbGFiZWw6ICdSZWQnXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRvcHRpb25fbGFiZWw6ICdTaXplJyxcblx0XHRcdHZhbHVlX2xhYmVsOiAnTSdcblx0XHR9LFxuXHRdXG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1hZ2VudG9Db25maWd1cmFibGVDYXJ0SXRlbUZhY3RvcnkgZXh0ZW5kcyBEYWZmTW9kZWxGYWN0b3J5PE1hZ2VudG9Db25maWd1cmFibGVDYXJ0SXRlbT4ge1xuXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc3VwZXIoTW9ja01hZ2VudG9Db25maWd1cmFibGVDYXJ0SXRlbSk7XG4gIH1cbn1cbiJdfQ==