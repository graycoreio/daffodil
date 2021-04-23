import { Injectable } from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';

import {
  DaffGetCategoryResponse,
  DaffCategoryIdRequest,
  DaffCategoryUriRequest,
} from '@daffodil/category';
import { DaffCategoryServiceInterface } from '@daffodil/category/driver';
import {
  DaffCategoryFactory,
  DaffCategoryPageMetadataFactory,
} from '@daffodil/category/testing';
import { DaffProductFactory } from '@daffodil/product/testing';


@Injectable({
  providedIn: 'root',
})
export class DaffTestingCategoryService implements DaffCategoryServiceInterface {

  constructor(
    private categoryFactory: DaffCategoryFactory,
    private categoryPageMetadataFactory: DaffCategoryPageMetadataFactory,
    private productFactory: DaffProductFactory,
  ) {}

  get(categoryRequest: DaffCategoryIdRequest): Observable<DaffGetCategoryResponse> {
    return of({
      category: this.categoryFactory.create(),
      categoryPageMetadata: this.categoryPageMetadataFactory.create(),
      products: this.productFactory.createMany(3),
    });
  }

  getByUri(categoryRequest: DaffCategoryUriRequest): Observable<DaffGetCategoryResponse> {
    return of({
      category: this.categoryFactory.create(),
      categoryPageMetadata: this.categoryPageMetadataFactory.create(),
      products: this.productFactory.createMany(3),
    });
  }
}
