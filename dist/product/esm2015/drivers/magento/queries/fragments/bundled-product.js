/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
/** @type {?} */
export const magentoBundledProductFragment = gql `
  fragment magentoBundledProduct on BundleProduct {
		items {
			option_id
			position
			required
			sku
			title
			type
			options {
				can_change_quantity
				id
				is_default
				label
				position
				price_type
				price
				quantity
				product {
					id
					name
					sku
					stock_status
					price_range {
						maximum_price {
							regular_price {
								value
								currency
							}
							discount {
								amount_off
								percent_off
							}
						}
					}
				}
			}
		}
  }
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlZC1wcm9kdWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3Byb2R1Y3QvIiwic291cmNlcyI6WyJkcml2ZXJzL21hZ2VudG8vcXVlcmllcy9mcmFnbWVudHMvYnVuZGxlZC1wcm9kdWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEdBQUcsTUFBTSxhQUFhLENBQUM7O0FBRTlCLE1BQU0sT0FBTyw2QkFBNkIsR0FBRyxHQUFHLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXVDL0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuZXhwb3J0IGNvbnN0IG1hZ2VudG9CdW5kbGVkUHJvZHVjdEZyYWdtZW50ID0gZ3FsYFxuICBmcmFnbWVudCBtYWdlbnRvQnVuZGxlZFByb2R1Y3Qgb24gQnVuZGxlUHJvZHVjdCB7XG5cdFx0aXRlbXMge1xuXHRcdFx0b3B0aW9uX2lkXG5cdFx0XHRwb3NpdGlvblxuXHRcdFx0cmVxdWlyZWRcblx0XHRcdHNrdVxuXHRcdFx0dGl0bGVcblx0XHRcdHR5cGVcblx0XHRcdG9wdGlvbnMge1xuXHRcdFx0XHRjYW5fY2hhbmdlX3F1YW50aXR5XG5cdFx0XHRcdGlkXG5cdFx0XHRcdGlzX2RlZmF1bHRcblx0XHRcdFx0bGFiZWxcblx0XHRcdFx0cG9zaXRpb25cblx0XHRcdFx0cHJpY2VfdHlwZVxuXHRcdFx0XHRwcmljZVxuXHRcdFx0XHRxdWFudGl0eVxuXHRcdFx0XHRwcm9kdWN0IHtcblx0XHRcdFx0XHRpZFxuXHRcdFx0XHRcdG5hbWVcblx0XHRcdFx0XHRza3Vcblx0XHRcdFx0XHRzdG9ja19zdGF0dXNcblx0XHRcdFx0XHRwcmljZV9yYW5nZSB7XG5cdFx0XHRcdFx0XHRtYXhpbXVtX3ByaWNlIHtcblx0XHRcdFx0XHRcdFx0cmVndWxhcl9wcmljZSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWVcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW5jeVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGRpc2NvdW50IHtcblx0XHRcdFx0XHRcdFx0XHRhbW91bnRfb2ZmXG5cdFx0XHRcdFx0XHRcdFx0cGVyY2VudF9vZmZcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cbiAgfVxuYDtcbiJdfQ==