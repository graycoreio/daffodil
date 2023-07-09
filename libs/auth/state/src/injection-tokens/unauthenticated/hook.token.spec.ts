import { TestBed } from '@angular/core/testing';

import { daffAuthProvideUnauthenticatedHooks } from '@daffodil/auth/state';

import { DAFF_AUTH_UNAUTHENTICATED_HOOK } from './hook.token';

describe('@daffodil/auth/state | DAFF_AUTH_UNAUTHENTICATED_HOOK', () => {
  let spy1: jasmine.Spy;
  let spy2: jasmine.Spy;
  let result: () => void;

  beforeEach(() => {
    spy1 = jasmine.createSpy();
    spy2 = jasmine.createSpy();

    TestBed.configureTestingModule({
      providers: [
        ...daffAuthProvideUnauthenticatedHooks(
          spy1,
          spy2,
        ),
      ],
    });

    result = TestBed.inject(DAFF_AUTH_UNAUTHENTICATED_HOOK);
  });

  it('should provide a function that calls all the hooks', () => {
    result();
    expect(spy1).toHaveBeenCalledWith();
    expect(spy2).toHaveBeenCalledWith();
  });
});
