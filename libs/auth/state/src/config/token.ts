import {
  InjectionToken,
  ValueProvider,
} from '@angular/core';

import { daffAuthStateDefaultConfig } from './default';
import { DaffAuthStateConfig } from './type';

export const DAFF_AUTH_STATE_CONFIG = new InjectionToken('DAFF_AUTH_STATE_CONFIG', { factory: () => daffAuthStateDefaultConfig });

export const provideDaffAuthStateConfig = (config: DaffAuthStateConfig): ValueProvider => ({
  provide: DAFF_AUTH_STATE_CONFIG,
  useValue: config,
});
