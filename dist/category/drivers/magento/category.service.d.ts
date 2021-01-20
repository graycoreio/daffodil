import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { DaffCategoryServiceInterface } from '../interfaces/category-service.interface';
import { DaffGetCategoryResponse } from '../../models/get-category-response';
import { DaffCategoryRequest } from '../../models/requests/category-request';
import { DaffMagentoAppliedFiltersTransformService } from './transformers/applied-filter-transformer.service';
import { DaffMagentoAppliedSortOptionTransformService } from './transformers/applied-sort-option-transformer.service';
import { DaffMagentoCategoryResponseTransformService } from './transformers/category-response-transform.service';
export declare class DaffMagentoCategoryService implements DaffCategoryServiceInterface {
    private apollo;
    private magentoCategoryResponseTransformer;
    private magentoAppliedFiltersTransformer;
    private magentoAppliedSortTransformer;
    constructor(apollo: Apollo, magentoCategoryResponseTransformer: DaffMagentoCategoryResponseTransformService, magentoAppliedFiltersTransformer: DaffMagentoAppliedFiltersTransformService, magentoAppliedSortTransformer: DaffMagentoAppliedSortOptionTransformService);
    /**
     * Gets a category based on parameters. Default current_page is 1, and default page_size is 20.
     * @param categoryRequest A DaffCategoryRequest object.
     */
    get(categoryRequest: DaffCategoryRequest): Observable<DaffGetCategoryResponse>;
    private getProductsQueryVariables;
    private buildCompleteCategoryResponse;
}
