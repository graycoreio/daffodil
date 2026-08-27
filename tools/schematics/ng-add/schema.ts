export interface NgAddOptions {
  project?: string;
  skipPackageJson?: boolean;
  isNewProject?: boolean;
  driver?: 'magento' | 'shopify' | 'in-memory' | 'demo';
  driverVersion?: string;
}
