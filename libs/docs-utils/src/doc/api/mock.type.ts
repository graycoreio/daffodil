import { DaffDocsApiClass } from './class.type';
import {
  DaffDocsApiRef,
  DaffDocsApiRole,
} from '../../api/public_api';

export interface DaffApiMockDoc extends DaffDocsApiClass {
  role: DaffDocsApiRole.MOCK;
  model: DaffDocsApiRef;
}
