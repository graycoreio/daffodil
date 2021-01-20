/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var DaffInMemoryCategoryService = /** @class */ (function () {
    function DaffInMemoryCategoryService(http) {
        this.http = http;
        this.url = '/api/category/';
    }
    /**
     * @param {?} categoryRequest
     * @return {?}
     */
    DaffInMemoryCategoryService.prototype.get = /**
     * @param {?} categoryRequest
     * @return {?}
     */
    function (categoryRequest) {
        /** @type {?} */
        var params = new HttpParams()
            .set('page_size', categoryRequest.page_size ? categoryRequest.page_size.toString() : null)
            .set('current_page', categoryRequest.current_page ? categoryRequest.current_page.toString() : null);
        return this.http.get(this.url + categoryRequest.id, { params: params });
    };
    DaffInMemoryCategoryService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryCategoryService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DaffInMemoryCategoryService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryCategoryService_Factory() { return new DaffInMemoryCategoryService(i0.ɵɵinject(i1.HttpClient)); }, token: DaffInMemoryCategoryService, providedIn: "root" });
    return DaffInMemoryCategoryService;
}());
export { DaffInMemoryCategoryService };
if (false) {
    /** @type {?} */
    DaffInMemoryCategoryService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryCategoryService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXRlZ29yeS90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZHJpdmVycy9pbi1tZW1vcnkvY2F0ZWdvcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFLOUQ7SUFNRSxxQ0FBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUZwQyxRQUFHLEdBQUcsZ0JBQWdCLENBQUM7SUFFZ0IsQ0FBQzs7Ozs7SUFFeEMseUNBQUc7Ozs7SUFBSCxVQUFJLGVBQW9DOztZQUNsQyxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUU7YUFDN0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7YUFDekYsR0FBRyxDQUFDLGNBQWMsRUFBRSxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFFbEcsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBMEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxlQUFlLENBQUMsRUFBRSxFQUFFLEVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7SUFDakcsQ0FBQzs7Z0JBZEYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFQUSxVQUFVOzs7c0NBRG5CO0NBcUJDLEFBZkQsSUFlQztTQVpZLDJCQUEyQjs7O0lBQ3RDLDBDQUF1Qjs7Ozs7SUFFWCwyQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnlTZXJ2aWNlSW50ZXJmYWNlLCBEYWZmR2V0Q2F0ZWdvcnlSZXNwb25zZSwgRGFmZkNhdGVnb3J5UmVxdWVzdCB9IGZyb20gJ0BkYWZmb2RpbC9jYXRlZ29yeSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZJbk1lbW9yeUNhdGVnb3J5U2VydmljZSBpbXBsZW1lbnRzIERhZmZDYXRlZ29yeVNlcnZpY2VJbnRlcmZhY2Uge1xuICB1cmwgPSAnL2FwaS9jYXRlZ29yeS8nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cblxuICBnZXQoY2F0ZWdvcnlSZXF1ZXN0OiBEYWZmQ2F0ZWdvcnlSZXF1ZXN0KTogT2JzZXJ2YWJsZTxEYWZmR2V0Q2F0ZWdvcnlSZXNwb25zZT4ge1xuXHRcdGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKClcblx0XHRcdC5zZXQoJ3BhZ2Vfc2l6ZScsIGNhdGVnb3J5UmVxdWVzdC5wYWdlX3NpemUgPyBjYXRlZ29yeVJlcXVlc3QucGFnZV9zaXplLnRvU3RyaW5nKCkgOiBudWxsKVxuXHRcdFx0LnNldCgnY3VycmVudF9wYWdlJywgY2F0ZWdvcnlSZXF1ZXN0LmN1cnJlbnRfcGFnZSA/IGNhdGVnb3J5UmVxdWVzdC5jdXJyZW50X3BhZ2UudG9TdHJpbmcoKSA6IG51bGwpO1xuXHRcdFxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PERhZmZHZXRDYXRlZ29yeVJlc3BvbnNlPih0aGlzLnVybCArIGNhdGVnb3J5UmVxdWVzdC5pZCwge3BhcmFtczogcGFyYW1zfSk7XG4gIH1cbn1cbiJdfQ==