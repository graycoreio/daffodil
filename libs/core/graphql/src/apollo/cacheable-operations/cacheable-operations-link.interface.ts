import { ApolloLink } from '@apollo/client';

export interface DaffApolloLinkGenerator {
  getLink(): ApolloLink;
}
