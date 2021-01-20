/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var MockDaffCategoryFacade = /** @class */ (function () {
    function MockDaffCategoryFacade() {
        this.category$ = new BehaviorSubject(null);
        this.pageConfigurationState$ = new BehaviorSubject(null);
        this.currentPage$ = new BehaviorSubject(null);
        this.totalPages$ = new BehaviorSubject(null);
        this.totalProducts$ = new BehaviorSubject(null);
        this.pageSize$ = new BehaviorSubject(null);
        this.filters$ = new BehaviorSubject([]);
        this.sortOptions$ = new BehaviorSubject([]);
        this.appliedFilters$ = new BehaviorSubject([]);
        this.appliedSortOption$ = new BehaviorSubject(null);
        this.appliedSortDirection$ = new BehaviorSubject(null);
        this.products$ = new BehaviorSubject([]);
        this.categoryLoading$ = new BehaviorSubject(false);
        this.productsLoading$ = new BehaviorSubject(false);
        this.errors$ = new BehaviorSubject([]);
        this.isCategoryEmpty$ = new BehaviorSubject(true);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    MockDaffCategoryFacade.prototype.getCategoryById = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return new BehaviorSubject(null);
    };
    ;
    /**
     * @param {?} categoryId
     * @return {?}
     */
    MockDaffCategoryFacade.prototype.getProductsByCategory = /**
     * @param {?} categoryId
     * @return {?}
     */
    function (categoryId) {
        return new BehaviorSubject([]);
    };
    ;
    /**
     * @param {?} categoryId
     * @return {?}
     */
    MockDaffCategoryFacade.prototype.getTotalProductsByCategory = /**
     * @param {?} categoryId
     * @return {?}
     */
    function (categoryId) {
        return new BehaviorSubject(null);
    };
    ;
    /**
     * @param {?} action
     * @return {?}
     */
    MockDaffCategoryFacade.prototype.dispatch = /**
     * @param {?} action
     * @return {?}
     */
    function (action) { };
    ;
    MockDaffCategoryFacade.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ MockDaffCategoryFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MockDaffCategoryFacade_Factory() { return new MockDaffCategoryFacade(); }, token: MockDaffCategoryFacade, providedIn: "root" });
    return MockDaffCategoryFacade;
}());
export { MockDaffCategoryFacade };
if (false) {
    /** @type {?} */
    MockDaffCategoryFacade.prototype.category$;
    /** @type {?} */
    MockDaffCategoryFacade.prototype.pageConfigurationState$;
    /** @type {?} */
    MockDaffCategoryFacade.prototype.currentPage$;
    /** @type {?} */
    MockDaffCategoryFacade.prototype.totalPages$;
    /** @type {?} */
    MockDaffCategoryFacade.prototype.totalProducts$;
    /** @type {?} */
    MockDaffCategoryFacade.prototype.pageSize$;
    /** @type {?} */
    MockDaffCategoryFacade.prototype.filters$;
    /** @type {?} */
    MockDaffCategoryFacade.prototype.sortOptions$;
    /** @type {?} */
    MockDaffCategoryFacade.prototype.appliedFilters$;
    /** @type {?} */
    MockDaffCategoryFacade.prototype.appliedSortOption$;
    /** @type {?} */
    MockDaffCategoryFacade.prototype.appliedSortDirection$;
    /** @type {?} */
    MockDaffCategoryFacade.prototype.products$;
    /** @type {?} */
    MockDaffCategoryFacade.prototype.categoryLoading$;
    /** @type {?} */
    MockDaffCategoryFacade.prototype.productsLoading$;
    /** @type {?} */
    MockDaffCategoryFacade.prototype.errors$;
    /** @type {?} */
    MockDaffCategoryFacade.prototype.isCategoryEmpty$;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay1jYXRlZ29yeS1mYWNhZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2F0ZWdvcnkvdGVzdGluZy8iLCJzb3VyY2VzIjpbImhlbHBlcnMvbW9jay1jYXRlZ29yeS1mYWNhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFdkMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFhM0M7SUFBQTtRQUdFLGNBQVMsR0FBa0MsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckUsNEJBQXVCLEdBQXdELElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pHLGlCQUFZLEdBQTRCLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25FLGdCQUFXLEdBQTRCLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pFLG1CQUFjLEdBQTRCLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25FLGNBQVMsR0FBNEIsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0QsYUFBUSxHQUEwQyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxRSxpQkFBWSxHQUE4QyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsRixvQkFBZSxHQUFpRCxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4Rix1QkFBa0IsR0FBNEIsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEUsMEJBQXFCLEdBQTJDLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFGLGNBQVMsR0FBbUMsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEUscUJBQWdCLEdBQTZCLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hFLHFCQUFnQixHQUE2QixJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6RSxZQUFPLEdBQThCLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdELHFCQUFnQixHQUE2QixJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQVl2RTs7Ozs7SUFWQSxnREFBZTs7OztJQUFmLFVBQWdCLEVBQVU7UUFDekIsT0FBTyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQUEsQ0FBQzs7Ozs7SUFDRixzREFBcUI7Ozs7SUFBckIsVUFBc0IsVUFBa0I7UUFDdkMsT0FBTyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQUEsQ0FBQzs7Ozs7SUFDRiwyREFBMEI7Ozs7SUFBMUIsVUFBMkIsVUFBa0I7UUFDNUMsT0FBTyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQUEsQ0FBQzs7Ozs7SUFDRCx5Q0FBUTs7OztJQUFSLFVBQVMsTUFBYyxJQUFHLENBQUM7SUFBQSxDQUFDOztnQkE3QjdCLFVBQVUsU0FBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUM7OztpQ0FmaEM7Q0E2Q0MsQUE5QkQsSUE4QkM7U0E3Qlksc0JBQXNCOzs7SUFFakMsMkNBQXFFOztJQUNyRSx5REFBeUc7O0lBQ3pHLDhDQUFrRTs7SUFDbkUsNkNBQWlFOztJQUNqRSxnREFBb0U7O0lBQ25FLDJDQUErRDs7SUFDL0QsMENBQTBFOztJQUMxRSw4Q0FBa0Y7O0lBQ2xGLGlEQUF3Rjs7SUFDeEYsb0RBQXdFOztJQUN4RSx1REFBMEY7O0lBQzFGLDJDQUFvRTs7SUFDcEUsa0RBQXdFOztJQUN4RSxrREFBd0U7O0lBQ3pFLHlDQUE2RDs7SUFDN0Qsa0RBQXVFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhZmZQcm9kdWN0IH0gZnJvbSAnQGRhZmZvZGlsL3Byb2R1Y3QnO1xuaW1wb3J0IHtcblx0RGFmZkNhdGVnb3J5RmFjYWRlSW50ZXJmYWNlLFxuXHREYWZmQ2F0ZWdvcnksXG5cdERhZmZDYXRlZ29yeVBhZ2VDb25maWd1cmF0aW9uU3RhdGUsXG5cdERhZmZDYXRlZ29yeUZpbHRlcixcblx0RGFmZkNhdGVnb3J5U29ydE9wdGlvbixcblx0RGFmZkNhdGVnb3J5QXBwbGllZEZpbHRlcixcblx0RGFmZlNvcnREaXJlY3Rpb25FbnVtXG59IGZyb20gJ0BkYWZmb2RpbC9jYXRlZ29yeSc7XG5cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIE1vY2tEYWZmQ2F0ZWdvcnlGYWNhZGUgaW1wbGVtZW50cyBEYWZmQ2F0ZWdvcnlGYWNhZGVJbnRlcmZhY2Uge1xuXG4gIGNhdGVnb3J5JDogQmVoYXZpb3JTdWJqZWN0PERhZmZDYXRlZ29yeT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuICBwYWdlQ29uZmlndXJhdGlvblN0YXRlJDogQmVoYXZpb3JTdWJqZWN0PERhZmZDYXRlZ29yeVBhZ2VDb25maWd1cmF0aW9uU3RhdGU+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcbiAgY3VycmVudFBhZ2UkOiBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG5cdHRvdGFsUGFnZXMkOiBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG5cdHRvdGFsUHJvZHVjdHMkOiBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG4gIHBhZ2VTaXplJDogQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuICBmaWx0ZXJzJDogQmVoYXZpb3JTdWJqZWN0PERhZmZDYXRlZ29yeUZpbHRlcltdPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuICBzb3J0T3B0aW9ucyQ6IEJlaGF2aW9yU3ViamVjdDxEYWZmQ2F0ZWdvcnlTb3J0T3B0aW9uW10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG4gIGFwcGxpZWRGaWx0ZXJzJDogQmVoYXZpb3JTdWJqZWN0PERhZmZDYXRlZ29yeUFwcGxpZWRGaWx0ZXJbXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcbiAgYXBwbGllZFNvcnRPcHRpb24kOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG4gIGFwcGxpZWRTb3J0RGlyZWN0aW9uJDogQmVoYXZpb3JTdWJqZWN0PERhZmZTb3J0RGlyZWN0aW9uRW51bT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuICBwcm9kdWN0cyQ6IEJlaGF2aW9yU3ViamVjdDxEYWZmUHJvZHVjdFtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuICBjYXRlZ29yeUxvYWRpbmckOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcbiAgcHJvZHVjdHNMb2FkaW5nJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG5cdGVycm9ycyQ6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmdbXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcblx0aXNDYXRlZ29yeUVtcHR5JDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0cnVlKTtcblxuXHRnZXRDYXRlZ29yeUJ5SWQoaWQ6IHN0cmluZyk6IEJlaGF2aW9yU3ViamVjdDxEYWZmQ2F0ZWdvcnk+IHtcblx0XHRyZXR1cm4gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcblx0fTtcblx0Z2V0UHJvZHVjdHNCeUNhdGVnb3J5KGNhdGVnb3J5SWQ6IHN0cmluZyk6IEJlaGF2aW9yU3ViamVjdDxEYWZmUHJvZHVjdFtdPiB7XG5cdFx0cmV0dXJuIG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuXHR9O1xuXHRnZXRUb3RhbFByb2R1Y3RzQnlDYXRlZ29yeShjYXRlZ29yeUlkOiBzdHJpbmcpOiBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG5cdH07XG4gIGRpc3BhdGNoKGFjdGlvbjogQWN0aW9uKSB7fTtcbn1cbiJdfQ==