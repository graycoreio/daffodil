import { Tree } from '@angular-devkit/schematics';

import { initAppProviders } from './init';
import { NgAddOptions } from '../../schema';

describe('initAppProviders', () => {
  let tree: Tree;
  const project = {
    sourceRoot: '/projects/test-app/src',
  };
  const options: NgAddOptions = {
    project: 'test-app',
    skipPackageJson: false,
  };

  beforeEach(() => {
    tree = Tree.empty();
  });

  describe('when app is standalone', () => {
    beforeEach(() => {
      // Create standalone app structure
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

    it('should add providers to standalone app', () => {
      const rule = initAppProviders(options, project);
      const resultTree = <Tree>rule(tree, <any>{});

      const appConfigContent = resultTree.read('/projects/test-app/src/app/app.config.ts')?.toString();

      expect(appConfigContent).toContain('provideHttpClient');
      expect(appConfigContent).toContain('provideVercelImageLoader');
      expect(appConfigContent).toContain('provideDaffDevTools');
      expect(appConfigContent).toContain('provideDaffInMemoryDriver');
      expect(appConfigContent).toContain('provideDaffProductDriver');
    });

    it('should add dynamic switch services', () => {
      const rule = initAppProviders(options, project);
      const resultTree = <Tree>rule(tree, <any>{});

      const appConfigContent = resultTree.read('/projects/test-app/src/app/app.config.ts')?.toString();

      expect(appConfigContent).toContain('provideDaffProductDriver(DynamicSwitchDriverService)');
      expect(appConfigContent).toContain('provideDaffNavigationDriver(DynamicSwitchNavigationService)');
      expect(appConfigContent).toContain('provideDaffExternalRouterDriver(DynamicExternalRouterDriver)');
    });

    it('should add external router provider', () => {
      const rule = initAppProviders(options, project);
      const resultTree = <Tree>rule(tree, <any>{});

      const appConfigContent = resultTree.read('/projects/test-app/src/app/app.config.ts')?.toString();

      expect(appConfigContent).toContain('provideExternalRouter()');
    });

    it('should add endpoint switch tokens', () => {
      const rule = initAppProviders(options, project);
      const resultTree = <Tree>rule(tree, <any>{});

      const appConfigContent = resultTree.read('/projects/test-app/src/app/app.config.ts')?.toString();

      expect(appConfigContent).toContain('DEMO_MAGENTO_ENDPOINT_SWITCH');
      expect(appConfigContent).toContain('DEMO_SHOPIFY_ENDPOINT_SWITCH');
    });
  });

  describe('when app is not standalone', () => {
    beforeEach(() => {
      // Create module-based app structure
      tree.create('/projects/test-app/src/app/app.module.ts', `
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [],
  providers: []
})
export class AppModule {}
      `);
    });

    it('should throw an error', () => {
      const rule = initAppProviders(options, project);

      expect(() => {
        rule(tree, <any>{});
      }).toThrowError('The @daffodil/commerce schematic only supports standalone applications.');
    });
  });
});
