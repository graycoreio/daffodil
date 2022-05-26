import { gql } from 'apollo-angular';

export const magentoProductPageInfoFragment = gql`
  fragment magentoProductPageInfo on SearchResultPageInfo {
    page_size
    current_page
    total_pages
  }
`;
