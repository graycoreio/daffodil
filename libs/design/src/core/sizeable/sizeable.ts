/**
 * An interface for giving a component the ability to customize sizing for component-specific UI.
 * In order to be sizable, a component class must implement this property.
 */

export interface DaffSizeable<T extends DaffSizeAllType> {
  size: T;
}

/**
 * The possible types that can be passed to a component that implements DaffSizeable
 */

export type DaffSizeXSmallType = 'xs';
export type DaffSizeSmallType = 'sm';
export type DaffSizeMediumType = 'md';
export type DaffSizeLargeType = 'lg';
export type DaffSizeXLargeType = 'xl';

export type DaffSizeAllType = DaffSizeXSmallType | DaffSizeSmallType | DaffSizeMediumType | DaffSizeLargeType | DaffSizeXLargeType;

export enum DaffSizeableEnum {
  XSmall = 'xs',
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
  XLarge = 'xl'
}
