import { DaffDocsApiClass } from './class.type';
import { DaffDocsApiRole } from '../../api/public_api';

export interface DaffApiModuleDoc extends DaffDocsApiClass {
  role: DaffDocsApiRole.MODULE;
}
