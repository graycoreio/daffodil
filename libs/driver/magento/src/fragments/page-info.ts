import { gql } from 'apollo-angular';

export const magentoSearchResultPageInfoFragment = gql`
  fragment magentoSearchResultPageInfo on SearchResultPageInfo {
    page_size
    current_page
    total_pages
  }
`;
