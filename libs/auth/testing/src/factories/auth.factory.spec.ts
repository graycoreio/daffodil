import { TestBed } from '@angular/core/testing';

import { DaffAuthToken } from '@daffodil/auth';

import { DaffAuthTokenFactory } from './auth-token.factory';

describe('Auth | Testing | Factories | DaffAuthTokenFactory', () => {
  let accountRegistrationFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffAuthTokenFactory]
    });

    accountRegistrationFactory = TestBed.get(DaffAuthTokenFactory);
  });

  it('should be created', () => {
    expect(accountRegistrationFactory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffAuthToken;

    beforeEach(() => {
      result = accountRegistrationFactory.create();
    });

    it('should return an Auth with all required fields defined', () => {
      expect(result.token).toBeDefined();
    });
  });

  describe('createMany', () => {
    let result: DaffAuthToken[];

    it('should create as many Auths as desired', () => {
      result = accountRegistrationFactory.createMany(2);
      expect(result.length).toEqual(2);

      result = accountRegistrationFactory.createMany(3);
      expect(result.length).toEqual(3);
    })
  })
});
