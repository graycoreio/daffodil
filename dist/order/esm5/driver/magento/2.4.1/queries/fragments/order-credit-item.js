var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
import { orderItemFragment } from './order-item';
/** @type {?} */
export var orderCreditItemFragment = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  fragment orderCreditItem on CreditMemoItemInterface {\n    __typename\n    id\n    quantity_refunded\n    order_item {\n      ...orderItem\n    }\n  }\n  ", "\n"], ["\n  fragment orderCreditItem on CreditMemoItemInterface {\n    __typename\n    id\n    quantity_refunded\n    order_item {\n      ...orderItem\n    }\n  }\n  ", "\n"])), orderItemFragment);
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY3JlZGl0LWl0ZW0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvb3JkZXIvZHJpdmVyL21hZ2VudG8vMi40LjEvIiwic291cmNlcyI6WyJxdWVyaWVzL2ZyYWdtZW50cy9vcmRlci1jcmVkaXQtaXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE9BQU8sR0FBRyxNQUFNLGFBQWEsQ0FBQztBQUU5QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBRWpELE1BQU0sS0FBTyx1QkFBdUIsR0FBRyxHQUFHLHlPQUFBLGdLQVN0QyxFQUFpQixJQUNwQixLQURHLGlCQUFpQixDQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuXG5pbXBvcnQgeyBvcmRlckl0ZW1GcmFnbWVudCB9IGZyb20gJy4vb3JkZXItaXRlbSc7XG5cbmV4cG9ydCBjb25zdCBvcmRlckNyZWRpdEl0ZW1GcmFnbWVudCA9IGdxbGBcbiAgZnJhZ21lbnQgb3JkZXJDcmVkaXRJdGVtIG9uIENyZWRpdE1lbW9JdGVtSW50ZXJmYWNlIHtcbiAgICBfX3R5cGVuYW1lXG4gICAgaWRcbiAgICBxdWFudGl0eV9yZWZ1bmRlZFxuICAgIG9yZGVyX2l0ZW0ge1xuICAgICAgLi4ub3JkZXJJdGVtXG4gICAgfVxuICB9XG4gICR7b3JkZXJJdGVtRnJhZ21lbnR9XG5gO1xuIl19