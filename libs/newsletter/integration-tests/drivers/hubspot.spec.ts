import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DaffNewsletterSubmission } from '@daffodil/newsletter';
import {
  DaffNewsletterDriver,
  DaffNewsletterServiceInterface,
} from '@daffodil/newsletter/driver';
import { DaffNewsletterHubSpotDriverModule } from '@daffodil/newsletter/driver/hubspot';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('DaffNewsletterHubspotDriver', () => {
  let newsletterService: DaffNewsletterServiceInterface<DaffNewsletterSubmission, any>;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [RouterTestingModule,
        DaffNewsletterHubSpotDriverModule.forRoot({
            portalId: '123123',
            guid: '123123',
        })],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});

    httpMock = TestBed.inject(HttpTestingController);

    newsletterService = TestBed.inject(DaffNewsletterDriver);
  });

  it('should provide an instance of the DaffNewsletterDriver', () => {
    expect(newsletterService).toBeTruthy();
  });

  it('should allow a developer to configure and send newsletter subscription requests to the HubspotForms API', () => {
    const newsletterSubmission = { email: 'test@email.com' };
    newsletterService.send(newsletterSubmission).subscribe((resp) => {
      expect(resp).toEqual(newsletterSubmission);
    });
    const req = httpMock.expectOne('https://api.hsforms.com/submissions/v3/integration/submit/123123/123123');
    expect(req.request.body).toEqual(jasmine.objectContaining({
      fields: [Object({ name: 'email', value: 'test@email.com' })],
      context: Object({ hutk: null, pageUri: '/', pageName: jasmine.any(String) }),
    }));
    req.flush(newsletterSubmission);
    httpMock.verify();
  });
});
