/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DaffGeographyActionTypes = {
    CountryLoadAction: '[DaffGeography] Country Load Action',
    CountryLoadSuccessAction: '[DaffGeography] Country Load Success Action',
    CountryLoadFailureAction: '[DaffGeography] Country Load Failure Action',
    CountryListAction: '[DaffGeography] Country List Action',
    CountryListSuccessAction: '[DaffGeography] Country List Success Action',
    CountryListFailureAction: '[DaffGeography] Country List Failure Action',
};
export { DaffGeographyActionTypes };
/**
 * @template T
 */
var /**
 * @template T
 */
DaffCountryLoad = /** @class */ (function () {
    function DaffCountryLoad(payload) {
        this.payload = payload;
        this.type = DaffGeographyActionTypes.CountryLoadAction;
    }
    return DaffCountryLoad;
}());
/**
 * @template T
 */
export { DaffCountryLoad };
if (false) {
    /** @type {?} */
    DaffCountryLoad.prototype.type;
    /** @type {?} */
    DaffCountryLoad.prototype.payload;
}
/**
 * @template T
 */
var /**
 * @template T
 */
DaffCountryLoadSuccess = /** @class */ (function () {
    function DaffCountryLoadSuccess(payload) {
        this.payload = payload;
        this.type = DaffGeographyActionTypes.CountryLoadSuccessAction;
    }
    return DaffCountryLoadSuccess;
}());
/**
 * @template T
 */
export { DaffCountryLoadSuccess };
if (false) {
    /** @type {?} */
    DaffCountryLoadSuccess.prototype.type;
    /** @type {?} */
    DaffCountryLoadSuccess.prototype.payload;
}
var DaffCountryLoadFailure = /** @class */ (function () {
    function DaffCountryLoadFailure(payload) {
        this.payload = payload;
        this.type = DaffGeographyActionTypes.CountryLoadFailureAction;
    }
    return DaffCountryLoadFailure;
}());
export { DaffCountryLoadFailure };
if (false) {
    /** @type {?} */
    DaffCountryLoadFailure.prototype.type;
    /** @type {?} */
    DaffCountryLoadFailure.prototype.payload;
}
var DaffCountryList = /** @class */ (function () {
    function DaffCountryList() {
        this.type = DaffGeographyActionTypes.CountryListAction;
    }
    return DaffCountryList;
}());
export { DaffCountryList };
if (false) {
    /** @type {?} */
    DaffCountryList.prototype.type;
}
/**
 * @template T
 */
var /**
 * @template T
 */
DaffCountryListSuccess = /** @class */ (function () {
    function DaffCountryListSuccess(payload) {
        this.payload = payload;
        this.type = DaffGeographyActionTypes.CountryListSuccessAction;
    }
    return DaffCountryListSuccess;
}());
/**
 * @template T
 */
