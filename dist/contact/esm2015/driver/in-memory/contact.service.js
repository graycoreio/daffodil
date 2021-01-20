/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class DaffInMemoryContactService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = '/api/contact';
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    send(payload) {
        return this.http.post(this.url, payload);
    }
}
DaffInMemoryContactService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryContactService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DaffInMemoryContactService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryContactService_Factory() { return new DaffInMemoryContactService(i0.ɵɵinject(i1.HttpClient)); }, token: DaffInMemoryContactService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffInMemoryContactService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryContactService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NvbnRhY3QvZHJpdmVyL2luLW1lbW9yeS8iLCJzb3VyY2VzIjpbImNvbnRhY3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQVNsRCxNQUFNLE9BQU8sMEJBQTBCOzs7O0lBR3JDLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFEcEMsUUFBRyxHQUFHLGNBQWMsQ0FBQztJQUNrQixDQUFDOzs7OztJQUV4QyxJQUFJLENBQUMsT0FBeUI7UUFDNUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBbUIsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7WUFWRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFSUSxVQUFVOzs7OztJQVdqQix5Q0FBcUI7Ozs7O0lBQ1QsMENBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGFmZkNvbnRhY3RTZXJ2aWNlSW50ZXJmYWNlIH0gZnJvbSAnQGRhZmZvZGlsL2NvbnRhY3QvZHJpdmVyJztcbmltcG9ydCB7IERhZmZDb250YWN0VW5pb24gfSBmcm9tICdAZGFmZm9kaWwvY29udGFjdCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZJbk1lbW9yeUNvbnRhY3RTZXJ2aWNlIGltcGxlbWVudHMgRGFmZkNvbnRhY3RTZXJ2aWNlSW50ZXJmYWNlPERhZmZDb250YWN0VW5pb24sIERhZmZDb250YWN0VW5pb24+e1xuICBcbiAgdXJsID0gJy9hcGkvY29udGFjdCc7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cblxuICBzZW5kKHBheWxvYWQ6IERhZmZDb250YWN0VW5pb24pOiBPYnNlcnZhYmxlPERhZmZDb250YWN0VW5pb24+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8RGFmZkNvbnRhY3RVbmlvbj4odGhpcy51cmwsIHBheWxvYWQpO1xuICB9XG59Il19