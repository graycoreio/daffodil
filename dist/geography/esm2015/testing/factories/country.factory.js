/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
export class MockCountry {
    constructor() {
        this.id = String(faker.random.number({ min: 1, max: 1000 }));
        this.name = faker.random.word();
        this.name_en = faker.random.word();
        this.alpha2 = faker.random.alphaNumeric(2);
        this.alpha3 = faker.random.alphaNumeric(3);
        this.subdivisions = [];
    }
}
if (false) {
    /** @type {?} */
    MockCountry.prototype.id;
    /** @type {?} */
    MockCountry.prototype.name;
    /** @type {?} */
    MockCountry.prototype.name_en;
    /** @type {?} */
    MockCountry.prototype.alpha2;
    /** @type {?} */
    MockCountry.prototype.alpha3;
    /** @type {?} */
    MockCountry.prototype.subdivisions;
}
export class DaffCountryFactory extends DaffModelFactory {
    constructor() {
        super(MockCountry);
    }
}
DaffCountryFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffCountryFactory.ctorParameters = () => [];
/** @nocollapse */ DaffCountryFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffCountryFactory_Factory() { return new DaffCountryFactory(); }, token: DaffCountryFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyeS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2dlb2dyYXBoeS90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZmFjdG9yaWVzL2NvdW50cnkuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssS0FBSyxNQUFNLG9CQUFvQixDQUFDO0FBSTVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUUxRCxNQUFNLE9BQU8sV0FBVztJQUF4QjtRQUNFLE9BQUUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsU0FBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUIsWUFBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDOUIsV0FBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLFdBQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QyxpQkFBWSxHQUFHLEVBQUUsQ0FBQztJQUNuQixDQUFDO0NBQUE7OztJQU5DLHlCQUFzRDs7SUFDdEQsMkJBQTJCOztJQUM1Qiw4QkFBOEI7O0lBQzlCLDZCQUFzQzs7SUFDdEMsNkJBQXNDOztJQUN0QyxtQ0FBa0I7O0FBTW5CLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxnQkFBNkI7SUFDbkU7UUFDRSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDckIsQ0FBQzs7O1lBTkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZmFrZXIgZnJvbSAnZmFrZXIvbG9jYWxlL2VuX1VTJztcblxuaW1wb3J0IHsgRGFmZkNvdW50cnkgfSBmcm9tICdAZGFmZm9kaWwvZ2VvZ3JhcGh5JztcblxuaW1wb3J0IHsgRGFmZk1vZGVsRmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuXG5leHBvcnQgY2xhc3MgTW9ja0NvdW50cnkgaW1wbGVtZW50cyBEYWZmQ291bnRyeSB7XG4gIGlkID0gU3RyaW5nKGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwfSkpO1xuICBuYW1lID0gZmFrZXIucmFuZG9tLndvcmQoKTtcblx0bmFtZV9lbiA9IGZha2VyLnJhbmRvbS53b3JkKCk7XG5cdGFscGhhMiA9IGZha2VyLnJhbmRvbS5hbHBoYU51bWVyaWMoMik7XG5cdGFscGhhMyA9IGZha2VyLnJhbmRvbS5hbHBoYU51bWVyaWMoMyk7XG5cdHN1YmRpdmlzaW9ucyA9IFtdO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmQ291bnRyeUZhY3RvcnkgZXh0ZW5kcyBEYWZmTW9kZWxGYWN0b3J5PERhZmZDb3VudHJ5PiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKE1vY2tDb3VudHJ5KTtcbiAgfVxufVxuIl19