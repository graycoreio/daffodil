import {gql} from 'apollo-angular';


export const createCart = gql`
  mutation CreateCart {
    createEmptyCart
  }
`;
