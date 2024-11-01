import {
  DaffApiNavDoc,
  DaffApiNavPackageDoc,
} from './api.type';
import { DaffDesignGuideNavDoc } from './design-guide.type';
import { DaffNavDoc } from './type';
import { DaffBreadcrumb } from '../breadcrumb/public_api';

/**
 * A list of references for API documents.
 */
export type DaffDocsGenericNavList<T extends DaffNavDoc> = T & {
  children: Array<DaffDocsGenericNavList<T>>;
};

/**
 * A navigation list for a collection of docs.
 */
export type DaffDocsNavList = DaffDocsGenericNavList<DaffNavDoc>;

/**
 * A navigation index for design guides.
 */
export type DaffDocsDesignGuideNavList = DaffDocsGenericNavList<DaffDesignGuideNavDoc>;

/**
 * A navigation index for API docs.
 */
export type DaffDocsApiNavList = DaffDocsGenericNavList<DaffApiNavDoc | DaffApiNavPackageDoc>;

/**
 * An API package doc.
 * This has a structure resembling a navigation index.
 */
export interface DaffApiPackageDoc extends DaffApiNavPackageDoc {
  breadcrumbs: Array<DaffBreadcrumb>;
  children: Array<DaffDocsGenericNavList<DaffApiNavDoc | DaffApiNavPackageDoc>>;
};
