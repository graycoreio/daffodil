/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DaffProductGridActionTypes } from '../../actions/product-grid.actions';
import { DaffProductActionTypes } from '../../actions/product.actions';
import { DaffBestSellersActionTypes } from '../../actions/best-sellers.actions';
import { daffCompositeProductAppliedOptionsEntitiesAdapter } from './composite-product-entities-reducer-adapter';
import { DaffProductTypeEnum } from '../../models/product';
import { DaffCompositeProductActionTypes } from '../../actions/composite-product.actions';
/**
 * Reducer function that catches actions and changes/overwrites composite product entities state.
 *
 * @template T, V
 * @param {?=} state current State of the redux store
 * @param {?=} action ProductGrid, BestSellers, Product, or Composite Product actions
 * @return {?} Product entities state
 */
export function daffCompositeProductEntitiesReducer(state, action) {
    var _a;
    if (state === void 0) { state = daffCompositeProductAppliedOptionsEntitiesAdapter().getInitialState(); }
    /** @type {?} */
    var adapter = daffCompositeProductAppliedOptionsEntitiesAdapter();
    switch (action.type) {
        case DaffProductGridActionTypes.ProductGridLoadSuccessAction:
        case DaffBestSellersActionTypes.BestSellersLoadSuccessAction:
            return adapter.upsertMany(action.payload
                .filter((/**
             * @param {?} product
             * @return {?}
             */
            function (product) { return product.type === DaffProductTypeEnum.Composite; }))
                .map((/**
             * @param {?} product
             * @return {?}
             */
            function (product) { return buildCompositeProductAppliedOptionsEntity((/** @type {?} */ ((/** @type {?} */ (product))))); })), state);
        case DaffProductActionTypes.ProductLoadSuccessAction:
            if (action.payload.type === DaffProductTypeEnum.Composite) {
                return adapter.upsertOne(buildCompositeProductAppliedOptionsEntity((/** @type {?} */ ((/** @type {?} */ (action.payload))))), state);
            }
            ;
            return state;
        case DaffCompositeProductActionTypes.CompositeProductApplyOptionAction:
            return adapter.upsertOne({
                id: action.id,
                items: tslib_1.__assign({}, state.entities[action.id].items, (_a = {}, _a[action.itemId] = {
                    value: action.optionId,
                    qty: action.qty ? action.qty : 1
                }, _a))
            }, state);
        default:
            return state;
    }
}
/**
 * @param {?} product
 * @return {?}
 */
function buildCompositeProductAppliedOptionsEntity(product) {
    return {
        id: product.id,
        items: product.items.reduce((/**
         * @param {?} acc
         * @param {?} item
         * @return {?}
         */
        function (acc, item) {
            var _a;
            return (tslib_1.__assign({}, acc, (_a = {}, _a[item.id] = getDefaultOption(item), _a)));
        }), {})
    };
}
/**
 * Sets the default item option to the specified default option if it is in stock.
 * Does not set a default option if a default is not specified.
 * Does not set a default option but does set a default qty if the default is out of stock.
 * @param {?} item a DaffCompositeProductItem
 * @return {?}
 */
