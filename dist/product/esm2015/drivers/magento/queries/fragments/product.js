/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
import { magentoBundledProductFragment } from './bundled-product';
import { magentoSimpleProductFragment } from './simple-product';
import { magentoConfigurableProductFragment } from './configurable-product';
/** @type {?} */
export const magentoProductFragment = gql `
  fragment product on ProductInterface {
		__typename
		id
		url_key
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
		image {
			url
			label
		}
    thumbnail {
			url
			label
		}
		media_gallery_entries {
			label
			file
			position
			disabled
			id
		}
		short_description {
			html
		}
		description {
			html
		}
		...magentoBundledProduct
		...magentoSimpleProduct
		...magentoConfigurableProduct
	}
	${magentoBundledProductFragment}
	${magentoSimpleProductFragment}
	${magentoConfigurableProductFragment}
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9wcm9kdWN0LyIsInNvdXJjZXMiOlsiZHJpdmVycy9tYWdlbnRvL3F1ZXJpZXMvZnJhZ21lbnRzL3Byb2R1Y3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sR0FBRyxNQUFNLGFBQWEsQ0FBQztBQUM5QixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFFNUUsTUFBTSxPQUFPLHNCQUFzQixHQUFHLEdBQUcsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNkN0Qyw2QkFBNkI7R0FDN0IsNEJBQTRCO0dBQzVCLGtDQUFrQztDQUNwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgbWFnZW50b0J1bmRsZWRQcm9kdWN0RnJhZ21lbnQgfSBmcm9tICcuL2J1bmRsZWQtcHJvZHVjdCc7XG5pbXBvcnQgeyBtYWdlbnRvU2ltcGxlUHJvZHVjdEZyYWdtZW50IH0gZnJvbSAnLi9zaW1wbGUtcHJvZHVjdCc7XG5pbXBvcnQgeyBtYWdlbnRvQ29uZmlndXJhYmxlUHJvZHVjdEZyYWdtZW50IH0gZnJvbSAnLi9jb25maWd1cmFibGUtcHJvZHVjdCc7XG5cbmV4cG9ydCBjb25zdCBtYWdlbnRvUHJvZHVjdEZyYWdtZW50ID0gZ3FsYFxuICBmcmFnbWVudCBwcm9kdWN0IG9uIFByb2R1Y3RJbnRlcmZhY2Uge1xuXHRcdF9fdHlwZW5hbWVcblx0XHRpZFxuXHRcdHVybF9rZXlcblx0XHRuYW1lXG5cdFx0c2t1XG5cdFx0c3RvY2tfc3RhdHVzXG5cdFx0cHJpY2VfcmFuZ2Uge1xuXHRcdFx0bWF4aW11bV9wcmljZSB7XG5cdFx0XHRcdHJlZ3VsYXJfcHJpY2Uge1xuXHRcdFx0XHRcdHZhbHVlXG5cdFx0XHRcdFx0Y3VycmVuY3lcblx0XHRcdFx0fVxuXHRcdFx0XHRkaXNjb3VudCB7XG5cdFx0XHRcdFx0YW1vdW50X29mZlxuXHRcdFx0XHRcdHBlcmNlbnRfb2ZmXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aW1hZ2Uge1xuXHRcdFx0dXJsXG5cdFx0XHRsYWJlbFxuXHRcdH1cbiAgICB0aHVtYm5haWwge1xuXHRcdFx0dXJsXG5cdFx0XHRsYWJlbFxuXHRcdH1cblx0XHRtZWRpYV9nYWxsZXJ5X2VudHJpZXMge1xuXHRcdFx0bGFiZWxcblx0XHRcdGZpbGVcblx0XHRcdHBvc2l0aW9uXG5cdFx0XHRkaXNhYmxlZFxuXHRcdFx0aWRcblx0XHR9XG5cdFx0c2hvcnRfZGVzY3JpcHRpb24ge1xuXHRcdFx0aHRtbFxuXHRcdH1cblx0XHRkZXNjcmlwdGlvbiB7XG5cdFx0XHRodG1sXG5cdFx0fVxuXHRcdC4uLm1hZ2VudG9CdW5kbGVkUHJvZHVjdFxuXHRcdC4uLm1hZ2VudG9TaW1wbGVQcm9kdWN0XG5cdFx0Li4ubWFnZW50b0NvbmZpZ3VyYWJsZVByb2R1Y3Rcblx0fVxuXHQke21hZ2VudG9CdW5kbGVkUHJvZHVjdEZyYWdtZW50fVxuXHQke21hZ2VudG9TaW1wbGVQcm9kdWN0RnJhZ21lbnR9XG5cdCR7bWFnZW50b0NvbmZpZ3VyYWJsZVByb2R1Y3RGcmFnbWVudH1cbmA7XG4iXX0=