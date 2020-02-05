export interface DaffCartPaymentMethod {
  method: string;
}

export interface DaffCartPurchaseOrder extends DaffCartPaymentMethod {
  po_number: string;
}

export interface DaffCartTruncatedCreditCard extends DaffCartPaymentMethod {
  last_four: string;
  name: string;
	month: string;
	year: string;
}