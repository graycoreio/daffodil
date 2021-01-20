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
    (filter, i) => {
        if (filter.type === DaffCategoryFilterType.Range &&
            filter.value[0].split(DaffCategoryFromToFilterSeparator).length !== 2) {
            throw new Error('Category range filter is in an invalid format. Should be **-**');
        }
        for (let j = i + 1; j < filters.length; j++) {
            if (filters[i].name === filters[j].name) {
                throw new Error('More than one category filter of the same name exists. These should' +
                    ' be combined into a single filter action with multiple values.');
            }
        }
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUtZmlsdGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXRlZ29yeS8iLCJzb3VyY2VzIjpbImhlbHBlcnMvdmFsaWRhdGUtZmlsdGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDeEUsT0FBTyxFQUE2QixpQ0FBaUMsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7OztBQUVqSCxNQUFNLFVBQVUsMkJBQTJCLENBQUMsT0FBb0M7SUFDOUUsSUFBRyxDQUFDLE9BQU87UUFBRSxPQUFPO0lBQ3BCLE9BQU8sQ0FBQyxPQUFPOzs7OztJQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzVCLElBQUcsTUFBTSxDQUFDLElBQUksS0FBSyxzQkFBc0IsQ0FBQyxLQUFLO1lBQzdDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN2RSxNQUFNLElBQUksS0FBSyxDQUFDLGdFQUFnRSxDQUFDLENBQUM7U0FDbkY7UUFFRCxLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdEMsSUFBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUU7Z0JBQ3RDLE1BQU0sSUFBSSxLQUFLLENBQUMscUVBQXFFO29CQUNuRixnRUFBZ0UsQ0FBQyxDQUFBO2FBQ3BFO1NBQ0Y7SUFDSCxDQUFDLEVBQUMsQ0FBQTtBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYWZmQ2F0ZWdvcnlGaWx0ZXJUeXBlIH0gZnJvbSAnLi4vbW9kZWxzL2NhdGVnb3J5LWZpbHRlci1iYXNlJztcbmltcG9ydCB7IERhZmZDYXRlZ29yeUZpbHRlclJlcXVlc3QsIERhZmZDYXRlZ29yeUZyb21Ub0ZpbHRlclNlcGFyYXRvciB9IGZyb20gJy4uL21vZGVscy9yZXF1ZXN0cy9maWx0ZXItcmVxdWVzdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkYWZmQ2F0ZWdvcnlWYWxpZGF0ZUZpbHRlcnMoZmlsdGVyczogRGFmZkNhdGVnb3J5RmlsdGVyUmVxdWVzdFtdKTogdm9pZCB7XG4gIGlmKCFmaWx0ZXJzKSByZXR1cm47XG4gIGZpbHRlcnMuZm9yRWFjaCgoZmlsdGVyLCBpKSA9PiB7XG4gICAgaWYoZmlsdGVyLnR5cGUgPT09IERhZmZDYXRlZ29yeUZpbHRlclR5cGUuUmFuZ2UgJiZcbiAgICAgIGZpbHRlci52YWx1ZVswXS5zcGxpdChEYWZmQ2F0ZWdvcnlGcm9tVG9GaWx0ZXJTZXBhcmF0b3IpLmxlbmd0aCAhPT0gMikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYXRlZ29yeSByYW5nZSBmaWx0ZXIgaXMgaW4gYW4gaW52YWxpZCBmb3JtYXQuIFNob3VsZCBiZSAqKi0qKicpO1xuICAgIH1cblxuICAgIGZvcihsZXQgaj1pKzE7IGogPCBmaWx0ZXJzLmxlbmd0aDsgaisrKSB7XG4gICAgICBpZihmaWx0ZXJzW2ldLm5hbWUgPT09IGZpbHRlcnNbal0ubmFtZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01vcmUgdGhhbiBvbmUgY2F0ZWdvcnkgZmlsdGVyIG9mIHRoZSBzYW1lIG5hbWUgZXhpc3RzLiBUaGVzZSBzaG91bGQnICtcbiAgICAgICAgICAnIGJlIGNvbWJpbmVkIGludG8gYSBzaW5nbGUgZmlsdGVyIGFjdGlvbiB3aXRoIG11bHRpcGxlIHZhbHVlcy4nKVxuICAgICAgfVxuICAgIH1cbiAgfSlcbn1cbiJdfQ==