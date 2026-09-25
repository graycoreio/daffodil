import { TestBed } from '@angular/core/testing';

import { runMarbles } from '@daffodil/jasmine';

import { DaffTestingAuthorizeNetService } from './authorize-net.service';

describe('@daffodil/authorizenet/driver/testing | AuthorizeNetService', () => {
  let service: DaffTestingAuthorizeNetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffTestingAuthorizeNetService,
      ],
    });

    service = TestBed.inject(DaffTestingAuthorizeNetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('generateToken', () => {
    it('should return an object and not throw an error', () => {
      runMarbles(({ expectObservable }) => {
        expectObservable(service.generateToken({
          creditCard: {
            cardnumber: '1234123412341234',
            month: 'month',
            year: 'year',
            securitycode: '123',
          },
        })).toBe('(a|)', { a: jasmine.any(Object) });
      });
    });
  });
});
