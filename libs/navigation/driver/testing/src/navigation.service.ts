import { Injectable } from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';

import { DaffNavigationTree } from '@daffodil/navigation';
import { DaffNavigationServiceInterface } from '@daffodil/navigation/driver';
import { DaffNavigationTreeFactory } from '@daffodil/navigation/testing';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffTestingNavigationService implements DaffNavigationServiceInterface<DaffNavigationTree> {

  constructor(
    private navigationTreeFactory: DaffNavigationTreeFactory) {}

  get(navigationTreeId: string): Observable<DaffNavigationTree> {
    return of(this.navigationTreeFactory.create());
  }
}
