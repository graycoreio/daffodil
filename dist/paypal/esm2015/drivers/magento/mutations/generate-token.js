/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
/** @type {?} */
export const GenerateTokenMutation = gql `
	mutation GenerateToken($input: MagentoPaypalTokenRequest) {
		createPaypalExpressToken(input: $input) {
			token
			paypal_urls {
				start
				edit
			}
		}
	}
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGUtdG9rZW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvcGF5cGFsLyIsInNvdXJjZXMiOlsiZHJpdmVycy9tYWdlbnRvL211dGF0aW9ucy9nZW5lcmF0ZS10b2tlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxHQUFHLE1BQU0sYUFBYSxDQUFDOztBQUU5QixNQUFNLE9BQU8scUJBQXFCLEdBQUcsR0FBRyxDQUFBOzs7Ozs7Ozs7O0NBVXZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5cbmV4cG9ydCBjb25zdCBHZW5lcmF0ZVRva2VuTXV0YXRpb24gPSBncWxgXG5cdG11dGF0aW9uIEdlbmVyYXRlVG9rZW4oJGlucHV0OiBNYWdlbnRvUGF5cGFsVG9rZW5SZXF1ZXN0KSB7XG5cdFx0Y3JlYXRlUGF5cGFsRXhwcmVzc1Rva2VuKGlucHV0OiAkaW5wdXQpIHtcblx0XHRcdHRva2VuXG5cdFx0XHRwYXlwYWxfdXJscyB7XG5cdFx0XHRcdHN0YXJ0XG5cdFx0XHRcdGVkaXRcblx0XHRcdH1cblx0XHR9XG5cdH1cbmA7XG4iXX0=