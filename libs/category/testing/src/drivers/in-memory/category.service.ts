import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DaffCategoryServiceInterface, DaffGetCategoryResponse, DaffCategoryRequest } from '@daffodil/category';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryCategoryService implements DaffCategoryServiceInterface {
  url = '/api/category/';

  constructor(private http: HttpClient) {}

  get(categoryRequest: DaffCategoryRequest): Observable<DaffGetCategoryResponse> {
    return this.http.get<DaffGetCategoryResponse>(this.url + categoryRequest.id);
  }
}
