import { Injectable } from '@angular/core';

import { DaffAuthTransformerInterface } from '../../interfaces/auth-transformer.interface';
import { DaffAuth } from 'libs/auth/src/models/auth';
import { GenerateTokenResponse } from '../models/outputs/generate-token-response';

/**
 * Transforms magento auths into an object usable by daffodil.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoAuthTransformerService implements DaffAuthTransformerInterface<DaffAuth> {

  /**
   * Transforms the magento AuthNode from the magento auth query into a DaffAuth.
   * @param response the response from a magento auth query.
   */
  transform(response: GenerateTokenResponse): DaffAuth {
    return {
      token: response.generateCustomerToken.token
    }
  }
}
