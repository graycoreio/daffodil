import { DaffCategory } from '../../../models/category';
import { MagentoCategory } from '../models/category';
export declare class DaffMagentoCategoryTransformerService {
    transform(category: MagentoCategory): DaffCategory;
    private transformBreadcrumb;
}
