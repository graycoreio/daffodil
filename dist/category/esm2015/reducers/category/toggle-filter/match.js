/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DaffCategoryFilterType } from '../../../models/category-filter-base';
import { getAppliedFilterByName } from './util';
/**
 * @param {?} toggledFilter
 * @param {?} appliedFilters
 * @return {?}
 */
export function isMatchFilterApplied(toggledFilter, appliedFilters) {
    return !!getAppliedFilterByName(toggledFilter.name, appliedFilters);
}
/**
 * @param {?} filterName
 * @param {?} appliedFilters
 * @return {?}
 */
export function removeMatchFilter(filterName, appliedFilters) {
    return appliedFilters.filter((/**
     * @param {?} filter
     * @return {?}
     */
    filter => filter.name !== filterName.name));
}
/**
 * @param {?} toggledFilter
 * @param {?} appliedFilters
 * @return {?}
 */
export function addMatchFilter(toggledFilter, appliedFilters) {
    return appliedFilters.concat([{
            name: toggledFilter.name,
            value: toggledFilter.value,
            type: DaffCategoryFilterType.Match
        }]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2F0ZWdvcnkvIiwic291cmNlcyI6WyJyZWR1Y2Vycy9jYXRlZ29yeS90b2dnbGUtZmlsdGVyL21hdGNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxRQUFRLENBQUM7Ozs7OztBQUVoRCxNQUFNLFVBQVUsb0JBQW9CLENBQUMsYUFBbUQsRUFBRSxjQUEyQztJQUNwSSxPQUFPLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQ3JFLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxVQUFnRCxFQUFFLGNBQTJDO0lBQzlILE9BQU8sY0FBYyxDQUFDLE1BQU07Ozs7SUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssVUFBVSxDQUFDLElBQUksRUFBQyxDQUFBO0FBQ3hFLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxjQUFjLENBQUMsYUFBbUQsRUFBRSxjQUEyQztJQUU5SCxPQUFPLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM3QixJQUFJLEVBQUUsYUFBYSxDQUFDLElBQUk7WUFDeEIsS0FBSyxFQUFFLGFBQWEsQ0FBQyxLQUFLO1lBQzFCLElBQUksRUFBRSxzQkFBc0IsQ0FBQyxLQUFLO1NBQ2xDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhZmZUb2dnbGVDYXRlZ29yeUZpbHRlck1hdGNoUmVxdWVzdCwgRGFmZkNhdGVnb3J5RmlsdGVyUmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9yZXF1ZXN0cy9maWx0ZXItcmVxdWVzdCc7XG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnlGaWx0ZXJUeXBlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2NhdGVnb3J5LWZpbHRlci1iYXNlJztcbmltcG9ydCB7IGdldEFwcGxpZWRGaWx0ZXJCeU5hbWUgfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNNYXRjaEZpbHRlckFwcGxpZWQodG9nZ2xlZEZpbHRlcjogRGFmZlRvZ2dsZUNhdGVnb3J5RmlsdGVyTWF0Y2hSZXF1ZXN0LCBhcHBsaWVkRmlsdGVyczogRGFmZkNhdGVnb3J5RmlsdGVyUmVxdWVzdFtdKTogYm9vbGVhbiB7XG5cdHJldHVybiAhIWdldEFwcGxpZWRGaWx0ZXJCeU5hbWUodG9nZ2xlZEZpbHRlci5uYW1lLCBhcHBsaWVkRmlsdGVycyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVNYXRjaEZpbHRlcihmaWx0ZXJOYW1lOiBEYWZmVG9nZ2xlQ2F0ZWdvcnlGaWx0ZXJNYXRjaFJlcXVlc3QsIGFwcGxpZWRGaWx0ZXJzOiBEYWZmQ2F0ZWdvcnlGaWx0ZXJSZXF1ZXN0W10pOiBEYWZmQ2F0ZWdvcnlGaWx0ZXJSZXF1ZXN0W10ge1xuXHRyZXR1cm4gYXBwbGllZEZpbHRlcnMuZmlsdGVyKGZpbHRlciA9PiBmaWx0ZXIubmFtZSAhPT0gZmlsdGVyTmFtZS5uYW1lKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTWF0Y2hGaWx0ZXIodG9nZ2xlZEZpbHRlcjogRGFmZlRvZ2dsZUNhdGVnb3J5RmlsdGVyTWF0Y2hSZXF1ZXN0LCBhcHBsaWVkRmlsdGVyczogRGFmZkNhdGVnb3J5RmlsdGVyUmVxdWVzdFtdKVxuOiBEYWZmQ2F0ZWdvcnlGaWx0ZXJSZXF1ZXN0W10ge1xuXHRyZXR1cm4gYXBwbGllZEZpbHRlcnMuY29uY2F0KFt7XG5cdFx0bmFtZTogdG9nZ2xlZEZpbHRlci5uYW1lLFxuXHRcdHZhbHVlOiB0b2dnbGVkRmlsdGVyLnZhbHVlLFxuXHRcdHR5cGU6IERhZmZDYXRlZ29yeUZpbHRlclR5cGUuTWF0Y2hcblx0fV0pO1xufVxuIl19