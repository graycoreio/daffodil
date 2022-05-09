import { gql } from 'apollo-angular';

export const cmsBlockFragment = gql`
  fragment cmsBlock on CmsBlock {
    identifier
    title
    content
  }
`;
