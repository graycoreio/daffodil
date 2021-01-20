/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export function daffConfigurableProductEntitiesReducer(state = daffConfigurableProductAppliedAttributesEntitiesAdapter().getInitialState(), action) {
    /** @type {?} */
    const adapter = daffConfigurableProductAppliedAttributesEntitiesAdapter();
    switch (action.type) {
        case DaffProductGridActionTypes.ProductGridLoadSuccessAction:
        case DaffBestSellersActionTypes.BestSellersLoadSuccessAction:
            return adapter.upsertMany(action.payload
                .filter((/**
             * @param {?} product
             * @return {?}
             */
            product => product.type === DaffProductTypeEnum.Configurable))
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
    const attributeIndex = currentAttributes.findIndex((/**
     * @param {?} attribute
     * @return {?}
     */
    attribute => attribute.code === appliedAttributeCode));
    /** @type {?} */
    const retainedAttributes = attributeIndex > -1 ? currentAttributes.slice(0, attributeIndex) : currentAttributes;
    return [
        ...retainedAttributes,
        {
            code: appliedAttributeCode,
            value: appliedAttributeValue
        }
    ];
}
/**
 * @param {?} currentAttributes
 * @param {?} appliedAttributeCode
 * @return {?}
 */
function removeAttribute(currentAttributes, appliedAttributeCode) {
    /** @type {?} */
    const index = currentAttributes.findIndex((/**
     * @param {?} attribute
     * @return {?}
     */
    attribute => attribute.code === appliedAttributeCode));
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
    const index = currentAttributes.findIndex((/**
     * @param {?} attribute
     * @return {?}
     */
    attribute => attribute.code === attributeCode));
    return index > -1 && currentAttributes[index].value === attributeValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXByb2R1Y3QtZW50aXRpZXMucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9wcm9kdWN0LyIsInNvdXJjZXMiOlsicmVkdWNlcnMvY29uZmlndXJhYmxlLXByb2R1Y3QtZW50aXRpZXMvY29uZmlndXJhYmxlLXByb2R1Y3QtZW50aXRpZXMucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLDBCQUEwQixFQUEwQixNQUFNLG9DQUFvQyxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxzQkFBc0IsRUFBc0IsTUFBTSwrQkFBK0IsQ0FBQztBQUMzRixPQUFPLEVBQUUsMEJBQTBCLEVBQTBCLE1BQU0sb0NBQW9DLENBQUM7QUFDeEcsT0FBTyxFQUFFLHVEQUF1RCxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDMUgsT0FBTyxFQUFlLG1CQUFtQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEUsT0FBTyxFQUFrQyxrQ0FBa0MsRUFBRSxNQUFNLDRDQUE0QyxDQUFDOzs7Ozs7Ozs7QUFXaEksTUFBTSxVQUFVLHNDQUFzQyxDQUNwRCxLQUFLLEdBQUcsdURBQXVELEVBQUUsQ0FBQyxlQUFlLEVBQUUsRUFDbkYsTUFBeUg7O1VBQ3BILE9BQU8sR0FBRyx1REFBdUQsRUFBRTtJQUN4RSxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSywwQkFBMEIsQ0FBQyw0QkFBNEIsQ0FBQztRQUMvRCxLQUFLLDBCQUEwQixDQUFDLDRCQUE0QjtZQUMzRCxPQUFPLE9BQU8sQ0FBQyxVQUFVLENBQ3hCLE1BQU0sQ0FBQyxPQUFPO2lCQUNaLE1BQU07Ozs7WUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssbUJBQW1CLENBQUMsWUFBWSxFQUFDO2lCQUNwRSxHQUFHLENBQUMsK0NBQStDLENBQUMsRUFDdEQsS0FBSyxDQUNMLENBQUM7UUFDRCxLQUFLLHNCQUFz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QUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUM7QUFDM0UsQ0FBQzs7Ozs7OztBQUVELFNBQVMsbUJBQW1CLENBQUMsaUJBQTJELEVBQUUsYUFBcUIsRUFBRSxjQUFzQjs7VUFDaEksS0FBSyxHQUFHLGlCQUFpQixDQUFDLFNBQVM7Ozs7SUFBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssYUFBYSxFQUFDO0lBRXhGLE9BQU8sS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssS0FBSyxjQUFjLENBQUM7QUFDeEUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudGl0eVN0YXRlIH0gZnJvbSAnQG5ncngvZW50aXR5JztcblxuaW1wb3J0IHsgRGFmZlByb2R1Y3RHcmlkQWN0aW9uVHlwZXMsIERhZmZQcm9kdWN0R3JpZEFjdGlvbnMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL3Byb2R1Y3QtZ3JpZC5hY3Rpb25zJztcbmltcG9ydCB7IERhZmZQcm9kdWN0QWN0aW9uVHlwZXMsIERhZmZQcm9kdWN0QWN0aW9ucyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvcHJvZHVjdC5hY3Rpb25zJztcbmltcG9ydCB7IERhZmZCZXN0U2VsbGVyc0FjdGlvblR5cGVzLCBEYWZmQmVzdFNlbGxlcnNBY3Rpb25zIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9iZXN0LXNlbGxlcnMuYWN0aW9ucyc7XG5pbXBvcnQgeyBkYWZmQ29uZmlndXJhYmxlUHJvZHVjdEFwcGxpZWRBdHRyaWJ1dGVzRW50aXRpZXNBZGFwdGVyIH0gZnJvbSAnLi9jb25maWd1cmFibGUtcHJvZHVjdC1lbnRpdGllcy1yZWR1Y2VyLWFkYXB0ZXInO1xuaW1wb3J0IHsgRGFmZlByb2R1Y3QsIERhZmZQcm9kdWN0VHlwZUVudW0gfSBmcm9tICcuLi8uLi9tb2RlbHMvcHJvZHVjdCc7XG5pbXBvcnQgeyBEYWZmQ29uZmlndXJhYmxlUHJvZHVjdEFjdGlvbnMsIERhZmZDb25maWd1cmFibGVQcm9kdWN0QWN0aW9uVHlwZXMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2NvbmZpZ3VyYWJsZS1wcm9kdWN0LmFjdGlvbnMnO1xuaW1wb3J0IHsgRGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29uZmlndXJhYmxlLXByb2R1Y3QnO1xuaW1wb3J0IHsgRGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3RFbnRpdHksIERhZmZDb25maWd1cmFibGVQcm9kdWN0RW50aXR5QXR0cmlidXRlIH0gZnJvbSAnLi9jb25maWd1cmFibGUtcHJvZHVjdC1lbnRpdHknO1xuXG4vKipcbiAqIFJlZHVjZXIgZnVuY3Rpb24gdGhhdCBjYXRjaGVzIGFjdGlvbnMgYW5kIGNoYW5nZXMvb3ZlcndyaXRlcyBwcm9kdWN0IGVudGl0aWVzIHN0YXRlLlxuICogXG4gKiBAcGFyYW0gc3RhdGUgY3VycmVudCBTdGF0ZSBvZiB0aGUgcmVkdXggc3RvcmVcbiAqIEBwYXJhbSBhY3Rpb24gUHJvZHVjdEdyaWQsIEJlc3RTZWxsZXJzLCBQcm9kdWN0LCBvciBDb25maWd1cmFibGUgUHJvZHVjdCBhY3Rpb25zXG4gKiBAcmV0dXJucyBQcm9kdWN0IGVudGl0aWVzIHN0YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkYWZmQ29uZmlndXJhYmxlUHJvZHVjdEVudGl0aWVzUmVkdWNlcjxUIGV4dGVuZHMgRGFmZlByb2R1Y3QsIFYgZXh0ZW5kcyBEYWZmQ29uZmlndXJhYmxlUHJvZHVjdD4oXG4gIHN0YXRlID0gZGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3RBcHBsaWVkQXR0cmlidXRlc0VudGl0aWVzQWRhcHRlcigpLmdldEluaXRpYWxTdGF0ZSgpLCBcbiAgYWN0aW9uOiBEYWZmUHJvZHVjdEdyaWRBY3Rpb25zPFQ+IHwgRGFmZkJlc3RTZWxsZXJzQWN0aW9uczxUPiB8IERhZmZQcm9kdWN0QWN0aW9uczxUPiB8IERhZmZDb25maWd1cmFibGVQcm9kdWN0QWN0aW9uczxWPik6IEVudGl0eVN0YXRlPERhZmZDb25maWd1cmFibGVQcm9kdWN0RW50aXR5PiB7XG5cdGNvbnN0IGFkYXB0ZXIgPSBkYWZmQ29uZmlndXJhYmxlUHJvZHVjdEFwcGxpZWRBdHRyaWJ1dGVzRW50aXRpZXNBZGFwdGVyKCk7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIERhZmZQcm9kdWN0R3JpZEFjdGlvblR5cGVzLlByb2R1Y3RHcmlkTG9hZFN1Y2Nlc3NBY3Rpb246XG5cdFx0Y2FzZSBEYWZmQmVzdFNlbGxlcnNBY3Rpb25UeXBlcy5CZXN0U2VsbGVyc0xvYWRTdWNjZXNzQWN0aW9uOlxuXHRcdFx0cmV0dXJuIGFkYXB0ZXIudXBzZXJ0TWFueShcblx0XHRcdFx0YWN0aW9uLnBheWxvYWRcblx0XHRcdFx0XHQuZmlsdGVyKHByb2R1Y3QgPT4gcHJvZHVjdC50eXBlID09PSBEYWZmUHJvZHVjdFR5cGVFbnVtLkNvbmZpZ3VyYWJsZSlcblx0XHRcdFx0XHQubWFwKGJ1aWxkQ29uZmlndXJhYmxlUHJvZHVjdEFwcGxpZWRBdHRyaWJ1dGVzRW50aXR5KSwgXG5cdFx0XHRcdHN0YXRlXG5cdFx0XHQpO1xuICAgIGNhc2UgRGFmZlByb2R1Y3RBY3Rpb25UeXBlcy5Qcm9kdWN0TG9hZFN1Y2Nlc3NBY3Rpb246XG5cdFx0XHRpZihhY3Rpb24ucGF5bG9hZC50eXBlID09PSBEYWZmUHJvZHVjdFR5cGVFbnVtLkNvbmZpZ3VyYWJsZSkge1xuXHRcdFx0XHRyZXR1cm4gYWRhcHRlci51cHNlcnRPbmUoXG5cdFx0XHRcdFx0YnVpbGRDb25maWd1cmFibGVQcm9kdWN0QXBwbGllZEF0dHJpYnV0ZXNFbnRpdHkoYWN0aW9uLnBheWxvYWQpLFxuXHRcdFx0XHRcdHN0YXRlXG5cdFx0XHRcdCk7XG5cdFx0XHR9O1xuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHRcdGNhc2UgRGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3RBY3Rpb25UeXBlcy5Db25maWd1cmFibGVQcm9kdWN0QXBwbHlBdHRyaWJ1dGVBY3Rpb246XG5cdFx0XHRyZXR1cm4gYWRhcHRlci51cHNlcnRPbmUoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpZDogYWN0aW9uLmlkLFxuXHRcdFx0XHRcdGF0dHJpYnV0ZXM6IGFwcGx5QXR0cmlidXRlKHN0YXRlLmVudGl0aWVzW2FjdGlvbi5pZF0uYXR0cmlidXRlcywgYWN0aW9uLmF0dHJpYnV0ZUlkLCBhY3Rpb24uYXR0cmlidXRlVmFsdWUpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzdGF0ZVxuXHRcdFx0KTtcblx0XHRjYXNlIERhZmZDb25maWd1cmFibGVQcm9kdWN0QWN0aW9uVHlwZXMuQ29uZmlndXJhYmxlUHJvZHVjdFJlbW92ZUF0dHJpYnV0ZUFjdGlvbjpcblx0XHRcdHJldHVybiBhZGFwdGVyLnVwc2VydE9uZShcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlkOiBhY3Rpb24uaWQsXG5cdFx0XHRcdFx0YXR0cmlidXRlczogcmVtb3ZlQXR0cmlidXRlKHN0YXRlLmVudGl0aWVzW2FjdGlvbi5pZF0uYXR0cmlidXRlcywgYWN0aW9uLmF0dHJpYnV0ZUlkKVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzdGF0ZVxuXHRcdFx0KTtcblx0XHRjYXNlIERhZmZDb25maWd1cmFibGVQcm9kdWN0QWN0aW9uVHlwZXMuQ29uZmlndXJhYmxlUHJvZHVjdFRvZ2dsZUF0dHJpYnV0ZUFjdGlvbjpcblx0XHRcdHJldHVybiBhZGFwdGVyLnVwc2VydE9uZShcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlkOiBhY3Rpb24uaWQsXG5cdFx0XHRcdFx0YXR0cmlidXRlczogaXNBdHRyaWJ1dGVTZWxlY3RlZChzdGF0ZS5lbnRpdGllc1thY3Rpb24uaWRdLmF0dHJpYnV0ZXMsIGFjdGlvbi5hdHRyaWJ1dGVJZCwgYWN0aW9uLmF0dHJpYnV0ZVZhbHVlKSA/XG5cdFx0XHRcdFx0XHRyZW1vdmVBdHRyaWJ1dGUoc3RhdGUuZW50aXRpZXNbYWN0aW9uLmlkXS5hdHRyaWJ1dGVzLCBhY3Rpb24uYXR0cmlidXRlSWQpIDpcblx0XHRcdFx0XHRcdGFwcGx5QXR0cmlidXRlKHN0YXRlLmVudGl0aWVzW2FjdGlvbi5pZF0uYXR0cmlidXRlcywgYWN0aW9uLmF0dHJpYnV0ZUlkLCBhY3Rpb24uYXR0cmlidXRlVmFsdWUpXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHN0YXRlXG5cdFx0XHQpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gYnVpbGRDb25maWd1cmFibGVQcm9kdWN0QXBwbGllZEF0dHJpYnV0ZXNFbnRpdHkocHJvZHVjdDogRGFmZlByb2R1Y3QpOiBEYWZmQ29uZmlndXJhYmxlUHJvZHVjdEVudGl0eSB7XG5cdHJldHVybiB7XG5cdFx0aWQ6IHByb2R1Y3QuaWQsXG5cdFx0YXR0cmlidXRlczogW11cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseUF0dHJpYnV0ZShjdXJyZW50QXR0cmlidXRlczogRGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3RFbnRpdHlBdHRyaWJ1dGVbXSwgYXBwbGllZEF0dHJpYnV0ZUNvZGU6IHN0cmluZywgYXBwbGllZEF0dHJpYnV0ZVZhbHVlOiBzdHJpbmcpOiBEYWZmQ29uZmlndXJhYmxlUHJvZHVjdEVudGl0eUF0dHJpYnV0ZVtdIHtcblx0Y29uc3QgYXR0cmlidXRlSW5kZXggPSBjdXJyZW50QXR0cmlidXRlcy5maW5kSW5kZXgoYXR0cmlidXRlID0+IGF0dHJpYnV0ZS5jb2RlID09PSBhcHBsaWVkQXR0cmlidXRlQ29kZSk7XG5cdGNvbnN0IHJldGFpbmVkQXR0cmlidXRlcyA9IGF0dHJpYnV0ZUluZGV4ID4gLTEgPyBjdXJyZW50QXR0cmlidXRlcy5zbGljZSgwLCBhdHRyaWJ1dGVJbmRleCkgOiBjdXJyZW50QXR0cmlidXRlcztcblxuXHRyZXR1cm4gW1xuXHRcdC4uLnJldGFpbmVkQXR0cmlidXRlcyxcblx0XHR7XG5cdFx0XHRjb2RlOiBhcHBsaWVkQXR0cmlidXRlQ29kZSxcblx0XHRcdHZhbHVlOiBhcHBsaWVkQXR0cmlidXRlVmFsdWVcblx0XHR9XG5cdF1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlKGN1cnJlbnRBdHRyaWJ1dGVzOiBEYWZmQ29uZmlndXJhYmxlUHJvZHVjdEVudGl0eUF0dHJpYnV0ZVtdLCBhcHBsaWVkQXR0cmlidXRlQ29kZTogc3RyaW5nKTogRGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3RFbnRpdHlBdHRyaWJ1dGVbXSB7XG5cdGNvbnN0IGluZGV4ID0gY3VycmVudEF0dHJpYnV0ZXMuZmluZEluZGV4KGF0dHJpYnV0ZSA9PiBhdHRyaWJ1dGUuY29kZSA9PT0gYXBwbGllZEF0dHJpYnV0ZUNvZGUpO1xuXG5cdHJldHVybiBpbmRleCA+IC0xID8gY3VycmVudEF0dHJpYnV0ZXMuc2xpY2UoMCwgaW5kZXgpIDogY3VycmVudEF0dHJpYnV0ZXM7XG59XG5cbmZ1bmN0aW9uIGlzQXR0cmlidXRlU2VsZWN0ZWQoY3VycmVudEF0dHJpYnV0ZXM6IERhZmZDb25maWd1cmFibGVQcm9kdWN0RW50aXR5QXR0cmlidXRlW10sIGF0dHJpYnV0ZUNvZGU6IHN0cmluZywgYXR0cmlidXRlVmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRjb25zdCBpbmRleCA9IGN1cnJlbnRBdHRyaWJ1dGVzLmZpbmRJbmRleChhdHRyaWJ1dGUgPT4gYXR0cmlidXRlLmNvZGUgPT09IGF0dHJpYnV0ZUNvZGUpO1xuXG5cdHJldHVybiBpbmRleCA+IC0xICYmIGN1cnJlbnRBdHRyaWJ1dGVzW2luZGV4XS52YWx1ZSA9PT0gYXR0cmlidXRlVmFsdWU7XG59XG4iXX0=