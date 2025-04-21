import { DaffDocsApiClass } from './class.type';
import { DaffDocsApiRole } from '../../api/public_api';

export interface DaffApiErrorDoc extends DaffDocsApiClass {
  role: DaffDocsApiRole.ERROR;
  /**
   * The error code.
   */
  code: string;
}
