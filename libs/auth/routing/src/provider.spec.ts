import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';

import { DAFF_AUTH_ROUTING_CONFIG } from '@daffodil/auth/routing';
import { DAFF_AUTH_UNAUTHENTICATED_HOOKS } from '@daffodil/auth/state';

import { DaffAuthRedirectEffects } from './effects/redirect.effects';
import {
  provideDaffAuthRouting,
  provideDaffAuthRoutingRedirect,
} from './provider';

describe('@daffodil/auth/routing | provideDaffAuthRouting', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter([]),
        provideDaffAuthRouting({ logoutRedirectPath: '/logout' }),
      ],
    });
  });

  it('should merge the passed config with the default', () => {
    expect(TestBed.inject(DAFF_AUTH_ROUTING_CONFIG).logoutRedirectPath).toEqual('/logout');
    expect(TestBed.inject(DAFF_AUTH_ROUTING_CONFIG).redirectUrlParam).toEqual('redirect');
  });
});

describe('@daffodil/auth/routing | provideDaffAuthRoutingRedirect', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter([]),
        provideStore(),
        provideEffects(),
        provideDaffAuthRoutingRedirect(),
      ],
    });
  });

  it('should provide the redirect effects', () => {
    expect(TestBed.inject(DaffAuthRedirectEffects)).toBeTruthy();
  });

  it('should provide the unauthenticated hook', () => {
    expect(TestBed.inject(DAFF_AUTH_UNAUTHENTICATED_HOOKS).length).toEqual(1);
  });
});
