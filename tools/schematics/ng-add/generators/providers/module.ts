import {
  Rule,
  Tree,
} from '@angular-devkit/schematics';

import { addProvidersToModule } from '../../../utils';
import { NgAddOptions } from '../../schema';

export const addCoreImports = (_options: NgAddOptions, project: any): Rule => (tree: Tree) => {
  const appModulePath = `${project.sourceRoot}/app/app-module.ts`;

  const coreProviders = [
    'provideHttpClient()',
    'provideDaffInMemoryDriver({ apiBase: \'daff-in-memory-web-api\', passThroughUnknownRequests: true})',
    'provideDaffProductInMemoryDriver()',
    `provideDaffDevTools({
        startCollapsed: false
      },
      withDriverConfig({
        name: '@daffodil/product/driver',
        status: 'connected',
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
            name: 'Magento Driver',
            properties: new Map([
              ['baseUrl', { type: 'input', id: 'baseUrl', label: 'Base URL', placeholder: "https://www.mymagentostore.com/graphql" }],
              ['storeCode', { type: 'input', id: 'storeCode', label: 'Store Code', defaultValue: 'default' }],
            ]),
          },
          {
            id: 'shopify',
            name: 'Shopify Driver (Coming soon!)',
            disabled: true,
            properties: new Map([
              ['endpoint', { type: 'input', id: 'endpoint', label: 'Endpoint', placeholder: "https://myshop.myshopify.com/api/2025-07/graphql.json" }],
            ]),
          },
        ]
      })
      )`,
    'provideMagentoDriver(DEMO_MAGENTO_ENDPOINT_SWITCH)',
    'provideDaffProductMagentoDriver()',
    'provideDaffProductDriver(DynamicSwitchDriverService)',
  ];

  // Add providers to the providers array
  return addProvidersToModule(tree, appModulePath, coreProviders);
};
