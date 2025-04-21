import {
  DaffDocsApiClass,
  DaffDocsApiClassProperty,
} from './class.type';
import { DaffDocsApiTypeProperty } from './type.type';
import { DaffDocsApiRole } from '../../api/public_api';

export interface DaffApiDirectiveInputDoc extends DaffDocsApiClassProperty {
  required: boolean;
}

export interface DaffApiDirective extends DaffDocsApiClass {
  selector: string;
  inputs: Array<DaffApiDirectiveInputDoc>;
  outputs: Array<DaffDocsApiTypeProperty>;
  // hostDirectives: Array
}

export interface DaffApiDirectiveDoc extends DaffApiDirective {
  role: DaffDocsApiRole.DIRECTIVE;
}
