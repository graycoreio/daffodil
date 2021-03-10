import { Injectable } from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';

import {
  DaffCategoryRequest,
  DaffGetCategoryResponse,
} from '@daffodil/category';
import { DaffCategoryServiceInterface } from '@daffodil/category/driver';
import {
  DaffCategoryFactory,
  DaffCategoryPageConfigurationStateFactory,
} from '@daffodil/category/testing';
import { DaffProductFactory } from '@daffodil/product/testing';


@Injectable({
  providedIn: 'root',
})
export class DaffTestingCategoryService implements DaffCategoryServiceInterface {

  constructor(
    private categoryFactory: DaffCategoryFactory,
    private categoryPageConfigurationStateFactory: DaffCategoryPageConfigurationStateFactory,
    private productFactory: DaffProductFactory,
  ) {}

  get(categoryRequest: DaffCategoryRequest): Observable<DaffGetCategoryResponse> {
    return of({
      category: this.categoryFactory.create(),
      categoryPageConfigurationState: this.categoryPageConfigurationStateFactory.create(),
      products: this.productFactory.createMany(3),
    });
  }
}
