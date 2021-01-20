/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class DaffMagentoCategoryTransformerService {
    /**
     * @param {?} category
     * @return {?}
     */
    transform(category) {
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
                breadcrumb => this.transformBreadcrumb(breadcrumb)))
                    .sort((/**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */
                (a, b) => a.categoryLevel - b.categoryLevel)) :
                null,
            product_ids: category.products.items.map((/**
             * @param {?} product
             * @return {?}
             */
            product => product.sku)),
            total_products: category.products.items.length
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
DaffMagentoCategoryTransformerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffMagentoCategoryTransformerService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoCategoryTransformerService_Factory() { return new DaffMagentoCategoryTransformerService(); }, token: DaffMagentoCategoryTransformerService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktdHJhbnNmb3JtZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXRlZ29yeS8iLCJzb3VyY2VzIjpbImRyaXZlcnMvbWFnZW50by90cmFuc2Zvcm1lcnMvY2F0ZWdvcnktdHJhbnNmb3JtZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFTM0MsTUFBTSxPQUFPLHFDQUFxQzs7Ozs7SUFFaEQsU0FBUyxDQUFDLFFBQXlCO1FBQ2pDLE9BQU87WUFDTCxFQUFFLEVBQUUsUUFBUSxDQUFDLEVBQUU7WUFDbEIsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJO1lBQ25CLFdBQVcsRUFBRSxRQUFRLENBQUMsV0FBVztZQUNqQyxjQUFjLEVBQUUsUUFBUSxDQUFDLGNBQWM7O1lBRXZDLFdBQVcsRUFBRSxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ2xDLFFBQVEsQ0FBQyxXQUFXO3FCQUNsQixHQUFHOzs7O2dCQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxFQUFDO3FCQUN2RCxJQUFJOzs7OztnQkFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLGFBQWEsRUFBQyxDQUFDLENBQUM7Z0JBQ3JELElBQUk7WUFDTCxXQUFXLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRzs7OztZQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBQztZQUNoRSxjQUFjLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTTtTQUM1QyxDQUFBO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sbUJBQW1CLENBQUMsVUFBNkI7UUFDdkQsT0FBTztZQUNMLFVBQVUsRUFBRSxVQUFVLENBQUMsV0FBVztZQUNsQyxZQUFZLEVBQUUsVUFBVSxDQUFDLGFBQWE7WUFDdEMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxjQUFjO1lBQ3hDLGNBQWMsRUFBRSxVQUFVLENBQUMsZ0JBQWdCO1NBQzVDLENBQUE7SUFDSCxDQUFDOzs7WUE3QkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnkgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvY2F0ZWdvcnknO1xuaW1wb3J0IHsgRGFmZkNhdGVnb3J5QnJlYWRjcnVtYiB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9jYXRlZ29yeS1icmVhZGNydW1iJztcbmltcG9ydCB7IE1hZ2VudG9CcmVhZGNydW1iLCBNYWdlbnRvQ2F0ZWdvcnkgfSBmcm9tICcuLi9tb2RlbHMvY2F0ZWdvcnknO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmTWFnZW50b0NhdGVnb3J5VHJhbnNmb3JtZXJTZXJ2aWNlIHtcblxuICB0cmFuc2Zvcm0oY2F0ZWdvcnk6IE1hZ2VudG9DYXRlZ29yeSk6IERhZmZDYXRlZ29yeSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBjYXRlZ29yeS5pZCxcblx0XHRcdG5hbWU6IGNhdGVnb3J5Lm5hbWUsXG5cdFx0XHRkZXNjcmlwdGlvbjogY2F0ZWdvcnkuZGVzY3JpcHRpb24sXG5cdFx0XHRjaGlsZHJlbl9jb3VudDogY2F0ZWdvcnkuY2hpbGRyZW5fY291bnQsXG5cdFx0XHQvL3RvZG86IHVzZSBvcHRpb25hbCBjaGFpbmluZyB3aGVuIHBvc3NpYmxlXG5cdFx0XHRicmVhZGNydW1iczogY2F0ZWdvcnkuYnJlYWRjcnVtYnMgPyBcblx0XHRcdFx0Y2F0ZWdvcnkuYnJlYWRjcnVtYnNcblx0XHRcdFx0XHQubWFwKGJyZWFkY3J1bWIgPT4gdGhpcy50cmFuc2Zvcm1CcmVhZGNydW1iKGJyZWFkY3J1bWIpKVxuXHRcdFx0XHRcdC5zb3J0KChhLCBiKSA9PiBhLmNhdGVnb3J5TGV2ZWwgLSBiLmNhdGVnb3J5TGV2ZWwpIDogXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRwcm9kdWN0X2lkczogY2F0ZWdvcnkucHJvZHVjdHMuaXRlbXMubWFwKHByb2R1Y3QgPT4gcHJvZHVjdC5za3UpLFxuXHRcdFx0dG90YWxfcHJvZHVjdHM6IGNhdGVnb3J5LnByb2R1Y3RzLml0ZW1zLmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdHJhbnNmb3JtQnJlYWRjcnVtYihicmVhZGNydW1iOiBNYWdlbnRvQnJlYWRjcnVtYik6IERhZmZDYXRlZ29yeUJyZWFkY3J1bWIge1xuICAgIHJldHVybiB7XG4gICAgICBjYXRlZ29yeUlkOiBicmVhZGNydW1iLmNhdGVnb3J5X2lkLFxuICAgICAgY2F0ZWdvcnlOYW1lOiBicmVhZGNydW1iLmNhdGVnb3J5X25hbWUsXG4gICAgICBjYXRlZ29yeUxldmVsOiBicmVhZGNydW1iLmNhdGVnb3J5X2xldmVsLFxuICAgICAgY2F0ZWdvcnlVcmxLZXk6IGJyZWFkY3J1bWIuY2F0ZWdvcnlfdXJsX2tleVxuICAgIH1cbiAgfVxufVxuIl19