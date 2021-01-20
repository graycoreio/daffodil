/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { STATUS } from 'angular-in-memory-web-api';
import { DaffNavigationTreeFactory } from '@daffodil/navigation/testing';
import * as i0 from "@angular/core";
import * as i1 from "@daffodil/navigation/testing";
var DaffInMemoryBackendNavigationService = /** @class */ (function () {
    function DaffInMemoryBackendNavigationService(navigationTreeFactory) {
        this.navigationTreeFactory = navigationTreeFactory;
        this.navigationTree = this.navigationTreeFactory.create();
    }
    /**
     * @param {?} url
     * @param {?} utils
     * @return {?}
     */
    DaffInMemoryBackendNavigationService.prototype.parseRequestUrl = /**
     * @param {?} url
     * @param {?} utils
     * @return {?}
     */
    function (url, utils) {
        return utils.parseRequestUrl(url);
    };
    /**
     * @return {?}
     */
    DaffInMemoryBackendNavigationService.prototype.createDb = /**
     * @return {?}
     */
    function () {
        return {
            navigation: [this.navigationTree]
        };
    };
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendNavigationService.prototype.get = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () {
            return {
                body: _this.navigationTree,
                status: STATUS.OK
            };
        }));
    };
    DaffInMemoryBackendNavigationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryBackendNavigationService.ctorParameters = function () { return [
        { type: DaffNavigationTreeFactory }
    ]; };
    /** @nocollapse */ DaffInMemoryBackendNavigationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendNavigationService_Factory() { return new DaffInMemoryBackendNavigationService(i0.ɵɵinject(i1.DaffNavigationTreeFactory)); }, token: DaffInMemoryBackendNavigationService, providedIn: "root" });
    return DaffInMemoryBackendNavigationService;
}());
export { DaffInMemoryBackendNavigationService };
if (false) {
    /** @type {?} */
    DaffInMemoryBackendNavigationService.prototype.navigationTree;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryBackendNavigationService.prototype.navigationTreeFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL25hdmlnYXRpb24vZHJpdmVyL2luLW1lbW9yeS8iLCJzb3VyY2VzIjpbImJhY2tlbmQvbmF2aWdhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFJTCxNQUFNLEVBQ1AsTUFBTSwyQkFBMkIsQ0FBQztBQUduQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7O0FBRXpFO0lBTUUsOENBQW9CLHFCQUFnRDtRQUFoRCwwQkFBcUIsR0FBckIscUJBQXFCLENBQTJCO1FBQ2xFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzVELENBQUM7Ozs7OztJQUVELDhEQUFlOzs7OztJQUFmLFVBQWdCLEdBQVcsRUFBRSxLQUEyQjtRQUN0RCxPQUFPLEtBQUssQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7OztJQUVELHVEQUFROzs7SUFBUjtRQUNFLE9BQU87WUFDTCxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1NBQ2xDLENBQUM7SUFDSixDQUFDOzs7OztJQUVELGtEQUFHOzs7O0lBQUgsVUFBSSxPQUFZO1FBQWhCLGlCQU9DO1FBTkMsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWU7OztRQUFDO1lBQ25DLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLEtBQUksQ0FBQyxjQUFjO2dCQUN6QixNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUU7YUFDbEIsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBM0JGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBSlEseUJBQXlCOzs7K0NBVGxDO0NBdUNDLEFBNUJELElBNEJDO1NBekJZLG9DQUFvQzs7O0lBQy9DLDhEQUFtQzs7Ozs7SUFFdkIscUVBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgSW5NZW1vcnlEYlNlcnZpY2UsXG4gIFJlcXVlc3RJbmZvVXRpbGl0aWVzLFxuICBQYXJzZWRSZXF1ZXN0VXJsLFxuICBTVEFUVVNcbn0gZnJvbSAnYW5ndWxhci1pbi1tZW1vcnktd2ViLWFwaSc7XG5cbmltcG9ydCB7IERhZmZOYXZpZ2F0aW9uVHJlZSB9IGZyb20gJ0BkYWZmb2RpbC9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IERhZmZOYXZpZ2F0aW9uVHJlZUZhY3RvcnkgfSBmcm9tICdAZGFmZm9kaWwvbmF2aWdhdGlvbi90ZXN0aW5nJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZkluTWVtb3J5QmFja2VuZE5hdmlnYXRpb25TZXJ2aWNlIGltcGxlbWVudHMgSW5NZW1vcnlEYlNlcnZpY2Uge1xuICBuYXZpZ2F0aW9uVHJlZTogRGFmZk5hdmlnYXRpb25UcmVlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmF2aWdhdGlvblRyZWVGYWN0b3J5OiBEYWZmTmF2aWdhdGlvblRyZWVGYWN0b3J5KSB7XG4gICAgdGhpcy5uYXZpZ2F0aW9uVHJlZSA9IHRoaXMubmF2aWdhdGlvblRyZWVGYWN0b3J5LmNyZWF0ZSgpO1xuICB9XG5cbiAgcGFyc2VSZXF1ZXN0VXJsKHVybDogc3RyaW5nLCB1dGlsczogUmVxdWVzdEluZm9VdGlsaXRpZXMpOiBQYXJzZWRSZXF1ZXN0VXJsIHtcbiAgICByZXR1cm4gdXRpbHMucGFyc2VSZXF1ZXN0VXJsKHVybCk7XG4gIH1cblxuICBjcmVhdGVEYigpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBuYXZpZ2F0aW9uOiBbdGhpcy5uYXZpZ2F0aW9uVHJlZV1cbiAgICB9O1xuICB9XG5cbiAgZ2V0KHJlcUluZm86IGFueSkge1xuICAgIHJldHVybiByZXFJbmZvLnV0aWxzLmNyZWF0ZVJlc3BvbnNlJCgoKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBib2R5OiB0aGlzLm5hdmlnYXRpb25UcmVlLFxuICAgICAgICBzdGF0dXM6IFNUQVRVUy5PS1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxufVxuIl19