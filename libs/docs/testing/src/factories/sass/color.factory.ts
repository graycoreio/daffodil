import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffDocsSassParsedValue,
  DaffDocsSassType,
} from '@daffodil/docs-utils';

/**
 * Mocked DaffDocsSassParsedValue object with data that mimics parsed color objects.
 */
export class MockDaffDocsSassParsedColor implements DaffDocsSassParsedValue {
  type: DaffDocsSassType.COLOR = DaffDocsSassType.COLOR;
  parsed = faker.color.rgb();
  raw = JSON.stringify(this.parsed);
}

/**
 * Factory for creating DaffDocsSassParsedValue objects with data that mimics parsed color objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffDocsSassParsedColorFactory extends DaffModelFactory<DaffDocsSassParsedValue, typeof MockDaffDocsSassParsedColor> {
  constructor() {
    super(MockDaffDocsSassParsedColor);
  }
}
