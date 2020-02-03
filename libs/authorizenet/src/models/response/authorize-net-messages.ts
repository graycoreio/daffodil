import { AuthorizeNetMessage } from './authorize-net-message';

export interface AuthorizeNetMessages {
	resultCode: string;
	message: AuthorizeNetMessage[];
}
