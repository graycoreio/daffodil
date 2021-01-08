import {gql} from 'apollo-angular';


export const checkTokenQuery = gql`
  query CheckToken {
    customer {
      id
    }
  }
`
