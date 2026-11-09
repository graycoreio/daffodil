import {
  BuilderContext,
  Target,
} from '@angular-devkit/architect';
import { json } from '@angular-devkit/core';

import { createDevServerContext } from './dev-server-builder';

const BUILD_TARGET: Target = { project: 'app', target: 'build', configuration: 'development' };
const OTHER_TARGET: Target = { project: 'app', target: 'test' };

describe('@daffodil/commerce/versioning | dev server builder', () => {
  describe('createDevServerContext', () => {
    const originalOptions: json.JsonObject = { browser: 'src/main.ts', drivers: { magento: '2.4.1' }};
    const buildOptions: json.JsonObject = { browser: 'src/main.ts', conditions: ['some-package-magento-2.4.1']};
    let context: BuilderContext;

    beforeEach(() => {
      context = <BuilderContext><unknown>{
        getBuilderNameForTarget: async () => '@daffodil/commerce:application',
        getTargetOptions: async () => originalOptions,
      };
    });

    it('reports the build target as using the angular application builder', async () => {
      expect(await createDevServerContext(context, BUILD_TARGET, buildOptions).getBuilderNameForTarget(BUILD_TARGET)).toEqual('@angular/build:application');
    });

    it('returns the given options for the build target', async () => {
      expect(await createDevServerContext(context, BUILD_TARGET, buildOptions).getTargetOptions(BUILD_TARGET)).toEqual(buildOptions);
    });

    it('does not let the dev server mutate the given options', async () => {
      const devServerContext = createDevServerContext(context, BUILD_TARGET, buildOptions);
      (await devServerContext.getTargetOptions(BUILD_TARGET))['browser'] = 'changed';

      expect(await devServerContext.getTargetOptions(BUILD_TARGET)).toEqual(buildOptions);
    });

    it('delegates other targets to the original context', async () => {
      const devServerContext = createDevServerContext(context, BUILD_TARGET, buildOptions);

      expect(await devServerContext.getBuilderNameForTarget(OTHER_TARGET)).toEqual('@daffodil/commerce:application');
      expect(await devServerContext.getTargetOptions(OTHER_TARGET)).toEqual(originalOptions);
    });
  });

});
