import { TestBed } from '@angular/core/testing';

import {
  DAFF_SSR_RESPONSE,
  DaffSsrResponse,
  DaffSsrHeadersLinkPreloadAssetKind,
  DaffSsrHeadersLinkPreloadAssetPriority,
} from '@daffodil/ssr';

import { DaffSsrHeaderLinkAssetPreloader } from './service';

describe('@daffodil/ssr | DaffSsrHeaderLinkAssetPreloader', () => {
  let headerServiceSpy: jasmine.SpyObj<DaffSsrResponse>;
  let service: DaffSsrHeaderLinkAssetPreloader;

  beforeEach(() => {
    headerServiceSpy = jasmine.createSpyObj('DaffSsrResponse', ['append']);

    TestBed.configureTestingModule({
      providers: [
        {
          provide: DAFF_SSR_RESPONSE,
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
      expect(headerServiceSpy.append).toHaveBeenCalledWith('Link', jasmine.stringMatching('<uri>'));
      expect(headerServiceSpy.append).toHaveBeenCalledWith('Link', jasmine.stringMatching('as=image'));
      expect(headerServiceSpy.append).toHaveBeenCalledWith('Link', jasmine.stringMatching('fetchpriority=high'));
    });
  });
});
