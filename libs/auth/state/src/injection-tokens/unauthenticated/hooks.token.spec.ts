import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { DaffAuthUnauthenticatedHook } from './hook.type';
import {
  daffAuthProvideUnauthenticatedHooks,
  DAFF_AUTH_UNAUTHENTICATED_HOOKS,
} from './hooks.token';

describe('@daffodil/auth/state | daffAuthProvideUnauthenticatedHooks', () => {
  let hooks: DaffAuthUnauthenticatedHook[];
  let result: DaffAuthUnauthenticatedHook[];

  beforeEach(() => {
    hooks = [
      () => of(),
      () => of(),
    ];

    TestBed.configureTestingModule({
      providers: [
        ...daffAuthProvideUnauthenticatedHooks(...hooks),
      ],
    });

    result = TestBed.inject(DAFF_AUTH_UNAUTHENTICATED_HOOKS);
  });

  it('should provide the hooks to the token', () => {
    hooks.forEach(hook => {
      expect(result).toContain(hook);
    });
  });
});
