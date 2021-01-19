import { ID } from '@daffodil/core';

export interface DaffCategoryBreadcrumb {
  categoryId: ID;
  categoryName: string;
  categoryLevel: number;
  categoryUrlKey: string;
}
