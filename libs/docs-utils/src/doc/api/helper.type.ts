import { DaffApiDocBase } from './base.type';
import { DaffDocsApiClass } from './class.type';
import { DaffDocsApiFunction } from './function.type';
import {
  DaffDocsApiRole,
  DaffDocsApiType,
} from '../../api/public_api';

/**
 * An API doc base for doc roles that are types.
 */
export type DaffApiHelperDoc = DaffApiDocBase & ((DaffDocsApiClass & {
  docType: DaffDocsApiType.CLASS;
}) | (DaffDocsApiFunction & {
  docType: DaffDocsApiType.FUNCTION;
})) & {
  role: DaffDocsApiRole.HELPER;
};
