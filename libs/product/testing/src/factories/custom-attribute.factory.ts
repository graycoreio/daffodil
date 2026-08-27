import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { sample } from '@daffodil/core';
import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffProductCustomAttribute,
  DaffProductCustomAttributeKind,
  DaffProductCustomAttributeScalar,
  DaffProductCustomAttributeSelect,
} from '@daffodil/product';

import { DaffProductCustomAttributeOptionFactory } from './custom-attribute-option.factory';

/**
 * Mocked DaffProductCustomAttributeScalar object.
 */
export class MockDaffProductCustomAttributeScalar implements DaffProductCustomAttributeScalar {
  id = faker.string.uuid();
  kind: DaffProductCustomAttributeKind.SCALAR = DaffProductCustomAttributeKind.SCALAR;
  label = faker.word.noun();
}

/**
 * Mocked DaffProductCustomAttributeSelect object.
 */
export class MockDaffProductCustomAttributeSelect implements DaffProductCustomAttributeSelect {
  id = faker.string.uuid();
  kind: DaffProductCustomAttributeKind.SELECT = DaffProductCustomAttributeKind.SELECT;
  label = faker.word.noun();
  options = this.optionFactory.createMany(faker.number.int({ min: 2, max: 5 }));

  constructor(private optionFactory: DaffProductCustomAttributeOptionFactory) {}
}

/**
 * Factory for creating DaffProductCustomAttributeScalars.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductCustomAttributeScalarFactory extends DaffModelFactory<DaffProductCustomAttributeScalar> {
  constructor() {
    super(MockDaffProductCustomAttributeScalar);
  }
}

/**
 * Factory for creating DaffProductCustomAttributeSelects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductCustomAttributeSelectFactory extends DaffModelFactory<DaffProductCustomAttributeSelect, typeof MockDaffProductCustomAttributeSelect> {
  constructor(optionFactory: DaffProductCustomAttributeOptionFactory) {
    super(MockDaffProductCustomAttributeSelect, optionFactory);
  }
}

/**
 * Factory for creating DaffProductCustomAttributes.
 * This will create a random custom attribute kind, either scalar or select.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductCustomAttributeFactory extends DaffModelFactory<DaffProductCustomAttribute> {
  constructor(
    private scalarFactory: DaffProductCustomAttributeScalarFactory,
    private selectFactory: DaffProductCustomAttributeSelectFactory,
  ) {
    super(null);
  }

  private get _randomFactory(): DaffModelFactory<DaffProductCustomAttribute> {
    return sample([this.scalarFactory, this.selectFactory]);
  }

  create(partial: Partial<DaffProductCustomAttribute> = {}): DaffProductCustomAttribute {
    return this._randomFactory.create(partial);
  }
}
