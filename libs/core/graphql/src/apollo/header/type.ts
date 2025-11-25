/**
 * A function that returns a dict of headers to set on the Apollo GraphQL request.
 * This function is run in an injection context.
 */
export type DaffApolloHeaderProvider = () => Record<string, string>;
