import { DaffApiService } from './service.type';
import { DaffDocsApiRole } from '../../api/public_api';

export interface DaffApiFacadeDoc extends DaffApiService {
  role: DaffDocsApiRole.FACADE;
}
