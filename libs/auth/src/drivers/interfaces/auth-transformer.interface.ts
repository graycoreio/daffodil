import { DaffAuthToken } from '../../models/auth-token';

/**
 * An interface that must be implemented by auth transformer services; e.g. a service that transforms a magento auth into a DaffAuthToken.
 */
export interface DaffAuthTransformerInterface<T extends DaffAuthToken> {
  /**
   * Transform a single auth into a kind of DaffAuthToken.
   */
  transform(auth: any): T;
}
