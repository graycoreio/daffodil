import { collectPlatformVersionsSync } from './collect-platform-versions';
import { daffVersioningGetConditions } from './get-conditions';
import { DaffVersioningProject } from './project.type';

/**
 * Collects the available auto versioned drivers under the workspace root and computes the build conditions
 * that satisfy the requested driver versions.
 *
 * First party daffodil packages are always searched; `options.packages` adds third party drivers.
 */
export const daffVersioningComputeConditions = (options: DaffVersioningProject, workspaceRoot: string): Array<string> =>
  daffVersioningGetConditions(options, collectPlatformVersionsSync([
    `${workspaceRoot}/node_modules/@daffodil/**`,
    ...options?.packages?.map((p) => `${workspaceRoot}/${p}`) || [],
  ]));
