import { TestBed } from '@angular/core/testing';

import { DaffExternalRouterDriver } from '@daffodil/external-router/driver';
import { provideDaffExternalRouterTestingDriver } from '@daffodil/external-router/driver/testing';

describe('@daffodil/external-router/driver/testing | provideDaffExternalRouterTestingDriver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideDaffExternalRouterTestingDriver({}),
      ],
    });
  });

  it('should allow you to inject the driver', () => {
    expect(TestBed.inject(DaffExternalRouterDriver)).toBeTruthy();
  });
});
