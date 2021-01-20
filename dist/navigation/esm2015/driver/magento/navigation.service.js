/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import { DaffNavigationTransformer } from '@daffodil/navigation/driver';
import { daffMagentoGetCategoryTree } from './queries/get-category-tree';
import { MAGENTO_NAVIGATION_TREE_QUERY_DEPTH } from './interfaces/navigation-config.interface';
import * as i0 from "@angular/core";
import * as i1 from "apollo-angular";
import * as i2 from "@daffodil/navigation/driver";
import * as i3 from "./interfaces/navigation-config.interface";
export class DaffMagentoNavigationService {
    /**
     * @param {?} apollo
     * @param {?} transformer
     * @param {?} categoryTreeQueryDepth
     */
    constructor(apollo, transformer, categoryTreeQueryDepth) {
        this.apollo = apollo;
        this.transformer = transformer;
        this.categoryTreeQueryDepth = categoryTreeQueryDepth;
    }
    /**
     * @param {?} categoryId
     * @return {?}
     */
    get(categoryId) {
        return this.apollo.query({
            query: daffMagentoGetCategoryTree(this.categoryTreeQueryDepth),
            variables: {
                filters: { ids: { eq: categoryId } }
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => this.transformer.transform(result.data.categoryList[0]))));
    }
}
DaffMagentoNavigationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffMagentoNavigationService.ctorParameters = () => [
    { type: Apollo },
    { type: undefined, decorators: [{ type: Inject, args: [DaffNavigationTransformer,] }] },
    { type: Number, decorators: [{ type: Inject, args: [MAGENTO_NAVIGATION_TREE_QUERY_DEPTH,] }] }
];
/** @nocollapse */ DaffMagentoNavigationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoNavigationService_Factory() { return new DaffMagentoNavigationService(i0.ɵɵinject(i1.Apollo), i0.ɵɵinject(i2.DaffNavigationTransformer), i0.ɵɵinject(i3.MAGENTO_NAVIGATION_TREE_QUERY_DEPTH)); }, token: DaffMagentoNavigationService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoNavigationService.prototype.apollo;
    /**
     * @type {?}
     * @private
     */
    DaffMagentoNavigationService.prototype.transformer;
    /**
     * @type {?}
     * @private
     */
    DaffMagentoNavigationService.prototype.categoryTreeQueryDepth;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL25hdmlnYXRpb24vZHJpdmVyL21hZ2VudG8vIiwic291cmNlcyI6WyJuYXZpZ2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHeEMsT0FBTyxFQUNMLHlCQUF5QixFQUcxQixNQUFNLDZCQUE2QixDQUFDO0FBRXJDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXpFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOzs7OztBQUsvRixNQUFNLE9BQU8sNEJBQTRCOzs7Ozs7SUFFdkMsWUFDVSxNQUFjLEVBQ3FCLFdBQW1FLEVBQ3pELHNCQUE4QjtRQUYzRSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3FCLGdCQUFXLEdBQVgsV0FBVyxDQUF3RDtRQUN6RCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQVE7SUFDbEYsQ0FBQzs7Ozs7SUFFSixHQUFHLENBQUMsVUFBa0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBMEI7WUFDaEQsS0FBSyxFQUFFLDBCQUEwQixDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztZQUM5RCxTQUFTLEVBQUU7Z0JBQ1QsT0FBTyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFO2FBQ3JDO1NBQ0YsQ0FBQyxDQUFDLElBQUksQ0FDTCxHQUFHOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQ3ZFLENBQUM7SUFDSixDQUFDOzs7WUFwQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBZlEsTUFBTTs0Q0FvQlYsTUFBTSxTQUFDLHlCQUF5Qjt5Q0FDaEMsTUFBTSxTQUFDLG1DQUFtQzs7Ozs7Ozs7SUFGM0MsOENBQXNCOzs7OztJQUN0QixtREFBOEc7Ozs7O0lBQzlHLDhEQUFtRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXBvbGxvIH0gZnJvbSAnYXBvbGxvLWFuZ3VsYXInO1xuXG5pbXBvcnQgeyBEYWZmTmF2aWdhdGlvblRyZWUgfSBmcm9tICdAZGFmZm9kaWwvbmF2aWdhdGlvbic7XG5pbXBvcnQge1xuICBEYWZmTmF2aWdhdGlvblRyYW5zZm9ybWVyLFxuICBEYWZmTmF2aWdhdGlvblNlcnZpY2VJbnRlcmZhY2UsXG4gIERhZmZOYXZpZ2F0aW9uVHJhbnNmb3JtZXJJbnRlcmZhY2Vcbn0gZnJvbSAnQGRhZmZvZGlsL25hdmlnYXRpb24vZHJpdmVyJztcblxuaW1wb3J0IHsgZGFmZk1hZ2VudG9HZXRDYXRlZ29yeVRyZWUgfSBmcm9tICcuL3F1ZXJpZXMvZ2V0LWNhdGVnb3J5LXRyZWUnO1xuaW1wb3J0IHsgR2V0Q2F0ZWdvcnlUcmVlUmVzcG9uc2UgfSBmcm9tICcuL21vZGVscy9nZXQtY2F0ZWdvcnktdHJlZS1yZXNwb25zZSc7XG5pbXBvcnQgeyBNQUdFTlRPX05BVklHQVRJT05fVFJFRV9RVUVSWV9ERVBUSCB9IGZyb20gJy4vaW50ZXJmYWNlcy9uYXZpZ2F0aW9uLWNvbmZpZy5pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmTWFnZW50b05hdmlnYXRpb25TZXJ2aWNlIGltcGxlbWVudHMgRGFmZk5hdmlnYXRpb25TZXJ2aWNlSW50ZXJmYWNlPERhZmZOYXZpZ2F0aW9uVHJlZT4ge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXBvbGxvOiBBcG9sbG8sXG4gICAgQEluamVjdChEYWZmTmF2aWdhdGlvblRyYW5zZm9ybWVyKSBwcml2YXRlIHRyYW5zZm9ybWVyOiBEYWZmTmF2aWdhdGlvblRyYW5zZm9ybWVySW50ZXJmYWNlPERhZmZOYXZpZ2F0aW9uVHJlZT4sXG4gICAgQEluamVjdChNQUdFTlRPX05BVklHQVRJT05fVFJFRV9RVUVSWV9ERVBUSCkgcHJpdmF0ZSBjYXRlZ29yeVRyZWVRdWVyeURlcHRoOiBudW1iZXJcbiAgKSB7fVxuXG4gIGdldChjYXRlZ29yeUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPERhZmZOYXZpZ2F0aW9uVHJlZT4ge1xuICAgIHJldHVybiB0aGlzLmFwb2xsby5xdWVyeTxHZXRDYXRlZ29yeVRyZWVSZXNwb25zZT4oe1xuICAgICAgcXVlcnk6IGRhZmZNYWdlbnRvR2V0Q2F0ZWdvcnlUcmVlKHRoaXMuY2F0ZWdvcnlUcmVlUXVlcnlEZXB0aCksXG4gICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgZmlsdGVyczogeyBpZHM6IHsgZXE6IGNhdGVnb3J5SWQgfSB9XG4gICAgICB9XG4gICAgfSkucGlwZShcbiAgICAgIG1hcChyZXN1bHQgPT4gdGhpcy50cmFuc2Zvcm1lci50cmFuc2Zvcm0ocmVzdWx0LmRhdGEuY2F0ZWdvcnlMaXN0WzBdKSlcbiAgICApO1xuICB9XG59XG4iXX0=