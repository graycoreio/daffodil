/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class MockDaffCategoryFacade {
    constructor() {
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
    getCategoryById(id) {
        return new BehaviorSubject(null);
    }
    ;
    /**
     * @param {?} categoryId
     * @return {?}
     */
    getProductsByCategory(categoryId) {
        return new BehaviorSubject([]);
    }
    ;
    /**
     * @param {?} categoryId
     * @return {?}
     */
    getTotalProductsByCategory(categoryId) {
        return new BehaviorSubject(null);
    }
    ;
    /**
     * @param {?} action
     * @return {?}
     */
    dispatch(action) { }
    ;
}
MockDaffCategoryFacade.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ MockDaffCategoryFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MockDaffCategoryFacade_Factory() { return new MockDaffCategoryFacade(); }, token: MockDaffCategoryFacade, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay1jYXRlZ29yeS1mYWNhZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2F0ZWdvcnkvdGVzdGluZy8iLCJzb3VyY2VzIjpbImhlbHBlcnMvbW9jay1jYXRlZ29yeS1mYWNhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFdkMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFjM0MsTUFBTSxPQUFPLHNCQUFzQjtJQURuQztRQUdFLGNBQVMsR0FBa0MsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckUsNEJBQXVCLEdBQXdELElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pHLGlCQUFZLEdBQTRCLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25FLGdCQUFXLEdBQTRCLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pFLG1CQUFjLEdBQTRCLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25FLGNBQVMsR0FBNEIsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0QsYUFBUSxHQUEwQyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxRSxpQkFBWSxHQUE4QyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsRixvQkFBZSxHQUFpRCxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4Rix1QkFBa0IsR0FBNEIsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEUsMEJBQXFCLEdBQTJDLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFGLGNBQVMsR0FBbUMsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEUscUJBQWdCLEdBQTZCLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hFLHFCQUFnQixHQUE2QixJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6RSxZQUFPLEdBQThCLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdELHFCQUFnQixHQUE2QixJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQVl2RTs7Ozs7SUFWQSxlQUFlLENBQUMsRUFBVTtRQUN6QixPQUFPLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFBQSxDQUFDOzs7OztJQUNGLHFCQUFxQixDQUFDLFVBQWtCO1FBQ3ZDLE9BQU8sSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUFBLENBQUM7Ozs7O0lBQ0YsMEJBQTBCLENBQUMsVUFBa0I7UUFDNUMsT0FBTyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQUEsQ0FBQzs7Ozs7SUFDRCxRQUFRLENBQUMsTUFBYyxJQUFHLENBQUM7SUFBQSxDQUFDOzs7WUE3QjdCLFVBQVUsU0FBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUM7Ozs7O0lBRzlCLDJDQUFxRTs7SUFDckUseURBQXlHOztJQUN6Ryw4Q0FBa0U7O0lBQ25FLDZDQUFpRTs7SUFDakUsZ0RBQW9FOztJQUNuRSwyQ0FBK0Q7O0lBQy9ELDBDQUEwRTs7SUFDMUUsOENBQWtGOztJQUNsRixpREFBd0Y7O0lBQ3hGLG9EQUF3RTs7SUFDeEUsdURBQTBGOztJQUMxRiwyQ0FBb0U7O0lBQ3BFLGtEQUF3RTs7SUFDeEUsa0RBQXdFOztJQUN6RSx5Q0FBNkQ7O0lBQzdELGtEQUF1RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYWZmUHJvZHVjdCB9IGZyb20gJ0BkYWZmb2RpbC9wcm9kdWN0JztcbmltcG9ydCB7XG5cdERhZmZDYXRlZ29yeUZhY2FkZUludGVyZmFjZSxcblx0RGFmZkNhdGVnb3J5LFxuXHREYWZmQ2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlLFxuXHREYWZmQ2F0ZWdvcnlGaWx0ZXIsXG5cdERhZmZDYXRlZ29yeVNvcnRPcHRpb24sXG5cdERhZmZDYXRlZ29yeUFwcGxpZWRGaWx0ZXIsXG5cdERhZmZTb3J0RGlyZWN0aW9uRW51bVxufSBmcm9tICdAZGFmZm9kaWwvY2F0ZWdvcnknO1xuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBNb2NrRGFmZkNhdGVnb3J5RmFjYWRlIGltcGxlbWVudHMgRGFmZkNhdGVnb3J5RmFjYWRlSW50ZXJmYWNlIHtcblxuICBjYXRlZ29yeSQ6IEJlaGF2aW9yU3ViamVjdDxEYWZmQ2F0ZWdvcnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcbiAgcGFnZUNvbmZpZ3VyYXRpb25TdGF0ZSQ6IEJlaGF2aW9yU3ViamVjdDxEYWZmQ2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG4gIGN1cnJlbnRQYWdlJDogQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuXHR0b3RhbFBhZ2VzJDogQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuXHR0b3RhbFByb2R1Y3RzJDogQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuICBwYWdlU2l6ZSQ6IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcbiAgZmlsdGVycyQ6IEJlaGF2aW9yU3ViamVjdDxEYWZmQ2F0ZWdvcnlGaWx0ZXJbXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcbiAgc29ydE9wdGlvbnMkOiBCZWhhdmlvclN1YmplY3Q8RGFmZkNhdGVnb3J5U29ydE9wdGlvbltdPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuICBhcHBsaWVkRmlsdGVycyQ6IEJlaGF2aW9yU3ViamVjdDxEYWZmQ2F0ZWdvcnlBcHBsaWVkRmlsdGVyW10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG4gIGFwcGxpZWRTb3J0T3B0aW9uJDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuICBhcHBsaWVkU29ydERpcmVjdGlvbiQ6IEJlaGF2aW9yU3ViamVjdDxEYWZmU29ydERpcmVjdGlvbkVudW0+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcbiAgcHJvZHVjdHMkOiBCZWhhdmlvclN1YmplY3Q8RGFmZlByb2R1Y3RbXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcbiAgY2F0ZWdvcnlMb2FkaW5nJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG4gIHByb2R1Y3RzTG9hZGluZyQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuXHRlcnJvcnMkOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nW10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG5cdGlzQ2F0ZWdvcnlFbXB0eSQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QodHJ1ZSk7XG5cblx0Z2V0Q2F0ZWdvcnlCeUlkKGlkOiBzdHJpbmcpOiBCZWhhdmlvclN1YmplY3Q8RGFmZkNhdGVnb3J5PiB7XG5cdFx0cmV0dXJuIG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG5cdH07XG5cdGdldFByb2R1Y3RzQnlDYXRlZ29yeShjYXRlZ29yeUlkOiBzdHJpbmcpOiBCZWhhdmlvclN1YmplY3Q8RGFmZlByb2R1Y3RbXT4ge1xuXHRcdHJldHVybiBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcblx0fTtcblx0Z2V0VG90YWxQcm9kdWN0c0J5Q2F0ZWdvcnkoY2F0ZWdvcnlJZDogc3RyaW5nKTogQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4ge1xuXHRcdHJldHVybiBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuXHR9O1xuICBkaXNwYXRjaChhY3Rpb246IEFjdGlvbikge307XG59XG4iXX0=