import { DaffSortDirectionEnum } from '@daffodil/core';

import { MagentoSortEnum } from '../../models/public_api';

const map = <const>{
  [DaffSortDirectionEnum.Ascending]: MagentoSortEnum.ASC,
  [DaffSortDirectionEnum.Descending]: MagentoSortEnum.DESC,
};

export function magentoSortDirectionRequestTransform(direction: DaffSortDirectionEnum): MagentoSortEnum {
  return map[direction];
}
