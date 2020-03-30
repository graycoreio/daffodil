import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DaffNavigationServiceInterface, DaffSpecificNavigationTree } from '@daffodil/navigation';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryNavigationService implements DaffNavigationServiceInterface<DaffSpecificNavigationTree> {
  url = '/api/navigation/';

  constructor(private http: HttpClient) {}

  get(navigationId: string): Observable<DaffSpecificNavigationTree> {
    return this.http.get<DaffSpecificNavigationTree>(this.url + navigationId);
  }
}
