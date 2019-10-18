import { DaffCategoryPageConfigurationState } from '../../models/category-page-configuration-state';

export interface DaffCategoryPageConfigTransformerInterface<T extends DaffCategoryPageConfigurationState> {
  transform(category: any, sortFields: any): T;
}
