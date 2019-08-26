import { TestBed } from '@angular/core/testing';

import { DaffioDocService } from './docs.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DaffioDocFactory } from '../../testing/factories/doc.factory';
import { DaffioDoc } from '../models/doc';

describe('DaffioDocService', () => {
  let service: DaffioDocService<DaffioDoc>;
  let httpTestingController: HttpTestingController;
  const doc = new DaffioDocFactory().create();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })

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

  it('should be able to retrieve a doc', () => {
    service.get("my/path").subscribe((apiDoc) => {
      expect(apiDoc).toEqual(doc);
    });
    const req = httpTestingController.expectOne('/assets/daffio/my/path.json');

    expect(req.request.method).toEqual('GET');

    req.flush(doc);
  });
});
