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
var DaffTestingCategoryService = /** @class */ (function () {
    function DaffTestingCategoryService(categoryFactory, categoryPageConfigurationStateFactory, productFactory) {
        this.categoryFactory = categoryFactory;
        this.categoryPageConfigurationStateFactory = categoryPageConfigurationStateFactory;
        this.productFactory = productFactory;
    }
    /**
     * @param {?} categoryRequest
     * @return {?}
     */
    DaffTestingCategoryService.prototype.get = /**
     * @param {?} categoryRequest
     * @return {?}
     */
    function (categoryRequest) {
        return of({
            category: this.categoryFactory.create(),
            categoryPageConfigurationState: this.categoryPageConfigurationStateFactory.create(),
            products: this.productFactory.createMany(3)
        });
    };
    DaffTestingCategoryService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffTestingCategoryService.ctorParameters = function () { return [
        { type: DaffCategoryFactory },
        { type: DaffCategoryPageConfigurationStateFactory },
        { type: DaffProductFactory }
    ]; };
    /** @nocollapse */ DaffTestingCategoryService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffTestingCategoryService_Factory() { return new DaffTestingCategoryService(i0.ɵɵinject(i1.DaffCategoryFactory), i0.ɵɵinject(i2.DaffCategoryPageConfigurationStateFactory), i0.ɵɵinject(i3.DaffProductFactory)); }, token: DaffTestingCategoryService, providedIn: "root" });
    return DaffTestingCategoryService;
}());
export { DaffTestingCategoryService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXRlZ29yeS90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZHJpdmVycy90ZXN0aW5nL2NhdGVnb3J5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUd0QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUUvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUseUNBQXlDLEVBQUUsTUFBTSwyREFBMkQsQ0FBQzs7Ozs7QUFFdEg7SUFLRSxvQ0FDVSxlQUFvQyxFQUNwQyxxQ0FBZ0YsRUFDaEYsY0FBa0M7UUFGbEMsb0JBQWUsR0FBZixlQUFlLENBQXFCO1FBQ3BDLDBDQUFxQyxHQUFyQyxxQ0FBcUMsQ0FBMkM7UUFDaEYsbUJBQWMsR0FBZCxjQUFjLENBQW9CO0lBQ3pDLENBQUM7Ozs7O0lBRUosd0NBQUc7Ozs7SUFBSCxVQUFJLGVBQW9DO1FBQ3RDLE9BQU8sRUFBRSxDQUFDO1lBQ1IsUUFBUSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFO1lBQ3ZDLDhCQUE4QixFQUFFLElBQUksQ0FBQyxxQ0FBcUMsQ0FBQyxNQUFNLEVBQUU7WUFDbkYsUUFBUSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztTQUM1QyxDQUFDLENBQUM7SUFDTCxDQUFDOztnQkFqQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFMUSxtQkFBbUI7Z0JBQ25CLHlDQUF5QztnQkFIekMsa0JBQWtCOzs7cUNBSjNCO0NBMkJDLEFBbEJELElBa0JDO1NBZlksMEJBQTBCOzs7Ozs7SUFHbkMscURBQTRDOzs7OztJQUM1QywyRUFBd0Y7Ozs7O0lBQ3hGLG9EQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERhZmZHZXRDYXRlZ29yeVJlc3BvbnNlLCBEYWZmQ2F0ZWdvcnlTZXJ2aWNlSW50ZXJmYWNlLCBEYWZmQ2F0ZWdvcnlSZXF1ZXN0IH0gZnJvbSAnQGRhZmZvZGlsL2NhdGVnb3J5JztcbmltcG9ydCB7IERhZmZQcm9kdWN0RmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9wcm9kdWN0L3Rlc3RpbmcnO1xuXG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnlGYWN0b3J5IH0gZnJvbSAnLi4vLi4vZmFjdG9yaWVzL2NhdGVnb3J5LmZhY3RvcnknO1xuaW1wb3J0IHsgRGFmZkNhdGVnb3J5UGFnZUNvbmZpZ3VyYXRpb25TdGF0ZUZhY3RvcnkgfSBmcm9tICcuLi8uLi9mYWN0b3JpZXMvY2F0ZWdvcnktcGFnZS1jb25maWd1cmF0aW9uLXN0YXRlLmZhY3RvcnknO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmVGVzdGluZ0NhdGVnb3J5U2VydmljZSBpbXBsZW1lbnRzIERhZmZDYXRlZ29yeVNlcnZpY2VJbnRlcmZhY2Uge1xuIFxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNhdGVnb3J5RmFjdG9yeTogRGFmZkNhdGVnb3J5RmFjdG9yeSxcbiAgICBwcml2YXRlIGNhdGVnb3J5UGFnZUNvbmZpZ3VyYXRpb25TdGF0ZUZhY3Rvcnk6IERhZmZDYXRlZ29yeVBhZ2VDb25maWd1cmF0aW9uU3RhdGVGYWN0b3J5LFxuICAgIHByaXZhdGUgcHJvZHVjdEZhY3Rvcnk6IERhZmZQcm9kdWN0RmFjdG9yeVxuICApIHt9XG5cbiAgZ2V0KGNhdGVnb3J5UmVxdWVzdDogRGFmZkNhdGVnb3J5UmVxdWVzdCk6IE9ic2VydmFibGU8RGFmZkdldENhdGVnb3J5UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gb2Yoe1xuICAgICAgY2F0ZWdvcnk6IHRoaXMuY2F0ZWdvcnlGYWN0b3J5LmNyZWF0ZSgpLFxuICAgICAgY2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlOiB0aGlzLmNhdGVnb3J5UGFnZUNvbmZpZ3VyYXRpb25TdGF0ZUZhY3RvcnkuY3JlYXRlKCksXG4gICAgICBwcm9kdWN0czogdGhpcy5wcm9kdWN0RmFjdG9yeS5jcmVhdGVNYW55KDMpXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==