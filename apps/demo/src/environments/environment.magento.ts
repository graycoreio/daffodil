import {
  EnvironmentConfiguration,
  DemoDriverVariantEnum
} from './environment.interface';

/**
* The environment configuration of the magento environment
*/
export const environment: EnvironmentConfiguration = {
  production: true,
  driver: {
    variant: DemoDriverVariantEnum.MAGENTO,
    domain: 'https://magento2.test'
  }
}