import { Injectable } from '@angular/core';

import { MagentoCategoryFilters } from '../models/requests/filters';
import { DaffCategoryFilterAction } from '../../../models/requests/filter-action';

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoAppliedFiltersTransformService {

  transform(daffFilters: DaffCategoryFilterAction[]): MagentoCategoryFilters {
		const magentoFilters: MagentoCategoryFilters = {};

		daffFilters.map(filter => {
			magentoFilters[filter.code] = {
				[filter.action]: filter.value
			}
		});

		return magentoFilters;
  }
}
