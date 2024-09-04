// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --configuration production` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { DaffAuthorizeNetConfig } from '@daffodil/authorizenet/driver';

export enum DemoDriverVariantEnum {
  IN_MEMORY = 'IN_MEMORY',
  MAGENTO = 'MAGENTO',
  SHOPIFY = 'SHOPIFY',
};

export interface InMemoryEnviromentDriverConfiguration {
  variant: DemoDriverVariantEnum.IN_MEMORY;
}

export interface MagentoEnvironmentDriverConfiguration {
  variant: DemoDriverVariantEnum.MAGENTO;
  domain: string;
  anetConfig: DaffAuthorizeNetConfig;
}

export interface ShopifyEnviromentDriverConfiguration {
  variant: DemoDriverVariantEnum.SHOPIFY;
  domain: string;
  publicAccessToken: string;
}

export interface EnvironmentConfiguration {
  production: boolean;
  driver:
  | InMemoryEnviromentDriverConfiguration
  | MagentoEnvironmentDriverConfiguration
  | ShopifyEnviromentDriverConfiguration;
}
