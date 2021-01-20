/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} request
 * @param {?} config
 * @return {?}
 */
export function transformMagentoAuthorizeNetRequest(request, config) {
    return {
        cardData: {
            cardNumber: request.creditCard.cardnumber,
            cardCode: request.creditCard.securitycode,
            month: request.creditCard.month,
            year: request.creditCard.year
        },
        authData: {
            clientKey: config.clientKey,
            apiLoginID: config.apiLoginID
        }
    };
}
;
/**
 * @param {?} response
 * @param {?} ccNumber
 * @return {?}
 */
export function transformMagentoAuthorizeNetResponse(response, ccNumber) {
    return {
        code: 'authorizenet_acceptjs',
        authorizenet_acceptjs: {
            cc_last_4: parseInt(ccNumber.slice(12), 10),
            opaque_data_descriptor: 'COMMON.ACCEPT.INAPP.PAYMENT',
            opaque_data_value: response.opaqueData.dataValue
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXplLW5ldC10cmFuc2Zvcm1lci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9hdXRob3JpemVuZXQvZHJpdmVyL21hZ2VudG8vIiwic291cmNlcyI6WyJ0cmFuc2Zvcm1lcnMvYXV0aG9yaXplLW5ldC10cmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxNQUFNLFVBQVUsbUNBQW1DLENBQUMsT0FBcUMsRUFBRSxNQUE4QjtJQUN4SCxPQUFPO1FBQ04sUUFBUSxFQUFFO1lBQ1QsVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsVUFBVTtZQUN6QyxRQUFRLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxZQUFZO1lBQ3pDLEtBQUssRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUs7WUFDL0IsSUFBSSxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSTtTQUM3QjtRQUNELFFBQVEsRUFBRTtZQUNULFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixVQUFVLEVBQUUsTUFBTSxDQUFDLFVBQVU7U0FDN0I7S0FDRCxDQUFDO0FBQ0gsQ0FBQztBQUFBLENBQUM7Ozs7OztBQUVGLE1BQU0sVUFBVSxvQ0FBb0MsQ0FBQyxRQUE4QixFQUFFLFFBQWdCO0lBQ3BHLE9BQU87UUFDTixJQUFJLEVBQUUsdUJBQXVCO1FBQzdCLHFCQUFxQixFQUFFO1lBQ3RCLFNBQVMsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDM0Msc0JBQXNCLEVBQUUsNkJBQTZCO1lBQ3JELGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsU0FBUztTQUNoRDtLQUNELENBQUE7QUFDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGFmZkF1dGhvcml6ZU5ldFRva2VuUmVxdWVzdCwgQXV0aG9yaXplTmV0UmVzcG9uc2UsIEF1dGhvcml6ZU5ldFJlcXVlc3QgfSBmcm9tICdAZGFmZm9kaWwvYXV0aG9yaXplbmV0JztcbmltcG9ydCB7IERhZmZBdXRob3JpemVOZXRDb25maWcgfSBmcm9tICdAZGFmZm9kaWwvYXV0aG9yaXplbmV0L2RyaXZlcic7XG5cbmltcG9ydCB7IE1hZ2VudG9BdXRob3JpemVOZXRQYXltZW50IH0gZnJvbSAnLi4vbW9kZWxzL2F1dGhvcml6ZS1uZXQtcGF5bWVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1NYWdlbnRvQXV0aG9yaXplTmV0UmVxdWVzdChyZXF1ZXN0OiBEYWZmQXV0aG9yaXplTmV0VG9rZW5SZXF1ZXN0LCBjb25maWc6IERhZmZBdXRob3JpemVOZXRDb25maWcpOiBBdXRob3JpemVOZXRSZXF1ZXN0IHtcblx0cmV0dXJuIHtcblx0XHRjYXJkRGF0YToge1xuXHRcdFx0Y2FyZE51bWJlcjogcmVxdWVzdC5jcmVkaXRDYXJkLmNhcmRudW1iZXIsXG5cdFx0XHRjYXJkQ29kZTogcmVxdWVzdC5jcmVkaXRDYXJkLnNlY3VyaXR5Y29kZSxcblx0XHRcdG1vbnRoOiByZXF1ZXN0LmNyZWRpdENhcmQubW9udGgsXG5cdFx0XHR5ZWFyOiByZXF1ZXN0LmNyZWRpdENhcmQueWVhclxuXHRcdH0sXG5cdFx0YXV0aERhdGE6IHtcblx0XHRcdGNsaWVudEtleTogY29uZmlnLmNsaWVudEtleSxcblx0XHRcdGFwaUxvZ2luSUQ6IGNvbmZpZy5hcGlMb2dpbklEXG5cdFx0fVxuXHR9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybU1hZ2VudG9BdXRob3JpemVOZXRSZXNwb25zZShyZXNwb25zZTogQXV0aG9yaXplTmV0UmVzcG9uc2UsIGNjTnVtYmVyOiBzdHJpbmcpOiBNYWdlbnRvQXV0aG9yaXplTmV0UGF5bWVudCB7XG5cdHJldHVybiB7XG5cdFx0Y29kZTogJ2F1dGhvcml6ZW5ldF9hY2NlcHRqcycsXG5cdFx0YXV0aG9yaXplbmV0X2FjY2VwdGpzOiB7XG5cdFx0XHRjY19sYXN0XzQ6IHBhcnNlSW50KGNjTnVtYmVyLnNsaWNlKDEyKSwgMTApLFxuXHRcdFx0b3BhcXVlX2RhdGFfZGVzY3JpcHRvcjogJ0NPTU1PTi5BQ0NFUFQuSU5BUFAuUEFZTUVOVCcsXG5cdFx0XHRvcGFxdWVfZGF0YV92YWx1ZTogcmVzcG9uc2Uub3BhcXVlRGF0YS5kYXRhVmFsdWVcblx0XHR9XG5cdH1cbn1cbiJdfQ==