import { makeStateKey } from '@angular/core';

import { DaffProduct } from '@daffodil/product';

export const TRANSFER_STATE_KEY = makeStateKey<DaffProduct[]>('DAFF_PRODUCTS_INMEMORY_DATA');
