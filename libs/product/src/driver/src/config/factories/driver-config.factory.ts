import { Injectable } from '@angular/core';
import { DaffDriverConfig } from '../models/driver-config';

@Injectable()
export class DaffDriverConfigFactory {
  create(config? : Partial<DaffDriverConfig>): DaffDriverConfig {
    return {
      ...new DaffDriverConfigMock(),
      ...config
    };
  }
}

export class DaffDriverConfigMock implements DaffDriverConfig {
  BASE_URL = 'baseUrl/';
}
