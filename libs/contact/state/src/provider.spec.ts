import { importProvidersFrom } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideEffects } from '@ngrx/effects';
import {
  provideStore,
  Store,
} from '@ngrx/store';

import { DaffContactTestingDriverModule } from '@daffodil/contact/driver/testing';
import {
  DAFF_CONTACT_STORE_FEATURE_KEY,
  DaffContactState,
} from '@daffodil/contact/state';

import { provideDaffContactState } from './provider';

describe('@daffodil/contact/state | provideDaffContactState', () => {
  let store: Store<{ [DAFF_CONTACT_STORE_FEATURE_KEY]: DaffContactState }>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideStore(),
        provideEffects(),
        importProvidersFrom(DaffContactTestingDriverModule.forRoot()),
        provideDaffContactState(),
      ],
    });

    store = TestBed.inject(Store);
  });

  it('should register the contact feature state', () => {
    let state: DaffContactState;
    store.select(DAFF_CONTACT_STORE_FEATURE_KEY).subscribe((s) => state = s);

    expect(state).toBeDefined();
  });
});
