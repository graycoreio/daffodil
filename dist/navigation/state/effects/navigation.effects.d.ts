import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { DaffGenericNavigationTree } from '@daffodil/navigation';
import { DaffNavigationServiceInterface } from '@daffodil/navigation/driver';
export declare class DaffNavigationEffects<T extends DaffGenericNavigationTree<T>> {
    private actions$;
    private driver;
    constructor(actions$: Actions, driver: DaffNavigationServiceInterface<T>);
    loadNavigation$: Observable<any>;
}
