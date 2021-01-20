/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { STATUS } from 'angular-in-memory-web-api';
import * as faker from 'faker/locale/en_US';
import * as i0 from "@angular/core";
var DaffInMemoryBackendAuthService = /** @class */ (function () {
    function DaffInMemoryBackendAuthService() {
    }
    /**
     * @private
     * @return {?}
     */
    DaffInMemoryBackendAuthService.prototype.generateToken = /**
     * @private
     * @return {?}
     */
    function () {
        return faker.random.alphaNumeric(16);
    };
    /**
     * @private
     * @return {?}
     */
    DaffInMemoryBackendAuthService.prototype.generateId = /**
     * @private
     * @return {?}
     */
    function () {
        return faker.random.uuid();
    };
    /**
     * @return {?}
     */
    DaffInMemoryBackendAuthService.prototype.createDb = /**
     * @return {?}
     */
    function () {
        return {
            auth: {}
        };
    };
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendAuthService.prototype.post = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
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
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendAuthService.prototype.login = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: {
                token: _this.generateToken()
            },
            status: STATUS.OK
        }); }));
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendAuthService.prototype.register = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _a = reqInfo.utils.getJsonBody(reqInfo.req), customer = _a.customer, password = _a.password;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: {
                email: customer.email,
                password: password
            },
            status: STATUS.CREATED
        }); }));
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendAuthService.prototype.logout = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: { success: true },
            status: STATUS.OK
        }); }));
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendAuthService.prototype.check = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: {},
            status: STATUS.OK
        }); }));
    };
    DaffInMemoryBackendAuthService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryBackendAuthService.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffInMemoryBackendAuthService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendAuthService_Factory() { return new DaffInMemoryBackendAuthService(); }, token: DaffInMemoryBackendAuthService, providedIn: "root" });
    return DaffInMemoryBackendAuthService;
}());
export { DaffInMemoryBackendAuthService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2F1dGgvdGVzdGluZy8iLCJzb3VyY2VzIjpbImlubWVtb3J5LWJhY2tlbmQvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFFTCxNQUFNLEVBQ1AsTUFBTSwyQkFBMkIsQ0FBQztBQUNuQyxPQUFPLEtBQUssS0FBSyxNQUFNLG9CQUFvQixDQUFDOztBQUU1QztJQUlFO0lBQWUsQ0FBQzs7Ozs7SUFFUixzREFBYTs7OztJQUFyQjtRQUNFLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUFFTyxtREFBVTs7OztJQUFsQjtRQUNFLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsaURBQVE7OztJQUFSO1FBQ0UsT0FBTztZQUNMLElBQUksRUFBRSxFQUFFO1NBQ1QsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsNkNBQUk7Ozs7SUFBSixVQUFLLE9BQU87UUFDVixJQUFJLE9BQU8sQ0FBQyxFQUFFLEtBQUssT0FBTyxFQUFFO1lBQzFCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM1QjthQUFNLElBQUksT0FBTyxDQUFDLEVBQUUsS0FBSyxVQUFVLEVBQUU7WUFDcEMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQy9CO2FBQU0sSUFBSSxPQUFPLENBQUMsRUFBRSxLQUFLLFFBQVEsRUFBRTtZQUNsQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDN0I7YUFBTSxJQUFJLE9BQU8sQ0FBQyxFQUFFLEtBQUssT0FBTyxFQUFFO1lBQ2pDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM1QjtJQUNILENBQUM7Ozs7OztJQUVPLDhDQUFLOzs7OztJQUFiLFVBQWMsT0FBWTtRQUExQixpQkFPQztRQU5DLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlOzs7UUFBQyxjQUFNLE9BQUEsQ0FBQztZQUMxQyxJQUFJLEVBQUU7Z0JBQ0osS0FBSyxFQUFFLEtBQUksQ0FBQyxhQUFhLEVBQUU7YUFDNUI7WUFDRCxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDbEIsQ0FBQyxFQUx5QyxDQUt6QyxFQUFDLENBQUM7SUFDTixDQUFDOzs7Ozs7SUFFTyxpREFBUTs7Ozs7SUFBaEIsVUFBaUIsT0FBTztRQUNoQixJQUFBLDJDQUdvQyxFQUZ4QyxzQkFBUSxFQUNSLHNCQUN3QztRQUUxQyxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZTs7O1FBQUMsY0FBTSxPQUFBLENBQUM7WUFDMUMsSUFBSSxFQUFFO2dCQUNKLEtBQUssRUFBRSxRQUFRLENBQUMsS0FBSztnQkFDckIsUUFBUSxVQUFBO2FBQ1Q7WUFDRCxNQUFNLEVBQUUsTUFBTSxDQUFDLE9BQU87U0FDdkIsQ0FBQyxFQU55QyxDQU16QyxFQUFDLENBQUE7SUFDTCxDQUFDOzs7Ozs7SUFFTywrQ0FBTTs7Ozs7SUFBZCxVQUFlLE9BQU87UUFDcEIsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWU7OztRQUFDLGNBQU0sT0FBQSxDQUFDO1lBQzFDLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUM7WUFDckIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ2xCLENBQUMsRUFIeUMsQ0FHekMsRUFBQyxDQUFBO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sOENBQUs7Ozs7O0lBQWIsVUFBYyxPQUFPO1FBQ25CLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlOzs7UUFBQyxjQUFNLE9BQUEsQ0FBQztZQUMxQyxJQUFJLEVBQUUsRUFBRTtZQUNSLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNsQixDQUFDLEVBSHlDLENBR3pDLEVBQUMsQ0FBQTtJQUNMLENBQUM7O2dCQXBFRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozt5Q0FURDtDQTRFQyxBQXJFRCxJQXFFQztTQWxFWSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBJbk1lbW9yeURiU2VydmljZSxcbiAgU1RBVFVTXG59IGZyb20gJ2FuZ3VsYXItaW4tbWVtb3J5LXdlYi1hcGknO1xuaW1wb3J0ICogYXMgZmFrZXIgZnJvbSAnZmFrZXIvbG9jYWxlL2VuX1VTJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZkluTWVtb3J5QmFja2VuZEF1dGhTZXJ2aWNlIGltcGxlbWVudHMgSW5NZW1vcnlEYlNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZVRva2VuKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGZha2VyLnJhbmRvbS5hbHBoYU51bWVyaWMoMTYpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZUlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGZha2VyLnJhbmRvbS51dWlkKCk7XG4gIH1cblxuICBjcmVhdGVEYigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYXV0aDoge31cbiAgICB9O1xuICB9XG5cbiAgcG9zdChyZXFJbmZvKSB7XG4gICAgaWYgKHJlcUluZm8uaWQgPT09ICdsb2dpbicpIHtcbiAgICAgIHJldHVybiB0aGlzLmxvZ2luKHJlcUluZm8pO1xuICAgIH0gZWxzZSBpZiAocmVxSW5mby5pZCA9PT0gJ3JlZ2lzdGVyJykge1xuICAgICAgcmV0dXJuIHRoaXMucmVnaXN0ZXIocmVxSW5mbyk7XG4gICAgfSBlbHNlIGlmIChyZXFJbmZvLmlkID09PSAnbG9nb3V0Jykge1xuICAgICAgcmV0dXJuIHRoaXMubG9nb3V0KHJlcUluZm8pO1xuICAgIH0gZWxzZSBpZiAocmVxSW5mby5pZCA9PT0gJ2NoZWNrJykge1xuICAgICAgcmV0dXJuIHRoaXMuY2hlY2socmVxSW5mbyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBsb2dpbihyZXFJbmZvOiBhbnkpIHtcbiAgICByZXR1cm4gcmVxSW5mby51dGlscy5jcmVhdGVSZXNwb25zZSQoKCkgPT4gKHtcbiAgICAgIGJvZHk6IHtcbiAgICAgICAgdG9rZW46IHRoaXMuZ2VuZXJhdGVUb2tlbigpXG4gICAgICB9LFxuICAgICAgc3RhdHVzOiBTVEFUVVMuT0tcbiAgICB9KSk7XG4gIH1cblxuICBwcml2YXRlIHJlZ2lzdGVyKHJlcUluZm8pIHtcbiAgICBjb25zdCB7XG4gICAgICBjdXN0b21lcixcbiAgICAgIHBhc3N3b3JkXG4gICAgfSA9IHJlcUluZm8udXRpbHMuZ2V0SnNvbkJvZHkocmVxSW5mby5yZXEpO1xuXG4gICAgcmV0dXJuIHJlcUluZm8udXRpbHMuY3JlYXRlUmVzcG9uc2UkKCgpID0+ICh7XG4gICAgICBib2R5OiB7XG4gICAgICAgIGVtYWlsOiBjdXN0b21lci5lbWFpbCxcbiAgICAgICAgcGFzc3dvcmRcbiAgICAgIH0sXG4gICAgICBzdGF0dXM6IFNUQVRVUy5DUkVBVEVEXG4gICAgfSkpXG4gIH1cblxuICBwcml2YXRlIGxvZ291dChyZXFJbmZvKSB7XG4gICAgcmV0dXJuIHJlcUluZm8udXRpbHMuY3JlYXRlUmVzcG9uc2UkKCgpID0+ICh7XG4gICAgICBib2R5OiB7c3VjY2VzczogdHJ1ZX0sXG4gICAgICBzdGF0dXM6IFNUQVRVUy5PS1xuICAgIH0pKVxuICB9XG5cbiAgcHJpdmF0ZSBjaGVjayhyZXFJbmZvKSB7XG4gICAgcmV0dXJuIHJlcUluZm8udXRpbHMuY3JlYXRlUmVzcG9uc2UkKCgpID0+ICh7XG4gICAgICBib2R5OiB7fSxcbiAgICAgIHN0YXR1czogU1RBVFVTLk9LXG4gICAgfSkpXG4gIH1cbn1cbiJdfQ==