import { Dictionary } from '@ngrx/entity';
import { DaffCompositeConfigurationItem } from '../../models/composite-configuration-item';
export interface DaffCompositeProductEntity {
    id: string;
    items: Dictionary<DaffCompositeConfigurationItem>;
}
