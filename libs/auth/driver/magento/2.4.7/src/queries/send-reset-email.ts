import { gql } from 'apollo-angular';


export const sendPasswordResetEmailMutation = gql`
  mutation MagentoSendPasswordResetEmail($email: String!) {
    requestPasswordResetEmail(
      email: $email,
    )
  }
`;
