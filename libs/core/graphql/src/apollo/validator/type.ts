import { Apollo } from 'apollo-angular';

/**
 * A validator for a GraphQL Apollo response.
 * Throws errors to indicate that the response is not valid.
 * Returns the response and throws no errors to indicate that the response
 * is valid as far as this particular validator is concerned.
 */
export type GraphQlApolloValidator<T> = (response: Apollo.QueryResult<T>) => Apollo.QueryResult<T>;
