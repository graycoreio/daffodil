import { Injectable } from '@angular/core';
import { DaffodilConfig } from '@daffodil/config/model';

@Injectable()
export class DaffodilConfigService {

  constructor(
    private daffodilConfig: DaffodilConfig
  ) { }

  get config(): DaffodilConfig {
    return this.daffodilConfig;
  }
}
