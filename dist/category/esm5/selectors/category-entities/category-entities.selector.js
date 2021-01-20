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
var createCategoryFeatureSelectors = (/**
 * @template T, V, U
 * @return {?}
 */
function () {
    /** @type {?} */
    var entitiesSelectors = daffCategoryEntitiesAdapter().getSelectors();
    /** @type {?} */
    var categoryFeatureState = getDaffCategoryFeatureSelector().selectCategoryFeatureState;
    /**
     * Category Entities State
     * @type {?}
     */
    var selectCategoryEntitiesState = createSelector(categoryFeatureState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.categoryEntities; }));
    /** @type {?} */
    var selectCategoryIds = createSelector(selectCategoryEntitiesState, entitiesSelectors.selectIds);
    /** @type {?} */
    var selectCategoryEntities = createSelector(selectCategoryEntitiesState, entitiesSelectors.selectEntities);
    /** @type {?} */
    var selectAllCategories = createSelector(selectCategoryEntitiesState, entitiesSelectors.selectAll);
    /** @type {?} */
    var selectCategoryTotal = createSelector(selectCategoryEntitiesState, entitiesSelectors.selectTotal);
    return {
        selectCategoryEntitiesState: selectCategoryEntitiesState,
        selectCategoryIds: selectCategoryIds,
        selectCategoryEntities: selectCategoryEntities,
        selectAllCategories: selectAllCategories,
        selectCategoryTotal: selectCategoryTotal
    };
});
var ɵ0 = createCategoryFeatureSelectors;
var ɵ1 = /**
 * @return {?}
 */
