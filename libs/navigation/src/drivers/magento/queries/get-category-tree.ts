import gql from 'graphql-tag';

export const GetCategoryTree = gql`
  query GetCategoryTree($id: ID!){
    category(id: $id) {
      id
      name
      products {
        total_count
      }
      children_count
      children {
        id
        level
        name
        path
        children_count
        children {
          id
          level
          name
          path
          children_count
          children {
            id
            level
            name
            path
            children_count
            children {
              id
              level
              name
              path
              children_count
              children {
                id
                level
                name
                path
                children_count
                children {
                  id
                  level
                  name
                  path
                  children_count
                  children {
                    id
                    level
                    name
                    path
                    children_count
                    children {
                      id
                      level
                      name
                      path
                      children_count
                      children {
                        id
                        level
                        name
                        path
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
