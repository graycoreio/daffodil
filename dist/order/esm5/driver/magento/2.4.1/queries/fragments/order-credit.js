var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
import { orderCreditItemFragment } from './order-credit-item';
import { orderCreditTotalFragment } from './order-credit-total';
/** @type {?} */
export var orderCreditFragment = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  fragment orderCredit on CreditMemo {\n    __typename\n    id\n    items {\n      ...orderCreditItem\n    }\n    total {\n      ...orderCreditTotal\n    }\n  }\n  ", "\n  ", "\n"], ["\n  fragment orderCredit on CreditMemo {\n    __typename\n    id\n    items {\n      ...orderCreditItem\n    }\n    total {\n      ...orderCreditTotal\n    }\n  }\n  ", "\n  ", "\n"])), orderCreditItemFragment, orderCreditTotalFragment);
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY3JlZGl0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL29yZGVyL2RyaXZlci9tYWdlbnRvLzIuNC4xLyIsInNvdXJjZXMiOlsicXVlcmllcy9mcmFnbWVudHMvb3JkZXItY3JlZGl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBTyxHQUFHLE1BQU0sYUFBYSxDQUFDO0FBRTlCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUVoRSxNQUFNLEtBQU8sbUJBQW1CLEdBQUcsR0FBRyx5UEFBQSx3S0FXbEMsRUFBdUIsTUFDdkIsRUFBd0IsSUFDM0IsS0FGRyx1QkFBdUIsRUFDdkIsd0JBQXdCLENBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5cbmltcG9ydCB7IG9yZGVyQ3JlZGl0SXRlbUZyYWdtZW50IH0gZnJvbSAnLi9vcmRlci1jcmVkaXQtaXRlbSc7XG5pbXBvcnQgeyBvcmRlckNyZWRpdFRvdGFsRnJhZ21lbnQgfSBmcm9tICcuL29yZGVyLWNyZWRpdC10b3RhbCc7XG5cbmV4cG9ydCBjb25zdCBvcmRlckNyZWRpdEZyYWdtZW50ID0gZ3FsYFxuICBmcmFnbWVudCBvcmRlckNyZWRpdCBvbiBDcmVkaXRNZW1vIHtcbiAgICBfX3R5cGVuYW1lXG4gICAgaWRcbiAgICBpdGVtcyB7XG4gICAgICAuLi5vcmRlckNyZWRpdEl0ZW1cbiAgICB9XG4gICAgdG90YWwge1xuICAgICAgLi4ub3JkZXJDcmVkaXRUb3RhbFxuICAgIH1cbiAgfVxuICAke29yZGVyQ3JlZGl0SXRlbUZyYWdtZW50fVxuICAke29yZGVyQ3JlZGl0VG90YWxGcmFnbWVudH1cbmA7XG4iXX0=