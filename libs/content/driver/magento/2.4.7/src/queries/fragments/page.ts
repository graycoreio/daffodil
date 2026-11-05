import { gql } from 'apollo-angular';

export const cmsPageFragment = gql`
  fragment cmsPage on CmsPage {
    identifier
    title
    content
		meta_description
    meta_title
  }
`;
