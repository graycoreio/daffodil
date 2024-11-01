import { DaffNavDoc } from './type';

/**
 * A navigation item for an API doc.
 */
export interface DaffApiNavDoc extends DaffNavDoc {
  path: string;
  docType: string;
}

/**
 * A navigation item for an API doc of a package entrypoint.
 */
export interface DaffApiNavPackageDoc extends DaffApiNavDoc {
  docType: 'package';
  description: string;
}
