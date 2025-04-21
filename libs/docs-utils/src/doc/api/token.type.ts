import { DaffApiConstant } from './constant.type';
import {
  DaffDocsApiRef,
  DaffDocsApiRole,
} from '../../api/public_api';

export interface DaffApiTokenDoc extends DaffApiConstant {
  role: DaffDocsApiRole.TOKEN;
  /**
   * The provider for this token.
   */
  provider: DaffDocsApiRef;
}
