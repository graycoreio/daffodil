import {
	EnvironmentConfiguration,
	DemoDriverVariantEnum,
} from './environment.interface';

export const environment: EnvironmentConfiguration = {
	production: true,
	driver: {
		variant: DemoDriverVariantEnum.SHOPIFY,
		publicAccessToken: '9419ecdd446b983348bc3b47dccc8b84',
		domain: 'https://daffodil-demo-alpha.myshopify.com',
	},
};
