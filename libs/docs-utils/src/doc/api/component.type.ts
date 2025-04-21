import { DaffApiDirective } from './directive.type';
import { DaffDocsApiRole } from '../../api/public_api';

export interface DaffApiComponentDoc extends DaffApiDirective {
  role: DaffDocsApiRole.COMPONENT;
}
