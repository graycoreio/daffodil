
import { DaffDocsApiFunction } from './function.type';
import { DaffDocsApiRole } from '../../api/public_api';

export interface DaffApiSelectorDoc extends DaffDocsApiFunction {
  role: DaffDocsApiRole.SELECTOR;
}
