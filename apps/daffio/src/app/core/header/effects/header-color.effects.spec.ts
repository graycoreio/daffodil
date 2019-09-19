import { TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { Action } from '@ngrx/store';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';
import { provideMockActions } from '@ngrx/effects/testing';

import { hot, cold, getTestScheduler } from 'jasmine-marbles';
import { DaffioHeaderColorEffects } from './header-color.effects';

describe('Daffio | DaffioHeaderColorEffects', () => {
  let effects: DaffioHeaderColorEffects;
  let actions$: Observable<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffioHeaderColorEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(DaffioHeaderColorEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
