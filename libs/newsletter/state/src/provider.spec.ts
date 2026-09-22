import { importProvidersFrom } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideEffects } from '@ngrx/effects';
import {
  provideStore,
  Store,
} from '@ngrx/store';

import { DaffNewsletterTestingDriverModule } from '@daffodil/newsletter/driver/testing';
import {
  DAFF_NEWSLETTER_STORE_FEATURE_KEY,
  DaffNewsletterState,
} from '@daffodil/newsletter/state';

import { provideDaffNewsletterState } from './provider';

describe('@daffodil/newsletter/state | provideDaffNewsletterState', () => {
  let store: Store<{ [DAFF_NEWSLETTER_STORE_FEATURE_KEY]: DaffNewsletterState }>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideStore(),
        provideEffects(),
        importProvidersFrom(DaffNewsletterTestingDriverModule.forRoot()),
        provideDaffNewsletterState(),
      ],
    });

    store = TestBed.inject(Store);
  });

  it('should register the newsletter feature state', () => {
    let state: DaffNewsletterState;
    store.select(DAFF_NEWSLETTER_STORE_FEATURE_KEY).subscribe((s) => state = s);

    expect(state).toBeDefined();
  });
});
