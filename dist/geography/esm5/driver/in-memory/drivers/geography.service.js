/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { DaffCountryNotFoundError } from '@daffodil/geography/driver';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var DaffInMemoryGeographyService = /** @class */ (function () {
    function DaffInMemoryGeographyService(http) {
        this.http = http;
        this.url = '/api/countries';
    }
    /**
     * @param {?} countryId
     * @return {?}
     */
    DaffInMemoryGeographyService.prototype.get = /**
     * @param {?} countryId
     * @return {?}
     */
    function (countryId) {
        return this.http.get(this.url + "/" + countryId).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(DaffCountryNotFoundError); })), map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return result; })));
    };
    /**
     * @return {?}
     */
    DaffInMemoryGeographyService.prototype.list = /**
     * @return {?}
     */
    function () {
        return this.http.get(this.url + "/");
    };
    DaffInMemoryGeographyService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryGeographyService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DaffInMemoryGeographyService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryGeographyService_Factory() { return new DaffInMemoryGeographyService(i0.ɵɵinject(i1.HttpClient)); }, token: DaffInMemoryGeographyService, providedIn: "root" });
    return DaffInMemoryGeographyService;
}());
export { DaffInMemoryGeographyService };
if (false) {
    /** @type {?} */
    DaffInMemoryGeographyService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryGeographyService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvZ3JhcGh5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvZ2VvZ3JhcGh5L2RyaXZlci9pbi1tZW1vcnkvIiwic291cmNlcyI6WyJkcml2ZXJzL2dlb2dyYXBoeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLakQsT0FBTyxFQUVMLHdCQUF3QixFQUN6QixNQUFNLDRCQUE0QixDQUFDOzs7QUFFcEM7SUFNRSxzQ0FBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUZwQyxRQUFHLEdBQUcsZ0JBQWdCLENBQUM7SUFFZ0IsQ0FBQzs7Ozs7SUFFeEMsMENBQUc7Ozs7SUFBSCxVQUFJLFNBQTRCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWlCLElBQUksQ0FBQyxHQUFHLFNBQUksU0FBVyxDQUFDLENBQUMsSUFBSSxDQUNuRSxVQUFVOzs7O1FBQUMsVUFBQyxLQUFZLElBQUssT0FBQSxVQUFVLENBQUMsd0JBQXdCLENBQUMsRUFBcEMsQ0FBb0MsRUFBQyxFQUNsRSxHQUFHOzs7O1FBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLEVBQU4sQ0FBTSxFQUFDLENBQ3JCLENBQUM7SUFDRixDQUFDOzs7O0lBRUQsMkNBQUk7OztJQUFKO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBbUIsSUFBSSxDQUFDLEdBQUcsTUFBRyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Z0JBakJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBZFEsVUFBVTs7O3VDQURuQjtDQStCQyxBQWxCRCxJQWtCQztTQWZZLDRCQUE0Qjs7O0lBQ3ZDLDJDQUF1Qjs7Ozs7SUFFWCw0Q0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBEYWZmQ291bnRyeSxcbn0gZnJvbSAnQGRhZmZvZGlsL2dlb2dyYXBoeSc7XG5pbXBvcnQge1xuICBEYWZmR2VvZ3JhcGh5U2VydmljZUludGVyZmFjZSxcbiAgRGFmZkNvdW50cnlOb3RGb3VuZEVycm9yXG59IGZyb20gJ0BkYWZmb2RpbC9nZW9ncmFwaHkvZHJpdmVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZkluTWVtb3J5R2VvZ3JhcGh5U2VydmljZSBpbXBsZW1lbnRzIERhZmZHZW9ncmFwaHlTZXJ2aWNlSW50ZXJmYWNlPERhZmZDb3VudHJ5PiB7XG4gIHVybCA9ICcvYXBpL2NvdW50cmllcyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIGdldChjb3VudHJ5SWQ6IERhZmZDb3VudHJ5WydpZCddKTogT2JzZXJ2YWJsZTxEYWZmQ291bnRyeT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PERhZmZDb3VudHJ5PihgJHt0aGlzLnVybH0vJHtjb3VudHJ5SWR9YCkucGlwZShcblx0XHRcdGNhdGNoRXJyb3IoKGVycm9yOiBFcnJvcikgPT4gdGhyb3dFcnJvcihEYWZmQ291bnRyeU5vdEZvdW5kRXJyb3IpKSxcblx0XHRcdG1hcChyZXN1bHQgPT4gcmVzdWx0KVxuXHRcdCk7XG4gIH1cblxuICBsaXN0KCk6IE9ic2VydmFibGU8RGFmZkNvdW50cnlbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PERhZmZDb3VudHJ5W10+KGAke3RoaXMudXJsfS9gKTtcbiAgfVxufVxuIl19