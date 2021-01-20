/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
import { magentoProductFragment } from '@daffodil/product';
import { moneyFragment } from './money';
/** @type {?} */
export const cartItemFragment = gql `
  fragment cartItem on CartItemInterface {
		__typename
    id
    product {
      ...product
    }
    quantity
    prices {
      price {
        ...money
      }
      row_total {
        ...money
      }
      row_total_including_tax {
        ...money
      }
      total_item_discount {
        ...money
      }
		}
		...on ConfigurableCartItem {
			configurable_options {
				option_label
				value_label
			}
		}
		...on BundleCartItem {
			bundle_options {
				id
				label
				type
				values {
					id
					label
					price
					quantity
				}
			}
		}
  }
  ${magentoProductFragment}
  ${moneyFragment}
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL21hZ2VudG8vIiwic291cmNlcyI6WyJxdWVyaWVzL2ZyYWdtZW50cy9jYXJ0LWl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sR0FBRyxNQUFNLGFBQWEsQ0FBQztBQUU5QixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sU0FBUyxDQUFDOztBQUV4QyxNQUFNLE9BQU8sZ0JBQWdCLEdBQUcsR0FBRyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUEwQy9CLHNCQUFzQjtJQUN0QixhQUFhO0NBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5cbmltcG9ydCB7IG1hZ2VudG9Qcm9kdWN0RnJhZ21lbnQgfSBmcm9tICdAZGFmZm9kaWwvcHJvZHVjdCc7XG5cbmltcG9ydCB7IG1vbmV5RnJhZ21lbnQgfSBmcm9tICcuL21vbmV5JztcblxuZXhwb3J0IGNvbnN0IGNhcnRJdGVtRnJhZ21lbnQgPSBncWxgXG4gIGZyYWdtZW50IGNhcnRJdGVtIG9uIENhcnRJdGVtSW50ZXJmYWNlIHtcblx0XHRfX3R5cGVuYW1lXG4gICAgaWRcbiAgICBwcm9kdWN0IHtcbiAgICAgIC4uLnByb2R1Y3RcbiAgICB9XG4gICAgcXVhbnRpdHlcbiAgICBwcmljZXMge1xuICAgICAgcHJpY2Uge1xuICAgICAgICAuLi5tb25leVxuICAgICAgfVxuICAgICAgcm93X3RvdGFsIHtcbiAgICAgICAgLi4ubW9uZXlcbiAgICAgIH1cbiAgICAgIHJvd190b3RhbF9pbmNsdWRpbmdfdGF4IHtcbiAgICAgICAgLi4ubW9uZXlcbiAgICAgIH1cbiAgICAgIHRvdGFsX2l0ZW1fZGlzY291bnQge1xuICAgICAgICAuLi5tb25leVxuICAgICAgfVxuXHRcdH1cblx0XHQuLi5vbiBDb25maWd1cmFibGVDYXJ0SXRlbSB7XG5cdFx0XHRjb25maWd1cmFibGVfb3B0aW9ucyB7XG5cdFx0XHRcdG9wdGlvbl9sYWJlbFxuXHRcdFx0XHR2YWx1ZV9sYWJlbFxuXHRcdFx0fVxuXHRcdH1cblx0XHQuLi5vbiBCdW5kbGVDYXJ0SXRlbSB7XG5cdFx0XHRidW5kbGVfb3B0aW9ucyB7XG5cdFx0XHRcdGlkXG5cdFx0XHRcdGxhYmVsXG5cdFx0XHRcdHR5cGVcblx0XHRcdFx0dmFsdWVzIHtcblx0XHRcdFx0XHRpZFxuXHRcdFx0XHRcdGxhYmVsXG5cdFx0XHRcdFx0cHJpY2Vcblx0XHRcdFx0XHRxdWFudGl0eVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuICB9XG4gICR7bWFnZW50b1Byb2R1Y3RGcmFnbWVudH1cbiAgJHttb25leUZyYWdtZW50fVxuYDtcbiJdfQ==