import { Observable } from 'rxjs';
import { DaffGetCategoryResponse, DaffCategoryServiceInterface, DaffCategoryRequest } from '@daffodil/category';
import { DaffProductFactory } from '@daffodil/product/testing';
import { DaffCategoryFactory } from '../../factories/category.factory';
import { DaffCategoryPageConfigurationStateFactory } from '../../factories/category-page-configuration-state.factory';
export declare class DaffTestingCategoryService implements DaffCategoryServiceInterface {
    private categoryFactory;
    private categoryPageConfigurationStateFactory;
    private productFactory;
    constructor(categoryFactory: DaffCategoryFactory, categoryPageConfigurationStateFactory: DaffCategoryPageConfigurationStateFactory, productFactory: DaffProductFactory);
    get(categoryRequest: DaffCategoryRequest): Observable<DaffGetCategoryResponse>;
}
