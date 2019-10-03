import { Injectable } from '@angular/core';

import { DaffCategoryPageConfigurationState } from '../../../models/category-page-configuration-state';
import { CategoryNode } from '../models/outputs/category-node';
import { DaffCategoryPageConfigTransformerInterface } from '../../interfaces/category-page-config.interface';
import { CategorySortsAndFiltersNode } from '../models/outputs/sorts-and-filters-node';
import { FilterNode } from '../models/outputs/filters-node';
import { FilterItemNode } from '../models/outputs/filter-item-node';
import { DaffCategoryFilter } from '../../../models/category-filter';
import { DaffCategoryFilterOption } from '../../../models/category-filter-option';

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCategoryPageConfigTransformerService implements DaffCategoryPageConfigTransformerInterface<DaffCategoryPageConfigurationState> {

  transform(categoryNode: CategoryNode, sortsAndFilters: CategorySortsAndFiltersNode): DaffCategoryPageConfigurationState {
    return {
      current_page: categoryNode.products.page_info.current_page,
      page_size: categoryNode.products.page_info.page_size,
      total_pages: categoryNode.products.page_info.total_pages,
      filters: sortsAndFilters.filters.map(this.transformFilter),
      sort_options: sortsAndFilters.sort_fields.options
    }
  }

  private transformFilter(filter: FilterNode): DaffCategoryFilter {
    return {
      name: filter.name,
      type: filter.__typename,
      items_count: filter.filter_items_count,
      attribute_name: filter.request_var,
      options: filter.filter_items.map(this.transformFilterItem)
    }
  }

  private transformFilterItem(filterItem: FilterItemNode): DaffCategoryFilterOption {
    return {
      items_count: filterItem.items_count,
      value: filterItem.value_string,
      label: filterItem.label
    }
  }
}
