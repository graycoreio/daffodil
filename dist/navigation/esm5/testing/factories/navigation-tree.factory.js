/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
var MockNavigationTree = /** @class */ (function () {
    function MockNavigationTree() {
        var _this = this;
        this.id = '1';
        this.name = '';
        this.path = faker.commerce.department().toString().toLowerCase();
        this.total_products = faker.random.number({ min: 1, max: 10 });
        this.children = tslib_1.__spread(Array(faker.random.number({ min: 1, max: 3 }))).map((/**
         * @return {?}
         */
        function () { return _this.fakeTree(3); }));
        this.children_count = 0;
        this.breadcrumbs = [];
    }
    /**
     * @private
     * @param {?=} depth
     * @return {?}
     */
    MockNavigationTree.prototype.fakeTree = /**
     * @private
     * @param {?=} depth
     * @return {?}
     */
    function (depth) {
        var _this = this;
        if (depth === void 0) { depth = 0; }
        /** @type {?} */
        var children = depth !== 0
            ? tslib_1.__spread(Array(faker.random.number({ min: 1, max: 3 }))).map((/**
             * @return {?}
             */
            function () { return _this.fakeTree(depth - 1); }))
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
    };
    return MockNavigationTree;
}());
export { MockNavigationTree };
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
var DaffNavigationTreeFactory = /** @class */ (function (_super) {
    tslib_1.__extends(DaffNavigationTreeFactory, _super);
    function DaffNavigationTreeFactory() {
        return _super.call(this, MockNavigationTree) || this;
    }
    DaffNavigationTreeFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffNavigationTreeFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffNavigationTreeFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffNavigationTreeFactory_Factory() { return new DaffNavigationTreeFactory(); }, token: DaffNavigationTreeFactory, providedIn: "root" });
    return DaffNavigationTreeFactory;
}(DaffModelFactory));
export { DaffNavigationTreeFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi10cmVlLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvbmF2aWdhdGlvbi90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZmFjdG9yaWVzL25hdmlnYXRpb24tdHJlZS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssS0FBSyxNQUFNLG9CQUFvQixDQUFDO0FBRzVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUUxRDtJQUFBO1FBQUEsaUJBNENDO1FBM0NDLE9BQUUsR0FBRyxHQUFHLENBQUM7UUFDVCxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsU0FBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDNUQsbUJBQWMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7UUFDeEQsYUFBUSxHQUFHLGlCQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUUsR0FBRyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBRSxHQUFHOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBaEIsQ0FBZ0IsRUFBQyxDQUFDO1FBQ3hGLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLGdCQUFXLEdBQUcsRUFBRSxDQUFDO0lBcUNsQixDQUFDOzs7Ozs7SUFuQ1MscUNBQVE7Ozs7O0lBQWhCLFVBQWlCLEtBQWlCO1FBQWxDLGlCQWtDQztRQWxDZ0Isc0JBQUEsRUFBQSxTQUFpQjs7WUFDMUIsUUFBUSxHQUFHLEtBQUssS0FBSyxDQUFDO1lBQzFCLENBQUMsQ0FBQyxpQkFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRzs7O1lBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUF4QixDQUF3QixFQUFDO1lBQ3JGLENBQUMsQ0FBQyxFQUFFO1FBRU4sT0FBTyxLQUFLLElBQUksQ0FBQztZQUNmLENBQUMsQ0FBQztnQkFDQSxFQUFFLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRTtnQkFDdEQsSUFBSSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFO2dCQUNqQyxJQUFJLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUU7Z0JBQzFELGNBQWMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBQyxDQUFDO2dCQUN0RCxRQUFRLEVBQUUsRUFBRTtnQkFDaEIsY0FBYyxFQUFFLENBQUM7Z0JBQ2pCLFdBQVcsRUFBRSxDQUFDO3dCQUNiLFVBQVUsRUFBRSxDQUFDO3dCQUNiLFlBQVksRUFBRSxFQUFFO3dCQUNoQixhQUFhLEVBQUUsQ0FBQzt3QkFDaEIsY0FBYyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFO3FCQUNoRCxDQUFDO2FBQ0M7WUFDRCxDQUFDLENBQUM7Z0JBQ0EsRUFBRSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBRSxHQUFHLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3RELElBQUksRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRTtnQkFDakMsSUFBSSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxFQUFFO2dCQUMxRCxjQUFjLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUMsQ0FBQztnQkFDdEQsUUFBUSxFQUFFLFFBQVE7Z0JBQ3RCLGNBQWMsRUFBRSxRQUFRLENBQUMsTUFBTTtnQkFDL0IsV0FBVyxFQUFFLENBQUM7d0JBQ2IsVUFBVSxFQUFFLENBQUM7d0JBQ2IsWUFBWSxFQUFFLEVBQUU7d0JBQ2hCLGFBQWEsRUFBRSxDQUFDO3dCQUNoQixjQUFjLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUU7cUJBQ2hELENBQUM7YUFDQyxDQUFBO0lBQ0wsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQTVDRCxJQTRDQzs7OztJQTNDQyxnQ0FBUzs7SUFDVCxrQ0FBVTs7SUFDVixrQ0FBNEQ7O0lBQzVELDRDQUF3RDs7SUFDeEQsc0NBQXVGOztJQUN4Riw0Q0FBbUI7O0lBQ25CLHlDQUFpQjs7QUF1Q2xCO0lBRytDLHFEQUFvQztJQUNqRjtlQUNFLGtCQUFNLGtCQUFrQixDQUFDO0lBQzNCLENBQUM7O2dCQU5GLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O29DQXRERDtDQTJEQyxBQVBELENBRytDLGdCQUFnQixHQUk5RDtTQUpZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGZha2VyIGZyb20gJ2Zha2VyL2xvY2FsZS9lbl9VUyc7XG5cbmltcG9ydCB7IERhZmZOYXZpZ2F0aW9uVHJlZSB9IGZyb20gJ0BkYWZmb2RpbC9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IERhZmZNb2RlbEZhY3RvcnkgfSBmcm9tICdAZGFmZm9kaWwvY29yZS90ZXN0aW5nJztcblxuZXhwb3J0IGNsYXNzIE1vY2tOYXZpZ2F0aW9uVHJlZSBpbXBsZW1lbnRzIERhZmZOYXZpZ2F0aW9uVHJlZSB7XG4gIGlkID0gJzEnO1xuICBuYW1lID0gJyc7XG4gIHBhdGggPSBmYWtlci5jb21tZXJjZS5kZXBhcnRtZW50KCkudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuICB0b3RhbF9wcm9kdWN0cyA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMH0pO1xuICBjaGlsZHJlbiA9IFsuLi5BcnJheShmYWtlci5yYW5kb20ubnVtYmVyKHttaW46MSwgbWF4OjN9KSldLm1hcCgoKSA9PiB0aGlzLmZha2VUcmVlKDMpKTtcblx0Y2hpbGRyZW5fY291bnQgPSAwO1xuXHRicmVhZGNydW1icyA9IFtdO1xuXG4gIHByaXZhdGUgZmFrZVRyZWUoZGVwdGg6IG51bWJlciA9IDApOiBEYWZmTmF2aWdhdGlvblRyZWUge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gZGVwdGggIT09IDBcbiAgICAgID8gWy4uLkFycmF5KGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjoxLCBtYXg6M30pKV0ubWFwKCgpID0+IHRoaXMuZmFrZVRyZWUoZGVwdGggLSAxKSlcbiAgICAgIDogW107XG5cbiAgICByZXR1cm4gZGVwdGggPD0gMFxuICAgICAgPyB7XG4gICAgICAgIGlkOiBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46MSwgbWF4OjEwMDAwfSkudG9TdHJpbmcoKSxcbiAgICAgICAgbmFtZTogZmFrZXIuY29tbWVyY2UuZGVwYXJ0bWVudCgpLFxuICAgICAgICBwYXRoOiBmYWtlci5jb21tZXJjZS5kZXBhcnRtZW50KCkudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICB0b3RhbF9wcm9kdWN0czogZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDIwfSksXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcblx0XHRcdFx0Y2hpbGRyZW5fY291bnQ6IDAsXG5cdFx0XHRcdGJyZWFkY3J1bWJzOiBbe1xuXHRcdFx0XHRcdGNhdGVnb3J5SWQ6IDEsXG5cdFx0XHRcdFx0Y2F0ZWdvcnlOYW1lOiAnJyxcblx0XHRcdFx0XHRjYXRlZ29yeUxldmVsOiAxLFxuXHRcdFx0XHRcdGNhdGVnb3J5VXJsS2V5OiBmYWtlci5jb21tZXJjZS5wcm9kdWN0TWF0ZXJpYWwoKVxuXHRcdFx0XHR9XVxuICAgICAgfVxuICAgICAgOiB7XG4gICAgICAgIGlkOiBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46MSwgbWF4OjEwMDAwfSkudG9TdHJpbmcoKSxcbiAgICAgICAgbmFtZTogZmFrZXIuY29tbWVyY2UuZGVwYXJ0bWVudCgpLFxuICAgICAgICBwYXRoOiBmYWtlci5jb21tZXJjZS5kZXBhcnRtZW50KCkudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICB0b3RhbF9wcm9kdWN0czogZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDIwfSksXG4gICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcblx0XHRcdFx0Y2hpbGRyZW5fY291bnQ6IGNoaWxkcmVuLmxlbmd0aCxcblx0XHRcdFx0YnJlYWRjcnVtYnM6IFt7XG5cdFx0XHRcdFx0Y2F0ZWdvcnlJZDogMSxcblx0XHRcdFx0XHRjYXRlZ29yeU5hbWU6ICcnLFxuXHRcdFx0XHRcdGNhdGVnb3J5TGV2ZWw6IDEsXG5cdFx0XHRcdFx0Y2F0ZWdvcnlVcmxLZXk6IGZha2VyLmNvbW1lcmNlLnByb2R1Y3RNYXRlcmlhbCgpXG5cdFx0XHRcdH1dXG4gICAgICB9XG4gIH1cbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZk5hdmlnYXRpb25UcmVlRmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8RGFmZk5hdmlnYXRpb25UcmVlPntcbiAgY29uc3RydWN0b3IoKXtcbiAgICBzdXBlcihNb2NrTmF2aWdhdGlvblRyZWUpO1xuICB9XG59XG4iXX0=