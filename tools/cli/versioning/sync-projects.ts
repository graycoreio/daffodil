import { workspaces } from '@angular-devkit/core';
import type { ProjectDefinition } from '@angular-devkit/core/src/workspace/definitions';
import type {
  ProjectConfiguration,
  TargetConfiguration,
} from '@nx/devkit';

import { DaffJson } from './daff-json.type';
import { magentoFindSupportedVersion } from './magento/public_api';
import { DaffPackagePlatformVersions } from './packages.type';
import { DAFF_VERSIONING_PLATFORMS } from './platforms.const';
import { isSupportedPlatform } from './validate-platform';

export interface AngularWorkspace {
  name: string;
  angular: ProjectDefinition;
}

export interface NxProject {
  name: string;
  nx: ProjectConfiguration;
}

export const syncProjects = <T extends AngularWorkspace | NxProject = AngularWorkspace | NxProject>(daff: DaffJson, project: T, packages: DaffPackagePlatformVersions): T => {
  if (daff.drivers) {
    for (const [platform, version] of Object.entries(daff.drivers)) {
      if (!version) {
        throw new Error(
          `Project '${project.name}', platform ${platform} in daff.json is missing a driver version; cannot sync.`,
        );
      }
      if (!isSupportedPlatform(platform)) {
        throw new Error(`${platform} is unsupported. Supported platforms are ${DAFF_VERSIONING_PLATFORMS.join(', ')}`);
      }
      let target: workspaces.TargetDefinition | TargetConfiguration;
      if ('angular' in project) {
        const t = project.angular.targets.get('build');
        if (!t) {
          throw new Error(`Build configuration not found in '${project.name}'`);
        }
        target = t;
      } else {
        // allow project names to omit the scope
        const t = project.nx?.targets?.build;
        if (!t) {
          throw new Error(`Nx build configuration not found for '${project.name}'. Ensure that the project.json exists and has the name field defined.`);
        }
        target = t;
      }

      if (packages[platform]) {
        const conditions = Object.entries(packages[platform]).reduce((acc, [packageName, versions]) => {
          if (platform === 'magento') {
            const supportedVersion = magentoFindSupportedVersion(versions, version);
            if (supportedVersion) {
              acc.push(`${packageName}-${platform}-${supportedVersion}`);
            } else {
              console.warn(`No supported ${platform} version found for @daffodil/${packageName}. Supported versions are ${versions}`);
            }
          }
          return acc;
        }, <Array<string>>[]);
        target.options ??= {};
        target.options.conditions = conditions;
      }
    }
  }

  return project;
};
