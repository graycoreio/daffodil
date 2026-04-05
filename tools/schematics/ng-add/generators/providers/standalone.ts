import {
  Rule,
  Tree,
} from '@angular-devkit/schematics';

import { addProvidersToStandaloneApp } from '../../../utils';
import { NgAddOptions } from '../../schema';

export const addCoreProvidersToStandalone = (options: NgAddOptions, project: any): Rule => (tree: Tree) => {
  const driver = options.driver || 'demo';
  const magentoVersion = options.magentoVersion || '2.4.3';

  if (driver === 'magento' || driver === 'demo') {
    const stubPath = `${project.sourceRoot}/app/drivers/magento-version.ts`;
    const stubContent = `// To use a different Magento API version, change the import paths below.
// Supported versions: 2.4.1, 2.4.2, 2.4.3
export { provideDaffExternalRouterMagentoDriver } from '@daffodil/external-router/driver/magento/${magentoVersion}';
export { DaffExternalRouterMagentoDriver } from '@daffodil/external-router/driver/magento/${magentoVersion}';
`;
    if (tree.exists(stubPath)) {
      tree.overwrite(stubPath, stubContent);
    } else {
      tree.create(stubPath, stubContent);
    }
  }

  const coreProviders = [
    'provideHttpClient()',
  ];

  // Add dev tools only for demo mode
  if (driver === 'demo') {
    coreProviders.push(`provideDaffDevTools(
      {},
      withDriverConfig({
        name: '@daffodil/driver',
        currentDriver: 'in-memory',
        availableDrivers: [
          {
            id: 'in-memory',
            name: 'In-Memory Driver',
            properties: new Map(),
          },
          {
            id: 'fake',
            name: 'fakestoreapi.com Driver',
            properties: new Map(),
          },
          {
            id: 'magento',
            name: 'Magento/MageOS Driver',
            message: {
              type: 'warning',
              title: 'CORS Configuration Required',
              text: 'For Magento drivers, you may need to configure CORS on your Magento backend.',
              link: {
                text: 'Use graycoreio/magento2-cors package',
                url: 'https://github.com/graycoreio/magento2-cors',
              },
            },
            properties: new Map([
              [
                'baseUrl',
                {
                  type: 'input',
                  id: 'baseUrl',
                  label: 'Base URL',
                  placeholder: 'https://demo.mage-os.org/graphql',
                  defaultValue: 'https://demo.mage-os.org/graphql',
                },
              ],
              [
                'storeCode',
                {
                  type: 'input',
                  id: 'storeCode',
                  label: 'Store Code',
                  defaultValue: 'default',
                },
              ],
            ]),
          },
          {
            id: 'medusa',
            name: 'Medusa Driver (Coming soon!)',
            disabled: true,
            properties: new Map([
              [
                'api_url',
                {
                  type: 'input',
                  id: 'api_url',
                  label: 'API URL',
                  placeholder: 'http://localhost:9000/store',
                },
              ],
              [
                'publishable_api_key',
                {
                  type: 'input',
                  id: 'publishable_api_key',
                  label: 'publishable-api-key',
                  placeholder: 'pk_BASE16VALUEHERE',
                },
              ],
            ]),
          },
          {
            id: 'shopify',
            name: 'Shopify Driver',
            properties: new Map([
              [
                'endpoint',
                {
                  type: 'input',
                  id: 'endpoint',
                  label: 'Endpoint',
                  placeholder: 'https://myshop.myshopify.com',
                  defaultValue: 'https://daffodil-demo-alpha.myshopify.com',
                },
              ],
              [
                'access_token',
                {
                  type: 'input',
                  id: 'access_token',
                  label: 'Access Token',
                  defaultValue: '4ca94720e739fa7c4eff519e5b1e64a4',
                },
              ],
            ]),
          },
        ],
      }),
    )`);
  }

  coreProviders.push('', 'provideExternalRouter()', '');

  // Add driver-specific providers
  if (driver === 'in-memory' || driver === 'demo') {
    coreProviders.push(
      'provideVercelImageLoader(\'https://assets.daff.io\', { quality: 25, defaultWidth: 256 })',
      'provideDaffInMemoryDriver({ apiBase: \'daff-in-memory-web-api\', passThroughUnknownRequests: true })',
      'provideDaffProductInMemoryDriver()',
      'provideDaffNavigationInMemoryDriver()',
      'provideDaffExternalRouterInMemoryDriver()',
      '',
    );
  }

  // Magento providers
  if(driver === 'demo') {
    coreProviders.push(
      'provideMagentoDriver(DEMO_MAGENTO_DRIVER_CONFIG)',
    );
  }

  if(driver === 'magento') {
    coreProviders.push(
      `provideMagentoDriver({
				uri: "https://demo.mage-os.org/graphql"
			})`,
    );
  }

  if (driver === 'magento' || driver === 'demo') {
    coreProviders.push(
      'provideDaffProductMagentoDriver()',
      'provideDaffNavigationMagentoDriver()',
      'provideDaffExternalRouterMagentoDriver()',
      '',
    );
  }

  // Shopify Providers
  if(driver === 'demo') {
    coreProviders.push(
      'provideShopifyDriver(DEMO_SHOPIFY_ENDPOINT_SWITCH)',
    );
  }

  if(driver === 'shopify') {
    coreProviders.push(
      `provideShopifyDriver({
        accessToken: '4ca94720e739fa7c4eff519e5b1e64a4',
        domain: 'https://daffodil-demo-alpha.myshopify.com'
      })`,
    );
  }

  if (driver === 'shopify' || driver === 'demo') {
    coreProviders.push(
      'provideDaffProductShopifyDriver()',
      'provideDaffNavigationShopifyDriver()',
      'provideDaffExternalRouterShopifyDriver()',
      '',
    );
  }

  if(driver === 'demo') {
    coreProviders.push(
      'provideDaffProductDriver(DynamicSwitchDriverService)',
      'provideDaffNavigationDriver(DynamicSwitchNavigationService)',
      'provideDaffExternalRouterDriver(DynamicExternalRouterDriver)',
    );
  }

  return addProvidersToStandaloneApp(tree, project, coreProviders);
};
