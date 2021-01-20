import { Observable } from 'rxjs';
import { DaffNavigationTree } from '@daffodil/navigation';
import { DaffNavigationServiceInterface } from '@daffodil/navigation/driver';
import { DaffNavigationTreeFactory } from '@daffodil/navigation/testing';
export declare class DaffTestingNavigationService implements DaffNavigationServiceInterface<DaffNavigationTree> {
    private navigationTreeFactory;
    constructor(navigationTreeFactory: DaffNavigationTreeFactory);
    get(navigationTreeId: string): Observable<DaffNavigationTree>;
}
