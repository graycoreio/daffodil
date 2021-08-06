import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { DaffioApiService } from './api.service';

describe('DaffioApiService', () => {
  let httpTestingController: HttpTestingController;
  let service: DaffioApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        DaffioApiService,
      ],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DaffioApiService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getApiList', () => {

    it('should make a get request', () => {
      service.list().subscribe((docsList) => {
        expect(docsList).toEqual([]);
      });
      const req = httpTestingController.expectOne('/assets/daffio/docs/api/api-list.json');

      expect(req.request.method).toEqual('GET');

      req.flush([]);
    });
  });
});
