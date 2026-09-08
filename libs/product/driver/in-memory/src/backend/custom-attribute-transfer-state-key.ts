import { makeStateKey } from '@angular/core';

import { DaffProductCustomAttribute } from '@daffodil/product';

export const CUSTOM_ATTRIBUTE_TRANSFER_STATE_KEY = makeStateKey<DaffProductCustomAttribute[]>('DAFF_PRODUCT_CUSTOM_ATTRIBUTES_INMEMORY_DATA');
