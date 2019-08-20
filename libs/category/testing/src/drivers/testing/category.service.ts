import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DaffCategory, DaffCategoryServiceInterface } from '@daffodil/category';

import { DaffCategoryFactory } from '../../factories/category.factory';

@Injectable({
  providedIn: 'root'
})
export class DaffTestingCategoryService implements DaffCategoryServiceInterface {
 
  constructor(
    private categoryFactory: DaffCategoryFactory) {}

  get(categoryId: string): Observable<DaffCategory> {
    return of(this.categoryFactory.create());
  }
}
