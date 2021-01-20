/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var DaffMagentoPaypalTransformerService = /** @class */ (function () {
    function DaffMagentoPaypalTransformerService() {
    }
    /**
     * @param {?} tokenRequest
     * @param {?} config
     * @return {?}
     */
    DaffMagentoPaypalTransformerService.prototype.transformOut = /**
     * @param {?} tokenRequest
     * @param {?} config
     * @return {?}
     */
    function (tokenRequest, config) {
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
    };
    /**
     * @param {?} tokenResponse
     * @return {?}
     */
    DaffMagentoPaypalTransformerService.prototype.transformIn = /**
     * @param {?} tokenResponse
     * @return {?}
     */
    function (tokenResponse) {
        return {
            token: tokenResponse.token,
            urls: {
                start: tokenResponse.paypal_urls.start,
                edit: tokenResponse.paypal_urls.edit
            }
        };
    };
    DaffMagentoPaypalTransformerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffMagentoPaypalTransformerService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoPaypalTransformerService_Factory() { return new DaffMagentoPaypalTransformerService(); }, token: DaffMagentoPaypalTransformerService, providedIn: "root" });
    return DaffMagentoPaypalTransformerService;
}());
export { DaffMagentoPaypalTransformerService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFnZW50by1wYXlwYWwtdHJhbnNmb3JtZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9wYXlwYWwvIiwic291cmNlcyI6WyJkcml2ZXJzL21hZ2VudG8vdHJhbnNmb3JtZXJzL21hZ2VudG8tcGF5cGFsLXRyYW5zZm9ybWVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBUzNDO0lBQUE7S0E0QkM7Ozs7OztJQXhCQSwwREFBWTs7Ozs7SUFBWixVQUFhLFlBQW9DLEVBQUUsTUFBK0I7UUFDakYsT0FBTztZQUNOLE9BQU8sRUFBRSxZQUFZLENBQUMsTUFBTTtZQUM1QixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsZ0JBQWdCO1lBQ2xELElBQUksRUFBRTtnQkFDTCxVQUFVLEVBQUUsTUFBTSxDQUFDLFVBQVU7Z0JBQzdCLFVBQVUsRUFBRSxNQUFNLENBQUMsVUFBVTtnQkFDN0IsV0FBVyxFQUFFLE1BQU0sQ0FBQyxXQUFXO2dCQUMvQixXQUFXLEVBQUUsTUFBTSxDQUFDLFdBQVc7YUFDL0I7WUFDRCxjQUFjLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsS0FBSztZQUNyRSxpQkFBaUIsRUFBRSxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsS0FBSztTQUM5RSxDQUFDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCx5REFBVzs7OztJQUFYLFVBQVksYUFBd0M7UUFDbkQsT0FBTztZQUNOLEtBQUssRUFBRSxhQUFhLENBQUMsS0FBSztZQUMxQixJQUFJLEVBQUU7Z0JBQ0wsS0FBSyxFQUFFLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSztnQkFDdEMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSTthQUNwQztTQUNELENBQUM7SUFDSCxDQUFDOztnQkEzQkQsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7OzhDQVhEO0NBcUNDLEFBNUJELElBNEJDO1NBekJZLG1DQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGFmZlBheXBhbFRva2VuUmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9wYXlwYWwtdG9rZW4tcmVxdWVzdCc7XG5pbXBvcnQgeyBEYWZmUGF5cGFsVG9rZW5SZXNwb25zZSB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9wYXlwYWwtdG9rZW4tcmVzcG9uc2UnO1xuaW1wb3J0IHsgTWFnZW50b1BheXBhbFRva2VuUmVxdWVzdCB9IGZyb20gJy4uL21vZGVscy9yZXF1ZXN0L21hZ2VudG8tcGF5cGFsLXRva2VuLXJlcXVlc3QnO1xuaW1wb3J0IHsgRGFmZk1hZ2VudG9QYXlwYWxDb25maWcgfSBmcm9tICcuLi9tb2RlbHMvY29uZmlnJztcbmltcG9ydCB7IERhZmZQYXlwYWxUcmFuc2Zvcm1lckludGVyZmFjZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvcGF5cGFsLXRyYW5zZm9ybWVyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBNYWdlbnRvUGF5cGFsRXhwcmVzc1Rva2VuIH0gZnJvbSAnLi4vbW9kZWxzL3Jlc3BvbnNlL21hZ2VudG8tcGF5cGFsLWV4cHJlc3MtdG9rZW4nO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmTWFnZW50b1BheXBhbFRyYW5zZm9ybWVyU2VydmljZSBpbXBsZW1lbnRzIERhZmZQYXlwYWxUcmFuc2Zvcm1lckludGVyZmFjZTxEYWZmUGF5cGFsVG9rZW5SZXF1ZXN0LCBEYWZmUGF5cGFsVG9rZW5SZXNwb25zZT4ge1xuXHR0cmFuc2Zvcm1PdXQodG9rZW5SZXF1ZXN0OiBEYWZmUGF5cGFsVG9rZW5SZXF1ZXN0LCBjb25maWc6IERhZmZNYWdlbnRvUGF5cGFsQ29uZmlnKTogTWFnZW50b1BheXBhbFRva2VuUmVxdWVzdCB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNhcnRfaWQ6IHRva2VuUmVxdWVzdC5jYXJ0SWQsXG5cdFx0XHRjb2RlOiBjb25maWcuY29kZSA/IGNvbmZpZy5jb2RlIDogJ3BheXBhbF9leHByZXNzJyxcblx0XHRcdHVybHM6IHtcblx0XHRcdFx0Y2FuY2VsX3VybDogY29uZmlnLmNhbmNlbF91cmwsXG5cdFx0XHRcdHJldHVybl91cmw6IGNvbmZpZy5yZXR1cm5fdXJsLFxuXHRcdFx0XHRwZW5kaW5nX3VybDogY29uZmlnLnBlbmRpbmdfdXJsLFxuXHRcdFx0XHRzdWNjZXNzX3VybDogY29uZmlnLnN1Y2Nlc3NfdXJsXG5cdFx0XHR9LFxuXHRcdFx0ZXhwcmVzc19idXR0b246IGNvbmZpZy5leHByZXNzX2J1dHRvbiA/IGNvbmZpZy5leHByZXNzX2J1dHRvbiA6IGZhbHNlLFxuXHRcdFx0dXNlX3BheXBhbF9jcmVkaXQ6IGNvbmZpZy51c2VfcGF5cGFsX2NyZWRpdCA/IGNvbmZpZy51c2VfcGF5cGFsX2NyZWRpdCA6IGZhbHNlXG5cdFx0fTtcblx0fVxuXG5cdHRyYW5zZm9ybUluKHRva2VuUmVzcG9uc2U6IE1hZ2VudG9QYXlwYWxFeHByZXNzVG9rZW4pOiBEYWZmUGF5cGFsVG9rZW5SZXNwb25zZSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRva2VuOiB0b2tlblJlc3BvbnNlLnRva2VuLFxuXHRcdFx0dXJsczoge1xuXHRcdFx0XHRzdGFydDogdG9rZW5SZXNwb25zZS5wYXlwYWxfdXJscy5zdGFydCxcblx0XHRcdFx0ZWRpdDogdG9rZW5SZXNwb25zZS5wYXlwYWxfdXJscy5lZGl0XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxufVxuIl19