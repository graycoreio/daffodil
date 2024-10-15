import { createSingleInjectionToken } from '@daffodil/core';
import { DaffGenericNavigationTree } from '@daffodil/navigation';

export interface DaffNavigationTransformerInterface<T extends DaffGenericNavigationTree<T>> {
  transform(navigationTree: any): T;
}

export const {
  token: DaffNavigationTransformer,
  provider: provideDaffNavigationTransformer,
} = createSingleInjectionToken<DaffNavigationTransformerInterface<any>>('DaffNavigationTransformer');
