import { TestBed } from '@angular/core/testing';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';

import { DaffSeoCanonicalUrlEffects } from './effects/ngrx-router/canonical.effects';
import { DaffSeoMetaEffects } from './effects/ngrx-router/meta.effects';
import { DaffSeoTitleEffects } from './effects/ngrx-router/title.effects';
import { provideDaffSeoState } from './provider';

const expectSeoEffectsToBeProvided = () => {
  expect(TestBed.inject(DaffSeoTitleEffects)).toBeTruthy();
  expect(TestBed.inject(DaffSeoMetaEffects)).toBeTruthy();
  expect(TestBed.inject(DaffSeoCanonicalUrlEffects)).toBeTruthy();
};

describe('provideDaffSeoState', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideStore(),
        provideEffects(),
        provideDaffSeoState(),
      ],
    });
  });

  it('should provide all SEO effects', () => {
    expectSeoEffectsToBeProvided();
  });
});
