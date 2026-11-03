import { Apollo } from 'apollo-angular';

import { DaffAuthInvalidAPIResponseError } from '@daffodil/auth/driver';

import { MagentoResetPasswordResponse } from '../models/public_api';

export const validateResetPasswordResponse = (response: Apollo.QueryResult<MagentoResetPasswordResponse>) => {
  if (response.data.resetPassword) {
    return response;
  } else {
    throw new DaffAuthInvalidAPIResponseError('The password was not reset.');
  }
};
