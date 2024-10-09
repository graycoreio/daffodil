import {
  HttpClient,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryBackendConfig } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

import {
  DaffGetCategoryResponse,
  DaffCategoryIdRequest,
  DaffCategoryUrlRequest,
} from '@daffodil/category';
import { DaffCategoryServiceInterface } from '@daffodil/category/driver';
import { daffUriTruncateLeadingSlash } from '@daffodil/core/routing';
import { DaffInMemoryDriverBase } from '@daffodil/driver/in-memory';

import { DAFF_CATEGORY_IN_MEMORY_COLLECTION_NAME } from '../collection-name.const';

/**
 * The category in memory driver for mocking the {@link DaffCategoryDriver} with in memory data.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryCategoryService extends DaffInMemoryDriverBase implements DaffCategoryServiceInterface {
  constructor(
    private http: HttpClient,
    config: InMemoryBackendConfig,
  ) {
    super(config, DAFF_CATEGORY_IN_MEMORY_COLLECTION_NAME);
  }

  get(categoryRequest: DaffCategoryIdRequest): Observable<DaffGetCategoryResponse> {
    const params = new HttpParams()
      .set('pageSize', categoryRequest.pageSize ? categoryRequest.pageSize.toString() : null)
      .set('currentPage', categoryRequest.currentPage ? categoryRequest.currentPage.toString() : null);

    return this.http.get<DaffGetCategoryResponse>(`${this.url}/${categoryRequest.id}`, { params });
  }

  getByUrl(categoryRequest: DaffCategoryUrlRequest): Observable<DaffGetCategoryResponse> {
    const params = new HttpParams()
      .set('pageSize', categoryRequest.pageSize ? categoryRequest.pageSize.toString() : null)
      .set('currentPage', categoryRequest.currentPage ? categoryRequest.currentPage.toString() : null);

    return this.http.get<DaffGetCategoryResponse>(`${this.url}/${daffUriTruncateLeadingSlash(categoryRequest.url)}`, { params });
  }
}
