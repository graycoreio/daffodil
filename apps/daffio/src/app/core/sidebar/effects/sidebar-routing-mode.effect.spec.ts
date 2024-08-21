import {
  BreakpointObserver,
  BreakpointState,
} from '@angular/cdk/layout';
import { TestBed } from '@angular/core/testing';
import {
  RouterStateSnapshot,
  ActivatedRoute,
  ActivatedRouteSnapshot,
  EventType,
} from '@angular/router';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  ROUTER_NAVIGATED,
  RouterNavigatedAction,
  FullRouterStateSerializer,
} from '@ngrx/router-store';
import {
  hot,
  cold,
} from 'jasmine-marbles';
import { Observable } from 'rxjs';

import { DaffioSidebarRoutingModeEffects } from './sidebar-routing-mode.effects';
import { SetSidebarState } from 'apps/demo/src/app/core/sidebar/actions/sidebar.actions';

const configureStubNavigationAction = (snapshot: any): RouterNavigatedAction => ({
  type: ROUTER_NAVIGATED,
  payload: {
    routerState: {
      url: 'this-is-url',
      root: <ActivatedRouteSnapshot><unknown>snapshot,
    },
    event: {
      type: EventType.NavigationEnd,
      id: 12,
      url: '',
      urlAfterRedirects: '',
    },
  },
});

describe('Daffio | DaffioSidebarRoutingModeEffects', () => {
  let effects: DaffioSidebarRoutingModeEffects;
  let actions$: Observable<any>;
  let breakpointObserver: BreakpointObserver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffioSidebarRoutingModeEffects,
        provideMockActions(() => actions$),
        BreakpointObserver,
      ],
    });

    breakpointObserver = TestBed.inject(BreakpointObserver);
    effects = TestBed.inject(DaffioSidebarRoutingModeEffects);
  });

  describe('when a ROUTER_NAVIGATED occurs to a route with a `sidebarMode` in its tree', () => {
    const action = configureStubNavigationAction({
      data: {
        sidebarMode: 'side',
      },
    });

    describe('when the screen is below the "big tablet" breakpoint', () => {
      const state: BreakpointState = { matches: false, breakpoints: {}};

      it('should dispatch a SetSidebarState', () => {
        const expected = cold('--b', { b: new SetSidebarState({ mode: 'under', open: false }) });

        actions$ = hot( '--a', { a: action });
        spyOn(breakpointObserver, 'observe').and.returnValue(hot( '--a', { a: state }));

        expect(effects.openOrCloseSidebar$).toBeObservable(expected);
      });
    });

    describe('when the screen is above the "big tablet" breakpoint', () => {
      const state: BreakpointState = { matches: true, breakpoints: {}};

      it('should dispatch a SetSidebarMode action with the `sidebarMode` defined on the route', () => {
        const expected = cold('--b', { b: new SetSidebarState({ mode: 'side', open: false }) });

        actions$ = hot( '--a', { a: action });
        spyOn(breakpointObserver, 'observe').and.returnValue(hot( '--a', { a: state }));

        expect(effects.openOrCloseSidebar$).toBeObservable(expected);
      });
    });
  });

  describe('when a ROUTER_NAVIGATED occurs to an route without a `sidebarMode` in its tree', () => {
    const action = configureStubNavigationAction({});
    const state: BreakpointState = { matches: false, breakpoints: {}};

    it('should dispatch a ResetMode action', () => {
      const expected = cold('--b', { b: new SetSidebarState({ mode: 'under', open: false }) });

      actions$ = hot( '--a', { a: action });
      spyOn(breakpointObserver, 'observe').and.returnValue(hot( '--a', { a: state }));

      expect(effects.openOrCloseSidebar$).toBeObservable(expected);
    });
  });
});
