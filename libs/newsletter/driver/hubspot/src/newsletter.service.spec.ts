 import { TestBed } from '@angular/core/testing';

import { DaffNewsletterHubspotService } from './newsletter.service';
import { DAFF_NEWSLETTER_HUBSPOT_FORMS_TOKEN } from './token/hubspot-forms.token';
import { DaffHubspotResponseFactory } from '@daffodil/driver/hubspot/testing';

import { DaffNewsletterHubSpotDriverModule } from '@daffodil/newsletter/driver/hubspot';
import { Observable } from "rxjs";
import { hot } from "jasmine-marbles";
import { HubspotResponse } from '@daffodil/driver/hubspot';
import { DaffNewsletterSubmission } from "@daffodil/newsletter";

describe('newsletterHubspotService', () => {
  let newsletterHubspotService: DaffNewsletterHubspotService;
  let responseFactory: DaffHubspotResponseFactory = new DaffHubspotResponseFactory();

  let sampleResponse: HubspotResponse = responseFactory.create();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffNewsletterHubSpotDriverModule.forRoot({
          portalId: '123123',
          guid: '123123',
        }),
      ],
      providers: [
        DaffNewsletterHubspotService,
        {
          provide: DAFF_NEWSLETTER_HUBSPOT_FORMS_TOKEN,
          useValue: {
            submit: (): Observable<HubspotResponse> => hot('--a', { a: sampleResponse}),
          },
        },
      ],
    });

    newsletterHubspotService = TestBed.inject(DaffNewsletterHubspotService);
  });

  it('should take a DaffNewsletterSubmission string convert a HubspotResponse to a DaffNewsletterResponse', () => {
    const newsletterSubmission: DaffNewsletterSubmission = 'test@email.com';

    newsletterHubspotService.send(newsletterSubmission).subscribe((resp) => {
      expect(resp).toEqual({ message: sampleResponse.inlineMessage});
    });
  });

  it('should take a DaffNewsletterSubmission convert a HubspotResponse to a DaffNewsletterResponse', () => {
    const newsletterSubmission: DaffNewsletterSubmission = { email: 'test@email.com' };

    newsletterHubspotService.send(newsletterSubmission).subscribe((resp) => {
      expect(resp).toEqual({ message: sampleResponse.inlineMessage});
    });
  });
});
