import { DaffNavDoc } from './type';

/**
 * A design guide nav item that includes a description pulled from the first section of the component README (if it has one).
 */
export interface DaffDesignGuideNavDoc extends DaffNavDoc {
  description?: string;
}
