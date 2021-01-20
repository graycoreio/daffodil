var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
import { orderShipmentItemFragment } from './order-shipment-item';
import { orderShipmentTrackingFragment } from './order-shipment-tracking';
/** @type {?} */
export var orderShipmentFragment = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  fragment orderShipment on OrderShipment {\n    __typename\n    id\n    tracking {\n      ...orderShipmentTracking\n    }\n    items {\n      ...orderShipmentItem\n    }\n  }\n  ", "\n  ", "\n"], ["\n  fragment orderShipment on OrderShipment {\n    __typename\n    id\n    tracking {\n      ...orderShipmentTracking\n    }\n    items {\n      ...orderShipmentItem\n    }\n  }\n  ", "\n  ", "\n"])), orderShipmentItemFragment, orderShipmentTrackingFragment);
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItc2hpcG1lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvb3JkZXIvZHJpdmVyL21hZ2VudG8vMi40LjEvIiwic291cmNlcyI6WyJxdWVyaWVzL2ZyYWdtZW50cy9vcmRlci1zaGlwbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE9BQU8sR0FBRyxNQUFNLGFBQWEsQ0FBQztBQUU5QixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFFMUUsTUFBTSxLQUFPLHFCQUFxQixHQUFHLEdBQUcsd1FBQUEsdUxBV3BDLEVBQXlCLE1BQ3pCLEVBQTZCLElBQ2hDLEtBRkcseUJBQXlCLEVBQ3pCLDZCQUE2QixDQUNoQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuXG5pbXBvcnQgeyBvcmRlclNoaXBtZW50SXRlbUZyYWdtZW50IH0gZnJvbSAnLi9vcmRlci1zaGlwbWVudC1pdGVtJztcbmltcG9ydCB7IG9yZGVyU2hpcG1lbnRUcmFja2luZ0ZyYWdtZW50IH0gZnJvbSAnLi9vcmRlci1zaGlwbWVudC10cmFja2luZyc7XG5cbmV4cG9ydCBjb25zdCBvcmRlclNoaXBtZW50RnJhZ21lbnQgPSBncWxgXG4gIGZyYWdtZW50IG9yZGVyU2hpcG1lbnQgb24gT3JkZXJTaGlwbWVudCB7XG4gICAgX190eXBlbmFtZVxuICAgIGlkXG4gICAgdHJhY2tpbmcge1xuICAgICAgLi4ub3JkZXJTaGlwbWVudFRyYWNraW5nXG4gICAgfVxuICAgIGl0ZW1zIHtcbiAgICAgIC4uLm9yZGVyU2hpcG1lbnRJdGVtXG4gICAgfVxuICB9XG4gICR7b3JkZXJTaGlwbWVudEl0ZW1GcmFnbWVudH1cbiAgJHtvcmRlclNoaXBtZW50VHJhY2tpbmdGcmFnbWVudH1cbmA7XG4iXX0=