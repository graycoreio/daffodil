import { Injectable } from '@angular/core';
import { DaffDriverConfig } from '../models/driver-config';

export class DaffDriverConfigMock implements DaffDriverConfig {
  BASE_URL = 'baseUrl/';
}

@Injectable()
export class DaffDriverConfigFactory {
  create(config? : Partial<DaffDriverConfig>): DaffDriverConfig {
    return {
      ...new DaffDriverConfigMock(),
      ...config
    };
  }
}
