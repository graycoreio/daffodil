import { MagentoCategoryFilters } from '../models/requests/filters';
import { DaffCategoryFilterRequest } from '../../../models/requests/filter-request';
export declare class DaffMagentoAppliedFiltersTransformService {
    transform(categoryId: string, daffFilters: DaffCategoryFilterRequest[]): MagentoCategoryFilters;
    /**
     * Returns an In action for Equal type and a Match action for Match type.
     */
    private getFilterAction;
    /**
     * Returns an array for Equal type and a string for Match type.
     */
    private getFilterValue;
    private getRangeFromValue;
    private getRangeToValue;
}
