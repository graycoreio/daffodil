import { Injectable } from '@angular/core';

import { DaffCategory } from '../../../models/category';
import { DaffCategoryFilterType } from '../../../models/category-filter-base';
import {
  DaffCategoryFilterRequest,
  DaffCategoryFromToFilterSeparator,
} from '../../../models/requests/filter-request';
import {
  MagentoCategoryFilters,
  MagentoCategoryFilterActionEnum,
} from '../models/requests/filters';

@Injectable({
  providedIn: 'root',
})
export class DaffMagentoAppliedFiltersTransformService {

  transform(categoryId: DaffCategory['id'], daffFilters: DaffCategoryFilterRequest[]): MagentoCategoryFilters {
    const magentoFilters: MagentoCategoryFilters = {
      category_id: {
        [MagentoCategoryFilterActionEnum.Equal]: String(categoryId),
      },
    };

    if(!daffFilters) {
      return magentoFilters;
    }

    daffFilters.forEach(filter => {
      // The FromTo filter needs special treatment, because Magento accepts the "from" and "to" filters
      // separately (it also outputs FromTo filter pairs together)
      if(filter.type === DaffCategoryFilterType.Range) {
        const fromToValues = filter.value[0].split(DaffCategoryFromToFilterSeparator);
        magentoFilters[filter.name] = {
          ...magentoFilters[filter.name],
          ...this.getRangeFromValue(fromToValues[0]),
          ...this.getRangeToValue(fromToValues[1]),
        };
      } else {
        magentoFilters[filter.name] = {
          ...magentoFilters[filter.name],
          [this.getFilterAction(filter.type)]: this.getFilterValue(filter.type, filter.value),
        };
      }
    });

    return magentoFilters;
  }

  /**
   * Returns an In action for Equal type and a Match action for Match type.
   */
  private getFilterAction(type: DaffCategoryFilterType): MagentoCategoryFilterActionEnum {
    return type === DaffCategoryFilterType.Equal
      ? MagentoCategoryFilterActionEnum.In
      : MagentoCategoryFilterActionEnum.Match;
  }

  /**
   * Returns an array for Equal type and a string for Match type.
   */
  private getFilterValue(type: DaffCategoryFilterType, value: DaffCategoryFilterRequest['value']): string | string[] {
    return type === DaffCategoryFilterType.Equal ? value : value[0];
  }

  private getRangeFromValue(fromValue: string) {
    return fromValue !== '*' ? { [MagentoCategoryFilterActionEnum.From]: fromValue } : null;
  }

  private getRangeToValue(toValue: string) {
    return toValue !== '*' ? { [MagentoCategoryFilterActionEnum.To]: toValue } : null;
  }
}
