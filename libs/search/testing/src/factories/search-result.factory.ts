import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffSearchResult } from '@daffodil/search';

/**
 * Mock class for {@link DaffSearchResult}.
 */
export class MockSearchResult implements DaffSearchResult {
  kind = 'Thing';
  id = faker.datatype.uuid();
  url = `/${faker.internet.domainWord()}.html`;
};

/**
 * Model factory for {@link DaffSearchResult}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffSearchResultFactory extends DaffModelFactory<DaffSearchResult>{
  constructor() {
    super(MockSearchResult);
  }
}
