import {
  Tree,
  Rule,
} from '@angular-devkit/schematics';
import {
  addPackageJsonDependency,
  NodeDependency,
  NodeDependencyType,
} from '@schematics/angular/utility/dependencies';

import { NgAddOptions } from '../schema';
import { version } from './version';

export function addDependenciesToPackageJson(options: NgAddOptions): Rule {
  return (tree: Tree) => {
    const dependencies: NodeDependency[] = [
      { type: NodeDependencyType.Default, version: `^${version}`, name: '@daffodil/core' },
      { type: NodeDependencyType.Default, version: `^${version}`, name: '@daffodil/driver' },
      { type: NodeDependencyType.Default, version: `^${version}`, name: '@daffodil/product' },
      { type: NodeDependencyType.Default, version: `^${version}`, name: '@daffodil/dev-tools' },
      { type: NodeDependencyType.Default, version: `^${version}`, name: '@daffodil/navigation' },
      { type: NodeDependencyType.Default, version: `^${version}`, name: '@daffodil/external-router' },
      { type: NodeDependencyType.Dev, version: `^${version}`, name: '@daffodil/cli' },
    ];

    dependencies.forEach(dependency => {
      addPackageJsonDependency(tree, dependency);
    });

    return tree;
  };
}
