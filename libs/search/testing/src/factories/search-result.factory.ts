import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffGeneralSearchResult } from '@daffodil/search';

/**
 * Mock class for {@link DaffGeneralSearchResult}.
 */
export class MockSearchResult implements DaffGeneralSearchResult {
  '@type': 'Thing' = 'Thing';
  '@context': 'https://schema.org' = 'https://schema.org';
  kind = 'Thing';
  id = faker.datatype.uuid();
	url = `/${faker.internet.domainWord()}.html`;
  name = faker.internet.domainWord();
  description = faker.random.words(10);
};

/**
 * Model factory for {@link DaffGeneralSearchResult}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffGeneralSearchResultFactory extends DaffModelFactory<DaffGeneralSearchResult>{
  constructor() {
    super(MockSearchResult);
  }
}
