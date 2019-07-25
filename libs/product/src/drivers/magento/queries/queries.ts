import gql from 'graphql-tag';

export const MagentoGetAllProductsQuery = gql`
  query GetAllProducts($pageSize: Int)
  {
    products(search: "Shirt", pageSize: $pageSize)
    {
      total_count
      items {
        id
        name
        sku
        image {
          url
        }
        price {
          regularPrice {
            amount {
              value
              currency
            }
          }
        }
      }
      page_info {
        page_size
        current_page
      }
    }
  }
`;

export const MagentoGetAProductQuery = gql`
  query GetAProduct($sku: String!){
    products(filter: {sku: {
      eq: $sku
    }}){
      items {
        id
        name
        sku
        image {
          url
        }
        short_description {
          html
        }
      }
    }
  }
`;