import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { DaffProduct } from '@daffodil/product';
import { DaffCategoryServiceInterface } from '../drivers/interfaces/category-service.interface';
import { DaffCategoryRequest } from '../models/requests/category-request';
import { DaffCategoryPageConfigurationState } from '../models/category-page-configuration-state';
import { DaffGenericCategory } from '../models/generic-category';
export declare class DaffCategoryEffects<T extends DaffCategoryRequest, V extends DaffGenericCategory<V>, U extends DaffCategoryPageConfigurationState<T>, W extends DaffProduct> {
    private actions$;
    private driver;
    constructor(actions$: Actions, driver: DaffCategoryServiceInterface<T, V, U, W>);
    loadCategory$: Observable<any>;
}
