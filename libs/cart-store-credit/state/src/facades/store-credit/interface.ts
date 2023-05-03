import { DaffOperationStateFacadeInterface } from '@daffodil/core/state';

import { DaffCartStoreCreditReducerState } from '../../reducers/public_api';
/**
 * Exposes the cart store credit state selectors.
 */
export type DaffCartStoreCreditPageFacadeInterface = DaffOperationStateFacadeInterface<DaffCartStoreCreditReducerState>;
