import { daffDictAssignMerger } from '@daffodil/core';
import { DaffRouterDataServiceConfig } from '@daffodil/router';

import { DaffioRoute } from './route.type';

export const daffioRouterDataServiceConfig: DaffRouterDataServiceConfig<DaffioRoute['data']> = {
  mergeStrategy: {
    daffioSidebars: daffDictAssignMerger,
  },
};
