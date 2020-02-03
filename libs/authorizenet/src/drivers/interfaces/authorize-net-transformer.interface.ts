import { AuthorizeNetRequest } from '../../models/request/authorize-net-request';
import { AuthorizeNetResponse } from '../../models/response/authorize-net-response';
import { DaffAuthorizeNetTokenRequest } from '../../models/request/authorize-net-token-request';
import { DaffAuthorizeNetTokenResponse } from '../../models/response/authorize-net-token-response';
import { DaffAuthorizeNetConfig } from './authorize-net-config.interface';

export interface DaffAuthorizeNetTransformerService<T extends DaffAuthorizeNetTokenRequest, V extends DaffAuthorizeNetTokenResponse> {
	transformOut(request: T, config: DaffAuthorizeNetConfig): AuthorizeNetRequest;

	transformIn(response: AuthorizeNetResponse): V;
}
