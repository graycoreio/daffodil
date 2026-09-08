import { provideDaffProductCustomAttributesState } from './provider';

describe('@daffodil/product/state | provideDaffProductCustomAttributesState', () => {
  it('should not throw when registering providers', () => {
    expect(() => {
      provideDaffProductCustomAttributesState();
    }).not.toThrow();
  });

  it('should return providers', () => {
    expect(provideDaffProductCustomAttributesState()).toBeTruthy();
  });
});
