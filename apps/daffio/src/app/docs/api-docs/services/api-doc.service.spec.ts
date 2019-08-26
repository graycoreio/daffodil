import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DaffioApiDocService } from './api-doc.service';

describe('DaffioApiDocService', () => {
  let httpTestingController: HttpTestingController;
  let service: DaffioApiDocService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        DaffioApiDocService
      ]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(DaffioApiDocService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getDocsList', () => {

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
