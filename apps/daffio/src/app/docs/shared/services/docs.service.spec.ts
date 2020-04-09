import { TestBed } from '@angular/core/testing';

import { DaffioDocService } from './docs.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DaffioDocFactory } from '../../testing/factories/doc.factory';
import { DaffioDoc } from '../models/doc';
import { DaffioGuideList } from '../models/guide-list';
import { mockGuides } from '../../testing/factories/guide-list.factory';

describe('DaffioDocService', () => {
  let service: DaffioDocService<DaffioDoc, DaffioGuideList>;
  let httpTestingController: HttpTestingController;
  const doc = new DaffioDocFactory().create();
  const mockGuideList = mockGuides;

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
    service.get('my/path').subscribe((apiDoc) => {
      expect(apiDoc).toEqual(doc);
    });
    const req = httpTestingController.expectOne('/assets/daffio/my/path.json');

    expect(req.request.method).toEqual('GET');

    req.flush(doc);
  });
  it('should be able to retrieve a guide list', () => {
    service.getGuideList().subscribe((guides) => {
      expect(guides).toEqual(mockGuideList);
    });
    const req = httpTestingController.expectOne('/assets/daffio/docs/guides/guide-list.json');

    expect(req.request.method).toEqual('GET');

    req.flush(mockGuideList);
  });
});
