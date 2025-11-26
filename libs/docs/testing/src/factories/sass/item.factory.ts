import {
  Inject,
  Injectable,
} from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import {
  createServicesInjectionToken,
  sample,
} from '@daffodil/core';
import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffDocsSassItem,
  DaffDocsSassParsed,
} from '@daffodil/docs-utils';


export const {
  token: DAFF_DOCS_SASS_PARSED_VALUE_FACTORIES,
  provider: provideDaffDocsSassParsedValueFactories,
} = createServicesInjectionToken<DaffModelFactory<DaffDocsSassParsed>>('DAFF_DOCS_SASS_PARSED_VALUE_FACTORIES');

/**
 * Mocked DaffDocsSassItem object.
 */
export class MockDaffDocsSassItem implements DaffDocsSassItem {
  context = {
    type: 'variable',
    name: faker.color.human(),
    value: faker.color.human(),
    parsedValue: sample(this.parsedFactories).create(),
  };
  group = [];
  description = faker.lorem.words(10);
  access = sample(<const>['private', 'public']);
  file = {
    path: faker.system.filePath(),
    name: faker.system.fileName(),
  };

  constructor(
    protected parsedFactories: Array<DaffModelFactory<DaffDocsSassParsed>>,
  ) {}
}

/**
 * Factory for creating DaffDocsSassItem objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffDocsSassItemFactory extends DaffModelFactory<DaffDocsSassItem, typeof MockDaffDocsSassItem> {
  constructor(
    @Inject(DAFF_DOCS_SASS_PARSED_VALUE_FACTORIES) parsedFactories: Array<DaffModelFactory<DaffDocsSassParsed>>,
  ) {
    super(MockDaffDocsSassItem, parsedFactories);
  }
}
