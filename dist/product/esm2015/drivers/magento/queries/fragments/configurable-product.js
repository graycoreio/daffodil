/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
/** @type {?} */
export const magentoConfigurableProductFragment = gql `
  fragment magentoConfigurableProduct on ConfigurableProduct {
		configurable_options {
			attribute_code
			attribute_id
			id
			label
			position
			product_id
			values {
				label
				value_index
			}
		}
		variants {
			attributes {
				code
				label
				value_index
			}
			product {
				sku
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
				stock_status
				image {
					url
					label
				}
			}
		}
  }
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXByb2R1Y3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvcHJvZHVjdC8iLCJzb3VyY2VzIjpbImRyaXZlcnMvbWFnZW50by9xdWVyaWVzL2ZyYWdtZW50cy9jb25maWd1cmFibGUtcHJvZHVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxHQUFHLE1BQU0sYUFBYSxDQUFDOztBQUU5QixNQUFNLE9BQU8sa0NBQWtDLEdBQUcsR0FBRyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0EwQ3BEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5cbmV4cG9ydCBjb25zdCBtYWdlbnRvQ29uZmlndXJhYmxlUHJvZHVjdEZyYWdtZW50ID0gZ3FsYFxuICBmcmFnbWVudCBtYWdlbnRvQ29uZmlndXJhYmxlUHJvZHVjdCBvbiBDb25maWd1cmFibGVQcm9kdWN0IHtcblx0XHRjb25maWd1cmFibGVfb3B0aW9ucyB7XG5cdFx0XHRhdHRyaWJ1dGVfY29kZVxuXHRcdFx0YXR0cmlidXRlX2lkXG5cdFx0XHRpZFxuXHRcdFx0bGFiZWxcblx0XHRcdHBvc2l0aW9uXG5cdFx0XHRwcm9kdWN0X2lkXG5cdFx0XHR2YWx1ZXMge1xuXHRcdFx0XHRsYWJlbFxuXHRcdFx0XHR2YWx1ZV9pbmRleFxuXHRcdFx0fVxuXHRcdH1cblx0XHR2YXJpYW50cyB7XG5cdFx0XHRhdHRyaWJ1dGVzIHtcblx0XHRcdFx0Y29kZVxuXHRcdFx0XHRsYWJlbFxuXHRcdFx0XHR2YWx1ZV9pbmRleFxuXHRcdFx0fVxuXHRcdFx0cHJvZHVjdCB7XG5cdFx0XHRcdHNrdVxuXHRcdFx0XHRwcmljZV9yYW5nZSB7XG5cdFx0XHRcdFx0bWF4aW11bV9wcmljZSB7XG5cdFx0XHRcdFx0XHRyZWd1bGFyX3ByaWNlIHtcblx0XHRcdFx0XHRcdFx0dmFsdWVcblx0XHRcdFx0XHRcdFx0Y3VycmVuY3lcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGRpc2NvdW50IHtcblx0XHRcdFx0XHRcdFx0YW1vdW50X29mZlxuXHRcdFx0XHRcdFx0XHRwZXJjZW50X29mZlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRzdG9ja19zdGF0dXNcblx0XHRcdFx0aW1hZ2Uge1xuXHRcdFx0XHRcdHVybFxuXHRcdFx0XHRcdGxhYmVsXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG4gIH1cbmA7XG4iXX0=