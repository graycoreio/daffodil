import { TestBed } from '@angular/core/testing';

import { DaffExternalRouterDriver } from '@daffodil/external-router/driver';
import { provideDaffExternalRouterInMemoryDriver } from '@daffodil/external-router/driver/in-memory';

describe('@daffodil/external-router/driver/in-memory | provideDaffExternalRouterInMemoryDriver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideDaffExternalRouterInMemoryDriver(),
      ],
    });
  });

  it('should allow you to inject the driver', () => {
    expect(TestBed.inject(DaffExternalRouterDriver)).toBeTruthy();
  });
});
