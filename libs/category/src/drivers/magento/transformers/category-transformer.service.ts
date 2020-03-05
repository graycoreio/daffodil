import { Injectable } from '@angular/core';

import { DaffCategory } from '../../../models/category';
import { DaffCategoryBreadcrumb } from '../../../models/category-breadcrumb';
import { MagentoBreadcrumb, MagentoCategory } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCategoryTransformerService {

  transform(categoryNode: MagentoCategory): DaffCategory {
    return {
      id: categoryNode.id,
      name: categoryNode.name,
      children_count: categoryNode.children_count,
      breadcrumbs: categoryNode.breadcrumbs ? categoryNode.breadcrumbs.map(breadcrumb => this.transformBreadcrumb(breadcrumb)) : null
    }
  }

  private transformBreadcrumb(breadcrumb: MagentoBreadcrumb): DaffCategoryBreadcrumb {
    return {
      categoryId: breadcrumb.category_id,
      categoryName: breadcrumb.category_name,
      categoryLevel: breadcrumb.category_level,
      categoryUrlKey: breadcrumb.category_url_key
    }
  }
}
