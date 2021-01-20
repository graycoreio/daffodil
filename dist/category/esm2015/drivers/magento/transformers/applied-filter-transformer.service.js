/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MagentoCategoryFilterActionEnum } from '../models/requests/filters';
import { DaffCategoryFromToFilterSeparator } from '../../../models/requests/filter-request';
import { DaffCategoryFilterType } from '../../../models/category-filter-base';
import * as i0 from "@angular/core";
export class DaffMagentoAppliedFiltersTransformService {
    /**
     * @param {?} categoryId
     * @param {?} daffFilters
     * @return {?}
     */
    transform(categoryId, daffFilters) {
        /** @type {?} */
        const magentoFilters = {
            category_id: {
                [MagentoCategoryFilterActionEnum.Equal]: categoryId
            }
        };
        if (!daffFilters)
            return magentoFilters;
        daffFilters.forEach((/**
         * @param {?} filter
         * @return {?}
         */
        filter => {
            // The FromTo filter needs special treatment, because Magento accepts the "from" and "to" filters
            // separately (it also outputs FromTo filter pairs together)
            if (filter.type === DaffCategoryFilterType.Range) {
                /** @type {?} */
                const fromToValues = filter.value[0].split(DaffCategoryFromToFilterSeparator);
                magentoFilters[filter.name] = Object.assign({}, magentoFilters[filter.name], this.getRangeFromValue(fromToValues[0]), this.getRangeToValue(fromToValues[1]));
            }
            else {
                magentoFilters[filter.name] = Object.assign({}, magentoFilters[filter.name], { [this.getFilterAction(filter.type)]: this.getFilterValue(filter.type, filter.value) });
            }
        }));
        return magentoFilters;
    }
    /**
     * Returns an In action for Equal type and a Match action for Match type.
     * @private
     * @param {?} type
     * @return {?}
     */
    getFilterAction(type) {
        return type === DaffCategoryFilterType.Equal
            ? MagentoCategoryFilterActionEnum.In
            : MagentoCategoryFilterActionEnum.Match;
    }
    /**
     * Returns an array for Equal type and a string for Match type.
     * @private
     * @param {?} type
     * @param {?} value
     * @return {?}
     */
    getFilterValue(type, value) {
        return type === DaffCategoryFilterType.Equal ? value : value[0];
    }
    /**
     * @private
     * @param {?} fromValue
     * @return {?}
     */
    getRangeFromValue(fromValue) {
        return fromValue !== '*' ? { [MagentoCategoryFilterActionEnum.From]: fromValue } : null;
    }
    /**
     * @private
     * @param {?} toValue
     * @return {?}
     */
    getRangeToValue(toValue) {
        return toValue !== '*' ? { [MagentoCategoryFilterActionEnum.To]: toValue } : null;
    }
}
DaffMagentoAppliedFiltersTransformService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffMagentoAppliedFiltersTransformService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoAppliedFiltersTransformService_Factory() { return new DaffMagentoAppliedFiltersTransformService(); }, token: DaffMagentoAppliedFiltersTransformService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGllZC1maWx0ZXItdHJhbnNmb3JtZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXRlZ29yeS8iLCJzb3VyY2VzIjpbImRyaXZlcnMvbWFnZW50by90cmFuc2Zvcm1lcnMvYXBwbGllZC1maWx0ZXItdHJhbnNmb3JtZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQTBCLCtCQUErQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDckcsT0FBTyxFQUE2QixpQ0FBaUMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3ZILE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOztBQUs5RSxNQUFNLE9BQU8seUNBQXlDOzs7Ozs7SUFFcEQsU0FBUyxDQUFDLFVBQWtCLEVBQUUsV0FBd0M7O2NBQ2hFLGNBQWMsR0FBMkI7WUFDOUMsV0FBVyxFQUFFO2dCQUNaLENBQUMsK0JBQStCLENBQUMsS0FBSyxDQUFDLEVBQUUsVUFBVTthQUNuRDtTQUNEO1FBRUQsSUFBRyxDQUFDLFdBQVc7WUFBRSxPQUFPLGNBQWMsQ0FBQztRQUV2QyxXQUFXLENBQUMsT0FBTzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzVCLGlHQUFpRztZQUNqRyw0REFBNEQ7WUFDNUQsSUFBRyxNQUFNLENBQUMsSUFBSSxLQUFLLHNCQUFzQixDQUFDLEtBQUssRUFBRTs7c0JBQzFDLFlBQVksR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQztnQkFDN0UsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQ3ZCLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQzNCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDdkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDeEMsQ0FBQTthQUNEO2lCQUFNO2dCQUNOLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUN2QixjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUM5QixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FDbkYsQ0FBQTthQUNEO1FBQ0YsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLGNBQWMsQ0FBQztJQUN2QixDQUFDOzs7Ozs7O0lBS08sZUFBZSxDQUFDLElBQTRCO1FBQ25ELE9BQU8sSUFBSSxLQUFLLHNCQUFzQixDQUFDLEtBQUs7WUFDM0MsQ0FBQyxDQUFDLCtCQUErQixDQUFDLEVBQUU7WUFDcEMsQ0FBQyxDQUFDLCtCQUErQixDQUFDLEtBQUssQ0FBQztJQUMxQyxDQUFDOzs7Ozs7OztJQUtPLGNBQWMsQ0FBQyxJQUE0QixFQUFFLEtBQXlDO1FBQzdGLE9BQU8sSUFBSSxLQUFLLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Ozs7O0lBRU8saUJBQWlCLENBQUMsU0FBaUI7UUFDMUMsT0FBTyxTQUFTLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsK0JBQStCLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN2RixDQUFDOzs7Ozs7SUFFTyxlQUFlLENBQUMsT0FBZTtRQUN0QyxPQUFPLE9BQU8sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQywrQkFBK0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2pGLENBQUM7OztZQXpERCxVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1hZ2VudG9DYXRlZ29yeUZpbHRlcnMsIE1hZ2VudG9DYXRlZ29yeUZpbHRlckFjdGlvbkVudW0gfSBmcm9tICcuLi9tb2RlbHMvcmVxdWVzdHMvZmlsdGVycyc7XG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnlGaWx0ZXJSZXF1ZXN0LCBEYWZmQ2F0ZWdvcnlGcm9tVG9GaWx0ZXJTZXBhcmF0b3IgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvcmVxdWVzdHMvZmlsdGVyLXJlcXVlc3QnO1xuaW1wb3J0IHsgRGFmZkNhdGVnb3J5RmlsdGVyVHlwZSB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9jYXRlZ29yeS1maWx0ZXItYmFzZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZNYWdlbnRvQXBwbGllZEZpbHRlcnNUcmFuc2Zvcm1TZXJ2aWNlIHtcblxuICB0cmFuc2Zvcm0oY2F0ZWdvcnlJZDogc3RyaW5nLCBkYWZmRmlsdGVyczogRGFmZkNhdGVnb3J5RmlsdGVyUmVxdWVzdFtdKTogTWFnZW50b0NhdGVnb3J5RmlsdGVycyB7XG5cdFx0Y29uc3QgbWFnZW50b0ZpbHRlcnM6IE1hZ2VudG9DYXRlZ29yeUZpbHRlcnMgPSB7XG5cdFx0XHRjYXRlZ29yeV9pZDoge1xuXHRcdFx0XHRbTWFnZW50b0NhdGVnb3J5RmlsdGVyQWN0aW9uRW51bS5FcXVhbF06IGNhdGVnb3J5SWRcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0aWYoIWRhZmZGaWx0ZXJzKSByZXR1cm4gbWFnZW50b0ZpbHRlcnM7XG5cblx0XHRkYWZmRmlsdGVycy5mb3JFYWNoKGZpbHRlciA9PiB7XG5cdFx0XHQvLyBUaGUgRnJvbVRvIGZpbHRlciBuZWVkcyBzcGVjaWFsIHRyZWF0bWVudCwgYmVjYXVzZSBNYWdlbnRvIGFjY2VwdHMgdGhlIFwiZnJvbVwiIGFuZCBcInRvXCIgZmlsdGVyc1xuXHRcdFx0Ly8gc2VwYXJhdGVseSAoaXQgYWxzbyBvdXRwdXRzIEZyb21UbyBmaWx0ZXIgcGFpcnMgdG9nZXRoZXIpXG5cdFx0XHRpZihmaWx0ZXIudHlwZSA9PT0gRGFmZkNhdGVnb3J5RmlsdGVyVHlwZS5SYW5nZSkge1xuXHRcdFx0XHRjb25zdCBmcm9tVG9WYWx1ZXMgPSBmaWx0ZXIudmFsdWVbMF0uc3BsaXQoRGFmZkNhdGVnb3J5RnJvbVRvRmlsdGVyU2VwYXJhdG9yKTtcblx0XHRcdFx0bWFnZW50b0ZpbHRlcnNbZmlsdGVyLm5hbWVdID0ge1xuXHRcdFx0XHRcdC4uLm1hZ2VudG9GaWx0ZXJzW2ZpbHRlci5uYW1lXSxcblx0XHRcdFx0XHQuLi50aGlzLmdldFJhbmdlRnJvbVZhbHVlKGZyb21Ub1ZhbHVlc1swXSksXG5cdFx0XHRcdFx0Li4udGhpcy5nZXRSYW5nZVRvVmFsdWUoZnJvbVRvVmFsdWVzWzFdKVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtYWdlbnRvRmlsdGVyc1tmaWx0ZXIubmFtZV0gPSB7XG5cdFx0XHRcdFx0Li4ubWFnZW50b0ZpbHRlcnNbZmlsdGVyLm5hbWVdLFxuXHRcdFx0XHRcdFt0aGlzLmdldEZpbHRlckFjdGlvbihmaWx0ZXIudHlwZSldOiB0aGlzLmdldEZpbHRlclZhbHVlKGZpbHRlci50eXBlLCBmaWx0ZXIudmFsdWUpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiBtYWdlbnRvRmlsdGVycztcblx0fVxuXHRcblx0LyoqXG5cdCAqIFJldHVybnMgYW4gSW4gYWN0aW9uIGZvciBFcXVhbCB0eXBlIGFuZCBhIE1hdGNoIGFjdGlvbiBmb3IgTWF0Y2ggdHlwZS5cblx0ICovXG5cdHByaXZhdGUgZ2V0RmlsdGVyQWN0aW9uKHR5cGU6IERhZmZDYXRlZ29yeUZpbHRlclR5cGUpOiBNYWdlbnRvQ2F0ZWdvcnlGaWx0ZXJBY3Rpb25FbnVtIHtcblx0XHRyZXR1cm4gdHlwZSA9PT0gRGFmZkNhdGVnb3J5RmlsdGVyVHlwZS5FcXVhbCBcblx0XHRcdD8gTWFnZW50b0NhdGVnb3J5RmlsdGVyQWN0aW9uRW51bS5JblxuXHRcdFx0OiBNYWdlbnRvQ2F0ZWdvcnlGaWx0ZXJBY3Rpb25FbnVtLk1hdGNoO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgYW4gYXJyYXkgZm9yIEVxdWFsIHR5cGUgYW5kIGEgc3RyaW5nIGZvciBNYXRjaCB0eXBlLlxuXHQgKi9cblx0cHJpdmF0ZSBnZXRGaWx0ZXJWYWx1ZSh0eXBlOiBEYWZmQ2F0ZWdvcnlGaWx0ZXJUeXBlLCB2YWx1ZTogRGFmZkNhdGVnb3J5RmlsdGVyUmVxdWVzdFsndmFsdWUnXSk6IHN0cmluZyB8IHN0cmluZ1tdIHtcblx0XHRyZXR1cm4gdHlwZSA9PT0gRGFmZkNhdGVnb3J5RmlsdGVyVHlwZS5FcXVhbCA/IHZhbHVlIDogdmFsdWVbMF07XG5cdH1cblxuXHRwcml2YXRlIGdldFJhbmdlRnJvbVZhbHVlKGZyb21WYWx1ZTogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIGZyb21WYWx1ZSAhPT0gJyonID8ge1tNYWdlbnRvQ2F0ZWdvcnlGaWx0ZXJBY3Rpb25FbnVtLkZyb21dOiBmcm9tVmFsdWV9IDogbnVsbDtcblx0fVxuXG5cdHByaXZhdGUgZ2V0UmFuZ2VUb1ZhbHVlKHRvVmFsdWU6IHN0cmluZykge1xuXHRcdHJldHVybiB0b1ZhbHVlICE9PSAnKicgPyB7W01hZ2VudG9DYXRlZ29yeUZpbHRlckFjdGlvbkVudW0uVG9dOiB0b1ZhbHVlfSA6IG51bGw7XG5cdH1cbn1cbiJdfQ==