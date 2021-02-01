import { TestBed } from '@angular/core/testing';
import {
  cold,
  hot,
} from 'jasmine-marbles';
import { Observable } from 'rxjs';

import { DaffContactDriver } from '@daffodil/contact/driver';
import { DaffHubspotFormsService } from '@daffodil/driver/hubspot';

import { DaffContactHubspotService } from './contact.service';

describe('DaffContactHubspotService', () => {
  let contactService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: DaffContactDriver, useClass: DaffContactHubspotService },
        {
          provide: DaffHubspotFormsService,
          useValue: {
            submit: (): Observable<any> => hot('--a', { a: { test: '123' }}),
          },
        },
      ],
    });

    contactService = TestBed.inject(DaffContactDriver);
  });

  it('should be created', () => {
    expect(contactService).toBeTruthy();
  });

  describe('when sending', () => {
    it('should return an observable of HubspotResponse', () => {
      const payload = { email: 'email@email.edu' };
      const expected = cold('--b', { b: { test: '123' }});
      expect(contactService.send(payload)).toBeObservable(expected);
    });
  });
});
