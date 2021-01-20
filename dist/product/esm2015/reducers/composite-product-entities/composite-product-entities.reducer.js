/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export function daffCompositeProductEntitiesReducer(state = daffCompositeProductAppliedOptionsEntitiesAdapter().getInitialState(), action) {
    /** @type {?} */
    const adapter = daffCompositeProductAppliedOptionsEntitiesAdapter();
    switch (action.type) {
        case DaffProductGridActionTypes.ProductGridLoadSuccessAction:
        case DaffBestSellersActionTypes.BestSellersLoadSuccessAction:
            return adapter.upsertMany(action.payload
                .filter((/**
             * @param {?} product
             * @return {?}
             */
            product => product.type === DaffProductTypeEnum.Composite))
                .map((/**
             * @param {?} product
             * @return {?}
             */
            product => buildCompositeProductAppliedOptionsEntity((/** @type {?} */ ((/** @type {?} */ (product))))))), state);
        case DaffProductActionTypes.ProductLoadSuccessAction:
            if (action.payload.type === DaffProductTypeEnum.Composite) {
                return adapter.upsertOne(buildCompositeProductAppliedOptionsEntity((/** @type {?} */ ((/** @type {?} */ (action.payload))))), state);
            }
            ;
            return state;
        case DaffCompositeProductActionTypes.CompositeProductApplyOptionAction:
            return adapter.upsertOne({
                id: action.id,
                items: Object.assign({}, state.entities[action.id].items, { [action.itemId]: {
                        value: action.optionId,
                        qty: action.qty ? action.qty : 1
                    } })
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
        (acc, item) => (Object.assign({}, acc, { [item.id]: getDefaultOption(item) }))), {})
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
    const defaultOptionIndex = item.options.findIndex((/**
     * @param {?} option
     * @return {?}
     */
    option => option.is_default));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRlLXByb2R1Y3QtZW50aXRpZXMucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9wcm9kdWN0LyIsInNvdXJjZXMiOlsicmVkdWNlcnMvY29tcG9zaXRlLXByb2R1Y3QtZW50aXRpZXMvY29tcG9zaXRlLXByb2R1Y3QtZW50aXRpZXMucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLDBCQUEwQixFQUEwQixNQUFNLG9DQUFvQyxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxzQkFBc0IsRUFBc0IsTUFBTSwrQkFBK0IsQ0FBQztBQUMzRixPQUFPLEVBQUUsMEJBQTBCLEVBQTBCLE1BQU0sb0NBQW9DLENBQUM7QUFDeEcsT0FBTyxFQUFFLGlEQUFpRCxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDakgsT0FBTyxFQUFlLG1CQUFtQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEUsT0FBTyxFQUErQiwrQkFBK0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7Ozs7Ozs7QUFhdkgsTUFBTSxVQUFVLG1DQUFtQyxDQUNqRCxLQUFLLEdBQUcsaURBQWlELEVBQUUsQ0FBQyxlQUFlLEVBQUUsRUFDN0UsTUFBc0g7O1VBQ2pILE9BQU8sR0FBRyxpREFBaUQsRUFBRTtJQUNsRSxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSywwQkFBMEIsQ0FBQyw0QkFBNEIsQ0FBQztRQUMvRCxLQUFLLDBCQUEwQixDQUFDLDRCQUE0QjtZQUMzRCxPQUFPLE9BQU8sQ0FBQyxVQUFVLENBQ3hCLE1BQU0sQ0FBQyxPQUFPO2lCQUNaLE1BQU07Ozs7WUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssbUJBQW1CLENBQUMsU0FBUyxFQUFDO2lCQUNqRSxHQUFHOzs7O1lBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyx5Q0FBeUMsQ0FBQyxtQkFBRyxtQkFBUyxPQUFPLEVBQUEsRUFBQSxDQUFDLEVBQUMsRUFDaEYsS0FBSyxDQUNMLENBQUM7UUFDRCxLQUFLLHNCQUFzQixDQUFDLHdCQUF3QjtZQUNyRCxJQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLG1CQUFtQixDQUFDLFNBQVMsRUFBRTtnQkFDekQsT0FBTyxPQUFPLENBQUMsU0FBUyxDQUN2Qix5Q0FBeUMsQ0FBQyxtQkFBRyxtQkFBUyxNQUFNLENBQUMsT0FBTyxFQUFBLEVBQUEsQ0FBQyxFQUNyRSxLQUFLLENBQ0wsQ0FBQzthQUNGO1lBQUEsQ0FBQztZQUNGLE9BQU8sS0FBSyxDQUFDO1FBQ2QsS0FBSywrQkFBK0IsQ0FBQyxpQ0FBaUM7WUFDckUsT0FBTyxPQUFPLENBQUMsU0FBUyxDQUN2QjtnQkFDQyxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUU7Z0JBQ2IsS0FBSyxvQkFDRCxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQ2xDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO3dCQUNoQixLQUFLLEVBQUUsTUFBTSxDQUFDLFFBQVE7d0JBQ3RCLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNoQyxHQUNEO2FBQ0QsRUFDRCxLQUFLLENBQ0wsQ0FBQztRQUNEO1lBQ0UsT0FBTyxLQUFLLENBQUM7S0FDaEI7QUFDSCxDQUFDOzs7OztBQUVELFNBQVMseUNBQXlDLENBQUMsT0FBNkI7SUFDL0UsT0FBTztRQUNOLEVBQUUsRUFBRSxPQUFPLENBQUMsRUFBRTtRQUNkLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU07Ozs7O1FBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxtQkFDdkMsR0FBRyxJQUNOLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUNoQyxHQUFFLEVBQUUsQ0FBQztLQUNQLENBQUE7QUFDRixDQUFDOzs7Ozs7OztBQVFELFNBQVMsZ0JBQWdCLENBQUMsSUFBOEI7O1VBQ2pELGtCQUFrQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUzs7OztJQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBQztJQUU5RSxJQUFHLGtCQUFrQixHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQzNCLE9BQU87WUFDTixLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUM3RixHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFFBQVE7U0FDOUMsQ0FBQTtLQUNEO1NBQU07UUFDTixPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUM7S0FDbEM7QUFDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW50aXR5U3RhdGUgfSBmcm9tICdAbmdyeC9lbnRpdHknO1xuXG5pbXBvcnQgeyBEYWZmUHJvZHVjdEdyaWRBY3Rpb25UeXBlcywgRGFmZlByb2R1Y3RHcmlkQWN0aW9ucyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvcHJvZHVjdC1ncmlkLmFjdGlvbnMnO1xuaW1wb3J0IHsgRGFmZlByb2R1Y3RBY3Rpb25UeXBlcywgRGFmZlByb2R1Y3RBY3Rpb25zIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9wcm9kdWN0LmFjdGlvbnMnO1xuaW1wb3J0IHsgRGFmZkJlc3RTZWxsZXJzQWN0aW9uVHlwZXMsIERhZmZCZXN0U2VsbGVyc0FjdGlvbnMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2Jlc3Qtc2VsbGVycy5hY3Rpb25zJztcbmltcG9ydCB7IGRhZmZDb21wb3NpdGVQcm9kdWN0QXBwbGllZE9wdGlvbnNFbnRpdGllc0FkYXB0ZXIgfSBmcm9tICcuL2NvbXBvc2l0ZS1wcm9kdWN0LWVudGl0aWVzLXJlZHVjZXItYWRhcHRlcic7XG5pbXBvcnQgeyBEYWZmUHJvZHVjdCwgRGFmZlByb2R1Y3RUeXBlRW51bSB9IGZyb20gJy4uLy4uL21vZGVscy9wcm9kdWN0JztcbmltcG9ydCB7IERhZmZDb21wb3NpdGVQcm9kdWN0QWN0aW9ucywgRGFmZkNvbXBvc2l0ZVByb2R1Y3RBY3Rpb25UeXBlcyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvY29tcG9zaXRlLXByb2R1Y3QuYWN0aW9ucyc7XG5pbXBvcnQgeyBEYWZmQ29tcG9zaXRlUHJvZHVjdCB9IGZyb20gJy4uLy4uL21vZGVscy9jb21wb3NpdGUtcHJvZHVjdCc7XG5pbXBvcnQgeyBEYWZmQ29tcG9zaXRlUHJvZHVjdEVudGl0eSB9IGZyb20gJy4vY29tcG9zaXRlLXByb2R1Y3QtZW50aXR5JztcbmltcG9ydCB7IERhZmZDb21wb3NpdGVQcm9kdWN0SXRlbSB9IGZyb20gJy4uLy4uL21vZGVscy9jb21wb3NpdGUtcHJvZHVjdC1pdGVtJztcbmltcG9ydCB7IERhZmZDb21wb3NpdGVDb25maWd1cmF0aW9uSXRlbSB9IGZyb20gJy4uLy4uL21vZGVscy9jb21wb3NpdGUtY29uZmlndXJhdGlvbi1pdGVtJztcblxuLyoqXG4gKiBSZWR1Y2VyIGZ1bmN0aW9uIHRoYXQgY2F0Y2hlcyBhY3Rpb25zIGFuZCBjaGFuZ2VzL292ZXJ3cml0ZXMgY29tcG9zaXRlIHByb2R1Y3QgZW50aXRpZXMgc3RhdGUuXG4gKiBcbiAqIEBwYXJhbSBzdGF0ZSBjdXJyZW50IFN0YXRlIG9mIHRoZSByZWR1eCBzdG9yZVxuICogQHBhcmFtIGFjdGlvbiBQcm9kdWN0R3JpZCwgQmVzdFNlbGxlcnMsIFByb2R1Y3QsIG9yIENvbXBvc2l0ZSBQcm9kdWN0IGFjdGlvbnNcbiAqIEByZXR1cm5zIFByb2R1Y3QgZW50aXRpZXMgc3RhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRhZmZDb21wb3NpdGVQcm9kdWN0RW50aXRpZXNSZWR1Y2VyPFQgZXh0ZW5kcyBEYWZmUHJvZHVjdCwgViBleHRlbmRzIERhZmZDb21wb3NpdGVQcm9kdWN0PihcbiAgc3RhdGUgPSBkYWZmQ29tcG9zaXRlUHJvZHVjdEFwcGxpZWRPcHRpb25zRW50aXRpZXNBZGFwdGVyKCkuZ2V0SW5pdGlhbFN0YXRlKCksIFxuICBhY3Rpb246IERhZmZQcm9kdWN0R3JpZEFjdGlvbnM8VD4gfCBEYWZmQmVzdFNlbGxlcnNBY3Rpb25zPFQ+IHwgRGFmZlByb2R1Y3RBY3Rpb25zPFQ+IHwgRGFmZkNvbXBvc2l0ZVByb2R1Y3RBY3Rpb25zPFY+KTogRW50aXR5U3RhdGU8RGFmZkNvbXBvc2l0ZVByb2R1Y3RFbnRpdHk+IHtcblx0Y29uc3QgYWRhcHRlciA9IGRhZmZDb21wb3NpdGVQcm9kdWN0QXBwbGllZE9wdGlvbnNFbnRpdGllc0FkYXB0ZXIoKTtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgRGFmZlByb2R1Y3RHcmlkQWN0aW9uVHlwZXMuUHJvZHVjdEdyaWRMb2FkU3VjY2Vzc0FjdGlvbjpcblx0XHRjYXNlIERhZmZCZXN0U2VsbGVyc0FjdGlvblR5cGVzLkJlc3RTZWxsZXJzTG9hZFN1Y2Nlc3NBY3Rpb246XG5cdFx0XHRyZXR1cm4gYWRhcHRlci51cHNlcnRNYW55KFxuXHRcdFx0XHRhY3Rpb24ucGF5bG9hZFxuXHRcdFx0XHRcdC5maWx0ZXIocHJvZHVjdCA9PiBwcm9kdWN0LnR5cGUgPT09IERhZmZQcm9kdWN0VHlwZUVudW0uQ29tcG9zaXRlKVxuXHRcdFx0XHRcdC5tYXAocHJvZHVjdCA9PiBidWlsZENvbXBvc2l0ZVByb2R1Y3RBcHBsaWVkT3B0aW9uc0VudGl0eSg8Vj48dW5rbm93bj5wcm9kdWN0KSksIFxuXHRcdFx0XHRzdGF0ZVxuXHRcdFx0KTtcbiAgICBjYXNlIERhZmZQcm9kdWN0QWN0aW9uVHlwZXMuUHJvZHVjdExvYWRTdWNjZXNzQWN0aW9uOlxuXHRcdFx0aWYoYWN0aW9uLnBheWxvYWQudHlwZSA9PT0gRGFmZlByb2R1Y3RUeXBlRW51bS5Db21wb3NpdGUpIHtcblx0XHRcdFx0cmV0dXJuIGFkYXB0ZXIudXBzZXJ0T25lKFxuXHRcdFx0XHRcdGJ1aWxkQ29tcG9zaXRlUHJvZHVjdEFwcGxpZWRPcHRpb25zRW50aXR5KDxWPjx1bmtub3duPmFjdGlvbi5wYXlsb2FkKSxcblx0XHRcdFx0XHRzdGF0ZVxuXHRcdFx0XHQpO1xuXHRcdFx0fTtcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0XHRjYXNlIERhZmZDb21wb3NpdGVQcm9kdWN0QWN0aW9uVHlwZXMuQ29tcG9zaXRlUHJvZHVjdEFwcGx5T3B0aW9uQWN0aW9uOlxuXHRcdFx0cmV0dXJuIGFkYXB0ZXIudXBzZXJ0T25lKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWQ6IGFjdGlvbi5pZCxcblx0XHRcdFx0XHRpdGVtczoge1xuXHRcdFx0XHRcdFx0Li4uc3RhdGUuZW50aXRpZXNbYWN0aW9uLmlkXS5pdGVtcyxcblx0XHRcdFx0XHRcdFthY3Rpb24uaXRlbUlkXToge1xuXHRcdFx0XHRcdFx0XHR2YWx1ZTogYWN0aW9uLm9wdGlvbklkLFxuXHRcdFx0XHRcdFx0XHRxdHk6IGFjdGlvbi5xdHkgPyBhY3Rpb24ucXR5IDogMVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0c3RhdGVcblx0XHRcdCk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBidWlsZENvbXBvc2l0ZVByb2R1Y3RBcHBsaWVkT3B0aW9uc0VudGl0eShwcm9kdWN0OiBEYWZmQ29tcG9zaXRlUHJvZHVjdCk6IERhZmZDb21wb3NpdGVQcm9kdWN0RW50aXR5IHtcblx0cmV0dXJuIHtcblx0XHRpZDogcHJvZHVjdC5pZCxcblx0XHRpdGVtczogcHJvZHVjdC5pdGVtcy5yZWR1Y2UoKGFjYywgaXRlbSkgPT4gKHtcblx0XHRcdC4uLmFjYyxcblx0XHRcdFtpdGVtLmlkXTogZ2V0RGVmYXVsdE9wdGlvbihpdGVtKVxuXHRcdH0pLCB7fSlcblx0fVxufVxuXG4vKipcbiAqIFNldHMgdGhlIGRlZmF1bHQgaXRlbSBvcHRpb24gdG8gdGhlIHNwZWNpZmllZCBkZWZhdWx0IG9wdGlvbiBpZiBpdCBpcyBpbiBzdG9jay5cbiAqIERvZXMgbm90IHNldCBhIGRlZmF1bHQgb3B0aW9uIGlmIGEgZGVmYXVsdCBpcyBub3Qgc3BlY2lmaWVkLlxuICogRG9lcyBub3Qgc2V0IGEgZGVmYXVsdCBvcHRpb24gYnV0IGRvZXMgc2V0IGEgZGVmYXVsdCBxdHkgaWYgdGhlIGRlZmF1bHQgaXMgb3V0IG9mIHN0b2NrLlxuICogQHBhcmFtIGl0ZW0gYSBEYWZmQ29tcG9zaXRlUHJvZHVjdEl0ZW1cbiAqL1xuZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbihpdGVtOiBEYWZmQ29tcG9zaXRlUHJvZHVjdEl0ZW0pOiBEYWZmQ29tcG9zaXRlQ29uZmlndXJhdGlvbkl0ZW0ge1xuXHRjb25zdCBkZWZhdWx0T3B0aW9uSW5kZXggPSBpdGVtLm9wdGlvbnMuZmluZEluZGV4KG9wdGlvbiA9PiBvcHRpb24uaXNfZGVmYXVsdCk7XG5cblx0aWYoZGVmYXVsdE9wdGlvbkluZGV4ID4gLTEpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dmFsdWU6IGl0ZW0ub3B0aW9uc1tkZWZhdWx0T3B0aW9uSW5kZXhdLmluX3N0b2NrID8gaXRlbS5vcHRpb25zW2RlZmF1bHRPcHRpb25JbmRleF0uaWQgOiBudWxsLFxuXHRcdFx0cXR5OiBpdGVtLm9wdGlvbnNbZGVmYXVsdE9wdGlvbkluZGV4XS5xdWFudGl0eVxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXR1cm4geyB2YWx1ZTogbnVsbCwgcXR5OiBudWxsIH07XG5cdH1cbn1cbiJdfQ==