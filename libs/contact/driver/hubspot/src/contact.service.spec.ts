import { TestBed } from '@angular/core/testing';
import {
  cold,
  hot,
} from 'jasmine-marbles';
import { Observable } from 'rxjs';

import { HubspotResponse } from '@daffodil/driver/hubspot/models/hubspot-response';

import { DaffContactHubspotService } from './contact.service';
import { DAFF_CONTACT_HUBSPOT_FORMS_TOKEN } from './token/hubspot-forms.token';

const stubHubspotResponse: HubspotResponse = { inlineMessage: '123', errors: []};

describe('DaffContactHubspotService', () => {
  let contactService: DaffContactHubspotService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: DaffContactHubspotService,
          useClass: DaffContactHubspotService,
        },
        {
          provide: DAFF_CONTACT_HUBSPOT_FORMS_TOKEN,
          useValue: {
            submit: (): Observable<any> => hot('--a', { a: stubHubspotResponse }),
          },
        },
      ],
    });

    contactService = TestBed.inject(DaffContactHubspotService);
  });

  it('should be created', () => {
    expect(contactService).toBeTruthy();
  });

  describe('when sending', () => {
    it('should return an observable of DaffContactResponse', () => {
      const payload = { email: 'email@email.edu' };
      const expected = cold('--b', { b: { message: '123' }});
      expect(contactService.send(payload)).toBeObservable(expected);
    });
  });
});
