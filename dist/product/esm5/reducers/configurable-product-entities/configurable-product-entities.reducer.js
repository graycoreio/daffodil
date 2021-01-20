/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DaffProductGridActionTypes } from '../../actions/product-grid.actions';
import { DaffProductActionTypes } from '../../actions/product.actions';
import { DaffBestSellersActionTypes } from '../../actions/best-sellers.actions';
import { daffConfigurableProductAppliedAttributesEntitiesAdapter } from './configurable-product-entities-reducer-adapter';
import { DaffProductTypeEnum } from '../../models/product';
import { DaffConfigurableProductActionTypes } from '../../actions/configurable-product.actions';
/**
 * Reducer function that catches actions and changes/overwrites product entities state.
 *
 * @template T, V
 * @param {?=} state current State of the redux store
 * @param {?=} action ProductGrid, BestSellers, Product, or Configurable Product actions
 * @return {?} Product entities state
 */
export function daffConfigurableProductEntitiesReducer(state, action) {
    if (state === void 0) { state = daffConfigurableProductAppliedAttributesEntitiesAdapter().getInitialState(); }
    /** @type {?} */
    var adapter = daffConfigurableProductAppliedAttributesEntitiesAdapter();
    switch (action.type) {
        case DaffProductGridActionTypes.ProductGridLoadSuccessAction:
        case DaffBestSellersActionTypes.BestSellersLoadSuccessAction:
            return adapter.upsertMany(action.payload
                .filter((/**
             * @param {?} product
             * @return {?}
             */
            function (product) { return product.type === DaffProductTypeEnum.Configurable; }))
                .map(buildConfigurableProductAppliedAttributesEntity), state);
        case DaffProductActionTypes.ProductLoadSuccessAction:
            if (action.payload.type === DaffProductTypeEnum.Configurable) {
                return adapter.upsertOne(buildConfigurableProductAppliedAttributesEntity(action.payload), state);
            }
            ;
            return state;
        case DaffConfigurableProductActionTypes.ConfigurableProductApplyAttributeAction:
            return adapter.upsertOne({
                id: action.id,
                attributes: applyAttribute(state.entities[action.id].attributes, action.attributeId, action.attributeValue),
            }, state);
        case DaffConfigurableProductActionTypes.ConfigurableProductRemoveAttributeAction:
            return adapter.upsertOne({
                id: action.id,
                attributes: removeAttribute(state.entities[action.id].attributes, action.attributeId)
            }, state);
        case DaffConfigurableProductActionTypes.ConfigurableProductToggleAttributeAction:
            return adapter.upsertOne({
                id: action.id,
                attributes: isAttributeSelected(state.entities[action.id].attributes, action.attributeId, action.attributeValue) ?
                    removeAttribute(state.entities[action.id].attributes, action.attributeId) :
                    applyAttribute(state.entities[action.id].attributes, action.attributeId, action.attributeValue)
            }, state);
        default:
            return state;
    }
}
/**
 * @param {?} product
 * @return {?}
 */
function buildConfigurableProductAppliedAttributesEntity(product) {
    return {
        id: product.id,
        attributes: []
    };
}
/**
 * @param {?} currentAttributes
 * @param {?} appliedAttributeCode
 * @param {?} appliedAttributeValue
 * @return {?}
 */
function applyAttribute(currentAttributes, appliedAttributeCode, appliedAttributeValue) {
    /** @type {?} */
    var attributeIndex = currentAttributes.findIndex((/**
     * @param {?} attribute
     * @return {?}
     */
    function (attribute) { return attribute.code === appliedAttributeCode; }));
    /** @type {?} */
    var retainedAttributes = attributeIndex > -1 ? currentAttributes.slice(0, attributeIndex) : currentAttributes;
    return tslib_1.__spread(retainedAttributes, [
        {
            code: appliedAttributeCode,
            value: appliedAttributeValue
        }
    ]);
}
/**
 * @param {?} currentAttributes
 * @param {?} appliedAttributeCode
 * @return {?}
 */
function removeAttribute(currentAttributes, appliedAttributeCode) {
    /** @type {?} */
    var index = currentAttributes.findIndex((/**
     * @param {?} attribute
     * @return {?}
     */
    function (attribute) { return attribute.code === appliedAttributeCode; }));
    return index > -1 ? currentAttributes.slice(0, index) : currentAttributes;
}
/**
 * @param {?} currentAttributes
 * @param {?} attributeCode
 * @param {?} attributeValue
 * @return {?}
 */
