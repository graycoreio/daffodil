import { TestBed } from '@angular/core/testing';
import { DaffInMemoryBackendNewsletterService } from './newsletter.service';
import { DaffNewsletterSubmission } from '@daffodil/newsletter';

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

  describe('after intializiaton', () => {
    let result;

    beforeEach(() => {
      result = newsletterTestingService.createDb();
    });

    it('should have any empty database', () => {
      expect(result.newsletters).toEqual([]);
    });
  });

  it('should validate that a submission is not empty', () => {
    const newsletterSubmission: DaffNewsletterSubmission = undefined;
    expect(newsletterTestingService.post(newsletterSubmission)).toEqual(Error('Payload is undefined'));
  });

  it('should validate that a submission already exists', () => {

    const newsletterSubmission: DaffNewsletterSubmission = { email: 'test@test.com' };
    newsletterTestingService.post(newsletterSubmission);
    expect(newsletterTestingService.post(newsletterSubmission)).toEqual(Error('Already contains submission'));
  });
  it('should not throw an error if it is in the 0th position', () => {
    const newsletterSubmission: DaffNewsletterSubmission = { email: 'test2@test.com' };
    expect(newsletterTestingService.post(newsletterSubmission)).toEqual(newsletterSubmission);
  });
});
