import { TestBed } from '@angular/core/testing';

import { DaffContactRequest } from '@daffodil/contact/driver';

import { DaffInMemoryBackendContactService } from './contact-in-memory-backend.service';

describe('DaffContactInMemoryBackend', () => {
  let contactTestingService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffInMemoryBackendContactService],
    });
    contactTestingService = TestBed.inject(DaffInMemoryBackendContactService);
  });

  it('should be created', () => {
    expect(contactTestingService).toBeTruthy();
  });

  describe('on intializiaton', () => {
    let result;

    beforeEach(() => {
      result = contactTestingService.createDb();
    });

    it('should intialize empty on createDb', () => {
      expect(result.submissions).toEqual([]);
    });

    it('should validate that its not empty', () => {
      const submission: DaffContactRequest = undefined;
      expect(contactTestingService.post(submission)).toEqual(Error('Payload is undefined'));
    });

    it('should validate that it doesnt already exist', () => {
      const forumSubmission: DaffContactRequest = { email: 'test@test.com' };
      contactTestingService.post(forumSubmission);
      expect(contactTestingService.post(forumSubmission)).toEqual(Error('Already contains submission'));
    });

    it('should be able to submit a valid form', () => {
      const forumSubmission: DaffContactRequest = { email: 'new@test.com' };
      contactTestingService.post(forumSubmission).subscribe((resp) => {
        expect(resp).toEqual({ message: 'Success!' });
      });
    });
  });
});
