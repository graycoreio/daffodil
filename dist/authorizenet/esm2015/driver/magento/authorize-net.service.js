/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { DaffAcceptJsLoadingService } from '@daffodil/authorizenet';
import { DaffAuthorizeNetConfigToken, DAFF_AUTHORIZE_NET_ERROR_CODE_MAP } from '@daffodil/authorizenet/driver';
import { transformMagentoAuthorizeNetRequest, transformMagentoAuthorizeNetResponse } from './transformers/authorize-net-transformer';
import * as i0 from "@angular/core";
import * as i1 from "@daffodil/authorizenet/driver";
import * as i2 from "@daffodil/authorizenet";
export class DaffMagentoAuthorizeNetService {
    /**
     * @param {?} config
     * @param {?} acceptJsLoader
     */
    constructor(config, acceptJsLoader) {
        this.config = config;
        this.acceptJsLoader = acceptJsLoader;
    }
    /**
     * @param {?} paymentTokenRequest
     * @return {?}
     */
    generateToken(paymentTokenRequest) {
        return new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        observer => this.acceptJsLoader.getAccept().dispatchData(transformMagentoAuthorizeNetRequest(paymentTokenRequest, this.config), (/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            if (response.messages.resultCode === 'Error') {
                /** @type {?} */
                const MappedError = DAFF_AUTHORIZE_NET_ERROR_CODE_MAP[response.messages.message[0].code];
                /** @type {?} */
                const message = response.messages.message[0].code + ': ' + response.messages.message[0].text;
                throw MappedError ? new MappedError(message) : new Error(message);
            }
            else {
                observer.next(transformMagentoAuthorizeNetResponse(response, paymentTokenRequest.creditCard.cardnumber));
            }
        }))));
    }
}
DaffMagentoAuthorizeNetService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffMagentoAuthorizeNetService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DaffAuthorizeNetConfigToken,] }] },
    { type: DaffAcceptJsLoadingService }
];
/** @nocollapse */ DaffMagentoAuthorizeNetService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoAuthorizeNetService_Factory() { return new DaffMagentoAuthorizeNetService(i0.ɵɵinject(i1.DaffAuthorizeNetConfigToken), i0.ɵɵinject(i2.DaffAcceptJsLoadingService)); }, token: DaffMagentoAuthorizeNetService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffMagentoAuthorizeNetService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    DaffMagentoAuthorizeNetService.prototype.acceptJsLoader;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXplLW5ldC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2F1dGhvcml6ZW5ldC9kcml2ZXIvbWFnZW50by8iLCJzb3VyY2VzIjpbImF1dGhvcml6ZS1uZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxPQUFPLEVBQXNELDBCQUEwQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEgsT0FBTyxFQUEyQiwyQkFBMkIsRUFBMEIsaUNBQWlDLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUVoSyxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQzs7OztBQU1ySSxNQUFNLE9BQU8sOEJBQThCOzs7OztJQUUxQyxZQUMrQyxNQUE4QixFQUNsRSxjQUEwQztRQUROLFdBQU0sR0FBTixNQUFNLENBQXdCO1FBQ2xFLG1CQUFjLEdBQWQsY0FBYyxDQUE0QjtJQUNsRCxDQUFDOzs7OztJQUVKLGFBQWEsQ0FBQyxtQkFBaUQ7UUFDOUQsT0FBTyxJQUFJLFVBQVU7Ozs7UUFBQyxRQUFRLENBQUMsRUFBRSxDQUNoQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxDQUFDLFlBQVksQ0FBQyxtQ0FBbUMsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDOzs7O1FBQUUsQ0FBQyxRQUE4QixFQUFFLEVBQUU7WUFDdEosSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsS0FBSyxPQUFPLEVBQUU7O3NCQUNsQyxXQUFXLEdBQUcsaUNBQWlDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDOztzQkFDbEYsT0FBTyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtnQkFFakcsTUFBTSxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNsRTtpQkFBTTtnQkFDTixRQUFRLENBQUMsSUFBSSxDQUFDLG9DQUFvQyxDQUFDLFFBQVEsRUFBRSxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzthQUN6RztRQUNGLENBQUMsRUFBQyxFQUNGLENBQUM7SUFDSCxDQUFDOzs7WUF2QkQsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7OzRDQUlJLE1BQU0sU0FBQywyQkFBMkI7WUFac0IsMEJBQTBCOzs7OztJQVluRixnREFBMEU7Ozs7O0lBQzFFLHdEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEYWZmQXV0aG9yaXplTmV0VG9rZW5SZXF1ZXN0LCBBdXRob3JpemVOZXRSZXNwb25zZSwgRGFmZkFjY2VwdEpzTG9hZGluZ1NlcnZpY2UgfSBmcm9tICdAZGFmZm9kaWwvYXV0aG9yaXplbmV0JztcbmltcG9ydCB7IERhZmZBdXRob3JpemVOZXRTZXJ2aWNlLCBEYWZmQXV0aG9yaXplTmV0Q29uZmlnVG9rZW4sIERhZmZBdXRob3JpemVOZXRDb25maWcsIERBRkZfQVVUSE9SSVpFX05FVF9FUlJPUl9DT0RFX01BUCB9IGZyb20gJ0BkYWZmb2RpbC9hdXRob3JpemVuZXQvZHJpdmVyJztcblxuaW1wb3J0IHsgdHJhbnNmb3JtTWFnZW50b0F1dGhvcml6ZU5ldFJlcXVlc3QsIHRyYW5zZm9ybU1hZ2VudG9BdXRob3JpemVOZXRSZXNwb25zZSB9IGZyb20gJy4vdHJhbnNmb3JtZXJzL2F1dGhvcml6ZS1uZXQtdHJhbnNmb3JtZXInO1xuaW1wb3J0IHsgTWFnZW50b0F1dGhvcml6ZU5ldFBheW1lbnQgfSBmcm9tICcuL21vZGVscy9hdXRob3JpemUtbmV0LXBheW1lbnQnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmTWFnZW50b0F1dGhvcml6ZU5ldFNlcnZpY2UgaW1wbGVtZW50cyBEYWZmQXV0aG9yaXplTmV0U2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IoXG4gICAgQEluamVjdChEYWZmQXV0aG9yaXplTmV0Q29uZmlnVG9rZW4pIHB1YmxpYyBjb25maWc6IERhZmZBdXRob3JpemVOZXRDb25maWcsXG4gICAgcHJpdmF0ZSBhY2NlcHRKc0xvYWRlcjogRGFmZkFjY2VwdEpzTG9hZGluZ1NlcnZpY2Vcblx0KSB7fVxuXG5cdGdlbmVyYXRlVG9rZW4ocGF5bWVudFRva2VuUmVxdWVzdDogRGFmZkF1dGhvcml6ZU5ldFRva2VuUmVxdWVzdCk6IE9ic2VydmFibGU8TWFnZW50b0F1dGhvcml6ZU5ldFBheW1lbnQ+IHtcblx0XHRyZXR1cm4gbmV3IE9ic2VydmFibGUob2JzZXJ2ZXIgPT5cblx0XHRcdHRoaXMuYWNjZXB0SnNMb2FkZXIuZ2V0QWNjZXB0KCkuZGlzcGF0Y2hEYXRhKHRyYW5zZm9ybU1hZ2VudG9BdXRob3JpemVOZXRSZXF1ZXN0KHBheW1lbnRUb2tlblJlcXVlc3QsIHRoaXMuY29uZmlnKSwgKHJlc3BvbnNlOiBBdXRob3JpemVOZXRSZXNwb25zZSkgPT4ge1xuXHRcdFx0XHRpZiAocmVzcG9uc2UubWVzc2FnZXMucmVzdWx0Q29kZSA9PT0gJ0Vycm9yJykge1xuICAgICAgICAgIGNvbnN0IE1hcHBlZEVycm9yID0gREFGRl9BVVRIT1JJWkVfTkVUX0VSUk9SX0NPREVfTUFQW3Jlc3BvbnNlLm1lc3NhZ2VzLm1lc3NhZ2VbMF0uY29kZV07XG4gICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHJlc3BvbnNlLm1lc3NhZ2VzLm1lc3NhZ2VbMF0uY29kZSArICc6ICcgKyByZXNwb25zZS5tZXNzYWdlcy5tZXNzYWdlWzBdLnRleHQ7XG5cblx0XHRcdFx0XHR0aHJvdyBNYXBwZWRFcnJvciA/IG5ldyBNYXBwZWRFcnJvcihtZXNzYWdlKSA6IG5ldyBFcnJvcihtZXNzYWdlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRvYnNlcnZlci5uZXh0KHRyYW5zZm9ybU1hZ2VudG9BdXRob3JpemVOZXRSZXNwb25zZShyZXNwb25zZSwgcGF5bWVudFRva2VuUmVxdWVzdC5jcmVkaXRDYXJkLmNhcmRudW1iZXIpKTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG59XG4iXX0=