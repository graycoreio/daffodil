/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getDaffProductSelectors } from '@daffodil/product';
import { getDaffCategoryFeatureSelector } from './category-feature.selector';
import { getDaffCategoryPageSelectors } from './category-page/category-page.selector';
import { getDaffCategoryEntitiesSelectors } from './category-entities/category-entities.selector';
/**
 * @record
 * @template T, V, U, W
 */
export function DaffCategoryMemoizedSelectors() { }
if (false) {
    /** @type {?} */
    DaffCategoryMemoizedSelectors.prototype.selectSelectedCategory;
    /** @type {?} */
    DaffCategoryMemoizedSelectors.prototype.selectCategoryPageProducts;
    /** @type {?} */
    DaffCategoryMemoizedSelectors.prototype.selectCategory;
    /** @type {?} */
    DaffCategoryMemoizedSelectors.prototype.selectProductsByCategory;
    /** @type {?} */
    DaffCategoryMemoizedSelectors.prototype.selectTotalProductsByCategory;
}
/** @type {?} */
const createCategorySelectors = (/**
 * @template T, V, U, W
 * @return {?}
 */
() => {
    const { selectProductEntities, selectAllProducts } = getDaffProductSelectors();
    const { selectCategoryEntities } = getDaffCategoryEntitiesSelectors();
    const { selectSelectedCategoryId, selectCategoryPageProductIds } = getDaffCategoryPageSelectors();
    /**
     * Combinatoric Category Selectors
     * @type {?}
     */
    const selectSelectedCategory = createSelector(selectCategoryEntities, selectSelectedCategoryId, (/**
     * @param {?} entities
     * @param {?} selectedCategoryId
     * @return {?}
     */
    (entities, selectedCategoryId) => entities[selectedCategoryId]));
    /** @type {?} */
    const selectCategoryPageProducts = createSelector(selectCategoryPageProductIds, selectProductEntities, (/**
     * @param {?} ids
     * @param {?} products
     * @return {?}
     */
    (ids, products) => ids.map((/**
     * @param {?} id
     * @return {?}
     */
    id => products[id])).filter((/**
     * @param {?} p
     * @return {?}
     */
    p => p != null))));
    /** @type {?} */
    const selectCategory = createSelector(selectCategoryEntities, (/**
     * @param {?} entities
     * @param {?} props
     * @return {?}
     */
    (entities, props) => entities[props.id]));
    /** @type {?} */
    const selectProductsByCategory = createSelector(selectCategoryEntities, selectAllProducts, (/**
     * @param {?} entities
     * @param {?} products
     * @param {?} props
     * @return {?}
     */
    (entities, products, props) => entities[props.id] && entities[props.id].product_ids
        ? products.filter((/**
         * @param {?} product
         * @return {?}
         */
        product => entities[props.id].product_ids.indexOf(product.id) >= 0))
        : null));
    /** @type {?} */
    const selectTotalProductsByCategory = createSelector(selectCategoryEntities, selectAllProducts, (/**
     * @param {?} entities
     * @param {?} products
     * @param {?} props
     * @return {?}
     */
    (entities, products, props) => selectProductsByCategory.projector(entities, products, { id: props.id })
        ? selectProductsByCategory.projector(entities, products, { id: props.id }).length
        : null));
    return Object.assign({}, getDaffCategoryFeatureSelector(), getDaffCategoryEntitiesSelectors(), getDaffCategoryPageSelectors(), { selectSelectedCategory,
        selectCategoryPageProducts,
        selectCategory,
        selectProductsByCategory,
        selectTotalProductsByCategory });
});
const ɵ0 = createCategorySelectors;
const ɵ1 = /**
 * @return {?}
 */
