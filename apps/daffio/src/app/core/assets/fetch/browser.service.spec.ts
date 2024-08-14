import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { DaffioAssetFetchBrowserService } from './browser.service';

describe('DaffioAssetFetchBrowserService', () => {
  let httpTestingController: HttpTestingController;
  let service: DaffioAssetFetchBrowserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        DaffioAssetFetchBrowserService,
      ],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DaffioAssetFetchBrowserService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('fetch', () => {
    it('should make a get request', () => {
      service.fetch('path').subscribe((docsList) => {
        expect(docsList).toEqual([]);
      });
      const req = httpTestingController.expectOne('path');

      expect(req.request.method).toEqual('GET');

      req.flush([]);
    });
  });

  it('should remove double slashes', () => {
    service.fetch('path//path').subscribe((docsList) => {
      expect(docsList).toEqual([]);
    });
    const req = httpTestingController.expectOne('path/path');

    expect(req.request.method).toEqual('GET');

    req.flush([]);
  });
});
