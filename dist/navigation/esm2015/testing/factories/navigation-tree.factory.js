/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
export class MockNavigationTree {
    constructor() {
        this.id = '1';
        this.name = '';
        this.path = faker.commerce.department().toString().toLowerCase();
        this.total_products = faker.random.number({ min: 1, max: 10 });
        this.children = [...Array(faker.random.number({ min: 1, max: 3 }))].map((/**
         * @return {?}
         */
        () => this.fakeTree(3)));
        this.children_count = 0;
        this.breadcrumbs = [];
    }
    /**
     * @private
     * @param {?=} depth
     * @return {?}
     */
    fakeTree(depth = 0) {
        /** @type {?} */
        const children = depth !== 0
            ? [...Array(faker.random.number({ min: 1, max: 3 }))].map((/**
             * @return {?}
             */
            () => this.fakeTree(depth - 1)))
            : [];
        return depth <= 0
            ? {
                id: faker.random.number({ min: 1, max: 10000 }).toString(),
                name: faker.commerce.department(),
                path: faker.commerce.department().toString().toLowerCase(),
                total_products: faker.random.number({ min: 1, max: 20 }),
                children: [],
                children_count: 0,
                breadcrumbs: [{
                        categoryId: 1,
                        categoryName: '',
                        categoryLevel: 1,
                        categoryUrlKey: faker.commerce.productMaterial()
                    }]
            }
            : {
                id: faker.random.number({ min: 1, max: 10000 }).toString(),
                name: faker.commerce.department(),
                path: faker.commerce.department().toString().toLowerCase(),
                total_products: faker.random.number({ min: 1, max: 20 }),
                children: children,
                children_count: children.length,
                breadcrumbs: [{
                        categoryId: 1,
                        categoryName: '',
                        categoryLevel: 1,
                        categoryUrlKey: faker.commerce.productMaterial()
                    }]
            };
    }
}
if (false) {
    /** @type {?} */
    MockNavigationTree.prototype.id;
    /** @type {?} */
    MockNavigationTree.prototype.name;
    /** @type {?} */
    MockNavigationTree.prototype.path;
    /** @type {?} */
    MockNavigationTree.prototype.total_products;
    /** @type {?} */
    MockNavigationTree.prototype.children;
    /** @type {?} */
    MockNavigationTree.prototype.children_count;
    /** @type {?} */
    MockNavigationTree.prototype.breadcrumbs;
}
export class DaffNavigationTreeFactory extends DaffModelFactory {
    constructor() {
        super(MockNavigationTree);
    }
}
DaffNavigationTreeFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffNavigationTreeFactory.ctorParameters = () => [];
/** @nocollapse */ DaffNavigationTreeFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffNavigationTreeFactory_Factory() { return new DaffNavigationTreeFactory(); }, token: DaffNavigationTreeFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi10cmVlLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvbmF2aWdhdGlvbi90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZmFjdG9yaWVzL25hdmlnYXRpb24tdHJlZS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sb0JBQW9CLENBQUM7QUFHNUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRTFELE1BQU0sT0FBTyxrQkFBa0I7SUFBL0I7UUFDRSxPQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ1QsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLFNBQUksR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzVELG1CQUFjLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDO1FBQ3hELGFBQVEsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBRSxHQUFHLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQ3hGLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLGdCQUFXLEdBQUcsRUFBRSxDQUFDO0lBcUNsQixDQUFDOzs7Ozs7SUFuQ1MsUUFBUSxDQUFDLFFBQWdCLENBQUM7O2NBQzFCLFFBQVEsR0FBRyxLQUFLLEtBQUssQ0FBQztZQUMxQixDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUUsR0FBRyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUc7OztZQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFDO1lBQ3JGLENBQUMsQ0FBQyxFQUFFO1FBRU4sT0FBTyxLQUFLLElBQUksQ0FBQztZQUNmLENBQUMsQ0FBQztnQkFDQSxFQUFFLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRTtnQkFDdEQsSUFBSSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFO2dCQUNqQyxJQUFJLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUU7Z0JBQzFELGNBQWMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBQyxDQUFDO2dCQUN0RCxRQUFRLEVBQUUsRUFBRTtnQkFDaEIsY0FBYyxFQUFFLENBQUM7Z0JBQ2pCLFdBQVcsRUFBRSxDQUFDO3dCQUNiLFVBQVUsRUFBRSxDQUFDO3dCQUNiLFlBQVksRUFBRSxFQUFFO3dCQUNoQixhQUFhLEVBQUUsQ0FBQzt3QkFDaEIsY0FBYyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFO3FCQUNoRCxDQUFDO2FBQ0M7WUFDRCxDQUFDLENBQUM7Z0JBQ0EsRUFBRSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBRSxHQUFHLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3RELElBQUksRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRTtnQkFDakMsSUFBSSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxFQUFFO2dCQUMxRCxjQUFjLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUMsQ0FBQztnQkFDdEQsUUFBUSxFQUFFLFFBQVE7Z0JBQ3RCLGNBQWMsRUFBRSxRQUFRLENBQUMsTUFBTTtnQkFDL0IsV0FBVyxFQUFFLENBQUM7d0JBQ2IsVUFBVSxFQUFFLENBQUM7d0JBQ2IsWUFBWSxFQUFFLEVBQUU7d0JBQ2hCLGFBQWEsRUFBRSxDQUFDO3dCQUNoQixjQUFjLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUU7cUJBQ2hELENBQUM7YUFDQyxDQUFBO0lBQ0wsQ0FBQztDQUNGOzs7SUEzQ0MsZ0NBQVM7O0lBQ1Qsa0NBQVU7O0lBQ1Ysa0NBQTREOztJQUM1RCw0Q0FBd0Q7O0lBQ3hELHNDQUF1Rjs7SUFDeEYsNENBQW1COztJQUNuQix5Q0FBaUI7O0FBMENsQixNQUFNLE9BQU8seUJBQTBCLFNBQVEsZ0JBQW9DO0lBQ2pGO1FBQ0UsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDNUIsQ0FBQzs7O1lBTkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZmFrZXIgZnJvbSAnZmFrZXIvbG9jYWxlL2VuX1VTJztcblxuaW1wb3J0IHsgRGFmZk5hdmlnYXRpb25UcmVlIH0gZnJvbSAnQGRhZmZvZGlsL25hdmlnYXRpb24nO1xuaW1wb3J0IHsgRGFmZk1vZGVsRmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuXG5leHBvcnQgY2xhc3MgTW9ja05hdmlnYXRpb25UcmVlIGltcGxlbWVudHMgRGFmZk5hdmlnYXRpb25UcmVlIHtcbiAgaWQgPSAnMSc7XG4gIG5hbWUgPSAnJztcbiAgcGF0aCA9IGZha2VyLmNvbW1lcmNlLmRlcGFydG1lbnQoKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG4gIHRvdGFsX3Byb2R1Y3RzID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwfSk7XG4gIGNoaWxkcmVuID0gWy4uLkFycmF5KGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjoxLCBtYXg6M30pKV0ubWFwKCgpID0+IHRoaXMuZmFrZVRyZWUoMykpO1xuXHRjaGlsZHJlbl9jb3VudCA9IDA7XG5cdGJyZWFkY3J1bWJzID0gW107XG5cbiAgcHJpdmF0ZSBmYWtlVHJlZShkZXB0aDogbnVtYmVyID0gMCk6IERhZmZOYXZpZ2F0aW9uVHJlZSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBkZXB0aCAhPT0gMFxuICAgICAgPyBbLi4uQXJyYXkoZmFrZXIucmFuZG9tLm51bWJlcih7bWluOjEsIG1heDozfSkpXS5tYXAoKCkgPT4gdGhpcy5mYWtlVHJlZShkZXB0aCAtIDEpKVxuICAgICAgOiBbXTtcblxuICAgIHJldHVybiBkZXB0aCA8PSAwXG4gICAgICA/IHtcbiAgICAgICAgaWQ6IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjoxLCBtYXg6MTAwMDB9KS50b1N0cmluZygpLFxuICAgICAgICBuYW1lOiBmYWtlci5jb21tZXJjZS5kZXBhcnRtZW50KCksXG4gICAgICAgIHBhdGg6IGZha2VyLmNvbW1lcmNlLmRlcGFydG1lbnQoKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCksXG4gICAgICAgIHRvdGFsX3Byb2R1Y3RzOiBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMjB9KSxcbiAgICAgICAgY2hpbGRyZW46IFtdLFxuXHRcdFx0XHRjaGlsZHJlbl9jb3VudDogMCxcblx0XHRcdFx0YnJlYWRjcnVtYnM6IFt7XG5cdFx0XHRcdFx0Y2F0ZWdvcnlJZDogMSxcblx0XHRcdFx0XHRjYXRlZ29yeU5hbWU6ICcnLFxuXHRcdFx0XHRcdGNhdGVnb3J5TGV2ZWw6IDEsXG5cdFx0XHRcdFx0Y2F0ZWdvcnlVcmxLZXk6IGZha2VyLmNvbW1lcmNlLnByb2R1Y3RNYXRlcmlhbCgpXG5cdFx0XHRcdH1dXG4gICAgICB9XG4gICAgICA6IHtcbiAgICAgICAgaWQ6IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjoxLCBtYXg6MTAwMDB9KS50b1N0cmluZygpLFxuICAgICAgICBuYW1lOiBmYWtlci5jb21tZXJjZS5kZXBhcnRtZW50KCksXG4gICAgICAgIHBhdGg6IGZha2VyLmNvbW1lcmNlLmRlcGFydG1lbnQoKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCksXG4gICAgICAgIHRvdGFsX3Byb2R1Y3RzOiBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMjB9KSxcbiAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuXHRcdFx0XHRjaGlsZHJlbl9jb3VudDogY2hpbGRyZW4ubGVuZ3RoLFxuXHRcdFx0XHRicmVhZGNydW1iczogW3tcblx0XHRcdFx0XHRjYXRlZ29yeUlkOiAxLFxuXHRcdFx0XHRcdGNhdGVnb3J5TmFtZTogJycsXG5cdFx0XHRcdFx0Y2F0ZWdvcnlMZXZlbDogMSxcblx0XHRcdFx0XHRjYXRlZ29yeVVybEtleTogZmFrZXIuY29tbWVyY2UucHJvZHVjdE1hdGVyaWFsKClcblx0XHRcdFx0fV1cbiAgICAgIH1cbiAgfVxufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmTmF2aWdhdGlvblRyZWVGYWN0b3J5IGV4dGVuZHMgRGFmZk1vZGVsRmFjdG9yeTxEYWZmTmF2aWdhdGlvblRyZWU+e1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHN1cGVyKE1vY2tOYXZpZ2F0aW9uVHJlZSk7XG4gIH1cbn1cbiJdfQ==