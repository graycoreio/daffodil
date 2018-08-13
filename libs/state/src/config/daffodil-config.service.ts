import { Injectable, Inject } from '@angular/core';
import { DaffodilConfig } from '../config/model';
import { _DAFFODIL_CONFIG } from '../tokens';

@Injectable()
export class DaffodilConfigService {

  constructor(@Inject(_DAFFODIL_CONFIG) private daffodilConfig:any) { }

  get config(): DaffodilConfig {
    return this.daffodilConfig;
  }
}


export function DaffodilConfigServiceFactory(config: DaffodilConfig) {
  return new DaffodilConfigService(config);
}