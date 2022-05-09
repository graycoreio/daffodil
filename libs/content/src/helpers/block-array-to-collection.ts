import { daffArrayToDict } from '@daffodil/core';

import {
  DaffContentBlock,
  DaffContentBlockCollection,
} from '../models/public_api';

export const daffContentBlockArrayToCollection = <T extends DaffContentBlock = DaffContentBlock>(ary: T[]): DaffContentBlockCollection =>
  daffArrayToDict<T>(ary, block => block.id);
