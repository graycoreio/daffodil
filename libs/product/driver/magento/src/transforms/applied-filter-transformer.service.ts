import { Injectable } from '@angular/core';

import {
  DaffFilterRequest,
  DaffFilterType,
} from '@daffodil/core';

import {
  MagentoProductFilterActionEnum,
  MagentoProductFilters,
} from '../models/public_api';


@Injectable({
  providedIn: 'root',
})
export class MagentoProductAppliedFiltersTransformService {

  transform(daffFilters: DaffFilterRequest[]): MagentoProductFilters {
    const magentoFilters: MagentoProductFilters = {};

    if (!daffFilters) {
      return magentoFilters;
    }

    daffFilters.forEach(filter => {
      // The FromTo filter needs special treatment, because Magento accepts the "from" and "to" filters
      // separately (it also outputs FromTo filter pairs together)
      if(filter.type === DaffFilterType.RangeNumeric) {
        magentoFilters[filter.name] = {
          ...magentoFilters[filter.name],
          ...this.getRangeFromValue(filter.value.min.toString()),
          ...this.getRangeToValue(filter.value.max.toString()),
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
  private getFilterAction(type: DaffFilterType): MagentoProductFilterActionEnum {
    return type === DaffFilterType.Equal
      ? MagentoProductFilterActionEnum.In
      : MagentoProductFilterActionEnum.Match;
  }

  /**
   * Returns an array for Equal type and a string for Match type.
   */
  private getFilterValue(type: DaffFilterType, value: DaffFilterRequest['value']): string | string[] {
    return type === DaffFilterType.Equal ? value : value[0];
  }

  private getRangeFromValue(fromValue: string) {
    return fromValue !== '*' ? { [MagentoProductFilterActionEnum.From]: fromValue } : null;
  }

  private getRangeToValue(toValue: string) {
    return toValue !== '*' ? { [MagentoProductFilterActionEnum.To]: toValue } : null;
  }
}
