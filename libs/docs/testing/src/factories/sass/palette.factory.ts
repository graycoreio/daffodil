import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffDocsSassParsedMapValue,
  DaffDocsSassType,
} from '@daffodil/docs-utils';

/**
 * Mocked DaffDocsSassParsedMapValue object with data that mimics parsed palette objects.
 */
export class MockDaffDocsSassParsedPalette implements DaffDocsSassParsedMapValue {
  type: DaffDocsSassType.MAP = DaffDocsSassType.MAP;
  parsed = {
    10: faker.color.rgb(),
    20: faker.color.rgb(),
    30: faker.color.rgb(),
    40: faker.color.rgb(),
    50: faker.color.rgb(),
    60: faker.color.rgb(),
    70: faker.color.rgb(),
    80: faker.color.rgb(),
    90: faker.color.rgb(),
    100: faker.color.rgb(),
  };
  raw = JSON.stringify(this.parsed);
}

/**
 * Factory for creating DaffDocsSassParsedMapValue objects with data that mimics parsed palette objects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffDocsSassParsedPaletteFactory extends DaffModelFactory<DaffDocsSassParsedMapValue, typeof MockDaffDocsSassParsedPalette> {
  constructor() {
    super(MockDaffDocsSassParsedPalette);
  }
}
