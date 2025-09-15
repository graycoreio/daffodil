import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffDocTableOfContentsEntry } from '@daffodil/docs-utils';

/**
 * Mocked DaffDocTableOfContentsEntry object.
 */
export class MockDocTableOfContentsEntry implements DaffDocTableOfContentsEntry {
  content = faker.lorem.words({ min: 2, max: 6 });
  lvl = faker.number.int({ min: 1, max: 6 });
  slug = this.content.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

/**
 * A factory for creating a {@link DaffDocTableOfContentsEntry}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffDocTableOfContentsEntryFactory extends DaffModelFactory<DaffDocTableOfContentsEntry, typeof MockDocTableOfContentsEntry> {
  constructor() {
    super(MockDocTableOfContentsEntry);
  }
}
