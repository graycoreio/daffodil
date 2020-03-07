import { Injectable } from '@angular/core';

import { MagentoCategoryFilters } from '../models/requests/filters';
import { DaffCategoryFilterAction } from '../../../models/requests/filter-action';

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoAppliedFiltersTransformService {

  transform(categoryId: string, daffFilters: DaffCategoryFilterAction[] = []): MagentoCategoryFilters {
		const magentoFilters: MagentoCategoryFilters = {
			category_id: {
				eq: categoryId
			}
		};

		daffFilters.forEach(filter => {
			magentoFilters[filter.code] = {
				...magentoFilters[filter.code],
				[filter.action]: filter.value
			}
		});

		return magentoFilters;
  }
}
