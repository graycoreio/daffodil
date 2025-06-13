import { ApolloQueryResult } from '@apollo/client/core';

/**
 * A validator for a GraphQL Apollo response.
 * Throws errors to indicate that the response is not valid.
 * Returns the response and throws no errors to indicate that the response
 * is valid as far as this particular validator is concerned.
 */
export type GraphQlApolloValidator<T> = (response: ApolloQueryResult<T>) => ApolloQueryResult<T>;
