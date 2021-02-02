import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';
import { Action } from '@ngrx/store';
import {
  hot,
  cold,
  getTestScheduler,
} from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as SidebarActions from '../actions/sidebar.actions';
import { DaffioSidebarEffects } from './sidebar.effects';

describe('Daffio | DaffioSidebarEffects', () => {
  let effects: DaffioSidebarEffects;
  let actions$: Observable<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffioSidebarEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(DaffioSidebarEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when a ROUTER_NAVIGATION occurs', () => {
    const action: Action = { type: ROUTER_NAVIGATION };
    const completion = new SidebarActions.CloseSidebar();

    it('should dispatch CloseSidebar with some delay', () => {
      const expected = cold('---b', { b: completion });

      actions$ = hot( '--a', { a: action });

      expect(effects.closeOnPageChange$(10, getTestScheduler())).toBeObservable(expected);
    });
  });
});
