import { DaffNavDoc } from './type';
import { DaffDocsApiRole } from '../api/public_api';

/**
 * A navigation item for an API doc.
 */
export interface DaffApiNavDoc extends DaffNavDoc {
  path: string;
  docType: string;
  role?: DaffDocsApiRole;
}

/**
 * A navigation item for an API doc of a package entrypoint.
 */
export interface DaffApiNavPackageDoc extends DaffApiNavDoc {
  docType: 'package';
  description: string;
}
