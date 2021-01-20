/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { daffCategoryEntitiesAdapter } from '../../reducers/category-entities/category-entities-adapter';
import { getDaffCategoryFeatureSelector } from '../category-feature.selector';
/**
 * @record
 * @template V
 */
export function DaffCategoryEntitiesMemoizedSelectors() { }
if (false) {
    /** @type {?} */
    DaffCategoryEntitiesMemoizedSelectors.prototype.selectCategoryEntitiesState;
    /** @type {?} */
    DaffCategoryEntitiesMemoizedSelectors.prototype.selectCategoryIds;
    /** @type {?} */
    DaffCategoryEntitiesMemoizedSelectors.prototype.selectCategoryEntities;
    /** @type {?} */
    DaffCategoryEntitiesMemoizedSelectors.prototype.selectAllCategories;
    /** @type {?} */
    DaffCategoryEntitiesMemoizedSelectors.prototype.selectCategoryTotal;
}
/** @type {?} */
const createCategoryFeatureSelectors = (/**
 * @template T, V, U
 * @return {?}
 */
() => {
    /** @type {?} */
    const entitiesSelectors = daffCategoryEntitiesAdapter().getSelectors();
    /** @type {?} */
    const categoryFeatureState = getDaffCategoryFeatureSelector().selectCategoryFeatureState;
    /**
     * Category Entities State
     * @type {?}
     */
    const selectCategoryEntitiesState = createSelector(categoryFeatureState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.categoryEntities));
    /** @type {?} */
    const selectCategoryIds = createSelector(selectCategoryEntitiesState, entitiesSelectors.selectIds);
    /** @type {?} */
    const selectCategoryEntities = createSelector(selectCategoryEntitiesState, entitiesSelectors.selectEntities);
    /** @type {?} */
    const selectAllCategories = createSelector(selectCategoryEntitiesState, entitiesSelectors.selectAll);
    /** @type {?} */
    const selectCategoryTotal = createSelector(selectCategoryEntitiesState, entitiesSelectors.selectTotal);
    return {
        selectCategoryEntitiesState,
        selectCategoryIds,
        selectCategoryEntities,
        selectAllCategories,
        selectCategoryTotal
    };
});
const ɵ0 = createCategoryFeatureSelectors;
const ɵ1 = /**
 * @return {?}
 */
