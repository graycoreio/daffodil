import { DaffVersioningPlatform } from './platform.type';
import { DAFF_VERSIONING_PLATFORMS } from './platforms.const';

/**
 * Asserts that the passed platform is supported by the auto versioning feature.
 */
export const daffVersioningIsSupportedPlatform = (driver?: string): driver is DaffVersioningPlatform =>
  !!(driver && DAFF_VERSIONING_PLATFORMS.find((e) => e === driver));
