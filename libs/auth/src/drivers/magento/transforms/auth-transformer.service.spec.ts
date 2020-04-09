import { TestBed } from '@angular/core/testing';

import { DaffAuthToken } from '@daffodil/auth';
import { DaffAuthTokenFactory } from '@daffodil/auth/testing';

import { DaffMagentoAuthTransformerService } from './auth-transformer.service';

describe('DaffMagentoAuthTransformerService', () => {
  let service: DaffMagentoAuthTransformerService;

  const authTokenFactory = new DaffAuthTokenFactory();

  let mockAuthToken: DaffAuthToken;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoAuthTransformerService
      ]
    })

    service = TestBed.get(DaffMagentoAuthTransformerService);

    mockAuthToken = authTokenFactory.create();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform | transforming the token response into a DaffAuthToken', () => {
    let transformedAuthToken;

    beforeEach(() => {
      transformedAuthToken = service.transform(mockAuthToken);
    });

    it('should return a DaffAuthToken with the correct token field', () => {
      expect(transformedAuthToken).toEqual(mockAuthToken);
    });
  });
});
