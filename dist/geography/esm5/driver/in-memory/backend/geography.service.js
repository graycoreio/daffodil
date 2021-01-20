/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { STATUS } from 'angular-in-memory-web-api';
import { DaffCountryFactory, DaffSubdivisionFactory } from '@daffodil/geography/testing';
import * as i0 from "@angular/core";
import * as i1 from "@daffodil/geography/testing";
/**
 * An in-memory service that stubs out the backend services for getting countries.
 */
var DaffInMemoryBackendGeographyService = /** @class */ (function () {
    function DaffInMemoryBackendGeographyService(countryFactory, subdivisionFactory) {
        var _this = this;
        this.countryFactory = countryFactory;
        this.subdivisionFactory = subdivisionFactory;
        this.countries = this.countryFactory.createMany(5);
        this.countries.forEach((/**
         * @param {?} country
         * @return {?}
         */
        function (country) { return country.subdivisions = _this.subdivisionFactory.createMany(5); }));
    }
    /**
     * Creates a fake database of countries for the geography inmemory backend service.
     *
     * @returns A fake database of an array of countries
     */
    /**
     * Creates a fake database of countries for the geography inmemory backend service.
     *
     * @param {?} reqInfo
     * @return {?} A fake database of an array of countries
     */
    DaffInMemoryBackendGeographyService.prototype.createDb = /**
     * Creates a fake database of countries for the geography inmemory backend service.
     *
     * @param {?} reqInfo
     * @return {?} A fake database of an array of countries
     */
    function (reqInfo) {
        if (reqInfo) {
            /** @type {?} */
            var seedData = reqInfo.utils.getJsonBody(reqInfo.req).countries;
            if (seedData) {
                this.countries = seedData;
            }
        }
        return {
            countries: this.countries
        };
    };
    /**
     * Responds to GET requests.
     */
    /**
     * Responds to GET requests.
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendGeographyService.prototype.get = /**
     * Responds to GET requests.
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: reqInfo.id ? _this.getCountry(reqInfo) : _this.listCountries(reqInfo),
            status: STATUS.OK
        }); }));
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendGeographyService.prototype.getCountry = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return reqInfo.collection.find((/**
         * @param {?} country
         * @return {?}
         */
        function (country) { return country.id === reqInfo.id; }));
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendGeographyService.prototype.listCountries = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return reqInfo.collection;
    };
    DaffInMemoryBackendGeographyService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryBackendGeographyService.ctorParameters = function () { return [
        { type: DaffCountryFactory },
        { type: DaffSubdivisionFactory }
    ]; };
    /** @nocollapse */ DaffInMemoryBackendGeographyService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendGeographyService_Factory() { return new DaffInMemoryBackendGeographyService(i0.ɵɵinject(i1.DaffCountryFactory), i0.ɵɵinject(i1.DaffSubdivisionFactory)); }, token: DaffInMemoryBackendGeographyService, providedIn: "root" });
    return DaffInMemoryBackendGeographyService;
}());
export { DaffInMemoryBackendGeographyService };
if (false) {
    /** @type {?} */
    DaffInMemoryBackendGeographyService.prototype.countries;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryBackendGeographyService.prototype.countryFactory;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryBackendGeographyService.prototype.subdivisionFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvZ3JhcGh5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvZ2VvZ3JhcGh5L2RyaXZlci9pbi1tZW1vcnkvIiwic291cmNlcyI6WyJiYWNrZW5kL2dlb2dyYXBoeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFHTCxNQUFNLEVBQ1AsTUFBTSwyQkFBMkIsQ0FBQztBQUluQyxPQUFPLEVBQ0wsa0JBQWtCLEVBQ2xCLHNCQUFzQixFQUN2QixNQUFNLDZCQUE2QixDQUFDOzs7Ozs7QUFLckM7SUFNRSw2Q0FDVSxjQUFrQyxFQUNsQyxrQkFBMEM7UUFGcEQsaUJBTUM7UUFMUyxtQkFBYyxHQUFkLGNBQWMsQ0FBb0I7UUFDbEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUF3QjtRQUVsRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUE1RCxDQUE0RCxFQUFDLENBQUE7SUFDakcsQ0FBQztJQUVEOzs7O09BSUc7Ozs7Ozs7SUFDSCxzREFBUTs7Ozs7O0lBQVIsVUFBUyxPQUFvQjtRQUMzQixJQUFJLE9BQU8sRUFBRTs7Z0JBQ0wsUUFBUSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTO1lBQ2pFLElBQUksUUFBUSxFQUFFO2dCQUNaLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO2FBQzNCO1NBQ0Y7UUFFRCxPQUFPO1lBQ0wsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1NBQzFCLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNILGlEQUFHOzs7OztJQUFILFVBQUksT0FBb0I7UUFBeEIsaUJBS0M7UUFKQyxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZTs7O1FBQUMsY0FBTSxPQUFBLENBQUM7WUFDMUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1lBQ3pFLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNsQixDQUFDLEVBSHlDLENBR3pDLEVBQUMsQ0FBQTtJQUNMLENBQUM7Ozs7OztJQUVPLHdEQUFVOzs7OztJQUFsQixVQUFtQixPQUFvQjtRQUNyQyxPQUFPLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSTs7OztRQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUMsRUFBRSxFQUF6QixDQUF5QixFQUFDLENBQUE7SUFDdEUsQ0FBQzs7Ozs7O0lBRU8sMkRBQWE7Ozs7O0lBQXJCLFVBQXNCLE9BQW9CO1FBQ3hDLE9BQU8sT0FBTyxDQUFDLFVBQVUsQ0FBQTtJQUMzQixDQUFDOztnQkFoREYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFUQyxrQkFBa0I7Z0JBQ2xCLHNCQUFzQjs7OzhDQVh4QjtDQWtFQyxBQWpERCxJQWlEQztTQTlDWSxtQ0FBbUM7OztJQUM5Qyx3REFBeUI7Ozs7O0lBR3ZCLDZEQUEwQzs7Ozs7SUFDMUMsaUVBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgSW5NZW1vcnlEYlNlcnZpY2UsXG4gIFJlcXVlc3RJbmZvLFxuICBTVEFUVVNcbn0gZnJvbSAnYW5ndWxhci1pbi1tZW1vcnktd2ViLWFwaSc7XG5cbmltcG9ydCB7IERhZmZJbk1lbW9yeURhdGFTZXJ2aWNlSW50ZXJmYWNlIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQgeyBEYWZmQ291bnRyeSB9IGZyb20gJ0BkYWZmb2RpbC9nZW9ncmFwaHknO1xuaW1wb3J0IHtcbiAgRGFmZkNvdW50cnlGYWN0b3J5LFxuICBEYWZmU3ViZGl2aXNpb25GYWN0b3J5XG59IGZyb20gJ0BkYWZmb2RpbC9nZW9ncmFwaHkvdGVzdGluZyc7XG5cbi8qKlxuICogQW4gaW4tbWVtb3J5IHNlcnZpY2UgdGhhdCBzdHVicyBvdXQgdGhlIGJhY2tlbmQgc2VydmljZXMgZm9yIGdldHRpbmcgY291bnRyaWVzLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmSW5NZW1vcnlCYWNrZW5kR2VvZ3JhcGh5U2VydmljZSBpbXBsZW1lbnRzIEluTWVtb3J5RGJTZXJ2aWNlLCBEYWZmSW5NZW1vcnlEYXRhU2VydmljZUludGVyZmFjZSB7XG4gIGNvdW50cmllczogRGFmZkNvdW50cnlbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvdW50cnlGYWN0b3J5OiBEYWZmQ291bnRyeUZhY3RvcnksXG4gICAgcHJpdmF0ZSBzdWJkaXZpc2lvbkZhY3Rvcnk6IERhZmZTdWJkaXZpc2lvbkZhY3RvcnlcbiAgKSB7XG4gICAgdGhpcy5jb3VudHJpZXMgPSB0aGlzLmNvdW50cnlGYWN0b3J5LmNyZWF0ZU1hbnkoNSk7XG4gICAgdGhpcy5jb3VudHJpZXMuZm9yRWFjaChjb3VudHJ5ID0+IGNvdW50cnkuc3ViZGl2aXNpb25zID0gdGhpcy5zdWJkaXZpc2lvbkZhY3RvcnkuY3JlYXRlTWFueSg1KSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgZmFrZSBkYXRhYmFzZSBvZiBjb3VudHJpZXMgZm9yIHRoZSBnZW9ncmFwaHkgaW5tZW1vcnkgYmFja2VuZCBzZXJ2aWNlLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIGZha2UgZGF0YWJhc2Ugb2YgYW4gYXJyYXkgb2YgY291bnRyaWVzXG4gICAqL1xuICBjcmVhdGVEYihyZXFJbmZvOiBSZXF1ZXN0SW5mbyk6IGFueSB7XG4gICAgaWYgKHJlcUluZm8pIHtcbiAgICAgIGNvbnN0IHNlZWREYXRhID0gcmVxSW5mby51dGlscy5nZXRKc29uQm9keShyZXFJbmZvLnJlcSkuY291bnRyaWVzO1xuICAgICAgaWYgKHNlZWREYXRhKSB7XG4gICAgICAgIHRoaXMuY291bnRyaWVzID0gc2VlZERhdGE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvdW50cmllczogdGhpcy5jb3VudHJpZXNcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc3BvbmRzIHRvIEdFVCByZXF1ZXN0cy5cbiAgICovXG4gIGdldChyZXFJbmZvOiBSZXF1ZXN0SW5mbyk6IGFueSB7XG4gICAgcmV0dXJuIHJlcUluZm8udXRpbHMuY3JlYXRlUmVzcG9uc2UkKCgpID0+ICh7XG4gICAgICBib2R5OiByZXFJbmZvLmlkID8gdGhpcy5nZXRDb3VudHJ5KHJlcUluZm8pIDogdGhpcy5saXN0Q291bnRyaWVzKHJlcUluZm8pLFxuICAgICAgc3RhdHVzOiBTVEFUVVMuT0tcbiAgICB9KSlcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q291bnRyeShyZXFJbmZvOiBSZXF1ZXN0SW5mbykge1xuICAgIHJldHVybiByZXFJbmZvLmNvbGxlY3Rpb24uZmluZChjb3VudHJ5ID0+IGNvdW50cnkuaWQgPT09IHJlcUluZm8uaWQpXG4gIH1cblxuICBwcml2YXRlIGxpc3RDb3VudHJpZXMocmVxSW5mbzogUmVxdWVzdEluZm8pIHtcbiAgICByZXR1cm4gcmVxSW5mby5jb2xsZWN0aW9uXG4gIH1cbn1cbiJdfQ==