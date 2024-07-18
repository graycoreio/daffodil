import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffDocsPalette } from '@daffodil/docs-utils';

import { DaffDocsPaletteColorFactory } from './palette-color.factory';

@Injectable({
  providedIn: 'root',
})
export class DaffDocsPaletteFactory extends DaffModelFactory<DaffDocsPalette>{
  constructor(
    private colorFactory: DaffDocsPaletteColorFactory,
  ) {
    super();
  }

  create(partial: Partial<DaffDocsPalette> = {}): DaffDocsPalette {
    return {
      ...Array(faker.datatype.number({ min: 1, max: 10 })).fill(0).reduce<DaffDocsPalette>((acc) => {
        acc[faker.color.human().replace(' ', '')] = this.colorFactory.create();
        return acc;
      }, {}),
      ...partial,
    };
  }
}
