import { TestBed } from '@angular/core/testing';
import {
  cold,
  hot,
} from 'jasmine-marbles';
import { Observable } from 'rxjs';

import { DaffNewsletterHubspotService } from './newsletter.service';
import { DAFF_NEWSLETTER_HUBSPOT_FORMS_TOKEN } from './token/hubspot-forms.token';

describe('DaffNewsletterHubspotService', () => {
  let newsletterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffNewsletterHubspotService,
        {
          provide: DAFF_NEWSLETTER_HUBSPOT_FORMS_TOKEN,
          useValue: {
            submit: (): Observable<any> => hot('--a', { a: { test: '123' }}),
          },
        },
      ],
    });

    newsletterService = TestBed.inject(DaffNewsletterHubspotService);
  });

  it('should be created', () => {
    expect(newsletterService).toBeTruthy();
  });

  describe('when sending', () => {
    it('should return an observable of HubspotResponse', () => {
      const payload = { email: 'email@email.edu' };
      const expected = cold('--b', { b: { test: '123' }});

      expect(newsletterService.send(payload)).toBeObservable(expected);
    });
  });
});
