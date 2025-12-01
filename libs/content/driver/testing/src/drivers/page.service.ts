import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { DaffContentHtmlPage } from '@daffodil/content';
import { DaffContentPageHtmlServiceInterface } from '@daffodil/content/driver';
import { DaffContentHtmlPageFactory } from '@daffodil/content/testing';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffContentPageTestingService implements DaffContentPageHtmlServiceInterface {
  constructor(
    private pageFactory: DaffContentHtmlPageFactory,
  ) {}

  get(id: DaffContentHtmlPage['id']) {
    return of(this.pageFactory.create({ id }));
  }
}
