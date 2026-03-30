import { gql } from 'apollo-angular';

export const shopifyProductCoreFragment = gql`
  fragment productCoreFragment on Product {
		handle
		title
		id
		description
		onlineStoreUrl
		availableForSale
  }
`;

export const shopifyCollectionCoreFragment = gql`
  fragment collectionCoreFragment on Collection {
		handle
		title
		id
		description
		onlineStoreUrl
  }
`;
