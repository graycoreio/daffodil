import { Location } from '@angular/common';
import { Component } from '@angular/core';
import {
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { DAFF_CART_ROUTING_CONFIG } from '@daffodil/cart/routing';
import { DaffCartResolveState } from '@daffodil/cart/state';
import {
  DaffCartStateTestingModule,
  MockDaffCartFacade,
} from '@daffodil/cart/state/testing';

import { DaffResolvedCartGuard } from './resolved-cart.guard';

@Component({
  template: '',
  standalone: false,
})
class TestComponent {}

describe('@daffodil/cart/routing | DaffResolvedCartGuard | Integration', () => {
  let facade: MockDaffCartFacade;
  let router: Router;
  let location: Location;
  const redirectPath = 'path';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffCartStateTestingModule,
        RouterTestingModule.withRoutes([
          {
            path: '',
            component: TestComponent,
            canActivate: [DaffResolvedCartGuard],
          },
          {
            path: redirectPath,
            component: TestComponent,
          },
        ]),
      ],
      providers: [
        {
          provide: DAFF_CART_ROUTING_CONFIG,
          useValue: {
            resolution: {
              failedResolutionPath: `/${redirectPath}`,
            },
          },
        },
      ],
    });

    facade = TestBed.inject(MockDaffCartFacade);
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  });

  describe('when there is a successfully resolved cart', () => {
    beforeEach(fakeAsync(() => {
      facade.resolved$.next(DaffCartResolveState.Succeeded);
      router.initialNavigation();
      tick();
    }));

    it('should navigate to the guarded route', () => {
      expect(location.path()).toEqual('/');
    });
  });

  describe('when there is a failed cart resolution', () => {
    beforeEach(fakeAsync(() => {
      facade.resolved$.next(DaffCartResolveState.Failed);
      router.initialNavigation();
      tick();
    }));

    it('should navigate to the redirect route', () => {
      expect(location.path()).toEqual(`/${redirectPath}`);
    });
  });
});
