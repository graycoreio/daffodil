/**
 * @deprecated Deprecated in version 0.92.1. Will be removed in version 1.0.0.
 */

export interface DaffSizable<T extends DaffSizeAllType> {
  size: T;
}

export type DaffSizeXSmallType = 'xs';
export type DaffSizeSmallType = 'sm';
export type DaffSizeMediumType = 'md';
export type DaffSizeLargeType = 'lg';
export type DaffSizeXLargeType = 'xl';

/**
 * All available sizes.
 */
export type DaffSizeAllType = DaffSizeXSmallType | DaffSizeSmallType | DaffSizeMediumType | DaffSizeLargeType | DaffSizeXLargeType;

/**
 * @deprecated Deprecated in version 0.93.0. Will be removed in version 0.96.0.
 *
 * This enum will be removed from the public api in v1.0.0.
 */
export enum DaffSizableEnum {
  XSmall = 'xs',
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
  XLarge = 'xl'
}
