/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mapTo } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class DaffInMemoryRegisterService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = '/api/auth/';
    }
    /**
     * @param {?} registration
     * @return {?}
     */
    register(registration) {
        return this.http.post(`${this.url}register`, registration).pipe(mapTo({
            email: registration.customer.email,
            password: registration.password
        }));
    }
}
DaffInMemoryRegisterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryRegisterService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DaffInMemoryRegisterService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryRegisterService_Factory() { return new DaffInMemoryRegisterService(i0.ɵɵinject(i1.HttpClient)); }, token: DaffInMemoryRegisterService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffInMemoryRegisterService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryRegisterService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9hdXRoL3Rlc3RpbmcvIiwic291cmNlcyI6WyJkcml2ZXJzL2luLW1lbW9yeS9yZWdpc3Rlci9yZWdpc3Rlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQVl2QyxNQUFNLE9BQU8sMkJBQTJCOzs7O0lBTXRDLFlBQ1UsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUgxQixRQUFHLEdBQUcsWUFBWSxDQUFDO0lBSWhCLENBQUM7Ozs7O0lBRUosUUFBUSxDQUFDLFlBQXFDO1FBQzVDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQTJCLEdBQUcsSUFBSSxDQUFDLEdBQUcsVUFBVSxFQUFFLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FDdkYsS0FBSyxDQUFDO1lBQ0osS0FBSyxFQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSztZQUNsQyxRQUFRLEVBQUUsWUFBWSxDQUFDLFFBQVE7U0FDaEMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7WUFwQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBYlEsVUFBVTs7Ozs7SUFrQmpCLDBDQUFtQjs7Ozs7SUFHakIsMkNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwVG8gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7XG4gIERhZmZSZWdpc3RlclNlcnZpY2VJbnRlcmZhY2UsXG4gIERhZmZDdXN0b21lclJlZ2lzdHJhdGlvbixcbiAgRGFmZkFjY291bnRSZWdpc3RyYXRpb24sXG4gIERhZmZMb2dpbkluZm9cbn0gZnJvbSAnQGRhZmZvZGlsL2F1dGgnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmSW5NZW1vcnlSZWdpc3RlclNlcnZpY2UgaW1wbGVtZW50cyBEYWZmUmVnaXN0ZXJTZXJ2aWNlSW50ZXJmYWNlPFxuICBEYWZmQWNjb3VudFJlZ2lzdHJhdGlvbixcbiAgRGFmZkxvZ2luSW5mb1xuPiB7XG4gIHVybCA9ICcvYXBpL2F1dGgvJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICkge31cblxuICByZWdpc3RlcihyZWdpc3RyYXRpb246IERhZmZBY2NvdW50UmVnaXN0cmF0aW9uKTogT2JzZXJ2YWJsZTxEYWZmTG9naW5JbmZvPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PERhZmZDdXN0b21lclJlZ2lzdHJhdGlvbj4oYCR7dGhpcy51cmx9cmVnaXN0ZXJgLCByZWdpc3RyYXRpb24pLnBpcGUoXG4gICAgICBtYXBUbyh7XG4gICAgICAgIGVtYWlsOiByZWdpc3RyYXRpb24uY3VzdG9tZXIuZW1haWwsXG4gICAgICAgIHBhc3N3b3JkOiByZWdpc3RyYXRpb24ucGFzc3dvcmRcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19