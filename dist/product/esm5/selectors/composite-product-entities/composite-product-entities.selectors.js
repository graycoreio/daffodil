/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var createCompositeProductAppliedOptionsEntitiesSelectors = (/**
 * @template T
 * @return {?}
 */
function () {
    var selectProductState = getDaffProductFeatureSelector().selectProductState;
    var _a = getDaffProductEntitiesSelectors(), selectProductEntities = _a.selectProductEntities, selectProduct = _a.selectProduct;
    /** @type {?} */
    var adapterSelectors = daffCompositeProductAppliedOptionsEntitiesAdapter().getSelectors();
    /**
     * Composite Product Entities State
     * @type {?}
     */
    var selectCompositeProductAppliedOptionsEntitiesState = createSelector(selectProductState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.compositeProductOptions; }));
    /**
     * Selector for composite product IDs.
     * @type {?}
     */
    var selectCompositeProductIds = createSelector(selectCompositeProductAppliedOptionsEntitiesState, adapterSelectors.selectIds);
    /**
     * Selector for all composite product applied attributes as entities (see ngrx/entity).
     * @type {?}
     */
    var selectCompositeProductAppliedOptionsEntities = createSelector(selectCompositeProductAppliedOptionsEntitiesState, adapterSelectors.selectEntities);
    /**
     * Selector for the total number of composite products.
     * @type {?}
     */
    var selectCompositeProductTotal = createSelector(selectCompositeProductAppliedOptionsEntitiesState, adapterSelectors.selectTotal);
    /**
     * Selector for the applied attributes of a particular composite product.
     * @type {?}
     */
    var selectCompositeProductAppliedOptions = createSelector(selectProductEntities, selectCompositeProductAppliedOptionsEntitiesState, (/**
     * @param {?} products
     * @param {?} appliedOptions
     * @param {?} props
     * @return {?}
     */
    function (products, appliedOptions, props) {
        /** @type {?} */
        var product = selectProduct.projector(products, { id: props.id });
        if (product.type !== DaffProductTypeEnum.Composite) {
            return undefined;
        }
        return ((/** @type {?} */ (product))).items.reduce((/**
         * @param {?} acc
         * @param {?} item
         * @return {?}
         */
        function (acc, item) {
            var _a;
            return (tslib_1.__assign({}, acc, (_a = {}, _a[item.id] = appliedOptions.entities[product.id].items[item.id].value ? tslib_1.__assign({}, item.options.find((/**
             * @param {?} option
             * @return {?}
             */
            function (option) { return option.id === appliedOptions.entities[product.id].items[item.id].value; })), { quantity: appliedOptions.entities[product.id].items[item.id].qty }) : null, _a)));
        }), {});
    }));
    /** @type {?} */
    var selectIsCompositeProductItemRequired = createSelector(selectProductEntities, (/**
     * @param {?} products
     * @param {?} props
     * @return {?}
     */
    function (products, props) {
        /** @type {?} */
        var product = selectProduct.projector(products, { id: props.id });
        if (product.type !== DaffProductTypeEnum.Composite) {
            return undefined;
        }
        /** @type {?} */
        var productItem = ((/** @type {?} */ (product))).items.find((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.id === props.item_id; }));
        return productItem ? productItem.required : null;
    }));
    return {
        selectCompositeProductAppliedOptionsEntitiesState: selectCompositeProductAppliedOptionsEntitiesState,
        selectCompositeProductIds: selectCompositeProductIds,
        selectCompositeProductAppliedOptionsEntities: selectCompositeProductAppliedOptionsEntities,
        selectCompositeProductTotal: selectCompositeProductTotal,
        selectCompositeProductAppliedOptions: selectCompositeProductAppliedOptions,
        selectIsCompositeProductItemRequired: selectIsCompositeProductItemRequired
    };
});
var ɵ0 = createCompositeProductAppliedOptionsEntitiesSelectors;
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
        : createCompositeProductAppliedOptionsEntitiesSelectors(); });
};
/** @type {?} */
export var getDaffCompositeProductEntitiesSelectors = ((ɵ1))();
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRlLXByb2R1Y3QtZW50aXRpZXMuc2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3Byb2R1Y3QvIiwic291cmNlcyI6WyJzZWxlY3RvcnMvY29tcG9zaXRlLXByb2R1Y3QtZW50aXRpZXMvY29tcG9zaXRlLXByb2R1Y3QtZW50aXRpZXMuc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBK0MsTUFBTSxhQUFhLENBQUM7QUFHMUYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFNUUsT0FBTyxFQUFlLG1CQUFtQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGlEQUFpRCxFQUFFLE1BQU0sc0ZBQXNGLENBQUM7QUFFekosT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7Ozs7QUFJakcsbUVBT0M7OztJQU5BLDBHQUFxSDs7SUFDckgsa0ZBQW9HOztJQUNwRyxxR0FBNEg7O0lBQzVILG9GQUE4RDs7SUFDOUQsNkZBQTRIOztJQUM1SCw2RkFBNko7OztJQUd4SixxREFBcUQ7Ozs7QUFBRztJQUU1RCxJQUFBLHVFQUFrQjtJQUViLElBQUEsc0NBRytCLEVBRnBDLGdEQUFxQixFQUNyQixnQ0FDb0M7O1FBQy9CLGdCQUFnQixHQUFHLGlEQUFpRCxFQUFFLENBQUMsWUFBWSxFQUFFOzs7OztRQUlyRixpREFBaUQsR0FBRyxjQUFjLENBQ3ZFLGtCQUFrQjs7OztJQUNsQixVQUFDLEtBQWtDLElBQUssT0FBQSxLQUFLLENBQUMsdUJBQXVCLEVBQTdCLENBQTZCLEVBQ3JFOzs7OztRQUtLLHlCQUF5QixHQUFHLGNBQWMsQ0FDL0MsaURBQWlELEVBQ2pELGdCQUFnQixDQUFDLFNBQVMsQ0FDMUI7Ozs7O1FBS0ssNENBQTRDLEdBQUcsY0FBYyxDQUNsRSxpREFBaUQsRUFDakQsZ0JBQWdCLENBQUMsY0FBYyxDQUMvQjs7Ozs7UUFLSywyQkFBMkIsR0FBRyxjQUFjLENBQ2pELGlEQUFpRCxFQUNqRCxnQkFBZ0IsQ0FBQyxXQUFXLENBQzVCOzs7OztRQUtLLG9DQUFvQyxHQUFHLGNBQWMsQ0FDMUQscUJBQXFCLEVBQ3JCLGlEQUFpRDs7Ozs7O0lBQ2pELFVBQUMsUUFBUSxFQUFFLGNBQWMsRUFBRSxLQUFLOztZQUN6QixPQUFPLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ25FLElBQUcsT0FBTyxDQUFDLElBQUksS0FBSyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUU7WUFDbEQsT0FBTyxTQUFTLENBQUM7U0FDakI7UUFFRCxPQUFPLENBQUMsbUJBQXNCLE9BQU8sRUFBQSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU07Ozs7O1FBQUMsVUFBQyxHQUFHLEVBQUUsSUFBSTs7WUFBSyxPQUFBLHNCQUM5RCxHQUFHLGVBQ0wsSUFBSSxDQUFDLEVBQUUsSUFBRyxjQUFjLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLHNCQUNqRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUk7Ozs7WUFBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxFQUFFLEtBQUssY0FBYyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQXRFLENBQXNFLEVBQUMsSUFDdEcsUUFBUSxFQUFFLGNBQWMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUMvRCxDQUFDLENBQUMsSUFBSSxPQUNSO1FBTmlFLENBTWpFLEdBQUUsRUFBRSxDQUFDLENBQUE7SUFDUixDQUFDLEVBQ0Q7O1FBRUssb0NBQW9DLEdBQUcsY0FBYyxDQUMxRCxxQkFBcUI7Ozs7O0lBQ3JCLFVBQUMsUUFBUSxFQUFFLEtBQUs7O1lBQ1QsT0FBTyxHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUNuRSxJQUFHLE9BQU8sQ0FBQyxJQUFJLEtBQUssbUJBQW1CLENBQUMsU0FBUyxFQUFFO1lBQ2xELE9BQU8sU0FBUyxDQUFDO1NBQ2pCOztZQUNLLFdBQVcsR0FBRyxDQUFDLG1CQUFzQixPQUFPLEVBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsRUFBRSxLQUFLLEtBQUssQ0FBQyxPQUFPLEVBQXpCLENBQXlCLEVBQUM7UUFFakcsT0FBTyxXQUFXLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtJQUNqRCxDQUFDLEVBQ0Q7SUFFRCxPQUFPO1FBQ04saURBQWlELG1EQUFBO1FBQ2pELHlCQUF5QiwyQkFBQTtRQUN6Qiw0Q0FBNEMsOENBQUE7UUFDNUMsMkJBQTJCLDZCQUFBO1FBQzNCLG9DQUFvQyxzQ0FBQTtRQUNwQyxvQ0FBb0Msc0NBQUE7S0FDcEMsQ0FBQTtBQUNGLENBQUMsQ0FBQTs7Ozs7QUFFd0Q7O1FBQ3BELEtBQUs7SUFDVDs7OztJQUFPLGNBQTRFLE9BQUEsS0FBSyxHQUFHLEtBQUs7UUFDL0YsQ0FBQyxDQUFDLEtBQUs7UUFDUCxDQUFDLENBQUMscURBQXFELEVBQUssRUFGc0IsQ0FFdEIsRUFBQztBQUMvRCxDQUFDOztBQUxELE1BQU0sS0FBTyx3Q0FBd0MsR0FBRyxNQUt0RCxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3JXaXRoUHJvcHMgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBFbnRpdHlTdGF0ZSwgRGljdGlvbmFyeSB9IGZyb20gJ0BuZ3J4L2VudGl0eSc7XG5cbmltcG9ydCB7IGdldERhZmZQcm9kdWN0RmVhdHVyZVNlbGVjdG9yIH0gZnJvbSAnLi4vcHJvZHVjdC1mZWF0dXJlLnNlbGVjdG9yJztcbmltcG9ydCB7IERhZmZQcm9kdWN0UmVkdWNlcnNTdGF0ZSB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3Byb2R1Y3QtcmVkdWNlcnMtc3RhdGUuaW50ZXJmYWNlJztcbmltcG9ydCB7IERhZmZQcm9kdWN0LCBEYWZmUHJvZHVjdFR5cGVFbnVtIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Byb2R1Y3QnO1xuaW1wb3J0IHsgZGFmZkNvbXBvc2l0ZVByb2R1Y3RBcHBsaWVkT3B0aW9uc0VudGl0aWVzQWRhcHRlciB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL2NvbXBvc2l0ZS1wcm9kdWN0LWVudGl0aWVzL2NvbXBvc2l0ZS1wcm9kdWN0LWVudGl0aWVzLXJlZHVjZXItYWRhcHRlcic7XG5pbXBvcnQgeyBEYWZmQ29tcG9zaXRlUHJvZHVjdEVudGl0eSB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL2NvbXBvc2l0ZS1wcm9kdWN0LWVudGl0aWVzL2NvbXBvc2l0ZS1wcm9kdWN0LWVudGl0eSc7XG5pbXBvcnQgeyBnZXREYWZmUHJvZHVjdEVudGl0aWVzU2VsZWN0b3JzIH0gZnJvbSAnLi4vcHJvZHVjdC1lbnRpdGllcy9wcm9kdWN0LWVudGl0aWVzLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBEYWZmQ29tcG9zaXRlUHJvZHVjdCB9IGZyb20gJy4uLy4uL21vZGVscy9jb21wb3NpdGUtcHJvZHVjdCc7XG5pbXBvcnQgeyBEYWZmQ29tcG9zaXRlUHJvZHVjdEl0ZW1PcHRpb24sIERhZmZDb21wb3NpdGVQcm9kdWN0SXRlbSB9IGZyb20gJy4uLy4uL21vZGVscy9jb21wb3NpdGUtcHJvZHVjdC1pdGVtJztcblxuZXhwb3J0IGludGVyZmFjZSBEYWZmQ29tcG9zaXRlUHJvZHVjdEVudGl0aWVzTWVtb2l6ZWRTZWxlY3RvcnMge1xuXHRzZWxlY3RDb21wb3NpdGVQcm9kdWN0QXBwbGllZE9wdGlvbnNFbnRpdGllc1N0YXRlOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgRW50aXR5U3RhdGU8RGFmZkNvbXBvc2l0ZVByb2R1Y3RFbnRpdHk+Pjtcblx0c2VsZWN0Q29tcG9zaXRlUHJvZHVjdElkczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIEVudGl0eVN0YXRlPERhZmZDb21wb3NpdGVQcm9kdWN0RW50aXR5PlsnaWRzJ10+O1xuXHRzZWxlY3RDb21wb3NpdGVQcm9kdWN0QXBwbGllZE9wdGlvbnNFbnRpdGllczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIEVudGl0eVN0YXRlPERhZmZDb21wb3NpdGVQcm9kdWN0RW50aXR5PlsnZW50aXRpZXMnXT47XG5cdHNlbGVjdENvbXBvc2l0ZVByb2R1Y3RUb3RhbDogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIG51bWJlcj47XG5cdHNlbGVjdENvbXBvc2l0ZVByb2R1Y3RBcHBsaWVkT3B0aW9uczogTWVtb2l6ZWRTZWxlY3RvcldpdGhQcm9wczxvYmplY3QsIG9iamVjdCwgRGljdGlvbmFyeTxEYWZmQ29tcG9zaXRlUHJvZHVjdEl0ZW1PcHRpb24+Pjtcblx0c2VsZWN0SXNDb21wb3NpdGVQcm9kdWN0SXRlbVJlcXVpcmVkOiBNZW1vaXplZFNlbGVjdG9yV2l0aFByb3BzPG9iamVjdCwgeyBpZDogRGFmZkNvbXBvc2l0ZVByb2R1Y3RbJ2lkJ10sIGl0ZW1faWQ6IERhZmZDb21wb3NpdGVQcm9kdWN0SXRlbVsnaWQnXX0sIGJvb2xlYW4+O1xufVxuXG5jb25zdCBjcmVhdGVDb21wb3NpdGVQcm9kdWN0QXBwbGllZE9wdGlvbnNFbnRpdGllc1NlbGVjdG9ycyA9IDxUIGV4dGVuZHMgRGFmZlByb2R1Y3Q+KCk6IERhZmZDb21wb3NpdGVQcm9kdWN0RW50aXRpZXNNZW1vaXplZFNlbGVjdG9ycyA9PiB7XG5cdGNvbnN0IHtcblx0XHRzZWxlY3RQcm9kdWN0U3RhdGVcblx0fSA9IGdldERhZmZQcm9kdWN0RmVhdHVyZVNlbGVjdG9yPFQ+KCk7XG5cdGNvbnN0IHtcblx0XHRzZWxlY3RQcm9kdWN0RW50aXRpZXMsXG5cdFx0c2VsZWN0UHJvZHVjdCxcblx0fSA9IGdldERhZmZQcm9kdWN0RW50aXRpZXNTZWxlY3RvcnMoKTtcblx0Y29uc3QgYWRhcHRlclNlbGVjdG9ycyA9IGRhZmZDb21wb3NpdGVQcm9kdWN0QXBwbGllZE9wdGlvbnNFbnRpdGllc0FkYXB0ZXIoKS5nZXRTZWxlY3RvcnMoKTtcblx0LyoqXG5cdCAqIENvbXBvc2l0ZSBQcm9kdWN0IEVudGl0aWVzIFN0YXRlXG5cdCAqL1xuXHRjb25zdCBzZWxlY3RDb21wb3NpdGVQcm9kdWN0QXBwbGllZE9wdGlvbnNFbnRpdGllc1N0YXRlID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0UHJvZHVjdFN0YXRlLFxuXHRcdChzdGF0ZTogRGFmZlByb2R1Y3RSZWR1Y2Vyc1N0YXRlPFQ+KSA9PiBzdGF0ZS5jb21wb3NpdGVQcm9kdWN0T3B0aW9uc1xuXHQpO1xuXG5cdC8qKlxuXHQgKiBTZWxlY3RvciBmb3IgY29tcG9zaXRlIHByb2R1Y3QgSURzLlxuXHQgKi9cblx0Y29uc3Qgc2VsZWN0Q29tcG9zaXRlUHJvZHVjdElkcyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENvbXBvc2l0ZVByb2R1Y3RBcHBsaWVkT3B0aW9uc0VudGl0aWVzU3RhdGUsXG5cdFx0YWRhcHRlclNlbGVjdG9ycy5zZWxlY3RJZHNcblx0KTtcblxuXHQvKipcblx0ICogU2VsZWN0b3IgZm9yIGFsbCBjb21wb3NpdGUgcHJvZHVjdCBhcHBsaWVkIGF0dHJpYnV0ZXMgYXMgZW50aXRpZXMgKHNlZSBuZ3J4L2VudGl0eSkuXG5cdCAqL1xuXHRjb25zdCBzZWxlY3RDb21wb3NpdGVQcm9kdWN0QXBwbGllZE9wdGlvbnNFbnRpdGllcyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdENvbXBvc2l0ZVByb2R1Y3RBcHBsaWVkT3B0aW9uc0VudGl0aWVzU3RhdGUsXG5cdFx0YWRhcHRlclNlbGVjdG9ycy5zZWxlY3RFbnRpdGllc1xuXHQpO1xuXG5cdC8qKlxuXHQgKiBTZWxlY3RvciBmb3IgdGhlIHRvdGFsIG51bWJlciBvZiBjb21wb3NpdGUgcHJvZHVjdHMuXG5cdCAqL1xuXHRjb25zdCBzZWxlY3RDb21wb3NpdGVQcm9kdWN0VG90YWwgPSBjcmVhdGVTZWxlY3Rvcihcblx0XHRzZWxlY3RDb21wb3NpdGVQcm9kdWN0QXBwbGllZE9wdGlvbnNFbnRpdGllc1N0YXRlLFxuXHRcdGFkYXB0ZXJTZWxlY3RvcnMuc2VsZWN0VG90YWxcblx0KTtcblxuXHQvKipcblx0ICogU2VsZWN0b3IgZm9yIHRoZSBhcHBsaWVkIGF0dHJpYnV0ZXMgb2YgYSBwYXJ0aWN1bGFyIGNvbXBvc2l0ZSBwcm9kdWN0LlxuXHQgKi9cblx0Y29uc3Qgc2VsZWN0Q29tcG9zaXRlUHJvZHVjdEFwcGxpZWRPcHRpb25zID0gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0UHJvZHVjdEVudGl0aWVzLFxuXHRcdHNlbGVjdENvbXBvc2l0ZVByb2R1Y3RBcHBsaWVkT3B0aW9uc0VudGl0aWVzU3RhdGUsXG5cdFx0KHByb2R1Y3RzLCBhcHBsaWVkT3B0aW9ucywgcHJvcHMpID0+IHtcblx0XHRcdGNvbnN0IHByb2R1Y3QgPSBzZWxlY3RQcm9kdWN0LnByb2plY3Rvcihwcm9kdWN0cywgeyBpZDogcHJvcHMuaWQgfSk7XG5cdFx0XHRpZihwcm9kdWN0LnR5cGUgIT09IERhZmZQcm9kdWN0VHlwZUVudW0uQ29tcG9zaXRlKSB7XG5cdFx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAoPERhZmZDb21wb3NpdGVQcm9kdWN0PnByb2R1Y3QpLml0ZW1zLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiAoe1xuXHRcdFx0XHRcdC4uLmFjYyxcblx0XHRcdFx0XHRbaXRlbS5pZF06IGFwcGxpZWRPcHRpb25zLmVudGl0aWVzW3Byb2R1Y3QuaWRdLml0ZW1zW2l0ZW0uaWRdLnZhbHVlID8ge1xuXHRcdFx0XHRcdFx0Li4uaXRlbS5vcHRpb25zLmZpbmQob3B0aW9uID0+IG9wdGlvbi5pZCA9PT0gYXBwbGllZE9wdGlvbnMuZW50aXRpZXNbcHJvZHVjdC5pZF0uaXRlbXNbaXRlbS5pZF0udmFsdWUpLFxuXHRcdFx0XHRcdFx0cXVhbnRpdHk6IGFwcGxpZWRPcHRpb25zLmVudGl0aWVzW3Byb2R1Y3QuaWRdLml0ZW1zW2l0ZW0uaWRdLnF0eVxuXHRcdFx0XHRcdH0gOiBudWxsXG5cdFx0XHR9KSwge30pXG5cdFx0fVxuXHQpO1xuXG5cdGNvbnN0IHNlbGVjdElzQ29tcG9zaXRlUHJvZHVjdEl0ZW1SZXF1aXJlZCA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRcdHNlbGVjdFByb2R1Y3RFbnRpdGllcyxcblx0XHQocHJvZHVjdHMsIHByb3BzKSA9PiB7XG5cdFx0XHRjb25zdCBwcm9kdWN0ID0gc2VsZWN0UHJvZHVjdC5wcm9qZWN0b3IocHJvZHVjdHMsIHsgaWQ6IHByb3BzLmlkIH0pO1xuXHRcdFx0aWYocHJvZHVjdC50eXBlICE9PSBEYWZmUHJvZHVjdFR5cGVFbnVtLkNvbXBvc2l0ZSkge1xuXHRcdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcHJvZHVjdEl0ZW0gPSAoPERhZmZDb21wb3NpdGVQcm9kdWN0PnByb2R1Y3QpLml0ZW1zLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBwcm9wcy5pdGVtX2lkKTtcblxuXHRcdFx0cmV0dXJuIHByb2R1Y3RJdGVtID8gcHJvZHVjdEl0ZW0ucmVxdWlyZWQgOiBudWxsXG5cdFx0fVxuXHQpXG5cblx0cmV0dXJuIHsgXG5cdFx0c2VsZWN0Q29tcG9zaXRlUHJvZHVjdEFwcGxpZWRPcHRpb25zRW50aXRpZXNTdGF0ZSxcblx0XHRzZWxlY3RDb21wb3NpdGVQcm9kdWN0SWRzLFxuXHRcdHNlbGVjdENvbXBvc2l0ZVByb2R1Y3RBcHBsaWVkT3B0aW9uc0VudGl0aWVzLFxuXHRcdHNlbGVjdENvbXBvc2l0ZVByb2R1Y3RUb3RhbCxcblx0XHRzZWxlY3RDb21wb3NpdGVQcm9kdWN0QXBwbGllZE9wdGlvbnMsXG5cdFx0c2VsZWN0SXNDb21wb3NpdGVQcm9kdWN0SXRlbVJlcXVpcmVkXG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldERhZmZDb21wb3NpdGVQcm9kdWN0RW50aXRpZXNTZWxlY3RvcnMgPSAoKCkgPT4ge1xuXHRsZXQgY2FjaGU7XG5cdHJldHVybiA8VCBleHRlbmRzIERhZmZQcm9kdWN0PigpOiBEYWZmQ29tcG9zaXRlUHJvZHVjdEVudGl0aWVzTWVtb2l6ZWRTZWxlY3RvcnMgPT4gY2FjaGUgPSBjYWNoZSBcblx0XHQ/IGNhY2hlIFxuXHRcdDogY3JlYXRlQ29tcG9zaXRlUHJvZHVjdEFwcGxpZWRPcHRpb25zRW50aXRpZXNTZWxlY3RvcnM8VD4oKTtcbn0pKClcbiJdfQ==