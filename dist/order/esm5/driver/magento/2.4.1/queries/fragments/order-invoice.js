var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
import { orderInvoiceItemFragment } from './order-invoice-item';
import { orderInvoiceTotalFragment } from './order-invoice-total';
/** @type {?} */
export var orderInvoiceFragment = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  fragment orderInvoice on Invoice {\n    __typename\n    id\n    items {\n      ...orderInvoiceItem\n    }\n    total {\n      ...orderInvoiceTotal\n    }\n  }\n  ", "\n  ", "\n"], ["\n  fragment orderInvoice on Invoice {\n    __typename\n    id\n    items {\n      ...orderInvoiceItem\n    }\n    total {\n      ...orderInvoiceTotal\n    }\n  }\n  ", "\n  ", "\n"])), orderInvoiceItemFragment, orderInvoiceTotalFragment);
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItaW52b2ljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9vcmRlci9kcml2ZXIvbWFnZW50by8yLjQuMS8iLCJzb3VyY2VzIjpbInF1ZXJpZXMvZnJhZ21lbnRzL29yZGVyLWludm9pY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPLEdBQUcsTUFBTSxhQUFhLENBQUM7QUFFOUIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBRWxFLE1BQU0sS0FBTyxvQkFBb0IsR0FBRyxHQUFHLHlQQUFBLHdLQVduQyxFQUF3QixNQUN4QixFQUF5QixJQUM1QixLQUZHLHdCQUF3QixFQUN4Qix5QkFBeUIsQ0FDNUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuaW1wb3J0IHsgb3JkZXJJbnZvaWNlSXRlbUZyYWdtZW50IH0gZnJvbSAnLi9vcmRlci1pbnZvaWNlLWl0ZW0nO1xuaW1wb3J0IHsgb3JkZXJJbnZvaWNlVG90YWxGcmFnbWVudCB9IGZyb20gJy4vb3JkZXItaW52b2ljZS10b3RhbCc7XG5cbmV4cG9ydCBjb25zdCBvcmRlckludm9pY2VGcmFnbWVudCA9IGdxbGBcbiAgZnJhZ21lbnQgb3JkZXJJbnZvaWNlIG9uIEludm9pY2Uge1xuICAgIF9fdHlwZW5hbWVcbiAgICBpZFxuICAgIGl0ZW1zIHtcbiAgICAgIC4uLm9yZGVySW52b2ljZUl0ZW1cbiAgICB9XG4gICAgdG90YWwge1xuICAgICAgLi4ub3JkZXJJbnZvaWNlVG90YWxcbiAgICB9XG4gIH1cbiAgJHtvcmRlckludm9pY2VJdGVtRnJhZ21lbnR9XG4gICR7b3JkZXJJbnZvaWNlVG90YWxGcmFnbWVudH1cbmA7XG4iXX0=