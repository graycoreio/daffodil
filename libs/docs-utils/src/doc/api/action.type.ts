import { DaffApiType } from './type.type';
import { DaffDocsApiRole } from '../../api/public_api';

export interface DaffApiActionDoc extends DaffApiType {
  role: DaffDocsApiRole.ACTION;
  type: string;
  payload: any;
}
