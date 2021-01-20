/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class DaffInMemoryCartItemService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = '/api/cart-items';
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    list(cartId) {
        return this.http.get(`${this.url}/${cartId}/`);
    }
    /**
     * @param {?} cartId
     * @param {?} itemId
     * @return {?}
     */
    get(cartId, itemId) {
        return this.http.get(`${this.url}/${cartId}/${itemId}`);
    }
    /**
     * @param {?} cartId
     * @param {?} input
     * @return {?}
     */
    add(cartId, input) {
        return this.http.post(`${this.url}/${cartId}/`, input);
    }
    /**
     * @param {?} cartId
     * @param {?} itemId
     * @param {?} item
     * @return {?}
     */
    update(cartId, itemId, item) {
        return this.http.put(`${this.url}/${cartId}/${itemId}`, item);
    }
    /**
     * @param {?} cartId
     * @param {?} itemId
     * @return {?}
     */
    delete(cartId, itemId) {
        return this.http.delete(`${this.url}/${cartId}/${itemId}`);
    }
}
DaffInMemoryCartItemService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryCartItemService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DaffInMemoryCartItemService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryCartItemService_Factory() { return new DaffInMemoryCartItemService(i0.ɵɵinject(i1.HttpClient)); }, token: DaffInMemoryCartItemService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffInMemoryCartItemService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryCartItemService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvaW4tbWVtb3J5LyIsInNvdXJjZXMiOlsiZHJpdmVycy9jYXJ0LWl0ZW0vY2FydC1pdGVtLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFXbEQsTUFBTSxPQUFPLDJCQUEyQjs7OztJQU90QyxZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRnBDLFFBQUcsR0FBRyxpQkFBaUIsQ0FBQztJQUVlLENBQUM7Ozs7O0lBRXhDLElBQUksQ0FBQyxNQUFzQjtRQUN6QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFpQixHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQTtJQUNoRSxDQUFDOzs7Ozs7SUFFRCxHQUFHLENBQUMsTUFBc0IsRUFBRSxNQUErQjtRQUN6RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFlLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxNQUFNLElBQUksTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7Ozs7SUFFRCxHQUFHLENBQUMsTUFBc0IsRUFBRSxLQUF3QjtRQUNsRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFvQixHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksTUFBTSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7Ozs7OztJQUVELE1BQU0sQ0FDSixNQUFzQixFQUN0QixNQUErQixFQUMvQixJQUEyQjtRQUUzQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFvQixHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksTUFBTSxJQUFJLE1BQU0sRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25GLENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBQyxNQUFjLEVBQUUsTUFBYztRQUNuQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFvQixHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksTUFBTSxJQUFJLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDaEYsQ0FBQzs7O1lBbENGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVZRLFVBQVU7Ozs7O0lBZ0JqQiwwQ0FBd0I7Ozs7O0lBRVosMkNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGFmZkNhcnRJdGVtLCBEYWZmQ2FydEl0ZW1JbnB1dCwgRGFmZkNhcnQgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQge1xuICBEYWZmQ2FydEl0ZW1TZXJ2aWNlSW50ZXJmYWNlLFxufSBmcm9tICdAZGFmZm9kaWwvY2FydC9kcml2ZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmSW5NZW1vcnlDYXJ0SXRlbVNlcnZpY2UgaW1wbGVtZW50cyBEYWZmQ2FydEl0ZW1TZXJ2aWNlSW50ZXJmYWNlPFxuICBEYWZmQ2FydEl0ZW0sXG4gIERhZmZDYXJ0SXRlbUlucHV0LFxuICBEYWZmQ2FydFxuPiB7XG4gIHVybCA9ICcvYXBpL2NhcnQtaXRlbXMnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cblxuICBsaXN0KGNhcnRJZDogRGFmZkNhcnRbJ2lkJ10pOiBPYnNlcnZhYmxlPERhZmZDYXJ0SXRlbVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RGFmZkNhcnRJdGVtW10+KGAke3RoaXMudXJsfS8ke2NhcnRJZH0vYClcbiAgfVxuXG4gIGdldChjYXJ0SWQ6IERhZmZDYXJ0WydpZCddLCBpdGVtSWQ6IERhZmZDYXJ0SXRlbVsnaXRlbV9pZCddKTogT2JzZXJ2YWJsZTxEYWZmQ2FydEl0ZW0+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxEYWZmQ2FydEl0ZW0+KGAke3RoaXMudXJsfS8ke2NhcnRJZH0vJHtpdGVtSWR9YCk7XG4gIH1cblxuICBhZGQoY2FydElkOiBEYWZmQ2FydFsnaWQnXSwgaW5wdXQ6IERhZmZDYXJ0SXRlbUlucHV0KTogT2JzZXJ2YWJsZTxQYXJ0aWFsPERhZmZDYXJ0Pj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxQYXJ0aWFsPERhZmZDYXJ0Pj4oYCR7dGhpcy51cmx9LyR7Y2FydElkfS9gLCBpbnB1dCk7XG4gIH1cblxuICB1cGRhdGUoXG4gICAgY2FydElkOiBEYWZmQ2FydFsnaWQnXSxcbiAgICBpdGVtSWQ6IERhZmZDYXJ0SXRlbVsnaXRlbV9pZCddLFxuICAgIGl0ZW06IFBhcnRpYWw8RGFmZkNhcnRJdGVtPlxuICApOiBPYnNlcnZhYmxlPFBhcnRpYWw8RGFmZkNhcnQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8UGFydGlhbDxEYWZmQ2FydD4+KGAke3RoaXMudXJsfS8ke2NhcnRJZH0vJHtpdGVtSWR9YCwgaXRlbSk7XG4gIH1cblxuICBkZWxldGUoY2FydElkOiBzdHJpbmcsIGl0ZW1JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxQYXJ0aWFsPERhZmZDYXJ0Pj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPFBhcnRpYWw8RGFmZkNhcnQ+PihgJHt0aGlzLnVybH0vJHtjYXJ0SWR9LyR7aXRlbUlkfWApO1xuICB9XG59XG4iXX0=