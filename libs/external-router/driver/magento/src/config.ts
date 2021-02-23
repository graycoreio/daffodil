import { InjectionToken } from '@angular/core';

export const daffExternalRouterDriverMagentoConfigurationDefault: DaffExternalRouterMagentoDriverConfig = {
	version: '2.4.2',
};

/**
 * The token holding the runtime configuration for the behavior of the
 * `@daffodil/external-router/driver/magento` package.
 */
export const DAFF_EXTERNAL_ROUTER_DRIVER_MAGENTO_CONFIG = new InjectionToken<
	DaffExternalRouterMagentoDriverConfig
>('DAFF_EXTERNAL_ROUTER_DRIVER_MAGENTO_CONFIG', {
	providedIn: 'root',
	factory: () => daffExternalRouterDriverMagentoConfigurationDefault,
});

export interface DaffExternalRouterMagentoDriverConfig {
	/**
	 * The version of Magento that we're sending queries to.
	 */
	version: '2.4.1' | '2.4.2' | string;
}
