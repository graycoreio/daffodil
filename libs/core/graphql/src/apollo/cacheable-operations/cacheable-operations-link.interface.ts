import { ApolloLink } from '@apollo/client/core';

export interface DaffApolloLinkGenerator {
  getLink(): ApolloLink;
}
