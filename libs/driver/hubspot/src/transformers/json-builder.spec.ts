import { jsonBuilder } from './json-builder';

describe('when using the JsonBuilder', () => {
  it('should create the correctly match values and key values', () => {
    const payload = { email: 'johndoe@email.com' };
    const fieldValues = [{ 'name': 'email', 'value': 'johndoe@email.com' }];
    expect(jsonBuilder(payload)).toEqual(fieldValues);
  });
});