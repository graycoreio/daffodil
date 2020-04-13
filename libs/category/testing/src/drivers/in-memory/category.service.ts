import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DaffProduct } from '@daffodil/product';
import { DaffCategoryServiceInterface, DaffGetCategoryResponse, DaffCategoryRequest, DaffCategoryPageConfigurationState, DaffCategory } from '@daffodil/category';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryCategoryService implements DaffCategoryServiceInterface<DaffCategoryRequest, DaffCategory, DaffCategoryPageConfigurationState<DaffCategoryRequest>, DaffProduct> {
  url = '/api/category/';

  constructor(private http: HttpClient) {}

  get(categoryRequest: DaffCategoryRequest): Observable<DaffGetCategoryResponse<DaffCategoryRequest, DaffCategory, DaffCategoryPageConfigurationState<DaffCategoryRequest>, DaffProduct>> {
		const params = new HttpParams()
			.set('page_size', categoryRequest.page_size ? categoryRequest.page_size.toString() : null)
			.set('current_page', categoryRequest.current_page ? categoryRequest.current_page.toString() : null);
		
    return this.http.get<DaffGetCategoryResponse<DaffCategoryRequest, DaffCategory, DaffCategoryPageConfigurationState<DaffCategoryRequest>, DaffProduct>>(this.url + categoryRequest.id, {params: params});
  }
}
