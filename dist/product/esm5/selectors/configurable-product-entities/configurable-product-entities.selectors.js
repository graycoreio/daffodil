/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var createConfigurableProductAppliedAttributesEntitiesSelectors = (/**
 * @template T
 * @return {?}
 */
function () {
    var selectProductState = getDaffProductFeatureSelector().selectProductState;
    /** @type {?} */
    var adapterSelectors = daffConfigurableProductAppliedAttributesEntitiesAdapter().getSelectors();
    /**
     * Configurable Product Entities State
     * @type {?}
     */
    var selectConfigurableProductAppliedAttributesEntitiesState = createSelector(selectProductState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.configurableProductAttributes; }));
    /**
     * Selector for configurable product IDs.
     * @type {?}
     */
    var selectConfigurableProductIds = createSelector(selectConfigurableProductAppliedAttributesEntitiesState, adapterSelectors.selectIds);
    /**
     * Selector for all configurable product applied attributes as entities (see ngrx/entity).
     * @type {?}
     */
    var selectConfigurableProductAppliedAttributesEntities = createSelector(selectConfigurableProductAppliedAttributesEntitiesState, adapterSelectors.selectEntities);
    /**
     * Selector for the total number of configurable products.
     * @type {?}
     */
    var selectConfigurableProductTotal = createSelector(selectConfigurableProductAppliedAttributesEntitiesState, adapterSelectors.selectTotal);
    /**
     * Selector for the applied attributes of a particular configurable product.
     * @type {?}
     */
    var selectConfigurableProductAppliedAttributes = createSelector(selectConfigurableProductAppliedAttributesEntitiesState, (/**
     * @param {?} products
     * @param {?} props
     * @return {?}
     */
    function (products, props) { return products.entities[props.id].attributes; }));
    /** @type {?} */
    var selectConfigurableProductAppliedAttributesAsDictionary = createSelector(selectConfigurableProductAppliedAttributesEntitiesState, (/**
     * @param {?} products
     * @param {?} props
     * @return {?}
     */
    function (products, props) { return selectConfigurableProductAppliedAttributes.projector(products, { id: props.id }).reduce((/**
     * @param {?} acc
     * @param {?} attribute
     * @return {?}
     */
    function (acc, attribute) {
        var _a;
        return (tslib_1.__assign({}, acc, (_a = {}, _a[attribute.code] = attribute.value, _a)));
    }), {}); }));
    return {
        selectConfigurableProductAppliedAttributesEntitiesState: selectConfigurableProductAppliedAttributesEntitiesState,
        selectConfigurableProductIds: selectConfigurableProductIds,
        selectConfigurableProductAppliedAttributesEntities: selectConfigurableProductAppliedAttributesEntities,
        selectConfigurableProductTotal: selectConfigurableProductTotal,
        selectConfigurableProductAppliedAttributes: selectConfigurableProductAppliedAttributes,
        selectConfigurableProductAppliedAttributesAsDictionary: selectConfigurableProductAppliedAttributesAsDictionary
    };
});
var ɵ0 = createConfigurableProductAppliedAttributesEntitiesSelectors;
var ɵ1 = /**
 * @return {?}
 */
