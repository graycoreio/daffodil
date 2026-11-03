import { gql } from 'apollo-angular';

export const MAGENTO_CHANGE_PASSWORD_QUERY_NAME = 'MagentoChangePassword';

export const changePassword = gql`
  mutation ${MAGENTO_CHANGE_PASSWORD_QUERY_NAME}($old: String!, $new: String!) {
    changeCustomerPassword(
      currentPassword: $old
      newPassword: $new
    ) {
      email
    }
  }
`;
