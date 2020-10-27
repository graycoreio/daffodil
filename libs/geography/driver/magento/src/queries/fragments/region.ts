import gql from 'graphql-tag';

export const regionFragment = gql`
  fragment region on Region {
    code
    id
    name
  }
`;
