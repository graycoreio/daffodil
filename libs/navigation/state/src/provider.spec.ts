import { importProvidersFrom } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideEffects } from '@ngrx/effects';
import {
  provideStore,
  Store,
} from '@ngrx/store';

import { DaffNavigationTree } from '@daffodil/navigation';
import { DaffNavigationTestingDriverModule } from '@daffodil/navigation/driver/testing';
import {
  DAFF_NAVIGATION_STORE_FEATURE_KEY,
  DaffNavigationReducersState,
  DaffNavigationStateRootSlice,
} from '@daffodil/navigation/state';

import { DaffNavigationEffects } from './effects/navigation.effects';
import { provideDaffNavigationState } from './provider';

describe('@daffodil/navigation/state | provideDaffNavigationState', () => {
  let store: Store<DaffNavigationStateRootSlice<DaffNavigationTree>>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideStore(),
        provideEffects(),
        importProvidersFrom(DaffNavigationTestingDriverModule.forRoot()),
        provideDaffNavigationState(),
      ],
    });

    store = TestBed.inject(Store);
  });

  it('should register the navigation feature state', () => {
    let state: DaffNavigationReducersState<DaffNavigationTree>;
    store.select(DAFF_NAVIGATION_STORE_FEATURE_KEY).subscribe((s) => state = s);

    expect(state).toBeDefined();
    expect(state.navigation).toBeDefined();
  });

  it('should provide the navigation effects', () => {
    expect(TestBed.inject(DaffNavigationEffects)).toBeTruthy();
  });
});
