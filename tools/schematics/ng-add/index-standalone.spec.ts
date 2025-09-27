import {
  SchematicTestRunner,
  UnitTestTree,
} from '@angular-devkit/schematics/testing';
import { Schema as ApplicationOptions } from '@schematics/angular/application/schema';
import { Schema as WorkspaceOptions } from '@schematics/angular/workspace/schema';
import * as path from 'path';

import { NgAddOptions } from './schema';

const collectionPath = path.join(__dirname, '../collection.json');

describe('ng-add schematic - standalone apps', () => {
  const workspaceOptions: WorkspaceOptions = {
    name: 'workspace',
    newProjectRoot: 'projects',
    version: '19.0.0',
  };

  const defaultOptions: NgAddOptions = {
    project: 'test-app',
    skipPackageJson: false,
  };

  let runner: SchematicTestRunner;
  let standaloneAppTree: UnitTestTree;

  beforeEach(async () => {
    runner = new SchematicTestRunner('schematics', collectionPath);

    const standaloneAppOptions: ApplicationOptions = {
      name: 'test-app',
      inlineStyle: false,
      inlineTemplate: false,
      routing: false,
      skipTests: false,
      skipPackageJson: false,
      standalone: true, // Force standalone app
    };

    const workspaceTree = await runner.runExternalSchematic('@schematics/angular', 'workspace', workspaceOptions);
    standaloneAppTree = await runner.runExternalSchematic('@schematics/angular', 'application', standaloneAppOptions, workspaceTree);
  });

  it('should detect standalone application correctly', async () => {
    // Verify that app-module.ts does not exist in standalone app
    expect(standaloneAppTree.exists('/projects/test-app/src/app/app-module.ts')).toBe(false);
    expect(standaloneAppTree.exists('/projects/test-app/src/app/app.config.ts')).toBe(true);
  });

  it('should add core providers to app.config.ts', async () => {
    const tree = await runner.runSchematic('ng-add', defaultOptions, standaloneAppTree);
    const appConfigContent = tree.readContent('/projects/test-app/src/app/app.config.ts');

    expect(appConfigContent).toContain('provideHttpClient');
    expect(appConfigContent).toContain('provideDaffInMemoryDriver');
    expect(appConfigContent).toContain('provideDaffProductDriver');
  });

  it('should handle demo configuration with standalone app', async () => {
    const tree = await runner.runSchematic('ng-add', defaultOptions, standaloneAppTree);
    const appConfigContent = tree.readContent('/projects/test-app/src/app/app.config.ts');

    expect(appConfigContent).toContain('provideDaffInMemoryDriver');
    expect(appConfigContent).toContain('provideDaffProductDriver');
    expect(appConfigContent).toContain('DynamicSwitchDriverService');
  });

  it('should add dependencies to package.json for standalone app', async () => {
    const tree = await runner.runSchematic('ng-add', defaultOptions, standaloneAppTree);
    const packageJson = JSON.parse(tree.readContent('/package.json'));

    expect(packageJson.dependencies['@daffodil/core']).toBeDefined();
    expect(packageJson.dependencies['@daffodil/driver']).toBeDefined();
    expect(packageJson.dependencies['@daffodil/product']).toBeDefined();
  });

  it('should maintain existing standalone app structure', async () => {
    const tree = await runner.runSchematic('ng-add', defaultOptions, standaloneAppTree);

    // Original Angular standalone files should still exist
    expect(tree.exists('/projects/test-app/src/app/app.ts')).toBe(true);
    expect(tree.exists('/projects/test-app/src/app/app.config.ts')).toBe(true);
    expect(tree.exists('/projects/test-app/src/main.ts')).toBe(true);

    // Module file should not be created
    expect(tree.exists('/projects/test-app/src/app/app-module.ts')).toBe(false);
  });

  it('should configure provideDaffDevTools with correct structure', async () => {
    const tree = await runner.runSchematic('ng-add', defaultOptions, standaloneAppTree);
    const appConfigContent = tree.readContent('/projects/test-app/src/app/app.config.ts');

    expect(appConfigContent).toContain('provideDaffDevTools({');
    expect(appConfigContent).toContain('withDriverConfig');
    expect(appConfigContent).toContain('name: \'@daffodil/product/driver\'');
    expect(appConfigContent).toContain('status: \'connected\'');
    expect(appConfigContent).toContain('currentDriver: \'in-memory\'');
  });

  it('should configure all driver types with correct properties', async () => {
    const tree = await runner.runSchematic('ng-add', defaultOptions, standaloneAppTree);
    const appConfigContent = tree.readContent('/projects/test-app/src/app/app.config.ts');

    // In-Memory Driver
    expect(appConfigContent).toContain('id: \'in-memory\'');
    expect(appConfigContent).toContain('name: \'In-Memory Driver\'');

    // Fake Store Driver
    expect(appConfigContent).toContain('id: \'fake\'');
    expect(appConfigContent).toContain('name: \'fakestoreapi.com Driver\'');

    // Magento Driver with properties
    expect(appConfigContent).toContain('id: \'magento\'');
    expect(appConfigContent).toContain('name: \'Magento Driver\'');
    expect(appConfigContent).toContain('baseUrl');
    expect(appConfigContent).toContain('https://www.mymagentostore.com/graphql');
    expect(appConfigContent).toContain('storeCode');
    expect(appConfigContent).toContain('defaultValue: \'default\'');

    // Shopify Driver (disabled)
    expect(appConfigContent).toContain('id: \'shopify\'');
    expect(appConfigContent).toContain('name: \'Shopify Driver (Coming soon!)\'');
    expect(appConfigContent).toContain('disabled: true');
    expect(appConfigContent).toContain('https://myshop.myshopify.com/api/2025-07/graphql.json');
  });

  it('should include all required imports without syntax errors', async () => {
    const tree = await runner.runSchematic('ng-add', defaultOptions, standaloneAppTree);
    const appConfigContent = tree.readContent('/projects/test-app/src/app/app.config.ts');

    // Verify specific import statements are properly formed
    expect(appConfigContent).toContain('import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from \'@angular/core\';');
    expect(appConfigContent).toContain('import { provideHttpClient } from \'@angular/common/http\';');
    expect(appConfigContent).toContain('import { provideDaffDevTools } from \'@daffodil/dev-tools\';');
    expect(appConfigContent).toContain('import { withDriverConfig } from \'@daffodil/dev-tools\';');
    expect(appConfigContent).toContain('DEMO_MAGENTO_ENDPOINT_SWITCH');

    // Verify no malformed imports (no duplicate Map, Driver, etc.)
    expect(appConfigContent).not.toContain('Map, Map, Map');
    expect(appConfigContent).not.toContain('Driver,');
    expect(appConfigContent).not.toContain('from;'); // Incomplete import statements
  });

  it('should generate properly formatted provider configuration', async () => {
    const tree = await runner.runSchematic('ng-add', defaultOptions, standaloneAppTree);
    const appConfigContent = tree.readContent('/projects/test-app/src/app/app.config.ts');

    // Verify proper line breaks and formatting
    expect(appConfigContent).toContain('provideDaffDevTools({');
    expect(appConfigContent).toContain('startCollapsed: false');
    expect(appConfigContent).toContain('withDriverConfig({ ');
    expect(appConfigContent).toContain('name: \'@daffodil/product/driver\'');
    expect(appConfigContent).toContain('availableDrivers: [');

    // Verify proper closing brackets and parentheses
    expect(appConfigContent).toContain('})');
    expect(appConfigContent).toContain('      )');

    // Ensure no malformed concatenation
    expect(appConfigContent).not.toContain('}),provideDaffDevTools'); // No missing spaces
    expect(appConfigContent).not.toContain('})withDriverConfig'); // No missing commas
  });

  it('should generate valid TypeScript syntax', async () => {
    const tree = await runner.runSchematic('ng-add', defaultOptions, standaloneAppTree);
    const appConfigContent = tree.readContent('/projects/test-app/src/app/app.config.ts');

    // Basic syntax validation - these would cause TypeScript compilation errors
    expect(appConfigContent).not.toContain(',,'); // No double commas
    expect(appConfigContent).not.toContain('}}'); // No double closing braces without content
    expect(appConfigContent).not.toContain('))'); // No double closing parentheses without content

    // Verify export statement is properly formed
    expect(appConfigContent).toContain('export const appConfig: ApplicationConfig = {');
    expect(appConfigContent).toMatch(/providers:\s*\[/); // providers array properly opened
    expect(appConfigContent).toMatch(/\]\s*};$/m); // providers array and config properly closed
  });
});
