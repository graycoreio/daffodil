// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const DemoDriverVariantEnum = {
	IN_MEMORY: 0,
	MAGENTO: 1,
	SHOPIFY: 2
}

export interface InMemoryEnviromentDriverConfiguration {
	variant: typeof DemoDriverVariantEnum.IN_MEMORY;
}

export interface MagentoEnvironmentDriverConfiguration {
	variant: typeof DemoDriverVariantEnum.MAGENTO;
	domain: string;
}

export interface ShopifyEnviromentDriverConfiguration {
	variant: typeof DemoDriverVariantEnum.SHOPIFY;
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
