import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DaffGetCategoryResponse, DaffCategoryServiceInterface } from '@daffodil/category';
import { DaffProductFactory } from '@daffodil/product/testing';
import { DaffCategoryRequest } from '@daffodil/category';

import { DaffCategoryFactory } from '../../factories/category.factory';
import { DaffCategoryPageConfigurationStateFactory } from '../../factories/category-page-configuration-state.factory';

@Injectable({
  providedIn: 'root'
})
export class DaffTestingCategoryService implements DaffCategoryServiceInterface {
 
  constructor(
    private categoryFactory: DaffCategoryFactory,
    private categoryPageConfigurationStateFactory: DaffCategoryPageConfigurationStateFactory,
    private productFactory: DaffProductFactory
  ) {}

  get(categoryRequest: DaffCategoryRequest): Observable<DaffGetCategoryResponse> {
    return of({
      category: this.categoryFactory.create(),
      categoryPageConfigurationState: this.categoryPageConfigurationStateFactory.create(),
      products: this.productFactory.createMany(3)
    });
  }
}
