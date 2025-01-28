import { DaffState } from '@daffodil/core/state';

import { daffStateIsLoading } from './helpers';

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
      result = daffStateIsLoading(DaffState.Updated);
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
      result = daffStateIsLoading(DaffState.Updating);
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
