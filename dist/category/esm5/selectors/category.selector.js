/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var createCategorySelectors = (/**
 * @template T, V, U, W
 * @return {?}
 */
function () {
    var _a = getDaffProductSelectors(), selectProductEntities = _a.selectProductEntities, selectAllProducts = _a.selectAllProducts;
    var selectCategoryEntities = getDaffCategoryEntitiesSelectors().selectCategoryEntities;
    var _b = getDaffCategoryPageSelectors(), selectSelectedCategoryId = _b.selectSelectedCategoryId, selectCategoryPageProductIds = _b.selectCategoryPageProductIds;
    /**
     * Combinatoric Category Selectors
     * @type {?}
     */
    var selectSelectedCategory = createSelector(selectCategoryEntities, selectSelectedCategoryId, (/**
     * @param {?} entities
     * @param {?} selectedCategoryId
     * @return {?}
     */
    function (entities, selectedCategoryId) { return entities[selectedCategoryId]; }));
    /** @type {?} */
    var selectCategoryPageProducts = createSelector(selectCategoryPageProductIds, selectProductEntities, (/**
     * @param {?} ids
     * @param {?} products
     * @return {?}
     */
    function (ids, products) { return ids.map((/**
     * @param {?} id
     * @return {?}
     */
    function (id) { return products[id]; })).filter((/**
     * @param {?} p
     * @return {?}
     */
    function (p) { return p != null; })); }));
    /** @type {?} */
    var selectCategory = createSelector(selectCategoryEntities, (/**
     * @param {?} entities
     * @param {?} props
     * @return {?}
     */
    function (entities, props) { return entities[props.id]; }));
    /** @type {?} */
    var selectProductsByCategory = createSelector(selectCategoryEntities, selectAllProducts, (/**
     * @param {?} entities
     * @param {?} products
     * @param {?} props
     * @return {?}
     */
    function (entities, products, props) { return entities[props.id] && entities[props.id].product_ids
        ? products.filter((/**
         * @param {?} product
         * @return {?}
         */
        function (product) { return entities[props.id].product_ids.indexOf(product.id) >= 0; }))
        : null; }));
    /** @type {?} */
    var selectTotalProductsByCategory = createSelector(selectCategoryEntities, selectAllProducts, (/**
     * @param {?} entities
     * @param {?} products
     * @param {?} props
     * @return {?}
     */
    function (entities, products, props) { return selectProductsByCategory.projector(entities, products, { id: props.id })
        ? selectProductsByCategory.projector(entities, products, { id: props.id }).length
        : null; }));
    return tslib_1.__assign({}, getDaffCategoryFeatureSelector(), getDaffCategoryEntitiesSelectors(), getDaffCategoryPageSelectors(), { selectSelectedCategory: selectSelectedCategory,
        selectCategoryPageProducts: selectCategoryPageProducts,
        selectCategory: selectCategory,
        selectProductsByCategory: selectProductsByCategory,
        selectTotalProductsByCategory: selectTotalProductsByCategory });
});
var ɵ0 = createCategorySelectors;
var ɵ1 = /**
 * @return {?}
 */
