
import { DaffApiDocBase } from './base.type';
import { DaffDocsApiFunction } from './function.type';
import {
  DaffDocsApiRef,
  DaffDocsApiRole,
} from '../../api/public_api';

export interface DaffApiProviderDoc extends DaffDocsApiFunction, DaffApiDocBase {
  role: DaffDocsApiRole.PROVIDER;
  /**
   * The token for which this is a provider.
   */
  token: DaffDocsApiRef;
}
