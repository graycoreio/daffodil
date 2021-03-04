import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { DaffContactUnion } from '@daffodil/contact';

import { DaffInMemoryContactService } from './contact.service';

describe('The DaffInMemoryContactService', () => {
  let contactService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        DaffInMemoryContactService,
      ],
    });
    httpMock = TestBed.inject(HttpTestingController);
    contactService = TestBed.inject<DaffInMemoryContactService>(DaffInMemoryContactService);
  });
  afterEach(() => {
    httpMock.verify();
  });
  it('should be created',() =>{
    expect(contactService).toBeTruthy();
  });
  describe('on send', () => {
    it('should send a submission and return an observable of the same type', () => {
      const forumSubmission= { email: 'test@email.com' };
      contactService.send(forumSubmission).subscribe();
      const req = httpMock.expectOne(`${contactService.url}`);
      expect(req.request.body).toBe(forumSubmission);
    });
    it('should send a DaffContactUnion object with multiple values', () => {
      const forumSubmission: DaffContactUnion= { firstName: 'John', lastName:'Doe', email: 'test@email.com' };
      contactService.send(forumSubmission).subscribe();
      const req = httpMock.expectOne(`${contactService.url}`);
      expect(req.request.body).toBe(forumSubmission);

    });
  });
});
