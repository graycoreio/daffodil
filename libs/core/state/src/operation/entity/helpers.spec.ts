import { DaffState } from '@daffodil/core/state';

import {
  daffOperationEntityCreateFakeId,
  daffStateIsLoading,
} from './helpers';

describe('@daffodil/core/state | daffStateIsLoading', () => {
  let result: boolean;

  describe('when the state is Stable', () => {
    beforeEach(() => {
      result = daffStateIsLoading(DaffState.Stable);
    });

    it('should be false', () => {
      expect(result).toBeFalse();
    });
  });

  describe('when the state is Added', () => {
    beforeEach(() => {
      result = daffStateIsLoading(DaffState.Added);
    });

    it('should be false', () => {
      expect(result).toBeFalse();
    });
  });

  describe('when the state is Mutated', () => {
    beforeEach(() => {
      result = daffStateIsLoading(DaffState.Mutated);
    });

    it('should be false', () => {
      expect(result).toBeFalse();
    });
  });

  describe('when the state is Resolving', () => {
    beforeEach(() => {
      result = daffStateIsLoading(DaffState.Resolving);
    });

    it('should be true', () => {
      expect(result).toBeTrue();
    });
  });

  describe('when the state is Mutating', () => {
    beforeEach(() => {
      result = daffStateIsLoading(DaffState.Mutating);
    });

    it('should be true', () => {
      expect(result).toBeTrue();
    });
  });

  describe('when the state is Deleting', () => {
    beforeEach(() => {
      result = daffStateIsLoading(DaffState.Deleting);
    });

    it('should be true', () => {
      expect(result).toBeTrue();
    });
  });

  describe('when the state is Adding', () => {
    beforeEach(() => {
      result = daffStateIsLoading(DaffState.Adding);
    });

    it('should be true', () => {
      expect(result).toBeTrue();
    });
  });
});

describe('@daffodil/core/state | daffOperationEntityCreateFakeId', () => {
  let result: string;

  beforeEach(() => {
    result = daffOperationEntityCreateFakeId('test');
  });

  it('should return a string containing a greek lowercase sigma', () => {
    expect(result).toContain('ε');
  });

  it('should return a string containing the passed key', () => {
    expect(result).toContain('test');
  });

  it('should return distinct strings when called in quick succession', () => {
    expect(result).not.toEqual(daffOperationEntityCreateFakeId());
  });
});
