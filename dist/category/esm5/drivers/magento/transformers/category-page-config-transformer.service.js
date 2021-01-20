/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DaffCategoryFromToFilterSeparator } from '../../../models/requests/filter-request';
import { DaffCategoryFilterType } from '../../../models/category-filter-base';
import { coerceDefaultSortOptionFirst } from './pure/sort-default-option-first';
import * as i0 from "@angular/core";
var DaffMagentoCategoryPageConfigTransformerService = /** @class */ (function () {
    function DaffMagentoCategoryPageConfigTransformerService() {
    }
    /**
     * @param {?} categoryResponse
     * @return {?}
     */
    DaffMagentoCategoryPageConfigTransformerService.prototype.transform = /**
     * @param {?} categoryResponse
     * @return {?}
     */
    function (categoryResponse) {
        return {
            id: categoryResponse.category.id,
            page_size: categoryResponse.page_info.page_size,
            current_page: categoryResponse.page_info.current_page,
            total_pages: categoryResponse.page_info.total_pages,
            total_products: categoryResponse.total_count,
            filters: categoryResponse.aggregates.map(this.transformAggregate.bind(this)),
            sort_options: coerceDefaultSortOptionFirst(categoryResponse.sort_fields).options,
            product_ids: categoryResponse.products.map((/**
             * @param {?} product
             * @return {?}
             */
            function (product) { return product.sku; }))
        };
    };
    /**
     * @private
     * @param {?} filter
     * @return {?}
     */
    DaffMagentoCategoryPageConfigTransformerService.prototype.transformAggregate = /**
     * @private
     * @param {?} filter
     * @return {?}
     */
    function (filter) {
        var _this = this;
        /** @type {?} */
        var filterType = this.transformAggregateType(filter.type);
        return {
            label: filter.label,
            type: filterType,
            name: filter.attribute_code,
            options: filter.options.map((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                return {
                    label: option.label,
                    value: filterType === DaffCategoryFilterType.Range ? _this.transformRangeValue(option.value) : option.value,
                    count: option.count
                };
            }))
        };
    };
    /**
     * @private
     * @param {?} type
     * @return {?}
     */
    DaffMagentoCategoryPageConfigTransformerService.prototype.transformAggregateType = /**
     * @private
     * @param {?} type
     * @return {?}
     */
    function (type) {
        if (type === 'select')
            return DaffCategoryFilterType.Equal;
        else if (type === 'boolean')
            return DaffCategoryFilterType.Equal;
        else if (type === 'multiselect')
            return DaffCategoryFilterType.Equal;
        else if (type === 'price')
            return DaffCategoryFilterType.Range;
        else
            return DaffCategoryFilterType.Match;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    DaffMagentoCategoryPageConfigTransformerService.prototype.transformRangeValue = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value.replace('_', DaffCategoryFromToFilterSeparator);
    };
    DaffMagentoCategoryPageConfigTransformerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffMagentoCategoryPageConfigTransformerService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoCategoryPageConfigTransformerService_Factory() { return new DaffMagentoCategoryPageConfigTransformerService(); }, token: DaffMagentoCategoryPageConfigTransformerService, providedIn: "root" });
    return DaffMagentoCategoryPageConfigTransformerService;
}());
export { DaffMagentoCategoryPageConfigTransformerService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktcGFnZS1jb25maWctdHJhbnNmb3JtZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXRlZ29yeS8iLCJzb3VyY2VzIjpbImRyaXZlcnMvbWFnZW50by90cmFuc2Zvcm1lcnMvY2F0ZWdvcnktcGFnZS1jb25maWctdHJhbnNmb3JtZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8zQyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUM1RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUU5RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7QUFFaEY7SUFBQTtLQTZDQzs7Ozs7SUF4Q0MsbUVBQVM7Ozs7SUFBVCxVQUFVLGdCQUFpRDtRQUMzRCxPQUFPO1lBQ0gsRUFBRSxFQUFFLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2hDLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsU0FBUztZQUMvQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFlBQVk7WUFDeEQsV0FBVyxFQUFFLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxXQUFXO1lBQ25ELGNBQWMsRUFBRSxnQkFBZ0IsQ0FBQyxXQUFXO1lBQ3pDLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0UsWUFBWSxFQUFFLDRCQUE0QixDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU87WUFDaEYsV0FBVyxFQUFFLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxFQUFYLENBQVcsRUFBQztTQUNoRSxDQUFBO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sNEVBQWtCOzs7OztJQUExQixVQUEyQixNQUEwQjtRQUFyRCxpQkFjQTs7WUFiTSxVQUFVLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDekQsT0FBTztZQUNMLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixJQUFJLEVBQUUsVUFBVTtZQUNuQixJQUFJLEVBQUUsTUFBTSxDQUFDLGNBQWM7WUFDM0IsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsTUFBTTtnQkFDakMsT0FBTztvQkFDTixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7b0JBQ25CLEtBQUssRUFBRSxVQUFVLEtBQUssc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztvQkFDMUcsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO2lCQUNuQixDQUFBO1lBQ0YsQ0FBQyxFQUFDO1NBQ0EsQ0FBQTtJQUNKLENBQUM7Ozs7OztJQUVPLGdGQUFzQjs7Ozs7SUFBOUIsVUFBK0IsSUFBZ0M7UUFDOUQsSUFBRyxJQUFJLEtBQUssUUFBUTtZQUFFLE9BQU8sc0JBQXNCLENBQUMsS0FBSyxDQUFDO2FBQ3JELElBQUcsSUFBSSxLQUFLLFNBQVM7WUFBRSxPQUFPLHNCQUFzQixDQUFDLEtBQUssQ0FBQzthQUMzRCxJQUFHLElBQUksS0FBSyxhQUFhO1lBQUUsT0FBTyxzQkFBc0IsQ0FBQyxLQUFLLENBQUM7YUFDL0QsSUFBRyxJQUFJLEtBQUssT0FBTztZQUFFLE9BQU8sc0JBQXNCLENBQUMsS0FBSyxDQUFDOztZQUN6RCxPQUFPLHNCQUFzQixDQUFDLEtBQUssQ0FBQztJQUMxQyxDQUFDOzs7Ozs7SUFFTyw2RUFBbUI7Ozs7O0lBQTNCLFVBQTRCLEtBQWE7UUFDeEMsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxpQ0FBaUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7O2dCQTVDRCxVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7MERBZEQ7Q0F5REMsQUE3Q0QsSUE2Q0M7U0ExQ1ksK0NBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2NhdGVnb3J5LXBhZ2UtY29uZmlndXJhdGlvbi1zdGF0ZSc7XG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnlGaWx0ZXIgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvY2F0ZWdvcnktZmlsdGVyJztcbmltcG9ydCB7IE1hZ2VudG9BZ2dyZWdhdGlvbiB9IGZyb20gJy4uL21vZGVscy9hZ2dyZWdhdGlvbic7XG5pbXBvcnQgeyBNYWdlbnRvU29ydEZpZWxkcyB9IGZyb20gJy4uL21vZGVscy9zb3J0LWZpZWxkcyc7XG5pbXBvcnQgeyBNYWdlbnRvQ29tcGxldGVDYXRlZ29yeVJlc3BvbnNlIH0gZnJvbSAnLi4vbW9kZWxzL2NvbXBsZXRlLWNhdGVnb3J5LXJlc3BvbnNlJztcbmltcG9ydCB7IERhZmZDYXRlZ29yeUZyb21Ub0ZpbHRlclNlcGFyYXRvciB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9yZXF1ZXN0cy9maWx0ZXItcmVxdWVzdCc7XG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnlGaWx0ZXJUeXBlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2NhdGVnb3J5LWZpbHRlci1iYXNlJztcbmltcG9ydCB7IERhZmZDYXRlZ29yeVJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvcmVxdWVzdHMvY2F0ZWdvcnktcmVxdWVzdCc7XG5pbXBvcnQgeyBjb2VyY2VEZWZhdWx0U29ydE9wdGlvbkZpcnN0IH0gZnJvbSAnLi9wdXJlL3NvcnQtZGVmYXVsdC1vcHRpb24tZmlyc3QnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmTWFnZW50b0NhdGVnb3J5UGFnZUNvbmZpZ1RyYW5zZm9ybWVyU2VydmljZSB7XG5cbiAgdHJhbnNmb3JtKGNhdGVnb3J5UmVzcG9uc2U6IE1hZ2VudG9Db21wbGV0ZUNhdGVnb3J5UmVzcG9uc2UpOiBEYWZmQ2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlPERhZmZDYXRlZ29yeVJlcXVlc3Q+IHtcblx0XHRyZXR1cm4ge1xuICAgICAgaWQ6IGNhdGVnb3J5UmVzcG9uc2UuY2F0ZWdvcnkuaWQsXG4gICAgICBwYWdlX3NpemU6IGNhdGVnb3J5UmVzcG9uc2UucGFnZV9pbmZvLnBhZ2Vfc2l6ZSxcbiAgICAgIGN1cnJlbnRfcGFnZTogY2F0ZWdvcnlSZXNwb25zZS5wYWdlX2luZm8uY3VycmVudF9wYWdlLFxuXHRcdFx0dG90YWxfcGFnZXM6IGNhdGVnb3J5UmVzcG9uc2UucGFnZV9pbmZvLnRvdGFsX3BhZ2VzLFxuXHRcdFx0dG90YWxfcHJvZHVjdHM6IGNhdGVnb3J5UmVzcG9uc2UudG90YWxfY291bnQsXG4gICAgICBmaWx0ZXJzOiBjYXRlZ29yeVJlc3BvbnNlLmFnZ3JlZ2F0ZXMubWFwKHRoaXMudHJhbnNmb3JtQWdncmVnYXRlLmJpbmQodGhpcykpLFxuXHRcdFx0c29ydF9vcHRpb25zOiBjb2VyY2VEZWZhdWx0U29ydE9wdGlvbkZpcnN0KGNhdGVnb3J5UmVzcG9uc2Uuc29ydF9maWVsZHMpLm9wdGlvbnMsXG5cdFx0XHRwcm9kdWN0X2lkczogY2F0ZWdvcnlSZXNwb25zZS5wcm9kdWN0cy5tYXAocHJvZHVjdCA9PiBwcm9kdWN0LnNrdSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRyYW5zZm9ybUFnZ3JlZ2F0ZShmaWx0ZXI6IE1hZ2VudG9BZ2dyZWdhdGlvbik6IERhZmZDYXRlZ29yeUZpbHRlciB7XG5cdFx0Y29uc3QgZmlsdGVyVHlwZSA9IHRoaXMudHJhbnNmb3JtQWdncmVnYXRlVHlwZShmaWx0ZXIudHlwZSlcbiAgICByZXR1cm4ge1xuICAgICAgbGFiZWw6IGZpbHRlci5sYWJlbCxcbiAgICAgIHR5cGU6IGZpbHRlclR5cGUsXG5cdFx0XHRuYW1lOiBmaWx0ZXIuYXR0cmlidXRlX2NvZGUsXG5cdFx0XHRvcHRpb25zOiBmaWx0ZXIub3B0aW9ucy5tYXAob3B0aW9uID0+IHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRsYWJlbDogb3B0aW9uLmxhYmVsLFxuXHRcdFx0XHRcdHZhbHVlOiBmaWx0ZXJUeXBlID09PSBEYWZmQ2F0ZWdvcnlGaWx0ZXJUeXBlLlJhbmdlID8gdGhpcy50cmFuc2Zvcm1SYW5nZVZhbHVlKG9wdGlvbi52YWx1ZSkgOiBvcHRpb24udmFsdWUsXG5cdFx0XHRcdFx0Y291bnQ6IG9wdGlvbi5jb3VudFxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuICAgIH1cblx0fVxuXG5cdHByaXZhdGUgdHJhbnNmb3JtQWdncmVnYXRlVHlwZSh0eXBlOiBNYWdlbnRvQWdncmVnYXRpb25bJ3R5cGUnXSk6IERhZmZDYXRlZ29yeUZpbHRlclR5cGUge1xuXHRcdGlmKHR5cGUgPT09ICdzZWxlY3QnKSByZXR1cm4gRGFmZkNhdGVnb3J5RmlsdGVyVHlwZS5FcXVhbDtcblx0XHRlbHNlIGlmKHR5cGUgPT09ICdib29sZWFuJykgcmV0dXJuIERhZmZDYXRlZ29yeUZpbHRlclR5cGUuRXF1YWw7XG5cdFx0ZWxzZSBpZih0eXBlID09PSAnbXVsdGlzZWxlY3QnKSByZXR1cm4gRGFmZkNhdGVnb3J5RmlsdGVyVHlwZS5FcXVhbDtcblx0XHRlbHNlIGlmKHR5cGUgPT09ICdwcmljZScpIHJldHVybiBEYWZmQ2F0ZWdvcnlGaWx0ZXJUeXBlLlJhbmdlO1xuXHRcdGVsc2UgcmV0dXJuIERhZmZDYXRlZ29yeUZpbHRlclR5cGUuTWF0Y2g7XG5cdH1cblxuXHRwcml2YXRlIHRyYW5zZm9ybVJhbmdlVmFsdWUodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHZhbHVlLnJlcGxhY2UoJ18nLCBEYWZmQ2F0ZWdvcnlGcm9tVG9GaWx0ZXJTZXBhcmF0b3IpO1xuXHR9XG59XG4iXX0=