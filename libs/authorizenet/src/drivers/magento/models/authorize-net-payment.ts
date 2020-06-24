export interface MagentoAuthorizeNetPayment {
	code: string;
	authorizenet_acceptjs: {
		cc_last_4: number;
		opaque_data_descriptor: string;
		opaque_data_value: string;
	}
}
