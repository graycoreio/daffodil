import gql from 'graphql-tag';

export const createCart = gql`
  mutation CreateCart {
    createEmptyCart
  }
`;
