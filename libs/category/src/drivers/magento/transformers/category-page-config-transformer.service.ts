import { Injectable } from '@angular/core';

import { SortFieldsAndFiltersNode, FilterNode } from '@daffodil/product';

import { DaffCategoryPageConfigurationState } from '../../../models/category-page-configuration-state';
import { CategoryNode } from '../models/outputs/category-node';
import { DaffCategoryPageConfigTransformerInterface } from '../../interfaces/category-page-configuration-transformer.interface';
import { DaffCategoryFilter } from '../../../models/category-filter';

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCategoryPageConfigTransformerService implements DaffCategoryPageConfigTransformerInterface<DaffCategoryPageConfigurationState> {

  transform(categoryNode: CategoryNode, sortsAndFilters: SortFieldsAndFiltersNode): DaffCategoryPageConfigurationState {
    return {
      id: categoryNode.id,
      page_size: categoryNode.products.page_info.page_size,
      current_page: categoryNode.products.page_info.current_page,
      total_pages: categoryNode.products.page_info.total_pages,
      filters: sortsAndFilters.filters.map((filter) => this.transformFilter(filter)),
      sort_options: sortsAndFilters.sortFields.options
    }
  }

  transformFilter(filter: FilterNode): DaffCategoryFilter {
    return {
      name: filter.name,
      type: filter.__typename,
      items_count: filter.filter_items_count,
      attribute_name: filter.request_var,
      options: filter.filter_items.map((item) => {
        return {
          items_count: item.items_count,
          value: item.value_string,
          label: item.label
        }
      })
    }
  }
}
