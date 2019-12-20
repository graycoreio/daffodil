import { DaffPrefixDirective } from '../prefix.directive';

/**
 * An interface enforcing that a component will manage a given DaffPrefixDirective.
 */
export interface DaffPrefixable {

  _prefix: DaffPrefixDirective;
}
