import {
  ApolloLink,
  CombinedGraphQLErrors,
} from '@apollo/client';
import { ErrorLink } from '@apollo/client/link/error';

/**
 * Creates an Apollo error handling link to log GraphQL and network errors.
 *
 * @returns An ApolloLink instance that logs errors to the console.
 */
export function createErrorLink(): ApolloLink {
  return new ErrorLink(({ error }) => {
    if (CombinedGraphQLErrors.is(error)) {
      error.errors.map(({ message, locations, path }) =>
        console.error(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),
      );
    } else {
      console.error(`[Network error]: ${error.message}`);
    }
  });
}
