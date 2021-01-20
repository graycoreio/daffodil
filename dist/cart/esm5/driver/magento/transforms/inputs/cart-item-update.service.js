/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var DaffMagentoCartItemUpdateInputTransformer = /** @class */ (function () {
    function DaffMagentoCartItemUpdateInputTransformer() {
    }
    /**
     * @param {?} item
     * @return {?}
     */
    DaffMagentoCartItemUpdateInputTransformer.prototype.transform = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return {
            quantity: item.qty,
            cart_item_id: Number(item.item_id)
        };
    };
    DaffMagentoCartItemUpdateInputTransformer.decorators = [
        { type: Injectable }
    ];
    return DaffMagentoCartItemUpdateInputTransformer;
}());
export { DaffMagentoCartItemUpdateInputTransformer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLXVwZGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL21hZ2VudG8vIiwic291cmNlcyI6WyJ0cmFuc2Zvcm1zL2lucHV0cy9jYXJ0LWl0ZW0tdXBkYXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNM0M7SUFBQTtJQVFBLENBQUM7Ozs7O0lBTkMsNkRBQVM7Ozs7SUFBVCxVQUFVLElBQTJCO1FBQ25DLE9BQU87WUFDTCxRQUFRLEVBQUUsSUFBSSxDQUFDLEdBQUc7WUFDbEIsWUFBWSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ25DLENBQUE7SUFDSCxDQUFDOztnQkFQRixVQUFVOztJQVFYLGdEQUFDO0NBQUEsQUFSRCxJQVFDO1NBUFkseUNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydEl0ZW0gfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5cbmltcG9ydCB7IE1hZ2VudG9DYXJ0SXRlbVVwZGF0ZUlucHV0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3JlcXVlc3RzL2NhcnQtaXRlbS11cGRhdGUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGFmZk1hZ2VudG9DYXJ0SXRlbVVwZGF0ZUlucHV0VHJhbnNmb3JtZXIge1xuICB0cmFuc2Zvcm0oaXRlbTogUGFydGlhbDxEYWZmQ2FydEl0ZW0+KTogTWFnZW50b0NhcnRJdGVtVXBkYXRlSW5wdXQge1xuICAgIHJldHVybiB7XG4gICAgICBxdWFudGl0eTogaXRlbS5xdHksXG4gICAgICBjYXJ0X2l0ZW1faWQ6IE51bWJlcihpdGVtLml0ZW1faWQpXG4gICAgfVxuICB9XG59XG4iXX0=