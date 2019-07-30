import gql from 'graphql-tag';

export interface MagentoGetAProductQueryResponse {
  storeConfig: {
    secure_base_media_url: string
  }
  products: {
    items: {
      id: string;
      name: string;
      sku: string;
      url_key: string;
      image: {
        url: string;
      }
      media_gallery_entries: {
        label: string;
        file: string;
        position: string;
        disabled: string;
        id: string;
      }[]
      short_description: {
        html: string;
      }
      description: {
        html: string;
      }
    }[]
  }
} 