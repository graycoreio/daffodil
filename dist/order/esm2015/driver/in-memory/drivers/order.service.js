/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class DaffInMemoryOrderService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = '/api/orders';
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    get(orderId) {
        return this.http.get(`${this.url}/${orderId}`);
    }
    /**
     * @return {?}
     */
    list() {
        return this.http.get(`${this.url}/`);
    }
}
DaffInMemoryOrderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryOrderService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DaffInMemoryOrderService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryOrderService_Factory() { return new DaffInMemoryOrderService(i0.ɵɵinject(i1.HttpClient)); }, token: DaffInMemoryOrderService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffInMemoryOrderService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryOrderService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9vcmRlci9kcml2ZXIvaW4tbWVtb3J5LyIsInNvdXJjZXMiOlsiZHJpdmVycy9vcmRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBYWxELE1BQU0sT0FBTyx3QkFBd0I7Ozs7SUFHbkMsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUZwQyxRQUFHLEdBQUcsYUFBYSxDQUFDO0lBRW1CLENBQUM7Ozs7O0lBRXhDLEdBQUcsQ0FBQyxPQUF3QjtRQUMxQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7SUFFRCxJQUFJO1FBQ0YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBYyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3BELENBQUM7OztZQWRGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVpRLFVBQVU7Ozs7O0lBY2pCLHVDQUFvQjs7Ozs7SUFFUix3Q0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1xuICBEYWZmT3JkZXIsXG59IGZyb20gJ0BkYWZmb2RpbC9vcmRlcic7XG5pbXBvcnQge1xuICBEYWZmT3JkZXJTZXJ2aWNlSW50ZXJmYWNlLFxufSBmcm9tICdAZGFmZm9kaWwvb3JkZXIvZHJpdmVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZkluTWVtb3J5T3JkZXJTZXJ2aWNlIGltcGxlbWVudHMgRGFmZk9yZGVyU2VydmljZUludGVyZmFjZTxEYWZmT3JkZXI+IHtcbiAgdXJsID0gJy9hcGkvb3JkZXJzJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XG5cbiAgZ2V0KG9yZGVySWQ6IERhZmZPcmRlclsnaWQnXSk6IE9ic2VydmFibGU8RGFmZk9yZGVyPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RGFmZk9yZGVyPihgJHt0aGlzLnVybH0vJHtvcmRlcklkfWApO1xuICB9XG5cbiAgbGlzdCgpOiBPYnNlcnZhYmxlPERhZmZPcmRlcltdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RGFmZk9yZGVyW10+KGAke3RoaXMudXJsfS9gKTtcbiAgfVxufVxuIl19