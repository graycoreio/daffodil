/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getDaffProductFeatureSelector } from '../product-feature.selector';
import { daffConfigurableProductAppliedAttributesEntitiesAdapter } from '../../reducers/configurable-product-entities/configurable-product-entities-reducer-adapter';
/**
 * @record
 */
export function DaffConfigurableProductEntitiesMemoizedSelectors() { }
if (false) {
    /** @type {?} */
    DaffConfigurableProductEntitiesMemoizedSelectors.prototype.selectConfigurableProductAppliedAttributesEntitiesState;
    /** @type {?} */
    DaffConfigurableProductEntitiesMemoizedSelectors.prototype.selectConfigurableProductIds;
    /** @type {?} */
    DaffConfigurableProductEntitiesMemoizedSelectors.prototype.selectConfigurableProductAppliedAttributesEntities;
    /** @type {?} */
    DaffConfigurableProductEntitiesMemoizedSelectors.prototype.selectConfigurableProductTotal;
    /** @type {?} */
    DaffConfigurableProductEntitiesMemoizedSelectors.prototype.selectConfigurableProductAppliedAttributes;
    /** @type {?} */
    DaffConfigurableProductEntitiesMemoizedSelectors.prototype.selectConfigurableProductAppliedAttributesAsDictionary;
}
/** @type {?} */
const createConfigurableProductAppliedAttributesEntitiesSelectors = (/**
 * @template T
 * @return {?}
 */
() => {
    const { selectProductState } = getDaffProductFeatureSelector();
    /** @type {?} */
    const adapterSelectors = daffConfigurableProductAppliedAttributesEntitiesAdapter().getSelectors();
    /**
     * Configurable Product Entities State
     * @type {?}
     */
    const selectConfigurableProductAppliedAttributesEntitiesState = createSelector(selectProductState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.configurableProductAttributes));
    /**
     * Selector for configurable product IDs.
     * @type {?}
     */
    const selectConfigurableProductIds = createSelector(selectConfigurableProductAppliedAttributesEntitiesState, adapterSelectors.selectIds);
    /**
     * Selector for all configurable product applied attributes as entities (see ngrx/entity).
     * @type {?}
     */
    const selectConfigurableProductAppliedAttributesEntities = createSelector(selectConfigurableProductAppliedAttributesEntitiesState, adapterSelectors.selectEntities);
    /**
     * Selector for the total number of configurable products.
     * @type {?}
     */
    const selectConfigurableProductTotal = createSelector(selectConfigurableProductAppliedAttributesEntitiesState, adapterSelectors.selectTotal);
    /**
     * Selector for the applied attributes of a particular configurable product.
     * @type {?}
     */
    const selectConfigurableProductAppliedAttributes = createSelector(selectConfigurableProductAppliedAttributesEntitiesState, (/**
     * @param {?} products
     * @param {?} props
     * @return {?}
     */
    (products, props) => products.entities[props.id].attributes));
    /** @type {?} */
    const selectConfigurableProductAppliedAttributesAsDictionary = createSelector(selectConfigurableProductAppliedAttributesEntitiesState, (/**
     * @param {?} products
     * @param {?} props
     * @return {?}
     */
    (products, props) => selectConfigurableProductAppliedAttributes.projector(products, { id: props.id }).reduce((/**
     * @param {?} acc
     * @param {?} attribute
     * @return {?}
     */
    (acc, attribute) => (Object.assign({}, acc, { [attribute.code]: attribute.value }))), {})));
    return {
        selectConfigurableProductAppliedAttributesEntitiesState,
        selectConfigurableProductIds,
        selectConfigurableProductAppliedAttributesEntities,
        selectConfigurableProductTotal,
        selectConfigurableProductAppliedAttributes,
        selectConfigurableProductAppliedAttributesAsDictionary
    };
});
const ɵ0 = createConfigurableProductAppliedAttributesEntitiesSelectors;
const ɵ1 = /**
 * @return {?}
 */
