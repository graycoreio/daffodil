import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DaffCategory, DaffCategoryServiceInterface } from '@daffodil/category';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryCategoryService implements DaffCategoryServiceInterface {
  url = '/api/category/';

  constructor(private http: HttpClient) {}

  get(categoryId: string): Observable<DaffCategory> {
    return this.http.get<DaffCategory>(this.url + categoryId);
  }
}