function () {
    /** @type {?} */
    var cache;
    return (/**
     * @template T
     * @return {?}
     */
    function () { return cache = cache
        ? cache
        : createConfigurableProductAppliedAttributesEntitiesSelectors(); });
};
/** @type {?} */
export var getDaffConfigurableProductEntitiesSelectors = ((ɵ1))();
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXByb2R1Y3QtZW50aXRpZXMuc2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3Byb2R1Y3QvIiwic291cmNlcyI6WyJzZWxlY3RvcnMvY29uZmlndXJhYmxlLXByb2R1Y3QtZW50aXRpZXMvY29uZmlndXJhYmxlLXByb2R1Y3QtZW50aXRpZXMuc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBK0MsTUFBTSxhQUFhLENBQUM7QUFHMUYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFHNUUsT0FBTyxFQUFFLHVEQUF1RCxFQUFFLE1BQU0sNEZBQTRGLENBQUM7Ozs7QUFHckssc0VBT0M7OztJQU5BLG1IQUE4SDs7SUFDOUgsd0ZBQTBHOztJQUMxRyw4R0FBcUk7O0lBQ3JJLDBGQUFpRTs7SUFDakUsc0dBQWdJOztJQUNoSSxrSEFBc0g7OztJQUdqSCwyREFBMkQ7Ozs7QUFBRztJQUVsRSxJQUFBLHVFQUFrQjs7UUFFYixnQkFBZ0IsR0FBRyx1REFBdUQsRUFBRSxDQUFDLFlBQVksRUFBRTs7Ozs7UUFJM0YsdURBQXVELEdBQUcsY0FBYyxDQUM3RSxrQkFBa0I7Ozs7SUFDbEIsVUFBQyxLQUFrQyxJQUFLLE9BQUEsS0FBSyxDQUFDLDZCQUE2QixFQUFuQyxDQUFtQyxFQUMzRTs7Ozs7UUFLSyw0QkFBNEIsR0FBRyxjQUFjLENBQ2xELHVEQUF1RCxFQUN2RCxnQkFBZ0IsQ0FBQyxTQUFTLENBQzFCOzs7OztRQUtLLGtEQUFrRCxHQUFHLGNBQWMsQ0FDeEUsdURBQXVELEVBQ3ZELGdCQUFnQixDQUFDLGNBQWMsQ0FDL0I7Ozs7O1FBS0ssOEJBQThCLEdBQUcsY0FBYyxDQUNwRCx1REFBdUQsRUFDdkQsZ0JBQWdCLENBQUMsV0FBVyxDQUM1Qjs7Ozs7UUFLSywwQ0FBMEMsR0FBRyxjQUFjLENBQ2hFLHVEQUF1RDs7Ozs7SUFDdkQsVUFBQyxRQUFRLEVBQUUsS0FBSyxJQUFLLE9BQUEsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUF0QyxDQUFzQyxFQUMzRDs7UUFFSyxzREFBc0QsR0FBRyxjQUFjLENBQzVFLHVEQUF1RDs7Ozs7SUFDdkQsVUFBQyxRQUFRLEVBQUUsS0FBSyxJQUFLLE9BQUEsMENBQTBDLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNOzs7OztJQUFDLFVBQUMsR0FBRyxFQUFFLFNBQVM7O1FBQUssT0FBQSxzQkFDN0gsR0FBRyxlQUNMLFNBQVMsQ0FBQyxJQUFJLElBQUcsU0FBUyxDQUFDLEtBQUssT0FDaEM7SUFIK0gsQ0FHL0gsR0FBRSxFQUFFLENBQUMsRUFIYyxDQUdkLEVBQ1A7SUFFRCxPQUFPO1FBQ04sdURBQXVELHlEQUFBO1FBQ3ZELDRCQUE0Qiw4QkFBQTtRQUM1QixrREFBa0Qsb0RBQUE7UUFDbEQsOEJBQThCLGdDQUFBO1FBQzlCLDBDQUEwQyw0Q0FBQTtRQUMxQyxzREFBc0Qsd0RBQUE7S0FDdEQsQ0FBQTtBQUNGLENBQUMsQ0FBQTs7Ozs7QUFFMkQ7O1FBQ3ZELEtBQUs7SUFDVDs7OztJQUFPLGNBQStFLE9BQUEsS0FBSyxHQUFHLEtBQUs7UUFDbEcsQ0FBQyxDQUFDLEtBQUs7UUFDUCxDQUFDLENBQUMsMkRBQTJELEVBQUssRUFGbUIsQ0FFbkIsRUFBQztBQUNyRSxDQUFDOztBQUxELE1BQU0sS0FBTywyQ0FBMkMsR0FBRyxNQUt6RCxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3JXaXRoUHJvcHMgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBFbnRpdHlTdGF0ZSwgRGljdGlvbmFyeSB9IGZyb20gJ0BuZ3J4L2VudGl0eSc7XG5cbmltcG9ydCB7IGdldERhZmZQcm9kdWN0RmVhdHVyZVNlbGVjdG9yIH0gZnJvbSAnLi4vcHJvZHVjdC1mZWF0dXJlLnNlbGVjdG9yJztcbmltcG9ydCB7IERhZmZQcm9kdWN0UmVkdWNlcnNTdGF0ZSB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3Byb2R1Y3QtcmVkdWNlcnMtc3RhdGUuaW50ZXJmYWNlJztcbmltcG9ydCB7IERhZmZQcm9kdWN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Byb2R1Y3QnO1xuaW1wb3J0IHsgZGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3RBcHBsaWVkQXR0cmlidXRlc0VudGl0aWVzQWRhcHRlciB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL2NvbmZpZ3VyYWJsZS1wcm9kdWN0LWVudGl0aWVzL2NvbmZpZ3VyYWJsZS1wcm9kdWN0LWVudGl0aWVzLXJlZHVjZXItYWRhcHRlcic7XG5pbXBvcnQgeyBEYWZmQ29uZmlndXJhYmxlUHJvZHVjdEVudGl0eSwgRGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3RFbnRpdHlBdHRyaWJ1dGUgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9jb25maWd1cmFibGUtcHJvZHVjdC1lbnRpdGllcy9jb25maWd1cmFibGUtcHJvZHVjdC1lbnRpdHknO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhZmZDb25maWd1cmFibGVQcm9kdWN0RW50aXRpZXNNZW1vaXplZFNlbGVjdG9ycyB7XG5cdHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RBcHBsaWVkQXR0cmlidXRlc0VudGl0aWVzU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBFbnRpdHlTdGF0ZTxEYWZmQ29uZmlndXJhYmxlUHJvZHVjdEVudGl0eT4+O1xuXHRzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0SWRzOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgRW50aXR5U3RhdGU8RGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3RFbnRpdHk+WydpZHMnXT47XG5cdHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RBcHBsaWVkQXR0cmlidXRlc0VudGl0aWVzOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgRW50aXR5U3RhdGU8RGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3RFbnRpdHk+WydlbnRpdGllcyddPjtcblx0c2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdFRvdGFsOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgbnVtYmVyPjtcblx0c2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdEFwcGxpZWRBdHRyaWJ1dGVzOiBNZW1vaXplZFNlbGVjdG9yV2l0aFByb3BzPG9iamVjdCwgb2JqZWN0LCBEYWZmQ29uZmlndXJhYmxlUHJvZHVjdEVudGl0eUF0dHJpYnV0ZVtdPjtcblx0c2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdEFwcGxpZWRBdHRyaWJ1dGVzQXNEaWN0aW9uYXJ5OiBNZW1vaXplZFNlbGVjdG9yV2l0aFByb3BzPG9iamVjdCwgb2JqZWN0LCBEaWN0aW9uYXJ5PHN0cmluZz4+O1xufVxuXG5jb25zdCBjcmVhdGVDb25maWd1cmFibGVQcm9kdWN0QXBwbGllZEF0dHJpYnV0ZXNFbnRpdGllc1NlbGVjdG9ycyA9IDxUIGV4dGVuZHMgRGFmZlByb2R1Y3Q+KCk6IERhZmZDb25maWd1cmFibGVQcm9kdWN0RW50aXRpZXNNZW1vaXplZFNlbGVjdG9ycyA9PiB7XG5cdGNvbnN0IHtcblx0XHRzZWxlY3RQcm9kdWN0U3RhdGVcblx0fSA9IGdldERhZmZQcm9kdWN0RmVhdHVyZVNlbGVjdG9yPFQ+KCk7XG5cdGNvbnN0IGFkYXB0ZXJTZWxlY3RvcnMgPSBkYWZmQ29uZmlndXJhYmxlUHJvZHVjdEFwcGxpZWRBdHRyaWJ1dGVzRW50aXRpZXNBZGFwdGVyKCkuZ2V0U2VsZWN0b3JzKCk7XG5cdC8qKlxuXHQgKiBDb25maWd1cmFibGUgUHJvZHVjdCBFbnRpdGllcyBTdGF0ZVxuXHQgKi9cblx0Y29uc3Qgc2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdEFwcGxpZWRBdHRyaWJ1dGVzRW50aXRpZXNTdGF0ZSA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdFByb2R1Y3RTdGF0ZSxcblx0XHQoc3RhdGU6IERhZmZQcm9kdWN0UmVkdWNlcnNTdGF0ZTxUPikgPT4gc3RhdGUuY29uZmlndXJhYmxlUHJvZHVjdEF0dHJpYnV0ZXNcblx0KTtcblxuXHQvKipcblx0ICogU2VsZWN0b3IgZm9yIGNvbmZpZ3VyYWJsZSBwcm9kdWN0IElEcy5cblx0ICovXG5cdGNvbnN0IHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RJZHMgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0QXBwbGllZEF0dHJpYnV0ZXNFbnRpdGllc1N0YXRlLFxuXHRcdGFkYXB0ZXJTZWxlY3RvcnMuc2VsZWN0SWRzXG5cdCk7XG5cblx0LyoqXG5cdCAqIFNlbGVjdG9yIGZvciBhbGwgY29uZmlndXJhYmxlIHByb2R1Y3QgYXBwbGllZCBhdHRyaWJ1dGVzIGFzIGVudGl0aWVzIChzZWUgbmdyeC9lbnRpdHkpLlxuXHQgKi9cblx0Y29uc3Qgc2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdEFwcGxpZWRBdHRyaWJ1dGVzRW50aXRpZXMgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0QXBwbGllZEF0dHJpYnV0ZXNFbnRpdGllc1N0YXRlLFxuXHRcdGFkYXB0ZXJTZWxlY3RvcnMuc2VsZWN0RW50aXRpZXNcblx0KTtcblxuXHQvKipcblx0ICogU2VsZWN0b3IgZm9yIHRoZSB0b3RhbCBudW1iZXIgb2YgY29uZmlndXJhYmxlIHByb2R1Y3RzLlxuXHQgKi9cblx0Y29uc3Qgc2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdFRvdGFsID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdEFwcGxpZWRBdHRyaWJ1dGVzRW50aXRpZXNTdGF0ZSxcblx0XHRhZGFwdGVyU2VsZWN0b3JzLnNlbGVjdFRvdGFsXG5cdCk7XG5cblx0LyoqXG5cdCAqIFNlbGVjdG9yIGZvciB0aGUgYXBwbGllZCBhdHRyaWJ1dGVzIG9mIGEgcGFydGljdWxhciBjb25maWd1cmFibGUgcHJvZHVjdC5cblx0ICovXG5cdGNvbnN0IHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RBcHBsaWVkQXR0cmlidXRlcyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RBcHBsaWVkQXR0cmlidXRlc0VudGl0aWVzU3RhdGUsXG5cdFx0KHByb2R1Y3RzLCBwcm9wcykgPT4gcHJvZHVjdHMuZW50aXRpZXNbcHJvcHMuaWRdLmF0dHJpYnV0ZXNcblx0KTtcblxuXHRjb25zdCBzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0QXBwbGllZEF0dHJpYnV0ZXNBc0RpY3Rpb25hcnkgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0QXBwbGllZEF0dHJpYnV0ZXNFbnRpdGllc1N0YXRlLFxuXHRcdChwcm9kdWN0cywgcHJvcHMpID0+IHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RBcHBsaWVkQXR0cmlidXRlcy5wcm9qZWN0b3IocHJvZHVjdHMsIHsgaWQ6IHByb3BzLmlkIH0pLnJlZHVjZSgoYWNjLCBhdHRyaWJ1dGUpID0+ICh7XG5cdFx0XHQuLi5hY2MsXG5cdFx0XHRbYXR0cmlidXRlLmNvZGVdOiBhdHRyaWJ1dGUudmFsdWVcblx0XHR9KSwge30pXG5cdClcblxuXHRyZXR1cm4geyBcblx0XHRzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0QXBwbGllZEF0dHJpYnV0ZXNFbnRpdGllc1N0YXRlLFxuXHRcdHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RJZHMsXG5cdFx0c2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdEFwcGxpZWRBdHRyaWJ1dGVzRW50aXRpZXMsXG5cdFx0c2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdFRvdGFsLFxuXHRcdHNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RBcHBsaWVkQXR0cmlidXRlcyxcblx0XHRzZWxlY3RDb25maWd1cmFibGVQcm9kdWN0QXBwbGllZEF0dHJpYnV0ZXNBc0RpY3Rpb25hcnlcblx0fVxufVxuXG5leHBvcnQgY29uc3QgZ2V0RGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3RFbnRpdGllc1NlbGVjdG9ycyA9ICgoKSA9PiB7XG5cdGxldCBjYWNoZTtcblx0cmV0dXJuIDxUIGV4dGVuZHMgRGFmZlByb2R1Y3Q+KCk6IERhZmZDb25maWd1cmFibGVQcm9kdWN0RW50aXRpZXNNZW1vaXplZFNlbGVjdG9ycyA9PiBjYWNoZSA9IGNhY2hlIFxuXHRcdD8gY2FjaGUgXG5cdFx0OiBjcmVhdGVDb25maWd1cmFibGVQcm9kdWN0QXBwbGllZEF0dHJpYnV0ZXNFbnRpdGllc1NlbGVjdG9yczxUPigpO1xufSkoKVxuIl19