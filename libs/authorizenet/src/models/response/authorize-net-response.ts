export interface AuthorizeNetMessage {
	code: string;
	text: string;
}

export interface AuthorizeNetResponse {
	opaqueData: {
		dataDescriptor: string;
		dataValue: string;
	};
	messages: {
		resultCode: string;
		message: AuthorizeNetMessage[];
	};
}