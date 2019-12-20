import { DaffPrefixDirective } from '../prefix.directive';

/**
 * An interface enforcing that a component has the ability to interact with a given DaffPrefixDirective.
 */
export interface DaffPrefixable {

  _prefix: DaffPrefixDirective;
}
