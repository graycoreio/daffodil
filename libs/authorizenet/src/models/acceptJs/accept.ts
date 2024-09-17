import { AuthorizeNetRequest } from '../request/authorize-net-request';

export interface AcceptType {
  // TODO: narrow down the function type
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type, @typescript-eslint/no-restricted-types
  dispatchData(request: AuthorizeNetRequest, callback: Function): void;
}