function () {
    /** @type {?} */
    var cache;
    return (/**
     * @template T, V, U, W
     * @return {?}
     */
    function () { return cache = cache
        ? cache
        : createCategorySelectors(); });
};
/** @type {?} */
export var getDaffCategorySelectors = ((ɵ1))();
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuc2VsZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2F0ZWdvcnkvIiwic291cmNlcyI6WyJzZWxlY3RvcnMvY2F0ZWdvcnkuc2VsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUErQyxNQUFNLGFBQWEsQ0FBQztBQUcxRixPQUFPLEVBQUUsdUJBQXVCLEVBQWUsTUFBTSxtQkFBbUIsQ0FBQztBQUt6RSxPQUFPLEVBQXdDLDhCQUE4QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbkgsT0FBTyxFQUFxQyw0QkFBNEIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRXpILE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOzs7OztBQUdsRyxtREFjQzs7O0lBTEEsK0RBQW9EOztJQUNwRCxtRUFBMEQ7O0lBQzFELHVEQUE2RDs7SUFDN0QsaUVBQXlFOztJQUN6RSxzRUFBaUY7OztJQUc1RSx1QkFBdUI7Ozs7QUFBRztJQUN6QixJQUFBLDhCQUEyRSxFQUF6RSxnREFBcUIsRUFBRSx3Q0FBa0Q7SUFHaEYsSUFBQSxrRkFBc0I7SUFFakIsSUFBQSxtQ0FHcUMsRUFGMUMsc0RBQXdCLEVBQ3hCLDhEQUMwQzs7Ozs7UUFJckMsc0JBQXNCLEdBQUcsY0FBYyxDQUM1QyxzQkFBc0IsRUFDdEIsd0JBQXdCOzs7OztJQUN4QixVQUFDLFFBQXVCLEVBQUUsa0JBQTBCLElBQUssT0FBQSxRQUFRLENBQUMsa0JBQWtCLENBQUMsRUFBNUIsQ0FBNEIsRUFDckY7O1FBRUssMEJBQTBCLEdBQUcsY0FBYyxDQUNoRCw0QkFBNEIsRUFDNUIscUJBQXFCOzs7OztJQUNyQixVQUFDLEdBQUcsRUFBRSxRQUF1QixJQUFLLE9BQUEsR0FBRyxDQUFDLEdBQUc7Ozs7SUFBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBWixDQUFZLEVBQUMsQ0FBQyxNQUFNOzs7O0lBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLElBQUksSUFBSSxFQUFULENBQVMsRUFBQyxFQUFsRCxDQUFrRCxFQUNwRjs7UUFFSyxjQUFjLEdBQUcsY0FBYyxDQUNwQyxzQkFBc0I7Ozs7O0lBQ3RCLFVBQUMsUUFBdUIsRUFBRSxLQUFLLElBQU0sT0FBQSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFsQixDQUFrQixFQUN2RDs7UUFFSyx3QkFBd0IsR0FBRyxjQUFjLENBQzlDLHNCQUFzQixFQUN0QixpQkFBaUI7Ozs7OztJQUNqQixVQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxJQUFLLE9BQUEsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQVc7UUFDbEYsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBdkQsQ0FBdUQsRUFBQztRQUNyRixDQUFDLENBQUMsSUFBSSxFQUZ3QixDQUV4QixFQUNQOztRQUVLLDZCQUE2QixHQUFHLGNBQWMsQ0FDbkQsc0JBQXNCLEVBQ3RCLGlCQUFpQjs7Ozs7O0lBQ2pCLFVBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLElBQUssT0FBQSx3QkFBd0IsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDdEcsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU07UUFDakYsQ0FBQyxDQUFDLElBQUksRUFGd0IsQ0FFeEIsRUFDUDtJQUVELDRCQUNJLDhCQUE4QixFQUFXLEVBQ3pDLGdDQUFnQyxFQUFXLEVBQzNDLDRCQUE0QixFQUFXLElBQzFDLHNCQUFzQix3QkFBQTtRQUN0QiwwQkFBMEIsNEJBQUE7UUFDMUIsY0FBYyxnQkFBQTtRQUNkLHdCQUF3QiwwQkFBQTtRQUN4Qiw2QkFBNkIsK0JBQUEsSUFDN0I7QUFDRixDQUFDLENBQUE7Ozs7O0FBRXdDOztRQUNwQyxLQUFLO0lBQ1Q7Ozs7SUFBTyxjQUsyQyxPQUFBLEtBQUssR0FBRyxLQUFLO1FBQzlELENBQUMsQ0FBQyxLQUFLO1FBQ1AsQ0FBQyxDQUFDLHVCQUF1QixFQUFjLEVBRlUsQ0FFVixFQUFDO0FBQzFDLENBQUM7O0FBVkQsTUFBTSxLQUFPLHdCQUF3QixHQUFHLE1BVXRDLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvcldpdGhQcm9wcyB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IERpY3Rpb25hcnkgfSBmcm9tICdAbmdyeC9lbnRpdHknO1xuXG5pbXBvcnQgeyBnZXREYWZmUHJvZHVjdFNlbGVjdG9ycywgRGFmZlByb2R1Y3QgfSBmcm9tICdAZGFmZm9kaWwvcHJvZHVjdCc7XG5cbmltcG9ydCB7IERhZmZDYXRlZ29yeVBhZ2VDb25maWd1cmF0aW9uU3RhdGUgfSBmcm9tICcuLi9tb2RlbHMvY2F0ZWdvcnktcGFnZS1jb25maWd1cmF0aW9uLXN0YXRlJztcbmltcG9ydCB7IERhZmZHZW5lcmljQ2F0ZWdvcnkgfSBmcm9tICcuLi9tb2RlbHMvZ2VuZXJpYy1jYXRlZ29yeSc7XG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnlSZXF1ZXN0IH0gZnJvbSAnLi4vbW9kZWxzL3JlcXVlc3RzL2NhdGVnb3J5LXJlcXVlc3QnO1xuaW1wb3J0IHsgRGFmZkNhdGVnb3J5RmVhdHVyZU1lbW9pemVkU2VsZWN0b3JzLCBnZXREYWZmQ2F0ZWdvcnlGZWF0dXJlU2VsZWN0b3IgfSBmcm9tICcuL2NhdGVnb3J5LWZlYXR1cmUuc2VsZWN0b3InO1xuaW1wb3J0IHsgRGFmZkNhdGVnb3J5UGFnZU1lbW9pemVkU2VsZWN0b3JzLCBnZXREYWZmQ2F0ZWdvcnlQYWdlU2VsZWN0b3JzIH0gZnJvbSAnLi9jYXRlZ29yeS1wYWdlL2NhdGVnb3J5LXBhZ2Uuc2VsZWN0b3InO1xuaW1wb3J0IHsgRGFmZkNhdGVnb3J5RW50aXRpZXNNZW1vaXplZFNlbGVjdG9ycyB9IGZyb20gJy4vY2F0ZWdvcnktZW50aXRpZXMvY2F0ZWdvcnktZW50aXRpZXMuc2VsZWN0b3InO1xuaW1wb3J0IHsgZ2V0RGFmZkNhdGVnb3J5RW50aXRpZXNTZWxlY3RvcnMgfSBmcm9tICcuL2NhdGVnb3J5LWVudGl0aWVzL2NhdGVnb3J5LWVudGl0aWVzLnNlbGVjdG9yJztcbmltcG9ydCB7IERhZmZDYXRlZ29yeSB9IGZyb20gJy4uL21vZGVscy9jYXRlZ29yeSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGFmZkNhdGVnb3J5TWVtb2l6ZWRTZWxlY3RvcnM8XG5cdFQgZXh0ZW5kcyBEYWZmQ2F0ZWdvcnlSZXF1ZXN0ID0gRGFmZkNhdGVnb3J5UmVxdWVzdCwgXG5cdFYgZXh0ZW5kcyBEYWZmR2VuZXJpY0NhdGVnb3J5PFY+ID0gRGFmZkNhdGVnb3J5LCBcblx0VSBleHRlbmRzIERhZmZDYXRlZ29yeVBhZ2VDb25maWd1cmF0aW9uU3RhdGU8VD4gPSBEYWZmQ2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlPFQ+LFxuXHRXIGV4dGVuZHMgRGFmZlByb2R1Y3QgPSBEYWZmUHJvZHVjdFxuPiBleHRlbmRzXG5cdERhZmZDYXRlZ29yeUZlYXR1cmVNZW1vaXplZFNlbGVjdG9yczxULCBWLCBVPixcblx0RGFmZkNhdGVnb3J5UGFnZU1lbW9pemVkU2VsZWN0b3JzPFQsIFYsIFU+LFxuXHREYWZmQ2F0ZWdvcnlFbnRpdGllc01lbW9pemVkU2VsZWN0b3JzPFY+IHtcblx0c2VsZWN0U2VsZWN0ZWRDYXRlZ29yeTogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIFY+O1xuXHRzZWxlY3RDYXRlZ29yeVBhZ2VQcm9kdWN0czogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIFdbXT47XG5cdHNlbGVjdENhdGVnb3J5OiBNZW1vaXplZFNlbGVjdG9yV2l0aFByb3BzPG9iamVjdCwgb2JqZWN0LCBWPjtcblx0c2VsZWN0UHJvZHVjdHNCeUNhdGVnb3J5OiBNZW1vaXplZFNlbGVjdG9yV2l0aFByb3BzPG9iamVjdCwgb2JqZWN0LCBXW10+O1xuXHRzZWxlY3RUb3RhbFByb2R1Y3RzQnlDYXRlZ29yeTogTWVtb2l6ZWRTZWxlY3RvcldpdGhQcm9wczxvYmplY3QsIG9iamVjdCwgbnVtYmVyPjtcbn1cblxuY29uc3QgY3JlYXRlQ2F0ZWdvcnlTZWxlY3RvcnMgPSA8VCBleHRlbmRzIERhZmZDYXRlZ29yeVJlcXVlc3QsIFYgZXh0ZW5kcyBEYWZmR2VuZXJpY0NhdGVnb3J5PFY+LCBVIGV4dGVuZHMgRGFmZkNhdGVnb3J5UGFnZUNvbmZpZ3VyYXRpb25TdGF0ZTxUPiwgVyBleHRlbmRzIERhZmZQcm9kdWN0PigpOiBEYWZmQ2F0ZWdvcnlNZW1vaXplZFNlbGVjdG9yczxULCBWLCBVLCBXPiA9PiB7XG5cdGNvbnN0IHsgc2VsZWN0UHJvZHVjdEVudGl0aWVzLCBzZWxlY3RBbGxQcm9kdWN0cyB9ID0gZ2V0RGFmZlByb2R1Y3RTZWxlY3RvcnM8Vz4oKTtcblxuXHRjb25zdCB7XG5cdFx0c2VsZWN0Q2F0ZWdvcnlFbnRpdGllc1xuXHR9ID0gZ2V0RGFmZkNhdGVnb3J5RW50aXRpZXNTZWxlY3RvcnM8VCwgViwgVT4oKTtcblx0Y29uc3QgeyBcblx0XHRzZWxlY3RTZWxlY3RlZENhdGVnb3J5SWQsIFxuXHRcdHNlbGVjdENhdGVnb3J5UGFnZVByb2R1Y3RJZHMgXG5cdH0gPSBnZXREYWZmQ2F0ZWdvcnlQYWdlU2VsZWN0b3JzPFQsIFYsIFU+KCk7XG5cdC8qKlxuXHQgKiBDb21iaW5hdG9yaWMgQ2F0ZWdvcnkgU2VsZWN0b3JzXG5cdCAqL1xuXHRjb25zdCBzZWxlY3RTZWxlY3RlZENhdGVnb3J5ID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2F0ZWdvcnlFbnRpdGllcyxcblx0XHRzZWxlY3RTZWxlY3RlZENhdGVnb3J5SWQsXG5cdFx0KGVudGl0aWVzOiBEaWN0aW9uYXJ5PFY+LCBzZWxlY3RlZENhdGVnb3J5SWQ6IHN0cmluZykgPT4gZW50aXRpZXNbc2VsZWN0ZWRDYXRlZ29yeUlkXVxuXHQpO1xuXG5cdGNvbnN0IHNlbGVjdENhdGVnb3J5UGFnZVByb2R1Y3RzID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q2F0ZWdvcnlQYWdlUHJvZHVjdElkcyxcblx0XHRzZWxlY3RQcm9kdWN0RW50aXRpZXMsXG5cdFx0KGlkcywgcHJvZHVjdHM6IERpY3Rpb25hcnk8Vz4pID0+IGlkcy5tYXAoaWQgPT4gcHJvZHVjdHNbaWRdKS5maWx0ZXIocCA9PiBwICE9IG51bGwpXG5cdCk7XG5cblx0Y29uc3Qgc2VsZWN0Q2F0ZWdvcnkgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXRlZ29yeUVudGl0aWVzLFxuXHRcdChlbnRpdGllczogRGljdGlvbmFyeTxWPiwgcHJvcHMpID0+ICBlbnRpdGllc1twcm9wcy5pZF1cblx0KTtcblxuXHRjb25zdCBzZWxlY3RQcm9kdWN0c0J5Q2F0ZWdvcnkgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDYXRlZ29yeUVudGl0aWVzLFxuXHRcdHNlbGVjdEFsbFByb2R1Y3RzLFxuXHRcdChlbnRpdGllcywgcHJvZHVjdHMsIHByb3BzKSA9PiBlbnRpdGllc1twcm9wcy5pZF0gJiYgZW50aXRpZXNbcHJvcHMuaWRdLnByb2R1Y3RfaWRzXG5cdFx0XHQ/IHByb2R1Y3RzLmZpbHRlcihwcm9kdWN0ID0+IGVudGl0aWVzW3Byb3BzLmlkXS5wcm9kdWN0X2lkcy5pbmRleE9mKHByb2R1Y3QuaWQpID49IDApXG5cdFx0XHQ6IG51bGxcblx0KTtcblxuXHRjb25zdCBzZWxlY3RUb3RhbFByb2R1Y3RzQnlDYXRlZ29yeSA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENhdGVnb3J5RW50aXRpZXMsXG5cdFx0c2VsZWN0QWxsUHJvZHVjdHMsXG5cdFx0KGVudGl0aWVzLCBwcm9kdWN0cywgcHJvcHMpID0+IHNlbGVjdFByb2R1Y3RzQnlDYXRlZ29yeS5wcm9qZWN0b3IoZW50aXRpZXMsIHByb2R1Y3RzLCB7IGlkOiBwcm9wcy5pZCB9KVxuXHRcdFx0PyBzZWxlY3RQcm9kdWN0c0J5Q2F0ZWdvcnkucHJvamVjdG9yKGVudGl0aWVzLCBwcm9kdWN0cywgeyBpZDogcHJvcHMuaWQgfSkubGVuZ3RoXG5cdFx0XHQ6IG51bGxcblx0KTtcblxuXHRyZXR1cm4ge1xuXHRcdC4uLmdldERhZmZDYXRlZ29yeUZlYXR1cmVTZWxlY3RvcjxULCBWLCBVPigpLFxuXHRcdC4uLmdldERhZmZDYXRlZ29yeUVudGl0aWVzU2VsZWN0b3JzPFQsIFYsIFU+KCksXG5cdFx0Li4uZ2V0RGFmZkNhdGVnb3J5UGFnZVNlbGVjdG9yczxULCBWLCBVPigpLFxuXHRcdHNlbGVjdFNlbGVjdGVkQ2F0ZWdvcnksXG5cdFx0c2VsZWN0Q2F0ZWdvcnlQYWdlUHJvZHVjdHMsXG5cdFx0c2VsZWN0Q2F0ZWdvcnksXG5cdFx0c2VsZWN0UHJvZHVjdHNCeUNhdGVnb3J5LFxuXHRcdHNlbGVjdFRvdGFsUHJvZHVjdHNCeUNhdGVnb3J5XG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldERhZmZDYXRlZ29yeVNlbGVjdG9ycyA9ICgoKSA9PiB7XG5cdGxldCBjYWNoZTtcblx0cmV0dXJuIDxcblx0XHRUIGV4dGVuZHMgRGFmZkNhdGVnb3J5UmVxdWVzdCA9IERhZmZDYXRlZ29yeVJlcXVlc3QsIFxuXHRcdFYgZXh0ZW5kcyBEYWZmR2VuZXJpY0NhdGVnb3J5PFY+ID0gRGFmZkNhdGVnb3J5LCBcblx0XHRVIGV4dGVuZHMgRGFmZkNhdGVnb3J5UGFnZUNvbmZpZ3VyYXRpb25TdGF0ZTxUPiA9IERhZmZDYXRlZ29yeVBhZ2VDb25maWd1cmF0aW9uU3RhdGU8VD4sIFxuXHRcdFcgZXh0ZW5kcyBEYWZmUHJvZHVjdCA9IERhZmZQcm9kdWN0XG5cdD4oKTogRGFmZkNhdGVnb3J5TWVtb2l6ZWRTZWxlY3RvcnM8VCwgViwgVSwgVz4gPT4gY2FjaGUgPSBjYWNoZSBcblx0XHQ/IGNhY2hlIFxuXHRcdDogY3JlYXRlQ2F0ZWdvcnlTZWxlY3RvcnM8VCwgViwgVSwgVz4oKTtcbn0pKCk7XG4iXX0=