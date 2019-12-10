import { TestBed } from '@angular/core/testing';
import { DaffInMemoryBackendNewsletterService } from './newsletter.service';
import { DaffNewsletterSubmission } from '@daffodil/newsletter';
import { of } from 'rxjs';

describe('DaffNewsletterInMemoryBackend', () => {
  let newsletterTestingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffInMemoryBackendNewsletterService]
    });

    newsletterTestingService = TestBed.get(DaffInMemoryBackendNewsletterService);
  });

  it('should be created', () => {
    expect(newsletterTestingService).toBeTruthy();
  });

  describe('on intializiaton', () => {
    let result;

    beforeEach(() => {
      result = newsletterTestingService.createDb();
    });

    it('should intialize empty on createDb', () => {
      expect(result.newsletters).toEqual([]);
    });

    it('should validate that its not empty', () => {
      const newsletterSubmission: DaffNewsletterSubmission = undefined;
      expect(newsletterTestingService.post(newsletterSubmission)).toEqual(Error('Payload is undefined'));
    });

    it('should validate that it doesnt already exist', () => {

      const newsletterSubmission: DaffNewsletterSubmission = { email: 'test@test.com' };
      newsletterTestingService.post(newsletterSubmission);
      expect(newsletterTestingService.post(newsletterSubmission)).toEqual(Error('Already contains submission'));
    });
    it('should not throw an error if it is in the 0th position', () => {
      const newsletterSubmission: DaffNewsletterSubmission = { email: 'test2@test.com' };
      expect(newsletterTestingService.post(newsletterSubmission)).toEqual(newsletterSubmission);
    });
  });
});
