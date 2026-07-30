import packageVersions from './packages.json';
import { DaffPackagePlatformVersions } from './packages.type';

export { DaffJson } from './daff-json.type';
export { DAFF_JSON_DEFAULT } from './default-daff-json.const';
export { DaffPackagePlatformVersions } from './packages.type';
export { DAFF_VERSIONING_PLATFORMS } from './platforms.const';
export { DaffVersioningPlatform } from './platform.type';
export { DaffVersionString } from './version.type';
export { isSupportedPlatform } from './validate-platform';
export { getDriverVersion } from './get-driver-version';
export {
  syncProjects,
  AngularWorkspace,
  NxProject,
} from './sync-projects';
export const packagesJson: DaffPackagePlatformVersions = <any>packageVersions;

export * from './magento/public_api';
export * from './semantic/public_api';
