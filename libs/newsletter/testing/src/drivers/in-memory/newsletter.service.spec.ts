import { TestBed } from '@angular/core/testing';

import { DaffInMemoryNewsletterService } from './newsletter.service';
import { DaffNewsletterSubmission } from '@daffodil/newsletter';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('Driver | InMemory | Newsletter | NewsletterService', () => {
  let newsletterService: DaffInMemoryNewsletterService;
  let httpMock: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        DaffInMemoryNewsletterService
      ]
    });
    httpMock = TestBed.get(HttpTestingController);
    newsletterService = TestBed.get<DaffInMemoryNewsletterService>(DaffInMemoryNewsletterService);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(newsletterService).toBeTruthy();
  });
  describe('when sending', () => {
    it('should send a POST request', () => {
      const newsletterSubmission: DaffNewsletterSubmission = { email: 'test@email.com' };


      newsletterService.send(newsletterSubmission).subscribe();

      const req = httpMock.expectOne(`${newsletterService.url}`);
      expect(req.request.method).toBe('POST');
    });

    it('should send a submission', () => {
      const newsletterSubmission: DaffNewsletterSubmission = { email: 'test@email.com' };

      newsletterService.send(newsletterSubmission).subscribe();


      const req = httpMock.expectOne(`${newsletterService.url}`);
      expect(req.request.body).toBe(newsletterSubmission);


    });

    it('should send a submission that extends the DaffNewsletterSubmission', () => {
      const newsletterSubmission = { email: 'test@email.com', name: 'James Arnold' };

      newsletterService.send(newsletterSubmission).subscribe();

      const req = httpMock.expectOne(`${newsletterService.url}`);
      expect(req.request.body).toBe(newsletterSubmission);

    });

  });

});