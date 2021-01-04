import { MagentoOrderBundleItemSelectedOption, MagentoOrderItem } from './order-item'

export type MagentoOrderInvoiceItemTypenames =
  'InvoiceItem' |
  'BundleInvoiceItem' |
  'GiftCardInvoiceItem' |
  'DownloadableInvoiceItem';

export interface MagentoOrderInvoiceItem {
  __typename?: MagentoOrderInvoiceItemTypenames;
  order_item: MagentoOrderItem;
  quantity_invoiced: number;
};

export interface MagentoOrderInvoiceBundleItem extends MagentoOrderInvoiceItem {
  bundle_options: MagentoOrderBundleItemSelectedOption[];
};
