import { DaffApiDocBase } from './base.type';
import { DaffDocsApiRole } from '../../api/public_api';
import { DaffDocsRenderedContent } from '../rendered-content.type';

/**
 * An API doc base for doc roles that are types.
 */
export interface DaffApiConstant extends DaffApiDocBase {
  type: DaffDocsRenderedContent;
}

export interface DaffApiConstantDoc extends DaffApiConstant {
  role: DaffDocsApiRole.CONSTANT;
}
