import { gql } from 'apollo-angular';

export const cmsSchemaPageFragment = gql`
  fragment cmsSchemaPage on CmsPage {
    identifier
    title
    content_schema_json
    meta_description
    meta_title
  }
`;
