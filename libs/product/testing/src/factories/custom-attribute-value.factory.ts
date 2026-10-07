import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { sample } from '@daffodil/core';
import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffProductCustomAttributeKind,
  DaffProductCustomAttributeValue,
  DaffProductCustomAttributeValueScalar,
  DaffProductCustomAttributeValueSelect,
} from '@daffodil/product';

/**
 * Mocked DaffProductCustomAttributeValueScalar object.
 */
export class MockDaffProductCustomAttributeValueScalar implements DaffProductCustomAttributeValueScalar {
  id = faker.string.uuid();
  kind: DaffProductCustomAttributeKind.SCALAR = DaffProductCustomAttributeKind.SCALAR;
  value = faker.word.noun();
}

/**
 * Mocked DaffProductCustomAttributeValueSelect object.
 */
export class MockDaffProductCustomAttributeValueSelect implements DaffProductCustomAttributeValueSelect {
  id = faker.string.uuid();
  kind: DaffProductCustomAttributeKind.SELECT = DaffProductCustomAttributeKind.SELECT;
  values = [faker.string.uuid(), faker.string.uuid()];
}

/**
 * Factory for creating DaffProductCustomAttributeValueScalars.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductCustomAttributeValueScalarFactory extends DaffModelFactory<DaffProductCustomAttributeValueScalar> {
  constructor() {
    super(MockDaffProductCustomAttributeValueScalar);
  }
}

/**
 * Factory for creating DaffProductCustomAttributeValueSelects.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductCustomAttributeValueSelectFactory extends DaffModelFactory<DaffProductCustomAttributeValueSelect> {
  constructor() {
    super(MockDaffProductCustomAttributeValueSelect);
  }
}

/**
 * Factory for creating DaffProductCustomAttributeValues.
 * This will create a random custom attribute value kind, either scalar or select.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductCustomAttributeValueFactory extends DaffModelFactory<DaffProductCustomAttributeValue> {
  constructor(
    private scalarFactory: DaffProductCustomAttributeValueScalarFactory,
    private selectFactory: DaffProductCustomAttributeValueSelectFactory,
  ) {
    super(null);
  }

  private get _randomFactory(): DaffModelFactory<DaffProductCustomAttributeValue> {
    return sample([this.scalarFactory, this.selectFactory]);
  }

  create(partial: Partial<DaffProductCustomAttributeValue> = {}): DaffProductCustomAttributeValue {
    return this._randomFactory.create(partial);
  }
}
