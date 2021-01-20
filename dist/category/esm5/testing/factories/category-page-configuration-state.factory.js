/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffCategoryFilterType } from '@daffodil/category';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
var MockCategoryPageConfigurationState = /** @class */ (function () {
    function MockCategoryPageConfigurationState() {
        this.id = String(faker.random.number({ min: 1, max: 100 }));
        this.page_size = 20;
        this.current_page = 1;
        this.filters = [{
                label: 'Category',
                name: 'cat',
                type: DaffCategoryFilterType.Equal,
                options: [
                    {
                        label: 'Gear',
                        value: '3',
                        count: 34
                    },
                    {
                        label: 'Training',
                        value: '9',
                        count: 6
                    }
                ]
            }];
        this.sort_options = [
            {
                label: 'Position',
                value: 'position'
            },
            {
                label: 'Name',
                value: 'name'
            },
            {
                label: 'Price',
                value: 'price'
            }
        ];
        this.total_pages = faker.random.number({ min: 1, max: 4 });
        this.filter_requests = [];
        this.applied_sort_option = null;
        this.applied_sort_direction = null;
        this.total_products = faker.random.number({ min: 1, max: 3 });
        this.product_ids = [faker.random.number({ min: 1, max: 100 }).toString()];
    }
    return MockCategoryPageConfigurationState;
}());
export { MockCategoryPageConfigurationState };
if (false) {
    /** @type {?} */
    MockCategoryPageConfigurationState.prototype.id;
    /** @type {?} */
    MockCategoryPageConfigurationState.prototype.page_size;
    /** @type {?} */
    MockCategoryPageConfigurationState.prototype.current_page;
    /** @type {?} */
    MockCategoryPageConfigurationState.prototype.filters;
    /** @type {?} */
    MockCategoryPageConfigurationState.prototype.sort_options;
    /** @type {?} */
    MockCategoryPageConfigurationState.prototype.total_pages;
    /** @type {?} */
    MockCategoryPageConfigurationState.prototype.filter_requests;
    /** @type {?} */
    MockCategoryPageConfigurationState.prototype.applied_sort_option;
    /** @type {?} */
    MockCategoryPageConfigurationState.prototype.applied_sort_direction;
    /** @type {?} */
    MockCategoryPageConfigurationState.prototype.total_products;
    /** @type {?} */
    MockCategoryPageConfigurationState.prototype.product_ids;
}
var DaffCategoryPageConfigurationStateFactory = /** @class */ (function (_super) {
    tslib_1.__extends(DaffCategoryPageConfigurationStateFactory, _super);
    function DaffCategoryPageConfigurationStateFactory() {
        return _super.call(this, MockCategoryPageConfigurationState) || this;
    }
    DaffCategoryPageConfigurationStateFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffCategoryPageConfigurationStateFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffCategoryPageConfigurationStateFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffCategoryPageConfigurationStateFactory_Factory() { return new DaffCategoryPageConfigurationStateFactory(); }, token: DaffCategoryPageConfigurationStateFactory, providedIn: "root" });
    return DaffCategoryPageConfigurationStateFactory;
}(DaffModelFactory));
export { DaffCategoryPageConfigurationStateFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktcGFnZS1jb25maWd1cmF0aW9uLXN0YXRlLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2F0ZWdvcnkvdGVzdGluZy8iLCJzb3VyY2VzIjpbImZhY3Rvcmllcy9jYXRlZ29yeS1wYWdlLWNvbmZpZ3VyYXRpb24tc3RhdGUuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxvQkFBb0IsQ0FBQztBQUU1QyxPQUFPLEVBQXNDLHNCQUFzQixFQUF1QixNQUFNLG9CQUFvQixDQUFDO0FBQ3JILE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUUxRDtJQUFBO1FBQ0UsT0FBRSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUNyRCxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsWUFBTyxHQUFHLENBQUM7Z0JBQ1QsS0FBSyxFQUFFLFVBQVU7Z0JBQ2pCLElBQUksRUFBRSxLQUFLO2dCQUNYLElBQUksRUFBRSxzQkFBc0IsQ0FBQyxLQUFLO2dCQUNsQyxPQUFPLEVBQUU7b0JBQ1A7d0JBQ0UsS0FBSyxFQUFFLE1BQU07d0JBQ2IsS0FBSyxFQUFFLEdBQUc7d0JBQ1YsS0FBSyxFQUFFLEVBQUU7cUJBQ1Y7b0JBQ0Q7d0JBQ0UsS0FBSyxFQUFFLFVBQVU7d0JBQ2pCLEtBQUssRUFBRSxHQUFHO3dCQUNWLEtBQUssRUFBRSxDQUFDO3FCQUNUO2lCQUNGO2FBQ0YsQ0FBQyxDQUFDO1FBQ0gsaUJBQVksR0FBRztZQUNiO2dCQUNFLEtBQUssRUFBRSxVQUFVO2dCQUNqQixLQUFLLEVBQUUsVUFBVTthQUNsQjtZQUNEO2dCQUNJLEtBQUssRUFBRSxNQUFNO2dCQUNiLEtBQUssRUFBRSxNQUFNO2FBQ2hCO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLE9BQU87Z0JBQ2QsS0FBSyxFQUFFLE9BQU87YUFDakI7U0FDRixDQUFDO1FBQ0YsZ0JBQVcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7UUFDcEQsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDckIsd0JBQW1CLEdBQUcsSUFBSSxDQUFDO1FBQzVCLDJCQUFzQixHQUFHLElBQUksQ0FBQztRQUM5QixtQkFBYyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUN2RCxnQkFBVyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUFELHlDQUFDO0FBQUQsQ0FBQyxBQXpDRCxJQXlDQzs7OztJQXhDQyxnREFBcUQ7O0lBQ3JELHVEQUFlOztJQUNmLDBEQUFpQjs7SUFDakIscURBZ0JHOztJQUNILDBEQWFFOztJQUNGLHlEQUFvRDs7SUFDcEQsNkRBQXFCOztJQUNyQixpRUFBMkI7O0lBQzVCLG9FQUE4Qjs7SUFDOUIsNERBQXVEOztJQUN2RCx5REFBbUU7O0FBR3BFO0lBRytELHFFQUF5RTtJQUN0STtlQUNFLGtCQUFNLGtDQUFrQyxDQUFDO0lBQzNDLENBQUM7O2dCQU5GLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O29EQW5ERDtDQXdEQyxBQVBELENBRytELGdCQUFnQixHQUk5RTtTQUpZLHlDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGZha2VyIGZyb20gJ2Zha2VyL2xvY2FsZS9lbl9VUyc7XG5cbmltcG9ydCB7IERhZmZDYXRlZ29yeVBhZ2VDb25maWd1cmF0aW9uU3RhdGUsIERhZmZDYXRlZ29yeUZpbHRlclR5cGUsIERhZmZDYXRlZ29yeVJlcXVlc3QgfSBmcm9tICdAZGFmZm9kaWwvY2F0ZWdvcnknO1xuaW1wb3J0IHsgRGFmZk1vZGVsRmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuXG5leHBvcnQgY2xhc3MgTW9ja0NhdGVnb3J5UGFnZUNvbmZpZ3VyYXRpb25TdGF0ZSBpbXBsZW1lbnRzIERhZmZDYXRlZ29yeVBhZ2VDb25maWd1cmF0aW9uU3RhdGU8RGFmZkNhdGVnb3J5UmVxdWVzdD4ge1xuICBpZCA9IFN0cmluZyhmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwfSkpO1xuICBwYWdlX3NpemUgPSAyMDtcbiAgY3VycmVudF9wYWdlID0gMTtcbiAgZmlsdGVycyA9IFt7XG4gICAgbGFiZWw6ICdDYXRlZ29yeScsXG4gICAgbmFtZTogJ2NhdCcsXG4gICAgdHlwZTogRGFmZkNhdGVnb3J5RmlsdGVyVHlwZS5FcXVhbCxcbiAgICBvcHRpb25zOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnR2VhcicsXG4gICAgICAgIHZhbHVlOiAnMycsXG4gICAgICAgIGNvdW50OiAzNFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdUcmFpbmluZycsXG4gICAgICAgIHZhbHVlOiAnOScsXG4gICAgICAgIGNvdW50OiA2XG4gICAgICB9XG4gICAgXVxuICB9XTtcbiAgc29ydF9vcHRpb25zID0gW1xuICAgIHtcbiAgICAgIGxhYmVsOiAnUG9zaXRpb24nLFxuICAgICAgdmFsdWU6ICdwb3NpdGlvbidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbGFiZWw6ICdOYW1lJyxcbiAgICAgICAgdmFsdWU6ICduYW1lJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ1ByaWNlJyxcbiAgICAgICAgdmFsdWU6ICdwcmljZSdcbiAgICB9XG4gIF07XG4gIHRvdGFsX3BhZ2VzID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDR9KTtcbiAgZmlsdGVyX3JlcXVlc3RzID0gW107XG4gIGFwcGxpZWRfc29ydF9vcHRpb24gPSBudWxsO1xuXHRhcHBsaWVkX3NvcnRfZGlyZWN0aW9uID0gbnVsbDtcblx0dG90YWxfcHJvZHVjdHMgPSBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogM30pO1xuXHRwcm9kdWN0X2lkcyA9IFtmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwfSkudG9TdHJpbmcoKV07XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZDYXRlZ29yeVBhZ2VDb25maWd1cmF0aW9uU3RhdGVGYWN0b3J5IGV4dGVuZHMgRGFmZk1vZGVsRmFjdG9yeTxEYWZmQ2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlPERhZmZDYXRlZ29yeVJlcXVlc3Q+PntcbiAgY29uc3RydWN0b3IoKXtcbiAgICBzdXBlcihNb2NrQ2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlKTtcbiAgfVxufVxuIl19