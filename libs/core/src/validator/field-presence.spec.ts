import { validateFieldPresence } from './field-presence';

describe('@daffodil/core | validateFieldPresence', () => {
  let data: {
    a: boolean;
    b?: boolean;
  };

  beforeEach(() => {
    data = {
      a: false,
    };
  });

  it('should return false when a field is missing', () => {
    expect(validateFieldPresence(data, 'a', 'b')).toBeFalse();
  });

  it('should return true when the fields are present', () => {
    expect(validateFieldPresence(data, 'a')).toBeTrue();
  });
});
