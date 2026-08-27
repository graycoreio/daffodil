import { DaffVersioningPlatform } from './platform.type';
import { DAFF_VERSIONING_PLATFORMS } from './platforms.const';

export const isSupportedPlatform = (driver?: string): driver is DaffVersioningPlatform =>
  !!(driver && DAFF_VERSIONING_PLATFORMS.find((e) => e === driver));
