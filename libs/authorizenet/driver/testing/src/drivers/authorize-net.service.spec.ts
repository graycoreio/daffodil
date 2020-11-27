import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';

import { DaffTestingAuthorizeNetService } from './authorize-net.service';

describe('Driver | Testing | AuthorizeNet | AuthorizeNetService', () => {
  let service: DaffTestingAuthorizeNetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffTestingAuthorizeNetService
      ]
    });

    service = TestBed.get(DaffTestingAuthorizeNetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('generateToken', () => {
    it('should return an object and not throw an error', () => {
      const expected = cold('(a|)', {a: jasmine.any(Object)});
      expect(service.generateToken({
				creditCard: {
					cardnumber: '1234123412341234',
					month: 'month',
					year: 'year',
					securitycode: '123'
				}
			})).toBeObservable(expected);
    });
  });
});
