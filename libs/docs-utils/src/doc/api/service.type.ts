import { DaffDocsApiClass } from './class.type';
import { DaffDocsApiRole } from '../../api/public_api';

export interface DaffApiService extends DaffDocsApiClass {
  providedIn: string;
}

export interface DaffApiServiceDoc extends DaffApiService {
  role: DaffDocsApiRole.SERVICE;
}
