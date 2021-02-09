import { ApolloLink } from '@apollo/client/core';

export interface DaffApolloCacheableOperationLinkGenerator {
	getLink(): ApolloLink;
}
