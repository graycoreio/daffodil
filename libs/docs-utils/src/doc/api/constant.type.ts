import type { ConstExportDoc } from 'dgeni-packages/typescript/api-doc-types/ConstExportDoc';

import { DaffApiDocBase } from './base.type';
import { DaffDocsApiRole } from '../../api/public_api';
import { DaffDocsRenderedContent } from '../rendered-content.type';

/**
 * An API doc base for doc roles that are types.
 */
export interface DaffApiConstant extends Pick<ConstExportDoc, 'name'>, DaffApiDocBase {
  type: DaffDocsRenderedContent;
}

export interface DaffApiConstantDoc extends DaffApiConstant {
  role: DaffDocsApiRole.CONSTANT;
}
