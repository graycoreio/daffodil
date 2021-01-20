import { DaffCategoryPageConfigurationState } from '../../../models/category-page-configuration-state';
import { MagentoCompleteCategoryResponse } from '../models/complete-category-response';
import { DaffCategoryRequest } from '../../../models/requests/category-request';
export declare class DaffMagentoCategoryPageConfigTransformerService {
    transform(categoryResponse: MagentoCompleteCategoryResponse): DaffCategoryPageConfigurationState<DaffCategoryRequest>;
    private transformAggregate;
    private transformAggregateType;
    private transformRangeValue;
}
