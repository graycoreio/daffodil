import { TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';

import { DaffTestingContactService } from './contact.service';

describe('The DaffTestingContactService', () => {
  let service: DaffTestingContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffTestingContactService,
      ],
    });
    service = TestBed.inject<DaffTestingContactService>(DaffTestingContactService);
  });

  it('should be created',() =>{
    expect(service).toBeTruthy();
  });

  describe('when sending', () => {
    it('should return an observable of DaffContactResponse', () => {

      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });

      const payload = { email: 'email@email.edu' };
      const expected = { a: { message: 'success' }};

      const send = service.send(payload);

      testScheduler.run((helpers) => {
        const { expectObservable } = helpers;

        expectObservable(send).toBe('----------(a|)', expected);
      });
    });
  });
});
