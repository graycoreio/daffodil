import { TestBed } from '@angular/core/testing';
import { ApolloTestingModule } from 'apollo-angular/testing';

import { DaffExternalRouterDriver } from '@daffodil/external-router/driver';
import { provideDaffExternalRouterMagentoDriver } from '@daffodil/external-router/driver/magento/2.4.3';

describe('@daffodil/external-router/driver/magento/2.4.3 | provideDaffExternalRouterMagentoDriver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
      providers: [
        provideDaffExternalRouterMagentoDriver(),
      ],
    });
  });

  it('should allow you to inject the driver', () => {
    expect(TestBed.inject(DaffExternalRouterDriver)).toBeTruthy();
  });
});
