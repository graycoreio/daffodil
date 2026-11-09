import {
  DevServerBuilderOptions,
  executeDevServerBuilder,
} from '@angular/build';
import {
  Builder,
  BuilderContext,
  createBuilder,
  Target,
  targetFromTargetString,
} from '@angular-devkit/architect';
import { json } from '@angular-devkit/core';

import { DaffVersioningProject } from './project.type';
import {
  daffVersioningApplyConditions,
  daffVersioningResolveConditions,
} from './resolve-conditions';

export const DAFF_APPLICATION_BUILDER = '@daffodil/commerce:application';
const ANGULAR_APPLICATION_BUILDER = '@angular/build:application';

const isSameTarget = (a: Target, b: Target) =>
  a.project === b.project && a.target === b.target && a.configuration === b.configuration;

/**
 * Creates a context that presents the build target to the angular dev server
 * as a `@angular/build:application` target with the given options.
 */
export const createDevServerContext = (context: BuilderContext, buildTarget: Target, buildOptions: json.JsonObject): BuilderContext => ({
  ...context,
  getBuilderNameForTarget: async (target) =>
    isSameTarget(target, buildTarget) ? ANGULAR_APPLICATION_BUILDER : context.getBuilderNameForTarget(target),
  getTargetOptions: async (target) =>
    isSameTarget(target, buildTarget) ? structuredClone(buildOptions) : context.getTargetOptions(target),
});

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
    createDevServerContext(context, buildTarget, <json.JsonObject><unknown>daffVersioningApplyConditions(buildOptions, conditions)),
  );
});

export default builder;
