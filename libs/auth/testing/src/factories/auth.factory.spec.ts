import { TestBed } from '@angular/core/testing';

import { DaffAuth } from '@daffodil/auth';

import { DaffAuthFactory } from './auth.factory';

describe('Auth | Testing | Factories | DaffAuthFactory', () => {
  let accountRegistrationFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffAuthFactory]
    });

    accountRegistrationFactory = TestBed.get(DaffAuthFactory);
  });

  it('should be created', () => {
    expect(accountRegistrationFactory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffAuth;

    beforeEach(() => {
      result = accountRegistrationFactory.create();
    });

    it('should return an Auth with all required fields defined', () => {
      expect(result.token).toBeDefined();
    });
  });

  describe('createMany', () => {
    let result: DaffAuth[];

    it('should create as many Auths as desired', () => {
      result = accountRegistrationFactory.createMany(2);
      expect(result.length).toEqual(2);

      result = accountRegistrationFactory.createMany(3);
      expect(result.length).toEqual(3);
    })
  })
});
