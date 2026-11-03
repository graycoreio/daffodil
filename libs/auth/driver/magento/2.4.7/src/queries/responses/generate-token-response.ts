import { MagentoAuth } from '../../models/response/auth';

export interface MagentoGenerateTokenResponse {
  generateCustomerToken: MagentoAuth;
}
