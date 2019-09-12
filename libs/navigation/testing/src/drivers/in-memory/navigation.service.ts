import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DaffNavigationTree, DaffNavigationServiceInterface } from '@daffodil/navigation';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryNavigationService implements DaffNavigationServiceInterface<DaffNavigationTree> {
  url = '/api/navigation/';

  constructor(private http: HttpClient) {}

  get(navigationId: string): Observable<DaffNavigationTree> {
    return this.http.get<DaffNavigationTree>(this.url + navigationId);
  }
}
