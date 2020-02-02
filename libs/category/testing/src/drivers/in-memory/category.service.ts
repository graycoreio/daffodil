import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DaffCategoryServiceInterface, DaffGetCategoryResponse, DaffCategoryRequest } from '@daffodil/category';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryCategoryService implements DaffCategoryServiceInterface {
  url = '/api/category/';

  constructor(private http: HttpClient) {}

  get(categoryRequest: DaffCategoryRequest): Observable<DaffGetCategoryResponse> {
		const params = new HttpParams()
			.set('page_size', categoryRequest.page_size ? categoryRequest.page_size.toString() : null)
			.set('current_page', categoryRequest.current_page ? categoryRequest.current_page.toString() : null)
			.set('id', categoryRequest.id);
		
    return this.http.get<DaffGetCategoryResponse>(this.url + categoryRequest.id, {params: params});
  }
}
