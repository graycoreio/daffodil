import { DaffProductCollectionRequest } from '@daffodil/product';
import { DaffSearchDriverOptions } from '@daffodil/search/driver';

export interface DaffSearchProductDriverOptions extends DaffSearchDriverOptions, DaffProductCollectionRequest {}
