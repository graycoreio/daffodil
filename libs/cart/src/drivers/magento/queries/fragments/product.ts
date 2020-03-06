import gql from 'graphql-tag';

export const productFragment = gql`
  fragment product on MagnetoProduct {
    id
    image {
      label,
      url
    }
    name
    description
    sku
    url_key
    price {
      regularPrice
    }
    media_gallery_entries
    short_description
  }
`;
