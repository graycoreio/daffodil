/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
import { magentoProductFragment } from './fragments/product';
/** @type {?} */
export const GetProductQuery = gql `
query GetAProduct($sku: String!){
	storeConfig {
		secure_base_media_url
	}
	products(filter: {
		sku: {
			eq: $sku
		}
	}){
		items {
			...product
		}
	}
}
${magentoProductFragment}
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXByb2R1Y3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvcHJvZHVjdC8iLCJzb3VyY2VzIjpbImRyaXZlcnMvbWFnZW50by9xdWVyaWVzL2dldC1wcm9kdWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEdBQUcsTUFBTSxhQUFhLENBQUM7QUFDOUIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBRTdELE1BQU0sT0FBTyxlQUFlLEdBQUcsR0FBRyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7RUFlaEMsc0JBQXNCO0NBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgeyBtYWdlbnRvUHJvZHVjdEZyYWdtZW50IH0gZnJvbSAnLi9mcmFnbWVudHMvcHJvZHVjdCc7XG5cbmV4cG9ydCBjb25zdCBHZXRQcm9kdWN0UXVlcnkgPSBncWxgXG5xdWVyeSBHZXRBUHJvZHVjdCgkc2t1OiBTdHJpbmchKXtcblx0c3RvcmVDb25maWcge1xuXHRcdHNlY3VyZV9iYXNlX21lZGlhX3VybFxuXHR9XG5cdHByb2R1Y3RzKGZpbHRlcjoge1xuXHRcdHNrdToge1xuXHRcdFx0ZXE6ICRza3Vcblx0XHR9XG5cdH0pe1xuXHRcdGl0ZW1zIHtcblx0XHRcdC4uLnByb2R1Y3Rcblx0XHR9XG5cdH1cbn1cbiR7bWFnZW50b1Byb2R1Y3RGcmFnbWVudH1cbmBcbiJdfQ==