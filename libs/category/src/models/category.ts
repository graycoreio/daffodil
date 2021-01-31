import { DaffGenericCategory } from './generic-category';

/**
 * This model is needed as a reference in concrete classes, because the DaffGenericCategory is recursive.
 */
export type DaffCategory = DaffGenericCategory<DaffCategory>;
