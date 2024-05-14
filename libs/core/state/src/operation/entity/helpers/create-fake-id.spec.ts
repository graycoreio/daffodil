import { daffOperationEntityCreateFakeId } from './create-fake-id';

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
