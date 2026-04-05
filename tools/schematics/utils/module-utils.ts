import { Tree } from '@angular-devkit/schematics';
import * as ts from '@schematics/angular/third_party/github.com/Microsoft/TypeScript/lib/typescript';
import { insertImport } from '@schematics/angular/utility/ast-utils';
import { InsertChange } from '@schematics/angular/utility/change';

export function addProvidersToStandaloneApp(tree: Tree, project: any, providers: string[]): Tree {
  const appConfigPath = `${project.sourceRoot}/app/app.config.ts`;
  const mainPath = `${project.sourceRoot}/main.ts`;

  let configPath = '';
  let localImportPrefix = '.';

  // Determine which file to modify
  if (tree.exists(appConfigPath)) {
    configPath = appConfigPath;
  } else if (tree.exists(mainPath)) {
    configPath = mainPath;
    localImportPrefix = './app';
  } else {
    throw new Error('No app.config.ts or main.ts found for standalone app');
  }

  const configSource = tree.read(configPath);
  if (!configSource) {
    throw new Error(`Config file ${configPath} not found`);
  }

  const sourceText = configSource.toString();
  const source = ts.createSourceFile(configPath, sourceText, ts.ScriptTarget.Latest, true);

  // Add import statements
  const importChanges: InsertChange[] = [];
  providers.forEach(provider => {
    // Skip empty strings used for spacing
    if (!provider || provider.trim() === '') {
      return;
    }

    const providerNames = extractProviderNames(provider);
    providerNames.forEach(providerName => {
      const packageName = getPackageForProvider(providerName);
      const change = insertImport(source, configPath, providerName, packageName);
      if (change instanceof InsertChange) {
        importChanges.push(change);
      }
    });

    // Add DynamicSwitchDriverService import when using provideDaffProductDriver
    if (provider.includes('provideDaffProductDriver')) {
      const driverChange = insertImport(source, configPath, 'DynamicSwitchDriverService', `${localImportPrefix}/daff/product/drivers/dynamic/dynamic-switch.service`);
      if (driverChange instanceof InsertChange) {
        importChanges.push(driverChange);
      }
    }

    // Add DynamicSwitchNavigationService import when using provideDaffNavigationDriver
    if (provider.includes('provideDaffNavigationDriver')) {
      const navDriverChange = insertImport(source, configPath, 'DynamicSwitchNavigationService', `${localImportPrefix}/daff/navigation/drivers/dynamic/dynamic-switch.service`);
      if (navDriverChange instanceof InsertChange) {
        importChanges.push(navDriverChange);
      }
    }

    // Add DynamicExternalRouterDriver import when using provideDaffExternalRouterDriver
    if (provider.includes('provideDaffExternalRouterDriver')) {
      const routerDriverChange = insertImport(source, configPath, 'DynamicExternalRouterDriver', `${localImportPrefix}/daff/external-router/drivers/dynamic`);
      if (routerDriverChange instanceof InsertChange) {
        importChanges.push(routerDriverChange);
      }
    }

    // Add DEMO_MAGENTO_DRIVER_CONFIG import when using provideMagentoDriver
    if (provider.includes('DEMO_MAGENTO_DRIVER_CONFIG')) {
      const endpointChange = insertImport(source, configPath, 'DEMO_MAGENTO_DRIVER_CONFIG', `${localImportPrefix}/daff/driver/magento/config.token`);
      if (endpointChange instanceof InsertChange) {
        importChanges.push(endpointChange);
      }
    }

    // Add DEMO_SHOPIFY_ENDPOINT_SWITCH import when using provideShopifyDriver
    if (provider.includes('DEMO_SHOPIFY_ENDPOINT_SWITCH')) {
      const shopifyEndpointChange = insertImport(source, configPath, 'DEMO_SHOPIFY_ENDPOINT_SWITCH', `${localImportPrefix}/daff/driver/shopify/endpoint-switch`);
      if (shopifyEndpointChange instanceof InsertChange) {
        importChanges.push(shopifyEndpointChange);
      }
    }

    // Add importProvidersFrom import for modules used as providers
    if (provider.includes('Module')) {
      const importProvidersChange = insertImport(source, configPath, 'importProvidersFrom', '@angular/core');
      if (importProvidersChange instanceof InsertChange) {
        importChanges.push(importProvidersChange);
      }
    }
  });

  // Apply import changes
  const recorder = tree.beginUpdate(configPath);
  importChanges.forEach(change => {
    recorder.insertLeft(change.pos, change.toAdd);
  });
  tree.commitUpdate(recorder);

  const updatedSource = tree.read(configPath);
  if (!updatedSource) {
    throw new Error(`Config file ${configPath} not found after update`);
  }
  let updatedContent = updatedSource.toString();

  // Add providers to the providers array
  const providersToAdd = providers
    .filter(provider => provider && provider.trim() !== '')
    .map(provider => {
      if (provider.includes('Module')) {
        return `importProvidersFrom(${provider})`;
      }
      return provider;
    });

  // Find and update the providers array
  if (updatedContent.includes('providers: [')) {
    // Add to existing providers array - find the last item before closing bracket
    const providersStart = updatedContent.indexOf('providers: [');
    const bracketStart = providersStart + 'providers: ['.length;

    // Find the matching closing bracket
    let bracketCount = 1;
    let bracketEnd = bracketStart;
    for (let i = bracketStart; i < updatedContent.length && bracketCount > 0; i++) {
      if (updatedContent[i] === '[') {
        bracketCount++;
      }
      if (updatedContent[i] === ']') {
        bracketCount--;
      }
      if (bracketCount === 0) {
        bracketEnd = i;
        break;
      }
    }

    const existingProviders = updatedContent.substring(bracketStart, bracketEnd).trim();
    let newProviders;
    if (existingProviders) {
      // Clean up any malformed syntax and add new providers
      const cleanExisting = existingProviders.replace(/,\s*$/, '').replace(/\]\s*$/, '');
      newProviders = `${cleanExisting},\n    ${providersToAdd.join(',\n    ')}`;
    } else {
      newProviders = `\n    ${providersToAdd.join(',\n    ')}\n  `;
    }

    updatedContent = updatedContent.substring(0, bracketStart) + newProviders + updatedContent.substring(bracketEnd);
  } else {
    // Add providers array if it doesn't exist
    const configRegex = /(export const appConfig[^=]*=\s*{[^}]*)(})/s;
    const match = updatedContent.match(configRegex);
    if (match) {
      const providersArray = `providers: [\n    ${providersToAdd.join(',\n    ')}\n  ],\n  `;
      updatedContent = updatedContent.replace(configRegex, `$1${providersArray}$2`);
    }
  }

  tree.overwrite(configPath, updatedContent);
  return tree;
}

