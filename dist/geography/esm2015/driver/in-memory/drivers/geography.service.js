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
export class DaffInMemoryGeographyService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = '/api/countries';
    }
    /**
     * @param {?} countryId
     * @return {?}
     */
    get(countryId) {
        return this.http.get(`${this.url}/${countryId}`).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => throwError(DaffCountryNotFoundError))), map((/**
         * @param {?} result
         * @return {?}
         */
        result => result)));
    }
    /**
     * @return {?}
     */
    list() {
        return this.http.get(`${this.url}/`);
    }
}
DaffInMemoryGeographyService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryGeographyService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DaffInMemoryGeographyService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryGeographyService_Factory() { return new DaffInMemoryGeographyService(i0.ɵɵinject(i1.HttpClient)); }, token: DaffInMemoryGeographyService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffInMemoryGeographyService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryGeographyService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvZ3JhcGh5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvZ2VvZ3JhcGh5L2RyaXZlci9pbi1tZW1vcnkvIiwic291cmNlcyI6WyJkcml2ZXJzL2dlb2dyYXBoeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLakQsT0FBTyxFQUVMLHdCQUF3QixFQUN6QixNQUFNLDRCQUE0QixDQUFDOzs7QUFLcEMsTUFBTSxPQUFPLDRCQUE0Qjs7OztJQUd2QyxZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRnBDLFFBQUcsR0FBRyxnQkFBZ0IsQ0FBQztJQUVnQixDQUFDOzs7OztJQUV4QyxHQUFHLENBQUMsU0FBNEI7UUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBYyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ25FLFVBQVU7Ozs7UUFBQyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDLEVBQUMsRUFDbEUsR0FBRzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFDLENBQ3JCLENBQUM7SUFDRixDQUFDOzs7O0lBRUQsSUFBSTtRQUNGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWdCLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7O1lBakJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQWRRLFVBQVU7Ozs7O0lBZ0JqQiwyQ0FBdUI7Ozs7O0lBRVgsNENBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtcbiAgRGFmZkNvdW50cnksXG59IGZyb20gJ0BkYWZmb2RpbC9nZW9ncmFwaHknO1xuaW1wb3J0IHtcbiAgRGFmZkdlb2dyYXBoeVNlcnZpY2VJbnRlcmZhY2UsXG4gIERhZmZDb3VudHJ5Tm90Rm91bmRFcnJvclxufSBmcm9tICdAZGFmZm9kaWwvZ2VvZ3JhcGh5L2RyaXZlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZJbk1lbW9yeUdlb2dyYXBoeVNlcnZpY2UgaW1wbGVtZW50cyBEYWZmR2VvZ3JhcGh5U2VydmljZUludGVyZmFjZTxEYWZmQ291bnRyeT4ge1xuICB1cmwgPSAnL2FwaS9jb3VudHJpZXMnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cblxuICBnZXQoY291bnRyeUlkOiBEYWZmQ291bnRyeVsnaWQnXSk6IE9ic2VydmFibGU8RGFmZkNvdW50cnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxEYWZmQ291bnRyeT4oYCR7dGhpcy51cmx9LyR7Y291bnRyeUlkfWApLnBpcGUoXG5cdFx0XHRjYXRjaEVycm9yKChlcnJvcjogRXJyb3IpID0+IHRocm93RXJyb3IoRGFmZkNvdW50cnlOb3RGb3VuZEVycm9yKSksXG5cdFx0XHRtYXAocmVzdWx0ID0+IHJlc3VsdClcblx0XHQpO1xuICB9XG5cbiAgbGlzdCgpOiBPYnNlcnZhYmxlPERhZmZDb3VudHJ5W10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxEYWZmQ291bnRyeVtdPihgJHt0aGlzLnVybH0vYCk7XG4gIH1cbn1cbiJdfQ==