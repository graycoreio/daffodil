import { Injectable } from '@angular/core';

import { DaffCategoryPageConfigurationState } from '../../../models/category-page-configuration-state';
import { DaffCategoryFilter, DaffCategoryFilterTypes } from '../../../models/category-filter';
import { MagentoAggregation } from '../models/aggregation';
import { MagentoSortFields } from '../models/sort-fields';
import { MagentoCompleteCategoryResponse } from '../models/complete-category-response';

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCategoryPageConfigTransformerService {

  transform(categoryResponse: MagentoCompleteCategoryResponse): DaffCategoryPageConfigurationState {
		return {
      id: categoryResponse.category.id,
      page_size: categoryResponse.page_info.page_size,
      current_page: categoryResponse.page_info.current_page,
			total_pages: categoryResponse.page_info.total_pages,
			total_products: categoryResponse.total_count,
      filters: categoryResponse.aggregates.map(this.transformAggregate),
			sort_options: this.makeDefaultOptionFirst(categoryResponse.sort_fields).options,
			product_ids: categoryResponse.products.map(product => product.sku)
    }
  }

  private transformAggregate(filter: MagentoAggregation): DaffCategoryFilter {
    return {
      label: filter.label,
      type: DaffCategoryFilterTypes.Equal,
			name: filter.attribute_code,
			items_count: filter.count,
			options: filter.options.map(option => {
				return {
					label: option.label,
					value: option.value,
					items_count: option.count
				}
			})
    }
	}

	private makeDefaultOptionFirst(sort_fields: MagentoSortFields): MagentoSortFields {
		sort_fields.options.forEach((sort, index) => {
			if(sort_fields.default === sort.value) {
				const temp = sort_fields.options[0];
				sort_fields.options[0] = sort;
				sort_fields.options[index] = temp;
			}
		})
		return sort_fields;
	}
}
