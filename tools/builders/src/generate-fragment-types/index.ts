import { BuilderContext, BuilderOutput, createBuilder } from '@angular-devkit/architect';
import { JsonObject } from '@angular-devkit/core';
import { generate } from '@graphql-codegen/cli';

interface Options extends JsonObject {
  url: string;
  path: string;
}

const success = () => ({success: true});
const failure = error => ({
  success: false,
  error
});

export default createBuilder(generateFragmentTypesBuilder);

function generateFragmentTypesBuilder(
  options: Options,
  context: BuilderContext,
): Promise<BuilderOutput> {
  return generate({
    schema: options.url,
    generates: {
      [options.path]: {
        plugins: ['fragment-matcher']
      }
    }
  }).then(success, failure);
}
