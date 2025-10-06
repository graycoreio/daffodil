import {
  SchematicTestRunner,
  UnitTestTree,
} from '@angular-devkit/schematics/testing';
import { Schema as WorkspaceOptions } from '@schematics/angular/workspace/schema';
import * as path from 'path';

import { addDependenciesToPackageJson } from './generators/dependencies';
import { NgAddOptions } from './schema';

const collectionPath = path.join(__dirname, '../collection.json');

describe('Utils', () => {
  describe('addDependenciesToPackageJson', () => {
    let runner: SchematicTestRunner;
    let tree: UnitTestTree;

    beforeEach(async () => {
      runner = new SchematicTestRunner('schematics', collectionPath);

      const workspaceOptions: WorkspaceOptions = {
        name: 'workspace',
        newProjectRoot: 'projects',
        version: '19.0.0',
      };

      tree = await runner.runExternalSchematic('@schematics/angular', 'workspace', workspaceOptions);
    });

    it('should add core dependencies', async () => {
      const options: NgAddOptions = {
        project: 'test-project',
        skipPackageJson: false,
      };

      const rule = addDependenciesToPackageJson(options);
      const resultTree = <UnitTestTree>rule(tree, <any>{});
      const packageJson = JSON.parse(resultTree.readContent('/package.json'));

      expect(packageJson.dependencies['@daffodil/core']).toBeDefined();
      expect(packageJson.dependencies['@daffodil/driver']).toBeDefined();
      expect(packageJson.dependencies['@daffodil/product']).toBeDefined();
    });
  });
});
