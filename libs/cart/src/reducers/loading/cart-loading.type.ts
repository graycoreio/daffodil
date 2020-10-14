import { DaffLoadingState } from '@daffodil/core/state';

import { DaffCartOperationType } from '../cart-operation-type.enum';

export type DaffCartLoading = {
  [K in DaffCartOperationType]: DaffLoadingState
}
