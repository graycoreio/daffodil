import { Injectable } from '@angular/core';

import { MagentoCategoryFilters, MagentoCategoryFilterActionEnum } from '../models/requests/filters';
import { DaffCategoryFilterAction, DaffCategoryFilterActionEnum } from '../../../models/requests/filter-action';

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoAppliedFiltersTransformService {

  transform(categoryId: string, daffFilters: DaffCategoryFilterAction[] = []): MagentoCategoryFilters {
		const magentoFilters: MagentoCategoryFilters = {
			category_id: {
				[MagentoCategoryFilterActionEnum.Equal]: categoryId
			}
		};

		daffFilters.forEach(filter => {
			magentoFilters[filter.name] = {
				...magentoFilters[filter.name],
				[this.transformActionEnum(filter.action)]: filter.value
			}
		});

		return magentoFilters;
	}
	
	private transformActionEnum(daffEnum: DaffCategoryFilterActionEnum): MagentoCategoryFilterActionEnum {
		if(daffEnum === DaffCategoryFilterActionEnum.Equal) return MagentoCategoryFilterActionEnum.Equal;
		else if(daffEnum === DaffCategoryFilterActionEnum.From) return MagentoCategoryFilterActionEnum.From;
		else if(daffEnum === DaffCategoryFilterActionEnum.To) return MagentoCategoryFilterActionEnum.To;
		else if(daffEnum === DaffCategoryFilterActionEnum.In) return MagentoCategoryFilterActionEnum.In;
		else if(daffEnum === DaffCategoryFilterActionEnum.Match) return MagentoCategoryFilterActionEnum.Match;
	}
}
