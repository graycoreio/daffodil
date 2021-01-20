/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var DaffMagentoNavigationTransformerService = /** @class */ (function () {
    function DaffMagentoNavigationTransformerService() {
    }
    /**
     * @param {?} node
     * @return {?}
     */
    DaffMagentoNavigationTransformerService.prototype.transform = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        var _this = this;
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
                function (breadcrumb) { return _this.transformBreadcrumb(breadcrumb); }))
                    .sort((/**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */
                function (a, b) { return a.categoryLevel - b.categoryLevel; })) :
                [],
            // TODO: optional chaining
            children: node.children && node.children.filter((/**
             * @param {?} child
             * @return {?}
             */
            function (child) { return child.include_in_menu; })).map((/**
             * @param {?} child
             * @return {?}
             */
            function (child) { return _this.transform(child); }))
        };
    };
    /**
     * @private
     * @param {?} breadcrumb
     * @return {?}
     */
    DaffMagentoNavigationTransformerService.prototype.transformBreadcrumb = /**
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
    DaffMagentoNavigationTransformerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffMagentoNavigationTransformerService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoNavigationTransformerService_Factory() { return new DaffMagentoNavigationTransformerService(); }, token: DaffMagentoNavigationTransformerService, providedIn: "root" });
    return DaffMagentoNavigationTransformerService;
}());
export { DaffMagentoNavigationTransformerService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi10cmFuc2Zvcm1lci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9uYXZpZ2F0aW9uL2RyaXZlci9tYWdlbnRvLyIsInNvdXJjZXMiOlsidHJhbnNmb3JtZXJzL25hdmlnYXRpb24tdHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTzNDO0lBQUE7S0ErQkM7Ozs7O0lBMUJDLDJEQUFTOzs7O0lBQVQsVUFBVSxJQUFrQjtRQUE1QixpQkFnQkM7UUFmQyxPQUFPO1lBQ0wsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ1gsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsY0FBYyxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2xDLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYzs7WUFFdEMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLFdBQVc7cUJBQ2QsR0FBRzs7OztnQkFBQyxVQUFBLFVBQVUsSUFBSSxPQUFBLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsRUFBcEMsQ0FBb0MsRUFBQztxQkFDdkQsSUFBSTs7Ozs7Z0JBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsYUFBYSxFQUFqQyxDQUFpQyxFQUFDLENBQUMsQ0FBQztnQkFDckQsRUFBRTs7WUFFQSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07Ozs7WUFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxlQUFlLEVBQXJCLENBQXFCLEVBQUMsQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFyQixDQUFxQixFQUFDO1NBQ3BILENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTyxxRUFBbUI7Ozs7O0lBQTNCLFVBQTRCLFVBQTZCO1FBQ3ZELE9BQU87WUFDTCxVQUFVLEVBQUUsVUFBVSxDQUFDLFdBQVc7WUFDbEMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxhQUFhO1lBQ3RDLGFBQWEsRUFBRSxVQUFVLENBQUMsY0FBYztZQUN4QyxjQUFjLEVBQUUsVUFBVSxDQUFDLGdCQUFnQjtTQUM1QyxDQUFBO0lBQ0gsQ0FBQzs7Z0JBOUJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OztrREFURDtDQXNDQyxBQS9CRCxJQStCQztTQTVCWSx1Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhZmZOYXZpZ2F0aW9uQnJlYWRjcnVtYiwgRGFmZk5hdmlnYXRpb25UcmVlIH0gZnJvbSAnQGRhZmZvZGlsL25hdmlnYXRpb24nO1xuaW1wb3J0IHsgRGFmZk5hdmlnYXRpb25UcmFuc2Zvcm1lckludGVyZmFjZSB9IGZyb20gJ0BkYWZmb2RpbC9uYXZpZ2F0aW9uL2RyaXZlcic7XG5cbmltcG9ydCB7IENhdGVnb3J5Tm9kZSwgTWFnZW50b0JyZWFkY3J1bWIgfSBmcm9tICcuLi9tb2RlbHMvY2F0ZWdvcnktbm9kZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZNYWdlbnRvTmF2aWdhdGlvblRyYW5zZm9ybWVyU2VydmljZSBpbXBsZW1lbnRzIERhZmZOYXZpZ2F0aW9uVHJhbnNmb3JtZXJJbnRlcmZhY2U8RGFmZk5hdmlnYXRpb25UcmVlPiB7XG5cbiAgdHJhbnNmb3JtKG5vZGU6IENhdGVnb3J5Tm9kZSk6IERhZmZOYXZpZ2F0aW9uVHJlZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBub2RlLmlkLFxuICAgICAgcGF0aDogbm9kZS5pZCxcbiAgICAgIG5hbWU6IG5vZGUubmFtZSxcbiAgICAgIHRvdGFsX3Byb2R1Y3RzOiBub2RlLnByb2R1Y3RfY291bnQsXG4gICAgICBjaGlsZHJlbl9jb3VudDogbm9kZS5jaGlsZHJlbl9jb3VudCxcblx0XHRcdC8vdG9kbzogdXNlIG9wdGlvbmFsIGNoYWluaW5nIHdoZW4gcG9zc2libGVcblx0XHRcdGJyZWFkY3J1bWJzOiBub2RlLmJyZWFkY3J1bWJzID8gXG5cdFx0XHRcdG5vZGUuYnJlYWRjcnVtYnNcblx0XHRcdFx0XHQubWFwKGJyZWFkY3J1bWIgPT4gdGhpcy50cmFuc2Zvcm1CcmVhZGNydW1iKGJyZWFkY3J1bWIpKVxuXHRcdFx0XHRcdC5zb3J0KChhLCBiKSA9PiBhLmNhdGVnb3J5TGV2ZWwgLSBiLmNhdGVnb3J5TGV2ZWwpIDogXG5cdFx0XHRcdFtdLFxuICAgICAgLy8gVE9ETzogb3B0aW9uYWwgY2hhaW5pbmdcbiAgICAgIGNoaWxkcmVuOiBub2RlLmNoaWxkcmVuICYmIG5vZGUuY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkLmluY2x1ZGVfaW5fbWVudSkubWFwKGNoaWxkID0+IHRoaXMudHJhbnNmb3JtKGNoaWxkKSlcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSB0cmFuc2Zvcm1CcmVhZGNydW1iKGJyZWFkY3J1bWI6IE1hZ2VudG9CcmVhZGNydW1iKTogRGFmZk5hdmlnYXRpb25CcmVhZGNydW1iIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2F0ZWdvcnlJZDogYnJlYWRjcnVtYi5jYXRlZ29yeV9pZCxcbiAgICAgIGNhdGVnb3J5TmFtZTogYnJlYWRjcnVtYi5jYXRlZ29yeV9uYW1lLFxuICAgICAgY2F0ZWdvcnlMZXZlbDogYnJlYWRjcnVtYi5jYXRlZ29yeV9sZXZlbCxcbiAgICAgIGNhdGVnb3J5VXJsS2V5OiBicmVhZGNydW1iLmNhdGVnb3J5X3VybF9rZXlcbiAgICB9XG4gIH1cbn1cbiJdfQ==