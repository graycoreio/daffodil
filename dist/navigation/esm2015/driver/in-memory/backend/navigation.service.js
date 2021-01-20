/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { STATUS } from 'angular-in-memory-web-api';
import { DaffNavigationTreeFactory } from '@daffodil/navigation/testing';
import * as i0 from "@angular/core";
import * as i1 from "@daffodil/navigation/testing";
export class DaffInMemoryBackendNavigationService {
    /**
     * @param {?} navigationTreeFactory
     */
    constructor(navigationTreeFactory) {
        this.navigationTreeFactory = navigationTreeFactory;
        this.navigationTree = this.navigationTreeFactory.create();
    }
    /**
     * @param {?} url
     * @param {?} utils
     * @return {?}
     */
    parseRequestUrl(url, utils) {
        return utils.parseRequestUrl(url);
    }
    /**
     * @return {?}
     */
    createDb() {
        return {
            navigation: [this.navigationTree]
        };
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    get(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => {
            return {
                body: this.navigationTree,
                status: STATUS.OK
            };
        }));
    }
}
DaffInMemoryBackendNavigationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryBackendNavigationService.ctorParameters = () => [
    { type: DaffNavigationTreeFactory }
];
/** @nocollapse */ DaffInMemoryBackendNavigationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendNavigationService_Factory() { return new DaffInMemoryBackendNavigationService(i0.ɵɵinject(i1.DaffNavigationTreeFactory)); }, token: DaffInMemoryBackendNavigationService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffInMemoryBackendNavigationService.prototype.navigationTree;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryBackendNavigationService.prototype.navigationTreeFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL25hdmlnYXRpb24vZHJpdmVyL2luLW1lbW9yeS8iLCJzb3VyY2VzIjpbImJhY2tlbmQvbmF2aWdhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFJTCxNQUFNLEVBQ1AsTUFBTSwyQkFBMkIsQ0FBQztBQUduQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7O0FBS3pFLE1BQU0sT0FBTyxvQ0FBb0M7Ozs7SUFHL0MsWUFBb0IscUJBQWdEO1FBQWhELDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBMkI7UUFDbEUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDNUQsQ0FBQzs7Ozs7O0lBRUQsZUFBZSxDQUFDLEdBQVcsRUFBRSxLQUEyQjtRQUN0RCxPQUFPLEtBQUssQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixPQUFPO1lBQ0wsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztTQUNsQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxHQUFHLENBQUMsT0FBWTtRQUNkLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlOzs7UUFBQyxHQUFHLEVBQUU7WUFDeEMsT0FBTztnQkFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLGNBQWM7Z0JBQ3pCLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRTthQUNsQixDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUEzQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBSlEseUJBQXlCOzs7OztJQU1oQyw4REFBbUM7Ozs7O0lBRXZCLHFFQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEluTWVtb3J5RGJTZXJ2aWNlLFxuICBSZXF1ZXN0SW5mb1V0aWxpdGllcyxcbiAgUGFyc2VkUmVxdWVzdFVybCxcbiAgU1RBVFVTXG59IGZyb20gJ2FuZ3VsYXItaW4tbWVtb3J5LXdlYi1hcGknO1xuXG5pbXBvcnQgeyBEYWZmTmF2aWdhdGlvblRyZWUgfSBmcm9tICdAZGFmZm9kaWwvbmF2aWdhdGlvbic7XG5pbXBvcnQgeyBEYWZmTmF2aWdhdGlvblRyZWVGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL25hdmlnYXRpb24vdGVzdGluZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZJbk1lbW9yeUJhY2tlbmROYXZpZ2F0aW9uU2VydmljZSBpbXBsZW1lbnRzIEluTWVtb3J5RGJTZXJ2aWNlIHtcbiAgbmF2aWdhdGlvblRyZWU6IERhZmZOYXZpZ2F0aW9uVHJlZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hdmlnYXRpb25UcmVlRmFjdG9yeTogRGFmZk5hdmlnYXRpb25UcmVlRmFjdG9yeSkge1xuICAgIHRoaXMubmF2aWdhdGlvblRyZWUgPSB0aGlzLm5hdmlnYXRpb25UcmVlRmFjdG9yeS5jcmVhdGUoKTtcbiAgfVxuXG4gIHBhcnNlUmVxdWVzdFVybCh1cmw6IHN0cmluZywgdXRpbHM6IFJlcXVlc3RJbmZvVXRpbGl0aWVzKTogUGFyc2VkUmVxdWVzdFVybCB7XG4gICAgcmV0dXJuIHV0aWxzLnBhcnNlUmVxdWVzdFVybCh1cmwpO1xuICB9XG5cbiAgY3JlYXRlRGIoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmF2aWdhdGlvbjogW3RoaXMubmF2aWdhdGlvblRyZWVdXG4gICAgfTtcbiAgfVxuXG4gIGdldChyZXFJbmZvOiBhbnkpIHtcbiAgICByZXR1cm4gcmVxSW5mby51dGlscy5jcmVhdGVSZXNwb25zZSQoKCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYm9keTogdGhpcy5uYXZpZ2F0aW9uVHJlZSxcbiAgICAgICAgc3RhdHVzOiBTVEFUVVMuT0tcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==