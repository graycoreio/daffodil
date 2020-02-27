import { Injectable } from '@angular/core';

import { MagentoCategoryFilters } from '../models/outputs/filters';
import { DaffCategoryFilterAction } from '../../../models/outputs/filter-action';

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