() => {
    /** @type {?} */
    let cache;
    return (/**
     * @template T, V, U
     * @return {?}
     */
    () => cache = cache
        ? cache
        : createCategoryFeatureSelectors());
};
/** @type {?} */
export const getDaffCategoryEntitiesSelectors = ((ɵ1))();
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktZW50aXRpZXMuc2VsZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2F0ZWdvcnkvIiwic291cmNlcyI6WyJzZWxlY3RvcnMvY2F0ZWdvcnktZW50aXRpZXMvY2F0ZWdvcnktZW50aXRpZXMuc2VsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBTy9ELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7OztBQUc5RSwyREFNQzs7O0lBTEEsNEVBQXNFOztJQUN0RSxrRUFBbUU7O0lBQ25FLHVFQUFnRTs7SUFDaEUsb0VBQW1EOztJQUNuRCxvRUFBc0Q7OztNQUdqRCw4QkFBOEI7Ozs7QUFBRyxHQUErSixFQUFFOztVQUVqTSxpQkFBaUIsR0FBRywyQkFBMkIsRUFBSyxDQUFDLFlBQVksRUFBRTs7VUFDbkUsb0JBQW9CLEdBQUcsOEJBQThCLEVBQVcsQ0FBQywwQkFBMEI7Ozs7O1VBSTNGLDJCQUEyQixHQUFHLGNBQWMsQ0FDakQsb0JBQW9COzs7O0lBQ3BCLENBQUMsS0FBeUMsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUNyRTs7VUFFSyxpQkFBaUIsR0FBRyxjQUFjLENBQ3ZDLDJCQUEyQixFQUMzQixpQkFBaUIsQ0FBQyxTQUFTLENBQzNCOztVQUVLLHNCQUFzQixHQUFHLGNBQWMsQ0FDNUMsMkJBQTJCLEVBQzNCLGlCQUFpQixDQUFDLGNBQWMsQ0FDaEM7O1VBRUssbUJBQW1CLEdBQUcsY0FBYyxDQUN6QywyQkFBMkIsRUFDM0IsaUJBQWlCLENBQUMsU0FBUyxDQUMzQjs7VUFFSyxtQkFBbUIsR0FBRyxjQUFjLENBQ3pDLDJCQUEyQixFQUMzQixpQkFBaUIsQ0FBQyxXQUFXLENBQzdCO0lBRUQsT0FBTztRQUNOLDJCQUEyQjtRQUMzQixpQkFBaUI7UUFDakIsc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQixtQkFBbUI7S0FDbkIsQ0FBQTtBQUNGLENBQUMsQ0FBQTs7Ozs7QUFFZ0QsR0FBRyxFQUFFOztRQUNqRCxLQUFLO0lBQ1Q7Ozs7SUFBTyxHQUErSixFQUFFLENBQUMsS0FBSyxHQUFHLEtBQUs7UUFDckwsQ0FBQyxDQUFDLEtBQUs7UUFDUCxDQUFDLENBQUMsOEJBQThCLEVBQVcsRUFBQztBQUM5QyxDQUFDOztBQUxELE1BQU0sT0FBTyxnQ0FBZ0MsR0FBRyxNQUs5QyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBEaWN0aW9uYXJ5LCBFbnRpdHlTdGF0ZSB9IGZyb20gJ0BuZ3J4L2VudGl0eSc7XG5cbmltcG9ydCB7IERhZmZHZW5lcmljQ2F0ZWdvcnkgfSBmcm9tICcuLi8uLi9tb2RlbHMvZ2VuZXJpYy1jYXRlZ29yeSc7XG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnlSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3JlcXVlc3RzL2NhdGVnb3J5LXJlcXVlc3QnO1xuaW1wb3J0IHsgRGFmZkNhdGVnb3J5UGFnZUNvbmZpZ3VyYXRpb25TdGF0ZSB9IGZyb20gJy4uLy4uL21vZGVscy9jYXRlZ29yeS1wYWdlLWNvbmZpZ3VyYXRpb24tc3RhdGUnO1xuaW1wb3J0IHsgRGFmZkNhdGVnb3J5UmVkdWNlcnNTdGF0ZSB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL2NhdGVnb3J5LXJlZHVjZXJzLmludGVyZmFjZSc7XG5pbXBvcnQgeyBkYWZmQ2F0ZWdvcnlFbnRpdGllc0FkYXB0ZXIgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9jYXRlZ29yeS1lbnRpdGllcy9jYXRlZ29yeS1lbnRpdGllcy1hZGFwdGVyJztcbmltcG9ydCB7IGdldERhZmZDYXRlZ29yeUZlYXR1cmVTZWxlY3RvciB9IGZyb20gJy4uL2NhdGVnb3J5LWZlYXR1cmUuc2VsZWN0b3InO1xuaW1wb3J0IHsgRGFmZkNhdGVnb3J5IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NhdGVnb3J5JztcblxuZXhwb3J0IGludGVyZmFjZSBEYWZmQ2F0ZWdvcnlFbnRpdGllc01lbW9pemVkU2VsZWN0b3JzPFYgZXh0ZW5kcyBEYWZmR2VuZXJpY0NhdGVnb3J5PFY+ID0gRGFmZkNhdGVnb3J5PiB7XG5cdHNlbGVjdENhdGVnb3J5RW50aXRpZXNTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIEVudGl0eVN0YXRlPFY+Pjtcblx0c2VsZWN0Q2F0ZWdvcnlJZHM6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBFbnRpdHlTdGF0ZTxWPlsnaWRzJ10+O1xuXHRzZWxlY3RDYXRlZ29yeUVudGl0aWVzOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgRGljdGlvbmFyeTxWPj47XG5cdHNlbGVjdEFsbENhdGVnb3JpZXM6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBWW10+O1xuXHRzZWxlY3RDYXRlZ29yeVRvdGFsOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgbnVtYmVyPjtcbn1cblxuY29uc3QgY3JlYXRlQ2F0ZWdvcnlGZWF0dXJlU2VsZWN0b3JzID0gPFQgZXh0ZW5kcyBEYWZmQ2F0ZWdvcnlSZXF1ZXN0LCBWIGV4dGVuZHMgRGFmZkdlbmVyaWNDYXRlZ29yeTxWPiwgVSBleHRlbmRzIERhZmZDYXRlZ29yeVBhZ2VDb25maWd1cmF0aW9uU3RhdGU8VD4+KCk6IERhZmZDYXRlZ29yeUVudGl0aWVzTWVtb2l6ZWRTZWxlY3RvcnM8Vj4gPT4ge1xuXG5cdGNvbnN0IGVudGl0aWVzU2VsZWN0b3JzID0gZGFmZkNhdGVnb3J5RW50aXRpZXNBZGFwdGVyPFY+KCkuZ2V0U2VsZWN0b3JzKCk7XG5cdGNvbnN0IGNhdGVnb3J5RmVhdHVyZVN0YXRlID0gZ2V0RGFmZkNhdGVnb3J5RmVhdHVyZVNlbGVjdG9yPFQsIFYsIFU+KCkuc2VsZWN0Q2F0ZWdvcnlGZWF0dXJlU3RhdGU7XG5cdC8qKlxuXHQgKiBDYXRlZ29yeSBFbnRpdGllcyBTdGF0ZVxuXHQgKi9cblx0Y29uc3Qgc2VsZWN0Q2F0ZWdvcnlFbnRpdGllc1N0YXRlID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0Y2F0ZWdvcnlGZWF0dXJlU3RhdGUsXG5cdFx0KHN0YXRlOiBEYWZmQ2F0ZWdvcnlSZWR1Y2Vyc1N0YXRlPFQsIFYsIFU+KSA9PiBzdGF0ZS5jYXRlZ29yeUVudGl0aWVzXG5cdCk7XG5cblx0Y29uc3Qgc2VsZWN0Q2F0ZWdvcnlJZHMgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXRlZ29yeUVudGl0aWVzU3RhdGUsXG5cdFx0ZW50aXRpZXNTZWxlY3RvcnMuc2VsZWN0SWRzXG5cdCk7XG5cblx0Y29uc3Qgc2VsZWN0Q2F0ZWdvcnlFbnRpdGllcyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhdGVnb3J5RW50aXRpZXNTdGF0ZSxcblx0XHRlbnRpdGllc1NlbGVjdG9ycy5zZWxlY3RFbnRpdGllc1xuXHQpO1xuXG5cdGNvbnN0IHNlbGVjdEFsbENhdGVnb3JpZXMgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXRlZ29yeUVudGl0aWVzU3RhdGUsXG5cdFx0ZW50aXRpZXNTZWxlY3RvcnMuc2VsZWN0QWxsXG5cdCk7XG5cblx0Y29uc3Qgc2VsZWN0Q2F0ZWdvcnlUb3RhbCA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhdGVnb3J5RW50aXRpZXNTdGF0ZSxcblx0XHRlbnRpdGllc1NlbGVjdG9ycy5zZWxlY3RUb3RhbFxuXHQpO1xuXG5cdHJldHVybiB7XG5cdFx0c2VsZWN0Q2F0ZWdvcnlFbnRpdGllc1N0YXRlLFxuXHRcdHNlbGVjdENhdGVnb3J5SWRzLFxuXHRcdHNlbGVjdENhdGVnb3J5RW50aXRpZXMsXG5cdFx0c2VsZWN0QWxsQ2F0ZWdvcmllcyxcblx0XHRzZWxlY3RDYXRlZ29yeVRvdGFsXG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldERhZmZDYXRlZ29yeUVudGl0aWVzU2VsZWN0b3JzID0gKCgpID0+IHtcblx0bGV0IGNhY2hlO1xuXHRyZXR1cm4gPFQgZXh0ZW5kcyBEYWZmQ2F0ZWdvcnlSZXF1ZXN0LCBWIGV4dGVuZHMgRGFmZkdlbmVyaWNDYXRlZ29yeTxWPiwgVSBleHRlbmRzIERhZmZDYXRlZ29yeVBhZ2VDb25maWd1cmF0aW9uU3RhdGU8VD4+KCk6IERhZmZDYXRlZ29yeUVudGl0aWVzTWVtb2l6ZWRTZWxlY3RvcnM8Vj4gPT4gY2FjaGUgPSBjYWNoZSBcblx0XHQ/IGNhY2hlIFxuXHRcdDogY3JlYXRlQ2F0ZWdvcnlGZWF0dXJlU2VsZWN0b3JzPFQsIFYsIFU+KCk7XG59KSgpO1xuIl19