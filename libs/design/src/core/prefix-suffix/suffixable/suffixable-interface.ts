import { DaffSuffixDirective } from '../suffix.directive';

/**
 * An interface enforcing that a component has the ability to interact with a given DaffSuffixDirective.
 */
export interface DaffSuffixable {

  _suffix: DaffSuffixDirective;
}
