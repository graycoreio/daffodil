export interface MagentoCartItemInput {
  quantity: number;
  sku: string;
  parent_sku?: string;
  selected_options?: string[];
  entered_options?: MagentoEnteredOptionInput[];
}

export interface MagentoEnteredOptionInput {
  uid: string;
  value: string;
}
