import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DaffGetCategoryResponse, DaffCategoryServiceInterface, DaffCategory, DaffCategoryPageConfigurationState, DaffCategoryRequest } from '@daffodil/category';
import { DaffProduct } from '@daffodil/product';
import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffCategoryFactory } from '../../factories/category.factory';
import { DaffCategoryPageConfigurationStateFactory } from '../../factories/category-page-configuration-state.factory';

@Injectable({
  providedIn: 'root'
})
export class DaffTestingCategoryService implements DaffCategoryServiceInterface<DaffCategoryRequest, DaffCategory, DaffCategoryPageConfigurationState<DaffCategoryRequest>, DaffProduct> {
 
  constructor(
    private categoryFactory: DaffCategoryFactory,
    private categoryPageConfigurationStateFactory: DaffCategoryPageConfigurationStateFactory,
    private productFactory: DaffProductFactory
  ) {}

  get(categoryRequest: DaffCategoryRequest): Observable<DaffGetCategoryResponse<DaffCategoryRequest, DaffCategory, DaffCategoryPageConfigurationState<DaffCategoryRequest>, DaffProduct>> {
    return of({
      category: this.categoryFactory.create(),
      categoryPageConfigurationState: this.categoryPageConfigurationStateFactory.create(),
      products: this.productFactory.createMany(3)
    });
  }
}
