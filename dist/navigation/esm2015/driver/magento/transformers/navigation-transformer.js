/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class DaffMagentoNavigationTransformerService {
    /**
     * @param {?} node
     * @return {?}
     */
    transform(node) {
        return {
            id: node.id,
            path: node.id,
            name: node.name,
            total_products: node.product_count,
            children_count: node.children_count,
            //todo: use optional chaining when possible
            breadcrumbs: node.breadcrumbs ?
                node.breadcrumbs
                    .map((/**
                 * @param {?} breadcrumb
                 * @return {?}
                 */
                breadcrumb => this.transformBreadcrumb(breadcrumb)))
                    .sort((/**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */
                (a, b) => a.categoryLevel - b.categoryLevel)) :
                [],
            // TODO: optional chaining
            children: node.children && node.children.filter((/**
             * @param {?} child
             * @return {?}
             */
            child => child.include_in_menu)).map((/**
             * @param {?} child
             * @return {?}
             */
            child => this.transform(child)))
        };
    }
    /**
     * @private
     * @param {?} breadcrumb
     * @return {?}
     */
    transformBreadcrumb(breadcrumb) {
        return {
            categoryId: breadcrumb.category_id,
            categoryName: breadcrumb.category_name,
            categoryLevel: breadcrumb.category_level,
            categoryUrlKey: breadcrumb.category_url_key
        };
    }
}
DaffMagentoNavigationTransformerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffMagentoNavigationTransformerService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoNavigationTransformerService_Factory() { return new DaffMagentoNavigationTransformerService(); }, token: DaffMagentoNavigationTransformerService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi10cmFuc2Zvcm1lci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9uYXZpZ2F0aW9uL2RyaXZlci9tYWdlbnRvLyIsInNvdXJjZXMiOlsidHJhbnNmb3JtZXJzL25hdmlnYXRpb24tdHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBVTNDLE1BQU0sT0FBTyx1Q0FBdUM7Ozs7O0lBRWxELFNBQVMsQ0FBQyxJQUFrQjtRQUMxQixPQUFPO1lBQ0wsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ1gsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsY0FBYyxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2xDLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYzs7WUFFdEMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLFdBQVc7cUJBQ2QsR0FBRzs7OztnQkFBQyxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsRUFBQztxQkFDdkQsSUFBSTs7Ozs7Z0JBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxhQUFhLEVBQUMsQ0FBQyxDQUFDO2dCQUNyRCxFQUFFOztZQUVBLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTs7OztZQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBQyxDQUFDLEdBQUc7Ozs7WUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUM7U0FDcEgsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVPLG1CQUFtQixDQUFDLFVBQTZCO1FBQ3ZELE9BQU87WUFDTCxVQUFVLEVBQUUsVUFBVSxDQUFDLFdBQVc7WUFDbEMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxhQUFhO1lBQ3RDLGFBQWEsRUFBRSxVQUFVLENBQUMsY0FBYztZQUN4QyxjQUFjLEVBQUUsVUFBVSxDQUFDLGdCQUFnQjtTQUM1QyxDQUFBO0lBQ0gsQ0FBQzs7O1lBOUJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGFmZk5hdmlnYXRpb25CcmVhZGNydW1iLCBEYWZmTmF2aWdhdGlvblRyZWUgfSBmcm9tICdAZGFmZm9kaWwvbmF2aWdhdGlvbic7XG5pbXBvcnQgeyBEYWZmTmF2aWdhdGlvblRyYW5zZm9ybWVySW50ZXJmYWNlIH0gZnJvbSAnQGRhZmZvZGlsL25hdmlnYXRpb24vZHJpdmVyJztcblxuaW1wb3J0IHsgQ2F0ZWdvcnlOb2RlLCBNYWdlbnRvQnJlYWRjcnVtYiB9IGZyb20gJy4uL21vZGVscy9jYXRlZ29yeS1ub2RlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZk1hZ2VudG9OYXZpZ2F0aW9uVHJhbnNmb3JtZXJTZXJ2aWNlIGltcGxlbWVudHMgRGFmZk5hdmlnYXRpb25UcmFuc2Zvcm1lckludGVyZmFjZTxEYWZmTmF2aWdhdGlvblRyZWU+IHtcblxuICB0cmFuc2Zvcm0obm9kZTogQ2F0ZWdvcnlOb2RlKTogRGFmZk5hdmlnYXRpb25UcmVlIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IG5vZGUuaWQsXG4gICAgICBwYXRoOiBub2RlLmlkLFxuICAgICAgbmFtZTogbm9kZS5uYW1lLFxuICAgICAgdG90YWxfcHJvZHVjdHM6IG5vZGUucHJvZHVjdF9jb3VudCxcbiAgICAgIGNoaWxkcmVuX2NvdW50OiBub2RlLmNoaWxkcmVuX2NvdW50LFxuXHRcdFx0Ly90b2RvOiB1c2Ugb3B0aW9uYWwgY2hhaW5pbmcgd2hlbiBwb3NzaWJsZVxuXHRcdFx0YnJlYWRjcnVtYnM6IG5vZGUuYnJlYWRjcnVtYnMgPyBcblx0XHRcdFx0bm9kZS5icmVhZGNydW1ic1xuXHRcdFx0XHRcdC5tYXAoYnJlYWRjcnVtYiA9PiB0aGlzLnRyYW5zZm9ybUJyZWFkY3J1bWIoYnJlYWRjcnVtYikpXG5cdFx0XHRcdFx0LnNvcnQoKGEsIGIpID0+IGEuY2F0ZWdvcnlMZXZlbCAtIGIuY2F0ZWdvcnlMZXZlbCkgOiBcblx0XHRcdFx0W10sXG4gICAgICAvLyBUT0RPOiBvcHRpb25hbCBjaGFpbmluZ1xuICAgICAgY2hpbGRyZW46IG5vZGUuY2hpbGRyZW4gJiYgbm9kZS5jaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4gY2hpbGQuaW5jbHVkZV9pbl9tZW51KS5tYXAoY2hpbGQgPT4gdGhpcy50cmFuc2Zvcm0oY2hpbGQpKVxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIHRyYW5zZm9ybUJyZWFkY3J1bWIoYnJlYWRjcnVtYjogTWFnZW50b0JyZWFkY3J1bWIpOiBEYWZmTmF2aWdhdGlvbkJyZWFkY3J1bWIge1xuICAgIHJldHVybiB7XG4gICAgICBjYXRlZ29yeUlkOiBicmVhZGNydW1iLmNhdGVnb3J5X2lkLFxuICAgICAgY2F0ZWdvcnlOYW1lOiBicmVhZGNydW1iLmNhdGVnb3J5X25hbWUsXG4gICAgICBjYXRlZ29yeUxldmVsOiBicmVhZGNydW1iLmNhdGVnb3J5X2xldmVsLFxuICAgICAgY2F0ZWdvcnlVcmxLZXk6IGJyZWFkY3J1bWIuY2F0ZWdvcnlfdXJsX2tleVxuICAgIH1cbiAgfVxufVxuIl19