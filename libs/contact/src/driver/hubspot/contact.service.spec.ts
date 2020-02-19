import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import { TestBed } from '@angular/core/testing';

import { DaffHubspotFormsService } from '@daffodil/driver/hubspot';
import { DaffContactHubspotService } from './contact.service';
import { DaffContactDriver } from '../public_api';



describe('DaffContactHubspotService', () => {
  let contactService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: DaffContactDriver, useClass: DaffContactHubspotService},
        {
					provide: DaffHubspotFormsService,
          useValue: {
            submit(): Observable<any> {
              return hot('--a', { a: {test: "123"}});
            }
          }
        }
      ]
    });

    contactService = TestBed.get(DaffContactDriver);
  });
  

  it('should be created', () => {
    expect(contactService).toBeTruthy();
  });

  describe('when sending', () => {
		it('should return an observable of HubspotResponse', () => {
      const payload = { email: 'email@email.edu' };
      const expected = cold('--b', { b: { test: '123'} });
      expect(contactService.send(payload)).toBeObservable(expected);
    });
	});
});