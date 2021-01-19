import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DaffNavigationTree } from '@daffodil/navigation';
import { DaffNavigationServiceInterface } from '@daffodil/navigation/driver';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryNavigationService implements DaffNavigationServiceInterface<DaffNavigationTree> {
  url = '/api/navigation/';

  constructor(private http: HttpClient) {}

  get(navigationId: DaffNavigationTree['id']): Observable<DaffNavigationTree> {
    return this.http.get<DaffNavigationTree>(this.url + navigationId);
  }
}
