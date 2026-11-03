import { gql } from 'apollo-angular';


export const resetPasswordMutation = gql`
  mutation MagentoResetPassword($email: String!, $password: String!, $token: String!) {
    resetPassword(
      email: $email,
      newPassword: $password
      resetPasswordToken: $token
    )
  }
`;
