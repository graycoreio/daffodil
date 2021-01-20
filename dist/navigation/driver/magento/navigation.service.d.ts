import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { DaffNavigationTree } from '@daffodil/navigation';
import { DaffNavigationServiceInterface, DaffNavigationTransformerInterface } from '@daffodil/navigation/driver';
export declare class DaffMagentoNavigationService implements DaffNavigationServiceInterface<DaffNavigationTree> {
    private apollo;
    private transformer;
    private categoryTreeQueryDepth;
    constructor(apollo: Apollo, transformer: DaffNavigationTransformerInterface<DaffNavigationTree>, categoryTreeQueryDepth: number);
    get(categoryId: string): Observable<DaffNavigationTree>;
}
