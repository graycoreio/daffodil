import { DaffCategoryPageConfigurationState, DaffCategoryFilterType, DaffCategoryRequest } from '@daffodil/category';
import { DaffModelFactory } from '@daffodil/core/testing';
export declare class MockCategoryPageConfigurationState implements DaffCategoryPageConfigurationState<DaffCategoryRequest> {
    id: string;
    page_size: number;
    current_page: number;
    filters: {
        label: string;
        name: string;
        type: DaffCategoryFilterType;
        options: {
            label: string;
            value: string;
            count: number;
        }[];
    }[];
    sort_options: {
        label: string;
        value: string;
    }[];
    total_pages: any;
    filter_requests: any[];
    applied_sort_option: any;
    applied_sort_direction: any;
    total_products: any;
    product_ids: any[];
}
export declare class DaffCategoryPageConfigurationStateFactory extends DaffModelFactory<DaffCategoryPageConfigurationState<DaffCategoryRequest>> {
    constructor();
}
