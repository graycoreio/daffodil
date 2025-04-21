import type { ClassExportDoc } from 'dgeni-packages/typescript/api-doc-types/ClassExportDoc';

import {
  DaffApiType,
  DaffDocsApiTypeMethod,
  DaffDocsApiTypeProperty,
} from './type.type';

export interface DaffDocsApiClassProperty extends DaffDocsApiTypeProperty {
  /**
   * The default value of the property.
   */
  default: string;
}

export interface DaffDocsApiClass extends DaffApiType<DaffDocsApiClassProperty>, Pick<ClassExportDoc, 'isAbstract'> {
  constructorDoc: DaffDocsApiTypeMethod;
}
