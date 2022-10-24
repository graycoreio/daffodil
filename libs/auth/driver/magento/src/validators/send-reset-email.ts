import { ApolloQueryResult } from '@apollo/client/core';

import { DaffAuthInvalidAPIResponseError } from '@daffodil/auth/driver';

import { MagentoSendResetEmailResponse } from '../models/public_api';

export const validateSendResetEmailResponse = (response: ApolloQueryResult<MagentoSendResetEmailResponse>) => {
  if (response.data.requestPasswordResetEmail) {
    return response;
  } else {
    throw new DaffAuthInvalidAPIResponseError('The reset password email was not sent successfully.');
  }
};
