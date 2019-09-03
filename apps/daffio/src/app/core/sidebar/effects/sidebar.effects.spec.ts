import { TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { Action } from '@ngrx/store';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';
import { provideMockActions } from '@ngrx/effects/testing';
import { Actions } from '@ngrx/effects';

import { hot, cold, getTestScheduler } from 'jasmine-marbles';

import { DaffioSidebarEffects } from './sidebar.effects';
import * as SidebarActions from '../actions/sidebar.actions';

describe('Daffio | DaffioSidebarEffects', () => {
  let effects: DaffioSidebarEffects;
  let actions$: Observable<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffioSidebarEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(DaffioSidebarEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when a ROUTER_NAVIGATION occurs', () => {
    const action: Action = { type: ROUTER_NAVIGATION};
    const completion = new SidebarActions.CloseSidebar();

    it('should dispatch CloseSidebar with some delay', () => {
        let expected; 

        actions$ = hot( '--a', { a: action });
        expected = cold('---b', { b: completion });

        expect(effects.closeOnPageChange$(10, getTestScheduler())).toBeObservable(expected);
    });
  });
});
