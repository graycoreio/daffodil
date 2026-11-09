import type * as ts from 'typescript';

import {
  DaffCommerceTsPluginConfig,
  daffCommerceTsPluginConditions,
} from './conditions';

const NAME = '@daffodil/commerce/ts-plugin';

/**
 * A TypeScript language service plugin that applies the driver auto versioning build conditions
 * as `customConditions`, so that editors resolve `driver/<platform>/auto` entrypoints to the
 * same driver versions as `@daffodil/commerce:application`.
 *
 * Only editors load language service plugins; `tsc` and the Angular builders do not.
 * The conditions are computed when the TypeScript server starts; restart it after changing drivers or upgrading packages.
 */
function init({ typescript }: { typescript: typeof ts }): ts.server.PluginModule {
  return {
    create(info) {
      const logger = info.project.projectService.logger;
      const log = (message: string) => logger.info(`[${NAME}] ${message}`);

      let conditions: Array<string>;
      try {
        conditions = daffCommerceTsPluginConditions(<DaffCommerceTsPluginConfig>info.config, info.project.getCurrentDirectory());
      } catch (error) {
        log(`Not applying driver conditions to ${info.project.getProjectName()}: ${error instanceof Error ? error.message : error}`);
        return info.languageService;
      }
      log(`Applying driver conditions to ${info.project.getProjectName()}: ${conditions}`);

      const { ModuleResolutionKind } = typescript;
      const host = info.languageServiceHost;
      const getCompilationSettings = host.getCompilationSettings.bind(host);
      let cache: { original: ts.CompilerOptions; patched: ts.CompilerOptions } | undefined;
      host.getCompilationSettings = () => {
        const original = getCompilationSettings();
        if (cache?.original !== original) {
          const resolution = original.moduleResolution;
          if (resolution !== ModuleResolutionKind.Bundler && resolution !== ModuleResolutionKind.Node16 && resolution !== ModuleResolutionKind.NodeNext) {
            log(`customConditions require moduleResolution bundler, node16, or nodenext; driver conditions will have no effect on ${info.project.getProjectName()}.`);
          }
          cache = {
            original,
            patched: {
              ...original,
              customConditions: [...conditions, ...original.customConditions ?? []],
            },
          };
        }
        return cache.patched;
      };

      return info.languageService;
    },
  };
}

export = init;
