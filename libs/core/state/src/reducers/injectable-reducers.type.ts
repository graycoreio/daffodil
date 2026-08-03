import {
  ActionReducer,
  MetaReducer,
  StoreConfig,
} from '@ngrx/store';

import {
  DaffMultiInjectionToken,
  DaffSingleInjectionToken,
} from '@daffodil/core';

export interface InjectableReducersTokens<T> {
  extra: DaffMultiInjectionToken<ActionReducer<T>>;
  reducers: DaffSingleInjectionToken<ActionReducer<T>>;
  meta: DaffMultiInjectionToken<MetaReducer<T>>;
  config: DaffSingleInjectionToken<StoreConfig<T>>;
}
