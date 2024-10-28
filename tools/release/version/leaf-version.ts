import * as fs from 'fs';
import {
  series,
  src,
  dest,
} from 'gulp';
import * as through2 from 'through2';
import * as util from 'util';

import { RELEASE_CONFIG } from '../config';

interface PackageJson {
  name: string;
  version: string;
  devDependencies?: {
    [key: string]: string;
  };
  optionalDependencies?: {
    [key: string]: string;
  };
  peerDependencies?: {
    [key: string]: string;
  };
  dependencies?: {
    [key: string]: string;
  };
}

const readFile = util.promisify(fs.readFile);

const updateObjectFromObject = (a: any, b: any): typeof a => ({
  ...a,
  ...Object.keys(b).filter((k) => k in a).reduce((obj, key) => {
    obj[key] = b[key];
    return obj;
  }, {}),
});

export const getRootPackage = (): Promise<PackageJson> => readFile(RELEASE_CONFIG.ROOT_PACKAGE, { encoding: 'utf8' }).then(d => JSON.parse(d));

const updateLeafPackageVersions = async (): Promise<any> => {
  const rootPackage = await getRootPackage();
  await new Promise(resolve =>
    src(RELEASE_CONFIG.DIST + '/*/package.json')
      .pipe(
        through2.obj((file, _, cb) => {
          if (file.isBuffer()) {
            let data = <PackageJson>JSON.parse(file.contents.toString());
            data = transfomLeafPackage(data, rootPackage);
            file.contents = Buffer.from(JSON.stringify(data, null, 2));
          }
          cb(null, file);
        }),
      )
      .pipe(dest(RELEASE_CONFIG.DIST))
      .on('end', resolve));
};

/**
 * We don't distribute the dev dependencies of the libraries, so we remove them.
 */
const deleteDevDependencies = (packageObject: PackageJson) => {
  delete packageObject.devDependencies;
  return packageObject;
};

/**
 * Set the versions in the @daffodil packages with the package values from root.
 * We follow a uniform and consistent versioning process, so all packages
 * will always be held at the same version.
 */
const updatePackageVersion = (lib: PackageJson, rootPackage: PackageJson) => {
  lib.version = rootPackage.version;
  return lib;
};

/**
 * For the library dependencies, set their dependency values from the root.
 */
const updateDependenciesFromRoot = (lib: PackageJson, rootPackage: PackageJson) => {
  // we want to check all deps for versions
  const rootDeps = {
    ...rootPackage.dependencies,
    ...rootPackage.devDependencies,
    ...rootPackage.optionalDependencies,
    ...rootPackage.peerDependencies,
  };
  if(lib.peerDependencies){
    lib.peerDependencies = updateObjectFromObject(lib.peerDependencies, rootDeps);
  }
  if(lib.optionalDependencies){
    lib.optionalDependencies = updateObjectFromObject(lib.optionalDependencies, rootDeps);
  }
  return lib;
};

const createDaffodilDependenciesObject = (dependencies: Record<string, string>, version: string) => Object.keys(dependencies).filter((k) => k.includes('@daffodil'))
  .reduce((obj, key) => {
    obj[key] = version;
    return obj;
  }, {});

/**
 * For the Daffodil package dependencies, peer changes are treated specially
 * during framework version updates. This is inconsistent with typical semver
 * practices, but necessary for the framework as a whole to remain consistently
 * versioned.
 * See: https://github.com/semver/semver/issues/502
 *
 * As a few sample cases:
 * 1. We're releasing v8.1.1, the set value would be 8.1.1
 * 2. We're releasing v2.6.4, the set value would be 2.6.4
 * 3. We're releasing v2.9.4, the set value would be 2.9.4
 * 4. We're releasing v0.9.8, the set value would be v0.9.8
 * 5. We're releasing 1.1.0-alpha.1, the set value would be 1.1.0-alpha.1
 */
const updateDaffodilPeerDependenciesFromNewVersion = (lib: PackageJson, rootPackage: PackageJson)  => {
  if(!lib.peerDependencies) {
    return lib;
  }
  lib.peerDependencies = updateObjectFromObject(lib.peerDependencies, createDaffodilDependenciesObject(lib.peerDependencies, rootPackage.version));
  return lib;
};

const updateDaffodilOptionalDependenciesFromNewVersion = (lib: PackageJson, rootPackage: PackageJson)  => {
  if(!lib.optionalDependencies) {
    return lib;
  }
  lib.optionalDependencies = updateObjectFromObject(lib.optionalDependencies, createDaffodilDependenciesObject(lib.optionalDependencies, rootPackage.version));
  return lib;
};

const validateNoRemainingPlaceholders = (lib: PackageJson) => {
  const placeholders = [
    'devDependencies',
    'optionalDependencies',
    'peerDependencies',
    'dependencies',
  ].reduce((acc, depType) => {
    if (lib[depType]) {
      return acc.concat(Object.keys(lib[depType]).filter(dep => lib[depType][dep] === '0.0.0-PLACEHOLDER'));
    }

    return acc;
  }, []);

  if (placeholders.length > 0) {
    throw new Error(`Placeholder found in distributable package ${lib.name} after transformation; deps: ${placeholders}`);
  };

  return lib;
};

function transfomLeafPackage(lib: PackageJson, rootPackage: PackageJson) {
  lib = deleteDevDependencies(lib);
  lib = updatePackageVersion(lib, rootPackage);
  lib = updateDependenciesFromRoot(lib, rootPackage);
  lib = updateDaffodilPeerDependenciesFromNewVersion(lib, rootPackage);
  lib = updateDaffodilOptionalDependenciesFromNewVersion(lib, rootPackage);
  lib = validateNoRemainingPlaceholders(lib);
  return lib;
};

export const leafVersion = series(
  updateLeafPackageVersions,
);
