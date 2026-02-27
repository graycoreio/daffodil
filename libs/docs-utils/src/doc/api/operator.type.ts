import { DaffDocsApiFunction } from './function.type';
import { DaffDocsApiRole } from '../../api/public_api';

export interface DaffApiOperatorDoc extends DaffDocsApiFunction {
  role: DaffDocsApiRole.OPERATOR;
}
