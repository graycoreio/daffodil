import { InjectionToken } from '@angular/core';

import {
  DaffMagentoDriverConfig,
  provideMagentoDriver,
} from './provider';

describe('@daffodil/driver/magento | provideMagentoDriver', () => {
  describe('when options is an InjectionToken', () => {
    const CONFIG_TOKEN = new InjectionToken<DaffMagentoDriverConfig>('test config');

    it('should not throw when registering providers', () => {
      expect(() => {
        provideMagentoDriver(CONFIG_TOKEN);
      }).not.toThrow();
    });
  });
});
