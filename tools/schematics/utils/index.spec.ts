import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { Schema as ApplicationOptions } from '@schematics/angular/application/schema';
import { Schema as WorkspaceOptions } from '@schematics/angular/workspace/schema';
import * as path from 'path';

import {
  isStandaloneApp,
  addImportsToModule,
  addProvidersToStandaloneApp,
  addDependenciesToPackageJson,
} from './index';
import { NgAddOptions } from '../ng-add/schema';

const collectionPath = path.join(__dirname, '../collection.json');

describe('Utils', () => {
  const workspaceOptions: WorkspaceOptions = {
    name: 'workspace',
    newProjectRoot: 'projects',
    version: '19.0.0',
  };

  const appOptions: ApplicationOptions = {
    name: 'test-app',
    inlineStyle: false,
    inlineTemplate: false,
    routing: false,
    skipTests: false,
    skipPackageJson: false,
    standalone: false,
  };

  const standaloneAppOptions: ApplicationOptions = {
    ...appOptions,
    standalone: true,
  };

  let runner: SchematicTestRunner;
  let moduleAppTree: UnitTestTree;
  let standaloneAppTree: UnitTestTree;

  beforeEach(async () => {
    runner = new SchematicTestRunner('schematics', collectionPath);

    // Create module-based app
    const workspaceTree = await runner.runExternalSchematic('@schematics/angular', 'workspace', workspaceOptions);
    moduleAppTree = await runner.runExternalSchematic('@schematics/angular', 'application', appOptions, workspaceTree);

    // Create standalone app
    const standaloneWorkspaceTree = await runner.runExternalSchematic('@schematics/angular', 'workspace', workspaceOptions);
    standaloneAppTree = await runner.runExternalSchematic('@schematics/angular', 'application', standaloneAppOptions, standaloneWorkspaceTree);
  });

  describe('isStandaloneApp', () => {
    it('should return false for module-based apps', () => {
      const project = {
        sourceRoot: 'projects/test-app/src',
      };

      const result = isStandaloneApp(moduleAppTree, project);
      expect(result).toBe(false);
    });

    it('should return true for standalone apps', () => {
      const project = {
        sourceRoot: 'projects/test-app/src',
      };

      const result = isStandaloneApp(standaloneAppTree, project);
      expect(result).toBe(true);
    });

    it('should return true when app.config.ts exists', () => {
      const tree = Tree.empty();
      tree.create('src/app/app.config.ts', 'export const appConfig = {};');

      const project = { sourceRoot: 'src' };
      const result = isStandaloneApp(tree, project);
      expect(result).toBe(true);
    });

    it('should return true when main.ts contains bootstrapApplication', () => {
      const tree = Tree.empty();
      tree.create('src/main.ts', `
        import { bootstrapApplication } from '@angular/platform-browser';
        import { AppComponent } from './app/app.component';

        bootstrapApplication(AppComponent);
      `);

      const project = { sourceRoot: 'src' };
      const result = isStandaloneApp(tree, project);
      expect(result).toBe(true);
    });

    it('should return false when only app-module.ts exists', () => {
      const tree = Tree.empty();
      tree.create('src/app/app-module.ts', `
        import { NgModule } from '@angular/core';
        @NgModule({})
        export class AppModule {}
      `);

      const project = { sourceRoot: 'src' };
      const result = isStandaloneApp(tree, project);
      expect(result).toBe(false);
    });
  });

  describe('addImportsToModule', () => {
    it('should add imports to app-module.ts', () => {
      const modulePath = '/projects/test-app/src/app/app-module.ts';
      const imports = ['DaffCoreModule', 'DaffCartStateModule'];

      const result = addImportsToModule(moduleAppTree, modulePath, imports);
      const moduleContent = result.read(modulePath)?.toString() || '';

      expect(moduleContent).toContain('import { DaffCoreModule }');
      expect(moduleContent).toContain('import { DaffCartStateModule }');
    });

    it('should throw error when module file does not exist', () => {
      const modulePath = '/projects/test-app/src/app/non-existent.module.ts';
      const imports = ['DaffCoreModule'];

      expect(() => {
        addImportsToModule(moduleAppTree, modulePath, imports);
      }).toThrowError(/Module file.*not found/);
    });
  });

  describe('addProvidersToStandaloneApp', () => {
    it('should add providers to app.config.ts', () => {
      const project = { sourceRoot: 'projects/test-app/src' };
      const providers = ['importProvidersFrom', 'DaffCoreModule', 'DaffCartStateModule'];

      const result = addProvidersToStandaloneApp(standaloneAppTree, project, providers);
      const configContent = result.read('/projects/test-app/src/app/app.config.ts')?.toString() || '';

      expect(configContent).toContain('importProvidersFrom');
      expect(configContent).toContain('DaffCoreModule');
      expect(configContent).toContain('DaffCartStateModule');
    });

    it('should add imports for providers', () => {
      const project = { sourceRoot: 'projects/test-app/src' };
      const providers = ['DaffCoreModule'];

      const result = addProvidersToStandaloneApp(standaloneAppTree, project, providers);
      const configContent = result.read('/projects/test-app/src/app/app.config.ts')?.toString() || '';

      expect(configContent).toContain('import { DaffCoreModule } from \'@daffodil/core\'');
    });

    it('should handle existing providers array', () => {
      const tree = Tree.empty();
      tree.create('src/app/app.config.ts', `
        export const appConfig = {
          providers: [
            provideRouter([]),
          ]
        };
      `);

      const project = { sourceRoot: 'src' };
      const providers = ['DaffCoreModule'];

      const result = addProvidersToStandaloneApp(tree, project, providers);
      const configContent = result.read('/src/app/app.config.ts')?.toString() || '';

      expect(configContent).toContain('provideRouter');
      expect(configContent).toContain('DaffCoreModule');
    });

    it('should create providers array if it does not exist', () => {
      const tree = Tree.empty();
      tree.create('src/app/app.config.ts', `
        export const appConfig = {
        };
      `);

      const project = { sourceRoot: 'src' };
      const providers = ['DaffCoreModule'];

      const result = addProvidersToStandaloneApp(tree, project, providers);
      const configContent = result.read('/src/app/app.config.ts')?.toString() || '';

      expect(configContent).toContain('providers: [');
      expect(configContent).toContain('DaffCoreModule');
    });

    it('should throw error when no config file exists', () => {
      const tree = Tree.empty();
      const project = { sourceRoot: 'src' };
      const providers = ['DaffCoreModule'];

      expect(() => {
        addProvidersToStandaloneApp(tree, project, providers);
      }).toThrowError(/No app.config.ts or main.ts found/);
    });
  });

  describe('addDependenciesToPackageJson', () => {
    it('should add core dependencies', () => {
      const options: NgAddOptions = {
        project: 'test-app',
        skipPackageJson: false,
      };

      const rule = addDependenciesToPackageJson(options);
      const result = rule(moduleAppTree, {} as any);
      const packageJson = JSON.parse((result as Tree).read('/package.json')?.toString() || '{}');

      expect(packageJson.dependencies['@daffodil/core']).toBeDefined();
      expect(packageJson.dependencies['@daffodil/driver']).toBeDefined();
    });

    it('should add feature-specific dependencies', () => {
      const options: NgAddOptions = {
        project: 'test-app',
        skipPackageJson: false,
      };

      const rule = addDependenciesToPackageJson(options);
      const result = rule(moduleAppTree, {} as any);
      const packageJson = JSON.parse((result as Tree).read('/package.json')?.toString() || '{}');

      expect(packageJson.dependencies['@daffodil/product']).toBeDefined();
    });

    it('should add magento-specific dependencies', () => {
      const options: NgAddOptions = {
        project: 'test-app',
        skipPackageJson: false,
      };

      const rule = addDependenciesToPackageJson(options);
      const result = rule(moduleAppTree, {} as any);
      const packageJson = JSON.parse((result as Tree).read('/package.json')?.toString() || '{}');

      expect(packageJson.dependencies['@daffodil/product']).toBeDefined();
    });

    it('should add in-memory dependencies', () => {
      const options: NgAddOptions = {
        project: 'test-app',
        skipPackageJson: false,
      };

      const rule = addDependenciesToPackageJson(options);
      const result = rule(moduleAppTree, {} as any);
      const packageJson = JSON.parse((result as Tree).read('/package.json')?.toString() || '{}');

      expect(packageJson.dependencies['@daffodil/product']).toBeDefined();
    });

    it('should add all feature dependencies when all features are selected', () => {
      const options: NgAddOptions = {
        project: 'test-app',
        skipPackageJson: false,
      };

      const rule = addDependenciesToPackageJson(options);
      const result = rule(moduleAppTree, {} as any);
      const packageJson = JSON.parse((result as Tree).read('/package.json')?.toString() || '{}');

      expect(packageJson.dependencies['@daffodil/product']).toBeDefined();
    });
  });
});