import { Injectable } from '@angular/core';

import { DaffSortDirectionEnum } from '@daffodil/core/state';

import {
  MagentoSortFieldAction,
  MagentoSortDirectionEnum,
} from '../models/requests/sort';

@Injectable({
  providedIn: 'root',
})
export class DaffMagentoAppliedSortOptionTransformService {

  transform(appliedOption: string, appliedDirection: DaffSortDirectionEnum): MagentoSortFieldAction {
    return {
      [appliedOption]: this.transformDirection(appliedDirection),
    };
  }

  private transformDirection(direction: DaffSortDirectionEnum): MagentoSortDirectionEnum {
    if(direction === DaffSortDirectionEnum.Ascending) {
      return MagentoSortDirectionEnum.Ascending;
    } else if(direction === DaffSortDirectionEnum.Descending) {
      return MagentoSortDirectionEnum.Decending;
    }
  }
}