() => {
    /** @type {?} */
    let cache;
    return (/**
     * @template T
     * @return {?}
     */
    () => cache = cache
        ? cache
        : createConfigurableProductAppliedAttributesEntitiesSelectors());
};
/** @type {?} */
export const getDaffConfigurableProductEntitiesSelectors = ((ɵ1))();
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXByb2R1Y3QtZW50aXRpZXMuc2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3Byb2R1Y3QvIiwic291cmNlcyI6WyJzZWxlY3RvcnMvY29uZmlndXJhYmxlLXByb2R1Y3QtZW50aXRpZXMvY29uZmlndXJhYmxlLXByb2R1Y3QtZW50aXRpZXMuc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUErQyxNQUFNLGFBQWEsQ0FBQztBQUcxRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUc1RSxPQUFPLEVBQUUsdURBQXVELEVBQUUsTUFBTSw0RkFBNEYsQ0FBQzs7OztBQUdySyxzRUFPQzs7O0lBTkEsbUhBQThIOztJQUM5SCx3RkFBMEc7O0lBQzFHLDhHQUFxSTs7SUFDckksMEZBQWlFOztJQUNqRSxzR0FBZ0k7O0lBQ2hJLGtIQUFzSDs7O01BR2pILDJEQUEyRDs7OztBQUFHLEdBQTRFLEVBQUU7VUFDM0ksRUFDTCxrQkFBa0IsRUFDbEIsR0FBRyw2QkFBNkIsRUFBSzs7VUFDaEMsZ0JBQWdCLEdBQUcsdURBQXVELEVBQUUsQ0FBQyxZQUFZLEVBQUU7Ozs7O1VBSTNGLHVEQUF1RCxHQUFHLGNBQWMsQ0FDN0Usa0JBQWtCOzs7O0lBQ2xCLENBQUMsS0FBa0MsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLDZCQUE2QixFQUMzRTs7Ozs7VUFLSyw0QkFBNEIsR0FBRyxjQUFjLENBQ2xELHVEQUF1RCxFQUN2RCxnQkFBZ0IsQ0FBQyxTQUFTLENBQzFCOzs7OztVQUtLLGtEQUFrRCxHQUFHLGNBQWMsQ0FDeEUsdURBQXVELEVBQ3ZELGdCQUFnQixDQUFDLGNBQWMsQ0FDL0I7Ozs7O1VBS0ssOEJBQThCLEdBQUcsY0FBYyxDQUNwRCx1REFBdUQsRUFDdkQsZ0JBQWdCLENBQUMsV0FBVyxDQUM1Qjs7Ozs7VUFLSywwQ0FBMEMsR0FBRyxjQUFjLENBQ2hFLHVEQUF1RDs7Ozs7SUFDdkQsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQzNEOztVQUVLLHNEQUFzRCxHQUFHLGNBQWMsQ0FDNUUsdURBQXVEOzs7OztJQUN2RCxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLDBDQUEwQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTTs7Ozs7SUFBQyxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLG1CQUM3SCxHQUFHLElBQ04sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssSUFDaEMsR0FBRSxFQUFFLENBQUMsRUFDUDtJQUVELE9BQU87UUFDTix1REFBdUQ7UUFDdkQsNEJBQTRCO1FBQzVCLGtEQUFrRDtRQUNsRCw4QkFBOEI7UUFDOUIsMENBQTBDO1FBQzFDLHNEQUFzRDtLQUN0RCxDQUFBO0FBQ0YsQ0FBQyxDQUFBOzs7OztBQUUyRCxHQUFHLEVBQUU7O1FBQzVELEtBQUs7SUFDVDs7OztJQUFPLEdBQTRFLEVBQUUsQ0FBQyxLQUFLLEdBQUcsS0FBSztRQUNsRyxDQUFDLENBQUMsS0FBSztRQUNQLENBQUMsQ0FBQywyREFBMkQsRUFBSyxFQUFDO0FBQ3JFLENBQUM7O0FBTEQsTUFBTSxPQUFPLDJDQUEyQyxHQUFHLE1BS3pELEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvcldpdGhQcm9wcyB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEVudGl0eVN0YXRlLCBEaWN0aW9uYXJ5IH0gZnJvbSAnQG5ncngvZW50aXR5JztcblxuaW1wb3J0IHsgZ2V0RGFmZlByb2R1Y3RGZWF0dXJlU2VsZWN0b3IgfSBmcm9tICcuLi9wcm9kdWN0LWZlYXR1cmUuc2VsZWN0b3InO1xuaW1wb3J0IHsgRGFmZlByb2R1Y3RSZWR1Y2Vyc1N0YXRlIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvcHJvZHVjdC1yZWR1Y2Vycy1zdGF0ZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGFmZlByb2R1Y3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvcHJvZHVjdCc7XG5pbXBvcnQgeyBkYWZmQ29uZmlndXJhYmxlUHJvZHVjdEFwcGxpZWRBdHRyaWJ1dGVzRW50aXRpZXNBZGFwdGVyIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvY29uZmlndXJhYmxlLXByb2R1Y3QtZW50aXRpZXMvY29uZmlndXJhYmxlLXByb2R1Y3QtZW50aXRpZXMtcmVkdWNlci1hZGFwdGVyJztcbmltcG9ydCB7IERhZmZDb25maWd1cmFibGVQcm9kdWN0RW50aXR5LCBEYWZmQ29uZmlndXJhYmxlUHJvZHVjdEVudGl0eUF0dHJpYnV0ZSB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL2NvbmZpZ3VyYWJsZS1wcm9kdWN0LWVudGl0aWVzL2NvbmZpZ3VyYWJsZS1wcm9kdWN0LWVudGl0eSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3RFbnRpdGllc01lbW9pemVkU2VsZWN0b3JzIHtcblx0c2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdEFwcGxpZWRBdHRyaWJ1dGVzRW50aXRpZXNTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIEVudGl0eVN0YXRlPERhZmZDb25maWd1cmFibGVQcm9kdWN0RW50aXR5Pj47XG5cdHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RJZHM6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBFbnRpdHlTdGF0ZTxEYWZmQ29uZmlndXJhYmxlUHJvZHVjdEVudGl0eT5bJ2lkcyddPjtcblx0c2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdEFwcGxpZWRBdHRyaWJ1dGVzRW50aXRpZXM6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBFbnRpdHlTdGF0ZTxEYWZmQ29uZmlndXJhYmxlUHJvZHVjdEVudGl0eT5bJ2VudGl0aWVzJ10+O1xuXHRzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0VG90YWw6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBudW1iZXI+O1xuXHRzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0QXBwbGllZEF0dHJpYnV0ZXM6IE1lbW9pemVkU2VsZWN0b3JXaXRoUHJvcHM8b2JqZWN0LCBvYmplY3QsIERhZmZDb25maWd1cmFibGVQcm9kdWN0RW50aXR5QXR0cmlidXRlW10+O1xuXHRzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0QXBwbGllZEF0dHJpYnV0ZXNBc0RpY3Rpb25hcnk6IE1lbW9pemVkU2VsZWN0b3JXaXRoUHJvcHM8b2JqZWN0LCBvYmplY3QsIERpY3Rpb25hcnk8c3RyaW5nPj47XG59XG5cbmNvbnN0IGNyZWF0ZUNvbmZpZ3VyYWJsZVByb2R1Y3RBcHBsaWVkQXR0cmlidXRlc0VudGl0aWVzU2VsZWN0b3JzID0gPFQgZXh0ZW5kcyBEYWZmUHJvZHVjdD4oKTogRGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3RFbnRpdGllc01lbW9pemVkU2VsZWN0b3JzID0+IHtcblx0Y29uc3Qge1xuXHRcdHNlbGVjdFByb2R1Y3RTdGF0ZVxuXHR9ID0gZ2V0RGFmZlByb2R1Y3RGZWF0dXJlU2VsZWN0b3I8VD4oKTtcblx0Y29uc3QgYWRhcHRlclNlbGVjdG9ycyA9IGRhZmZDb25maWd1cmFibGVQcm9kdWN0QXBwbGllZEF0dHJpYnV0ZXNFbnRpdGllc0FkYXB0ZXIoKS5nZXRTZWxlY3RvcnMoKTtcblx0LyoqXG5cdCAqIENvbmZpZ3VyYWJsZSBQcm9kdWN0IEVudGl0aWVzIFN0YXRlXG5cdCAqL1xuXHRjb25zdCBzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0QXBwbGllZEF0dHJpYnV0ZXNFbnRpdGllc1N0YXRlID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0UHJvZHVjdFN0YXRlLFxuXHRcdChzdGF0ZTogRGFmZlByb2R1Y3RSZWR1Y2Vyc1N0YXRlPFQ+KSA9PiBzdGF0ZS5jb25maWd1cmFibGVQcm9kdWN0QXR0cmlidXRlc1xuXHQpO1xuXG5cdC8qKlxuXHQgKiBTZWxlY3RvciBmb3IgY29uZmlndXJhYmxlIHByb2R1Y3QgSURzLlxuXHQgKi9cblx0Y29uc3Qgc2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdElkcyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RBcHBsaWVkQXR0cmlidXRlc0VudGl0aWVzU3RhdGUsXG5cdFx0YWRhcHRlclNlbGVjdG9ycy5zZWxlY3RJZHNcblx0KTtcblxuXHQvKipcblx0ICogU2VsZWN0b3IgZm9yIGFsbCBjb25maWd1cmFibGUgcHJvZHVjdCBhcHBsaWVkIGF0dHJpYnV0ZXMgYXMgZW50aXRpZXMgKHNlZSBuZ3J4L2VudGl0eSkuXG5cdCAqL1xuXHRjb25zdCBzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0QXBwbGllZEF0dHJpYnV0ZXNFbnRpdGllcyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RBcHBsaWVkQXR0cmlidXRlc0VudGl0aWVzU3RhdGUsXG5cdFx0YWRhcHRlclNlbGVjdG9ycy5zZWxlY3RFbnRpdGllc1xuXHQpO1xuXG5cdC8qKlxuXHQgKiBTZWxlY3RvciBmb3IgdGhlIHRvdGFsIG51bWJlciBvZiBjb25maWd1cmFibGUgcHJvZHVjdHMuXG5cdCAqL1xuXHRjb25zdCBzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0VG90YWwgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0QXBwbGllZEF0dHJpYnV0ZXNFbnRpdGllc1N0YXRlLFxuXHRcdGFkYXB0ZXJTZWxlY3RvcnMuc2VsZWN0VG90YWxcblx0KTtcblxuXHQvKipcblx0ICogU2VsZWN0b3IgZm9yIHRoZSBhcHBsaWVkIGF0dHJpYnV0ZXMgb2YgYSBwYXJ0aWN1bGFyIGNvbmZpZ3VyYWJsZSBwcm9kdWN0LlxuXHQgKi9cblx0Y29uc3Qgc2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdEFwcGxpZWRBdHRyaWJ1dGVzID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdEFwcGxpZWRBdHRyaWJ1dGVzRW50aXRpZXNTdGF0ZSxcblx0XHQocHJvZHVjdHMsIHByb3BzKSA9PiBwcm9kdWN0cy5lbnRpdGllc1twcm9wcy5pZF0uYXR0cmlidXRlc1xuXHQpO1xuXG5cdGNvbnN0IHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RBcHBsaWVkQXR0cmlidXRlc0FzRGljdGlvbmFyeSA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RBcHBsaWVkQXR0cmlidXRlc0VudGl0aWVzU3RhdGUsXG5cdFx0KHByb2R1Y3RzLCBwcm9wcykgPT4gc2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdEFwcGxpZWRBdHRyaWJ1dGVzLnByb2plY3Rvcihwcm9kdWN0cywgeyBpZDogcHJvcHMuaWQgfSkucmVkdWNlKChhY2MsIGF0dHJpYnV0ZSkgPT4gKHtcblx0XHRcdC4uLmFjYyxcblx0XHRcdFthdHRyaWJ1dGUuY29kZV06IGF0dHJpYnV0ZS52YWx1ZVxuXHRcdH0pLCB7fSlcblx0KVxuXG5cdHJldHVybiB7IFxuXHRcdHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RBcHBsaWVkQXR0cmlidXRlc0VudGl0aWVzU3RhdGUsXG5cdFx0c2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdElkcyxcblx0XHRzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0QXBwbGllZEF0dHJpYnV0ZXNFbnRpdGllcyxcblx0XHRzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0VG90YWwsXG5cdFx0c2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdEFwcGxpZWRBdHRyaWJ1dGVzLFxuXHRcdHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RBcHBsaWVkQXR0cmlidXRlc0FzRGljdGlvbmFyeVxuXHR9XG59XG5cbmV4cG9ydCBjb25zdCBnZXREYWZmQ29uZmlndXJhYmxlUHJvZHVjdEVudGl0aWVzU2VsZWN0b3JzID0gKCgpID0+IHtcblx0bGV0IGNhY2hlO1xuXHRyZXR1cm4gPFQgZXh0ZW5kcyBEYWZmUHJvZHVjdD4oKTogRGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3RFbnRpdGllc01lbW9pemVkU2VsZWN0b3JzID0+IGNhY2hlID0gY2FjaGUgXG5cdFx0PyBjYWNoZSBcblx0XHQ6IGNyZWF0ZUNvbmZpZ3VyYWJsZVByb2R1Y3RBcHBsaWVkQXR0cmlidXRlc0VudGl0aWVzU2VsZWN0b3JzPFQ+KCk7XG59KSgpXG4iXX0=