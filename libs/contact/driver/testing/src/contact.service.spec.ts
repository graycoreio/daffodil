import { TestBed } from '@angular/core/testing';

import { runMarbles } from '@daffodil/jasmine';

import { DaffTestingContactService } from './contact.service';

describe('@daffodil/contact/driver/testing | DaffTestingContactService', () => {
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

      const payload = { email: 'email@email.edu' };
      const expected = { a: { message: 'success' }};

      const send = service.send(payload);

      runMarbles((helpers) => {
        const { expectObservable } = helpers;

        expectObservable(send).toBe('----------(a|)', expected);
      });
    });
  });
});
