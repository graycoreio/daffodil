/**
 * Interfaces that gives a component the ability to customize sizing for component specific UI.
 */

export interface DaffSizable<T extends DaffSizeAllType> {
  size: T;
}

/**
 * The possible types that can be passed to a component that implements DaffSizable
 */

export type DaffSizeXSmallType = 'xs';
export type DaffSizeSmallType = 'sm';
export type DaffSizeMediumType = 'md';
export type DaffSizeLargeType = 'lg';
export type DaffSizeXLargeType = 'xl';

/**
 * The a type representing all available sizes.
 */
export type DaffSizeAllType = DaffSizeXSmallType | DaffSizeSmallType | DaffSizeMediumType | DaffSizeLargeType | DaffSizeXLargeType;

export enum DaffSizableEnum {
  XSmall = 'xs',
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
  XLarge = 'xl'
}
