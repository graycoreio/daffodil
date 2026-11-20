import {
  UnitTestBuilderOptions,
  executeUnitTestBuilder,
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
 * Returns an error message if the requested test runner cannot be used with driver auto versioning.
 *
 * Only the `vitest` runner (the default) is supported. The `karma` runner builds the tests with a fixed
 * set of options that does not include build conditions, so auto versioned driver imports would resolve to
 * their (empty) default entry points.
 */
export const daffVersioningValidateUnitTestRunner = (runner: string | undefined): string | null =>
  runner === undefined || runner === 'vitest'
    ? null
    : `The "@daffodil/commerce:unit-test" builder only supports the "vitest" runner; received "${runner}". `
      + `Angular's karma runner does not pass build conditions to the test build, so auto versioned drivers cannot be resolved.`;

/**
 * A builder which wraps `@angular/build:unit-test` and enables the automatic managing of the
 * build conditions needed to support the driver auto versioning feature.
 *
 * Only the `vitest` runner is supported; see {@link daffVersioningValidateUnitTestRunner}.
 *
 * The `buildTarget` should use the `@daffodil/commerce:application` builder;
 * driver versions are read from that target's options.
 * See {@link DaffVersioningProject} for configuration options.
 */
const builder: Builder<any> = createBuilder(async function* (options: UnitTestBuilderOptions, context: BuilderContext) {
  const runnerError = daffVersioningValidateUnitTestRunner(options.runner);
  if (runnerError) {
    context.logger.error(runnerError);
    return { success: false };
  }

  const project = context.target?.project;
  if (!project) {
    context.logger.error(`The "unit-test" builder requires a target to be specified.`);
    return { success: false };
  }

  const buildTarget = targetFromTargetString(options.buildTarget ?? '::development', project, 'build');
  if (await context.getBuilderNameForTarget(buildTarget) !== DAFF_APPLICATION_BUILDER) {
    context.logger.warn(`The build target does not use ${DAFF_APPLICATION_BUILDER}; driver conditions will not be applied.`);
    yield* executeUnitTestBuilder(options, context);
    return;
  }

  const buildOptions = <DaffVersioningProject & json.JsonObject><unknown>(await context.getTargetOptions(buildTarget));
  const conditions = await daffVersioningResolveConditions(buildOptions, context);
  context.logger.info(`Running unit tests with the following conditions: ${conditions}`);

  yield* executeUnitTestBuilder(
    options,
    daffVersioningCreateBuildTargetContext(context, buildTarget, <json.JsonObject><unknown>daffVersioningApplyConditions(buildOptions, conditions)),
  );
});

export default builder;