function getPackageForImport(importName: string): string {
  const packageMap: { [key: string]: string } = {
    DaffCoreModule: '@daffodil/core',
    DaffMagentoModule: '@daffodil/driver/magento',
    DaffInMemoryModule: '@daffodil/driver/in-memory',
    DaffButtonModule: '@daffodil/design/button',
    DaffCardModule: '@daffodil/design/card',
    DaffContainerModule: '@daffodil/design/container',
    DaffNavbarModule: '@daffodil/design/navbar',
    DaffSidebarModule: '@daffodil/design/sidebar',
    DaffCartStateModule: '@daffodil/cart/state',
    DaffCartMagentoDriverModule: '@daffodil/cart/driver/magento',
    DaffCartInMemoryDriverModule: '@daffodil/cart/driver/in-memory',
    DaffProductStateModule: '@daffodil/product/state',
    DaffProductMagentoDriverModule: '@daffodil/product/driver/magento',
    DaffProductInMemoryDriverModule: '@daffodil/product/driver/in-memory',
    DaffAuthStateModule: '@daffodil/auth/state',
    DaffAuthMagentoDriverModule: '@daffodil/auth/driver/magento',
    DaffAuthInMemoryDriverModule: '@daffodil/auth/driver/in-memory',
    DaffSearchStateModule: '@daffodil/search/state',
    DaffSearchProductMagentoDriverModule: '@daffodil/search-product/driver/magento',
    DaffSearchProductInMemoryDriverModule: '@daffodil/search-product/driver/in-memory',
    DaffCheckoutStateModule: '@daffodil/checkout/state',
  };

  return packageMap[importName] || '@daffodil/core';
}

