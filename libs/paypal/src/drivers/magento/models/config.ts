export interface DaffMagentoPaypalConfig {
	cancel_url: string;
	return_url: string;
	code?: string;
	pending_url?: string;
	success_url?: string;
	express_button?: boolean;
	use_paypal_credit?: boolean
}
