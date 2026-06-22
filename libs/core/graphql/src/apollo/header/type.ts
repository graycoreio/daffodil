import { HttpHeaders } from '@angular/common/http';

/**
 * A function that returns headers to set on the Apollo GraphQL request.
 * This function is run in an injection context.
 */
export type DaffApolloHeaderProvider = () => HttpHeaders;
