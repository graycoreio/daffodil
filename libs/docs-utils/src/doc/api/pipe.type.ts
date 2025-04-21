import { DaffDocsApiClass } from './class.type';
import { DaffDocsApiRole } from '../../api/public_api';

export interface DaffApiPipeDoc extends DaffDocsApiClass {
  role: DaffDocsApiRole.PIPE;
}
