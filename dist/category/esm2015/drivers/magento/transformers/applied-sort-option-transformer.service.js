/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MagentoSortDirectionEnum } from '../models/requests/sort';
import { DaffSortDirectionEnum } from '../../../models/requests/category-request';
import * as i0 from "@angular/core";
export class DaffMagentoAppliedSortOptionTransformService {
    /**
     * @param {?} appliedOption
     * @param {?} appliedDirection
     * @return {?}
     */
    transform(appliedOption, appliedDirection) {
        return {
            [appliedOption]: this.transformDirection(appliedDirection)
        };
    }
    /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    transformDirection(direction) {
        if (direction === DaffSortDirectionEnum.Ascending) {
            return MagentoSortDirectionEnum.Ascending;
        }
        else if (direction === DaffSortDirectionEnum.Decending) {
            return MagentoSortDirectionEnum.Decending;
        }
    }
}
DaffMagentoAppliedSortOptionTransformService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffMagentoAppliedSortOptionTransformService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoAppliedSortOptionTransformService_Factory() { return new DaffMagentoAppliedSortOptionTransformService(); }, token: DaffMagentoAppliedSortOptionTransformService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGllZC1zb3J0LW9wdGlvbi10cmFuc2Zvcm1lci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhdGVnb3J5LyIsInNvdXJjZXMiOlsiZHJpdmVycy9tYWdlbnRvL3RyYW5zZm9ybWVycy9hcHBsaWVkLXNvcnQtb3B0aW9uLXRyYW5zZm9ybWVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUEwQix3QkFBd0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDOztBQUtsRixNQUFNLE9BQU8sNENBQTRDOzs7Ozs7SUFFdkQsU0FBUyxDQUFDLGFBQXFCLEVBQUUsZ0JBQXVDO1FBQ3hFLE9BQU87WUFDTixDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQztTQUMxRCxDQUFBO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sa0JBQWtCLENBQUMsU0FBZ0M7UUFDMUQsSUFBRyxTQUFTLEtBQUsscUJBQXFCLENBQUMsU0FBUyxFQUFFO1lBQ2pELE9BQU8sd0JBQXdCLENBQUMsU0FBUyxDQUFDO1NBQzFDO2FBQU0sSUFBRyxTQUFTLEtBQUsscUJBQXFCLENBQUMsU0FBUyxFQUFFO1lBQ3hELE9BQU8sd0JBQXdCLENBQUMsU0FBUyxDQUFDO1NBQzFDO0lBQ0YsQ0FBQzs7O1lBakJELFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTWFnZW50b1NvcnRGaWVsZEFjdGlvbiwgTWFnZW50b1NvcnREaXJlY3Rpb25FbnVtIH0gZnJvbSAnLi4vbW9kZWxzL3JlcXVlc3RzL3NvcnQnO1xuaW1wb3J0IHsgRGFmZlNvcnREaXJlY3Rpb25FbnVtIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3JlcXVlc3RzL2NhdGVnb3J5LXJlcXVlc3QnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmTWFnZW50b0FwcGxpZWRTb3J0T3B0aW9uVHJhbnNmb3JtU2VydmljZSB7XG5cbiAgdHJhbnNmb3JtKGFwcGxpZWRPcHRpb246IHN0cmluZywgYXBwbGllZERpcmVjdGlvbjogRGFmZlNvcnREaXJlY3Rpb25FbnVtKTogTWFnZW50b1NvcnRGaWVsZEFjdGlvbiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdFthcHBsaWVkT3B0aW9uXTogdGhpcy50cmFuc2Zvcm1EaXJlY3Rpb24oYXBwbGllZERpcmVjdGlvbilcblx0XHR9XG5cdH1cblx0XG5cdHByaXZhdGUgdHJhbnNmb3JtRGlyZWN0aW9uKGRpcmVjdGlvbjogRGFmZlNvcnREaXJlY3Rpb25FbnVtKTogTWFnZW50b1NvcnREaXJlY3Rpb25FbnVtIHtcblx0XHRpZihkaXJlY3Rpb24gPT09IERhZmZTb3J0RGlyZWN0aW9uRW51bS5Bc2NlbmRpbmcpIHtcblx0XHRcdHJldHVybiBNYWdlbnRvU29ydERpcmVjdGlvbkVudW0uQXNjZW5kaW5nO1xuXHRcdH0gZWxzZSBpZihkaXJlY3Rpb24gPT09IERhZmZTb3J0RGlyZWN0aW9uRW51bS5EZWNlbmRpbmcpIHtcblx0XHRcdHJldHVybiBNYWdlbnRvU29ydERpcmVjdGlvbkVudW0uRGVjZW5kaW5nO1xuXHRcdH1cblx0fVxufVxuIl19