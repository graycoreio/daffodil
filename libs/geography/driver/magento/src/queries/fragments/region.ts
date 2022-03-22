import { gql } from '@damienwebdev/apollo-angular';


export const regionFragment = gql`
  fragment region on Region {
    code
    id
    name
  }
`;
