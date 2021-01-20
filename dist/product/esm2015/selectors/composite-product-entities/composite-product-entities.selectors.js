/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getDaffProductFeatureSelector } from '../product-feature.selector';
import { DaffProductTypeEnum } from '../../models/product';
import { daffCompositeProductAppliedOptionsEntitiesAdapter } from '../../reducers/composite-product-entities/composite-product-entities-reducer-adapter';
import { getDaffProductEntitiesSelectors } from '../product-entities/product-entities.selectors';
/**
 * @record
 */
export function DaffCompositeProductEntitiesMemoizedSelectors() { }
if (false) {
    /** @type {?} */
    DaffCompositeProductEntitiesMemoizedSelectors.prototype.selectCompositeProductAppliedOptionsEntitiesState;
    /** @type {?} */
    DaffCompositeProductEntitiesMemoizedSelectors.prototype.selectCompositeProductIds;
    /** @type {?} */
    DaffCompositeProductEntitiesMemoizedSelectors.prototype.selectCompositeProductAppliedOptionsEntities;
    /** @type {?} */
    DaffCompositeProductEntitiesMemoizedSelectors.prototype.selectCompositeProductTotal;
    /** @type {?} */
    DaffCompositeProductEntitiesMemoizedSelectors.prototype.selectCompositeProductAppliedOptions;
    /** @type {?} */
    DaffCompositeProductEntitiesMemoizedSelectors.prototype.selectIsCompositeProductItemRequired;
}
/** @type {?} */
const createCompositeProductAppliedOptionsEntitiesSelectors = (/**
 * @template T
 * @return {?}
 */
() => {
    const { selectProductState } = getDaffProductFeatureSelector();
    const { selectProductEntities, selectProduct, } = getDaffProductEntitiesSelectors();
    /** @type {?} */
    const adapterSelectors = daffCompositeProductAppliedOptionsEntitiesAdapter().getSelectors();
    /**
     * Composite Product Entities State
     * @type {?}
     */
    const selectCompositeProductAppliedOptionsEntitiesState = createSelector(selectProductState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.compositeProductOptions));
    /**
     * Selector for composite product IDs.
     * @type {?}
     */
    const selectCompositeProductIds = createSelector(selectCompositeProductAppliedOptionsEntitiesState, adapterSelectors.selectIds);
    /**
     * Selector for all composite product applied attributes as entities (see ngrx/entity).
     * @type {?}
     */
    const selectCompositeProductAppliedOptionsEntities = createSelector(selectCompositeProductAppliedOptionsEntitiesState, adapterSelectors.selectEntities);
    /**
     * Selector for the total number of composite products.
     * @type {?}
     */
    const selectCompositeProductTotal = createSelector(selectCompositeProductAppliedOptionsEntitiesState, adapterSelectors.selectTotal);
    /**
     * Selector for the applied attributes of a particular composite product.
     * @type {?}
     */
    const selectCompositeProductAppliedOptions = createSelector(selectProductEntities, selectCompositeProductAppliedOptionsEntitiesState, (/**
     * @param {?} products
     * @param {?} appliedOptions
     * @param {?} props
     * @return {?}
     */
    (products, appliedOptions, props) => {
        /** @type {?} */
        const product = selectProduct.projector(products, { id: props.id });
        if (product.type !== DaffProductTypeEnum.Composite) {
            return undefined;
        }
        return ((/** @type {?} */ (product))).items.reduce((/**
         * @param {?} acc
         * @param {?} item
         * @return {?}
         */
        (acc, item) => (Object.assign({}, acc, { [item.id]: appliedOptions.entities[product.id].items[item.id].value ? Object.assign({}, item.options.find((/**
             * @param {?} option
             * @return {?}
             */
            option => option.id === appliedOptions.entities[product.id].items[item.id].value)), { quantity: appliedOptions.entities[product.id].items[item.id].qty }) : null }))), {});
    }));
    /** @type {?} */
    const selectIsCompositeProductItemRequired = createSelector(selectProductEntities, (/**
     * @param {?} products
     * @param {?} props
     * @return {?}
     */
    (products, props) => {
        /** @type {?} */
        const product = selectProduct.projector(products, { id: props.id });
        if (product.type !== DaffProductTypeEnum.Composite) {
            return undefined;
        }
        /** @type {?} */
        const productItem = ((/** @type {?} */ (product))).items.find((/**
         * @param {?} item
         * @return {?}
         */
        item => item.id === props.item_id));
        return productItem ? productItem.required : null;
    }));
    return {
        selectCompositeProductAppliedOptionsEntitiesState,
        selectCompositeProductIds,
        selectCompositeProductAppliedOptionsEntities,
        selectCompositeProductTotal,
        selectCompositeProductAppliedOptions,
        selectIsCompositeProductItemRequired
    };
});
const ɵ0 = createCompositeProductAppliedOptionsEntitiesSelectors;
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
        : createCompositeProductAppliedOptionsEntitiesSelectors());
};
/** @type {?} */
export const getDaffCompositeProductEntitiesSelectors = ((ɵ1))();
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRlLXByb2R1Y3QtZW50aXRpZXMuc2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3Byb2R1Y3QvIiwic291cmNlcyI6WyJzZWxlY3RvcnMvY29tcG9zaXRlLXByb2R1Y3QtZW50aXRpZXMvY29tcG9zaXRlLXByb2R1Y3QtZW50aXRpZXMuc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUErQyxNQUFNLGFBQWEsQ0FBQztBQUcxRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUU1RSxPQUFPLEVBQWUsbUJBQW1CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsaURBQWlELEVBQUUsTUFBTSxzRkFBc0YsQ0FBQztBQUV6SixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQzs7OztBQUlqRyxtRUFPQzs7O0lBTkEsMEdBQXFIOztJQUNySCxrRkFBb0c7O0lBQ3BHLHFHQUE0SDs7SUFDNUgsb0ZBQThEOztJQUM5RCw2RkFBNEg7O0lBQzVILDZGQUE2Sjs7O01BR3hKLHFEQUFxRDs7OztBQUFHLEdBQXlFLEVBQUU7VUFDbEksRUFDTCxrQkFBa0IsRUFDbEIsR0FBRyw2QkFBNkIsRUFBSztVQUNoQyxFQUNMLHFCQUFxQixFQUNyQixhQUFhLEdBQ2IsR0FBRywrQkFBK0IsRUFBRTs7VUFDL0IsZ0JBQWdCLEdBQUcsaURBQWlELEVBQUUsQ0FBQyxZQUFZLEVBQUU7Ozs7O1VBSXJGLGlEQUFpRCxHQUFHLGNBQWMsQ0FDdkUsa0JBQWtCOzs7O0lBQ2xCLENBQUMsS0FBa0MsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLHVCQUF1QixFQUNyRTs7Ozs7VUFLSyx5QkFBeUIsR0FBRyxjQUFjLENBQy9DLGlEQUFpRCxFQUNqRCxnQkFBZ0IsQ0FBQyxTQUFTLENBQzFCOzs7OztVQUtLLDRDQUE0QyxHQUFHLGNBQWMsQ0FDbEUsaURBQWlELEVBQ2pELGdCQUFnQixDQUFDLGNBQWMsQ0FDL0I7Ozs7O1VBS0ssMkJBQTJCLEdBQUcsY0FBYyxDQUNqRCxpREFBaUQsRUFDakQsZ0JBQWdCLENBQUMsV0FBVyxDQUM1Qjs7Ozs7VUFLSyxvQ0FBb0MsR0FBRyxjQUFjLENBQzFELHFCQUFxQixFQUNyQixpREFBaUQ7Ozs7OztJQUNqRCxDQUFDLFFBQVEsRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLEVBQUU7O2NBQzdCLE9BQU8sR0FBRyxhQUFhLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDbkUsSUFBRyxPQUFPLENBQUMsSUFBSSxLQUFLLG1CQUFtQixDQUFDLFNBQVMsRUFBRTtZQUNsRCxPQUFPLFNBQVMsQ0FBQztTQUNqQjtRQUVELE9BQU8sQ0FBQyxtQkFBc0IsT0FBTyxFQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTTs7Ozs7UUFBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLG1CQUM5RCxHQUFHLElBQ04sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsY0FBYyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxtQkFDakUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJOzs7O1lBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLGNBQWMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFDLElBQ3RHLFFBQVEsRUFBRSxjQUFjLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFDL0QsQ0FBQyxDQUFDLElBQUksSUFDUixHQUFFLEVBQUUsQ0FBQyxDQUFBO0lBQ1IsQ0FBQyxFQUNEOztVQUVLLG9DQUFvQyxHQUFHLGNBQWMsQ0FDMUQscUJBQXFCOzs7OztJQUNyQixDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFBRTs7Y0FDYixPQUFPLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ25FLElBQUcsT0FBTyxDQUFDLElBQUksS0FBSyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUU7WUFDbEQsT0FBTyxTQUFTLENBQUM7U0FDakI7O2NBQ0ssV0FBVyxHQUFHLENBQUMsbUJBQXNCLE9BQU8sRUFBQSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUk7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssS0FBSyxDQUFDLE9BQU8sRUFBQztRQUVqRyxPQUFPLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFBO0lBQ2pELENBQUMsRUFDRDtJQUVELE9BQU87UUFDTixpREFBaUQ7UUFDakQseUJBQXlCO1FBQ3pCLDRDQUE0QztRQUM1QywyQkFBMkI7UUFDM0Isb0NBQW9DO1FBQ3BDLG9DQUFvQztLQUNwQyxDQUFBO0FBQ0YsQ0FBQyxDQUFBOzs7OztBQUV3RCxHQUFHLEVBQUU7O1FBQ3pELEtBQUs7SUFDVDs7OztJQUFPLEdBQXlFLEVBQUUsQ0FBQyxLQUFLLEdBQUcsS0FBSztRQUMvRixDQUFDLENBQUMsS0FBSztRQUNQLENBQUMsQ0FBQyxxREFBcUQsRUFBSyxFQUFDO0FBQy9ELENBQUM7O0FBTEQsTUFBTSxPQUFPLHdDQUF3QyxHQUFHLE1BS3RELEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvcldpdGhQcm9wcyB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEVudGl0eVN0YXRlLCBEaWN0aW9uYXJ5IH0gZnJvbSAnQG5ncngvZW50aXR5JztcblxuaW1wb3J0IHsgZ2V0RGFmZlByb2R1Y3RGZWF0dXJlU2VsZWN0b3IgfSBmcm9tICcuLi9wcm9kdWN0LWZlYXR1cmUuc2VsZWN0b3InO1xuaW1wb3J0IHsgRGFmZlByb2R1Y3RSZWR1Y2Vyc1N0YXRlIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvcHJvZHVjdC1yZWR1Y2Vycy1zdGF0ZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGFmZlByb2R1Y3QsIERhZmZQcm9kdWN0VHlwZUVudW0gfSBmcm9tICcuLi8uLi9tb2RlbHMvcHJvZHVjdCc7XG5pbXBvcnQgeyBkYWZmQ29tcG9zaXRlUHJvZHVjdEFwcGxpZWRPcHRpb25zRW50aXRpZXNBZGFwdGVyIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvY29tcG9zaXRlLXByb2R1Y3QtZW50aXRpZXMvY29tcG9zaXRlLXByb2R1Y3QtZW50aXRpZXMtcmVkdWNlci1hZGFwdGVyJztcbmltcG9ydCB7IERhZmZDb21wb3NpdGVQcm9kdWN0RW50aXR5IH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvY29tcG9zaXRlLXByb2R1Y3QtZW50aXRpZXMvY29tcG9zaXRlLXByb2R1Y3QtZW50aXR5JztcbmltcG9ydCB7IGdldERhZmZQcm9kdWN0RW50aXRpZXNTZWxlY3RvcnMgfSBmcm9tICcuLi9wcm9kdWN0LWVudGl0aWVzL3Byb2R1Y3QtZW50aXRpZXMuc2VsZWN0b3JzJztcbmltcG9ydCB7IERhZmZDb21wb3NpdGVQcm9kdWN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbXBvc2l0ZS1wcm9kdWN0JztcbmltcG9ydCB7IERhZmZDb21wb3NpdGVQcm9kdWN0SXRlbU9wdGlvbiwgRGFmZkNvbXBvc2l0ZVByb2R1Y3RJdGVtIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbXBvc2l0ZS1wcm9kdWN0LWl0ZW0nO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhZmZDb21wb3NpdGVQcm9kdWN0RW50aXRpZXNNZW1vaXplZFNlbGVjdG9ycyB7XG5cdHNlbGVjdENvbXBvc2l0ZVByb2R1Y3RBcHBsaWVkT3B0aW9uc0VudGl0aWVzU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBFbnRpdHlTdGF0ZTxEYWZmQ29tcG9zaXRlUHJvZHVjdEVudGl0eT4+O1xuXHRzZWxlY3RDb21wb3NpdGVQcm9kdWN0SWRzOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgRW50aXR5U3RhdGU8RGFmZkNvbXBvc2l0ZVByb2R1Y3RFbnRpdHk+WydpZHMnXT47XG5cdHNlbGVjdENvbXBvc2l0ZVByb2R1Y3RBcHBsaWVkT3B0aW9uc0VudGl0aWVzOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgRW50aXR5U3RhdGU8RGFmZkNvbXBvc2l0ZVByb2R1Y3RFbnRpdHk+WydlbnRpdGllcyddPjtcblx0c2VsZWN0Q29tcG9zaXRlUHJvZHVjdFRvdGFsOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgbnVtYmVyPjtcblx0c2VsZWN0Q29tcG9zaXRlUHJvZHVjdEFwcGxpZWRPcHRpb25zOiBNZW1vaXplZFNlbGVjdG9yV2l0aFByb3BzPG9iamVjdCwgb2JqZWN0LCBEaWN0aW9uYXJ5PERhZmZDb21wb3NpdGVQcm9kdWN0SXRlbU9wdGlvbj4+O1xuXHRzZWxlY3RJc0NvbXBvc2l0ZVByb2R1Y3RJdGVtUmVxdWlyZWQ6IE1lbW9pemVkU2VsZWN0b3JXaXRoUHJvcHM8b2JqZWN0LCB7IGlkOiBEYWZmQ29tcG9zaXRlUHJvZHVjdFsnaWQnXSwgaXRlbV9pZDogRGFmZkNvbXBvc2l0ZVByb2R1Y3RJdGVtWydpZCddfSwgYm9vbGVhbj47XG59XG5cbmNvbnN0IGNyZWF0ZUNvbXBvc2l0ZVByb2R1Y3RBcHBsaWVkT3B0aW9uc0VudGl0aWVzU2VsZWN0b3JzID0gPFQgZXh0ZW5kcyBEYWZmUHJvZHVjdD4oKTogRGFmZkNvbXBvc2l0ZVByb2R1Y3RFbnRpdGllc01lbW9pemVkU2VsZWN0b3JzID0+IHtcblx0Y29uc3Qge1xuXHRcdHNlbGVjdFByb2R1Y3RTdGF0ZVxuXHR9ID0gZ2V0RGFmZlByb2R1Y3RGZWF0dXJlU2VsZWN0b3I8VD4oKTtcblx0Y29uc3Qge1xuXHRcdHNlbGVjdFByb2R1Y3RFbnRpdGllcyxcblx0XHRzZWxlY3RQcm9kdWN0LFxuXHR9ID0gZ2V0RGFmZlByb2R1Y3RFbnRpdGllc1NlbGVjdG9ycygpO1xuXHRjb25zdCBhZGFwdGVyU2VsZWN0b3JzID0gZGFmZkNvbXBvc2l0ZVByb2R1Y3RBcHBsaWVkT3B0aW9uc0VudGl0aWVzQWRhcHRlcigpLmdldFNlbGVjdG9ycygpO1xuXHQvKipcblx0ICogQ29tcG9zaXRlIFByb2R1Y3QgRW50aXRpZXMgU3RhdGVcblx0ICovXG5cdGNvbnN0IHNlbGVjdENvbXBvc2l0ZVByb2R1Y3RBcHBsaWVkT3B0aW9uc0VudGl0aWVzU3RhdGUgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RQcm9kdWN0U3RhdGUsXG5cdFx0KHN0YXRlOiBEYWZmUHJvZHVjdFJlZHVjZXJzU3RhdGU8VD4pID0+IHN0YXRlLmNvbXBvc2l0ZVByb2R1Y3RPcHRpb25zXG5cdCk7XG5cblx0LyoqXG5cdCAqIFNlbGVjdG9yIGZvciBjb21wb3NpdGUgcHJvZHVjdCBJRHMuXG5cdCAqL1xuXHRjb25zdCBzZWxlY3RDb21wb3NpdGVQcm9kdWN0SWRzID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q29tcG9zaXRlUHJvZHVjdEFwcGxpZWRPcHRpb25zRW50aXRpZXNTdGF0ZSxcblx0XHRhZGFwdGVyU2VsZWN0b3JzLnNlbGVjdElkc1xuXHQpO1xuXG5cdC8qKlxuXHQgKiBTZWxlY3RvciBmb3IgYWxsIGNvbXBvc2l0ZSBwcm9kdWN0IGFwcGxpZWQgYXR0cmlidXRlcyBhcyBlbnRpdGllcyAoc2VlIG5ncngvZW50aXR5KS5cblx0ICovXG5cdGNvbnN0IHNlbGVjdENvbXBvc2l0ZVByb2R1Y3RBcHBsaWVkT3B0aW9uc0VudGl0aWVzID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0Q29tcG9zaXRlUHJvZHVjdEFwcGxpZWRPcHRpb25zRW50aXRpZXNTdGF0ZSxcblx0XHRhZGFwdGVyU2VsZWN0b3JzLnNlbGVjdEVudGl0aWVzXG5cdCk7XG5cblx0LyoqXG5cdCAqIFNlbGVjdG9yIGZvciB0aGUgdG90YWwgbnVtYmVyIG9mIGNvbXBvc2l0ZSBwcm9kdWN0cy5cblx0ICovXG5cdGNvbnN0IHNlbGVjdENvbXBvc2l0ZVByb2R1Y3RUb3RhbCA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENvbXBvc2l0ZVByb2R1Y3RBcHBsaWVkT3B0aW9uc0VudGl0aWVzU3RhdGUsXG5cdFx0YWRhcHRlclNlbGVjdG9ycy5zZWxlY3RUb3RhbFxuXHQpO1xuXG5cdC8qKlxuXHQgKiBTZWxlY3RvciBmb3IgdGhlIGFwcGxpZWQgYXR0cmlidXRlcyBvZiBhIHBhcnRpY3VsYXIgY29tcG9zaXRlIHByb2R1Y3QuXG5cdCAqL1xuXHRjb25zdCBzZWxlY3RDb21wb3NpdGVQcm9kdWN0QXBwbGllZE9wdGlvbnMgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RQcm9kdWN0RW50aXRpZXMsXG5cdFx0c2VsZWN0Q29tcG9zaXRlUHJvZHVjdEFwcGxpZWRPcHRpb25zRW50aXRpZXNTdGF0ZSxcblx0XHQocHJvZHVjdHMsIGFwcGxpZWRPcHRpb25zLCBwcm9wcykgPT4ge1xuXHRcdFx0Y29uc3QgcHJvZHVjdCA9IHNlbGVjdFByb2R1Y3QucHJvamVjdG9yKHByb2R1Y3RzLCB7IGlkOiBwcm9wcy5pZCB9KTtcblx0XHRcdGlmKHByb2R1Y3QudHlwZSAhPT0gRGFmZlByb2R1Y3RUeXBlRW51bS5Db21wb3NpdGUpIHtcblx0XHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuICg8RGFmZkNvbXBvc2l0ZVByb2R1Y3Q+cHJvZHVjdCkuaXRlbXMucmVkdWNlKChhY2MsIGl0ZW0pID0+ICh7XG5cdFx0XHRcdFx0Li4uYWNjLFxuXHRcdFx0XHRcdFtpdGVtLmlkXTogYXBwbGllZE9wdGlvbnMuZW50aXRpZXNbcHJvZHVjdC5pZF0uaXRlbXNbaXRlbS5pZF0udmFsdWUgPyB7XG5cdFx0XHRcdFx0XHQuLi5pdGVtLm9wdGlvbnMuZmluZChvcHRpb24gPT4gb3B0aW9uLmlkID09PSBhcHBsaWVkT3B0aW9ucy5lbnRpdGllc1twcm9kdWN0LmlkXS5pdGVtc1tpdGVtLmlkXS52YWx1ZSksXG5cdFx0XHRcdFx0XHRxdWFudGl0eTogYXBwbGllZE9wdGlvbnMuZW50aXRpZXNbcHJvZHVjdC5pZF0uaXRlbXNbaXRlbS5pZF0ucXR5XG5cdFx0XHRcdFx0fSA6IG51bGxcblx0XHRcdH0pLCB7fSlcblx0XHR9XG5cdCk7XG5cblx0Y29uc3Qgc2VsZWN0SXNDb21wb3NpdGVQcm9kdWN0SXRlbVJlcXVpcmVkID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0UHJvZHVjdEVudGl0aWVzLFxuXHRcdChwcm9kdWN0cywgcHJvcHMpID0+IHtcblx0XHRcdGNvbnN0IHByb2R1Y3QgPSBzZWxlY3RQcm9kdWN0LnByb2plY3Rvcihwcm9kdWN0cywgeyBpZDogcHJvcHMuaWQgfSk7XG5cdFx0XHRpZihwcm9kdWN0LnR5cGUgIT09IERhZmZQcm9kdWN0VHlwZUVudW0uQ29tcG9zaXRlKSB7XG5cdFx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBwcm9kdWN0SXRlbSA9ICg8RGFmZkNvbXBvc2l0ZVByb2R1Y3Q+cHJvZHVjdCkuaXRlbXMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IHByb3BzLml0ZW1faWQpO1xuXG5cdFx0XHRyZXR1cm4gcHJvZHVjdEl0ZW0gPyBwcm9kdWN0SXRlbS5yZXF1aXJlZCA6IG51bGxcblx0XHR9XG5cdClcblxuXHRyZXR1cm4geyBcblx0XHRzZWxlY3RDb21wb3NpdGVQcm9kdWN0QXBwbGllZE9wdGlvbnNFbnRpdGllc1N0YXRlLFxuXHRcdHNlbGVjdENvbXBvc2l0ZVByb2R1Y3RJZHMsXG5cdFx0c2VsZWN0Q29tcG9zaXRlUHJvZHVjdEFwcGxpZWRPcHRpb25zRW50aXRpZXMsXG5cdFx0c2VsZWN0Q29tcG9zaXRlUHJvZHVjdFRvdGFsLFxuXHRcdHNlbGVjdENvbXBvc2l0ZVByb2R1Y3RBcHBsaWVkT3B0aW9ucyxcblx0XHRzZWxlY3RJc0NvbXBvc2l0ZVByb2R1Y3RJdGVtUmVxdWlyZWRcblx0fVxufVxuXG5leHBvcnQgY29uc3QgZ2V0RGFmZkNvbXBvc2l0ZVByb2R1Y3RFbnRpdGllc1NlbGVjdG9ycyA9ICgoKSA9PiB7XG5cdGxldCBjYWNoZTtcblx0cmV0dXJuIDxUIGV4dGVuZHMgRGFmZlByb2R1Y3Q+KCk6IERhZmZDb21wb3NpdGVQcm9kdWN0RW50aXRpZXNNZW1vaXplZFNlbGVjdG9ycyA9PiBjYWNoZSA9IGNhY2hlIFxuXHRcdD8gY2FjaGUgXG5cdFx0OiBjcmVhdGVDb21wb3NpdGVQcm9kdWN0QXBwbGllZE9wdGlvbnNFbnRpdGllc1NlbGVjdG9yczxUPigpO1xufSkoKVxuIl19