import { importProvidersFrom } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideEffects } from '@ngrx/effects';
import {
  provideStore,
  Store,
} from '@ngrx/store';

import { DaffSearchTestingDriverModule } from '@daffodil/search/driver/testing';
import {
  DAFF_SEARCH_STATE_CONFIG,
  DAFF_SEARCH_STORE_FEATURE_KEY,
  daffSearchProvideExtraReducers,
  DaffSearchReducersState,
} from '@daffodil/search/state';

import { DaffSearchIncrementalEffects } from './effects/incremental.effects';
import { DaffSearchPageEffects } from './effects/page.effects';
import {
  provideDaffSearchIncrementalState,
  provideDaffSearchPageState,
  provideDaffSearchState,
} from './provider';

describe('@daffodil/search/state | provideDaffSearchState', () => {
  let store: Store<{ [DAFF_SEARCH_STORE_FEATURE_KEY]: DaffSearchReducersState }>;
  let extraReducer: jasmine.Spy;

  beforeEach(() => {
    extraReducer = jasmine.createSpy('extraReducer').and.callFake((state) => state);

    TestBed.configureTestingModule({
      providers: [
        provideStore(),
        provideDaffSearchState(),
        ...daffSearchProvideExtraReducers(extraReducer),
      ],
    });

    store = TestBed.inject(Store);
  });

  it('should register the search feature state', () => {
    let state: DaffSearchReducersState;
    store.select(DAFF_SEARCH_STORE_FEATURE_KEY).subscribe((s) => state = s);

    expect(state).toBeDefined();
    expect(state.search).toBeDefined();
    expect(state.incremental).toBeDefined();
  });

  it('should compose the extra reducers', () => {
    expect(extraReducer).toHaveBeenCalledWith(jasmine.anything(), jasmine.anything());
  });
});

describe('@daffodil/search/state | provideDaffSearchIncrementalState', () => {
  let store: Store<{ [DAFF_SEARCH_STORE_FEATURE_KEY]: DaffSearchReducersState }>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideStore(),
        provideEffects(),
        importProvidersFrom(DaffSearchTestingDriverModule.forRoot()),
        provideDaffSearchIncrementalState({ incrementalResultLimit: 12 }),
      ],
    });

    store = TestBed.inject(Store);
  });

  it('should register the search feature state', () => {
    let state: DaffSearchReducersState;
    store.select(DAFF_SEARCH_STORE_FEATURE_KEY).subscribe((s) => state = s);

    expect(state).toBeDefined();
  });

  it('should provide the incremental effects', () => {
    expect(TestBed.inject(DaffSearchIncrementalEffects)).toBeTruthy();
  });

  it('should provide the config', () => {
    expect(TestBed.inject(DAFF_SEARCH_STATE_CONFIG).incrementalResultLimit).toEqual(12);
  });
});

describe('@daffodil/search/state | provideDaffSearchPageState', () => {
  let store: Store<{ [DAFF_SEARCH_STORE_FEATURE_KEY]: DaffSearchReducersState }>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideStore(),
        provideEffects(),
        importProvidersFrom(DaffSearchTestingDriverModule.forRoot()),
        provideDaffSearchPageState(),
      ],
    });

    store = TestBed.inject(Store);
  });

  it('should register the search feature state', () => {
    let state: DaffSearchReducersState;
    store.select(DAFF_SEARCH_STORE_FEATURE_KEY).subscribe((s) => state = s);

    expect(state).toBeDefined();
  });

  it('should provide the page effects', () => {
    expect(TestBed.inject(DaffSearchPageEffects)).toBeTruthy();
  });
});
