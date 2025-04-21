import { DaffApiType } from './type.type';
import { DaffDocsApiRole } from '../../api/public_api';

export interface DaffApiFacadeDoc extends DaffApiType {
  role: DaffDocsApiRole.FACADE;
}
