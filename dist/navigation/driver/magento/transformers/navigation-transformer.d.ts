import { DaffNavigationTree } from '@daffodil/navigation';
import { DaffNavigationTransformerInterface } from '@daffodil/navigation/driver';
import { CategoryNode } from '../models/category-node';
export declare class DaffMagentoNavigationTransformerService implements DaffNavigationTransformerInterface<DaffNavigationTree> {
    transform(node: CategoryNode): DaffNavigationTree;
    private transformBreadcrumb;
}
