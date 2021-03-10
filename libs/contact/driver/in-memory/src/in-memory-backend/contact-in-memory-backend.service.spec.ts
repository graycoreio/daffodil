import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { DaffContactUnion } from '@daffodil/contact';

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
      expect(result.forums).toEqual([]);
    });

    it('should validate that its not empty', () => {
      const forumSubmission: DaffContactUnion = undefined;
      expect(contactTestingService.post(forumSubmission)).toEqual(Error('Payload is undefined'));
    });

    it('should validate that it doesnt already exist', () => {

      const forumSubmission: DaffContactUnion = { email: 'test@test.com' };
      contactTestingService.post(forumSubmission);
      expect(contactTestingService.post(forumSubmission)).toEqual(Error('Already contains submission'));
    });

    it('should be able to submit a valid form', () => {
      const forumSubmission: DaffContactUnion = { email: 'new@test.com' };
      contactTestingService.post(forumSubmission).subscribe((resp) => {
        expect(resp).toEqual(forumSubmission);
      });
    });
  });
});
