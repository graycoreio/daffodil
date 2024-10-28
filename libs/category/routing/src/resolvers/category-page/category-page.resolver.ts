import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { DaffCategoryPageIdResolver } from '../category-page-id/category-page-id.resolver';

/**
 * Resolves category data for category pages, and will only resolve the url after a category request succeeds or fails. This resolver expects a url
 * of the form `some/url/{id}` where `{id}` is the category id.
 *
 * @deprecated Deprecated in version 0.78.0. Will be removed in version 0.81.0.
 * @see DaffCategoryPageIdResolver
 */
@Injectable()
export class DaffCategoryPageResolver  {
  constructor(
    private categoryPageIdResolver: DaffCategoryPageIdResolver,
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.categoryPageIdResolver.resolve(route);
  }
}
