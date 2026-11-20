import {
  BuilderContext,
  Target,
} from '@angular-devkit/architect';
import { json } from '@angular-devkit/core';

export const DAFF_APPLICATION_BUILDER = '@daffodil/commerce:application';
const ANGULAR_APPLICATION_BUILDER = '@angular/build:application';

const isSameTarget = (a: Target, b: Target) =>
  a.project === b.project && a.target === b.target && a.configuration === b.configuration;

/**
 * Creates a context that presents the build target to a wrapped angular builder
 * (e.g. the dev server or unit test builder) as a `@angular/build:application` target with the given options.
 */
export const daffVersioningCreateBuildTargetContext = (context: BuilderContext, buildTarget: Target, buildOptions: json.JsonObject): BuilderContext => ({
  ...context,
  getBuilderNameForTarget: async (target) =>
    isSameTarget(target, buildTarget) ? ANGULAR_APPLICATION_BUILDER : context.getBuilderNameForTarget(target),
  getTargetOptions: async (target) =>
    isSameTarget(target, buildTarget) ? structuredClone(buildOptions) : context.getTargetOptions(target),
});
