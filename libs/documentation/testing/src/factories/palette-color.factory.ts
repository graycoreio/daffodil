import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffDocsPaletteColor } from '@daffodil/docs-utils';

@Injectable({
  providedIn: 'root',
})
export class DaffDocsPaletteColorFactory extends DaffModelFactory<DaffDocsPaletteColor>{
  constructor() {
    super();
  }

  create(partial: Partial<DaffDocsPaletteColor> = {}): DaffDocsPaletteColor {
    return {
      ...Array(faker.datatype.number({ min: 1, max: 10 })).fill(0).reduce<DaffDocsPaletteColor>((acc) => {
        acc[String(faker.datatype.number({ min: 1, max: 10 }) * 10)] = `#${faker.datatype.hexadecimal({ length: 6 })}`;
        return acc;
      }, {}),
      ...partial,
    };
  }
}
