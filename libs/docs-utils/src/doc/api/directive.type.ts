import {
  DaffDocsApiClass,
  DaffDocsApiClassProperty,
} from './class.type';
import { DaffDocsApiTypeProperty } from './type.type';
import {
  DaffDocsApiRef,
  DaffDocsApiRole,
} from '../../api/public_api';

export interface DaffApiDirectiveInputDoc extends DaffDocsApiClassProperty {
  required: boolean;
}

export interface DaffDocsApiHostDirectiveInheritedField {
  /**
   * The name of the field on this directive.
   */
  field: string;
  /**
   * If the field is aliased, this will be the field in the parent.
   */
  parentField?: string;
}

export interface DaffDocsApiHostDirective {
  directive: DaffDocsApiRef;
  inputs: Array<DaffDocsApiHostDirectiveInheritedField>;
  outputs: Array<DaffDocsApiHostDirectiveInheritedField>;
}

export interface DaffApiDirective extends DaffDocsApiClass {
  selector: string;
  inputs: Array<DaffApiDirectiveInputDoc>;
  outputs: Array<DaffDocsApiTypeProperty>;
  hostDirectives: Array<DaffDocsApiHostDirective>;
}

export interface DaffApiDirectiveDoc extends DaffApiDirective {
  role: DaffDocsApiRole.DIRECTIVE;
}
