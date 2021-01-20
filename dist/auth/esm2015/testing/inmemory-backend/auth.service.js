/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { STATUS } from 'angular-in-memory-web-api';
import * as faker from 'faker/locale/en_US';
import * as i0 from "@angular/core";
export class DaffInMemoryBackendAuthService {
    constructor() { }
    /**
     * @private
     * @return {?}
     */
    generateToken() {
        return faker.random.alphaNumeric(16);
    }
    /**
     * @private
     * @return {?}
     */
    generateId() {
        return faker.random.uuid();
    }
    /**
     * @return {?}
     */
    createDb() {
        return {
            auth: {}
        };
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    post(reqInfo) {
        if (reqInfo.id === 'login') {
            return this.login(reqInfo);
        }
        else if (reqInfo.id === 'register') {
            return this.register(reqInfo);
        }
        else if (reqInfo.id === 'logout') {
            return this.logout(reqInfo);
        }
        else if (reqInfo.id === 'check') {
            return this.check(reqInfo);
        }
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    login(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => ({
            body: {
                token: this.generateToken()
            },
            status: STATUS.OK
        })));
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    register(reqInfo) {
        const { customer, password } = reqInfo.utils.getJsonBody(reqInfo.req);
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => ({
            body: {
                email: customer.email,
                password
            },
            status: STATUS.CREATED
        })));
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    logout(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => ({
            body: { success: true },
            status: STATUS.OK
        })));
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    check(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => ({
            body: {},
            status: STATUS.OK
        })));
    }
}
DaffInMemoryBackendAuthService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryBackendAuthService.ctorParameters = () => [];
/** @nocollapse */ DaffInMemoryBackendAuthService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendAuthService_Factory() { return new DaffInMemoryBackendAuthService(); }, token: DaffInMemoryBackendAuthService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2F1dGgvdGVzdGluZy8iLCJzb3VyY2VzIjpbImlubWVtb3J5LWJhY2tlbmQvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFFTCxNQUFNLEVBQ1AsTUFBTSwyQkFBMkIsQ0FBQztBQUNuQyxPQUFPLEtBQUssS0FBSyxNQUFNLG9CQUFvQixDQUFDOztBQUs1QyxNQUFNLE9BQU8sOEJBQThCO0lBQ3pDLGdCQUFlLENBQUM7Ozs7O0lBRVIsYUFBYTtRQUNuQixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBRU8sVUFBVTtRQUNoQixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixPQUFPO1lBQ0wsSUFBSSxFQUFFLEVBQUU7U0FDVCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsT0FBTztRQUNWLElBQUksT0FBTyxDQUFDLEVBQUUsS0FBSyxPQUFPLEVBQUU7WUFDMUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzVCO2FBQU0sSUFBSSxPQUFPLENBQUMsRUFBRSxLQUFLLFVBQVUsRUFBRTtZQUNwQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDL0I7YUFBTSxJQUFJLE9BQU8sQ0FBQyxFQUFFLEtBQUssUUFBUSxFQUFFO1lBQ2xDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM3QjthQUFNLElBQUksT0FBTyxDQUFDLEVBQUUsS0FBSyxPQUFPLEVBQUU7WUFDakMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzVCO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sS0FBSyxDQUFDLE9BQVk7UUFDeEIsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWU7OztRQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDMUMsSUFBSSxFQUFFO2dCQUNKLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFO2FBQzVCO1lBQ0QsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ2xCLENBQUMsRUFBQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7O0lBRU8sUUFBUSxDQUFDLE9BQU87Y0FDaEIsRUFDSixRQUFRLEVBQ1IsUUFBUSxFQUNULEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUUxQyxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZTs7O1FBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUMxQyxJQUFJLEVBQUU7Z0JBQ0osS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLO2dCQUNyQixRQUFRO2FBQ1Q7WUFDRCxNQUFNLEVBQUUsTUFBTSxDQUFDLE9BQU87U0FDdkIsQ0FBQyxFQUFDLENBQUE7SUFDTCxDQUFDOzs7Ozs7SUFFTyxNQUFNLENBQUMsT0FBTztRQUNwQixPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZTs7O1FBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUMxQyxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFDO1lBQ3JCLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNsQixDQUFDLEVBQUMsQ0FBQTtJQUNMLENBQUM7Ozs7OztJQUVPLEtBQUssQ0FBQyxPQUFPO1FBQ25CLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQzFDLElBQUksRUFBRSxFQUFFO1lBQ1IsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ2xCLENBQUMsRUFBQyxDQUFBO0lBQ0wsQ0FBQzs7O1lBcEVGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEluTWVtb3J5RGJTZXJ2aWNlLFxuICBTVEFUVVNcbn0gZnJvbSAnYW5ndWxhci1pbi1tZW1vcnktd2ViLWFwaSc7XG5pbXBvcnQgKiBhcyBmYWtlciBmcm9tICdmYWtlci9sb2NhbGUvZW5fVVMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmSW5NZW1vcnlCYWNrZW5kQXV0aFNlcnZpY2UgaW1wbGVtZW50cyBJbk1lbW9yeURiU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBwcml2YXRlIGdlbmVyYXRlVG9rZW4oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZmFrZXIucmFuZG9tLmFscGhhTnVtZXJpYygxNik7XG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlSWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZmFrZXIucmFuZG9tLnV1aWQoKTtcbiAgfVxuXG4gIGNyZWF0ZURiKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhdXRoOiB7fVxuICAgIH07XG4gIH1cblxuICBwb3N0KHJlcUluZm8pIHtcbiAgICBpZiAocmVxSW5mby5pZCA9PT0gJ2xvZ2luJykge1xuICAgICAgcmV0dXJuIHRoaXMubG9naW4ocmVxSW5mbyk7XG4gICAgfSBlbHNlIGlmIChyZXFJbmZvLmlkID09PSAncmVnaXN0ZXInKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWdpc3RlcihyZXFJbmZvKTtcbiAgICB9IGVsc2UgaWYgKHJlcUluZm8uaWQgPT09ICdsb2dvdXQnKSB7XG4gICAgICByZXR1cm4gdGhpcy5sb2dvdXQocmVxSW5mbyk7XG4gICAgfSBlbHNlIGlmIChyZXFJbmZvLmlkID09PSAnY2hlY2snKSB7XG4gICAgICByZXR1cm4gdGhpcy5jaGVjayhyZXFJbmZvKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGxvZ2luKHJlcUluZm86IGFueSkge1xuICAgIHJldHVybiByZXFJbmZvLnV0aWxzLmNyZWF0ZVJlc3BvbnNlJCgoKSA9PiAoe1xuICAgICAgYm9keToge1xuICAgICAgICB0b2tlbjogdGhpcy5nZW5lcmF0ZVRva2VuKClcbiAgICAgIH0sXG4gICAgICBzdGF0dXM6IFNUQVRVUy5PS1xuICAgIH0pKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVnaXN0ZXIocmVxSW5mbykge1xuICAgIGNvbnN0IHtcbiAgICAgIGN1c3RvbWVyLFxuICAgICAgcGFzc3dvcmRcbiAgICB9ID0gcmVxSW5mby51dGlscy5nZXRKc29uQm9keShyZXFJbmZvLnJlcSk7XG5cbiAgICByZXR1cm4gcmVxSW5mby51dGlscy5jcmVhdGVSZXNwb25zZSQoKCkgPT4gKHtcbiAgICAgIGJvZHk6IHtcbiAgICAgICAgZW1haWw6IGN1c3RvbWVyLmVtYWlsLFxuICAgICAgICBwYXNzd29yZFxuICAgICAgfSxcbiAgICAgIHN0YXR1czogU1RBVFVTLkNSRUFURURcbiAgICB9KSlcbiAgfVxuXG4gIHByaXZhdGUgbG9nb3V0KHJlcUluZm8pIHtcbiAgICByZXR1cm4gcmVxSW5mby51dGlscy5jcmVhdGVSZXNwb25zZSQoKCkgPT4gKHtcbiAgICAgIGJvZHk6IHtzdWNjZXNzOiB0cnVlfSxcbiAgICAgIHN0YXR1czogU1RBVFVTLk9LXG4gICAgfSkpXG4gIH1cblxuICBwcml2YXRlIGNoZWNrKHJlcUluZm8pIHtcbiAgICByZXR1cm4gcmVxSW5mby51dGlscy5jcmVhdGVSZXNwb25zZSQoKCkgPT4gKHtcbiAgICAgIGJvZHk6IHt9LFxuICAgICAgc3RhdHVzOiBTVEFUVVMuT0tcbiAgICB9KSlcbiAgfVxufVxuIl19