function isAttributeSelected(currentAttributes, attributeCode, attributeValue) {
    /** @type {?} */
    var index = currentAttributes.findIndex((/**
     * @param {?} attribute
     * @return {?}
     */
    function (attribute) { return attribute.code === attributeCode; }));
    return index > -1 && currentAttributes[index].value === attributeValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXByb2R1Y3QtZW50aXRpZXMucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9wcm9kdWN0LyIsInNvdXJjZXMiOlsicmVkdWNlcnMvY29uZmlndXJhYmxlLXByb2R1Y3QtZW50aXRpZXMvY29uZmlndXJhYmxlLXByb2R1Y3QtZW50aXRpZXMucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSwwQkFBMEIsRUFBMEIsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RyxPQUFPLEVBQUUsc0JBQXNCLEVBQXNCLE1BQU0sK0JBQStCLENBQUM7QUFDM0YsT0FBTyxFQUFFLDBCQUEwQixFQUEwQixNQUFNLG9DQUFvQyxDQUFDO0FBQ3hHLE9BQU8sRUFBRSx1REFBdUQsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzFILE9BQU8sRUFBZSxtQkFBbUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hFLE9BQU8sRUFBa0Msa0NBQWtDLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7Ozs7Ozs7O0FBV2hJLE1BQU0sVUFBVSxzQ0FBc0MsQ0FDcEQsS0FBbUYsRUFDbkYsTUFBeUg7SUFEekgsc0JBQUEsRUFBQSxRQUFRLHVEQUF1RCxFQUFFLENBQUMsZUFBZSxFQUFFOztRQUU5RSxPQUFPLEdBQUcsdURBQXVELEVBQUU7SUFDeEUsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssMEJBQTBCLENBQUMsNEJBQTRCLENBQUM7UUFDL0QsS0FBSywwQkFBMEIsQ0FBQyw0QkFBNEI7WUFDM0QsT0FBTyxPQUFPLENBQUMsVUFBVSxDQUN4QixNQUFNLENBQUMsT0FBTztpQkFDWixNQUFNOzs7O1lBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsSUFBSSxLQUFLLG1CQUFtQixDQUFDLFlBQVksRUFBakQsQ0FBaUQsRUFBQztpQkFDcEUsR0FBRyxDQUFDLCtDQUErQyxDQUFDLEVBQ3RE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QUFLLG9CQUFvQixFQUF2QyxDQUF1QyxFQUFDO0lBRS9GLE9BQU8sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztBQUMzRSxDQUFDOzs7Ozs7O0FBRUQsU0FBUyxtQkFBbUIsQ0FBQyxpQkFBMkQsRUFBRSxhQUFxQixFQUFFLGNBQXNCOztRQUNoSSxLQUFLLEdBQUcsaUJBQWlCLENBQUMsU0FBUzs7OztJQUFDLFVBQUEsU0FBUyxJQUFJLE9BQUEsU0FBUyxDQUFDLElBQUksS0FBSyxhQUFhLEVBQWhDLENBQWdDLEVBQUM7SUFFeEYsT0FBTyxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxLQUFLLGNBQWMsQ0FBQztBQUN4RSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW50aXR5U3RhdGUgfSBmcm9tICdAbmdyeC9lbnRpdHknO1xuXG5pbXBvcnQgeyBEYWZmUHJvZHVjdEdyaWRBY3Rpb25UeXBlcywgRGFmZlByb2R1Y3RHcmlkQWN0aW9ucyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvcHJvZHVjdC1ncmlkLmFjdGlvbnMnO1xuaW1wb3J0IHsgRGFmZlByb2R1Y3RBY3Rpb25UeXBlcywgRGFmZlByb2R1Y3RBY3Rpb25zIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9wcm9kdWN0LmFjdGlvbnMnO1xuaW1wb3J0IHsgRGFmZkJlc3RTZWxsZXJzQWN0aW9uVHlwZXMsIERhZmZCZXN0U2VsbGVyc0FjdGlvbnMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2Jlc3Qtc2VsbGVycy5hY3Rpb25zJztcbmltcG9ydCB7IGRhZmZDb25maWd1cmFibGVQcm9kdWN0QXBwbGllZEF0dHJpYnV0ZXNFbnRpdGllc0FkYXB0ZXIgfSBmcm9tICcuL2NvbmZpZ3VyYWJsZS1wcm9kdWN0LWVudGl0aWVzLXJlZHVjZXItYWRhcHRlcic7XG5pbXBvcnQgeyBEYWZmUHJvZHVjdCwgRGFmZlByb2R1Y3RUeXBlRW51bSB9IGZyb20gJy4uLy4uL21vZGVscy9wcm9kdWN0JztcbmltcG9ydCB7IERhZmZDb25maWd1cmFibGVQcm9kdWN0QWN0aW9ucywgRGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3RBY3Rpb25UeXBlcyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvY29uZmlndXJhYmxlLXByb2R1Y3QuYWN0aW9ucyc7XG5pbXBvcnQgeyBEYWZmQ29uZmlndXJhYmxlUHJvZHVjdCB9IGZyb20gJy4uLy4uL21vZGVscy9jb25maWd1cmFibGUtcHJvZHVjdCc7XG5pbXBvcnQgeyBEYWZmQ29uZmlndXJhYmxlUHJvZHVjdEVudGl0eSwgRGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3RFbnRpdHlBdHRyaWJ1dGUgfSBmcm9tICcuL2NvbmZpZ3VyYWJsZS1wcm9kdWN0LWVudGl0eSc7XG5cbi8qKlxuICogUmVkdWNlciBmdW5jdGlvbiB0aGF0IGNhdGNoZXMgYWN0aW9ucyBhbmQgY2hhbmdlcy9vdmVyd3JpdGVzIHByb2R1Y3QgZW50aXRpZXMgc3RhdGUuXG4gKiBcbiAqIEBwYXJhbSBzdGF0ZSBjdXJyZW50IFN0YXRlIG9mIHRoZSByZWR1eCBzdG9yZVxuICogQHBhcmFtIGFjdGlvbiBQcm9kdWN0R3JpZCwgQmVzdFNlbGxlcnMsIFByb2R1Y3QsIG9yIENvbmZpZ3VyYWJsZSBQcm9kdWN0IGFjdGlvbnNcbiAqIEByZXR1cm5zIFByb2R1Y3QgZW50aXRpZXMgc3RhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRhZmZDb25maWd1cmFibGVQcm9kdWN0RW50aXRpZXNSZWR1Y2VyPFQgZXh0ZW5kcyBEYWZmUHJvZHVjdCwgViBleHRlbmRzIERhZmZDb25maWd1cmFibGVQcm9kdWN0PihcbiAgc3RhdGUgPSBkYWZmQ29uZmlndXJhYmxlUHJvZHVjdEFwcGxpZWRBdHRyaWJ1dGVzRW50aXRpZXNBZGFwdGVyKCkuZ2V0SW5pdGlhbFN0YXRlKCksIFxuICBhY3Rpb246IERhZmZQcm9kdWN0R3JpZEFjdGlvbnM8VD4gfCBEYWZmQmVzdFNlbGxlcnNBY3Rpb25zPFQ+IHwgRGFmZlByb2R1Y3RBY3Rpb25zPFQ+IHwgRGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3RBY3Rpb25zPFY+KTogRW50aXR5U3RhdGU8RGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3RFbnRpdHk+IHtcblx0Y29uc3QgYWRhcHRlciA9IGRhZmZDb25maWd1cmFibGVQcm9kdWN0QXBwbGllZEF0dHJpYnV0ZXNFbnRpdGllc0FkYXB0ZXIoKTtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgRGFmZlByb2R1Y3RHcmlkQWN0aW9uVHlwZXMuUHJvZHVjdEdyaWRMb2FkU3VjY2Vzc0FjdGlvbjpcblx0XHRjYXNlIERhZmZCZXN0U2VsbGVyc0FjdGlvblR5cGVzLkJlc3RTZWxsZXJzTG9hZFN1Y2Nlc3NBY3Rpb246XG5cdFx0XHRyZXR1cm4gYWRhcHRlci51cHNlcnRNYW55KFxuXHRcdFx0XHRhY3Rpb24ucGF5bG9hZFxuXHRcdFx0XHRcdC5maWx0ZXIocHJvZHVjdCA9PiBwcm9kdWN0LnR5cGUgPT09IERhZmZQcm9kdWN0VHlwZUVudW0uQ29uZmlndXJhYmxlKVxuXHRcdFx0XHRcdC5tYXAoYnVpbGRDb25maWd1cmFibGVQcm9kdWN0QXBwbGllZEF0dHJpYnV0ZXNFbnRpdHkpLCBcblx0XHRcdFx0c3RhdGVcblx0XHRcdCk7XG4gICAgY2FzZSBEYWZmUHJvZHVjdEFjdGlvblR5cGVzLlByb2R1Y3RMb2FkU3VjY2Vzc0FjdGlvbjpcblx0XHRcdGlmKGFjdGlvbi5wYXlsb2FkLnR5cGUgPT09IERhZmZQcm9kdWN0VHlwZUVudW0uQ29uZmlndXJhYmxlKSB7XG5cdFx0XHRcdHJldHVybiBhZGFwdGVyLnVwc2VydE9uZShcblx0XHRcdFx0XHRidWlsZENvbmZpZ3VyYWJsZVByb2R1Y3RBcHBsaWVkQXR0cmlidXRlc0VudGl0eShhY3Rpb24ucGF5bG9hZCksXG5cdFx0XHRcdFx0c3RhdGVcblx0XHRcdFx0KTtcblx0XHRcdH07XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdFx0Y2FzZSBEYWZmQ29uZmlndXJhYmxlUHJvZHVjdEFjdGlvblR5cGVzLkNvbmZpZ3VyYWJsZVByb2R1Y3RBcHBseUF0dHJpYnV0ZUFjdGlvbjpcblx0XHRcdHJldHVybiBhZGFwdGVyLnVwc2VydE9uZShcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlkOiBhY3Rpb24uaWQsXG5cdFx0XHRcdFx0YXR0cmlidXRlczogYXBwbHlBdHRyaWJ1dGUoc3RhdGUuZW50aXRpZXNbYWN0aW9uLmlkXS5hdHRyaWJ1dGVzLCBhY3Rpb24uYXR0cmlidXRlSWQsIGFjdGlvbi5hdHRyaWJ1dGVWYWx1ZSksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHN0YXRlXG5cdFx0XHQpO1xuXHRcdGNhc2UgRGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3RBY3Rpb25UeXBlcy5Db25maWd1cmFibGVQcm9kdWN0UmVtb3ZlQXR0cmlidXRlQWN0aW9uOlxuXHRcdFx0cmV0dXJuIGFkYXB0ZXIudXBzZXJ0T25lKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWQ6IGFjdGlvbi5pZCxcblx0XHRcdFx0XHRhdHRyaWJ1dGVzOiByZW1vdmVBdHRyaWJ1dGUoc3RhdGUuZW50aXRpZXNbYWN0aW9uLmlkXS5hdHRyaWJ1dGVzLCBhY3Rpb24uYXR0cmlidXRlSWQpXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHN0YXRlXG5cdFx0XHQpO1xuXHRcdGNhc2UgRGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3RBY3Rpb25UeXBlcy5Db25maWd1cmFibGVQcm9kdWN0VG9nZ2xlQXR0cmlidXRlQWN0aW9uOlxuXHRcdFx0cmV0dXJuIGFkYXB0ZXIudXBzZXJ0T25lKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWQ6IGFjdGlvbi5pZCxcblx0XHRcdFx0XHRhdHRyaWJ1dGVzOiBpc0F0dHJpYnV0ZVNlbGVjdGVkKHN0YXRlLmVudGl0aWVzW2FjdGlvbi5pZF0uYXR0cmlidXRlcywgYWN0aW9uLmF0dHJpYnV0ZUlkLCBhY3Rpb24uYXR0cmlidXRlVmFsdWUpID9cblx0XHRcdFx0XHRcdHJlbW92ZUF0dHJpYnV0ZShzdGF0ZS5lbnRpdGllc1thY3Rpb24uaWRdLmF0dHJpYnV0ZXMsIGFjdGlvbi5hdHRyaWJ1dGVJZCkgOlxuXHRcdFx0XHRcdFx0YXBwbHlBdHRyaWJ1dGUoc3RhdGUuZW50aXRpZXNbYWN0aW9uLmlkXS5hdHRyaWJ1dGVzLCBhY3Rpb24uYXR0cmlidXRlSWQsIGFjdGlvbi5hdHRyaWJ1dGVWYWx1ZSlcblx0XHRcdFx0fSxcblx0XHRcdFx0c3RhdGVcblx0XHRcdCk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBidWlsZENvbmZpZ3VyYWJsZVByb2R1Y3RBcHBsaWVkQXR0cmlidXRlc0VudGl0eShwcm9kdWN0OiBEYWZmUHJvZHVjdCk6IERhZmZDb25maWd1cmFibGVQcm9kdWN0RW50aXR5IHtcblx0cmV0dXJuIHtcblx0XHRpZDogcHJvZHVjdC5pZCxcblx0XHRhdHRyaWJ1dGVzOiBbXVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5QXR0cmlidXRlKGN1cnJlbnRBdHRyaWJ1dGVzOiBEYWZmQ29uZmlndXJhYmxlUHJvZHVjdEVudGl0eUF0dHJpYnV0ZVtdLCBhcHBsaWVkQXR0cmlidXRlQ29kZTogc3RyaW5nLCBhcHBsaWVkQXR0cmlidXRlVmFsdWU6IHN0cmluZyk6IERhZmZDb25maWd1cmFibGVQcm9kdWN0RW50aXR5QXR0cmlidXRlW10ge1xuXHRjb25zdCBhdHRyaWJ1dGVJbmRleCA9IGN1cnJlbnRBdHRyaWJ1dGVzLmZpbmRJbmRleChhdHRyaWJ1dGUgPT4gYXR0cmlidXRlLmNvZGUgPT09IGFwcGxpZWRBdHRyaWJ1dGVDb2RlKTtcblx0Y29uc3QgcmV0YWluZWRBdHRyaWJ1dGVzID0gYXR0cmlidXRlSW5kZXggPiAtMSA/IGN1cnJlbnRBdHRyaWJ1dGVzLnNsaWNlKDAsIGF0dHJpYnV0ZUluZGV4KSA6IGN1cnJlbnRBdHRyaWJ1dGVzO1xuXG5cdHJldHVybiBbXG5cdFx0Li4ucmV0YWluZWRBdHRyaWJ1dGVzLFxuXHRcdHtcblx0XHRcdGNvZGU6IGFwcGxpZWRBdHRyaWJ1dGVDb2RlLFxuXHRcdFx0dmFsdWU6IGFwcGxpZWRBdHRyaWJ1dGVWYWx1ZVxuXHRcdH1cblx0XVxufVxuXG5mdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGUoY3VycmVudEF0dHJpYnV0ZXM6IERhZmZDb25maWd1cmFibGVQcm9kdWN0RW50aXR5QXR0cmlidXRlW10sIGFwcGxpZWRBdHRyaWJ1dGVDb2RlOiBzdHJpbmcpOiBEYWZmQ29uZmlndXJhYmxlUHJvZHVjdEVudGl0eUF0dHJpYnV0ZVtdIHtcblx0Y29uc3QgaW5kZXggPSBjdXJyZW50QXR0cmlidXRlcy5maW5kSW5kZXgoYXR0cmlidXRlID0+IGF0dHJpYnV0ZS5jb2RlID09PSBhcHBsaWVkQXR0cmlidXRlQ29kZSk7XG5cblx0cmV0dXJuIGluZGV4ID4gLTEgPyBjdXJyZW50QXR0cmlidXRlcy5zbGljZSgwLCBpbmRleCkgOiBjdXJyZW50QXR0cmlidXRlcztcbn1cblxuZnVuY3Rpb24gaXNBdHRyaWJ1dGVTZWxlY3RlZChjdXJyZW50QXR0cmlidXRlczogRGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3RFbnRpdHlBdHRyaWJ1dGVbXSwgYXR0cmlidXRlQ29kZTogc3RyaW5nLCBhdHRyaWJ1dGVWYWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdGNvbnN0IGluZGV4ID0gY3VycmVudEF0dHJpYnV0ZXMuZmluZEluZGV4KGF0dHJpYnV0ZSA9PiBhdHRyaWJ1dGUuY29kZSA9PT0gYXR0cmlidXRlQ29kZSk7XG5cblx0cmV0dXJuIGluZGV4ID4gLTEgJiYgY3VycmVudEF0dHJpYnV0ZXNbaW5kZXhdLnZhbHVlID09PSBhdHRyaWJ1dGVWYWx1ZTtcbn1cbiJdfQ==