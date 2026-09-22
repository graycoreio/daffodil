import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideEffects } from '@ngrx/effects';
import {
  provideStore,
  Store,
} from '@ngrx/store';

import { DaffAuthTestingDriverModule } from '@daffodil/auth/driver/testing';
import {
  DAFF_AUTH_STATE_CONFIG,
  DAFF_AUTH_STORE_FEATURE_KEY,
  DAFF_AUTH_UNAUTHENTICATED_HOOKS,
  daffAuthProvideExtraReducers,
  DaffAuthFeatureState,
} from '@daffodil/auth/state';

import { provideDaffAuthState } from './provider';

describe('@daffodil/auth/state | provideDaffAuthState', () => {
  let store: Store<{ [DAFF_AUTH_STORE_FEATURE_KEY]: DaffAuthFeatureState }>;
  let extraReducer: jasmine.Spy;

  beforeEach(() => {
    extraReducer = jasmine.createSpy('extraReducer').and.callFake((state) => state);

    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideStore(),
        provideEffects(),
        importProvidersFrom(DaffAuthTestingDriverModule.forRoot()),
        provideDaffAuthState({ checkInterval: 5 }),
        ...daffAuthProvideExtraReducers(extraReducer),
      ],
    });

    store = TestBed.inject(Store);
  });

  it('should register the auth feature state', () => {
    let state: DaffAuthFeatureState;
    store.select(DAFF_AUTH_STORE_FEATURE_KEY).subscribe((s) => state = s);

    expect(state).toBeDefined();
    expect(state.auth).toBeDefined();
  });

  it('should compose the extra reducers', () => {
    expect(extraReducer).toHaveBeenCalledWith(jasmine.anything(), jasmine.anything());
  });

  it('should provide the unauthenticated hook', () => {
    expect(TestBed.inject(DAFF_AUTH_UNAUTHENTICATED_HOOKS).length).toBeGreaterThan(0);
  });

  it('should merge the passed config with the default', () => {
    expect(TestBed.inject(DAFF_AUTH_STATE_CONFIG).checkInterval).toEqual(5);
  });
});
