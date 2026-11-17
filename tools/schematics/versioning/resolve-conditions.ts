import { BuilderContext } from '@angular-devkit/architect';

import { daffVersioningComputeConditions } from './compute-conditions';
import { DaffVersioningProject } from './project.type';

/**
 * Collects the available auto versioned drivers and computes the build conditions
 * that satisfy the requested driver versions.
 *
 * First party daffodil packages are always searched; `options.packages` adds third party drivers.
 */
export const daffVersioningResolveConditions = async (options: DaffVersioningProject, context: BuilderContext): Promise<Array<string>> =>
  daffVersioningComputeConditions(options, context.workspaceRoot);

/**
 * Converts options for a daffodil versioning builder into options for the wrapped angular builder.
 * Removes the daffodil specific options and merges the computed conditions with any existing ones.
 */
export const daffVersioningApplyConditions = <T extends { conditions?: Array<string> }>(
  options: T & Partial<DaffVersioningProject>,
  conditions: Array<string>,
): T => {
  const { drivers, packages, ...rest } = options;
  return <T>{
    ...rest,
    conditions: conditions.concat(options.conditions ?? []),
  };
};
