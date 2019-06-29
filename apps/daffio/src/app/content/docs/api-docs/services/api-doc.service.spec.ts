import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DaffioDocService } from './api-doc.service';

describe('DaffioDocService', () => {
  let httpTestingController: HttpTestingController;
  let service: DaffioDocService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        DaffioDocService
      ]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(DaffioDocService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getDoc', () => {

    it('should make a get request', () => {
      const path = 'api/daffio/DaffioAccordionComponent';
      service.getDoc(path).subscribe((doc) => {
        expect(doc).toEqual({});
      });
      const req = httpTestingController.expectOne('/assets/daffio/' + path + '.json');

      expect(req.request.method).toEqual('GET');

      req.flush({});
    });
  });

  describe('getDocsList', () => {

    it('should make a get request', () => {
      service.getDocsList().subscribe((docsList) => {
        expect(docsList).toEqual({});
      });
      const req = httpTestingController.expectOne('/assets/daffio/api/api-list.json');

      expect(req.request.method).toEqual('GET');

      req.flush({});
    });
  });
});
