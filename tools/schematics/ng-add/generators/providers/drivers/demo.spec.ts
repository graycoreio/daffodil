import { Tree } from '@angular-devkit/schematics';

import { NgAddOptions } from '../../../schema';
import { addCoreProvidersToStandalone } from '../standalone';

describe('addCoreProvidersToStandalone | demo driver', () => {
  let tree: Tree;
  const project = {
    sourceRoot: '/projects/test-app/src',
  };
  const options: NgAddOptions = {
    project: 'test-app',
    skipPackageJson: false,
    driver: 'demo',
  };

  beforeEach(() => {
    tree = Tree.empty();
    tree.create('/projects/test-app/src/app/app.config.ts', `
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};
    `);
    tree.create('/projects/test-app/src/app/app.ts', `
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
})
export class App {}
    `);
  });

  it('should add in-memory driver providers', () => {
    const rule = addCoreProvidersToStandalone(options, project);
    const resultTree = <Tree>rule(tree, <any>{});
    const appConfigContent = resultTree.read('/projects/test-app/src/app/app.config.ts')?.toString();

    expect(appConfigContent).toContain('provideDaffInMemoryDriver');
    expect(appConfigContent).toContain('provideDaffProductInMemoryDriver');
    expect(appConfigContent).toContain('provideDaffNavigationInMemoryDriver');
    expect(appConfigContent).toContain('provideDaffExternalRouterInMemoryDriver');
  });

  it('should add magento driver providers', () => {
    const rule = addCoreProvidersToStandalone(options, project);
    const resultTree = <Tree>rule(tree, <any>{});
    const appConfigContent = resultTree.read('/projects/test-app/src/app/app.config.ts')?.toString();

    expect(appConfigContent).toContain('provideMagentoDriver');
    expect(appConfigContent).toContain('provideDaffProductMagentoDriver');
    expect(appConfigContent).toContain('provideDaffNavigationMagentoDriver');
    expect(appConfigContent).toContain('provideDaffExternalRouterMagentoDriver');
  });

  it('should add shopify driver providers', () => {
    const rule = addCoreProvidersToStandalone(options, project);
    const resultTree = <Tree>rule(tree, <any>{});
    const appConfigContent = resultTree.read('/projects/test-app/src/app/app.config.ts')?.toString();

    expect(appConfigContent).toContain('provideShopifyDriver');
    expect(appConfigContent).toContain('provideDaffProductShopifyDriver');
    expect(appConfigContent).toContain('provideDaffNavigationShopifyDriver');
    expect(appConfigContent).toContain('provideDaffExternalRouterShopifyDriver');
  });
});
