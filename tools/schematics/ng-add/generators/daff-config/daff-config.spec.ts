import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';
import { firstValueFrom } from 'rxjs';

import { addBuildCondition } from './daff-config';
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

describe('addBuildCondition', () => {
  const projectName = 'test-app';
  let runner: SchematicTestRunner;
  let tree: Tree;

  beforeEach(() => {
    runner = new SchematicTestRunner('schematics', collectionPath);
    tree = Tree.empty();
    tree.create('/angular.json', JSON.stringify(buildAngularJson(projectName), null, 2));
  });

  it('sets the daffodil commerce builder and driver version for the magento driver', async () => {
    const options: NgAddOptions = { project: projectName, driver: 'magento', driverVersion: TEST_DRIVER_VERSION };
    const rule = addBuildCondition(options, projectName);

    const resultTree = await firstValueFrom(runner.callRule(rule, tree));

    const angular = JSON.parse(resultTree.read('/angular.json')?.toString() ?? '');
    const buildOptions = angular.projects[projectName].architect.build.options;
    expect(buildOptions.builder).toBe('@daffodil/commerce:application');
    expect(buildOptions.drivers).toEqual({ magento: TEST_DRIVER_VERSION });
  });

  it('leaves the build options untouched when no driver version is provided', async () => {
    const options: NgAddOptions = { project: projectName, driver: 'magento' };
    const rule = addBuildCondition(options, projectName);

    const resultTree = await firstValueFrom(runner.callRule(rule, tree));

    const angular = JSON.parse(resultTree.read('/angular.json')?.toString() ?? '');
    expect(angular.projects[projectName].architect.build.options?.builder).toBeUndefined();
  });

  it('leaves the build options untouched for the demo driver', async () => {
    const options: NgAddOptions = { project: projectName, driver: 'demo', driverVersion: TEST_DRIVER_VERSION };
    const rule = addBuildCondition(options, projectName);

    const resultTree = await firstValueFrom(runner.callRule(rule, tree));

    const angular = JSON.parse(resultTree.read('/angular.json')?.toString() ?? '');
    expect(angular.projects[projectName].architect.build.options?.builder).toBeUndefined();
  });

  it('leaves the build options untouched for shopify or in-memory drivers', async () => {
    for (const driver of <const>['shopify', 'in-memory']) {
      const scopedTree = Tree.empty();
      scopedTree.create('/angular.json', JSON.stringify(buildAngularJson(projectName), null, 2));
      const options: NgAddOptions = { project: projectName, driver, driverVersion: TEST_DRIVER_VERSION };
      const rule = addBuildCondition(options, projectName);

      const resultTree = await firstValueFrom(runner.callRule(rule, scopedTree));

      const angular = JSON.parse(resultTree.read('/angular.json')?.toString() ?? '');
      expect(angular.projects[projectName].architect.build.options?.builder).toBeUndefined();
    }
  });

  it('overwrites existing builder and driver options when syncing', async () => {
    const baseline = buildAngularJson(projectName);
    (<any>baseline.projects[projectName].architect.build.options).builder = '@angular-devkit/build-angular:application';
    (<any>baseline.projects[projectName].architect.build.options).drivers = { magento: '2.0.0' };
    tree.overwrite('/angular.json', JSON.stringify(baseline, null, 2));

    const options: NgAddOptions = { project: projectName, driver: 'magento', driverVersion: TEST_DRIVER_VERSION };
    const rule = addBuildCondition(options, projectName);

    const resultTree = await firstValueFrom(runner.callRule(rule, tree));

    const angular = JSON.parse(resultTree.read('/angular.json')?.toString() ?? '');
    const buildOptions = angular.projects[projectName].architect.build.options;
    expect(buildOptions.builder).toBe('@daffodil/commerce:application');
    expect(buildOptions.drivers).toEqual({ magento: TEST_DRIVER_VERSION });
  });
});
