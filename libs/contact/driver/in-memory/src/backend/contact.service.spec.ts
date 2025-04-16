import { TestBed } from '@angular/core/testing';
import { STATUS } from 'angular-in-memory-web-api';

import { DaffInMemoryBackendContactService } from './contact.service';

describe('@daffodil/contact/driver/in-memory | DaffInMemoryBackendContactService', () => {
  let service: DaffInMemoryBackendContactService;
  let reqInfoStub;
  let result;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffInMemoryBackendContactService],
    });

    service = TestBed.inject(DaffInMemoryBackendContactService);

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

  describe('on intializiaton', () => {
    beforeEach(() => {
      result = service.createDb();
    });

    it('should intialize empty on createDb', () => {
      expect(result.submissions).toEqual([]);
    });
  });

  it('should validate that its not empty', () => {
    reqInfoStub.req.body = undefined;
    result = service.post(reqInfoStub);
    expect(result.status).toEqual(STATUS.BAD_REQUEST);
    expect(result.statusText).toEqual('Payload is undefined');
  });

  it('should validate that it doesnt already exist', () => {
    reqInfoStub.req.body = { email: 'test@test.com' };
    service.post(reqInfoStub);
    result = service.post(reqInfoStub);
    expect(result.status).toEqual(STATUS.BAD_REQUEST);
    expect(result.statusText).toEqual('Already contains submission');
  });

  it('should be able to submit a valid form', () => {
    reqInfoStub.req.body = { email: 'new@test.com' };
    result = service.post(reqInfoStub);
    expect(result.status).toEqual(STATUS.OK);
    expect(result.body).toEqual({ message: 'Success!' });
  });
});
