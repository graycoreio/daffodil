import { DaffInvalidAPIResponseError } from '../../../errors/public_api';

export const validateResetPasswordResponse = (response: boolean) => {
  if (response) {
    return response
  } else {
    throw new DaffInvalidAPIResponseError('Reset password request was not successful.')
  }
}
