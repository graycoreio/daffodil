import { Injectable } from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';

import { DaffContentBlock } from '@daffodil/content';
import { DaffContentServiceInterface } from '@daffodil/content/driver';
import { DaffContentBlockFactory } from '@daffodil/content/testing';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffTestingContentService implements DaffContentServiceInterface {

  constructor(
    private blockFactory: DaffContentBlockFactory,
  ) {}

  getBlocks(...blockIds: DaffContentBlock['id'][]): Observable<DaffContentBlock[]> {
    return of(blockIds.map(id => this.blockFactory.create({ id })));
  }
}
