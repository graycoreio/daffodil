
import { DaffDocsApiFunction } from './function.type';
import { DaffDocsApiRole } from '../../api/public_api';

export interface DaffApiReducerDoc extends DaffDocsApiFunction {
  role: DaffDocsApiRole.REDUCER;
}
