import {
  EntityAdapter,
  createEntityAdapter,
} from '@ngrx/entity';

import { DaffDocsItem } from '@daffodil/docs-utils';

/**
 * Docs Adapter for changing/overwriting entity state.
 */
export const daffGetDocsAdapter = (() => {
  let cache: any;
  return <T extends DaffDocsItem = DaffDocsItem>(): EntityAdapter<T> =>
    cache = cache || createEntityAdapter<T>();
})();
