import { DaffGenericCategory } from './generic-category';

/**
 * This model is needed as a reference in concrete classes, because the DaffGenericCategory is recursive.
 */
export interface DaffCategory extends DaffGenericCategory<DaffCategory> {}
