/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffCategoryFilterType } from '@daffodil/category';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
export class MockCategoryPageConfigurationState {
    constructor() {
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
}
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
export class DaffCategoryPageConfigurationStateFactory extends DaffModelFactory {
    constructor() {
        super(MockCategoryPageConfigurationState);
    }
}
DaffCategoryPageConfigurationStateFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffCategoryPageConfigurationStateFactory.ctorParameters = () => [];
/** @nocollapse */ DaffCategoryPageConfigurationStateFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffCategoryPageConfigurationStateFactory_Factory() { return new DaffCategoryPageConfigurationStateFactory(); }, token: DaffCategoryPageConfigurationStateFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktcGFnZS1jb25maWd1cmF0aW9uLXN0YXRlLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2F0ZWdvcnkvdGVzdGluZy8iLCJzb3VyY2VzIjpbImZhY3Rvcmllcy9jYXRlZ29yeS1wYWdlLWNvbmZpZ3VyYXRpb24tc3RhdGUuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssS0FBSyxNQUFNLG9CQUFvQixDQUFDO0FBRTVDLE9BQU8sRUFBc0Msc0JBQXNCLEVBQXVCLE1BQU0sb0JBQW9CLENBQUM7QUFDckgsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRTFELE1BQU0sT0FBTyxrQ0FBa0M7SUFBL0M7UUFDRSxPQUFFLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JELGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixpQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixZQUFPLEdBQUcsQ0FBQztnQkFDVCxLQUFLLEVBQUUsVUFBVTtnQkFDakIsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsSUFBSSxFQUFFLHNCQUFzQixDQUFDLEtBQUs7Z0JBQ2xDLE9BQU8sRUFBRTtvQkFDUDt3QkFDRSxLQUFLLEVBQUUsTUFBTTt3QkFDYixLQUFLLEVBQUUsR0FBRzt3QkFDVixLQUFLLEVBQUUsRUFBRTtxQkFDVjtvQkFDRDt3QkFDRSxLQUFLLEVBQUUsVUFBVTt3QkFDakIsS0FBSyxFQUFFLEdBQUc7d0JBQ1YsS0FBSyxFQUFFLENBQUM7cUJBQ1Q7aUJBQ0Y7YUFDRixDQUFDLENBQUM7UUFDSCxpQkFBWSxHQUFHO1lBQ2I7Z0JBQ0UsS0FBSyxFQUFFLFVBQVU7Z0JBQ2pCLEtBQUssRUFBRSxVQUFVO2FBQ2xCO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLE1BQU07Z0JBQ2IsS0FBSyxFQUFFLE1BQU07YUFDaEI7WUFDRDtnQkFDSSxLQUFLLEVBQUUsT0FBTztnQkFDZCxLQUFLLEVBQUUsT0FBTzthQUNqQjtTQUNGLENBQUM7UUFDRixnQkFBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUNwRCxvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQix3QkFBbUIsR0FBRyxJQUFJLENBQUM7UUFDNUIsMkJBQXNCLEdBQUcsSUFBSSxDQUFDO1FBQzlCLG1CQUFjLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQ3ZELGdCQUFXLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNwRSxDQUFDO0NBQUE7OztJQXhDQyxnREFBcUQ7O0lBQ3JELHVEQUFlOztJQUNmLDBEQUFpQjs7SUFDakIscURBZ0JHOztJQUNILDBEQWFFOztJQUNGLHlEQUFvRDs7SUFDcEQsNkRBQXFCOztJQUNyQixpRUFBMkI7O0lBQzVCLG9FQUE4Qjs7SUFDOUIsNERBQXVEOztJQUN2RCx5REFBbUU7O0FBTXBFLE1BQU0sT0FBTyx5Q0FBMEMsU0FBUSxnQkFBeUU7SUFDdEk7UUFDRSxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7WUFORixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBmYWtlciBmcm9tICdmYWtlci9sb2NhbGUvZW5fVVMnO1xuXG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlLCBEYWZmQ2F0ZWdvcnlGaWx0ZXJUeXBlLCBEYWZmQ2F0ZWdvcnlSZXF1ZXN0IH0gZnJvbSAnQGRhZmZvZGlsL2NhdGVnb3J5JztcbmltcG9ydCB7IERhZmZNb2RlbEZhY3RvcnkgfSBmcm9tICdAZGFmZm9kaWwvY29yZS90ZXN0aW5nJztcblxuZXhwb3J0IGNsYXNzIE1vY2tDYXRlZ29yeVBhZ2VDb25maWd1cmF0aW9uU3RhdGUgaW1wbGVtZW50cyBEYWZmQ2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlPERhZmZDYXRlZ29yeVJlcXVlc3Q+IHtcbiAgaWQgPSBTdHJpbmcoZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMH0pKTtcbiAgcGFnZV9zaXplID0gMjA7XG4gIGN1cnJlbnRfcGFnZSA9IDE7XG4gIGZpbHRlcnMgPSBbe1xuICAgIGxhYmVsOiAnQ2F0ZWdvcnknLFxuICAgIG5hbWU6ICdjYXQnLFxuICAgIHR5cGU6IERhZmZDYXRlZ29yeUZpbHRlclR5cGUuRXF1YWwsXG4gICAgb3B0aW9uczogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJ0dlYXInLFxuICAgICAgICB2YWx1ZTogJzMnLFxuICAgICAgICBjb3VudDogMzRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnVHJhaW5pbmcnLFxuICAgICAgICB2YWx1ZTogJzknLFxuICAgICAgICBjb3VudDogNlxuICAgICAgfVxuICAgIF1cbiAgfV07XG4gIHNvcnRfb3B0aW9ucyA9IFtcbiAgICB7XG4gICAgICBsYWJlbDogJ1Bvc2l0aW9uJyxcbiAgICAgIHZhbHVlOiAncG9zaXRpb24nXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnTmFtZScsXG4gICAgICAgIHZhbHVlOiAnbmFtZSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbGFiZWw6ICdQcmljZScsXG4gICAgICAgIHZhbHVlOiAncHJpY2UnXG4gICAgfVxuICBdO1xuICB0b3RhbF9wYWdlcyA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiA0fSk7XG4gIGZpbHRlcl9yZXF1ZXN0cyA9IFtdO1xuICBhcHBsaWVkX3NvcnRfb3B0aW9uID0gbnVsbDtcblx0YXBwbGllZF9zb3J0X2RpcmVjdGlvbiA9IG51bGw7XG5cdHRvdGFsX3Byb2R1Y3RzID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDN9KTtcblx0cHJvZHVjdF9pZHMgPSBbZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMH0pLnRvU3RyaW5nKCldO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmQ2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlRmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8RGFmZkNhdGVnb3J5UGFnZUNvbmZpZ3VyYXRpb25TdGF0ZTxEYWZmQ2F0ZWdvcnlSZXF1ZXN0Pj57XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc3VwZXIoTW9ja0NhdGVnb3J5UGFnZUNvbmZpZ3VyYXRpb25TdGF0ZSk7XG4gIH1cbn1cbiJdfQ==