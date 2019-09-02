import { DaffCategory } from '../../models/category';

export interface DaffCategoryTransformerInterface<T extends DaffCategory> {
  transform(category: any): T;
}
