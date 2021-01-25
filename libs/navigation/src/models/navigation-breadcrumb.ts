import { DaffNavigationTree } from './navigation-tree';

export interface DaffNavigationBreadcrumb {
  categoryId: DaffNavigationTree['id'];
  categoryName: string;
  categoryLevel: number;
  categoryUrlKey: string;
}
