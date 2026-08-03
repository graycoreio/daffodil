import {
  inject,
  Injector,
  runInInjectionContext,
} from '@angular/core';
import {
  ActionReducer,
  MetaReducer,
  StoreConfig,
} from '@ngrx/store';

import {
  createMultiInjectionToken,
  createSingleInjectionToken,
} from '@daffodil/core';

import { daffComposeReducers } from './compose';
import { InjectableReducersTokens } from './injectable-reducers.type';

export const createInjectableReducersTokens = <T>(
  feature: string,
  createReducers: () => ActionReducer<T>,
): InjectableReducersTokens<T> => {
  const extra = createMultiInjectionToken<ActionReducer<T>>(`${feature}_EXTRA_REDUCERS`);
  const reducers = createSingleInjectionToken<ActionReducer<T>>(
    `${feature}_REDUCERS`,
    {
      factory: () => daffComposeReducers([
        runInInjectionContext(inject(Injector), createReducers),
        ...inject(extra.token),
      ]),
    },
  );
  const meta = createMultiInjectionToken<MetaReducer<T>>(`${feature}_META_REDUCERS`);
  const config = createSingleInjectionToken<StoreConfig<T>>(
    `${feature}_STORE_CONFIG`,
    {
      providedIn: 'any',
      factory: () => ({
        metaReducers: inject(meta.token),
      }),
    },
  );

  return {
    extra,
    reducers,
    meta,
    config,
  };
};
