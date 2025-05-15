import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import {
  makeStateKey,
  TransferState,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { DaffioAssetFetchBrowserService } from './browser.service';

describe('DaffioAssetFetchBrowserService', () => {
  let httpTestingController: HttpTestingController;
  let service: DaffioAssetFetchBrowserService;
  let transferSpy: jasmine.SpyObj<TransferState>;
  let stateKey: string;

  beforeEach(() => {
    transferSpy = jasmine.createSpyObj('TransferState', ['hasKey', 'get']);

    TestBed.configureTestingModule({
      imports: [],
      providers: [
        DaffioAssetFetchBrowserService,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
        {
          provide: TransferState,
          useValue: transferSpy,
        },
      ],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DaffioAssetFetchBrowserService);
    stateKey = 'stateKey';
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('fetch', () => {
    it('should remove double slashes', (done) => {
      service.fetch('path//path', stateKey).subscribe((docsList) => {
        expect(docsList).toEqual([]);
        done();
      });
      const req = httpTestingController.expectOne('path/path');

      expect(req.request.method).toEqual('GET');

      req.flush([]);
    });

    describe('when the request is in transfer state', () => {
      let transferValue: Array<any>;

      beforeEach(() => {
        transferValue = [{
          test: 'test',
        }];
        transferSpy.hasKey.withArgs(makeStateKey(stateKey)).and.returnValue(true);
        transferSpy.get.withArgs(makeStateKey(stateKey), null).and.returnValue(transferValue);
      });

      it('should not make a get request and return the value from the transfer state', (done) => {
        service.fetch('path', stateKey).subscribe((docsList) => {
          expect(docsList).toEqual(transferValue);
          done();
        });
        httpTestingController.expectNone('path');
      });
    });

    describe('when the request is not in transfer state', () => {
      beforeEach(() => {
        transferSpy.hasKey.withArgs(makeStateKey(stateKey)).and.returnValue(false);
      });

      it('should make a get request', (done) => {
        service.fetch('path', stateKey).subscribe((docsList) => {
          expect(docsList).toEqual([]);
          done();
        });
        const req = httpTestingController.expectOne('path');

        expect(req.request.method).toEqual('GET');

        req.flush([]);
      });
    });
  });
});
