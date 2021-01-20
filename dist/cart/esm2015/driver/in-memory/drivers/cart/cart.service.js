/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { DaffCartNotFoundError } from '@daffodil/cart/driver';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class DaffInMemoryCartService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = '/api/cart';
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    get(cartId) {
        return this.http.get(`${this.url}/${cartId}`).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => throwError(DaffCartNotFoundError))), map((/**
         * @param {?} result
         * @return {?}
         */
        result => result)));
    }
    /**
     * @param {?} productId
     * @param {?} qty
     * @return {?}
     */
    addToCart(productId, qty) {
        return this.http.post(this.url + '/addToCart', { productId, qty });
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    clear(cartId) {
        return this.http.post(`${this.url}/${cartId}/clear`, {});
    }
    /**
     * @return {?}
     */
    create() {
        return this.http.post(this.url, {});
    }
}
DaffInMemoryCartService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryCartService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DaffInMemoryCartService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryCartService_Factory() { return new DaffInMemoryCartService(i0.ɵɵinject(i1.HttpClient)); }, token: DaffInMemoryCartService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffInMemoryCartService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryCartService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL2luLW1lbW9yeS8iLCJzb3VyY2VzIjpbImRyaXZlcnMvY2FydC9jYXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdqRCxPQUFPLEVBQTRCLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7OztBQUt4RixNQUFNLE9BQU8sdUJBQXVCOzs7O0lBR2xDLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFGcEMsUUFBRyxHQUFHLFdBQVcsQ0FBQztJQUVxQixDQUFDOzs7OztJQUV4QyxHQUFHLENBQUMsTUFBc0I7UUFDeEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQzdELFVBQVU7Ozs7UUFBQyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLEVBQUMsRUFDL0QsR0FBRzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFDLENBQ3JCLENBQUM7SUFDRixDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsU0FBaUIsRUFBRSxHQUFXO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQVcsSUFBSSxDQUFDLEdBQUcsR0FBRyxZQUFZLEVBQUUsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUMvRSxDQUFDOzs7OztJQUVELEtBQUssQ0FBQyxNQUFzQjtRQUMxQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFvQixHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksTUFBTSxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDOUUsQ0FBQzs7OztJQUVELE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUF1QixJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzVELENBQUM7OztZQXpCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFUUSxVQUFVOzs7OztJQVdqQixzQ0FBa0I7Ozs7O0lBRU4sdUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRGFmZkNhcnQgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQgeyBEYWZmQ2FydFNlcnZpY2VJbnRlcmZhY2UsIERhZmZDYXJ0Tm90Rm91bmRFcnJvciB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L2RyaXZlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZJbk1lbW9yeUNhcnRTZXJ2aWNlIGltcGxlbWVudHMgRGFmZkNhcnRTZXJ2aWNlSW50ZXJmYWNlPERhZmZDYXJ0PiB7XG4gIHVybCA9ICcvYXBpL2NhcnQnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cblxuICBnZXQoY2FydElkOiBEYWZmQ2FydFsnaWQnXSk6IE9ic2VydmFibGU8RGFmZkNhcnQ+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxEYWZmQ2FydD4oYCR7dGhpcy51cmx9LyR7Y2FydElkfWApLnBpcGUoXG5cdFx0XHRjYXRjaEVycm9yKChlcnJvcjogRXJyb3IpID0+IHRocm93RXJyb3IoRGFmZkNhcnROb3RGb3VuZEVycm9yKSksXG5cdFx0XHRtYXAocmVzdWx0ID0+IHJlc3VsdClcblx0XHQpO1xuICB9XG5cbiAgYWRkVG9DYXJ0KHByb2R1Y3RJZDogc3RyaW5nLCBxdHk6IG51bWJlcik6IE9ic2VydmFibGU8RGFmZkNhcnQ+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8RGFmZkNhcnQ+KHRoaXMudXJsICsgJy9hZGRUb0NhcnQnLCB7IHByb2R1Y3RJZCwgcXR5IH0pO1xuICB9XG5cbiAgY2xlYXIoY2FydElkOiBEYWZmQ2FydFsnaWQnXSk6IE9ic2VydmFibGU8UGFydGlhbDxEYWZmQ2FydD4+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8UGFydGlhbDxEYWZmQ2FydD4+KGAke3RoaXMudXJsfS8ke2NhcnRJZH0vY2xlYXJgLCB7fSk7XG4gIH1cblxuICBjcmVhdGUoKTogT2JzZXJ2YWJsZTx7aWQ6IERhZmZDYXJ0WydpZCddfT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDx7aWQ6IERhZmZDYXJ0WydpZCddfT4odGhpcy51cmwsIHt9KTtcbiAgfVxufVxuIl19