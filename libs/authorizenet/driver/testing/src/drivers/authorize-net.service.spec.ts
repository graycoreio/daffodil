import { TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';

import { DaffTestingAuthorizeNetService } from './authorize-net.service';

describe('@daffodil/authorizenet/driver/testing | AuthorizeNetService', () => {
  let service: DaffTestingAuthorizeNetService;
  let scheduler: TestScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffTestingAuthorizeNetService,
      ],
    });

    service = TestBed.inject(DaffTestingAuthorizeNetService);

    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('generateToken', () => {
    it('should return an object and not throw an error', () => {
      scheduler.run(({ expectObservable }) => {
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
