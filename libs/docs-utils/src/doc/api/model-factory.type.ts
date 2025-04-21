import { DaffDocsApiClass } from './class.type';
import {
  DaffDocsApiRef,
  DaffDocsApiRole,
} from '../../api/public_api';

export interface DaffApiModelFactoryDoc extends DaffDocsApiClass {
  role: DaffDocsApiRole.MODEL_FACTORY;
  model: DaffDocsApiRef;
}