() => {
    /** @type {?} */
    let cache;
    return (/**
     * @template T, V, U, W
     * @return {?}
     */
    () => cache = cache
        ? cache
        : createCategorySelectors());
};
/** @type {?} */
export const getDaffCategorySelectors = ((ɵ1))();
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuc2VsZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2F0ZWdvcnkvIiwic291cmNlcyI6WyJzZWxlY3RvcnMvY2F0ZWdvcnkuc2VsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQStDLE1BQU0sYUFBYSxDQUFDO0FBRzFGLE9BQU8sRUFBRSx1QkFBdUIsRUFBZSxNQUFNLG1CQUFtQixDQUFDO0FBS3pFLE9BQU8sRUFBd0MsOEJBQThCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNuSCxPQUFPLEVBQXFDLDRCQUE0QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFekgsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7Ozs7O0FBR2xHLG1EQWNDOzs7SUFMQSwrREFBb0Q7O0lBQ3BELG1FQUEwRDs7SUFDMUQsdURBQTZEOztJQUM3RCxpRUFBeUU7O0lBQ3pFLHNFQUFpRjs7O01BRzVFLHVCQUF1Qjs7OztBQUFHLEdBQXVMLEVBQUU7VUFDbE4sRUFBRSxxQkFBcUIsRUFBRSxpQkFBaUIsRUFBRSxHQUFHLHVCQUF1QixFQUFLO1VBRTNFLEVBQ0wsc0JBQXNCLEVBQ3RCLEdBQUcsZ0NBQWdDLEVBQVc7VUFDekMsRUFDTCx3QkFBd0IsRUFDeEIsNEJBQTRCLEVBQzVCLEdBQUcsNEJBQTRCLEVBQVc7Ozs7O1VBSXJDLHNCQUFzQixHQUFHLGNBQWMsQ0FDNUMsc0JBQXNCLEVBQ3RCLHdCQUF3Qjs7Ozs7SUFDeEIsQ0FBQyxRQUF1QixFQUFFLGtCQUEwQixFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsRUFDckY7O1VBRUssMEJBQTBCLEdBQUcsY0FBYyxDQUNoRCw0QkFBNEIsRUFDNUIscUJBQXFCOzs7OztJQUNyQixDQUFDLEdBQUcsRUFBRSxRQUF1QixFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRzs7OztJQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsTUFBTTs7OztJQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBQyxFQUNwRjs7VUFFSyxjQUFjLEdBQUcsY0FBYyxDQUNwQyxzQkFBc0I7Ozs7O0lBQ3RCLENBQUMsUUFBdUIsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQ3ZEOztVQUVLLHdCQUF3QixHQUFHLGNBQWMsQ0FDOUMsc0JBQXNCLEVBQ3RCLGlCQUFpQjs7Ozs7O0lBQ2pCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFXO1FBQ2xGLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTTs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUM7UUFDckYsQ0FBQyxDQUFDLElBQUksRUFDUDs7VUFFSyw2QkFBNkIsR0FBRyxjQUFjLENBQ25ELHNCQUFzQixFQUN0QixpQkFBaUI7Ozs7OztJQUNqQixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDdEcsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU07UUFDakYsQ0FBQyxDQUFDLElBQUksRUFDUDtJQUVELHlCQUNJLDhCQUE4QixFQUFXLEVBQ3pDLGdDQUFnQyxFQUFXLEVBQzNDLDRCQUE0QixFQUFXLElBQzFDLHNCQUFzQjtRQUN0QiwwQkFBMEI7UUFDMUIsY0FBYztRQUNkLHdCQUF3QjtRQUN4Qiw2QkFBNkIsSUFDN0I7QUFDRixDQUFDLENBQUE7Ozs7O0FBRXdDLEdBQUcsRUFBRTs7UUFDekMsS0FBSztJQUNUOzs7O0lBQU8sR0FLd0MsRUFBRSxDQUFDLEtBQUssR0FBRyxLQUFLO1FBQzlELENBQUMsQ0FBQyxLQUFLO1FBQ1AsQ0FBQyxDQUFDLHVCQUF1QixFQUFjLEVBQUM7QUFDMUMsQ0FBQzs7QUFWRCxNQUFNLE9BQU8sd0JBQXdCLEdBQUcsTUFVdEMsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yV2l0aFByb3BzIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRGljdGlvbmFyeSB9IGZyb20gJ0BuZ3J4L2VudGl0eSc7XG5cbmltcG9ydCB7IGdldERhZmZQcm9kdWN0U2VsZWN0b3JzLCBEYWZmUHJvZHVjdCB9IGZyb20gJ0BkYWZmb2RpbC9wcm9kdWN0JztcblxuaW1wb3J0IHsgRGFmZkNhdGVnb3J5UGFnZUNvbmZpZ3VyYXRpb25TdGF0ZSB9IGZyb20gJy4uL21vZGVscy9jYXRlZ29yeS1wYWdlLWNvbmZpZ3VyYXRpb24tc3RhdGUnO1xuaW1wb3J0IHsgRGFmZkdlbmVyaWNDYXRlZ29yeSB9IGZyb20gJy4uL21vZGVscy9nZW5lcmljLWNhdGVnb3J5JztcbmltcG9ydCB7IERhZmZDYXRlZ29yeVJlcXVlc3QgfSBmcm9tICcuLi9tb2RlbHMvcmVxdWVzdHMvY2F0ZWdvcnktcmVxdWVzdCc7XG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnlGZWF0dXJlTWVtb2l6ZWRTZWxlY3RvcnMsIGdldERhZmZDYXRlZ29yeUZlYXR1cmVTZWxlY3RvciB9IGZyb20gJy4vY2F0ZWdvcnktZmVhdHVyZS5zZWxlY3Rvcic7XG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnlQYWdlTWVtb2l6ZWRTZWxlY3RvcnMsIGdldERhZmZDYXRlZ29yeVBhZ2VTZWxlY3RvcnMgfSBmcm9tICcuL2NhdGVnb3J5LXBhZ2UvY2F0ZWdvcnktcGFnZS5zZWxlY3Rvcic7XG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnlFbnRpdGllc01lbW9pemVkU2VsZWN0b3JzIH0gZnJvbSAnLi9jYXRlZ29yeS1lbnRpdGllcy9jYXRlZ29yeS1lbnRpdGllcy5zZWxlY3Rvcic7XG5pbXBvcnQgeyBnZXREYWZmQ2F0ZWdvcnlFbnRpdGllc1NlbGVjdG9ycyB9IGZyb20gJy4vY2F0ZWdvcnktZW50aXRpZXMvY2F0ZWdvcnktZW50aXRpZXMuc2VsZWN0b3InO1xuaW1wb3J0IHsgRGFmZkNhdGVnb3J5IH0gZnJvbSAnLi4vbW9kZWxzL2NhdGVnb3J5JztcblxuZXhwb3J0IGludGVyZmFjZSBEYWZmQ2F0ZWdvcnlNZW1vaXplZFNlbGVjdG9yczxcblx0VCBleHRlbmRzIERhZmZDYXRlZ29yeVJlcXVlc3QgPSBEYWZmQ2F0ZWdvcnlSZXF1ZXN0LCBcblx0ViBleHRlbmRzIERhZmZHZW5lcmljQ2F0ZWdvcnk8Vj4gPSBEYWZmQ2F0ZWdvcnksIFxuXHRVIGV4dGVuZHMgRGFmZkNhdGVnb3J5UGFnZUNvbmZpZ3VyYXRpb25TdGF0ZTxUPiA9IERhZmZDYXRlZ29yeVBhZ2VDb25maWd1cmF0aW9uU3RhdGU8VD4sXG5cdFcgZXh0ZW5kcyBEYWZmUHJvZHVjdCA9IERhZmZQcm9kdWN0XG4+IGV4dGVuZHNcblx0RGFmZkNhdGVnb3J5RmVhdHVyZU1lbW9pemVkU2VsZWN0b3JzPFQsIFYsIFU+LFxuXHREYWZmQ2F0ZWdvcnlQYWdlTWVtb2l6ZWRTZWxlY3RvcnM8VCwgViwgVT4sXG5cdERhZmZDYXRlZ29yeUVudGl0aWVzTWVtb2l6ZWRTZWxlY3RvcnM8Vj4ge1xuXHRzZWxlY3RTZWxlY3RlZENhdGVnb3J5OiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgVj47XG5cdHNlbGVjdENhdGVnb3J5UGFnZVByb2R1Y3RzOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgV1tdPjtcblx0c2VsZWN0Q2F0ZWdvcnk6IE1lbW9pemVkU2VsZWN0b3JXaXRoUHJvcHM8b2JqZWN0LCBvYmplY3QsIFY+O1xuXHRzZWxlY3RQcm9kdWN0c0J5Q2F0ZWdvcnk6IE1lbW9pemVkU2VsZWN0b3JXaXRoUHJvcHM8b2JqZWN0LCBvYmplY3QsIFdbXT47XG5cdHNlbGVjdFRvdGFsUHJvZHVjdHNCeUNhdGVnb3J5OiBNZW1vaXplZFNlbGVjdG9yV2l0aFByb3BzPG9iamVjdCwgb2JqZWN0LCBudW1iZXI+O1xufVxuXG5jb25zdCBjcmVhdGVDYXRlZ29yeVNlbGVjdG9ycyA9IDxUIGV4dGVuZHMgRGFmZkNhdGVnb3J5UmVxdWVzdCwgViBleHRlbmRzIERhZmZHZW5lcmljQ2F0ZWdvcnk8Vj4sIFUgZXh0ZW5kcyBEYWZmQ2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlPFQ+LCBXIGV4dGVuZHMgRGFmZlByb2R1Y3Q+KCk6IERhZmZDYXRlZ29yeU1lbW9pemVkU2VsZWN0b3JzPFQsIFYsIFUsIFc+ID0+IHtcblx0Y29uc3QgeyBzZWxlY3RQcm9kdWN0RW50aXRpZXMsIHNlbGVjdEFsbFByb2R1Y3RzIH0gPSBnZXREYWZmUHJvZHVjdFNlbGVjdG9yczxXPigpO1xuXG5cdGNvbnN0IHtcblx0XHRzZWxlY3RDYXRlZ29yeUVudGl0aWVzXG5cdH0gPSBnZXREYWZmQ2F0ZWdvcnlFbnRpdGllc1NlbGVjdG9yczxULCBWLCBVPigpO1xuXHRjb25zdCB7IFxuXHRcdHNlbGVjdFNlbGVjdGVkQ2F0ZWdvcnlJZCwgXG5cdFx0c2VsZWN0Q2F0ZWdvcnlQYWdlUHJvZHVjdElkcyBcblx0fSA9IGdldERhZmZDYXRlZ29yeVBhZ2VTZWxlY3RvcnM8VCwgViwgVT4oKTtcblx0LyoqXG5cdCAqIENvbWJpbmF0b3JpYyBDYXRlZ29yeSBTZWxlY3RvcnNcblx0ICovXG5cdGNvbnN0IHNlbGVjdFNlbGVjdGVkQ2F0ZWdvcnkgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXRlZ29yeUVudGl0aWVzLFxuXHRcdHNlbGVjdFNlbGVjdGVkQ2F0ZWdvcnlJZCxcblx0XHQoZW50aXRpZXM6IERpY3Rpb25hcnk8Vj4sIHNlbGVjdGVkQ2F0ZWdvcnlJZDogc3RyaW5nKSA9PiBlbnRpdGllc1tzZWxlY3RlZENhdGVnb3J5SWRdXG5cdCk7XG5cblx0Y29uc3Qgc2VsZWN0Q2F0ZWdvcnlQYWdlUHJvZHVjdHMgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXRlZ29yeVBhZ2VQcm9kdWN0SWRzLFxuXHRcdHNlbGVjdFByb2R1Y3RFbnRpdGllcyxcblx0XHQoaWRzLCBwcm9kdWN0czogRGljdGlvbmFyeTxXPikgPT4gaWRzLm1hcChpZCA9PiBwcm9kdWN0c1tpZF0pLmZpbHRlcihwID0+IHAgIT0gbnVsbClcblx0KTtcblxuXHRjb25zdCBzZWxlY3RDYXRlZ29yeSA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhdGVnb3J5RW50aXRpZXMsXG5cdFx0KGVudGl0aWVzOiBEaWN0aW9uYXJ5PFY+LCBwcm9wcykgPT4gIGVudGl0aWVzW3Byb3BzLmlkXVxuXHQpO1xuXG5cdGNvbnN0IHNlbGVjdFByb2R1Y3RzQnlDYXRlZ29yeSA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhdGVnb3J5RW50aXRpZXMsXG5cdFx0c2VsZWN0QWxsUHJvZHVjdHMsXG5cdFx0KGVudGl0aWVzLCBwcm9kdWN0cywgcHJvcHMpID0+IGVudGl0aWVzW3Byb3BzLmlkXSAmJiBlbnRpdGllc1twcm9wcy5pZF0ucHJvZHVjdF9pZHNcblx0XHRcdD8gcHJvZHVjdHMuZmlsdGVyKHByb2R1Y3QgPT4gZW50aXRpZXNbcHJvcHMuaWRdLnByb2R1Y3RfaWRzLmluZGV4T2YocHJvZHVjdC5pZCkgPj0gMClcblx0XHRcdDogbnVsbFxuXHQpO1xuXG5cdGNvbnN0IHNlbGVjdFRvdGFsUHJvZHVjdHNCeUNhdGVnb3J5ID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2F0ZWdvcnlFbnRpdGllcyxcblx0XHRzZWxlY3RBbGxQcm9kdWN0cyxcblx0XHQoZW50aXRpZXMsIHByb2R1Y3RzLCBwcm9wcykgPT4gc2VsZWN0UHJvZHVjdHNCeUNhdGVnb3J5LnByb2plY3RvcihlbnRpdGllcywgcHJvZHVjdHMsIHsgaWQ6IHByb3BzLmlkIH0pXG5cdFx0XHQ/IHNlbGVjdFByb2R1Y3RzQnlDYXRlZ29yeS5wcm9qZWN0b3IoZW50aXRpZXMsIHByb2R1Y3RzLCB7IGlkOiBwcm9wcy5pZCB9KS5sZW5ndGhcblx0XHRcdDogbnVsbFxuXHQpO1xuXG5cdHJldHVybiB7XG5cdFx0Li4uZ2V0RGFmZkNhdGVnb3J5RmVhdHVyZVNlbGVjdG9yPFQsIFYsIFU+KCksXG5cdFx0Li4uZ2V0RGFmZkNhdGVnb3J5RW50aXRpZXNTZWxlY3RvcnM8VCwgViwgVT4oKSxcblx0XHQuLi5nZXREYWZmQ2F0ZWdvcnlQYWdlU2VsZWN0b3JzPFQsIFYsIFU+KCksXG5cdFx0c2VsZWN0U2VsZWN0ZWRDYXRlZ29yeSxcblx0XHRzZWxlY3RDYXRlZ29yeVBhZ2VQcm9kdWN0cyxcblx0XHRzZWxlY3RDYXRlZ29yeSxcblx0XHRzZWxlY3RQcm9kdWN0c0J5Q2F0ZWdvcnksXG5cdFx0c2VsZWN0VG90YWxQcm9kdWN0c0J5Q2F0ZWdvcnlcblx0fVxufVxuXG5leHBvcnQgY29uc3QgZ2V0RGFmZkNhdGVnb3J5U2VsZWN0b3JzID0gKCgpID0+IHtcblx0bGV0IGNhY2hlO1xuXHRyZXR1cm4gPFxuXHRcdFQgZXh0ZW5kcyBEYWZmQ2F0ZWdvcnlSZXF1ZXN0ID0gRGFmZkNhdGVnb3J5UmVxdWVzdCwgXG5cdFx0ViBleHRlbmRzIERhZmZHZW5lcmljQ2F0ZWdvcnk8Vj4gPSBEYWZmQ2F0ZWdvcnksIFxuXHRcdFUgZXh0ZW5kcyBEYWZmQ2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlPFQ+ID0gRGFmZkNhdGVnb3J5UGFnZUNvbmZpZ3VyYXRpb25TdGF0ZTxUPiwgXG5cdFx0VyBleHRlbmRzIERhZmZQcm9kdWN0ID0gRGFmZlByb2R1Y3Rcblx0PigpOiBEYWZmQ2F0ZWdvcnlNZW1vaXplZFNlbGVjdG9yczxULCBWLCBVLCBXPiA9PiBjYWNoZSA9IGNhY2hlIFxuXHRcdD8gY2FjaGUgXG5cdFx0OiBjcmVhdGVDYXRlZ29yeVNlbGVjdG9yczxULCBWLCBVLCBXPigpO1xufSkoKTtcbiJdfQ==