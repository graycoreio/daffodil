export interface NgAddOptions {
  project?: string;
  skipPackageJson?: boolean;
  isNewProject?: boolean;
  driver?: 'magento' | 'shopify' | 'in-memory' | 'demo';
  magentoVersion?: '2.4.1' | '2.4.2' | '2.4.3';
}
