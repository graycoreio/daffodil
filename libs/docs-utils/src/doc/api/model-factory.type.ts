import { DaffApiService } from './service.type';
import {
  DaffDocsApiRef,
  DaffDocsApiRole,
} from '../../api/public_api';

export interface DaffApiModelFactoryDoc extends DaffApiService {
  role: DaffDocsApiRole.MODEL_FACTORY;
  model: DaffDocsApiRef;
}
