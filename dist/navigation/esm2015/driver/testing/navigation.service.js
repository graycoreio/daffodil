/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DaffNavigationTreeFactory } from '@daffodil/navigation/testing';
import * as i0 from "@angular/core";
import * as i1 from "@daffodil/navigation/testing";
export class DaffTestingNavigationService {
    /**
     * @param {?} navigationTreeFactory
     */
    constructor(navigationTreeFactory) {
        this.navigationTreeFactory = navigationTreeFactory;
    }
    /**
     * @param {?} navigationTreeId
     * @return {?}
     */
    get(navigationTreeId) {
        return of(this.navigationTreeFactory.create());
    }
}
DaffTestingNavigationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffTestingNavigationService.ctorParameters = () => [
    { type: DaffNavigationTreeFactory }
];
/** @nocollapse */ DaffTestingNavigationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffTestingNavigationService_Factory() { return new DaffTestingNavigationService(i0.ɵɵinject(i1.DaffNavigationTreeFactory)); }, token: DaffTestingNavigationService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffTestingNavigationService.prototype.navigationTreeFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL25hdmlnYXRpb24vZHJpdmVyL3Rlc3RpbmcvIiwic291cmNlcyI6WyJuYXZpZ2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUl0QyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7O0FBTXpFLE1BQU0sT0FBTyw0QkFBNEI7Ozs7SUFFdkMsWUFDVSxxQkFBZ0Q7UUFBaEQsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUEyQjtJQUFHLENBQUM7Ozs7O0lBRTlELEdBQUcsQ0FBQyxnQkFBd0I7UUFDMUIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7O1lBVkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTFEseUJBQXlCOzs7Ozs7OztJQVM5Qiw2REFBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEYWZmTmF2aWdhdGlvblRyZWUgfSBmcm9tICdAZGFmZm9kaWwvbmF2aWdhdGlvbic7XG5pbXBvcnQgeyBEYWZmTmF2aWdhdGlvblNlcnZpY2VJbnRlcmZhY2UgfSBmcm9tICdAZGFmZm9kaWwvbmF2aWdhdGlvbi9kcml2ZXInO1xuaW1wb3J0IHsgRGFmZk5hdmlnYXRpb25UcmVlRmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9uYXZpZ2F0aW9uL3Rlc3RpbmcnO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZUZXN0aW5nTmF2aWdhdGlvblNlcnZpY2UgaW1wbGVtZW50cyBEYWZmTmF2aWdhdGlvblNlcnZpY2VJbnRlcmZhY2U8RGFmZk5hdmlnYXRpb25UcmVlPiB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBuYXZpZ2F0aW9uVHJlZUZhY3Rvcnk6IERhZmZOYXZpZ2F0aW9uVHJlZUZhY3RvcnkpIHt9XG5cbiAgZ2V0KG5hdmlnYXRpb25UcmVlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8RGFmZk5hdmlnYXRpb25UcmVlPiB7XG4gICAgcmV0dXJuIG9mKHRoaXMubmF2aWdhdGlvblRyZWVGYWN0b3J5LmNyZWF0ZSgpKTtcbiAgfVxufVxuIl19