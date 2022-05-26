import { DaffSortDirectionEnum } from '@daffodil/core';

import {
  MagentoSortFieldAction,
  MagentoSortDirectionEnum,
} from '../models/public_api';

const transformDirection = (direction: DaffSortDirectionEnum): MagentoSortDirectionEnum => {
  if (direction === DaffSortDirectionEnum.Ascending) {
    return MagentoSortDirectionEnum.Ascending;
  } else if (direction === DaffSortDirectionEnum.Descending) {
    return MagentoSortDirectionEnum.Decending;
  }
};

export const magentoAppliedSortOptionTransform = (appliedOption: string, appliedDirection: DaffSortDirectionEnum): MagentoSortFieldAction => ({
  [appliedOption]: transformDirection(appliedDirection),
});

