/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffGeographyActionTypes = {
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
export class DaffCountryLoad {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffGeographyActionTypes.CountryLoadAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCountryLoad.prototype.type;
    /** @type {?} */
    DaffCountryLoad.prototype.payload;
}
/**
 * @template T
 */
export class DaffCountryLoadSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffGeographyActionTypes.CountryLoadSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCountryLoadSuccess.prototype.type;
    /** @type {?} */
    DaffCountryLoadSuccess.prototype.payload;
}
export class DaffCountryLoadFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffGeographyActionTypes.CountryLoadFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCountryLoadFailure.prototype.type;
    /** @type {?} */
    DaffCountryLoadFailure.prototype.payload;
}
export class DaffCountryList {
    constructor() {
        this.type = DaffGeographyActionTypes.CountryListAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCountryList.prototype.type;
}
/**
 * @template T
 */
export class DaffCountryListSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffGeographyActionTypes.CountryListSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCountryListSuccess.prototype.type;
    /** @type {?} */
    DaffCountryListSuccess.prototype.payload;
}
export class DaffCountryListFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffGeographyActionTypes.CountryListFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCountryListFailure.prototype.type;
    /** @type {?} */
    DaffCountryListFailure.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvZ3JhcGh5LmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvZ2VvZ3JhcGh5L3N0YXRlLyIsInNvdXJjZXMiOlsiYWN0aW9ucy9nZW9ncmFwaHkuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFLRSxtQkFBb0IscUNBQXFDO0lBQ3pELDBCQUEyQiw2Q0FBNkM7SUFDeEUsMEJBQTJCLDZDQUE2QztJQUN4RSxtQkFBb0IscUNBQXFDO0lBQ3pELDBCQUEyQiw2Q0FBNkM7SUFDeEUsMEJBQTJCLDZDQUE2Qzs7Ozs7O0FBRzFFLE1BQU0sT0FBTyxlQUFlOzs7O0lBRzFCLFlBQW1CLE9BQWdCO1FBQWhCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFGMUIsU0FBSSxHQUFHLHdCQUF3QixDQUFDLGlCQUFpQixDQUFDO0lBRXJCLENBQUM7Q0FDeEM7OztJQUhDLCtCQUEyRDs7SUFFL0Msa0NBQXVCOzs7OztBQUdyQyxNQUFNLE9BQU8sc0JBQXNCOzs7O0lBR2pDLFlBQW1CLE9BQVU7UUFBVixZQUFPLEdBQVAsT0FBTyxDQUFHO1FBRnBCLFNBQUksR0FBRyx3QkFBd0IsQ0FBQyx3QkFBd0IsQ0FBQztJQUVsQyxDQUFDO0NBQ2xDOzs7SUFIQyxzQ0FBa0U7O0lBRXRELHlDQUFpQjs7QUFHL0IsTUFBTSxPQUFPLHNCQUFzQjs7OztJQUdqQyxZQUFtQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUZ6QixTQUFJLEdBQUcsd0JBQXdCLENBQUMsd0JBQXdCLENBQUM7SUFFN0IsQ0FBQztDQUN2Qzs7O0lBSEMsc0NBQWtFOztJQUV0RCx5Q0FBc0I7O0FBR3BDLE1BQU0sT0FBTyxlQUFlO0lBQTVCO1FBQ1csU0FBSSxHQUFHLHdCQUF3QixDQUFDLGlCQUFpQixDQUFDO0lBQzdELENBQUM7Q0FBQTs7O0lBREMsK0JBQTJEOzs7OztBQUc3RCxNQUFNLE9BQU8sc0JBQXNCOzs7O0lBR2pDLFlBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRnRCLFNBQUksR0FBRyx3QkFBd0IsQ0FBQyx3QkFBd0IsQ0FBQztJQUVoQyxDQUFDO0NBQ3BDOzs7SUFIQyxzQ0FBa0U7O0lBRXRELHlDQUFtQjs7QUFHakMsTUFBTSxPQUFPLHNCQUFzQjs7OztJQUdqQyxZQUFtQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUZ6QixTQUFJLEdBQUcsd0JBQXdCLENBQUMsd0JBQXdCLENBQUM7SUFFN0IsQ0FBQztDQUN2Qzs7O0lBSEMsc0NBQWtFOztJQUV0RCx5Q0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IERhZmZDb3VudHJ5IH0gZnJvbSAnQGRhZmZvZGlsL2dlb2dyYXBoeSc7XG5cbmV4cG9ydCBlbnVtIERhZmZHZW9ncmFwaHlBY3Rpb25UeXBlcyB7XG4gIENvdW50cnlMb2FkQWN0aW9uID0gJ1tEYWZmR2VvZ3JhcGh5XSBDb3VudHJ5IExvYWQgQWN0aW9uJyxcbiAgQ291bnRyeUxvYWRTdWNjZXNzQWN0aW9uID0gJ1tEYWZmR2VvZ3JhcGh5XSBDb3VudHJ5IExvYWQgU3VjY2VzcyBBY3Rpb24nLFxuICBDb3VudHJ5TG9hZEZhaWx1cmVBY3Rpb24gPSAnW0RhZmZHZW9ncmFwaHldIENvdW50cnkgTG9hZCBGYWlsdXJlIEFjdGlvbicsXG4gIENvdW50cnlMaXN0QWN0aW9uID0gJ1tEYWZmR2VvZ3JhcGh5XSBDb3VudHJ5IExpc3QgQWN0aW9uJyxcbiAgQ291bnRyeUxpc3RTdWNjZXNzQWN0aW9uID0gJ1tEYWZmR2VvZ3JhcGh5XSBDb3VudHJ5IExpc3QgU3VjY2VzcyBBY3Rpb24nLFxuICBDb3VudHJ5TGlzdEZhaWx1cmVBY3Rpb24gPSAnW0RhZmZHZW9ncmFwaHldIENvdW50cnkgTGlzdCBGYWlsdXJlIEFjdGlvbicsXG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ291bnRyeUxvYWQ8VCBleHRlbmRzIERhZmZDb3VudHJ5PiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmR2VvZ3JhcGh5QWN0aW9uVHlwZXMuQ291bnRyeUxvYWRBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFRbJ2lkJ10pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ291bnRyeUxvYWRTdWNjZXNzPFQgZXh0ZW5kcyBEYWZmQ291bnRyeT4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkdlb2dyYXBoeUFjdGlvblR5cGVzLkNvdW50cnlMb2FkU3VjY2Vzc0FjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVCkge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDb3VudHJ5TG9hZEZhaWx1cmUgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkdlb2dyYXBoeUFjdGlvblR5cGVzLkNvdW50cnlMb2FkRmFpbHVyZUFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgRGFmZkNvdW50cnlMaXN0IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZHZW9ncmFwaHlBY3Rpb25UeXBlcy5Db3VudHJ5TGlzdEFjdGlvbjtcbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDb3VudHJ5TGlzdFN1Y2Nlc3M8VCBleHRlbmRzIERhZmZDb3VudHJ5PiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmR2VvZ3JhcGh5QWN0aW9uVHlwZXMuQ291bnRyeUxpc3RTdWNjZXNzQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBUW10pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ291bnRyeUxpc3RGYWlsdXJlIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZHZW9ncmFwaHlBY3Rpb25UeXBlcy5Db3VudHJ5TGlzdEZhaWx1cmVBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cbn1cblxuZXhwb3J0IHR5cGUgRGFmZkdlb2dyYXBoeUFjdGlvbnM8VCBleHRlbmRzIERhZmZDb3VudHJ5PiA9XG4gIHwgRGFmZkNvdW50cnlMb2FkPFQ+XG4gIHwgRGFmZkNvdW50cnlMb2FkU3VjY2VzczxUPlxuICB8IERhZmZDb3VudHJ5TG9hZEZhaWx1cmVcbiAgfCBEYWZmQ291bnRyeUxpc3RcbiAgfCBEYWZmQ291bnRyeUxpc3RTdWNjZXNzPFQ+XG4gIHwgRGFmZkNvdW50cnlMaXN0RmFpbHVyZTtcbiJdfQ==