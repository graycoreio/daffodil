export interface OrderPayment {
  payment_id: number;
  quote_id: number;
  created_at: Date;
  updated_at: Date;
  method: string; //todo: actually an enum
  cc_type: string;
  cc_number_enc: string;
  cc_last4: string;
  cc_cid_enc: string;
  cc_owner: string;
  cc_exp_month: string;
  cc_exp_year: string;
  cc_ss_owner: string;
  cc_ss_start_month: string;
  cc_ss_start_year: string;
  po_number: string;
  cc_ss_issue: string;
}