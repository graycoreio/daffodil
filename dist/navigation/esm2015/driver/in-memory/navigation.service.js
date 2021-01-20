/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class DaffInMemoryNavigationService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = '/api/navigation/';
    }
    /**
     * @param {?} navigationId
     * @return {?}
     */
    get(navigationId) {
        return this.http.get(this.url + navigationId);
    }
}
DaffInMemoryNavigationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryNavigationService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DaffInMemoryNavigationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryNavigationService_Factory() { return new DaffInMemoryNavigationService(i0.ɵɵinject(i1.HttpClient)); }, token: DaffInMemoryNavigationService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffInMemoryNavigationService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryNavigationService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL25hdmlnYXRpb24vZHJpdmVyL2luLW1lbW9yeS8iLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQVNsRCxNQUFNLE9BQU8sNkJBQTZCOzs7O0lBR3hDLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFGcEMsUUFBRyxHQUFHLGtCQUFrQixDQUFDO0lBRWMsQ0FBQzs7Ozs7SUFFeEMsR0FBRyxDQUFDLFlBQW9CO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQXFCLElBQUksQ0FBQyxHQUFHLEdBQUcsWUFBWSxDQUFDLENBQUM7SUFDcEUsQ0FBQzs7O1lBVkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBUlEsVUFBVTs7Ozs7SUFVakIsNENBQXlCOzs7OztJQUViLDZDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERhZmZOYXZpZ2F0aW9uVHJlZSB9IGZyb20gJ0BkYWZmb2RpbC9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IERhZmZOYXZpZ2F0aW9uU2VydmljZUludGVyZmFjZSB9IGZyb20gJ0BkYWZmb2RpbC9uYXZpZ2F0aW9uL2RyaXZlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZJbk1lbW9yeU5hdmlnYXRpb25TZXJ2aWNlIGltcGxlbWVudHMgRGFmZk5hdmlnYXRpb25TZXJ2aWNlSW50ZXJmYWNlPERhZmZOYXZpZ2F0aW9uVHJlZT4ge1xuICB1cmwgPSAnL2FwaS9uYXZpZ2F0aW9uLyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIGdldChuYXZpZ2F0aW9uSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8RGFmZk5hdmlnYXRpb25UcmVlPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RGFmZk5hdmlnYXRpb25UcmVlPih0aGlzLnVybCArIG5hdmlnYXRpb25JZCk7XG4gIH1cbn1cbiJdfQ==