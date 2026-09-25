import { TestBed } from '@angular/core/testing';

import { HubspotResponse } from '@daffodil/driver/hubspot';
import { runMarbles } from '@daffodil/jasmine';

import { DaffContactHubspotService } from './contact.service';
import { DAFF_CONTACT_HUBSPOT_FORMS_TOKEN } from './token/hubspot-forms.token';

const stubHubspotResponse: HubspotResponse = { inlineMessage: '123', errors: []};

describe('@daffodil/contact/driver/hubspot | DaffContactHubspotService', () => {
  let service: DaffContactHubspotService;
  let hubspotFormsServiceSpy: jasmine.SpyObj<{ submit: (payload: any) => any }>;

  beforeEach(() => {
    hubspotFormsServiceSpy = jasmine.createSpyObj('DaffHubspotFormsService', ['submit']);

    TestBed.configureTestingModule({
      providers: [
        {
          provide: DAFF_CONTACT_HUBSPOT_FORMS_TOKEN,
          useValue: hubspotFormsServiceSpy,
        },
      ],
    });

    service = TestBed.inject(DaffContactHubspotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('when sending', () => {
    it('should return an observable of DaffContactResponse', () => {
      const payload = { email: 'email@email.edu' };

      runMarbles(helpers => {
        hubspotFormsServiceSpy.submit.and.returnValue(helpers.hot('--a', { a: stubHubspotResponse }));
        helpers.expectObservable(service.send(payload)).toBe('--b', { b: { message: '123' }});
      });
    });
  });
});
