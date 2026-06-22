import { Apollo } from 'apollo-angular';

export type ValidatedResponse<T, Shape> = {
  [K in keyof T]: K extends keyof Shape
    ? Shape[K] extends true
      ? NonNullable<T[K]>
      : ValidatedResponse<NonNullable<T[K]>, Shape[K]>
    : T[K];
};

/**
 * A validator for a GraphQL Apollo response.
 * Throws errors to indicate that the response is not valid.
 * Returns the response and throws no errors to indicate that the response
 * is valid as far as this particular validator is concerned.
 */
export type GraphQlApolloValidator<T, Shape> = (response: Apollo.QueryResult<T>) => ValidatedResponse<Apollo.QueryResult<T>, Shape>;
