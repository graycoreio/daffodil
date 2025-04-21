import { DaffApiType } from './type.type';
import { DaffDocsApiRole } from '../../api/public_api';

export interface DaffApiModuleDoc extends DaffApiType {
  role: DaffDocsApiRole.MODULE;
}
