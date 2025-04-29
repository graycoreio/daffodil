import { DaffNavDoc } from './type';
import { DaffDocsApiRole } from '../api/public_api';

interface DaffApiNavDocBase extends DaffNavDoc {
  path: string;
  docType: string;
  role?: DaffDocsApiRole;
}

/**
 * A navigation item for an API doc.
 */
export interface DaffApiNavDoc extends DaffApiNavDocBase {
  deprecated?: string;
}

/**
 * A navigation item for an API doc of a package entrypoint.
 */
export interface DaffApiNavPackageDoc extends DaffApiNavDocBase {
  docType: 'package';
  description: string;
}
