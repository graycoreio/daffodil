
import { DaffDocsApiFunction } from './function.type';
import {
  DaffDocsApiRef,
  DaffDocsApiRole,
} from '../../api/public_api';

export interface DaffApiProviderDoc extends DaffDocsApiFunction {
  role: DaffDocsApiRole.PROVIDER;
  /**
   * The token for which this is a provider.
   */
  token: DaffDocsApiRef;
}
