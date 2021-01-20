/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class DaffInMemoryCategoryService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = '/api/category/';
    }
    /**
     * @param {?} categoryRequest
     * @return {?}
     */
    get(categoryRequest) {
        /** @type {?} */
        const params = new HttpParams()
            .set('page_size', categoryRequest.page_size ? categoryRequest.page_size.toString() : null)
            .set('current_page', categoryRequest.current_page ? categoryRequest.current_page.toString() : null);
        return this.http.get(this.url + categoryRequest.id, { params: params });
    }
}
DaffInMemoryCategoryService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryCategoryService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DaffInMemoryCategoryService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryCategoryService_Factory() { return new DaffInMemoryCategoryService(i0.ɵɵinject(i1.HttpClient)); }, token: DaffInMemoryCategoryService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffInMemoryCategoryService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryCategoryService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXRlZ29yeS90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZHJpdmVycy9pbi1tZW1vcnkvY2F0ZWdvcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFROUQsTUFBTSxPQUFPLDJCQUEyQjs7OztJQUd0QyxZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRnBDLFFBQUcsR0FBRyxnQkFBZ0IsQ0FBQztJQUVnQixDQUFDOzs7OztJQUV4QyxHQUFHLENBQUMsZUFBb0M7O2NBQ2xDLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRTthQUM3QixHQUFHLENBQUMsV0FBVyxFQUFFLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzthQUN6RixHQUFHLENBQUMsY0FBYyxFQUFFLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUVsRyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUEwQixJQUFJLENBQUMsR0FBRyxHQUFHLGVBQWUsQ0FBQyxFQUFFLEVBQUUsRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztJQUNqRyxDQUFDOzs7WUFkRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFQUSxVQUFVOzs7OztJQVNqQiwwQ0FBdUI7Ozs7O0lBRVgsMkNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGFmZkNhdGVnb3J5U2VydmljZUludGVyZmFjZSwgRGFmZkdldENhdGVnb3J5UmVzcG9uc2UsIERhZmZDYXRlZ29yeVJlcXVlc3QgfSBmcm9tICdAZGFmZm9kaWwvY2F0ZWdvcnknO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmSW5NZW1vcnlDYXRlZ29yeVNlcnZpY2UgaW1wbGVtZW50cyBEYWZmQ2F0ZWdvcnlTZXJ2aWNlSW50ZXJmYWNlIHtcbiAgdXJsID0gJy9hcGkvY2F0ZWdvcnkvJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XG5cbiAgZ2V0KGNhdGVnb3J5UmVxdWVzdDogRGFmZkNhdGVnb3J5UmVxdWVzdCk6IE9ic2VydmFibGU8RGFmZkdldENhdGVnb3J5UmVzcG9uc2U+IHtcblx0XHRjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpXG5cdFx0XHQuc2V0KCdwYWdlX3NpemUnLCBjYXRlZ29yeVJlcXVlc3QucGFnZV9zaXplID8gY2F0ZWdvcnlSZXF1ZXN0LnBhZ2Vfc2l6ZS50b1N0cmluZygpIDogbnVsbClcblx0XHRcdC5zZXQoJ2N1cnJlbnRfcGFnZScsIGNhdGVnb3J5UmVxdWVzdC5jdXJyZW50X3BhZ2UgPyBjYXRlZ29yeVJlcXVlc3QuY3VycmVudF9wYWdlLnRvU3RyaW5nKCkgOiBudWxsKTtcblx0XHRcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxEYWZmR2V0Q2F0ZWdvcnlSZXNwb25zZT4odGhpcy51cmwgKyBjYXRlZ29yeVJlcXVlc3QuaWQsIHtwYXJhbXM6IHBhcmFtc30pO1xuICB9XG59XG4iXX0=