import { TestBed } from '@angular/core/testing';

import {
  daffAuthProvideUnauthenticatedHooks,
  DAFF_AUTH_UNAUTHENTICATED_HOOKS,
} from './hooks.token';

describe('@daffodil/auth/state | daffAuthProvideUnauthenticatedHooks', () => {
  let hooks: (() => void)[];
  let result: (() => void)[];

  beforeEach(() => {
    hooks = [
      () => {},
      () => {},
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
