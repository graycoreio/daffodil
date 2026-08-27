import { workspaces } from '@angular-devkit/core';
import type { ProjectDefinition } from '@angular-devkit/core/src/workspace/definitions';
import type {
  ProjectConfiguration,
  TargetConfiguration,
} from '@nx/devkit';

import { DaffJsonProject } from './daff-json.type';
import { daffVersioningGetConditions } from './get-conditions';
import { DaffPackagePlatformVersions } from './packages.type';

export interface AngularWorkspace {
  name: string;
  angular: ProjectDefinition;
}

export interface NxProject {
  name: string;
  nx: ProjectConfiguration;
}

export const syncProjects = <T extends AngularWorkspace | NxProject = AngularWorkspace | NxProject>(daff: DaffJsonProject, project: T, packages: DaffPackagePlatformVersions): T => {
  if (daff.drivers) {
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
    target.options ??= {};
    target.options.conditions = daffVersioningGetConditions(daff, packages);
  }

  return project;
};
