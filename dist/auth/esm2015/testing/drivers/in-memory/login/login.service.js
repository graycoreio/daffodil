/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class DaffInMemoryLoginService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = '/api/auth/';
    }
    /**
     * @param {?} request
     * @return {?}
     */
    login(request) {
        return this.http.post(`${this.url}login`, request);
    }
    /**
     * @return {?}
     */
    logout() {
        return this.http.post(`${this.url}logout`, {}).pipe(switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ({ success }) => success ? of(undefined) : throwError(new Error('Logout failed')))));
    }
}
DaffInMemoryLoginService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryLoginService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DaffInMemoryLoginService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryLoginService_Factory() { return new DaffInMemoryLoginService(i0.ɵɵinject(i1.HttpClient)); }, token: DaffInMemoryLoginService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffInMemoryLoginService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryLoginService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9hdXRoL3Rlc3RpbmcvIiwic291cmNlcyI6WyJkcml2ZXJzL2luLW1lbW9yeS9sb2dpbi9sb2dpbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQWMsRUFBRSxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQU9sRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUszQyxNQUFNLE9BQU8sd0JBQXdCOzs7O0lBR25DLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFGcEMsUUFBRyxHQUFHLFlBQVksQ0FBQztJQUVvQixDQUFDOzs7OztJQUV4QyxLQUFLLENBQUMsT0FBc0I7UUFDMUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBZ0IsR0FBRyxJQUFJLENBQUMsR0FBRyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDcEUsQ0FBQzs7OztJQUVELE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFxQixHQUFHLElBQUksQ0FBQyxHQUFHLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ3JFLFNBQVM7Ozs7UUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBQyxDQUMzRixDQUFDO0lBQ0osQ0FBQzs7O1lBaEJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVpRLFVBQVU7Ozs7O0lBY2pCLHVDQUFtQjs7Ozs7SUFFUCx3Q0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtcbiAgRGFmZkxvZ2luU2VydmljZUludGVyZmFjZSxcbiAgRGFmZkxvZ2luSW5mbyxcbiAgRGFmZkF1dGhUb2tlbixcbn0gZnJvbSAnQGRhZmZvZGlsL2F1dGgnO1xuaW1wb3J0IHsgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmSW5NZW1vcnlMb2dpblNlcnZpY2UgaW1wbGVtZW50cyBEYWZmTG9naW5TZXJ2aWNlSW50ZXJmYWNlPERhZmZMb2dpbkluZm8sIERhZmZBdXRoVG9rZW4+IHtcbiAgdXJsID0gJy9hcGkvYXV0aC8nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cblxuICBsb2dpbihyZXF1ZXN0OiBEYWZmTG9naW5JbmZvKTogT2JzZXJ2YWJsZTxEYWZmQXV0aFRva2VuPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PERhZmZBdXRoVG9rZW4+KGAke3RoaXMudXJsfWxvZ2luYCwgcmVxdWVzdCk7XG4gIH1cblxuICBsb2dvdXQoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PHtzdWNjZXNzOiBib29sZWFufT4oYCR7dGhpcy51cmx9bG9nb3V0YCwge30pLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHtzdWNjZXNzfSkgPT4gc3VjY2VzcyA/IG9mKHVuZGVmaW5lZCkgOiB0aHJvd0Vycm9yKG5ldyBFcnJvcignTG9nb3V0IGZhaWxlZCcpKSlcbiAgICApO1xuICB9XG59XG4iXX0=