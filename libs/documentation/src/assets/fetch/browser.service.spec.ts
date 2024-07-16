import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { DaffDocsAssetFetchBrowserService } from './browser.service';

describe('@daffodil/documentation | DaffDocsAssetFetchBrowserService', () => {
  let httpTestingController: HttpTestingController;
  let service: DaffDocsAssetFetchBrowserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        DaffDocsAssetFetchBrowserService,
      ],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DaffDocsAssetFetchBrowserService);
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
      service.fetch('path').subscribe((docsList) => {
        expect(docsList).toEqual([]);
      });
      const req = httpTestingController.expectOne('path');

      expect(req.request.method).toEqual('GET');

      req.flush([]);
    });
  });
});
