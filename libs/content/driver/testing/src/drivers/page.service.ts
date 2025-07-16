import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { DaffContentPage } from '@daffodil/content';
import { DaffContentPageServiceInterface } from '@daffodil/content/driver';
import { DaffContentPageFactory } from '@daffodil/content/testing';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffContentPageTestingService implements DaffContentPageServiceInterface {
  constructor(
    private blockFactory: DaffContentPageFactory,
  ) {}

  get(id: DaffContentPage['id']) {
    return of(this.blockFactory.create({ id }));
  }
}
