import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { DaffInMemoryNewsletterService } from './newsletter.service';
import { DaffNewsletterSubmission } from '@daffodil/newsletter';


describe('Driver | InMemory | Newsletter | NewsletterService', () =>{
  let newsletterService;
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
    newsletterService = TestBed.get(DaffInMemoryNewsletterService);
  });
  afterEach(()=> {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(newsletterService).toBeTruthy();
  });

  describe('send', () =>{ 

    it('should send a submission and return an observable of the same type', () => {
      const newsletterSubmission: DaffNewsletterSubmission = {email : 'test@email.com'};

      const url = 'api/submissions/1'
      newsletterService.send(newsletterSubmission).subscribe(submissionData => {
        expect(submissionData.email).toEqual('test@email.com'); });


      const req = httpMock.expectOne(`${newsletterService.url}submission`);

      expect(req.request.method).toEqual('POST');
  
      req.flush(newsletterSubmission);
      });
    });
});