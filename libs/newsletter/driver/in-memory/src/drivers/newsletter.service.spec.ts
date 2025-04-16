import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { InMemoryBackendConfig } from 'angular-in-memory-web-api';

import { DaffNewsletterSubmission } from '@daffodil/newsletter';

import { DaffInMemoryNewsletterService } from './newsletter.service';

describe('@daffodil/newsletter/driver/in-memory | NewsletterService', () => {
  let newsletterService: DaffInMemoryNewsletterService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        DaffInMemoryNewsletterService,
        {
          provide: InMemoryBackendConfig,
          useValue: {
            apiBase: 'api',
          },
        },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
      ],
    });
    httpMock = TestBed.inject(HttpTestingController);
    newsletterService = TestBed.inject(DaffInMemoryNewsletterService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(newsletterService).toBeTruthy();
  });

  describe('when sending', () => {
    it('should send a POST request', () => {
      const newsletterSubmission: DaffNewsletterSubmission = 'test@email.com';


      newsletterService.send(newsletterSubmission).subscribe();

      const req = httpMock.expectOne(`${newsletterService['url']}`);
      expect(req.request.method).toBe('POST');
    });

    it('should send a submission', () => {
      const newsletterSubmission: DaffNewsletterSubmission = 'test@email.com';

      newsletterService.send(newsletterSubmission).subscribe();


      const req = httpMock.expectOne(`${newsletterService['url']}`);
      expect(req.request.body).toBe(newsletterSubmission);


    });
  });
});
