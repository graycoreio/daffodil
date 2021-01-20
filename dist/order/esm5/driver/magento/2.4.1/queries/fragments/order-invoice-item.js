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
export var orderInvoiceItemFragment = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  fragment orderInvoiceItem on InvoiceItemInterface {\n    __typename\n    id\n    quantity_invoiced\n    order_item {\n      ...orderItem\n    }\n  }\n  ", "\n"], ["\n  fragment orderInvoiceItem on InvoiceItemInterface {\n    __typename\n    id\n    quantity_invoiced\n    order_item {\n      ...orderItem\n    }\n  }\n  ", "\n"])), orderItemFragment);
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItaW52b2ljZS1pdGVtLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL29yZGVyL2RyaXZlci9tYWdlbnRvLzIuNC4xLyIsInNvdXJjZXMiOlsicXVlcmllcy9mcmFnbWVudHMvb3JkZXItaW52b2ljZS1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBTyxHQUFHLE1BQU0sYUFBYSxDQUFDO0FBRTlCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFFakQsTUFBTSxLQUFPLHdCQUF3QixHQUFHLEdBQUcsdU9BQUEsOEpBU3ZDLEVBQWlCLElBQ3BCLEtBREcsaUJBQWlCLENBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5cbmltcG9ydCB7IG9yZGVySXRlbUZyYWdtZW50IH0gZnJvbSAnLi9vcmRlci1pdGVtJztcblxuZXhwb3J0IGNvbnN0IG9yZGVySW52b2ljZUl0ZW1GcmFnbWVudCA9IGdxbGBcbiAgZnJhZ21lbnQgb3JkZXJJbnZvaWNlSXRlbSBvbiBJbnZvaWNlSXRlbUludGVyZmFjZSB7XG4gICAgX190eXBlbmFtZVxuICAgIGlkXG4gICAgcXVhbnRpdHlfaW52b2ljZWRcbiAgICBvcmRlcl9pdGVtIHtcbiAgICAgIC4uLm9yZGVySXRlbVxuICAgIH1cbiAgfVxuICAke29yZGVySXRlbUZyYWdtZW50fVxuYDtcbiJdfQ==