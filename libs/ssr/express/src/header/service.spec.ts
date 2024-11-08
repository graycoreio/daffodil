import { TestBed } from '@angular/core/testing';
import { Response } from 'express';

import { DAFF_SSR_EXPRESS_RESPONSE } from '@daffodil/ssr/express';

import { DaffSsrHeaderExpressService } from './service';

describe('@daffodil/ssr/express | DaffSsrHeaderExpressService', () => {
  let service: DaffSsrHeaderExpressService;
  let responseSpy: jasmine.SpyObj<Response>;

  beforeEach(() => {
    responseSpy = jasmine.createSpyObj('Response', ['appendHeader']);

    TestBed.configureTestingModule({
      providers: [
        DaffSsrHeaderExpressService,
        {
          provide: DAFF_SSR_EXPRESS_RESPONSE,
          useValue: responseSpy,
        },
      ],
    });

    service = TestBed.inject(DaffSsrHeaderExpressService);
  });

  describe('addResponseHeader', () => {
    it('should append headers to the express response', () => {
      service.addResponseHeader('name', 'value');
      expect(responseSpy.appendHeader).toHaveBeenCalledWith('name', 'value');
    });
  });
});
