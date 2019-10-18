import { DaffGetCategoryResponse } from '../../models/get-category-response';

export interface DaffCategoryResponseTransformerInterface<T extends DaffGetCategoryResponse> {
  transform(category: any): T;
}
