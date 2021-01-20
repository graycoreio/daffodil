/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
import { moneyFragment } from './money';
/** @type {?} */
export const pricesFragment = gql `
  fragment prices on CartPrices {
		grand_total {
			...money
		}
		subtotal_excluding_tax {
			...money
		}
		subtotal_including_tax {
			...money
		}
		subtotal_with_discount_excluding_tax {
			...money
		}
		applied_taxes {
			amount {
				...money
			}
			label
		}
		discounts {
			amount {
				...money
			}
			label
		}
	}
  ${moneyFragment}
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpY2VzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL21hZ2VudG8vIiwic291cmNlcyI6WyJxdWVyaWVzL2ZyYWdtZW50cy9wcmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sR0FBRyxNQUFNLGFBQWEsQ0FBQztBQUM5QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sU0FBUyxDQUFDOztBQUV4QyxNQUFNLE9BQU8sY0FBYyxHQUFHLEdBQUcsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBMkI3QixhQUFhO0NBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgeyBtb25leUZyYWdtZW50IH0gZnJvbSAnLi9tb25leSc7XG5cbmV4cG9ydCBjb25zdCBwcmljZXNGcmFnbWVudCA9IGdxbGBcbiAgZnJhZ21lbnQgcHJpY2VzIG9uIENhcnRQcmljZXMge1xuXHRcdGdyYW5kX3RvdGFsIHtcblx0XHRcdC4uLm1vbmV5XG5cdFx0fVxuXHRcdHN1YnRvdGFsX2V4Y2x1ZGluZ190YXgge1xuXHRcdFx0Li4ubW9uZXlcblx0XHR9XG5cdFx0c3VidG90YWxfaW5jbHVkaW5nX3RheCB7XG5cdFx0XHQuLi5tb25leVxuXHRcdH1cblx0XHRzdWJ0b3RhbF93aXRoX2Rpc2NvdW50X2V4Y2x1ZGluZ190YXgge1xuXHRcdFx0Li4ubW9uZXlcblx0XHR9XG5cdFx0YXBwbGllZF90YXhlcyB7XG5cdFx0XHRhbW91bnQge1xuXHRcdFx0XHQuLi5tb25leVxuXHRcdFx0fVxuXHRcdFx0bGFiZWxcblx0XHR9XG5cdFx0ZGlzY291bnRzIHtcblx0XHRcdGFtb3VudCB7XG5cdFx0XHRcdC4uLm1vbmV5XG5cdFx0XHR9XG5cdFx0XHRsYWJlbFxuXHRcdH1cblx0fVxuICAke21vbmV5RnJhZ21lbnR9XG5gO1xuIl19