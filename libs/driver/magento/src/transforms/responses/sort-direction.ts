import { DaffSortDirectionEnum } from '@daffodil/core';

import { MagentoSortEnum } from '../../models/public_api';

const map = <const>{
  [MagentoSortEnum.ASC]: DaffSortDirectionEnum.Ascending,
  [MagentoSortEnum.DESC]: DaffSortDirectionEnum.Descending,
};

export function magentoSortDirectionResponseTransform(direction: MagentoSortEnum): DaffSortDirectionEnum {
  return map[direction];
}
