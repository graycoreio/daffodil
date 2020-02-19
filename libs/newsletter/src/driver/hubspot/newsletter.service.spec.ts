import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

import { DaffHubspotFormsService, daffHubspotFormsServiceFactory } from '@daffodil/driver/hubspot';
import { DaffNewsletterConfigToken } from './config/newsletter-config.interface';
import { DaffNewsletterHubspotService } from './newsletter.service';

describe('DaffNewsletterHubspotService', () => {
  let newsletterService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        DaffNewsletterHubspotService,
        { provide: DaffNewsletterConfigToken, useValue: { portalId: '123123', guid: '123123' } },
        {
          provide: DaffHubspotFormsService,
          useFactory: daffHubspotFormsServiceFactory,
          deps: [
            HttpClient,
            DOCUMENT,
            Router,
            Title,
            DaffNewsletterConfigToken
          ],
        }
      ]
    })
    httpMock = TestBed.get(HttpTestingController);
    newsletterService = TestBed.get(DaffNewsletterHubspotService);
  });
  afterEach(() => {
    httpMock.verify();
  });
  it('should be created', () => {
    expect(newsletterService).toBeTruthy();
  });
  describe('when sending', () => {

    it('should return an observable of HubspotResponse', () => {
      const payload = { email: 'email@email.edu' };
      newsletterService.send(payload).subscribe((resp) => {
        expect(resp).toBeObservable();
      });
      const req = httpMock.expectOne(
        `${'https://api.hsforms.com/submissions/v3/integration/submit/123123/123123'}`,
      );
      req.flush(req);
      httpMock.verify();
    });
  })
});