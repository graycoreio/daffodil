/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DaffCategoryFilterType } from '../models/category-filter-base';
import { DaffCategoryFromToFilterSeparator } from '../models/requests/filter-request';
/**
 * @param {?} filters
 * @return {?}
 */
export function daffCategoryValidateFilters(filters) {
    if (!filters)
        return;
    filters.forEach((/**
     * @param {?} filter
     * @param {?} i
     * @return {?}
     */
    function (filter, i) {
        if (filter.type === DaffCategoryFilterType.Range &&
            filter.value[0].split(DaffCategoryFromToFilterSeparator).length !== 2) {
            throw new Error('Category range filter is in an invalid format. Should be **-**');
        }
        for (var j = i + 1; j < filters.length; j++) {
            if (filters[i].name === filters[j].name) {
                throw new Error('More than one category filter of the same name exists. These should' +
                    ' be combined into a single filter action with multiple values.');
            }
        }
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUtZmlsdGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXRlZ29yeS8iLCJzb3VyY2VzIjpbImhlbHBlcnMvdmFsaWRhdGUtZmlsdGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDeEUsT0FBTyxFQUE2QixpQ0FBaUMsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7OztBQUVqSCxNQUFNLFVBQVUsMkJBQTJCLENBQUMsT0FBb0M7SUFDOUUsSUFBRyxDQUFDLE9BQU87UUFBRSxPQUFPO0lBQ3BCLE9BQU8sQ0FBQyxPQUFPOzs7OztJQUFDLFVBQUMsTUFBTSxFQUFFLENBQUM7UUFDeEIsSUFBRyxNQUFNLENBQUMsSUFBSSxLQUFLLHNCQUFzQixDQUFDLEtBQUs7WUFDN0MsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3ZFLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0VBQWdFLENBQUMsQ0FBQztTQUNuRjtRQUVELEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0QyxJQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRTtnQkFDdEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxxRUFBcUU7b0JBQ25GLGdFQUFnRSxDQUFDLENBQUE7YUFDcEU7U0FDRjtJQUNILENBQUMsRUFBQyxDQUFBO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhZmZDYXRlZ29yeUZpbHRlclR5cGUgfSBmcm9tICcuLi9tb2RlbHMvY2F0ZWdvcnktZmlsdGVyLWJhc2UnO1xuaW1wb3J0IHsgRGFmZkNhdGVnb3J5RmlsdGVyUmVxdWVzdCwgRGFmZkNhdGVnb3J5RnJvbVRvRmlsdGVyU2VwYXJhdG9yIH0gZnJvbSAnLi4vbW9kZWxzL3JlcXVlc3RzL2ZpbHRlci1yZXF1ZXN0JztcblxuZXhwb3J0IGZ1bmN0aW9uIGRhZmZDYXRlZ29yeVZhbGlkYXRlRmlsdGVycyhmaWx0ZXJzOiBEYWZmQ2F0ZWdvcnlGaWx0ZXJSZXF1ZXN0W10pOiB2b2lkIHtcbiAgaWYoIWZpbHRlcnMpIHJldHVybjtcbiAgZmlsdGVycy5mb3JFYWNoKChmaWx0ZXIsIGkpID0+IHtcbiAgICBpZihmaWx0ZXIudHlwZSA9PT0gRGFmZkNhdGVnb3J5RmlsdGVyVHlwZS5SYW5nZSAmJlxuICAgICAgZmlsdGVyLnZhbHVlWzBdLnNwbGl0KERhZmZDYXRlZ29yeUZyb21Ub0ZpbHRlclNlcGFyYXRvcikubGVuZ3RoICE9PSAyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhdGVnb3J5IHJhbmdlIGZpbHRlciBpcyBpbiBhbiBpbnZhbGlkIGZvcm1hdC4gU2hvdWxkIGJlICoqLSoqJyk7XG4gICAgfVxuXG4gICAgZm9yKGxldCBqPWkrMTsgaiA8IGZpbHRlcnMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmKGZpbHRlcnNbaV0ubmFtZSA9PT0gZmlsdGVyc1tqXS5uYW1lKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTW9yZSB0aGFuIG9uZSBjYXRlZ29yeSBmaWx0ZXIgb2YgdGhlIHNhbWUgbmFtZSBleGlzdHMuIFRoZXNlIHNob3VsZCcgK1xuICAgICAgICAgICcgYmUgY29tYmluZWQgaW50byBhIHNpbmdsZSBmaWx0ZXIgYWN0aW9uIHdpdGggbXVsdGlwbGUgdmFsdWVzLicpXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuIl19