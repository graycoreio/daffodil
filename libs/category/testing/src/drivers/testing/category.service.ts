import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DaffGetCategoryResponse, DaffCategoryServiceInterface } from '@daffodil/category';
import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffCategoryFactory } from '../../factories/category.factory';

@Injectable({
  providedIn: 'root'
})
export class DaffTestingCategoryService implements DaffCategoryServiceInterface {
 
  constructor(
    private categoryFactory: DaffCategoryFactory,
    private productFactory: DaffProductFactory
  ) {}

  get(categoryId: string): Observable<DaffGetCategoryResponse> {
    return of({
      category: this.categoryFactory.create(),
      products: this.productFactory.createMany(3)
    });
  }
}
