import gql from 'graphql-tag';

export const GetCategoryTree = gql`
  query GetCategoryTree($filters: CategoryFilterInput!){
    categoryList(filters: $filters) {
      id
      name
      include_in_menu
      products {
        total_count
      }
      children_count
      children {
        id
        level
        name
        include_in_menu
        products {
          total_count
        }
        path
        children_count
        children {
          id
          level
          name
          include_in_menu
          products {
            total_count
          }
          path
          children_count
          children {
            id
            level
            name
            include_in_menu
            products {
              total_count
            }
            path
            children_count
            children {
              id
              level
              name
              include_in_menu
              products {
                total_count
              }
              path
              children_count
              children {
                id
                level
                name
                include_in_menu
                products {
                  total_count
                }
                path
                children_count
                children {
                  id
                  level
                  name
                  include_in_menu
                  products {
                    total_count
                  }
                  path
                  children_count
                  children {
                    id
                    level
                    name
                    include_in_menu
                    products {
                      total_count
                    }
                    path
                    children_count
                    children {
                      id
                      level
                      name
                      include_in_menu
                      products {
                        total_count
                      }
                      path
                      children_count
                      children {
                        id
                        level
                        name
                        include_in_menu
                        products {
                          total_count
                        }
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
