import { Injectable } from '@angular/core';

import { DaffAuthTransformerInterface } from '../../interfaces/auth-transformer.interface';
import { GenerateTokenResponse } from '../models/outputs/generate-token-response';
import { DaffAuthToken } from '../../../models/auth-token'

/**
 * Transforms magento auths into an object usable by daffodil.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoAuthTransformerService implements DaffAuthTransformerInterface<DaffAuthToken> {

  /**
   * Transforms the magento AuthNode from the magento auth query into a DaffAuthToken.
   * @param response the response from a magento auth query.
   */
  transform(response: GenerateTokenResponse): DaffAuthToken {
    return {
      token: response.generateCustomerToken.token
    }
  }
}
