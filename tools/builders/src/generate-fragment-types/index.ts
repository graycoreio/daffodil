import {
  BuilderContext,
  BuilderOutput,
  createBuilder,
} from '@angular-devkit/architect';
import { JsonObject } from '@angular-devkit/core';
import { generate } from '@graphql-codegen/cli';
import { join } from 'node:path';

interface Options extends JsonObject {
  url: string;
  path: string;
}

const success = () => ({ success: true });
const failure = error => ({
  success: false,
  error,
});
const noopPromise: Promise<{success: boolean}> = Promise.resolve(success());

export default createBuilder(generateFragmentTypesBuilder);

function generateFragmentTypesBuilder(
  options: Options,
  context: BuilderContext,
): Promise<BuilderOutput> {
  return options.url && options.path ? generate({
    schema: options.url,
    generates: {
      [join(context.workspaceRoot, options.path)]: {
        plugins: ['fragment-matcher'],
      },
    },
  }).then(success, failure) : noopPromise;
}
