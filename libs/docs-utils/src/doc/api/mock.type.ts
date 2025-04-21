import { DaffApiType } from './type.type';
import {
  DaffDocsApiRef,
  DaffDocsApiRole,
} from '../../api/public_api';

export interface DaffApiMockDoc extends DaffApiType {
  role: DaffDocsApiRole.MOCK;
  model: DaffDocsApiRef;
}
