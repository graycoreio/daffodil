import { AuthorizeNetOpaqueData } from './authorize-net-opaque-data';
import { AuthorizeNetMessages } from './authorize-net-messages';

export interface AuthorizeNetResponse {
	opaqueData: AuthorizeNetOpaqueData;
	messages: AuthorizeNetMessages;
}