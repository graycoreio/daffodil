/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mapTo } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var DaffInMemoryRegisterService = /** @class */ (function () {
    function DaffInMemoryRegisterService(http) {
        this.http = http;
        this.url = '/api/auth/';
    }
    /**
     * @param {?} registration
     * @return {?}
     */
    DaffInMemoryRegisterService.prototype.register = /**
     * @param {?} registration
     * @return {?}
     */
    function (registration) {
        return this.http.post(this.url + "register", registration).pipe(mapTo({
            email: registration.customer.email,
            password: registration.password
        }));
    };
    DaffInMemoryRegisterService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryRegisterService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DaffInMemoryRegisterService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryRegisterService_Factory() { return new DaffInMemoryRegisterService(i0.ɵɵinject(i1.HttpClient)); }, token: DaffInMemoryRegisterService, providedIn: "root" });
    return DaffInMemoryRegisterService;
}());
export { DaffInMemoryRegisterService };
if (false) {
    /** @type {?} */
    DaffInMemoryRegisterService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryRegisterService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9hdXRoL3Rlc3RpbmcvIiwic291cmNlcyI6WyJkcml2ZXJzL2luLW1lbW9yeS9yZWdpc3Rlci9yZWdpc3Rlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQVN2QztJQVNFLHFDQUNVLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFIMUIsUUFBRyxHQUFHLFlBQVksQ0FBQztJQUloQixDQUFDOzs7OztJQUVKLDhDQUFROzs7O0lBQVIsVUFBUyxZQUFxQztRQUM1QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUE4QixJQUFJLENBQUMsR0FBRyxhQUFVLEVBQUUsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUN2RixLQUFLLENBQUM7WUFDSixLQUFLLEVBQUUsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLO1lBQ2xDLFFBQVEsRUFBRSxZQUFZLENBQUMsUUFBUTtTQUNoQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7O2dCQXBCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQWJRLFVBQVU7OztzQ0FEbkI7Q0FpQ0MsQUFyQkQsSUFxQkM7U0FsQlksMkJBQTJCOzs7SUFJdEMsMENBQW1COzs7OztJQUdqQiwyQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXBUbyB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtcbiAgRGFmZlJlZ2lzdGVyU2VydmljZUludGVyZmFjZSxcbiAgRGFmZkN1c3RvbWVyUmVnaXN0cmF0aW9uLFxuICBEYWZmQWNjb3VudFJlZ2lzdHJhdGlvbixcbiAgRGFmZkxvZ2luSW5mb1xufSBmcm9tICdAZGFmZm9kaWwvYXV0aCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZJbk1lbW9yeVJlZ2lzdGVyU2VydmljZSBpbXBsZW1lbnRzIERhZmZSZWdpc3RlclNlcnZpY2VJbnRlcmZhY2U8XG4gIERhZmZBY2NvdW50UmVnaXN0cmF0aW9uLFxuICBEYWZmTG9naW5JbmZvXG4+IHtcbiAgdXJsID0gJy9hcGkvYXV0aC8nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgKSB7fVxuXG4gIHJlZ2lzdGVyKHJlZ2lzdHJhdGlvbjogRGFmZkFjY291bnRSZWdpc3RyYXRpb24pOiBPYnNlcnZhYmxlPERhZmZMb2dpbkluZm8+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8RGFmZkN1c3RvbWVyUmVnaXN0cmF0aW9uPihgJHt0aGlzLnVybH1yZWdpc3RlcmAsIHJlZ2lzdHJhdGlvbikucGlwZShcbiAgICAgIG1hcFRvKHtcbiAgICAgICAgZW1haWw6IHJlZ2lzdHJhdGlvbi5jdXN0b21lci5lbWFpbCxcbiAgICAgICAgcGFzc3dvcmQ6IHJlZ2lzdHJhdGlvbi5wYXNzd29yZFxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=