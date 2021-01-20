import { InjectionToken } from '@angular/core';
import { DaffGenericNavigationTree } from '@daffodil/navigation';
export interface DaffNavigationTransformerInterface<T extends DaffGenericNavigationTree<T>> {
    transform(navigationTree: any): T;
}
export declare const DaffNavigationTransformer: InjectionToken<DaffNavigationTransformerInterface<any>>;
