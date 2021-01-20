/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var DaffInMemoryContactService = /** @class */ (function () {
    function DaffInMemoryContactService(http) {
        this.http = http;
        this.url = '/api/contact';
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    DaffInMemoryContactService.prototype.send = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        return this.http.post(this.url, payload);
    };
    DaffInMemoryContactService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryContactService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DaffInMemoryContactService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryContactService_Factory() { return new DaffInMemoryContactService(i0.ɵɵinject(i1.HttpClient)); }, token: DaffInMemoryContactService, providedIn: "root" });
    return DaffInMemoryContactService;
}());
export { DaffInMemoryContactService };
if (false) {
    /** @type {?} */
    DaffInMemoryContactService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryContactService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NvbnRhY3QvZHJpdmVyL2luLW1lbW9yeS8iLCJzb3VyY2VzIjpbImNvbnRhY3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQU1sRDtJQU1FLG9DQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRHBDLFFBQUcsR0FBRyxjQUFjLENBQUM7SUFDa0IsQ0FBQzs7Ozs7SUFFeEMseUNBQUk7Ozs7SUFBSixVQUFLLE9BQXlCO1FBQzVCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQW1CLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Z0JBVkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFSUSxVQUFVOzs7cUNBRG5CO0NBa0JDLEFBWEQsSUFXQztTQVJZLDBCQUEwQjs7O0lBRXJDLHlDQUFxQjs7Ozs7SUFDVCwwQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEYWZmQ29udGFjdFNlcnZpY2VJbnRlcmZhY2UgfSBmcm9tICdAZGFmZm9kaWwvY29udGFjdC9kcml2ZXInO1xuaW1wb3J0IHsgRGFmZkNvbnRhY3RVbmlvbiB9IGZyb20gJ0BkYWZmb2RpbC9jb250YWN0JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZkluTWVtb3J5Q29udGFjdFNlcnZpY2UgaW1wbGVtZW50cyBEYWZmQ29udGFjdFNlcnZpY2VJbnRlcmZhY2U8RGFmZkNvbnRhY3RVbmlvbiwgRGFmZkNvbnRhY3RVbmlvbj57XG4gIFxuICB1cmwgPSAnL2FwaS9jb250YWN0JztcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIHNlbmQocGF5bG9hZDogRGFmZkNvbnRhY3RVbmlvbik6IE9ic2VydmFibGU8RGFmZkNvbnRhY3RVbmlvbj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxEYWZmQ29udGFjdFVuaW9uPih0aGlzLnVybCwgcGF5bG9hZCk7XG4gIH1cbn0iXX0=