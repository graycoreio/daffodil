import { Injectable } from '@angular/core';

import { ProductNode } from '@daffodil/product';

import { DaffCategoryPageConfigurationState } from '../../../models/category-page-configuration-state';
import { DaffCategoryFilter, DaffCategoryFilterTypes } from '../../../models/category-filter';
import { MagentoAggregation } from '../models/aggregation';
import { MagentoPageInfo } from '../models/page-info';
import { MagentoSortFields } from '../models/sort-fields';

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCategoryPageConfigTransformerService {

  transform(
		categoryId: string,
		aggregates: MagentoAggregation[],
		page_info: MagentoPageInfo,
		sort_fields: MagentoSortFields,
		total_count: number,
		products: ProductNode[]
	): DaffCategoryPageConfigurationState {
		return {
      id: categoryId,
      page_size: page_info.page_size,
      current_page: page_info.current_page,
			total_pages: page_info.total_pages,
			total_products: total_count,
      filters: aggregates.map(this.transformAggregate),
			sort_options: this.makeDefaultOptionFirst(sort_fields).options,
			product_ids: products.map(product => product.sku)
    }
  }

  private transformAggregate(filter: MagentoAggregation): DaffCategoryFilter {
    return {
      name: filter.label,
      type: DaffCategoryFilterTypes.Equal,
			attribute_name: filter.attribute_code,
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
