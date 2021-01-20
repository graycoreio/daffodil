/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var DaffMagentoCategoryTransformerService = /** @class */ (function () {
    function DaffMagentoCategoryTransformerService() {
    }
    /**
     * @param {?} category
     * @return {?}
     */
    DaffMagentoCategoryTransformerService.prototype.transform = /**
     * @param {?} category
     * @return {?}
     */
    function (category) {
        var _this = this;
        return {
            id: category.id,
            name: category.name,
            description: category.description,
            children_count: category.children_count,
            //todo: use optional chaining when possible
            breadcrumbs: category.breadcrumbs ?
                category.breadcrumbs
                    .map((/**
                 * @param {?} breadcrumb
                 * @return {?}
                 */
                function (breadcrumb) { return _this.transformBreadcrumb(breadcrumb); }))
                    .sort((/**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */
                function (a, b) { return a.categoryLevel - b.categoryLevel; })) :
                null,
            product_ids: category.products.items.map((/**
             * @param {?} product
             * @return {?}
             */
            function (product) { return product.sku; })),
            total_products: category.products.items.length
        };
    };
    /**
     * @private
     * @param {?} breadcrumb
     * @return {?}
     */
    DaffMagentoCategoryTransformerService.prototype.transformBreadcrumb = /**
     * @private
     * @param {?} breadcrumb
     * @return {?}
     */
    function (breadcrumb) {
        return {
            categoryId: breadcrumb.category_id,
            categoryName: breadcrumb.category_name,
            categoryLevel: breadcrumb.category_level,
            categoryUrlKey: breadcrumb.category_url_key
        };
    };
    DaffMagentoCategoryTransformerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffMagentoCategoryTransformerService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoCategoryTransformerService_Factory() { return new DaffMagentoCategoryTransformerService(); }, token: DaffMagentoCategoryTransformerService, providedIn: "root" });
    return DaffMagentoCategoryTransformerService;
}());
export { DaffMagentoCategoryTransformerService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktdHJhbnNmb3JtZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXRlZ29yeS8iLCJzb3VyY2VzIjpbImRyaXZlcnMvbWFnZW50by90cmFuc2Zvcm1lcnMvY2F0ZWdvcnktdHJhbnNmb3JtZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNM0M7SUFBQTtLQThCQzs7Ozs7SUF6QkMseURBQVM7Ozs7SUFBVCxVQUFVLFFBQXlCO1FBQW5DLGlCQWVDO1FBZEMsT0FBTztZQUNMLEVBQUUsRUFBRSxRQUFRLENBQUMsRUFBRTtZQUNsQixJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUk7WUFDbkIsV0FBVyxFQUFFLFFBQVEsQ0FBQyxXQUFXO1lBQ2pDLGNBQWMsRUFBRSxRQUFRLENBQUMsY0FBYzs7WUFFdkMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDbEMsUUFBUSxDQUFDLFdBQVc7cUJBQ2xCLEdBQUc7Ozs7Z0JBQUMsVUFBQSxVQUFVLElBQUksT0FBQSxLQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLEVBQXBDLENBQW9DLEVBQUM7cUJBQ3ZELElBQUk7Ozs7O2dCQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLGFBQWEsRUFBakMsQ0FBaUMsRUFBQyxDQUFDLENBQUM7Z0JBQ3JELElBQUk7WUFDTCxXQUFXLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsRUFBWCxDQUFXLEVBQUM7WUFDaEUsY0FBYyxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU07U0FDNUMsQ0FBQTtJQUNILENBQUM7Ozs7OztJQUVPLG1FQUFtQjs7Ozs7SUFBM0IsVUFBNEIsVUFBNkI7UUFDdkQsT0FBTztZQUNMLFVBQVUsRUFBRSxVQUFVLENBQUMsV0FBVztZQUNsQyxZQUFZLEVBQUUsVUFBVSxDQUFDLGFBQWE7WUFDdEMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxjQUFjO1lBQ3hDLGNBQWMsRUFBRSxVQUFVLENBQUMsZ0JBQWdCO1NBQzVDLENBQUE7SUFDSCxDQUFDOztnQkE3QkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7O2dEQVJEO0NBb0NDLEFBOUJELElBOEJDO1NBM0JZLHFDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGFmZkNhdGVnb3J5IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2NhdGVnb3J5JztcbmltcG9ydCB7IERhZmZDYXRlZ29yeUJyZWFkY3J1bWIgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvY2F0ZWdvcnktYnJlYWRjcnVtYic7XG5pbXBvcnQgeyBNYWdlbnRvQnJlYWRjcnVtYiwgTWFnZW50b0NhdGVnb3J5IH0gZnJvbSAnLi4vbW9kZWxzL2NhdGVnb3J5JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZk1hZ2VudG9DYXRlZ29yeVRyYW5zZm9ybWVyU2VydmljZSB7XG5cbiAgdHJhbnNmb3JtKGNhdGVnb3J5OiBNYWdlbnRvQ2F0ZWdvcnkpOiBEYWZmQ2F0ZWdvcnkge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogY2F0ZWdvcnkuaWQsXG5cdFx0XHRuYW1lOiBjYXRlZ29yeS5uYW1lLFxuXHRcdFx0ZGVzY3JpcHRpb246IGNhdGVnb3J5LmRlc2NyaXB0aW9uLFxuXHRcdFx0Y2hpbGRyZW5fY291bnQ6IGNhdGVnb3J5LmNoaWxkcmVuX2NvdW50LFxuXHRcdFx0Ly90b2RvOiB1c2Ugb3B0aW9uYWwgY2hhaW5pbmcgd2hlbiBwb3NzaWJsZVxuXHRcdFx0YnJlYWRjcnVtYnM6IGNhdGVnb3J5LmJyZWFkY3J1bWJzID8gXG5cdFx0XHRcdGNhdGVnb3J5LmJyZWFkY3J1bWJzXG5cdFx0XHRcdFx0Lm1hcChicmVhZGNydW1iID0+IHRoaXMudHJhbnNmb3JtQnJlYWRjcnVtYihicmVhZGNydW1iKSlcblx0XHRcdFx0XHQuc29ydCgoYSwgYikgPT4gYS5jYXRlZ29yeUxldmVsIC0gYi5jYXRlZ29yeUxldmVsKSA6IFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0cHJvZHVjdF9pZHM6IGNhdGVnb3J5LnByb2R1Y3RzLml0ZW1zLm1hcChwcm9kdWN0ID0+IHByb2R1Y3Quc2t1KSxcblx0XHRcdHRvdGFsX3Byb2R1Y3RzOiBjYXRlZ29yeS5wcm9kdWN0cy5pdGVtcy5sZW5ndGhcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRyYW5zZm9ybUJyZWFkY3J1bWIoYnJlYWRjcnVtYjogTWFnZW50b0JyZWFkY3J1bWIpOiBEYWZmQ2F0ZWdvcnlCcmVhZGNydW1iIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2F0ZWdvcnlJZDogYnJlYWRjcnVtYi5jYXRlZ29yeV9pZCxcbiAgICAgIGNhdGVnb3J5TmFtZTogYnJlYWRjcnVtYi5jYXRlZ29yeV9uYW1lLFxuICAgICAgY2F0ZWdvcnlMZXZlbDogYnJlYWRjcnVtYi5jYXRlZ29yeV9sZXZlbCxcbiAgICAgIGNhdGVnb3J5VXJsS2V5OiBicmVhZGNydW1iLmNhdGVnb3J5X3VybF9rZXlcbiAgICB9XG4gIH1cbn1cbiJdfQ==