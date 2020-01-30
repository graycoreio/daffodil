import { DaffAuth } from '../../models/auth';

/**
 * An interface that must be implemented by auth transformer services; e.g. a service that transforms a magento auth into a DaffAuth.
 */
export interface DaffAuthTransformerInterface<T extends DaffAuth> {
  /**
   * Transform a single auth into a kind of DaffAuth.
   */
  transform(auth: any): T;
}
