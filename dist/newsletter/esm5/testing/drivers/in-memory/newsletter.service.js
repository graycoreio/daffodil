/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
/**
 * The newsletter inmemory driver to mock the newsletter backend service.
 *
 * \@Param HttpClient
 */
var DaffInMemoryNewsletterService = /** @class */ (function () {
    function DaffInMemoryNewsletterService(http) {
        this.http = http;
        this.url = '/api/newsletters/';
    }
    /**
     * Sends your newsletter submission data.
     *
     * @param payload DaffNewsletterUnion
     * @returns An Observable of DaffNewsletterUnion
     */
    /**
     * Sends your newsletter submission data.
     *
     * @param {?} payload DaffNewsletterUnion
     * @return {?} An Observable of DaffNewsletterUnion
     */
    DaffInMemoryNewsletterService.prototype.send = /**
     * Sends your newsletter submission data.
     *
     * @param {?} payload DaffNewsletterUnion
     * @return {?} An Observable of DaffNewsletterUnion
     */
    function (payload) {
        return this.http.post(this.url, payload);
    };
    DaffInMemoryNewsletterService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryNewsletterService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DaffInMemoryNewsletterService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryNewsletterService_Factory() { return new DaffInMemoryNewsletterService(i0.ɵɵinject(i1.HttpClient)); }, token: DaffInMemoryNewsletterService, providedIn: "root" });
    return DaffInMemoryNewsletterService;
}());
export { DaffInMemoryNewsletterService };
if (false) {
    /** @type {?} */
    DaffInMemoryNewsletterService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryNewsletterService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3c2xldHRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL25ld3NsZXR0ZXIvdGVzdGluZy8iLCJzb3VyY2VzIjpbImRyaXZlcnMvaW4tbWVtb3J5L25ld3NsZXR0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUszQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7Ozs7O0FBT2xEO0lBTUUsdUNBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFGcEMsUUFBRyxHQUFHLG1CQUFtQixDQUFDO0lBRWMsQ0FBQztJQUV6Qzs7Ozs7T0FLRzs7Ozs7OztJQUNILDRDQUFJOzs7Ozs7SUFBSixVQUFLLE9BQTRCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQXNCLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7Z0JBaEJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBVFEsVUFBVTs7O3dDQUxuQjtDQThCQyxBQWxCRCxJQWtCQztTQWZZLDZCQUE2Qjs7O0lBQ3hDLDRDQUEwQjs7Ozs7SUFFZCw2Q0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGFmZk5ld3NsZXR0ZXJTZXJ2aWNlSW50ZXJmYWNlfSBmcm9tICdAZGFmZm9kaWwvbmV3c2xldHRlcic7XG5pbXBvcnQgeyBEYWZmTmV3c2xldHRlclVuaW9uIH0gZnJvbSAnQGRhZmZvZGlsL25ld3NsZXR0ZXInO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuLyoqXG4gKiBUaGUgbmV3c2xldHRlciBpbm1lbW9yeSBkcml2ZXIgdG8gbW9jayB0aGUgbmV3c2xldHRlciBiYWNrZW5kIHNlcnZpY2UuXG4gKiBcbiAqIEBQYXJhbSBIdHRwQ2xpZW50XG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZJbk1lbW9yeU5ld3NsZXR0ZXJTZXJ2aWNlIGltcGxlbWVudHMgRGFmZk5ld3NsZXR0ZXJTZXJ2aWNlSW50ZXJmYWNlPERhZmZOZXdzbGV0dGVyVW5pb24sIERhZmZOZXdzbGV0dGVyVW5pb24+e1xuICB1cmwgPSAnL2FwaS9uZXdzbGV0dGVycy8nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG4gIFxuICAvKipcbiAgICogU2VuZHMgeW91ciBuZXdzbGV0dGVyIHN1Ym1pc3Npb24gZGF0YS5cbiAgICogXG4gICAqIEBwYXJhbSBwYXlsb2FkIERhZmZOZXdzbGV0dGVyVW5pb25cbiAgICogQHJldHVybnMgQW4gT2JzZXJ2YWJsZSBvZiBEYWZmTmV3c2xldHRlclVuaW9uXG4gICAqL1xuICBzZW5kKHBheWxvYWQ6IERhZmZOZXdzbGV0dGVyVW5pb24pOiBPYnNlcnZhYmxlPERhZmZOZXdzbGV0dGVyVW5pb24+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8RGFmZk5ld3NsZXR0ZXJVbmlvbj4odGhpcy51cmwsIHBheWxvYWQpO1xuICB9XG5cbn0iXX0=