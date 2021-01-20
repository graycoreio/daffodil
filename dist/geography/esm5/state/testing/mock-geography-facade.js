/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var MockDaffGeographyFacade = /** @class */ (function () {
    function MockDaffGeographyFacade() {
        this.loading$ = new BehaviorSubject(null);
        this.errors$ = new BehaviorSubject([]);
        this.countries$ = new BehaviorSubject([]);
        this.countryIds$ = new BehaviorSubject([]);
        this.countryCount$ = new BehaviorSubject(null);
        this.countryEntities$ = new BehaviorSubject(null);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    MockDaffGeographyFacade.prototype.getCountry = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return new BehaviorSubject(null);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    MockDaffGeographyFacade.prototype.getCountrySubdivisions = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return new BehaviorSubject([]);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    MockDaffGeographyFacade.prototype.isCountryFullyLoaded = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return new BehaviorSubject(false);
    };
    /**
     * @param {?} action
     * @return {?}
     */
    MockDaffGeographyFacade.prototype.dispatch = /**
     * @param {?} action
     * @return {?}
     */
    function (action) { };
    ;
    MockDaffGeographyFacade.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ MockDaffGeographyFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MockDaffGeographyFacade_Factory() { return new MockDaffGeographyFacade(); }, token: MockDaffGeographyFacade, providedIn: "root" });
    return MockDaffGeographyFacade;
}());
export { MockDaffGeographyFacade };
if (false) {
    /** @type {?} */
    MockDaffGeographyFacade.prototype.loading$;
    /** @type {?} */
    MockDaffGeographyFacade.prototype.errors$;
    /** @type {?} */
    MockDaffGeographyFacade.prototype.countries$;
    /** @type {?} */
    MockDaffGeographyFacade.prototype.countryIds$;
    /** @type {?} */
    MockDaffGeographyFacade.prototype.countryCount$;
    /** @type {?} */
    MockDaffGeographyFacade.prototype.countryEntities$;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay1nZW9ncmFwaHktZmFjYWRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2dlb2dyYXBoeS9zdGF0ZS90ZXN0aW5nLyIsInNvdXJjZXMiOlsibW9jay1nZW9ncmFwaHktZmFjYWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR3ZDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDO0lBQUE7UUFFRSxhQUFRLEdBQTZCLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9ELFlBQU8sR0FBOEIsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDN0QsZUFBVSxHQUFtQyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyRSxnQkFBVyxHQUF5QyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1RSxrQkFBYSxHQUE0QixJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRSxxQkFBZ0IsR0FBNkMsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7S0FleEY7Ozs7O0lBYkMsNENBQVU7Ozs7SUFBVixVQUFXLEVBQUU7UUFDWCxPQUFPLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUQsd0RBQXNCOzs7O0lBQXRCLFVBQXVCLEVBQUU7UUFDdkIsT0FBTyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVELHNEQUFvQjs7OztJQUFwQixVQUFxQixFQUFFO1FBQ3JCLE9BQU8sSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDbkMsQ0FBQzs7Ozs7SUFFRCwwQ0FBUTs7OztJQUFSLFVBQVMsTUFBYyxJQUFHLENBQUM7SUFBQSxDQUFDOztnQkFyQjdCLFVBQVUsU0FBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUM7OztrQ0FSaEM7Q0E4QkMsQUF0QkQsSUFzQkM7U0FyQlksdUJBQXVCOzs7SUFDbEMsMkNBQStEOztJQUMvRCwwQ0FBNkQ7O0lBQzdELDZDQUFxRTs7SUFDckUsOENBQTRFOztJQUM1RSxnREFBbUU7O0lBQ25FLG1EQUF1RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRGljdGlvbmFyeSB9IGZyb20gJ0BuZ3J4L2VudGl0eSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhZmZDb3VudHJ5IH0gZnJvbSAnQGRhZmZvZGlsL2dlb2dyYXBoeSc7XG5pbXBvcnQgeyBEYWZmR2VvZ3JhcGh5RmFjYWRlSW50ZXJmYWNlIH0gZnJvbSAnQGRhZmZvZGlsL2dlb2dyYXBoeS9zdGF0ZSc7XG5cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIE1vY2tEYWZmR2VvZ3JhcGh5RmFjYWRlIGltcGxlbWVudHMgRGFmZkdlb2dyYXBoeUZhY2FkZUludGVyZmFjZSB7XG4gIGxvYWRpbmckOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuICBlcnJvcnMkOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nW10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG4gIGNvdW50cmllcyQ6IEJlaGF2aW9yU3ViamVjdDxEYWZmQ291bnRyeVtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuICBjb3VudHJ5SWRzJDogQmVoYXZpb3JTdWJqZWN0PChzdHJpbmcgfCBudW1iZXIpW10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG4gIGNvdW50cnlDb3VudCQ6IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcbiAgY291bnRyeUVudGl0aWVzJDogQmVoYXZpb3JTdWJqZWN0PERpY3Rpb25hcnk8RGFmZkNvdW50cnk+PiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG5cbiAgZ2V0Q291bnRyeShpZCkge1xuICAgIHJldHVybiBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuICB9XG5cbiAgZ2V0Q291bnRyeVN1YmRpdmlzaW9ucyhpZCkge1xuICAgIHJldHVybiBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcbiAgfVxuXG4gIGlzQ291bnRyeUZ1bGx5TG9hZGVkKGlkKSB7XG4gICAgcmV0dXJuIG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpXG4gIH1cblxuICBkaXNwYXRjaChhY3Rpb246IEFjdGlvbikge307XG59XG4iXX0=