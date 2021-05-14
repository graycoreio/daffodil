export interface MagentoCartItemInput {
  quantity: number;
  sku: string;
  parent_sku?: string;
  selected_options?: string[];
  entereded_options?: string[];
}
