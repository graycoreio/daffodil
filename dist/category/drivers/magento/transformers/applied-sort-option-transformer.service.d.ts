import { MagentoSortFieldAction } from '../models/requests/sort';
import { DaffSortDirectionEnum } from '../../../models/requests/category-request';
export declare class DaffMagentoAppliedSortOptionTransformService {
    transform(appliedOption: string, appliedDirection: DaffSortDirectionEnum): MagentoSortFieldAction;
    private transformDirection;
}