function getPackageForProvider(providerName: string): string {
  // For modules used as providers, use the same mapping
  if (providerName.includes('Module')) {
    return getPackageForImport(providerName);
  }

  // Add mappings for standalone providers if needed
  const providerMap: { [key: string]: string } = {
    importProvidersFrom: '@angular/core',
    provideStore: '@ngrx/store',
    provideEffects: '@ngrx/effects',
    provideStoreDevtools: '@ngrx/store-devtools',
    provideRouter: '@angular/router',
    provideHttpClient: '@angular/common/http',
    provideVercelImageLoader: '@daffodil/core',
    provideDaffInMemoryBackends: '@daffodil/driver/in-memory',
    provideDaffInMemoryDriverConfig: '@daffodil/driver/in-memory',
    provideDaffInMemoryDriver: '@daffodil/driver/in-memory',
    provideDaffProductDriver: '@daffodil/product/driver',
    provideDaffProductInMemoryDriver: '@daffodil/product/driver/in-memory',
    DaffProductInMemoryDriver: '@daffodil/product/driver/in-memory',
    provideDaffDevTools: '@daffodil/dev-tools',
    withDriverConfig: '@daffodil/dev-tools',
    provideMagentoDriver: '@daffodil/driver/magento',
    provideDaffProductMagentoDriver: '@daffodil/product/driver/magento',
    DaffProductMagentoDriver: '@daffodil/product/driver/magento',
    provideShopifyDriver: '@daffodil/driver/shopify',
    provideDaffProductShopifyDriver: '@daffodil/product/driver/shopify',
    DaffProductShopifyDriver: '@daffodil/product/driver/shopify',
    provideDaffNavigationInMemoryDriver: '@daffodil/navigation/driver/in-memory',
    DaffNavigationInMemoryDriver: '@daffodil/navigation/driver/in-memory',
    provideDaffNavigationMagentoDriver: '@daffodil/navigation/driver/magento',
    DaffNavigationMagentoDriver: '@daffodil/navigation/driver/magento',
    provideDaffNavigationShopifyDriver: '@daffodil/navigation/driver/shopify',
    DaffNavigationShopifyDriver: '@daffodil/navigation/driver/shopify',
    provideDaffNavigationDriver: '@daffodil/navigation/driver',
    provideExternalRouter: '@daffodil/external-router',
    provideDaffExternalRouterInMemoryDriver: '@daffodil/external-router/driver/in-memory',
    provideDaffExternalRouterMagentoDriver: './magento-version',
    DaffExternalRouterMagentoDriver: './magento-version',
    provideDaffExternalRouterShopifyDriver: '@daffodil/external-router/driver/shopify',
    DaffExternalRouterShopifyDriver: '@daffodil/external-router/driver/shopify',
    provideDaffExternalRouterDriver: '@daffodil/external-router/driver',
  };

  return providerMap[providerName] || '@angular/core';
}

function extractProviderNames(provider: string): string[] {
  // Extract only provider function names (functions starting with 'provide' or 'with')
  // Handles cases like "provideDaffDevTools({}, withDriverConfig({...}))"
  // Avoids matching constructor calls like "new Map()" within configuration objects
  const functionRegex = /\b((?:provide|with)[a-zA-Z0-9_]*)\s*\(/g;
  const matches: string[] = [];
  let match;

  while ((match = functionRegex.exec(provider)) !== null) {
    matches.push(match[1]);
  }

  return matches.length > 0 ? matches : [provider];
}
