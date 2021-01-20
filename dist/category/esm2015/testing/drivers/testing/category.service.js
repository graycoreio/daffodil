/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DaffProductFactory } from '@daffodil/product/testing';
import { DaffCategoryFactory } from '../../factories/category.factory';
import { DaffCategoryPageConfigurationStateFactory } from '../../factories/category-page-configuration-state.factory';
import * as i0 from "@angular/core";
import * as i1 from "../../factories/category.factory";
import * as i2 from "../../factories/category-page-configuration-state.factory";
import * as i3 from "@daffodil/product/testing";
export class DaffTestingCategoryService {
    /**
     * @param {?} categoryFactory
     * @param {?} categoryPageConfigurationStateFactory
     * @param {?} productFactory
     */
    constructor(categoryFactory, categoryPageConfigurationStateFactory, productFactory) {
        this.categoryFactory = categoryFactory;
        this.categoryPageConfigurationStateFactory = categoryPageConfigurationStateFactory;
        this.productFactory = productFactory;
    }
    /**
     * @param {?} categoryRequest
     * @return {?}
     */
    get(categoryRequest) {
        return of({
            category: this.categoryFactory.create(),
            categoryPageConfigurationState: this.categoryPageConfigurationStateFactory.create(),
            products: this.productFactory.createMany(3)
        });
    }
}
DaffTestingCategoryService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffTestingCategoryService.ctorParameters = () => [
    { type: DaffCategoryFactory },
    { type: DaffCategoryPageConfigurationStateFactory },
    { type: DaffProductFactory }
];
/** @nocollapse */ DaffTestingCategoryService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffTestingCategoryService_Factory() { return new DaffTestingCategoryService(i0.ɵɵinject(i1.DaffCategoryFactory), i0.ɵɵinject(i2.DaffCategoryPageConfigurationStateFactory), i0.ɵɵinject(i3.DaffProductFactory)); }, token: DaffTestingCategoryService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffTestingCategoryService.prototype.categoryFactory;
    /**
     * @type {?}
     * @private
     */
    DaffTestingCategoryService.prototype.categoryPageConfigurationStateFactory;
    /**
     * @type {?}
     * @private
     */
    DaffTestingCategoryService.prototype.productFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXRlZ29yeS90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZHJpdmVycy90ZXN0aW5nL2NhdGVnb3J5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUd0QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUUvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUseUNBQXlDLEVBQUUsTUFBTSwyREFBMkQsQ0FBQzs7Ozs7QUFLdEgsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7O0lBRXJDLFlBQ1UsZUFBb0MsRUFDcEMscUNBQWdGLEVBQ2hGLGNBQWtDO1FBRmxDLG9CQUFlLEdBQWYsZUFBZSxDQUFxQjtRQUNwQywwQ0FBcUMsR0FBckMscUNBQXFDLENBQTJDO1FBQ2hGLG1CQUFjLEdBQWQsY0FBYyxDQUFvQjtJQUN6QyxDQUFDOzs7OztJQUVKLEdBQUcsQ0FBQyxlQUFvQztRQUN0QyxPQUFPLEVBQUUsQ0FBQztZQUNSLFFBQVEsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRTtZQUN2Qyw4QkFBOEIsRUFBRSxJQUFJLENBQUMscUNBQXFDLENBQUMsTUFBTSxFQUFFO1lBQ25GLFFBQVEsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7U0FDNUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBakJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUxRLG1CQUFtQjtZQUNuQix5Q0FBeUM7WUFIekMsa0JBQWtCOzs7Ozs7OztJQVd2QixxREFBNEM7Ozs7O0lBQzVDLDJFQUF3Rjs7Ozs7SUFDeEYsb0RBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGFmZkdldENhdGVnb3J5UmVzcG9uc2UsIERhZmZDYXRlZ29yeVNlcnZpY2VJbnRlcmZhY2UsIERhZmZDYXRlZ29yeVJlcXVlc3QgfSBmcm9tICdAZGFmZm9kaWwvY2F0ZWdvcnknO1xuaW1wb3J0IHsgRGFmZlByb2R1Y3RGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL3Byb2R1Y3QvdGVzdGluZyc7XG5cbmltcG9ydCB7IERhZmZDYXRlZ29yeUZhY3RvcnkgfSBmcm9tICcuLi8uLi9mYWN0b3JpZXMvY2F0ZWdvcnkuZmFjdG9yeSc7XG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlRmFjdG9yeSB9IGZyb20gJy4uLy4uL2ZhY3Rvcmllcy9jYXRlZ29yeS1wYWdlLWNvbmZpZ3VyYXRpb24tc3RhdGUuZmFjdG9yeSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZUZXN0aW5nQ2F0ZWdvcnlTZXJ2aWNlIGltcGxlbWVudHMgRGFmZkNhdGVnb3J5U2VydmljZUludGVyZmFjZSB7XG4gXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2F0ZWdvcnlGYWN0b3J5OiBEYWZmQ2F0ZWdvcnlGYWN0b3J5LFxuICAgIHByaXZhdGUgY2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlRmFjdG9yeTogRGFmZkNhdGVnb3J5UGFnZUNvbmZpZ3VyYXRpb25TdGF0ZUZhY3RvcnksXG4gICAgcHJpdmF0ZSBwcm9kdWN0RmFjdG9yeTogRGFmZlByb2R1Y3RGYWN0b3J5XG4gICkge31cblxuICBnZXQoY2F0ZWdvcnlSZXF1ZXN0OiBEYWZmQ2F0ZWdvcnlSZXF1ZXN0KTogT2JzZXJ2YWJsZTxEYWZmR2V0Q2F0ZWdvcnlSZXNwb25zZT4ge1xuICAgIHJldHVybiBvZih7XG4gICAgICBjYXRlZ29yeTogdGhpcy5jYXRlZ29yeUZhY3RvcnkuY3JlYXRlKCksXG4gICAgICBjYXRlZ29yeVBhZ2VDb25maWd1cmF0aW9uU3RhdGU6IHRoaXMuY2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlRmFjdG9yeS5jcmVhdGUoKSxcbiAgICAgIHByb2R1Y3RzOiB0aGlzLnByb2R1Y3RGYWN0b3J5LmNyZWF0ZU1hbnkoMylcbiAgICB9KTtcbiAgfVxufVxuIl19