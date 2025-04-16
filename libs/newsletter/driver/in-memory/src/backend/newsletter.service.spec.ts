import { TestBed } from '@angular/core/testing';
import { STATUS } from 'angular-in-memory-web-api';

import { DaffInMemoryBackendNewsletterService } from './newsletter.service';

describe('@daffodil/newsletter/driver/in-memory | DaffInMemoryBackendNewsletterService', () => {
  let service: DaffInMemoryBackendNewsletterService;
  let result;
  let reqInfoStub;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffInMemoryBackendNewsletterService],
    });

    service = TestBed.inject(DaffInMemoryBackendNewsletterService);

    reqInfoStub = {
      req: {},
      utils: {
        createResponse$: f => f(),
        getJsonBody: req => req.body,
      },
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('after intializiaton', () => {
    beforeEach(() => {
      result = service.createDb();
    });

    it('should have any empty database', () => {
      expect(result.newsletters).toEqual([]);
    });
  });

  it('should validate that a submission is not empty', () => {
    reqInfoStub.req.body = undefined;
    result = service.post(reqInfoStub);
    expect(result.status).toEqual(STATUS.BAD_REQUEST);
    expect(result.statusText).toEqual('Payload is undefined');
  });

  it('should validate that a submission already exists', () => {
    reqInfoStub.req.body = { email: 'test@test.com' };
    service.post(reqInfoStub);
    result = service.post(reqInfoStub);
    expect(result.status).toEqual(STATUS.BAD_REQUEST);
    expect(result.statusText).toEqual('Already contains submission');
  });

  it('should not throw an error if it is in the 0th position', () => {
    reqInfoStub.req.body = { email: 'test2@test.com' };
    result = service.post(reqInfoStub);
    expect(result.status).toEqual(STATUS.OK);
    expect(result.body).toBeTrue();
  });
});
