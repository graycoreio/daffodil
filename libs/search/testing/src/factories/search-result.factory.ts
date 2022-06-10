import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffSearchResult } from '@daffodil/search';

/**
 * Mock class for {@link DaffSearchResult}.
 */
export class MockSearchResult implements DaffSearchResult {
  '@type': 'Thing' = 'Thing';
  '@context': 'https://schema.org' = 'https://schema.org';
  kind = 'Thing';
  id = faker.datatype.uuid();
	url = `/${faker.internet.domainWord()}.html`;
  name = faker.internet.domainWord();
  description = faker.random.words(10);
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
