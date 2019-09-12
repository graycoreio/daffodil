import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DaffioNavigationTree } from './navigation-tree';

const ASSESTS_URL = '/assets/daffio/';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor(private httpClient: HttpClient){}
  
  /**
   * Retrieves the nav document.
   */
  getNavigation(): Observable<DaffioNavigationTree> {
    return this.httpClient.get<DaffioNavigationTree>(ASSESTS_URL + 'docs/guides/guide-list.json');
  }
}
