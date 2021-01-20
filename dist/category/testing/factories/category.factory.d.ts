import { DaffCategory } from '@daffodil/category';
import { DaffModelFactory } from '@daffodil/core/testing';
export declare class MockCategory implements DaffCategory {
    id: any;
    name: any;
    description: any;
    breadcrumbs: {
        categoryId: any;
        categoryName: any;
        categoryLevel: any;
        categoryUrlKey: any;
    }[];
    children_count: any;
    total_products: number;
    product_ids: any[];
}
export declare class DaffCategoryFactory extends DaffModelFactory<DaffCategory> {
    constructor();
}
