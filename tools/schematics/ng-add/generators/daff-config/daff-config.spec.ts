import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';
import { firstValueFrom } from 'rxjs';

import { DaffJson } from '@daffodil/cli/versioning';

import {
  addBuildCondition,
  createDaffJson,
} from './daff-config';
import { NgAddOptions } from '../../schema';

const collectionPath = path.join(__dirname, '../../../collection.json');

const TEST_DRIVER_VERSION = '2.4.3';

const buildAngularJson = (projectName: string) => ({
  version: 1,
  newProjectRoot: 'projects',
  projects: {
    [projectName]: {
      projectType: 'application',
      root: `projects/${projectName}`,
      sourceRoot: `projects/${projectName}/src`,
      architect: {
        build: {
          builder: '@angular-devkit/build-angular:application',
          options: {},
          configurations: {
            production: {},
          },
        },
      },
    },
  },
});

describe('createDaffJson', () => {
  let tree: Tree;
  const projectName = 'test-app';

  beforeEach(() => {
    tree = Tree.empty();
  });

  it('creates daff.json with the magento version when driver is magento', () => {
    const options: NgAddOptions = { project: projectName, driver: 'magento', driverVersion: TEST_DRIVER_VERSION };
    const rule = createDaffJson(options, projectName);

    rule(tree, <any>{ logger: { warn: () => undefined }});

    expect(tree.exists('daff.json')).toBe(true);
    const body: DaffJson = JSON.parse(tree.read('daff.json')?.toString() ?? '');
    expect(body.drivers?.magento).toBe(TEST_DRIVER_VERSION);
  });

  it('creates daff.json without driver projects for the demo driver', () => {
    const options: NgAddOptions = { project: projectName, driver: 'demo' };
    const rule = createDaffJson(options, projectName);

    rule(tree, <any>{ logger: { warn: () => undefined }});

    expect(tree.exists('daff.json')).toBe(true);
    const body: DaffJson = JSON.parse(tree.read('daff.json')?.toString() ?? '');
    expect(body.drivers).toEqual({});
  });

  it('does not create daff.json for shopify or in-memory drivers', () => {
    for (const driver of <const>['shopify', 'in-memory']) {
      const scopedTree = Tree.empty();
      const options: NgAddOptions = { project: projectName, driver };
      const rule = createDaffJson(options, projectName);

      rule(scopedTree, <any>{ logger: { warn: () => undefined }});

      expect(scopedTree.exists('daff.json')).toBe(false);
    }
  });

  it('leaves an existing daff.json untouched', () => {
    const existing = '{"drivers":{"magento":"2.4.1"}}\n';
    tree.create('daff.json', existing);
    const options: NgAddOptions = { project: projectName, driver: 'magento', driverVersion: TEST_DRIVER_VERSION };
    const rule = createDaffJson(options, projectName);

    rule(tree, <any>{ logger: { warn: () => undefined }});

    expect(tree.read('daff.json')?.toString()).toBe(existing);
  });
});

describe('addBuildCondition', () => {
  const projectName = 'test-app';
  let runner: SchematicTestRunner;
  let tree: Tree;

  const magentoDriverJson = JSON.stringify({
    drivers: { magento: TEST_DRIVER_VERSION },
  });

  beforeEach(() => {
    runner = new SchematicTestRunner('schematics', collectionPath);
    tree = Tree.empty();
    tree.create('/angular.json', JSON.stringify(buildAngularJson(projectName), null, 2));
  });

  it('adds the build conditions derived from daff.json for the magento driver', async () => {
    tree.create('daff.json', magentoDriverJson);
    const options: NgAddOptions = { project: projectName, driver: 'magento', driverVersion: TEST_DRIVER_VERSION };
    const rule = addBuildCondition(options, projectName);

    const resultTree = await firstValueFrom(runner.callRule(rule, tree));

    const angular = JSON.parse(resultTree.read('/angular.json')?.toString() ?? '');
    const conditions = angular.projects[projectName].architect.build.options?.conditions;
    expect(conditions).toEqual(['order-magento-2.4.1', 'external-router-magento-2.4.3']);
  });

  it('adds no conditions when daff.json does not exist in the tree', async () => {
    const options: NgAddOptions = { project: projectName, driver: 'magento', driverVersion: TEST_DRIVER_VERSION };
    const rule = addBuildCondition(options, projectName);

    const resultTree = await firstValueFrom(runner.callRule(rule, tree));

    const angular = JSON.parse(resultTree.read('/angular.json')?.toString() ?? '');
    expect(angular.projects[projectName].architect.build.options?.conditions).toBeUndefined();
  });

  it('adds no conditions for the demo driver', async () => {
    tree.create('daff.json', JSON.stringify({ projects: {}}));
    const options: NgAddOptions = { project: projectName, driver: 'demo' };
    const rule = addBuildCondition(options, projectName);

    const resultTree = await firstValueFrom(runner.callRule(rule, tree));

    const angular = JSON.parse(resultTree.read('/angular.json')?.toString() ?? '');
    expect(angular.projects[projectName].architect.build.options?.conditions).toBeUndefined();
  });

  it('leaves conditions untouched for shopify or in-memory drivers', async () => {
    for (const driver of <const>['shopify', 'in-memory']) {
      const scopedTree = Tree.empty();
      scopedTree.create('/angular.json', JSON.stringify(buildAngularJson(projectName), null, 2));
      const options: NgAddOptions = { project: projectName, driver };
      const rule = addBuildCondition(options, projectName);

      const resultTree = await firstValueFrom(runner.callRule(rule, scopedTree));

      const angular = JSON.parse(resultTree.read('/angular.json')?.toString() ?? '');
      expect(angular.projects[projectName].architect.build.options?.conditions).toBeUndefined();
    }
  });

  it('overwrites existing conditions when syncing', async () => {
    const baseline = buildAngularJson(projectName);
    (<any>baseline.projects[projectName].architect.build.options).conditions = ['stale-condition'];
    tree.overwrite('/angular.json', JSON.stringify(baseline, null, 2));
    tree.create('daff.json', magentoDriverJson);

    const options: NgAddOptions = { project: projectName, driver: 'magento', driverVersion: TEST_DRIVER_VERSION };
    const rule = addBuildCondition(options, projectName);

    const resultTree = await firstValueFrom(runner.callRule(rule, tree));

    const angular = JSON.parse(resultTree.read('/angular.json')?.toString() ?? '');
    const conditions = angular.projects[projectName].architect.build.options?.conditions;
    expect(conditions).toEqual(['order-magento-2.4.1', 'external-router-magento-2.4.3']);
  });
});
