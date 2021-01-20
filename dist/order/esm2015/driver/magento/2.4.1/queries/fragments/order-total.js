/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
/** @type {?} */
export const orderTotalFragment = gql `
  fragment orderTotal on OrderTotal {
    __typename
    discounts {
      amount {
        value
      }
      label
    }
    grand_total {
      value
    }
    subtotal {
      value
    }
    total_tax {
      value
    }
    total_shipping {
      value
    }
  }
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItdG90YWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvb3JkZXIvZHJpdmVyL21hZ2VudG8vMi40LjEvIiwic291cmNlcyI6WyJxdWVyaWVzL2ZyYWdtZW50cy9vcmRlci10b3RhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxHQUFHLE1BQU0sYUFBYSxDQUFDOztBQUU5QixNQUFNLE9BQU8sa0JBQWtCLEdBQUcsR0FBRyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBc0JwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuXG5leHBvcnQgY29uc3Qgb3JkZXJUb3RhbEZyYWdtZW50ID0gZ3FsYFxuICBmcmFnbWVudCBvcmRlclRvdGFsIG9uIE9yZGVyVG90YWwge1xuICAgIF9fdHlwZW5hbWVcbiAgICBkaXNjb3VudHMge1xuICAgICAgYW1vdW50IHtcbiAgICAgICAgdmFsdWVcbiAgICAgIH1cbiAgICAgIGxhYmVsXG4gICAgfVxuICAgIGdyYW5kX3RvdGFsIHtcbiAgICAgIHZhbHVlXG4gICAgfVxuICAgIHN1YnRvdGFsIHtcbiAgICAgIHZhbHVlXG4gICAgfVxuICAgIHRvdGFsX3RheCB7XG4gICAgICB2YWx1ZVxuICAgIH1cbiAgICB0b3RhbF9zaGlwcGluZyB7XG4gICAgICB2YWx1ZVxuICAgIH1cbiAgfVxuYDtcbiJdfQ==