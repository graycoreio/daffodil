import {
  HttpClient,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  DaffGetCategoryResponseReplacement,
  DaffCategoryRequestReplacement,
} from '@daffodil/category';
import { DaffCategoryServiceInterface } from '@daffodil/category/driver';

@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryCategoryService implements DaffCategoryServiceInterface {
  url = '/api/category/';

  constructor(private http: HttpClient) {}

  get(categoryRequest: DaffCategoryRequestReplacement): Observable<DaffGetCategoryResponseReplacement> {
    const params = new HttpParams()
      .set('page_size', categoryRequest.page_size ? categoryRequest.page_size.toString() : null)
      .set('current_page', categoryRequest.current_page ? categoryRequest.current_page.toString() : null);

    return this.http.get<DaffGetCategoryResponseReplacement>(this.url + categoryRequest.id, { params });
  }
}
