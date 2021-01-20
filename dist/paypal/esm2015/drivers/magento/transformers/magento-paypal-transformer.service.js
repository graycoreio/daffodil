/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class DaffMagentoPaypalTransformerService {
    /**
     * @param {?} tokenRequest
     * @param {?} config
     * @return {?}
     */
    transformOut(tokenRequest, config) {
        return {
            cart_id: tokenRequest.cartId,
            code: config.code ? config.code : 'paypal_express',
            urls: {
                cancel_url: config.cancel_url,
                return_url: config.return_url,
                pending_url: config.pending_url,
                success_url: config.success_url
            },
            express_button: config.express_button ? config.express_button : false,
            use_paypal_credit: config.use_paypal_credit ? config.use_paypal_credit : false
        };
    }
    /**
     * @param {?} tokenResponse
     * @return {?}
     */
    transformIn(tokenResponse) {
        return {
            token: tokenResponse.token,
            urls: {
                start: tokenResponse.paypal_urls.start,
                edit: tokenResponse.paypal_urls.edit
            }
        };
    }
}
DaffMagentoPaypalTransformerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffMagentoPaypalTransformerService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoPaypalTransformerService_Factory() { return new DaffMagentoPaypalTransformerService(); }, token: DaffMagentoPaypalTransformerService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFnZW50by1wYXlwYWwtdHJhbnNmb3JtZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9wYXlwYWwvIiwic291cmNlcyI6WyJkcml2ZXJzL21hZ2VudG8vdHJhbnNmb3JtZXJzL21hZ2VudG8tcGF5cGFsLXRyYW5zZm9ybWVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBWTNDLE1BQU0sT0FBTyxtQ0FBbUM7Ozs7OztJQUMvQyxZQUFZLENBQUMsWUFBb0MsRUFBRSxNQUErQjtRQUNqRixPQUFPO1lBQ04sT0FBTyxFQUFFLFlBQVksQ0FBQyxNQUFNO1lBQzVCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0I7WUFDbEQsSUFBSSxFQUFFO2dCQUNMLFVBQVUsRUFBRSxNQUFNLENBQUMsVUFBVTtnQkFDN0IsVUFBVSxFQUFFLE1BQU0sQ0FBQyxVQUFVO2dCQUM3QixXQUFXLEVBQUUsTUFBTSxDQUFDLFdBQVc7Z0JBQy9CLFdBQVcsRUFBRSxNQUFNLENBQUMsV0FBVzthQUMvQjtZQUNELGNBQWMsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQ3JFLGlCQUFpQixFQUFFLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxLQUFLO1NBQzlFLENBQUM7SUFDSCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxhQUF3QztRQUNuRCxPQUFPO1lBQ04sS0FBSyxFQUFFLGFBQWEsQ0FBQyxLQUFLO1lBQzFCLElBQUksRUFBRTtnQkFDTCxLQUFLLEVBQUUsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLO2dCQUN0QyxJQUFJLEVBQUUsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJO2FBQ3BDO1NBQ0QsQ0FBQztJQUNILENBQUM7OztZQTNCRCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhZmZQYXlwYWxUb2tlblJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvcGF5cGFsLXRva2VuLXJlcXVlc3QnO1xuaW1wb3J0IHsgRGFmZlBheXBhbFRva2VuUmVzcG9uc2UgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvcGF5cGFsLXRva2VuLXJlc3BvbnNlJztcbmltcG9ydCB7IE1hZ2VudG9QYXlwYWxUb2tlblJlcXVlc3QgfSBmcm9tICcuLi9tb2RlbHMvcmVxdWVzdC9tYWdlbnRvLXBheXBhbC10b2tlbi1yZXF1ZXN0JztcbmltcG9ydCB7IERhZmZNYWdlbnRvUGF5cGFsQ29uZmlnIH0gZnJvbSAnLi4vbW9kZWxzL2NvbmZpZyc7XG5pbXBvcnQgeyBEYWZmUGF5cGFsVHJhbnNmb3JtZXJJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3BheXBhbC10cmFuc2Zvcm1lci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTWFnZW50b1BheXBhbEV4cHJlc3NUb2tlbiB9IGZyb20gJy4uL21vZGVscy9yZXNwb25zZS9tYWdlbnRvLXBheXBhbC1leHByZXNzLXRva2VuJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZk1hZ2VudG9QYXlwYWxUcmFuc2Zvcm1lclNlcnZpY2UgaW1wbGVtZW50cyBEYWZmUGF5cGFsVHJhbnNmb3JtZXJJbnRlcmZhY2U8RGFmZlBheXBhbFRva2VuUmVxdWVzdCwgRGFmZlBheXBhbFRva2VuUmVzcG9uc2U+IHtcblx0dHJhbnNmb3JtT3V0KHRva2VuUmVxdWVzdDogRGFmZlBheXBhbFRva2VuUmVxdWVzdCwgY29uZmlnOiBEYWZmTWFnZW50b1BheXBhbENvbmZpZyk6IE1hZ2VudG9QYXlwYWxUb2tlblJlcXVlc3Qge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjYXJ0X2lkOiB0b2tlblJlcXVlc3QuY2FydElkLFxuXHRcdFx0Y29kZTogY29uZmlnLmNvZGUgPyBjb25maWcuY29kZSA6ICdwYXlwYWxfZXhwcmVzcycsXG5cdFx0XHR1cmxzOiB7XG5cdFx0XHRcdGNhbmNlbF91cmw6IGNvbmZpZy5jYW5jZWxfdXJsLFxuXHRcdFx0XHRyZXR1cm5fdXJsOiBjb25maWcucmV0dXJuX3VybCxcblx0XHRcdFx0cGVuZGluZ191cmw6IGNvbmZpZy5wZW5kaW5nX3VybCxcblx0XHRcdFx0c3VjY2Vzc191cmw6IGNvbmZpZy5zdWNjZXNzX3VybFxuXHRcdFx0fSxcblx0XHRcdGV4cHJlc3NfYnV0dG9uOiBjb25maWcuZXhwcmVzc19idXR0b24gPyBjb25maWcuZXhwcmVzc19idXR0b24gOiBmYWxzZSxcblx0XHRcdHVzZV9wYXlwYWxfY3JlZGl0OiBjb25maWcudXNlX3BheXBhbF9jcmVkaXQgPyBjb25maWcudXNlX3BheXBhbF9jcmVkaXQgOiBmYWxzZVxuXHRcdH07XG5cdH1cblxuXHR0cmFuc2Zvcm1Jbih0b2tlblJlc3BvbnNlOiBNYWdlbnRvUGF5cGFsRXhwcmVzc1Rva2VuKTogRGFmZlBheXBhbFRva2VuUmVzcG9uc2Uge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0b2tlbjogdG9rZW5SZXNwb25zZS50b2tlbixcblx0XHRcdHVybHM6IHtcblx0XHRcdFx0c3RhcnQ6IHRva2VuUmVzcG9uc2UucGF5cGFsX3VybHMuc3RhcnQsXG5cdFx0XHRcdGVkaXQ6IHRva2VuUmVzcG9uc2UucGF5cGFsX3VybHMuZWRpdFxuXHRcdFx0fVxuXHRcdH07XG5cdH1cbn1cbiJdfQ==