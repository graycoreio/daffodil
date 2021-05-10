import {
  HttpClient,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  DaffGetCategoryResponse,
  DaffCategoryIdRequest,
  DaffCategoryUrlRequest,
} from '@daffodil/category';
import { DaffCategoryServiceInterface } from '@daffodil/category/driver';

@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryCategoryService implements DaffCategoryServiceInterface {
  url = '/api/category/';

  constructor(private http: HttpClient) {}

  get(categoryRequest: DaffCategoryIdRequest): Observable<DaffGetCategoryResponse> {
    const params = new HttpParams()
      .set('page_size', categoryRequest.page_size ? categoryRequest.page_size.toString() : null)
      .set('current_page', categoryRequest.current_page ? categoryRequest.current_page.toString() : null);

    return this.http.get<DaffGetCategoryResponse>(this.url + categoryRequest.id, { params });
  }

  getByUrl(categoryRequest: DaffCategoryUrlRequest): Observable<DaffGetCategoryResponse> {
    const params = new HttpParams()
      .set('page_size', categoryRequest.page_size ? categoryRequest.page_size.toString() : null)
      .set('current_page', categoryRequest.current_page ? categoryRequest.current_page.toString() : null);

    return this.http.get<DaffGetCategoryResponse>(`${this.url}${categoryRequest.url}`, { params });
  }
}
