import {
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'fs';
import { tmpdir } from 'os';
import {
  dirname,
  join,
} from 'path';
import * as ts from 'typescript';

import { daffCommerceTsPluginConditions } from './conditions';
import init from './index';

const write = (path: string, content: unknown) => {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, typeof content === 'string' ? content : JSON.stringify(content));
};

const writeFixturePackage = (root: string) => {
  const dir = join(root, 'node_modules', '@daffodil', 'fixture');
  write(join(dir, 'package.json'), {
    name: '@daffodil/fixture',
    exports: {
      './driver/magento/auto': {
        'fixture-magento-2.4.7': { types: './v247.d.ts', default: './v247.js' },
        types: './auto.d.ts',
        default: './auto.js',
      },
    },
  });
  write(join(dir, 'v247.d.ts'), 'export declare const DRIVER: string;');
  write(join(dir, 'auto.d.ts'), 'export {};');
};

const shopBuildTarget = (options: object) => ({
  targets: {
    build: {
      executor: '@daffodil/commerce:application',
      options,
    },
  },
});

describe('@daffodil/commerce/ts-plugin', () => {
  let root: string;

  beforeEach(() => {
    root = mkdtempSync(join(tmpdir(), 'daff-ts-plugin-'));
    writeFixturePackage(root);
    write(join(root, 'nx.json'), {});
  });

  afterEach(() => {
    rmSync(root, { recursive: true, force: true });
  });

  describe('daffCommerceTsPluginConditions', () => {
    it('reads the drivers from the nearest project above the tsconfig', () => {
      write(join(root, 'apps', 'shop', 'project.json'), shopBuildTarget({ drivers: { magento: '2.4.7-p10' }}));

      expect(daffCommerceTsPluginConditions({}, join(root, 'apps', 'shop', 'src'))).toEqual(['fixture-magento-2.4.7']);
    });

    it('reads the drivers from the configured project root', () => {
      write(join(root, 'apps', 'shop', 'project.json'), shopBuildTarget({ drivers: { magento: '2.4.7' }}));

      expect(daffCommerceTsPluginConditions({ project: 'apps/shop' }, join(root, 'libs', 'feature'))).toEqual(['fixture-magento-2.4.7']);
    });

    it('reads the drivers from the configured target', () => {
      write(join(root, 'apps', 'shop', 'project.json'), { targets: { compile: { options: { drivers: { magento: '2.4.7' }}}}});

      expect(daffCommerceTsPluginConditions({ project: 'apps/shop', target: 'compile' }, root)).toEqual(['fixture-magento-2.4.7']);
    });

    it('reads the drivers from an angular.json project by name or root', () => {
      rmSync(join(root, 'nx.json'));
      write(join(root, 'angular.json'), {
        version: 1,
        projects: {
          shop: {
            root: 'projects/shop',
            architect: { build: { builder: '@daffodil/commerce:application', options: { drivers: { magento: '2.4.7' }}}},
          },
        },
      });

      expect(daffCommerceTsPluginConditions({ project: 'shop' }, root)).toEqual(['fixture-magento-2.4.7']);
      expect(daffCommerceTsPluginConditions({}, join(root, 'projects', 'shop', 'src'))).toEqual(['fixture-magento-2.4.7']);
    });

    it('uses drivers set in the plugin config', () => {
      expect(daffCommerceTsPluginConditions({ drivers: { magento: '2.4.7' }}, root)).toEqual(['fixture-magento-2.4.7']);
    });

    it('throws when no project sets drivers', () => {
      write(join(root, 'libs', 'feature', 'project.json'), shopBuildTarget({}));

      expect(() => daffCommerceTsPluginConditions({}, join(root, 'libs', 'feature'))).toThrowError(/Set the plugin's project option/);
    });

    it('throws when there is no workspace', () => {
      rmSync(join(root, 'nx.json'));

      expect(() => daffCommerceTsPluginConditions({}, root)).toThrowError(/Could not find an angular.json or nx.json/);
    });
  });

  describe('language service plugin', () => {
    let projectDir: string;
    let mainFile: string;
    let logs: Array<string>;

    const createLanguageService = (compilerOptions: ts.CompilerOptions) => {
      const host: ts.LanguageServiceHost = {
        getCompilationSettings: () => compilerOptions,
        getScriptFileNames: () => [mainFile],
        getScriptVersion: () => '1',
        getScriptSnapshot: (fileName) => ts.sys.fileExists(fileName) ? ts.ScriptSnapshot.fromString(readFileSync(fileName, 'utf-8')) : undefined,
        getCurrentDirectory: () => projectDir,
        getDefaultLibFileName: ts.getDefaultLibFilePath,
        fileExists: ts.sys.fileExists,
        readFile: ts.sys.readFile,
        readDirectory: ts.sys.readDirectory,
        directoryExists: ts.sys.directoryExists,
        getDirectories: ts.sys.getDirectories,
        realpath: ts.sys.realpath,
      };
      return { host, languageService: ts.createLanguageService(host) };
    };

    const applyPlugin = (host: ts.LanguageServiceHost, languageService: ts.LanguageService, config: object = {}) =>
      init({ typescript: ts }).create(<ts.server.PluginCreateInfo><unknown>{
        config,
        languageService,
        languageServiceHost: host,
        project: {
          getCurrentDirectory: () => projectDir,
          getProjectName: () => join(projectDir, 'tsconfig.json'),
          projectService: { logger: { info: (message: string) => logs.push(message) }},
        },
      });

    const errorCodes = (languageService: ts.LanguageService) =>
      languageService.getSemanticDiagnostics(mainFile).map((d) => d.code);

    beforeEach(() => {
      logs = [];
      projectDir = join(root, 'apps', 'shop');
      mainFile = join(projectDir, 'src', 'main.ts');
      write(join(projectDir, 'project.json'), shopBuildTarget({ drivers: { magento: '2.4.7-p10' }}));
      write(mainFile, `import { DRIVER } from '@daffodil/fixture/driver/magento/auto';\nexport const driver: string = DRIVER;\n`);
    });

    it('resolves the default auto entrypoint types without the plugin', () => {
      const { languageService } = createLanguageService({ moduleResolution: ts.ModuleResolutionKind.Bundler, module: ts.ModuleKind.ESNext });

      expect(errorCodes(languageService)).toEqual([2305]);
    });

    it('resolves the driver version types selected by the build target drivers', () => {
      const { host, languageService } = createLanguageService({ moduleResolution: ts.ModuleResolutionKind.Bundler, module: ts.ModuleKind.ESNext });
      applyPlugin(host, languageService);

      expect(errorCodes(languageService)).toEqual([]);
      expect(host.getCompilationSettings().customConditions).toEqual(['fixture-magento-2.4.7']);
    });

    it('keeps existing custom conditions', () => {
      const { host, languageService } = createLanguageService({
        moduleResolution: ts.ModuleResolutionKind.Bundler,
        module: ts.ModuleKind.ESNext,
        customConditions: ['custom'],
      });
      applyPlugin(host, languageService);

      expect(host.getCompilationSettings().customConditions).toEqual(['fixture-magento-2.4.7', 'custom']);
    });

    it('logs and leaves the settings unchanged when no drivers are found', () => {
      write(join(projectDir, 'project.json'), shopBuildTarget({}));
      const compilerOptions = { moduleResolution: ts.ModuleResolutionKind.Bundler, module: ts.ModuleKind.ESNext };
      const { host, languageService } = createLanguageService(compilerOptions);
      applyPlugin(host, languageService);

      expect(host.getCompilationSettings()).toBe(compilerOptions);
      expect(logs[0]).toContain('Not applying driver conditions');
    });

    it('warns when the module resolution does not support custom conditions', () => {
      const { host, languageService } = createLanguageService({ moduleResolution: ts.ModuleResolutionKind.Node10 });
      applyPlugin(host, languageService);
      host.getCompilationSettings();

      expect(logs.some((log) => log.includes('customConditions require moduleResolution'))).toBeTrue();
    });
  });
});
