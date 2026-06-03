import { HttpHeaders } from '@angular/common/http';
import { ApolloLink } from '@apollo/client';

export function getApolloOperationHeaders(operation: ApolloLink.Operation): HttpHeaders {
  return operation.getContext().headers || new HttpHeaders();
}
