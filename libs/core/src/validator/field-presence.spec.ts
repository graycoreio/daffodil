import { validateFieldPresence } from './field-presence';

describe('@daffodil/core | validateFieldPresence', () => {
  let data: {
    a: string;
    b?: string;
  };

  beforeEach(() => {
    data = {
      a: 'a',
    };
  });

  it('should return false when a field is missing', () => {
    expect(validateFieldPresence(data, 'a', 'b')).toBeFalse();
  });

  it('should return true when the fields are present', () => {
    expect(validateFieldPresence(data, 'a')).toBeTrue();
  });
});
