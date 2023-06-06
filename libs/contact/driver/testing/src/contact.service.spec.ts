import { TestBed } from '@angular/core/testing';

import { DaffTestingContactService } from './contact.service';
import { TestScheduler } from "rxjs/internal/testing/TestScheduler";

describe('The DaffTestingContactService', () => {
  let contactService: DaffTestingContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffTestingContactService,
      ],
    });
    contactService = TestBed.inject<DaffTestingContactService>(DaffTestingContactService);
  });

  it('should be created',() =>{
    expect(contactService).toBeTruthy();
  });

  describe('when sending', () => {
    it('should return an observable of DaffContactResponse', () => {

      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });

      const payload = { email: 'email@email.edu' };
      const expected = {a: { message: 'success' }};

      const send = contactService.send(payload);

      testScheduler.run((helpers) => {
        const { expectObservable } = helpers;

        expectObservable(send).toBe('----------(a|)', expected);
      });
    });
  });
});
