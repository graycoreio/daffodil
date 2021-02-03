import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffNavigationTree } from '@daffodil/navigation';
import {
  DaffNavigationTransformer,
  DaffNavigationServiceInterface,
  DaffNavigationTransformerInterface
} from '@daffodil/navigation/driver';

import { DaffMagentoGetCategoryTreeQueryService } from './queries/get-category-tree';

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoNavigationService implements DaffNavigationServiceInterface<DaffNavigationTree> {

  constructor(
    @Inject(DaffNavigationTransformer) private transformer: DaffNavigationTransformerInterface<DaffNavigationTree>,
		private getCategoryTreeQueryService: DaffMagentoGetCategoryTreeQueryService
  ) {}

  get(categoryId: string): Observable<DaffNavigationTree> {
    return this.getCategoryTreeQueryService.fetch({
			filters: { ids: { eq: categoryId } }
    }).pipe(
      map(result => this.transformer.transform(result.data.categoryList[0]))
    );
  }
}
