export interface MagentoCustomerAddressRegionInput {
  region?: string;
  region_code?: string;
  /**
   * Note that this is always required for US addresses even though the schema does not enforce it.
   */
  region_id?: number;
}
