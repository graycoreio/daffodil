import { Observable } from 'rxjs';

import { DaffOperationStateFacadeInterface } from '@daffodil/core/state';
import { DaffProductCustomAttribute } from '@daffodil/product';

/**
 * Exposes the product custom attributes state selectors.
 */
export interface DaffProductCustomAttributesFacadeInterface extends DaffOperationStateFacadeInterface {
  /**
   * The product custom attributes that have been loaded into state.
   */
  customAttributes$: Observable<DaffProductCustomAttribute[]>;
}
