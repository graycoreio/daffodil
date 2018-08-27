import { Injectable, Inject } from '@angular/core';
import { _DAFFODIL_DRIVER_CONFIG } from './tokens/driver-config.token';
import { DaffDriverConfig } from './models/driver-config';

@Injectable()
export class DaffDriverConfigService {
  constructor(@Inject(_DAFFODIL_DRIVER_CONFIG) private daffodilConfig: any) {}

  get config(): DaffDriverConfig {
    return this.daffodilConfig;
  }
}

export function DaffDriverConfigServiceFactory(config: DaffDriverConfig) {
  return new DaffDriverConfigService(config);
}
