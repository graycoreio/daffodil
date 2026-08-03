import {
  Architect,
  Target,
} from '@angular-devkit/architect';
import { TestingArchitectHost } from '@angular-devkit/architect/testing';
import {
  logging,
  schema,
} from '@angular-devkit/core';
import {
  mkdirSync,
  mkdtempSync,
  rmSync,
} from 'fs';
import {
  readFile,
  writeFile,
} from 'fs/promises';
import { tmpdir } from 'os';
import { join } from 'path';

import builder from './sync-builder';

const BUILDER_NAME = 'test:sync';

const scheduleSync = async (workspaceRoot: string, options: any, target?: Target) => {
  const registry = new schema.CoreSchemaRegistry();
  registry.addPostTransform(schema.transforms.addUndefinedDefaults);
  const architectHost = new TestingArchitectHost(workspaceRoot);
  const architect = new Architect(architectHost, registry);
  architectHost.addBuilder(BUILDER_NAME, builder);

  const logger = new logging.Logger('test');
  const warnings: Array<string> = [];
  logger.subscribe((entry) => {
    if (entry.level === 'warn') {
      warnings.push(entry.message);
    }
  });

  const run = target
    ? (architectHost.addTarget(target, BUILDER_NAME), await architect.scheduleTarget(target, options, { logger: <any>logger }))
    : await architect.scheduleBuilder(BUILDER_NAME, options, { logger: <any>logger });

  const output = await run.result;
  await run.stop();

  return { output, warnings };
};

