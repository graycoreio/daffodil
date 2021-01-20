/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core/graphql';
import { cartFragment } from './fragments/public_api';
/** @type {?} */
export const addSimpleCartItem = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
(extraCartFragments = []) => gql `
  mutation AddSimpleCartItem($cartId: String!, $input: CartItemInput!) {
    addSimpleProductsToCart(input: {
      cart_id: $cartId,
      cart_items: [{
        data: $input
      }]
    }) {
      cart {
        ...cart
        ${daffBuildFragmentNameSpread(...extraCartFragments)}
      }
    }
  }
  ${cartFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`);
/** @type {?} */
export const addBundleCartItem = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
(extraCartFragments = []) => gql `
  mutation AddBundleCartItem($cartId: String!, $input: CartItemInput!, $options: [BundleOptionInput]!) {
    addBundleProductsToCart(input: {
      cart_id: $cartId,
      cart_items: [{
				data: $input,
				bundle_options: $options
      }]
    }) {
      cart {
        ...cart
        ${daffBuildFragmentNameSpread(...extraCartFragments)}
      }
    }
  }
  ${cartFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`);
/** @type {?} */
export const addConfigurableCartItem = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
(extraCartFragments = []) => gql `
  mutation AddConfigurableCartItem($cartId: String!, $parentSku: String, $data: CartItemInput!) {
    addConfigurableProductsToCart(input: {
      cart_id: $cartId,
      cart_items: [{
				parent_sku: $parentSku
				data: $data,
      }]
    }) {
      cart {
        ...cart
        ${daffBuildFragmentNameSpread(...extraCartFragments)}
      }
    }
  }
  ${cartFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWNhcnQtaXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci9tYWdlbnRvLyIsInNvdXJjZXMiOlsicXVlcmllcy9hZGQtY2FydC1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEdBQUcsTUFBTSxhQUFhLENBQUM7QUFFOUIsT0FBTyxFQUFFLDJCQUEyQixFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFbEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUV0RCxNQUFNLE9BQU8saUJBQWlCOzs7O0FBQUcsQ0FBQyxxQkFBcUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUE7Ozs7Ozs7Ozs7VUFVdkUsMkJBQTJCLENBQUMsR0FBRyxrQkFBa0IsQ0FBQzs7OztJQUl4RCxZQUFZO0lBQ1osMkJBQTJCLENBQUMsR0FBRyxrQkFBa0IsQ0FBQztDQUNyRCxDQUFBOztBQUVELE1BQU0sT0FBTyxpQkFBaUI7Ozs7QUFBRyxDQUFDLHFCQUFxQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQTs7Ozs7Ozs7Ozs7VUFXdkUsMkJBQTJCLENBQUMsR0FBRyxrQkFBa0IsQ0FBQzs7OztJQUl4RCxZQUFZO0lBQ1osMkJBQTJCLENBQUMsR0FBRyxrQkFBa0IsQ0FBQztDQUNyRCxDQUFBOztBQUVELE1BQU0sT0FBTyx1QkFBdUI7Ozs7QUFBRyxDQUFDLHFCQUFxQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQTs7Ozs7Ozs7Ozs7VUFXN0UsMkJBQTJCLENBQUMsR0FBRyxrQkFBa0IsQ0FBQzs7OztJQUl4RCxZQUFZO0lBQ1osMkJBQTJCLENBQUMsR0FBRyxrQkFBa0IsQ0FBQztDQUNyRCxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9jdW1lbnROb2RlIH0gZnJvbSAnZ3JhcGhxbCc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuaW1wb3J0IHsgZGFmZkJ1aWxkRnJhZ21lbnROYW1lU3ByZWFkLCBkYWZmQnVpbGRGcmFnbWVudERlZmluaXRpb24gfSBmcm9tICdAZGFmZm9kaWwvY29yZS9ncmFwaHFsJztcblxuaW1wb3J0IHsgY2FydEZyYWdtZW50IH0gZnJvbSAnLi9mcmFnbWVudHMvcHVibGljX2FwaSc7XG5cbmV4cG9ydCBjb25zdCBhZGRTaW1wbGVDYXJ0SXRlbSA9IChleHRyYUNhcnRGcmFnbWVudHM6IERvY3VtZW50Tm9kZVtdID0gW10pID0+IGdxbGBcbiAgbXV0YXRpb24gQWRkU2ltcGxlQ2FydEl0ZW0oJGNhcnRJZDogU3RyaW5nISwgJGlucHV0OiBDYXJ0SXRlbUlucHV0ISkge1xuICAgIGFkZFNpbXBsZVByb2R1Y3RzVG9DYXJ0KGlucHV0OiB7XG4gICAgICBjYXJ0X2lkOiAkY2FydElkLFxuICAgICAgY2FydF9pdGVtczogW3tcbiAgICAgICAgZGF0YTogJGlucHV0XG4gICAgICB9XVxuICAgIH0pIHtcbiAgICAgIGNhcnQge1xuICAgICAgICAuLi5jYXJ0XG4gICAgICAgICR7ZGFmZkJ1aWxkRnJhZ21lbnROYW1lU3ByZWFkKC4uLmV4dHJhQ2FydEZyYWdtZW50cyl9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7Y2FydEZyYWdtZW50fVxuICAke2RhZmZCdWlsZEZyYWdtZW50RGVmaW5pdGlvbiguLi5leHRyYUNhcnRGcmFnbWVudHMpfVxuYDtcblxuZXhwb3J0IGNvbnN0IGFkZEJ1bmRsZUNhcnRJdGVtID0gKGV4dHJhQ2FydEZyYWdtZW50czogRG9jdW1lbnROb2RlW10gPSBbXSkgPT4gZ3FsYFxuICBtdXRhdGlvbiBBZGRCdW5kbGVDYXJ0SXRlbSgkY2FydElkOiBTdHJpbmchLCAkaW5wdXQ6IENhcnRJdGVtSW5wdXQhLCAkb3B0aW9uczogW0J1bmRsZU9wdGlvbklucHV0XSEpIHtcbiAgICBhZGRCdW5kbGVQcm9kdWN0c1RvQ2FydChpbnB1dDoge1xuICAgICAgY2FydF9pZDogJGNhcnRJZCxcbiAgICAgIGNhcnRfaXRlbXM6IFt7XG5cdFx0XHRcdGRhdGE6ICRpbnB1dCxcblx0XHRcdFx0YnVuZGxlX29wdGlvbnM6ICRvcHRpb25zXG4gICAgICB9XVxuICAgIH0pIHtcbiAgICAgIGNhcnQge1xuICAgICAgICAuLi5jYXJ0XG4gICAgICAgICR7ZGFmZkJ1aWxkRnJhZ21lbnROYW1lU3ByZWFkKC4uLmV4dHJhQ2FydEZyYWdtZW50cyl9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7Y2FydEZyYWdtZW50fVxuICAke2RhZmZCdWlsZEZyYWdtZW50RGVmaW5pdGlvbiguLi5leHRyYUNhcnRGcmFnbWVudHMpfVxuYDtcblxuZXhwb3J0IGNvbnN0IGFkZENvbmZpZ3VyYWJsZUNhcnRJdGVtID0gKGV4dHJhQ2FydEZyYWdtZW50czogRG9jdW1lbnROb2RlW10gPSBbXSkgPT4gZ3FsYFxuICBtdXRhdGlvbiBBZGRDb25maWd1cmFibGVDYXJ0SXRlbSgkY2FydElkOiBTdHJpbmchLCAkcGFyZW50U2t1OiBTdHJpbmcsICRkYXRhOiBDYXJ0SXRlbUlucHV0ISkge1xuICAgIGFkZENvbmZpZ3VyYWJsZVByb2R1Y3RzVG9DYXJ0KGlucHV0OiB7XG4gICAgICBjYXJ0X2lkOiAkY2FydElkLFxuICAgICAgY2FydF9pdGVtczogW3tcblx0XHRcdFx0cGFyZW50X3NrdTogJHBhcmVudFNrdVxuXHRcdFx0XHRkYXRhOiAkZGF0YSxcbiAgICAgIH1dXG4gICAgfSkge1xuICAgICAgY2FydCB7XG4gICAgICAgIC4uLmNhcnRcbiAgICAgICAgJHtkYWZmQnVpbGRGcmFnbWVudE5hbWVTcHJlYWQoLi4uZXh0cmFDYXJ0RnJhZ21lbnRzKX1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHtjYXJ0RnJhZ21lbnR9XG4gICR7ZGFmZkJ1aWxkRnJhZ21lbnREZWZpbml0aW9uKC4uLmV4dHJhQ2FydEZyYWdtZW50cyl9XG5gO1xuIl19