function () {
    /** @type {?} */
    var cache;
    return (/**
     * @template T, V, U
     * @return {?}
     */
    function () { return cache = cache
        ? cache
        : createCategoryFeatureSelectors(); });
};
/** @type {?} */
export var getDaffCategoryEntitiesSelectors = ((ɵ1))();
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktZW50aXRpZXMuc2VsZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2F0ZWdvcnkvIiwic291cmNlcyI6WyJzZWxlY3RvcnMvY2F0ZWdvcnktZW50aXRpZXMvY2F0ZWdvcnktZW50aXRpZXMuc2VsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBTy9ELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7OztBQUc5RSwyREFNQzs7O0lBTEEsNEVBQXNFOztJQUN0RSxrRUFBbUU7O0lBQ25FLHVFQUFnRTs7SUFDaEUsb0VBQW1EOztJQUNuRCxvRUFBc0Q7OztJQUdqRCw4QkFBOEI7Ozs7QUFBRzs7UUFFaEMsaUJBQWlCLEdBQUcsMkJBQTJCLEVBQUssQ0FBQyxZQUFZLEVBQUU7O1FBQ25FLG9CQUFvQixHQUFHLDhCQUE4QixFQUFXLENBQUMsMEJBQTBCOzs7OztRQUkzRiwyQkFBMkIsR0FBRyxjQUFjLENBQ2pELG9CQUFvQjs7OztJQUNwQixVQUFDLEtBQXlDLElBQUssT0FBQSxLQUFLLENBQUMsZ0JBQWdCLEVBQXRCLENBQXNCLEVBQ3JFOztRQUVLLGlCQUFpQixHQUFHLGNBQWMsQ0FDdkMsMkJBQTJCLEVBQzNCLGlCQUFpQixDQUFDLFNBQVMsQ0FDM0I7O1FBRUssc0JBQXNCLEdBQUcsY0FBYyxDQUM1QywyQkFBMkIsRUFDM0IsaUJBQWlCLENBQUMsY0FBYyxDQUNoQzs7UUFFSyxtQkFBbUIsR0FBRyxjQUFjLENBQ3pDLDJCQUEyQixFQUMzQixpQkFBaUIsQ0FBQyxTQUFTLENBQzNCOztRQUVLLG1CQUFtQixHQUFHLGNBQWMsQ0FDekMsMkJBQTJCLEVBQzNCLGlCQUFpQixDQUFDLFdBQVcsQ0FDN0I7SUFFRCxPQUFPO1FBQ04sMkJBQTJCLDZCQUFBO1FBQzNCLGlCQUFpQixtQkFBQTtRQUNqQixzQkFBc0Isd0JBQUE7UUFDdEIsbUJBQW1CLHFCQUFBO1FBQ25CLG1CQUFtQixxQkFBQTtLQUNuQixDQUFBO0FBQ0YsQ0FBQyxDQUFBOzs7OztBQUVnRDs7UUFDNUMsS0FBSztJQUNUOzs7O0lBQU8sY0FBa0ssT0FBQSxLQUFLLEdBQUcsS0FBSztRQUNyTCxDQUFDLENBQUMsS0FBSztRQUNQLENBQUMsQ0FBQyw4QkFBOEIsRUFBVyxFQUY2SCxDQUU3SCxFQUFDO0FBQzlDLENBQUM7O0FBTEQsTUFBTSxLQUFPLGdDQUFnQyxHQUFHLE1BSzlDLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IERpY3Rpb25hcnksIEVudGl0eVN0YXRlIH0gZnJvbSAnQG5ncngvZW50aXR5JztcblxuaW1wb3J0IHsgRGFmZkdlbmVyaWNDYXRlZ29yeSB9IGZyb20gJy4uLy4uL21vZGVscy9nZW5lcmljLWNhdGVnb3J5JztcbmltcG9ydCB7IERhZmZDYXRlZ29yeVJlcXVlc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvcmVxdWVzdHMvY2F0ZWdvcnktcmVxdWVzdCc7XG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NhdGVnb3J5LXBhZ2UtY29uZmlndXJhdGlvbi1zdGF0ZSc7XG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnlSZWR1Y2Vyc1N0YXRlIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvY2F0ZWdvcnktcmVkdWNlcnMuaW50ZXJmYWNlJztcbmltcG9ydCB7IGRhZmZDYXRlZ29yeUVudGl0aWVzQWRhcHRlciB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL2NhdGVnb3J5LWVudGl0aWVzL2NhdGVnb3J5LWVudGl0aWVzLWFkYXB0ZXInO1xuaW1wb3J0IHsgZ2V0RGFmZkNhdGVnb3J5RmVhdHVyZVNlbGVjdG9yIH0gZnJvbSAnLi4vY2F0ZWdvcnktZmVhdHVyZS5zZWxlY3Rvcic7XG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnkgfSBmcm9tICcuLi8uLi9tb2RlbHMvY2F0ZWdvcnknO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhZmZDYXRlZ29yeUVudGl0aWVzTWVtb2l6ZWRTZWxlY3RvcnM8ViBleHRlbmRzIERhZmZHZW5lcmljQ2F0ZWdvcnk8Vj4gPSBEYWZmQ2F0ZWdvcnk+IHtcblx0c2VsZWN0Q2F0ZWdvcnlFbnRpdGllc1N0YXRlOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgRW50aXR5U3RhdGU8Vj4+O1xuXHRzZWxlY3RDYXRlZ29yeUlkczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIEVudGl0eVN0YXRlPFY+WydpZHMnXT47XG5cdHNlbGVjdENhdGVnb3J5RW50aXRpZXM6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBEaWN0aW9uYXJ5PFY+Pjtcblx0c2VsZWN0QWxsQ2F0ZWdvcmllczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIFZbXT47XG5cdHNlbGVjdENhdGVnb3J5VG90YWw6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBudW1iZXI+O1xufVxuXG5jb25zdCBjcmVhdGVDYXRlZ29yeUZlYXR1cmVTZWxlY3RvcnMgPSA8VCBleHRlbmRzIERhZmZDYXRlZ29yeVJlcXVlc3QsIFYgZXh0ZW5kcyBEYWZmR2VuZXJpY0NhdGVnb3J5PFY+LCBVIGV4dGVuZHMgRGFmZkNhdGVnb3J5UGFnZUNvbmZpZ3VyYXRpb25TdGF0ZTxUPj4oKTogRGFmZkNhdGVnb3J5RW50aXRpZXNNZW1vaXplZFNlbGVjdG9yczxWPiA9PiB7XG5cblx0Y29uc3QgZW50aXRpZXNTZWxlY3RvcnMgPSBkYWZmQ2F0ZWdvcnlFbnRpdGllc0FkYXB0ZXI8Vj4oKS5nZXRTZWxlY3RvcnMoKTtcblx0Y29uc3QgY2F0ZWdvcnlGZWF0dXJlU3RhdGUgPSBnZXREYWZmQ2F0ZWdvcnlGZWF0dXJlU2VsZWN0b3I8VCwgViwgVT4oKS5zZWxlY3RDYXRlZ29yeUZlYXR1cmVTdGF0ZTtcblx0LyoqXG5cdCAqIENhdGVnb3J5IEVudGl0aWVzIFN0YXRlXG5cdCAqL1xuXHRjb25zdCBzZWxlY3RDYXRlZ29yeUVudGl0aWVzU3RhdGUgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRjYXRlZ29yeUZlYXR1cmVTdGF0ZSxcblx0XHQoc3RhdGU6IERhZmZDYXRlZ29yeVJlZHVjZXJzU3RhdGU8VCwgViwgVT4pID0+IHN0YXRlLmNhdGVnb3J5RW50aXRpZXNcblx0KTtcblxuXHRjb25zdCBzZWxlY3RDYXRlZ29yeUlkcyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhdGVnb3J5RW50aXRpZXNTdGF0ZSxcblx0XHRlbnRpdGllc1NlbGVjdG9ycy5zZWxlY3RJZHNcblx0KTtcblxuXHRjb25zdCBzZWxlY3RDYXRlZ29yeUVudGl0aWVzID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2F0ZWdvcnlFbnRpdGllc1N0YXRlLFxuXHRcdGVudGl0aWVzU2VsZWN0b3JzLnNlbGVjdEVudGl0aWVzXG5cdCk7XG5cblx0Y29uc3Qgc2VsZWN0QWxsQ2F0ZWdvcmllcyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhdGVnb3J5RW50aXRpZXNTdGF0ZSxcblx0XHRlbnRpdGllc1NlbGVjdG9ycy5zZWxlY3RBbGxcblx0KTtcblxuXHRjb25zdCBzZWxlY3RDYXRlZ29yeVRvdGFsID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2F0ZWdvcnlFbnRpdGllc1N0YXRlLFxuXHRcdGVudGl0aWVzU2VsZWN0b3JzLnNlbGVjdFRvdGFsXG5cdCk7XG5cblx0cmV0dXJuIHtcblx0XHRzZWxlY3RDYXRlZ29yeUVudGl0aWVzU3RhdGUsXG5cdFx0c2VsZWN0Q2F0ZWdvcnlJZHMsXG5cdFx0c2VsZWN0Q2F0ZWdvcnlFbnRpdGllcyxcblx0XHRzZWxlY3RBbGxDYXRlZ29yaWVzLFxuXHRcdHNlbGVjdENhdGVnb3J5VG90YWxcblx0fVxufVxuXG5leHBvcnQgY29uc3QgZ2V0RGFmZkNhdGVnb3J5RW50aXRpZXNTZWxlY3RvcnMgPSAoKCkgPT4ge1xuXHRsZXQgY2FjaGU7XG5cdHJldHVybiA8VCBleHRlbmRzIERhZmZDYXRlZ29yeVJlcXVlc3QsIFYgZXh0ZW5kcyBEYWZmR2VuZXJpY0NhdGVnb3J5PFY+LCBVIGV4dGVuZHMgRGFmZkNhdGVnb3J5UGFnZUNvbmZpZ3VyYXRpb25TdGF0ZTxUPj4oKTogRGFmZkNhdGVnb3J5RW50aXRpZXNNZW1vaXplZFNlbGVjdG9yczxWPiA9PiBjYWNoZSA9IGNhY2hlIFxuXHRcdD8gY2FjaGUgXG5cdFx0OiBjcmVhdGVDYXRlZ29yeUZlYXR1cmVTZWxlY3RvcnM8VCwgViwgVT4oKTtcbn0pKCk7XG4iXX0=