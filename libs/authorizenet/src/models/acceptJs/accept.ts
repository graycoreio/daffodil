import { AuthorizeNetRequest } from '../request/authorize-net-request';

export interface AcceptType {
	dispatchData(request: AuthorizeNetRequest, callback: Function): void;
}