import {gql} from 'apollo-angular';


export const regionFragment = gql`
  fragment region on Region {
    code
    id
    name
  }
`;
