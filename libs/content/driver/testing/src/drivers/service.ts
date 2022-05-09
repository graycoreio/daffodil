import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import {
  DaffContentBlock,
  daffContentBlockArrayToCollection,
} from '@daffodil/content';
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

  getBlocks(...blockIds: DaffContentBlock['id'][]) {
    return of(daffContentBlockArrayToCollection(blockIds.map(id => this.blockFactory.create({ id }))));
  }
}
