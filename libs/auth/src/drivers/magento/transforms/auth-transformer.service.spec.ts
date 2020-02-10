import { TestBed } from '@angular/core/testing';

import { DaffMagentoAuthTransformerService } from './auth-transformer.service';
import { DaffAuthTransformer } from '../../injection-tokens/auth-transformer.token';
import { GenerateTokenResponse } from '../models/outputs/generate-token-response';

describe('DaffMagentoAuthTransformerService', () => {
  let service: DaffMagentoAuthTransformerService;
  let mockResponse: GenerateTokenResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: DaffAuthTransformer,
          useExisting: DaffMagentoAuthTransformerService
        }
      ]
    })

    service = TestBed.get(DaffAuthTransformer);
    mockResponse = {
      generateCustomerToken: {
        token: 'sdaf87sadbnfnsd'
      }
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform | transforming the token response into a DaffAuthToken', () => {
    it('should return a DaffAuthToken with the correct token field', () => {
      const result = service.transform(mockResponse);

      expect(result.token).toEqual(mockResponse.generateCustomerToken.token);
    })
  })
});
