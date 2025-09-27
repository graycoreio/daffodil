import {
  SchematicTestRunner,
  UnitTestTree,
} from '@angular-devkit/schematics/testing';
import { Schema as ApplicationOptions } from '@schematics/angular/application/schema';
import { Schema as WorkspaceOptions } from '@schematics/angular/workspace/schema';
import * as path from 'path';

import { NgAddOptions } from './schema';

const collectionPath = path.join(__dirname, '../collection.json');

describe('ng-add schematic - module-based apps', () => {
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
    standalone: false, // Force module-based app for testing
  };

  const defaultOptions: NgAddOptions = {
    project: 'test-app',
    skipPackageJson: false,
  };

  let runner: SchematicTestRunner;
  let appTree: UnitTestTree;

  beforeEach(async () => {
    runner = new SchematicTestRunner('schematics', collectionPath);

    // Create a basic Angular workspace and app
    const workspaceTree = await runner.runExternalSchematic('@schematics/angular', 'workspace', workspaceOptions);
    appTree = await runner.runExternalSchematic('@schematics/angular', 'application', appOptions, workspaceTree);
  });

  describe('with default options', () => {
    it('should add Daffodil dependencies to package.json', async () => {
      const tree = await runner.runSchematic('ng-add', defaultOptions, appTree);
      const packageJson = JSON.parse(tree.readContent('/package.json'));

      expect(packageJson.dependencies['@daffodil/core']).toBeDefined();
      expect(packageJson.dependencies['@daffodil/driver']).toBeDefined();
      expect(packageJson.dependencies['@daffodil/product']).toBeDefined();
    });

    it('should create app-routing.module.ts', async () => {
      const tree = await runner.runSchematic('ng-add', defaultOptions, appTree);
      const routingModuleExists = tree.exists('/projects/test-app/src/app/app-routing.module.ts');

      expect(routingModuleExists).toBe(true);
    });

    it('should add providers to app-module.ts', async () => {
      const tree = await runner.runSchematic('ng-add', defaultOptions, appTree);
      const appModuleContent = tree.readContent('/projects/test-app/src/app/app-module.ts');

      expect(appModuleContent).toContain('provideHttpClient()');
      expect(appModuleContent).toContain('provideDaffInMemoryDriver({ apiBase: \'daff-in-memory-web-api\', passThroughUnknownRequests: true})');
      expect(appModuleContent).toContain('provideDaffProductInMemoryDriver()');
      expect(appModuleContent).toContain('provideDaffProductDriver(DynamicSwitchDriverService)');
    });

    it('should generate properly formatted providers without syntax errors', async () => {
      const tree = await runner.runSchematic('ng-add', defaultOptions, appTree);
      const appModuleContent = tree.readContent('/projects/test-app/src/app/app-module.ts');

      // Verify no malformed provider strings
      expect(appModuleContent).not.toContain('Map, Map, Map');
      expect(appModuleContent).not.toContain('Driver,');
      expect(appModuleContent).not.toContain(',,'); // No double commas

      // Verify proper formatting of complex provider
      expect(appModuleContent).toContain('provideDaffDevTools({');
      expect(appModuleContent).toContain('startCollapsed: false');
      expect(appModuleContent).toContain('withDriverConfig({');

      // Verify all driver configurations are properly structured
      expect(appModuleContent).toContain('id: \'in-memory\'');
      expect(appModuleContent).toContain('id: \'magento\'');
      expect(appModuleContent).toContain('id: \'shopify\'');
      expect(appModuleContent).toContain('disabled: true');
    });

  });

  describe('with skipPackageJson option', () => {
    it('should not modify package.json when skipPackageJson is true', async () => {
      const options: NgAddOptions = {
        ...defaultOptions,
        skipPackageJson: true,
      };

      const originalPackageJson = appTree.readContent('/package.json');
      const tree = await runner.runSchematic('ng-add', options, appTree);
      const modifiedPackageJson = tree.readContent('/package.json');

      expect(modifiedPackageJson).toBe(originalPackageJson);
    });
  });

  describe('error cases', () => {
    it('should throw an error if project is not found', async () => {
      const options: NgAddOptions = {
        ...defaultOptions,
        project: 'non-existent-project',
      };

      try {
        await runner.runSchematic('ng-add', options, appTree);
        fail('Expected schematic to throw an error');
      } catch (error: any) {
        expect(error.message).toContain('Project "non-existent-project" not found.');
      }
    });
  });
});
