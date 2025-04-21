
import { DaffApiDocBase } from './base.type';
import { DaffDocsApiFunction } from './function.type';
import { DaffDocsApiRole } from '../../api/public_api';

export interface DaffApiSelectorDoc extends DaffDocsApiFunction, DaffApiDocBase {
  role: DaffDocsApiRole.SELECTOR;
}