function getDefaultOption(item) {
    /** @type {?} */
    var defaultOptionIndex = item.options.findIndex((/**
     * @param {?} option
     * @return {?}
     */
    function (option) { return option.is_default; }));
    if (defaultOptionIndex > -1) {
        return {
            value: item.options[defaultOptionIndex].in_stock ? item.options[defaultOptionIndex].id : null,
            qty: item.options[defaultOptionIndex].quantity
        };
    }
    else {
        return { value: null, qty: null };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRlLXByb2R1Y3QtZW50aXRpZXMucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9wcm9kdWN0LyIsInNvdXJjZXMiOlsicmVkdWNlcnMvY29tcG9zaXRlLXByb2R1Y3QtZW50aXRpZXMvY29tcG9zaXRlLXByb2R1Y3QtZW50aXRpZXMucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSwwQkFBMEIsRUFBMEIsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RyxPQUFPLEVBQUUsc0JBQXNCLEVBQXNCLE1BQU0sK0JBQStCLENBQUM7QUFDM0YsT0FBTyxFQUFFLDBCQUEwQixFQUEwQixNQUFNLG9DQUFvQyxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxpREFBaUQsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2pILE9BQU8sRUFBZSxtQkFBbUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hFLE9BQU8sRUFBK0IsK0JBQStCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7Ozs7Ozs7O0FBYXZILE1BQU0sVUFBVSxtQ0FBbUMsQ0FDakQsS0FBNkUsRUFDN0UsTUFBc0g7O0lBRHRILHNCQUFBLEVBQUEsUUFBUSxpREFBaUQsRUFBRSxDQUFDLGVBQWUsRUFBRTs7UUFFeEUsT0FBTyxHQUFHLGlEQUFpRCxFQUFFO0lBQ2xFLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLDBCQUEwQixDQUFDLDRCQUE0QixDQUFDO1FBQy9ELEtBQUssMEJBQTBCLENBQUMsNEJBQTRCO1lBQzNELE9BQU8sT0FBTyxDQUFDLFVBQVUsQ0FDeEIsTUFBTSxDQUFDLE9BQU87aUJBQ1osTUFBTTs7OztZQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLElBQUksS0FBSyxtQkFBbUIsQ0FBQyxTQUFTLEVBQTlDLENBQThDLEVBQUM7aUJBQ2pFLEdBQUc7Ozs7WUFBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLHlDQUF5QyxDQUFDLG1CQUFHLG1CQUFTLE9BQU8sRUFBQSxFQUFBLENBQUMsRUFBOUQsQ0FBOEQsRUFBQyxFQUNoRixLQUFLLENBQ0wsQ0FBQztRQUNELEtBQUssc0JBQXNCLENBQUMsd0JBQXdCO1lBQ3JELElBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssbUJBQW1CLENBQUMsU0FBUyxFQUFFO2dCQUN6RCxPQUFPLE9BQU8sQ0FBQyxTQUFTLENBQ3ZCLHlDQUF5QyxDQUFDLG1CQUFHLG1CQUFTLE1BQU0sQ0FBQyxPQUFPLEVBQUEsRUFBQSxDQUFDLEVBQ3JFLEtBQUssQ0FDTCxDQUFDO2FBQ0Y7WUFBQSxDQUFDO1lBQ0YsT0FBTyxLQUFLLENBQUM7UUFDZCxLQUFLLCtCQUErQixDQUFDLGlDQUFpQztZQUNyRSxPQUFPLE9BQU8sQ0FBQyxTQUFTLENBQ3ZCO2dCQUNDLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRTtnQkFDYixLQUFLLHVCQUNELEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssZUFDakMsTUFBTSxDQUFDLE1BQU0sSUFBRztvQkFDaEIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxRQUFRO29CQUN0QixHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDaEMsTUFDRDthQUNELEVBQ0QsS0FBSyxDQUNMLENBQUM7UUFDRDtZQUNFLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0FBQ0gsQ0FBQzs7Ozs7QUFFRCxTQUFTLHlDQUF5QyxDQUFDLE9BQTZCO0lBQy9FLE9BQU87UUFDTixFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUU7UUFDZCxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNOzs7OztRQUFDLFVBQUMsR0FBRyxFQUFFLElBQUk7O1lBQUssT0FBQSxzQkFDdkMsR0FBRyxlQUNMLElBQUksQ0FBQyxFQUFFLElBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQ2hDO1FBSHlDLENBR3pDLEdBQUUsRUFBRSxDQUFDO0tBQ1AsQ0FBQTtBQUNGLENBQUM7Ozs7Ozs7O0FBUUQsU0FBUyxnQkFBZ0IsQ0FBQyxJQUE4Qjs7UUFDakQsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTOzs7O0lBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsVUFBVSxFQUFqQixDQUFpQixFQUFDO0lBRTlFLElBQUcsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDM0IsT0FBTztZQUNOLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQzdGLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUMsUUFBUTtTQUM5QyxDQUFBO0tBQ0Q7U0FBTTtRQUNOLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQztLQUNsQztBQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnRpdHlTdGF0ZSB9IGZyb20gJ0BuZ3J4L2VudGl0eSc7XG5cbmltcG9ydCB7IERhZmZQcm9kdWN0R3JpZEFjdGlvblR5cGVzLCBEYWZmUHJvZHVjdEdyaWRBY3Rpb25zIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9wcm9kdWN0LWdyaWQuYWN0aW9ucyc7XG5pbXBvcnQgeyBEYWZmUHJvZHVjdEFjdGlvblR5cGVzLCBEYWZmUHJvZHVjdEFjdGlvbnMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL3Byb2R1Y3QuYWN0aW9ucyc7XG5pbXBvcnQgeyBEYWZmQmVzdFNlbGxlcnNBY3Rpb25UeXBlcywgRGFmZkJlc3RTZWxsZXJzQWN0aW9ucyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvYmVzdC1zZWxsZXJzLmFjdGlvbnMnO1xuaW1wb3J0IHsgZGFmZkNvbXBvc2l0ZVByb2R1Y3RBcHBsaWVkT3B0aW9uc0VudGl0aWVzQWRhcHRlciB9IGZyb20gJy4vY29tcG9zaXRlLXByb2R1Y3QtZW50aXRpZXMtcmVkdWNlci1hZGFwdGVyJztcbmltcG9ydCB7IERhZmZQcm9kdWN0LCBEYWZmUHJvZHVjdFR5cGVFbnVtIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Byb2R1Y3QnO1xuaW1wb3J0IHsgRGFmZkNvbXBvc2l0ZVByb2R1Y3RBY3Rpb25zLCBEYWZmQ29tcG9zaXRlUHJvZHVjdEFjdGlvblR5cGVzIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jb21wb3NpdGUtcHJvZHVjdC5hY3Rpb25zJztcbmltcG9ydCB7IERhZmZDb21wb3NpdGVQcm9kdWN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbXBvc2l0ZS1wcm9kdWN0JztcbmltcG9ydCB7IERhZmZDb21wb3NpdGVQcm9kdWN0RW50aXR5IH0gZnJvbSAnLi9jb21wb3NpdGUtcHJvZHVjdC1lbnRpdHknO1xuaW1wb3J0IHsgRGFmZkNvbXBvc2l0ZVByb2R1Y3RJdGVtIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbXBvc2l0ZS1wcm9kdWN0LWl0ZW0nO1xuaW1wb3J0IHsgRGFmZkNvbXBvc2l0ZUNvbmZpZ3VyYXRpb25JdGVtIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbXBvc2l0ZS1jb25maWd1cmF0aW9uLWl0ZW0nO1xuXG4vKipcbiAqIFJlZHVjZXIgZnVuY3Rpb24gdGhhdCBjYXRjaGVzIGFjdGlvbnMgYW5kIGNoYW5nZXMvb3ZlcndyaXRlcyBjb21wb3NpdGUgcHJvZHVjdCBlbnRpdGllcyBzdGF0ZS5cbiAqIFxuICogQHBhcmFtIHN0YXRlIGN1cnJlbnQgU3RhdGUgb2YgdGhlIHJlZHV4IHN0b3JlXG4gKiBAcGFyYW0gYWN0aW9uIFByb2R1Y3RHcmlkLCBCZXN0U2VsbGVycywgUHJvZHVjdCwgb3IgQ29tcG9zaXRlIFByb2R1Y3QgYWN0aW9uc1xuICogQHJldHVybnMgUHJvZHVjdCBlbnRpdGllcyBzdGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGFmZkNvbXBvc2l0ZVByb2R1Y3RFbnRpdGllc1JlZHVjZXI8VCBleHRlbmRzIERhZmZQcm9kdWN0LCBWIGV4dGVuZHMgRGFmZkNvbXBvc2l0ZVByb2R1Y3Q+KFxuICBzdGF0ZSA9IGRhZmZDb21wb3NpdGVQcm9kdWN0QXBwbGllZE9wdGlvbnNFbnRpdGllc0FkYXB0ZXIoKS5nZXRJbml0aWFsU3RhdGUoKSwgXG4gIGFjdGlvbjogRGFmZlByb2R1Y3RHcmlkQWN0aW9uczxUPiB8IERhZmZCZXN0U2VsbGVyc0FjdGlvbnM8VD4gfCBEYWZmUHJvZHVjdEFjdGlvbnM8VD4gfCBEYWZmQ29tcG9zaXRlUHJvZHVjdEFjdGlvbnM8Vj4pOiBFbnRpdHlTdGF0ZTxEYWZmQ29tcG9zaXRlUHJvZHVjdEVudGl0eT4ge1xuXHRjb25zdCBhZGFwdGVyID0gZGFmZkNvbXBvc2l0ZVByb2R1Y3RBcHBsaWVkT3B0aW9uc0VudGl0aWVzQWRhcHRlcigpO1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBEYWZmUHJvZHVjdEdyaWRBY3Rpb25UeXBlcy5Qcm9kdWN0R3JpZExvYWRTdWNjZXNzQWN0aW9uOlxuXHRcdGNhc2UgRGFmZkJlc3RTZWxsZXJzQWN0aW9uVHlwZXMuQmVzdFNlbGxlcnNMb2FkU3VjY2Vzc0FjdGlvbjpcblx0XHRcdHJldHVybiBhZGFwdGVyLnVwc2VydE1hbnkoXG5cdFx0XHRcdGFjdGlvbi5wYXlsb2FkXG5cdFx0XHRcdFx0LmZpbHRlcihwcm9kdWN0ID0+IHByb2R1Y3QudHlwZSA9PT0gRGFmZlByb2R1Y3RUeXBlRW51bS5Db21wb3NpdGUpXG5cdFx0XHRcdFx0Lm1hcChwcm9kdWN0ID0+IGJ1aWxkQ29tcG9zaXRlUHJvZHVjdEFwcGxpZWRPcHRpb25zRW50aXR5KDxWPjx1bmtub3duPnByb2R1Y3QpKSwgXG5cdFx0XHRcdHN0YXRlXG5cdFx0XHQpO1xuICAgIGNhc2UgRGFmZlByb2R1Y3RBY3Rpb25UeXBlcy5Qcm9kdWN0TG9hZFN1Y2Nlc3NBY3Rpb246XG5cdFx0XHRpZihhY3Rpb24ucGF5bG9hZC50eXBlID09PSBEYWZmUHJvZHVjdFR5cGVFbnVtLkNvbXBvc2l0ZSkge1xuXHRcdFx0XHRyZXR1cm4gYWRhcHRlci51cHNlcnRPbmUoXG5cdFx0XHRcdFx0YnVpbGRDb21wb3NpdGVQcm9kdWN0QXBwbGllZE9wdGlvbnNFbnRpdHkoPFY+PHVua25vd24+YWN0aW9uLnBheWxvYWQpLFxuXHRcdFx0XHRcdHN0YXRlXG5cdFx0XHRcdCk7XG5cdFx0XHR9O1xuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHRcdGNhc2UgRGFmZkNvbXBvc2l0ZVByb2R1Y3RBY3Rpb25UeXBlcy5Db21wb3NpdGVQcm9kdWN0QXBwbHlPcHRpb25BY3Rpb246XG5cdFx0XHRyZXR1cm4gYWRhcHRlci51cHNlcnRPbmUoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpZDogYWN0aW9uLmlkLFxuXHRcdFx0XHRcdGl0ZW1zOiB7XG5cdFx0XHRcdFx0XHQuLi5zdGF0ZS5lbnRpdGllc1thY3Rpb24uaWRdLml0ZW1zLFxuXHRcdFx0XHRcdFx0W2FjdGlvbi5pdGVtSWRdOiB7XG5cdFx0XHRcdFx0XHRcdHZhbHVlOiBhY3Rpb24ub3B0aW9uSWQsXG5cdFx0XHRcdFx0XHRcdHF0eTogYWN0aW9uLnF0eSA/IGFjdGlvbi5xdHkgOiAxXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzdGF0ZVxuXHRcdFx0KTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGJ1aWxkQ29tcG9zaXRlUHJvZHVjdEFwcGxpZWRPcHRpb25zRW50aXR5KHByb2R1Y3Q6IERhZmZDb21wb3NpdGVQcm9kdWN0KTogRGFmZkNvbXBvc2l0ZVByb2R1Y3RFbnRpdHkge1xuXHRyZXR1cm4ge1xuXHRcdGlkOiBwcm9kdWN0LmlkLFxuXHRcdGl0ZW1zOiBwcm9kdWN0Lml0ZW1zLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiAoe1xuXHRcdFx0Li4uYWNjLFxuXHRcdFx0W2l0ZW0uaWRdOiBnZXREZWZhdWx0T3B0aW9uKGl0ZW0pXG5cdFx0fSksIHt9KVxuXHR9XG59XG5cbi8qKlxuICogU2V0cyB0aGUgZGVmYXVsdCBpdGVtIG9wdGlvbiB0byB0aGUgc3BlY2lmaWVkIGRlZmF1bHQgb3B0aW9uIGlmIGl0IGlzIGluIHN0b2NrLlxuICogRG9lcyBub3Qgc2V0IGEgZGVmYXVsdCBvcHRpb24gaWYgYSBkZWZhdWx0IGlzIG5vdCBzcGVjaWZpZWQuXG4gKiBEb2VzIG5vdCBzZXQgYSBkZWZhdWx0IG9wdGlvbiBidXQgZG9lcyBzZXQgYSBkZWZhdWx0IHF0eSBpZiB0aGUgZGVmYXVsdCBpcyBvdXQgb2Ygc3RvY2suXG4gKiBAcGFyYW0gaXRlbSBhIERhZmZDb21wb3NpdGVQcm9kdWN0SXRlbVxuICovXG5mdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9uKGl0ZW06IERhZmZDb21wb3NpdGVQcm9kdWN0SXRlbSk6IERhZmZDb21wb3NpdGVDb25maWd1cmF0aW9uSXRlbSB7XG5cdGNvbnN0IGRlZmF1bHRPcHRpb25JbmRleCA9IGl0ZW0ub3B0aW9ucy5maW5kSW5kZXgob3B0aW9uID0+IG9wdGlvbi5pc19kZWZhdWx0KTtcblxuXHRpZihkZWZhdWx0T3B0aW9uSW5kZXggPiAtMSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR2YWx1ZTogaXRlbS5vcHRpb25zW2RlZmF1bHRPcHRpb25JbmRleF0uaW5fc3RvY2sgPyBpdGVtLm9wdGlvbnNbZGVmYXVsdE9wdGlvbkluZGV4XS5pZCA6IG51bGwsXG5cdFx0XHRxdHk6IGl0ZW0ub3B0aW9uc1tkZWZhdWx0T3B0aW9uSW5kZXhdLnF1YW50aXR5XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJldHVybiB7IHZhbHVlOiBudWxsLCBxdHk6IG51bGwgfTtcblx0fVxufVxuIl19