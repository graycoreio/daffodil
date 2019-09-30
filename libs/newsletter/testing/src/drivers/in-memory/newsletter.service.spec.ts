import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { DaffInMemoryNewsletterService } from './newsletter.service';
import { DaffNewsletterSubmission } from '@daffodil/newsletter';
import { DaffNewsletterUnion } from '@daffodil/newsletter';
import { cold } from 'jasmine-marbles';


describe('Driver | InMemory | Newsletter | NewsletterService', () => {
  let newsletterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffInMemoryNewsletterService
      ]
    });
    newsletterService = TestBed.get(DaffInMemoryNewsletterService);
  });

  it('should be created', () => {
    expect(newsletterService).toBeTruthy();
  });
  describe('send', () => {

    it('should send a submission and return an observable of the same type', () => {
      const newsletterSubmission: DaffNewsletterSubmission = { email: 'test@email.com' };

      newsletterService.send(newsletterSubmission).subscribe(submissionData => {
        expect(submissionData.email).toEqual('test@email.com');
      });
    });
    it('should send a submission an extended DaffNewsletter Submission and return an observable of the same type', () => {
      const newsletterSubmission: DaffNewsletterUnion = { email: 'test@email.com', name: 'James Arnold' };

      newsletterService.send(newsletterSubmission).subscribe(submissionData => {
        expect(submissionData.email).toEqual('test@email.com')
      });

      newsletterService.send(newsletterSubmission).subscribe(submissionData => {
        expect(submissionData.name).toEqual('James Arnold')
      });
    });


    it('should throw an error when an undefined payload is sent', () => {
      let newsletterSubmission;
      const response = cold('#', {}, 'Failed to subscribe');

      newsletterService.send(newsletterSubmission).subscribe(submissionData => {
        expect(submissionData).toEqual(response);
      });
    });
  });

});