import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { HubspotResponse } from '@daffodil/driver/hubspot';
import { DaffHubspotResponseFactory } from '@daffodil/driver/hubspot/testing';
import { DaffNewsletterSubmission } from '@daffodil/newsletter';
import { DaffNewsletterHubSpotDriverModule } from '@daffodil/newsletter/driver/hubspot';

import { DaffNewsletterHubspotService } from './newsletter.service';
import { DAFF_NEWSLETTER_HUBSPOT_FORMS_TOKEN } from './token/hubspot-forms.token';

describe('newsletterHubspotService', () => {
  let newsletterHubspotService: DaffNewsletterHubspotService;
  const responseFactory: DaffHubspotResponseFactory = new DaffHubspotResponseFactory();

  const sampleResponse: HubspotResponse = responseFactory.create();
  let submit: () => Observable<HubspotResponse>;

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
            submit: (): Observable<HubspotResponse> => submit(),
          },
        },
      ],
    });

    newsletterHubspotService = TestBed.inject(DaffNewsletterHubspotService);
  });

  it('should take a DaffNewsletterSubmission string convert a HubspotResponse to a DaffNewsletterResponse', () => {
    const newsletterSubmission: DaffNewsletterSubmission = 'test@email.com';

    const testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
    testScheduler.run(({ hot }) => {
      submit = () => hot('--a', { a: sampleResponse });
      newsletterHubspotService.send(newsletterSubmission).subscribe((resp) => {
        expect(resp).toEqual({ message: sampleResponse.inlineMessage });
      });
    });
  });

  it('should take a DaffNewsletterSubmission convert a HubspotResponse to a DaffNewsletterResponse', () => {
    const newsletterSubmission: DaffNewsletterSubmission = 'test@email.com';

    const testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
    testScheduler.run(({ hot }) => {
      submit = () => hot('--a', { a: sampleResponse });
      newsletterHubspotService.send(newsletterSubmission).subscribe((resp) => {
        expect(resp).toEqual({ message: sampleResponse.inlineMessage });
      });
    });
  });
});
