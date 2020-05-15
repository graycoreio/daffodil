export interface DaffSizeable<T extends DaffSizeAllType> {
	size: T;
}

export type DaffSizeXSmallType = 'xs'
export type DaffSizeSmallType = 'sm'
export type DaffSizeMediumType = 'md'
export type DaffSizeLargeType = 'lg'
export type DaffSizeXLargeType = 'xl'

export type DaffSizeAllType = DaffSizeXSmallType | DaffSizeSmallType | DaffSizeMediumType | DaffSizeLargeType | DaffSizeXLargeType;

export enum DaffSizeableEnum {
  XSmall = 'xs',
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
  XLarge = 'xl'
}