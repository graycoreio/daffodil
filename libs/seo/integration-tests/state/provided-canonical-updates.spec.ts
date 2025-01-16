/* eslint-disable no-restricted-globals */
import { DOCUMENT } from '@angular/common';
import {
  Injectable,
  Component,
} from '@angular/core';
import {
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  RouterModule,
  Router,
} from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import {
  Action,
  StoreModule,
  Store,
} from '@ngrx/store';
import {
  Observable,
  of,
} from 'rxjs';
import { tap } from 'rxjs/operators';

import {
  DaffSeoStateModule,
  provideDaffCanonicalUrlUpdates,
} from '@daffodil/seo/state';

class ActionFromFeature1 implements Action {
  type = 'ActionFromFeature1';

  constructor(
    public url1: string,
  ) {}
}

class ActionFromFeature2 implements Action {
  type = 'ActionFromFeature2';

  constructor(
    public url2: string,
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class ResolverFromFeature1  {
  constructor(
    private store: Store<any>,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return of(true).pipe(
      tap(() => this.store.dispatch(
        new ActionFromFeature1('url1'),
      )),
    );
  }
}

@Injectable({
  providedIn: 'root',
})
export class ResolverFromFeature2  {
  constructor(
    private store: Store<any>,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return of(true).pipe(
      tap(() => this.store.dispatch(
        new ActionFromFeature2('url2'),
      )),
    );
  }
}

@Injectable({
  providedIn: 'root',
})
export class FailGuard  {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return of(false);
  }
}

@Component({
  template: '',
  standalone: false,
})
class MockComponent {}

describe('@daffodil/seo/state | Providing Custom Behavior for Canonical URL Updates', () => {
  let router: Router;
  let browserUrl: string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        EffectsModule.forRoot(),
        StoreRouterConnectingModule.forRoot(),
        RouterModule.forRoot([
          {
            path: '',
            component: MockComponent,
          },
          {
            path: 'feature1',
            component: MockComponent,
            resolve: {
              test: ResolverFromFeature1,
            },
          },
          {
            path: 'feature2',
            component: MockComponent,
            resolve: {
              test: ResolverFromFeature2,
            },
          },
          {
            path: 'fail',
            component: MockComponent,
            canActivate: [FailGuard],
          },
          {
            path: 'nourl',
            component: MockComponent,
          },
        ], {}),
        DaffSeoStateModule,
      ],
      providers: [
        ...provideDaffCanonicalUrlUpdates<ActionFromFeature1>(
          {
            action: 'ActionFromFeature1',
            getData: (action: ActionFromFeature1) => `${action.url1}custom1`,
          },
        ),
        ...provideDaffCanonicalUrlUpdates<ActionFromFeature2>(
          {
            action: 'ActionFromFeature2',
            getData: (action: ActionFromFeature2) => `${action.url2}custom2`,
          },
        ),
      ],
    });

    router = TestBed.inject(Router);
  });

  beforeAll(() => {
    // save the browser URL so we can revert to it after the test
    browserUrl = window.location.href;
  });

  afterAll(() => {
    window.history.pushState('', '', browserUrl);
  });

  afterEach(() => {
    document.head.querySelectorAll('link[rel="canonical"]').forEach(el => {
      document.head.removeChild(el);
    });
  });

  describe('when the app is navigated to feature1', () => {
    beforeEach(fakeAsync(() => {
      router.navigateByUrl('feature1');
      tick();
    }));

    it('should set the canonical URL associated with feature1', () => {
      const doc = TestBed.inject(DOCUMENT);
      expect((<HTMLLinkElement>doc.head.querySelector('link[rel="canonical"]')).href).toContain('url1custom1');
    });

    describe('and then navigated to feature2', () => {
      beforeEach(fakeAsync(() => {
        router.navigateByUrl('feature2');
        tick();
      }));

      it('should set the canonical URL associated with feature2', () => {
        const doc = TestBed.inject(DOCUMENT);
        expect((<HTMLLinkElement>doc.head.querySelector('link[rel="canonical"]')).href).toContain('url2custom2');
      });
    });

    describe('and then navigated to the fail page', () => {
      beforeEach(fakeAsync(() => {
        router.navigateByUrl('fail');
        tick();
      }));

      it('should set the canonical URL associated with feature1', () => {
        const doc = TestBed.inject(DOCUMENT);
        expect((<HTMLLinkElement>doc.head.querySelector('link[rel="canonical"]')).href).toContain('url1custom1');
      });
    });

    describe('and then navigated to a page without an associated canonical URL', () => {
      beforeEach(fakeAsync(() => {
        router.navigateByUrl('nourl');
        tick();
      }));

      it('should remove the canonical URL', () => {
        const doc = TestBed.inject(DOCUMENT);
        expect((<HTMLLinkElement>doc.head.querySelector('link[rel="canonical"]'))).toBeFalsy();
      });

      describe('and then navigated to the fail page', () => {
        beforeEach(fakeAsync(() => {
          router.navigateByUrl('fail');
          tick();
        }));

        it('should not add a canonical URL', () => {
          const doc = TestBed.inject(DOCUMENT);
          expect((<HTMLLinkElement>doc.head.querySelector('link[rel="canonical"]'))).toBeFalsy();
        });
      });
    });
  });
});
