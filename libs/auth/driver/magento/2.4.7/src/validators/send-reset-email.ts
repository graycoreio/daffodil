import { Apollo } from 'apollo-angular';

import { DaffAuthInvalidAPIResponseError } from '@daffodil/auth/driver';

import { MagentoSendResetEmailResponse } from '../models/public_api';

export const validateSendResetEmailResponse = (response: Apollo.QueryResult<MagentoSendResetEmailResponse>) => {
  if (response.data.requestPasswordResetEmail) {
    return response;
  } else {
    throw new DaffAuthInvalidAPIResponseError('The reset password email was not sent successfully.');
  }
};
