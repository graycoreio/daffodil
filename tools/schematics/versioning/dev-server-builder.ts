import {
  DevServerBuilderOptions,
  executeDevServerBuilder,
} from '@angular/build';
import {
  Builder,
  BuilderContext,
  createBuilder,
  targetFromTargetString,
} from '@angular-devkit/architect';
import { json } from '@angular-devkit/core';

import {
  DAFF_APPLICATION_BUILDER,
  daffVersioningCreateBuildTargetContext,
} from './build-target-context';
import { DaffVersioningProject } from './project.type';
import {
  daffVersioningApplyConditions,
  daffVersioningResolveConditions,
} from './resolve-conditions';

/**
 * @deprecated use {@link daffVersioningCreateBuildTargetContext}.
 */
export const createDevServerContext = daffVersioningCreateBuildTargetContext;

/**
 * A builder which wraps `@angular/build:dev-server` and enables the automatic managing of the
 * build conditions needed to support the driver auto versioning feature.
 *
 * The `buildTarget` should use the `@daffodil/commerce:application` builder;
 * driver versions are read from that target's options.
 * See {@link DaffVersioningProject} for configuration options.
 *
 * Dependency prebundling is disabled because Angular does not pass build conditions to Vite's
 * dependency optimizer; prebundled packages would resolve their default exports instead of the
 * conditional driver versions. This only affects the dev server, not production builds.
 */
const builder: Builder<any> = createBuilder(async function* (options: DevServerBuilderOptions, context: BuilderContext) {
  const project = context.target?.project;
  if (!project) {
    context.logger.error(`The "dev-server" builder requires a target to be specified.`);
    return;
  }

  const buildTarget = targetFromTargetString(options.buildTarget ?? '::development', project, 'build');
  if (await context.getBuilderNameForTarget(buildTarget) !== DAFF_APPLICATION_BUILDER) {
    context.logger.warn(`The build target does not use ${DAFF_APPLICATION_BUILDER}; driver conditions will not be applied.`);
    yield* executeDevServerBuilder(options, context);
    return;
  }

  const buildOptions = <DaffVersioningProject & json.JsonObject><unknown>(await context.getTargetOptions(buildTarget));
  const conditions = await daffVersioningResolveConditions(buildOptions, context);
  context.logger.info(`Running dev server with the following conditions: ${conditions}`);

  yield* executeDevServerBuilder(
    {
      ...options,
      prebundle: false,
    },
    daffVersioningCreateBuildTargetContext(context, buildTarget, <json.JsonObject><unknown>daffVersioningApplyConditions(buildOptions, conditions)),
  );
});

export { DAFF_APPLICATION_BUILDER } from './build-target-context';

export default builder;
