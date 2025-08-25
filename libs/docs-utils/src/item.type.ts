import {
  DaffApiDoc,
  DaffDoc,
  DaffPackageGuideDoc,
} from './doc/public_api';
import {
  DaffApiNavDoc,
  DaffApiNavPackageDoc,
  DaffApiPackageDoc,
  DaffDesignGuideNavDoc,
  DaffDocsApiNavList,
  DaffDocsDesignGuideNavList,
  DaffDocsNavList,
} from './nav/public_api';

/**
 * A union of all the possible generateable doc types.
 */
export type DaffDocsItem = DaffDoc
	| DaffPackageGuideDoc
	| DaffApiDoc
	| DaffApiNavDoc
	| DaffApiNavPackageDoc
	| DaffDesignGuideNavDoc
	| DaffDocsNavList
	| DaffDocsDesignGuideNavList
	| DaffDocsApiNavList
	| DaffApiPackageDoc;
