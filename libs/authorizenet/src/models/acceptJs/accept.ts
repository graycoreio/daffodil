import { AuthorizeNetRequest } from '../request/authorize-net-request';

export interface AcceptType {
  // TODO: narrow down the function type
  // eslint-disable-next-line @typescript-eslint/ban-types
	dispatchData(request: AuthorizeNetRequest, callback: Function): void;
}
