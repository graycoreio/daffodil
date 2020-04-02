import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DaffNavigationTree, DaffNavigationServiceInterface } from '@daffodil/navigation';

import { DaffNavigationTreeFactory } from '../../factories/navigation-tree.factory';

@Injectable({
  providedIn: 'root'
})
export class DaffTestingNavigationService implements DaffNavigationServiceInterface<DaffNavigationTree> {
 
  constructor(
    private navigationTreeFactory: DaffNavigationTreeFactory) {}

  get(navigationTreeId: string): Observable<DaffNavigationTree> {
    return of(this.navigationTreeFactory.create());
  }
}
