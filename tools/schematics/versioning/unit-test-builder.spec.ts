import { daffVersioningValidateUnitTestRunner } from './unit-test-builder';

describe('@daffodil/commerce/versioning | unit test builder', () => {
  describe('daffVersioningValidateUnitTestRunner', () => {
    it('allows the default runner', () => {
      expect(daffVersioningValidateUnitTestRunner(undefined)).toBeNull();
    });

    it('allows the vitest runner', () => {
      expect(daffVersioningValidateUnitTestRunner('vitest')).toBeNull();
    });

    it('rejects the karma runner', () => {
      expect(daffVersioningValidateUnitTestRunner('karma')).toContain('only supports the "vitest" runner');
    });
  });
});
