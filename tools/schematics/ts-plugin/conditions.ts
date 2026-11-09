import {
  existsSync,
  readFileSync,
} from 'node:fs';
import {
  dirname,
  join,
  normalize,
  relative,
  resolve,
} from 'node:path';

import { daffVersioningComputeConditions } from '../versioning/compute-conditions';
import { DaffVersioningProject } from '../versioning/project.type';

/**
 * The configuration of the plugin, set in the `compilerOptions.plugins` entry of a `tsconfig.json`.
 */
export interface DaffCommerceTsPluginConfig extends Partial<DaffVersioningProject> {
  /**
   * The project whose build target holds the `drivers` and `packages` options.
   * Either the project's root relative to the workspace root (e.g. `apps/shop`)
   * or, for `angular.json` workspaces, the project's name.
   * Defaults to the nearest project above the tsconfig whose build target sets `drivers`.
   */
  project?: string;
  /**
   * The name of the build target. Defaults to `build`.
   */
  target?: string;
}

interface TargetConfig {
  options?: Partial<DaffVersioningProject>;
}

const readJson = (path: string): any => existsSync(path) ? JSON.parse(readFileSync(path, 'utf-8')) : undefined;

/**
 * Finds the nearest directory at or above `dir` that contains an `angular.json` or `nx.json`.
 */
const findWorkspaceRoot = (dir: string): string | undefined => {
  for (let current = resolve(dir); ; current = dirname(current)) {
    if (existsSync(join(current, 'angular.json')) || existsSync(join(current, 'nx.json'))) {
      return current;
    }
    if (dirname(current) === current) {
      return undefined;
    }
  }
};

const hasDrivers = (options: Partial<DaffVersioningProject> | undefined): options is DaffVersioningProject =>
  !!options?.drivers;

/**
 * Reads the build target options of a project referenced by root or by `angular.json` name.
 */
const readProjectOptions = (workspaceRoot: string, project: string, target: string): Partial<DaffVersioningProject> | undefined => {
  const angularProjects: Record<string, { root?: string; architect?: Record<string, TargetConfig>; targets?: Record<string, TargetConfig> }> =
    readJson(join(workspaceRoot, 'angular.json'))?.projects ?? {};
  const angularProject = angularProjects[project]
    ?? Object.values(angularProjects).find((p) => normalize(p.root ?? '') === normalize(project));
  if (angularProject) {
    return (angularProject.architect ?? angularProject.targets)?.[target]?.options;
  }

  const nxProject: { targets?: Record<string, TargetConfig> } | undefined = readJson(join(workspaceRoot, project, 'project.json'));
  return nxProject?.targets?.[target]?.options;
};

/**
 * Finds the nearest project at or above `dir` whose build target sets `drivers`.
 */
const findProjectOptions = (workspaceRoot: string, dir: string, target: string): Partial<DaffVersioningProject> | undefined => {
  for (let current = resolve(dir); ; current = dirname(current)) {
    const projectRoot = relative(workspaceRoot, current);
    if (projectRoot.startsWith('..')) {
      return undefined;
    }
    const options = readProjectOptions(workspaceRoot, projectRoot, target);
    if (hasDrivers(options)) {
      return options;
    }
    if (current === workspaceRoot) {
      return undefined;
    }
  }
};

/**
 * Determines the driver conditions for the TypeScript project in `projectDir`.
 */
export const daffCommerceTsPluginConditions = (config: DaffCommerceTsPluginConfig, projectDir: string): Array<string> => {
  const workspaceRoot = findWorkspaceRoot(projectDir);
  if (!workspaceRoot) {
    throw new Error(`Could not find an angular.json or nx.json at or above ${projectDir}.`);
  }
  const target = config.target ?? 'build';
  const options = hasDrivers(config)
    ? config
    : config.project
      ? readProjectOptions(workspaceRoot, config.project, target)
      : findProjectOptions(workspaceRoot, projectDir, target);
  if (!hasDrivers(options)) {
    throw new Error(config.project
      ? `The ${target} target of ${config.project} does not set drivers.`
      : `Could not find a project at or above ${projectDir} whose ${target} target sets drivers. Set the plugin's project option.`);
  }
  return daffVersioningComputeConditions(options, workspaceRoot);
};
