var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
/** @type {?} */
export var orderTotalFragment = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  fragment orderTotal on OrderTotal {\n    __typename\n    discounts {\n      amount {\n        value\n      }\n      label\n    }\n    grand_total {\n      value\n    }\n    subtotal {\n      value\n    }\n    total_tax {\n      value\n    }\n    total_shipping {\n      value\n    }\n  }\n"], ["\n  fragment orderTotal on OrderTotal {\n    __typename\n    discounts {\n      amount {\n        value\n      }\n      label\n    }\n    grand_total {\n      value\n    }\n    subtotal {\n      value\n    }\n    total_tax {\n      value\n    }\n    total_shipping {\n      value\n    }\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItdG90YWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvb3JkZXIvZHJpdmVyL21hZ2VudG8vMi40LjEvIiwic291cmNlcyI6WyJxdWVyaWVzL2ZyYWdtZW50cy9vcmRlci10b3RhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE9BQU8sR0FBRyxNQUFNLGFBQWEsQ0FBQzs7QUFFOUIsTUFBTSxLQUFPLGtCQUFrQixHQUFHLEdBQUcsMFdBQUEsdVNBc0JwQyxJQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5cbmV4cG9ydCBjb25zdCBvcmRlclRvdGFsRnJhZ21lbnQgPSBncWxgXG4gIGZyYWdtZW50IG9yZGVyVG90YWwgb24gT3JkZXJUb3RhbCB7XG4gICAgX190eXBlbmFtZVxuICAgIGRpc2NvdW50cyB7XG4gICAgICBhbW91bnQge1xuICAgICAgICB2YWx1ZVxuICAgICAgfVxuICAgICAgbGFiZWxcbiAgICB9XG4gICAgZ3JhbmRfdG90YWwge1xuICAgICAgdmFsdWVcbiAgICB9XG4gICAgc3VidG90YWwge1xuICAgICAgdmFsdWVcbiAgICB9XG4gICAgdG90YWxfdGF4IHtcbiAgICAgIHZhbHVlXG4gICAgfVxuICAgIHRvdGFsX3NoaXBwaW5nIHtcbiAgICAgIHZhbHVlXG4gICAgfVxuICB9XG5gO1xuIl19