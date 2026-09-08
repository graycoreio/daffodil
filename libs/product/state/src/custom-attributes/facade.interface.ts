import { Observable } from 'rxjs';

import { DaffOperationStateFacadeInterface } from '@daffodil/core/state';
import { DaffProductCustomAttribute } from '@daffodil/product';

/**
 * Exposes the product custom attributes state selectors.
 */
export interface DaffProductCustomAttributesFacadeInterface extends DaffOperationStateFacadeInterface {
  /**
   * A list of all product custom attributes.
   */
  customAttributes$: Observable<DaffProductCustomAttribute[]>;
}
