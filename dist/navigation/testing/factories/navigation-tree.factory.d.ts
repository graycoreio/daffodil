import { DaffNavigationTree } from '@daffodil/navigation';
import { DaffModelFactory } from '@daffodil/core/testing';
export declare class MockNavigationTree implements DaffNavigationTree {
    id: string;
    name: string;
    path: any;
    total_products: any;
    children: DaffNavigationTree[];
    children_count: number;
    breadcrumbs: any[];
    private fakeTree;
}
export declare class DaffNavigationTreeFactory extends DaffModelFactory<DaffNavigationTree> {
    constructor();
}
