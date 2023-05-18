import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DaffNewsletterSubmission } from '@daffodil/newsletter';
import {
  DaffNewsletterDriver,
  DaffNewsletterServiceInterface,
} from '@daffodil/newsletter/driver';
import { DaffNewsletterHubSpotDriverModule } from '@daffodil/newsletter/driver/hubspot';

describe('DaffNewsletterHubspotDriver', () => {
  let newsletterService: DaffNewsletterServiceInterface;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        DaffNewsletterHubSpotDriverModule.forRoot({
          portalId: '123123',
          guid: '123123',
        }),
      ],
    });

    httpMock = TestBed.inject(HttpTestingController);

    newsletterService = TestBed.inject(DaffNewsletterDriver);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should provide an instance of the DaffNewsletterDriver', () => {
    expect(newsletterService).toBeTruthy();
  });
});
