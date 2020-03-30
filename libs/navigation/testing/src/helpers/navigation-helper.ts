import { DaffSpecificNavigationTree } from '@daffodil/navigation';

/**
 * A helper function to verify that a model is a Navigation.
 * @param navigation
 */
export function isNavigation(navigation: DaffSpecificNavigationTree): boolean {
  return navigation.id != null && navigation.name != null && navigation.path != null;
}
