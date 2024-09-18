import {
  DaffError,
  DaffErrorCodeMap,
  DaffInheritableError,
} from '@daffodil/core';
import { DaffDriverMagentoError } from '@daffodil/driver/magento';

import { daffMagentoTransformGraphQlError } from './transform-graphql';

class MockError extends DaffInheritableError implements DaffError {
  public readonly code: string = 'MOCK';

  constructor(public message: string) {
    super(message);
  }
}

describe('@daffodil/driver/magento | daffMagentoTransformGraphQlError', () => {
  let unhandledGraphQlError;
  let handledGraphQlError;
  let category;
  let map: DaffErrorCodeMap;

  beforeEach(() => {
    category = 'category';
    unhandledGraphQlError = {
      message: 'An error we don\'t handle',
      extensions: {},
      source: null,
      originalError: null,
      name: '',
      locations: [],
      path: [1],
      nodes: [],
      positions: [],
    };
    handledGraphQlError = {
      message: 'An error we do handle',
      extensions: { category },
      source: null,
      originalError: null,
      name: '',
      locations: [],
      path: [1],
      nodes: [],
      positions: [],
    };

    map = {
      [category]: MockError,
    };
  });

  it('should be able to process graphql errors and return the relevant error if a mapping exists', () => {
    const result = daffMagentoTransformGraphQlError(handledGraphQlError, map);

    expect(result).toEqual(jasmine.any(MockError));
  });

  it('should not crash if the extension is not defined', () => {
    const { extensions, ...error } = unhandledGraphQlError;
    expect(() => daffMagentoTransformGraphQlError(error, map)).not.toThrow();
    expect(daffMagentoTransformGraphQlError(error, map)).toEqual(new DaffDriverMagentoError('An error we don\'t handle'));
  });

  it('should not crash if there are no extensions defined', () => {
    const error = { ...unhandledGraphQlError, extensions: {}};
    expect(() => daffMagentoTransformGraphQlError(error, map)).not.toThrow();
  });

  describe('when a mapping cannot be found', () => {
    it('should use the generic error', () => {
      const error = {
        ...unhandledGraphQlError,
        extensions: { category: 'an-unmanaged-error' },
      };
      expect(daffMagentoTransformGraphQlError(error, map)).toEqual(new DaffDriverMagentoError(error.message));
    });
  });
});
