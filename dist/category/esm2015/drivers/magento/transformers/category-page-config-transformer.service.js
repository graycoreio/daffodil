/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DaffCategoryFromToFilterSeparator } from '../../../models/requests/filter-request';
import { DaffCategoryFilterType } from '../../../models/category-filter-base';
import { coerceDefaultSortOptionFirst } from './pure/sort-default-option-first';
import * as i0 from "@angular/core";
export class DaffMagentoCategoryPageConfigTransformerService {
    /**
     * @param {?} categoryResponse
     * @return {?}
     */
    transform(categoryResponse) {
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
            product => product.sku))
        };
    }
    /**
     * @private
     * @param {?} filter
     * @return {?}
     */
    transformAggregate(filter) {
        /** @type {?} */
        const filterType = this.transformAggregateType(filter.type);
        return {
            label: filter.label,
            type: filterType,
            name: filter.attribute_code,
            options: filter.options.map((/**
             * @param {?} option
             * @return {?}
             */
            option => {
                return {
                    label: option.label,
                    value: filterType === DaffCategoryFilterType.Range ? this.transformRangeValue(option.value) : option.value,
                    count: option.count
                };
            }))
        };
    }
    /**
     * @private
     * @param {?} type
     * @return {?}
     */
    transformAggregateType(type) {
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
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    transformRangeValue(value) {
        return value.replace('_', DaffCategoryFromToFilterSeparator);
    }
}
DaffMagentoCategoryPageConfigTransformerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffMagentoCategoryPageConfigTransformerService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoCategoryPageConfigTransformerService_Factory() { return new DaffMagentoCategoryPageConfigTransformerService(); }, token: DaffMagentoCategoryPageConfigTransformerService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktcGFnZS1jb25maWctdHJhbnNmb3JtZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXRlZ29yeS8iLCJzb3VyY2VzIjpbImRyaXZlcnMvbWFnZW50by90cmFuc2Zvcm1lcnMvY2F0ZWdvcnktcGFnZS1jb25maWctdHJhbnNmb3JtZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8zQyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUM1RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUU5RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7QUFLaEYsTUFBTSxPQUFPLCtDQUErQzs7Ozs7SUFFMUQsU0FBUyxDQUFDLGdCQUFpRDtRQUMzRCxPQUFPO1lBQ0gsRUFBRSxFQUFFLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2hDLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsU0FBUztZQUMvQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFlBQVk7WUFDeEQsV0FBVyxFQUFFLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxXQUFXO1lBQ25ELGNBQWMsRUFBRSxnQkFBZ0IsQ0FBQyxXQUFXO1lBQ3pDLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0UsWUFBWSxFQUFFLDRCQUE0QixDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU87WUFDaEYsV0FBVyxFQUFFLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxHQUFHOzs7O1lBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFDO1NBQ2hFLENBQUE7SUFDSCxDQUFDOzs7Ozs7SUFFTyxrQkFBa0IsQ0FBQyxNQUEwQjs7Y0FDL0MsVUFBVSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3pELE9BQU87WUFDTCxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsSUFBSSxFQUFFLFVBQVU7WUFDbkIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxjQUFjO1lBQzNCLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUc7Ozs7WUFBQyxNQUFNLENBQUMsRUFBRTtnQkFDcEMsT0FBTztvQkFDTixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7b0JBQ25CLEtBQUssRUFBRSxVQUFVLEtBQUssc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztvQkFDMUcsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO2lCQUNuQixDQUFBO1lBQ0YsQ0FBQyxFQUFDO1NBQ0EsQ0FBQTtJQUNKLENBQUM7Ozs7OztJQUVPLHNCQUFzQixDQUFDLElBQWdDO1FBQzlELElBQUcsSUFBSSxLQUFLLFFBQVE7WUFBRSxPQUFPLHNCQUFzQixDQUFDLEtBQUssQ0FBQzthQUNyRCxJQUFHLElBQUksS0FBSyxTQUFTO1lBQUUsT0FBTyxzQkFBc0IsQ0FBQyxLQUFLLENBQUM7YUFDM0QsSUFBRyxJQUFJLEtBQUssYUFBYTtZQUFFLE9BQU8sc0JBQXNCLENBQUMsS0FBSyxDQUFDO2FBQy9ELElBQUcsSUFBSSxLQUFLLE9BQU87WUFBRSxPQUFPLHNCQUFzQixDQUFDLEtBQUssQ0FBQzs7WUFDekQsT0FBTyxzQkFBc0IsQ0FBQyxLQUFLLENBQUM7SUFDMUMsQ0FBQzs7Ozs7O0lBRU8sbUJBQW1CLENBQUMsS0FBYTtRQUN4QyxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLGlDQUFpQyxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7O1lBNUNELFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGFmZkNhdGVnb3J5UGFnZUNvbmZpZ3VyYXRpb25TdGF0ZSB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9jYXRlZ29yeS1wYWdlLWNvbmZpZ3VyYXRpb24tc3RhdGUnO1xuaW1wb3J0IHsgRGFmZkNhdGVnb3J5RmlsdGVyIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2NhdGVnb3J5LWZpbHRlcic7XG5pbXBvcnQgeyBNYWdlbnRvQWdncmVnYXRpb24gfSBmcm9tICcuLi9tb2RlbHMvYWdncmVnYXRpb24nO1xuaW1wb3J0IHsgTWFnZW50b1NvcnRGaWVsZHMgfSBmcm9tICcuLi9tb2RlbHMvc29ydC1maWVsZHMnO1xuaW1wb3J0IHsgTWFnZW50b0NvbXBsZXRlQ2F0ZWdvcnlSZXNwb25zZSB9IGZyb20gJy4uL21vZGVscy9jb21wbGV0ZS1jYXRlZ29yeS1yZXNwb25zZSc7XG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnlGcm9tVG9GaWx0ZXJTZXBhcmF0b3IgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvcmVxdWVzdHMvZmlsdGVyLXJlcXVlc3QnO1xuaW1wb3J0IHsgRGFmZkNhdGVnb3J5RmlsdGVyVHlwZSB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9jYXRlZ29yeS1maWx0ZXItYmFzZSc7XG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnlSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3JlcXVlc3RzL2NhdGVnb3J5LXJlcXVlc3QnO1xuaW1wb3J0IHsgY29lcmNlRGVmYXVsdFNvcnRPcHRpb25GaXJzdCB9IGZyb20gJy4vcHVyZS9zb3J0LWRlZmF1bHQtb3B0aW9uLWZpcnN0JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZk1hZ2VudG9DYXRlZ29yeVBhZ2VDb25maWdUcmFuc2Zvcm1lclNlcnZpY2Uge1xuXG4gIHRyYW5zZm9ybShjYXRlZ29yeVJlc3BvbnNlOiBNYWdlbnRvQ29tcGxldGVDYXRlZ29yeVJlc3BvbnNlKTogRGFmZkNhdGVnb3J5UGFnZUNvbmZpZ3VyYXRpb25TdGF0ZTxEYWZmQ2F0ZWdvcnlSZXF1ZXN0PiB7XG5cdFx0cmV0dXJuIHtcbiAgICAgIGlkOiBjYXRlZ29yeVJlc3BvbnNlLmNhdGVnb3J5LmlkLFxuICAgICAgcGFnZV9zaXplOiBjYXRlZ29yeVJlc3BvbnNlLnBhZ2VfaW5mby5wYWdlX3NpemUsXG4gICAgICBjdXJyZW50X3BhZ2U6IGNhdGVnb3J5UmVzcG9uc2UucGFnZV9pbmZvLmN1cnJlbnRfcGFnZSxcblx0XHRcdHRvdGFsX3BhZ2VzOiBjYXRlZ29yeVJlc3BvbnNlLnBhZ2VfaW5mby50b3RhbF9wYWdlcyxcblx0XHRcdHRvdGFsX3Byb2R1Y3RzOiBjYXRlZ29yeVJlc3BvbnNlLnRvdGFsX2NvdW50LFxuICAgICAgZmlsdGVyczogY2F0ZWdvcnlSZXNwb25zZS5hZ2dyZWdhdGVzLm1hcCh0aGlzLnRyYW5zZm9ybUFnZ3JlZ2F0ZS5iaW5kKHRoaXMpKSxcblx0XHRcdHNvcnRfb3B0aW9uczogY29lcmNlRGVmYXVsdFNvcnRPcHRpb25GaXJzdChjYXRlZ29yeVJlc3BvbnNlLnNvcnRfZmllbGRzKS5vcHRpb25zLFxuXHRcdFx0cHJvZHVjdF9pZHM6IGNhdGVnb3J5UmVzcG9uc2UucHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gcHJvZHVjdC5za3UpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB0cmFuc2Zvcm1BZ2dyZWdhdGUoZmlsdGVyOiBNYWdlbnRvQWdncmVnYXRpb24pOiBEYWZmQ2F0ZWdvcnlGaWx0ZXIge1xuXHRcdGNvbnN0IGZpbHRlclR5cGUgPSB0aGlzLnRyYW5zZm9ybUFnZ3JlZ2F0ZVR5cGUoZmlsdGVyLnR5cGUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGxhYmVsOiBmaWx0ZXIubGFiZWwsXG4gICAgICB0eXBlOiBmaWx0ZXJUeXBlLFxuXHRcdFx0bmFtZTogZmlsdGVyLmF0dHJpYnV0ZV9jb2RlLFxuXHRcdFx0b3B0aW9uczogZmlsdGVyLm9wdGlvbnMubWFwKG9wdGlvbiA9PiB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0bGFiZWw6IG9wdGlvbi5sYWJlbCxcblx0XHRcdFx0XHR2YWx1ZTogZmlsdGVyVHlwZSA9PT0gRGFmZkNhdGVnb3J5RmlsdGVyVHlwZS5SYW5nZSA/IHRoaXMudHJhbnNmb3JtUmFuZ2VWYWx1ZShvcHRpb24udmFsdWUpIDogb3B0aW9uLnZhbHVlLFxuXHRcdFx0XHRcdGNvdW50OiBvcHRpb24uY291bnRcblx0XHRcdFx0fVxuXHRcdFx0fSlcbiAgICB9XG5cdH1cblxuXHRwcml2YXRlIHRyYW5zZm9ybUFnZ3JlZ2F0ZVR5cGUodHlwZTogTWFnZW50b0FnZ3JlZ2F0aW9uWyd0eXBlJ10pOiBEYWZmQ2F0ZWdvcnlGaWx0ZXJUeXBlIHtcblx0XHRpZih0eXBlID09PSAnc2VsZWN0JykgcmV0dXJuIERhZmZDYXRlZ29yeUZpbHRlclR5cGUuRXF1YWw7XG5cdFx0ZWxzZSBpZih0eXBlID09PSAnYm9vbGVhbicpIHJldHVybiBEYWZmQ2F0ZWdvcnlGaWx0ZXJUeXBlLkVxdWFsO1xuXHRcdGVsc2UgaWYodHlwZSA9PT0gJ211bHRpc2VsZWN0JykgcmV0dXJuIERhZmZDYXRlZ29yeUZpbHRlclR5cGUuRXF1YWw7XG5cdFx0ZWxzZSBpZih0eXBlID09PSAncHJpY2UnKSByZXR1cm4gRGFmZkNhdGVnb3J5RmlsdGVyVHlwZS5SYW5nZTtcblx0XHRlbHNlIHJldHVybiBEYWZmQ2F0ZWdvcnlGaWx0ZXJUeXBlLk1hdGNoO1xuXHR9XG5cblx0cHJpdmF0ZSB0cmFuc2Zvcm1SYW5nZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdHJldHVybiB2YWx1ZS5yZXBsYWNlKCdfJywgRGFmZkNhdGVnb3J5RnJvbVRvRmlsdGVyU2VwYXJhdG9yKTtcblx0fVxufVxuIl19