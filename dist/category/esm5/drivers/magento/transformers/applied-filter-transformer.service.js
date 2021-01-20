/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { MagentoCategoryFilterActionEnum } from '../models/requests/filters';
import { DaffCategoryFromToFilterSeparator } from '../../../models/requests/filter-request';
import { DaffCategoryFilterType } from '../../../models/category-filter-base';
import * as i0 from "@angular/core";
var DaffMagentoAppliedFiltersTransformService = /** @class */ (function () {
    function DaffMagentoAppliedFiltersTransformService() {
    }
    /**
     * @param {?} categoryId
     * @param {?} daffFilters
     * @return {?}
     */
    DaffMagentoAppliedFiltersTransformService.prototype.transform = /**
     * @param {?} categoryId
     * @param {?} daffFilters
     * @return {?}
     */
    function (categoryId, daffFilters) {
        var _a;
        var _this = this;
        /** @type {?} */
        var magentoFilters = {
            category_id: (_a = {},
                _a[MagentoCategoryFilterActionEnum.Equal] = categoryId,
                _a)
        };
        if (!daffFilters)
            return magentoFilters;
        daffFilters.forEach((/**
         * @param {?} filter
         * @return {?}
         */
        function (filter) {
            var _a;
            // The FromTo filter needs special treatment, because Magento accepts the "from" and "to" filters
            // separately (it also outputs FromTo filter pairs together)
            if (filter.type === DaffCategoryFilterType.Range) {
                /** @type {?} */
                var fromToValues = filter.value[0].split(DaffCategoryFromToFilterSeparator);
                magentoFilters[filter.name] = tslib_1.__assign({}, magentoFilters[filter.name], _this.getRangeFromValue(fromToValues[0]), _this.getRangeToValue(fromToValues[1]));
            }
            else {
                magentoFilters[filter.name] = tslib_1.__assign({}, magentoFilters[filter.name], (_a = {}, _a[_this.getFilterAction(filter.type)] = _this.getFilterValue(filter.type, filter.value), _a));
            }
        }));
        return magentoFilters;
    };
    /**
     * Returns an In action for Equal type and a Match action for Match type.
     */
    /**
     * Returns an In action for Equal type and a Match action for Match type.
     * @private
     * @param {?} type
     * @return {?}
     */
    DaffMagentoAppliedFiltersTransformService.prototype.getFilterAction = /**
     * Returns an In action for Equal type and a Match action for Match type.
     * @private
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return type === DaffCategoryFilterType.Equal
            ? MagentoCategoryFilterActionEnum.In
            : MagentoCategoryFilterActionEnum.Match;
    };
    /**
     * Returns an array for Equal type and a string for Match type.
     */
    /**
     * Returns an array for Equal type and a string for Match type.
     * @private
     * @param {?} type
     * @param {?} value
     * @return {?}
     */
    DaffMagentoAppliedFiltersTransformService.prototype.getFilterValue = /**
     * Returns an array for Equal type and a string for Match type.
     * @private
     * @param {?} type
     * @param {?} value
     * @return {?}
     */
    function (type, value) {
        return type === DaffCategoryFilterType.Equal ? value : value[0];
    };
    /**
     * @private
     * @param {?} fromValue
     * @return {?}
     */
    DaffMagentoAppliedFiltersTransformService.prototype.getRangeFromValue = /**
     * @private
     * @param {?} fromValue
     * @return {?}
     */
    function (fromValue) {
        var _a;
        return fromValue !== '*' ? (_a = {}, _a[MagentoCategoryFilterActionEnum.From] = fromValue, _a) : null;
    };
    /**
     * @private
     * @param {?} toValue
     * @return {?}
     */
    DaffMagentoAppliedFiltersTransformService.prototype.getRangeToValue = /**
     * @private
     * @param {?} toValue
     * @return {?}
     */
    function (toValue) {
        var _a;
        return toValue !== '*' ? (_a = {}, _a[MagentoCategoryFilterActionEnum.To] = toValue, _a) : null;
    };
    DaffMagentoAppliedFiltersTransformService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffMagentoAppliedFiltersTransformService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoAppliedFiltersTransformService_Factory() { return new DaffMagentoAppliedFiltersTransformService(); }, token: DaffMagentoAppliedFiltersTransformService, providedIn: "root" });
    return DaffMagentoAppliedFiltersTransformService;
}());
export { DaffMagentoAppliedFiltersTransformService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGllZC1maWx0ZXItdHJhbnNmb3JtZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXRlZ29yeS8iLCJzb3VyY2VzIjpbImRyaXZlcnMvbWFnZW50by90cmFuc2Zvcm1lcnMvYXBwbGllZC1maWx0ZXItdHJhbnNmb3JtZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUEwQiwrQkFBK0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3JHLE9BQU8sRUFBNkIsaUNBQWlDLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN2SCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7QUFFOUU7SUFBQTtLQTBEQzs7Ozs7O0lBckRDLDZEQUFTOzs7OztJQUFULFVBQVUsVUFBa0IsRUFBRSxXQUF3Qzs7UUFBdEUsaUJBNEJBOztZQTNCTSxjQUFjLEdBQTJCO1lBQzlDLFdBQVc7Z0JBQ1YsR0FBQywrQkFBK0IsQ0FBQyxLQUFLLElBQUcsVUFBVTttQkFDbkQ7U0FDRDtRQUVELElBQUcsQ0FBQyxXQUFXO1lBQUUsT0FBTyxjQUFjLENBQUM7UUFFdkMsV0FBVyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLE1BQU07O1lBQ3pCLGlHQUFpRztZQUNqRyw0REFBNEQ7WUFDNUQsSUFBRyxNQUFNLENBQUMsSUFBSSxLQUFLLHNCQUFzQixDQUFDLEtBQUssRUFBRTs7b0JBQzFDLFlBQVksR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQztnQkFDN0UsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsd0JBQ3ZCLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQzNCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDdkMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDeEMsQ0FBQTthQUNEO2lCQUFNO2dCQUNOLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHdCQUN2QixjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUM3QixLQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBRyxLQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUNuRixDQUFBO2FBQ0Q7UUFDRixDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU8sY0FBYyxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7T0FFRzs7Ozs7OztJQUNLLG1FQUFlOzs7Ozs7SUFBdkIsVUFBd0IsSUFBNEI7UUFDbkQsT0FBTyxJQUFJLEtBQUssc0JBQXNCLENBQUMsS0FBSztZQUMzQyxDQUFDLENBQUMsK0JBQStCLENBQUMsRUFBRTtZQUNwQyxDQUFDLENBQUMsK0JBQStCLENBQUMsS0FBSyxDQUFDO0lBQzFDLENBQUM7SUFFRDs7T0FFRzs7Ozs7Ozs7SUFDSyxrRUFBYzs7Ozs7OztJQUF0QixVQUF1QixJQUE0QixFQUFFLEtBQXlDO1FBQzdGLE9BQU8sSUFBSSxLQUFLLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Ozs7O0lBRU8scUVBQWlCOzs7OztJQUF6QixVQUEwQixTQUFpQjs7UUFDMUMsT0FBTyxTQUFTLEtBQUssR0FBRyxDQUFDLENBQUMsV0FBRSxHQUFDLCtCQUErQixDQUFDLElBQUksSUFBRyxTQUFTLE1BQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN2RixDQUFDOzs7Ozs7SUFFTyxtRUFBZTs7Ozs7SUFBdkIsVUFBd0IsT0FBZTs7UUFDdEMsT0FBTyxPQUFPLEtBQUssR0FBRyxDQUFDLENBQUMsV0FBRSxHQUFDLCtCQUErQixDQUFDLEVBQUUsSUFBRyxPQUFPLE1BQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNqRixDQUFDOztnQkF6REQsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7O29EQVJEO0NBZ0VDLEFBMURELElBMERDO1NBdkRZLHlDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTWFnZW50b0NhdGVnb3J5RmlsdGVycywgTWFnZW50b0NhdGVnb3J5RmlsdGVyQWN0aW9uRW51bSB9IGZyb20gJy4uL21vZGVscy9yZXF1ZXN0cy9maWx0ZXJzJztcbmltcG9ydCB7IERhZmZDYXRlZ29yeUZpbHRlclJlcXVlc3QsIERhZmZDYXRlZ29yeUZyb21Ub0ZpbHRlclNlcGFyYXRvciB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9yZXF1ZXN0cy9maWx0ZXItcmVxdWVzdCc7XG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnlGaWx0ZXJUeXBlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2NhdGVnb3J5LWZpbHRlci1iYXNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZk1hZ2VudG9BcHBsaWVkRmlsdGVyc1RyYW5zZm9ybVNlcnZpY2Uge1xuXG4gIHRyYW5zZm9ybShjYXRlZ29yeUlkOiBzdHJpbmcsIGRhZmZGaWx0ZXJzOiBEYWZmQ2F0ZWdvcnlGaWx0ZXJSZXF1ZXN0W10pOiBNYWdlbnRvQ2F0ZWdvcnlGaWx0ZXJzIHtcblx0XHRjb25zdCBtYWdlbnRvRmlsdGVyczogTWFnZW50b0NhdGVnb3J5RmlsdGVycyA9IHtcblx0XHRcdGNhdGVnb3J5X2lkOiB7XG5cdFx0XHRcdFtNYWdlbnRvQ2F0ZWdvcnlGaWx0ZXJBY3Rpb25FbnVtLkVxdWFsXTogY2F0ZWdvcnlJZFxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRpZighZGFmZkZpbHRlcnMpIHJldHVybiBtYWdlbnRvRmlsdGVycztcblxuXHRcdGRhZmZGaWx0ZXJzLmZvckVhY2goZmlsdGVyID0+IHtcblx0XHRcdC8vIFRoZSBGcm9tVG8gZmlsdGVyIG5lZWRzIHNwZWNpYWwgdHJlYXRtZW50LCBiZWNhdXNlIE1hZ2VudG8gYWNjZXB0cyB0aGUgXCJmcm9tXCIgYW5kIFwidG9cIiBmaWx0ZXJzXG5cdFx0XHQvLyBzZXBhcmF0ZWx5IChpdCBhbHNvIG91dHB1dHMgRnJvbVRvIGZpbHRlciBwYWlycyB0b2dldGhlcilcblx0XHRcdGlmKGZpbHRlci50eXBlID09PSBEYWZmQ2F0ZWdvcnlGaWx0ZXJUeXBlLlJhbmdlKSB7XG5cdFx0XHRcdGNvbnN0IGZyb21Ub1ZhbHVlcyA9IGZpbHRlci52YWx1ZVswXS5zcGxpdChEYWZmQ2F0ZWdvcnlGcm9tVG9GaWx0ZXJTZXBhcmF0b3IpO1xuXHRcdFx0XHRtYWdlbnRvRmlsdGVyc1tmaWx0ZXIubmFtZV0gPSB7XG5cdFx0XHRcdFx0Li4ubWFnZW50b0ZpbHRlcnNbZmlsdGVyLm5hbWVdLFxuXHRcdFx0XHRcdC4uLnRoaXMuZ2V0UmFuZ2VGcm9tVmFsdWUoZnJvbVRvVmFsdWVzWzBdKSxcblx0XHRcdFx0XHQuLi50aGlzLmdldFJhbmdlVG9WYWx1ZShmcm9tVG9WYWx1ZXNbMV0pXG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG1hZ2VudG9GaWx0ZXJzW2ZpbHRlci5uYW1lXSA9IHtcblx0XHRcdFx0XHQuLi5tYWdlbnRvRmlsdGVyc1tmaWx0ZXIubmFtZV0sXG5cdFx0XHRcdFx0W3RoaXMuZ2V0RmlsdGVyQWN0aW9uKGZpbHRlci50eXBlKV06IHRoaXMuZ2V0RmlsdGVyVmFsdWUoZmlsdGVyLnR5cGUsIGZpbHRlci52YWx1ZSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIG1hZ2VudG9GaWx0ZXJzO1xuXHR9XG5cdFxuXHQvKipcblx0ICogUmV0dXJucyBhbiBJbiBhY3Rpb24gZm9yIEVxdWFsIHR5cGUgYW5kIGEgTWF0Y2ggYWN0aW9uIGZvciBNYXRjaCB0eXBlLlxuXHQgKi9cblx0cHJpdmF0ZSBnZXRGaWx0ZXJBY3Rpb24odHlwZTogRGFmZkNhdGVnb3J5RmlsdGVyVHlwZSk6IE1hZ2VudG9DYXRlZ29yeUZpbHRlckFjdGlvbkVudW0ge1xuXHRcdHJldHVybiB0eXBlID09PSBEYWZmQ2F0ZWdvcnlGaWx0ZXJUeXBlLkVxdWFsIFxuXHRcdFx0PyBNYWdlbnRvQ2F0ZWdvcnlGaWx0ZXJBY3Rpb25FbnVtLkluXG5cdFx0XHQ6IE1hZ2VudG9DYXRlZ29yeUZpbHRlckFjdGlvbkVudW0uTWF0Y2g7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBhbiBhcnJheSBmb3IgRXF1YWwgdHlwZSBhbmQgYSBzdHJpbmcgZm9yIE1hdGNoIHR5cGUuXG5cdCAqL1xuXHRwcml2YXRlIGdldEZpbHRlclZhbHVlKHR5cGU6IERhZmZDYXRlZ29yeUZpbHRlclR5cGUsIHZhbHVlOiBEYWZmQ2F0ZWdvcnlGaWx0ZXJSZXF1ZXN0Wyd2YWx1ZSddKTogc3RyaW5nIHwgc3RyaW5nW10ge1xuXHRcdHJldHVybiB0eXBlID09PSBEYWZmQ2F0ZWdvcnlGaWx0ZXJUeXBlLkVxdWFsID8gdmFsdWUgOiB2YWx1ZVswXTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0UmFuZ2VGcm9tVmFsdWUoZnJvbVZhbHVlOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gZnJvbVZhbHVlICE9PSAnKicgPyB7W01hZ2VudG9DYXRlZ29yeUZpbHRlckFjdGlvbkVudW0uRnJvbV06IGZyb21WYWx1ZX0gOiBudWxsO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRSYW5nZVRvVmFsdWUodG9WYWx1ZTogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHRvVmFsdWUgIT09ICcqJyA/IHtbTWFnZW50b0NhdGVnb3J5RmlsdGVyQWN0aW9uRW51bS5Ub106IHRvVmFsdWV9IDogbnVsbDtcblx0fVxufVxuIl19