describe('@daffodil/commerce/versioning | syncBuilder', () => {
  let workspaceRoot: string;

  beforeEach(() => {
    workspaceRoot = mkdtempSync(join(tmpdir(), 'daff-sync-builder-'));
  });

  afterEach(() => {
    rmSync(workspaceRoot, { recursive: true, force: true });
  });

  it('fails when neither angular.json nor nx.json exist in the workspace root', async () => {
    const { output } = await scheduleSync(workspaceRoot, { drivers: { magento: '2.4.1' }});

    expect(output.success).toBe(false);
    expect(output.error).toContain(`Could not find angular.json or nx.json in the following directory: ${workspaceRoot}`);
  });

  describe('with an angular.json workspace', () => {
    const writeAngularJson = (projects: Record<string, unknown>) =>
      writeFile(join(workspaceRoot, 'angular.json'), JSON.stringify({ version: 1, projects }));

    it('writes the driver conditions to application projects only', async () => {
      await writeAngularJson({
        'app-a': {
          root: 'apps/app-a',
          projectType: 'application',
          architect: { build: { builder: '@angular/build:application', options: {}}},
        },
        'lib-a': {
          root: 'libs/lib-a',
          projectType: 'library',
          architect: { build: { builder: '@angular-devkit/build-ng-packagr:build', options: {}}},
        },
      });

      const { output } = await scheduleSync(workspaceRoot, { drivers: { magento: '2.4.1' }});

      expect(output.success).toBe(true);
      const angularJson = JSON.parse(await readFile(join(workspaceRoot, 'angular.json'), 'utf-8'));
      expect(angularJson.projects['app-a'].architect.build.options.conditions).toEqual([
        'order-magento-2.4.1',
        'external-router-magento-2.4.1',
      ]);
      expect(angularJson.projects['lib-a'].architect.build.options.conditions).toBeUndefined();
    });

    it('only syncs the project scoped by the target', async () => {
      await writeAngularJson({
        'app-a': {
          root: 'apps/app-a',
          projectType: 'application',
          architect: { build: { builder: '@angular/build:application', options: {}}},
        },
        'app-b': {
          root: 'apps/app-b',
          projectType: 'application',
          architect: { build: { builder: '@angular/build:application', options: {}}},
        },
      });

      await scheduleSync(workspaceRoot, { drivers: { magento: '2.4.1' }}, { project: 'app-a', target: 'sync' });

      const angularJson = JSON.parse(await readFile(join(workspaceRoot, 'angular.json'), 'utf-8'));
      expect(angularJson.projects['app-a'].architect.build.options.conditions).toEqual([
        'order-magento-2.4.1',
        'external-router-magento-2.4.1',
      ]);
      expect(angularJson.projects['app-b'].architect.build.options.conditions).toBeUndefined();
    });

    it('warns and skips a project that fails to sync, while still writing the rest of the workspace', async () => {
      await writeAngularJson({
        'app-a': {
          root: 'apps/app-a',
          projectType: 'application',
          architect: { build: { builder: '@angular/build:application', options: {}}},
        },
        'app-broken': {
          root: 'apps/app-broken',
          projectType: 'application',
          architect: {},
        },
      });

      const { output, warnings } = await scheduleSync(workspaceRoot, { drivers: { magento: '2.4.1' }});

      expect(output.success).toBe(true);
      expect(warnings).toEqual(['Failed to update project config for app-broken, skipping.']);
      const angularJson = JSON.parse(await readFile(join(workspaceRoot, 'angular.json'), 'utf-8'));
      expect(angularJson.projects['app-a'].architect.build.options.conditions).toEqual([
        'order-magento-2.4.1',
        'external-router-magento-2.4.1',
      ]);
    });
  });

  describe('with an nx.json workspace', () => {
    const writeNxProject = async (path: string, project: Record<string, unknown>) => {
      mkdirSync(join(workspaceRoot, path), { recursive: true });
      await writeFile(join(workspaceRoot, path, 'project.json'), JSON.stringify(project));
    };

    beforeEach(() => writeFile(join(workspaceRoot, 'nx.json'), '{}'));

    it('writes the driver conditions to application projects only', async () => {
      await writeNxProject('apps/app-a', {
        name: 'app-a',
        projectType: 'application',
        targets: { build: { executor: '@angular/build:application', options: {}}},
      });
      await writeNxProject('libs/lib-a', {
        name: 'lib-a',
        projectType: 'library',
        targets: { build: { executor: '@nx/js:tsc', options: {}}},
      });

      const { output } = await scheduleSync(workspaceRoot, { drivers: { magento: '2.4.1' }});

      expect(output.success).toBe(true);
      const appA = JSON.parse(await readFile(join(workspaceRoot, 'apps/app-a/project.json'), 'utf-8'));
      expect(appA.nx.targets.build.options.conditions).toEqual([
        'order-magento-2.4.1',
        'external-router-magento-2.4.1',
      ]);
      const libA = JSON.parse(await readFile(join(workspaceRoot, 'libs/lib-a/project.json'), 'utf-8'));
      expect(libA.targets.build.options.conditions).toBeUndefined();
    });

    it('only syncs the project scoped by the target', async () => {
      await writeNxProject('apps/app-a', {
        name: 'app-a',
        projectType: 'application',
        targets: { build: { executor: '@angular/build:application', options: {}}},
      });
      await writeNxProject('apps/app-b', {
        name: 'app-b',
        projectType: 'application',
        targets: { build: { executor: '@angular/build:application', options: {}}},
      });

      await scheduleSync(workspaceRoot, { drivers: { magento: '2.4.1' }}, { project: 'app-a', target: 'sync' });

      const appA = JSON.parse(await readFile(join(workspaceRoot, 'apps/app-a/project.json'), 'utf-8'));
      expect(appA.nx.targets.build.options.conditions).toEqual([
        'order-magento-2.4.1',
        'external-router-magento-2.4.1',
      ]);
      const appB = JSON.parse(await readFile(join(workspaceRoot, 'apps/app-b/project.json'), 'utf-8'));
      expect(appB.targets.build.options.conditions).toBeUndefined();
    });

    it('warns and skips a project that fails to sync, while still writing the rest of the workspace', async () => {
      await writeNxProject('apps/app-a', {
        name: 'app-a',
        projectType: 'application',
        targets: { build: { executor: '@angular/build:application', options: {}}},
      });
      await writeNxProject('apps/app-broken', {
        name: 'app-broken',
        projectType: 'application',
        targets: {},
      });

      const { output, warnings } = await scheduleSync(workspaceRoot, { drivers: { magento: '2.4.1' }});

      expect(output.success).toBe(true);
      expect(warnings).toEqual(['Failed to update project config for app-broken, skipping.']);
      const appA = JSON.parse(await readFile(join(workspaceRoot, 'apps/app-a/project.json'), 'utf-8'));
      expect(appA.nx.targets.build.options.conditions).toEqual([
        'order-magento-2.4.1',
        'external-router-magento-2.4.1',
      ]);
    });
  });
});
