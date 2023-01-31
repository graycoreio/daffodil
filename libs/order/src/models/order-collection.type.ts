import { DaffCollection } from '@daffodil/core';

import { DaffOrder } from './order';

export type DaffOrderCollection<T extends DaffOrder = DaffOrder> = DaffCollection<T>;
