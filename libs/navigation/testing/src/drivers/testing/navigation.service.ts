import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DaffSpecificNavigationTree, DaffNavigationServiceInterface } from '@daffodil/navigation';

import { DaffNavigationTreeFactory } from '../../factories/navigation-tree.factory';

@Injectable({
  providedIn: 'root'
})
export class DaffTestingNavigationService implements DaffNavigationServiceInterface<DaffSpecificNavigationTree> {
 
  constructor(
    private navigationTreeFactory: DaffNavigationTreeFactory) {}

  get(navigationTreeId: string): Observable<DaffSpecificNavigationTree> {
    return of(this.navigationTreeFactory.create());
  }
}
