import { DaffSuffixDirective } from '../suffix.directive';

/**
 * An interface enforcing that a component will manage a given DaffSuffixDirective.
 */
export interface DaffSuffixable {

  _suffix: DaffSuffixDirective;
}
