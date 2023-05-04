import { DaffOperationState } from '@daffodil/core/state';
import { DaffCustomerStoreCredit } from '@daffodil/customer-store-credit';

/**
 * The customer store credit state.
 */
export interface DaffCustomerStoreCreditReducerState<TStoreCredit extends DaffCustomerStoreCredit = DaffCustomerStoreCredit> extends DaffOperationState {
  storeCredit: TStoreCredit;
};
