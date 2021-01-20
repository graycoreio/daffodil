import { DaffMagentoCategoryPageConfigTransformerService } from './category-page-config-transformer.service';
import { MagentoCompleteCategoryResponse } from '../models/complete-category-response';
import { DaffGetCategoryResponse } from '../../../models/get-category-response';
import { DaffMagentoCategoryTransformerService } from './category-transformer.service';
export declare class DaffMagentoCategoryResponseTransformService {
    private magentoCategoryTransformerService;
    private magentoCategoryPageConfigurationTransformerService;
    constructor(magentoCategoryTransformerService: DaffMagentoCategoryTransformerService, magentoCategoryPageConfigurationTransformerService: DaffMagentoCategoryPageConfigTransformerService);
    transform(completeCategory: MagentoCompleteCategoryResponse): DaffGetCategoryResponse;
}
