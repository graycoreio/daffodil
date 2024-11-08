import { TestBed } from '@angular/core/testing';

import {
  DAFF_SSR_HEADER_SERVICE,
  DaffSsrHeaderService,
  DaffSsrHeadersLinkPreloadAssetKind,
  DaffSsrHeadersLinkPreloadAssetPriority,
} from '@daffodil/ssr';

import { DaffSsrHeaderLinkAssetPreloader } from './service';

describe('@daffodil/ssr | DaffSsrHeaderLinkAssetPreloader', () => {
  let headerServiceSpy: jasmine.SpyObj<DaffSsrHeaderService>;
  let service: DaffSsrHeaderLinkAssetPreloader;

  beforeEach(() => {
    headerServiceSpy = jasmine.createSpyObj('DaffSsrHeaderService', ['addResponseHeader']);

    TestBed.configureTestingModule({
      providers: [
        {
          provide: DAFF_SSR_HEADER_SERVICE,
          useValue: headerServiceSpy,
        },
      ],
    });

    service = TestBed.inject(DaffSsrHeaderLinkAssetPreloader);
  });

  describe('addHeader', () => {
    it('should add the response headers', () => {
      service.addHeader(
        'uri',
        DaffSsrHeadersLinkPreloadAssetKind.IMAGE,
        DaffSsrHeadersLinkPreloadAssetPriority.HIGH,
      );
      expect(headerServiceSpy.addResponseHeader).toHaveBeenCalledWith('Link', jasmine.stringMatching('<uri>'));
      expect(headerServiceSpy.addResponseHeader).toHaveBeenCalledWith('Link', jasmine.stringMatching('as=image'));
      expect(headerServiceSpy.addResponseHeader).toHaveBeenCalledWith('Link', jasmine.stringMatching('fetchpriority=high'));
    });
  });
});