export { DaffCountryListSuccess };
if (false) {
    /** @type {?} */
    DaffCountryListSuccess.prototype.type;
    /** @type {?} */
    DaffCountryListSuccess.prototype.payload;
}
var DaffCountryListFailure = /** @class */ (function () {
    function DaffCountryListFailure(payload) {
        this.payload = payload;
        this.type = DaffGeographyActionTypes.CountryListFailureAction;
    }
    return DaffCountryListFailure;
}());
export { DaffCountryListFailure };
if (false) {
    /** @type {?} */
    DaffCountryListFailure.prototype.type;
    /** @type {?} */
    DaffCountryListFailure.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvZ3JhcGh5LmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvZ2VvZ3JhcGh5L3N0YXRlLyIsInNvdXJjZXMiOlsiYWN0aW9ucy9nZW9ncmFwaHkuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFLRSxtQkFBb0IscUNBQXFDO0lBQ3pELDBCQUEyQiw2Q0FBNkM7SUFDeEUsMEJBQTJCLDZDQUE2QztJQUN4RSxtQkFBb0IscUNBQXFDO0lBQ3pELDBCQUEyQiw2Q0FBNkM7SUFDeEUsMEJBQTJCLDZDQUE2Qzs7Ozs7O0FBRzFFOzs7O0lBR0UseUJBQW1CLE9BQWdCO1FBQWhCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFGMUIsU0FBSSxHQUFHLHdCQUF3QixDQUFDLGlCQUFpQixDQUFDO0lBRXJCLENBQUM7SUFDekMsc0JBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7Ozs7OztJQUhDLCtCQUEyRDs7SUFFL0Msa0NBQXVCOzs7OztBQUdyQzs7OztJQUdFLGdDQUFtQixPQUFVO1FBQVYsWUFBTyxHQUFQLE9BQU8sQ0FBRztRQUZwQixTQUFJLEdBQUcsd0JBQXdCLENBQUMsd0JBQXdCLENBQUM7SUFFbEMsQ0FBQztJQUNuQyw2QkFBQztBQUFELENBQUMsQUFKRCxJQUlDOzs7Ozs7O0lBSEMsc0NBQWtFOztJQUV0RCx5Q0FBaUI7O0FBRy9CO0lBR0UsZ0NBQW1CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRnpCLFNBQUksR0FBRyx3QkFBd0IsQ0FBQyx3QkFBd0IsQ0FBQztJQUU3QixDQUFDO0lBQ3hDLDZCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7SUFIQyxzQ0FBa0U7O0lBRXRELHlDQUFzQjs7QUFHcEM7SUFBQTtRQUNXLFNBQUksR0FBRyx3QkFBd0IsQ0FBQyxpQkFBaUIsQ0FBQztJQUM3RCxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7OztJQURDLCtCQUEyRDs7Ozs7QUFHN0Q7Ozs7SUFHRSxnQ0FBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFGdEIsU0FBSSxHQUFHLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDO0lBRWhDLENBQUM7SUFDckMsNkJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7Ozs7OztJQUhDLHNDQUFrRTs7SUFFdEQseUNBQW1COztBQUdqQztJQUdFLGdDQUFtQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUZ6QixTQUFJLEdBQUcsd0JBQXdCLENBQUMsd0JBQXdCLENBQUM7SUFFN0IsQ0FBQztJQUN4Qyw2QkFBQztBQUFELENBQUMsQUFKRCxJQUlDOzs7O0lBSEMsc0NBQWtFOztJQUV0RCx5Q0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IERhZmZDb3VudHJ5IH0gZnJvbSAnQGRhZmZvZGlsL2dlb2dyYXBoeSc7XG5cbmV4cG9ydCBlbnVtIERhZmZHZW9ncmFwaHlBY3Rpb25UeXBlcyB7XG4gIENvdW50cnlMb2FkQWN0aW9uID0gJ1tEYWZmR2VvZ3JhcGh5XSBDb3VudHJ5IExvYWQgQWN0aW9uJyxcbiAgQ291bnRyeUxvYWRTdWNjZXNzQWN0aW9uID0gJ1tEYWZmR2VvZ3JhcGh5XSBDb3VudHJ5IExvYWQgU3VjY2VzcyBBY3Rpb24nLFxuICBDb3VudHJ5TG9hZEZhaWx1cmVBY3Rpb24gPSAnW0RhZmZHZW9ncmFwaHldIENvdW50cnkgTG9hZCBGYWlsdXJlIEFjdGlvbicsXG4gIENvdW50cnlMaXN0QWN0aW9uID0gJ1tEYWZmR2VvZ3JhcGh5XSBDb3VudHJ5IExpc3QgQWN0aW9uJyxcbiAgQ291bnRyeUxpc3RTdWNjZXNzQWN0aW9uID0gJ1tEYWZmR2VvZ3JhcGh5XSBDb3VudHJ5IExpc3QgU3VjY2VzcyBBY3Rpb24nLFxuICBDb3VudHJ5TGlzdEZhaWx1cmVBY3Rpb24gPSAnW0RhZmZHZW9ncmFwaHldIENvdW50cnkgTGlzdCBGYWlsdXJlIEFjdGlvbicsXG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ291bnRyeUxvYWQ8VCBleHRlbmRzIERhZmZDb3VudHJ5PiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmR2VvZ3JhcGh5QWN0aW9uVHlwZXMuQ291bnRyeUxvYWRBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFRbJ2lkJ10pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ291bnRyeUxvYWRTdWNjZXNzPFQgZXh0ZW5kcyBEYWZmQ291bnRyeT4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkdlb2dyYXBoeUFjdGlvblR5cGVzLkNvdW50cnlMb2FkU3VjY2Vzc0FjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVCkge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDb3VudHJ5TG9hZEZhaWx1cmUgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkdlb2dyYXBoeUFjdGlvblR5cGVzLkNvdW50cnlMb2FkRmFpbHVyZUFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgRGFmZkNvdW50cnlMaXN0IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZHZW9ncmFwaHlBY3Rpb25UeXBlcy5Db3VudHJ5TGlzdEFjdGlvbjtcbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDb3VudHJ5TGlzdFN1Y2Nlc3M8VCBleHRlbmRzIERhZmZDb3VudHJ5PiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmR2VvZ3JhcGh5QWN0aW9uVHlwZXMuQ291bnRyeUxpc3RTdWNjZXNzQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBUW10pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ291bnRyeUxpc3RGYWlsdXJlIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZHZW9ncmFwaHlBY3Rpb25UeXBlcy5Db3VudHJ5TGlzdEZhaWx1cmVBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cbn1cblxuZXhwb3J0IHR5cGUgRGFmZkdlb2dyYXBoeUFjdGlvbnM8VCBleHRlbmRzIERhZmZDb3VudHJ5PiA9XG4gIHwgRGFmZkNvdW50cnlMb2FkPFQ+XG4gIHwgRGFmZkNvdW50cnlMb2FkU3VjY2VzczxUPlxuICB8IERhZmZDb3VudHJ5TG9hZEZhaWx1cmVcbiAgfCBEYWZmQ291bnRyeUxpc3RcbiAgfCBEYWZmQ291bnRyeUxpc3RTdWNjZXNzPFQ+XG4gIHwgRGFmZkNvdW50cnlMaXN0RmFpbHVyZTtcbiJdfQ==