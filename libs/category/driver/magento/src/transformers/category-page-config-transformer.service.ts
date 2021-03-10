import { Injectable } from '@angular/core';

import {
  DaffCategoryPageConfigurationState,
  DaffCategoryRequest,
  DaffCategoryFilter,
  DaffCategoryFilterType,
  DaffCategoryFromToFilterSeparator,
} from '@daffodil/category';

import {
  MagentoCompleteCategoryResponse,
  MagentoAggregation,
} from '../models/public_api';
import { coerceDefaultSortOptionFirst } from './pure/sort-default-option-first';

@Injectable({
  providedIn: 'root',
})
export class DaffMagentoCategoryPageConfigTransformerService {

  transform(categoryResponse: MagentoCompleteCategoryResponse): DaffCategoryPageConfigurationState<DaffCategoryRequest> {
    return {
      id: String(categoryResponse.category.id),
      page_size: categoryResponse.page_info.page_size,
      current_page: categoryResponse.page_info.current_page,
      total_pages: categoryResponse.page_info.total_pages,
      total_products: categoryResponse.total_count,
      filters: categoryResponse.aggregates.map(this.transformAggregate.bind(this)),
      sort_options: coerceDefaultSortOptionFirst(categoryResponse.sort_fields).options,
      product_ids: categoryResponse.products.map(product => product.sku),
    };
  }

  private transformAggregate(filter: MagentoAggregation): DaffCategoryFilter {
    const filterType = this.transformAggregateType(filter.type);
    return {
      label: filter.label,
      type: filterType,
      name: filter.attribute_code,
      options: filter.options.map(option => ({
        label: option.label,
        value: filterType === DaffCategoryFilterType.Range ? this.transformRangeValue(option.value) : option.value,
        count: option.count,
      })),
    };
  }

  private transformAggregateType(type: MagentoAggregation['type']): DaffCategoryFilterType {
    if(type === 'select') {
      return DaffCategoryFilterType.Equal;
    } else if(type === 'boolean') {
      return DaffCategoryFilterType.Equal;
    } else if(type === 'multiselect') {
      return DaffCategoryFilterType.Equal;
    } else if(type === 'price') {
      return DaffCategoryFilterType.Range;
    } else {
      return DaffCategoryFilterType.Match;
    }
  }

  private transformRangeValue(value: string): string {
    return value.replace('_', DaffCategoryFromToFilterSeparator);
  }
}
