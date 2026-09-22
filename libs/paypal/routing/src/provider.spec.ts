import { TestBed } from '@angular/core/testing';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';

import { DaffPaypalExpressRedirectEffects } from './effects/express-redirect.effects';
import { provideDaffPaypalExpressAutoRedirect } from './provider';

describe('@daffodil/paypal/routing | provideDaffPaypalExpressAutoRedirect', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideStore(),
        provideEffects(),
        provideDaffPaypalExpressAutoRedirect(),
      ],
    });
  });

  it('should provide the express redirect effects', () => {
    expect(TestBed.inject(DaffPaypalExpressRedirectEffects)).toBeTruthy();
  });
});
