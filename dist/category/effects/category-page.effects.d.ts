import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { DaffProduct } from '@daffodil/product';
import { DaffCategoryServiceInterface } from '../drivers/interfaces/category-service.interface';
import { DaffCategoryRequest } from '../models/requests/category-request';
import { DaffCategoryPageConfigurationState } from '../models/category-page-configuration-state';
import { DaffGenericCategory } from '../models/generic-category';
export declare class DaffCategoryPageEffects<T extends DaffCategoryRequest, V extends DaffGenericCategory<V>, U extends DaffCategoryPageConfigurationState<T>, W extends DaffProduct> {
    private actions$;
    private driver;
    private store;
    constructor(actions$: Actions, driver: DaffCategoryServiceInterface<T, V, U, W>, store: Store<any>);
    private categorySelectors;
    loadCategoryPage$: Observable<any>;
    changeCategoryPageSize$: Observable<any>;
    changeCategoryCurrentPage$: Observable<any>;
    changeCategoryFilters$: Observable<any>;
    toggleCategoryFilter$: Observable<any>;
    changeCategorySort$: Observable<any>;
    private processCategoryGetRequest;
}
