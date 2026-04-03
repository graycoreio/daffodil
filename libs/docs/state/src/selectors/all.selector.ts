import { DaffDocsItem } from '@daffodil/docs-utils';

import {
  DaffDocsEntitySelectors,
  getDaffDocsEntitySelectors,
} from './entities.selector';
import {
  DaffDocsFeatureSelector,
  getDaffDocsReducersStateSelector,
} from './feature.selector';
import {
  DaffDocsSelectors,
  getDocsSelectors,
} from './selector';

export interface DaffDocsAllSelectors<T extends DaffDocsItem = DaffDocsItem> extends
  DaffDocsEntitySelectors<T>,
  DaffDocsSelectors<T>,
  DaffDocsFeatureSelector<T> {}

export const getDaffDocsSelectors = (() => {
  let cache: any;
  return <T extends DaffDocsItem = DaffDocsItem>(): DaffDocsAllSelectors<T> =>
    cache = cache || {
      ...getDocsSelectors<T>(),
      ...getDaffDocsEntitySelectors<T>(),
      ...getDaffDocsReducersStateSelector<T>(),
    };
})();
