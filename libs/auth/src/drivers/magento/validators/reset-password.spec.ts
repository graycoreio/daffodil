import { validateResetPasswordResponse as validator } from './reset-password';
import { DaffInvalidAPIResponseError } from '../../../errors/public_api';

describe('Driver | Magento | Auth | Validator | ResetPassword', () => {
  let response;

  beforeEach(() => {
    response = true;
  });

  describe('when the request is successful', () => {
    it('should return the response and not throw an error', () => {
      const result = validator(response);

      expect(result).toEqual(response);
    });
  });

  describe('when the request fails', () => {
    beforeEach(() => {
      response = false;
    });

    it('should throw a DaffInvalidAPIResponseError', () => {
      expect(() => validator(response)).toThrow(jasmine.any(DaffInvalidAPIResponseError));
    });
  });
});
